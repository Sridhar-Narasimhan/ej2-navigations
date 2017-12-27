import { Animation, Browser, ChildProperty, Collection, Complex, Component, Draggable, Droppable, Event, EventHandler, KeyboardEvents, L10n, NotifyPropertyChanges, Property, Touch, addClass, append, attributes, classList, closest, compile, createElement, detach, formatUnit, getInstance, getUniqueID, getValue, isNullOrUndefined, isUndefined, isVisible, matches, remove, removeClass, rippleEffect, select, selectAll, setStyleAttribute, setValue } from '@syncfusion/ej2-base';
import { Popup, calculatePosition, createSpinner, fit, getScrollableParent, hideSpinner, isCollide, showSpinner } from '@syncfusion/ej2-popups';
import { Button, createCheckBox } from '@syncfusion/ej2-buttons';
import { ListBase } from '@syncfusion/ej2-lists';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { Input } from '@syncfusion/ej2-inputs';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CLS_ROOT = 'e-hscroll';
var CLS_RTL = 'e-rtl';
var CLS_DISABLE = 'e-overlay';
var CLS_HSCROLLBAR = 'e-hscroll-bar';
var CLS_HSCROLLCON = 'e-hscroll-content';
var CLS_NAVARROW = 'e-nav-arrow';
var CLS_NAVRIGHTARROW = 'e-nav-right-arrow';
var CLS_NAVLEFTARROW = 'e-nav-left-arrow';
var CLS_HSCROLLNAV = 'e-scroll-nav';
var CLS_HSCROLLNAVRIGHT = 'e-scroll-right-nav';
var CLS_HSCROLLNAVLEFT = 'e-scroll-left-nav';
var CLS_DEVICE = 'e-scroll-device';
/**
 * HScroll module is introduces horizontal scroller when content exceeds the current viewing area.
 * It can be useful for the components like Toolbar, Tab which needs horizontal scrolling alone.
 * Hidden content can be view by touch moving or icon click.
 * ```html
 * <div id="scroll"/>
 * <script>
 *   var scrollObj = new HScroll();
 *   scrollObj.appendTo("#scroll");
 * </script>
 * ```
 */
var HScroll = /** @class */ (function (_super) {
    __extends(HScroll, _super);
    /**
     * Initializes a new instance of the HScroll class.
     * @param options  - Specifies HScroll model properties as options.
     * @param element  - Specifies the element for which horizontal scrolling applies.
     */
    function HScroll(options, element) {
        return _super.call(this, options, element) || this;
    }
    /**
     * Initialize the event handler
     * @private
     */
    HScroll.prototype.preRender = function () {
        this.browser = Browser.info.name;
        this.browserCheck = this.browser === 'mozilla';
        this.isDevice = Browser.isDevice;
        var element = this.element;
        this.ieCheck = this.browser === 'edge' || this.browser === 'msie';
        this.initialize();
        if (element.id === '') {
            element.id = getUniqueID('hscroll');
            this.uniqueId = true;
        }
        element.style.display = 'block';
        if (this.enableRtl) {
            element.classList.add(CLS_RTL);
        }
    };
    /**
     * To Initialize the control rendering
     * @private
     */
    HScroll.prototype.render = function () {
        this.touchModule = new Touch(this.element, { scroll: this.touchHandler.bind(this) });
        if (!this.isDevice) {
            this.createNavIcon(this.element);
            EventHandler.add(this.scrollEle, 'scroll', this.scrollHandler, this);
        }
        else {
            this.element.classList.add(CLS_DEVICE);
        }
    };
    HScroll.prototype.initialize = function () {
        var scrollEle = createElement('div', { className: CLS_HSCROLLCON });
        var scrollDiv = createElement('div', { className: CLS_HSCROLLBAR });
        scrollDiv.setAttribute('tabindex', '-1');
        var ele = this.element;
        var innerEle = [].slice.call(ele.children);
        for (var _i = 0, innerEle_1 = innerEle; _i < innerEle_1.length; _i++) {
            var ele_1 = innerEle_1[_i];
            scrollEle.appendChild(ele_1);
        }
        scrollDiv.appendChild(scrollEle);
        ele.appendChild(scrollDiv);
        scrollDiv.style.overflowX = 'hidden';
        this.scrollEle = scrollDiv;
        this.scrollItems = scrollEle;
    };
    HScroll.prototype.getPersistData = function () {
        var keyEntity = ['scrollStep'];
        return this.addOnPersist(keyEntity);
    };
    /**
     * Returns the current module name.
     * @returns string
     * @private
     */
    HScroll.prototype.getModuleName = function () {
        return 'hScroll';
    };
    /**
     * Removes the control from the DOM and also removes all its related events.
     * @returns void
     */
    HScroll.prototype.destroy = function () {
        var ele = this.element;
        ele.style.display = '';
        ele.classList.remove(CLS_ROOT);
        var nav = selectAll('#' + ele.id + '_nav.e-' + ele.id + '_nav');
        for (var _i = 0, _a = [].slice.call(this.scrollItems.children); _i < _a.length; _i++) {
            var elem = _a[_i];
            ele.appendChild(elem);
        }
        if (this.uniqueId) {
            this.element.removeAttribute('id');
        }
        detach(this.scrollEle);
        if (nav.length > 0) {
            detach(nav[0]);
            detach(nav[1]);
        }
        EventHandler.remove(this.scrollEle, 'scroll', this.scrollHandler);
        this.touchModule.destroy();
        this.touchModule = null;
        _super.prototype.destroy.call(this);
    };
    HScroll.prototype.createNavIcon = function (element) {
        var id = element.id.concat('_nav');
        var clsRight = 'e-' + element.id.concat('_nav ' + CLS_HSCROLLNAV + ' ' + CLS_HSCROLLNAVRIGHT);
        var nav = createElement('div', { id: id, className: clsRight });
        nav.setAttribute('aria-disabled', 'false');
        var navItem = createElement('div', { className: CLS_NAVRIGHTARROW + ' ' + CLS_NAVARROW + ' e-icons' });
        var clsLeft = 'e-' + element.id.concat('_nav ' + CLS_HSCROLLNAV + ' ' + CLS_HSCROLLNAVLEFT);
        var navEle = createElement('div', { id: id, className: clsLeft + ' ' + CLS_DISABLE });
        navEle.setAttribute('aria-disabled', 'true');
        var navLeftItem = createElement('div', { className: CLS_NAVLEFTARROW + ' ' + CLS_NAVARROW + ' e-icons' });
        navEle.appendChild(navLeftItem);
        nav.appendChild(navItem);
        nav.setAttribute('tabindex', '0');
        element.appendChild(nav);
        element.insertBefore(navEle, element.firstChild);
        if (this.ieCheck) {
            nav.classList.add('e-ie-align');
            navEle.classList.add('e-ie-align');
        }
        this.eventBinding([nav, navEle]);
    };
    HScroll.prototype.onKeyPress = function (e) {
        var _this = this;
        if (e.key === 'Enter') {
            var timeoutFun_1 = function () {
                _this.keyTimeout = true;
                _this.eleScrolling(10, e.target);
            };
            this.keyTimer = window.setTimeout(function () {
                timeoutFun_1();
            }, 100);
        }
    };
    HScroll.prototype.onKeyUp = function (e) {
        if (e.key !== 'Enter') {
            return;
        }
        if (this.keyTimeout) {
            this.keyTimeout = false;
        }
        else {
            e.target.click();
        }
        clearTimeout(this.keyTimer);
    };
    HScroll.prototype.eventBinding = function (ele) {
        var _this = this;
        ele.forEach(function (el) {
            new Touch(el, { tapHold: _this.tabHoldHandler.bind(_this), tapHoldThreshold: 500 });
            el.addEventListener('keydown', _this.onKeyPress.bind(_this));
            el.addEventListener('keyup', _this.onKeyUp.bind(_this));
            el.addEventListener('mouseup', _this.repeatScroll.bind(_this));
            el.addEventListener('touchend', _this.repeatScroll.bind(_this));
            el.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            });
            EventHandler.add(el, 'click', _this.clickEventHandler, _this);
        });
    };
    HScroll.prototype.repeatScroll = function () {
        clearInterval(this.timeout);
    };
    HScroll.prototype.tabHoldHandler = function (e) {
        var _this = this;
        var trgt = e.originalEvent.target;
        trgt = this.contains(trgt, CLS_HSCROLLNAV) ? trgt.firstElementChild : trgt;
        var scrollDis = 10;
        var timeoutFun = function () {
            _this.eleScrolling(scrollDis, trgt);
        };
        this.timeout = window.setInterval(function () {
            timeoutFun();
        }, 50);
    };
    HScroll.prototype.contains = function (ele, className) {
        return ele.classList.contains(className);
    };
    HScroll.prototype.eleScrolling = function (scrollDis, trgt) {
        var element = this.scrollEle;
        var rootEle = this.element;
        var classList$$1 = trgt.classList;
        if (classList$$1.contains(CLS_HSCROLLNAV)) {
            classList$$1 = trgt.querySelector('.' + CLS_NAVARROW).classList;
        }
        if (this.contains(rootEle, CLS_RTL) && this.browserCheck) {
            scrollDis = -scrollDis;
        }
        var scrlLeft = element.scrollLeft;
        if ((!this.contains(rootEle, CLS_RTL) || this.browserCheck) || this.ieCheck) {
            if (classList$$1.contains(CLS_NAVRIGHTARROW)) {
                element.scrollLeft = scrlLeft + scrollDis;
            }
            else {
                element.scrollLeft = scrlLeft - scrollDis;
            }
        }
        else {
            if (classList$$1.contains(CLS_NAVLEFTARROW)) {
                element.scrollLeft = scrlLeft + scrollDis;
            }
            else {
                element.scrollLeft = scrlLeft - scrollDis;
            }
        }
    };
    HScroll.prototype.clickEventHandler = function (e) {
        this.eleScrolling(this.scrollStep, e.target);
    };
    HScroll.prototype.touchHandler = function (e) {
        var ele = this.scrollEle;
        var distance;
        distance = e.distanceX;
        if ((this.ieCheck) && this.contains(this.element, CLS_RTL)) {
            distance = -distance;
        }
        if (e.scrollDirection === 'Left') {
            ele.scrollLeft = ele.scrollLeft + distance;
        }
        else if (e.scrollDirection === 'Right') {
            ele.scrollLeft = ele.scrollLeft - distance;
        }
    };
    HScroll.prototype.arrowDisabling = function (addDisable, removeDisable) {
        addDisable.classList.add(CLS_DISABLE);
        addDisable.setAttribute('aria-disabled', 'true');
        addDisable.removeAttribute('tabindex');
        clearInterval(this.timeout);
        removeDisable.classList.remove(CLS_DISABLE);
        removeDisable.setAttribute('aria-disabled', 'false');
        removeDisable.setAttribute('tabindex', '0');
        this.repeatScroll();
    };
    HScroll.prototype.scrollHandler = function (e) {
        var target = e.target;
        var width = target.offsetWidth;
        var rootEle = this.element;
        var navLeftEle = this.element.querySelector('.' + CLS_HSCROLLNAVLEFT);
        var navRightEle = this.element.querySelector('.' + CLS_HSCROLLNAVRIGHT);
        var scrollLeft = target.scrollLeft;
        if (scrollLeft <= 0) {
            scrollLeft = -scrollLeft;
        }
        if (scrollLeft === 0) {
            if ((!this.contains(rootEle, CLS_RTL) || this.browserCheck) || this.ieCheck) {
                this.arrowDisabling(navLeftEle, navRightEle);
            }
            else {
                this.arrowDisabling(navRightEle, navLeftEle);
            }
        }
        else if (Math.ceil(width + scrollLeft + .1) >= target.scrollWidth) {
            if ((!this.contains(rootEle, CLS_RTL) || this.browserCheck) || this.ieCheck) {
                this.arrowDisabling(navRightEle, navLeftEle);
            }
            else {
                this.arrowDisabling(navLeftEle, navRightEle);
            }
        }
        else {
            var disEle = this.element.querySelector('.' + CLS_DISABLE);
            if (disEle) {
                disEle.classList.remove(CLS_DISABLE);
                disEle.setAttribute('aria-disabled', 'false');
                disEle.setAttribute('tabindex', '0');
            }
        }
    };
    /**
     * Gets called when the model property changes.The data that describes the old and new values of property that changed.
     * @param  {HScrollModel} newProp
     * @param  {HScrollModel} oldProp
     * @returns void
     * @private
     */
    HScroll.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'scrollStep':
                    break;
                case 'enableRtl':
                    newProp.enableRtl ? this.element.classList.add(CLS_RTL) : this.element.classList.remove(CLS_RTL);
                    break;
            }
        }
    };
    __decorate([
        Property(40)
    ], HScroll.prototype, "scrollStep", void 0);
    HScroll = __decorate([
        NotifyPropertyChanges
    ], HScroll);
    return HScroll;
}(Component));

/**
 * Navigation Common modules
 */

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CLS_ITEMS = 'e-toolbar-items';
var CLS_ITEM = 'e-toolbar-item';
var CLS_RTL$1 = 'e-rtl';
var CLS_SEPARATOR = 'e-separator';
var CLS_POPUPICON = 'e-popup-up-icon';
var CLS_POPUPDOWN = 'e-popup-down-icon';
var CLS_TEMPLATE = 'e-template';
var CLS_DISABLE$1 = 'e-overlay';
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
/**
 * An item object that is used to configure Toolbar commands.
 */
var Item = /** @class */ (function (_super) {
    __extends$1(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$1([
        Property('')
    ], Item.prototype, "id", void 0);
    __decorate$1([
        Property('')
    ], Item.prototype, "text", void 0);
    __decorate$1([
        Property('auto')
    ], Item.prototype, "width", void 0);
    __decorate$1([
        Property('')
    ], Item.prototype, "cssClass", void 0);
    __decorate$1([
        Property('')
    ], Item.prototype, "prefixIcon", void 0);
    __decorate$1([
        Property('')
    ], Item.prototype, "suffixIcon", void 0);
    __decorate$1([
        Property('None')
    ], Item.prototype, "overflow", void 0);
    __decorate$1([
        Property('')
    ], Item.prototype, "template", void 0);
    __decorate$1([
        Property('Button')
    ], Item.prototype, "type", void 0);
    __decorate$1([
        Property('Both')
    ], Item.prototype, "showTextOn", void 0);
    __decorate$1([
        Property(null)
    ], Item.prototype, "htmlAttributes", void 0);
    __decorate$1([
        Property('')
    ], Item.prototype, "tooltipText", void 0);
    __decorate$1([
        Property('left')
    ], Item.prototype, "align", void 0);
    return Item;
}(ChildProperty));
/**
 * The Toolbar control contains a group of commands that are aligned horizontally.
 * ```html
 * <div id="toolbar"/>
 * <script>
 *   var toolbarObj = new Toolbar();
 *   toolbarObj.appendTo("#toolbar");
 * </script>
 * ```
 */
var Toolbar = /** @class */ (function (_super) {
    __extends$1(Toolbar, _super);
    /**
     * Initializes a new instance of the Toolbar class.
     * @param options  - Specifies Toolbar model properties as options.
     * @param element  - Specifies the element that is rendered as a Toolbar.
     */
    function Toolbar(options, element) {
        var _this = _super.call(this, options, element) || this;
        /**
         * Contains the keyboard configuration of the Toolbar.
         */
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
    /**
     * Removes the control from the DOM and also removes all its related events.
     * @returns void.
     */
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
        this.tbarAlign = null;
        this.remove(this.element, 'e-toolpop');
        ele.removeAttribute('style');
        ['aria-disabled', 'aria-orientation', 'aria-haspopup', 'role'].forEach(function (attrb) {
            _this.element.removeAttribute(attrb);
        });
    };
    /**
     * Initialize the event handler
     * @private
     */
    Toolbar.prototype.preRender = function () {
        this.trigger('beforeCreate');
        this.scrollModule = null;
        this.popObj = null;
        this.tbarItemsCol = this.items;
        if (this.enableRtl) {
            this.add(this.element, CLS_RTL$1);
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
        var keyCheck = (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 35 || e.keyCode === 36);
        if (keyCheck) {
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
        var tbarItems = this.element.querySelector('.' + CLS_ITEMS);
        if (this.tbarAlign) {
            [].slice.call(tbarItems.children).forEach(function (el) {
                detach(el);
            });
            this.tbarAlign = false;
            this.remove(tbarItems, CLS_TBARPOS);
        }
        this.clearProperty();
    };
    Toolbar.prototype.destroyMode = function () {
        if (this.scrollModule) {
            this.remove(this.scrollModule.element, CLS_RTL$1);
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
                else if (e.action === 'moveDown' && popObj && isVisible(popObj.element)) {
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
    Toolbar.prototype.eleFocus = function (closest$$1, pos) {
        var sib = Object(closest$$1)[pos + 'ElementSibling'];
        var contains = function (el) {
            return el.classList.contains(CLS_SEPARATOR) || el.classList.contains(CLS_DISABLE$1);
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
            var elem = Object(closest$$1.parentElement)[pos + 'ElementSibling'];
            if (!isNullOrUndefined(elem) && elem.children.length === 0) {
                elem = Object(elem)[pos + 'ElementSibling'];
            }
            if (!isNullOrUndefined(elem) && elem.children.length > 0) {
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
        var isPopupElement = !isNullOrUndefined(closest(trgt, '.' + CLS_POPUPCLASS));
        var popupNav = closest(trgt, ('.' + CLS_TBARNAV));
        if (!popupNav) {
            popupNav = trgt;
        }
        if (!ele.children[0].classList.contains('e-hscroll') && (clsList.contains(CLS_TBARNAV))) {
            clsList = trgt.querySelector('.e-icons').classList;
        }
        if (clsList.contains(CLS_POPUPICON) || clsList.contains(CLS_POPUPDOWN)) {
            this.popupClickHandler(ele, popupNav, CLS_RTL$1);
        }
        var itemObj;
        var clst = closest(e.target, '.' + CLS_ITEM);
        if ((isNullOrUndefined(clst) || clst.classList.contains(CLS_DISABLE$1)) && !popupNav.classList.contains(CLS_TBARNAV)) {
            return;
        }
        if (clst) {
            itemObj = this.items[this.tbarEle.indexOf(clst)];
        }
        var eventArgs = { originalEvent: e, item: itemObj };
        this.trigger('clicked', eventArgs);
        if (isPopupElement && !eventArgs.cancel) {
            this.popObj.hide({ name: 'SlideUp', duration: 100 });
        }
    };
    
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
    /**
     * To Initialize the control rendering
     * @private
     */
    Toolbar.prototype.render = function () {
        this.initialize();
        this.renderControl();
        this.wireEvents();
    };
    Toolbar.prototype.initialize = function () {
        var width = formatUnit(this.width);
        var height = formatUnit(this.height);
        if (Browser.info.name !== 'msie' || this.height !== 'auto') {
            setStyleAttribute(this.element, { 'height': height });
        }
        setStyleAttribute(this.element, { 'width': width });
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
        if (this.popObj && this.popObj.element.childElementCount > 1 && this.checkPopupRefresh(this.element, this.popObj.element)) {
            this.popupRefresh(this.popObj.element, false);
        }
    };
    Toolbar.prototype.initHScroll = function (element, innerItems) {
        if (!this.scrollModule && this.checkOverflow(element, innerItems[0])) {
            if (this.tbarAlign) {
                this.element.querySelector('.' + CLS_ITEMS + ' .' + CLS_TBARCENTER).removeAttribute('style');
            }
            this.scrollModule = new HScroll({ scrollStep: 50, enableRtl: this.enableRtl }, innerItems[0]);
            this.remove(this.scrollModule.element, CLS_TBARPOS);
            setStyleAttribute(this.element, { overflow: 'hidden' });
        }
    };
    Toolbar.prototype.itemWidthCal = function (items) {
        var width = 0;
        [].slice.call(selectAll('.' + CLS_ITEM, items)).forEach(function (el) {
            if (isVisible(el)) {
                width += (el.offsetWidth + parseFloat(window.getComputedStyle(el).marginRight));
            }
        });
        return width;
    };
    Toolbar.prototype.checkOverflow = function (element, innerItem) {
        if (isNullOrUndefined(element) || isNullOrUndefined(innerItem) || !isVisible(element)) {
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
    /** @hidden */
    Toolbar.prototype.refreshOverflow = function () {
        this.resize();
    };
    Toolbar.prototype.renderOverflowMode = function () {
        var ele = this.element;
        var innerItems = ele.querySelector('.' + CLS_ITEMS);
        if (ele && ele.children.length > 0) {
            this.offsetWid = ele.offsetWidth;
            this.remove(this.element, 'e-toolpop');
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
        setStyleAttribute(this.element, { direction: 'initial' });
        this.checkPriority(ele, innerEle, eleWidth, true);
        if (this.enableRtl) {
            this.element.classList.add('e-rtl');
        }
        this.element.style.removeProperty('direction');
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
            setStyleAttribute(el, { display: '', height: eleHeight + 'px' });
        });
        popupPri.forEach(function (el) {
            ele.appendChild(el);
        });
        var tbarEle = selectAll('.' + CLS_ITEM, element.querySelector('.' + CLS_ITEMS));
        for (var i = tbarEle.length - 1; i >= 0; i--) {
            var tbarElement = tbarEle[i];
            if (tbarElement.classList.contains(CLS_SEPARATOR)) {
                setStyleAttribute(tbarElement, { display: 'none' });
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
            ele = createElement('div', { id: element.id + '_popup', className: CLS_POPUPCLASS });
        }
        this.pushingPoppedEle(this, popupPri, ele, eleHeight);
        this.popupInit(element, ele);
    };
    Toolbar.prototype.popupInit = function (element, ele) {
        if (!this.popObj) {
            element.appendChild(ele);
            setStyleAttribute(this.element, { overflow: '' });
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
            setStyleAttribute(popupEle, { maxHeight: '', display: 'block' });
            setStyleAttribute(popupEle, { maxHeight: popupEle.offsetHeight + 'px', display: '' });
        }
    };
    Toolbar.prototype.popupOpen = function (e) {
        var popObj = this.popObj;
        var popupEle = this.popObj.element;
        var toolEle = this.popObj.element.parentElement;
        var popupNav = toolEle.querySelector('.' + CLS_TBARNAV);
        setStyleAttribute(popObj.element, { height: 'auto', maxHeight: '' });
        popObj.element.style.maxHeight = popObj.element.offsetHeight + 'px';
        var popupElePos = popupEle.offsetTop + popupEle.offsetHeight + calculatePosition(toolEle).top;
        var popIcon = popupNav.firstElementChild;
        popupNav.classList.add(CLS_TBARNAVACT);
        classList(popIcon, [CLS_POPUPICON], [CLS_POPUPDOWN]);
        var scrollVal = isNullOrUndefined(window.scrollY) ? 0 : window.scrollY;
        if ((window.innerHeight + scrollVal) < popupElePos) {
            var overflowHeight = (popupEle.offsetHeight - ((popupElePos - window.innerHeight - scrollVal) + 5));
            popObj.height = overflowHeight + 'px';
            setStyleAttribute(popObj.element, { maxHeight: overflowHeight + 'px' });
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
            var fstEleCheck = inEle[i] === this.tbarEle[0];
            if (fstEleCheck) {
                this.tbarEleMrgn = mrgn;
            }
            var eleWid_1 = fstEleCheck ? (inEle[i].offsetWidth + mrgn) : inEle[i].offsetWidth;
            if ((inEle[i].offsetLeft + inEle[i].offsetWidth + mrgn) > eleWidth) {
                if (inEle[i].classList.contains(CLS_SEPARATOR)) {
                    if (sepCheck > 0 && itemCount === itemPopCount) {
                        var sepEle = inEle[i + itemCount + (sepCheck - 1)];
                        if (checkClass(sepEle, [CLS_SEPARATOR, CLS_TBARIGNORE])) {
                            setStyleAttribute(sepEle, { display: 'none' });
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
                    setStyleAttribute(inEle[i], { display: 'none', minWidth: eleWid_1 + 'px' });
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
        var nav = createElement('div', { id: id, className: className });
        if (Browser.info.name === 'msie' || Browser.info.name === 'edge') {
            nav.classList.add('e-ie-align');
        }
        var navItem = createElement('div', { className: CLS_POPUPDOWN + ' e-icons' });
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
            var ignoreCheck = (!isNullOrUndefined(eleSep) && checkClass(eleSep, CLS_TBARIGNORE));
            if ((!isNullOrUndefined(eleSep) && checkClass(eleSep, CLS_SEPARATOR) && !isVisible(eleSep)) || ignoreCheck) {
                var sepDisplay = 'none';
                eleSep.style.display = 'inherit';
                var eleSepWidth = eleSep.offsetWidth + (parseFloat(window.getComputedStyle(eleSep).marginRight) * 2);
                var prevSep = eleSep.previousElementSibling;
                if ((elWid + eleSepWidth) < wid || des) {
                    inEle.insertBefore(el, inEle.children[(indx + ignoreCount) - (indx - sepPri)]);
                    if (!isNullOrUndefined(prevSep)) {
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
        if (isNullOrUndefined(popNav)) {
            return;
        }
        innerEle.removeAttribute('style');
        popupEle.style.display = 'block';
        var width = ele.offsetWidth - (popNav.offsetWidth + innerEle.offsetWidth);
        this.popupEleRefresh(width, popupEle, destroy);
        popupEle.style.display = '';
        if (popupEle.children.length === 0 && popNav && this.popObj) {
            detach(popNav);
            popNav = null;
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
    Toolbar.prototype.checkPopupRefresh = function (root, popEle) {
        popEle.style.display = 'block';
        var elWid = this.popupEleWidth(popEle.firstElementChild);
        popEle.firstElementChild.style.removeProperty('Position');
        var tbarWidth = root.offsetWidth - root.querySelector('.' + CLS_TBARNAV).offsetWidth;
        var tbarItemsWid = root.querySelector('.' + CLS_ITEMS).offsetWidth;
        popEle.style.removeProperty('display');
        if (tbarWidth > (elWid + tbarItemsWid)) {
            return true;
        }
        return false;
    };
    Toolbar.prototype.popupEleWidth = function (el) {
        el.style.position = 'absolute';
        var elWidth = el.offsetWidth;
        var btnText = el.querySelector('.' + CLS_TBARBTNTEXT);
        if (el.classList.contains('e-tbtn-align') || el.classList.contains(CLS_TBARTEXT)) {
            var btn = el.children[0];
            if (!isNullOrUndefined(btnText) && el.classList.contains(CLS_TBARTEXT)) {
                btnText.style.display = 'none';
            }
            else if (!isNullOrUndefined(btnText) && el.classList.contains(CLS_POPUPTEXT)) {
                btnText.style.display = 'block';
            }
            btn.style.minWidth = '0%';
            elWidth = el.offsetWidth;
            btn.style.minWidth = '';
            if (!isNullOrUndefined(btnText)) {
                btnText.style.display = '';
            }
        }
        return elWidth;
    };
    Toolbar.prototype.popupEleRefresh = function (width, popupEle, destroy) {
        var eleSplice = this.tbarEle;
        var priEleCnt;
        var index;
        var checkOverflow;
        var innerEle = this.element.querySelector('.' + CLS_ITEMS);
        var ignoreCount = 0;
        var _loop_1 = function (el) {
            var elWidth = this_1.popupEleWidth(el);
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
        checkOverflow = this.checkOverflow(this.element, this.element.getElementsByClassName(CLS_ITEMS)[0]);
        if (checkOverflow && !destroy) {
            this.renderOverflowMode();
        }
    };
    Toolbar.prototype.removePositioning = function () {
        var item = this.element.querySelector('.' + CLS_ITEMS);
        if (isNullOrUndefined(item) || !item.classList.contains(CLS_TBARPOS)) {
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
        if (isNullOrUndefined(item) || !item.classList.contains(CLS_TBARPOS)) {
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
            var popWid = popupNav.offsetWidth + 'px';
            innerItem[2].removeAttribute('style');
            this.enableRtl ? innerItem[2].style.left = popWid : innerItem[2].style.right = popWid;
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
        alignDiv.push(createElement('div', { className: CLS_TBARLEFT }));
        alignDiv.push(createElement('div', { className: CLS_TBARCENTER }));
        alignDiv.push(createElement('div', { className: CLS_TBARRIGHT }));
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
                itemEleDom = createElement('div', { className: CLS_ITEMS });
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
    /**
     * Enables or disables the specified Toolbar item.
     * @param  {HTMLElement|NodeList} items - DOM element or an array of items to be enabled or disabled.
     * @param  {boolean} isEnable  - Boolean value that determines whether the command should be enabled or disabled.
     * By default, `isEnable` is set to true.
     * @returns void.
     */
    Toolbar.prototype.enableItems = function (items, isEnable) {
        var elements = items;
        var len = elements.length;
        if (isNullOrUndefined(isEnable)) {
            isEnable = true;
        }
        var enable = function (isEnable, ele) {
            if (isEnable) {
                ele.classList.remove(CLS_DISABLE$1);
                ele.setAttribute('aria-disabled', 'false');
            }
            else {
                ele.classList.add(CLS_DISABLE$1);
                ele.setAttribute('aria-disabled', 'true');
            }
        };
        if (len && len > 1) {
            for (var _i = 0, _a = [].slice.call(elements); _i < _a.length; _i++) {
                var ele = _a[_i];
                enable(isEnable, ele);
            }
            isEnable ? removeClass(elements, CLS_DISABLE$1) : addClass(elements, CLS_DISABLE$1);
        }
        else {
            var ele = void 0;
            ele = (len && len === 1) ? elements[0] : items;
            enable(isEnable, ele);
        }
    };
    /**
     * Adds new items to the Toolbar that accepts an array as Toolbar items.
     * @param  {ItemsModel[]} items - DOM element or an array of items to be added to the Toolbar.
     * @param  {number} index - Number value that determines where the command is to be added. By default, index is 0.
     * @returns void.
     */
    Toolbar.prototype.addItems = function (items, index) {
        var innerItems;
        var itemsDiv = this.element.querySelector('.' + CLS_ITEMS);
        var innerEle;
        var itemAgn = 'left';
        if (isNullOrUndefined(index)) {
            index = 0;
        }
        items.forEach(function (e) {
            if (!isNullOrUndefined(e.align) && e.align !== 'left' && itemAgn === 'left') {
                itemAgn = e.align;
            }
        });
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (isNullOrUndefined(item.type)) {
                item.type = 'Button';
            }
            innerItems = selectAll('.' + CLS_ITEM, this.element);
            item.align = itemAgn;
            innerEle = this.renderSubComponent(item);
            if (this.tbarEle.length >= index && innerItems.length > 0) {
                this.destroyMode();
                var algIndex = item.align[0] === 'l' ? 0 : item.align[0] === 'c' ? 1 : 2;
                var ele = void 0;
                if (!this.tbarAlign && itemAgn !== 'left') {
                    this.tbarItemAlign(item, itemsDiv, 1);
                    this.tbarAlign = true;
                    ele = closest(innerItems[0], '.' + CLS_ITEMS).children[algIndex];
                    ele.appendChild(innerEle);
                    this.tbarAlgEle[(item.align + 's')].push(innerEle);
                    this.refreshPositioning();
                }
                else if (this.tbarAlign) {
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
    /**
     * Removes the items from the Toolbar. Acceptable arguments are index of item/HTMLElement/node list.
     * @param  {number|HTMLElement|NodeList|HTMLElement[]} args
     * Index or DOM element or an Array of item which is to be removed from the Toolbar.
     * @returns void.
     */
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
            try {
                if (document.querySelectorAll(val).length) {
                    var ele = document.querySelector(val);
                    var tempStr = ele.outerHTML.trim();
                    templateFn = compile(tempStr);
                    detach(ele);
                }
            }
            catch (e) {
                templateFn = compile(val);
            }
            var tempArray = void 0;
            if (!isNullOrUndefined(templateFn)) {
                tempArray = templateFn({}, this, 'template');
            }
            if (!isNullOrUndefined(tempArray) && tempArray.length > 0) {
                [].slice.call(tempArray).forEach(function (ele) {
                    if (!isNullOrUndefined(ele.tagName)) {
                        ele.style.display = '';
                    }
                    innerEle.appendChild(ele);
                });
            }
        }
        else if (itemType === 'Input') {
            var ele = createElement('input');
            item.id ? (ele.id = item.id) : (ele.id = getUniqueID('tbr-ipt'));
            innerEle.appendChild(ele);
            eleObj.appendTo(ele);
        }
        this.add(innerEle, CLS_TEMPLATE);
        this.tbarEle.push(innerEle);
    };
    Toolbar.prototype.buttonRendering = function (item, innerEle) {
        var dom = createElement('button', { className: CLS_TBARBTN });
        dom.setAttribute('type', 'button');
        var textStr = item.text;
        var iconCss;
        var iconPos;
        item.id ? (dom.id = item.id) : dom.id = getUniqueID('e-tbr-btn');
        var btnTxt = createElement('div', { className: 'e-tbar-btn-text' });
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
            setStyleAttribute(dom, { 'width': formatUnit(item.width) });
        }
        return dom;
    };
    Toolbar.prototype.renderSubComponent = function (item) {
        var innerEle;
        var dom;
        innerEle = createElement('div', { className: CLS_ITEM });
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
        if (!isNullOrUndefined(this.activeEle)) {
            this.activeEle.setAttribute('tabindex', '-1');
        }
        this.activeEle = curEle;
        if (isNullOrUndefined(this.trgtEle) && !curEle.parentElement.classList.contains(CLS_TEMPLATE)) {
            curEle.removeAttribute('tabindex');
        }
        else {
            this.activeEle.setAttribute('tabindex', '0');
        }
    };
    Toolbar.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    /**
     * Returns the current module name.
     * @returns string
     * @private
     */
    Toolbar.prototype.getModuleName = function () {
        return 'toolbar';
    };
    Toolbar.prototype.itemsRerender = function (newProp) {
        this.items = this.tbarItemsCol;
        this.destroyMode();
        this.destroyItems();
        this.items = newProp;
        this.tbarItemsCol = this.items;
        this.renderItems();
        this.renderOverflowMode();
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
    /**
     * Gets called when the model property changes.The data that describes the old and new values of the property that changed.
     * @param  {ToolbarModel} newProp
     * @param  {ToolbarModel} oldProp
     * @returns void
     * @private
     */
    Toolbar.prototype.onPropertyChanged = function (newProp, oldProp) {
        var tEle = this.element;
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'items':
                    if (!(newProp.items instanceof Array && oldProp.items instanceof Array)) {
                        var changedProb = Object.keys(newProp.items);
                        for (var i = 0; i < changedProb.length; i++) {
                            var index = parseInt(Object.keys(newProp.items)[i], 10);
                            var property = Object.keys(newProp.items[index])[0];
                            var oldProperty = Object(oldProp.items[index])[property];
                            var newProperty = Object(newProp.items[index])[property];
                            if (this.tbarAlign || property === 'align') {
                                this.refresh();
                                break;
                            }
                            this.destroyMode();
                            var itemCol = [].slice.call(selectAll('.' + CLS_ITEMS + ' .' + CLS_ITEM, tEle));
                            detach(itemCol[index]);
                            this.tbarEle.splice(index, 1);
                            this.addItems([this.items[index]], index);
                            this.items.splice(index, 1);
                            if (this.items[index].template) {
                                this.tbarEle.splice(this.items.length, 1);
                            }
                        }
                    }
                    else {
                        this.itemsRerender(newProp.items);
                    }
                    break;
                case 'width':
                    var wid = tEle.offsetWidth;
                    setStyleAttribute(tEle, { 'width': formatUnit(newProp.width) });
                    this.renderOverflowMode();
                    if (this.popObj && wid < tEle.offsetWidth) {
                        this.popupRefresh(this.popObj.element, false);
                    }
                    break;
                case 'height':
                    setStyleAttribute(this.element, { 'height': formatUnit(newProp.height) });
                    break;
                case 'overflowMode':
                    this.destroyMode();
                    this.renderOverflowMode();
                    if (this.enableRtl) {
                        this.add(tEle, CLS_RTL$1);
                    }
                    this.refreshOverflow();
                    break;
                case 'enableRtl':
                    newProp.enableRtl ? this.add(tEle, CLS_RTL$1) : this.remove(tEle, CLS_RTL$1);
                    if (!isNullOrUndefined(this.scrollModule)) {
                        newProp.enableRtl ? this.add(this.scrollModule.element, CLS_RTL$1) : this.remove(this.scrollModule.element, CLS_RTL$1);
                    }
                    if (!isNullOrUndefined(this.popObj)) {
                        newProp.enableRtl ? this.add(this.popObj.element, CLS_RTL$1) : this.remove(this.popObj.element, CLS_RTL$1);
                    }
                    if (this.tbarAlign) {
                        this.itemPositioning();
                    }
                    break;
            }
        }
    };
    __decorate$1([
        Collection([], Item)
    ], Toolbar.prototype, "items", void 0);
    __decorate$1([
        Property('auto')
    ], Toolbar.prototype, "width", void 0);
    __decorate$1([
        Property('auto')
    ], Toolbar.prototype, "height", void 0);
    __decorate$1([
        Property('Scrollable')
    ], Toolbar.prototype, "overflowMode", void 0);
    __decorate$1([
        Property(false)
    ], Toolbar.prototype, "enableRtl", void 0);
    __decorate$1([
        Event()
    ], Toolbar.prototype, "clicked", void 0);
    __decorate$1([
        Event()
    ], Toolbar.prototype, "created", void 0);
    __decorate$1([
        Event()
    ], Toolbar.prototype, "destroyed", void 0);
    __decorate$1([
        Event()
    ], Toolbar.prototype, "beforeCreate", void 0);
    Toolbar = __decorate$1([
        NotifyPropertyChanges
    ], Toolbar);
    return Toolbar;
}(Component));

/**
 * Toolbar modules
 */

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CLS_ACRDN_ROOT = 'e-acrdn-root';
var CLS_ROOT$1 = 'e-accordion';
var CLS_ITEM$1 = 'e-acrdn-item';
var CLS_ITEMFOCUS = 'e-item-focus';
var CLS_ITEMHIDE = 'e-hide';
var CLS_HEADER = 'e-acrdn-header';
var CLS_HEADERICN = 'e-acrdn-header-icon';
var CLS_HEADERCTN = 'e-acrdn-header-content';
var CLS_CONTENT = 'e-acrdn-panel';
var CLS_CTENT = 'e-content';
var CLS_TOOGLEICN = 'e-toggle-icon';
var CLS_COLLAPSEICN = 'e-tgl-collapse-icon e-icons';
var CLS_EXPANDICN = 'e-expand-icon';
var CLS_RTL$2 = 'e-rtl';
var CLS_CTNHIDE = 'e-content-hide';
var CLS_SLCT = 'e-select';
var CLS_SLCTED = 'e-selected';
var CLS_ACTIVE = 'e-active';
var CLS_ANIMATE = 'e-animate';
var CLS_DISABLE$2 = 'e-overlay';
var CLS_TOGANIMATE = 'e-toggle-animation';
var CLS_NEST = 'e-nested';
var CLS_EXPANDSTATE = 'e-expand-state';
var AccordionActionSettings = /** @class */ (function (_super) {
    __extends$2(AccordionActionSettings, _super);
    function AccordionActionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        Property('SlideDown')
    ], AccordionActionSettings.prototype, "effect", void 0);
    __decorate$2([
        Property(400)
    ], AccordionActionSettings.prototype, "duration", void 0);
    __decorate$2([
        Property('linear')
    ], AccordionActionSettings.prototype, "easing", void 0);
    return AccordionActionSettings;
}(ChildProperty));
var AccordionAnimationSettings = /** @class */ (function (_super) {
    __extends$2(AccordionAnimationSettings, _super);
    function AccordionAnimationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        Complex({ effect: 'SlideUp', duration: 400, easing: 'linear' }, AccordionActionSettings)
    ], AccordionAnimationSettings.prototype, "collapse", void 0);
    __decorate$2([
        Complex({ effect: 'SlideDown', duration: 400, easing: 'linear' }, AccordionActionSettings)
    ], AccordionAnimationSettings.prototype, "expand", void 0);
    return AccordionAnimationSettings;
}(ChildProperty));
/**
 * An item object that is used to configure Accordion items.
 */
var AccordionItem = /** @class */ (function (_super) {
    __extends$2(AccordionItem, _super);
    function AccordionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        Property(undefined)
    ], AccordionItem.prototype, "content", void 0);
    __decorate$2([
        Property(undefined)
    ], AccordionItem.prototype, "header", void 0);
    __decorate$2([
        Property(undefined)
    ], AccordionItem.prototype, "cssClass", void 0);
    __decorate$2([
        Property(undefined)
    ], AccordionItem.prototype, "iconCss", void 0);
    __decorate$2([
        Property(false)
    ], AccordionItem.prototype, "expanded", void 0);
    return AccordionItem;
}(ChildProperty));
/**
 * The Accordion is a vertically collapsible content panel that displays one or more panels at a time within the available space.
 * ```html
 * <div id='accordion'/>
 * <script>
 *   var accordionObj = new Accordion();
 *   accordionObj.appendTo('#accordion');
 * </script>
 * ```
 */
var Accordion = /** @class */ (function (_super) {
    __extends$2(Accordion, _super);
    /**
     * Initializes a new instance of the Accordion class.
     * @param options  - Specifies Accordion model properties as options.
     * @param element  - Specifies the element that is rendered as an Accordion.
     */
    function Accordion(options, element) {
        var _this = _super.call(this, options, element) || this;
        /**
         * Contains the keyboard configuration of the Accordion.
         */
        _this.keyConfigs = {
            moveUp: 'uparrow',
            moveDown: 'downarrow',
            enter: 'enter',
            space: 'space',
            home: 'home',
            end: 'end',
        };
        return _this;
    }
    /**
     * Removes the control from the DOM and also removes all its related events.
     * @returns void
     */
    Accordion.prototype.destroy = function () {
        var _this = this;
        var ele = this.element;
        _super.prototype.destroy.call(this);
        this.unwireEvents();
        this.isDestroy = true;
        while (ele.firstChild) {
            ele.removeChild(ele.firstChild);
        }
        if (this.trgtEle) {
            while (this.ctrlTem.firstChild) {
                ele.appendChild(this.ctrlTem.firstChild);
            }
        }
        ele.removeAttribute('style');
        ['aria-disabled', 'aria-multiselectable', 'role'].forEach(function (attrb) {
            _this.element.removeAttribute(attrb);
        });
    };
    Accordion.prototype.preRender = function () {
        var nested = closest(this.element, '.' + CLS_CONTENT);
        this.isNested = false;
        if (!this.isDestroy) {
            this.isDestroy = false;
        }
        if (!isNullOrUndefined(nested)) {
            nested.classList.add(CLS_NEST);
            this.isNested = true;
        }
        else {
            this.element.classList.add(CLS_ACRDN_ROOT);
        }
        if (this.enableRtl) {
            this.add(this.element, CLS_RTL$2);
        }
        if (!this.enablePersistence || isNullOrUndefined(this.expandedItems)) {
            this.expandedItems = [];
        }
    };
    Accordion.prototype.add = function (ele, val) {
        ele.classList.add(val);
    };
    Accordion.prototype.remove = function (ele, val) {
        ele.classList.remove(val);
    };
    /**
     * To initialize the control rendering
     * @private
     */
    Accordion.prototype.render = function () {
        this.initialize();
        this.renderControl();
        this.wireEvents();
    };
    Accordion.prototype.initialize = function () {
        var width = formatUnit(this.width);
        var height = formatUnit(this.height);
        setStyleAttribute(this.element, { 'width': width, 'height': height });
        var ariaAttr = {
            'aria-disabled': 'false', 'role': 'presentation', 'aria-multiselectable': 'true'
        };
        if (this.expandedItems.length > 0) {
            this.initExpand = this.expandedItems;
        }
        attributes(this.element, ariaAttr);
        if (this.expandMode === 'Single') {
            this.element.setAttribute('aria-multiselectable', 'false');
        }
    };
    Accordion.prototype.renderControl = function () {
        this.trgtEle = (this.element.children.length > 0) ? select('div', this.element) : null;
        this.renderItems();
        this.initItemExpand();
    };
    Accordion.prototype.unwireEvents = function () {
        EventHandler.remove(this.element, 'click', this.clickHandler);
        if (!isNullOrUndefined(this.keyModule)) {
            this.keyModule.destroy();
        }
    };
    Accordion.prototype.wireEvents = function () {
        EventHandler.add(this.element, 'click', this.clickHandler, this);
        if (!this.isNested && !this.isDestroy) {
            rippleEffect(this.element, { selector: '.' + CLS_HEADER });
        }
        if (!this.isNested) {
            this.keyModule = new KeyboardEvents(this.element, {
                keyAction: this.keyActionHandler.bind(this),
                keyConfigs: this.keyConfigs,
                eventName: 'keydown'
            });
        }
    };
    Accordion.prototype.focusIn = function (e) {
        e.target.parentElement.classList.add(CLS_ITEMFOCUS);
    };
    Accordion.prototype.focusOut = function (e) {
        e.target.parentElement.classList.remove(CLS_ITEMFOCUS);
    };
    Accordion.prototype.ctrlTemplate = function () {
        var _this = this;
        this.ctrlTem = this.element.cloneNode(true);
        var innerEles = this.element.children;
        var content;
        addClass(innerEles, [CLS_ITEM$1]);
        [].slice.call(innerEles).forEach(function (el) {
            el.id = getUniqueID('acrdn_item');
            if (el.children.length > 0) {
                _this.add(el.children[0], CLS_HEADER);
                var header = el.children[0];
                attributes(header, { 'tabindex': '0', 'role': 'heading', 'aria-level': innerEles.length.toString() });
                header.id = getUniqueID('acrdn_header');
                EventHandler.add(header, 'focus', _this.focusIn, _this);
                EventHandler.add(header, 'blur', _this.focusOut, _this);
                var headerEle = header.firstElementChild;
                if (headerEle) {
                    headerEle.classList.add(CLS_HEADERCTN);
                }
                content = el.children[1];
                if (content) {
                    content.id = getUniqueID('acrdn_panel');
                    header.setAttribute('aria-controls', content.id);
                    content.style.display = '';
                    el.classList.add(CLS_SLCT);
                    el.children[0].appendChild(_this.toggleIconGenerate());
                    classList(content, [CLS_CONTENT, CLS_CTNHIDE], []);
                    attributes(content, { 'aria-labelledby': header.id, 'aria-hidden': 'true' });
                    content = content.firstElementChild;
                    if (content) {
                        content.classList.add(CLS_CTENT);
                        content.style.display = '';
                    }
                }
            }
        });
    };
    Accordion.prototype.toggleIconGenerate = function () {
        var tglIcon = createElement('div', { className: CLS_TOOGLEICN });
        var hdrColIcon = createElement('span', { className: CLS_COLLAPSEICN });
        tglIcon.appendChild(hdrColIcon);
        return tglIcon;
    };
    Accordion.prototype.initItemExpand = function () {
        var len = this.initExpand.length;
        if (len === 0) {
            return;
        }
        if (this.expandMode === 'Single') {
            this.expandItem(true, this.initExpand[len - 1]);
        }
        else {
            for (var i = 0; i < len; i++) {
                this.expandItem(true, this.initExpand[i]);
            }
        }
    };
    Accordion.prototype.renderItems = function () {
        var _this = this;
        var ele = this.element;
        var innerItem;
        if (isNullOrUndefined(this.initExpand)) {
            this.initExpand = [];
        }
        var items = this.items;
        if (!isNullOrUndefined(this.trgtEle)) {
            this.ctrlTemplate();
        }
        else if (ele && items.length > 0) {
            items.forEach(function (item, index) {
                innerItem = _this.renderInnerItem(item, index);
                ele.appendChild(innerItem);
                if (innerItem.childElementCount > 0) {
                    EventHandler.add(innerItem.querySelector('.' + CLS_HEADER), 'focus', _this.focusIn, _this);
                    EventHandler.add(innerItem.querySelector('.' + CLS_HEADER), 'blur', _this.focusOut, _this);
                }
            });
        }
    };
    Accordion.prototype.clickHandler = function (e) {
        var _this = this;
        var trgt = e.target;
        var eventArgs = {};
        var index;
        var tglIcon;
        var acrdEle = closest(trgt, '.' + CLS_ROOT$1);
        if (acrdEle !== this.element) {
            return;
        }
        trgt.classList.add('e-target');
        var acrdnItem = closest(trgt, '.' + CLS_ITEM$1);
        var acrdnHdr = closest(trgt, '.' + CLS_HEADER);
        var acrdnCtn = closest(trgt, '.' + CLS_CONTENT);
        if (acrdnItem && (isNullOrUndefined(acrdnHdr) || isNullOrUndefined(acrdnCtn))) {
            acrdnHdr = acrdnItem.children[0];
            acrdnCtn = acrdnItem.children[1];
        }
        if (acrdnHdr) {
            tglIcon = select('.' + CLS_TOOGLEICN, acrdnHdr);
        }
        var acrdnCtnItem;
        if (acrdnCtn) {
            acrdnCtnItem = closest(acrdnCtn, '.' + CLS_ITEM$1);
        }
        var acrdActive = [];
        index = this.getIndexByItem(acrdnItem);
        if (acrdnCtnItem) {
            eventArgs.item = this.items[this.getIndexByItem(acrdnCtnItem)];
        }
        eventArgs.originalEvent = e;
        var ctnCheck = !isNullOrUndefined(tglIcon) && isNullOrUndefined(this.trgtEle) && acrdnItem.childElementCount <= 1;
        if (ctnCheck && (isNullOrUndefined(acrdnCtn) || !isNullOrUndefined(select('.' + CLS_HEADER + ' .' + CLS_TOOGLEICN, acrdnCtnItem)))) {
            acrdnItem.appendChild(this.contentRendering(index));
            this.ariaAttrUpdate(acrdnItem);
        }
        this.trigger('clicked', eventArgs);
        var cntclkCheck = (acrdnCtn && !isNullOrUndefined(select('.e-target', acrdnCtn)));
        cntclkCheck = cntclkCheck && (isNullOrUndefined(select('.' + CLS_ROOT$1, acrdnCtn)) || !(closest(trgt, '.' + CLS_ROOT$1) === this.element));
        trgt.classList.remove('e-target');
        if (trgt.classList.contains(CLS_CONTENT) || trgt.classList.contains(CLS_CTENT) || cntclkCheck) {
            return;
        }
        [].slice.call(this.element.children).forEach(function (el) {
            if (el.classList.contains(CLS_ACTIVE)) {
                acrdActive.push(el);
            }
        });
        var acrdAniEle = [].slice.call(this.element.querySelectorAll('.' + CLS_ITEM$1 + ' [' + CLS_ANIMATE + ']'));
        if (acrdAniEle.length > 0) {
            for (var _i = 0, acrdAniEle_1 = acrdAniEle; _i < acrdAniEle_1.length; _i++) {
                var el = acrdAniEle_1[_i];
                acrdActive.push(el.parentElement);
            }
        }
        var sameContentCheck = acrdActive.indexOf(acrdnCtnItem) !== -1 && acrdnCtn.getAttribute('e-animate') === 'true';
        var sameHeader = false;
        if (!isNullOrUndefined(acrdnItem) && !isNullOrUndefined(acrdnHdr)) {
            var acrdnCtn_1 = select('.' + CLS_CONTENT, acrdnItem);
            var acrdnRoot = closest(acrdnItem, '.' + CLS_ACRDN_ROOT);
            var expandState = acrdnRoot.querySelector('.' + CLS_EXPANDSTATE);
            if (isNullOrUndefined(acrdnCtn_1)) {
                return;
            }
            sameHeader = (expandState === acrdnItem);
            if (isVisible(acrdnCtn_1) && (!sameContentCheck || acrdnCtnItem.classList.contains(CLS_SLCTED))) {
                this.collapse(acrdnCtn_1);
            }
            else {
                if ((acrdActive.length > 0) && this.expandMode === 'Single' && !sameContentCheck) {
                    acrdActive.forEach(function (el) {
                        _this.collapse(select('.' + CLS_CONTENT, el));
                        el.classList.remove(CLS_EXPANDSTATE);
                    });
                }
                this.expand(acrdnCtn_1);
            }
            if (!isNullOrUndefined(expandState) && !sameHeader) {
                expandState.classList.remove(CLS_EXPANDSTATE);
            }
        }
    };
    Accordion.prototype.eleMoveFocus = function (action, root, trgt) {
        var clst;
        var clstItem = closest(trgt, '.' + CLS_ITEM$1);
        if (trgt === root) {
            clst = ((action === 'moveUp' ? trgt.lastElementChild : trgt).querySelector('.' + CLS_HEADER));
        }
        else if (trgt.classList.contains(CLS_HEADER)) {
            clstItem = (action === 'moveUp' ? clstItem.previousElementSibling : clstItem.nextElementSibling);
            if (clstItem) {
                clst = select('.' + CLS_HEADER, clstItem);
            }
        }
        if (clst) {
            clst.focus();
        }
    };
    Accordion.prototype.keyActionHandler = function (e) {
        e.preventDefault();
        var clst;
        var root = this.element;
        var trgt = e.target;
        var content;
        switch (e.action) {
            case 'moveUp':
                this.eleMoveFocus(e.action, root, trgt);
                break;
            case 'moveDown':
                this.eleMoveFocus(e.action, root, trgt);
                break;
            case 'space':
            case 'enter':
                content = trgt.nextElementSibling;
                if (!isNullOrUndefined(content) && content.classList.contains(CLS_CONTENT)) {
                    if (content.getAttribute('e-animate') !== 'true') {
                        trgt.click();
                    }
                }
                else {
                    trgt.click();
                }
                break;
            case 'home':
            case 'end':
                clst = e.action === 'home' ? root.firstElementChild.children[0] : root.lastElementChild.children[0];
                clst.focus();
                break;
        }
    };
    Accordion.prototype.headerEleGenerate = function () {
        var header = createElement('div', { className: CLS_HEADER, id: getUniqueID('acrdn_header') });
        var ariaAttr = {
            'tabindex': '0', 'role': 'heading', 'aria-expanded': 'false', 'aria-selected': 'false',
            'aria-disabled': 'false', 'aria-level': this.items.length.toString()
        };
        attributes(header, ariaAttr);
        return header;
    };
    Accordion.prototype.renderInnerItem = function (item, index) {
        var innerEle;
        innerEle = createElement('div', { className: CLS_ITEM$1 });
        innerEle.id = getUniqueID('acrdn_item');
        if (item.header) {
            var ctnEle = this.headerEleGenerate();
            var hdrEle = createElement('div', { className: CLS_HEADERCTN });
            ctnEle.appendChild(hdrEle);
            ctnEle.appendChild(this.fetchElement(hdrEle, item.header, index, true));
            innerEle.appendChild(ctnEle);
        }
        var hdr = select('.' + CLS_HEADER, innerEle);
        if (item.expanded && !isNullOrUndefined(index) && (!this.enablePersistence)) {
            if (this.initExpand.indexOf(index) === -1) {
                this.initExpand.push(index);
            }
        }
        if (item.cssClass) {
            innerEle.classList.add(item.cssClass);
        }
        if (item.iconCss) {
            var hdrIcnEle = createElement('div', { className: CLS_HEADERICN });
            var icon = createElement('span', { className: item.iconCss + ' e-icons' });
            hdrIcnEle.appendChild(icon);
            if (isNullOrUndefined(hdr)) {
                hdr = this.headerEleGenerate();
                hdr.appendChild(hdrIcnEle);
                innerEle.appendChild(hdr);
            }
            else {
                hdr.insertBefore(hdrIcnEle, hdr.childNodes[0]);
            }
        }
        if (item.content) {
            var hdrIcon = this.toggleIconGenerate();
            if (isNullOrUndefined(hdr)) {
                hdr = this.headerEleGenerate();
                innerEle.appendChild(hdr);
            }
            hdr.appendChild(hdrIcon);
            this.add(innerEle, CLS_SLCT);
        }
        return innerEle;
    };
    Accordion.prototype.fetchElement = function (ele, value, index, isHeader) {
        var templateFn;
        var temString;
        try {
            if (document.querySelectorAll(value).length) {
                var eleVal = document.querySelector(value);
                temString = eleVal.outerHTML.trim();
                templateFn = compile(temString);
                detach(eleVal);
            }
        }
        catch (e) {
            templateFn = compile(value);
        }
        if (!isNullOrUndefined(templateFn) && templateFn().length > 0 && !(isNullOrUndefined(templateFn()[0].tagName) && templateFn().length === 1)) {
            [].slice.call(templateFn()).forEach(function (el) {
                if (!isNullOrUndefined(el.tagName)) {
                    el.style.display = '';
                }
                ele.appendChild(el);
            });
            if (!isNullOrUndefined(temString)) {
                if (isHeader) {
                    this.items[index].header = temString;
                }
                else {
                    this.items[index].content = temString;
                }
            }
        }
        else {
            ele.innerHTML = value;
        }
        return ele;
    };
    Accordion.prototype.ariaAttrUpdate = function (itemEle) {
        var header = select('.' + CLS_HEADER, itemEle);
        var content = select('.' + CLS_CONTENT, itemEle);
        header.setAttribute('aria-controls', content.id);
        content.setAttribute('aria-labelledby', header.id);
    };
    Accordion.prototype.contentRendering = function (index) {
        var content = this.items[index].content;
        var itemcnt = createElement('div', { className: CLS_CONTENT + ' ' + CLS_CTNHIDE, id: getUniqueID('acrdn_panel') });
        attributes(itemcnt, { 'aria-hidden': 'true' });
        var ctn = createElement('div', { className: CLS_CTENT });
        itemcnt.appendChild(this.fetchElement(ctn, content, index, false));
        return itemcnt;
    };
    Accordion.prototype.expand = function (trgt) {
        var eventArgs;
        var trgtItemEle = closest(trgt, '.' + CLS_ITEM$1);
        if (isNullOrUndefined(trgt) || (isVisible(trgt) && trgt.getAttribute('e-animate') !== 'true') || trgtItemEle.classList.contains(CLS_DISABLE$2)) {
            return;
        }
        var acrdnRoot = closest(trgtItemEle, '.' + CLS_ACRDN_ROOT);
        var expandState = acrdnRoot.querySelector('.' + CLS_EXPANDSTATE);
        var animation = {
            name: this.animation.expand.effect,
            duration: this.animation.expand.duration,
            timingFunction: this.animation.expand.easing
        };
        var icon = select('.' + CLS_TOOGLEICN, trgtItemEle).firstElementChild;
        eventArgs = { element: trgtItemEle,
            item: this.items[this.getIndexByItem(trgtItemEle)],
            isExpanded: true };
        var eff = animation.name;
        this.trigger('expanding', eventArgs);
        if (eventArgs.cancel) {
            return;
        }
        icon.classList.add(CLS_TOGANIMATE);
        this.expandedItemsPush(trgtItemEle);
        if (!isNullOrUndefined(expandState)) {
            expandState.classList.remove(CLS_EXPANDSTATE);
        }
        trgtItemEle.classList.add(CLS_EXPANDSTATE);
        if ((animation.name === 'None')) {
            this.expandProgress('begin', icon, trgt, trgtItemEle, eventArgs);
            this.expandProgress('end', icon, trgt, trgtItemEle, eventArgs);
            return;
        }
        this.expandAnimation(eff, icon, trgt, trgtItemEle, animation, eventArgs);
    };
    Accordion.prototype.expandAnimation = function (ef, icn, trgt, trgtItemEle, animate, args) {
        var _this = this;
        var height;
        var trgtHgt;
        if (ef === 'SlideDown') {
            animate.begin = function () {
                _this.expandProgress('begin', icn, trgt, trgtItemEle, args);
                trgt.style.position = 'absolute';
                height = trgtItemEle.offsetHeight;
                trgtHgt = trgt.offsetHeight;
                trgt.style.maxHeight = (trgt.offsetHeight) + 'px';
                trgtItemEle.style.maxHeight = '';
            };
            animate.progress = function () {
                trgtItemEle.style.minHeight = (height + trgt.offsetHeight) + 'px';
            };
            animate.end = function () {
                setStyleAttribute(trgt, { 'position': '', 'maxHeight': '' });
                trgtItemEle.style.minHeight = '';
                _this.expandProgress('end', icn, trgt, trgtItemEle, args);
            };
        }
        else {
            animate.begin = function () {
                _this.expandProgress('begin', icn, trgt, trgtItemEle, args);
            };
            animate.end = function () {
                _this.expandProgress('end', icn, trgt, trgtItemEle, args);
            };
        }
        new Animation(animate).animate(trgt);
    };
    Accordion.prototype.expandProgress = function (progress, icon, trgt, trgtItemEle, eventArgs) {
        this.remove(trgt, CLS_CTNHIDE);
        this.add(trgtItemEle, CLS_SLCTED);
        this.add(icon, CLS_EXPANDICN);
        if (progress === 'end') {
            this.add(trgtItemEle, CLS_ACTIVE);
            trgt.setAttribute('aria-hidden', 'false');
            attributes(trgt.previousElementSibling, { 'aria-selected': 'true', 'aria-expanded': 'true' });
            icon.classList.remove(CLS_TOGANIMATE);
            this.trigger('expanded', eventArgs);
        }
    };
    Accordion.prototype.expandedItemsPush = function (item) {
        var index = this.getIndexByItem(item);
        if (this.expandedItems.indexOf(index) === -1) {
            this.expandedItems.push(index);
        }
    };
    Accordion.prototype.getIndexByItem = function (item) {
        return [].slice.call(this.element.children).indexOf(item);
    };
    Accordion.prototype.expandedItemsPop = function (item) {
        var index = this.getIndexByItem(item);
        this.expandedItems.splice(this.expandedItems.indexOf(index), 1);
    };
    Accordion.prototype.collapse = function (trgt) {
        var eventArgs;
        var trgtItemEle = closest(trgt, '.' + CLS_ITEM$1);
        if (isNullOrUndefined(trgt) || !isVisible(trgt) || trgtItemEle.classList.contains(CLS_DISABLE$2)) {
            return;
        }
        var animation = {
            name: this.animation.collapse.effect,
            duration: this.animation.collapse.duration,
            timingFunction: this.animation.collapse.easing,
        };
        var icon = select('.' + CLS_TOOGLEICN, trgtItemEle).firstElementChild;
        eventArgs = { element: trgtItemEle,
            item: this.items[this.getIndexByItem(trgtItemEle)],
            isExpanded: false };
        var eff = animation.name;
        this.trigger('expanding', eventArgs);
        if (eventArgs.cancel) {
            return;
        }
        this.expandedItemsPop(trgtItemEle);
        trgtItemEle.classList.add(CLS_EXPANDSTATE);
        icon.classList.add(CLS_TOGANIMATE);
        if ((animation.name === 'None')) {
            this.collapseProgress('begin', icon, trgt, trgtItemEle, eventArgs);
            this.collapseProgress('end', icon, trgt, trgtItemEle, eventArgs);
            return;
        }
        this.collapseAnimation(eff, trgt, trgtItemEle, icon, animation, eventArgs);
    };
    Accordion.prototype.collapseAnimation = function (ef, trgt, trgtItEl, icn, animate, args) {
        var _this = this;
        var height;
        var trgtHeight;
        var itemHeight;
        var remain;
        if (ef === 'SlideUp') {
            animate.begin = function () {
                itemHeight = trgtItEl.offsetHeight;
                trgtItEl.style.minHeight = itemHeight + 'px';
                trgt.style.position = 'absolute';
                height = trgtItEl.offsetHeight;
                trgtHeight = trgt.offsetHeight;
                trgt.style.maxHeight = trgtHeight + 'px';
                _this.collapseProgress('begin', icn, trgt, trgtItEl, args);
            };
            animate.progress = function () {
                remain = ((height - (trgtHeight - trgt.offsetHeight)));
                if (remain < itemHeight) {
                    trgtItEl.style.minHeight = remain + 'px';
                }
            };
            animate.end = function () {
                trgt.style.display = 'none';
                _this.collapseProgress('end', icn, trgt, trgtItEl, args);
                trgtItEl.style.minHeight = '';
                setStyleAttribute(trgt, { 'position': '', 'maxHeight': '', 'display': '' });
            };
        }
        else {
            animate.begin = function () {
                _this.collapseProgress('begin', icn, trgt, trgtItEl, args);
            };
            animate.end = function () {
                _this.collapseProgress('end', icn, trgt, trgtItEl, args);
            };
        }
        new Animation(animate).animate(trgt);
    };
    Accordion.prototype.collapseProgress = function (progress, icon, trgt, trgtItemEle, eventArgs) {
        this.remove(icon, CLS_EXPANDICN);
        this.remove(trgtItemEle, CLS_SLCTED);
        if (progress === 'end') {
            this.add(trgt, CLS_CTNHIDE);
            icon.classList.remove(CLS_TOGANIMATE);
            this.remove(trgtItemEle, CLS_ACTIVE);
            trgt.setAttribute('aria-hidden', 'true');
            attributes(trgt.previousElementSibling, { 'aria-selected': 'false', 'aria-expanded': 'false' });
            this.trigger('expanded', eventArgs);
        }
    };
    /**
     * Returns the current module name.
     * @returns string
     * @private
     */
    Accordion.prototype.getModuleName = function () {
        return 'accordion';
    };
    Accordion.prototype.itemAttribUpdate = function () {
        var itemEle = [].slice.call(this.element.children);
        var itemLen = this.items.length;
        itemEle.forEach(function (ele) {
            select('.' + CLS_HEADER, ele).setAttribute('aria-level', '' + itemLen);
        });
    };
    /**
     * Adds new item to the Accordion with the specified index of the Accordion.
     * @param  {AccordionItemModel} item - Item array that is to be added to the Accordion.
     * @param  {number} index - Number value that determines where the item should be added.
     * By default, item is added at the last index if the index is not specified.
     * @returns void
     */
    Accordion.prototype.addItem = function (item, index) {
        var ele = this.element;
        if (isNullOrUndefined(index)) {
            index = this.items.length;
        }
        if (ele.childElementCount >= index) {
            this.items.splice(index, 0, item);
            var innerItemEle = this.renderInnerItem(item, index);
            if (ele.childElementCount === index) {
                ele.appendChild(innerItemEle);
            }
            else {
                ele.insertBefore(innerItemEle, ele.children[index]);
            }
            EventHandler.add(innerItemEle.querySelector('.' + CLS_HEADER), 'focus', this.focusIn, this);
            EventHandler.add(innerItemEle.querySelector('.' + CLS_HEADER), 'blur', this.focusOut, this);
            this.itemAttribUpdate();
        }
        this.expandedItems = [];
        this.expandedItemRefresh(ele);
        if (item.expanded) {
            this.expandItem(true, index);
        }
    };
    Accordion.prototype.expandedItemRefresh = function (ele) {
        var _this = this;
        [].slice.call(ele.children).forEach(function (el) {
            if (el.classList.contains(CLS_SLCTED)) {
                _this.expandedItemsPush(el);
            }
        });
    };
    /**
     * Dynamically removes item from Accordion.
     * @param  {number} index - Number value that determines which item should be removed.
     * @returns void.
     */
    Accordion.prototype.removeItem = function (index) {
        var ele = this.element.children[index];
        if (isNullOrUndefined(ele)) {
            return;
        }
        detach(ele);
        this.items.splice(index, 1);
        this.itemAttribUpdate();
        this.expandedItems = [];
        this.expandedItemRefresh(this.element);
    };
    /**
     * Sets focus to the specified index item header in Accordion.
     * @param  {number} index - Number value that determines which item should be focused.
     * @returns void.
     */
    Accordion.prototype.select = function (index) {
        var ele = this.element.children[index];
        if (isNullOrUndefined(ele) || isNullOrUndefined(select('.' + CLS_HEADER, ele))) {
            return;
        }
        ele.children[0].focus();
    };
    /**
     * Shows or hides the specified item from Accordion.
     * @param  {number} index - Number value that determines which item should be hidden/shown.
     * @param  {Boolean} isHidden - Boolean value that determines the action either hide (true) or show (false). Default value is false.
     *  If the `isHidden` value is false, the item is shown or else item it is hidden.
     * @returns void.
     */
    Accordion.prototype.hideItem = function (index, isHidden) {
        var ele = this.element.children[index];
        if (isNullOrUndefined(ele)) {
            return;
        }
        if (isNullOrUndefined(isHidden)) {
            isHidden = true;
        }
        isHidden ? this.add(ele, CLS_ITEMHIDE) : this.remove(ele, CLS_ITEMHIDE);
    };
    /**
     * Enables/Disables the specified Accordion item.
     * @param  {number} index - Number value that determines which item should be enabled/disabled.
     * @param  {boolean} isEnable - Boolean value that determines the action as enable (true) or disable (false).
     * If the `isEnable` value is true, the item is enabled or else it is disabled.
     * @returns void.
     */
    Accordion.prototype.enableItem = function (index, isEnable) {
        var ele = this.element.children[index];
        if (isNullOrUndefined(ele)) {
            return;
        }
        var eleHeader = ele.firstElementChild;
        if (isEnable) {
            this.remove(ele, CLS_DISABLE$2);
            attributes(eleHeader, { 'tabindex': '0', 'aria-disabled': 'false' });
            eleHeader.focus();
        }
        else {
            if (ele.classList.contains(CLS_ACTIVE)) {
                this.expandItem(false, index);
                this.eleMoveFocus('movedown', this.element, eleHeader);
            }
            this.add(ele, CLS_DISABLE$2);
            eleHeader.setAttribute('aria-disabled', 'true');
            eleHeader.removeAttribute('tabindex');
        }
    };
    /**
     * Expands/Collapses the specified Accordion item.
     * @param  {boolean} isExpand - Boolean value that determines the action as expand or collapse.
     * @param  {number} index - Number value that determines which item should be expanded/collapsed.`index` is optional parameter.
     *  Without Specifying index, based on the `isExpand` value all Accordion item can be expanded or collapsed.
     * @returns void.
     */
    Accordion.prototype.expandItem = function (isExpand, index) {
        var _this = this;
        var root = this.element;
        if (isNullOrUndefined(index)) {
            if (this.expandMode === 'Single' && isExpand) {
                var ele = root.children[root.childElementCount - 1];
                this.itemExpand(isExpand, ele, this.getIndexByItem(ele));
            }
            else {
                [].slice.call(this.element.children).forEach(function (el) {
                    _this.itemExpand(isExpand, el, _this.getIndexByItem(el));
                });
            }
        }
        else {
            var ele = this.element.children[index];
            if (isNullOrUndefined(ele) || !ele.classList.contains(CLS_SLCT) || (ele.classList.contains(CLS_ACTIVE) && isExpand)) {
                return;
            }
            else {
                if (this.expandMode === 'Single') {
                    this.expandItem(false);
                }
                this.itemExpand(isExpand, ele, index);
            }
        }
    };
    Accordion.prototype.itemExpand = function (isExpand, ele, index) {
        var ctn = ele.children[1];
        if (ele.classList.contains(CLS_DISABLE$2)) {
            return;
        }
        if (isNullOrUndefined(ctn) && isExpand) {
            ctn = this.contentRendering(index);
            ele.appendChild(ctn);
            this.ariaAttrUpdate(ele);
        }
        else if (isNullOrUndefined(ctn)) {
            return;
        }
        isExpand ? this.expand(ctn) : this.collapse(ctn);
    };
    Accordion.prototype.getPersistData = function () {
        var keyEntity = ['expandedItems'];
        return this.addOnPersist(keyEntity);
    };
    /**
     * Gets called when the model property changes.The data that describes the old and new values of the property that changed.
     * @param  {AccordionModel} newProp
     * @param  {AccordionModel} oldProp
     * @returns void
     * @private
     */
    Accordion.prototype.onPropertyChanged = function (newProp, oldProp) {
        var acrdn = this.element;
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'enableRtl':
                    newProp.enableRtl ? this.add(acrdn, CLS_RTL$2) : this.remove(acrdn, CLS_RTL$2);
                    break;
                case 'height':
                    setStyleAttribute(this.element, { 'height': formatUnit(newProp.height) });
                    break;
                case 'width':
                    setStyleAttribute(this.element, { 'width': formatUnit(newProp.width) });
                    break;
                case 'expandMode':
                    if (newProp.expandMode === 'Single') {
                        this.element.setAttribute('aria-multiselectable', 'false');
                        if (this.expandedItems.length > 1) {
                            this.expandItem(false);
                        }
                    }
                    else {
                        this.element.setAttribute('aria-multiselectable', 'true');
                    }
                    break;
            }
        }
    };
    __decorate$2([
        Collection([], AccordionItem)
    ], Accordion.prototype, "items", void 0);
    __decorate$2([
        Property('100%')
    ], Accordion.prototype, "width", void 0);
    __decorate$2([
        Property('auto')
    ], Accordion.prototype, "height", void 0);
    __decorate$2([
        Property('Multiple')
    ], Accordion.prototype, "expandMode", void 0);
    __decorate$2([
        Complex({}, AccordionAnimationSettings)
    ], Accordion.prototype, "animation", void 0);
    __decorate$2([
        Event()
    ], Accordion.prototype, "clicked", void 0);
    __decorate$2([
        Event()
    ], Accordion.prototype, "expanding", void 0);
    __decorate$2([
        Event()
    ], Accordion.prototype, "expanded", void 0);
    __decorate$2([
        Event()
    ], Accordion.prototype, "created", void 0);
    __decorate$2([
        Event()
    ], Accordion.prototype, "destroyed", void 0);
    Accordion = __decorate$2([
        NotifyPropertyChanges
    ], Accordion);
    return Accordion;
}(Component));

/**
 * Accordion all modules
 */

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
/**
 * Specifies context menu items.
 */
var MenuItem = /** @class */ (function (_super) {
    __extends$3(MenuItem, _super);
    function MenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$3([
        Property('')
    ], MenuItem.prototype, "iconCss", void 0);
    __decorate$3([
        Property('')
    ], MenuItem.prototype, "id", void 0);
    __decorate$3([
        Property(false)
    ], MenuItem.prototype, "separator", void 0);
    __decorate$3([
        Collection([], MenuItem)
    ], MenuItem.prototype, "items", void 0);
    __decorate$3([
        Property('')
    ], MenuItem.prototype, "text", void 0);
    __decorate$3([
        Property('')
    ], MenuItem.prototype, "url", void 0);
    return MenuItem;
}(ChildProperty));
/**
 * The ContextMenu is a graphical user interface that appears on the user right click/touch hold operation.
 * ```html
 * <div id = 'target'></div>
 * <ul id = 'contextmenu'></ul>
 * ```
 * ```typescript
 * <script>
 * var contextMenuObj = new ContextMenu({items: [{ text: 'Cut' }, { text: 'Copy' },{ text: 'Paste' }], target: '#target'});
 * </script>
 * ```
 */
var ContextMenu = /** @class */ (function (_super) {
    __extends$3(ContextMenu, _super);
    /**
     * Constructor for creating the widget.
     * @private
     */
    function ContextMenu(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.animation = new Animation({});
        _this.navIdx = [];
        _this.isTapHold = false;
        return _this;
    }
    /**
     * Initialized animation with parent menu animation settings.
     * @private
     */
    ContextMenu.prototype.preRender = function () {
        if (this.element.tagName === 'EJ-CONTEXTMENU') {
            this.element.style.display = 'none';
            this.element.classList.remove('e-' + this.getModuleName());
            this.element.classList.remove('e-control');
            var ejInst = getValue('ej2_instances', this.element);
            var ul = createElement('ul');
            this.ngElement = this.element;
            this.element = ul;
            this.element.classList.add('e-control');
            this.element.classList.add('e-' + this.getModuleName());
            setValue('ej2_instances', ejInst, this.element);
            if (!this.element.id) {
                this.element.id = getUniqueID(this.getModuleName());
            }
        }
    };
    /**
     * Initialize the control rendering
     * @private
     */
    ContextMenu.prototype.render = function () {
        this.initWrapper();
        this.renderItems();
        this.wireEvents();
    };
    ContextMenu.prototype.initWrapper = function () {
        var wrapper = this.getWrapper();
        if (!wrapper) {
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
            var target = void 0;
            var targetElems = selectAll(this.target);
            for (var i = 0, len = targetElems.length; i < len; i++) {
                target = targetElems[i];
                if (Browser.isIos) {
                    new Touch(target, { tapHold: this.touchHandler.bind(this) });
                }
                else {
                    EventHandler.add(target, 'contextmenu', this.cmenuHandler, this);
                }
            }
            this.targetElement = target;
            for (var _i = 0, _a = getScrollableParent(this.targetElement); _i < _a.length; _i++) {
                var parent_1 = _a[_i];
                EventHandler.add(parent_1, 'scroll', this.scrollHandler, this);
            }
        }
        if (!Browser.isDevice) {
            EventHandler.add(wrapper, 'mouseover', this.moverHandler, this);
            EventHandler.add(document, 'mousedown', this.mouseDownHandler, this);
        }
        EventHandler.add(document, 'click', this.clickHandler, this);
        new KeyboardEvents(wrapper, {
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
            this.closeMenu(this.navIdx.length, e);
        }
    };
    ContextMenu.prototype.keyBoardHandler = function (e) {
        e.preventDefault();
        switch (e.action) {
            case DOWNARROW:
            case UPARROW:
                this.upDownKeyHandler(e);
                break;
            case RIGHTARROW:
                this.rightEnterKeyHandler(e);
                break;
            case LEFTARROW:
                this.leftEscKeyHandler(e);
                break;
            case ENTER:
                this.rightEnterKeyHandler(e);
                break;
            case ESCAPE:
                this.leftEscKeyHandler(e);
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
        if (cli.classList.contains(SEPARATOR) || cli.classList.contains(DISABLED) || cli.classList.contains(HIDE)) {
            action === (DOWNARROW || RIGHTARROW) ? index++ : index--;
        }
        cli = cul.children[index];
        if (cli.classList.contains(SEPARATOR) || cli.classList.contains(DISABLED) || cli.classList.contains(HIDE)) {
            index = this.isValidLI(cli, index, action);
        }
        return index;
    };
    ContextMenu.prototype.rightEnterKeyHandler = function (e) {
        var eventArgs;
        var wrapper = this.getWrapper();
        var cul = wrapper.children[this.navIdx.length];
        var fli = this.getLIByClass(cul, FOCUSED);
        if (fli) {
            var fliIdx = this.getIdx(cul, fli);
            var navIdx = this.navIdx.concat(fliIdx);
            var index = void 0;
            var item = this.getItem(navIdx);
            if (item.items.length) {
                this.navIdx.push(fliIdx);
                this.openMenu(fli, item, null, null, e);
                fli.classList.remove(FOCUSED);
                fli.classList.add(SELECTED);
                if (e.action === ENTER) {
                    eventArgs = { element: fli, item: item };
                    this.trigger('select', eventArgs);
                }
                fli.focus();
                cul = wrapper.children[this.navIdx.length];
                index = this.isValidLI(cul.children[0], 0, e.action);
                cul.children[index].classList.add(FOCUSED);
                cul.children[index].focus();
            }
            else {
                if (e.action === ENTER) {
                    fli.classList.remove(FOCUSED);
                    fli.classList.add(SELECTED);
                    eventArgs = { element: fli, item: item };
                    this.trigger('select', eventArgs);
                    this.closeMenu(null, e);
                }
            }
        }
    };
    ContextMenu.prototype.leftEscKeyHandler = function (e) {
        if (this.navIdx.length) {
            var wrapper = this.getWrapper();
            this.closeMenu(this.navIdx.length, e);
            var cul = wrapper.children[this.navIdx.length];
            var sli = this.getLIByClass(cul, SELECTED);
            if (sli) {
                sli.setAttribute('aria-expanded', 'false');
                sli.classList.remove(SELECTED);
                sli.classList.add(FOCUSED);
                sli.focus();
            }
        }
        else {
            if (e.action === ESCAPE) {
                this.closeMenu(null, e);
            }
        }
    };
    ContextMenu.prototype.scrollHandler = function (e) {
        this.closeMenu(null, e);
    };
    ContextMenu.prototype.touchHandler = function (e) {
        this.isTapHold = true;
        this.cmenuHandler(e.originalEvent);
    };
    ContextMenu.prototype.cmenuHandler = function (e) {
        e.preventDefault();
        this.closeMenu(null, e);
        if (this.canOpen(e.target)) {
            if (e.changedTouches) {
                this.openMenu(null, null, e.changedTouches[0].clientY, e.changedTouches[0].clientX, e);
            }
            else {
                this.openMenu(null, null, e.clientY, e.clientX, e);
            }
        }
    };
    /**
     * Closes the ContextMenu if it is opened.
     */
    ContextMenu.prototype.close = function () {
        this.closeMenu();
    };
    ContextMenu.prototype.closeMenu = function (ulIndex, e) {
        if (ulIndex === void 0) { ulIndex = 0; }
        if (e === void 0) { e = null; }
        if (this.isMenuVisible()) {
            var ul = void 0;
            var item = void 0;
            var items = void 0;
            var closeArgs = void 0;
            var beforeCloseArgs = void 0;
            var wrapper = this.getWrapper();
            for (var cnt = wrapper.childElementCount; cnt > ulIndex; cnt--) {
                item = this.navIdx.length ? this.getItem(this.navIdx) : null;
                items = item ? item.items : this.items;
                ul = wrapper.children[cnt - 1];
                beforeCloseArgs = { element: ul, parentItem: item, items: items, event: e, cancel: false };
                this.trigger('beforeClose', beforeCloseArgs);
                if (!beforeCloseArgs.cancel) {
                    this.toggleAnimation(ul, false);
                    this.navIdx.length = ulIndex ? ulIndex - 1 : ulIndex;
                    closeArgs = { element: ul, parentItem: item, items: items };
                    this.trigger('onClose', closeArgs);
                }
            }
        }
    };
    ContextMenu.prototype.isMenuVisible = function () {
        return (this.navIdx.length > 0 || (this.element.classList.contains('e-contextmenu') && isVisible(this.element).valueOf()));
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
    /**
     * This method is used to open the ContextMenu in specified position.
     * @param top To specify ContextMenu vertical positioning.
     * @param left To specify ContextMenu horizontal positioning.
     * @returns void
     */
    ContextMenu.prototype.open = function (top, left) {
        this.openMenu(null, null, top, left);
    };
    ContextMenu.prototype.openMenu = function (li, item, top, left, e) {
        if (top === void 0) { top = 0; }
        if (left === void 0) { left = 0; }
        if (e === void 0) { e = null; }
        var ul;
        var navIdx;
        var wrapper = this.getWrapper();
        if (li) {
            ul = this.createItems(item.items);
            if (Browser.isDevice) {
                wrapper.lastChild.style.display = 'none';
                var data = { text: item.text, iconCss: ICONS + ' e-previous' };
                var hdata = new MenuItem(this.items[0], null, data, true);
                var hli = this.createItems([hdata]).children[0];
                hli.classList.add(HEADER);
                ul.insertBefore(hli, ul.children[0]);
            }
            ul.style.zIndex = this.element.style.zIndex;
            wrapper.appendChild(ul);
        }
        else {
            ul = this.element;
        }
        navIdx = this.getIndex(li ? li.textContent : null);
        var items = li ? item.items : this.items;
        var eventArgs = { element: ul, items: items, parentItem: item, event: e, cancel: false };
        this.trigger('beforeOpen', eventArgs);
        if (eventArgs.cancel) {
            this.navIdx.pop();
        }
        else {
            this.setPosition(li, ul, top, left);
            this.toggleAnimation(ul);
        }
    };
    ContextMenu.prototype.setPosition = function (li, ul, top, left) {
        var px = 'px';
        this.toggleVisiblity(ul);
        if (ul === this.element) {
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
                var collide = isCollide(ul, null, this.enableRtl ? left - ul.offsetWidth : left, top);
                var xCollision = collide.indexOf('left') > -1 || collide.indexOf('right') > -1;
                if (xCollision) {
                    offset = calculatePosition(li, this.enableRtl ? 'right' : 'left', 'top');
                    left = offset.left;
                }
                if (this.enableRtl || xCollision) {
                    left = (this.enableRtl && xCollision) ? left : left - ul.offsetWidth;
                }
                if (collide.indexOf('bottom') > -1) {
                    offset = fit(ul, null, { X: false, Y: true }, { top: top, left: left });
                    top = offset.top;
                }
            }
        }
        this.toggleVisiblity(ul, false);
        ul.style.top = top + px;
        ul.style.left = left + px;
    };
    ContextMenu.prototype.toggleVisiblity = function (ul, isVisible$$1) {
        if (isVisible$$1 === void 0) { isVisible$$1 = true; }
        ul.style.visibility = isVisible$$1 ? 'hidden' : '';
        ul.style.display = isVisible$$1 ? 'block' : 'none';
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
                    args.item.classList.add(SEPARATOR);
                    args.item.removeAttribute('role');
                    var blankIcon = select('.e-blankicon', args.item);
                    if (blankIcon) {
                        remove(blankIcon);
                    }
                }
                if (args.curData.items && args.curData.items.length) {
                    var span = createElement('span', { className: ICONS + ' ' + CARET });
                    args.item.appendChild(span);
                    args.item.setAttribute('aria-haspopup', 'true');
                    args.item.setAttribute('aria-expanded', 'false');
                    args.item.removeAttribute('role');
                    args.item.classList.add('e-menu-caret-icon');
                }
                var eventArgs = { item: args.curData, element: args.item };
                _this.trigger('beforeItemRender', eventArgs);
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
        return closest(this.element, '.' + WRAPPER);
    };
    ContextMenu.prototype.clickHandler = function (e) {
        if (this.isTapHold) {
            this.isTapHold = false;
        }
        else {
            var wrapper = this.getWrapper();
            var trgt = e.target;
            var cli = this.getLI(trgt);
            var cliWrapper = cli ? closest(cli, '.' + WRAPPER) : null;
            var isInstLI = cli && cliWrapper && wrapper.firstElementChild.id === cliWrapper.firstElementChild.id;
            if (isInstLI && e.type === 'click' && !cli.classList.contains(HEADER)) {
                this.setLISelected(cli);
                var navIdx = this.getIndex(cli.textContent);
                var item = this.getItem(navIdx);
                var eventArgs = { element: cli, item: item };
                this.trigger('select', eventArgs);
            }
            if (isInstLI && (e.type === 'mouseover' || Browser.isDevice || this.showItemOnClick)) {
                var ul = void 0;
                if (cli.classList.contains(HEADER)) {
                    ul = wrapper.children[this.navIdx.length - 1];
                    this.toggleAnimation(ul);
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
                                this.closeMenu(culIdx + 1, e);
                            }
                        }
                        if (showSubMenu) {
                            var idx = this.navIdx.concat(cliIdx);
                            var item = this.getItem(idx);
                            if (item.items.length) {
                                if (e.type === 'mouseover') {
                                    this.setLISelected(cli);
                                }
                                cli.setAttribute('aria-expanded', 'true');
                                this.navIdx.push(cliIdx);
                                this.openMenu(cli, item, null, null, e);
                            }
                            else {
                                if (e.type !== 'mouseover') {
                                    this.closeMenu(null, e);
                                }
                            }
                        }
                    }
                }
            }
            else {
                if (trgt.tagName !== 'UL' || trgt.parentElement !== wrapper) {
                    if (!cli || !cli.querySelector('.' + CARET)) {
                        this.closeMenu(null, e);
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
    /**
     * Called internally if any of the property value changed
     * @private
     * @param {ContextMenuModel} newProp
     * @param {ContextMenuModel} oldProp
     * @returns void
     */
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
                case 'items':
                    var idx = void 0;
                    var navIdx = void 0;
                    var item = void 0;
                    var keys = Object.keys(newProp.items);
                    for (var i = 0; i < keys.length; i++) {
                        navIdx = this.getChangedItemIndex(newProp, [], Number(keys[i]));
                        if (navIdx.length <= this.getWrapper().children.length) {
                            idx = navIdx.pop();
                            item = this.getItems(navIdx);
                            this.insertAfter([item[idx]], item[idx].text);
                            this.removeItem(item, navIdx, idx);
                        }
                        navIdx.length = 0;
                    }
                    break;
            }
        }
    };
    ContextMenu.prototype.getChangedItemIndex = function (newProp, index, idx) {
        index.push(idx);
        var key = Object.keys(newProp.items[idx]).pop();
        if (key === 'items') {
            var item = newProp.items[idx];
            this.getChangedItemIndex(item, index, Number(Object.keys(item.items).pop()));
        }
        else {
            if (key === 'isParentArray' && index.length > 1) {
                index.pop();
            }
        }
        return index;
    };
    ContextMenu.prototype.removeItem = function (item, navIdx, idx) {
        item.splice(idx, 1);
        var uls = this.getWrapper().children;
        if (navIdx.length < uls.length) {
            detach(uls[navIdx.length].children[idx]);
        }
    };
    /**
     * Used to unwire the bind events.
     * @private
     */
    ContextMenu.prototype.unWireEvents = function () {
        var wrapper = this.getWrapper();
        if (this.target) {
            var target = void 0;
            var touchModule = void 0;
            var targetElems = selectAll(this.target);
            for (var i = 0, len = targetElems.length; i < len; i++) {
                target = targetElems[i];
                if (Browser.isIos) {
                    touchModule = getInstance(target, Touch);
                    if (touchModule) {
                        touchModule.destroy();
                    }
                }
                else {
                    EventHandler.remove(target, 'contextmenu', this.cmenuHandler);
                }
            }
            for (var _i = 0, _a = getScrollableParent(this.targetElement); _i < _a.length; _i++) {
                var parent_2 = _a[_i];
                EventHandler.remove(parent_2, 'scroll', this.scrollHandler);
            }
        }
        if (!Browser.isDevice) {
            EventHandler.remove(wrapper, 'mouseover', this.moverHandler);
            EventHandler.remove(document, 'mousedown', this.mouseDownHandler);
        }
        EventHandler.remove(document, 'click', this.clickHandler);
        var keyboardModule = getInstance(wrapper, KeyboardEvents);
        if (keyboardModule) {
            keyboardModule.destroy();
        }
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
                    options.element.style.display = 'block';
                    options.element.style.maxHeight = options.element.getBoundingClientRect().height + 'px';
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
            ul.style.maxHeight = '';
            var item = this.navIdx.length ? this.getItem(this.navIdx) : null;
            var eventArgs = { element: ul, parentItem: item, items: item ? item.items : this.items };
            this.trigger('onOpen', eventArgs);
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
    /**
     * Get the properties to be maintained in the persisted state.
     * @returns string
     */
    ContextMenu.prototype.getPersistData = function () {
        return '';
    };
    /**
     * Get component name.
     * @returns string
     * @private
     */
    ContextMenu.prototype.getModuleName = function () {
        return 'contextmenu';
    };
    ContextMenu.prototype.getIndex = function (data, items, navIdx, isCallBack) {
        if (items === void 0) { items = this.items; }
        if (navIdx === void 0) { navIdx = []; }
        if (isCallBack === void 0) { isCallBack = false; }
        var item;
        for (var i = 0, len = items.length; i < len; i++) {
            item = items[i];
            if (item.text === data) {
                navIdx.push(i);
                break;
            }
            else if (item.items.length) {
                navIdx = this.getIndex(data, item.items, navIdx, true);
                if (navIdx[navIdx.length - 1] === -1) {
                    if (i !== len - 1) {
                        navIdx.pop();
                    }
                }
                else {
                    navIdx.unshift(i);
                    break;
                }
            }
            else {
                if (i === len - 1) {
                    navIdx.push(-1);
                }
            }
        }
        return (!isCallBack && navIdx[0] === -1) ? [] : navIdx;
    };
    /**
     * This method is used to enable or disable the menu items in the ContextMenu based on the items and enable argument.
     * @param items Text items that needs to be enabled/disabled.
     * @param enable Set `true`/`false` to enable/disable the list items.
     * @returns void
     */
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
    /**
     * This method is used to show the menu items in the ContextMenu based on the items text.
     * @param items Text items that needs to be shown.
     * @returns void
     */
    ContextMenu.prototype.showItems = function (items) {
        this.showHideItems(items, false);
    };
    /**
     * This method is used to hide the menu items in the ContextMenu based on the items text.
     * @param items Text items that needs to be hidden.
     * @returns void
     */
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
    /**
     * It is used to remove the menu items from the ContextMenu based on the items text.
     * @param items Text items that needs to be removed.
     * @returns void
     */
    ContextMenu.prototype.removeItems = function (items) {
        var idx;
        var navIdx;
        var iitems;
        for (var i = 0; i < items.length; i++) {
            navIdx = this.getIndex(items[i]);
            idx = navIdx.pop();
            iitems = this.getItems(navIdx);
            this.removeItem(iitems, navIdx, idx);
        }
    };
    /**
     * It is used to insert the menu items after the specified menu item text.
     * @param items Items that needs to be inserted.
     * @param text Text item after that the element to be inserted.
     * @returns void
     */
    ContextMenu.prototype.insertAfter = function (items, text) {
        this.insertItems(items, text);
    };
    /**
     * It is used to insert the menu items before the specified menu item text.
     * @param items Items that needs to be inserted.
     * @param text Text item before that the element to be inserted.
     * @returns void
     */
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
            var uls = this.getWrapper().children;
            if (navIdx.length < uls.length) {
                idx = isAfter ? idx + 1 : idx;
                showIcon = this.hasField(iitems, 'iconCss');
                li = this.createItems(iitems).children[idx];
                uls[navIdx.length].insertBefore(li, uls[navIdx.length].children[idx]);
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
    /**
     * Destroys the widget.
     * @returns void
     */
    ContextMenu.prototype.destroy = function () {
        var _this = this;
        var wrapper = this.getWrapper();
        if (wrapper) {
            _super.prototype.destroy.call(this);
            this.unWireEvents();
            if (this.ngElement) {
                this.ngElement.style.display = 'block';
            }
            else {
                this.closeMenu();
                this.element.innerHTML = '';
                ['top', 'left', 'display', 'z-index'].forEach(function (key) {
                    _this.element.style.removeProperty(key);
                });
                ['role', 'tabindex', 'class', 'style'].forEach(function (key) {
                    if (['class', 'style'].indexOf(key) === -1 || !_this.element.getAttribute(key)) {
                        _this.element.removeAttribute(key);
                    }
                });
                wrapper.parentNode.insertBefore(this.element, wrapper);
            }
            detach(wrapper);
        }
    };
    __decorate$3([
        Property('')
    ], ContextMenu.prototype, "cssClass", void 0);
    __decorate$3([
        Property('')
    ], ContextMenu.prototype, "filter", void 0);
    __decorate$3([
        Property(false)
    ], ContextMenu.prototype, "showItemOnClick", void 0);
    __decorate$3([
        Collection([], MenuItem)
    ], ContextMenu.prototype, "items", void 0);
    __decorate$3([
        Property('')
    ], ContextMenu.prototype, "target", void 0);
    __decorate$3([
        Property({ duration: 400, easing: 'ease', effect: 'SlideDown' })
    ], ContextMenu.prototype, "animationSettings", void 0);
    __decorate$3([
        Event()
    ], ContextMenu.prototype, "beforeItemRender", void 0);
    __decorate$3([
        Event()
    ], ContextMenu.prototype, "beforeOpen", void 0);
    __decorate$3([
        Event()
    ], ContextMenu.prototype, "onOpen", void 0);
    __decorate$3([
        Event()
    ], ContextMenu.prototype, "beforeClose", void 0);
    __decorate$3([
        Event()
    ], ContextMenu.prototype, "onClose", void 0);
    __decorate$3([
        Event()
    ], ContextMenu.prototype, "select", void 0);
    ContextMenu = __decorate$3([
        NotifyPropertyChanges
    ], ContextMenu);
    return ContextMenu;
}(Component));

/**
 * ContextMenu modules
 */

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CLS_TAB = 'e-tab';
var CLS_HEADER$1 = 'e-tab-header';
var CLS_CONTENT$1 = 'e-content';
var CLS_ITEMS$1 = 'e-items';
var CLS_ITEM$2 = 'e-item';
var CLS_TEMPLATE$1 = 'e-template';
var CLS_RTL$3 = 'e-rtl';
var CLS_ACTIVE$1 = 'e-active';
var CLS_DISABLE$3 = 'e-disable';
var CLS_HIDDEN = 'e-hidden';
var CLS_FOCUS = 'e-focused';
var CLS_ICONS = 'e-icons';
var CLS_ICON = 'e-icon';
var CLS_ICON_CLOSE = 'e-close-icon';
var CLS_CLOSE_SHOW = 'e-close-show';
var CLS_TEXT = 'e-tab-text';
var CLS_INDICATOR = 'e-indicator';
var CLS_WRAP = 'e-tab-wrap';
var CLS_TEXT_WRAP = 'e-text-wrap';
var CLS_TAB_ICON = 'e-tab-icon';
var CLS_TB_ITEMS = 'e-toolbar-items';
var CLS_TB_ITEM = 'e-toolbar-item';
var CLS_TB_POP = 'e-toolbar-pop';
var CLS_TB_POPUP = 'e-toolbar-popup';
var CLS_POPUP_OPEN = 'e-popup-open';
var CLS_POPUP_CLOSE = 'e-popup-close';
var CLS_PROGRESS = 'e-progress';
var CLS_IGNORE = 'e-ignore';
var TabActionSettings = /** @class */ (function (_super) {
    __extends$4(TabActionSettings, _super);
    function TabActionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$4([
        Property('SlideLeftIn')
    ], TabActionSettings.prototype, "effect", void 0);
    __decorate$4([
        Property(600)
    ], TabActionSettings.prototype, "duration", void 0);
    __decorate$4([
        Property('ease')
    ], TabActionSettings.prototype, "easing", void 0);
    return TabActionSettings;
}(ChildProperty));
var TabAnimationSettings = /** @class */ (function (_super) {
    __extends$4(TabAnimationSettings, _super);
    function TabAnimationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$4([
        Complex({ effect: 'SlideLeftIn', duration: 600, easing: 'ease' }, TabActionSettings)
    ], TabAnimationSettings.prototype, "previous", void 0);
    __decorate$4([
        Complex({ effect: 'SlideRightIn', duration: 600, easing: 'ease' }, TabActionSettings)
    ], TabAnimationSettings.prototype, "next", void 0);
    return TabAnimationSettings;
}(ChildProperty));
/**
 * Objects used for configuring the Tab item header properties.
 */
var Header = /** @class */ (function (_super) {
    __extends$4(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$4([
        Property('')
    ], Header.prototype, "text", void 0);
    __decorate$4([
        Property('')
    ], Header.prototype, "iconCss", void 0);
    __decorate$4([
        Property('left')
    ], Header.prototype, "iconPosition", void 0);
    return Header;
}(ChildProperty));
/**
 * An array of object that is used to configure the Tab.
 */
var TabItem = /** @class */ (function (_super) {
    __extends$4(TabItem, _super);
    function TabItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$4([
        Complex({}, Header)
    ], TabItem.prototype, "header", void 0);
    __decorate$4([
        Property('')
    ], TabItem.prototype, "content", void 0);
    __decorate$4([
        Property('')
    ], TabItem.prototype, "cssClass", void 0);
    __decorate$4([
        Property(false)
    ], TabItem.prototype, "disabled", void 0);
    return TabItem;
}(ChildProperty));
/**
 * Tab is a content panel to show multiple contents in a single space, one at a time.
 * Each Tab item has an associated content, that will be displayed based on the active Tab header item.
 * ```html
 * <div id="tab"></div>
 * <script>
 *   var tabObj = new Tab();
 *   tab.appendTo("#tab");
 * </script>
 * ```
 */
var Tab = /** @class */ (function (_super) {
    __extends$4(Tab, _super);
    /**
     * Initializes a new instance of the Tab class.
     * @param options  - Specifies Tab model properties as options.
     * @param element  - Specifies the element that is rendered as a Tab.
     */
    function Tab(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.prevIndex = 0;
        _this.show = { name: 'SlideDown', duration: 100 };
        _this.hide = { name: 'SlideUp', duration: 100 };
        _this.animateOptions = {};
        _this.animObj = new Animation(_this.animateOptions);
        _this.maxHeight = 0;
        _this.title = 'Close';
        /**
         * Contains the keyboard configuration of the Tab.
         */
        _this.keyConfigs = {
            tab: 'tab',
            home: 'home',
            end: 'end',
            enter: 'enter',
            space: 'space',
            delete: 'delete',
            moveLeft: 'leftarrow',
            moveRight: 'rightarrow',
            moveUp: 'uparrow',
            moveDown: 'downarrow'
        };
        return _this;
    }
    /**
     * Removes the component from the DOM and detaches all its related event handlers, attributes and classes.
     * @returns void
     */
    Tab.prototype.destroy = function () {
        var _this = this;
        if (!isNullOrUndefined(this.tbObj)) {
            this.tbObj.destroy();
        }
        this.unWireEvents();
        ['role', 'aria-disabled', 'aria-activedescendant', 'tabindex', 'aria-orientation'].forEach(function (val) {
            _this.element.removeAttribute(val);
        });
        if (!this.isTemplate) {
            this.element.innerHTML = '';
        }
        else {
            var cntEle = select('.' + CLS_TAB + ' > .' + CLS_CONTENT$1, this.element);
            this.element.classList.remove(CLS_TEMPLATE$1);
            if (!isNullOrUndefined(cntEle)) {
                cntEle.innerHTML = this.cnt;
            }
        }
        _super.prototype.destroy.call(this);
        this.trigger('destroyed');
    };
    /**
     * Initialize component
     * @private
     */
    Tab.prototype.preRender = function () {
        this.isPopup = false;
        this.initRender = true;
        this.isSwipeed = false;
        var name = Browser.info.name;
        var css = (name === 'msie') ? 'e-ie' : (name === 'edge') ? 'e-edge' : (name === 'safari') ? 'e-safari' : '';
        setStyleAttribute(this.element, { 'width': formatUnit(this.width), 'height': formatUnit(this.height) });
        this.setCssClass(this.element, this.cssClass, true);
        attributes(this.element, { role: 'tablist', 'aria-disabled': 'false', 'aria-activedescendant': '' });
        this.setCssClass(this.element, css, true);
    };
    /**
     * Initialize the component rendering
     * @private
     */
    Tab.prototype.render = function () {
        this.renderContainer();
        this.wireEvents();
        this.initRender = false;
    };
    Tab.prototype.renderContainer = function () {
        var ele = this.element;
        if (this.items.length > 0 && ele.children.length === 0) {
            ele.appendChild(createElement('div', { className: CLS_CONTENT$1 }));
            this.setOrientation(this.headerPlacement, createElement('div', { className: CLS_HEADER$1 }));
            this.isTemplate = false;
        }
        else if (this.element.children.length > 0) {
            this.isTemplate = true;
            ele.classList.add(CLS_TEMPLATE$1);
            var header = ele.querySelector('.' + CLS_HEADER$1);
            if (header && this.headerPlacement === 'Bottom') {
                this.setOrientation(this.headerPlacement, header);
            }
        }
        if (!isNullOrUndefined(select('.' + CLS_HEADER$1, this.element)) && !isNullOrUndefined(select('.' + CLS_CONTENT$1, this.element))) {
            this.renderHeader();
            this.tbItems = select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS, this.element);
            if (!isNullOrUndefined(this.tbItems)) {
                rippleEffect(this.tbItems, { selector: '.e-tab-wrap' });
            }
            this.renderContent();
            if (selectAll('.' + CLS_TB_ITEM, this.element).length > 0) {
                this.tbItems = select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS, this.element);
                this.bdrLine = createElement('div', { className: CLS_INDICATOR + ' ' + CLS_HIDDEN + ' ' + CLS_IGNORE });
                var scrCnt = select('.e-hscroll-content', this.tbItems);
                if (!isNullOrUndefined(scrCnt)) {
                    scrCnt.insertBefore(this.bdrLine, scrCnt.firstChild);
                }
                else {
                    this.tbItems.insertBefore(this.bdrLine, this.tbItems.firstChild);
                }
                this.setContentHeight(true);
                this.select(this.selectedItem);
            }
            this.setRTL(this.enableRtl);
        }
    };
    Tab.prototype.renderHeader = function () {
        var _this = this;
        var tabItems = [];
        this.hdrEle = select('.' + CLS_HEADER$1, this.element);
        this.btnCls = createElement('span', { className: CLS_ICONS + ' ' + CLS_ICON_CLOSE, attrs: { title: this.title } }).outerHTML;
        if (!this.isTemplate) {
            tabItems = this.parseObject(this.items);
        }
        else {
            var count = this.hdrEle.children.length;
            var hdrItems = [];
            for (var i = 0; i < count; i++) {
                hdrItems.push(this.hdrEle.children.item(i).innerHTML);
            }
            if (count > 0) {
                this.hdrEle.innerHTML = '';
                this.hdrEle.appendChild(createElement('div', { className: CLS_ITEMS$1 }));
                hdrItems.forEach(function (item, index) {
                    var attr = {
                        className: CLS_ITEM$2, id: CLS_ITEM$2 + '_' + index,
                        attrs: { role: 'tab', 'aria-controls': CLS_CONTENT$1 + '_' + index, 'aria-selected': 'false' }
                    };
                    var txt = createElement('span', { className: CLS_TEXT, innerHTML: item, attrs: { 'role': 'presentation' } }).outerHTML;
                    var cont = createElement('div', { className: CLS_TEXT_WRAP, innerHTML: txt + _this.btnCls }).outerHTML;
                    var wrap = createElement('div', { className: CLS_WRAP, innerHTML: cont, attrs: { tabIndex: '-1' } });
                    select('.' + CLS_ITEMS$1, _this.element).appendChild(createElement('div', attr));
                    selectAll('.' + CLS_ITEM$2, _this.element)[index].appendChild(wrap);
                });
            }
        }
        this.tbObj = new Toolbar({
            width: '100%',
            overflowMode: this.overflowMode,
            items: (tabItems.length !== 0) ? tabItems : [],
            clicked: this.clickHandler.bind(this)
        });
        this.tbObj.appendTo(this.hdrEle);
        attributes(this.element, { 'aria-orientation': 'horizontal' });
        this.setCloseButton(this.showCloseButton);
        this.setProperties({ headerPlacement: (this.element.children.item(0).classList.contains(CLS_HEADER$1)) ? 'Top' : 'Bottom' }, true);
    };
    Tab.prototype.renderContent = function () {
        this.cntEle = select('.' + CLS_CONTENT$1, this.element);
        var hdrItem = selectAll('.' + CLS_TB_ITEM, this.element);
        if (this.isTemplate) {
            this.cnt = (this.cntEle.children.length > 0) ? this.cntEle.innerHTML : '';
            var contents = this.cntEle.children;
            for (var i = 0; i < hdrItem.length; i++) {
                if (contents.length - 1 >= i) {
                    contents.item(i).className += CLS_ITEM$2;
                    attributes(contents.item(i), { 'role': 'tabpanel', 'aria-labelledby': CLS_ITEM$2 + '_' + i });
                    contents.item(i).id = CLS_CONTENT$1 + '_' + i;
                }
            }
        }
    };
    Tab.prototype.parseObject = function (items) {
        var _this = this;
        var inHTML = '';
        var tbCount = selectAll('.' + CLS_TB_ITEM, this.element).length;
        var tItems = [];
        items.forEach(function (item, index) {
            var pos = (isNullOrUndefined(item.header.iconPosition)) ? '' : item.header.iconPosition;
            var css = (isNullOrUndefined(item.header.iconCss)) ? '' : item.header.iconCss;
            var txt = item.header.text;
            var id = ((tbCount === 0) ? index : (_this.isReplace === true) ? index : tbCount + index);
            var disabled = (item.disabled) ? ' ' + CLS_DISABLE$3 : '';
            var tHtml = ((txt instanceof Object) ? txt.outerHTML : txt);
            var txtEmpty = (!isNullOrUndefined(tHtml) && tHtml !== '');
            var tEle = (txtEmpty) ? createElement('div', {
                className: CLS_TEXT, innerHTML: tHtml, attrs: { 'role': 'presentation' }
            }).outerHTML : '';
            var icon = createElement('span', {
                className: CLS_ICONS + ' ' + CLS_TAB_ICON + ' ' + CLS_ICON + '-' + pos + ' ' + css
            }).outerHTML;
            if ((txt === '' || txt === undefined) && css === '') {
                return;
            }
            else {
                if ((txt !== '' && txt !== undefined) && css !== '') {
                    inHTML = (pos === 'left' || pos === 'top') ? icon + '' + tEle : tEle + '' + icon;
                }
                else {
                    inHTML = (css === '') ? tEle : icon;
                }
            }
            var tCont = createElement('div', { className: CLS_TEXT_WRAP, innerHTML: inHTML + '' + _this.btnCls }).outerHTML;
            var wrap = createElement('div', { className: CLS_WRAP, innerHTML: tCont, attrs: { tabIndex: '-1' } });
            var attrObj = {
                id: CLS_ITEM$2 + '_' + id, role: 'tab', 'aria-selected': 'false'
            };
            var tItem = { htmlAttributes: attrObj, template: wrap.outerHTML };
            tItem.cssClass = item.cssClass + '' + disabled + '' + ((css !== '') ? 'e-i' + pos : '') + ' ' + ((!txtEmpty) ? CLS_ICON : '');
            if (pos === 'top' || pos === 'bottom') {
                _this.element.classList.add('e-vertical-icon');
            }
            tItems.push(tItem);
        });
        return tItems;
    };
    Tab.prototype.removeActiveClass = function (id) {
        var hdrActEle = selectAll(':root .' + CLS_HEADER$1 + ' .' + CLS_TB_ITEM + '.' + CLS_ACTIVE$1, this.element)[0];
        if (this.headerPlacement === 'Bottom') {
            hdrActEle = selectAll(':root .' + CLS_HEADER$1 + ' .' + CLS_TB_ITEM + '.' + CLS_ACTIVE$1, this.element.children[1])[0];
        }
        if (!isNullOrUndefined(hdrActEle)) {
            hdrActEle.classList.remove(CLS_ACTIVE$1);
            var no = this.extIndex(hdrActEle.id);
            var trg = this.findEle(select('.e-content', this.element).children, CLS_CONTENT$1 + '_' + no);
        }
    };
    Tab.prototype.checkPopupOverflow = function (ele) {
        this.tbPop = select('.' + CLS_TB_POP, this.element);
        var popIcon = select('.e-hor-nav', this.element);
        var tbrItems = select('.' + CLS_TB_ITEMS, this.element);
        if ((this.enableRtl && ((popIcon.offsetLeft + popIcon.offsetWidth) > tbrItems.offsetLeft))
            || (!this.enableRtl && popIcon.offsetLeft < tbrItems.offsetWidth)) {
            ele.classList.add(CLS_TB_POPUP);
            this.tbPop.insertBefore(ele.cloneNode(true), selectAll('.' + CLS_TB_POPUP, this.tbPop)[0]);
            ele.outerHTML = '';
        }
        return true;
    };
    Tab.prototype.popupHandler = function (target) {
        var ripEle = target.querySelector('.e-ripple-element');
        if (!isNullOrUndefined(ripEle)) {
            ripEle.outerHTML = '';
            target.querySelector('.' + CLS_WRAP).classList.remove('e-ripple');
        }
        this.tbItem = selectAll('.' + CLS_TB_ITEMS + ' .' + CLS_TB_ITEM, this.hdrEle);
        var lastChild = this.tbItem[this.tbItem.length - 1];
        if (this.tbItem.length !== 0) {
            target.classList.remove(CLS_TB_POPUP);
            this.tbItems.appendChild(target.cloneNode(true));
            this.actEleId = target.id;
            target.outerHTML = '';
            if (this.checkPopupOverflow(lastChild)) {
                var prevEle = this.tbItems.lastChild.previousElementSibling;
                this.checkPopupOverflow(prevEle);
            }
            this.isPopup = true;
        }
        return selectAll('.' + CLS_TB_ITEM, this.tbItems).length - 1;
    };
    Tab.prototype.setCloseButton = function (val) {
        var trg = select('.' + CLS_HEADER$1, this.element);
        (val === true) ? trg.classList.add(CLS_CLOSE_SHOW) : trg.classList.remove(CLS_CLOSE_SHOW);
        this.tbObj.refreshOverflow();
        this.refreshActElePosition();
    };
    Tab.prototype.prevCtnAnimation = function (prev, current) {
        var animation;
        var checkRTL = this.enableRtl || this.element.classList.contains(CLS_RTL$3);
        if (this.isPopup || prev <= current) {
            if (this.animation.previous.effect === 'SlideLeftIn') {
                animation = { name: 'SlideLeftOut',
                    duration: this.animation.previous.duration, timingFunction: this.animation.previous.easing };
            }
            else {
                animation = null;
            }
        }
        else {
            if (this.animation.next.effect === 'SlideRightIn') {
                animation = { name: 'SlideRightOut',
                    duration: this.animation.next.duration, timingFunction: this.animation.next.easing };
            }
            else {
                animation = null;
            }
        }
        return animation;
    };
    Tab.prototype.triggerPrevAnimation = function (oldCnt, prevIndex) {
        var animateObj = this.prevCtnAnimation(prevIndex, this.selectedItem);
        if (!isNullOrUndefined(animateObj)) {
            animateObj.begin = function () {
                setStyleAttribute(oldCnt, { 'position': 'absolute' });
                oldCnt.classList.add(CLS_PROGRESS);
                oldCnt.classList.add('e-view');
            };
            animateObj.end = function () {
                oldCnt.style.display = 'none';
                oldCnt.classList.remove(CLS_ACTIVE$1);
                oldCnt.classList.remove(CLS_PROGRESS);
                oldCnt.classList.remove('e-view');
                setStyleAttribute(oldCnt, { 'display': '', 'position': '' });
            };
            new Animation(animateObj).animate(oldCnt);
        }
        else {
            oldCnt.classList.remove(CLS_ACTIVE$1);
        }
    };
    Tab.prototype.triggerAnimation = function (id, value) {
        var _this = this;
        var prevIndex = this.prevIndex;
        var itemCollection = [].slice.call(this.element.querySelector('.' + CLS_CONTENT$1).children);
        var oldCnt;
        itemCollection.forEach(function (item) {
            if (item.id === _this.prevActiveEle) {
                oldCnt = item;
            }
        });
        var prevEle = this.tbItem[prevIndex];
        var no = this.extIndex(this.tbItem[this.selectedItem].id);
        var newCnt;
        newCnt = this.findEle(this.cntEle.children, CLS_CONTENT$1 + '_' + no);
        if (isNullOrUndefined(oldCnt) && !isNullOrUndefined(prevEle)) {
            var idNo = this.extIndex(prevEle.id);
            oldCnt = this.findEle(this.cntEle.children, CLS_CONTENT$1 + '_' + idNo);
        }
        if (this.initRender || value === false || this.animation === {} || isNullOrUndefined(this.animation)) {
            if (oldCnt && oldCnt !== newCnt) {
                oldCnt.classList.remove(CLS_ACTIVE$1);
            }
            return;
        }
        var cnt = select('.' + CLS_CONTENT$1, this.element);
        var animateObj;
        if (this.prevIndex > this.selectedItem && !this.isPopup) {
            var openEff = this.animation.previous.effect;
            animateObj = {
                name: ((openEff === 'None') ? '' : ((openEff !== 'SlideLeftIn') ? openEff : 'SlideLeftIn')),
                duration: this.animation.previous.duration,
                timingFunction: this.animation.previous.easing
            };
        }
        else if (this.isPopup || this.prevIndex < this.selectedItem || this.prevIndex === this.selectedItem) {
            var clsEff = this.animation.next.effect;
            animateObj = {
                name: ((clsEff === 'None') ? '' : ((clsEff !== 'SlideRightIn') ? clsEff : 'SlideRightIn')),
                duration: this.animation.next.duration,
                timingFunction: this.animation.next.easing
            };
        }
        animateObj.progress = function () {
            cnt.classList.add(CLS_PROGRESS);
            _this.setActiveBorder();
        };
        animateObj.end = function () {
            cnt.classList.remove(CLS_PROGRESS);
            newCnt.classList.add(CLS_ACTIVE$1);
        };
        if (!this.initRender) {
            this.triggerPrevAnimation(oldCnt, prevIndex);
        }
        this.prevActiveEle = newCnt.id;
        this.isPopup = false;
        if (animateObj.name === '') {
            newCnt.classList.add(CLS_ACTIVE$1);
        }
        else {
            new Animation(animateObj).animate(newCnt);
        }
    };
    Tab.prototype.keyPressed = function (trg) {
        var trgParent = closest(trg, '.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEM);
        var trgIndex = this.getEleIndex(trgParent);
        if (!isNullOrUndefined(this.popEle) && trg.classList.contains('e-hor-nav')) {
            (this.popEle.classList.contains(CLS_POPUP_OPEN)) ? this.popObj.hide(this.hide) : this.popObj.show(this.show);
        }
        else if (trg.classList.contains('e-scroll-nav')) {
            trg.click();
        }
        else {
            if (!isNullOrUndefined(trgParent) && trgParent.classList.contains(CLS_ACTIVE$1) === false) {
                this.select(trgIndex);
                if (!isNullOrUndefined(this.popEle)) {
                    this.popObj.hide(this.hide);
                }
            }
        }
    };
    Tab.prototype.getEleIndex = function (item) {
        return Array.prototype.indexOf.call(selectAll('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEM, this.element), item);
    };
    Tab.prototype.extIndex = function (id) {
        return id.replace(CLS_ITEM$2 + '_', '');
    };
    Tab.prototype.getContent = function (ele, index) {
        var templateFn;
        var tempEle = createElement('div');
        var cnt = this.items[Number(index)].content;
        var cntHTML = (typeof cnt !== 'object') ? cnt : cnt.outerHTML;
        templateFn = compile(cntHTML);
        if (!isNullOrUndefined(templateFn) && templateFn().length > 0) {
            [].slice.call(templateFn()).forEach(function (el) {
                tempEle.appendChild(el);
            });
            ele.appendChild(tempEle);
        }
        else {
            ele.innerHTML = cntHTML;
        }
    };
    Tab.prototype.findEle = function (items, key) {
        var ele;
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === key) {
                ele = items[i];
                break;
            }
        }
        return ele;
    };
    Tab.prototype.setOrientation = function (place, ele) {
        (place === 'Bottom') ? this.element.appendChild(ele) : this.element.insertBefore(ele, select('.' + CLS_CONTENT$1, this.element));
    };
    Tab.prototype.setCssClass = function (ele, cls, val) {
        if (cls === '') {
            return;
        }
        var list = cls.split(' ');
        for (var i = 0; i < list.length; i++) {
            if (val) {
                ele.classList.add(list[i]);
            }
            else {
                ele.classList.remove(list[i]);
            }
        }
    };
    Tab.prototype.setContentHeight = function (val) {
        if (isNullOrUndefined(this.cntEle)) {
            return;
        }
        var hdrEle = select('.' + CLS_HEADER$1, this.element);
        if (this.heightAdjustMode === 'None') {
            if (this.height === 'auto') {
                return;
            }
            else {
                setStyleAttribute(this.cntEle, { 'height': (this.element.offsetHeight - hdrEle.offsetHeight) + 'px' });
            }
        }
        else if (this.heightAdjustMode === 'Fill') {
            setStyleAttribute(this.element, { 'height': '100%' });
            setStyleAttribute(this.cntEle, { 'height': 'auto' });
        }
        else if (this.heightAdjustMode === 'Auto') {
            var cnt = selectAll('.' + CLS_CONTENT$1 + ' > .' + CLS_ITEM$2, this.element);
            if (this.isTemplate === true) {
                for (var i = 0; i < cnt.length; i++) {
                    cnt[i].setAttribute('style', 'display:block; visibility: visible');
                    this.maxHeight = Math.max(this.maxHeight, this.getHeight(cnt[i]));
                    cnt[i].style.removeProperty('display');
                    cnt[i].style.removeProperty('visibility');
                }
            }
            else {
                this.cntEle = select('.' + CLS_CONTENT$1, this.element);
                if (val === true) {
                    this.cntEle.appendChild(createElement('div', {
                        id: (CLS_CONTENT$1 + '_' + 0), className: CLS_ITEM$2 + ' ' + CLS_ACTIVE$1,
                        attrs: { 'role': 'tabpanel', 'aria-labelledby': CLS_ITEM$2 + '_' + 0 }
                    }));
                }
                var ele = this.cntEle.children.item(0);
                for (var i = 0; i < this.items.length; i++) {
                    this.getContent(ele, i);
                    this.maxHeight = Math.max(this.maxHeight, this.getHeight(ele));
                    ele.innerHTML = '';
                }
                this.getContent(ele, 0);
                ele.classList.remove(CLS_ACTIVE$1);
            }
            setStyleAttribute(this.cntEle, { 'height': this.maxHeight + 'px' });
        }
        else {
            setStyleAttribute(this.cntEle, { 'height': 'auto' });
        }
    };
    Tab.prototype.getHeight = function (ele) {
        var cs = window.getComputedStyle(ele);
        return ele.offsetHeight + parseFloat(cs.getPropertyValue('padding-top')) + parseFloat(cs.getPropertyValue('padding-bottom')) +
            parseFloat(cs.getPropertyValue('margin-top')) + parseFloat(cs.getPropertyValue('margin-bottom'));
    };
    Tab.prototype.setActiveBorder = function () {
        var trg = select('.' + CLS_TB_ITEM + '.' + CLS_ACTIVE$1, this.element);
        if (this.headerPlacement === 'Bottom') {
            trg = select('.' + CLS_TB_ITEM + '.' + CLS_ACTIVE$1, this.element.children[1]);
        }
        if (trg === null) {
            return;
        }
        var root = closest(trg, '.' + CLS_TAB);
        if (this.element !== root) {
            return;
        }
        var hsCnt = select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS + ' .e-hscroll-content', this.element.children[0]);
        this.tbItems = select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS, this.element);
        var bar = select('.' + CLS_HEADER$1 + ' .' + CLS_INDICATOR, this.element);
        if (this.headerPlacement === 'Bottom') {
            hsCnt = select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS + ' .e-hscroll-content', this.element.children[1]);
        }
        var tbWidth = (isNullOrUndefined(hsCnt)) ? this.tbItems.offsetWidth : hsCnt.offsetWidth;
        if (tbWidth !== 0) {
            setStyleAttribute(bar, { 'left': trg.offsetLeft + 'px', 'right': tbWidth - (trg.offsetLeft + trg.offsetWidth) + 'px' });
        }
        else {
            setStyleAttribute(bar, { 'left': 'auto', 'right': 'auto' });
        }
        if (!isNullOrUndefined(this.bdrLine)) {
            this.bdrLine.classList.remove(CLS_HIDDEN);
        }
    };
    Tab.prototype.setActive = function (value) {
        this.tbItem = selectAll('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEM, this.element);
        var trg = this.tbItem[value];
        if (value >= 0) {
            this.setProperties({ selectedItem: value }, true);
        }
        if (value < 0 || isNaN(value) || this.tbItem.length === 0) {
            return;
        }
        if (trg.classList.contains(CLS_ACTIVE$1)) {
            this.setActiveBorder();
            return;
        }
        if (!this.isTemplate) {
            var prev = this.tbItem[this.prevIndex];
            if (!isNullOrUndefined(prev)) {
                prev.removeAttribute('aria-controls');
            }
            attributes(trg, { 'aria-controls': CLS_CONTENT$1 + '_' + value });
        }
        var id = trg.id;
        this.removeActiveClass(id);
        trg.classList.add(CLS_ACTIVE$1);
        trg.setAttribute('aria-selected', 'true');
        var no = Number(this.extIndex(id));
        attributes(this.element, { 'aria-activedescendant': id });
        if (this.isTemplate) {
            if (select('.' + CLS_CONTENT$1, this.element).children.length > 0) {
                var trg_1 = this.findEle(select('.e-content', this.element).children, CLS_CONTENT$1 + '_' + no);
                if (!isNullOrUndefined(trg_1)) {
                    trg_1.classList.add(CLS_ACTIVE$1);
                }
                this.triggerAnimation(id, this.enableAnimation);
            }
        }
        else {
            var item = select('.' + CLS_CONTENT$1 + ' > #' + CLS_CONTENT$1 + '_' + this.extIndex(id), this.element);
            if (isNullOrUndefined(item)) {
                this.cntEle.appendChild(createElement('div', {
                    id: CLS_CONTENT$1 + '_' + this.extIndex(id), className: CLS_ITEM$2 + ' ' + CLS_ACTIVE$1,
                    attrs: { role: 'tabpanel', 'aria-labelledby': CLS_ITEM$2 + '_' + this.extIndex(id) }
                }));
                var eleTrg = select('.' + CLS_CONTENT$1 + ' > #' + CLS_CONTENT$1 + '_' + this.extIndex(id), this.element);
                this.getContent(eleTrg, Number(this.extIndex(id)));
            }
            else {
                item.classList.add(CLS_ACTIVE$1);
            }
            this.triggerAnimation(id, this.enableAnimation);
        }
        this.setActiveBorder();
        var curActItem = select('.' + CLS_HEADER$1 + ' #' + id, this.element);
        this.refreshItemVisibility(curActItem);
        curActItem.firstChild.focus();
        var eventArg = {
            previousItem: this.prevItem,
            previousIndex: this.prevIndex,
            selectedItem: trg,
            selectedIndex: value,
            isSwiped: this.isSwipeed
        };
        this.trigger('selected', eventArg);
    };
    Tab.prototype.setItems = function (items) {
        this.isReplace = true;
        this.tbItems = select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS, this.element);
        this.tbObj.items = this.parseObject(items);
        this.tbObj.dataBind();
        this.isReplace = false;
    };
    Tab.prototype.setRTL = function (value) {
        this.tbObj.enableRtl = value;
        this.tbObj.dataBind();
        this.setCssClass(this.element, CLS_RTL$3, value);
        this.refreshActiveBorder();
    };
    Tab.prototype.refreshActiveBorder = function () {
        if (!isNullOrUndefined(this.bdrLine)) {
            this.bdrLine.classList.add(CLS_HIDDEN);
        }
        this.setActiveBorder();
    };
    Tab.prototype.wireEvents = function () {
        window.addEventListener('resize', this.refreshActElePosition.bind(this));
        EventHandler.add(this.element, 'mouseover', this.hoverHandler, this);
        EventHandler.add(this.element, 'keydown', this.spaceKeyDown, this);
        if (!isNullOrUndefined(this.cntEle)) {
            this.touchModule = new Touch(this.cntEle, { swipe: this.swipeHandler.bind(this) });
        }
        this.keyModule = new KeyboardEvents(this.element, { keyAction: this.keyHandler.bind(this), keyConfigs: this.keyConfigs });
        this.tabKeyModule = new KeyboardEvents(this.element, {
            keyAction: this.keyHandler.bind(this),
            keyConfigs: { openPopup: 'shift+f10', tab: 'tab', shiftTab: 'shift+tab' },
            eventName: 'keydown'
        });
    };
    Tab.prototype.unWireEvents = function () {
        this.keyModule.destroy();
        this.tabKeyModule.destroy();
        if (!isNullOrUndefined(this.cntEle)) {
            this.touchModule.destroy();
        }
        window.removeEventListener('resize', this.refreshActElePosition.bind(this));
        this.element.removeEventListener('mouseover', this.hoverHandler.bind(this));
    };
    Tab.prototype.clickHandler = function (args) {
        this.element.classList.remove(CLS_FOCUS);
        var trg = args.originalEvent.target;
        var trgParent = closest(trg, '.' + CLS_TB_ITEM);
        var trgIndex = this.getEleIndex(trgParent);
        if (trg.classList.contains(CLS_ICON_CLOSE)) {
            this.removeTab(trgIndex);
        }
        else {
            this.isPopup = false;
            if (!isNullOrUndefined(trgParent) && trgIndex !== this.selectedItem) {
                this.select(trgIndex);
            }
        }
    };
    Tab.prototype.swipeHandler = function (e) {
        if (e.velocity < 3 && isNullOrUndefined(e.originalEvent.changedTouches)) {
            return;
        }
        this.isSwipeed = true;
        if (e.swipeDirection === 'Right') {
            this.select(this.selectedItem - 1);
        }
        else {
            if (e.swipeDirection === 'Left' && (this.selectedItem !== selectAll('.' + CLS_TB_ITEM, this.element).length - 1)) {
                this.select(this.selectedItem + 1);
            }
        }
        this.isSwipeed = false;
    };
    Tab.prototype.spaceKeyDown = function (e) {
        if ((e.keyCode === 32 && e.which === 32) || (e.keyCode === 35 && e.which === 35)) {
            var clstHead = closest(e.target, '.' + CLS_HEADER$1);
            if (!isNullOrUndefined(clstHead)) {
                e.preventDefault();
            }
        }
    };
    Tab.prototype.keyHandler = function (e) {
        this.element.classList.add(CLS_FOCUS);
        var trg = e.target;
        var actEle = select('.' + CLS_HEADER$1 + ' .' + CLS_ACTIVE$1, this.element);
        var tabItem = selectAll('.' + CLS_TB_ITEM + ':not(.' + CLS_TB_POPUP + ')', this.element);
        this.popEle = select('.' + CLS_TB_POP, this.element);
        if (!isNullOrUndefined(this.popEle)) {
            this.popObj = this.popEle.ej2_instances[0];
        }
        switch (e.action) {
            case 'space':
            case 'enter':
                if (e.action === 'enter' && trg.classList.contains('e-hor-nav')) {
                    break;
                }
                this.keyPressed(trg);
                break;
            case 'tab':
            case 'shiftTab':
                if (trg.classList.contains(CLS_WRAP)
                    && closest(trg, '.' + CLS_TB_ITEM).classList.contains(CLS_ACTIVE$1) === false) {
                    trg.setAttribute('tabindex', '-1');
                }
                if (this.popObj && isVisible(this.popObj.element)) {
                    this.popObj.hide(this.hide);
                }
                actEle.children.item(0).setAttribute('tabindex', '0');
                break;
            case 'moveLeft':
            case 'moveRight':
                var item = closest(document.activeElement, '.' + CLS_TB_ITEM);
                if (!isNullOrUndefined(item)) {
                    this.refreshItemVisibility(item);
                }
                break;
            case 'openPopup':
                e.preventDefault();
                if (!isNullOrUndefined(this.popEle) && this.popEle.classList.contains(CLS_POPUP_CLOSE)) {
                    this.popObj.show(this.show);
                }
                break;
            case 'delete':
                var trgParent = closest(trg, '.' + CLS_TB_ITEM);
                if (this.showCloseButton === true && !isNullOrUndefined(trgParent)) {
                    var nxtSib = trgParent.nextSibling;
                    if (!isNullOrUndefined(nxtSib) && nxtSib.classList.contains(CLS_TB_ITEM)) {
                        nxtSib.firstChild.focus();
                    }
                    this.removeTab(this.getEleIndex(trgParent));
                }
                this.setActiveBorder();
                break;
        }
    };
    Tab.prototype.refreshActElePosition = function () {
        var activeEle = select('.' + CLS_TB_ITEM + '.' + CLS_TB_POPUP + '.' + CLS_ACTIVE$1, this.element);
        if (!isNullOrUndefined(activeEle)) {
            this.select(this.getEleIndex(activeEle));
        }
        this.refreshActiveBorder();
    };
    Tab.prototype.refreshItemVisibility = function (target) {
        var scrCnt = select('.e-hscroll-content', this.tbItems);
        if (!isNullOrUndefined(scrCnt)) {
            var scrBar = select('.e-hscroll-bar', this.tbItems);
            var scrStart = scrBar.scrollLeft;
            var scrEnd = scrStart + scrBar.offsetWidth;
            var eleStart = target.offsetLeft;
            var eleWidth = target.offsetWidth;
            var eleEnd = target.offsetLeft + target.offsetWidth;
            if ((scrStart < eleStart) && (scrEnd < eleEnd)) {
                var eleViewRange = scrEnd - eleStart;
                scrBar.scrollLeft = scrStart + (eleWidth - eleViewRange);
            }
            else {
                if ((scrStart > eleStart) && (scrEnd > eleEnd)) {
                    var eleViewRange = eleEnd - scrStart;
                    scrBar.scrollLeft = scrStart - (eleWidth - eleViewRange);
                }
            }
        }
        else {
            return;
        }
    };
    Tab.prototype.hoverHandler = function (e) {
        var trg = e.target;
        if (!isNullOrUndefined(trg.classList) && trg.classList.contains(CLS_ICON_CLOSE)) {
            trg.setAttribute('title', new L10n('tab', { title: this.title }, this.locale).getConstant('title'));
        }
    };
    /**
     * Enables or disables the specified Tab item. On passing value as `false`, the item will be disabled.
     * @param  {number} index - Index value of target Tab item.
     * @param  {boolean} value - Boolean value that determines whether the command should be enabled or disabled.
     * By default, isEnable is true.
     * @returns void.
     */
    Tab.prototype.enableTab = function (index, value) {
        var tbItems = selectAll('.' + CLS_TB_ITEM, this.element)[index];
        if (isNullOrUndefined(tbItems)) {
            return;
        }
        if (value === true) {
            tbItems.classList.remove(CLS_DISABLE$3);
        }
        else {
            tbItems.classList.add(CLS_DISABLE$3);
            if (tbItems.classList.contains(CLS_ACTIVE$1)) {
                this.select(index + 1);
            }
        }
        tbItems.setAttribute('aria-disabled', (value === true) ? 'false' : 'true');
    };
    /**
     * Adds new items to the Tab that accepts an array as Tab items.
     * @param  {TabItemsModel[]} items - An array of item that is added to the Tab.
     * @param  {number} index - Number value that determines where the items to be added. By default, index is 0.
     * @returns void.
     */
    Tab.prototype.addTab = function (items, index) {
        var _this = this;
        this.trigger('adding', { addedItems: items });
        if (isNullOrUndefined(index)) {
            index = selectAll('.' + CLS_TB_ITEM).length - 1;
        }
        if (this.isTemplate === true || selectAll('.' + CLS_TB_ITEM).length - 1 < index || index < 0 || isNaN(index)) {
            return;
        }
        this.bdrLine.classList.add(CLS_HIDDEN);
        this.tbItems = select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS, this.element);
        var tabItems = this.parseObject(items);
        items.forEach(function (item) {
            _this.items.push(item);
        });
        this.tbObj.addItems(tabItems, index);
        this.trigger('added', { addedItems: items });
        if (this.selectedItem === index) {
            this.select(index);
        }
        else {
            this.setActiveBorder();
        }
    };
    /**
     * Removes the items in the Tab from the specified index.
     * @param  {number} index - Index of target item that is going to be removed.
     * @returns void.
     */
    Tab.prototype.removeTab = function (index) {
        var trg = selectAll('.' + CLS_TB_ITEM, this.element)[index];
        var removingArgs = { removedItem: trg, removedIndex: index };
        this.trigger('removing', removingArgs);
        if (isNullOrUndefined(trg)) {
            return;
        }
        this.tbObj.removeItems(index);
        this.refreshActiveBorder();
        var no = this.extIndex(trg.id);
        var cntTrg = this.findEle(select('.e-content', this.element).children, CLS_CONTENT$1 + '_' + no);
        if (!isNullOrUndefined(cntTrg)) {
            cntTrg.outerHTML = '';
        }
        var removedArgs = { removedItem: trg, removedIndex: index };
        this.trigger('removed', removedArgs);
        if (trg.classList.contains(CLS_ACTIVE$1)) {
            index = (index > selectAll('.' + CLS_TB_ITEM + ':not(.' + CLS_TB_POPUP + ')', this.element).length - 1) ? index - 1 : index;
            this.enableAnimation = false;
            this.select(index);
        }
        if (selectAll('.' + CLS_TB_ITEM, this.element).length === 0) {
            this.hdrEle.style.display = 'none';
        }
        this.enableAnimation = true;
    };
    /**
     * Shows or hides the Tab that is in the specified index.
     * @param  {number} index - Index value of target item.
     * @param  {boolean} value - Based on this Boolean value, item will be hide (false) or show (true). By default, value is true.
     * @returns void.
     */
    Tab.prototype.hideTab = function (index, value) {
        var item = selectAll('.' + CLS_TB_ITEM, this.element)[index];
        if (isNullOrUndefined(item)) {
            return;
        }
        if (isNullOrUndefined(value)) {
            value = true;
        }
        this.bdrLine.classList.add(CLS_HIDDEN);
        if (value === true) {
            item.classList.add(CLS_HIDDEN);
            if (item.classList.contains(CLS_ACTIVE$1)) {
                this.select((index !== 0) ? index - 1 : index + 1);
            }
        }
        else {
            item.classList.remove(CLS_HIDDEN);
        }
        this.setActiveBorder();
        item.setAttribute('aria-hidden', '' + value);
    };
    /**
     * Specifies the index or HTMLElement to select an item from the Tab.
     * @param  {number | HTMLElement} args - Index or DOM element is used for selecting an item from the Tab.
     * @returns void.
     */
    Tab.prototype.select = function (args) {
        this.tbItems = select('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEMS, this.element);
        this.tbItem = selectAll('.' + CLS_HEADER$1 + ' .' + CLS_TB_ITEM, this.element);
        this.prevItem = this.tbItem[this.prevIndex];
        if (!isNullOrUndefined(this.prevItem)) {
            this.prevItem.children.item(0).setAttribute('tabindex', '-1');
        }
        var eventArg = {
            previousItem: this.prevItem,
            previousIndex: this.prevIndex,
            selectedItem: this.tbItem[this.selectedItem],
            selectedIndex: this.selectedItem,
            isSwiped: this.isSwipeed
        };
        this.trigger('selecting', eventArg);
        if (eventArg.cancel) {
            return;
        }
        if (typeof args === 'number') {
            if (this.tbItem.length > args && args >= 0 && !isNaN(args)) {
                this.prevIndex = this.selectedItem;
                if (this.tbItem[args].classList.contains(CLS_TB_POPUP)) {
                    this.setActive(this.popupHandler(this.tbItem[args]));
                }
                else {
                    this.setActive(args);
                }
            }
            else {
                this.setActive(0);
            }
        }
        else if (args instanceof (HTMLElement)) {
            this.setActive(this.getEleIndex(args));
        }
    };
    /**
     * Specifies the value to disable/enable the Tab component.
     * When set to `true`, the component will be disabled.
     * @param  {boolean} value - Based on this Boolean value, Tab will be enabled (false) or disabled (true).
     * @returns void.
     */
    Tab.prototype.disable = function (value) {
        this.setCssClass(this.element, CLS_DISABLE$3, value);
        this.element.setAttribute('aria-disabled', '' + value);
    };
    /**
     * Get the properties to be maintained in the persisted state.
     * @returns string
     */
    Tab.prototype.getPersistData = function () {
        return this.addOnPersist(['selectedItem', 'actEleId']);
    };
    /**
     * Returns the current module name.
     * @returns string
     * @private
     */
    Tab.prototype.getModuleName = function () {
        return 'tab';
    };
    /**
     * Gets called when the model property changes.The data that describes the old and new values of the property that changed.
     * @param  {TabModel} newProp
     * @param  {TabModel} oldProp
     * @returns void
     * @private
     */
    Tab.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'width':
                    setStyleAttribute(this.element, { width: formatUnit(newProp.width) });
                    break;
                case 'height':
                    setStyleAttribute(this.element, { height: formatUnit(newProp.height) });
                    this.setContentHeight(false);
                    break;
                case 'cssClass':
                    this.setCssClass(this.element, newProp.cssClass, true);
                    break;
                case 'items':
                    if (isNullOrUndefined(this.tbObj)) {
                        this.renderContainer();
                        if (!isNullOrUndefined(this.cntEle)) {
                            this.touchModule = new Touch(this.cntEle, { swipe: this.swipeHandler.bind(this) });
                        }
                    }
                    else {
                        this.setItems(newProp.items);
                        this.select(this.selectedItem);
                    }
                    break;
                case 'showCloseButton':
                    this.setCloseButton(newProp.showCloseButton);
                    break;
                case 'selectedItem':
                    this.selectedItem = oldProp.selectedItem;
                    this.select(newProp.selectedItem);
                    break;
                case 'headerPlacement':
                    var tempHdrEle = select('.' + CLS_HEADER$1, this.element);
                    this.setOrientation(newProp.headerPlacement, tempHdrEle);
                    this.select(this.selectedItem);
                    break;
                case 'enableRtl':
                    this.setRTL(newProp.enableRtl);
                    break;
                case 'overflowMode':
                    this.tbObj.overflowMode = newProp.overflowMode;
                    this.tbObj.dataBind();
                    this.refreshActElePosition();
                    break;
                case 'heightAdjustMode':
                    this.setContentHeight(false);
                    this.select(this.selectedItem);
                    break;
            }
        }
    };
    __decorate$4([
        Collection([], TabItem)
    ], Tab.prototype, "items", void 0);
    __decorate$4([
        Property('100%')
    ], Tab.prototype, "width", void 0);
    __decorate$4([
        Property('auto')
    ], Tab.prototype, "height", void 0);
    __decorate$4([
        Property('')
    ], Tab.prototype, "cssClass", void 0);
    __decorate$4([
        Property(0)
    ], Tab.prototype, "selectedItem", void 0);
    __decorate$4([
        Property('Top')
    ], Tab.prototype, "headerPlacement", void 0);
    __decorate$4([
        Property('Content')
    ], Tab.prototype, "heightAdjustMode", void 0);
    __decorate$4([
        Property('Scrollable')
    ], Tab.prototype, "overflowMode", void 0);
    __decorate$4([
        Property(false)
    ], Tab.prototype, "enableRtl", void 0);
    __decorate$4([
        Property(false)
    ], Tab.prototype, "showCloseButton", void 0);
    __decorate$4([
        Complex({}, TabAnimationSettings)
    ], Tab.prototype, "animation", void 0);
    __decorate$4([
        Event()
    ], Tab.prototype, "created", void 0);
    __decorate$4([
        Event()
    ], Tab.prototype, "adding", void 0);
    __decorate$4([
        Event()
    ], Tab.prototype, "added", void 0);
    __decorate$4([
        Event()
    ], Tab.prototype, "selecting", void 0);
    __decorate$4([
        Event()
    ], Tab.prototype, "selected", void 0);
    __decorate$4([
        Event()
    ], Tab.prototype, "removing", void 0);
    __decorate$4([
        Event()
    ], Tab.prototype, "removed", void 0);
    __decorate$4([
        Event()
    ], Tab.prototype, "destroyed", void 0);
    Tab = __decorate$4([
        NotifyPropertyChanges
    ], Tab);
    return Tab;
}(Component));

/**
 * Tab modules
 */

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ROOT = 'e-treeview';
var COLLAPSIBLE = 'e-icon-collapsible';
var EXPANDABLE = 'e-icon-expandable';
var LISTITEM = 'e-list-item';
var LISTTEXT = 'e-list-text';
var PARENTITEM = 'e-list-parent';
var HOVER = 'e-hover';
var ACTIVE = 'e-active';
var LOAD = 'e-icons-spinner';
var PROCESS = 'e-process';
var ICON = 'e-icons';
var TEXTWRAP = 'e-text-content';
var INPUT = 'e-input';
var INPUTGROUP = 'e-input-group';
var EDITING = 'e-editing';
var RTL$1 = 'e-rtl';
var DRAGITEM = 'e-drag-item';
var DROPPABLE = 'e-droppable';
var DRAGGING = 'e-dragging';
var SIBLING = 'e-sibling';
var DROPIN = 'e-drop-in';
var DROPNEXT = 'e-drop-next';
var DROPOUT = 'e-drop-out';
var NODROP = 'e-no-drop';
var FULLROWWRAP = 'e-fullrow-wrap';
var FULLROW = 'e-fullrow';
var POPUP = 'e-popup';
var SELECTED$1 = 'e-selected';
var EXPANDED = 'e-expanded';
var NODECOLLAPSED = 'e-node-collapsed';
var DISABLE = 'e-disable';
var POPUPSELECT = 'e-select';
var CONTENT = 'e-content';
var DOWNTAIL = 'e-downtail';
var DROPCOUNT = 'e-drop-count';
var CHECK = 'e-check';
var INDETERMINATE = 'e-stop';
var CHECKBOXWRAP = 'e-checkbox-wrapper';
var CHECKBOXFRAME = 'e-frame';
var CHECKBOXRIPPLE = 'e-ripple-container';
var FOCUS = 'e-node-focus';
var SPINNER_SIZE = Browser.isDevice ? 16 : 14;
var IMAGE = 'e-list-img';
var treeAriaAttr = {
    treeRole: 'tree',
    itemRole: 'treeitem',
    listRole: 'group',
    itemText: '',
};
/**
 * Configures the fields to bind to the properties of node in the TreeView component.
 */
var FieldsSettings = /** @class */ (function (_super) {
    __extends$5(FieldsSettings, _super);
    function FieldsSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$5([
        Property('child')
    ], FieldsSettings.prototype, "child", void 0);
    __decorate$5([
        Property([])
    ], FieldsSettings.prototype, "dataSource", void 0);
    __decorate$5([
        Property('expanded')
    ], FieldsSettings.prototype, "expanded", void 0);
    __decorate$5([
        Property('hasChildren')
    ], FieldsSettings.prototype, "hasChildren", void 0);
    __decorate$5([
        Property('htmlAttributes')
    ], FieldsSettings.prototype, "htmlAttributes", void 0);
    __decorate$5([
        Property('iconCss')
    ], FieldsSettings.prototype, "iconCss", void 0);
    __decorate$5([
        Property('id')
    ], FieldsSettings.prototype, "id", void 0);
    __decorate$5([
        Property('imageUrl')
    ], FieldsSettings.prototype, "imageUrl", void 0);
    __decorate$5([
        Property('isChecked')
    ], FieldsSettings.prototype, "isChecked", void 0);
    __decorate$5([
        Property('parentID')
    ], FieldsSettings.prototype, "parentID", void 0);
    __decorate$5([
        Property(null)
    ], FieldsSettings.prototype, "query", void 0);
    __decorate$5([
        Property('selected')
    ], FieldsSettings.prototype, "selected", void 0);
    __decorate$5([
        Property(null)
    ], FieldsSettings.prototype, "tableName", void 0);
    __decorate$5([
        Property('text')
    ], FieldsSettings.prototype, "text", void 0);
    __decorate$5([
        Property('tooltip')
    ], FieldsSettings.prototype, "tooltip", void 0);
    __decorate$5([
        Property('navigateUrl')
    ], FieldsSettings.prototype, "navigateUrl", void 0);
    return FieldsSettings;
}(ChildProperty));
/**
 * Configures animation settings for the TreeView component.
 */
var ActionSettings = /** @class */ (function (_super) {
    __extends$5(ActionSettings, _super);
    function ActionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$5([
        Property('SlideDown')
    ], ActionSettings.prototype, "effect", void 0);
    __decorate$5([
        Property(400)
    ], ActionSettings.prototype, "duration", void 0);
    __decorate$5([
        Property('linear')
    ], ActionSettings.prototype, "easing", void 0);
    return ActionSettings;
}(ChildProperty));
/**
 * Configures the animation settings for expanding and collapsing nodes in TreeView.
 */
var NodeAnimationSettings = /** @class */ (function (_super) {
    __extends$5(NodeAnimationSettings, _super);
    function NodeAnimationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$5([
        Complex({ effect: 'SlideUp', duration: 400, easing: 'linear' }, ActionSettings)
    ], NodeAnimationSettings.prototype, "collapse", void 0);
    __decorate$5([
        Complex({ effect: 'SlideDown', duration: 400, easing: 'linear' }, ActionSettings)
    ], NodeAnimationSettings.prototype, "expand", void 0);
    return NodeAnimationSettings;
}(ChildProperty));
/**
 * The TreeView component is used to represent hierarchical data in a tree like structure with advanced
 * functions to perform edit, drag and drop, selection with check-box, and more.
 * ```html
 *  <div id="tree"></div>
 * ```
 * ```typescript
 *  let treeObj: TreeView = new TreeView();
 *  treeObj.appendTo('#tree');
 * ```
 */
var TreeView = /** @class */ (function (_super) {
    __extends$5(TreeView, _super);
    function TreeView(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.checkActionNodes = [];
        _this.dragStartAction = false;
        _this.isAnimate = false;
        _this.keyConfigs = {
            escape: 'escape',
            end: 'end',
            enter: 'enter',
            f2: 'f2',
            home: 'home',
            moveDown: 'downarrow',
            moveLeft: 'leftarrow',
            moveRight: 'rightarrow',
            moveUp: 'uparrow',
            ctrlDown: 'ctrl+downarrow',
            ctrlUp: 'ctrl+uparrow',
            ctrlEnter: 'ctrl+enter',
            ctrlHome: 'ctrl+home',
            ctrlEnd: 'ctrl+end',
            ctrlA: 'ctrl+A',
            shiftDown: 'shift+downarrow',
            shiftUp: 'shift+uparrow',
            shiftEnter: 'shift+enter',
            shiftHome: 'shift+home',
            shiftEnd: 'shift+end',
            csDown: 'ctrl+shift+downarrow',
            csUp: 'ctrl+shift+uparrow',
            csEnter: 'ctrl+shift+enter',
            csHome: 'ctrl+shift+home',
            csEnd: 'ctrl+shift+end',
            space: 'space',
        };
        _this.mouseDownStatus = false;
        return _this;
    }
    /**
     * Get component name.
     * @returns string
     * @private
     */
    TreeView.prototype.getModuleName = function () {
        return 'treeview';
    };
    /**
     * Initialize the event handler
     */
    TreeView.prototype.preRender = function () {
        var _this = this;
        this.listBaseOption = {
            expandCollapse: true,
            fields: this.fields.properties,
            showIcon: true,
            expandIconClass: EXPANDABLE,
            ariaAttributes: treeAriaAttr,
            expandIconPosition: 'left',
            itemCreated: function (e) {
                _this.beforeNodeCreate(e);
            },
        };
        this.listBaseOption.fields.url = this.fields.navigateUrl;
        this.aniObj = new Animation({});
        this.treeList = [];
        this.isLoaded = false;
        if (isNullOrUndefined(this.selectedNodes)) {
            this.setProperties({ selectedNodes: [] }, true);
        }
        if (isNullOrUndefined(this.checkedNodes)) {
            this.setProperties({ checkedNodes: [] }, true);
        }
    };
    /**
     * Get the properties to be maintained in the persisted state.
     * @returns string
     * @hidden
     */
    TreeView.prototype.getPersistData = function () {
        var keyEntity = ['selectedNodes', 'checkedNodes'];
        return this.addOnPersist(keyEntity);
    };
    /**
     * To Initialize the control rendering
     * @private
     */
    TreeView.prototype.render = function () {
        this.isAnimate = true;
        this.initialize();
        this.setDataBinding();
        this.setExpandOnType();
        this.setRipple();
        this.wireEditingEvents(this.allowEditing);
        this.setDragAndDrop(this.allowDragAndDrop);
        this.wireEvents();
    };
    TreeView.prototype.initialize = function () {
        this.element.setAttribute('role', 'tree');
        this.element.setAttribute('tabindex', '0');
        this.element.setAttribute('aria-activedescendant', 'node_active');
        this.setCssClass(null, this.cssClass);
        this.setEnableRtl();
        this.setFullRow(this.fullRowSelect);
        this.setTouchPopup(this.allowMultiSelection);
        this.nodeTemplateFn = this.templateComplier(this.nodeTemplate);
    };
    TreeView.prototype.setEnableRtl = function () {
        this.enableRtl ? addClass([this.element], RTL$1) : removeClass([this.element], RTL$1);
    };
    TreeView.prototype.setRipple = function () {
        var tempStr = '.' + FULLROW + ',.' + TEXTWRAP;
        var rippleModel = {
            selector: tempStr,
            ignore: '.' + TEXTWRAP + ' > .' + ICON + ',.' + INPUTGROUP + ',.' + INPUT + ', .' + CHECKBOXWRAP
        };
        this.rippleFn = rippleEffect(this.element, rippleModel);
        var iconModel = {
            selector: '.' + TEXTWRAP + ' > .' + ICON,
            isCenterRipple: true,
        };
        this.rippleIconFn = rippleEffect(this.element, iconModel);
    };
    TreeView.prototype.setFullRow = function (isEnabled) {
        isEnabled ? addClass([this.element], FULLROWWRAP) : removeClass([this.element], FULLROWWRAP);
    };
    TreeView.prototype.setTouchPopup = function (isEnabled) {
        if (isEnabled) {
            var popup = createElement('div', { className: POPUP, styles: 'display:none;' });
            var content = createElement('div', { className: CONTENT, attrs: { tabIndex: '-1' } });
            var icon = createElement('span', { className: ICON });
            content.appendChild(icon);
            append([content, createElement('div', { className: DOWNTAIL })], popup);
            this.element.appendChild(popup);
            EventHandler.add(content, 'click', this.popupClick, this);
        }
        else {
            var popup = select('.' + POPUP, this.element);
            if (popup) {
                detach(popup);
            }
        }
    };
    TreeView.prototype.setMultiSelect = function (isEnabled) {
        var firstUl = select('.' + PARENTITEM, this.element);
        if (isEnabled) {
            firstUl.setAttribute('aria-multiselectable', 'true');
        }
        else {
            firstUl.removeAttribute('aria-multiselectable');
        }
    };
    TreeView.prototype.popupClick = function (e) {
        e.stopImmediatePropagation();
        var target = e.currentTarget;
        target = closest(target, '.' + POPUP);
        if (target.classList.contains(POPUPSELECT)) {
            removeClass([target], POPUPSELECT);
            select('.' + POPUP, this.element).style.display = 'none';
        }
        else {
            addClass([target], POPUPSELECT);
        }
    };
    TreeView.prototype.templateComplier = function (template) {
        if (template) {
            try {
                if (document.querySelectorAll(template).length) {
                    return compile(document.querySelector(template).innerHTML.trim());
                }
            }
            catch (e) {
                return compile(template);
            }
        }
        return undefined;
    };
    TreeView.prototype.setDataBinding = function () {
        var _this = this;
        this.treeList.push('false');
        if (this.fields.dataSource instanceof DataManager) {
            this.fields.dataSource.executeQuery(this.getQuery(this.fields)).then(function (e) {
                _this.treeList.pop();
                _this.treeData = e.result;
                _this.isNumberTypeId = _this.treeData[0] ? ((typeof _this.treeData[0][_this.fields.id] === 'number') ? true : false) : false;
                _this.setRootData();
                _this.renderItems(true);
                if (_this.treeList.length === 0 && !_this.isLoaded) {
                    _this.finalize();
                }
            });
        }
        else {
            this.treeList.pop();
            if (isNullOrUndefined(this.fields.dataSource)) {
                this.rootData = this.treeData = [];
            }
            else {
                this.treeData = this.fields.dataSource;
                this.setRootData();
            }
            this.renderItems(false);
        }
        if (this.treeList.length === 0 && !this.isLoaded) {
            this.finalize();
        }
    };
    TreeView.prototype.getQuery = function (mapper, value) {
        if (value === void 0) { value = null; }
        var columns = [];
        var query;
        if (!mapper.query) {
            query = new Query();
            var prop = this.getActualProperties(mapper);
            for (var _i = 0, _a = Object.keys(prop); _i < _a.length; _i++) {
                var col = _a[_i];
                if (col !== 'dataSource' && col !== 'tableName' && col !== 'child' && !!mapper[col]
                    && columns.indexOf(mapper[col]) === -1) {
                    columns.push(mapper[col]);
                }
            }
            query.select(columns);
            if (prop.hasOwnProperty('tableName')) {
                query.from(mapper.tableName);
            }
        }
        else {
            query = mapper.query.clone();
        }
        ListBase.addSorting(this.sortOrder, mapper.text, query);
        if (!isNullOrUndefined(value) && !isNullOrUndefined(mapper.parentID)) {
            query.where(mapper.parentID, 'equal', (this.isNumberTypeId ? parseFloat(value) : value));
        }
        return query;
    };
    TreeView.prototype.setRootData = function () {
        this.dataType = this.getDataType(this.treeData, this.fields);
        if (this.dataType === 1) {
            this.groupedData = this.getGroupedData(this.treeData, this.fields.parentID);
            var rootItems = this.getChildNodes(this.treeData, undefined, true);
            if (isNullOrUndefined(rootItems)) {
                this.rootData = [];
            }
            else {
                this.rootData = rootItems;
            }
        }
        else {
            this.rootData = this.treeData;
        }
    };
    TreeView.prototype.renderItems = function (isSorted) {
        this.listBaseOption.ariaAttributes.level = 1;
        this.ulElement = ListBase.createList(isSorted ? this.rootData : this.getSortedData(this.rootData), this.listBaseOption);
        this.element.appendChild(this.ulElement);
        this.finalizeNode(this.element);
    };
    TreeView.prototype.beforeNodeCreate = function (e) {
        if (this.showCheckBox) {
            var checkboxEle = createCheckBox(true);
            var icon = select('div.' + ICON, e.item);
            var id = e.item.getAttribute('data-uid');
            e.item.childNodes[0].insertBefore(checkboxEle, e.item.childNodes[0].childNodes[isNullOrUndefined(icon) ? 0 : 1]);
            if (this.checkedNodes.indexOf(id) > -1) {
                select('.' + CHECKBOXFRAME, checkboxEle).classList.add(CHECK);
                checkboxEle.setAttribute('aria-checked', 'true');
                this.addCheck(e.item);
            }
            else if (!isNullOrUndefined(e.curData[e.fields.isChecked]) && e.curData[e.fields.isChecked].toString() === 'true') {
                select('.' + CHECKBOXFRAME, checkboxEle).classList.add(CHECK);
                checkboxEle.setAttribute('aria-checked', 'true');
                this.addCheck(e.item);
            }
            else {
                checkboxEle.setAttribute('aria-checked', 'false');
            }
            var frame = select('.' + CHECKBOXFRAME, checkboxEle);
            EventHandler.add(frame, 'mousedown', this.frameMouseHandler, this);
            EventHandler.add(frame, 'mouseup', this.frameMouseHandler, this);
        }
        if (this.fullRowSelect) {
            this.createFullRow(e.item);
        }
        if (this.allowMultiSelection && !e.item.classList.contains(SELECTED$1)) {
            e.item.setAttribute('aria-selected', 'false');
        }
        var fields = e.fields;
        this.addActionClass(e, fields.selected, SELECTED$1);
        this.addActionClass(e, fields.expanded, EXPANDED);
        if (!isNullOrUndefined(this.nodeTemplateFn)) {
            var textEle = e.item.querySelector('.' + LISTTEXT);
            textEle.innerHTML = '';
            append(this.nodeTemplateFn(e.curData), textEle);
        }
        var eventArgs = {
            node: e.item,
            nodeData: e.curData,
            text: e.text,
        };
        this.trigger('drawNode', eventArgs);
    };
    TreeView.prototype.frameMouseHandler = function (e) {
        var rippleSpan = select('.' + CHECKBOXRIPPLE, e.target.parentElement);
        if (rippleSpan) {
            var event_1 = document.createEvent('MouseEvents');
            event_1.initEvent(e.type, false, true);
            rippleSpan.dispatchEvent(event_1);
        }
    };
    TreeView.prototype.addActionClass = function (e, action, cssClass) {
        var data = e.curData;
        if (data.hasOwnProperty(action) && !isNullOrUndefined(data[action]) && data[action].toString() !== 'false') {
            e.item.classList.add(cssClass);
        }
    };
    TreeView.prototype.getDataType = function (ds, mapper) {
        for (var i = 0, len = ds.length; i < len; i++) {
            if ((typeof mapper.child === 'string') && ds[i].hasOwnProperty(mapper.child)) {
                return 2;
            }
            if (ds[i].hasOwnProperty(mapper.parentID) || ds[i].hasOwnProperty(mapper.hasChildren)) {
                return 1;
            }
        }
        return 1;
    };
    TreeView.prototype.getGroupedData = function (dataSource, groupBy) {
        var cusQuery = new Query().group(groupBy);
        var ds = ListBase.getDataSource(dataSource, cusQuery);
        var grpItem = [];
        for (var j = 0; j < ds.length; j++) {
            var itemObj = ds[j].items;
            grpItem.push(itemObj);
        }
        return grpItem;
    };
    TreeView.prototype.getSortedData = function (list) {
        if (list && this.sortOrder !== 'None') {
            list = ListBase.getDataSource(list, ListBase.addSorting(this.sortOrder, this.fields.text));
        }
        return list;
    };
    TreeView.prototype.finalizeNode = function (element) {
        var _this = this;
        var iNodes = selectAll('.' + IMAGE, element);
        for (var k = 0; k < iNodes.length; k++) {
            iNodes[k].setAttribute('alt', IMAGE);
        }
        if (this.isLoaded) {
            var sNodes = selectAll('.' + SELECTED$1, element);
            for (var i = 0; i < sNodes.length; i++) {
                this.selectNode(sNodes[i], null);
                break;
            }
            removeClass(sNodes, SELECTED$1);
        }
        var cNodes = selectAll('.' + LISTITEM + ':not(.' + EXPANDED + ')', element);
        for (var j = 0; j < cNodes.length; j++) {
            var icon = select('div.' + ICON, cNodes[j]);
            if (icon && icon.classList.contains(EXPANDABLE)) {
                cNodes[j].setAttribute('aria-expanded', 'false');
                addClass([cNodes[j]], NODECOLLAPSED);
            }
        }
        var eNodes = selectAll('.' + EXPANDED, element);
        for (var i = 0; i < eNodes.length; i++) {
            this.renderChildNodes(eNodes[i]);
        }
        removeClass(eNodes, EXPANDED);
        this.updateList();
        if (this.showCheckBox) {
            var nodes_1 = [].concat([], this.checkedNodes);
            this.checkedNodes.forEach(function (value, index) {
                var checkBox = _this.element.querySelector('[data-uid="' + value + '"]');
                if (isNullOrUndefined(checkBox)) {
                    nodes_1 = nodes_1.filter(function (e) { return e !== value; });
                }
            });
            this.setProperties({ checkedNodes: nodes_1 }, true);
        }
    };
    TreeView.prototype.ensureParentCheckState = function (element) {
        if (!isNullOrUndefined(element)) {
            if (element.classList.contains(ROOT)) {
                return;
            }
            var ulElement = element;
            if (element.classList.contains(LISTITEM)) {
                ulElement = select('.' + PARENTITEM, element);
            }
            var checkedNodes = selectAll('.' + CHECK, ulElement);
            var nodes = selectAll('.' + LISTITEM, ulElement);
            var checkBoxEle = element.getElementsByClassName(CHECKBOXWRAP)[0];
            if (nodes.length === checkedNodes.length) {
                this.changeState(checkBoxEle, 'check', null, true, true);
            }
            else if (checkedNodes.length > 0) {
                this.changeState(checkBoxEle, 'indeterminate', null, true, true);
            }
            else if (checkedNodes.length === 0) {
                this.changeState(checkBoxEle, 'uncheck', null, true, true);
            }
            var parentUL = closest(element, '.' + PARENTITEM);
            if (!isNullOrUndefined(parentUL)) {
                var currentParent = closest(parentUL, '.' + LISTITEM);
                this.ensureParentCheckState(currentParent);
            }
        }
    };
    TreeView.prototype.ensureChildCheckState = function (element, e) {
        if (!isNullOrUndefined(element)) {
            var childElement = select('.' + PARENTITEM, element);
            var checkBoxes = void 0;
            if (!isNullOrUndefined(childElement)) {
                checkBoxes = selectAll('.' + CHECKBOXWRAP, childElement);
                var isChecked = element.getElementsByClassName(CHECKBOXFRAME)[0].classList.contains(CHECK);
                var checkedState = void 0;
                for (var index = 0; index < checkBoxes.length; index++) {
                    if (!isNullOrUndefined(this.currentLoadData) && !isNullOrUndefined(this.currentLoadData[index][this.fields.isChecked])) {
                        checkedState = this.currentLoadData[index][this.fields.isChecked] ? 'check' : 'uncheck';
                    }
                    else {
                        checkedState = isChecked ? 'check' : 'uncheck';
                    }
                    this.changeState(checkBoxes[index], checkedState, e, true, true);
                }
            }
        }
    };
    TreeView.prototype.doCheckBoxAction = function (nodes, doCheck) {
        if (!isNullOrUndefined(nodes)) {
            for (var i = 0, len = nodes.length; i < len; i++) {
                var liEle = this.getElement(nodes[i]);
                if (isNullOrUndefined(liEle)) {
                    continue;
                }
                var checkBox = select('.' + PARENTITEM + ' .' + CHECKBOXWRAP, liEle);
                this.validateCheckNode(checkBox, !doCheck, liEle, null);
            }
        }
        else {
            var checkBoxes = selectAll('.' + CHECKBOXWRAP, this.element);
            for (var index = 0; index < checkBoxes.length; index++) {
                this.changeState(checkBoxes[index], doCheck ? 'check' : 'uncheck');
            }
        }
    };
    TreeView.prototype.changeState = function (wrapper, state, e, isPrevent, isAdd) {
        var ariaState;
        var eventArgs;
        var currLi = closest(wrapper, '.' + LISTITEM);
        if (!isPrevent) {
            this.checkActionNodes = [];
            eventArgs = this.getCheckEvent(currLi, state, e);
            this.trigger('nodeChecking', eventArgs);
            if (eventArgs.cancel) {
                return;
            }
        }
        var frameSpan = wrapper.getElementsByClassName(CHECKBOXFRAME)[0];
        if (state === 'check' && !frameSpan.classList.contains(CHECK)) {
            frameSpan.classList.remove(INDETERMINATE);
            frameSpan.classList.add(CHECK);
            this.addCheck(currLi);
            ariaState = 'true';
        }
        else if (state === 'uncheck' && (frameSpan.classList.contains(CHECK) || frameSpan.classList.contains(INDETERMINATE))) {
            removeClass([frameSpan], [CHECK, INDETERMINATE]);
            this.removeCheck(currLi);
            ariaState = 'false';
        }
        else if (state === 'indeterminate' && !frameSpan.classList.contains(INDETERMINATE)) {
            frameSpan.classList.remove(CHECK);
            frameSpan.classList.add(INDETERMINATE);
            this.removeCheck(currLi);
            ariaState = 'mixed';
        }
        ariaState = state === 'check' ? 'true' : state === 'uncheck' ? 'false' : ariaState;
        if (!isNullOrUndefined(ariaState)) {
            wrapper.setAttribute('aria-checked', ariaState);
        }
        if (isAdd) {
            var data = [].concat([], this.checkActionNodes);
            eventArgs = this.getCheckEvent(currLi, state, e);
            if (isUndefined(isPrevent)) {
                eventArgs.data = data;
            }
        }
        if (!isPrevent) {
            if (!isNullOrUndefined(ariaState)) {
                wrapper.setAttribute('aria-checked', ariaState);
                eventArgs.data[0].checked = ariaState;
                this.trigger('nodeChecked', eventArgs);
                this.checkActionNodes = [];
            }
        }
    };
    TreeView.prototype.addCheck = function (liEle) {
        var id = liEle.getAttribute('data-uid');
        if (!isNullOrUndefined(id) && this.checkedNodes.indexOf(id) === -1) {
            this.checkedNodes.push(id);
        }
    };
    TreeView.prototype.removeCheck = function (liEle) {
        var index = this.checkedNodes.indexOf(liEle.getAttribute('data-uid'));
        if (index > -1) {
            this.checkedNodes.splice(index, 1);
        }
    };
    TreeView.prototype.getCheckEvent = function (currLi, action, e) {
        this.checkActionNodes.push(this.getNodeData(currLi));
        var nodeData = this.checkActionNodes;
        return { action: action, cancel: false, isInteracted: isNullOrUndefined(e) ? false : true, node: currLi, data: nodeData };
    };
    TreeView.prototype.finalize = function () {
        var firstUl = select('.' + PARENTITEM, this.element);
        firstUl.setAttribute('role', treeAriaAttr.treeRole);
        this.setMultiSelect(this.allowMultiSelection);
        var firstNode = select('.' + LISTITEM, this.element);
        if (firstNode) {
            addClass([firstNode], FOCUS);
            this.updateIdAttr(null, firstNode);
        }
        this.doSelectionAction();
        this.isLoaded = true;
        this.isAnimate = false;
        var eventArgs = { data: this.treeData };
        this.trigger('dataBound', eventArgs);
    };
    TreeView.prototype.doSelectionAction = function () {
        var sNodes = selectAll('.' + SELECTED$1, this.element);
        var sUids = this.selectedNodes;
        if (sUids.length > 0) {
            this.setProperties({ selectedNodes: [] }, true);
            for (var i = 0; i < sUids.length; i++) {
                var sNode = select('[data-uid="' + sUids[i] + '"]', this.element);
                this.selectNode(sNode, null, true);
                if (!this.allowMultiSelection) {
                    break;
                }
            }
        }
        else {
            this.selectGivenNodes(sNodes);
        }
        removeClass(sNodes, SELECTED$1);
    };
    TreeView.prototype.selectGivenNodes = function (sNodes) {
        for (var i = 0; i < sNodes.length; i++) {
            this.selectNode(sNodes[i], null, true);
            if (!this.allowMultiSelection) {
                break;
            }
        }
    };
    TreeView.prototype.clickHandler = function (e) {
        var target = e.target;
        EventHandler.remove(this.element, 'contextmenu ', this.preventContextMenu);
        if (!target || this.dragStartAction) {
            return;
        }
        else {
            var classList$$1 = target.classList;
            var li = closest(target, '.' + LISTITEM);
            if (!li) {
                return;
            }
            else {
                this.removeHover();
                this.setFocusElement(li);
                if (this.showCheckBox) {
                    var checkWrapper = closest(target, '.' + CHECKBOXWRAP);
                    if (!isNullOrUndefined(checkWrapper)) {
                        var checkElement = select('.' + CHECKBOXFRAME, checkWrapper);
                        this.validateCheckNode(checkWrapper, checkElement.classList.contains(CHECK), li, e);
                        this.triggerClickEvent(e, li);
                        return;
                    }
                }
                if (classList$$1.contains(EXPANDABLE)) {
                    this.expandAction(li, target, e);
                }
                else if (classList$$1.contains(COLLAPSIBLE)) {
                    this.collapseNode(li, target, e);
                }
                else {
                    if (!classList$$1.contains(PARENTITEM) && !classList$$1.contains(LISTITEM)) {
                        var multiSelect = false;
                        if (Browser.isDevice && this.allowMultiSelection) {
                            var popup = select('.' + POPUP, this.element);
                            if (!isVisible(popup)) {
                                popup.style.display = '';
                            }
                            var txtWrap = closest(target, '.' + TEXTWRAP);
                            txtWrap = !txtWrap ? e.target : txtWrap;
                            var pos = txtWrap.getBoundingClientRect();
                            var posLeft = (e.clientX - pos.left) + txtWrap.offsetLeft - (popup.offsetWidth / 2);
                            var posTop = txtWrap.offsetTop - popup.offsetHeight - 10;
                            popup.style.left = (posLeft < 0 ? 0 : posLeft) + 'px';
                            popup.style.top = (posTop < 0 ? 0 : posTop) + 'px';
                            if (popup.classList.contains(POPUPSELECT)) {
                                multiSelect = true;
                            }
                        }
                        this.toggleSelect(li, e, multiSelect);
                    }
                }
                this.triggerClickEvent(e, li);
            }
        }
    };
    TreeView.prototype.nodeCheckingEvent = function (wrapper, isCheck, e) {
        var currLi = closest(wrapper, '.' + LISTITEM);
        this.checkActionNodes = [];
        var ariaState = !isCheck ? 'true' : 'false';
        if (!isNullOrUndefined(ariaState)) {
            wrapper.setAttribute('aria-checked', ariaState);
        }
        var eventArgs = this.getCheckEvent(currLi, !isCheck ? 'uncheck' : 'check', e);
        this.trigger('nodeChecking', eventArgs);
        return eventArgs;
    };
    TreeView.prototype.nodeCheckedEvent = function (wrapper, isCheck, e) {
        var currLi = closest(wrapper, '.' + LISTITEM);
        var eventArgs = this.getCheckEvent(wrapper, isCheck ? 'uncheck' : 'check', e);
        eventArgs.data = eventArgs.data.splice(0, eventArgs.data.length - 1);
        this.trigger('nodeChecked', eventArgs);
    };
    TreeView.prototype.triggerClickEvent = function (e, li) {
        var eventArgs = {
            event: e,
            node: li,
        };
        this.trigger('nodeClicked', eventArgs);
    };
    TreeView.prototype.expandNode = function (currLi, icon) {
        var _this = this;
        if (icon.classList.contains(LOAD)) {
            this.hideSpinner(icon);
        }
        removeClass([icon], EXPANDABLE);
        addClass([icon], COLLAPSIBLE);
        var start = 0;
        var end = 0;
        var proxy = this;
        var ul = select('.' + PARENTITEM, currLi);
        var liEle = currLi;
        this.setHeight(liEle, ul);
        if (!this.isAnimate) {
            this.aniObj.animate(ul, {
                name: this.animation.expand.effect,
                duration: this.animation.expand.duration,
                timingFunction: this.animation.expand.easing,
                begin: function (args) {
                    liEle.style.overflow = 'hidden';
                    start = liEle.offsetHeight;
                    end = select('.' + TEXTWRAP, currLi).offsetHeight;
                },
                progress: function (args) {
                    args.element.style.display = 'block';
                    proxy.animateHeight(args, start, end);
                },
                end: function (args) {
                    args.element.style.display = 'block';
                    _this.expandedNode(liEle, ul, icon);
                }
            });
        }
        else {
            this.expandedNode(liEle, ul, icon);
        }
    };
    TreeView.prototype.expandedNode = function (currLi, ul, icon) {
        ul.style.display = 'block';
        currLi.style.display = 'block';
        currLi.style.overflow = '';
        currLi.style.height = '';
        removeClass([icon], PROCESS);
        currLi.setAttribute('aria-expanded', 'true');
        removeClass([currLi], NODECOLLAPSED);
        if (this.isLoaded && this.expandArgs) {
            this.trigger('nodeExpanded', this.expandArgs);
        }
    };
    TreeView.prototype.collapseNode = function (currLi, icon, e) {
        var _this = this;
        if (icon.classList.contains(PROCESS)) {
            return;
        }
        else {
            addClass([icon], PROCESS);
        }
        var colArgs;
        if (this.isLoaded) {
            colArgs = this.getExpandEvent(currLi, e);
            this.trigger('nodeCollapsing', colArgs);
            if (colArgs.cancel) {
                return;
            }
        }
        removeClass([icon], COLLAPSIBLE);
        addClass([icon], EXPANDABLE);
        var start = 0;
        var end = 0;
        var proxy = this;
        var ul = select('.' + PARENTITEM, currLi);
        var liEle = currLi;
        addClass([currLi], NODECOLLAPSED);
        this.aniObj.animate(ul, {
            name: this.animation.collapse.effect,
            duration: this.animation.collapse.duration,
            timingFunction: this.animation.collapse.easing,
            begin: function (args) {
                liEle.style.overflow = 'hidden';
                start = select('.' + TEXTWRAP, currLi).offsetHeight;
                end = liEle.offsetHeight;
            },
            progress: function (args) {
                proxy.animateHeight(args, start, end);
            },
            end: function (args) {
                liEle.style.overflow = '';
                args.element.style.display = 'none';
                liEle.style.height = '';
                removeClass([icon], PROCESS);
                currLi.setAttribute('aria-expanded', 'false');
                if (_this.isLoaded) {
                    _this.trigger('nodeCollapsed', colArgs);
                }
            }
        });
    };
    TreeView.prototype.setHeight = function (currLi, ul) {
        ul.style.display = 'block';
        ul.style.visibility = 'hidden';
        currLi.style.height = currLi.offsetHeight + 'px';
        ul.style.display = 'none';
        ul.style.visibility = '';
    };
    TreeView.prototype.animateHeight = function (args, start, end) {
        var remaining = (args.duration - args.timeStamp) / args.duration;
        var currentHeight = (end - start) * remaining + start;
        args.element.parentElement.style.height = currentHeight + 'px';
    };
    TreeView.prototype.renderChildNodes = function (parentLi, expandChild) {
        var _this = this;
        var eicon = select('div.' + ICON, parentLi);
        if (isNullOrUndefined(eicon)) {
            return;
        }
        this.showSpinner(eicon);
        var childItems;
        if (this.fields.dataSource instanceof DataManager) {
            var level = this.parents(parentLi, '.' + PARENTITEM).length;
            var mapper_1 = this.getChildFields(this.fields, level, 1);
            if (isNullOrUndefined(mapper_1) || isNullOrUndefined(mapper_1.dataSource)) {
                detach(eicon);
                parentLi.removeAttribute('aria-expanded');
                return;
            }
            this.treeList.push('false');
            mapper_1.dataSource.executeQuery(this.getQuery(mapper_1, parentLi.getAttribute('data-uid'))).then(function (e) {
                _this.treeList.pop();
                childItems = e.result;
                _this.currentLoadData = childItems;
                if (isNullOrUndefined(childItems) || childItems.length === 0) {
                    detach(eicon);
                    parentLi.removeAttribute('aria-expanded');
                }
                else {
                    var prop = _this.getActualProperties(mapper_1);
                    _this.listBaseOption.fields = prop;
                    _this.listBaseOption.fields.url = prop.navigateUrl;
                    _this.listBaseOption.ariaAttributes.level = parseFloat(parentLi.getAttribute('aria-level')) + 1;
                    parentLi.appendChild(ListBase.createList(childItems, _this.listBaseOption));
                    _this.expandNode(parentLi, eicon);
                    _this.ensureCheckNode(parentLi);
                    _this.finalizeNode(parentLi);
                    _this.renderSubChild(parentLi, expandChild);
                }
                if (_this.treeList.length === 0 && !_this.isLoaded) {
                    _this.finalize();
                }
            });
        }
        else {
            childItems = this.getChildNodes(this.treeData, parentLi.getAttribute('data-uid'));
            this.currentLoadData = childItems;
            if (isNullOrUndefined(childItems) || childItems.length === 0) {
                detach(eicon);
                parentLi.removeAttribute('aria-expanded');
                return;
            }
            else {
                this.listBaseOption.ariaAttributes.level = parseFloat(parentLi.getAttribute('aria-level')) + 1;
                parentLi.appendChild(ListBase.createList(this.getSortedData(childItems), this.listBaseOption));
                this.expandNode(parentLi, eicon);
                this.ensureCheckNode(parentLi);
                this.finalizeNode(parentLi);
                this.renderSubChild(parentLi, expandChild);
            }
        }
    };
    TreeView.prototype.ensureCheckNode = function (element) {
        if (this.showCheckBox) {
            this.ensureChildCheckState(element);
            this.ensureParentCheckState(element);
        }
        this.currentLoadData = null;
    };
    TreeView.prototype.getChildFields = function (mapper, nodeLevel, dataLevel) {
        if (nodeLevel === dataLevel) {
            return this.getChildMapper(mapper);
        }
        else {
            return this.getChildFields(this.getChildMapper(mapper), nodeLevel, dataLevel + 1);
        }
    };
    TreeView.prototype.getChildMapper = function (mapper) {
        return (typeof mapper.child === 'string' || isNullOrUndefined(mapper.child)) ? mapper : mapper.child;
    };
    TreeView.prototype.getChildNodes = function (obj, parentId, isRoot) {
        if (isRoot === void 0) { isRoot = false; }
        var childNodes;
        if (isNullOrUndefined(obj)) {
            return childNodes;
        }
        else if (this.dataType === 1) {
            return this.getChildGroup(this.groupedData, parentId, isRoot);
        }
        else {
            if (typeof this.fields.child === 'string') {
                for (var i = 0, objlen = obj.length; i < objlen; i++) {
                    if (obj[i][this.fields.id] && obj[i][this.fields.id].toString() === parentId) {
                        return obj[i][this.fields.child];
                    }
                    else if (obj[i].hasOwnProperty(this.fields.child)) {
                        childNodes = this.getChildNodes(obj[i][this.fields.child], parentId);
                        if (childNodes !== undefined) {
                            break;
                        }
                    }
                }
            }
        }
        return childNodes;
    };
    TreeView.prototype.getChildGroup = function (data, parentId, isRoot) {
        var childNodes;
        if (isNullOrUndefined(data)) {
            return childNodes;
        }
        for (var i = 0, objlen = data.length; i < objlen; i++) {
            if (!isNullOrUndefined(data[i][0]) && !isNullOrUndefined(data[i][0][this.fields.parentID])) {
                if (data[i][0][this.fields.parentID].toString() === parentId) {
                    return data[i];
                }
            }
            else if (isRoot) {
                return data[i];
            }
            else {
                return [];
            }
        }
        return childNodes;
    };
    TreeView.prototype.renderSubChild = function (element, expandChild) {
        if (expandChild) {
            var cIcons = selectAll('.' + EXPANDABLE, element);
            for (var i = 0, len = cIcons.length; i < len; i++) {
                var icon = cIcons[i];
                var curLi = closest(icon, '.' + LISTITEM);
                this.renderChildNodes(curLi, expandChild);
            }
        }
    };
    TreeView.prototype.toggleSelect = function (li, e, multiSelect) {
        if (this.allowMultiSelection && ((e && e.ctrlKey) || multiSelect) && this.isActive(li)) {
            this.unselectNode(li, e);
        }
        else {
            this.selectNode(li, e, multiSelect);
        }
    };
    TreeView.prototype.isActive = function (li) {
        return li.classList.contains(ACTIVE) ? true : false;
    };
    TreeView.prototype.selectNode = function (li, e, multiSelect) {
        if (isNullOrUndefined(li) || (!this.allowMultiSelection && this.isActive(li) && !isNullOrUndefined(e))) {
            this.setFocusElement(li);
            return;
        }
        var eventArgs;
        if (this.isLoaded) {
            eventArgs = this.getSelectEvent(li, 'select', e);
            this.trigger('nodeSelecting', eventArgs);
            if (eventArgs.cancel) {
                return;
            }
        }
        if (!this.allowMultiSelection || (!multiSelect && (!e || (e && !e.ctrlKey)))) {
            this.removeSelectAll();
        }
        if (this.allowMultiSelection && e && e.shiftKey) {
            if (!this.startNode) {
                this.startNode = li;
            }
            var startIndex = this.liList.indexOf(this.startNode);
            var endIndex = this.liList.indexOf(li);
            if (startIndex > endIndex) {
                var temp = startIndex;
                startIndex = endIndex;
                endIndex = temp;
            }
            for (var i = startIndex; i <= endIndex; i++) {
                var currNode = this.liList[i];
                if (isVisible(currNode)) {
                    this.addSelect(currNode);
                }
            }
        }
        else {
            this.startNode = li;
            this.addSelect(li);
        }
        this.setFocusElement(li);
        if (this.isLoaded) {
            this.trigger('nodeSelected', eventArgs);
        }
    };
    TreeView.prototype.unselectNode = function (li, e) {
        var eventArgs;
        if (this.isLoaded) {
            eventArgs = this.getSelectEvent(li, 'un-select', e);
            this.trigger('nodeSelecting', eventArgs);
            if (eventArgs.cancel) {
                return;
            }
        }
        this.removeSelect(li);
        this.setFocusElement(li);
        if (this.isLoaded) {
            this.trigger('nodeSelected', eventArgs);
        }
    };
    TreeView.prototype.setFocusElement = function (li) {
        if (!isNullOrUndefined(li)) {
            var focusedNode = this.getFocusedNode();
            if (focusedNode) {
                removeClass([focusedNode], FOCUS);
            }
            addClass([li], FOCUS);
            this.updateIdAttr(focusedNode, li);
        }
    };
    TreeView.prototype.addSelect = function (liEle) {
        liEle.setAttribute('aria-selected', 'true');
        addClass([liEle], ACTIVE);
        var id = liEle.getAttribute('data-uid');
        if (!isNullOrUndefined(id) && this.selectedNodes.indexOf(id) === -1) {
            this.selectedNodes.push(id);
        }
    };
    TreeView.prototype.removeSelect = function (liEle) {
        if (this.allowMultiSelection) {
            liEle.setAttribute('aria-selected', 'false');
        }
        else {
            liEle.removeAttribute('aria-selected');
        }
        removeClass([liEle], ACTIVE);
        var index = this.selectedNodes.indexOf(liEle.getAttribute('data-uid'));
        if (index > -1) {
            this.selectedNodes.splice(index, 1);
        }
    };
    TreeView.prototype.removeSelectAll = function () {
        var selectedLI = this.element.querySelectorAll('.' + ACTIVE);
        for (var _i = 0, selectedLI_1 = selectedLI; _i < selectedLI_1.length; _i++) {
            var ele = selectedLI_1[_i];
            if (this.allowMultiSelection) {
                ele.setAttribute('aria-selected', 'false');
            }
            else {
                ele.removeAttribute('aria-selected');
            }
        }
        removeClass(selectedLI, ACTIVE);
        this.setProperties({ selectedNodes: [] }, true);
    };
    TreeView.prototype.getSelectEvent = function (currLi, action, e) {
        var nodeData = this.getNodeData(currLi);
        return { action: action, cancel: false, isInteracted: isNullOrUndefined(e) ? false : true, node: currLi, nodeData: nodeData };
    };
    TreeView.prototype.setExpandOnType = function () {
        this.expandOnType = (this.expandOn === 'auto') ? (Browser.isDevice ? 'click' : 'dblclick') : this.expandOn;
    };
    TreeView.prototype.expandHandler = function (e) {
        var target = e.target;
        if (!target || (this.allowEditing && e.type === 'dblclick') || target.classList.contains(ROOT) ||
            target.classList.contains(PARENTITEM) || target.classList.contains(LISTITEM) ||
            target.classList.contains(ICON) || this.showCheckBox && closest(target, '.' + CHECKBOXWRAP)) {
            return;
        }
        else {
            this.expandCollapseAction(closest(target, '.' + LISTITEM), e);
        }
    };
    TreeView.prototype.expandCollapseAction = function (currLi, e) {
        var icon = select('div.' + ICON, currLi);
        if (!icon || icon.classList.contains(PROCESS)) {
            return;
        }
        else {
            var classList$$1 = icon.classList;
            if (classList$$1.contains(EXPANDABLE)) {
                this.expandAction(currLi, icon, e);
            }
            else {
                this.collapseNode(currLi, icon, e);
            }
        }
    };
    TreeView.prototype.expandAction = function (currLi, icon, e, expandChild) {
        if (icon.classList.contains(PROCESS)) {
            return;
        }
        else {
            addClass([icon], PROCESS);
        }
        if (this.isLoaded) {
            this.expandArgs = this.getExpandEvent(currLi, e);
            this.trigger('nodeExpanding', this.expandArgs);
            if (this.expandArgs.cancel) {
                return;
            }
        }
        var ul = select('.' + PARENTITEM, currLi);
        if (ul && ul.nodeName === 'UL') {
            this.expandNode(currLi, icon);
        }
        else {
            this.renderChildNodes(currLi, expandChild);
        }
    };
    TreeView.prototype.keyActionHandler = function (e) {
        var target = e.target;
        var focusedNode = this.getFocusedNode();
        if (target && target.classList.contains(INPUT)) {
            var inpEle = target;
            if (e.action === 'enter') {
                inpEle.blur();
                this.element.focus();
                addClass([focusedNode], HOVER);
            }
            else if (e.action === 'escape') {
                inpEle.value = this.oldText;
                inpEle.blur();
                this.element.focus();
                addClass([focusedNode], HOVER);
            }
            return;
        }
        e.preventDefault();
        var eventArgs = {
            cancel: false,
            event: e,
            node: focusedNode,
        };
        this.trigger('keyPress', eventArgs);
        if (eventArgs.cancel) {
            return;
        }
        switch (e.action) {
            case 'space':
                if (this.showCheckBox) {
                    this.checkNode(e);
                }
                break;
            case 'moveRight':
                this.openNode(this.enableRtl ? false : true, e);
                break;
            case 'moveLeft':
                this.openNode(this.enableRtl ? true : false, e);
                break;
            case 'shiftDown':
                this.shiftKeySelect(true, e);
                break;
            case 'moveDown':
            case 'ctrlDown':
            case 'csDown':
                this.navigateNode(true);
                break;
            case 'shiftUp':
                this.shiftKeySelect(false, e);
                break;
            case 'moveUp':
            case 'ctrlUp':
            case 'csUp':
                this.navigateNode(false);
                break;
            case 'home':
            case 'shiftHome':
            case 'ctrlHome':
            case 'csHome':
                this.navigateRootNode(true);
                break;
            case 'end':
            case 'shiftEnd':
            case 'ctrlEnd':
            case 'csEnd':
                this.navigateRootNode(false);
                break;
            case 'enter':
            case 'ctrlEnter':
            case 'shiftEnter':
            case 'csEnter':
                this.toggleSelect(focusedNode, e);
                break;
            case 'f2':
                if (this.allowEditing) {
                    this.createTextbox(focusedNode, e);
                }
                break;
            case 'ctrlA':
                if (this.allowMultiSelection) {
                    var sNodes = selectAll('.' + LISTITEM + ':not(.' + ACTIVE + ')', this.element);
                    this.selectGivenNodes(sNodes);
                }
                break;
        }
    };
    TreeView.prototype.navigateToFocus = function (isUp) {
        var focusNode = this.getFocusedNode().querySelector('.' + TEXTWRAP);
        var pos = focusNode.getBoundingClientRect();
        var parent = this.getScrollParent(this.element);
        if (!isNullOrUndefined(parent)) {
            var parentPos = parent.getBoundingClientRect();
            if (pos.bottom > parentPos.bottom) {
                parent.scrollTop += pos.bottom - parentPos.bottom;
            }
            else if (pos.top < parentPos.top) {
                parent.scrollTop -= parentPos.top - pos.top;
            }
        }
        var isVisible$$1 = this.isVisibleInViewport(focusNode);
        if (!isVisible$$1) {
            focusNode.scrollIntoView(isUp);
        }
    };
    TreeView.prototype.isVisibleInViewport = function (txtWrap) {
        var pos = txtWrap.getBoundingClientRect();
        return (pos.top >= 0 && pos.left >= 0 && pos.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            pos.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    TreeView.prototype.getScrollParent = function (node) {
        if (isNullOrUndefined(node)) {
            return null;
        }
        return (node.scrollHeight > node.clientHeight) ? node : this.getScrollParent(node.parentElement);
    };
    TreeView.prototype.shiftKeySelect = function (isTowards, e) {
        if (this.allowMultiSelection) {
            var focusedNode = this.getFocusedNode();
            var nextNode = isTowards ? this.getNextNode(focusedNode) : this.getPrevNode(focusedNode);
            this.removeHover();
            this.setFocusElement(nextNode);
            this.toggleSelect(nextNode, e, false);
            this.navigateToFocus(!isTowards);
        }
        else {
            this.navigateNode(isTowards);
        }
    };
    TreeView.prototype.checkNode = function (e) {
        var focusedNode = this.getFocusedNode();
        var checkWrap = select('.' + CHECKBOXWRAP, focusedNode);
        var isChecked = select(' .' + CHECKBOXFRAME, checkWrap).classList.contains(CHECK);
        this.validateCheckNode(checkWrap, isChecked, focusedNode, e);
    };
    TreeView.prototype.validateCheckNode = function (checkWrap, isCheck, li, e) {
        var eventArgs = this.nodeCheckingEvent(checkWrap, isCheck, e);
        if (eventArgs.cancel) {
            return;
        }
        this.changeState(checkWrap, isCheck ? 'uncheck' : 'check', e, true);
        this.ensureChildCheckState(li);
        this.ensureParentCheckState(closest(closest(li, '.' + PARENTITEM), '.' + LISTITEM));
        this.nodeCheckedEvent(checkWrap, isCheck, e);
    };
    TreeView.prototype.openNode = function (toBeOpened, e) {
        var focusedNode = this.getFocusedNode();
        var icon = select('div.' + ICON, focusedNode);
        if (toBeOpened) {
            if (!icon) {
                return;
            }
            else if (icon.classList.contains(EXPANDABLE)) {
                this.expandAction(focusedNode, icon, e);
            }
            else {
                this.focusNextNode(focusedNode, true);
            }
        }
        else {
            if (icon && icon.classList.contains(COLLAPSIBLE)) {
                this.collapseNode(focusedNode, icon, e);
            }
            else {
                var parentLi = closest(closest(focusedNode, '.' + PARENTITEM), '.' + LISTITEM);
                if (!parentLi) {
                    return;
                }
                else {
                    this.setFocus(focusedNode, parentLi);
                    this.navigateToFocus(true);
                }
            }
        }
    };
    TreeView.prototype.navigateNode = function (isTowards) {
        var focusedNode = this.getFocusedNode();
        this.focusNextNode(focusedNode, isTowards);
    };
    TreeView.prototype.navigateRootNode = function (isBackwards) {
        var focusedNode = this.getFocusedNode();
        var rootNode = isBackwards ? this.getRootNode() : this.getEndNode();
        this.setFocus(focusedNode, rootNode);
        this.navigateToFocus(isBackwards);
    };
    TreeView.prototype.getFocusedNode = function () {
        var fNode = select('.' + LISTITEM + '.' + FOCUS, this.element);
        return isNullOrUndefined(fNode) ? select('.' + LISTITEM, this.element) : fNode;
    };
    TreeView.prototype.focusNextNode = function (li, isTowards) {
        var nextNode = isTowards ? this.getNextNode(li) : this.getPrevNode(li);
        this.setFocus(li, nextNode);
        this.navigateToFocus(!isTowards);
    };
    TreeView.prototype.getNextNode = function (li) {
        var index = this.liList.indexOf(li);
        var nextNode;
        do {
            index++;
            nextNode = this.liList[index];
            if (isNullOrUndefined(nextNode)) {
                return li;
            }
        } while (!isVisible(nextNode));
        return nextNode;
    };
    TreeView.prototype.getPrevNode = function (li) {
        var index = this.liList.indexOf(li);
        var prevNode;
        do {
            index--;
            prevNode = this.liList[index];
            if (isNullOrUndefined(prevNode)) {
                return li;
            }
        } while (!isVisible(prevNode));
        return prevNode;
    };
    TreeView.prototype.getRootNode = function () {
        var index = 0;
        var rootNode;
        do {
            rootNode = this.liList[index];
            index++;
        } while (!isVisible(rootNode));
        return rootNode;
    };
    TreeView.prototype.getEndNode = function () {
        var index = this.liList.length - 1;
        var endNode;
        do {
            endNode = this.liList[index];
            index--;
        } while (!isVisible(endNode));
        return endNode;
    };
    TreeView.prototype.setFocus = function (preNode, nextNode) {
        removeClass([preNode], [HOVER, FOCUS]);
        addClass([nextNode], [HOVER, FOCUS]);
        this.updateIdAttr(preNode, nextNode);
    };
    TreeView.prototype.updateIdAttr = function (preNode, nextNode) {
        this.element.removeAttribute('aria-activedescendant');
        if (preNode) {
            preNode.removeAttribute('id');
        }
        nextNode.setAttribute('id', 'node_active');
        this.element.setAttribute('aria-activedescendant', 'node_active');
    };
    TreeView.prototype.focusIn = function () {
        if (!this.mouseDownStatus) {
            addClass([this.getFocusedNode()], HOVER);
        }
        this.mouseDownStatus = false;
    };
    TreeView.prototype.focusOut = function () {
        removeClass([this.getFocusedNode()], HOVER);
    };
    TreeView.prototype.onMouseOver = function (e) {
        var target = e.target;
        var classList$$1 = target.classList;
        var currentLi = closest(target, '.' + LISTITEM);
        if (!currentLi || classList$$1.contains(PARENTITEM) || classList$$1.contains(LISTITEM)) {
            this.removeHover();
            return;
        }
        else {
            this.setHover(currentLi);
        }
    };
    TreeView.prototype.setHover = function (li) {
        if (!li.classList.contains(HOVER)) {
            this.removeHover();
            addClass([li], HOVER);
        }
    };
    
    TreeView.prototype.onMouseLeave = function (e) {
        this.removeHover();
    };
    TreeView.prototype.removeHover = function () {
        var hoveredNode = selectAll('.' + HOVER, this.element);
        if (hoveredNode && hoveredNode.length) {
            removeClass(hoveredNode, HOVER);
        }
    };
    
    TreeView.prototype.getNodeData = function (currLi) {
        if (!isNullOrUndefined(currLi) && currLi.classList.contains(LISTITEM)) {
            var id = currLi.getAttribute('data-uid');
            var text = select('.' + LISTTEXT, currLi).textContent;
            var pNode = closest(currLi.parentNode, '.' + LISTITEM);
            var pid = pNode ? pNode.getAttribute('data-uid') : null;
            var selected = currLi.classList.contains(ACTIVE);
            var expanded = (currLi.getAttribute('aria-expanded') === 'true') ? true : false;
            var checked = null;
            if (this.showCheckBox) {
                checked = select('.' + CHECKBOXWRAP, currLi).getAttribute('aria-checked');
            }
            return { id: id, text: text, parentID: pid, selected: selected, expanded: expanded, isChecked: checked };
        }
        return { id: '', text: '', parentID: '', selected: '', expanded: '', isChecked: '' };
    };
    TreeView.prototype.getExpandEvent = function (currLi, e) {
        var nodeData = this.getNodeData(currLi);
        return { cancel: false, isInteracted: isNullOrUndefined(e) ? false : true, node: currLi, nodeData: nodeData };
    };
    TreeView.prototype.reRenderNodes = function () {
        this.element.innerHTML = '';
        this.setProperties({ selectedNodes: [] }, true);
        this.isLoaded = false;
        this.setDataBinding();
    };
    TreeView.prototype.setCssClass = function (oldClass, newClass) {
        if (!isNullOrUndefined(oldClass) && oldClass !== '') {
            removeClass([this.element], oldClass.split(' '));
        }
        if (!isNullOrUndefined(newClass) && newClass !== '') {
            addClass([this.element], newClass.split(' '));
        }
    };
    TreeView.prototype.editingHandler = function (e) {
        var target = e.target;
        if (!target || target.classList.contains(ROOT) || target.classList.contains(PARENTITEM) ||
            target.classList.contains(LISTITEM) || target.classList.contains(ICON) ||
            target.classList.contains(INPUT) || target.classList.contains(INPUTGROUP)) {
            return;
        }
        else {
            e.stopImmediatePropagation();
            var liEle = closest(target, '.' + LISTITEM);
            this.createTextbox(liEle, e);
        }
    };
    TreeView.prototype.createTextbox = function (liEle, e) {
        var textEle = select('.' + LISTTEXT, liEle);
        this.oldText = textEle.textContent;
        var eventArgs = this.getEditEvent(liEle, null);
        this.trigger('nodeEditing', eventArgs);
        if (eventArgs.cancel) {
            return;
        }
        var inpWidth = textEle.offsetWidth + 5;
        var style = 'width:' + inpWidth + 'px';
        var inpEle = createElement('input', { attrs: { value: this.oldText } });
        addClass([liEle], EDITING);
        textEle.childNodes[0].nodeValue = '';
        textEle.appendChild(inpEle);
        this.inputObj = Input.createInput({
            element: inpEle,
            properties: {
                enableRtl: this.enableRtl,
            }
        });
        this.inputObj.container.setAttribute('style', style);
        inpEle.focus();
        var inputEle = inpEle;
        inputEle.setSelectionRange(0, inputEle.value.length);
        this.wireInputEvents(inpEle);
    };
    TreeView.prototype.inputFocusOut = function (e) {
        var target = e.target;
        var newText = target.value;
        var txtEle = closest(target, '.' + LISTTEXT);
        var liEle = closest(target, '.' + LISTITEM);
        txtEle.childNodes[0].nodeValue = newText;
        detach(this.inputObj.container);
        removeClass([liEle], EDITING);
        txtEle.focus();
        this.trigger('nodeEdited', this.getEditEvent(liEle, newText));
    };
    TreeView.prototype.getElement = function (ele) {
        if (isNullOrUndefined(ele)) {
            return null;
        }
        else if (typeof ele === 'string') {
            return this.element.querySelector('[data-uid="' + ele + '"]');
        }
        else if (typeof ele === 'object') {
            return ele;
        }
        else {
            return null;
        }
    };
    TreeView.prototype.getEditEvent = function (liEle, newText) {
        var data = this.getNodeData(liEle);
        return { cancel: false, newText: newText, node: liEle, nodeData: data, oldText: this.oldText };
    };
    TreeView.prototype.setDragAndDrop = function (toBind) {
        if (toBind) {
            this.initializeDrag();
        }
        else {
            this.destroyDrag();
        }
    };
    TreeView.prototype.initializeDrag = function () {
        var _this = this;
        var virtualEle;
        this.dragObj = new Draggable(this.element, {
            enableTailMode: true,
            preventDefault: Browser.isIos ? true : false,
            dragTarget: '.' + TEXTWRAP,
            helper: function (e) {
                _this.dragTarget = e.sender.target;
                var dragRoot = closest(_this.dragTarget, '.' + ROOT);
                var dragWrap = closest(_this.dragTarget, '.' + TEXTWRAP);
                _this.dragLi = closest(_this.dragTarget, '.' + LISTITEM);
                if (_this.fullRowSelect && !dragWrap && _this.dragTarget.classList.contains(FULLROW)) {
                    dragWrap = _this.dragTarget.nextElementSibling;
                }
                if (!_this.dragTarget || !e.element.isSameNode(dragRoot) || !dragWrap ||
                    _this.dragTarget.classList.contains(ROOT) || _this.dragTarget.classList.contains(PARENTITEM) ||
                    _this.dragTarget.classList.contains(LISTITEM)) {
                    return false;
                }
                var cloneEle = (dragWrap.cloneNode(true));
                if (isNullOrUndefined(select('div.' + ICON, cloneEle))) {
                    var icon = createElement('div', { className: ICON + ' ' + EXPANDABLE });
                    cloneEle.insertBefore(icon, cloneEle.children[0]);
                }
                var cssClass = DRAGITEM + ' ' + ROOT + ' ' + (_this.enableRtl ? RTL$1 : '');
                virtualEle = createElement('div', { className: cssClass });
                virtualEle.appendChild(cloneEle);
                var nLen = _this.selectedNodes.length;
                if (nLen > 1 && _this.allowMultiSelection && _this.dragLi.classList.contains(ACTIVE)) {
                    var cNode = createElement('span', { className: DROPCOUNT, innerHTML: '' + nLen });
                    virtualEle.appendChild(cNode);
                }
                document.body.appendChild(virtualEle);
                document.body.style.cursor = '';
                _this.dragData = _this.getNodeData(_this.dragLi);
                return virtualEle;
            },
            dragStart: function (e) {
                addClass([_this.element], DRAGGING);
                var eventArgs = _this.getDragEvent(e.event, _this, null, e.target);
                _this.trigger('nodeDragStart', eventArgs);
                if (eventArgs.cancel) {
                    detach(virtualEle);
                    removeClass([_this.element], DRAGGING);
                }
                _this.dragStartAction = true;
            },
            drag: function (e) {
                _this.dragObj.setProperties({ cursorAt: { top: (!isNullOrUndefined(e.event.targetTouches) || Browser.isDevice) ? 60 : -20 } });
                _this.dragAction(e, virtualEle);
            },
            dragStop: function (e) {
                removeClass([_this.element], DRAGGING);
                _this.removeVirtualEle();
                var dropTarget = e.target;
                var dropRoot = (closest(dropTarget, '.' + DROPPABLE));
                if (!dropTarget || !dropRoot || dropTarget.classList.contains(ROOT)) {
                    detach(e.helper);
                    document.body.style.cursor = '';
                }
                var eventArgs = _this.getDragEvent(e.event, _this, dropTarget, dropTarget);
                _this.trigger('nodeDragStop', eventArgs);
                if (eventArgs.cancel) {
                    detach(e.helper);
                    document.body.style.cursor = '';
                }
                _this.dragStartAction = false;
            }
        });
        this.dropObj = new Droppable(this.element, {
            out: function (e) {
                if (!isNullOrUndefined(e) && !e.target.classList.contains(SIBLING)) {
                    document.body.style.cursor = 'not-allowed';
                }
            },
            over: function (e) {
                document.body.style.cursor = '';
            },
            drop: function (e) {
                _this.dropAction(e);
            }
        });
    };
    TreeView.prototype.dragAction = function (e, virtualEle) {
        var dropRoot = closest(e.target, '.' + DROPPABLE);
        var dropWrap = closest(e.target, '.' + TEXTWRAP);
        var icon = select('div.' + ICON, virtualEle);
        removeClass([icon], [DROPIN, DROPNEXT, DROPOUT, NODROP]);
        this.removeVirtualEle();
        document.body.style.cursor = '';
        var classList$$1 = e.target.classList;
        if (this.fullRowSelect && !dropWrap && !isNullOrUndefined(classList$$1) && classList$$1.contains(FULLROW)) {
            dropWrap = e.target.nextElementSibling;
        }
        if (dropRoot) {
            var dropLi = closest(e.target, '.' + LISTITEM);
            if (!dropRoot.classList.contains(ROOT) || (dropWrap &&
                (!dropLi.isSameNode(this.dragLi) && !this.isDescendant(this.dragLi, dropLi)))) {
                if (e && (e.event.offsetY < 7)) {
                    addClass([icon], DROPNEXT);
                    var virEle = createElement('div', { className: SIBLING });
                    var index = this.fullRowSelect ? (1) : (0);
                    dropLi.insertBefore(virEle, dropLi.children[index]);
                }
                else if (e && (e.target.offsetHeight > 0 && e.event.offsetY > (e.target.offsetHeight - 10))) {
                    addClass([icon], DROPNEXT);
                    var virEle = createElement('div', { className: SIBLING });
                    var index = this.fullRowSelect ? (2) : (1);
                    dropLi.insertBefore(virEle, dropLi.children[index]);
                }
                else {
                    addClass([icon], DROPIN);
                }
            }
            else if (e.target.nodeName === 'LI' && (!dropLi.isSameNode(this.dragLi) && !this.isDescendant(this.dragLi, dropLi))) {
                addClass([icon], DROPNEXT);
                this.renderVirtualEle(e);
            }
            else if (e.target.classList.contains(SIBLING)) {
                addClass([icon], DROPNEXT);
            }
            else {
                addClass([icon], DROPOUT);
            }
        }
        else {
            addClass([icon], NODROP);
            document.body.style.cursor = 'not-allowed';
        }
        this.trigger('nodeDragging', this.getDragEvent(e.event, this, e.target, e.target));
    };
    TreeView.prototype.dropAction = function (e) {
        var offsetY = e.event.offsetY;
        var dropTarget = e.target;
        var dragObj = e.dragData.draggable.ej2_instances[0];
        var dragTarget = dragObj.dragTarget;
        var dragLi = (closest(dragTarget, '.' + LISTITEM));
        var dropLi = (closest(dropTarget, '.' + LISTITEM));
        detach(e.droppedElement);
        document.body.style.cursor = '';
        if (!dropLi || dropLi.isSameNode(dragLi) || this.isDescendant(dragLi, dropLi)) {
            return;
        }
        if (dragObj.allowMultiSelection && (dragLi.classList.contains(ACTIVE) || (offsetY < 7 ||
            (e.target.offsetHeight > 0 && offsetY > (e.target.offsetHeight - 10))))) {
            var sNodes = selectAll('.' + ACTIVE, dragObj.element);
            for (var i = 0; i < sNodes.length; i++) {
                if (dropLi.isSameNode(sNodes[i]) || this.isDescendant(sNodes[i], dropLi)) {
                    continue;
                }
                this.appendNode(dropTarget, sNodes[i], dropLi, e, dragObj, offsetY);
            }
        }
        else {
            this.appendNode(dropTarget, dragLi, dropLi, e, dragObj, offsetY);
        }
        this.trigger('nodeDropped', this.getDragEvent(e.event, dragObj, dropTarget, e.target));
    };
    TreeView.prototype.appendNode = function (dropTarget, dragLi, dropLi, e, dragObj, offsetY) {
        if (dropTarget.nodeName === 'LI') {
            this.dropAsSiblingNode(dragLi, dropLi, e, dragObj);
        }
        else {
            this.dropAsChildNode(dragLi, dropLi, dragObj, null, e, offsetY);
        }
    };
    TreeView.prototype.dropAsSiblingNode = function (dragLi, dropLi, e, dragObj) {
        var dropUl = closest(dropLi, '.' + PARENTITEM);
        var dragParentUl = closest(dragLi, '.' + PARENTITEM);
        var dragParentLi = closest(dragParentUl, '.' + LISTITEM);
        var pre;
        if (e.target.offsetHeight > 0 && e.event.offsetY > e.target.offsetHeight - 2) {
            pre = false;
        }
        else if (e.event.offsetY < 2) {
            pre = true;
        }
        dropUl.insertBefore(dragLi, pre ? e.target : e.target.nextElementSibling);
        this.updateElement(dragParentUl, dragParentLi);
        this.updateAriaLevel(dragLi);
        if (dragObj.element.id === this.element.id) {
            this.updateList();
        }
        else {
            dragObj.updateInstance();
            this.updateInstance();
        }
    };
    TreeView.prototype.dropAsChildNode = function (dragLi, dropLi, dragObj, index, e, pos) {
        var dragParentUl = closest(dragLi, '.' + PARENTITEM);
        var dragParentLi = closest(dragParentUl, '.' + LISTITEM);
        var dropParentUl = closest(dropLi, '.' + PARENTITEM);
        if (e && (pos < 7)) {
            dropParentUl.insertBefore(dragLi, dropLi);
        }
        else if (e && (e.target.offsetHeight > 0 && pos > (e.target.offsetHeight - 10))) {
            dropParentUl.insertBefore(dragLi, dropLi.nextElementSibling);
        }
        else {
            var dropUl = this.expandParent(dropLi);
            dropUl.insertBefore(dragLi, dropUl.childNodes[index]);
        }
        this.updateElement(dragParentUl, dragParentLi);
        this.updateAriaLevel(dragLi);
        if (dragObj.element.id === this.element.id) {
            this.updateList();
        }
        else {
            dragObj.updateInstance();
            this.updateInstance();
        }
    };
    TreeView.prototype.expandParent = function (dropLi) {
        var dropIcon = select('div.' + ICON, dropLi);
        if (dropIcon && dropIcon.classList.contains(EXPANDABLE)) {
            this.expandAction(dropLi, dropIcon, null);
        }
        var dropUl = select('.' + PARENTITEM, dropLi);
        if (isNullOrUndefined(dropUl)) {
            ListBase.generateIcon(dropLi, COLLAPSIBLE, this.listBaseOption);
            var icon = select('div.' + ICON, dropLi);
            removeClass([icon], EXPANDABLE);
            dropUl = ListBase.generateUL([], null, this.listBaseOption);
            dropLi.appendChild(dropUl);
            dropLi.setAttribute('aria-expanded', 'true');
            removeClass([dropLi], NODECOLLAPSED);
        }
        return dropUl;
    };
    TreeView.prototype.updateElement = function (dragParentUl, dragParentLi) {
        if (dragParentLi && dragParentUl.childElementCount === 0) {
            var dragIcon = select('div.' + ICON, dragParentLi);
            detach(dragParentUl);
            detach(dragIcon);
            dragParentLi.removeAttribute('aria-expanded');
        }
    };
    TreeView.prototype.updateAriaLevel = function (dragLi) {
        var level = this.parents(dragLi, '.' + PARENTITEM).length;
        dragLi.setAttribute('aria-level', '' + level);
        this.updateChildAriaLevel(select('.' + PARENTITEM, dragLi), level + 1);
    };
    TreeView.prototype.updateChildAriaLevel = function (element, level) {
        if (!isNullOrUndefined(element)) {
            var cNodes = element.childNodes;
            for (var i = 0, len = cNodes.length; i < len; i++) {
                var liEle = cNodes[i];
                liEle.setAttribute('aria-level', '' + level);
                this.updateChildAriaLevel(select('.' + PARENTITEM, liEle), level + 1);
            }
        }
    };
    TreeView.prototype.renderVirtualEle = function (e) {
        var pre;
        if (e.event.offsetY > e.target.offsetHeight - 2) {
            pre = false;
        }
        else if (e.event.offsetY < 2) {
            pre = true;
        }
        var virEle = createElement('div', { className: SIBLING });
        var index = this.fullRowSelect ? (pre ? 1 : 2) : (pre ? 0 : 1);
        e.target.insertBefore(virEle, e.target.children[index]);
    };
    TreeView.prototype.removeVirtualEle = function () {
        var sibEle = select('.' + SIBLING);
        if (sibEle) {
            detach(sibEle);
        }
    };
    TreeView.prototype.destroyDrag = function () {
        if (this.dragObj && this.dropObj) {
            this.dragObj.destroy();
            this.dropObj.destroy();
        }
    };
    TreeView.prototype.getDragEvent = function (event, obj, dropTarget, target) {
        var dropLi = dropTarget ? closest(dropTarget, '.' + LISTITEM) : null;
        var dropData = dropLi ? this.getNodeData(dropLi) : null;
        return {
            cancel: false,
            event: event,
            draggedNode: obj.dragLi,
            draggedNodeData: obj.dragData,
            droppedNode: dropLi,
            droppedNodeData: dropData,
            target: target
        };
    };
    TreeView.prototype.addFullRow = function (toAdd) {
        var len = this.liList.length;
        if (toAdd) {
            for (var i = 0; i < len; i++) {
                this.createFullRow(this.liList[i]);
            }
        }
        else {
            for (var i = 0; i < len; i++) {
                var rowDiv = select('.' + FULLROW, this.liList[i]);
                detach(rowDiv);
            }
        }
    };
    TreeView.prototype.createFullRow = function (item) {
        var rowDiv = createElement('div', { className: FULLROW });
        item.insertBefore(rowDiv, item.childNodes[0]);
    };
    TreeView.prototype.addMultiSelect = function (toAdd) {
        if (toAdd) {
            var liEles = selectAll('.' + LISTITEM + ':not([aria-selected="true"])', this.element);
            for (var _i = 0, liEles_1 = liEles; _i < liEles_1.length; _i++) {
                var ele = liEles_1[_i];
                ele.setAttribute('aria-selected', 'false');
            }
        }
        else {
            var liEles = selectAll('.' + LISTITEM + '[aria-selected="false"]', this.element);
            for (var _a = 0, liEles_2 = liEles; _a < liEles_2.length; _a++) {
                var ele = liEles_2[_a];
                ele.removeAttribute('aria-selected');
            }
        }
    };
    TreeView.prototype.collapseByLevel = function (element, level, excludeHiddenNodes) {
        if (level > 0 && !isNullOrUndefined(element)) {
            var cNodes = this.getVisibleNodes(excludeHiddenNodes, element.childNodes);
            for (var i = 0, len = cNodes.length; i < len; i++) {
                var liEle = cNodes[i];
                var icon = select('.' + COLLAPSIBLE, select('.' + TEXTWRAP, liEle));
                if (!isNullOrUndefined(icon)) {
                    this.collapseNode(liEle, icon, null);
                }
                this.collapseByLevel(select('.' + PARENTITEM, liEle), level - 1, excludeHiddenNodes);
            }
        }
    };
    TreeView.prototype.collapseAllNodes = function (excludeHiddenNodes) {
        var cIcons = this.getVisibleNodes(excludeHiddenNodes, selectAll('.' + COLLAPSIBLE, this.element));
        for (var i = 0, len = cIcons.length; i < len; i++) {
            var icon = cIcons[i];
            var liEle = closest(icon, '.' + LISTITEM);
            this.collapseNode(liEle, icon, null);
        }
    };
    TreeView.prototype.expandByLevel = function (element, level, excludeHiddenNodes) {
        if (level > 0 && !isNullOrUndefined(element)) {
            var eNodes = this.getVisibleNodes(excludeHiddenNodes, element.childNodes);
            for (var i = 0, len = eNodes.length; i < len; i++) {
                var liEle = eNodes[i];
                var icon = select('.' + EXPANDABLE, select('.' + TEXTWRAP, liEle));
                if (!isNullOrUndefined(icon)) {
                    this.expandAction(liEle, icon, null);
                }
                this.expandByLevel(select('.' + PARENTITEM, liEle), level - 1, excludeHiddenNodes);
            }
        }
    };
    TreeView.prototype.expandAllNodes = function (excludeHiddenNodes) {
        var eIcons = this.getVisibleNodes(excludeHiddenNodes, selectAll('.' + EXPANDABLE, this.element));
        for (var i = 0, len = eIcons.length; i < len; i++) {
            var icon = eIcons[i];
            var liEle = closest(icon, '.' + LISTITEM);
            this.expandAction(liEle, icon, null, true);
        }
    };
    TreeView.prototype.getVisibleNodes = function (excludeHiddenNodes, nodes) {
        var vNodes = Array.prototype.slice.call(nodes);
        if (excludeHiddenNodes) {
            for (var i = 0; i < vNodes.length; i++) {
                if (!isVisible(vNodes[i])) {
                    vNodes.splice(i, 1);
                    i--;
                }
            }
        }
        return vNodes;
    };
    TreeView.prototype.removeNode = function (node) {
        var dragParentUl = closest(node, '.' + PARENTITEM);
        var dragParentLi = closest(dragParentUl, '.' + LISTITEM);
        detach(node);
        this.updateElement(dragParentUl, dragParentLi);
        this.updateInstance();
    };
    TreeView.prototype.updateInstance = function () {
        this.updateList();
        this.updateSelectedNodes();
    };
    TreeView.prototype.updateList = function () {
        this.liList = Array.prototype.slice.call(selectAll('.' + LISTITEM, this.element));
    };
    TreeView.prototype.updateSelectedNodes = function () {
        this.setProperties({ selectedNodes: [] }, true);
        var sNodes = selectAll('.' + ACTIVE, this.element);
        this.selectGivenNodes(sNodes);
    };
    TreeView.prototype.doGivenAction = function (nodes, selector, toExpand) {
        for (var i = 0, len = nodes.length; i < len; i++) {
            var liEle = this.getElement(nodes[i]);
            if (isNullOrUndefined(liEle)) {
                continue;
            }
            var icon = select('.' + selector, select('.' + TEXTWRAP, liEle));
            if (!isNullOrUndefined(icon)) {
                toExpand ? this.expandAction(liEle, icon, null) : this.collapseNode(liEle, icon, null);
            }
        }
    };
    TreeView.prototype.addGivenNodes = function (nodes, dropLi, index, isRemote) {
        var level = dropLi ? parseFloat(dropLi.getAttribute('aria-level')) + 1 : 1;
        if (isRemote) {
            this.updateMapper(level);
        }
        var li = ListBase.createListItemFromJson(nodes, this.listBaseOption, level);
        var dropUl = dropLi ? this.expandParent(dropLi) : select('.' + PARENTITEM, this.element);
        var refNode = dropUl.childNodes[index];
        for (var i = 0; i < li.length; i++) {
            dropUl.insertBefore(li[i], refNode);
        }
        this.finalizeNode(dropUl);
    };
    TreeView.prototype.updateMapper = function (level) {
        var mapper = (level === 1) ? this.fields : this.getChildFields(this.fields, level - 1, 1);
        var prop = this.getActualProperties(mapper);
        this.listBaseOption.fields = prop;
        this.listBaseOption.fields.url = prop.navigateUrl;
    };
    TreeView.prototype.doDisableAction = function (nodes) {
        for (var i = 0, len = nodes.length; i < len; i++) {
            var liEle = this.getElement(nodes[i]);
            if (isNullOrUndefined(liEle)) {
                continue;
            }
            liEle.setAttribute('aria-disabled', 'true');
            addClass([liEle], DISABLE);
        }
    };
    TreeView.prototype.doEnableAction = function (nodes) {
        for (var i = 0, len = nodes.length; i < len; i++) {
            var liEle = this.getElement(nodes[i]);
            if (isNullOrUndefined(liEle)) {
                continue;
            }
            liEle.removeAttribute('aria-disabled');
            removeClass([liEle], DISABLE);
        }
    };
    TreeView.prototype.wireInputEvents = function (inpEle) {
        EventHandler.add(inpEle, 'blur', this.inputFocusOut, this);
    };
    TreeView.prototype.wireEditingEvents = function (toBind) {
        if (toBind) {
            var proxy_1 = this;
            if (Browser.isIos) {
                this.touchEditObj = new Touch(this.element, {
                    doubleTap: function (e) {
                        e.originalEvent.preventDefault();
                        proxy_1.editingHandler(e.originalEvent);
                    }
                });
            }
            else {
                EventHandler.add(this.element, 'dblclick', this.editingHandler, this);
            }
        }
        else {
            if (Browser.isIos && this.touchEditObj) {
                this.touchEditObj.destroy();
            }
            else {
                EventHandler.remove(this.element, 'dblclick', this.editingHandler);
            }
        }
    };
    TreeView.prototype.wireClickEvent = function (toBind) {
        if (toBind) {
            var proxy_2 = this;
            if (Browser.isIos) {
                this.touchClickObj = new Touch(this.element, {
                    tap: function (e) {
                        proxy_2.clickHandler(e.originalEvent);
                    }
                });
            }
            else {
                EventHandler.add(this.element, 'click', this.clickHandler, this);
            }
        }
        else {
            if (Browser.isIos && this.touchClickObj) {
                this.touchClickObj.destroy();
            }
            else {
                EventHandler.remove(this.element, 'click', this.clickHandler);
            }
        }
    };
    TreeView.prototype.wireExpandOnEvent = function (toBind) {
        if (toBind) {
            var proxy_3 = this;
            if (Browser.isIos) {
                if (this.expandOnType === 'click') {
                    this.touchExpandObj = new Touch(this.element, {
                        tap: function (e) {
                            proxy_3.expandHandler(e.originalEvent);
                        }
                    });
                }
                else {
                    this.touchExpandObj = new Touch(this.element, {
                        doubleTap: function (e) {
                            proxy_3.expandHandler(e.originalEvent);
                        }
                    });
                }
            }
            else {
                EventHandler.add(this.element, this.expandOnType, this.expandHandler, this);
            }
        }
        else {
            if (Browser.isIos && this.touchExpandObj) {
                this.touchExpandObj.destroy();
            }
            else {
                EventHandler.remove(this.element, this.expandOnType, this.expandHandler);
            }
        }
    };
    TreeView.prototype.mouseDownHandler = function (e) {
        this.mouseDownStatus = true;
        if (e.ctrlKey && this.allowMultiSelection) {
            EventHandler.add(this.element, 'contextmenu ', this.preventContextMenu, this);
        }
    };
    
    TreeView.prototype.preventContextMenu = function (e) {
        e.preventDefault();
    };
    TreeView.prototype.wireEvents = function () {
        EventHandler.add(this.element, 'mousedown', this.mouseDownHandler, this);
        this.wireClickEvent(true);
        this.wireExpandOnEvent(true);
        EventHandler.add(this.element, 'focus', this.focusIn, this);
        EventHandler.add(this.element, 'blur', this.focusOut, this);
        EventHandler.add(this.element, 'mouseover', this.onMouseOver, this);
        EventHandler.add(this.element, 'mouseout', this.onMouseLeave, this);
        this.keyboardModule = new KeyboardEvents(this.element, {
            keyAction: this.keyActionHandler.bind(this),
            keyConfigs: this.keyConfigs,
            eventName: 'keydown',
        });
    };
    TreeView.prototype.unWireEvents = function () {
        EventHandler.remove(this.element, 'mousedown', this.mouseDownHandler);
        this.wireClickEvent(false);
        this.wireExpandOnEvent(false);
        EventHandler.remove(this.element, 'focus', this.focusIn);
        EventHandler.remove(this.element, 'blur', this.focusOut);
        EventHandler.remove(this.element, 'mouseover', this.onMouseOver);
        EventHandler.remove(this.element, 'mouseout', this.onMouseLeave);
        this.keyboardModule.destroy();
    };
    TreeView.prototype.parents = function (element, selector) {
        var matched = [];
        var el = element.parentNode;
        while (!isNullOrUndefined(el)) {
            if (matches(el, selector)) {
                matched.push(el);
            }
            el = el.parentNode;
        }
        return matched;
    };
    TreeView.prototype.isDescendant = function (parent, child) {
        var node = child.parentNode;
        while (!isNullOrUndefined(node)) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    TreeView.prototype.showSpinner = function (element) {
        addClass([element], LOAD);
        createSpinner({
            target: element,
            width: SPINNER_SIZE
        });
        showSpinner(element);
    };
    TreeView.prototype.hideSpinner = function (element) {
        hideSpinner(element);
        element.innerHTML = '';
        removeClass([element], LOAD);
    };
    TreeView.prototype.setCheckedNodes = function (nodes) {
        nodes = JSON.parse(JSON.stringify(nodes));
        this.uncheckAll();
        if (nodes.length > 0) {
            this.checkAll(nodes);
        }
    };
    /**
     * Called internally if any of the property value changed.
     * @param  {TreeView} newProp
     * @param  {TreeView} oldProp
     * @returns void
     * @private
     */
    TreeView.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'allowDragAndDrop':
                    this.setDragAndDrop(this.allowDragAndDrop);
                    break;
                case 'allowEditing':
                    this.wireEditingEvents(this.allowEditing);
                    break;
                case 'allowMultiSelection':
                    if (this.selectedNodes.length > 1) {
                        var sNode = this.getElement(this.selectedNodes[0]);
                        this.isLoaded = false;
                        this.removeSelectAll();
                        this.selectNode(sNode, null);
                        this.isLoaded = true;
                    }
                    this.setTouchPopup(this.allowMultiSelection);
                    this.setMultiSelect(this.allowMultiSelection);
                    this.addMultiSelect(this.allowMultiSelection);
                    break;
                case 'checkedNodes':
                    if (this.showCheckBox) {
                        this.checkedNodes = oldProp.checkedNodes;
                        this.setCheckedNodes(newProp.checkedNodes);
                    }
                    break;
                case 'cssClass':
                    this.setCssClass(oldProp.cssClass, newProp.cssClass);
                    break;
                case 'enableRtl':
                    this.setEnableRtl();
                    break;
                case 'expandOn':
                    this.wireExpandOnEvent(false);
                    this.setExpandOnType();
                    this.wireExpandOnEvent(true);
                    break;
                case 'fields':
                    this.listBaseOption.fields = this.fields.properties;
                    this.listBaseOption.fields.url = this.fields.navigateUrl;
                    this.reRenderNodes();
                    break;
                case 'fullRowSelect':
                    this.setFullRow(this.fullRowSelect);
                    this.addFullRow(this.fullRowSelect);
                    break;
                case 'nodeTemplate':
                    this.nodeTemplateFn = this.templateComplier(this.nodeTemplate);
                    this.reRenderNodes();
                    break;
                case 'selectedNodes':
                    this.removeSelectAll();
                    this.setProperties({ selectedNodes: newProp.selectedNodes }, true);
                    this.doSelectionAction();
                    break;
                case 'showCheckBox':
                    this.reRenderNodes();
                    break;
                case 'sortOrder':
                    this.reRenderNodes();
                    break;
            }
        }
    };
    /**
     * Removes the component from the DOM and detaches all its related event handlers. It also removes the attributes and classes.
     */
    TreeView.prototype.destroy = function () {
        this.element.removeAttribute('aria-activedescendant');
        this.element.removeAttribute('tabindex');
        this.unWireEvents();
        this.wireEditingEvents(false);
        this.rippleFn();
        this.rippleIconFn();
        this.setCssClass(this.cssClass, null);
        this.setDragAndDrop(false);
        this.setFullRow(false);
        this.setTouchPopup(false);
        this.element.innerHTML = '';
        _super.prototype.destroy.call(this);
    };
    /**
     * Adds the collection of TreeView nodes based on target and index position. If target node is not specified,
     * then the nodes are added as children of the given parentID or in the root level of TreeView.
     * @param  { Object[] } nodes - Specifies the array of JSON data that has to be added.
     * @param  { string | Element } target - Specifies ID of TreeView node/TreeView node as target element.
     * @param  { number } index - Specifies the index to place the newly added nodes in the target element.
     */
    TreeView.prototype.addNodes = function (nodes, target, index) {
        if (isNullOrUndefined(nodes)) {
            return;
        }
        var dropLi = this.getElement(target);
        nodes = this.getSortedData(nodes);
        if (this.fields.dataSource instanceof DataManager) {
            this.addGivenNodes(nodes, dropLi, index, true);
        }
        else if (this.dataType === 2) {
            this.addGivenNodes(nodes, dropLi, index);
        }
        else {
            if (dropLi) {
                this.addGivenNodes(nodes, dropLi, index);
            }
            else {
                for (var i = 0; i < nodes.length; i++) {
                    var pid = nodes[i][this.fields.parentID];
                    dropLi = pid ? this.getElement(pid.toString()) : pid;
                    this.addGivenNodes([nodes[i]], dropLi, index);
                }
            }
        }
    };
    /**
     * Checks all the unchecked nodes. You can also check specific nodes by passing array of unchecked nodes
     * as argument to this method.
     * @param  {string[] | Element[]} nodes - Specifies the array of TreeView nodes ID/array of TreeView node.
     */
    TreeView.prototype.checkAll = function (nodes) {
        if (this.showCheckBox) {
            this.doCheckBoxAction(nodes, true);
        }
    };
    /**
     * Collapses all the expanded TreeView nodes. You can collapse specific nodes by passing array of nodes as argument to this method.
     * You can also collapse all the nodes excluding the hidden nodes by setting **excludeHiddenNodes** to true. If you want to collapse
     * a specific level of nodes, set **level** as argument to collapseAll method.
     * @param  {string[] | Element[]} nodes - Specifies the array of TreeView nodes ID/ array of TreeView node.
     * @param  {number} level - TreeView nodes will collapse up to the given level.
     * @param  {boolean} excludeHiddenNodes - Whether or not to exclude hidden nodes of TreeView when collapsing all nodes.
     */
    TreeView.prototype.collapseAll = function (nodes, level, excludeHiddenNodes) {
        if (!isNullOrUndefined(nodes)) {
            this.doGivenAction(nodes, COLLAPSIBLE, false);
        }
        else {
            if (level > 0) {
                this.collapseByLevel(select('.' + PARENTITEM, this.element), level, excludeHiddenNodes);
            }
            else {
                this.collapseAllNodes(excludeHiddenNodes);
            }
        }
    };
    /**
     * Disables the collection of nodes by passing the ID of nodes or node elements in the array.
     * @param  {string[] | Element[]} nodes - Specifies the array of TreeView nodes ID/array of TreeView nodes.
     */
    TreeView.prototype.disableNodes = function (nodes) {
        if (!isNullOrUndefined(nodes)) {
            this.doDisableAction(nodes);
        }
    };
    /**
     * Enables the collection of disabled nodes by passing the ID of nodes or node elements in the array.
     * @param  {string[] | Element[]} nodes - Specifies the array of TreeView nodes ID/array of TreeView nodes.
     */
    TreeView.prototype.enableNodes = function (nodes) {
        if (!isNullOrUndefined(nodes)) {
            this.doEnableAction(nodes);
        }
    };
    /**
     * Ensures the node visibility and brings into view if the node is invisible by specifying the node's ID or node element.
     * The TreeView will expand and scroll to the specific node to bring it to visibility.
     * @param  {string | Element} node - Specifies ID of TreeView node/TreeView nodes.
     */
    TreeView.prototype.ensureVisible = function (node) {
        var liEle = this.getElement(node);
        if (isNullOrUndefined(liEle)) {
            return;
        }
        var parents = this.parents(liEle, '.' + LISTITEM);
        this.expandAll(parents);
        setTimeout(function () { liEle.scrollIntoView(true); }, 450);
    };
    /**
     * Expands all the collapsed TreeView nodes. You can expand the specific nodes by passing the array of collapsed nodes
     * as argument to this method. You can also expand all the collapsed nodes by excluding the hidden nodes by setting
     * **excludeHiddenNodes** to true to this method. To expand a specific level of nodes, set **level** as argument to expandAll method.
     * @param  {string[] | Element[]} nodes - Specifies the array of TreeView nodes ID/array of TreeView nodes.
     * @param  {number} level - TreeView nodes will expand up to the given level.
     * @param  {boolean} excludeHiddenNodes - Whether or not to exclude hidden nodes when expanding all nodes.
     */
    TreeView.prototype.expandAll = function (nodes, level, excludeHiddenNodes) {
        if (!isNullOrUndefined(nodes)) {
            this.doGivenAction(nodes, EXPANDABLE, true);
        }
        else {
            if (level > 0) {
                this.expandByLevel(select('.' + PARENTITEM, this.element), level, excludeHiddenNodes);
            }
            else {
                this.expandAllNodes(excludeHiddenNodes);
            }
        }
    };
    /**
     * Get the node as HTMLElement by passing its node ID.
     * @param  {string} node - Specify ID of TreeView node.
     * @hidden
     */
    TreeView.prototype.getNode = function (node) {
        return this.getElement(node);
    };
    /**
     * Get the node's data such as text, parentID, selected, isChecked, and expanded by passing the node element or it's ID.
     * @param  {string | Element} node - Specify ID of TreeView node/TreeView node.
     * @hidden
     */
    TreeView.prototype.getNodeDetails = function (node) {
        var ele = this.getElement(node);
        return this.getNodeData(ele);
    };
    /**
     * Moves the collection of nodes within the same TreeView based on target or its index position.
     * @param  {string[] | Element[]} sourceNodes - Specifies the array of TreeView nodes ID/array of TreeView node.
     * @param  {string | Element} target - Specifies ID of TreeView node/TreeView node as target element.
     * @param  {number} index - Specifies the index to place the moved nodes in the target element.
     */
    TreeView.prototype.moveNodes = function (sourceNodes, target, index) {
        var dropLi = this.getElement(target);
        if (isNullOrUndefined(dropLi)) {
            return;
        }
        for (var i = 0; i < sourceNodes.length; i++) {
            var dragLi = this.getElement(sourceNodes[i]);
            if (isNullOrUndefined(dragLi) || dropLi.isSameNode(dragLi) || this.isDescendant(dragLi, dropLi)) {
                continue;
            }
            this.dropAsChildNode(dragLi, dropLi, this, index);
        }
    };
    /**
     * Removes the collection of TreeView nodes by passing the array of node details as argument to this method.
     * @param  {string[] | Element[]} nodes - Specifies the array of TreeView nodes ID/array of TreeView node.
     */
    TreeView.prototype.removeNodes = function (nodes) {
        for (var i = 0, len = nodes.length; i < len; i++) {
            var liEle = this.getElement(nodes[i]);
            if (isNullOrUndefined(liEle)) {
                continue;
            }
            this.removeNode(liEle);
        }
    };
    /**
     * Replaces the text of the TreeView node with the given text.
     * @param  {string | Element} target - Specifies ID of TreeView node/TreeView node as target element.
     * @param  {string} newText - Specifies the new text of TreeView node.
     */
    TreeView.prototype.replaceText = function (target, newText) {
        if (isNullOrUndefined(target) || isNullOrUndefined(newText) || !this.allowEditing) {
            return;
        }
        var liEle = this.getElement(target);
        if (isNullOrUndefined(liEle)) {
            return;
        }
        var txtEle = select('.' + LISTTEXT, liEle);
        txtEle.childNodes[0].nodeValue = newText;
    };
    /**
     * Unchecks all the checked nodes. You can also uncheck the specific nodes by passing array of checked nodes
     * as argument to this method.
     * @param  {string[] | Element[]} nodes - Specifies the array of TreeView nodes ID/array of TreeView node.
     */
    TreeView.prototype.uncheckAll = function (nodes) {
        if (this.showCheckBox) {
            this.doCheckBoxAction(nodes, false);
        }
    };
    __decorate$5([
        Property(false)
    ], TreeView.prototype, "allowDragAndDrop", void 0);
    __decorate$5([
        Property(false)
    ], TreeView.prototype, "allowEditing", void 0);
    __decorate$5([
        Property(false)
    ], TreeView.prototype, "allowMultiSelection", void 0);
    __decorate$5([
        Complex({}, NodeAnimationSettings)
    ], TreeView.prototype, "animation", void 0);
    __decorate$5([
        Property()
    ], TreeView.prototype, "checkedNodes", void 0);
    __decorate$5([
        Property('')
    ], TreeView.prototype, "cssClass", void 0);
    __decorate$5([
        Property(false)
    ], TreeView.prototype, "enablePersistence", void 0);
    __decorate$5([
        Property(false)
    ], TreeView.prototype, "enableRtl", void 0);
    __decorate$5([
        Property('auto')
    ], TreeView.prototype, "expandOn", void 0);
    __decorate$5([
        Complex({}, FieldsSettings)
    ], TreeView.prototype, "fields", void 0);
    __decorate$5([
        Property(true)
    ], TreeView.prototype, "fullRowSelect", void 0);
    __decorate$5([
        Property()
    ], TreeView.prototype, "nodeTemplate", void 0);
    __decorate$5([
        Property()
    ], TreeView.prototype, "selectedNodes", void 0);
    __decorate$5([
        Property('None')
    ], TreeView.prototype, "sortOrder", void 0);
    __decorate$5([
        Property(false)
    ], TreeView.prototype, "showCheckBox", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "created", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "dataBound", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "drawNode", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "destroyed", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "keyPress", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeChecked", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeChecking", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeClicked", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeCollapsed", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeCollapsing", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeDragging", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeDragStart", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeDragStop", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeDropped", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeEdited", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeEditing", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeExpanded", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeExpanding", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeSelected", void 0);
    __decorate$5([
        Event()
    ], TreeView.prototype, "nodeSelecting", void 0);
    TreeView = __decorate$5([
        NotifyPropertyChanges
    ], TreeView);
    return TreeView;
}(Component));

/**
 * TreeView modules
 */

/**
 * Navigation all modules
 */

export { HScroll, Item, Toolbar, AccordionActionSettings, AccordionAnimationSettings, AccordionItem, Accordion, MenuItem, ContextMenu, TabActionSettings, TabAnimationSettings, Header, TabItem, Tab, FieldsSettings, ActionSettings, NodeAnimationSettings, TreeView };
//# sourceMappingURL=ej2-navigations.es5.js.map