var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, CreateBuilder, Property, ChildProperty, NotifyPropertyChanges } from '@syncfusion/ej2-base';
import { Event, EventHandler, KeyboardEvents, Touch } from '@syncfusion/ej2-base';
import { attributes, Animation, isNullOrUndefined } from '@syncfusion/ej2-base';
import { Browser, Collection, setValue, getValue, getUniqueID } from '@syncfusion/ej2-base';
import { select, closest, createElement, detach, append, rippleEffect, isVisible } from '@syncfusion/ej2-base';
import { ListBase } from '@syncfusion/ej2-lists';
import { calculatePosition, isCollide, fit } from '@syncfusion/ej2-popups';
var DOWNARROW = 'downarrow';
var ENTER = 'enter';
var ESCAPE = 'escape';
var FOCUSED = 'e-focused';
var HEADER = 'e-menuheader';
var LEFTARROW = 'leftarrow';
var RIGHTARROW = 'rightarrow';
var RTL = 'e-rtl';
var SELECTED = 'e-selected';
var SEPARATOR = 'e-separator';
var UPARROW = 'uparrow';
var WRAPPER = 'e-contextmenu-wrapper';
var CARET = 'e-caret';
var ITEM = 'e-menu-item';
var DISABLED = 'e-disabled';
var HIDE = 'e-menu-hide';
var ICONS = 'e-icons';
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MenuItem;
}(ChildProperty));
export { MenuItem };
__decorate([
    Property('')
], MenuItem.prototype, "iconCss", void 0);
__decorate([
    Property('')
], MenuItem.prototype, "id", void 0);
__decorate([
    Property(false)
], MenuItem.prototype, "separator", void 0);
__decorate([
    Collection([], MenuItem)
], MenuItem.prototype, "items", void 0);
__decorate([
    Property('')
], MenuItem.prototype, "text", void 0);
__decorate([
    Property('')
], MenuItem.prototype, "url", void 0);
var ContextMenu = (function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.animation = new Animation({});
        _this.navIdx = [];
        _this.isTapHold = false;
        return _this;
    }
    ContextMenu.prototype.preRender = function () {
        if (this.element.tagName === 'EJ-CONTEXTMENU') {
            var ejInst = getValue('ej2_instances', this.element);
            var ul = createElement('ul');
            var wrapper = createElement('EJ-CONTEXTMENU', { className: WRAPPER });
            this.element.parentNode.insertBefore(ul, this.element);
            detach(this.element);
            this.element = ul;
            this.element.classList.add('e-' + this.getModuleName());
            document.body.appendChild(wrapper);
            wrapper.appendChild(this.element);
            setValue('ej2_instances', ejInst, this.element);
            if (!this.element.id) {
                this.element.id = getUniqueID(this.getModuleName());
            }
        }
    };
    ContextMenu.prototype.render = function () {
        this.initWrapper();
        this.renderItems();
        this.wireEvents();
    };
    ContextMenu.prototype.initWrapper = function () {
        var wrapper = this.getWrapper();
        if (!wrapper.classList.contains(WRAPPER)) {
            wrapper = createElement('div', { className: WRAPPER });
            document.body.appendChild(wrapper);
        }
        if (this.cssClass) {
            wrapper.classList.add(this.cssClass);
        }
        if (this.enableRtl) {
            wrapper.classList.add(RTL);
        }
        attributes(this.element, { 'role': 'menu', 'tabindex': '0' });
        wrapper.appendChild(this.element);
        this.element.style.zIndex = this.getZIndex();
    };
    ContextMenu.prototype.renderItems = function () {
        if (!this.items.length) {
            this.items = ListBase.createJsonFromElement(this.element);
            this.element.innerHTML = '';
        }
        var ul = this.createItems(this.items);
        append(Array.prototype.slice.call(ul.children), this.element);
    };
    ContextMenu.prototype.wireEvents = function () {
        var wrapper = this.getWrapper();
        if (this.target) {
            this.targetElem = select(this.target);
            if (Browser.isIos) {
                this.touchModule = new Touch(this.targetElem, { tapHold: this.touchHandler.bind(this) });
            }
            else {
                EventHandler.add(this.targetElem, 'contextmenu', this.cmenuHandler, this);
            }
            for (var _i = 0, _a = this.getScrollableParents(this.targetElem); _i < _a.length; _i++) {
                var parent_1 = _a[_i];
                EventHandler.add(parent_1, 'scroll', this.scrollHandler, this);
            }
        }
        if (!Browser.isDevice) {
            EventHandler.add(wrapper, 'mouseover', this.moverHandler, this);
            EventHandler.add(document, 'mousedown', this.mouseDownHandler, this);
        }
        EventHandler.add(document, 'click', this.clickHandler, this);
        this.keyboardModule = new KeyboardEvents(wrapper, {
            keyAction: this.keyBoardHandler.bind(this),
            keyConfigs: {
                downarrow: DOWNARROW,
                uparrow: UPARROW,
                enter: ENTER,
                leftarrow: LEFTARROW,
                rightarrow: RIGHTARROW,
                escape: ESCAPE
            }
        });
        rippleEffect(wrapper, { selector: '.' + ITEM });
    };
    ContextMenu.prototype.mouseDownHandler = function (e) {
        if (closest(e.target, '.' + WRAPPER) !== this.getWrapper()) {
            this.closeMenu(this.navIdx.length);
        }
    };
    ContextMenu.prototype.getScrollableParents = function (target) {
        var elemStyle = getComputedStyle(target);
        var parentCollection = [];
        var regex = /(auto|scroll)/;
        var parentEle = target.parentElement;
        while (parentEle && parentEle.tagName !== 'HTML') {
            var parentStyle = getComputedStyle(parentEle);
            if (!(elemStyle.position === 'absolute' && parentStyle.position === 'static')
                && regex.test(parentStyle.overflow + parentStyle.overflowY + parentStyle.overflowX)) {
                parentCollection.push(parentEle);
            }
            parentEle = parentEle.parentElement;
        }
        parentCollection.push(document);
        return parentCollection;
    };
    ContextMenu.prototype.keyBoardHandler = function (e) {
        e.preventDefault();
        switch (e.action) {
            case DOWNARROW:
            case UPARROW:
                this.upDownKeyHandler(e);
                break;
            case RIGHTARROW:
                this.rightEnterKeyHandler({ action: RIGHTARROW });
                break;
            case LEFTARROW:
                this.leftEscKeyHandler({ action: LEFTARROW });
                break;
            case ENTER:
                this.rightEnterKeyHandler({ action: ENTER });
                break;
            case ESCAPE:
                this.leftEscKeyHandler({ action: ESCAPE });
                break;
        }
    };
    ContextMenu.prototype.upDownKeyHandler = function (e) {
        var wrapper = this.getWrapper();
        var cul = wrapper.children[this.navIdx.length];
        var defaultIdx = e.action === DOWNARROW ? 0 : cul.childElementCount - 1;
        var fliIdx = defaultIdx;
        var fli = this.getLIByClass(cul, FOCUSED);
        if (fli) {
            fliIdx = this.getIdx(cul, fli);
            fli.classList.remove(FOCUSED);
            e.action === DOWNARROW ? fliIdx++ : fliIdx--;
            if (fliIdx === (e.action === DOWNARROW ? cul.childElementCount : -1)) {
                fliIdx = defaultIdx;
            }
        }
        var cli = cul.children[fliIdx];
        fliIdx = this.isValidLI(cli, fliIdx, e.action);
        cul.children[fliIdx].classList.add(FOCUSED);
        cul.children[fliIdx].focus();
    };
    ContextMenu.prototype.isValidLI = function (cli, index, action) {
        var wrapper = this.getWrapper();
        var cul = wrapper.children[this.navIdx.length];
        if (cli.classList.contains(SEPARATOR) || cli.classList.contains(DISABLED)) {
            action === (DOWNARROW || RIGHTARROW) ? index++ : index--;
        }
        cli = cul.children[index];
        if (cli.classList.contains(SEPARATOR) || cli.classList.contains(DISABLED)) {
            index = this.isValidLI(cli, index, action);
        }
        return index;
    };
    ContextMenu.prototype.rightEnterKeyHandler = function (e) {
        var wrapper = this.getWrapper();
        var cul = wrapper.children[this.navIdx.length];
        var fli = this.getLIByClass(cul, FOCUSED);
        if (fli) {
            var fliIdx = this.getIdx(cul, fli);
            var navIdx = this.navIdx.concat(fliIdx);
            var index = void 0;
            var item = this.getItem(navIdx);
            if (item.items.length) {
                this.openMenu(fli, item, null, null, e);
                fli.classList.remove(FOCUSED);
                fli.classList.add(SELECTED);
                this.trigger('select', { element: fli, item: this.toRawObject([item]) });
                fli.focus();
                this.navIdx.push(fliIdx);
                cul = wrapper.children[this.navIdx.length];
                index = this.isValidLI(cul.children[0], 0, e.action);
                cul.children[index].classList.add(FOCUSED);
                cul.children[index].focus();
            }
            else {
                if (e.action === ENTER) {
                    this.close();
                }
            }
        }
    };
    ContextMenu.prototype.leftEscKeyHandler = function (e) {
        if (this.navIdx.length) {
            var wrapper = this.getWrapper();
            this.closeMenu(this.navIdx.length);
            var cul = wrapper.children[this.navIdx.length];
            var sli = this.getLIByClass(cul, SELECTED);
            sli.setAttribute('aria-expanded', 'false');
            if (sli) {
                sli.classList.remove(SELECTED);
                sli.classList.add(FOCUSED);
                sli.focus();
            }
        }
        else {
            if (e.action === ESCAPE) {
                this.close();
            }
        }
    };
    ContextMenu.prototype.scrollHandler = function (e) {
        this.closeMenu();
    };
    ContextMenu.prototype.touchHandler = function (e) {
        this.isTapHold = true;
        this.cmenuHandler(e.originalEvent);
    };
    ContextMenu.prototype.cmenuHandler = function (e) {
        e.preventDefault();
        this.closeMenu();
        if (this.canOpen(e.target)) {
            if (e.changedTouches) {
                this.openMenu(null, null, e.changedTouches[0].clientY, e.changedTouches[0].clientX, e);
            }
            else {
                this.openMenu(null, null, e.clientY, e.clientX, e);
            }
        }
    };
    ContextMenu.prototype.close = function () {
        this.closeMenu();
    };
    ContextMenu.prototype.closeMenu = function (ulIndex) {
        if (ulIndex === void 0) { ulIndex = 0; }
        if (this.isMenuVisible()) {
            var wrapper = this.getWrapper();
            var items = void 0;
            for (var cnt = wrapper.childElementCount; cnt > ulIndex; cnt--) {
                this.toggleAnimation(wrapper.children[cnt - 1], false);
                items = this.getItems(this.navIdx);
                this.navIdx.length = ulIndex ? ulIndex - 1 : ulIndex;
                this.trigger('onClose', { items: items });
            }
        }
    };
    ContextMenu.prototype.isMenuVisible = function () {
        return (this.navIdx.length > 0 || isVisible(this.element).valueOf());
    };
    ContextMenu.prototype.canOpen = function (target) {
        var canOpen = true;
        if (this.filter) {
            canOpen = false;
            var filter = this.filter.split(' ');
            for (var i = 0, len = target.classList.length; i < len; i++) {
                if (filter.indexOf(target.classList[i]) > -1) {
                    canOpen = true;
                    break;
                }
            }
        }
        return canOpen;
    };
    ContextMenu.prototype.open = function (top, left) {
        this.openMenu(null, null, top, left);
    };
    ContextMenu.prototype.openMenu = function (li, item, top, left, e) {
        if (top === void 0) { top = 0; }
        if (left === void 0) { left = 0; }
        if (e === void 0) { e = null; }
        var ul;
        var navIdx;
        var liItem;
        var beforeOpenEventArgs;
        var wrapper = this.getWrapper();
        if (li) {
            ul = this.createItems(item.items);
            if (Browser.isDevice) {
                wrapper.lastChild.style.display = 'none';
                var data = { text: item.text, iconCss: ICONS + ' e-previous' };
                var hdata = new MenuItem(this.items[0], null, data, true);
                var hli = this.createItem([hdata], true, 'menu', true);
                ul.insertBefore(hli, ul.children[0]);
            }
            ul.style.zIndex = this.element.style.zIndex;
            wrapper.appendChild(ul);
        }
        else {
            ul = this.element;
        }
        navIdx = this.getIndex(li ? li.textContent : null);
        liItem = li ? this.getItem(navIdx) : null;
        beforeOpenEventArgs = { element: ul, items: li ? item.items : this.getItems([]), parentItem: liItem, event: e, cancel: false };
        this.trigger('beforeOpen', beforeOpenEventArgs);
        if (!beforeOpenEventArgs.cancel) {
            this.setPosition(li, ul, top, left);
            this.toggleAnimation(ul);
        }
    };
    ContextMenu.prototype.createItem = function (item, showIcon, moduleName, isHeader) {
        if (isHeader === void 0) { isHeader = true; }
        var listOpt = { showIcon: showIcon, moduleName: moduleName };
        if (isHeader) {
            listOpt.itemClass = HEADER;
        }
        var li = ListBase.createListItemFromJson(this.toRawObject(item), listOpt, 0, true);
        return li[0];
    };
    ContextMenu.prototype.setPosition = function (li, ul, top, left) {
        var px = 'px';
        if (ul === this.element) {
            this.toggleVisiblity(ul);
            var collide = isCollide(ul, null, left, top);
            if (collide.indexOf('right') > -1) {
                left = left - ul.offsetWidth;
            }
            if (collide.indexOf('bottom') > -1) {
                var offset = fit(ul, null, { X: false, Y: true }, { top: top, left: left });
                top = offset.top;
            }
            collide = isCollide(ul, null, left, top);
            if (collide.indexOf('left') > -1) {
                var offset = fit(ul, null, { X: true, Y: false }, { top: top, left: left });
                left = offset.left;
            }
            this.toggleVisiblity(ul, false);
        }
        else {
            if (Browser.isDevice) {
                top = Number(this.element.style.top.replace(px, ''));
                left = Number(this.element.style.left.replace(px, ''));
            }
            else {
                var x = this.enableRtl ? 'left' : 'right';
                var offset = calculatePosition(li, x, 'top');
                top = offset.top;
                left = offset.left;
                this.toggleVisiblity(ul);
                var collide = isCollide(ul, null, this.enableRtl ? left - ul.offsetWidth : left, top);
                this.toggleVisiblity(ul, false);
                if (collide.length) {
                    offset = calculatePosition(li, this.enableRtl ? 'right' : 'left', 'top');
                    left = offset.left;
                }
                if (this.enableRtl || collide.length) {
                    this.toggleVisiblity(ul);
                    left = (this.enableRtl && collide.length) ? left : left - ul.offsetWidth;
                    this.toggleVisiblity(ul, false);
                }
            }
        }
        ul.style.top = top + px;
        ul.style.left = left + px;
    };
    ContextMenu.prototype.toggleVisiblity = function (ul, isVisible) {
        if (isVisible === void 0) { isVisible = true; }
        ul.style.visibility = isVisible ? 'hidden' : '';
        ul.style.display = isVisible ? 'block' : 'none';
    };
    ContextMenu.prototype.createItems = function (items) {
        var _this = this;
        var showIcon = this.hasField(items, 'iconCss');
        var listBaseOptions = {
            showIcon: showIcon,
            moduleName: 'menu',
            itemCreating: function (args) {
                args.curData.htmlAttributes = {
                    role: 'menuitem',
                    tabindex: '-1'
                };
                if (showIcon && !args.curData.iconCss) {
                    args.curData.iconCss = ICONS + ' e-blankicon';
                }
            },
            itemCreated: function (args) {
                if (args.curData.separator) {
                    args.item.classList.remove(ITEM);
                    args.item.classList.add(SEPARATOR);
                    args.item.removeAttribute('role');
                }
                if (args.curData.items && args.curData.items.length) {
                    var span = createElement('span', { className: ICONS + ' ' + CARET });
                    args.item.appendChild(span);
                    args.item.setAttribute('aria-haspopup', 'true');
                    args.item.setAttribute('aria-expanded', 'false');
                    args.item.removeAttribute('role');
                    args.item.classList.add('e-menu-caret-icon');
                }
                _this.trigger('beforeItemRender', { data: args.curData, item: args.item });
            }
        };
        var ul = ListBase.createList(this.toRawObject(items.slice()), listBaseOptions, true);
        ul.setAttribute('tabindex', '0');
        return ul;
    };
    ContextMenu.prototype.toRawObject = function (items) {
        var item;
        var menuItems = [];
        for (var i = 0, len = items.length; i < len; i++) {
            item = items[i].properties;
            menuItems.push(item);
        }
        return menuItems;
    };
    ContextMenu.prototype.moverHandler = function (e) {
        var wrapper = this.getWrapper();
        var trgt = e.target;
        var cli = this.getLI(trgt);
        if (cli && closest(cli, '.' + WRAPPER)) {
            var fli = select('.' + FOCUSED, wrapper);
            if (fli) {
                fli.classList.remove(FOCUSED);
            }
            cli.classList.add(FOCUSED);
            if (!this.showItemOnClick) {
                this.clickHandler(e);
            }
        }
    };
    ContextMenu.prototype.hasField = function (items, field) {
        for (var i = 0, len = items.length; i < len; i++) {
            if (items[i][field]) {
                return true;
            }
        }
        return false;
    };
    ContextMenu.prototype.getWrapper = function () {
        return this.element.parentElement;
    };
    ContextMenu.prototype.clickHandler = function (e) {
        if (this.isTapHold) {
            this.isTapHold = false;
        }
        else {
            var wrapper = this.getWrapper();
            var trgt = e.target;
            var cli = this.getLI(trgt);
            if (cli && e.type === 'click' && !cli.querySelector('.' + CARET)) {
                this.setLISelected(cli);
                var navIdx = this.getIndex(cli.textContent);
                var item = this.getItem(navIdx);
                this.trigger('select', { element: cli, item: item });
            }
            if (cli && closest(cli, '.' + WRAPPER) && (e.type === 'mouseover' || Browser.isDevice || this.showItemOnClick)) {
                var ul = void 0;
                if (cli.classList.contains(HEADER)) {
                    ul = wrapper.children[this.navIdx.length - 1];
                    this.toggleAnimation(ul);
                    this.trigger('onOpen', { element: ul });
                    var sli = this.getLIByClass(ul, SELECTED);
                    if (sli) {
                        sli.classList.remove(SELECTED);
                    }
                    detach(cli.parentNode);
                    this.navIdx.pop();
                }
                else {
                    if (!cli.classList.contains(SEPARATOR)) {
                        var showSubMenu = true;
                        var cul = cli.parentNode;
                        var cliIdx = this.getIdx(cul, cli);
                        if (!Browser.isDevice) {
                            var culIdx = this.getIdx(wrapper, cul);
                            if (this.navIdx[culIdx] === cliIdx) {
                                showSubMenu = false;
                            }
                            if (culIdx !== this.navIdx.length && (e.type !== 'mouseover' || showSubMenu)) {
                                var sli = this.getLIByClass(cul, SELECTED);
                                if (sli) {
                                    sli.classList.remove(SELECTED);
                                }
                                this.closeMenu(culIdx + 1);
                            }
                        }
                        if (showSubMenu) {
                            var count = 0;
                            var idx = this.navIdx.concat(cliIdx);
                            for (var i = 0; i < idx.length; i++) {
                                if (isNullOrUndefined(idx[i])) {
                                    count = i;
                                }
                            }
                            if (!isNullOrUndefined(idx[count])) {
                                var item = this.getItem(idx);
                                if (item.items.length) {
                                    this.setLISelected(cli);
                                    var navIdx = this.getIndex(cli.textContent);
                                    var liItem = this.getItem(navIdx);
                                    this.trigger('select', { element: cli, item: liItem });
                                    cli.setAttribute('aria-expanded', 'true');
                                    this.openMenu(cli, item, null, null, e);
                                    this.navIdx.push(cliIdx);
                                }
                                else {
                                    if (e.type !== 'mouseover') {
                                        this.closeMenu();
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else {
                if (trgt.tagName !== 'UL' || trgt.parentElement !== wrapper) {
                    if (!cli || !cli.querySelector('.' + CARET)) {
                        this.closeMenu();
                    }
                }
            }
        }
    };
    ContextMenu.prototype.setLISelected = function (li) {
        var sli = this.getLIByClass(li.parentElement, SELECTED);
        if (sli) {
            sli.classList.remove(SELECTED);
        }
        li.classList.remove(FOCUSED);
        li.classList.add(SELECTED);
    };
    ContextMenu.prototype.getLIByClass = function (ul, classname) {
        for (var i = 0, len = ul.children.length; i < len; i++) {
            if (ul.children[i].classList.contains(classname)) {
                return ul.children[i];
            }
        }
        return null;
    };
    ContextMenu.prototype.getItem = function (navIdx) {
        navIdx = navIdx.slice();
        var idx = navIdx.pop();
        var items = this.getItems(navIdx);
        return items[idx];
    };
    ContextMenu.prototype.getItems = function (navIdx) {
        var items = this.items;
        for (var i = 0; i < navIdx.length; i++) {
            items = items[navIdx[i]].items;
        }
        return items;
    };
    ContextMenu.prototype.getIdx = function (ul, li, skipHdr) {
        if (skipHdr === void 0) { skipHdr = true; }
        var idx = Array.prototype.indexOf.call(ul.children, li);
        if (skipHdr && ul.children[0].classList.contains(HEADER)) {
            idx--;
        }
        return idx;
    };
    ContextMenu.prototype.getLI = function (elem) {
        if (elem.tagName === 'LI') {
            return elem;
        }
        return closest(elem, 'li');
    };
    ContextMenu.prototype.onPropertyChanged = function (newProp, oldProp) {
        var wrapper = this.getWrapper();
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'cssClass':
                    if (oldProp.cssClass) {
                        wrapper.classList.remove(oldProp.cssClass);
                    }
                    if (newProp.cssClass) {
                        wrapper.classList.add(newProp.cssClass);
                    }
                    break;
                case 'enableRtl':
                    wrapper.classList.toggle(RTL);
                    break;
                case 'filter':
                    this.closeMenu();
                    this.filter = newProp.filter;
                    break;
                case 'showItemOnClick':
                    this.unWireEvents();
                    this.showItemOnClick = newProp.showItemOnClick;
                    this.wireEvents();
                    break;
                case 'target':
                    this.unWireEvents();
                    this.target = newProp.target;
                    this.wireEvents();
                    break;
            }
        }
    };
    ContextMenu.prototype.unWireEvents = function () {
        var wrapper = this.getWrapper();
        if (this.targetElem) {
            if (Browser.isIos) {
                this.touchModule.destroy();
            }
            else {
                EventHandler.remove(this.targetElem, 'contextmenu', this.cmenuHandler);
            }
            for (var _i = 0, _a = this.getScrollableParents(this.targetElem); _i < _a.length; _i++) {
                var parent_2 = _a[_i];
                EventHandler.remove(parent_2, 'scroll', this.scrollHandler);
            }
        }
        if (!Browser.isDevice) {
            EventHandler.remove(wrapper, 'mouseover', this.moverHandler);
            EventHandler.remove(document, 'mousedown', this.mouseDownHandler);
        }
        EventHandler.remove(document, 'click', this.clickHandler);
        this.keyboardModule.destroy();
    };
    ContextMenu.prototype.toggleAnimation = function (ul, isMenuOpen) {
        var _this = this;
        if (isMenuOpen === void 0) { isMenuOpen = true; }
        if (this.animationSettings.effect === 'None' || !isMenuOpen) {
            this.end(ul, isMenuOpen);
        }
        else {
            this.animation.animate(ul, {
                name: this.animationSettings.effect,
                duration: this.animationSettings.duration,
                timingFunction: this.animationSettings.easing,
                begin: function (options) {
                    if (isMenuOpen) {
                        options.element.style.display = 'block';
                        options.element.style.maxHeight = options.element.getBoundingClientRect().height + 'px';
                    }
                },
                end: function (options) {
                    _this.end(options.element, isMenuOpen);
                }
            });
        }
    };
    ContextMenu.prototype.end = function (ul, isMenuOpen) {
        if (isMenuOpen) {
            ul.style.display = 'block';
            this.trigger('onOpen', { element: ul });
            if (ul.querySelector('.' + FOCUSED)) {
                ul.querySelector('.' + FOCUSED).focus();
            }
            else {
                var ele = void 0;
                ele = this.getWrapper().children[this.getIdx(this.getWrapper(), ul) - 1];
                if (ele) {
                    ele.querySelector('.' + SELECTED).focus();
                }
                else {
                    this.element.focus();
                }
            }
        }
        else {
            if (ul === this.element) {
                var fli = this.getLIByClass(this.element, FOCUSED);
                if (fli) {
                    fli.classList.remove(FOCUSED);
                }
                var sli = this.getLIByClass(this.element, SELECTED);
                if (sli) {
                    sli.classList.remove(SELECTED);
                }
                ul.style.display = 'none';
            }
            else {
                detach(ul);
            }
        }
    };
    ContextMenu.prototype.getPersistData = function () {
        return '';
    };
    ContextMenu.prototype.getModuleName = function () {
        return 'contextmenu';
    };
    ContextMenu.prototype.checkIndex = function (data, items) {
        var index = -1;
        for (var i = 0; i < items.length; i++) {
            if (items[i].text === data) {
                index = i;
            }
        }
        return index;
    };
    ContextMenu.prototype.getIndex = function (data) {
        var _this = this;
        var index = [];
        var count = 0;
        var indexCount = 0;
        var items = this.items;
        index.push(this.checkIndex(data, items));
        if (index.indexOf(-1) < 0) {
            return index;
        }
        else {
            index = [];
            items = items.filter(function (item) { return item.items.length > 0; });
            items.forEach(function (item) {
                index.push(_this.items.indexOf(item));
                index.push(_this.checkIndex(data, item.items));
            });
            if (index.indexOf(-1) < 0) {
                return index;
            }
            else {
                index.pop();
                var _loop_1 = function (k) {
                    var itemss;
                    itemss = items[k].items;
                    itemss.forEach(function (item) {
                        index.push(itemss.indexOf(item));
                        index.push(_this.checkIndex(data, item.items));
                        if (index.indexOf(-1) > -1) {
                            index.pop();
                            index.pop();
                        }
                    });
                };
                for (var k = 0; k < items.length; k++) {
                    _loop_1(k);
                }
            }
        }
        return index;
    };
    ContextMenu.prototype.enableItems = function (items, enable) {
        if (enable === void 0) { enable = true; }
        var ul;
        var idx;
        var navIdx;
        var disabled = DISABLED;
        var wrapper = this.getWrapper();
        for (var i = 0; i < items.length; i++) {
            navIdx = this.getIndex(items[i]);
            idx = navIdx.pop();
            ul = wrapper.children[navIdx.length];
            if (ul) {
                if (enable) {
                    if (Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
                        ul.children[idx + 1].classList.remove(disabled);
                    }
                    else {
                        ul.children[idx].classList.remove(disabled);
                    }
                }
                else {
                    if (Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
                        ul.children[idx + 1].classList.add(disabled);
                    }
                    else {
                        ul.children[idx].classList.add(disabled);
                    }
                }
            }
        }
    };
    ContextMenu.prototype.showItems = function (items) {
        this.showHideItems(items, false);
    };
    ContextMenu.prototype.hideItems = function (items) {
        this.showHideItems(items, true);
    };
    ContextMenu.prototype.showHideItems = function (items, ishide) {
        var ul;
        var idx;
        var navIdx;
        var wrapper = this.getWrapper();
        for (var i = 0; i < items.length; i++) {
            navIdx = this.getIndex(items[i]);
            idx = navIdx.pop();
            ul = wrapper.children[navIdx.length];
            if (ul) {
                if (ishide) {
                    if (Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
                        ul.children[idx + 1].classList.add(HIDE);
                    }
                    else {
                        ul.children[idx].classList.add(HIDE);
                    }
                }
                else {
                    if (Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
                        ul.children[idx + 1].classList.remove(HIDE);
                    }
                    else {
                        ul.children[idx].classList.remove(HIDE);
                    }
                }
            }
        }
    };
    ContextMenu.prototype.removeItems = function (items) {
        var idx;
        var navIdx;
        var iitems;
        for (var i = 0; i < items.length; i++) {
            navIdx = this.getIndex(items[i]);
            idx = navIdx.pop();
            iitems = this.getItems(navIdx);
            iitems.splice(idx, 1);
            if (!navIdx.length) {
                detach(this.element.children[idx]);
            }
        }
    };
    ContextMenu.prototype.insertAfter = function (items, text) {
        this.insertItems(items, text);
    };
    ContextMenu.prototype.insertBefore = function (items, text) {
        this.insertItems(items, text, false);
    };
    ContextMenu.prototype.insertItems = function (items, text, isAfter) {
        if (isAfter === void 0) { isAfter = true; }
        var li;
        var idx;
        var navIdx;
        var iitems;
        var menuitem;
        var showIcon;
        for (var i = 0; i < items.length; i++) {
            navIdx = this.getIndex(text);
            idx = navIdx.pop();
            iitems = this.getItems(navIdx);
            menuitem = new MenuItem(iitems[0], null, items[i], true);
            iitems.splice(isAfter ? idx + 1 : idx, 0, menuitem);
            if (!navIdx.length) {
                idx = isAfter ? idx + 1 : idx;
                showIcon = this.hasField(iitems, 'iconCss');
                li = this.createItem([menuitem], showIcon, 'menu', false);
                this.element.insertBefore(li, this.element.children[idx]);
            }
        }
    };
    ContextMenu.prototype.getZIndex = function () {
        var index;
        var position;
        var props;
        var zIndex = ['999'];
        for (var i = 0, len = document.body.children.length; i < len; i++) {
            props = document.defaultView.getComputedStyle(document.body.children[i]);
            index = props.getPropertyValue('z-index');
            position = props.getPropertyValue('position');
            if (index !== 'auto' && position !== 'static') {
                zIndex.push(index);
            }
        }
        return (Math.max.apply(Math, zIndex) + 1).toString();
    };
    ContextMenu.prototype.destroy = function () {
        var _this = this;
        var wrapper = this.getWrapper();
        _super.prototype.destroy.call(this);
        this.unWireEvents();
        this.closeMenu();
        this.element.innerHTML = '';
        ['top', 'left', 'display', 'role', 'tabindex'].forEach(function (key) {
            _this.element.style.removeProperty(key);
        });
        wrapper.parentNode.insertBefore(this.element, wrapper);
        detach(wrapper);
    };
    return ContextMenu;
}(Component));
__decorate([
    Property('')
], ContextMenu.prototype, "cssClass", void 0);
__decorate([
    Property('')
], ContextMenu.prototype, "filter", void 0);
__decorate([
    Property(false)
], ContextMenu.prototype, "showItemOnClick", void 0);
__decorate([
    Collection([], MenuItem)
], ContextMenu.prototype, "items", void 0);
__decorate([
    Property('')
], ContextMenu.prototype, "target", void 0);
__decorate([
    Property({ duration: 400, easing: 'ease', effect: 'SlideDown' })
], ContextMenu.prototype, "animationSettings", void 0);
__decorate([
    Event()
], ContextMenu.prototype, "beforeItemRender", void 0);
__decorate([
    Event()
], ContextMenu.prototype, "beforeOpen", void 0);
__decorate([
    Event()
], ContextMenu.prototype, "onOpen", void 0);
__decorate([
    Event()
], ContextMenu.prototype, "onClose", void 0);
__decorate([
    Event()
], ContextMenu.prototype, "select", void 0);
ContextMenu = __decorate([
    NotifyPropertyChanges
], ContextMenu);
export { ContextMenu };
export var contextMenuBuilder = CreateBuilder(ContextMenu);
