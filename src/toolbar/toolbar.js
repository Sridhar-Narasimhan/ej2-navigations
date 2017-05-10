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
define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base/dom", "@syncfusion/ej2-base/dom", "@syncfusion/ej2-base/util", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-popups/src/common/position", "@syncfusion/ej2-popups", "@syncfusion/ej2-buttons", "../common/h-scroll"], function (require, exports, ej2_base_1, dom_1, dom_2, util_1, ej2_base_2, ej2_base_3, position_1, ej2_popups_1, ej2_buttons_1, h_scroll_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CLASSNAMES = {
        ITEMS: 'e-toolbar-items',
        ITEM: 'e-toolbar-item',
        RTL: 'e-rtl',
        SEPARATOR: 'e-separator',
        POPUPICON: 'e-popup-up-icon',
        POPUPDOWN: 'e-popup-down-icon',
        POPUP: 'e-toolbar-popup',
        POPUPCLASS: 'e-toolbar-pop',
        TEMPLATE: 'e-template',
        DISABLE: 'e-overlay',
        POPUPTEXT: 'e-toolbar-text',
        TBARTEXT: 'e-popup-text',
        TBAROVERFLOW: 'e-overflow-show',
        POPOVERFLOW: 'e-overflow-hide',
        TBARBTNTEXT: 'e-tbar-btn-text',
        TBARBTN: 'e-tbar-btn',
        TBARNAV: 'e-hor-nav',
        TBARNAVACT: 'e-nav-active',
        POPUPNAV: 'e-hor-nav'
    };
    var Item = (function (_super) {
        __extends(Item, _super);
        function Item() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Item;
    }(ej2_base_2.ChildProperty));
    __decorate([
        ej2_base_1.Property('')
    ], Item.prototype, "id", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], Item.prototype, "text", void 0);
    __decorate([
        ej2_base_1.Property('auto')
    ], Item.prototype, "width", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], Item.prototype, "cssClass", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], Item.prototype, "prefixIcon", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], Item.prototype, "suffixIcon", void 0);
    __decorate([
        ej2_base_1.Property('None')
    ], Item.prototype, "overflow", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], Item.prototype, "template", void 0);
    __decorate([
        ej2_base_1.Property('Button')
    ], Item.prototype, "type", void 0);
    __decorate([
        ej2_base_1.Property('Both')
    ], Item.prototype, "showTextOn", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], Item.prototype, "htmlAttributes", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], Item.prototype, "tooltipText", void 0);
    exports.Item = Item;
    var Toolbar = (function (_super) {
        __extends(Toolbar, _super);
        function Toolbar(options, element) {
            var _this = _super.call(this, options, element) || this;
            _this.keyConfigs = {
                moveLeft: 'leftarrow',
                moveRight: 'rightarrow',
                moveUp: 'uparrow',
                moveDown: 'downarrow',
                popupOpen: 'enter',
                popupClose: 'escape',
                tab: 'tab'
            };
            return _this;
        }
        Toolbar.prototype.destroy = function () {
            var ele = this.element;
            _super.prototype.destroy.call(this);
            this.unwireEvents();
            if (ele.children.length > 0) {
                ele.removeChild(ele.children[0]);
            }
            ele.removeAttribute('style');
        };
        Toolbar.prototype.preRender = function () {
            this.trigger('beforeCreate');
            if (this.enableRtl) {
                this.element.classList.add('e-rtl');
            }
        };
        Toolbar.prototype.wireEvents = function () {
            ej2_base_1.EventHandler.add(this.element, 'click', this.clickEventHandler, this);
            window.onresize = this.resize.bind(this);
            this.keyModule = new ej2_base_3.KeyboardEvents(this.element, {
                keyAction: this.keyActionHandler.bind(this),
                keyConfigs: this.keyConfigs
            });
            this.element.setAttribute('tabIndex', '0');
        };
        Toolbar.prototype.unwireEvents = function () {
            ej2_base_1.EventHandler.remove(this.element, 'click', this.clickEventHandler);
            if (this.scrollModule) {
                this.scrollModule.destroy();
                this.scrollModule = null;
            }
            this.keyModule.destroy();
            if (this.popupObj) {
                ej2_base_1.EventHandler.remove(document, 'scroll', this.docEvent);
                ej2_base_1.EventHandler.remove(document, 'click', this.docEvent);
            }
        };
        Toolbar.prototype.keyActionHandler = function (e) {
            e.preventDefault();
            var clst;
            var trgt = e.target;
            var rootEle = this.element;
            var popupObj = this.popupObj;
            if (trgt.classList.contains(CLASSNAMES.TBARNAV) && popupObj && dom_1.isVisible(popupObj.element)) {
                clst = popupObj.element.querySelector('.' + CLASSNAMES.ITEM);
            }
            else if (rootEle === trgt || trgt.classList.contains(CLASSNAMES.TBARNAV)) {
                clst = rootEle.querySelector('.' + CLASSNAMES.ITEM);
            }
            else {
                clst = dom_1.closest(trgt, '.' + CLASSNAMES.ITEM);
            }
            if (clst) {
                switch (e.action) {
                    case 'moveRight':
                        if (rootEle === trgt || trgt.classList.contains(CLASSNAMES.TBARNAV)) {
                            clst.firstChild.focus();
                        }
                        else {
                            this.nextEleFocus(clst);
                        }
                        break;
                    case 'moveLeft':
                        if (popupObj && trgt.classList.contains(CLASSNAMES.TBARNAV)) {
                            clst = clst.parentElement.lastElementChild;
                        }
                        if (trgt.classList.contains(CLASSNAMES.TBARNAV) && !clst.classList.contains(CLASSNAMES.SEPARATOR)) {
                            clst.firstChild.focus();
                        }
                        else {
                            this.prevEleFocus(clst);
                        }
                        break;
                    case 'moveUp':
                        if (popupObj && dom_1.closest(trgt, '.e-popup')) {
                            if (popupObj.element.firstElementChild === clst) {
                                rootEle.querySelector('.' + CLASSNAMES.TBARNAV).focus();
                            }
                            else {
                                this.prevEleFocus(clst);
                            }
                        }
                        else {
                            return;
                        }
                        break;
                    case 'moveDown':
                        if (popupObj && dom_1.closest(trgt, '.e-popup')) {
                            this.nextEleFocus(clst);
                        }
                        else if (popupObj && dom_1.isVisible(popupObj.element)) {
                            clst.firstChild.focus();
                        }
                        else {
                            return;
                        }
                        break;
                    case 'tab':
                        var ele = clst.firstChild;
                        if (rootEle === trgt || trgt.classList.contains(CLASSNAMES.TBARNAV)) {
                            if (this.activeEle) {
                                this.activeEle.focus();
                            }
                            else {
                                this.activeEleRemove(ele);
                                ele.focus();
                            }
                        }
                        break;
                    case 'popupClose':
                        if (popupObj && dom_1.isVisible(popupObj.element)) {
                            popupObj.hide({ name: 'SlideUp', duration: 100 });
                        }
                        break;
                    case 'popupOpen':
                        if (!trgt.classList.contains(CLASSNAMES.TBARNAV)) {
                            return;
                        }
                        if (popupObj && !dom_1.isVisible(popupObj.element)) {
                            popupObj.element.style.top = rootEle.offsetHeight + 'px';
                            popupObj.show({ name: 'SlideDown', duration: 100 });
                        }
                        else {
                            popupObj.hide({ name: 'SlideUp', duration: 100 });
                        }
                        break;
                }
            }
        };
        Toolbar.prototype.prevEleFocus = function (closest) {
            var prevSib = closest.previousElementSibling;
            if (prevSib) {
                if (prevSib.classList.contains(CLASSNAMES.SEPARATOR)) {
                    if (prevSib.previousSibling) {
                        prevSib = prevSib.previousSibling;
                        if (prevSib.classList.contains(CLASSNAMES.SEPARATOR)) {
                            this.prevEleFocus(prevSib);
                        }
                    }
                    else {
                        return;
                    }
                }
                if (!util_1.isNullOrUndefined(prevSib.firstChild)) {
                    prevSib.firstChild.focus();
                }
            }
            else {
                return;
            }
        };
        Toolbar.prototype.nextEleFocus = function (closest) {
            var nextSib = closest.nextElementSibling;
            if (nextSib) {
                if (nextSib.classList.contains(CLASSNAMES.SEPARATOR)) {
                    if (nextSib.nextSibling) {
                        nextSib = nextSib.nextSibling;
                        if (nextSib.classList.contains(CLASSNAMES.SEPARATOR)) {
                            this.nextEleFocus(nextSib);
                        }
                    }
                    else if (this.popupObj) {
                        this.element.querySelector('.' + CLASSNAMES.TBARNAV).focus();
                    }
                    else {
                        return;
                    }
                }
                if (!util_1.isNullOrUndefined(nextSib.firstChild)) {
                    nextSib.firstChild.focus();
                }
            }
            else if (this.popupObj) {
                this.element.querySelector('.' + CLASSNAMES.TBARNAV).focus();
            }
            else {
                return;
            }
        };
        Toolbar.prototype.clickEventHandler = function (e) {
            var trgt = e.target;
            var clsList = trgt.classList;
            var ele = this.element;
            var popObj = this.popupObj;
            var popupNav = dom_1.closest(trgt, ('.' + CLASSNAMES.TBARNAV));
            if (!popupNav) {
                popupNav = trgt;
            }
            if (!ele.children[0].classList.contains('e-hscroll') && (clsList.contains(CLASSNAMES.TBARNAV))) {
                clsList = trgt.querySelector('.e-icons').classList;
            }
            if (clsList.contains(CLASSNAMES.POPUPICON) || clsList.contains(CLASSNAMES.POPUPDOWN)) {
                if (dom_1.isVisible(popObj.element)) {
                    popupNav.classList.remove(CLASSNAMES.TBARNAVACT);
                    popObj.hide({ name: 'SlideUp', duration: 100 });
                }
                else {
                    if (ele.classList.contains(CLASSNAMES.RTL)) {
                        popObj.enableRtl = true;
                        popObj.position = { X: 'left', Y: 'top' };
                    }
                    if (popObj.offsetX === 0 && !ele.classList.contains(CLASSNAMES.RTL)) {
                        popObj.enableRtl = false;
                        popObj.position = { X: 'right', Y: 'top' };
                    }
                    popObj.dataBind();
                    popObj.element.style.top = this.element.offsetHeight + 'px';
                    popupNav.classList.add(CLASSNAMES.TBARNAVACT);
                    popObj.show({ name: 'SlideDown', duration: 100 });
                }
            }
            this.trigger('clicked', e);
        };
        ;
        Toolbar.prototype.render = function () {
            this.initialize();
            this.renderControl();
            this.wireEvents();
        };
        Toolbar.prototype.initialize = function () {
            var width = util_1.formatUnit(this.width);
            var height = util_1.formatUnit(this.height);
            dom_1.setStyleAttribute(this.element, { 'width': width, 'height': height });
            var ariaAttr = {
                'role': 'toolbar', 'aria-disabled': 'false', 'aria-haspopup': 'false', 'aria-orientation': 'horizontal',
            };
            dom_1.attributes(this.element, ariaAttr);
        };
        Toolbar.prototype.renderControl = function () {
            this.trgtEle = (this.element.children.length > 0) ? this.element.querySelector('div') : null;
            this.renderItems();
            this.renderOverflowMode();
        };
        Toolbar.prototype.initHScroll = function (element, innerItems) {
            if (!this.scrollModule && this.checkOverflow(element, innerItems[0])) {
                this.scrollModule = new h_scroll_1.HScroll({ scrollStep: 50, enableRtl: this.enableRtl }, innerItems[0]);
                this.element.style.overflow = 'hidden';
            }
        };
        Toolbar.prototype.checkOverflow = function (element, innerItem) {
            if (util_1.isNullOrUndefined(element) || util_1.isNullOrUndefined(innerItem)) {
                return false;
            }
            var eleWidth = element.offsetWidth;
            var itemWidth = innerItem.offsetWidth;
            var popNav = element.querySelector('.' + CLASSNAMES.TBARNAV);
            if (itemWidth > eleWidth - (popNav ? popNav.offsetWidth : 0)) {
                return true;
            }
            else {
                return false;
            }
        };
        Toolbar.prototype.renderOverflowMode = function () {
            var ele = this.element;
            if (ele && ele.children.length > 0) {
                this.offsetWid = ele.offsetWidth;
                switch (this.overflowMode.toString()) {
                    case 'Scrollable':
                        if (this.scrollModule) {
                            this.scrollModule.destroy();
                            this.scrollModule = null;
                        }
                        this.initHScroll(ele, ele.getElementsByClassName(CLASSNAMES.ITEMS));
                        break;
                    case 'Popup':
                        this.element.classList.add('e-toolpop');
                        if (this.checkOverflow(ele, ele.querySelector('.' + CLASSNAMES.ITEMS))) {
                            this.createOverflowIcon(ele, [].slice.call(ele.querySelectorAll('.' + CLASSNAMES.ITEMS + ' .' + CLASSNAMES.ITEM)));
                            this.element.querySelector('.' + CLASSNAMES.TBARNAV).setAttribute('tabIndex', '0');
                        }
                        else if (util_1.isNullOrUndefined(this.popupObj)) {
                            this.element.classList.remove('e-toolpop');
                        }
                        break;
                }
            }
        };
        Toolbar.prototype.checkPriority = function (ele, inEle, eleWidth, pre) {
            var len = inEle.length;
            var eleWid = eleWidth;
            var sepCheck = 0;
            var itemCount = 0;
            var itemPopCount = 0;
            for (var i = len - 1; i >= 0; i--) {
                var mrgn = parseFloat((window.getComputedStyle(inEle[i])).marginRight);
                if ((inEle[i].offsetLeft + inEle[i].offsetWidth + mrgn * 2) > eleWidth) {
                    if (inEle[i].classList.contains(CLASSNAMES.SEPARATOR)) {
                        if (sepCheck > 0 && itemCount === itemPopCount) {
                            var sepEle = inEle[i + itemCount + (sepCheck - 1)];
                            if (sepEle.classList.contains(CLASSNAMES.SEPARATOR)) {
                                sepEle.style.display = 'none';
                            }
                        }
                        sepCheck++;
                        itemCount = 0;
                        itemPopCount = 0;
                    }
                    else {
                        itemCount++;
                    }
                    if (inEle[i].classList.contains(CLASSNAMES.TBAROVERFLOW) && pre) {
                        eleWidth -= (inEle[i].offsetWidth + (mrgn * 2));
                    }
                    else if (!inEle[i].classList.contains(CLASSNAMES.SEPARATOR)) {
                        inEle[i].classList.add(CLASSNAMES.POPUP);
                        inEle[i].style.display = 'none';
                        itemPopCount++;
                    }
                    else {
                        eleWidth -= (inEle[i].offsetWidth);
                    }
                }
                if (inEle[i].classList.contains(CLASSNAMES.POPOVERFLOW)) {
                    var elem = ele.querySelector('.' + CLASSNAMES.ITEMS + ' .' + CLASSNAMES.POPUP);
                    if (elem && elem.classList.contains(CLASSNAMES.POPOVERFLOW)) {
                        elem.style.display = '';
                        elem.classList.remove(CLASSNAMES.POPUP);
                        inEle[i].classList.add(CLASSNAMES.POPUP);
                        inEle[i].style.display = 'none';
                    }
                }
            }
            if (pre) {
                var popedEle = this.element.querySelectorAll('.' + CLASSNAMES.ITEM + ':not(.' + CLASSNAMES.POPUP + ')');
                var inEl = [].slice.call(popedEle);
                this.checkPriority(ele, inEl, eleWid, false);
            }
        };
        Toolbar.prototype.createOverflowIcon = function (ele, innerEle) {
            var innerNav = ele.querySelector('.' + CLASSNAMES.TBARNAV);
            if (!innerNav) {
                this.createPopupIcon(ele);
            }
            innerNav = ele.querySelector('.' + CLASSNAMES.TBARNAV);
            var eleWidth = (ele.offsetWidth - (innerNav.offsetWidth));
            if (this.enableRtl) {
                this.element.classList.remove('e-rtl');
            }
            this.checkPriority(ele, innerEle, eleWidth, true);
            if (this.enableRtl) {
                this.element.classList.add('e-rtl');
            }
            this.createPopup();
        };
        Toolbar.prototype.createPopupIcon = function (element) {
            var id = element.id.concat('_nav');
            var className = 'e-' + element.id.concat('_nav ' + CLASSNAMES.POPUPNAV);
            var nav = dom_2.createElement('div', { id: id, className: className });
            var navItem = dom_2.createElement('div', { className: CLASSNAMES.POPUPDOWN + ' e-icons' });
            nav.appendChild(navItem);
            nav.setAttribute('tabindex', '0');
            element.insertBefore(nav, element.firstChild);
        };
        Toolbar.prototype.createPopup = function () {
            var _this = this;
            var element = this.element;
            var eleHeight;
            var eleItem;
            eleItem = element.querySelector('.' + CLASSNAMES.ITEM + ':not(.' + CLASSNAMES.SEPARATOR + ' ):not(.' + CLASSNAMES.POPUP + ' )');
            eleHeight = element.style.height === 'auto' ? null : eleItem.offsetHeight;
            var ele;
            var nodes;
            var popupPri = [];
            if (element.querySelector('#' + element.id + '_popup.' + CLASSNAMES.POPUPCLASS)) {
                ele = element.querySelector('#' + element.id + '_popup.' + CLASSNAMES.POPUPCLASS);
            }
            else {
                ele = dom_2.createElement('div', { id: element.id + '_popup', className: CLASSNAMES.POPUPCLASS });
            }
            var poppedEle = element.querySelector('.' + CLASSNAMES.ITEMS).querySelectorAll('.' + CLASSNAMES.POPUP);
            var popupEle = [].slice.call(poppedEle);
            nodes = ele.querySelectorAll('.' + CLASSNAMES.TBAROVERFLOW);
            var nodeIndex = 0;
            var nodePri = 0;
            popupEle.forEach(function (el, index) {
                nodes = ele.querySelectorAll('.' + CLASSNAMES.TBAROVERFLOW);
                if (el.classList.contains(CLASSNAMES.TBAROVERFLOW) && nodes.length > 0) {
                    if (_this.tbResize && nodes.length > index) {
                        ele.insertBefore(el, nodes[index]);
                        ++nodePri;
                    }
                    else {
                        ele.insertBefore(el, ele.children[nodes.length]);
                        ++nodePri;
                    }
                }
                else if (el.classList.contains(CLASSNAMES.TBAROVERFLOW)) {
                    ele.insertBefore(el, ele.firstChild);
                    ++nodePri;
                }
                else if (el.classList.contains(CLASSNAMES.POPOVERFLOW)) {
                    popupPri.push(el);
                }
                else if (_this.tbResize) {
                    ele.insertBefore(el, ele.childNodes[nodeIndex + nodePri]);
                    ++nodeIndex;
                }
                else {
                    ele.appendChild(el);
                }
                el.style.display = '';
                el.style.height = eleHeight + 'px';
            });
            popupPri.forEach(function (el) {
                ele.appendChild(el);
            });
            var tbarEle = element.querySelector('.' + CLASSNAMES.ITEMS).querySelectorAll('.' + CLASSNAMES.ITEM);
            for (var i = tbarEle.length - 1; i >= 0; i--) {
                var tbarElement = tbarEle[i];
                if (tbarElement.classList.contains(CLASSNAMES.SEPARATOR)) {
                    tbarElement.style.display = 'none';
                }
                else {
                    break;
                }
            }
            if (!this.popupObj) {
                element.appendChild(ele);
                this.element.style.overflow = '';
                var popup = new ej2_popups_1.Popup(ele, {
                    relateTo: element,
                    offsetY: (element.offsetHeight),
                    enableRtl: this.enableRtl,
                    open: this.popupOpen.bind(this),
                    close: this.popupClose,
                    position: this.enableRtl ? { X: 'left', Y: 'top' } : { X: 'right', Y: 'top' }
                });
                ej2_base_1.EventHandler.add(document, 'scroll', this.docEvent.bind(this));
                ej2_base_1.EventHandler.add(document, 'click ', this.docEvent.bind(this));
                popup.element.style.maxHeight = popup.element.offsetHeight + 'px';
                popup.hide();
                this.popupObj = popup;
                this.element.setAttribute('aria-haspopup', 'true');
            }
            else {
                var popupEle_1 = this.popupObj.element;
                popupEle_1.style.maxHeight = '';
                popupEle_1.style.display = 'block';
                popupEle_1.style.maxHeight = popupEle_1.offsetHeight + 'px';
                popupEle_1.style.display = 'none';
            }
        };
        Toolbar.prototype.docEvent = function (e) {
            var popEle = dom_1.closest(e.target, '.e-popup');
            if (this.popupObj && dom_1.isVisible(this.popupObj.element) && !popEle) {
                this.popupObj.hide({ name: 'SlideUp', duration: 100 });
            }
        };
        Toolbar.prototype.popupOpen = function (e) {
            var popObj = this.popupObj;
            var popupEle = this.popupObj.element;
            var toolEle = this.element;
            var popupNav = toolEle.querySelector('.' + CLASSNAMES.TBARNAV);
            popObj.element.style.height = 'auto';
            popObj.element.style.maxHeight = '';
            popObj.element.style.maxHeight = popObj.element.clientHeight + 'px';
            var popupElePos = popupEle.offsetTop + popupEle.offsetHeight + position_1.calculatePosition(toolEle).top;
            if (!util_1.isNullOrUndefined(popupNav)) {
                var popIcon = popupNav.firstElementChild.classList;
                popupNav.classList.add(CLASSNAMES.TBARNAVACT);
                popIcon.remove(CLASSNAMES.POPUPDOWN);
                popIcon.add(CLASSNAMES.POPUPICON);
            }
            if ((window.innerHeight + window.scrollY) < popupElePos) {
                var overflowHeight = (popupEle.offsetHeight - ((popupElePos - window.innerHeight - window.scrollY) + 5));
                popObj.height = overflowHeight + 'px';
                popObj.element.style.maxHeight = overflowHeight + 'px';
            }
        };
        Toolbar.prototype.popupClose = function (e) {
            var element = this.element.parentElement;
            var popupNav = element.querySelector('.' + CLASSNAMES.TBARNAV);
            if (popupNav) {
                var popIcon = popupNav.firstElementChild.classList;
                popupNav.classList.remove(CLASSNAMES.TBARNAVACT);
                popIcon.remove(CLASSNAMES.POPUPICON);
                popIcon.add(CLASSNAMES.POPUPDOWN);
            }
        };
        Toolbar.prototype.renderItems = function () {
            var ele = this.element;
            var itemEleDom;
            var innerItem;
            var popupNav = ele.querySelector('.' + CLASSNAMES.TBARNAV);
            var items = this.items;
            if (ele && ele.children.length > 0) {
                var navEle = ele.querySelectorAll('.' + CLASSNAMES.TBARNAV);
                itemEleDom = navEle.length > 0 ? ele.children[1] : ele.children[0];
            }
            if (this.trgtEle != null) {
                this.trgtEle.classList.add(CLASSNAMES.ITEMS);
                var innerEle = [].slice.call(this.trgtEle.children);
                innerEle.forEach(function (ele) {
                    if (ele.tagName === 'DIV') {
                        ele.classList.add(CLASSNAMES.ITEM);
                    }
                });
            }
            else if (ele && items.length > 0) {
                if (!itemEleDom) {
                    itemEleDom = dom_2.createElement('div', { className: CLASSNAMES.ITEMS });
                }
                for (var i = 0; i < items.length; i++) {
                    innerItem = this.renderSubComponent(items[i]);
                    this.tbarEle.push(innerItem);
                    itemEleDom.appendChild(innerItem);
                }
                ele.appendChild(itemEleDom);
            }
        };
        Toolbar.prototype.setAttr = function (attr, element) {
            var key = Object.keys(attr)[0];
            switch (key) {
                case 'class':
                    element.classList.add(attr[key]);
                    break;
                case 'style':
                    var value = JSON.parse('\{"' + attr[key].replace(':', '\":\"') + '\"}');
                    dom_1.setStyleAttribute(element, value);
                    break;
                default:
                    element.setAttribute(key, attr[key]);
                    break;
            }
        };
        Toolbar.prototype.popupRefresh = function (popupEle, destroy) {
            var ele = this.element;
            var popNav = ele.querySelector('.' + CLASSNAMES.TBARNAV);
            var innerEle = ele.querySelector('.' + CLASSNAMES.ITEMS);
            var eleSplice = this.tbarEle;
            var priEleCnt;
            var index;
            if (util_1.isNullOrUndefined(popNav)) {
                return;
            }
            innerEle.removeAttribute('style');
            popupEle.style.display = 'block';
            var width = ele.offsetWidth - (popNav.offsetWidth + innerEle.offsetWidth);
            var _loop_1 = function (el) {
                el.style.position = 'absolute';
                var elWidth = el.offsetWidth;
                var btnText = el.querySelector('.' + CLASSNAMES.TBARBTNTEXT);
                if (el.classList.contains('e-tbtn-align') || el.classList.contains(CLASSNAMES.TBARTEXT)) {
                    var btn = el.children[0];
                    if (!util_1.isNullOrUndefined(btnText) && el.classList.contains(CLASSNAMES.TBARTEXT)) {
                        btnText.style.display = 'none';
                    }
                    else if (!util_1.isNullOrUndefined(btnText) && el.classList.contains(CLASSNAMES.POPUPTEXT)) {
                        btnText.style.display = 'block';
                    }
                    btn.style.minWidth = '0%';
                    elWidth = el.offsetWidth;
                    btn.style.minWidth = '';
                    if (!util_1.isNullOrUndefined(btnText)) {
                        btnText.style.display = '';
                    }
                }
                el.style.position = '';
                if (elWidth < width || destroy) {
                    if (!el.classList.contains(CLASSNAMES.POPOVERFLOW)) {
                        el.classList.remove(CLASSNAMES.POPUP);
                    }
                    index = this_1.tbarEle.indexOf(el);
                    var sepBeforePri_1 = 0;
                    eleSplice.slice(0, index).forEach(function (el) {
                        if (el.classList.contains(CLASSNAMES.TBAROVERFLOW) || el.classList.contains(CLASSNAMES.SEPARATOR)) {
                            if (el.classList.contains(CLASSNAMES.SEPARATOR)) {
                                el.style.display = '';
                                width -= el.offsetWidth;
                            }
                            sepBeforePri_1++;
                        }
                    });
                    if (el.classList.contains(CLASSNAMES.TBAROVERFLOW)) {
                        var popEle = this_1.popupObj.element;
                        var query = '.' + CLASSNAMES.ITEM + ':not(.' + CLASSNAMES.SEPARATOR + '):not(.' + CLASSNAMES.TBAROVERFLOW + ')';
                        priEleCnt = popEle.querySelectorAll('.' + CLASSNAMES.POPUP + ':not(.' + CLASSNAMES.TBAROVERFLOW + ')').length;
                        if (innerEle.querySelectorAll(query).length === 0) {
                            var eleSep = innerEle.children[index - (index - sepBeforePri_1) - 1];
                            if (!util_1.isNullOrUndefined(eleSep) && eleSep.classList.contains(CLASSNAMES.SEPARATOR) && !dom_1.isVisible(eleSep)) {
                                var sepDisplay = 'none';
                                eleSep.style.display = 'inherit';
                                var eleSepWidth = eleSep.offsetWidth + (parseFloat(window.getComputedStyle(eleSep).marginRight) * 2);
                                var prevSep = eleSep.previousElementSibling;
                                if ((elWidth + eleSepWidth) < width || destroy) {
                                    innerEle.insertBefore(el, innerEle.children[index - (index - sepBeforePri_1)]);
                                    if (!util_1.isNullOrUndefined(prevSep)) {
                                        prevSep.style.display = '';
                                    }
                                }
                                else {
                                    prevSep.style.display = sepDisplay;
                                }
                                eleSep.style.display = '';
                            }
                            else {
                                innerEle.insertBefore(el, innerEle.children[index - (index - sepBeforePri_1)]);
                            }
                        }
                        else {
                            innerEle.insertBefore(el, innerEle.children[index - priEleCnt]);
                        }
                        width -= el.offsetWidth;
                    }
                    else if (index === 0) {
                        innerEle.insertBefore(el, innerEle.firstChild);
                        width -= el.offsetWidth;
                    }
                    else {
                        priEleCnt = this_1.popupObj.element.querySelectorAll(CLASSNAMES.TBAROVERFLOW).length;
                        innerEle.insertBefore(el, innerEle.children[index - priEleCnt]);
                        width -= el.offsetWidth;
                    }
                    el.style.height = '';
                }
                else {
                    return "break";
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = [].slice.call(popupEle.children); _i < _a.length; _i++) {
                var el = _a[_i];
                var state_1 = _loop_1(el);
                if (state_1 === "break")
                    break;
            }
            popupEle.style.display = 'none';
            if (popupEle.children.length === 0) {
                popNav.remove();
                this.popupObj.destroy();
                this.popupObj.element.remove();
                this.popupObj = null;
                this.element.setAttribute('aria-haspopup', 'false');
                this.element.classList.remove('e-toolpop');
            }
        };
        Toolbar.prototype.enableItems = function (items, isEnable) {
            var elements = items;
            var len = elements.length;
            if (util_1.isNullOrUndefined(isEnable)) {
                isEnable = true;
            }
            if (len && len > 1) {
                isEnable ? dom_1.removeClass(elements, CLASSNAMES.DISABLE) : dom_1.addClass(elements, CLASSNAMES.DISABLE);
            }
            else {
                var ele = void 0;
                ele = (len && len === 1) ? elements[0] : items;
                isEnable ? ele.classList.remove(CLASSNAMES.DISABLE) : ele.classList.add(CLASSNAMES.DISABLE);
            }
        };
        Toolbar.prototype.addItems = function (items, index) {
            var innerItems;
            var itemsDiv = this.element.querySelector('.' + CLASSNAMES.ITEMS);
            var innerEle;
            if (util_1.isNullOrUndefined(index)) {
                index = 0;
            }
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                innerItems = this.element.querySelectorAll('.' + CLASSNAMES.ITEM);
                innerEle = this.renderSubComponent(item);
                if (this.tbarEle.length > index && innerItems.length > 0) {
                    innerItems[0].parentNode.insertBefore(innerEle, innerItems[index]);
                    this.items.splice(index, 0, item);
                    this.tbarEle.splice(index, 0, innerEle);
                    index++;
                    this.offsetWid = itemsDiv.offsetWidth;
                }
            }
            itemsDiv.style.width = '';
            this.renderOverflowMode();
        };
        Toolbar.prototype.removeItems = function (args) {
            var index;
            var innerItems = [].slice.call(this.element.querySelectorAll('.' + CLASSNAMES.ITEM));
            if (typeof (args) === 'number') {
                index = parseInt(args.toString(), 10);
                this.removeItemByIndex(index, innerItems);
            }
            else {
                for (var _i = 0, _a = [].slice.call(args); _i < _a.length; _i++) {
                    var ele = _a[_i];
                    index = this.tbarEle.indexOf(ele);
                    this.removeItemByIndex(index, innerItems);
                }
            }
            this.resize();
        };
        Toolbar.prototype.removeItemByIndex = function (index, innerItems) {
            if (this.tbarEle[index] && innerItems[index]) {
                var eleIdx = innerItems.indexOf(this.tbarEle[index]);
                innerItems[eleIdx].remove();
                this.items.splice(index, 1);
                this.tbarEle.splice(index, 1);
            }
        };
        Toolbar.prototype.templateRender = function (templateProp, innerEle, item) {
            var itemType = item.type.toString();
            if (typeof (templateProp) === 'string') {
                innerEle.innerHTML = templateProp;
                var ele = innerEle.childNodes[0];
                if (!ele.tagName) {
                    var templateEle = document.querySelector(templateProp);
                    innerEle.innerHTML = '';
                    innerEle.appendChild(templateEle);
                }
                innerEle.classList.add(CLASSNAMES.TEMPLATE);
                this.tbarEle.push(innerEle);
            }
            else if (itemType === 'Input' || itemType === '2') {
                var templateProperty = templateProp;
                var ele = dom_2.createElement('input');
                item.id ? (ele.id = item.id) : (ele.id = util_1.getUniqueID('tbr-ipt'));
                templateProperty.appendTo(ele);
                innerEle.appendChild(ele);
                innerEle.classList.add(CLASSNAMES.TEMPLATE);
                this.tbarEle.push(innerEle);
            }
        };
        Toolbar.prototype.renderSubComponent = function (item) {
            var innerEle;
            var dom;
            innerEle = dom_2.createElement('div', { className: CLASSNAMES.ITEM });
            if (!this.tbarEle) {
                this.tbarEle = [];
            }
            if (item.cssClass) {
                innerEle.className = innerEle.className + ' ' + item.cssClass;
            }
            if (item.htmlAttributes) {
                this.setAttr(item.htmlAttributes, innerEle);
            }
            if (item.tooltipText) {
                innerEle.setAttribute('title', item.tooltipText);
            }
            if (item.template) {
                this.templateRender(item.template, innerEle, item);
            }
            else {
                switch (item.type.toString()) {
                    case 'Button':
                        var textStr = item.text;
                        dom = dom_2.createElement('button', { className: 'e-tbar-btn' });
                        item.id ? (dom.id = item.id) : dom.id = util_1.getUniqueID('e-tbr-btn');
                        var btnTxt = dom_2.createElement('div', { className: 'e-tbar-btn-text' });
                        if (item.text) {
                            btnTxt.innerHTML = item.text;
                            dom.appendChild(btnTxt);
                        }
                        else {
                            innerEle.classList.add('e-tbtn-align');
                        }
                        var btnObj = new ej2_buttons_1.Button({}, dom);
                        if (item.prefixIcon && item.suffixIcon) {
                            btnObj.iconCss = item.prefixIcon + ' e-icons';
                            btnObj.iconPosition = 'left';
                        }
                        else if (item.prefixIcon) {
                            btnObj.iconCss = item.prefixIcon + ' e-icons';
                            btnObj.iconPosition = 'left';
                        }
                        else if (item.suffixIcon) {
                            btnObj.iconCss = item.suffixIcon + ' e-icons';
                            btnObj.iconPosition = 'right';
                        }
                        btnObj.dataBind();
                        if (item.width) {
                            dom_1.setStyleAttribute(dom, { 'width': util_1.formatUnit(item.width) });
                        }
                        dom.setAttribute('tabindex', '-1');
                        innerEle.appendChild(dom);
                        innerEle.addEventListener('click', this.itemClick.bind(this));
                        break;
                    case 'Separator':
                        innerEle.classList.add(CLASSNAMES.SEPARATOR);
                        break;
                }
            }
            if (item.showTextOn) {
                var sTxt = item.showTextOn.toString();
                if (sTxt === 'Toolbar' || sTxt === '2') {
                    innerEle.classList.add(CLASSNAMES.POPUPTEXT);
                    innerEle.classList.add('e-tbtn-align');
                }
                else if (sTxt === 'Overflow' || sTxt === '1') {
                    innerEle.classList.add(CLASSNAMES.TBARTEXT);
                }
            }
            if (item.overflow) {
                var overflow = item.overflow.toString();
                if (overflow === 'Show' || overflow === '1') {
                    innerEle.classList.add(CLASSNAMES.TBAROVERFLOW);
                }
                else if (overflow === 'Hide' || overflow === '2') {
                    if (!innerEle.classList.contains(CLASSNAMES.SEPARATOR)) {
                        innerEle.classList.add(CLASSNAMES.POPOVERFLOW);
                    }
                }
            }
            return innerEle;
        };
        Toolbar.prototype.itemClick = function (e) {
            var target = e.currentTarget;
            var ele = target.firstChild;
            this.activeEleRemove(ele);
            this.activeEle.focus();
        };
        Toolbar.prototype.activeEleRemove = function (curEle) {
            if (util_1.isNullOrUndefined(this.activeEle)) {
                this.activeEle = curEle;
            }
            else {
                this.activeEle.setAttribute('tabindex', '-1');
                this.activeEle = curEle;
            }
            curEle.removeAttribute('tabindex');
        };
        Toolbar.prototype.getPersistData = function () {
            return this.addOnPersist([]);
        };
        Toolbar.prototype.getModuleName = function () {
            return 'toolbar';
        };
        Toolbar.prototype.resize = function () {
            var ele = this.element;
            this.tbResize = true;
            if (this.popupObj && dom_1.isVisible(this.popupObj.element)) {
                this.popupObj.hide();
            }
            var checkOverflow = this.checkOverflow(ele, ele.getElementsByClassName(CLASSNAMES.ITEMS)[0]);
            if (this.offsetWid > ele.offsetWidth || this.scrollModule || checkOverflow) {
                this.renderOverflowMode();
            }
            if (this.popupObj) {
                this.popupRefresh(this.popupObj.element, false);
            }
            this.offsetWid = ele.offsetWidth;
            this.tbResize = false;
        };
        Toolbar.prototype.onPropertyChanged = function (newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'items':
                        if (this.scrollModule) {
                            this.scrollModule.destroy();
                            this.scrollModule = null;
                        }
                        this.renderItems();
                        this.renderOverflowMode();
                        break;
                    case 'width':
                        var wid = this.element.offsetWidth;
                        dom_1.setStyleAttribute(this.element, { 'width': util_1.formatUnit(newProp.width) });
                        this.renderOverflowMode();
                        if (this.popupObj && wid < this.element.offsetWidth) {
                            this.popupRefresh(this.popupObj.element, false);
                        }
                        break;
                    case 'height':
                        dom_1.setStyleAttribute(this.element, { 'height': util_1.formatUnit(newProp.height) });
                        break;
                    case 'overflowMode':
                        if (this.scrollModule) {
                            this.scrollModule.element.classList.remove(CLASSNAMES.RTL);
                            this.scrollModule.destroy();
                            this.scrollModule = null;
                        }
                        if (this.popupObj) {
                            var popNav = this.element.querySelector('.' + CLASSNAMES.TBARNAV);
                            this.popupRefresh(this.popupObj.element, true);
                            popNav.remove();
                        }
                        this.renderOverflowMode();
                        if (this.enableRtl) {
                            this.element.classList.add(CLASSNAMES.RTL);
                        }
                        break;
                    case 'enableRtl':
                        if (newProp.enableRtl) {
                            this.element.classList.add(CLASSNAMES.RTL);
                            if (!util_1.isNullOrUndefined(this.scrollModule)) {
                                this.scrollModule.element.classList.add(CLASSNAMES.RTL);
                            }
                            if (!util_1.isNullOrUndefined(this.popupObj)) {
                                this.popupObj.element.classList.add(CLASSNAMES.RTL);
                            }
                        }
                        else {
                            this.element.classList.remove(CLASSNAMES.RTL);
                            if (!util_1.isNullOrUndefined(this.scrollModule)) {
                                this.scrollModule.element.classList.remove(CLASSNAMES.RTL);
                            }
                            if (!util_1.isNullOrUndefined(this.popupObj)) {
                                this.popupObj.element.classList.remove(CLASSNAMES.RTL);
                            }
                        }
                        break;
                }
            }
        };
        return Toolbar;
    }(ej2_base_1.Component));
    __decorate([
        ej2_base_3.Collection([], Item)
    ], Toolbar.prototype, "items", void 0);
    __decorate([
        ej2_base_1.Property('auto')
    ], Toolbar.prototype, "width", void 0);
    __decorate([
        ej2_base_1.Property('auto')
    ], Toolbar.prototype, "height", void 0);
    __decorate([
        ej2_base_1.Property('Scrollable')
    ], Toolbar.prototype, "overflowMode", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], Toolbar.prototype, "enableRtl", void 0);
    __decorate([
        ej2_base_1.Event()
    ], Toolbar.prototype, "clicked", void 0);
    __decorate([
        ej2_base_1.Event()
    ], Toolbar.prototype, "created", void 0);
    __decorate([
        ej2_base_1.Event()
    ], Toolbar.prototype, "destroyed", void 0);
    __decorate([
        ej2_base_1.Event()
    ], Toolbar.prototype, "beforeCreate", void 0);
    Toolbar = __decorate([
        ej2_base_2.NotifyPropertyChanges
    ], Toolbar);
    exports.Toolbar = Toolbar;
    exports.toolbarBuilder = ej2_base_2.CreateBuilder(Toolbar);
});
