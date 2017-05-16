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
define(["require", "exports", "@syncfusion/ej2-base/component", "@syncfusion/ej2-base/touch", "@syncfusion/ej2-base/event-handler", "@syncfusion/ej2-base/notify-property-change", "@syncfusion/ej2-base/dom", "@syncfusion/ej2-base/util", "@syncfusion/ej2-base/browser"], function (require, exports, component_1, touch_1, event_handler_1, notify_property_change_1, dom_1, util_1, browser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CLASSNAMES = {
        ROOT: 'e-hscroll',
        RTL: 'e-rtl',
        HSCROLLBAR: 'e-hscroll-bar',
        HSCROLLCON: 'e-hscroll-content',
        NAVARROW: 'e-nav-arrow',
        NAVRIGHTARROW: 'e-nav-right-arrow',
        NAVLEFTARROW: 'e-nav-left-arrow',
        HSCROLLNAV: 'e-hor-nav'
    };
    var HScroll = (function (_super) {
        __extends(HScroll, _super);
        function HScroll(options, element) {
            return _super.call(this, options, element) || this;
        }
        HScroll.prototype.preRender = function () {
            this.initialize();
            if (this.element.id === '') {
                this.element.id = util_1.getUniqueID('hscroll');
                this.uniqueId = true;
            }
            this.element.style.display = 'block';
            if (this.enableRtl) {
                this.element.classList.add(CLASSNAMES.RTL);
            }
        };
        HScroll.prototype.render = function () {
            this.createNavigationIcon(this.element, CLASSNAMES.NAVRIGHTARROW + ' ' + CLASSNAMES.NAVARROW);
        };
        HScroll.prototype.initialize = function () {
            var scrollEle = dom_1.createElement('div', { className: CLASSNAMES.HSCROLLCON });
            var scrollDiv = dom_1.createElement('div', { className: CLASSNAMES.HSCROLLBAR });
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
        HScroll.prototype.getModuleName = function () {
            return 'hScroll';
        };
        HScroll.prototype.destroy = function () {
            var ele = this.element;
            ele.style.display = '';
            ele.classList.remove(CLASSNAMES.ROOT);
            var nav = ele.querySelector('#' + ele.id + '_nav.e-' + ele.id + '_nav');
            event_handler_1.EventHandler.remove(nav, 'click', this.clickEventHandler);
            for (var _i = 0, _a = [].slice.call(this.scrollItems.children); _i < _a.length; _i++) {
                var elem = _a[_i];
                ele.appendChild(elem);
            }
            if (this.uniqueId) {
                this.element.removeAttribute('id');
            }
            dom_1.detach(this.scrollEle);
            nav.parentElement.removeChild(nav);
            event_handler_1.EventHandler.remove(this.scrollEle, 'scroll', this.scrollEventHandler);
            this.touchModule.destroy();
            this.touchModule = null;
            _super.prototype.destroy.call(this);
        };
        HScroll.prototype.createNavigationIcon = function (element, classList) {
            var id = element.id.concat('_nav');
            var className = 'e-' + element.id.concat('_nav ' + CLASSNAMES.HSCROLLNAV);
            var nav = dom_1.createElement('div', { id: id, className: className });
            var navItem = dom_1.createElement('div', { className: classList + ' e-icons' });
            nav.appendChild(navItem);
            nav.setAttribute('tabindex', '0');
            element.insertBefore(nav, element.firstChild);
            event_handler_1.EventHandler.add(this.scrollEle, 'scroll', this.scrollEventHandler, this);
            var tchObj = new touch_1.Touch(nav, { taphold: this.tabHoldHandler.bind(this) });
            if (browser_1.Browser.info.name === 'msie') {
                nav.classList.add('e-ie-align');
            }
            nav.addEventListener('mouseup', this.repeatScroll.bind(this));
            nav.addEventListener('touchend', this.repeatScroll.bind(this));
            nav.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            });
            event_handler_1.EventHandler.add(nav, 'click', this.clickEventHandler, this);
            this.touchModule = new touch_1.Touch(element, { scroll: this.touchScrollHandler.bind(this) });
        };
        HScroll.prototype.repeatScroll = function (e) {
            clearInterval(this.timeout);
        };
        HScroll.prototype.tabHoldHandler = function (e) {
            var _this = this;
            var trgt = e.originalEvent.target;
            trgt = trgt.classList.contains(CLASSNAMES.HSCROLLNAV) ? trgt.firstElementChild : trgt;
            var timeoutFun = function () {
                var element = _this.scrollEle;
                var scrollDis = 10;
                _this.contentScrolling(scrollDis, trgt);
            };
            this.timeout = setInterval(function () {
                timeoutFun();
            }, 50);
        };
        HScroll.prototype.contentScrolling = function (scrollDis, trgt) {
            var element = this.scrollEle;
            var classList = trgt.classList;
            if (classList.contains(CLASSNAMES.HSCROLLNAV)) {
                classList = this.element.querySelector('.' + CLASSNAMES.NAVARROW).classList;
            }
            if (this.element.classList.contains(CLASSNAMES.RTL) && browser_1.Browser.info.name === 'mozilla') {
                scrollDis = -scrollDis;
            }
            if (!this.element.classList.contains(CLASSNAMES.RTL) || browser_1.Browser.info.name === 'mozilla') {
                if (classList.contains(CLASSNAMES.NAVRIGHTARROW)) {
                    element.scrollLeft = element.scrollLeft + scrollDis;
                }
                else {
                    element.scrollLeft = element.scrollLeft - scrollDis;
                }
            }
            else {
                if (classList.contains(CLASSNAMES.NAVLEFTARROW)) {
                    element.scrollLeft = element.scrollLeft + scrollDis;
                }
                else {
                    element.scrollLeft = element.scrollLeft - scrollDis;
                }
            }
        };
        HScroll.prototype.clickEventHandler = function (e) {
            this.contentScrolling(this.scrollStep, e.target);
        };
        HScroll.prototype.touchScrollHandler = function (e) {
            var ele = this.scrollEle;
            var distance;
            distance = e.distanceX;
            if (e.scrollDirection === 'Left') {
                ele.scrollLeft = ele.scrollLeft + distance;
            }
            else {
                ele.scrollLeft = ele.scrollLeft - distance;
            }
        };
        HScroll.prototype.scrollEventHandler = function (e) {
            var target = e.target;
            var width = target.offsetWidth;
            var navElement = this.element.firstChild;
            var scrollVal = (this.element.clientWidth + this.element.scrollLeft - navElement.offsetWidth);
            if (navElement.firstChild) {
                var navClassList = navElement.firstChild.classList;
                var scrollLeft = target.scrollLeft;
                if (scrollLeft <= 0) {
                    scrollLeft = -scrollLeft;
                }
                if (scrollLeft === 0) {
                    if (!this.element.classList.contains(CLASSNAMES.RTL) || browser_1.Browser.info.name === 'mozilla') {
                        navClassList.add(CLASSNAMES.NAVRIGHTARROW);
                        navClassList.remove(CLASSNAMES.NAVLEFTARROW);
                    }
                    else {
                        navClassList.add(CLASSNAMES.NAVLEFTARROW);
                        navClassList.remove(CLASSNAMES.NAVRIGHTARROW);
                    }
                }
                else if (Math.ceil(width + scrollLeft) >= target.scrollWidth) {
                    if (!this.element.classList.contains(CLASSNAMES.RTL) || browser_1.Browser.info.name === 'mozilla') {
                        navClassList.add(CLASSNAMES.NAVLEFTARROW);
                        navClassList.remove(CLASSNAMES.NAVRIGHTARROW);
                    }
                    else {
                        navClassList.add(CLASSNAMES.NAVRIGHTARROW);
                        navClassList.remove(CLASSNAMES.NAVLEFTARROW);
                    }
                }
                else {
                    return;
                }
                return;
            }
            else {
                return;
            }
        };
        HScroll.prototype.onPropertyChanged = function (newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'scrollStep':
                        break;
                    case 'enableRtl':
                        newProp.enableRtl ? this.element.classList.add(CLASSNAMES.RTL) : this.element.classList.remove(CLASSNAMES.RTL);
                        break;
                }
            }
        };
        return HScroll;
    }(component_1.Component));
    __decorate([
        notify_property_change_1.Property(40)
    ], HScroll.prototype, "scrollStep", void 0);
    HScroll = __decorate([
        notify_property_change_1.NotifyPropertyChanges
    ], HScroll);
    exports.HScroll = HScroll;
});
