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
import { Component, EventHandler, Property, Event } from '@syncfusion/ej2-base';
import { addClass, removeClass, isVisible, closest, attributes, detach, classList, KeyboardEvents } from '@syncfusion/ej2-base';
import { createElement as buildTag, selectAll, setStyleAttribute as setStyle } from '@syncfusion/ej2-base';
import { isNullOrUndefined as isNOU, getUniqueID, formatUnit, Collection, compile as templateCompiler } from '@syncfusion/ej2-base';
import { NotifyPropertyChanges, CreateBuilder, ChildProperty, Browser } from '@syncfusion/ej2-base';
import { Popup } from '@syncfusion/ej2-popups';
import { calculatePosition } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';
import { HScroll } from '../common/h-scroll';
var CLS_ITEMS = 'e-toolbar-items';
var CLS_ITEM = 'e-toolbar-item';
var CLS_RTL = 'e-rtl';
var CLS_SEPARATOR = 'e-separator';
var CLS_POPUPICON = 'e-popup-up-icon';
var CLS_POPUPDOWN = 'e-popup-down-icon';
var CLS_TEMPLATE = 'e-template';
var CLS_DISABLE = 'e-overlay';
var CLS_POPUPTEXT = 'e-toolbar-text';
var CLS_TBARTEXT = 'e-popup-text';
var CLS_TBAROVERFLOW = 'e-overflow-show';
var CLS_POPOVERFLOW = 'e-overflow-hide';
var CLS_TBARBTN = 'e-tbar-btn';
var CLS_TBARNAV = 'e-hor-nav';
var CLS_TBARSCRLNAV = 'e-scroll-nav';
var CLS_TBARRIGHT = 'e-toolbar-right';
var CLS_TBARLEFT = 'e-toolbar-left';
var CLS_TBARCENTER = 'e-toolbar-center';
var CLS_TBARPOS = 'e-tbar-pos';
var CLS_TBARSCROLL = 'e-hscroll-content';
var CLS_POPUPNAV = 'e-hor-nav';
var CLS_POPUPCLASS = 'e-toolbar-pop';
var CLS_POPUP = 'e-toolbar-popup';
var CLS_TBARBTNTEXT = 'e-tbar-btn-text';
var CLS_TBARNAVACT = 'e-nav-active';
var CLS_TBARIGNORE = 'e-ignore';
var Item = (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Item;
}(ChildProperty));
export { Item };
__decorate([
    Property('')
], Item.prototype, "id", void 0);
__decorate([
    Property('')
], Item.prototype, "text", void 0);
__decorate([
    Property('auto')
], Item.prototype, "width", void 0);
__decorate([
    Property('')
], Item.prototype, "cssClass", void 0);
__decorate([
    Property('')
], Item.prototype, "prefixIcon", void 0);
__decorate([
    Property('')
], Item.prototype, "suffixIcon", void 0);
__decorate([
    Property('None')
], Item.prototype, "overflow", void 0);
__decorate([
    Property('')
], Item.prototype, "template", void 0);
__decorate([
    Property('Button')
], Item.prototype, "type", void 0);
__decorate([
    Property('Both')
], Item.prototype, "showTextOn", void 0);
__decorate([
    Property(null)
], Item.prototype, "htmlAttributes", void 0);
__decorate([
    Property('')
], Item.prototype, "tooltipText", void 0);
__decorate([
    Property('left')
], Item.prototype, "align", void 0);
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
            tab: 'tab',
            home: 'home',
            end: 'end',
        };
        return _this;
    }
    Toolbar.prototype.destroy = function () {
        var _this = this;
        var ele = this.element;
        _super.prototype.destroy.call(this);
        this.unwireEvents();
        while (ele.firstChild) {
            ele.removeChild(ele.firstChild);
        }
        if (this.trgtEle) {
            ele.appendChild(this.ctrlTem);
        }
        this.clearProperty();
        this.popObj = null;
        this.remove(this.element, 'e-toolpop');
        ele.removeAttribute('style');
        ['aria-disabled', 'aria-orientation', 'aria-haspopup', 'role'].forEach(function (attrb) {
            _this.element.removeAttribute(attrb);
        });
    };
    Toolbar.prototype.preRender = function () {
        this.trigger('beforeCreate');
        this.scrollModule = null;
        this.popObj = null;
        if (this.enableRtl) {
            this.add(this.element, CLS_RTL);
        }
    };
    Toolbar.prototype.wireEvents = function () {
        EventHandler.add(this.element, 'click', this.clickHandler, this);
        window.addEventListener('resize', this.resize.bind(this));
        this.keyModule = new KeyboardEvents(this.element, {
            keyAction: this.keyActionHandler.bind(this),
            keyConfigs: this.keyConfigs
        });
        EventHandler.add(this.element, 'keydown', this.docKeyDown, this);
        this.element.setAttribute('tabIndex', '0');
    };
    Toolbar.prototype.docKeyDown = function (e) {
        if (e.keyCode === 9 && e.target.classList.contains('e-hor-nav') === true && isVisible(this.popObj.element)) {
            this.popObj.hide({ name: 'SlideUp', duration: 100 });
        }
        if ((e.keyCode === 40 || e.keyCode === 38) && !isNOU(this.popObj) && isVisible(this.popObj.element)) {
            e.preventDefault();
        }
    };
    Toolbar.prototype.unwireEvents = function () {
        EventHandler.remove(this.element, 'click', this.clickHandler);
        this.destroyHScroll();
        this.keyModule.destroy();
        EventHandler.remove(document, 'scroll', this.docEvent);
        EventHandler.remove(this.element, 'keydown', this.docKeyDown);
        EventHandler.remove(document, 'click', this.docEvent);
    };
    Toolbar.prototype.clearProperty = function () {
        this.tbarEle = [];
        this.tbarAlgEle = { lefts: [], centers: [], rights: [] };
    };
    Toolbar.prototype.docEvent = function (e) {
        var popEle = closest(e.target, '.e-popup');
        if (this.popObj && isVisible(this.popObj.element) && !popEle) {
            this.popObj.hide({ name: 'SlideUp', duration: 100 });
        }
    };
    Toolbar.prototype.destroyHScroll = function () {
        if (this.scrollModule) {
            if (this.tbarAlign) {
                this.add(this.scrollModule.element, CLS_TBARPOS);
            }
            this.scrollModule.destroy();
            this.scrollModule = null;
        }
    };
    Toolbar.prototype.destroyItems = function () {
        [].slice.call(this.element.querySelectorAll('.' + CLS_ITEM)).forEach(function (el) {
            detach(el);
        });
        this.clearProperty();
    };
    Toolbar.prototype.destroyMode = function () {
        if (this.scrollModule) {
            this.remove(this.scrollModule.element, CLS_RTL);
            this.destroyHScroll();
        }
        if (this.popObj) {
            this.popupRefresh(this.popObj.element, true);
        }
    };
    Toolbar.prototype.add = function (ele, val) {
        ele.classList.add(val);
    };
    Toolbar.prototype.remove = function (ele, val) {
        ele.classList.remove(val);
    };
    Toolbar.prototype.elementFocus = function (ele) {
        var fChild = ele.firstElementChild;
        if (fChild) {
            fChild.focus();
            this.activeEleSwitch(ele);
        }
        else {
            ele.focus();
        }
    };
    Toolbar.prototype.clstElement = function (tbrNavChk, trgt) {
        var clst;
        if (tbrNavChk && this.popObj && isVisible(this.popObj.element)) {
            clst = this.popObj.element.querySelector('.' + CLS_ITEM);
        }
        else if (this.element === trgt || tbrNavChk) {
            clst = this.element.querySelector('.' + CLS_ITEM);
        }
        else {
            clst = closest(trgt, '.' + CLS_ITEM);
        }
        return clst;
    };
    Toolbar.prototype.keyHandling = function (clst, e, trgt, navChk, scrollChk) {
        var popObj = this.popObj;
        var rootEle = this.element;
        var popAnimate = { name: 'SlideUp', duration: 100 };
        switch (e.action) {
            case 'moveRight':
                if (rootEle === trgt) {
                    this.elementFocus(clst);
                }
                else if (!navChk) {
                    this.eleFocus(clst, 'next');
                }
                break;
            case 'moveLeft':
                if (!navChk) {
                    this.eleFocus(clst, 'previous');
                }
                break;
            case 'home':
            case 'end':
                var ele = void 0;
                var nodes = void 0;
                if (clst) {
                    var popupCheck = closest(clst, '.e-popup');
                    if (popupCheck) {
                        if (isVisible(this.popObj.element)) {
                            nodes = popupCheck.children;
                            if (e.action === 'home') {
                                ele = nodes[0];
                            }
                            else {
                                ele = nodes[nodes.length - 1];
                            }
                        }
                    }
                    else {
                        nodes = this.element.querySelectorAll('.' + CLS_ITEMS + ' .' + CLS_ITEM);
                        if (e.action === 'home') {
                            ele = nodes[0];
                        }
                        else {
                            ele = nodes[nodes.length - 1];
                        }
                    }
                    if (ele) {
                        this.elementFocus(ele);
                    }
                }
                break;
            case 'moveUp':
            case 'moveDown':
                var value = e.action === 'moveUp' ? 'previous' : 'next';
                if (popObj && closest(trgt, '.e-popup')) {
                    var popEle = popObj.element;
                    var popFrstEle = popEle.firstElementChild;
                    if ((value === 'previous' && popFrstEle === clst) || (value === 'next' && popEle.lastElementChild === clst)) {
                        return;
                    }
                    else {
                        this.eleFocus(clst, value);
                    }
                }
                else if (e.action === 'moveDown') {
                    this.elementFocus(clst);
                }
                break;
            case 'tab':
                if (!scrollChk && !navChk) {
                    var ele_1 = clst.firstElementChild;
                    if (rootEle === trgt) {
                        if (this.activeEle) {
                            this.activeEle.focus();
                        }
                        else {
                            this.activeEleRemove(ele_1);
                            ele_1.focus();
                        }
                        this.element.removeAttribute('tabindex');
                    }
                }
                break;
            case 'popupClose':
                if (popObj) {
                    popObj.hide(popAnimate);
                }
                break;
            case 'popupOpen':
                if (!navChk) {
                    return;
                }
                if (popObj && !isVisible(popObj.element)) {
                    popObj.element.style.top = rootEle.offsetHeight + 'px';
                    popObj.show({ name: 'SlideDown', duration: 100 });
                }
                else {
                    popObj.hide(popAnimate);
                }
                break;
        }
    };
    Toolbar.prototype.keyActionHandler = function (e) {
        e.preventDefault();
        var clst;
        var trgt = e.target;
        var tbrNavChk = trgt.classList.contains(CLS_TBARNAV);
        var tbarScrollChk = trgt.classList.contains(CLS_TBARSCRLNAV);
        clst = this.clstElement(tbrNavChk, trgt);
        if (clst || tbarScrollChk) {
            this.keyHandling(clst, e, trgt, tbrNavChk, tbarScrollChk);
        }
    };
    Toolbar.prototype.eleFocus = function (closest, pos) {
        var sib = Object(closest)[pos + 'ElementSibling'];
        var contains = function (el) {
            return el.classList.contains(CLS_SEPARATOR) || el.classList.contains(CLS_DISABLE);
        };
        if (sib) {
            var skipEle = contains(sib);
            if (skipEle) {
                if (Object(sib)[pos + 'Sibling']) {
                    sib = Object(sib)[pos + 'Sibling'];
                    skipEle = contains(sib);
                    if (skipEle) {
                        this.eleFocus(sib, pos);
                        return;
                    }
                }
            }
            this.elementFocus(sib);
        }
        else if (this.tbarAlign) {
            var elem = Object(closest.parentElement)[pos + 'ElementSibling'];
            if (!isNOU(elem) && elem.children.length > 0) {
                if (pos === 'next') {
                    var el = elem.querySelector('.' + CLS_ITEM);
                    if (contains(el)) {
                        this.eleFocus(el, pos);
                    }
                    else {
                        el.firstElementChild.focus();
                        this.activeEleSwitch(el);
                    }
                }
                else {
                    var el = elem.lastElementChild;
                    if (contains(el)) {
                        this.eleFocus(el, pos);
                    }
                    else {
                        this.elementFocus(el);
                    }
                }
            }
        }
    };
    Toolbar.prototype.clickHandler = function (e) {
        var trgt = e.target;
        var clsList = trgt.classList;
        var ele = this.element;
        var popupNav = closest(trgt, ('.' + CLS_TBARNAV));
        if (!popupNav) {
            popupNav = trgt;
        }
        if (!ele.children[0].classList.contains('e-hscroll') && (clsList.contains(CLS_TBARNAV))) {
            clsList = trgt.querySelector('.e-icons').classList;
        }
        if (clsList.contains(CLS_POPUPICON) || clsList.contains(CLS_POPUPDOWN)) {
            this.popupClickHandler(ele, popupNav, CLS_RTL);
        }
        var itemObj;
        var clst = closest(e.target, '.' + CLS_ITEM);
        if ((isNOU(clst) || clst.classList.contains(CLS_DISABLE)) && !popupNav.classList.contains(CLS_TBARNAV)) {
            return;
        }
        if (clst) {
            itemObj = this.items[this.tbarEle.indexOf(clst)];
        }
        var eventArgs = { originalEvent: e, item: itemObj };
        this.trigger('clicked', eventArgs);
    };
    ;
    Toolbar.prototype.popupClickHandler = function (ele, popupNav, CLS_RTL) {
        var popObj = this.popObj;
        if (isVisible(popObj.element)) {
            popupNav.classList.remove(CLS_TBARNAVACT);
            popObj.hide({ name: 'SlideUp', duration: 100 });
        }
        else {
            if (ele.classList.contains(CLS_RTL)) {
                popObj.enableRtl = true;
                popObj.position = { X: 'left', Y: 'top' };
            }
            if (popObj.offsetX === 0 && !ele.classList.contains(CLS_RTL)) {
                popObj.enableRtl = false;
                popObj.position = { X: 'right', Y: 'top' };
            }
            popObj.dataBind();
            popObj.element.style.top = this.element.offsetHeight + 'px';
            popupNav.classList.add(CLS_TBARNAVACT);
            popObj.show({ name: 'SlideDown', duration: 100 });
        }
    };
    Toolbar.prototype.render = function () {
        this.initialize();
        this.renderControl();
        this.wireEvents();
    };
    Toolbar.prototype.initialize = function () {
        var width = formatUnit(this.width);
        var height = formatUnit(this.height);
        if (Browser.info.name !== 'msie' || this.height !== 'auto') {
            setStyle(this.element, { 'height': height });
        }
        setStyle(this.element, { 'width': width });
        var ariaAttr = {
            'role': 'toolbar', 'aria-disabled': 'false', 'aria-haspopup': 'false', 'aria-orientation': 'horizontal',
        };
        attributes(this.element, ariaAttr);
    };
    Toolbar.prototype.renderControl = function () {
        this.trgtEle = (this.element.children.length > 0) ? this.element.querySelector('div') : null;
        this.tbarAlgEle = { lefts: [], centers: [], rights: [] };
        this.renderItems();
        this.renderOverflowMode();
        if (this.tbarAlign) {
            this.itemPositioning();
        }
    };
    Toolbar.prototype.initHScroll = function (element, innerItems) {
        if (!this.scrollModule && this.checkOverflow(element, innerItems[0])) {
            if (this.tbarAlign) {
                this.element.querySelector('.' + CLS_ITEMS + ' .' + CLS_TBARCENTER).removeAttribute('style');
            }
            this.scrollModule = new HScroll({ scrollStep: 50, enableRtl: this.enableRtl }, innerItems[0]);
            this.remove(this.scrollModule.element, CLS_TBARPOS);
            setStyle(this.element, { overflow: 'hidden' });
        }
    };
    Toolbar.prototype.itemWidthCal = function (items) {
        var width = 0;
        [].slice.call(selectAll('.' + CLS_ITEM), items).forEach(function (el) {
            width += el.offsetWidth;
        });
        return width;
    };
    Toolbar.prototype.checkOverflow = function (element, innerItem) {
        if (isNOU(element) || isNOU(innerItem)) {
            return false;
        }
        var eleWidth = element.offsetWidth;
        var itemWidth;
        if (this.tbarAlign || this.scrollModule) {
            itemWidth = this.itemWidthCal(this.scrollModule ? innerItem.querySelector('.e-hscroll-content') : innerItem);
        }
        else {
            itemWidth = innerItem.offsetWidth;
        }
        var popNav = element.querySelector('.' + CLS_TBARNAV);
        var scrollNav = element.querySelector('.' + CLS_TBARSCRLNAV);
        if (itemWidth > eleWidth - (popNav ? popNav.offsetWidth : (scrollNav ? scrollNav.offsetWidth * 2 : 0))) {
            return true;
        }
        else {
            return false;
        }
    };
    Toolbar.prototype.refreshOverflow = function () {
        this.resize();
    };
    Toolbar.prototype.renderOverflowMode = function () {
        var ele = this.element;
        var innerItems = ele.querySelector('.' + CLS_ITEMS);
        if (ele && ele.children.length > 0) {
            this.offsetWid = ele.offsetWidth;
            switch (this.overflowMode) {
                case 'Scrollable':
                    this.destroyHScroll();
                    this.initHScroll(ele, ele.getElementsByClassName(CLS_ITEMS));
                    break;
                case 'Popup':
                    this.add(this.element, 'e-toolpop');
                    if (this.tbarAlign) {
                        this.removePositioning();
                    }
                    if (this.checkOverflow(ele, innerItems)) {
                        this.createPopupEle(ele, [].slice.call(selectAll('.' + CLS_ITEMS + ' .' + CLS_ITEM, ele)));
                        this.element.querySelector('.' + CLS_TBARNAV).setAttribute('tabIndex', '0');
                    }
                    if (this.tbarAlign) {
                        this.add(innerItems, CLS_TBARPOS);
                        this.itemPositioning();
                    }
                    break;
            }
        }
    };
    Toolbar.prototype.createPopupEle = function (ele, innerEle) {
        var innerNav = ele.querySelector('.' + CLS_TBARNAV);
        if (!innerNav) {
            this.createPopupIcon(ele);
        }
        innerNav = ele.querySelector('.' + CLS_TBARNAV);
        var eleWidth = (ele.offsetWidth - (innerNav.offsetWidth));
        this.element.classList.remove('e-rtl');
        this.checkPriority(ele, innerEle, eleWidth, true);
        if (this.enableRtl) {
            this.element.classList.add('e-rtl');
        }
        this.createPopup();
    };
    Toolbar.prototype.pushingPoppedEle = function (tbarObj, popupPri, ele, eleHeight) {
        var element = tbarObj.element;
        var nodes = selectAll('.' + CLS_TBAROVERFLOW, ele);
        var nodeIndex = 0;
        var poppedEle = [].slice.call(selectAll('.' + CLS_POPUP, element.querySelector('.' + CLS_ITEMS)));
        var nodePri = 0;
        poppedEle.forEach(function (el, index) {
            nodes = selectAll('.' + CLS_TBAROVERFLOW, ele);
            if (el.classList.contains(CLS_TBAROVERFLOW) && nodes.length > 0) {
                if (tbarObj.tbResize && nodes.length > index) {
                    ele.insertBefore(el, nodes[index]);
                    ++nodePri;
                }
                else {
                    ele.insertBefore(el, ele.children[nodes.length]);
                    ++nodePri;
                }
            }
            else if (el.classList.contains(CLS_TBAROVERFLOW)) {
                ele.insertBefore(el, ele.firstChild);
                ++nodePri;
            }
            else if (tbarObj.tbResize && el.classList.contains(CLS_POPOVERFLOW) && ele.children.length > 0 && nodes.length === 0) {
                ele.insertBefore(el, ele.firstChild);
                ++nodePri;
            }
            else if (el.classList.contains(CLS_POPOVERFLOW)) {
                popupPri.push(el);
            }
            else if (tbarObj.tbResize) {
                ele.insertBefore(el, ele.childNodes[nodeIndex + nodePri]);
                ++nodeIndex;
            }
            else {
                ele.appendChild(el);
            }
            setStyle(el, { display: '', height: eleHeight + 'px' });
        });
        popupPri.forEach(function (el) {
            ele.appendChild(el);
        });
        var tbarEle = selectAll('.' + CLS_ITEM, element.querySelector('.' + CLS_ITEMS));
        for (var i = tbarEle.length - 1; i >= 0; i--) {
            var tbarElement = tbarEle[i];
            if (tbarElement.classList.contains(CLS_SEPARATOR)) {
                setStyle(tbarElement, { display: 'none' });
            }
            else {
                break;
            }
        }
    };
    Toolbar.prototype.createPopup = function () {
        var element = this.element;
        var eleHeight;
        var eleItem;
        eleItem = element.querySelector('.' + CLS_ITEM + ':not(.' + CLS_SEPARATOR + ' ):not(.' + CLS_POPUP + ' )');
        eleHeight = (element.style.height === 'auto' || element.style.height === '') ? null : eleItem.offsetHeight;
        var ele;
        var popupPri = [];
        if (element.querySelector('#' + element.id + '_popup.' + CLS_POPUPCLASS)) {
            ele = element.querySelector('#' + element.id + '_popup.' + CLS_POPUPCLASS);
        }
        else {
            ele = buildTag('div', { id: element.id + '_popup', className: CLS_POPUPCLASS });
        }
        this.pushingPoppedEle(this, popupPri, ele, eleHeight);
        this.popupInit(element, ele);
    };
    Toolbar.prototype.popupInit = function (element, ele) {
        if (!this.popObj) {
            element.appendChild(ele);
            setStyle(this.element, { overflow: '' });
            var popup = new Popup(null, {
                relateTo: this.element,
                offsetY: (element.offsetHeight),
                enableRtl: this.enableRtl,
                open: this.popupOpen.bind(this),
                close: this.popupClose,
                position: this.enableRtl ? { X: 'left', Y: 'top' } : { X: 'right', Y: 'top' }
            });
            popup.appendTo(ele);
            EventHandler.add(document, 'scroll', this.docEvent.bind(this));
            EventHandler.add(document, 'click ', this.docEvent.bind(this));
            popup.element.style.maxHeight = popup.element.offsetHeight + 'px';
            popup.hide();
            this.popObj = popup;
            this.element.setAttribute('aria-haspopup', 'true');
        }
        else {
            var popupEle = this.popObj.element;
            setStyle(popupEle, { maxHeight: '', display: 'block' });
            setStyle(popupEle, { maxHeight: popupEle.offsetHeight + 'px', display: '' });
        }
    };
    Toolbar.prototype.popupOpen = function (e) {
        var popObj = this.popObj;
        var popupEle = this.popObj.element;
        var toolEle = this.popObj.element.parentElement;
        var popupNav = toolEle.querySelector('.' + CLS_TBARNAV);
        setStyle(popObj.element, { height: 'auto', maxHeight: '' });
        popObj.element.style.maxHeight = popObj.element.offsetHeight + 'px';
        var popupElePos = popupEle.offsetTop + popupEle.offsetHeight + calculatePosition(toolEle).top;
        var popIcon = popupNav.firstElementChild;
        popupNav.classList.add(CLS_TBARNAVACT);
        classList(popIcon, [CLS_POPUPICON], [CLS_POPUPDOWN]);
        var scrollVal = isNOU(window.scrollY) ? 0 : window.scrollY;
        if ((window.innerHeight + scrollVal) < popupElePos) {
            var overflowHeight = (popupEle.offsetHeight - ((popupElePos - window.innerHeight - scrollVal) + 5));
            popObj.height = overflowHeight + 'px';
            setStyle(popObj.element, { maxHeight: overflowHeight + 'px' });
        }
    };
    Toolbar.prototype.popupClose = function (e) {
        var element = this.element.parentElement;
        var popupNav = element.querySelector('.' + CLS_TBARNAV);
        var popIcon = popupNav.firstElementChild;
        popupNav.classList.remove(CLS_TBARNAVACT);
        classList(popIcon, [CLS_POPUPDOWN], [CLS_POPUPICON]);
    };
    Toolbar.prototype.checkPriority = function (ele, inEle, eleWidth, pre) {
        var len = inEle.length;
        var eleWid = eleWidth;
        var sepCheck = 0;
        var itemCount = 0;
        var itemPopCount = 0;
        var checkClass = function (ele, val) {
            var rVal = false;
            val.forEach(function (cls) {
                if (ele.classList.contains(cls)) {
                    rVal = true;
                }
            });
            return rVal;
        };
        for (var i = len - 1; i >= 0; i--) {
            var mrgn = parseFloat((window.getComputedStyle(inEle[i])).marginRight);
            mrgn += parseFloat((window.getComputedStyle(inEle[i])).marginLeft);
            if (inEle[i] === this.tbarEle[0]) {
                this.tbarEleMrgn = mrgn;
            }
            if ((inEle[i].offsetLeft + inEle[i].offsetWidth + mrgn) > eleWidth) {
                if (inEle[i].classList.contains(CLS_SEPARATOR)) {
                    if (sepCheck > 0 && itemCount === itemPopCount) {
                        var sepEle = inEle[i + itemCount + (sepCheck - 1)];
                        if (checkClass(sepEle, [CLS_SEPARATOR, CLS_TBARIGNORE])) {
                            setStyle(sepEle, { display: 'none' });
                        }
                    }
                    sepCheck++;
                    itemCount = 0;
                    itemPopCount = 0;
                }
                else {
                    itemCount++;
                }
                if (inEle[i].classList.contains(CLS_TBAROVERFLOW) && pre) {
                    eleWidth -= (inEle[i].offsetWidth + (mrgn));
                }
                else if (!checkClass(inEle[i], [CLS_SEPARATOR, CLS_TBARIGNORE])) {
                    inEle[i].classList.add(CLS_POPUP);
                    setStyle(inEle[i], { display: 'none', minWidth: inEle[i].offsetWidth + 'px' });
                    itemPopCount++;
                }
                else {
                    eleWidth -= (inEle[i].offsetWidth + (mrgn));
                }
            }
        }
        if (pre) {
            var popedEle = selectAll('.' + CLS_ITEM + ':not(.' + CLS_POPUP + ')', this.element);
            this.checkPriority(ele, popedEle, eleWid, false);
        }
    };
    Toolbar.prototype.createPopupIcon = function (element) {
        var id = element.id.concat('_nav');
        var className = 'e-' + element.id.concat('_nav ' + CLS_POPUPNAV);
        var nav = buildTag('div', { id: id, className: className });
        if (Browser.info.name === 'msie' || Browser.info.name === 'edge') {
            nav.classList.add('e-ie-align');
        }
        var navItem = buildTag('div', { className: CLS_POPUPDOWN + ' e-icons' });
        nav.appendChild(navItem);
        nav.setAttribute('tabindex', '0');
        element.appendChild(nav);
    };
    Toolbar.prototype.tbarPriRef = function (inEle, indx, sepPri, el, des, elWid, wid, ig) {
        var ignoreCount = ig;
        var popEle = this.popObj.element;
        var query = '.' + CLS_ITEM + ':not(.' + CLS_SEPARATOR + '):not(.' + CLS_TBAROVERFLOW + ')';
        var priEleCnt = selectAll('.' + CLS_POPUP + ':not(.' + CLS_TBAROVERFLOW + ')', popEle).length;
        var checkClass = function (ele, val) {
            return ele.classList.contains(val);
        };
        if (selectAll(query, inEle).length === 0) {
            var eleSep = inEle.children[indx - (indx - sepPri) - 1];
            var ignoreCheck = (!isNOU(eleSep) && checkClass(eleSep, CLS_TBARIGNORE));
            if ((!isNOU(eleSep) && checkClass(eleSep, CLS_SEPARATOR) && !isVisible(eleSep)) || ignoreCheck) {
                var sepDisplay = 'none';
                eleSep.style.display = 'inherit';
                var eleSepWidth = eleSep.offsetWidth + (parseFloat(window.getComputedStyle(eleSep).marginRight) * 2);
                var prevSep = eleSep.previousElementSibling;
                if ((elWid + eleSepWidth) < wid || des) {
                    inEle.insertBefore(el, inEle.children[(indx + ignoreCount) - (indx - sepPri)]);
                    if (!isNOU(prevSep)) {
                        prevSep.style.display = '';
                    }
                }
                else {
                    if (prevSep.classList.contains(CLS_SEPARATOR)) {
                        prevSep.style.display = sepDisplay;
                    }
                }
                eleSep.style.display = '';
            }
            else {
                inEle.insertBefore(el, inEle.children[(indx + ignoreCount) - (indx - sepPri)]);
            }
        }
        else {
            inEle.insertBefore(el, inEle.children[(indx + ignoreCount) - priEleCnt]);
        }
    };
    Toolbar.prototype.popupRefresh = function (popupEle, destroy) {
        var ele = this.element;
        var popNav = ele.querySelector('.' + CLS_TBARNAV);
        var innerEle = ele.querySelector('.' + CLS_ITEMS);
        if (isNOU(popNav)) {
            return;
        }
        innerEle.removeAttribute('style');
        popupEle.style.display = 'block';
        var width = ele.offsetWidth - (popNav.offsetWidth + innerEle.offsetWidth);
        this.popupEleRefresh(width, popupEle, destroy);
        popupEle.style.display = '';
        if (popupEle.children.length === 0) {
            detach(popNav);
            this.popObj.destroy();
            detach(this.popObj.element);
            this.popObj = null;
            ele.setAttribute('aria-haspopup', 'false');
            ele.classList.remove('e-toolpop');
        }
    };
    Toolbar.prototype.ignoreEleFetch = function (index, innerEle) {
        var ignoreEle = [].slice.call(innerEle.querySelectorAll('.' + CLS_TBARIGNORE));
        var ignoreInx = [];
        var count = 0;
        if (ignoreEle.length > 0) {
            ignoreEle.forEach(function (ele) {
                ignoreInx.push([].slice.call(innerEle.children).indexOf(ele));
            });
        }
        else {
            return 0;
        }
        ignoreInx.forEach(function (val) {
            if (val <= index) {
                count++;
            }
        });
        return count;
    };
    Toolbar.prototype.popupEleRefresh = function (width, popupEle, destroy) {
        var eleSplice = this.tbarEle;
        var priEleCnt;
        var index;
        var innerEle = this.element.querySelector('.' + CLS_ITEMS);
        var ignoreCount = 0;
        var _loop_1 = function (el) {
            el.style.position = 'absolute';
            var elWidth = el.offsetWidth;
            var btnText = el.querySelector('.' + CLS_TBARBTNTEXT);
            if (el.classList.contains('e-tbtn-align') || el.classList.contains(CLS_TBARTEXT)) {
                var btn = el.children[0];
                if (!isNOU(btnText) && el.classList.contains(CLS_TBARTEXT)) {
                    btnText.style.display = 'none';
                }
                else if (!isNOU(btnText) && el.classList.contains(CLS_POPUPTEXT)) {
                    btnText.style.display = 'block';
                }
                btn.style.minWidth = '0%';
                elWidth = el.offsetWidth;
                btn.style.minWidth = '';
                if (!isNOU(btnText)) {
                    btnText.style.display = '';
                }
            }
            if (el === this_1.tbarEle[0]) {
                elWidth += this_1.tbarEleMrgn;
            }
            el.style.position = '';
            if (elWidth < width || destroy) {
                el.style.minWidth = '';
                if (!el.classList.contains(CLS_POPOVERFLOW)) {
                    el.classList.remove(CLS_POPUP);
                }
                index = this_1.tbarEle.indexOf(el);
                if (this_1.tbarAlign) {
                    var pos = this_1.items[index].align;
                    index = this_1.tbarAlgEle[(pos + 's')].indexOf(el);
                    eleSplice = this_1.tbarAlgEle[(pos + 's')];
                    innerEle = this_1.element.querySelector('.' + CLS_ITEMS + ' .' + 'e-toolbar-' + pos);
                }
                var sepBeforePri_1 = 0;
                eleSplice.slice(0, index).forEach(function (el) {
                    if (el.classList.contains(CLS_TBAROVERFLOW) || el.classList.contains(CLS_SEPARATOR)) {
                        if (el.classList.contains(CLS_SEPARATOR)) {
                            el.style.display = '';
                            width -= el.offsetWidth;
                        }
                        sepBeforePri_1++;
                    }
                });
                ignoreCount = this_1.ignoreEleFetch(index, innerEle);
                if (el.classList.contains(CLS_TBAROVERFLOW)) {
                    this_1.tbarPriRef(innerEle, index, sepBeforePri_1, el, destroy, elWidth, width, ignoreCount);
                    width -= el.offsetWidth;
                }
                else if (index === 0) {
                    innerEle.insertBefore(el, innerEle.firstChild);
                    width -= el.offsetWidth;
                }
                else {
                    priEleCnt = selectAll('.' + CLS_TBAROVERFLOW, this_1.popObj.element).length;
                    innerEle.insertBefore(el, innerEle.children[(index + ignoreCount) - priEleCnt]);
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
    };
    Toolbar.prototype.removePositioning = function () {
        var item = this.element.querySelector('.' + CLS_ITEMS);
        if (isNOU(item) || !item.classList.contains(CLS_TBARPOS)) {
            return;
        }
        this.remove(item, CLS_TBARPOS);
        var innerItem = [].slice.call(item.childNodes);
        innerItem[1].removeAttribute('style');
        innerItem[2].removeAttribute('style');
    };
    Toolbar.prototype.refreshPositioning = function () {
        var item = this.element.querySelector('.' + CLS_ITEMS);
        this.add(item, CLS_TBARPOS);
        this.itemPositioning();
    };
    Toolbar.prototype.itemPositioning = function () {
        var item = this.element.querySelector('.' + CLS_ITEMS);
        if (isNOU(item) || !item.classList.contains(CLS_TBARPOS)) {
            return;
        }
        var popupNav = this.element.querySelector('.' + CLS_TBARNAV);
        var innerItem;
        if (this.scrollModule) {
            innerItem = [].slice.call(item.querySelector('.' + CLS_TBARSCROLL).children);
        }
        else {
            innerItem = [].slice.call(item.childNodes);
        }
        var margin = innerItem[0].offsetWidth + innerItem[2].offsetWidth;
        var tbarWid = this.element.offsetWidth;
        if (popupNav) {
            tbarWid -= popupNav.offsetWidth;
            innerItem[2].style.right = popupNav.offsetWidth + 'px';
        }
        if (tbarWid <= margin) {
            return;
        }
        var value = (((tbarWid - margin)) - innerItem[1].offsetWidth) / 2;
        innerItem[1].removeAttribute('style');
        var mrgn = (innerItem[0].offsetWidth + value) + 'px';
        this.enableRtl ? innerItem[1].style.marginRight = mrgn : innerItem[1].style.marginLeft = mrgn;
    };
    Toolbar.prototype.tbarItemAlign = function (item, itemEle, pos) {
        var _this = this;
        var alignDiv = [];
        alignDiv.push(buildTag('div', { className: CLS_TBARLEFT }));
        alignDiv.push(buildTag('div', { className: CLS_TBARCENTER }));
        alignDiv.push(buildTag('div', { className: CLS_TBARRIGHT }));
        if (pos === 0 && item.align !== 'left') {
            alignDiv.forEach(function (ele) {
                itemEle.appendChild(ele);
            });
            this.tbarAlign = true;
            this.add(itemEle, CLS_TBARPOS);
        }
        else if (item.align !== 'left') {
            var alignEle = itemEle.childNodes;
            var leftAlign_1 = alignDiv[0];
            [].slice.call(alignEle).forEach(function (el) {
                _this.tbarAlgEle.lefts.push(el);
                leftAlign_1.appendChild(el);
            });
            itemEle.appendChild(leftAlign_1);
            itemEle.appendChild(alignDiv[1]);
            itemEle.appendChild(alignDiv[2]);
            this.tbarAlign = true;
            this.add(itemEle, CLS_TBARPOS);
        }
    };
    Toolbar.prototype.ctrlTemplate = function () {
        var _this = this;
        this.ctrlTem = this.trgtEle.cloneNode(true);
        this.add(this.trgtEle, CLS_ITEMS);
        this.tbarEle = [];
        var innerEle = [].slice.call(this.trgtEle.children);
        innerEle.forEach(function (ele) {
            if (ele.tagName === 'DIV') {
                _this.tbarEle.push(ele);
                ele.setAttribute('aria-disabled', 'false');
                _this.add(ele, CLS_ITEM);
            }
        });
    };
    Toolbar.prototype.renderItems = function () {
        var ele = this.element;
        var itemEleDom;
        var innerItem;
        var innerPos;
        var items = this.items;
        if (ele && ele.children.length > 0) {
            itemEleDom = ele.querySelector('.' + CLS_ITEMS);
        }
        if (this.trgtEle != null) {
            this.ctrlTemplate();
        }
        else if (ele && items.length > 0) {
            if (!itemEleDom) {
                itemEleDom = buildTag('div', { className: CLS_ITEMS });
            }
            for (var i = 0; i < items.length; i++) {
                innerItem = this.renderSubComponent(items[i]);
                if (this.tbarEle.indexOf(innerItem) === -1) {
                    this.tbarEle.push(innerItem);
                }
                if (!this.tbarAlign) {
                    this.tbarItemAlign(items[i], itemEleDom, i);
                }
                innerPos = itemEleDom.querySelector('.e-toolbar-' + items[i].align.toLowerCase());
                if (innerPos) {
                    this.tbarAlgEle[(items[i].align + 's')].push(innerItem);
                    innerPos.appendChild(innerItem);
                }
                else {
                    itemEleDom.appendChild(innerItem);
                }
            }
            ele.appendChild(itemEleDom);
        }
    };
    Toolbar.prototype.setAttr = function (attr, element) {
        var key = Object.keys(attr);
        var keyVal;
        for (var i = 0; i < key.length; i++) {
            keyVal = key[i];
            keyVal === 'class' ? this.add(element, attr[keyVal]) : element.setAttribute(keyVal, attr[keyVal]);
        }
    };
    Toolbar.prototype.enableItems = function (items, isEnable) {
        var elements = items;
        var len = elements.length;
        if (isNOU(isEnable)) {
            isEnable = true;
        }
        var enable = function (isEnable, ele) {
            if (isEnable) {
                ele.classList.remove(CLS_DISABLE);
                ele.setAttribute('aria-disabled', 'false');
            }
            else {
                ele.classList.add(CLS_DISABLE);
                ele.setAttribute('aria-disabled', 'true');
            }
        };
        if (len && len > 1) {
            for (var _i = 0, _a = [].slice.call(elements); _i < _a.length; _i++) {
                var ele = _a[_i];
                enable(isEnable, ele);
            }
            isEnable ? removeClass(elements, CLS_DISABLE) : addClass(elements, CLS_DISABLE);
        }
        else {
            var ele = void 0;
            ele = (len && len === 1) ? elements[0] : items;
            enable(isEnable, ele);
        }
    };
    Toolbar.prototype.addItems = function (items, index) {
        var innerItems;
        var itemsDiv = this.element.querySelector('.' + CLS_ITEMS);
        var innerEle;
        var itemAgn = 'left';
        if (isNOU(index)) {
            index = 0;
        }
        items.forEach(function (e) {
            if (!isNOU(e.align) && e.align !== 'left' && itemAgn === 'left') {
                itemAgn = e.align;
            }
        });
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (isNOU(item.type)) {
                item.type = 'Button';
            }
            innerItems = selectAll('.' + CLS_ITEM, this.element);
            item.align = itemAgn;
            innerEle = this.renderSubComponent(item);
            if (this.tbarEle.length >= index && innerItems.length > 0) {
                this.destroyMode();
                if (this.tbarAlign) {
                    var algIndex = item.align[0] === 'l' ? 0 : item.align[0] === 'c' ? 1 : 2;
                    var ele = void 0;
                    ele = closest(innerItems[0], '.' + CLS_ITEMS).children[algIndex];
                    ele.insertBefore(innerEle, ele.children[index]);
                    this.tbarAlgEle[(item.align + 's')].splice(index, 0, innerEle);
                    this.refreshPositioning();
                }
                else {
                    innerItems[0].parentNode.insertBefore(innerEle, innerItems[index]);
                }
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
        var elements = args;
        var index;
        var innerItems = [].slice.call(selectAll('.' + CLS_ITEM, this.element));
        if (typeof (elements) === 'number') {
            index = parseInt(args.toString(), 10);
            this.removeItemByIndex(index, innerItems);
        }
        else {
            if (elements && elements.length > 1) {
                for (var _i = 0, _a = [].slice.call(elements); _i < _a.length; _i++) {
                    var ele = _a[_i];
                    index = this.tbarEle.indexOf(ele);
                    this.removeItemByIndex(index, innerItems);
                    innerItems = selectAll('.' + CLS_ITEM, this.element);
                }
            }
            else {
                var ele = (elements && elements.length && elements.length === 1) ? elements[0] : args;
                index = innerItems.indexOf(ele);
                this.removeItemByIndex(index, innerItems);
            }
        }
        this.resize();
    };
    Toolbar.prototype.removeItemByIndex = function (index, innerItems) {
        if (this.tbarEle[index] && innerItems[index]) {
            var eleIdx = this.tbarEle.indexOf(innerItems[index]);
            if (this.tbarAlign) {
                var indexAgn = this.tbarAlgEle[(this.items[eleIdx].align + 's')].indexOf(this.tbarEle[eleIdx]);
                this.tbarAlgEle[(this.items[eleIdx].align + 's')].splice(indexAgn, 1);
            }
            detach(innerItems[index]);
            this.items.splice(eleIdx, 1);
            this.tbarEle.splice(eleIdx, 1);
        }
    };
    Toolbar.prototype.templateRender = function (templateProp, innerEle, item) {
        var itemType = item.type;
        var eleObj = templateProp;
        var isComponent;
        if (typeof (templateProp) === 'object') {
            isComponent = typeof (eleObj.appendTo) === 'function';
        }
        if (typeof (templateProp) === 'string' || !isComponent) {
            var templateFn = void 0;
            var val = templateProp;
            val = (typeof (templateProp) === 'string') ? templateProp.trim() : templateProp;
            var e = void 0;
            try {
                if (document.querySelectorAll(val).length) {
                    var ele = document.querySelector(val);
                    templateFn = templateCompiler(ele.outerHTML.trim());
                    detach(ele);
                }
            }
            catch (e) {
                templateFn = templateCompiler(val);
            }
            if (!isNOU(templateFn) && templateFn().length > 0) {
                [].slice.call(templateFn()).forEach(function (ele) {
                    if (!isNOU(ele.tagName)) {
                        ele.style.display = '';
                    }
                    innerEle.appendChild(ele);
                });
            }
        }
        else if (itemType === 'Input') {
            var ele = buildTag('input');
            item.id ? (ele.id = item.id) : (ele.id = getUniqueID('tbr-ipt'));
            innerEle.appendChild(ele);
            eleObj.appendTo(ele);
        }
        this.add(innerEle, CLS_TEMPLATE);
        this.tbarEle.push(innerEle);
    };
    Toolbar.prototype.buttonRendering = function (item, innerEle) {
        var dom = buildTag('button', { className: CLS_TBARBTN });
        dom.setAttribute('type', 'button');
        var textStr = item.text;
        var iconCss;
        var iconPos;
        item.id ? (dom.id = item.id) : dom.id = getUniqueID('e-tbr-btn');
        var btnTxt = buildTag('div', { className: 'e-tbar-btn-text' });
        if (textStr) {
            btnTxt.innerHTML = textStr;
            dom.appendChild(btnTxt);
            dom.classList.add('e-tbtn-txt');
        }
        else {
            this.add(innerEle, 'e-tbtn-align');
        }
        if (item.prefixIcon || item.suffixIcon) {
            if ((item.prefixIcon && item.suffixIcon) || item.prefixIcon) {
                iconCss = item.prefixIcon + ' e-icons';
                iconPos = 'left';
            }
            else {
                iconCss = item.suffixIcon + ' e-icons';
                iconPos = 'right';
            }
        }
        new Button({ iconCss: iconCss, iconPosition: iconPos }, dom);
        if (item.width) {
            setStyle(dom, { 'width': formatUnit(item.width) });
        }
        return dom;
    };
    Toolbar.prototype.renderSubComponent = function (item) {
        var innerEle;
        var dom;
        innerEle = buildTag('div', { className: CLS_ITEM });
        innerEle.setAttribute('aria-disabled', 'false');
        if (!this.tbarEle) {
            this.tbarEle = [];
        }
        if (item.htmlAttributes) {
            this.setAttr(item.htmlAttributes, innerEle);
        }
        if (item.tooltipText) {
            innerEle.setAttribute('title', item.tooltipText);
        }
        if (item.cssClass) {
            innerEle.className = innerEle.className + ' ' + item.cssClass;
        }
        if (item.template) {
            this.templateRender(item.template, innerEle, item);
        }
        else {
            switch (item.type) {
                case 'Button':
                    dom = this.buttonRendering(item, innerEle);
                    dom.setAttribute('tabindex', '-1');
                    innerEle.appendChild(dom);
                    innerEle.addEventListener('click', this.itemClick.bind(this));
                    break;
                case 'Separator':
                    this.add(innerEle, CLS_SEPARATOR);
                    break;
            }
        }
        if (item.showTextOn) {
            var sTxt = item.showTextOn;
            if (sTxt === 'Toolbar') {
                this.add(innerEle, CLS_POPUPTEXT);
                this.add(innerEle, 'e-tbtn-align');
            }
            else if (sTxt === 'Overflow') {
                this.add(innerEle, CLS_TBARTEXT);
            }
        }
        if (item.overflow) {
            var overflow = item.overflow;
            if (overflow === 'Show') {
                this.add(innerEle, CLS_TBAROVERFLOW);
            }
            else if (overflow === 'Hide') {
                if (!innerEle.classList.contains(CLS_SEPARATOR)) {
                    this.add(innerEle, CLS_POPOVERFLOW);
                }
            }
        }
        return innerEle;
    };
    Toolbar.prototype.itemClick = function (e) {
        this.activeEleSwitch(e.currentTarget);
    };
    Toolbar.prototype.activeEleSwitch = function (ele) {
        this.activeEleRemove(ele.firstElementChild);
        this.activeEle.focus();
    };
    Toolbar.prototype.activeEleRemove = function (curEle) {
        if (!isNOU(this.activeEle)) {
            this.activeEle.setAttribute('tabindex', '-1');
        }
        this.activeEle = curEle;
        if (isNOU(this.trgtEle) && !curEle.parentElement.classList.contains(CLS_TEMPLATE)) {
            curEle.removeAttribute('tabindex');
        }
        else {
            this.activeEle.setAttribute('tabindex', '0');
        }
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
        if (this.tbarAlign) {
            this.itemPositioning();
        }
        if (this.popObj) {
            this.popObj.hide();
        }
        var checkOverflow = this.checkOverflow(ele, ele.getElementsByClassName(CLS_ITEMS)[0]);
        if (!checkOverflow) {
            this.destroyHScroll();
        }
        if (checkOverflow && this.scrollModule && (this.offsetWid === ele.offsetWidth)) {
            return;
        }
        if (this.offsetWid > ele.offsetWidth || checkOverflow) {
            this.renderOverflowMode();
        }
        if (this.popObj) {
            if (this.tbarAlign) {
                this.removePositioning();
            }
            this.popupRefresh(this.popObj.element, false);
            if (this.tbarAlign) {
                this.refreshPositioning();
            }
        }
        this.offsetWid = ele.offsetWidth;
        this.tbResize = false;
    };
    Toolbar.prototype.onPropertyChanged = function (newProp, oldProp) {
        var tEle = this.element;
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'items':
                    this.destroyMode();
                    this.destroyItems();
                    this.renderItems();
                    this.renderOverflowMode();
                    break;
                case 'width':
                    var wid = tEle.offsetWidth;
                    setStyle(tEle, { 'width': formatUnit(newProp.width) });
                    this.renderOverflowMode();
                    if (this.popObj && wid < tEle.offsetWidth) {
                        this.popupRefresh(this.popObj.element, false);
                    }
                    break;
                case 'height':
                    setStyle(this.element, { 'height': formatUnit(newProp.height) });
                    break;
                case 'overflowMode':
                    this.destroyMode();
                    this.renderOverflowMode();
                    if (this.enableRtl) {
                        this.add(tEle, CLS_RTL);
                    }
                    break;
                case 'enableRtl':
                    newProp.enableRtl ? this.add(tEle, CLS_RTL) : this.remove(tEle, CLS_RTL);
                    if (!isNOU(this.scrollModule)) {
                        newProp.enableRtl ? this.add(this.scrollModule.element, CLS_RTL) : this.remove(this.scrollModule.element, CLS_RTL);
                    }
                    if (!isNOU(this.popObj)) {
                        newProp.enableRtl ? this.add(this.popObj.element, CLS_RTL) : this.remove(this.popObj.element, CLS_RTL);
                    }
                    break;
            }
        }
    };
    return Toolbar;
}(Component));
__decorate([
    Collection([], Item)
], Toolbar.prototype, "items", void 0);
__decorate([
    Property('auto')
], Toolbar.prototype, "width", void 0);
__decorate([
    Property('auto')
], Toolbar.prototype, "height", void 0);
__decorate([
    Property('Scrollable')
], Toolbar.prototype, "overflowMode", void 0);
__decorate([
    Property(false)
], Toolbar.prototype, "enableRtl", void 0);
__decorate([
    Event()
], Toolbar.prototype, "clicked", void 0);
__decorate([
    Event()
], Toolbar.prototype, "created", void 0);
__decorate([
    Event()
], Toolbar.prototype, "destroyed", void 0);
__decorate([
    Event()
], Toolbar.prototype, "beforeCreate", void 0);
Toolbar = __decorate([
    NotifyPropertyChanges
], Toolbar);
export { Toolbar };
export var toolbarBuilder = CreateBuilder(Toolbar);
