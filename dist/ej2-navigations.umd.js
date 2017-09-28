/*!
*  filename: ej2-navigations.umd.js
*  version : 1.0.19
*  Copyright Syncfusion Inc. 2001 - 2017. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@syncfusion/ej2-base"), require("@syncfusion/ej2-popups"), require("@syncfusion/ej2-buttons"));
	else if(typeof define === 'function' && define.amd)
		define(["@syncfusion/ej2-base", "@syncfusion/ej2-popups", "@syncfusion/ej2-buttons"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@syncfusion/ej2-base"), require("@syncfusion/ej2-popups"), require("@syncfusion/ej2-buttons")) : factory(root["@syncfusion/ej2-base"], root["@syncfusion/ej2-popups"], root["@syncfusion/ej2-buttons"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, index_1, index_2) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(index_1);
	    __export(index_2);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, h_scroll_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(h_scroll_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	    var HScroll = (function (_super) {
	        __extends(HScroll, _super);
	        function HScroll(options, element) {
	            return _super.call(this, options, element) || this;
	        }
	        HScroll.prototype.preRender = function () {
	            this.browser = ej2_base_2.Browser.info.name;
	            this.browserCheck = this.browser === 'mozilla';
	            this.isDevice = ej2_base_2.Browser.isDevice;
	            var element = this.element;
	            this.ieCheck = this.browser === 'edge' || this.browser === 'msie';
	            this.initialize();
	            if (element.id === '') {
	                element.id = ej2_base_1.getUniqueID('hscroll');
	                this.uniqueId = true;
	            }
	            element.style.display = 'block';
	            if (this.enableRtl) {
	                element.classList.add(CLS_RTL);
	            }
	        };
	        HScroll.prototype.render = function () {
	            this.touchModule = new ej2_base_1.Touch(this.element, { scroll: this.touchHandler.bind(this) });
	            if (!this.isDevice) {
	                this.createNavIcon(this.element);
	                ej2_base_1.EventHandler.add(this.scrollEle, 'scroll', this.scrollHandler, this);
	            }
	            else {
	                this.element.classList.add(CLS_DEVICE);
	            }
	        };
	        HScroll.prototype.initialize = function () {
	            var scrollEle = ej2_base_2.createElement('div', { className: CLS_HSCROLLCON });
	            var scrollDiv = ej2_base_2.createElement('div', { className: CLS_HSCROLLBAR });
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
	        HScroll.prototype.getModuleName = function () {
	            return 'hScroll';
	        };
	        HScroll.prototype.destroy = function () {
	            var ele = this.element;
	            ele.style.display = '';
	            ele.classList.remove(CLS_ROOT);
	            var nav = ej2_base_1.selectAll('#' + ele.id + '_nav.e-' + ele.id + '_nav');
	            for (var _i = 0, _a = [].slice.call(this.scrollItems.children); _i < _a.length; _i++) {
	                var elem = _a[_i];
	                ele.appendChild(elem);
	            }
	            if (this.uniqueId) {
	                this.element.removeAttribute('id');
	            }
	            ej2_base_2.detach(this.scrollEle);
	            if (nav.length > 0) {
	                ej2_base_2.detach(nav[0]);
	                ej2_base_2.detach(nav[1]);
	            }
	            ej2_base_1.EventHandler.remove(this.scrollEle, 'scroll', this.scrollHandler);
	            this.touchModule.destroy();
	            this.touchModule = null;
	            _super.prototype.destroy.call(this);
	        };
	        HScroll.prototype.createNavIcon = function (element) {
	            var id = element.id.concat('_nav');
	            var clsRight = 'e-' + element.id.concat('_nav ' + CLS_HSCROLLNAV + ' ' + CLS_HSCROLLNAVRIGHT);
	            var nav = ej2_base_2.createElement('div', { id: id, className: clsRight });
	            nav.setAttribute('aria-disabled', 'false');
	            var navItem = ej2_base_2.createElement('div', { className: CLS_NAVRIGHTARROW + ' ' + CLS_NAVARROW + ' e-icons' });
	            var clsLeft = 'e-' + element.id.concat('_nav ' + CLS_HSCROLLNAV + ' ' + CLS_HSCROLLNAVLEFT);
	            var navEle = ej2_base_2.createElement('div', { id: id, className: clsLeft + ' ' + CLS_DISABLE });
	            navEle.setAttribute('aria-disabled', 'true');
	            var navLeftItem = ej2_base_2.createElement('div', { className: CLS_NAVLEFTARROW + ' ' + CLS_NAVARROW + ' e-icons' });
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
	                new ej2_base_1.Touch(el, { tapHold: _this.tabHoldHandler.bind(_this), tapHoldThreshold: 500 });
	                el.addEventListener('keydown', _this.onKeyPress.bind(_this));
	                el.addEventListener('keyup', _this.onKeyUp.bind(_this));
	                el.addEventListener('mouseup', _this.repeatScroll.bind(_this));
	                el.addEventListener('touchend', _this.repeatScroll.bind(_this));
	                el.addEventListener('contextmenu', function (e) {
	                    e.preventDefault();
	                });
	                ej2_base_1.EventHandler.add(el, 'click', _this.clickEventHandler, _this);
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
	            var classList = trgt.classList;
	            if (classList.contains(CLS_HSCROLLNAV)) {
	                classList = trgt.querySelector('.' + CLS_NAVARROW).classList;
	            }
	            if (this.contains(rootEle, CLS_RTL) && this.browserCheck) {
	                scrollDis = -scrollDis;
	            }
	            var scrlLeft = element.scrollLeft;
	            if ((!this.contains(rootEle, CLS_RTL) || this.browserCheck) || this.ieCheck) {
	                if (classList.contains(CLS_NAVRIGHTARROW)) {
	                    element.scrollLeft = scrlLeft + scrollDis;
	                }
	                else {
	                    element.scrollLeft = scrlLeft - scrollDis;
	                }
	            }
	            else {
	                if (classList.contains(CLS_NAVLEFTARROW)) {
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
	        return HScroll;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_2.Property(40)
	    ], HScroll.prototype, "scrollStep", void 0);
	    HScroll = __decorate([
	        ej2_base_2.NotifyPropertyChanges
	    ], HScroll);
	    exports.HScroll = HScroll;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, toolbar_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(toolbar_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(6), __webpack_require__(6), __webpack_require__(7), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, ej2_base_5, ej2_popups_1, ej2_popups_2, ej2_buttons_1, h_scroll_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	    }(ej2_base_5.ChildProperty));
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
	    __decorate([
	        ej2_base_1.Property('left')
	    ], Item.prototype, "align", void 0);
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
	            ej2_base_1.EventHandler.add(this.element, 'click', this.clickHandler, this);
	            window.addEventListener('resize', this.resize.bind(this));
	            this.keyModule = new ej2_base_2.KeyboardEvents(this.element, {
	                keyAction: this.keyActionHandler.bind(this),
	                keyConfigs: this.keyConfigs
	            });
	            ej2_base_1.EventHandler.add(this.element, 'keydown', this.docKeyDown, this);
	            this.element.setAttribute('tabIndex', '0');
	        };
	        Toolbar.prototype.docKeyDown = function (e) {
	            if (e.keyCode === 9 && e.target.classList.contains('e-hor-nav') === true && ej2_base_2.isVisible(this.popObj.element)) {
	                this.popObj.hide({ name: 'SlideUp', duration: 100 });
	            }
	            if ((e.keyCode === 40 || e.keyCode === 38) && !ej2_base_4.isNullOrUndefined(this.popObj) && ej2_base_2.isVisible(this.popObj.element)) {
	                e.preventDefault();
	            }
	        };
	        Toolbar.prototype.unwireEvents = function () {
	            ej2_base_1.EventHandler.remove(this.element, 'click', this.clickHandler);
	            this.destroyHScroll();
	            this.keyModule.destroy();
	            ej2_base_1.EventHandler.remove(document, 'scroll', this.docEvent);
	            ej2_base_1.EventHandler.remove(this.element, 'keydown', this.docKeyDown);
	            ej2_base_1.EventHandler.remove(document, 'click', this.docEvent);
	        };
	        Toolbar.prototype.clearProperty = function () {
	            this.tbarEle = [];
	            this.tbarAlgEle = { lefts: [], centers: [], rights: [] };
	        };
	        Toolbar.prototype.docEvent = function (e) {
	            var popEle = ej2_base_2.closest(e.target, '.e-popup');
	            if (this.popObj && ej2_base_2.isVisible(this.popObj.element) && !popEle) {
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
	                ej2_base_2.detach(el);
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
	            if (tbrNavChk && this.popObj && ej2_base_2.isVisible(this.popObj.element)) {
	                clst = this.popObj.element.querySelector('.' + CLS_ITEM);
	            }
	            else if (this.element === trgt || tbrNavChk) {
	                clst = this.element.querySelector('.' + CLS_ITEM);
	            }
	            else {
	                clst = ej2_base_2.closest(trgt, '.' + CLS_ITEM);
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
	                        var popupCheck = ej2_base_2.closest(clst, '.e-popup');
	                        if (popupCheck) {
	                            if (ej2_base_2.isVisible(this.popObj.element)) {
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
	                    if (popObj && ej2_base_2.closest(trgt, '.e-popup')) {
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
	                    if (popObj && !ej2_base_2.isVisible(popObj.element)) {
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
	                if (!ej2_base_4.isNullOrUndefined(elem) && elem.children.length > 0) {
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
	            var popupNav = ej2_base_2.closest(trgt, ('.' + CLS_TBARNAV));
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
	            var clst = ej2_base_2.closest(e.target, '.' + CLS_ITEM);
	            if ((ej2_base_4.isNullOrUndefined(clst) || clst.classList.contains(CLS_DISABLE)) && !popupNav.classList.contains(CLS_TBARNAV)) {
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
	            if (ej2_base_2.isVisible(popObj.element)) {
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
	            var width = ej2_base_4.formatUnit(this.width);
	            var height = ej2_base_4.formatUnit(this.height);
	            if (ej2_base_5.Browser.info.name !== 'msie' || this.height !== 'auto') {
	                ej2_base_3.setStyleAttribute(this.element, { 'height': height });
	            }
	            ej2_base_3.setStyleAttribute(this.element, { 'width': width });
	            var ariaAttr = {
	                'role': 'toolbar', 'aria-disabled': 'false', 'aria-haspopup': 'false', 'aria-orientation': 'horizontal',
	            };
	            ej2_base_2.attributes(this.element, ariaAttr);
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
	                this.scrollModule = new h_scroll_1.HScroll({ scrollStep: 50, enableRtl: this.enableRtl }, innerItems[0]);
	                this.remove(this.scrollModule.element, CLS_TBARPOS);
	                ej2_base_3.setStyleAttribute(this.element, { overflow: 'hidden' });
	            }
	        };
	        Toolbar.prototype.itemWidthCal = function (items) {
	            var width = 0;
	            [].slice.call(ej2_base_3.selectAll('.' + CLS_ITEM), items).forEach(function (el) {
	                width += el.offsetWidth;
	            });
	            return width;
	        };
	        Toolbar.prototype.checkOverflow = function (element, innerItem) {
	            if (ej2_base_4.isNullOrUndefined(element) || ej2_base_4.isNullOrUndefined(innerItem)) {
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
	                            this.createPopupEle(ele, [].slice.call(ej2_base_3.selectAll('.' + CLS_ITEMS + ' .' + CLS_ITEM, ele)));
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
	            var nodes = ej2_base_3.selectAll('.' + CLS_TBAROVERFLOW, ele);
	            var nodeIndex = 0;
	            var poppedEle = [].slice.call(ej2_base_3.selectAll('.' + CLS_POPUP, element.querySelector('.' + CLS_ITEMS)));
	            var nodePri = 0;
	            poppedEle.forEach(function (el, index) {
	                nodes = ej2_base_3.selectAll('.' + CLS_TBAROVERFLOW, ele);
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
	                ej2_base_3.setStyleAttribute(el, { display: '', height: eleHeight + 'px' });
	            });
	            popupPri.forEach(function (el) {
	                ele.appendChild(el);
	            });
	            var tbarEle = ej2_base_3.selectAll('.' + CLS_ITEM, element.querySelector('.' + CLS_ITEMS));
	            for (var i = tbarEle.length - 1; i >= 0; i--) {
	                var tbarElement = tbarEle[i];
	                if (tbarElement.classList.contains(CLS_SEPARATOR)) {
	                    ej2_base_3.setStyleAttribute(tbarElement, { display: 'none' });
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
	                ele = ej2_base_3.createElement('div', { id: element.id + '_popup', className: CLS_POPUPCLASS });
	            }
	            this.pushingPoppedEle(this, popupPri, ele, eleHeight);
	            this.popupInit(element, ele);
	        };
	        Toolbar.prototype.popupInit = function (element, ele) {
	            if (!this.popObj) {
	                element.appendChild(ele);
	                ej2_base_3.setStyleAttribute(this.element, { overflow: '' });
	                var popup = new ej2_popups_1.Popup(null, {
	                    relateTo: this.element,
	                    offsetY: (element.offsetHeight),
	                    enableRtl: this.enableRtl,
	                    open: this.popupOpen.bind(this),
	                    close: this.popupClose,
	                    position: this.enableRtl ? { X: 'left', Y: 'top' } : { X: 'right', Y: 'top' }
	                });
	                popup.appendTo(ele);
	                ej2_base_1.EventHandler.add(document, 'scroll', this.docEvent.bind(this));
	                ej2_base_1.EventHandler.add(document, 'click ', this.docEvent.bind(this));
	                popup.element.style.maxHeight = popup.element.offsetHeight + 'px';
	                popup.hide();
	                this.popObj = popup;
	                this.element.setAttribute('aria-haspopup', 'true');
	            }
	            else {
	                var popupEle = this.popObj.element;
	                ej2_base_3.setStyleAttribute(popupEle, { maxHeight: '', display: 'block' });
	                ej2_base_3.setStyleAttribute(popupEle, { maxHeight: popupEle.offsetHeight + 'px', display: '' });
	            }
	        };
	        Toolbar.prototype.popupOpen = function (e) {
	            var popObj = this.popObj;
	            var popupEle = this.popObj.element;
	            var toolEle = this.popObj.element.parentElement;
	            var popupNav = toolEle.querySelector('.' + CLS_TBARNAV);
	            ej2_base_3.setStyleAttribute(popObj.element, { height: 'auto', maxHeight: '' });
	            popObj.element.style.maxHeight = popObj.element.clientHeight + 'px';
	            var popupElePos = popupEle.offsetTop + popupEle.offsetHeight + ej2_popups_2.calculatePosition(toolEle).top;
	            var popIcon = popupNav.firstElementChild;
	            popupNav.classList.add(CLS_TBARNAVACT);
	            ej2_base_2.classList(popIcon, [CLS_POPUPICON], [CLS_POPUPDOWN]);
	            var scrollVal = ej2_base_4.isNullOrUndefined(window.scrollY) ? 0 : window.scrollY;
	            if ((window.innerHeight + scrollVal) < popupElePos) {
	                var overflowHeight = (popupEle.offsetHeight - ((popupElePos - window.innerHeight - scrollVal) + 5));
	                popObj.height = overflowHeight + 'px';
	                ej2_base_3.setStyleAttribute(popObj.element, { maxHeight: overflowHeight + 'px' });
	            }
	        };
	        Toolbar.prototype.popupClose = function (e) {
	            var element = this.element.parentElement;
	            var popupNav = element.querySelector('.' + CLS_TBARNAV);
	            var popIcon = popupNav.firstElementChild;
	            popupNav.classList.remove(CLS_TBARNAVACT);
	            ej2_base_2.classList(popIcon, [CLS_POPUPDOWN], [CLS_POPUPICON]);
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
	                                ej2_base_3.setStyleAttribute(sepEle, { display: 'none' });
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
	                        ej2_base_3.setStyleAttribute(inEle[i], { display: 'none', minWidth: inEle[i].offsetWidth + 'px' });
	                        itemPopCount++;
	                    }
	                    else {
	                        eleWidth -= (inEle[i].offsetWidth + (mrgn));
	                    }
	                }
	            }
	            if (pre) {
	                var popedEle = ej2_base_3.selectAll('.' + CLS_ITEM + ':not(.' + CLS_POPUP + ')', this.element);
	                this.checkPriority(ele, popedEle, eleWid, false);
	            }
	        };
	        Toolbar.prototype.createPopupIcon = function (element) {
	            var id = element.id.concat('_nav');
	            var className = 'e-' + element.id.concat('_nav ' + CLS_POPUPNAV);
	            var nav = ej2_base_3.createElement('div', { id: id, className: className });
	            if (ej2_base_5.Browser.info.name === 'msie' || ej2_base_5.Browser.info.name === 'edge') {
	                nav.classList.add('e-ie-align');
	            }
	            var navItem = ej2_base_3.createElement('div', { className: CLS_POPUPDOWN + ' e-icons' });
	            nav.appendChild(navItem);
	            nav.setAttribute('tabindex', '0');
	            element.appendChild(nav);
	        };
	        Toolbar.prototype.tbarPriRef = function (inEle, indx, sepPri, el, des, elWid, wid, ig) {
	            var ignoreCount = ig;
	            var popEle = this.popObj.element;
	            var query = '.' + CLS_ITEM + ':not(.' + CLS_SEPARATOR + '):not(.' + CLS_TBAROVERFLOW + ')';
	            var priEleCnt = ej2_base_3.selectAll('.' + CLS_POPUP + ':not(.' + CLS_TBAROVERFLOW + ')', popEle).length;
	            var checkClass = function (ele, val) {
	                return ele.classList.contains(val);
	            };
	            if (ej2_base_3.selectAll(query, inEle).length === 0) {
	                var eleSep = inEle.children[indx - (indx - sepPri) - 1];
	                var ignoreCheck = (!ej2_base_4.isNullOrUndefined(eleSep) && checkClass(eleSep, CLS_TBARIGNORE));
	                if ((!ej2_base_4.isNullOrUndefined(eleSep) && checkClass(eleSep, CLS_SEPARATOR) && !ej2_base_2.isVisible(eleSep)) || ignoreCheck) {
	                    var sepDisplay = 'none';
	                    eleSep.style.display = 'inherit';
	                    var eleSepWidth = eleSep.offsetWidth + (parseFloat(window.getComputedStyle(eleSep).marginRight) * 2);
	                    var prevSep = eleSep.previousElementSibling;
	                    if ((elWid + eleSepWidth) < wid || des) {
	                        inEle.insertBefore(el, inEle.children[(indx + ignoreCount) - (indx - sepPri)]);
	                        if (!ej2_base_4.isNullOrUndefined(prevSep)) {
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
	            if (ej2_base_4.isNullOrUndefined(popNav)) {
	                return;
	            }
	            innerEle.removeAttribute('style');
	            popupEle.style.display = 'block';
	            var width = ele.offsetWidth - (popNav.offsetWidth + innerEle.offsetWidth);
	            this.popupEleRefresh(width, popupEle, destroy);
	            popupEle.style.display = '';
	            if (popupEle.children.length === 0) {
	                ej2_base_2.detach(popNav);
	                this.popObj.destroy();
	                ej2_base_2.detach(this.popObj.element);
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
	                    if (!ej2_base_4.isNullOrUndefined(btnText) && el.classList.contains(CLS_TBARTEXT)) {
	                        btnText.style.display = 'none';
	                    }
	                    else if (!ej2_base_4.isNullOrUndefined(btnText) && el.classList.contains(CLS_POPUPTEXT)) {
	                        btnText.style.display = 'block';
	                    }
	                    btn.style.minWidth = '0%';
	                    elWidth = el.offsetWidth;
	                    btn.style.minWidth = '';
	                    if (!ej2_base_4.isNullOrUndefined(btnText)) {
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
	                        priEleCnt = ej2_base_3.selectAll('.' + CLS_TBAROVERFLOW, this_1.popObj.element).length;
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
	            if (ej2_base_4.isNullOrUndefined(item) || !item.classList.contains(CLS_TBARPOS)) {
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
	            if (ej2_base_4.isNullOrUndefined(item) || !item.classList.contains(CLS_TBARPOS)) {
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
	            alignDiv.push(ej2_base_3.createElement('div', { className: CLS_TBARLEFT }));
	            alignDiv.push(ej2_base_3.createElement('div', { className: CLS_TBARCENTER }));
	            alignDiv.push(ej2_base_3.createElement('div', { className: CLS_TBARRIGHT }));
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
	                    itemEleDom = ej2_base_3.createElement('div', { className: CLS_ITEMS });
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
	            if (ej2_base_4.isNullOrUndefined(isEnable)) {
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
	                isEnable ? ej2_base_2.removeClass(elements, CLS_DISABLE) : ej2_base_2.addClass(elements, CLS_DISABLE);
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
	            if (ej2_base_4.isNullOrUndefined(index)) {
	                index = 0;
	            }
	            items.forEach(function (e) {
	                if (!ej2_base_4.isNullOrUndefined(e.align) && e.align !== 'left' && itemAgn === 'left') {
	                    itemAgn = e.align;
	                }
	            });
	            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
	                var item = items_1[_i];
	                if (ej2_base_4.isNullOrUndefined(item.type)) {
	                    item.type = 'Button';
	                }
	                innerItems = ej2_base_3.selectAll('.' + CLS_ITEM, this.element);
	                item.align = itemAgn;
	                innerEle = this.renderSubComponent(item);
	                if (this.tbarEle.length >= index && innerItems.length > 0) {
	                    this.destroyMode();
	                    if (this.tbarAlign) {
	                        var algIndex = item.align[0] === 'l' ? 0 : item.align[0] === 'c' ? 1 : 2;
	                        var ele = void 0;
	                        ele = ej2_base_2.closest(innerItems[0], '.' + CLS_ITEMS).children[algIndex];
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
	            var innerItems = [].slice.call(ej2_base_3.selectAll('.' + CLS_ITEM, this.element));
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
	                        innerItems = ej2_base_3.selectAll('.' + CLS_ITEM, this.element);
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
	                ej2_base_2.detach(innerItems[index]);
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
	                        templateFn = ej2_base_4.compile(ele.outerHTML.trim());
	                        ej2_base_2.detach(ele);
	                    }
	                }
	                catch (e) {
	                    templateFn = ej2_base_4.compile(val);
	                }
	                if (!ej2_base_4.isNullOrUndefined(templateFn) && templateFn().length > 0) {
	                    [].slice.call(templateFn()).forEach(function (ele) {
	                        if (!ej2_base_4.isNullOrUndefined(ele.tagName)) {
	                            ele.style.display = '';
	                        }
	                        innerEle.appendChild(ele);
	                    });
	                }
	            }
	            else if (itemType === 'Input') {
	                var ele = ej2_base_3.createElement('input');
	                item.id ? (ele.id = item.id) : (ele.id = ej2_base_4.getUniqueID('tbr-ipt'));
	                innerEle.appendChild(ele);
	                eleObj.appendTo(ele);
	            }
	            this.add(innerEle, CLS_TEMPLATE);
	            this.tbarEle.push(innerEle);
	        };
	        Toolbar.prototype.buttonRendering = function (item, innerEle) {
	            var dom = ej2_base_3.createElement('button', { className: CLS_TBARBTN });
	            var textStr = item.text;
	            var iconCss;
	            var iconPos;
	            item.id ? (dom.id = item.id) : dom.id = ej2_base_4.getUniqueID('e-tbr-btn');
	            var btnTxt = ej2_base_3.createElement('div', { className: 'e-tbar-btn-text' });
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
	            new ej2_buttons_1.Button({ iconCss: iconCss, iconPosition: iconPos }, dom);
	            if (item.width) {
	                ej2_base_3.setStyleAttribute(dom, { 'width': ej2_base_4.formatUnit(item.width) });
	            }
	            return dom;
	        };
	        Toolbar.prototype.renderSubComponent = function (item) {
	            var innerEle;
	            var dom;
	            innerEle = ej2_base_3.createElement('div', { className: CLS_ITEM });
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
	            if (!ej2_base_4.isNullOrUndefined(this.activeEle)) {
	                this.activeEle.setAttribute('tabindex', '-1');
	            }
	            this.activeEle = curEle;
	            if (ej2_base_4.isNullOrUndefined(this.trgtEle) && !curEle.parentElement.classList.contains(CLS_TEMPLATE)) {
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
	                        ej2_base_3.setStyleAttribute(tEle, { 'width': ej2_base_4.formatUnit(newProp.width) });
	                        this.renderOverflowMode();
	                        if (this.popObj && wid < tEle.offsetWidth) {
	                            this.popupRefresh(this.popObj.element, false);
	                        }
	                        break;
	                    case 'height':
	                        ej2_base_3.setStyleAttribute(this.element, { 'height': ej2_base_4.formatUnit(newProp.height) });
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
	                        if (!ej2_base_4.isNullOrUndefined(this.scrollModule)) {
	                            newProp.enableRtl ? this.add(this.scrollModule.element, CLS_RTL) : this.remove(this.scrollModule.element, CLS_RTL);
	                        }
	                        if (!ej2_base_4.isNullOrUndefined(this.popObj)) {
	                            newProp.enableRtl ? this.add(this.popObj.element, CLS_RTL) : this.remove(this.popObj.element, CLS_RTL);
	                        }
	                        break;
	                }
	            }
	        };
	        return Toolbar;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_4.Collection([], Item)
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
	        ej2_base_5.NotifyPropertyChanges
	    ], Toolbar);
	    exports.Toolbar = Toolbar;
	    exports.toolbarBuilder = ej2_base_5.CreateBuilder(Toolbar);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwODRkNzAxZGNmY2QzNzQ3Nzg3NiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2gtc2Nyb2xsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xiYXIvdG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItcG9wdXBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN5bmNmdXNpb24vZWoyLWJ1dHRvbnNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7aUVDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztpRUNSRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQSxFQUFDOzs7Ozs7O0FDUEQ7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFtRSx1Q0FBdUM7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQTZELDRCQUE0QjtBQUN6Riw4REFBNkQsNEJBQTRCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBLG9EQUFtRCx3QkFBd0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTJFLGdCQUFnQjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCw4QkFBOEI7QUFDckY7QUFDQSw0REFBMkQsaUVBQWlFO0FBQzVIO0FBQ0EsMkRBQTBELGlEQUFpRDtBQUMzRztBQUNBLGdFQUErRCxnRUFBZ0U7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLG1FQUFtRTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ3ZTRCxnRDs7Ozs7O2lFQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBLEVBQUM7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0EsV0FBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLDBCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQyxpQ0FBaUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDLGlDQUFpQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDLG1DQUFtQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkIsaUNBQWlDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHdDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QixtQ0FBbUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE0RCxtQkFBbUI7QUFDL0U7QUFDQSx5REFBd0QsaUJBQWlCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNEQsNENBQTRDO0FBQ3hHO0FBQ0EsNkRBQTRELHFCQUFxQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0Qsd0NBQXdDO0FBQzFGLGNBQWE7QUFDYjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBLGdFQUErRCxrQkFBa0I7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELHVEQUF1RDtBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE0RCxlQUFlO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFnRCxzQkFBc0IsSUFBSTtBQUMxRSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBd0Qsa0NBQWtDO0FBQzFGLHlEQUF3RCx1REFBdUQ7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMEQsZ0NBQWdDO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUE4RCxtQ0FBbUM7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUFzRSxrQkFBa0I7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFnRSx5REFBeUQ7QUFDekg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELCtCQUErQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQSw0REFBMkQsd0NBQXdDO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFtRSxnQkFBZ0I7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTJELDBCQUEwQjtBQUNyRiw0REFBMkQsNEJBQTRCO0FBQ3ZGLDREQUEyRCwyQkFBMkI7QUFDdEY7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBa0UsdUJBQXVCO0FBQ3pGO0FBQ0EsZ0NBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixnQkFBZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQThELGdCQUFnQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLDhDQUE2QyxxQkFBcUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQWtFLGdCQUFnQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTBELHlCQUF5QjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEwRCwrQkFBK0I7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDLDBDQUEwQztBQUNoRjtBQUNBLG9EQUFtRCw2Q0FBNkM7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXdELHNCQUFzQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE0RCxnREFBZ0Q7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQW9FLGtEQUFrRDtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUMzMUNELGdEOzs7Ozs7QUNBQSxnRCIsImZpbGUiOiJlajItbmF2aWdhdGlvbnMudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiksIHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItcG9wdXBzXCIpLCByZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLWJ1dHRvbnNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItcG9wdXBzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJ1dHRvbnNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIpLCByZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLXBvcHVwc1wiKSwgcmVxdWlyZShcIkBzeW5jZnVzaW9uL2VqMi1idXR0b25zXCIpKSA6IGZhY3Rvcnkocm9vdFtcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJdLCByb290W1wiQHN5bmNmdXNpb24vZWoyLXBvcHVwc1wiXSwgcm9vdFtcIkBzeW5jZnVzaW9uL2VqMi1idXR0b25zXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDg0ZDcwMWRjZmNkMzc0Nzc4NzYiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2NvbW1vbi9pbmRleFwiLCBcIi4vdG9vbGJhci9pbmRleFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGluZGV4XzEsIGluZGV4XzIpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KGluZGV4XzEpO1xuICAgIF9fZXhwb3J0KGluZGV4XzIpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2gtc2Nyb2xsXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgaF9zY3JvbGxfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQoaF9zY3JvbGxfMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBlajJfYmFzZV8xLCBlajJfYmFzZV8yKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBDTFNfUk9PVCA9ICdlLWhzY3JvbGwnO1xuICAgIHZhciBDTFNfUlRMID0gJ2UtcnRsJztcbiAgICB2YXIgQ0xTX0RJU0FCTEUgPSAnZS1vdmVybGF5JztcbiAgICB2YXIgQ0xTX0hTQ1JPTExCQVIgPSAnZS1oc2Nyb2xsLWJhcic7XG4gICAgdmFyIENMU19IU0NST0xMQ09OID0gJ2UtaHNjcm9sbC1jb250ZW50JztcbiAgICB2YXIgQ0xTX05BVkFSUk9XID0gJ2UtbmF2LWFycm93JztcbiAgICB2YXIgQ0xTX05BVlJJR0hUQVJST1cgPSAnZS1uYXYtcmlnaHQtYXJyb3cnO1xuICAgIHZhciBDTFNfTkFWTEVGVEFSUk9XID0gJ2UtbmF2LWxlZnQtYXJyb3cnO1xuICAgIHZhciBDTFNfSFNDUk9MTE5BViA9ICdlLXNjcm9sbC1uYXYnO1xuICAgIHZhciBDTFNfSFNDUk9MTE5BVlJJR0hUID0gJ2Utc2Nyb2xsLXJpZ2h0LW5hdic7XG4gICAgdmFyIENMU19IU0NST0xMTkFWTEVGVCA9ICdlLXNjcm9sbC1sZWZ0LW5hdic7XG4gICAgdmFyIENMU19ERVZJQ0UgPSAnZS1zY3JvbGwtZGV2aWNlJztcbiAgICB2YXIgSFNjcm9sbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhIU2Nyb2xsLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBIU2Nyb2xsKG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBlbGVtZW50KSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLnByZVJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuYnJvd3NlciA9IGVqMl9iYXNlXzIuQnJvd3Nlci5pbmZvLm5hbWU7XG4gICAgICAgICAgICB0aGlzLmJyb3dzZXJDaGVjayA9IHRoaXMuYnJvd3NlciA9PT0gJ21vemlsbGEnO1xuICAgICAgICAgICAgdGhpcy5pc0RldmljZSA9IGVqMl9iYXNlXzIuQnJvd3Nlci5pc0RldmljZTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5pZUNoZWNrID0gdGhpcy5icm93c2VyID09PSAnZWRnZScgfHwgdGhpcy5icm93c2VyID09PSAnbXNpZSc7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09PSAnJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBlajJfYmFzZV8xLmdldFVuaXF1ZUlEKCdoc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmlxdWVJZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlUnRsKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMU19SVEwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRvdWNoTW9kdWxlID0gbmV3IGVqMl9iYXNlXzEuVG91Y2godGhpcy5lbGVtZW50LCB7IHNjcm9sbDogdGhpcy50b3VjaEhhbmRsZXIuYmluZCh0aGlzKSB9KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0RldmljZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTmF2SWNvbih0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLnNjcm9sbEVsZSwgJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTFNfREVWSUNFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGxFbGUgPSBlajJfYmFzZV8yLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfSFNDUk9MTENPTiB9KTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxEaXYgPSBlajJfYmFzZV8yLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfSFNDUk9MTEJBUiB9KTtcbiAgICAgICAgICAgIHNjcm9sbERpdi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIGlubmVyRWxlID0gW10uc2xpY2UuY2FsbChlbGUuY2hpbGRyZW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBpbm5lckVsZV8xID0gaW5uZXJFbGU7IF9pIDwgaW5uZXJFbGVfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlXzEgPSBpbm5lckVsZV8xW19pXTtcbiAgICAgICAgICAgICAgICBzY3JvbGxFbGUuYXBwZW5kQ2hpbGQoZWxlXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2Nyb2xsRGl2LmFwcGVuZENoaWxkKHNjcm9sbEVsZSk7XG4gICAgICAgICAgICBlbGUuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICAgICAgICAgIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJztcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWxlID0gc2Nyb2xsRGl2O1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxJdGVtcyA9IHNjcm9sbEVsZTtcbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUuZ2V0UGVyc2lzdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIga2V5RW50aXR5ID0gWydzY3JvbGxTdGVwJ107XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRPblBlcnNpc3Qoa2V5RW50aXR5KTtcbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUuZ2V0TW9kdWxlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnaFNjcm9sbCc7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKENMU19ST09UKTtcbiAgICAgICAgICAgIHZhciBuYXYgPSBlajJfYmFzZV8xLnNlbGVjdEFsbCgnIycgKyBlbGUuaWQgKyAnX25hdi5lLScgKyBlbGUuaWQgKyAnX25hdicpO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IFtdLnNsaWNlLmNhbGwodGhpcy5zY3JvbGxJdGVtcy5jaGlsZHJlbik7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgZWxlLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudW5pcXVlSWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfMi5kZXRhY2godGhpcy5zY3JvbGxFbGUpO1xuICAgICAgICAgICAgaWYgKG5hdi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5kZXRhY2gobmF2WzBdKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLmRldGFjaChuYXZbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuc2Nyb2xsRWxlLCAnc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hNb2R1bGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy50b3VjaE1vZHVsZSA9IG51bGw7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUuY3JlYXRlTmF2SWNvbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBlbGVtZW50LmlkLmNvbmNhdCgnX25hdicpO1xuICAgICAgICAgICAgdmFyIGNsc1JpZ2h0ID0gJ2UtJyArIGVsZW1lbnQuaWQuY29uY2F0KCdfbmF2ICcgKyBDTFNfSFNDUk9MTE5BViArICcgJyArIENMU19IU0NST0xMTkFWUklHSFQpO1xuICAgICAgICAgICAgdmFyIG5hdiA9IGVqMl9iYXNlXzIuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBpZDogaWQsIGNsYXNzTmFtZTogY2xzUmlnaHQgfSk7XG4gICAgICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICB2YXIgbmF2SXRlbSA9IGVqMl9iYXNlXzIuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19OQVZSSUdIVEFSUk9XICsgJyAnICsgQ0xTX05BVkFSUk9XICsgJyBlLWljb25zJyB9KTtcbiAgICAgICAgICAgIHZhciBjbHNMZWZ0ID0gJ2UtJyArIGVsZW1lbnQuaWQuY29uY2F0KCdfbmF2ICcgKyBDTFNfSFNDUk9MTE5BViArICcgJyArIENMU19IU0NST0xMTkFWTEVGVCk7XG4gICAgICAgICAgICB2YXIgbmF2RWxlID0gZWoyX2Jhc2VfMi5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGlkOiBpZCwgY2xhc3NOYW1lOiBjbHNMZWZ0ICsgJyAnICsgQ0xTX0RJU0FCTEUgfSk7XG4gICAgICAgICAgICBuYXZFbGUuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIHZhciBuYXZMZWZ0SXRlbSA9IGVqMl9iYXNlXzIuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19OQVZMRUZUQVJST1cgKyAnICcgKyBDTFNfTkFWQVJST1cgKyAnIGUtaWNvbnMnIH0pO1xuICAgICAgICAgICAgbmF2RWxlLmFwcGVuZENoaWxkKG5hdkxlZnRJdGVtKTtcbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChuYXZJdGVtKTtcbiAgICAgICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5hdkVsZSwgZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmllQ2hlY2spIHtcbiAgICAgICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnZS1pZS1hbGlnbicpO1xuICAgICAgICAgICAgICAgIG5hdkVsZS5jbGFzc0xpc3QuYWRkKCdlLWllLWFsaWduJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmV2ZW50QmluZGluZyhbbmF2LCBuYXZFbGVdKTtcbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUub25LZXlQcmVzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVvdXRGdW5fMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMua2V5VGltZW91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVsZVNjcm9sbGluZygxMCwgZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dEZ1bl8xKCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUub25LZXlVcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgIT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5rZXlUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlUaW1lb3V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMua2V5VGltZXIpO1xuICAgICAgICB9O1xuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS5ldmVudEJpbmRpbmcgPSBmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgZWxlLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgbmV3IGVqMl9iYXNlXzEuVG91Y2goZWwsIHsgdGFwSG9sZDogX3RoaXMudGFiSG9sZEhhbmRsZXIuYmluZChfdGhpcyksIHRhcEhvbGRUaHJlc2hvbGQ6IDUwMCB9KTtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgX3RoaXMub25LZXlQcmVzcy5iaW5kKF90aGlzKSk7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBfdGhpcy5vbktleVVwLmJpbmQoX3RoaXMpKTtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgX3RoaXMucmVwZWF0U2Nyb2xsLmJpbmQoX3RoaXMpKTtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIF90aGlzLnJlcGVhdFNjcm9sbC5iaW5kKF90aGlzKSk7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKGVsLCAnY2xpY2snLCBfdGhpcy5jbGlja0V2ZW50SGFuZGxlciwgX3RoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLnJlcGVhdFNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0KTtcbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUudGFiSG9sZEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciB0cmd0ID0gZS5vcmlnaW5hbEV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHRyZ3QgPSB0aGlzLmNvbnRhaW5zKHRyZ3QsIENMU19IU0NST0xMTkFWKSA/IHRyZ3QuZmlyc3RFbGVtZW50Q2hpbGQgOiB0cmd0O1xuICAgICAgICAgICAgdmFyIHNjcm9sbERpcyA9IDEwO1xuICAgICAgICAgICAgdmFyIHRpbWVvdXRGdW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZWxlU2Nyb2xsaW5nKHNjcm9sbERpcywgdHJndCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0RnVuKCk7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGVsZSwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICAgICAgICB9O1xuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS5lbGVTY3JvbGxpbmcgPSBmdW5jdGlvbiAoc2Nyb2xsRGlzLCB0cmd0KSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuc2Nyb2xsRWxlO1xuICAgICAgICAgICAgdmFyIHJvb3RFbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgY2xhc3NMaXN0ID0gdHJndC5jbGFzc0xpc3Q7XG4gICAgICAgICAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKENMU19IU0NST0xMTkFWKSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTGlzdCA9IHRyZ3QucXVlcnlTZWxlY3RvcignLicgKyBDTFNfTkFWQVJST1cpLmNsYXNzTGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5zKHJvb3RFbGUsIENMU19SVEwpICYmIHRoaXMuYnJvd3NlckNoZWNrKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRGlzID0gLXNjcm9sbERpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzY3JsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIGlmICgoIXRoaXMuY29udGFpbnMocm9vdEVsZSwgQ0xTX1JUTCkgfHwgdGhpcy5icm93c2VyQ2hlY2spIHx8IHRoaXMuaWVDaGVjaykge1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoQ0xTX05BVlJJR0hUQVJST1cpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcmxMZWZ0ICsgc2Nyb2xsRGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gc2NybExlZnQgLSBzY3JvbGxEaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzTGlzdC5jb250YWlucyhDTFNfTkFWTEVGVEFSUk9XKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBzY3JsTGVmdCArIHNjcm9sbERpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcmxMZWZ0IC0gc2Nyb2xsRGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUuY2xpY2tFdmVudEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVTY3JvbGxpbmcodGhpcy5zY3JvbGxTdGVwLCBlLnRhcmdldCk7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLnRvdWNoSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5zY3JvbGxFbGU7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2U7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IGUuZGlzdGFuY2VYO1xuICAgICAgICAgICAgaWYgKCh0aGlzLmllQ2hlY2spICYmIHRoaXMuY29udGFpbnModGhpcy5lbGVtZW50LCBDTFNfUlRMKSkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gLWRpc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUuc2Nyb2xsRGlyZWN0aW9uID09PSAnTGVmdCcpIHtcbiAgICAgICAgICAgICAgICBlbGUuc2Nyb2xsTGVmdCA9IGVsZS5zY3JvbGxMZWZ0ICsgZGlzdGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLnNjcm9sbERpcmVjdGlvbiA9PT0gJ1JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIGVsZS5zY3JvbGxMZWZ0ID0gZWxlLnNjcm9sbExlZnQgLSBkaXN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUuYXJyb3dEaXNhYmxpbmcgPSBmdW5jdGlvbiAoYWRkRGlzYWJsZSwgcmVtb3ZlRGlzYWJsZSkge1xuICAgICAgICAgICAgYWRkRGlzYWJsZS5jbGFzc0xpc3QuYWRkKENMU19ESVNBQkxFKTtcbiAgICAgICAgICAgIGFkZERpc2FibGUuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIGFkZERpc2FibGUucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgcmVtb3ZlRGlzYWJsZS5jbGFzc0xpc3QucmVtb3ZlKENMU19ESVNBQkxFKTtcbiAgICAgICAgICAgIHJlbW92ZURpc2FibGUuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICByZW1vdmVEaXNhYmxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgdGhpcy5yZXBlYXRTY3JvbGwoKTtcbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUuc2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSB0YXJnZXQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB2YXIgcm9vdEVsZSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBuYXZMZWZ0RWxlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0hTQ1JPTExOQVZMRUZUKTtcbiAgICAgICAgICAgIHZhciBuYXZSaWdodEVsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19IU0NST0xMTkFWUklHSFQpO1xuICAgICAgICAgICAgdmFyIHNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIGlmIChzY3JvbGxMZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gLXNjcm9sbExlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2Nyb2xsTGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICgoIXRoaXMuY29udGFpbnMocm9vdEVsZSwgQ0xTX1JUTCkgfHwgdGhpcy5icm93c2VyQ2hlY2spIHx8IHRoaXMuaWVDaGVjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycm93RGlzYWJsaW5nKG5hdkxlZnRFbGUsIG5hdlJpZ2h0RWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyb3dEaXNhYmxpbmcobmF2UmlnaHRFbGUsIG5hdkxlZnRFbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguY2VpbCh3aWR0aCArIHNjcm9sbExlZnQgKyAuMSkgPj0gdGFyZ2V0LnNjcm9sbFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCghdGhpcy5jb250YWlucyhyb290RWxlLCBDTFNfUlRMKSB8fCB0aGlzLmJyb3dzZXJDaGVjaykgfHwgdGhpcy5pZUNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyb3dEaXNhYmxpbmcobmF2UmlnaHRFbGUsIG5hdkxlZnRFbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJvd0Rpc2FibGluZyhuYXZMZWZ0RWxlLCBuYXZSaWdodEVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpc0VsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19ESVNBQkxFKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzRWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc0VsZS5jbGFzc0xpc3QucmVtb3ZlKENMU19ESVNBQkxFKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzRWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgICAgICBkaXNFbGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS5vblByb3BlcnR5Q2hhbmdlZCA9IGZ1bmN0aW9uIChuZXdQcm9wLCBvbGRQcm9wKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobmV3UHJvcCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Njcm9sbFN0ZXAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuYWJsZVJ0bCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9wLmVuYWJsZVJ0bCA/IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMU19SVEwpIDogdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xTX1JUTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBIU2Nyb2xsO1xuICAgIH0oZWoyX2Jhc2VfMS5Db21wb25lbnQpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSg0MClcbiAgICBdLCBIU2Nyb2xsLnByb3RvdHlwZSwgXCJzY3JvbGxTdGVwXCIsIHZvaWQgMCk7XG4gICAgSFNjcm9sbCA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLk5vdGlmeVByb3BlcnR5Q2hhbmdlc1xuICAgIF0sIEhTY3JvbGwpO1xuICAgIGV4cG9ydHMuSFNjcm9sbCA9IEhTY3JvbGw7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi9oLXNjcm9sbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL3Rvb2xiYXJcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCB0b29sYmFyXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KHRvb2xiYXJfMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Rvb2xiYXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLXBvcHVwc1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1wb3B1cHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYnV0dG9uc1wiLCBcIi4uL2NvbW1vbi9oLXNjcm9sbFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIsIGVqMl9iYXNlXzMsIGVqMl9iYXNlXzQsIGVqMl9iYXNlXzUsIGVqMl9wb3B1cHNfMSwgZWoyX3BvcHVwc18yLCBlajJfYnV0dG9uc18xLCBoX3Njcm9sbF8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBDTFNfSVRFTVMgPSAnZS10b29sYmFyLWl0ZW1zJztcbiAgICB2YXIgQ0xTX0lURU0gPSAnZS10b29sYmFyLWl0ZW0nO1xuICAgIHZhciBDTFNfUlRMID0gJ2UtcnRsJztcbiAgICB2YXIgQ0xTX1NFUEFSQVRPUiA9ICdlLXNlcGFyYXRvcic7XG4gICAgdmFyIENMU19QT1BVUElDT04gPSAnZS1wb3B1cC11cC1pY29uJztcbiAgICB2YXIgQ0xTX1BPUFVQRE9XTiA9ICdlLXBvcHVwLWRvd24taWNvbic7XG4gICAgdmFyIENMU19URU1QTEFURSA9ICdlLXRlbXBsYXRlJztcbiAgICB2YXIgQ0xTX0RJU0FCTEUgPSAnZS1vdmVybGF5JztcbiAgICB2YXIgQ0xTX1BPUFVQVEVYVCA9ICdlLXRvb2xiYXItdGV4dCc7XG4gICAgdmFyIENMU19UQkFSVEVYVCA9ICdlLXBvcHVwLXRleHQnO1xuICAgIHZhciBDTFNfVEJBUk9WRVJGTE9XID0gJ2Utb3ZlcmZsb3ctc2hvdyc7XG4gICAgdmFyIENMU19QT1BPVkVSRkxPVyA9ICdlLW92ZXJmbG93LWhpZGUnO1xuICAgIHZhciBDTFNfVEJBUkJUTiA9ICdlLXRiYXItYnRuJztcbiAgICB2YXIgQ0xTX1RCQVJOQVYgPSAnZS1ob3ItbmF2JztcbiAgICB2YXIgQ0xTX1RCQVJTQ1JMTkFWID0gJ2Utc2Nyb2xsLW5hdic7XG4gICAgdmFyIENMU19UQkFSUklHSFQgPSAnZS10b29sYmFyLXJpZ2h0JztcbiAgICB2YXIgQ0xTX1RCQVJMRUZUID0gJ2UtdG9vbGJhci1sZWZ0JztcbiAgICB2YXIgQ0xTX1RCQVJDRU5URVIgPSAnZS10b29sYmFyLWNlbnRlcic7XG4gICAgdmFyIENMU19UQkFSUE9TID0gJ2UtdGJhci1wb3MnO1xuICAgIHZhciBDTFNfVEJBUlNDUk9MTCA9ICdlLWhzY3JvbGwtY29udGVudCc7XG4gICAgdmFyIENMU19QT1BVUE5BViA9ICdlLWhvci1uYXYnO1xuICAgIHZhciBDTFNfUE9QVVBDTEFTUyA9ICdlLXRvb2xiYXItcG9wJztcbiAgICB2YXIgQ0xTX1BPUFVQID0gJ2UtdG9vbGJhci1wb3B1cCc7XG4gICAgdmFyIENMU19UQkFSQlROVEVYVCA9ICdlLXRiYXItYnRuLXRleHQnO1xuICAgIHZhciBDTFNfVEJBUk5BVkFDVCA9ICdlLW5hdi1hY3RpdmUnO1xuICAgIHZhciBDTFNfVEJBUklHTk9SRSA9ICdlLWlnbm9yZSc7XG4gICAgdmFyIEl0ZW0gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoSXRlbSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gSXRlbSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSXRlbTtcbiAgICB9KGVqMl9iYXNlXzUuQ2hpbGRQcm9wZXJ0eSkpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcImlkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgSXRlbS5wcm90b3R5cGUsIFwidGV4dFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdhdXRvJylcbiAgICBdLCBJdGVtLnByb3RvdHlwZSwgXCJ3aWR0aFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcImNzc0NsYXNzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgSXRlbS5wcm90b3R5cGUsIFwicHJlZml4SWNvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcInN1ZmZpeEljb25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnTm9uZScpXG4gICAgXSwgSXRlbS5wcm90b3R5cGUsIFwib3ZlcmZsb3dcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBJdGVtLnByb3RvdHlwZSwgXCJ0ZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdCdXR0b24nKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcInR5cGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnQm90aCcpXG4gICAgXSwgSXRlbS5wcm90b3R5cGUsIFwic2hvd1RleHRPblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KG51bGwpXG4gICAgXSwgSXRlbS5wcm90b3R5cGUsIFwiaHRtbEF0dHJpYnV0ZXNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBJdGVtLnByb3RvdHlwZSwgXCJ0b29sdGlwVGV4dFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdsZWZ0JylcbiAgICBdLCBJdGVtLnByb3RvdHlwZSwgXCJhbGlnblwiLCB2b2lkIDApO1xuICAgIGV4cG9ydHMuSXRlbSA9IEl0ZW07XG4gICAgdmFyIFRvb2xiYXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoVG9vbGJhciwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gVG9vbGJhcihvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBlbGVtZW50KSB8fCB0aGlzO1xuICAgICAgICAgICAgX3RoaXMua2V5Q29uZmlncyA9IHtcbiAgICAgICAgICAgICAgICBtb3ZlTGVmdDogJ2xlZnRhcnJvdycsXG4gICAgICAgICAgICAgICAgbW92ZVJpZ2h0OiAncmlnaHRhcnJvdycsXG4gICAgICAgICAgICAgICAgbW92ZVVwOiAndXBhcnJvdycsXG4gICAgICAgICAgICAgICAgbW92ZURvd246ICdkb3duYXJyb3cnLFxuICAgICAgICAgICAgICAgIHBvcHVwT3BlbjogJ2VudGVyJyxcbiAgICAgICAgICAgICAgICBwb3B1cENsb3NlOiAnZXNjYXBlJyxcbiAgICAgICAgICAgICAgICB0YWI6ICd0YWInLFxuICAgICAgICAgICAgICAgIGhvbWU6ICdob21lJyxcbiAgICAgICAgICAgICAgICBlbmQ6ICdlbmQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudW53aXJlRXZlbnRzKCk7XG4gICAgICAgICAgICB3aGlsZSAoZWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBlbGUucmVtb3ZlQ2hpbGQoZWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudHJndEVsZSkge1xuICAgICAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZCh0aGlzLmN0cmxUZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGVhclByb3BlcnR5KCk7XG4gICAgICAgICAgICB0aGlzLnBvcE9iaiA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdlLXRvb2xwb3AnKTtcbiAgICAgICAgICAgIGVsZS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICBbJ2FyaWEtZGlzYWJsZWQnLCAnYXJpYS1vcmllbnRhdGlvbicsICdhcmlhLWhhc3BvcHVwJywgJ3JvbGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyYikge1xuICAgICAgICAgICAgICAgIF90aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5wcmVSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2JlZm9yZUNyZWF0ZScpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxNb2R1bGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wb3BPYmogPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlUnRsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5lbGVtZW50LCBDTFNfUlRMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUud2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMua2V5TW9kdWxlID0gbmV3IGVqMl9iYXNlXzIuS2V5Ym9hcmRFdmVudHModGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICAgICAga2V5QWN0aW9uOiB0aGlzLmtleUFjdGlvbkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBrZXlDb25maWdzOiB0aGlzLmtleUNvbmZpZ3NcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2tleWRvd24nLCB0aGlzLmRvY0tleURvd24sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiSW5kZXgnLCAnMCcpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5kb2NLZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDkgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlLWhvci1uYXYnKSA9PT0gdHJ1ZSAmJiBlajJfYmFzZV8yLmlzVmlzaWJsZSh0aGlzLnBvcE9iai5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wT2JqLmhpZGUoeyBuYW1lOiAnU2xpZGVVcCcsIGR1cmF0aW9uOiAxMDAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKGUua2V5Q29kZSA9PT0gNDAgfHwgZS5rZXlDb2RlID09PSAzOCkgJiYgIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5wb3BPYmopICYmIGVqMl9iYXNlXzIuaXNWaXNpYmxlKHRoaXMucG9wT2JqLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS51bndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lIU2Nyb2xsKCk7XG4gICAgICAgICAgICB0aGlzLmtleU1vZHVsZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUoZG9jdW1lbnQsICdzY3JvbGwnLCB0aGlzLmRvY0V2ZW50KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdrZXlkb3duJywgdGhpcy5kb2NLZXlEb3duKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZShkb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5kb2NFdmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmNsZWFyUHJvcGVydHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRiYXJFbGUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMudGJhckFsZ0VsZSA9IHsgbGVmdHM6IFtdLCBjZW50ZXJzOiBbXSwgcmlnaHRzOiBbXSB9O1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5kb2NFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgcG9wRWxlID0gZWoyX2Jhc2VfMi5jbG9zZXN0KGUudGFyZ2V0LCAnLmUtcG9wdXAnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcE9iaiAmJiBlajJfYmFzZV8yLmlzVmlzaWJsZSh0aGlzLnBvcE9iai5lbGVtZW50KSAmJiAhcG9wRWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BPYmouaGlkZSh7IG5hbWU6ICdTbGlkZVVwJywgZHVyYXRpb246IDEwMCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuZGVzdHJveUhTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxNb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5zY3JvbGxNb2R1bGUuZWxlbWVudCwgQ0xTX1RCQVJQT1MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbE1vZHVsZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxNb2R1bGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5kZXN0cm95SXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBbXS5zbGljZS5jYWxsKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIENMU19JVEVNKSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLmRldGFjaChlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJQcm9wZXJ0eSgpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5kZXN0cm95TW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbE1vZHVsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMuc2Nyb2xsTW9kdWxlLmVsZW1lbnQsIENMU19SVEwpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUhTY3JvbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvcE9iaikge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBSZWZyZXNoKHRoaXMucG9wT2JqLmVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZWxlLCB2YWwpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKHZhbCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChlbGUsIHZhbCkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUodmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuZWxlbWVudEZvY3VzID0gZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgdmFyIGZDaGlsZCA9IGVsZS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGlmIChmQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICBmQ2hpbGQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUVsZVN3aXRjaChlbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmNsc3RFbGVtZW50ID0gZnVuY3Rpb24gKHRick5hdkNoaywgdHJndCkge1xuICAgICAgICAgICAgdmFyIGNsc3Q7XG4gICAgICAgICAgICBpZiAodGJyTmF2Q2hrICYmIHRoaXMucG9wT2JqICYmIGVqMl9iYXNlXzIuaXNWaXNpYmxlKHRoaXMucG9wT2JqLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY2xzdCA9IHRoaXMucG9wT2JqLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW1lbnQgPT09IHRyZ3QgfHwgdGJyTmF2Q2hrKSB7XG4gICAgICAgICAgICAgICAgY2xzdCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsc3QgPSBlajJfYmFzZV8yLmNsb3Nlc3QodHJndCwgJy4nICsgQ0xTX0lURU0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNsc3Q7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmtleUhhbmRsaW5nID0gZnVuY3Rpb24gKGNsc3QsIGUsIHRyZ3QsIG5hdkNoaywgc2Nyb2xsQ2hrKSB7XG4gICAgICAgICAgICB2YXIgcG9wT2JqID0gdGhpcy5wb3BPYmo7XG4gICAgICAgICAgICB2YXIgcm9vdEVsZSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBwb3BBbmltYXRlID0geyBuYW1lOiAnU2xpZGVVcCcsIGR1cmF0aW9uOiAxMDAgfTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdtb3ZlUmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBpZiAocm9vdEVsZSA9PT0gdHJndCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Rm9jdXMoY2xzdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIW5hdkNoaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVGb2N1cyhjbHN0LCAnbmV4dCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vdmVMZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuYXZDaGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlRm9jdXMoY2xzdCwgJ3ByZXZpb3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcHVwQ2hlY2sgPSBlajJfYmFzZV8yLmNsb3Nlc3QoY2xzdCwgJy5lLXBvcHVwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBDaGVjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV8yLmlzVmlzaWJsZSh0aGlzLnBvcE9iai5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlcyA9IHBvcHVwQ2hlY2suY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmFjdGlvbiA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGUgPSBub2Rlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZSA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBDTFNfSVRFTVMgKyAnIC4nICsgQ0xTX0lURU0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmFjdGlvbiA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZSA9IG5vZGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudEZvY3VzKGVsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZVVwJzpcbiAgICAgICAgICAgICAgICBjYXNlICdtb3ZlRG93bic6XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGUuYWN0aW9uID09PSAnbW92ZVVwJyA/ICdwcmV2aW91cycgOiAnbmV4dCc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3BPYmogJiYgZWoyX2Jhc2VfMi5jbG9zZXN0KHRyZ3QsICcuZS1wb3B1cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9wRWxlID0gcG9wT2JqLmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9wRnJzdEVsZSA9IHBvcEVsZS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodmFsdWUgPT09ICdwcmV2aW91cycgJiYgcG9wRnJzdEVsZSA9PT0gY2xzdCkgfHwgKHZhbHVlID09PSAnbmV4dCcgJiYgcG9wRWxlLmxhc3RFbGVtZW50Q2hpbGQgPT09IGNsc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVGb2N1cyhjbHN0LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5hY3Rpb24gPT09ICdtb3ZlRG93bicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudEZvY3VzKGNsc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYic6XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2Nyb2xsQ2hrICYmICFuYXZDaGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVfMSA9IGNsc3QuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm9vdEVsZSA9PT0gdHJndCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUVsZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVFbGVSZW1vdmUoZWxlXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVfMS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BvcHVwQ2xvc2UnOlxuICAgICAgICAgICAgICAgICAgICBpZiAocG9wT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3BPYmouaGlkZShwb3BBbmltYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwb3B1cE9wZW4nOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5hdkNoaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3BPYmogJiYgIWVqMl9iYXNlXzIuaXNWaXNpYmxlKHBvcE9iai5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wT2JqLmVsZW1lbnQuc3R5bGUudG9wID0gcm9vdEVsZS5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wT2JqLnNob3coeyBuYW1lOiAnU2xpZGVEb3duJywgZHVyYXRpb246IDEwMCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcE9iai5oaWRlKHBvcEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5rZXlBY3Rpb25IYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBjbHN0O1xuICAgICAgICAgICAgdmFyIHRyZ3QgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHZhciB0YnJOYXZDaGsgPSB0cmd0LmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJBUk5BVik7XG4gICAgICAgICAgICB2YXIgdGJhclNjcm9sbENoayA9IHRyZ3QuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19UQkFSU0NSTE5BVik7XG4gICAgICAgICAgICBjbHN0ID0gdGhpcy5jbHN0RWxlbWVudCh0YnJOYXZDaGssIHRyZ3QpO1xuICAgICAgICAgICAgaWYgKGNsc3QgfHwgdGJhclNjcm9sbENoaykge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFuZGxpbmcoY2xzdCwgZSwgdHJndCwgdGJyTmF2Q2hrLCB0YmFyU2Nyb2xsQ2hrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuZWxlRm9jdXMgPSBmdW5jdGlvbiAoY2xvc2VzdCwgcG9zKSB7XG4gICAgICAgICAgICB2YXIgc2liID0gT2JqZWN0KGNsb3Nlc3QpW3BvcyArICdFbGVtZW50U2libGluZyddO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5zID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfU0VQQVJBVE9SKSB8fCBlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0RJU0FCTEUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChzaWIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2tpcEVsZSA9IGNvbnRhaW5zKHNpYik7XG4gICAgICAgICAgICAgICAgaWYgKHNraXBFbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdChzaWIpW3BvcyArICdTaWJsaW5nJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYiA9IE9iamVjdChzaWIpW3BvcyArICdTaWJsaW5nJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBza2lwRWxlID0gY29udGFpbnMoc2liKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChza2lwRWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVGb2N1cyhzaWIsIHBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudEZvY3VzKHNpYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRiYXJBbGlnbikge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gT2JqZWN0KGNsb3Nlc3QucGFyZW50RWxlbWVudClbcG9zICsgJ0VsZW1lbnRTaWJsaW5nJ107XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGVsZW0pICYmIGVsZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGVsZW0ucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbnMoZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVGb2N1cyhlbCwgcG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmZpcnN0RWxlbWVudENoaWxkLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVFbGVTd2l0Y2goZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gZWxlbS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zKGVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlRm9jdXMoZWwsIHBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRGb2N1cyhlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdHJndCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGNsc0xpc3QgPSB0cmd0LmNsYXNzTGlzdDtcbiAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgcG9wdXBOYXYgPSBlajJfYmFzZV8yLmNsb3Nlc3QodHJndCwgKCcuJyArIENMU19UQkFSTkFWKSk7XG4gICAgICAgICAgICBpZiAoIXBvcHVwTmF2KSB7XG4gICAgICAgICAgICAgICAgcG9wdXBOYXYgPSB0cmd0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbGUuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdlLWhzY3JvbGwnKSAmJiAoY2xzTGlzdC5jb250YWlucyhDTFNfVEJBUk5BVikpKSB7XG4gICAgICAgICAgICAgICAgY2xzTGlzdCA9IHRyZ3QucXVlcnlTZWxlY3RvcignLmUtaWNvbnMnKS5jbGFzc0xpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2xzTGlzdC5jb250YWlucyhDTFNfUE9QVVBJQ09OKSB8fCBjbHNMaXN0LmNvbnRhaW5zKENMU19QT1BVUERPV04pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENsaWNrSGFuZGxlcihlbGUsIHBvcHVwTmF2LCBDTFNfUlRMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpdGVtT2JqO1xuICAgICAgICAgICAgdmFyIGNsc3QgPSBlajJfYmFzZV8yLmNsb3Nlc3QoZS50YXJnZXQsICcuJyArIENMU19JVEVNKTtcbiAgICAgICAgICAgIGlmICgoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChjbHN0KSB8fCBjbHN0LmNsYXNzTGlzdC5jb250YWlucyhDTFNfRElTQUJMRSkpICYmICFwb3B1cE5hdi5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RCQVJOQVYpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNsc3QpIHtcbiAgICAgICAgICAgICAgICBpdGVtT2JqID0gdGhpcy5pdGVtc1t0aGlzLnRiYXJFbGUuaW5kZXhPZihjbHN0KV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmdzID0geyBvcmlnaW5hbEV2ZW50OiBlLCBpdGVtOiBpdGVtT2JqIH07XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrZWQnLCBldmVudEFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnBvcHVwQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKGVsZSwgcG9wdXBOYXYsIENMU19SVEwpIHtcbiAgICAgICAgICAgIHZhciBwb3BPYmogPSB0aGlzLnBvcE9iajtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV8yLmlzVmlzaWJsZShwb3BPYmouZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBwb3B1cE5hdi5jbGFzc0xpc3QucmVtb3ZlKENMU19UQkFSTkFWQUNUKTtcbiAgICAgICAgICAgICAgICBwb3BPYmouaGlkZSh7IG5hbWU6ICdTbGlkZVVwJywgZHVyYXRpb246IDEwMCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19SVEwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcE9iai5lbmFibGVSdGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBwb3BPYmoucG9zaXRpb24gPSB7IFg6ICdsZWZ0JywgWTogJ3RvcCcgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBvcE9iai5vZmZzZXRYID09PSAwICYmICFlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19SVEwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcE9iai5lbmFibGVSdGwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcG9wT2JqLnBvc2l0aW9uID0geyBYOiAncmlnaHQnLCBZOiAndG9wJyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3BPYmouZGF0YUJpbmQoKTtcbiAgICAgICAgICAgICAgICBwb3BPYmouZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBwb3B1cE5hdi5jbGFzc0xpc3QuYWRkKENMU19UQkFSTkFWQUNUKTtcbiAgICAgICAgICAgICAgICBwb3BPYmouc2hvdyh7IG5hbWU6ICdTbGlkZURvd24nLCBkdXJhdGlvbjogMTAwIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ29udHJvbCgpO1xuICAgICAgICAgICAgdGhpcy53aXJlRXZlbnRzKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBlajJfYmFzZV80LmZvcm1hdFVuaXQodGhpcy53aWR0aCk7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gZWoyX2Jhc2VfNC5mb3JtYXRVbml0KHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV81LkJyb3dzZXIuaW5mby5uYW1lICE9PSAnbXNpZScgfHwgdGhpcy5oZWlnaHQgIT09ICdhdXRvJykge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5lbGVtZW50LCB7ICdoZWlnaHQnOiBoZWlnaHQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKHRoaXMuZWxlbWVudCwgeyAnd2lkdGgnOiB3aWR0aCB9KTtcbiAgICAgICAgICAgIHZhciBhcmlhQXR0ciA9IHtcbiAgICAgICAgICAgICAgICAncm9sZSc6ICd0b29sYmFyJywgJ2FyaWEtZGlzYWJsZWQnOiAnZmFsc2UnLCAnYXJpYS1oYXNwb3B1cCc6ICdmYWxzZScsICdhcmlhLW9yaWVudGF0aW9uJzogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIGFyaWFBdHRyKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucmVuZGVyQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudHJndEVsZSA9ICh0aGlzLmVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkgPyB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2JykgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy50YmFyQWxnRWxlID0geyBsZWZ0czogW10sIGNlbnRlcnM6IFtdLCByaWdodHM6IFtdIH07XG4gICAgICAgICAgICB0aGlzLnJlbmRlckl0ZW1zKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlck92ZXJmbG93TW9kZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtUG9zaXRpb25pbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuaW5pdEhTY3JvbGwgPSBmdW5jdGlvbiAoZWxlbWVudCwgaW5uZXJJdGVtcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNjcm9sbE1vZHVsZSAmJiB0aGlzLmNoZWNrT3ZlcmZsb3coZWxlbWVudCwgaW5uZXJJdGVtc1swXSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU1TICsgJyAuJyArIENMU19UQkFSQ0VOVEVSKS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kdWxlID0gbmV3IGhfc2Nyb2xsXzEuSFNjcm9sbCh7IHNjcm9sbFN0ZXA6IDUwLCBlbmFibGVSdGw6IHRoaXMuZW5hYmxlUnRsIH0sIGlubmVySXRlbXNbMF0pO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMuc2Nyb2xsTW9kdWxlLmVsZW1lbnQsIENMU19UQkFSUE9TKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKHRoaXMuZWxlbWVudCwgeyBvdmVyZmxvdzogJ2hpZGRlbicgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLml0ZW1XaWR0aENhbCA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gMDtcbiAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwoZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX0lURU0pLCBpdGVtcykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCArPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5jaGVja092ZXJmbG93ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlubmVySXRlbSkge1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoZWxlbWVudCkgfHwgZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGVsZVdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHZhciBpdGVtV2lkdGg7XG4gICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24gfHwgdGhpcy5zY3JvbGxNb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpdGVtV2lkdGggPSB0aGlzLml0ZW1XaWR0aENhbCh0aGlzLnNjcm9sbE1vZHVsZSA/IGlubmVySXRlbS5xdWVyeVNlbGVjdG9yKCcuZS1oc2Nyb2xsLWNvbnRlbnQnKSA6IGlubmVySXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtV2lkdGggPSBpbm5lckl0ZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcG9wTmF2ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19UQkFSTkFWKTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxOYXYgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX1RCQVJTQ1JMTkFWKTtcbiAgICAgICAgICAgIGlmIChpdGVtV2lkdGggPiBlbGVXaWR0aCAtIChwb3BOYXYgPyBwb3BOYXYub2Zmc2V0V2lkdGggOiAoc2Nyb2xsTmF2ID8gc2Nyb2xsTmF2Lm9mZnNldFdpZHRoICogMiA6IDApKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5yZWZyZXNoT3ZlcmZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5yZW5kZXJPdmVyZmxvd01vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIGlubmVySXRlbXMgPSBlbGUucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTVMpO1xuICAgICAgICAgICAgaWYgKGVsZSAmJiBlbGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0V2lkID0gZWxlLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vdmVyZmxvd01vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2Nyb2xsYWJsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lIU2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRIU2Nyb2xsKGVsZSwgZWxlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoQ0xTX0lURU1TKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUG9wdXAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5lbGVtZW50LCAnZS10b29scG9wJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVBvc2l0aW9uaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja092ZXJmbG93KGVsZSwgaW5uZXJJdGVtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBvcHVwRWxlKGVsZSwgW10uc2xpY2UuY2FsbChlajJfYmFzZV8zLnNlbGVjdEFsbCgnLicgKyBDTFNfSVRFTVMgKyAnIC4nICsgQ0xTX0lURU0sIGVsZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfVEJBUk5BVikuc2V0QXR0cmlidXRlKCd0YWJJbmRleCcsICcwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZChpbm5lckl0ZW1zLCBDTFNfVEJBUlBPUyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtUG9zaXRpb25pbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuY3JlYXRlUG9wdXBFbGUgPSBmdW5jdGlvbiAoZWxlLCBpbm5lckVsZSkge1xuICAgICAgICAgICAgdmFyIGlubmVyTmF2ID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX1RCQVJOQVYpO1xuICAgICAgICAgICAgaWYgKCFpbm5lck5hdikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUG9wdXBJY29uKGVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbm5lck5hdiA9IGVsZS5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19UQkFSTkFWKTtcbiAgICAgICAgICAgIHZhciBlbGVXaWR0aCA9IChlbGUub2Zmc2V0V2lkdGggLSAoaW5uZXJOYXYub2Zmc2V0V2lkdGgpKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlLXJ0bCcpO1xuICAgICAgICAgICAgdGhpcy5jaGVja1ByaW9yaXR5KGVsZSwgaW5uZXJFbGUsIGVsZVdpZHRoLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZVJ0bCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlLXJ0bCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQb3B1cCgpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5wdXNoaW5nUG9wcGVkRWxlID0gZnVuY3Rpb24gKHRiYXJPYmosIHBvcHVwUHJpLCBlbGUsIGVsZUhlaWdodCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0YmFyT2JqLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgbm9kZXMgPSBlajJfYmFzZV8zLnNlbGVjdEFsbCgnLicgKyBDTFNfVEJBUk9WRVJGTE9XLCBlbGUpO1xuICAgICAgICAgICAgdmFyIG5vZGVJbmRleCA9IDA7XG4gICAgICAgICAgICB2YXIgcG9wcGVkRWxlID0gW10uc2xpY2UuY2FsbChlajJfYmFzZV8zLnNlbGVjdEFsbCgnLicgKyBDTFNfUE9QVVAsIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTVMpKSk7XG4gICAgICAgICAgICB2YXIgbm9kZVByaSA9IDA7XG4gICAgICAgICAgICBwb3BwZWRFbGUuZm9yRWFjaChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgbm9kZXMgPSBlajJfYmFzZV8zLnNlbGVjdEFsbCgnLicgKyBDTFNfVEJBUk9WRVJGTE9XLCBlbGUpO1xuICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RCQVJPVkVSRkxPVykgJiYgbm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGJhck9iai50YlJlc2l6ZSAmJiBub2Rlcy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlLmluc2VydEJlZm9yZShlbCwgbm9kZXNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrbm9kZVByaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZS5pbnNlcnRCZWZvcmUoZWwsIGVsZS5jaGlsZHJlbltub2Rlcy5sZW5ndGhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrbm9kZVByaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RCQVJPVkVSRkxPVykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLmluc2VydEJlZm9yZShlbCwgZWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICArK25vZGVQcmk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRiYXJPYmoudGJSZXNpemUgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19QT1BPVkVSRkxPVykgJiYgZWxlLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgbm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5pbnNlcnRCZWZvcmUoZWwsIGVsZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgKytub2RlUHJpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1BPUE9WRVJGTE9XKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cFByaS5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGJhck9iai50YlJlc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuaW5zZXJ0QmVmb3JlKGVsLCBlbGUuY2hpbGROb2Rlc1tub2RlSW5kZXggKyBub2RlUHJpXSk7XG4gICAgICAgICAgICAgICAgICAgICsrbm9kZUluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZShlbCwgeyBkaXNwbGF5OiAnJywgaGVpZ2h0OiBlbGVIZWlnaHQgKyAncHgnIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwb3B1cFByaS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciB0YmFyRWxlID0gZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX0lURU0sIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTVMpKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0YmFyRWxlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRiYXJFbGVtZW50ID0gdGJhckVsZVtpXTtcbiAgICAgICAgICAgICAgICBpZiAodGJhckVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19TRVBBUkFUT1IpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUodGJhckVsZW1lbnQsIHsgZGlzcGxheTogJ25vbmUnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5jcmVhdGVQb3B1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIGVsZUhlaWdodDtcbiAgICAgICAgICAgIHZhciBlbGVJdGVtO1xuICAgICAgICAgICAgZWxlSXRlbSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTSArICc6bm90KC4nICsgQ0xTX1NFUEFSQVRPUiArICcgKTpub3QoLicgKyBDTFNfUE9QVVAgKyAnICknKTtcbiAgICAgICAgICAgIGVsZUhlaWdodCA9IChlbGVtZW50LnN0eWxlLmhlaWdodCA9PT0gJ2F1dG8nIHx8IGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID09PSAnJykgPyBudWxsIDogZWxlSXRlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgZWxlO1xuICAgICAgICAgICAgdmFyIHBvcHVwUHJpID0gW107XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGVsZW1lbnQuaWQgKyAnX3BvcHVwLicgKyBDTFNfUE9QVVBDTEFTUykpIHtcbiAgICAgICAgICAgICAgICBlbGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgZWxlbWVudC5pZCArICdfcG9wdXAuJyArIENMU19QT1BVUENMQVNTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZSA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBpZDogZWxlbWVudC5pZCArICdfcG9wdXAnLCBjbGFzc05hbWU6IENMU19QT1BVUENMQVNTIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wdXNoaW5nUG9wcGVkRWxlKHRoaXMsIHBvcHVwUHJpLCBlbGUsIGVsZUhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwSW5pdChlbGVtZW50LCBlbGUpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5wb3B1cEluaXQgPSBmdW5jdGlvbiAoZWxlbWVudCwgZWxlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wT2JqKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGUpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5lbGVtZW50LCB7IG92ZXJmbG93OiAnJyB9KTtcbiAgICAgICAgICAgICAgICB2YXIgcG9wdXAgPSBuZXcgZWoyX3BvcHVwc18xLlBvcHVwKG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlVG86IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogKGVsZW1lbnQub2Zmc2V0SGVpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlUnRsOiB0aGlzLmVuYWJsZVJ0bCxcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogdGhpcy5wb3B1cE9wZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2U6IHRoaXMucG9wdXBDbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuZW5hYmxlUnRsID8geyBYOiAnbGVmdCcsIFk6ICd0b3AnIH0gOiB7IFg6ICdyaWdodCcsIFk6ICd0b3AnIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwb3B1cC5hcHBlbmRUbyhlbGUpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZChkb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMuZG9jRXZlbnQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKGRvY3VtZW50LCAnY2xpY2sgJywgdGhpcy5kb2NFdmVudC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBwb3B1cC5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHBvcHVwLmVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBwb3B1cC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BPYmogPSBwb3B1cDtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhhc3BvcHVwJywgJ3RydWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBwb3B1cEVsZSA9IHRoaXMucG9wT2JqLmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZShwb3B1cEVsZSwgeyBtYXhIZWlnaHQ6ICcnLCBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUocG9wdXBFbGUsIHsgbWF4SGVpZ2h0OiBwb3B1cEVsZS5vZmZzZXRIZWlnaHQgKyAncHgnLCBkaXNwbGF5OiAnJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucG9wdXBPcGVuID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBwb3BPYmogPSB0aGlzLnBvcE9iajtcbiAgICAgICAgICAgIHZhciBwb3B1cEVsZSA9IHRoaXMucG9wT2JqLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgdG9vbEVsZSA9IHRoaXMucG9wT2JqLmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIHZhciBwb3B1cE5hdiA9IHRvb2xFbGUucXVlcnlTZWxlY3RvcignLicgKyBDTFNfVEJBUk5BVik7XG4gICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKHBvcE9iai5lbGVtZW50LCB7IGhlaWdodDogJ2F1dG8nLCBtYXhIZWlnaHQ6ICcnIH0pO1xuICAgICAgICAgICAgcG9wT2JqLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gcG9wT2JqLmVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIHZhciBwb3B1cEVsZVBvcyA9IHBvcHVwRWxlLm9mZnNldFRvcCArIHBvcHVwRWxlLm9mZnNldEhlaWdodCArIGVqMl9wb3B1cHNfMi5jYWxjdWxhdGVQb3NpdGlvbih0b29sRWxlKS50b3A7XG4gICAgICAgICAgICB2YXIgcG9wSWNvbiA9IHBvcHVwTmF2LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgcG9wdXBOYXYuY2xhc3NMaXN0LmFkZChDTFNfVEJBUk5BVkFDVCk7XG4gICAgICAgICAgICBlajJfYmFzZV8yLmNsYXNzTGlzdChwb3BJY29uLCBbQ0xTX1BPUFVQSUNPTl0sIFtDTFNfUE9QVVBET1dOXSk7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsVmFsID0gZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh3aW5kb3cuc2Nyb2xsWSkgPyAwIDogd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICBpZiAoKHdpbmRvdy5pbm5lckhlaWdodCArIHNjcm9sbFZhbCkgPCBwb3B1cEVsZVBvcykge1xuICAgICAgICAgICAgICAgIHZhciBvdmVyZmxvd0hlaWdodCA9IChwb3B1cEVsZS5vZmZzZXRIZWlnaHQgLSAoKHBvcHVwRWxlUG9zIC0gd2luZG93LmlubmVySGVpZ2h0IC0gc2Nyb2xsVmFsKSArIDUpKTtcbiAgICAgICAgICAgICAgICBwb3BPYmouaGVpZ2h0ID0gb3ZlcmZsb3dIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUocG9wT2JqLmVsZW1lbnQsIHsgbWF4SGVpZ2h0OiBvdmVyZmxvd0hlaWdodCArICdweCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnBvcHVwQ2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIHZhciBwb3B1cE5hdiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfVEJBUk5BVik7XG4gICAgICAgICAgICB2YXIgcG9wSWNvbiA9IHBvcHVwTmF2LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgcG9wdXBOYXYuY2xhc3NMaXN0LnJlbW92ZShDTFNfVEJBUk5BVkFDVCk7XG4gICAgICAgICAgICBlajJfYmFzZV8yLmNsYXNzTGlzdChwb3BJY29uLCBbQ0xTX1BPUFVQRE9XTl0sIFtDTFNfUE9QVVBJQ09OXSk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmNoZWNrUHJpb3JpdHkgPSBmdW5jdGlvbiAoZWxlLCBpbkVsZSwgZWxlV2lkdGgsIHByZSkge1xuICAgICAgICAgICAgdmFyIGxlbiA9IGluRWxlLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBlbGVXaWQgPSBlbGVXaWR0aDtcbiAgICAgICAgICAgIHZhciBzZXBDaGVjayA9IDA7XG4gICAgICAgICAgICB2YXIgaXRlbUNvdW50ID0gMDtcbiAgICAgICAgICAgIHZhciBpdGVtUG9wQ291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIGNoZWNrQ2xhc3MgPSBmdW5jdGlvbiAoZWxlLCB2YWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgclZhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhbC5mb3JFYWNoKGZ1bmN0aW9uIChjbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZS5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgclZhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gclZhbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbXJnbiA9IHBhcnNlRmxvYXQoKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGluRWxlW2ldKSkubWFyZ2luUmlnaHQpO1xuICAgICAgICAgICAgICAgIG1yZ24gKz0gcGFyc2VGbG9hdCgod2luZG93LmdldENvbXB1dGVkU3R5bGUoaW5FbGVbaV0pKS5tYXJnaW5MZWZ0KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5FbGVbaV0gPT09IHRoaXMudGJhckVsZVswXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRiYXJFbGVNcmduID0gbXJnbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChpbkVsZVtpXS5vZmZzZXRMZWZ0ICsgaW5FbGVbaV0ub2Zmc2V0V2lkdGggKyBtcmduKSA+IGVsZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbkVsZVtpXS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1NFUEFSQVRPUikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXBDaGVjayA+IDAgJiYgaXRlbUNvdW50ID09PSBpdGVtUG9wQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VwRWxlID0gaW5FbGVbaSArIGl0ZW1Db3VudCArIChzZXBDaGVjayAtIDEpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tDbGFzcyhzZXBFbGUsIFtDTFNfU0VQQVJBVE9SLCBDTFNfVEJBUklHTk9SRV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUoc2VwRWxlLCB7IGRpc3BsYXk6ICdub25lJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXBDaGVjaysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Qb3BDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5FbGVbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKENMU19UQkFST1ZFUkZMT1cpICYmIHByZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlV2lkdGggLT0gKGluRWxlW2ldLm9mZnNldFdpZHRoICsgKG1yZ24pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghY2hlY2tDbGFzcyhpbkVsZVtpXSwgW0NMU19TRVBBUkFUT1IsIENMU19UQkFSSUdOT1JFXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluRWxlW2ldLmNsYXNzTGlzdC5hZGQoQ0xTX1BPUFVQKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUoaW5FbGVbaV0sIHsgZGlzcGxheTogJ25vbmUnLCBtaW5XaWR0aDogaW5FbGVbaV0ub2Zmc2V0V2lkdGggKyAncHgnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVBvcENvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVXaWR0aCAtPSAoaW5FbGVbaV0ub2Zmc2V0V2lkdGggKyAobXJnbikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZSkge1xuICAgICAgICAgICAgICAgIHZhciBwb3BlZEVsZSA9IGVqMl9iYXNlXzMuc2VsZWN0QWxsKCcuJyArIENMU19JVEVNICsgJzpub3QoLicgKyBDTFNfUE9QVVAgKyAnKScsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1ByaW9yaXR5KGVsZSwgcG9wZWRFbGUsIGVsZVdpZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5jcmVhdGVQb3B1cEljb24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGlkID0gZWxlbWVudC5pZC5jb25jYXQoJ19uYXYnKTtcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSAnZS0nICsgZWxlbWVudC5pZC5jb25jYXQoJ19uYXYgJyArIENMU19QT1BVUE5BVik7XG4gICAgICAgICAgICB2YXIgbmF2ID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGlkOiBpZCwgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNS5Ccm93c2VyLmluZm8ubmFtZSA9PT0gJ21zaWUnIHx8IGVqMl9iYXNlXzUuQnJvd3Nlci5pbmZvLm5hbWUgPT09ICdlZGdlJykge1xuICAgICAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdlLWllLWFsaWduJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmF2SXRlbSA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19QT1BVUERPV04gKyAnIGUtaWNvbnMnIH0pO1xuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKG5hdkl0ZW0pO1xuICAgICAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChuYXYpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS50YmFyUHJpUmVmID0gZnVuY3Rpb24gKGluRWxlLCBpbmR4LCBzZXBQcmksIGVsLCBkZXMsIGVsV2lkLCB3aWQsIGlnKSB7XG4gICAgICAgICAgICB2YXIgaWdub3JlQ291bnQgPSBpZztcbiAgICAgICAgICAgIHZhciBwb3BFbGUgPSB0aGlzLnBvcE9iai5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gJy4nICsgQ0xTX0lURU0gKyAnOm5vdCguJyArIENMU19TRVBBUkFUT1IgKyAnKTpub3QoLicgKyBDTFNfVEJBUk9WRVJGTE9XICsgJyknO1xuICAgICAgICAgICAgdmFyIHByaUVsZUNudCA9IGVqMl9iYXNlXzMuc2VsZWN0QWxsKCcuJyArIENMU19QT1BVUCArICc6bm90KC4nICsgQ0xTX1RCQVJPVkVSRkxPVyArICcpJywgcG9wRWxlKS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgY2hlY2tDbGFzcyA9IGZ1bmN0aW9uIChlbGUsIHZhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKHZhbCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzMuc2VsZWN0QWxsKHF1ZXJ5LCBpbkVsZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZVNlcCA9IGluRWxlLmNoaWxkcmVuW2luZHggLSAoaW5keCAtIHNlcFByaSkgLSAxXTtcbiAgICAgICAgICAgICAgICB2YXIgaWdub3JlQ2hlY2sgPSAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoZWxlU2VwKSAmJiBjaGVja0NsYXNzKGVsZVNlcCwgQ0xTX1RCQVJJR05PUkUpKTtcbiAgICAgICAgICAgICAgICBpZiAoKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGVsZVNlcCkgJiYgY2hlY2tDbGFzcyhlbGVTZXAsIENMU19TRVBBUkFUT1IpICYmICFlajJfYmFzZV8yLmlzVmlzaWJsZShlbGVTZXApKSB8fCBpZ25vcmVDaGVjaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VwRGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgZWxlU2VwLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVTZXBXaWR0aCA9IGVsZVNlcC5vZmZzZXRXaWR0aCArIChwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZVNlcCkubWFyZ2luUmlnaHQpICogMik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2U2VwID0gZWxlU2VwLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoZWxXaWQgKyBlbGVTZXBXaWR0aCkgPCB3aWQgfHwgZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbkVsZS5pbnNlcnRCZWZvcmUoZWwsIGluRWxlLmNoaWxkcmVuWyhpbmR4ICsgaWdub3JlQ291bnQpIC0gKGluZHggLSBzZXBQcmkpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQocHJldlNlcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2U2VwLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2U2VwLmNsYXNzTGlzdC5jb250YWlucyhDTFNfU0VQQVJBVE9SKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTZXAuc3R5bGUuZGlzcGxheSA9IHNlcERpc3BsYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxlU2VwLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluRWxlLmluc2VydEJlZm9yZShlbCwgaW5FbGUuY2hpbGRyZW5bKGluZHggKyBpZ25vcmVDb3VudCkgLSAoaW5keCAtIHNlcFByaSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbkVsZS5pbnNlcnRCZWZvcmUoZWwsIGluRWxlLmNoaWxkcmVuWyhpbmR4ICsgaWdub3JlQ291bnQpIC0gcHJpRWxlQ250XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnBvcHVwUmVmcmVzaCA9IGZ1bmN0aW9uIChwb3B1cEVsZSwgZGVzdHJveSkge1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBwb3BOYXYgPSBlbGUucXVlcnlTZWxlY3RvcignLicgKyBDTFNfVEJBUk5BVik7XG4gICAgICAgICAgICB2YXIgaW5uZXJFbGUgPSBlbGUucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTVMpO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQocG9wTmF2KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlubmVyRWxlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgIHBvcHVwRWxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gZWxlLm9mZnNldFdpZHRoIC0gKHBvcE5hdi5vZmZzZXRXaWR0aCArIGlubmVyRWxlLm9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBFbGVSZWZyZXNoKHdpZHRoLCBwb3B1cEVsZSwgZGVzdHJveSk7XG4gICAgICAgICAgICBwb3B1cEVsZS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICBpZiAocG9wdXBFbGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5kZXRhY2gocG9wTmF2KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcE9iai5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5kZXRhY2godGhpcy5wb3BPYmouZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BPYmogPSBudWxsO1xuICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZSgnZS10b29scG9wJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmlnbm9yZUVsZUZldGNoID0gZnVuY3Rpb24gKGluZGV4LCBpbm5lckVsZSkge1xuICAgICAgICAgICAgdmFyIGlnbm9yZUVsZSA9IFtdLnNsaWNlLmNhbGwoaW5uZXJFbGUucXVlcnlTZWxlY3RvckFsbCgnLicgKyBDTFNfVEJBUklHTk9SRSkpO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUlueCA9IFtdO1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGlmIChpZ25vcmVFbGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlnbm9yZUVsZS5mb3JFYWNoKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlSW54LnB1c2goW10uc2xpY2UuY2FsbChpbm5lckVsZS5jaGlsZHJlbikuaW5kZXhPZihlbGUpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWdub3JlSW54LmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPD0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucG9wdXBFbGVSZWZyZXNoID0gZnVuY3Rpb24gKHdpZHRoLCBwb3B1cEVsZSwgZGVzdHJveSkge1xuICAgICAgICAgICAgdmFyIGVsZVNwbGljZSA9IHRoaXMudGJhckVsZTtcbiAgICAgICAgICAgIHZhciBwcmlFbGVDbnQ7XG4gICAgICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgICAgICB2YXIgaW5uZXJFbGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTVMpO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUNvdW50ID0gMDtcbiAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIHZhciBlbFdpZHRoID0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIGJ0blRleHQgPSBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19UQkFSQlROVEVYVCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZS10YnRuLWFsaWduJykgfHwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19UQkFSVEVYVCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ0biA9IGVsLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoYnRuVGV4dCkgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19UQkFSVEVYVCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRleHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChidG5UZXh0KSAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1BPUFVQVEVYVCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRleHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnRuLnN0eWxlLm1pbldpZHRoID0gJzAlJztcbiAgICAgICAgICAgICAgICAgICAgZWxXaWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICBidG4uc3R5bGUubWluV2lkdGggPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGJ0blRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5UZXh0LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWwgPT09IHRoaXNfMS50YmFyRWxlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsV2lkdGggKz0gdGhpc18xLnRiYXJFbGVNcmduO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChlbFdpZHRoIDwgd2lkdGggfHwgZGVzdHJveSkge1xuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5taW5XaWR0aCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfUE9QT1ZFUkZMT1cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKENMU19QT1BVUCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzXzEudGJhckVsZS5pbmRleE9mKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNfMS50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzXzEuaXRlbXNbaW5kZXhdLmFsaWduO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzXzEudGJhckFsZ0VsZVsocG9zICsgJ3MnKV0uaW5kZXhPZihlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVTcGxpY2UgPSB0aGlzXzEudGJhckFsZ0VsZVsocG9zICsgJ3MnKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckVsZSA9IHRoaXNfMS5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU1TICsgJyAuJyArICdlLXRvb2xiYXItJyArIHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlcEJlZm9yZVByaV8xID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZWxlU3BsaWNlLnNsaWNlKDAsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJBUk9WRVJGTE9XKSB8fCBlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1NFUEFSQVRPUikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19TRVBBUkFUT1IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggLT0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcEJlZm9yZVByaV8xKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZ25vcmVDb3VudCA9IHRoaXNfMS5pZ25vcmVFbGVGZXRjaChpbmRleCwgaW5uZXJFbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19UQkFST1ZFUkZMT1cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXzEudGJhclByaVJlZihpbm5lckVsZSwgaW5kZXgsIHNlcEJlZm9yZVByaV8xLCBlbCwgZGVzdHJveSwgZWxXaWR0aCwgd2lkdGgsIGlnbm9yZUNvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIC09IGVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckVsZS5pbnNlcnRCZWZvcmUoZWwsIGlubmVyRWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggLT0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlFbGVDbnQgPSBlajJfYmFzZV8zLnNlbGVjdEFsbCgnLicgKyBDTFNfVEJBUk9WRVJGTE9XLCB0aGlzXzEucG9wT2JqLmVsZW1lbnQpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRWxlLmluc2VydEJlZm9yZShlbCwgaW5uZXJFbGUuY2hpbGRyZW5bKGluZGV4ICsgaWdub3JlQ291bnQpIC0gcHJpRWxlQ250XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAtPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IFtdLnNsaWNlLmNhbGwocG9wdXBFbGUuY2hpbGRyZW4pOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGVfMSA9IF9sb29wXzEoZWwpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZV8xID09PSBcImJyZWFrXCIpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5yZW1vdmVQb3NpdGlvbmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU1TKTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGl0ZW0pIHx8ICFpdGVtLmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJBUlBPUykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShpdGVtLCBDTFNfVEJBUlBPUyk7XG4gICAgICAgICAgICB2YXIgaW5uZXJJdGVtID0gW10uc2xpY2UuY2FsbChpdGVtLmNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgaW5uZXJJdGVtWzFdLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgIGlubmVySXRlbVsyXS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnJlZnJlc2hQb3NpdGlvbmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU1TKTtcbiAgICAgICAgICAgIHRoaXMuYWRkKGl0ZW0sIENMU19UQkFSUE9TKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbVBvc2l0aW9uaW5nKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLml0ZW1Qb3NpdGlvbmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU1TKTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGl0ZW0pIHx8ICFpdGVtLmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJBUlBPUykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcG9wdXBOYXYgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfVEJBUk5BVik7XG4gICAgICAgICAgICB2YXIgaW5uZXJJdGVtO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsTW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaW5uZXJJdGVtID0gW10uc2xpY2UuY2FsbChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX1RCQVJTQ1JPTEwpLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlubmVySXRlbSA9IFtdLnNsaWNlLmNhbGwoaXRlbS5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtYXJnaW4gPSBpbm5lckl0ZW1bMF0ub2Zmc2V0V2lkdGggKyBpbm5lckl0ZW1bMl0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB2YXIgdGJhcldpZCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGlmIChwb3B1cE5hdikge1xuICAgICAgICAgICAgICAgIHRiYXJXaWQgLT0gcG9wdXBOYXYub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgaW5uZXJJdGVtWzJdLnN0eWxlLnJpZ2h0ID0gcG9wdXBOYXYub2Zmc2V0V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRiYXJXaWQgPD0gbWFyZ2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gKCgodGJhcldpZCAtIG1hcmdpbikpIC0gaW5uZXJJdGVtWzFdLm9mZnNldFdpZHRoKSAvIDI7XG4gICAgICAgICAgICBpbm5lckl0ZW1bMV0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgdmFyIG1yZ24gPSAoaW5uZXJJdGVtWzBdLm9mZnNldFdpZHRoICsgdmFsdWUpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUnRsID8gaW5uZXJJdGVtWzFdLnN0eWxlLm1hcmdpblJpZ2h0ID0gbXJnbiA6IGlubmVySXRlbVsxXS5zdHlsZS5tYXJnaW5MZWZ0ID0gbXJnbjtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUudGJhckl0ZW1BbGlnbiA9IGZ1bmN0aW9uIChpdGVtLCBpdGVtRWxlLCBwb3MpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgYWxpZ25EaXYgPSBbXTtcbiAgICAgICAgICAgIGFsaWduRGl2LnB1c2goZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX1RCQVJMRUZUIH0pKTtcbiAgICAgICAgICAgIGFsaWduRGl2LnB1c2goZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX1RCQVJDRU5URVIgfSkpO1xuICAgICAgICAgICAgYWxpZ25EaXYucHVzaChlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfVEJBUlJJR0hUIH0pKTtcbiAgICAgICAgICAgIGlmIChwb3MgPT09IDAgJiYgaXRlbS5hbGlnbiAhPT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgYWxpZ25EaXYuZm9yRWFjaChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1FbGUuYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRiYXJBbGlnbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoaXRlbUVsZSwgQ0xTX1RCQVJQT1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5hbGlnbiAhPT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFsaWduRWxlID0gaXRlbUVsZS5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgIHZhciBsZWZ0QWxpZ25fMSA9IGFsaWduRGl2WzBdO1xuICAgICAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwoYWxpZ25FbGUpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRiYXJBbGdFbGUubGVmdHMucHVzaChlbCk7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRBbGlnbl8xLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpdGVtRWxlLmFwcGVuZENoaWxkKGxlZnRBbGlnbl8xKTtcbiAgICAgICAgICAgICAgICBpdGVtRWxlLmFwcGVuZENoaWxkKGFsaWduRGl2WzFdKTtcbiAgICAgICAgICAgICAgICBpdGVtRWxlLmFwcGVuZENoaWxkKGFsaWduRGl2WzJdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRiYXJBbGlnbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoaXRlbUVsZSwgQ0xTX1RCQVJQT1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5jdHJsVGVtcGxhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5jdHJsVGVtID0gdGhpcy50cmd0RWxlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMudHJndEVsZSwgQ0xTX0lURU1TKTtcbiAgICAgICAgICAgIHRoaXMudGJhckVsZSA9IFtdO1xuICAgICAgICAgICAgdmFyIGlubmVyRWxlID0gW10uc2xpY2UuY2FsbCh0aGlzLnRyZ3RFbGUuY2hpbGRyZW4pO1xuICAgICAgICAgICAgaW5uZXJFbGUuZm9yRWFjaChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZS50YWdOYW1lID09PSAnRElWJykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50YmFyRWxlLnB1c2goZWxlKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGQoZWxlLCBDTFNfSVRFTSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnJlbmRlckl0ZW1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBpdGVtRWxlRG9tO1xuICAgICAgICAgICAgdmFyIGlubmVySXRlbTtcbiAgICAgICAgICAgIHZhciBpbm5lclBvcztcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgICAgICBpZiAoZWxlICYmIGVsZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaXRlbUVsZURvbSA9IGVsZS5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy50cmd0RWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0cmxUZW1wbGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWxlICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW1FbGVEb20pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUVsZURvbSA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19JVEVNUyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpbm5lckl0ZW0gPSB0aGlzLnJlbmRlclN1YkNvbXBvbmVudChpdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRiYXJFbGUuaW5kZXhPZihpbm5lckl0ZW0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YmFyRWxlLnB1c2goaW5uZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRiYXJJdGVtQWxpZ24oaXRlbXNbaV0sIGl0ZW1FbGVEb20sIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlubmVyUG9zID0gaXRlbUVsZURvbS5xdWVyeVNlbGVjdG9yKCcuZS10b29sYmFyLScgKyBpdGVtc1tpXS5hbGlnbi50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVyUG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRiYXJBbGdFbGVbKGl0ZW1zW2ldLmFsaWduICsgJ3MnKV0ucHVzaChpbm5lckl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJQb3MuYXBwZW5kQ2hpbGQoaW5uZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1FbGVEb20uYXBwZW5kQ2hpbGQoaW5uZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGUuYXBwZW5kQ2hpbGQoaXRlbUVsZURvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnNldEF0dHIgPSBmdW5jdGlvbiAoYXR0ciwgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGtleSA9IE9iamVjdC5rZXlzKGF0dHIpO1xuICAgICAgICAgICAgdmFyIGtleVZhbDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAga2V5VmFsID0ga2V5W2ldO1xuICAgICAgICAgICAgICAgIGtleVZhbCA9PT0gJ2NsYXNzJyA/IHRoaXMuYWRkKGVsZW1lbnQsIGF0dHJba2V5VmFsXSkgOiBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXlWYWwsIGF0dHJba2V5VmFsXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmVuYWJsZUl0ZW1zID0gZnVuY3Rpb24gKGl0ZW1zLCBpc0VuYWJsZSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gaXRlbXM7XG4gICAgICAgICAgICB2YXIgbGVuID0gZWxlbWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoaXNFbmFibGUpKSB7XG4gICAgICAgICAgICAgICAgaXNFbmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGVuYWJsZSA9IGZ1bmN0aW9uIChpc0VuYWJsZSwgZWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKENMU19ESVNBQkxFKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoQ0xTX0RJU0FCTEUpO1xuICAgICAgICAgICAgICAgICAgICBlbGUuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGxlbiAmJiBsZW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICBlbmFibGUoaXNFbmFibGUsIGVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlzRW5hYmxlID8gZWoyX2Jhc2VfMi5yZW1vdmVDbGFzcyhlbGVtZW50cywgQ0xTX0RJU0FCTEUpIDogZWoyX2Jhc2VfMi5hZGRDbGFzcyhlbGVtZW50cywgQ0xTX0RJU0FCTEUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBlbGUgPSAobGVuICYmIGxlbiA9PT0gMSkgPyBlbGVtZW50c1swXSA6IGl0ZW1zO1xuICAgICAgICAgICAgICAgIGVuYWJsZShpc0VuYWJsZSwgZWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuYWRkSXRlbXMgPSBmdW5jdGlvbiAoaXRlbXMsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgaW5uZXJJdGVtcztcbiAgICAgICAgICAgIHZhciBpdGVtc0RpdiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNUyk7XG4gICAgICAgICAgICB2YXIgaW5uZXJFbGU7XG4gICAgICAgICAgICB2YXIgaXRlbUFnbiA9ICdsZWZ0JztcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGluZGV4KSkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoZS5hbGlnbikgJiYgZS5hbGlnbiAhPT0gJ2xlZnQnICYmIGl0ZW1BZ24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtQWduID0gZS5hbGlnbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgaXRlbXNfMSA9IGl0ZW1zOyBfaSA8IGl0ZW1zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc18xW19pXTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChpdGVtLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udHlwZSA9ICdCdXR0b24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbm5lckl0ZW1zID0gZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX0lURU0sIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaXRlbS5hbGlnbiA9IGl0ZW1BZ247XG4gICAgICAgICAgICAgICAgaW5uZXJFbGUgPSB0aGlzLnJlbmRlclN1YkNvbXBvbmVudChpdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyRWxlLmxlbmd0aCA+PSBpbmRleCAmJiBpbm5lckl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95TW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbGdJbmRleCA9IGl0ZW0uYWxpZ25bMF0gPT09ICdsJyA/IDAgOiBpdGVtLmFsaWduWzBdID09PSAnYycgPyAxIDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGUgPSBlajJfYmFzZV8yLmNsb3Nlc3QoaW5uZXJJdGVtc1swXSwgJy4nICsgQ0xTX0lURU1TKS5jaGlsZHJlblthbGdJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGUuaW5zZXJ0QmVmb3JlKGlubmVyRWxlLCBlbGUuY2hpbGRyZW5baW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGJhckFsZ0VsZVsoaXRlbS5hbGlnbiArICdzJyldLnNwbGljZShpbmRleCwgMCwgaW5uZXJFbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoUG9zaXRpb25pbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySXRlbXNbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaW5uZXJFbGUsIGlubmVySXRlbXNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGJhckVsZS5zcGxpY2UoaW5kZXgsIDAsIGlubmVyRWxlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXRXaWQgPSBpdGVtc0Rpdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtc0Rpdi5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJPdmVyZmxvd01vZGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucmVtb3ZlSXRlbXMgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gYXJncztcbiAgICAgICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgICAgIHZhciBpbm5lckl0ZW1zID0gW10uc2xpY2UuY2FsbChlajJfYmFzZV8zLnNlbGVjdEFsbCgnLicgKyBDTFNfSVRFTSwgdGhpcy5lbGVtZW50KSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIChlbGVtZW50cykgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBwYXJzZUludChhcmdzLnRvU3RyaW5nKCksIDEwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW1CeUluZGV4KGluZGV4LCBpbm5lckl0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnRzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGUgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMudGJhckVsZS5pbmRleE9mKGVsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW1CeUluZGV4KGluZGV4LCBpbm5lckl0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySXRlbXMgPSBlajJfYmFzZV8zLnNlbGVjdEFsbCgnLicgKyBDTFNfSVRFTSwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZSA9IChlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggJiYgZWxlbWVudHMubGVuZ3RoID09PSAxKSA/IGVsZW1lbnRzWzBdIDogYXJncztcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpbm5lckl0ZW1zLmluZGV4T2YoZWxlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtQnlJbmRleChpbmRleCwgaW5uZXJJdGVtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucmVtb3ZlSXRlbUJ5SW5kZXggPSBmdW5jdGlvbiAoaW5kZXgsIGlubmVySXRlbXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRiYXJFbGVbaW5kZXhdICYmIGlubmVySXRlbXNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZUlkeCA9IHRoaXMudGJhckVsZS5pbmRleE9mKGlubmVySXRlbXNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4QWduID0gdGhpcy50YmFyQWxnRWxlWyh0aGlzLml0ZW1zW2VsZUlkeF0uYWxpZ24gKyAncycpXS5pbmRleE9mKHRoaXMudGJhckVsZVtlbGVJZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YmFyQWxnRWxlWyh0aGlzLml0ZW1zW2VsZUlkeF0uYWxpZ24gKyAncycpXS5zcGxpY2UoaW5kZXhBZ24sIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLmRldGFjaChpbm5lckl0ZW1zW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoZWxlSWR4LCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRiYXJFbGUuc3BsaWNlKGVsZUlkeCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnRlbXBsYXRlUmVuZGVyID0gZnVuY3Rpb24gKHRlbXBsYXRlUHJvcCwgaW5uZXJFbGUsIGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBpdGVtVHlwZSA9IGl0ZW0udHlwZTtcbiAgICAgICAgICAgIHZhciBlbGVPYmogPSB0ZW1wbGF0ZVByb3A7XG4gICAgICAgICAgICB2YXIgaXNDb21wb25lbnQ7XG4gICAgICAgICAgICBpZiAodHlwZW9mICh0ZW1wbGF0ZVByb3ApID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlzQ29tcG9uZW50ID0gdHlwZW9mIChlbGVPYmouYXBwZW5kVG8pID09PSAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGVtcGxhdGVQcm9wKSA9PT0gJ3N0cmluZycgfHwgIWlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlRm4gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IHRlbXBsYXRlUHJvcDtcbiAgICAgICAgICAgICAgICB2YWwgPSAodHlwZW9mICh0ZW1wbGF0ZVByb3ApID09PSAnc3RyaW5nJykgPyB0ZW1wbGF0ZVByb3AudHJpbSgpIDogdGVtcGxhdGVQcm9wO1xuICAgICAgICAgICAgICAgIHZhciBlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHZhbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVGbiA9IGVqMl9iYXNlXzQuY29tcGlsZShlbGUub3V0ZXJIVE1MLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8yLmRldGFjaChlbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlRm4gPSBlajJfYmFzZV80LmNvbXBpbGUodmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRlbXBsYXRlRm4pICYmIHRlbXBsYXRlRm4oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwodGVtcGxhdGVGbigpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChlbGUudGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGUuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJFbGUuYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbVR5cGUgPT09ICdJbnB1dCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGl0ZW0uaWQgPyAoZWxlLmlkID0gaXRlbS5pZCkgOiAoZWxlLmlkID0gZWoyX2Jhc2VfNC5nZXRVbmlxdWVJRCgndGJyLWlwdCcpKTtcbiAgICAgICAgICAgICAgICBpbm5lckVsZS5hcHBlbmRDaGlsZChlbGUpO1xuICAgICAgICAgICAgICAgIGVsZU9iai5hcHBlbmRUbyhlbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGQoaW5uZXJFbGUsIENMU19URU1QTEFURSk7XG4gICAgICAgICAgICB0aGlzLnRiYXJFbGUucHVzaChpbm5lckVsZSk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmJ1dHRvblJlbmRlcmluZyA9IGZ1bmN0aW9uIChpdGVtLCBpbm5lckVsZSkge1xuICAgICAgICAgICAgdmFyIGRvbSA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzc05hbWU6IENMU19UQkFSQlROIH0pO1xuICAgICAgICAgICAgdmFyIHRleHRTdHIgPSBpdGVtLnRleHQ7XG4gICAgICAgICAgICB2YXIgaWNvbkNzcztcbiAgICAgICAgICAgIHZhciBpY29uUG9zO1xuICAgICAgICAgICAgaXRlbS5pZCA/IChkb20uaWQgPSBpdGVtLmlkKSA6IGRvbS5pZCA9IGVqMl9iYXNlXzQuZ2V0VW5pcXVlSUQoJ2UtdGJyLWJ0bicpO1xuICAgICAgICAgICAgdmFyIGJ0blR4dCA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICdlLXRiYXItYnRuLXRleHQnIH0pO1xuICAgICAgICAgICAgaWYgKHRleHRTdHIpIHtcbiAgICAgICAgICAgICAgICBidG5UeHQuaW5uZXJIVE1MID0gdGV4dFN0cjtcbiAgICAgICAgICAgICAgICBkb20uYXBwZW5kQ2hpbGQoYnRuVHh0KTtcbiAgICAgICAgICAgICAgICBkb20uY2xhc3NMaXN0LmFkZCgnZS10YnRuLXR4dCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoaW5uZXJFbGUsICdlLXRidG4tYWxpZ24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLnByZWZpeEljb24gfHwgaXRlbS5zdWZmaXhJY29uKSB7XG4gICAgICAgICAgICAgICAgaWYgKChpdGVtLnByZWZpeEljb24gJiYgaXRlbS5zdWZmaXhJY29uKSB8fCBpdGVtLnByZWZpeEljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNzcyA9IGl0ZW0ucHJlZml4SWNvbiArICcgZS1pY29ucyc7XG4gICAgICAgICAgICAgICAgICAgIGljb25Qb3MgPSAnbGVmdCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ3NzID0gaXRlbS5zdWZmaXhJY29uICsgJyBlLWljb25zJztcbiAgICAgICAgICAgICAgICAgICAgaWNvblBvcyA9ICdyaWdodCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3IGVqMl9idXR0b25zXzEuQnV0dG9uKHsgaWNvbkNzczogaWNvbkNzcywgaWNvblBvc2l0aW9uOiBpY29uUG9zIH0sIGRvbSk7XG4gICAgICAgICAgICBpZiAoaXRlbS53aWR0aCkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUoZG9tLCB7ICd3aWR0aCc6IGVqMl9iYXNlXzQuZm9ybWF0VW5pdChpdGVtLndpZHRoKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb207XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnJlbmRlclN1YkNvbXBvbmVudCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgaW5uZXJFbGU7XG4gICAgICAgICAgICB2YXIgZG9tO1xuICAgICAgICAgICAgaW5uZXJFbGUgPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfSVRFTSB9KTtcbiAgICAgICAgICAgIGlubmVyRWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRiYXJFbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRiYXJFbGUgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLmh0bWxBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyKGl0ZW0uaHRtbEF0dHJpYnV0ZXMsIGlubmVyRWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLnRvb2x0aXBUZXh0KSB7XG4gICAgICAgICAgICAgICAgaW5uZXJFbGUuc2V0QXR0cmlidXRlKCd0aXRsZScsIGl0ZW0udG9vbHRpcFRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBpbm5lckVsZS5jbGFzc05hbWUgPSBpbm5lckVsZS5jbGFzc05hbWUgKyAnICcgKyBpdGVtLmNzc0NsYXNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0udGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlUmVuZGVyKGl0ZW0udGVtcGxhdGUsIGlubmVyRWxlLCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0J1dHRvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBkb20gPSB0aGlzLmJ1dHRvblJlbmRlcmluZyhpdGVtLCBpbm5lckVsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJFbGUuYXBwZW5kQ2hpbGQoZG9tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5pdGVtQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2VwYXJhdG9yJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKGlubmVyRWxlLCBDTFNfU0VQQVJBVE9SKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLnNob3dUZXh0T24pIHtcbiAgICAgICAgICAgICAgICB2YXIgc1R4dCA9IGl0ZW0uc2hvd1RleHRPbjtcbiAgICAgICAgICAgICAgICBpZiAoc1R4dCA9PT0gJ1Rvb2xiYXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKGlubmVyRWxlLCBDTFNfUE9QVVBURVhUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQoaW5uZXJFbGUsICdlLXRidG4tYWxpZ24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc1R4dCA9PT0gJ092ZXJmbG93Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZChpbm5lckVsZSwgQ0xTX1RCQVJURVhUKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5vdmVyZmxvdykge1xuICAgICAgICAgICAgICAgIHZhciBvdmVyZmxvdyA9IGl0ZW0ub3ZlcmZsb3c7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJmbG93ID09PSAnU2hvdycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQoaW5uZXJFbGUsIENMU19UQkFST1ZFUkZMT1cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvdmVyZmxvdyA9PT0gJ0hpZGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5uZXJFbGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19TRVBBUkFUT1IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZChpbm5lckVsZSwgQ0xTX1BPUE9WRVJGTE9XKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbm5lckVsZTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuaXRlbUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRWxlU3dpdGNoKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmFjdGl2ZUVsZVN3aXRjaCA9IGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRWxlUmVtb3ZlKGVsZS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUVsZS5mb2N1cygpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5hY3RpdmVFbGVSZW1vdmUgPSBmdW5jdGlvbiAoY3VyRWxlKSB7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5hY3RpdmVFbGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVFbGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbGUgPSBjdXJFbGU7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLnRyZ3RFbGUpICYmICFjdXJFbGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RFTVBMQVRFKSkge1xuICAgICAgICAgICAgICAgIGN1ckVsZS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUVsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuZ2V0UGVyc2lzdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRPblBlcnNpc3QoW10pO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5nZXRNb2R1bGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICd0b29sYmFyJztcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMudGJSZXNpemUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtUG9zaXRpb25pbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvcE9iaikge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wT2JqLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGVja092ZXJmbG93ID0gdGhpcy5jaGVja092ZXJmbG93KGVsZSwgZWxlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoQ0xTX0lURU1TKVswXSk7XG4gICAgICAgICAgICBpZiAoIWNoZWNrT3ZlcmZsb3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lIU2Nyb2xsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hlY2tPdmVyZmxvdyAmJiB0aGlzLnNjcm9sbE1vZHVsZSAmJiAodGhpcy5vZmZzZXRXaWQgPT09IGVsZS5vZmZzZXRXaWR0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vZmZzZXRXaWQgPiBlbGUub2Zmc2V0V2lkdGggfHwgY2hlY2tPdmVyZmxvdykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyT3ZlcmZsb3dNb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wb3BPYmopIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVQb3NpdGlvbmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwUmVmcmVzaCh0aGlzLnBvcE9iai5lbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFBvc2l0aW9uaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vZmZzZXRXaWQgPSBlbGUub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB0aGlzLnRiUmVzaXplID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLm9uUHJvcGVydHlDaGFuZ2VkID0gZnVuY3Rpb24gKG5ld1Byb3AsIG9sZFByb3ApIHtcbiAgICAgICAgICAgIHZhciB0RWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG5ld1Byb3ApOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpdGVtcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lJdGVtcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJJdGVtcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJPdmVyZmxvd01vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd3aWR0aCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2lkID0gdEVsZS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUodEVsZSwgeyAnd2lkdGgnOiBlajJfYmFzZV80LmZvcm1hdFVuaXQobmV3UHJvcC53aWR0aCkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck92ZXJmbG93TW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9wT2JqICYmIHdpZCA8IHRFbGUub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwUmVmcmVzaCh0aGlzLnBvcE9iai5lbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaGVpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5lbGVtZW50LCB7ICdoZWlnaHQnOiBlajJfYmFzZV80LmZvcm1hdFVuaXQobmV3UHJvcC5oZWlnaHQpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ292ZXJmbG93TW9kZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck92ZXJmbG93TW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlUnRsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQodEVsZSwgQ0xTX1JUTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5hYmxlUnRsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3AuZW5hYmxlUnRsID8gdGhpcy5hZGQodEVsZSwgQ0xTX1JUTCkgOiB0aGlzLnJlbW92ZSh0RWxlLCBDTFNfUlRMKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLnNjcm9sbE1vZHVsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9wLmVuYWJsZVJ0bCA/IHRoaXMuYWRkKHRoaXMuc2Nyb2xsTW9kdWxlLmVsZW1lbnQsIENMU19SVEwpIDogdGhpcy5yZW1vdmUodGhpcy5zY3JvbGxNb2R1bGUuZWxlbWVudCwgQ0xTX1JUTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5wb3BPYmopKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcC5lbmFibGVSdGwgPyB0aGlzLmFkZCh0aGlzLnBvcE9iai5lbGVtZW50LCBDTFNfUlRMKSA6IHRoaXMucmVtb3ZlKHRoaXMucG9wT2JqLmVsZW1lbnQsIENMU19SVEwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVG9vbGJhcjtcbiAgICB9KGVqMl9iYXNlXzEuQ29tcG9uZW50KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzQuQ29sbGVjdGlvbihbXSwgSXRlbSlcbiAgICBdLCBUb29sYmFyLnByb3RvdHlwZSwgXCJpdGVtc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdhdXRvJylcbiAgICBdLCBUb29sYmFyLnByb3RvdHlwZSwgXCJ3aWR0aFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdhdXRvJylcbiAgICBdLCBUb29sYmFyLnByb3RvdHlwZSwgXCJoZWlnaHRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnU2Nyb2xsYWJsZScpXG4gICAgXSwgVG9vbGJhci5wcm90b3R5cGUsIFwib3ZlcmZsb3dNb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgVG9vbGJhci5wcm90b3R5cGUsIFwiZW5hYmxlUnRsXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIFRvb2xiYXIucHJvdG90eXBlLCBcImNsaWNrZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgVG9vbGJhci5wcm90b3R5cGUsIFwiY3JlYXRlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBUb29sYmFyLnByb3RvdHlwZSwgXCJkZXN0cm95ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgVG9vbGJhci5wcm90b3R5cGUsIFwiYmVmb3JlQ3JlYXRlXCIsIHZvaWQgMCk7XG4gICAgVG9vbGJhciA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV81Lk5vdGlmeVByb3BlcnR5Q2hhbmdlc1xuICAgIF0sIFRvb2xiYXIpO1xuICAgIGV4cG9ydHMuVG9vbGJhciA9IFRvb2xiYXI7XG4gICAgZXhwb3J0cy50b29sYmFyQnVpbGRlciA9IGVqMl9iYXNlXzUuQ3JlYXRlQnVpbGRlcihUb29sYmFyKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdG9vbGJhci90b29sYmFyLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItcG9wdXBzXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1idXR0b25zXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==