/*!
*  filename: ej2-navigations.umd.js
*  version : 1.0.25
*  Copyright Syncfusion Inc. 2001 - 2017. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@syncfusion/ej2-base"), require("@syncfusion/ej2-popups"), require("@syncfusion/ej2-buttons"), require("@syncfusion/ej2-lists"), require("@syncfusion/ej2-data"));
	else if(typeof define === 'function' && define.amd)
		define(["@syncfusion/ej2-base", "@syncfusion/ej2-popups", "@syncfusion/ej2-buttons", "@syncfusion/ej2-lists", "@syncfusion/ej2-data"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@syncfusion/ej2-base"), require("@syncfusion/ej2-popups"), require("@syncfusion/ej2-buttons"), require("@syncfusion/ej2-lists"), require("@syncfusion/ej2-data")) : factory(root["@syncfusion/ej2-base"], root["@syncfusion/ej2-popups"], root["@syncfusion/ej2-buttons"], root["@syncfusion/ej2-lists"], root["@syncfusion/ej2-data"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_17__) {
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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(4), __webpack_require__(8), __webpack_require__(10), __webpack_require__(13), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, index_1, index_2, index_3, index_4, index_5, index_6) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(index_1);
	    __export(index_2);
	    __export(index_3);
	    __export(index_4);
	    __export(index_5);
	    __export(index_6);
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
	            var keyCheck = (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 35 || e.keyCode === 36);
	            if (keyCheck) {
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
	                    else if (e.action === 'moveDown' && popObj && ej2_base_2.isVisible(popObj.element)) {
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
	                if (!ej2_base_4.isNullOrUndefined(elem) && elem.children.length === 0) {
	                    elem = Object(elem)[pos + 'ElementSibling'];
	                }
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
	            var isPopupElement = !ej2_base_4.isNullOrUndefined(ej2_base_2.closest(trgt, '.' + CLS_POPUPCLASS));
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
	            if (isPopupElement && !eventArgs.cancel) {
	                this.popObj.hide({ name: 'SlideUp', duration: 100 });
	            }
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
	                width += (el.offsetWidth + parseFloat(window.getComputedStyle(el).marginRight));
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
	            popObj.element.style.maxHeight = popObj.element.offsetHeight + 'px';
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
	                var tempArray = void 0;
	                if (!ej2_base_4.isNullOrUndefined(templateFn)) {
	                    tempArray = templateFn({}, this, 'template');
	                }
	                if (!ej2_base_4.isNullOrUndefined(tempArray) && tempArray.length > 0) {
	                    [].slice.call(tempArray).forEach(function (ele) {
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
	            dom.setAttribute('type', 'button');
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
	                        if (this.tbarAlign) {
	                            this.itemPositioning();
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, accordion_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(accordion_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, ej2_base_5, ej2_base_6) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var CLS_ACRDN_ROOT = 'e-acrdn-root';
	    var CLS_ROOT = 'e-accordion';
	    var CLS_ITEM = 'e-acrdn-item';
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
	    var CLS_RTL = 'e-rtl';
	    var CLS_CTNHIDE = 'e-content-hide';
	    var CLS_SLCT = 'e-select';
	    var CLS_SLCTED = 'e-selected';
	    var CLS_ACTIVE = 'e-active';
	    var CLS_ANIMATE = 'e-animate';
	    var CLS_DISABLE = 'e-overlay';
	    var CLS_TOGANIMATE = 'e-toggle-animation';
	    var CLS_NEST = 'e-nested';
	    var CLS_EXPANDSTATE = 'e-expand-state';
	    var AccordionActionSettings = (function (_super) {
	        __extends(AccordionActionSettings, _super);
	        function AccordionActionSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return AccordionActionSettings;
	    }(ej2_base_4.ChildProperty));
	    __decorate([
	        ej2_base_1.Property('SlideDown')
	    ], AccordionActionSettings.prototype, "effect", void 0);
	    __decorate([
	        ej2_base_1.Property(400)
	    ], AccordionActionSettings.prototype, "duration", void 0);
	    __decorate([
	        ej2_base_1.Property('linear')
	    ], AccordionActionSettings.prototype, "easing", void 0);
	    exports.AccordionActionSettings = AccordionActionSettings;
	    var AccordionAnimationSettings = (function (_super) {
	        __extends(AccordionAnimationSettings, _super);
	        function AccordionAnimationSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return AccordionAnimationSettings;
	    }(ej2_base_4.ChildProperty));
	    __decorate([
	        ej2_base_5.Complex({ effect: 'SlideUp', duration: 400, easing: 'linear' }, AccordionActionSettings)
	    ], AccordionAnimationSettings.prototype, "collapse", void 0);
	    __decorate([
	        ej2_base_5.Complex({ effect: 'SlideDown', duration: 400, easing: 'linear' }, AccordionActionSettings)
	    ], AccordionAnimationSettings.prototype, "expand", void 0);
	    exports.AccordionAnimationSettings = AccordionAnimationSettings;
	    var AccordionItem = (function (_super) {
	        __extends(AccordionItem, _super);
	        function AccordionItem() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return AccordionItem;
	    }(ej2_base_4.ChildProperty));
	    __decorate([
	        ej2_base_1.Property(undefined)
	    ], AccordionItem.prototype, "content", void 0);
	    __decorate([
	        ej2_base_1.Property(undefined)
	    ], AccordionItem.prototype, "header", void 0);
	    __decorate([
	        ej2_base_1.Property(undefined)
	    ], AccordionItem.prototype, "cssClass", void 0);
	    __decorate([
	        ej2_base_1.Property(undefined)
	    ], AccordionItem.prototype, "iconCss", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], AccordionItem.prototype, "expanded", void 0);
	    exports.AccordionItem = AccordionItem;
	    var Accordion = (function (_super) {
	        __extends(Accordion, _super);
	        function Accordion(options, element) {
	            var _this = _super.call(this, options, element) || this;
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
	            var nested = ej2_base_3.closest(this.element, '.' + CLS_CONTENT);
	            this.isNested = false;
	            if (!this.isDestroy) {
	                this.isDestroy = false;
	            }
	            if (!ej2_base_6.isNullOrUndefined(nested)) {
	                nested.classList.add(CLS_NEST);
	                this.isNested = true;
	            }
	            else {
	                this.element.classList.add(CLS_ACRDN_ROOT);
	            }
	            if (this.enableRtl) {
	                this.add(this.element, CLS_RTL);
	            }
	            this.expandedItems = [];
	        };
	        Accordion.prototype.add = function (ele, val) {
	            ele.classList.add(val);
	        };
	        Accordion.prototype.remove = function (ele, val) {
	            ele.classList.remove(val);
	        };
	        Accordion.prototype.render = function () {
	            this.initialize();
	            this.renderControl();
	            this.wireEvents();
	        };
	        Accordion.prototype.initialize = function () {
	            var width = ej2_base_6.formatUnit(this.width);
	            var height = ej2_base_6.formatUnit(this.height);
	            ej2_base_5.setStyleAttribute(this.element, { 'width': width, 'height': height });
	            var ariaAttr = {
	                'aria-disabled': 'false', 'role': 'presentation', 'aria-multiselectable': 'true'
	            };
	            if (this.expandedItems.length > 0) {
	                this.initExpand = this.expandedItems;
	            }
	            ej2_base_3.attributes(this.element, ariaAttr);
	            if (this.expandMode === 'Single') {
	                this.element.setAttribute('aria-multiselectable', 'false');
	            }
	        };
	        Accordion.prototype.renderControl = function () {
	            this.trgtEle = (this.element.children.length > 0) ? ej2_base_3.select('div', this.element) : null;
	            this.renderItems();
	            this.initItemExpand();
	        };
	        Accordion.prototype.unwireEvents = function () {
	            ej2_base_1.EventHandler.remove(this.element, 'click', this.clickHandler);
	            if (!ej2_base_6.isNullOrUndefined(this.keyModule)) {
	                this.keyModule.destroy();
	            }
	        };
	        Accordion.prototype.wireEvents = function () {
	            ej2_base_1.EventHandler.add(this.element, 'click', this.clickHandler, this);
	            if (!this.isNested && !this.isDestroy) {
	                ej2_base_1.rippleEffect(this.element, { selector: '.' + CLS_HEADER });
	            }
	            if (!this.isNested) {
	                this.keyModule = new ej2_base_1.KeyboardEvents(this.element, {
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
	            ej2_base_3.addClass(innerEles, [CLS_ITEM]);
	            [].slice.call(innerEles).forEach(function (el) {
	                el.id = ej2_base_2.getUniqueID('acrdn_item');
	                if (el.children.length > 0) {
	                    _this.add(el.children[0], CLS_HEADER);
	                    var header = el.children[0];
	                    ej2_base_3.attributes(header, { 'tabindex': '0', 'role': 'heading', 'aria-level': innerEles.length.toString() });
	                    header.id = ej2_base_2.getUniqueID('acrdn_header');
	                    ej2_base_1.EventHandler.add(header, 'focus', _this.focusIn, _this);
	                    ej2_base_1.EventHandler.add(header, 'blur', _this.focusOut, _this);
	                    var headerEle = header.firstElementChild;
	                    if (headerEle) {
	                        headerEle.classList.add(CLS_HEADERCTN);
	                    }
	                    content = el.children[1];
	                    if (content) {
	                        content.id = ej2_base_2.getUniqueID('acrdn_panel');
	                        header.setAttribute('aria-controls', content.id);
	                        content.style.display = '';
	                        el.classList.add(CLS_SLCT);
	                        el.children[0].appendChild(_this.toggleIconGenerate());
	                        ej2_base_3.classList(content, [CLS_CONTENT, CLS_CTNHIDE], []);
	                        ej2_base_3.attributes(content, { 'aria-labelledby': header.id, 'aria-hidden': 'true' });
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
	            var tglIcon = ej2_base_5.createElement('div', { className: CLS_TOOGLEICN });
	            var hdrColIcon = ej2_base_5.createElement('span', { className: CLS_COLLAPSEICN });
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
	            if (ej2_base_6.isNullOrUndefined(this.initExpand)) {
	                this.initExpand = [];
	            }
	            var items = this.items;
	            if (!ej2_base_6.isNullOrUndefined(this.trgtEle)) {
	                this.ctrlTemplate();
	            }
	            else if (ele && items.length > 0) {
	                items.forEach(function (item, index) {
	                    innerItem = _this.renderInnerItem(item, index);
	                    ele.appendChild(innerItem);
	                    if (innerItem.childElementCount > 0) {
	                        ej2_base_1.EventHandler.add(innerItem.querySelector('.' + CLS_HEADER), 'focus', _this.focusIn, _this);
	                        ej2_base_1.EventHandler.add(innerItem.querySelector('.' + CLS_HEADER), 'blur', _this.focusOut, _this);
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
	            var acrdEle = ej2_base_3.closest(trgt, '.' + CLS_ROOT);
	            if (acrdEle !== this.element) {
	                return;
	            }
	            trgt.classList.add('e-target');
	            var acrdnItem = ej2_base_3.closest(trgt, '.' + CLS_ITEM);
	            var acrdnHdr = ej2_base_3.closest(trgt, '.' + CLS_HEADER);
	            var acrdnCtn = ej2_base_3.closest(trgt, '.' + CLS_CONTENT);
	            if (acrdnItem && (ej2_base_6.isNullOrUndefined(acrdnHdr) || ej2_base_6.isNullOrUndefined(acrdnCtn))) {
	                acrdnHdr = acrdnItem.children[0];
	                acrdnCtn = acrdnItem.children[1];
	            }
	            if (acrdnHdr) {
	                tglIcon = ej2_base_3.select('.' + CLS_TOOGLEICN, acrdnHdr);
	            }
	            var acrdnCtnItem;
	            if (acrdnCtn) {
	                acrdnCtnItem = ej2_base_3.closest(acrdnCtn, '.' + CLS_ITEM);
	            }
	            var acrdActive = [];
	            index = this.getIndexByItem(acrdnItem);
	            if (acrdnCtnItem) {
	                eventArgs.item = this.items[this.getIndexByItem(acrdnCtnItem)];
	            }
	            eventArgs.originalEvent = e;
	            var ctnCheck = !ej2_base_6.isNullOrUndefined(tglIcon) && ej2_base_6.isNullOrUndefined(this.trgtEle) && acrdnItem.childElementCount <= 1;
	            if (ctnCheck && (ej2_base_6.isNullOrUndefined(acrdnCtn) || !ej2_base_6.isNullOrUndefined(ej2_base_3.select('.' + CLS_HEADER + ' .' + CLS_TOOGLEICN, acrdnCtnItem)))) {
	                acrdnItem.appendChild(this.contentRendering(index));
	                this.ariaAttrUpdate(acrdnItem);
	            }
	            this.trigger('clicked', eventArgs);
	            var cntclkCheck = (acrdnCtn && !ej2_base_6.isNullOrUndefined(ej2_base_3.select('.e-target', acrdnCtn)));
	            cntclkCheck = cntclkCheck && (ej2_base_6.isNullOrUndefined(ej2_base_3.select('.' + CLS_ROOT, acrdnCtn)) || !(ej2_base_3.closest(trgt, '.' + CLS_ROOT) === this.element));
	            trgt.classList.remove('e-target');
	            if (trgt.classList.contains(CLS_CONTENT) || trgt.classList.contains(CLS_CTENT) || cntclkCheck) {
	                return;
	            }
	            [].slice.call(this.element.children).forEach(function (el) {
	                if (el.classList.contains(CLS_ACTIVE)) {
	                    acrdActive.push(el);
	                }
	            });
	            var acrdAniEle = [].slice.call(this.element.querySelectorAll('.' + CLS_ITEM + ' [' + CLS_ANIMATE + ']'));
	            if (acrdAniEle.length > 0) {
	                for (var _i = 0, acrdAniEle_1 = acrdAniEle; _i < acrdAniEle_1.length; _i++) {
	                    var el = acrdAniEle_1[_i];
	                    acrdActive.push(el.parentElement);
	                }
	            }
	            var sameContentCheck = acrdActive.indexOf(acrdnCtnItem) !== -1 && acrdnCtn.getAttribute('e-animate') === 'true';
	            var sameHeader = false;
	            if (!ej2_base_6.isNullOrUndefined(acrdnItem) && !ej2_base_6.isNullOrUndefined(acrdnHdr)) {
	                var acrdnCtn_1 = ej2_base_3.select('.' + CLS_CONTENT, acrdnItem);
	                var acrdnRoot = ej2_base_3.closest(acrdnItem, '.' + CLS_ACRDN_ROOT);
	                var expandState = acrdnRoot.querySelector('.' + CLS_EXPANDSTATE);
	                if (ej2_base_6.isNullOrUndefined(acrdnCtn_1)) {
	                    return;
	                }
	                sameHeader = (expandState === acrdnItem);
	                if (ej2_base_3.isVisible(acrdnCtn_1) && (!sameContentCheck || acrdnCtnItem.classList.contains(CLS_SLCTED))) {
	                    this.collapse(acrdnCtn_1);
	                }
	                else {
	                    if ((acrdActive.length > 0) && this.expandMode === 'Single' && !sameContentCheck) {
	                        acrdActive.forEach(function (el) {
	                            _this.collapse(ej2_base_3.select('.' + CLS_CONTENT, el));
	                            el.classList.remove(CLS_EXPANDSTATE);
	                        });
	                    }
	                    this.expand(acrdnCtn_1);
	                }
	                if (!ej2_base_6.isNullOrUndefined(expandState) && !sameHeader) {
	                    expandState.classList.remove(CLS_EXPANDSTATE);
	                }
	            }
	        };
	        Accordion.prototype.eleMoveFocus = function (action, root, trgt) {
	            var clst;
	            var clstItem = ej2_base_3.closest(trgt, '.' + CLS_ITEM);
	            if (trgt === root) {
	                clst = ((action === 'moveUp' ? trgt.lastElementChild : trgt).querySelector('.' + CLS_HEADER));
	            }
	            else if (trgt.classList.contains(CLS_HEADER)) {
	                clstItem = (action === 'moveUp' ? clstItem.previousElementSibling : clstItem.nextElementSibling);
	                if (clstItem) {
	                    clst = ej2_base_3.select('.' + CLS_HEADER, clstItem);
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
	                    if (!ej2_base_6.isNullOrUndefined(content) && content.classList.contains(CLS_CONTENT)) {
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
	            var header = ej2_base_5.createElement('div', { className: CLS_HEADER, id: ej2_base_2.getUniqueID('acrdn_header') });
	            var ariaAttr = {
	                'tabindex': '0', 'role': 'heading', 'aria-expanded': 'false', 'aria-selected': 'false',
	                'aria-disabled': 'false', 'aria-level': this.items.length.toString()
	            };
	            ej2_base_3.attributes(header, ariaAttr);
	            return header;
	        };
	        Accordion.prototype.renderInnerItem = function (item, index) {
	            var innerEle;
	            innerEle = ej2_base_5.createElement('div', { className: CLS_ITEM });
	            innerEle.id = ej2_base_2.getUniqueID('acrdn_item');
	            if (item.header) {
	                var ctnEle = this.headerEleGenerate();
	                var hdrEle = ej2_base_5.createElement('div', { className: CLS_HEADERCTN });
	                ctnEle.appendChild(hdrEle);
	                ctnEle.appendChild(this.fetchElement(hdrEle, item.header, index, true));
	                innerEle.appendChild(ctnEle);
	            }
	            var hdr = ej2_base_3.select('.' + CLS_HEADER, innerEle);
	            if (item.expanded && !ej2_base_6.isNullOrUndefined(index) && (!this.enablePersistence)) {
	                if (this.initExpand.indexOf(index) === -1) {
	                    this.initExpand.push(index);
	                }
	            }
	            if (item.cssClass) {
	                innerEle.classList.add(item.cssClass);
	            }
	            if (item.iconCss) {
	                var hdrIcnEle = ej2_base_5.createElement('div', { className: CLS_HEADERICN });
	                var icon = ej2_base_5.createElement('span', { className: item.iconCss + ' e-icons' });
	                hdrIcnEle.appendChild(icon);
	                if (ej2_base_6.isNullOrUndefined(hdr)) {
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
	                if (ej2_base_6.isNullOrUndefined(hdr)) {
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
	                    templateFn = ej2_base_2.compile(temString);
	                    ej2_base_3.detach(eleVal);
	                }
	            }
	            catch (e) {
	                templateFn = ej2_base_2.compile(value);
	            }
	            if (!ej2_base_6.isNullOrUndefined(templateFn) && templateFn().length > 0 && !(ej2_base_6.isNullOrUndefined(templateFn()[0].tagName) && templateFn().length === 1)) {
	                [].slice.call(templateFn()).forEach(function (el) {
	                    if (!ej2_base_6.isNullOrUndefined(el.tagName)) {
	                        el.style.display = '';
	                    }
	                    ele.appendChild(el);
	                });
	                if (!ej2_base_6.isNullOrUndefined(temString)) {
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
	            var header = ej2_base_3.select('.' + CLS_HEADER, itemEle);
	            var content = ej2_base_3.select('.' + CLS_CONTENT, itemEle);
	            header.setAttribute('aria-controls', content.id);
	            content.setAttribute('aria-labelledby', header.id);
	        };
	        Accordion.prototype.contentRendering = function (index) {
	            var content = this.items[index].content;
	            var itemcnt = ej2_base_5.createElement('div', { className: CLS_CONTENT + ' ' + CLS_CTNHIDE, id: ej2_base_2.getUniqueID('acrdn_panel') });
	            ej2_base_3.attributes(itemcnt, { 'aria-hidden': 'true' });
	            var ctn = ej2_base_5.createElement('div', { className: CLS_CTENT });
	            itemcnt.appendChild(this.fetchElement(ctn, content, index, false));
	            return itemcnt;
	        };
	        Accordion.prototype.expand = function (trgt) {
	            var eventArgs;
	            var trgtItemEle = ej2_base_3.closest(trgt, '.' + CLS_ITEM);
	            if (ej2_base_6.isNullOrUndefined(trgt) || (ej2_base_3.isVisible(trgt) && trgt.getAttribute('e-animate') !== 'true') || trgtItemEle.classList.contains(CLS_DISABLE)) {
	                return;
	            }
	            var acrdnRoot = ej2_base_3.closest(trgtItemEle, '.' + CLS_ACRDN_ROOT);
	            var expandState = acrdnRoot.querySelector('.' + CLS_EXPANDSTATE);
	            var animation = {
	                name: this.animation.expand.effect,
	                duration: this.animation.expand.duration,
	                timingFunction: this.animation.expand.easing
	            };
	            var icon = ej2_base_3.select('.' + CLS_TOOGLEICN, trgtItemEle).firstElementChild;
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
	            if (!ej2_base_6.isNullOrUndefined(expandState)) {
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
	                    ej2_base_5.setStyleAttribute(trgt, { 'position': '', 'maxHeight': '' });
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
	            new ej2_base_4.Animation(animate).animate(trgt);
	        };
	        Accordion.prototype.expandProgress = function (progress, icon, trgt, trgtItemEle, eventArgs) {
	            this.remove(trgt, CLS_CTNHIDE);
	            this.add(trgtItemEle, CLS_SLCTED);
	            this.add(icon, CLS_EXPANDICN);
	            if (progress === 'end') {
	                this.add(trgtItemEle, CLS_ACTIVE);
	                trgt.setAttribute('aria-hidden', 'false');
	                ej2_base_3.attributes(trgt.previousElementSibling, { 'aria-selected': 'true', 'aria-expanded': 'true' });
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
	            var trgtItemEle = ej2_base_3.closest(trgt, '.' + CLS_ITEM);
	            if (ej2_base_6.isNullOrUndefined(trgt) || !ej2_base_3.isVisible(trgt) || trgtItemEle.classList.contains(CLS_DISABLE)) {
	                return;
	            }
	            var animation = {
	                name: this.animation.collapse.effect,
	                duration: this.animation.collapse.duration,
	                timingFunction: this.animation.collapse.easing,
	            };
	            var icon = ej2_base_3.select('.' + CLS_TOOGLEICN, trgtItemEle).firstElementChild;
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
	                    ej2_base_5.setStyleAttribute(trgt, { 'position': '', 'maxHeight': '', 'display': '' });
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
	            new ej2_base_4.Animation(animate).animate(trgt);
	        };
	        Accordion.prototype.collapseProgress = function (progress, icon, trgt, trgtItemEle, eventArgs) {
	            this.remove(icon, CLS_EXPANDICN);
	            this.remove(trgtItemEle, CLS_SLCTED);
	            if (progress === 'end') {
	                this.add(trgt, CLS_CTNHIDE);
	                icon.classList.remove(CLS_TOGANIMATE);
	                this.remove(trgtItemEle, CLS_ACTIVE);
	                trgt.setAttribute('aria-hidden', 'true');
	                ej2_base_3.attributes(trgt.previousElementSibling, { 'aria-selected': 'false', 'aria-expanded': 'false' });
	                this.trigger('expanded', eventArgs);
	            }
	        };
	        Accordion.prototype.getModuleName = function () {
	            return 'accordion';
	        };
	        Accordion.prototype.itemAttribUpdate = function () {
	            var itemEle = [].slice.call(this.element.children);
	            var itemLen = this.items.length;
	            itemEle.forEach(function (ele) {
	                ej2_base_3.select('.' + CLS_HEADER, ele).setAttribute('aria-level', '' + itemLen);
	            });
	        };
	        Accordion.prototype.addItem = function (item, index) {
	            var ele = this.element;
	            if (ej2_base_6.isNullOrUndefined(index)) {
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
	                ej2_base_1.EventHandler.add(innerItemEle.querySelector('.' + CLS_HEADER), 'focus', this.focusIn, this);
	                ej2_base_1.EventHandler.add(innerItemEle.querySelector('.' + CLS_HEADER), 'blur', this.focusOut, this);
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
	        Accordion.prototype.removeItem = function (index) {
	            var ele = this.element.children[index];
	            if (ej2_base_6.isNullOrUndefined(ele)) {
	                return;
	            }
	            ej2_base_3.detach(ele);
	            this.items.splice(index, 1);
	            this.itemAttribUpdate();
	            this.expandedItems = [];
	            this.expandedItemRefresh(this.element);
	        };
	        Accordion.prototype.select = function (index) {
	            var ele = this.element.children[index];
	            if (ej2_base_6.isNullOrUndefined(ele) || ej2_base_6.isNullOrUndefined(ej2_base_3.select('.' + CLS_HEADER, ele))) {
	                return;
	            }
	            ele.children[0].focus();
	        };
	        Accordion.prototype.hideItem = function (index, isHidden) {
	            var ele = this.element.children[index];
	            if (ej2_base_6.isNullOrUndefined(ele)) {
	                return;
	            }
	            if (ej2_base_6.isNullOrUndefined(isHidden)) {
	                isHidden = true;
	            }
	            isHidden ? this.add(ele, CLS_ITEMHIDE) : this.remove(ele, CLS_ITEMHIDE);
	        };
	        Accordion.prototype.enableItem = function (index, isEnable) {
	            var ele = this.element.children[index];
	            if (ej2_base_6.isNullOrUndefined(ele)) {
	                return;
	            }
	            var eleHeader = ele.firstElementChild;
	            if (isEnable) {
	                this.remove(ele, CLS_DISABLE);
	                ej2_base_3.attributes(eleHeader, { 'tabindex': '0', 'aria-disabled': 'false' });
	                eleHeader.focus();
	            }
	            else {
	                if (ele.classList.contains(CLS_ACTIVE)) {
	                    this.expandItem(false, index);
	                    this.eleMoveFocus('movedown', this.element, eleHeader);
	                }
	                this.add(ele, CLS_DISABLE);
	                eleHeader.setAttribute('aria-disabled', 'true');
	                eleHeader.removeAttribute('tabindex');
	            }
	        };
	        Accordion.prototype.expandItem = function (isExpand, index) {
	            var _this = this;
	            var root = this.element;
	            if (ej2_base_6.isNullOrUndefined(index)) {
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
	                if (ej2_base_6.isNullOrUndefined(ele) || !ele.classList.contains(CLS_SLCT) || (ele.classList.contains(CLS_ACTIVE) && isExpand)) {
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
	            if (ele.classList.contains(CLS_DISABLE)) {
	                return;
	            }
	            if (ej2_base_6.isNullOrUndefined(ctn) && isExpand) {
	                ctn = this.contentRendering(index);
	                ele.appendChild(ctn);
	                this.ariaAttrUpdate(ele);
	            }
	            else if (ej2_base_6.isNullOrUndefined(ctn)) {
	                return;
	            }
	            isExpand ? this.expand(ctn) : this.collapse(ctn);
	        };
	        Accordion.prototype.getPersistData = function () {
	            var keyEntity = ['expandedItems'];
	            return this.addOnPersist(keyEntity);
	        };
	        Accordion.prototype.onPropertyChanged = function (newProp, oldProp) {
	            var acrdn = this.element;
	            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'enableRtl':
	                        newProp.enableRtl ? this.add(acrdn, CLS_RTL) : this.remove(acrdn, CLS_RTL);
	                        break;
	                    case 'height':
	                        ej2_base_5.setStyleAttribute(this.element, { 'height': ej2_base_6.formatUnit(newProp.height) });
	                        break;
	                    case 'width':
	                        ej2_base_5.setStyleAttribute(this.element, { 'width': ej2_base_6.formatUnit(newProp.width) });
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
	        return Accordion;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_4.Collection([], AccordionItem)
	    ], Accordion.prototype, "items", void 0);
	    __decorate([
	        ej2_base_1.Property('100%')
	    ], Accordion.prototype, "width", void 0);
	    __decorate([
	        ej2_base_1.Property('auto')
	    ], Accordion.prototype, "height", void 0);
	    __decorate([
	        ej2_base_1.Property('Multiple')
	    ], Accordion.prototype, "expandMode", void 0);
	    __decorate([
	        ej2_base_5.Complex({}, AccordionAnimationSettings)
	    ], Accordion.prototype, "animation", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], Accordion.prototype, "clicked", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], Accordion.prototype, "expanding", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], Accordion.prototype, "expanded", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], Accordion.prototype, "created", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], Accordion.prototype, "destroyed", void 0);
	    Accordion = __decorate([
	        ej2_base_4.NotifyPropertyChanges
	    ], Accordion);
	    exports.Accordion = Accordion;
	    exports.accordionBuilder = ej2_base_4.CreateBuilder(Accordion);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, context_menu_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(context_menu_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 11 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(12), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, ej2_base_5, ej2_lists_1, ej2_popups_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	    }(ej2_base_1.ChildProperty));
	    __decorate([
	        ej2_base_1.Property('')
	    ], MenuItem.prototype, "iconCss", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], MenuItem.prototype, "id", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], MenuItem.prototype, "separator", void 0);
	    __decorate([
	        ej2_base_4.Collection([], MenuItem)
	    ], MenuItem.prototype, "items", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], MenuItem.prototype, "text", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], MenuItem.prototype, "url", void 0);
	    exports.MenuItem = MenuItem;
	    var ContextMenu = (function (_super) {
	        __extends(ContextMenu, _super);
	        function ContextMenu(options, element) {
	            var _this = _super.call(this, options, element) || this;
	            _this.animation = new ej2_base_3.Animation({});
	            _this.navIdx = [];
	            _this.isTapHold = false;
	            return _this;
	        }
	        ContextMenu.prototype.preRender = function () {
	            if (this.element.tagName === 'EJ-CONTEXTMENU') {
	                var ejInst = ej2_base_4.getValue('ej2_instances', this.element);
	                var ul = ej2_base_5.createElement('ul');
	                var wrapper = ej2_base_5.createElement('EJ-CONTEXTMENU', { className: WRAPPER });
	                this.element.parentNode.insertBefore(ul, this.element);
	                ej2_base_5.detach(this.element);
	                this.element = ul;
	                this.element.classList.add('e-' + this.getModuleName());
	                document.body.appendChild(wrapper);
	                wrapper.appendChild(this.element);
	                ej2_base_4.setValue('ej2_instances', ejInst, this.element);
	                if (!this.element.id) {
	                    this.element.id = ej2_base_4.getUniqueID(this.getModuleName());
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
	                wrapper = ej2_base_5.createElement('div', { className: WRAPPER });
	                document.body.appendChild(wrapper);
	            }
	            if (this.cssClass) {
	                wrapper.classList.add(this.cssClass);
	            }
	            if (this.enableRtl) {
	                wrapper.classList.add(RTL);
	            }
	            ej2_base_3.attributes(this.element, { 'role': 'menu', 'tabindex': '0' });
	            wrapper.appendChild(this.element);
	            this.element.style.zIndex = this.getZIndex();
	        };
	        ContextMenu.prototype.renderItems = function () {
	            if (!this.items.length) {
	                this.items = ej2_lists_1.ListBase.createJsonFromElement(this.element);
	                this.element.innerHTML = '';
	            }
	            var ul = this.createItems(this.items);
	            ej2_base_5.append(Array.prototype.slice.call(ul.children), this.element);
	        };
	        ContextMenu.prototype.wireEvents = function () {
	            var wrapper = this.getWrapper();
	            if (this.target) {
	                this.targetElem = ej2_base_5.select(this.target);
	                if (ej2_base_4.Browser.isIos) {
	                    this.touchModule = new ej2_base_2.Touch(this.targetElem, { tapHold: this.touchHandler.bind(this) });
	                }
	                else {
	                    ej2_base_2.EventHandler.add(this.targetElem, 'contextmenu', this.cmenuHandler, this);
	                }
	                for (var _i = 0, _a = this.getScrollableParents(this.targetElem); _i < _a.length; _i++) {
	                    var parent_1 = _a[_i];
	                    ej2_base_2.EventHandler.add(parent_1, 'scroll', this.scrollHandler, this);
	                }
	            }
	            if (!ej2_base_4.Browser.isDevice) {
	                ej2_base_2.EventHandler.add(wrapper, 'mouseover', this.moverHandler, this);
	                ej2_base_2.EventHandler.add(document, 'mousedown', this.mouseDownHandler, this);
	            }
	            ej2_base_2.EventHandler.add(document, 'click', this.clickHandler, this);
	            this.keyboardModule = new ej2_base_2.KeyboardEvents(wrapper, {
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
	            ej2_base_5.rippleEffect(wrapper, { selector: '.' + ITEM });
	        };
	        ContextMenu.prototype.mouseDownHandler = function (e) {
	            if (ej2_base_5.closest(e.target, '.' + WRAPPER) !== this.getWrapper()) {
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
	                    if (e.action === ENTER) {
	                        this.trigger('select', { element: fli, item: this.toRawObject([item]) });
	                    }
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
	            return (this.navIdx.length > 0 || ej2_base_5.isVisible(this.element).valueOf());
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
	                if (ej2_base_4.Browser.isDevice) {
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
	            var li = ej2_lists_1.ListBase.createListItemFromJson(this.toRawObject(item), listOpt, 0, true);
	            return li[0];
	        };
	        ContextMenu.prototype.setPosition = function (li, ul, top, left) {
	            var px = 'px';
	            this.toggleVisiblity(ul);
	            if (ul === this.element) {
	                var collide = ej2_popups_1.isCollide(ul, null, left, top);
	                if (collide.indexOf('right') > -1) {
	                    left = left - ul.offsetWidth;
	                }
	                if (collide.indexOf('bottom') > -1) {
	                    var offset = ej2_popups_1.fit(ul, null, { X: false, Y: true }, { top: top, left: left });
	                    top = offset.top;
	                }
	                collide = ej2_popups_1.isCollide(ul, null, left, top);
	                if (collide.indexOf('left') > -1) {
	                    var offset = ej2_popups_1.fit(ul, null, { X: true, Y: false }, { top: top, left: left });
	                    left = offset.left;
	                }
	            }
	            else {
	                if (ej2_base_4.Browser.isDevice) {
	                    top = Number(this.element.style.top.replace(px, ''));
	                    left = Number(this.element.style.left.replace(px, ''));
	                }
	                else {
	                    var x = this.enableRtl ? 'left' : 'right';
	                    var offset = ej2_popups_1.calculatePosition(li, x, 'top');
	                    top = offset.top;
	                    left = offset.left;
	                    var collide = ej2_popups_1.isCollide(ul, null, this.enableRtl ? left - ul.offsetWidth : left, top);
	                    var xCollision = collide.indexOf('left') > -1 || collide.indexOf('right') > -1;
	                    if (xCollision) {
	                        offset = ej2_popups_1.calculatePosition(li, this.enableRtl ? 'right' : 'left', 'top');
	                        left = offset.left;
	                    }
	                    if (this.enableRtl || xCollision) {
	                        left = (this.enableRtl && xCollision) ? left : left - ul.offsetWidth;
	                    }
	                    if (collide.indexOf('bottom') > -1) {
	                        offset = ej2_popups_1.fit(ul, null, { X: false, Y: true }, { top: top, left: left });
	                        top = offset.top;
	                    }
	                }
	            }
	            this.toggleVisiblity(ul, false);
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
	                        var span = ej2_base_5.createElement('span', { className: ICONS + ' ' + CARET });
	                        args.item.appendChild(span);
	                        args.item.setAttribute('aria-haspopup', 'true');
	                        args.item.setAttribute('aria-expanded', 'false');
	                        args.item.removeAttribute('role');
	                        args.item.classList.add('e-menu-caret-icon');
	                    }
	                    _this.trigger('beforeItemRender', { data: args.curData, item: args.item });
	                }
	            };
	            var ul = ej2_lists_1.ListBase.createList(this.toRawObject(items.slice()), listBaseOptions, true);
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
	            if (cli && ej2_base_5.closest(cli, '.' + WRAPPER)) {
	                var fli = ej2_base_5.select('.' + FOCUSED, wrapper);
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
	                var isInstLI = cli && !ej2_base_3.isNullOrUndefined(ej2_base_5.closest(cli, '.' + WRAPPER));
	                if (isInstLI && e.type === 'click' && !cli.classList.contains(HEADER)) {
	                    this.setLISelected(cli);
	                    var navIdx = this.getIndex(cli.textContent);
	                    var item = this.getItem(navIdx);
	                    this.trigger('select', { element: cli, item: item });
	                }
	                if (isInstLI && (e.type === 'mouseover' || ej2_base_4.Browser.isDevice || this.showItemOnClick)) {
	                    var ul = void 0;
	                    if (cli.classList.contains(HEADER)) {
	                        ul = wrapper.children[this.navIdx.length - 1];
	                        this.toggleAnimation(ul);
	                        this.trigger('onOpen', { element: ul });
	                        var sli = this.getLIByClass(ul, SELECTED);
	                        if (sli) {
	                            sli.classList.remove(SELECTED);
	                        }
	                        ej2_base_5.detach(cli.parentNode);
	                        this.navIdx.pop();
	                    }
	                    else {
	                        if (!cli.classList.contains(SEPARATOR)) {
	                            var showSubMenu = true;
	                            var cul = cli.parentNode;
	                            var cliIdx = this.getIdx(cul, cli);
	                            if (!ej2_base_4.Browser.isDevice) {
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
	                                var idx = this.navIdx.concat(cliIdx);
	                                var item = this.getItem(idx);
	                                if (item.items.length) {
	                                    if (e.type === 'mouseover') {
	                                        this.setLISelected(cli);
	                                    }
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
	            return ej2_base_5.closest(elem, 'li');
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
	                if (ej2_base_4.Browser.isIos) {
	                    this.touchModule.destroy();
	                }
	                else {
	                    ej2_base_2.EventHandler.remove(this.targetElem, 'contextmenu', this.cmenuHandler);
	                }
	                for (var _i = 0, _a = this.getScrollableParents(this.targetElem); _i < _a.length; _i++) {
	                    var parent_2 = _a[_i];
	                    ej2_base_2.EventHandler.remove(parent_2, 'scroll', this.scrollHandler);
	                }
	            }
	            if (!ej2_base_4.Browser.isDevice) {
	                ej2_base_2.EventHandler.remove(wrapper, 'mouseover', this.moverHandler);
	                ej2_base_2.EventHandler.remove(document, 'mousedown', this.mouseDownHandler);
	            }
	            ej2_base_2.EventHandler.remove(document, 'click', this.clickHandler);
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
	                    ej2_base_5.detach(ul);
	                }
	            }
	        };
	        ContextMenu.prototype.getPersistData = function () {
	            return '';
	        };
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
	                        if (ej2_base_4.Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
	                            ul.children[idx + 1].classList.remove(disabled);
	                        }
	                        else {
	                            ul.children[idx].classList.remove(disabled);
	                        }
	                    }
	                    else {
	                        if (ej2_base_4.Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
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
	                        if (ej2_base_4.Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
	                            ul.children[idx + 1].classList.add(HIDE);
	                        }
	                        else {
	                            ul.children[idx].classList.add(HIDE);
	                        }
	                    }
	                    else {
	                        if (ej2_base_4.Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
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
	                    ej2_base_5.detach(this.element.children[idx]);
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
	            ej2_base_5.detach(wrapper);
	        };
	        return ContextMenu;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_1.Property('')
	    ], ContextMenu.prototype, "cssClass", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], ContextMenu.prototype, "filter", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], ContextMenu.prototype, "showItemOnClick", void 0);
	    __decorate([
	        ej2_base_4.Collection([], MenuItem)
	    ], ContextMenu.prototype, "items", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], ContextMenu.prototype, "target", void 0);
	    __decorate([
	        ej2_base_1.Property({ duration: 400, easing: 'ease', effect: 'SlideDown' })
	    ], ContextMenu.prototype, "animationSettings", void 0);
	    __decorate([
	        ej2_base_2.Event()
	    ], ContextMenu.prototype, "beforeItemRender", void 0);
	    __decorate([
	        ej2_base_2.Event()
	    ], ContextMenu.prototype, "beforeOpen", void 0);
	    __decorate([
	        ej2_base_2.Event()
	    ], ContextMenu.prototype, "onOpen", void 0);
	    __decorate([
	        ej2_base_2.Event()
	    ], ContextMenu.prototype, "onClose", void 0);
	    __decorate([
	        ej2_base_2.Event()
	    ], ContextMenu.prototype, "select", void 0);
	    ContextMenu = __decorate([
	        ej2_base_1.NotifyPropertyChanges
	    ], ContextMenu);
	    exports.ContextMenu = ContextMenu;
	    exports.contextMenuBuilder = ej2_base_1.CreateBuilder(ContextMenu);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tab_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(tab_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 14 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, ej2_base_5, toolbar_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var CLS_TAB = 'e-tab';
	    var CLS_HEADER = 'e-header';
	    var CLS_CONTENT = 'e-content';
	    var CLS_ITEMS = 'e-items';
	    var CLS_ITEM = 'e-item';
	    var CLS_TEMPLATE = 'e-template';
	    var CLS_RTL = 'e-rtl';
	    var CLS_ACTIVE = 'e-active';
	    var CLS_DISABLE = 'e-disable';
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
	    var TabActionSettings = (function (_super) {
	        __extends(TabActionSettings, _super);
	        function TabActionSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return TabActionSettings;
	    }(ej2_base_2.ChildProperty));
	    __decorate([
	        ej2_base_1.Property('SlideLeftIn')
	    ], TabActionSettings.prototype, "effect", void 0);
	    __decorate([
	        ej2_base_1.Property(600)
	    ], TabActionSettings.prototype, "duration", void 0);
	    __decorate([
	        ej2_base_1.Property('ease')
	    ], TabActionSettings.prototype, "easing", void 0);
	    exports.TabActionSettings = TabActionSettings;
	    var TabAnimationSettings = (function (_super) {
	        __extends(TabAnimationSettings, _super);
	        function TabAnimationSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return TabAnimationSettings;
	    }(ej2_base_2.ChildProperty));
	    __decorate([
	        ej2_base_1.Complex({ effect: 'SlideLeftIn', duration: 600, easing: 'ease' }, TabActionSettings)
	    ], TabAnimationSettings.prototype, "previous", void 0);
	    __decorate([
	        ej2_base_1.Complex({ effect: 'SlideRightIn', duration: 600, easing: 'ease' }, TabActionSettings)
	    ], TabAnimationSettings.prototype, "next", void 0);
	    exports.TabAnimationSettings = TabAnimationSettings;
	    var Header = (function (_super) {
	        __extends(Header, _super);
	        function Header() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return Header;
	    }(ej2_base_2.ChildProperty));
	    __decorate([
	        ej2_base_1.Property('')
	    ], Header.prototype, "text", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], Header.prototype, "iconCss", void 0);
	    __decorate([
	        ej2_base_1.Property('left')
	    ], Header.prototype, "iconPosition", void 0);
	    exports.Header = Header;
	    var TabItem = (function (_super) {
	        __extends(TabItem, _super);
	        function TabItem() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return TabItem;
	    }(ej2_base_2.ChildProperty));
	    __decorate([
	        ej2_base_1.Complex({}, Header)
	    ], TabItem.prototype, "header", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], TabItem.prototype, "content", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], TabItem.prototype, "cssClass", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], TabItem.prototype, "disabled", void 0);
	    exports.TabItem = TabItem;
	    var Tab = (function (_super) {
	        __extends(Tab, _super);
	        function Tab(options, element) {
	            var _this = _super.call(this, options, element) || this;
	            _this.prevIndex = 0;
	            _this.show = { name: 'SlideDown', duration: 100 };
	            _this.hide = { name: 'SlideUp', duration: 100 };
	            _this.animateOptions = {};
	            _this.animObj = new ej2_base_5.Animation(_this.animateOptions);
	            _this.maxHeight = 0;
	            _this.title = 'Close';
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
	        Tab.prototype.destroy = function () {
	            var _this = this;
	            if (!ej2_base_4.isNullOrUndefined(this.tbObj)) {
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
	                var cntEle = ej2_base_2.select('.' + CLS_TAB + ' > .' + CLS_CONTENT, this.element);
	                this.element.classList.remove(CLS_TEMPLATE);
	                if (!ej2_base_4.isNullOrUndefined(cntEle)) {
	                    cntEle.innerHTML = this.cnt;
	                }
	            }
	            _super.prototype.destroy.call(this);
	            this.trigger('destroyed');
	        };
	        Tab.prototype.preRender = function () {
	            this.isPopup = false;
	            this.initRender = true;
	            var name = ej2_base_3.Browser.info.name;
	            var css = (name === 'msie') ? 'e-ie' : (name === 'edge') ? 'e-edge' : (name === 'safari') ? 'e-safari' : '';
	            ej2_base_4.setStyleAttribute(this.element, { 'width': ej2_base_3.formatUnit(this.width), 'height': ej2_base_3.formatUnit(this.height) });
	            this.setCssClass(this.element, this.cssClass, true);
	            ej2_base_1.attributes(this.element, { role: 'tablist', 'aria-disabled': 'false', 'aria-activedescendant': '' });
	            this.setCssClass(this.element, css, true);
	        };
	        Tab.prototype.render = function () {
	            this.renderContainer();
	            this.wireEvents();
	            this.initRender = false;
	        };
	        Tab.prototype.renderContainer = function () {
	            if (this.items.length > 0 && this.element.children.length === 0) {
	                this.element.appendChild(ej2_base_4.createElement('div', { className: CLS_CONTENT }));
	                this.setOrientation(this.headerPlacement, ej2_base_4.createElement('div', { className: CLS_HEADER }));
	                this.isTemplate = false;
	            }
	            else if (this.element.children.length > 0) {
	                this.isTemplate = true;
	                this.element.classList.add(CLS_TEMPLATE);
	            }
	            if (!ej2_base_4.isNullOrUndefined(ej2_base_2.select('.' + CLS_HEADER, this.element)) && !ej2_base_4.isNullOrUndefined(ej2_base_2.select('.' + CLS_CONTENT, this.element))) {
	                this.renderHeader();
	                this.tbItems = ej2_base_2.select('.' + CLS_TB_ITEMS, this.element);
	                if (!ej2_base_4.isNullOrUndefined(this.tbItems)) {
	                    ej2_base_5.rippleEffect(this.tbItems, { selector: '.e-tab-wrap' });
	                }
	                this.renderContent();
	                if (ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element).length > 0) {
	                    this.tbItems = ej2_base_2.select('.' + CLS_TB_ITEMS, this.element);
	                    this.bdrLine = ej2_base_4.createElement('div', { className: CLS_INDICATOR + ' ' + CLS_HIDDEN + ' ' + CLS_IGNORE });
	                    var scrCnt = ej2_base_2.select('.e-hscroll-content', this.tbItems);
	                    if (!ej2_base_4.isNullOrUndefined(scrCnt)) {
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
	            this.hdrEle = ej2_base_2.select('.' + CLS_HEADER, this.element);
	            this.btnCls = ej2_base_4.createElement('span', { className: CLS_ICONS + ' ' + CLS_ICON_CLOSE, attrs: { title: this.title } }).outerHTML;
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
	                    this.hdrEle.appendChild(ej2_base_4.createElement('div', { className: CLS_ITEMS }));
	                    hdrItems.forEach(function (item, index) {
	                        var attr = {
	                            className: CLS_ITEM, id: CLS_ITEM + '_' + index,
	                            attrs: { role: 'tab', 'aria-controls': CLS_CONTENT + '_' + index, 'aria-selected': 'false' }
	                        };
	                        var txt = ej2_base_4.createElement('span', { className: CLS_TEXT, innerHTML: item, attrs: { 'role': 'presentation' } }).outerHTML;
	                        var cont = ej2_base_4.createElement('div', { className: CLS_TEXT_WRAP, innerHTML: txt + _this.btnCls }).outerHTML;
	                        var wrap = ej2_base_4.createElement('div', { className: CLS_WRAP, innerHTML: cont, attrs: { tabIndex: '-1' } });
	                        ej2_base_2.select('.' + CLS_ITEMS, _this.element).appendChild(ej2_base_4.createElement('div', attr));
	                        ej2_base_4.selectAll('.' + CLS_ITEM, _this.element)[index].appendChild(wrap);
	                    });
	                }
	            }
	            this.tbObj = new toolbar_1.Toolbar({
	                width: '100%',
	                overflowMode: this.overflowMode,
	                items: (tabItems.length !== 0) ? tabItems : [],
	                clicked: this.clickHandler.bind(this)
	            });
	            this.tbObj.appendTo(this.hdrEle);
	            ej2_base_1.attributes(this.element, { 'aria-orientation': 'horizontal' });
	            this.setCloseButton(this.showCloseButton);
	            this.setProperties({ headerPlacement: (this.element.children.item(0).classList.contains(CLS_HEADER)) ? 'Top' : 'Bottom' }, true);
	        };
	        Tab.prototype.renderContent = function () {
	            this.cntEle = ej2_base_2.select('.' + CLS_CONTENT, this.element);
	            var hdrItem = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element);
	            if (this.isTemplate) {
	                this.cnt = (this.cntEle.children.length > 0) ? this.cntEle.innerHTML : '';
	                var contents = this.cntEle.children;
	                for (var i = 0; i < hdrItem.length; i++) {
	                    if (contents.length - 1 >= i) {
	                        contents.item(i).className += CLS_ITEM;
	                        ej2_base_1.attributes(contents.item(i), { 'role': 'tabpanel', 'aria-labelledby': CLS_ITEM + '_' + i });
	                        contents.item(i).id = CLS_CONTENT + '_' + i;
	                    }
	                }
	            }
	        };
	        Tab.prototype.parseObject = function (items) {
	            var _this = this;
	            var inHTML = '';
	            var tbCount = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element).length;
	            var tItems = [];
	            items.forEach(function (item, index) {
	                var pos = (ej2_base_4.isNullOrUndefined(item.header.iconPosition)) ? '' : item.header.iconPosition;
	                var css = (ej2_base_4.isNullOrUndefined(item.header.iconCss)) ? '' : item.header.iconCss;
	                var txt = item.header.text;
	                var id = ((tbCount === 0) ? index : (_this.isReplace === true) ? index : tbCount + index);
	                var disabled = (item.disabled) ? ' ' + CLS_DISABLE : '';
	                var tHtml = ((txt instanceof Object) ? txt.outerHTML : txt);
	                var txtEmpty = (!ej2_base_4.isNullOrUndefined(tHtml) && tHtml !== '');
	                var tEle = (txtEmpty) ? ej2_base_4.createElement('div', {
	                    className: CLS_TEXT, innerHTML: tHtml, attrs: { 'role': 'presentation' }
	                }).outerHTML : '';
	                var icon = ej2_base_4.createElement('span', {
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
	                var tCont = ej2_base_4.createElement('div', { className: CLS_TEXT_WRAP, innerHTML: inHTML + '' + _this.btnCls }).outerHTML;
	                var wrap = ej2_base_4.createElement('div', { className: CLS_WRAP, innerHTML: tCont, attrs: { tabIndex: '-1' } });
	                var attrObj = {
	                    id: CLS_ITEM + '_' + id, role: 'tab', 'aria-selected': 'false'
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
	            var hdrActEle = ej2_base_4.selectAll(':root .' + CLS_HEADER + ' .' + CLS_TB_ITEM + '.' + CLS_ACTIVE, this.element)[0];
	            if (!ej2_base_4.isNullOrUndefined(hdrActEle)) {
	                hdrActEle.classList.remove(CLS_ACTIVE);
	                var no = this.extIndex(hdrActEle.id);
	                var trg = this.findEle(ej2_base_2.select('.e-content', this.element).children, CLS_CONTENT + '_' + no);
	            }
	        };
	        Tab.prototype.checkPopupOverflow = function (ele) {
	            this.tbPop = ej2_base_2.select('.' + CLS_TB_POP, this.element);
	            var popIcon = ej2_base_2.select('.e-hor-nav', this.element);
	            var tbrItems = ej2_base_2.select('.' + CLS_TB_ITEMS, this.element);
	            if ((this.enableRtl && ((popIcon.offsetLeft + popIcon.offsetWidth) > tbrItems.offsetLeft))
	                || (!this.enableRtl && popIcon.offsetLeft < tbrItems.offsetWidth)) {
	                ele.classList.add(CLS_TB_POPUP);
	                this.tbPop.insertBefore(ele.cloneNode(true), ej2_base_4.selectAll('.' + CLS_TB_POPUP, this.tbPop)[0]);
	                ele.outerHTML = '';
	            }
	            return true;
	        };
	        Tab.prototype.popupHandler = function (target) {
	            var ripEle = target.querySelector('.e-ripple-element');
	            if (!ej2_base_4.isNullOrUndefined(ripEle)) {
	                ripEle.outerHTML = '';
	                target.querySelector('.' + CLS_WRAP).classList.remove('e-ripple');
	            }
	            this.tbItem = ej2_base_4.selectAll('.' + CLS_TB_ITEMS + ' .' + CLS_TB_ITEM, this.hdrEle);
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
	            return ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.tbItems).length - 1;
	        };
	        Tab.prototype.setCloseButton = function (val) {
	            var trg = ej2_base_2.select('.' + CLS_HEADER, this.element);
	            (val === true) ? trg.classList.add(CLS_CLOSE_SHOW) : trg.classList.remove(CLS_CLOSE_SHOW);
	            this.tbObj.refreshOverflow();
	            this.refreshActElePosition();
	        };
	        Tab.prototype.prevCtnAnimation = function (prev, current) {
	            var animation;
	            var checkRTL = this.enableRtl || this.element.classList.contains(CLS_RTL);
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
	            if (!ej2_base_4.isNullOrUndefined(animateObj)) {
	                animateObj.begin = function () {
	                    ej2_base_4.setStyleAttribute(oldCnt, { 'position': 'absolute' });
	                    oldCnt.classList.add('e-view');
	                };
	                animateObj.end = function () {
	                    oldCnt.style.display = 'none';
	                    oldCnt.classList.remove(CLS_ACTIVE);
	                    oldCnt.classList.remove('e-view');
	                    ej2_base_4.setStyleAttribute(oldCnt, { 'display': '', 'position': '' });
	                };
	                new ej2_base_5.Animation(animateObj).animate(oldCnt);
	            }
	        };
	        Tab.prototype.triggerAnimation = function (id, value) {
	            var _this = this;
	            var prevIndex = this.prevIndex;
	            var oldCnt = ej2_base_2.select('#' + this.prevActiveEle, this.element);
	            var prevEle = this.tbItem[prevIndex];
	            var no = this.extIndex(this.tbItem[this.selectedItem].id);
	            var newCnt;
	            newCnt = this.findEle(this.cntEle.children, CLS_CONTENT + '_' + no);
	            if (ej2_base_4.isNullOrUndefined(oldCnt) && !ej2_base_4.isNullOrUndefined(prevEle)) {
	                var idNo = this.extIndex(prevEle.id);
	                oldCnt = this.findEle(this.cntEle.children, CLS_CONTENT + '_' + idNo);
	            }
	            if (this.initRender || value === false || this.animation === {} || ej2_base_4.isNullOrUndefined(this.animation)) {
	                if (oldCnt && oldCnt !== newCnt) {
	                    oldCnt.classList.remove(CLS_ACTIVE);
	                }
	                return;
	            }
	            var cnt = ej2_base_2.select('.' + CLS_CONTENT, this.element);
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
	                newCnt.classList.add(CLS_ACTIVE);
	            };
	            if (!this.initRender) {
	                this.triggerPrevAnimation(oldCnt, prevIndex);
	            }
	            this.prevActiveEle = newCnt.id;
	            this.isPopup = false;
	            new ej2_base_5.Animation(animateObj).animate(newCnt);
	        };
	        Tab.prototype.keyPressed = function (trg) {
	            var trgParent = ej2_base_1.closest(trg, '.' + CLS_TB_ITEM);
	            var trgIndex = this.getEleIndex(trgParent);
	            if (!ej2_base_4.isNullOrUndefined(this.popEle) && trg.classList.contains('e-hor-nav')) {
	                (this.popEle.classList.contains(CLS_POPUP_OPEN)) ? this.popObj.hide(this.hide) : this.popObj.show(this.show);
	            }
	            else if (trg.classList.contains('e-scroll-nav')) {
	                trg.click();
	            }
	            else {
	                if (!ej2_base_4.isNullOrUndefined(trgParent) && trgParent.classList.contains(CLS_ACTIVE) === false) {
	                    this.select(trgIndex);
	                    if (!ej2_base_4.isNullOrUndefined(this.popEle)) {
	                        this.popObj.hide(this.hide);
	                    }
	                }
	            }
	        };
	        Tab.prototype.getEleIndex = function (item) {
	            return Array.prototype.indexOf.call(ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element), item);
	        };
	        Tab.prototype.extIndex = function (id) {
	            return id.replace(CLS_ITEM + '_', '');
	        };
	        Tab.prototype.getContent = function (ele, index) {
	            var templateFn;
	            var content;
	            var tempEle = ej2_base_4.createElement('div');
	            var cnt = this.items[Number(index)].content;
	            var cntHTML = (typeof cnt !== 'object') ? cnt : cnt.outerHTML;
	            templateFn = ej2_base_5.compile(cntHTML);
	            if (!ej2_base_4.isNullOrUndefined(templateFn) && templateFn().length > 0) {
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
	            (place === 'Bottom') ? this.element.appendChild(ele) : this.element.insertBefore(ele, ej2_base_2.select('.' + CLS_CONTENT, this.element));
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
	            if (ej2_base_4.isNullOrUndefined(this.cntEle)) {
	                return;
	            }
	            var height;
	            var hdrEle = ej2_base_2.select('.' + CLS_HEADER, this.element);
	            if (this.heightAdjustMode === 'None') {
	                if (this.height === 'auto') {
	                    return;
	                }
	                else {
	                    ej2_base_4.setStyleAttribute(this.cntEle, { 'height': (this.element.offsetHeight - hdrEle.offsetHeight) + 'px' });
	                }
	            }
	            else if (this.heightAdjustMode === 'Fill') {
	                ej2_base_4.setStyleAttribute(this.element, { 'height': '100%' });
	                ej2_base_4.setStyleAttribute(this.cntEle, { 'height': 'auto' });
	            }
	            else if (this.heightAdjustMode === 'Auto') {
	                var cnt = ej2_base_4.selectAll('.' + CLS_CONTENT + ' > .' + CLS_ITEM, this.element);
	                if (this.isTemplate === true) {
	                    for (var i = 0; i < cnt.length; i++) {
	                        cnt[i].setAttribute('style', 'display:block; visibility: visible');
	                        this.maxHeight = Math.max(this.maxHeight, this.getHeight(cnt[i]));
	                        cnt[i].style.removeProperty('display');
	                        cnt[i].style.removeProperty('visibility');
	                    }
	                }
	                else {
	                    this.cntEle = ej2_base_2.select('.' + CLS_CONTENT, this.element);
	                    if (val === true) {
	                        this.cntEle.appendChild(ej2_base_4.createElement('div', {
	                            id: (CLS_CONTENT + '_' + 0), className: CLS_ITEM + ' ' + CLS_ACTIVE,
	                            attrs: { 'role': 'tabpanel', 'aria-labelledby': CLS_ITEM + '_' + 0 }
	                        }));
	                    }
	                    var ele = this.cntEle.children.item(0);
	                    for (var i = 0; i < this.items.length; i++) {
	                        this.getContent(ele, i);
	                        this.maxHeight = Math.max(this.maxHeight, this.getHeight(ele));
	                        ele.innerHTML = '';
	                    }
	                    this.getContent(ele, 0);
	                    ele.classList.remove(CLS_ACTIVE);
	                }
	                ej2_base_4.setStyleAttribute(this.cntEle, { 'height': this.maxHeight + 'px' });
	            }
	            else {
	                ej2_base_4.setStyleAttribute(this.cntEle, { 'height': 'auto' });
	            }
	        };
	        Tab.prototype.getHeight = function (ele) {
	            var cs = window.getComputedStyle(ele);
	            return ele.offsetHeight + parseFloat(cs.getPropertyValue('padding-top')) + parseFloat(cs.getPropertyValue('padding-bottom')) +
	                parseFloat(cs.getPropertyValue('margin-top')) + parseFloat(cs.getPropertyValue('margin-bottom'));
	        };
	        Tab.prototype.setActiveBorder = function () {
	            var trg = ej2_base_2.select('.' + CLS_TB_ITEM + '.' + CLS_ACTIVE, this.element);
	            if (trg === null) {
	                return;
	            }
	            var hsCnt = ej2_base_2.select('.' + CLS_TB_ITEMS + ' .e-hscroll-content', this.element);
	            this.tbItems = ej2_base_2.select('.' + CLS_TB_ITEMS, this.element);
	            var bar = ej2_base_2.select('.' + CLS_INDICATOR, this.element);
	            var tbWidth = (ej2_base_4.isNullOrUndefined(hsCnt)) ? this.tbItems.offsetWidth : hsCnt.offsetWidth;
	            ej2_base_4.setStyleAttribute(bar, { 'left': trg.offsetLeft + 'px', 'right': tbWidth - (trg.offsetLeft + trg.offsetWidth) + 'px' });
	            this.bdrLine.classList.remove(CLS_HIDDEN);
	        };
	        Tab.prototype.setActive = function (value) {
	            this.tbItem = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element);
	            var trg = this.tbItem[value];
	            if (value >= 0) {
	                this.setProperties({ selectedItem: value }, true);
	            }
	            if (value < 0 || isNaN(value) || this.tbItem.length === 0 || trg.classList.contains(CLS_ACTIVE)) {
	                return;
	            }
	            if (!this.isTemplate) {
	                var prev = this.tbItem[this.prevIndex];
	                if (!ej2_base_4.isNullOrUndefined(prev)) {
	                    prev.removeAttribute('aria-controls');
	                }
	                ej2_base_1.attributes(trg, { 'aria-controls': CLS_CONTENT + '_' + value });
	            }
	            var id = trg.id;
	            this.removeActiveClass(id);
	            trg.classList.add(CLS_ACTIVE);
	            trg.setAttribute('aria-selected', 'true');
	            var no = Number(this.extIndex(id));
	            ej2_base_1.attributes(this.element, { 'aria-activedescendant': id });
	            if (this.isTemplate) {
	                if (ej2_base_2.select('.' + CLS_CONTENT, this.element).children.length > 0) {
	                    var trg_1 = this.findEle(ej2_base_2.select('.e-content', this.element).children, CLS_CONTENT + '_' + no);
	                    if (!ej2_base_4.isNullOrUndefined(trg_1)) {
	                        trg_1.classList.add(CLS_ACTIVE);
	                    }
	                    this.triggerAnimation(id, this.enableAnimation);
	                }
	            }
	            else {
	                var item = ej2_base_2.select('.' + CLS_CONTENT + ' > #' + CLS_CONTENT + '_' + this.extIndex(id), this.element);
	                if (ej2_base_4.isNullOrUndefined(item)) {
	                    this.cntEle.appendChild(ej2_base_4.createElement('div', {
	                        id: CLS_CONTENT + '_' + this.extIndex(id), className: CLS_ITEM + ' ' + CLS_ACTIVE,
	                        attrs: { role: 'tabpanel', 'aria-labelledby': CLS_ITEM + '_' + this.extIndex(id) }
	                    }));
	                    var eleTrg = ej2_base_2.select('.' + CLS_CONTENT + ' > #' + CLS_CONTENT + '_' + this.extIndex(id), this.element);
	                    this.getContent(eleTrg, Number(this.extIndex(id)));
	                }
	                else {
	                    item.classList.add(CLS_ACTIVE);
	                }
	                this.triggerAnimation(id, this.enableAnimation);
	            }
	            this.setActiveBorder();
	            var curActItem = ej2_base_2.select('.' + CLS_HEADER + ' #' + id, this.element);
	            this.refreshItemVisibility(curActItem);
	            curActItem.firstChild.focus();
	            var eventArg = {
	                previousItem: this.prevItem,
	                previousIndex: this.prevIndex,
	                selectedItem: trg,
	                selectedIndex: value
	            };
	            this.trigger('selected', eventArg);
	        };
	        Tab.prototype.setItems = function (items) {
	            this.isReplace = true;
	            this.tbItems = ej2_base_2.select('.' + CLS_TB_ITEMS, this.element);
	            this.tbObj.items = this.parseObject(items);
	            this.tbObj.dataBind();
	            this.isReplace = false;
	        };
	        Tab.prototype.setRTL = function (value) {
	            this.tbObj.enableRtl = value;
	            this.tbObj.dataBind();
	            this.setCssClass(this.element, CLS_RTL, value);
	            this.refreshActiveBorder();
	        };
	        Tab.prototype.refreshActiveBorder = function () {
	            if (!ej2_base_4.isNullOrUndefined(this.bdrLine)) {
	                this.bdrLine.classList.add(CLS_HIDDEN);
	            }
	            this.setActiveBorder();
	        };
	        Tab.prototype.wireEvents = function () {
	            window.addEventListener('resize', this.refreshActElePosition.bind(this));
	            ej2_base_5.EventHandler.add(this.element, 'mouseover', this.hoverHandler, this);
	            ej2_base_5.EventHandler.add(this.element, 'keydown', this.spaceKeyDown, this);
	            if (!ej2_base_4.isNullOrUndefined(this.cntEle)) {
	                this.touchModule = new ej2_base_5.Touch(this.cntEle, { swipe: this.swipeHandler.bind(this) });
	            }
	            this.keyModule = new ej2_base_3.KeyboardEvents(this.element, { keyAction: this.keyHandler.bind(this), keyConfigs: this.keyConfigs });
	            this.tabKeyModule = new ej2_base_3.KeyboardEvents(this.element, {
	                keyAction: this.keyHandler.bind(this),
	                keyConfigs: { openPopup: 'shift+f10', tab: 'tab', shiftTab: 'shift+tab' },
	                eventName: 'keydown'
	            });
	        };
	        Tab.prototype.unWireEvents = function () {
	            this.keyModule.destroy();
	            this.tabKeyModule.destroy();
	            if (!ej2_base_4.isNullOrUndefined(this.cntEle)) {
	                this.touchModule.destroy();
	            }
	            window.removeEventListener('resize', this.refreshActElePosition.bind(this));
	            this.element.removeEventListener('mouseover', this.hoverHandler.bind(this));
	        };
	        Tab.prototype.clickHandler = function (args) {
	            this.element.classList.remove(CLS_FOCUS);
	            var trg = args.originalEvent.target;
	            var trgParent = ej2_base_1.closest(trg, '.' + CLS_TB_ITEM);
	            var trgIndex = this.getEleIndex(trgParent);
	            if (trg.classList.contains(CLS_ICON_CLOSE)) {
	                this.removeTab(trgIndex);
	            }
	            else {
	                this.isPopup = false;
	                if (!ej2_base_4.isNullOrUndefined(trgParent) && trgIndex !== this.selectedItem) {
	                    this.select(trgIndex);
	                }
	            }
	        };
	        Tab.prototype.swipeHandler = function (e) {
	            if (e.velocity < 3 && ej2_base_4.isNullOrUndefined(e.originalEvent.changedTouches)) {
	                return;
	            }
	            if (e.swipeDirection === 'Right') {
	                this.select(this.selectedItem - 1);
	            }
	            else {
	                if (e.swipeDirection === 'Left' && (this.selectedItem !== ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element).length - 1)) {
	                    this.select(this.selectedItem + 1);
	                }
	            }
	        };
	        Tab.prototype.spaceKeyDown = function (e) {
	            if ((e.keyCode === 32 && e.which === 32) || (e.keyCode === 35 && e.which === 35)) {
	                e.preventDefault();
	            }
	        };
	        Tab.prototype.keyHandler = function (e) {
	            this.element.classList.add(CLS_FOCUS);
	            var trg = e.target;
	            var actEle = ej2_base_2.select('.' + CLS_HEADER + ' .' + CLS_ACTIVE, this.element);
	            var tabItem = ej2_base_4.selectAll('.' + CLS_TB_ITEM + ':not(.' + CLS_TB_POPUP + ')', this.element);
	            this.popEle = ej2_base_2.select('.' + CLS_TB_POP, this.element);
	            if (!ej2_base_4.isNullOrUndefined(this.popEle)) {
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
	                        && ej2_base_1.closest(trg, '.' + CLS_TB_ITEM).classList.contains(CLS_ACTIVE) === false) {
	                        trg.setAttribute('tabindex', '-1');
	                    }
	                    if (this.popObj && ej2_base_2.isVisible(this.popObj.element)) {
	                        this.popObj.hide(this.hide);
	                    }
	                    actEle.children.item(0).setAttribute('tabindex', '0');
	                    break;
	                case 'moveLeft':
	                case 'moveRight':
	                    var item = ej2_base_1.closest(document.activeElement, '.' + CLS_TB_ITEM);
	                    if (!ej2_base_4.isNullOrUndefined(item)) {
	                        this.refreshItemVisibility(item);
	                    }
	                    break;
	                case 'openPopup':
	                    e.preventDefault();
	                    if (!ej2_base_4.isNullOrUndefined(this.popEle) && this.popEle.classList.contains(CLS_POPUP_CLOSE)) {
	                        this.popObj.show(this.show);
	                    }
	                    break;
	                case 'delete':
	                    var trgParent = ej2_base_1.closest(trg, '.' + CLS_TB_ITEM);
	                    if (this.showCloseButton === true && !ej2_base_4.isNullOrUndefined(trgParent)) {
	                        var nxtSib = trgParent.nextSibling;
	                        if (!ej2_base_4.isNullOrUndefined(nxtSib) && nxtSib.classList.contains(CLS_TB_ITEM)) {
	                            nxtSib.firstChild.focus();
	                        }
	                        this.removeTab(this.getEleIndex(trgParent));
	                    }
	                    this.setActiveBorder();
	                    break;
	            }
	        };
	        Tab.prototype.refreshActElePosition = function () {
	            var activeEle = ej2_base_2.select('.' + CLS_TB_ITEM + '.' + CLS_TB_POPUP + '.' + CLS_ACTIVE, this.element);
	            if (!ej2_base_4.isNullOrUndefined(activeEle)) {
	                this.select(this.getEleIndex(activeEle));
	            }
	            this.refreshActiveBorder();
	        };
	        Tab.prototype.refreshItemVisibility = function (target) {
	            var scrCnt = ej2_base_2.select('.e-hscroll-content', this.tbItems);
	            if (!ej2_base_4.isNullOrUndefined(scrCnt)) {
	                var scrBar = ej2_base_2.select('.e-hscroll-bar', this.tbItems);
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
	            if (trg.classList.contains(CLS_ICON_CLOSE)) {
	                trg.setAttribute('title', new ej2_base_3.L10n('tab', { title: this.title }, this.locale).getConstant('title'));
	            }
	        };
	        Tab.prototype.enableTab = function (index, value) {
	            var tbItems = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element)[index];
	            if (ej2_base_4.isNullOrUndefined(tbItems)) {
	                return;
	            }
	            if (value === true) {
	                tbItems.classList.remove(CLS_DISABLE);
	            }
	            else {
	                tbItems.classList.add(CLS_DISABLE);
	                if (tbItems.classList.contains(CLS_ACTIVE)) {
	                    this.select(index + 1);
	                }
	            }
	            tbItems.setAttribute('aria-disabled', (value === true) ? 'false' : 'true');
	        };
	        Tab.prototype.addTab = function (items, index) {
	            var _this = this;
	            this.trigger('adding', { addedItems: items });
	            if (ej2_base_4.isNullOrUndefined(index)) {
	                index = ej2_base_4.selectAll('.' + CLS_TB_ITEM).length - 1;
	            }
	            if (this.isTemplate === true || ej2_base_4.selectAll('.' + CLS_TB_ITEM).length - 1 < index || index < 0 || isNaN(index)) {
	                return;
	            }
	            this.bdrLine.classList.add(CLS_HIDDEN);
	            this.tbItems = ej2_base_2.select('.' + CLS_TB_ITEMS, this.element);
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
	        Tab.prototype.removeTab = function (index) {
	            var trg = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element)[index];
	            var removingArgs = { removedItem: trg, removedIndex: index };
	            this.trigger('removing', removingArgs);
	            if (ej2_base_4.isNullOrUndefined(trg)) {
	                return;
	            }
	            this.tbObj.removeItems(index);
	            this.refreshActiveBorder();
	            var no = this.extIndex(trg.id);
	            var cntTrg = this.findEle(ej2_base_2.select('.e-content', this.element).children, CLS_CONTENT + '_' + no);
	            if (!ej2_base_4.isNullOrUndefined(cntTrg)) {
	                cntTrg.outerHTML = '';
	            }
	            var removedArgs = { removedItem: trg, removedIndex: index };
	            this.trigger('removed', removedArgs);
	            if (trg.classList.contains(CLS_ACTIVE)) {
	                index = (index > ej2_base_4.selectAll('.' + CLS_TB_ITEM + ':not(.' + CLS_TB_POPUP + ')', this.element).length - 1) ? index - 1 : index;
	                this.enableAnimation = false;
	                this.select(index);
	            }
	            if (ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element).length === 0) {
	                this.hdrEle.style.display = 'none';
	            }
	            this.enableAnimation = true;
	        };
	        Tab.prototype.hideTab = function (index, value) {
	            var item = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element)[index];
	            if (ej2_base_4.isNullOrUndefined(item)) {
	                return;
	            }
	            if (ej2_base_4.isNullOrUndefined(value)) {
	                value = true;
	            }
	            this.bdrLine.classList.add(CLS_HIDDEN);
	            if (value === true) {
	                item.classList.add(CLS_HIDDEN);
	                if (item.classList.contains(CLS_ACTIVE)) {
	                    this.select((index !== 0) ? index - 1 : index + 1);
	                }
	            }
	            else {
	                item.classList.remove(CLS_HIDDEN);
	            }
	            this.setActiveBorder();
	            item.setAttribute('aria-hidden', '' + value);
	        };
	        Tab.prototype.select = function (args) {
	            this.tbItems = ej2_base_2.select('.' + CLS_TB_ITEMS, this.element);
	            this.tbItem = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element);
	            this.prevItem = this.tbItem[this.prevIndex];
	            if (!ej2_base_4.isNullOrUndefined(this.prevItem)) {
	                this.prevItem.children.item(0).setAttribute('tabindex', '-1');
	            }
	            var eventArg = {
	                previousItem: this.prevItem,
	                previousIndex: this.prevIndex,
	                selectedItem: this.tbItem[this.selectedItem],
	                selectedIndex: this.selectedItem
	            };
	            this.trigger('selecting', eventArg);
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
	        Tab.prototype.disable = function (value) {
	            this.setCssClass(this.element, CLS_DISABLE, value);
	            this.element.setAttribute('aria-disabled', '' + value);
	        };
	        Tab.prototype.getPersistData = function () {
	            return this.addOnPersist(['selectedItem', 'actEleId']);
	        };
	        Tab.prototype.getModuleName = function () {
	            return 'tab';
	        };
	        Tab.prototype.onPropertyChanged = function (newProp, oldProp) {
	            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'width':
	                        ej2_base_4.setStyleAttribute(this.element, { width: ej2_base_3.formatUnit(newProp.width) });
	                        break;
	                    case 'height':
	                        ej2_base_4.setStyleAttribute(this.element, { height: ej2_base_3.formatUnit(newProp.height) });
	                        this.setContentHeight(false);
	                        break;
	                    case 'cssClass':
	                        this.setCssClass(this.element, newProp.cssClass, true);
	                        break;
	                    case 'items':
	                        this.setItems(newProp.items);
	                        this.select(this.selectedItem);
	                        break;
	                    case 'showCloseButton':
	                        this.setCloseButton(newProp.showCloseButton);
	                        break;
	                    case 'selectedItem':
	                        this.select(newProp.selectedItem);
	                        break;
	                    case 'headerPlacement':
	                        var tempHdrEle = ej2_base_2.select('.' + CLS_HEADER, this.element);
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
	        return Tab;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_1.Collection([], TabItem)
	    ], Tab.prototype, "items", void 0);
	    __decorate([
	        ej2_base_1.Property('100%')
	    ], Tab.prototype, "width", void 0);
	    __decorate([
	        ej2_base_1.Property('auto')
	    ], Tab.prototype, "height", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], Tab.prototype, "cssClass", void 0);
	    __decorate([
	        ej2_base_1.Property(0)
	    ], Tab.prototype, "selectedItem", void 0);
	    __decorate([
	        ej2_base_1.Property('Top')
	    ], Tab.prototype, "headerPlacement", void 0);
	    __decorate([
	        ej2_base_1.Property('Content')
	    ], Tab.prototype, "heightAdjustMode", void 0);
	    __decorate([
	        ej2_base_1.Property('Scrollable')
	    ], Tab.prototype, "overflowMode", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], Tab.prototype, "enableRtl", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], Tab.prototype, "showCloseButton", void 0);
	    __decorate([
	        ej2_base_1.Complex({}, TabAnimationSettings)
	    ], Tab.prototype, "animation", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], Tab.prototype, "created", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], Tab.prototype, "adding", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], Tab.prototype, "added", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], Tab.prototype, "selecting", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], Tab.prototype, "selected", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], Tab.prototype, "removing", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], Tab.prototype, "removed", void 0);
	    __decorate([
	        ej2_base_1.Event()
	    ], Tab.prototype, "destroyed", void 0);
	    Tab = __decorate([
	        ej2_base_2.NotifyPropertyChanges
	    ], Tab);
	    exports.Tab = Tab;
	    exports.tabBuilder = ej2_base_1.CreateBuilder(Tab);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(16)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, treeview_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(treeview_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 16 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(17), __webpack_require__(3), __webpack_require__(12), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, ej2_base_5, ej2_base_6, ej2_data_1, ej2_base_7, ej2_lists_1, ej2_buttons_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ROOT = 'e-treeview';
	    var COLLAPSIBLE = 'e-icon-collapsible';
	    var EXPANDABLE = 'e-icon-expandable';
	    var LISTITEM = 'e-list-item';
	    var LISTTEXT = 'e-list-text';
	    var PARENTITEM = 'e-list-parent';
	    var HOVER = 'e-hover';
	    var ACTIVE = 'e-active';
	    var LOAD = 'e-load';
	    var PROCESS = 'e-process';
	    var ICON = 'e-icons';
	    var TEXTWRAP = 'e-text-content';
	    var INPUT = 'e-tree-input';
	    var EDITING = 'e-editing';
	    var RTL = 'e-rtl';
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
	    var SELECTED = 'e-selected';
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
	    var FOCUS = 'e-node-focus';
	    var treeAriaAttr = {
	        treeRole: 'tree',
	        itemRole: 'treeitem',
	        listRole: 'group',
	        itemText: '',
	    };
	    var FieldsSettings = (function (_super) {
	        __extends(FieldsSettings, _super);
	        function FieldsSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return FieldsSettings;
	    }(ej2_base_2.ChildProperty));
	    __decorate([
	        ej2_base_2.Property('child')
	    ], FieldsSettings.prototype, "child", void 0);
	    __decorate([
	        ej2_base_2.Property([])
	    ], FieldsSettings.prototype, "dataSource", void 0);
	    __decorate([
	        ej2_base_2.Property('expanded')
	    ], FieldsSettings.prototype, "expanded", void 0);
	    __decorate([
	        ej2_base_2.Property('hasChildren')
	    ], FieldsSettings.prototype, "hasChildren", void 0);
	    __decorate([
	        ej2_base_2.Property('htmlAttributes')
	    ], FieldsSettings.prototype, "htmlAttributes", void 0);
	    __decorate([
	        ej2_base_2.Property('iconCss')
	    ], FieldsSettings.prototype, "iconCss", void 0);
	    __decorate([
	        ej2_base_2.Property('id')
	    ], FieldsSettings.prototype, "id", void 0);
	    __decorate([
	        ej2_base_2.Property('imageUrl')
	    ], FieldsSettings.prototype, "imageUrl", void 0);
	    __decorate([
	        ej2_base_2.Property('isChecked')
	    ], FieldsSettings.prototype, "isChecked", void 0);
	    __decorate([
	        ej2_base_2.Property('parentID')
	    ], FieldsSettings.prototype, "parentID", void 0);
	    __decorate([
	        ej2_base_2.Property(null)
	    ], FieldsSettings.prototype, "query", void 0);
	    __decorate([
	        ej2_base_2.Property('selected')
	    ], FieldsSettings.prototype, "selected", void 0);
	    __decorate([
	        ej2_base_2.Property(null)
	    ], FieldsSettings.prototype, "tableName", void 0);
	    __decorate([
	        ej2_base_2.Property('text')
	    ], FieldsSettings.prototype, "text", void 0);
	    __decorate([
	        ej2_base_2.Property('tooltip')
	    ], FieldsSettings.prototype, "tooltip", void 0);
	    __decorate([
	        ej2_base_2.Property('navigateUrl')
	    ], FieldsSettings.prototype, "navigateUrl", void 0);
	    exports.FieldsSettings = FieldsSettings;
	    var ActionSettings = (function (_super) {
	        __extends(ActionSettings, _super);
	        function ActionSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return ActionSettings;
	    }(ej2_base_2.ChildProperty));
	    __decorate([
	        ej2_base_2.Property('SlideDown')
	    ], ActionSettings.prototype, "effect", void 0);
	    __decorate([
	        ej2_base_2.Property(400)
	    ], ActionSettings.prototype, "duration", void 0);
	    __decorate([
	        ej2_base_2.Property('linear')
	    ], ActionSettings.prototype, "easing", void 0);
	    exports.ActionSettings = ActionSettings;
	    var NodeAnimationSettings = (function (_super) {
	        __extends(NodeAnimationSettings, _super);
	        function NodeAnimationSettings() {
	            return _super !== null && _super.apply(this, arguments) || this;
	        }
	        return NodeAnimationSettings;
	    }(ej2_base_2.ChildProperty));
	    __decorate([
	        ej2_base_2.Complex({ effect: 'SlideUp', duration: 400, easing: 'linear' }, ActionSettings)
	    ], NodeAnimationSettings.prototype, "collapse", void 0);
	    __decorate([
	        ej2_base_2.Complex({ effect: 'SlideDown', duration: 400, easing: 'linear' }, ActionSettings)
	    ], NodeAnimationSettings.prototype, "expand", void 0);
	    exports.NodeAnimationSettings = NodeAnimationSettings;
	    var TreeView = (function (_super) {
	        __extends(TreeView, _super);
	        function TreeView(options, element) {
	            var _this = _super.call(this, options, element) || this;
	            _this.checkActionNodes = [];
	            _this.dragStartAction = false;
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
	        TreeView.prototype.getModuleName = function () {
	            return 'treeview';
	        };
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
	            this.aniObj = new ej2_base_4.Animation({});
	            this.treeList = [];
	            this.isLoaded = false;
	            if (ej2_base_7.isNullOrUndefined(this.selectedNodes)) {
	                this.setProperties({ selectedNodes: [] }, true);
	            }
	            if (ej2_base_7.isNullOrUndefined(this.checkedNodes)) {
	                this.setProperties({ checkedNodes: [] }, true);
	            }
	        };
	        TreeView.prototype.getPersistData = function () {
	            var keyEntity = ['selectedNodes', 'checkedNodes'];
	            return this.addOnPersist(keyEntity);
	        };
	        TreeView.prototype.render = function () {
	            this.initialize();
	            this.setDataBinding();
	            this.setExpandOnType();
	            this.setRipple();
	            this.wireEditingEvents(this.allowEditing);
	            this.setDragAndDrop(this.allowDragAndDrop);
	            this.wireEvents();
	        };
	        TreeView.prototype.initialize = function () {
	            this.element.setAttribute('tabindex', '0');
	            this.element.setAttribute('role', treeAriaAttr.treeRole);
	            this.setCssClass(null, this.cssClass);
	            this.setEnableRtl();
	            this.setFullRow(this.fullRowSelect);
	            this.setTouchPopup(this.allowMultiSelection);
	            this.setMultiSelect(this.allowMultiSelection);
	            this.nodeTemplateFn = this.templateComplier(this.nodeTemplate);
	        };
	        TreeView.prototype.setEnableRtl = function () {
	            this.enableRtl ? ej2_base_6.addClass([this.element], RTL) : ej2_base_6.removeClass([this.element], RTL);
	        };
	        TreeView.prototype.setRipple = function () {
	            var tempStr = '.' + FULLROW + ',.' + TEXTWRAP;
	            var rippleModel = {
	                selector: tempStr,
	                ignore: '.' + TEXTWRAP + ' > .' + ICON + ',.' + INPUT + ', .' + CHECKBOXWRAP
	            };
	            this.rippleFn = ej2_base_4.rippleEffect(this.element, rippleModel);
	            var iconModel = {
	                selector: '.' + TEXTWRAP + ' > .' + ICON,
	                isCenterRipple: true,
	            };
	            this.rippleIconFn = ej2_base_4.rippleEffect(this.element, iconModel);
	        };
	        TreeView.prototype.setFullRow = function (isEnabled) {
	            isEnabled ? ej2_base_6.addClass([this.element], FULLROWWRAP) : ej2_base_6.removeClass([this.element], FULLROWWRAP);
	        };
	        TreeView.prototype.setTouchPopup = function (isEnabled) {
	            if (isEnabled) {
	                var popup = ej2_base_6.createElement('div', { className: POPUP, styles: 'display:none;' });
	                var content = ej2_base_6.createElement('div', { className: CONTENT, attrs: { tabIndex: '-1' } });
	                var icon = ej2_base_6.createElement('span', { className: ICON });
	                content.appendChild(icon);
	                ej2_base_6.append([content, ej2_base_6.createElement('div', { className: DOWNTAIL })], popup);
	                this.element.appendChild(popup);
	                ej2_base_3.EventHandler.add(content, 'click', this.popupClick, this);
	            }
	            else {
	                var popup = ej2_base_6.select('.' + POPUP, this.element);
	                if (popup) {
	                    ej2_base_6.detach(popup);
	                }
	            }
	        };
	        TreeView.prototype.setMultiSelect = function (isEnabled) {
	            if (isEnabled) {
	                this.element.setAttribute('aria-multiselectable', 'true');
	            }
	            else {
	                this.element.removeAttribute('aria-multiselectable');
	            }
	        };
	        TreeView.prototype.popupClick = function (e) {
	            e.stopImmediatePropagation();
	            var target = e.currentTarget;
	            target = ej2_base_6.closest(target, '.' + POPUP);
	            if (target.classList.contains(POPUPSELECT)) {
	                ej2_base_6.removeClass([target], POPUPSELECT);
	                ej2_base_6.select('.' + POPUP, this.element).style.display = 'none';
	            }
	            else {
	                ej2_base_6.addClass([target], POPUPSELECT);
	            }
	        };
	        TreeView.prototype.templateComplier = function (template) {
	            if (template) {
	                var e = void 0;
	                try {
	                    if (document.querySelectorAll(template).length) {
	                        return ej2_base_1.compile(document.querySelector(template).innerHTML.trim());
	                    }
	                }
	                catch (e) {
	                    return ej2_base_1.compile(template);
	                }
	            }
	            return undefined;
	        };
	        TreeView.prototype.setDataBinding = function () {
	            var _this = this;
	            this.treeList.push('false');
	            if (this.fields.dataSource instanceof ej2_data_1.DataManager) {
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
	                if (ej2_base_7.isNullOrUndefined(this.fields.dataSource)) {
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
	                query = new ej2_data_1.Query();
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
	            ej2_lists_1.ListBase.addSorting(this.sortOrder, mapper.text, query);
	            if (!ej2_base_7.isNullOrUndefined(value) && !ej2_base_7.isNullOrUndefined(mapper.parentID)) {
	                query.where(mapper.parentID, 'equal', (this.isNumberTypeId ? parseFloat(value) : value));
	            }
	            return query;
	        };
	        TreeView.prototype.setRootData = function () {
	            this.dataType = this.getDataType(this.treeData, this.fields);
	            if (this.dataType === 1) {
	                this.groupedData = this.getGroupedData(this.treeData, this.fields.parentID);
	                var rootItems = this.getChildNodes(this.treeData, undefined, true);
	                if (ej2_base_7.isNullOrUndefined(rootItems)) {
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
	            this.ulElement = ej2_lists_1.ListBase.createList(isSorted ? this.rootData : this.getSortedData(this.rootData), this.listBaseOption);
	            this.element.appendChild(this.ulElement);
	            this.finalizeNode(this.element);
	        };
	        TreeView.prototype.beforeNodeCreate = function (e) {
	            if (this.showCheckBox) {
	                var checkboxEle = ej2_buttons_1.createCheckBox(true);
	                var icon = ej2_base_6.select('div.' + ICON, e.item);
	                var id = e.item.getAttribute('data-uid');
	                e.item.childNodes[0].insertBefore(checkboxEle, e.item.childNodes[0].childNodes[ej2_base_7.isNullOrUndefined(icon) ? 0 : 1]);
	                if (this.checkedNodes.indexOf(id) > -1) {
	                    ej2_base_6.select('.' + CHECKBOXFRAME, checkboxEle).classList.add(CHECK);
	                    checkboxEle.setAttribute('aria-checked', 'true');
	                    this.addCheck(e.item);
	                }
	                else if (!ej2_base_7.isNullOrUndefined(e.curData[e.fields.isChecked]) && e.curData[e.fields.isChecked].toString() === 'true') {
	                    ej2_base_6.select('.' + CHECKBOXFRAME, checkboxEle).classList.add(CHECK);
	                    checkboxEle.setAttribute('aria-checked', 'true');
	                    this.addCheck(e.item);
	                }
	                else {
	                    checkboxEle.setAttribute('aria-checked', 'false');
	                }
	            }
	            if (this.fullRowSelect) {
	                this.createFullRow(e.item);
	            }
	            if (this.allowMultiSelection && !e.item.classList.contains(SELECTED)) {
	                e.item.setAttribute('aria-selected', 'false');
	            }
	            var fields = e.fields;
	            this.addActionClass(e, fields.selected, SELECTED);
	            this.addActionClass(e, fields.expanded, EXPANDED);
	            if (!ej2_base_7.isNullOrUndefined(this.nodeTemplateFn)) {
	                var textEle = e.item.querySelector('.' + LISTTEXT);
	                textEle.innerHTML = '';
	                ej2_base_6.append(this.nodeTemplateFn(e.curData), textEle);
	            }
	            var eventArgs = {
	                node: e.item,
	                nodeData: e.curData,
	                text: e.text,
	            };
	            this.trigger('drawNode', eventArgs);
	        };
	        TreeView.prototype.addActionClass = function (e, action, cssClass) {
	            var data = e.curData;
	            if (data.hasOwnProperty(action) && !ej2_base_7.isNullOrUndefined(data[action]) && data[action].toString() !== 'false') {
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
	            var cusQuery = new ej2_data_1.Query().group(groupBy);
	            var ds = ej2_lists_1.ListBase.getDataSource(dataSource, cusQuery);
	            var grpItem = [];
	            for (var j = 0; j < ds.length; j++) {
	                var itemObj = ds[j].items;
	                grpItem.push(itemObj);
	            }
	            return grpItem;
	        };
	        TreeView.prototype.getSortedData = function (list) {
	            if (list && this.sortOrder !== 'None') {
	                list = ej2_lists_1.ListBase.getDataSource(list, ej2_lists_1.ListBase.addSorting(this.sortOrder, this.fields.text));
	            }
	            return list;
	        };
	        TreeView.prototype.finalizeNode = function (element) {
	            var _this = this;
	            if (this.isLoaded) {
	                var sNodes = ej2_base_6.selectAll('.' + SELECTED, element);
	                for (var i = 0; i < sNodes.length; i++) {
	                    this.selectNode(sNodes[i], null);
	                    break;
	                }
	                ej2_base_6.removeClass(sNodes, SELECTED);
	            }
	            var cNodes = ej2_base_6.selectAll('.' + LISTITEM + ':not(.' + EXPANDED + ')', element);
	            for (var j = 0; j < cNodes.length; j++) {
	                var icon = ej2_base_6.select('div.' + ICON, cNodes[j]);
	                if (icon && icon.classList.contains(EXPANDABLE)) {
	                    cNodes[j].setAttribute('aria-expanded', 'false');
	                    ej2_base_6.addClass([cNodes[j]], NODECOLLAPSED);
	                }
	            }
	            var eNodes = ej2_base_6.selectAll('.' + EXPANDED, element);
	            for (var i = 0; i < eNodes.length; i++) {
	                this.renderChildNodes(eNodes[i]);
	            }
	            ej2_base_6.removeClass(eNodes, EXPANDED);
	            this.updateList();
	            if (this.showCheckBox) {
	                var nodes_1 = [].concat([], this.checkedNodes);
	                this.checkedNodes.forEach(function (value, index) {
	                    var checkBox = _this.element.querySelector('[data-uid="' + value + '"]');
	                    if (ej2_base_7.isNullOrUndefined(checkBox)) {
	                        nodes_1 = nodes_1.filter(function (e) { return e !== value; });
	                    }
	                });
	                this.setProperties({ checkedNodes: nodes_1 }, true);
	            }
	        };
	        TreeView.prototype.ensureParentCheckState = function (element) {
	            if (!ej2_base_7.isNullOrUndefined(element)) {
	                if (element.classList.contains(ROOT)) {
	                    return;
	                }
	                var ulElement = element;
	                if (element.classList.contains(LISTITEM)) {
	                    ulElement = ej2_base_6.select('.' + PARENTITEM, element);
	                }
	                var checkedNodes = ej2_base_6.selectAll('.' + CHECK, ulElement);
	                var nodes = ej2_base_6.selectAll('.' + LISTITEM, ulElement);
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
	                var parentUL = ej2_base_6.closest(element, '.' + PARENTITEM);
	                if (!ej2_base_7.isNullOrUndefined(parentUL)) {
	                    var currentParent = ej2_base_6.closest(parentUL, '.' + LISTITEM);
	                    this.ensureParentCheckState(currentParent);
	                }
	            }
	        };
	        TreeView.prototype.ensureChildCheckState = function (element, e) {
	            if (!ej2_base_7.isNullOrUndefined(element)) {
	                var childElement = ej2_base_6.select('.' + PARENTITEM, element);
	                var checkBoxes = void 0;
	                if (!ej2_base_7.isNullOrUndefined(childElement)) {
	                    checkBoxes = ej2_base_6.selectAll('.' + CHECKBOXWRAP, childElement);
	                    var isChecked = element.getElementsByClassName(CHECKBOXFRAME)[0].classList.contains(CHECK);
	                    var checkedState = void 0;
	                    for (var index = 0; index < checkBoxes.length; index++) {
	                        if (!ej2_base_7.isNullOrUndefined(this.currentLoadData) && !ej2_base_7.isNullOrUndefined(this.currentLoadData[index][this.fields.isChecked])) {
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
	            if (!ej2_base_7.isNullOrUndefined(nodes)) {
	                for (var i = 0, len = nodes.length; i < len; i++) {
	                    var liEle = this.getElement(nodes[i]);
	                    if (ej2_base_7.isNullOrUndefined(liEle)) {
	                        continue;
	                    }
	                    var checkBox = ej2_base_6.select('.' + PARENTITEM + ' .' + CHECKBOXWRAP, liEle);
	                    this.validateCheckNode(checkBox, !doCheck, liEle, null);
	                }
	            }
	            else {
	                var checkBoxes = ej2_base_6.selectAll('.' + CHECKBOXWRAP, this.element);
	                for (var index = 0; index < checkBoxes.length; index++) {
	                    this.changeState(checkBoxes[index], doCheck ? 'check' : 'uncheck');
	                }
	            }
	        };
	        TreeView.prototype.changeState = function (wrapper, state, e, isPrevent, isAdd) {
	            var ariaState;
	            var eventArgs;
	            var currLi = ej2_base_6.closest(wrapper, '.' + LISTITEM);
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
	                ej2_base_6.removeClass([frameSpan], [CHECK, INDETERMINATE]);
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
	            if (!ej2_base_7.isNullOrUndefined(ariaState)) {
	                wrapper.setAttribute('aria-checked', ariaState);
	            }
	            if (isAdd) {
	                var data = [].concat([], this.checkActionNodes);
	                eventArgs = this.getCheckEvent(currLi, state, e);
	                if (ej2_base_1.isUndefined(isPrevent)) {
	                    eventArgs.data = data;
	                }
	            }
	            if (!isPrevent) {
	                if (!ej2_base_7.isNullOrUndefined(ariaState)) {
	                    wrapper.setAttribute('aria-checked', ariaState);
	                    eventArgs.data[0].checked = ariaState;
	                    this.trigger('nodeChecked', eventArgs);
	                    this.checkActionNodes = [];
	                }
	            }
	        };
	        TreeView.prototype.addCheck = function (liEle) {
	            var id = liEle.getAttribute('data-uid');
	            if (!ej2_base_7.isNullOrUndefined(id) && this.checkedNodes.indexOf(id) === -1) {
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
	            return { action: action, cancel: false, isInteracted: ej2_base_7.isNullOrUndefined(e) ? false : true, node: currLi, data: nodeData };
	        };
	        TreeView.prototype.finalize = function () {
	            var firstNode = ej2_base_6.select('.' + LISTITEM, this.element);
	            if (firstNode) {
	                ej2_base_6.addClass([firstNode], FOCUS);
	            }
	            this.doSelectionAction();
	            this.isLoaded = true;
	            var eventArgs = { data: this.treeData };
	            this.trigger('dataBound', eventArgs);
	        };
	        TreeView.prototype.doSelectionAction = function () {
	            var sNodes = ej2_base_6.selectAll('.' + SELECTED, this.element);
	            var sUids = this.selectedNodes;
	            if (sUids.length > 0) {
	                this.setProperties({ selectedNodes: [] }, true);
	                for (var i = 0; i < sUids.length; i++) {
	                    var sNode = ej2_base_6.select('[data-uid="' + sUids[i] + '"]', this.element);
	                    this.selectNode(sNode, null, true);
	                    if (!this.allowMultiSelection) {
	                        break;
	                    }
	                }
	            }
	            else {
	                this.selectGivenNodes(sNodes);
	            }
	            ej2_base_6.removeClass(sNodes, SELECTED);
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
	            ej2_base_3.EventHandler.remove(this.element, 'contextmenu ', this.preventContextMenu);
	            if (!target || this.dragStartAction) {
	                return;
	            }
	            else {
	                var classList = target.classList;
	                var li = ej2_base_6.closest(target, '.' + LISTITEM);
	                if (!li) {
	                    return;
	                }
	                else {
	                    this.removeHover();
	                    this.setFocusElement(li);
	                    if (this.showCheckBox) {
	                        var checkWrapper = ej2_base_6.closest(target, '.' + CHECKBOXWRAP);
	                        if (!ej2_base_7.isNullOrUndefined(checkWrapper)) {
	                            var checkElement = ej2_base_6.select('.' + CHECKBOXFRAME, checkWrapper);
	                            this.validateCheckNode(checkWrapper, checkElement.classList.contains(CHECK), li, e);
	                            this.triggerClickEvent(e, li);
	                            return;
	                        }
	                    }
	                    if (classList.contains(EXPANDABLE)) {
	                        this.expandAction(li, target, e);
	                    }
	                    else if (classList.contains(COLLAPSIBLE)) {
	                        this.collapseNode(li, target, e);
	                    }
	                    else {
	                        if (!classList.contains(PARENTITEM) && !classList.contains(LISTITEM)) {
	                            var multiSelect = false;
	                            if (ej2_base_1.Browser.isDevice && this.allowMultiSelection) {
	                                var popup = ej2_base_6.select('.' + POPUP, this.element);
	                                if (!ej2_base_6.isVisible(popup)) {
	                                    popup.style.display = '';
	                                }
	                                var txtWrap = ej2_base_6.closest(target, '.' + TEXTWRAP);
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
	            var currLi = ej2_base_6.closest(wrapper, '.' + LISTITEM);
	            this.checkActionNodes = [];
	            var ariaState = !isCheck ? 'true' : 'false';
	            if (!ej2_base_7.isNullOrUndefined(ariaState)) {
	                wrapper.setAttribute('aria-checked', ariaState);
	            }
	            var eventArgs = this.getCheckEvent(currLi, !isCheck ? 'uncheck' : 'check', e);
	            this.trigger('nodeChecking', eventArgs);
	            return eventArgs;
	        };
	        TreeView.prototype.nodeCheckedEvent = function (wrapper, isCheck, e) {
	            var currLi = ej2_base_6.closest(wrapper, '.' + LISTITEM);
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
	            ej2_base_6.removeClass([icon], LOAD);
	            ej2_base_6.removeClass([icon], EXPANDABLE);
	            ej2_base_6.addClass([icon], COLLAPSIBLE);
	            var start = 0;
	            var end = 0;
	            var proxy = this;
	            var ul = ej2_base_6.select('.' + PARENTITEM, currLi);
	            var liEle = currLi;
	            this.setHeight(liEle, ul);
	            this.aniObj.animate(ul, {
	                name: this.animation.expand.effect,
	                duration: this.animation.expand.duration,
	                timingFunction: this.animation.expand.easing,
	                begin: function (args) {
	                    liEle.style.overflow = 'hidden';
	                    start = liEle.offsetHeight;
	                    end = ej2_base_6.select('.' + TEXTWRAP, currLi).offsetHeight;
	                },
	                progress: function (args) {
	                    args.element.style.display = 'block';
	                    proxy.animateHeight(args, start, end);
	                },
	                end: function (args) {
	                    args.element.style.display = 'block';
	                    liEle.style.overflow = '';
	                    liEle.style.height = '';
	                    ej2_base_6.removeClass([icon], PROCESS);
	                    currLi.setAttribute('aria-expanded', 'true');
	                    ej2_base_6.removeClass([currLi], NODECOLLAPSED);
	                    if (_this.isLoaded && _this.expandArgs) {
	                        _this.trigger('nodeExpanded', _this.expandArgs);
	                    }
	                }
	            });
	        };
	        TreeView.prototype.collapseNode = function (currLi, icon, e) {
	            var _this = this;
	            if (icon.classList.contains(PROCESS)) {
	                return;
	            }
	            else {
	                ej2_base_6.addClass([icon], PROCESS);
	            }
	            var colArgs;
	            if (this.isLoaded) {
	                colArgs = this.getExpandEvent(currLi, e);
	                this.trigger('nodeCollapsing', colArgs);
	                if (colArgs.cancel) {
	                    return;
	                }
	            }
	            ej2_base_6.removeClass([icon], COLLAPSIBLE);
	            ej2_base_6.addClass([icon], EXPANDABLE);
	            var start = 0;
	            var end = 0;
	            var proxy = this;
	            var ul = ej2_base_6.select('.' + PARENTITEM, currLi);
	            var liEle = currLi;
	            ej2_base_6.addClass([currLi], NODECOLLAPSED);
	            this.aniObj.animate(ul, {
	                name: this.animation.collapse.effect,
	                duration: this.animation.collapse.duration,
	                timingFunction: this.animation.collapse.easing,
	                begin: function (args) {
	                    liEle.style.overflow = 'hidden';
	                    start = ej2_base_6.select('.' + TEXTWRAP, currLi).offsetHeight;
	                    end = liEle.offsetHeight;
	                },
	                progress: function (args) {
	                    proxy.animateHeight(args, start, end);
	                },
	                end: function (args) {
	                    liEle.style.overflow = '';
	                    args.element.style.display = 'none';
	                    liEle.style.height = '';
	                    ej2_base_6.removeClass([icon], PROCESS);
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
	            var eicon = ej2_base_6.select('div.' + ICON, parentLi);
	            if (ej2_base_7.isNullOrUndefined(eicon)) {
	                return;
	            }
	            ej2_base_6.addClass([eicon], LOAD);
	            var childItems;
	            if (this.fields.dataSource instanceof ej2_data_1.DataManager) {
	                var level = this.parents(parentLi, '.' + PARENTITEM).length;
	                var mapper_1 = this.getChildFields(this.fields, level, 1);
	                if (ej2_base_7.isNullOrUndefined(mapper_1) || ej2_base_7.isNullOrUndefined(mapper_1.dataSource)) {
	                    ej2_base_6.detach(eicon);
	                    parentLi.removeAttribute('aria-expanded');
	                    return;
	                }
	                this.treeList.push('false');
	                mapper_1.dataSource.executeQuery(this.getQuery(mapper_1, parentLi.getAttribute('data-uid'))).then(function (e) {
	                    _this.treeList.pop();
	                    childItems = e.result;
	                    _this.currentLoadData = childItems;
	                    if (ej2_base_7.isNullOrUndefined(childItems) || childItems.length === 0) {
	                        ej2_base_6.detach(eicon);
	                        parentLi.removeAttribute('aria-expanded');
	                    }
	                    else {
	                        var prop = _this.getActualProperties(mapper_1);
	                        _this.listBaseOption.fields = prop;
	                        _this.listBaseOption.fields.url = prop.navigateUrl;
	                        _this.listBaseOption.ariaAttributes.level = parseFloat(parentLi.getAttribute('aria-level')) + 1;
	                        parentLi.appendChild(ej2_lists_1.ListBase.createList(childItems, _this.listBaseOption));
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
	                if (ej2_base_7.isNullOrUndefined(childItems) || childItems.length === 0) {
	                    ej2_base_6.detach(eicon);
	                    parentLi.removeAttribute('aria-expanded');
	                    return;
	                }
	                else {
	                    this.listBaseOption.ariaAttributes.level = parseFloat(parentLi.getAttribute('aria-level')) + 1;
	                    parentLi.appendChild(ej2_lists_1.ListBase.createList(this.getSortedData(childItems), this.listBaseOption));
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
	            var childData;
	            if (nodeLevel === dataLevel) {
	                return this.getChildMapper(mapper);
	            }
	            else {
	                return this.getChildFields(this.getChildMapper(mapper), nodeLevel, dataLevel + 1);
	            }
	        };
	        TreeView.prototype.getChildMapper = function (mapper) {
	            return (typeof mapper.child === 'string' || ej2_base_7.isNullOrUndefined(mapper.child)) ? mapper : mapper.child;
	        };
	        TreeView.prototype.getChildNodes = function (obj, parentId, isRoot) {
	            if (isRoot === void 0) { isRoot = false; }
	            var childNodes;
	            if (ej2_base_7.isNullOrUndefined(obj)) {
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
	            if (ej2_base_7.isNullOrUndefined(data)) {
	                return childNodes;
	            }
	            for (var i = 0, objlen = data.length; i < objlen; i++) {
	                if (!ej2_base_7.isNullOrUndefined(data[i][0]) && !ej2_base_7.isNullOrUndefined(data[i][0][this.fields.parentID])) {
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
	                var cIcons = ej2_base_6.selectAll('.' + EXPANDABLE, element);
	                for (var i = 0, len = cIcons.length; i < len; i++) {
	                    var icon = cIcons[i];
	                    var curLi = ej2_base_6.closest(icon, '.' + LISTITEM);
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
	            if (ej2_base_7.isNullOrUndefined(li) || (!this.allowMultiSelection && this.isActive(li) && !ej2_base_7.isNullOrUndefined(e))) {
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
	                    if (ej2_base_6.isVisible(currNode)) {
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
	            if (!ej2_base_7.isNullOrUndefined(li)) {
	                var focusedNode = this.getFocusedNode();
	                if (focusedNode) {
	                    ej2_base_6.removeClass([focusedNode], FOCUS);
	                }
	                ej2_base_6.addClass([li], FOCUS);
	            }
	        };
	        TreeView.prototype.addSelect = function (liEle) {
	            liEle.setAttribute('aria-selected', 'true');
	            ej2_base_6.addClass([liEle], ACTIVE);
	            var id = liEle.getAttribute('data-uid');
	            if (!ej2_base_7.isNullOrUndefined(id) && this.selectedNodes.indexOf(id) === -1) {
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
	            ej2_base_6.removeClass([liEle], ACTIVE);
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
	            ej2_base_6.removeClass(selectedLI, ACTIVE);
	            this.setProperties({ selectedNodes: [] }, true);
	        };
	        TreeView.prototype.getSelectEvent = function (currLi, action, e) {
	            var nodeData = this.getNodeData(currLi);
	            return { action: action, cancel: false, isInteracted: ej2_base_7.isNullOrUndefined(e) ? false : true, node: currLi, nodeData: nodeData };
	        };
	        TreeView.prototype.setExpandOnType = function () {
	            this.expandOnType = (this.expandOn === 'auto') ? (ej2_base_1.Browser.isDevice ? 'click' : 'dblclick') : this.expandOn;
	        };
	        TreeView.prototype.expandHandler = function (e) {
	            var target = e.target;
	            if (!target || (this.allowEditing && e.type === 'dblclick') || target.classList.contains(ROOT) ||
	                target.classList.contains(PARENTITEM) || target.classList.contains(LISTITEM) ||
	                target.classList.contains(ICON) || this.showCheckBox && ej2_base_6.closest(target, '.' + CHECKBOXWRAP)) {
	                return;
	            }
	            else {
	                this.expandCollapseAction(ej2_base_6.closest(target, '.' + LISTITEM), e);
	            }
	        };
	        TreeView.prototype.expandCollapseAction = function (currLi, e) {
	            var icon = ej2_base_6.select('div.' + ICON, currLi);
	            if (!icon || icon.classList.contains(PROCESS)) {
	                return;
	            }
	            else {
	                var classList = icon.classList;
	                if (classList.contains(EXPANDABLE)) {
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
	                ej2_base_6.addClass([icon], PROCESS);
	            }
	            if (this.isLoaded) {
	                this.expandArgs = this.getExpandEvent(currLi, e);
	                this.trigger('nodeExpanding', this.expandArgs);
	                if (this.expandArgs.cancel) {
	                    return;
	                }
	            }
	            var ul = ej2_base_6.select('.' + PARENTITEM, currLi);
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
	                    ej2_base_6.addClass([focusedNode], HOVER);
	                }
	                else if (e.action === 'escape') {
	                    inpEle.value = this.oldText;
	                    inpEle.blur();
	                    this.element.focus();
	                    ej2_base_6.addClass([focusedNode], HOVER);
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
	                case 'moveDown':
	                case 'ctrlDown':
	                case 'shiftDown':
	                case 'csDown':
	                    this.navigateNode(true);
	                    break;
	                case 'moveUp':
	                case 'ctrlUp':
	                case 'shiftUp':
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
	                        var sNodes = ej2_base_6.selectAll('.' + LISTITEM + ':not(.' + ACTIVE + ')', this.element);
	                        this.selectGivenNodes(sNodes);
	                    }
	                    break;
	            }
	        };
	        TreeView.prototype.checkNode = function (e) {
	            var focusedNode = this.getFocusedNode();
	            var checkWrap = ej2_base_6.select('.' + CHECKBOXWRAP, focusedNode);
	            var isChecked = ej2_base_6.select(' .' + CHECKBOXFRAME, checkWrap).classList.contains(CHECK);
	            this.validateCheckNode(checkWrap, isChecked, focusedNode, e);
	        };
	        TreeView.prototype.validateCheckNode = function (checkWrap, isCheck, li, e) {
	            var eventArgs = this.nodeCheckingEvent(checkWrap, isCheck, e);
	            if (eventArgs.cancel) {
	                return;
	            }
	            this.changeState(checkWrap, isCheck ? 'uncheck' : 'check', e, true);
	            this.ensureChildCheckState(li);
	            this.ensureParentCheckState(ej2_base_6.closest(ej2_base_6.closest(li, '.' + PARENTITEM), '.' + LISTITEM));
	            this.nodeCheckedEvent(checkWrap, isCheck, e);
	        };
	        TreeView.prototype.openNode = function (toBeOpened, e) {
	            var focusedNode = this.getFocusedNode();
	            var icon = ej2_base_6.select('div.' + ICON, focusedNode);
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
	                    var parentLi = ej2_base_6.closest(ej2_base_6.closest(focusedNode, '.' + PARENTITEM), '.' + LISTITEM);
	                    if (!parentLi) {
	                        return;
	                    }
	                    else {
	                        this.setFocus(focusedNode, parentLi);
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
	        };
	        TreeView.prototype.getFocusedNode = function () {
	            var fNode = ej2_base_6.select('.' + LISTITEM + '.' + FOCUS, this.element);
	            return ej2_base_7.isNullOrUndefined(fNode) ? ej2_base_6.select('.' + LISTITEM, this.element) : fNode;
	        };
	        TreeView.prototype.focusNextNode = function (li, isTowards) {
	            var nextNode = isTowards ? this.getNextNode(li) : this.getPrevNode(li);
	            this.setFocus(li, nextNode);
	        };
	        TreeView.prototype.getNextNode = function (li) {
	            var index = this.liList.indexOf(li);
	            var nextNode;
	            do {
	                index++;
	                nextNode = this.liList[index];
	                if (ej2_base_7.isNullOrUndefined(nextNode)) {
	                    return li;
	                }
	            } while (!ej2_base_6.isVisible(nextNode));
	            return nextNode;
	        };
	        TreeView.prototype.getPrevNode = function (li) {
	            var index = this.liList.indexOf(li);
	            var prevNode;
	            do {
	                index--;
	                prevNode = this.liList[index];
	                if (ej2_base_7.isNullOrUndefined(prevNode)) {
	                    return li;
	                }
	            } while (!ej2_base_6.isVisible(prevNode));
	            return prevNode;
	        };
	        TreeView.prototype.getRootNode = function () {
	            var index = 0;
	            var rootNode;
	            do {
	                rootNode = this.liList[index];
	                index++;
	            } while (!ej2_base_6.isVisible(rootNode));
	            return rootNode;
	        };
	        TreeView.prototype.getEndNode = function () {
	            var index = this.liList.length - 1;
	            var endNode;
	            do {
	                endNode = this.liList[index];
	                index--;
	            } while (!ej2_base_6.isVisible(endNode));
	            return endNode;
	        };
	        TreeView.prototype.setFocus = function (preNode, nextNode) {
	            ej2_base_6.removeClass([preNode], [HOVER, FOCUS]);
	            ej2_base_6.addClass([nextNode], [HOVER, FOCUS]);
	        };
	        TreeView.prototype.focusIn = function () {
	            if (!this.mouseDownStatus) {
	                ej2_base_6.addClass([this.getFocusedNode()], HOVER);
	            }
	            this.mouseDownStatus = false;
	        };
	        TreeView.prototype.focusOut = function () {
	            ej2_base_6.removeClass([this.getFocusedNode()], HOVER);
	        };
	        TreeView.prototype.onMouseOver = function (e) {
	            var target = e.target;
	            var classList = target.classList;
	            var currentLi = ej2_base_6.closest(target, '.' + LISTITEM);
	            if (!currentLi || classList.contains(PARENTITEM) || classList.contains(LISTITEM)) {
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
	                ej2_base_6.addClass([li], HOVER);
	            }
	        };
	        ;
	        TreeView.prototype.onMouseLeave = function (e) {
	            this.removeHover();
	        };
	        TreeView.prototype.removeHover = function () {
	            var hoveredNode = ej2_base_6.selectAll('.' + HOVER, this.element);
	            if (hoveredNode && hoveredNode.length) {
	                ej2_base_6.removeClass(hoveredNode, HOVER);
	            }
	        };
	        ;
	        TreeView.prototype.getNodeData = function (currLi) {
	            if (!ej2_base_7.isNullOrUndefined(currLi) && currLi.classList.contains(LISTITEM)) {
	                var id = currLi.getAttribute('data-uid');
	                var text = ej2_base_6.select('.' + LISTTEXT, currLi).textContent;
	                var pNode = ej2_base_6.closest(currLi.parentNode, '.' + LISTITEM);
	                var pid = pNode ? pNode.getAttribute('data-uid') : null;
	                var selected = currLi.classList.contains(ACTIVE);
	                var expanded = (currLi.getAttribute('aria-expanded') === 'true') ? true : false;
	                var checked = null;
	                if (this.showCheckBox) {
	                    checked = ej2_base_6.select('.' + CHECKBOXWRAP, currLi).getAttribute('aria-checked');
	                }
	                return { id: id, text: text, parentID: pid, selected: selected, expanded: expanded, checked: checked };
	            }
	            return { id: '', text: '', parentID: '', selected: '', expanded: '', checked: '' };
	        };
	        TreeView.prototype.getExpandEvent = function (currLi, e) {
	            var nodeData = this.getNodeData(currLi);
	            return { cancel: false, isInteracted: ej2_base_7.isNullOrUndefined(e) ? false : true, node: currLi, nodeData: nodeData };
	        };
	        TreeView.prototype.reRenderNodes = function () {
	            this.element.innerHTML = '';
	            this.setProperties({ selectedNodes: [] }, true);
	            this.isLoaded = false;
	            this.setDataBinding();
	        };
	        TreeView.prototype.setCssClass = function (oldClass, newClass) {
	            if (!ej2_base_7.isNullOrUndefined(oldClass) && oldClass !== '') {
	                ej2_base_6.removeClass([this.element], oldClass.split(' '));
	            }
	            if (!ej2_base_7.isNullOrUndefined(newClass) && newClass !== '') {
	                ej2_base_6.addClass([this.element], newClass.split(' '));
	            }
	        };
	        TreeView.prototype.editingHandler = function (e) {
	            var target = e.target;
	            if (!target || target.classList.contains(ROOT) || target.classList.contains(PARENTITEM) ||
	                target.classList.contains(LISTITEM) || target.classList.contains(ICON) ||
	                target.classList.contains(INPUT)) {
	                return;
	            }
	            else {
	                e.stopImmediatePropagation();
	                var liEle = ej2_base_6.closest(target, '.' + LISTITEM);
	                this.createTextbox(liEle, e);
	            }
	        };
	        TreeView.prototype.createTextbox = function (liEle, e) {
	            var textEle = ej2_base_6.select('.' + LISTTEXT, liEle);
	            this.oldText = textEle.textContent;
	            var eventArgs = this.getEditEvent(liEle, null);
	            this.trigger('nodeEditing', eventArgs);
	            if (eventArgs.cancel) {
	                return;
	            }
	            var style = 'width:' + textEle.offsetWidth + 'px';
	            var inpEle = ej2_base_6.createElement('input', { className: INPUT, styles: style, attrs: { value: this.oldText } });
	            ej2_base_6.addClass([liEle], EDITING);
	            textEle.childNodes[0].nodeValue = '';
	            textEle.appendChild(inpEle);
	            inpEle.focus();
	            var inputEle = inpEle;
	            inputEle.setSelectionRange(0, inputEle.value.length);
	            this.wireInputEvents(inpEle);
	        };
	        TreeView.prototype.inputFocusOut = function (e) {
	            var target = e.target;
	            var newText = target.value;
	            var txtEle = ej2_base_6.closest(target, '.' + LISTTEXT);
	            var liEle = ej2_base_6.closest(target, '.' + LISTITEM);
	            txtEle.childNodes[0].nodeValue = newText;
	            ej2_base_6.detach(target);
	            ej2_base_6.removeClass([liEle], EDITING);
	            txtEle.focus();
	            this.trigger('nodeEdited', this.getEditEvent(liEle, newText));
	        };
	        TreeView.prototype.getElement = function (ele) {
	            if (ej2_base_7.isNullOrUndefined(ele)) {
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
	            this.dragObj = new ej2_base_5.Draggable(this.element, {
	                enableTailMode: true,
	                preventDefault: ej2_base_1.Browser.isIos ? true : false,
	                cursorAt: { top: -20 },
	                dragTarget: '.' + TEXTWRAP,
	                helper: function (e) {
	                    _this.dragTarget = e.sender.target;
	                    var dragRoot = ej2_base_6.closest(_this.dragTarget, '.' + ROOT);
	                    var dragWrap = ej2_base_6.closest(_this.dragTarget, '.' + TEXTWRAP);
	                    _this.dragLi = ej2_base_6.closest(_this.dragTarget, '.' + LISTITEM);
	                    if (_this.fullRowSelect && !dragWrap && _this.dragTarget.classList.contains(FULLROW)) {
	                        dragWrap = _this.dragTarget.nextElementSibling;
	                    }
	                    if (!_this.dragTarget || !e.element.isSameNode(dragRoot) || !dragWrap ||
	                        _this.dragTarget.classList.contains(ROOT) || _this.dragTarget.classList.contains(PARENTITEM) ||
	                        _this.dragTarget.classList.contains(LISTITEM)) {
	                        return false;
	                    }
	                    var cloneEle = (dragWrap.cloneNode(true));
	                    if (ej2_base_7.isNullOrUndefined(ej2_base_6.select('div.' + ICON, cloneEle))) {
	                        var icon = ej2_base_6.createElement('div', { className: ICON + ' ' + EXPANDABLE });
	                        cloneEle.insertBefore(icon, cloneEle.children[0]);
	                    }
	                    var cssClass = DRAGITEM + ' ' + ROOT + ' ' + (_this.enableRtl ? RTL : '');
	                    virtualEle = ej2_base_6.createElement('div', { className: cssClass });
	                    virtualEle.appendChild(cloneEle);
	                    var nLen = _this.selectedNodes.length;
	                    if (nLen > 1 && _this.allowMultiSelection && _this.dragLi.classList.contains(ACTIVE)) {
	                        var cNode = ej2_base_6.createElement('span', { className: DROPCOUNT, innerHTML: '' + nLen });
	                        virtualEle.appendChild(cNode);
	                    }
	                    document.body.appendChild(virtualEle);
	                    document.body.style.cursor = '';
	                    _this.dragData = _this.getNodeData(_this.dragLi);
	                    return virtualEle;
	                },
	                dragStart: function (e) {
	                    ej2_base_6.addClass([_this.element], DRAGGING);
	                    var eventArgs = _this.getDragEvent(e.event, _this, null, e.target);
	                    _this.trigger('nodeDragStart', eventArgs);
	                    if (eventArgs.cancel) {
	                        ej2_base_6.detach(virtualEle);
	                        ej2_base_6.removeClass([_this.element], DRAGGING);
	                    }
	                    _this.dragStartAction = true;
	                },
	                drag: function (e) {
	                    _this.dragAction(e, virtualEle);
	                },
	                dragStop: function (e) {
	                    ej2_base_6.removeClass([_this.element], DRAGGING);
	                    _this.removeVirtualEle();
	                    var dropTarget = e.target;
	                    var dropRoot = (ej2_base_6.closest(dropTarget, '.' + DROPPABLE));
	                    if (!dropTarget || !dropRoot || dropTarget.classList.contains(ROOT)) {
	                        ej2_base_6.detach(e.helper);
	                        document.body.style.cursor = '';
	                    }
	                    var eventArgs = _this.getDragEvent(e.event, _this, dropTarget, dropTarget);
	                    _this.trigger('nodeDragStop', eventArgs);
	                    if (eventArgs.cancel) {
	                        ej2_base_6.detach(e.helper);
	                        document.body.style.cursor = '';
	                    }
	                    _this.dragStartAction = false;
	                }
	            });
	            this.dropObj = new ej2_base_5.Droppable(this.element, {
	                out: function (e) {
	                    if (!ej2_base_7.isNullOrUndefined(e) && !e.target.classList.contains(SIBLING)) {
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
	            var dropRoot = ej2_base_6.closest(e.target, '.' + DROPPABLE);
	            var dropWrap = ej2_base_6.closest(e.target, '.' + TEXTWRAP);
	            var icon = ej2_base_6.select('div.' + ICON, virtualEle);
	            ej2_base_6.removeClass([icon], [DROPIN, DROPNEXT, DROPOUT, NODROP]);
	            this.removeVirtualEle();
	            document.body.style.cursor = '';
	            var classList = e.target.classList;
	            if (this.fullRowSelect && !dropWrap && !ej2_base_7.isNullOrUndefined(classList) && classList.contains(FULLROW)) {
	                dropWrap = e.target.nextElementSibling;
	            }
	            if (dropRoot) {
	                var dropLi = ej2_base_6.closest(e.target, '.' + LISTITEM);
	                if (!dropRoot.classList.contains(ROOT) || (dropWrap &&
	                    (!dropLi.isSameNode(this.dragLi) && !this.isDescendant(this.dragLi, dropLi)))) {
	                    if (e && (e.event.offsetY < 7)) {
	                        ej2_base_6.addClass([icon], DROPNEXT);
	                        var virEle = ej2_base_6.createElement('div', { className: SIBLING });
	                        var index = this.fullRowSelect ? (1) : (0);
	                        dropLi.insertBefore(virEle, dropLi.children[index]);
	                    }
	                    else if (e && (e.target.offsetHeight > 0 && e.event.offsetY > (e.target.offsetHeight - 10))) {
	                        ej2_base_6.addClass([icon], DROPNEXT);
	                        var virEle = ej2_base_6.createElement('div', { className: SIBLING });
	                        var index = this.fullRowSelect ? (2) : (1);
	                        dropLi.insertBefore(virEle, dropLi.children[index]);
	                    }
	                    else {
	                        ej2_base_6.addClass([icon], DROPIN);
	                    }
	                }
	                else if (e.target.nodeName === 'LI' && (!dropLi.isSameNode(this.dragLi) && !this.isDescendant(this.dragLi, dropLi))) {
	                    ej2_base_6.addClass([icon], DROPNEXT);
	                    this.renderVirtualEle(e);
	                }
	                else if (e.target.classList.contains(SIBLING)) {
	                    ej2_base_6.addClass([icon], DROPNEXT);
	                }
	                else {
	                    ej2_base_6.addClass([icon], DROPOUT);
	                }
	            }
	            else {
	                ej2_base_6.addClass([icon], NODROP);
	                document.body.style.cursor = 'not-allowed';
	            }
	            this.trigger('nodeDragging', this.getDragEvent(e.event, this, e.target, e.target));
	        };
	        TreeView.prototype.dropAction = function (e) {
	            var dropTarget = e.target;
	            var dragObj = e.dragData.draggable.ej2_instances[0];
	            var dragTarget = dragObj.dragTarget;
	            var dragLi = (ej2_base_6.closest(dragTarget, '.' + LISTITEM));
	            var dropLi = (ej2_base_6.closest(dropTarget, '.' + LISTITEM));
	            ej2_base_6.detach(e.droppedElement);
	            document.body.style.cursor = '';
	            if (!dropLi || dropLi.isSameNode(dragLi) || this.isDescendant(dragLi, dropLi)) {
	                return;
	            }
	            if (dragObj.allowMultiSelection && (dragLi.classList.contains(ACTIVE) || (e.event.offsetY < 7 ||
	                (e.target.offsetHeight > 0 && e.event.offsetY > (e.target.offsetHeight - 10))))) {
	                var sNodes = ej2_base_6.selectAll('.' + ACTIVE, dragObj.element);
	                for (var i = 0; i < sNodes.length; i++) {
	                    if (dropLi.isSameNode(sNodes[i]) || this.isDescendant(sNodes[i], dropLi)) {
	                        continue;
	                    }
	                    this.appendNode(dropTarget, sNodes[i], dropLi, e, dragObj);
	                }
	            }
	            else {
	                this.appendNode(dropTarget, dragLi, dropLi, e, dragObj);
	            }
	            this.trigger('nodeDropped', this.getDragEvent(e.event, dragObj, dropTarget, e.target));
	        };
	        TreeView.prototype.appendNode = function (dropTarget, dragLi, dropLi, e, dragObj) {
	            if (dropTarget.nodeName === 'LI') {
	                this.dropAsSiblingNode(dragLi, dropLi, e, dragObj);
	            }
	            else {
	                this.dropAsChildNode(dragLi, dropLi, dragObj, null, e);
	            }
	        };
	        TreeView.prototype.dropAsSiblingNode = function (dragLi, dropLi, e, dragObj) {
	            var dropUl = ej2_base_6.closest(dropLi, '.' + PARENTITEM);
	            var dragParentUl = ej2_base_6.closest(dragLi, '.' + PARENTITEM);
	            var dragParentLi = ej2_base_6.closest(dragParentUl, '.' + LISTITEM);
	            var pre;
	            if (e.target.offsetHeight > 0 && e.event.offsetY > e.target.offsetHeight - 2) {
	                pre = false;
	            }
	            else if (e.event.offsetY < 2) {
	                pre = true;
	            }
	            dropUl.insertBefore(dragLi, pre ? e.target : e.target.nextElementSibling);
	            this.updateElement(dragParentUl, dragParentLi);
	            if (dragObj.element.id === this.element.id) {
	                this.updateList();
	            }
	            else {
	                dragObj.updateInstance();
	                this.updateInstance();
	            }
	        };
	        TreeView.prototype.dropAsChildNode = function (dragLi, dropLi, dragObj, index, e) {
	            var dragParentUl = ej2_base_6.closest(dragLi, '.' + PARENTITEM);
	            var dragParentLi = ej2_base_6.closest(dragParentUl, '.' + LISTITEM);
	            var dropParentUl = ej2_base_6.closest(dropLi, '.' + PARENTITEM);
	            if (e && (e.event.offsetY < 7)) {
	                dropParentUl.insertBefore(dragLi, dropLi);
	            }
	            else if (e && (e.target.offsetHeight > 0 && e.event.offsetY > (e.target.offsetHeight - 10))) {
	                dropParentUl.insertBefore(dragLi, dropLi.nextElementSibling);
	            }
	            else {
	                var dropUl = this.expandParent(dropLi);
	                dropUl.insertBefore(dragLi, dropUl.childNodes[index]);
	            }
	            this.updateElement(dragParentUl, dragParentLi);
	            if (dragObj.element.id === this.element.id) {
	                this.updateList();
	            }
	            else {
	                dragObj.updateInstance();
	                this.updateInstance();
	            }
	        };
	        TreeView.prototype.expandParent = function (dropLi) {
	            var dropIcon = ej2_base_6.select('div.' + ICON, dropLi);
	            if (dropIcon && dropIcon.classList.contains(EXPANDABLE)) {
	                this.expandAction(dropLi, dropIcon, null);
	            }
	            var dropUl = ej2_base_6.select('.' + PARENTITEM, dropLi);
	            if (ej2_base_7.isNullOrUndefined(dropUl)) {
	                ej2_lists_1.ListBase.generateIcon(dropLi, COLLAPSIBLE, this.listBaseOption);
	                var icon = ej2_base_6.select('div.' + ICON, dropLi);
	                ej2_base_6.removeClass([icon], EXPANDABLE);
	                dropUl = ej2_lists_1.ListBase.generateUL([], null, this.listBaseOption);
	                dropLi.appendChild(dropUl);
	                dropLi.setAttribute('aria-expanded', 'true');
	                ej2_base_6.removeClass([dropLi], NODECOLLAPSED);
	            }
	            return dropUl;
	        };
	        TreeView.prototype.updateElement = function (dragParentUl, dragParentLi) {
	            if (dragParentLi && dragParentUl.childElementCount === 0) {
	                var dragIcon = ej2_base_6.select('div.' + ICON, dragParentLi);
	                ej2_base_6.detach(dragParentUl);
	                ej2_base_6.detach(dragIcon);
	                dragParentLi.removeAttribute('aria-expanded');
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
	            var virEle = ej2_base_6.createElement('div', { className: SIBLING });
	            var index = this.fullRowSelect ? (pre ? 1 : 2) : (pre ? 0 : 1);
	            e.target.insertBefore(virEle, e.target.children[index]);
	        };
	        TreeView.prototype.removeVirtualEle = function () {
	            var sibEle = ej2_base_6.select('.' + SIBLING);
	            if (sibEle) {
	                ej2_base_6.detach(sibEle);
	            }
	        };
	        TreeView.prototype.destroyDrag = function () {
	            if (this.dragObj && this.dropObj) {
	                this.dragObj.destroy();
	                this.dropObj.destroy();
	            }
	        };
	        TreeView.prototype.getDragEvent = function (event, obj, dropTarget, target) {
	            var dropLi = dropTarget ? ej2_base_6.closest(dropTarget, '.' + LISTITEM) : null;
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
	                    var rowDiv = ej2_base_6.select('.' + FULLROW, this.liList[i]);
	                    ej2_base_6.detach(rowDiv);
	                }
	            }
	        };
	        TreeView.prototype.createFullRow = function (item) {
	            var rowDiv = ej2_base_6.createElement('div', { className: FULLROW });
	            item.insertBefore(rowDiv, item.childNodes[0]);
	        };
	        TreeView.prototype.addMultiSelect = function (toAdd) {
	            if (toAdd) {
	                var liEles = ej2_base_6.selectAll('.' + LISTITEM + ':not([aria-selected="true"])', this.element);
	                for (var _i = 0, liEles_1 = liEles; _i < liEles_1.length; _i++) {
	                    var ele = liEles_1[_i];
	                    ele.setAttribute('aria-selected', 'false');
	                }
	            }
	            else {
	                var liEles = ej2_base_6.selectAll('.' + LISTITEM + '[aria-selected="false"]', this.element);
	                for (var _a = 0, liEles_2 = liEles; _a < liEles_2.length; _a++) {
	                    var ele = liEles_2[_a];
	                    ele.removeAttribute('aria-selected');
	                }
	            }
	        };
	        TreeView.prototype.collapseByLevel = function (element, level, excludeHiddenNodes) {
	            if (level > 0 && !ej2_base_7.isNullOrUndefined(element)) {
	                var cNodes = this.getVisibleNodes(excludeHiddenNodes, element.childNodes);
	                for (var i = 0, len = cNodes.length; i < len; i++) {
	                    var liEle = cNodes[i];
	                    var icon = ej2_base_6.select('.' + COLLAPSIBLE, ej2_base_6.select('.' + TEXTWRAP, liEle));
	                    if (!ej2_base_7.isNullOrUndefined(icon)) {
	                        this.collapseNode(liEle, icon, null);
	                    }
	                    this.collapseByLevel(ej2_base_6.select('.' + PARENTITEM, liEle), level - 1, excludeHiddenNodes);
	                }
	            }
	        };
	        TreeView.prototype.collapseAllNodes = function (excludeHiddenNodes) {
	            var cIcons = this.getVisibleNodes(excludeHiddenNodes, ej2_base_6.selectAll('.' + COLLAPSIBLE, this.element));
	            for (var i = 0, len = cIcons.length; i < len; i++) {
	                var icon = cIcons[i];
	                var liEle = ej2_base_6.closest(icon, '.' + LISTITEM);
	                this.collapseNode(liEle, icon, null);
	            }
	        };
	        TreeView.prototype.expandByLevel = function (element, level, excludeHiddenNodes) {
	            if (level > 0 && !ej2_base_7.isNullOrUndefined(element)) {
	                var eNodes = this.getVisibleNodes(excludeHiddenNodes, element.childNodes);
	                for (var i = 0, len = eNodes.length; i < len; i++) {
	                    var liEle = eNodes[i];
	                    var icon = ej2_base_6.select('.' + EXPANDABLE, ej2_base_6.select('.' + TEXTWRAP, liEle));
	                    if (!ej2_base_7.isNullOrUndefined(icon)) {
	                        this.expandAction(liEle, icon, null);
	                    }
	                    this.expandByLevel(ej2_base_6.select('.' + PARENTITEM, liEle), level - 1, excludeHiddenNodes);
	                }
	            }
	        };
	        TreeView.prototype.expandAllNodes = function (excludeHiddenNodes) {
	            var eIcons = this.getVisibleNodes(excludeHiddenNodes, ej2_base_6.selectAll('.' + EXPANDABLE, this.element));
	            for (var i = 0, len = eIcons.length; i < len; i++) {
	                var icon = eIcons[i];
	                var liEle = ej2_base_6.closest(icon, '.' + LISTITEM);
	                this.expandAction(liEle, icon, null, true);
	            }
	        };
	        TreeView.prototype.getVisibleNodes = function (excludeHiddenNodes, nodes) {
	            var vNodes = Array.prototype.slice.call(nodes);
	            if (excludeHiddenNodes) {
	                for (var i = 0; i < vNodes.length; i++) {
	                    if (!ej2_base_6.isVisible(vNodes[i])) {
	                        vNodes.splice(i, 1);
	                        i--;
	                    }
	                }
	            }
	            return vNodes;
	        };
	        TreeView.prototype.removeNode = function (node) {
	            var dragParentUl = ej2_base_6.closest(node, '.' + PARENTITEM);
	            var dragParentLi = ej2_base_6.closest(dragParentUl, '.' + LISTITEM);
	            ej2_base_6.detach(node);
	            this.updateElement(dragParentUl, dragParentLi);
	            this.updateInstance();
	        };
	        TreeView.prototype.updateInstance = function () {
	            this.updateList();
	            this.updateSelectedNodes();
	        };
	        TreeView.prototype.updateList = function () {
	            this.liList = Array.prototype.slice.call(ej2_base_6.selectAll('.' + LISTITEM, this.element));
	        };
	        TreeView.prototype.updateSelectedNodes = function () {
	            this.setProperties({ selectedNodes: [] }, true);
	            var sNodes = ej2_base_6.selectAll('.' + ACTIVE, this.element);
	            this.selectGivenNodes(sNodes);
	        };
	        TreeView.prototype.doGivenAction = function (nodes, selector, toExpand) {
	            for (var i = 0, len = nodes.length; i < len; i++) {
	                var liEle = this.getElement(nodes[i]);
	                if (ej2_base_7.isNullOrUndefined(liEle)) {
	                    continue;
	                }
	                var icon = ej2_base_6.select('.' + selector, ej2_base_6.select('.' + TEXTWRAP, liEle));
	                if (!ej2_base_7.isNullOrUndefined(icon)) {
	                    toExpand ? this.expandAction(liEle, icon, null) : this.collapseNode(liEle, icon, null);
	                }
	            }
	        };
	        TreeView.prototype.addGivenNodes = function (nodes, dropLi, index, isRemote) {
	            var level = dropLi ? parseFloat(dropLi.getAttribute('aria-level')) + 1 : 1;
	            if (isRemote) {
	                this.updateMapper(level);
	            }
	            var li = ej2_lists_1.ListBase.createListItemFromJson(nodes, this.listBaseOption, level);
	            var dropUl = dropLi ? this.expandParent(dropLi) : ej2_base_6.select('.' + PARENTITEM, this.element);
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
	                if (ej2_base_7.isNullOrUndefined(liEle)) {
	                    continue;
	                }
	                liEle.setAttribute('aria-disabled', 'true');
	                ej2_base_6.addClass([liEle], DISABLE);
	            }
	        };
	        TreeView.prototype.doEnableAction = function (nodes) {
	            for (var i = 0, len = nodes.length; i < len; i++) {
	                var liEle = this.getElement(nodes[i]);
	                if (ej2_base_7.isNullOrUndefined(liEle)) {
	                    continue;
	                }
	                liEle.removeAttribute('aria-disabled');
	                ej2_base_6.removeClass([liEle], DISABLE);
	            }
	        };
	        TreeView.prototype.wireInputEvents = function (inpEle) {
	            ej2_base_3.EventHandler.add(inpEle, 'blur', this.inputFocusOut, this);
	        };
	        TreeView.prototype.wireEditingEvents = function (toBind) {
	            if (toBind) {
	                var proxy_1 = this;
	                if (ej2_base_1.Browser.isIos) {
	                    this.touchEditObj = new ej2_base_7.Touch(this.element, {
	                        doubleTap: function (e) {
	                            e.originalEvent.preventDefault();
	                            proxy_1.editingHandler(e.originalEvent);
	                        }
	                    });
	                }
	                else {
	                    ej2_base_3.EventHandler.add(this.element, 'dblclick', this.editingHandler, this);
	                }
	            }
	            else {
	                if (ej2_base_1.Browser.isIos && this.touchEditObj) {
	                    this.touchEditObj.destroy();
	                }
	                else {
	                    ej2_base_3.EventHandler.remove(this.element, 'dblclick', this.editingHandler);
	                }
	            }
	        };
	        TreeView.prototype.wireClickEvent = function (toBind) {
	            if (toBind) {
	                var proxy_2 = this;
	                if (ej2_base_1.Browser.isIos) {
	                    this.touchClickObj = new ej2_base_7.Touch(this.element, {
	                        tap: function (e) {
	                            proxy_2.clickHandler(e.originalEvent);
	                        }
	                    });
	                }
	                else {
	                    ej2_base_3.EventHandler.add(this.element, 'click', this.clickHandler, this);
	                }
	            }
	            else {
	                if (ej2_base_1.Browser.isIos && this.touchClickObj) {
	                    this.touchClickObj.destroy();
	                }
	                else {
	                    ej2_base_3.EventHandler.remove(this.element, 'click', this.clickHandler);
	                }
	            }
	        };
	        TreeView.prototype.wireExpandOnEvent = function (toBind) {
	            if (toBind) {
	                var proxy_3 = this;
	                if (ej2_base_1.Browser.isIos) {
	                    if (this.expandOnType === 'click') {
	                        this.touchExpandObj = new ej2_base_7.Touch(this.element, {
	                            tap: function (e) {
	                                proxy_3.expandHandler(e.originalEvent);
	                            }
	                        });
	                    }
	                    else {
	                        this.touchExpandObj = new ej2_base_7.Touch(this.element, {
	                            doubleTap: function (e) {
	                                proxy_3.expandHandler(e.originalEvent);
	                            }
	                        });
	                    }
	                }
	                else {
	                    ej2_base_3.EventHandler.add(this.element, this.expandOnType, this.expandHandler, this);
	                }
	            }
	            else {
	                if (ej2_base_1.Browser.isIos && this.touchExpandObj) {
	                    this.touchExpandObj.destroy();
	                }
	                else {
	                    ej2_base_3.EventHandler.remove(this.element, this.expandOnType, this.expandHandler);
	                }
	            }
	        };
	        TreeView.prototype.mouseDownHandler = function (e) {
	            this.mouseDownStatus = true;
	            if (e.ctrlKey && this.allowMultiSelection) {
	                ej2_base_3.EventHandler.add(this.element, 'contextmenu ', this.preventContextMenu, this);
	            }
	        };
	        ;
	        TreeView.prototype.preventContextMenu = function (e) {
	            e.preventDefault();
	        };
	        TreeView.prototype.wireEvents = function () {
	            ej2_base_3.EventHandler.add(this.element, 'mousedown', this.mouseDownHandler, this);
	            this.wireClickEvent(true);
	            this.wireExpandOnEvent(true);
	            ej2_base_3.EventHandler.add(this.element, 'focus', this.focusIn, this);
	            ej2_base_3.EventHandler.add(this.element, 'blur', this.focusOut, this);
	            ej2_base_3.EventHandler.add(this.element, 'mouseover', this.onMouseOver, this);
	            ej2_base_3.EventHandler.add(this.element, 'mouseout', this.onMouseLeave, this);
	            this.keyboardModule = new ej2_base_3.KeyboardEvents(this.element, {
	                keyAction: this.keyActionHandler.bind(this),
	                keyConfigs: this.keyConfigs,
	                eventName: 'keydown',
	            });
	        };
	        TreeView.prototype.unWireEvents = function () {
	            ej2_base_3.EventHandler.remove(this.element, 'mousedown', this.mouseDownHandler);
	            this.wireClickEvent(false);
	            this.wireExpandOnEvent(false);
	            ej2_base_3.EventHandler.remove(this.element, 'focus', this.focusIn);
	            ej2_base_3.EventHandler.remove(this.element, 'blur', this.focusOut);
	            ej2_base_3.EventHandler.remove(this.element, 'mouseover', this.onMouseOver);
	            ej2_base_3.EventHandler.remove(this.element, 'mouseout', this.onMouseLeave);
	            this.keyboardModule.destroy();
	        };
	        TreeView.prototype.parents = function (element, selector) {
	            var matched = [];
	            var el = element.parentNode;
	            while (!ej2_base_7.isNullOrUndefined(el)) {
	                if (ej2_base_6.matches(el, selector)) {
	                    matched.push(el);
	                }
	                el = el.parentNode;
	            }
	            return matched;
	        };
	        TreeView.prototype.isDescendant = function (parent, child) {
	            var node = child.parentNode;
	            while (!ej2_base_7.isNullOrUndefined(node)) {
	                if (node === parent) {
	                    return true;
	                }
	                node = node.parentNode;
	            }
	            return false;
	        };
	        TreeView.prototype.setCheckedNodes = function (nodes) {
	            nodes = JSON.parse(JSON.stringify(nodes));
	            this.uncheckAll();
	            if (nodes.length > 0) {
	                this.checkAll(nodes);
	            }
	        };
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
	        TreeView.prototype.destroy = function () {
	            this.element.removeAttribute('role');
	            this.unWireEvents();
	            this.wireEditingEvents(false);
	            this.rippleFn();
	            this.rippleIconFn();
	            this.setCssClass(this.cssClass, null);
	            this.setDragAndDrop(false);
	            this.setFullRow(false);
	            this.setTouchPopup(false);
	            this.setMultiSelect(false);
	            this.element.innerHTML = '';
	            _super.prototype.destroy.call(this);
	        };
	        TreeView.prototype.addNodes = function (nodes, target, index) {
	            if (ej2_base_7.isNullOrUndefined(nodes)) {
	                return;
	            }
	            var dropLi = this.getElement(target);
	            nodes = this.getSortedData(nodes);
	            if (this.fields.dataSource instanceof ej2_data_1.DataManager) {
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
	        TreeView.prototype.checkAll = function (nodes) {
	            if (this.showCheckBox) {
	                this.doCheckBoxAction(nodes, true);
	            }
	        };
	        TreeView.prototype.collapseAll = function (nodes, level, excludeHiddenNodes) {
	            if (!ej2_base_7.isNullOrUndefined(nodes)) {
	                this.doGivenAction(nodes, COLLAPSIBLE, false);
	            }
	            else {
	                if (level > 0) {
	                    this.collapseByLevel(ej2_base_6.select('.' + PARENTITEM, this.element), level, excludeHiddenNodes);
	                }
	                else {
	                    this.collapseAllNodes(excludeHiddenNodes);
	                }
	            }
	        };
	        TreeView.prototype.disableNodes = function (nodes) {
	            if (ej2_base_7.isNullOrUndefined(nodes)) {
	                this.doDisableAction(this.selectedNodes);
	            }
	            else {
	                this.doDisableAction(nodes);
	            }
	        };
	        TreeView.prototype.enableAll = function (nodes) {
	            if (ej2_base_7.isNullOrUndefined(nodes)) {
	                var liEle = ej2_base_6.selectAll('.' + DISABLE, this.element);
	                for (var _i = 0, liEle_1 = liEle; _i < liEle_1.length; _i++) {
	                    var ele = liEle_1[_i];
	                    ele.removeAttribute('aria-disabled');
	                }
	                ej2_base_6.removeClass(liEle, DISABLE);
	            }
	            else {
	                this.doEnableAction(nodes);
	            }
	        };
	        TreeView.prototype.ensureVisible = function (node) {
	            var liEle = this.getElement(node);
	            if (ej2_base_7.isNullOrUndefined(liEle)) {
	                return;
	            }
	            var parents = this.parents(liEle, '.' + LISTITEM);
	            this.expandAll(parents);
	            setTimeout(function () { liEle.scrollIntoView(true); }, 450);
	        };
	        TreeView.prototype.expandAll = function (nodes, level, excludeHiddenNodes) {
	            if (!ej2_base_7.isNullOrUndefined(nodes)) {
	                this.doGivenAction(nodes, EXPANDABLE, true);
	            }
	            else {
	                if (level > 0) {
	                    this.expandByLevel(ej2_base_6.select('.' + PARENTITEM, this.element), level, excludeHiddenNodes);
	                }
	                else {
	                    this.expandAllNodes(excludeHiddenNodes);
	                }
	            }
	        };
	        TreeView.prototype.getNode = function (node) {
	            return this.getElement(node);
	        };
	        TreeView.prototype.getNodeDetails = function (node) {
	            var ele = this.getElement(node);
	            return this.getNodeData(ele);
	        };
	        TreeView.prototype.moveNodes = function (sourceNodes, target, index) {
	            var dropLi = this.getElement(target);
	            if (ej2_base_7.isNullOrUndefined(dropLi)) {
	                return;
	            }
	            for (var i = 0; i < sourceNodes.length; i++) {
	                var dragLi = this.getElement(sourceNodes[i]);
	                if (ej2_base_7.isNullOrUndefined(dragLi) || dropLi.isSameNode(dragLi) || this.isDescendant(dragLi, dropLi)) {
	                    continue;
	                }
	                this.dropAsChildNode(dragLi, dropLi, this, index);
	            }
	        };
	        TreeView.prototype.removeNodes = function (nodes) {
	            for (var i = 0, len = nodes.length; i < len; i++) {
	                var liEle = this.getElement(nodes[i]);
	                if (ej2_base_7.isNullOrUndefined(liEle)) {
	                    continue;
	                }
	                this.removeNode(liEle);
	            }
	        };
	        TreeView.prototype.replaceText = function (target, newText) {
	            if (ej2_base_7.isNullOrUndefined(target) || ej2_base_7.isNullOrUndefined(newText) || !this.allowEditing) {
	                return;
	            }
	            var liEle = this.getElement(target);
	            if (ej2_base_7.isNullOrUndefined(liEle)) {
	                return;
	            }
	            var txtEle = ej2_base_6.select('.' + LISTTEXT, liEle);
	            txtEle.childNodes[0].nodeValue = newText;
	        };
	        TreeView.prototype.uncheckAll = function (nodes) {
	            if (this.showCheckBox) {
	                this.doCheckBoxAction(nodes, false);
	            }
	        };
	        return TreeView;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_2.Property(false)
	    ], TreeView.prototype, "allowDragAndDrop", void 0);
	    __decorate([
	        ej2_base_2.Property(false)
	    ], TreeView.prototype, "allowEditing", void 0);
	    __decorate([
	        ej2_base_2.Property(false)
	    ], TreeView.prototype, "allowMultiSelection", void 0);
	    __decorate([
	        ej2_base_2.Complex({}, NodeAnimationSettings)
	    ], TreeView.prototype, "animation", void 0);
	    __decorate([
	        ej2_base_2.Property()
	    ], TreeView.prototype, "checkedNodes", void 0);
	    __decorate([
	        ej2_base_2.Property('')
	    ], TreeView.prototype, "cssClass", void 0);
	    __decorate([
	        ej2_base_2.Property(false)
	    ], TreeView.prototype, "enableRtl", void 0);
	    __decorate([
	        ej2_base_2.Property('auto')
	    ], TreeView.prototype, "expandOn", void 0);
	    __decorate([
	        ej2_base_2.Complex({}, FieldsSettings)
	    ], TreeView.prototype, "fields", void 0);
	    __decorate([
	        ej2_base_2.Property(true)
	    ], TreeView.prototype, "fullRowSelect", void 0);
	    __decorate([
	        ej2_base_2.Property()
	    ], TreeView.prototype, "nodeTemplate", void 0);
	    __decorate([
	        ej2_base_2.Property()
	    ], TreeView.prototype, "selectedNodes", void 0);
	    __decorate([
	        ej2_base_2.Property('None')
	    ], TreeView.prototype, "sortOrder", void 0);
	    __decorate([
	        ej2_base_2.Property(false)
	    ], TreeView.prototype, "showCheckBox", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "created", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "dataBound", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "drawNode", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "destroyed", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "keyPress", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeChecked", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeChecking", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeClicked", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeCollapsed", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeCollapsing", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeDragging", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeDragStart", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeDragStop", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeDropped", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeEdited", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeEditing", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeExpanded", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeExpanding", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeSelected", void 0);
	    __decorate([
	        ej2_base_3.Event()
	    ], TreeView.prototype, "nodeSelecting", void 0);
	    TreeView = __decorate([
	        ej2_base_2.NotifyPropertyChanges
	    ], TreeView);
	    exports.TreeView = TreeView;
	    exports.treeViewHelper = ej2_base_1.CreateBuilder(TreeView);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5OTNkNWNiOWVjOTRiZjJkMzEyYiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2gtc2Nyb2xsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xiYXIvdG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItcG9wdXBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN5bmNmdXNpb24vZWoyLWJ1dHRvbnNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3JkaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0LW1lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN5bmNmdXNpb24vZWoyLWxpc3RzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFiL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlZXZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyZWV2aWV3L3RyZWV2aWV3LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1kYXRhXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O2lFQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztpRUNaRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQSxFQUFDOzs7Ozs7O0FDUEQ7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFtRSx1Q0FBdUM7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQTZELDRCQUE0QjtBQUN6Riw4REFBNkQsNEJBQTRCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBLG9EQUFtRCx3QkFBd0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTJFLGdCQUFnQjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCw4QkFBOEI7QUFDckY7QUFDQSw0REFBMkQsaUVBQWlFO0FBQzVIO0FBQ0EsMkRBQTBELGlEQUFpRDtBQUMzRztBQUNBLGdFQUErRCxnRUFBZ0U7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLG1FQUFtRTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ3ZTRCxnRDs7Ozs7O2lFQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBLEVBQUM7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0EsV0FBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLDBCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQyxpQ0FBaUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0MsaUNBQWlDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMsbUNBQW1DO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxtQ0FBa0MsaUNBQWlDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCLGlDQUFpQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSx3Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkIsbUNBQW1DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNEQsbUJBQW1CO0FBQy9FO0FBQ0EseURBQXdELGlCQUFpQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTRELDRDQUE0QztBQUN4RztBQUNBLDZEQUE0RCxxQkFBcUI7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELHdDQUF3QztBQUMxRixjQUFhO0FBQ2I7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQSxnRUFBK0Qsa0JBQWtCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCx1REFBdUQ7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNEQsZUFBZTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0Qsc0JBQXNCLElBQUk7QUFDMUUsa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXdELGtDQUFrQztBQUMxRix5REFBd0QsdURBQXVEO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTBELGdDQUFnQztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBOEQsbUNBQW1DO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0NBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBc0Usa0JBQWtCO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZ0UseURBQXlEO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCwrQkFBK0I7QUFDdEY7QUFDQTtBQUNBO0FBQ0EsNERBQTJELHdDQUF3QztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBbUUsZ0JBQWdCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBMkQsMEJBQTBCO0FBQ3JGLDREQUEyRCw0QkFBNEI7QUFDdkYsNERBQTJELDJCQUEyQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFrRSx1QkFBdUI7QUFDekY7QUFDQSxnQ0FBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBOEQsZ0JBQWdCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsOENBQTZDLHFCQUFxQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBa0UsZ0JBQWdCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTBELHlCQUF5QjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTBELCtCQUErQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0MsMENBQTBDO0FBQ2hGO0FBQ0Esb0RBQW1ELDZDQUE2QztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBd0Qsc0JBQXNCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTRELGdEQUFnRDtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBb0Usa0RBQWtEO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQzcyQ0QsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7aUVDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsRUFBQzs7Ozs7OztBQ1BEO0FBQ0E7QUFDQSxXQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYsMEJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLDZCQUE0QixxREFBcUQ7QUFDakY7QUFDQTtBQUNBLDZCQUE0Qix1REFBdUQ7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF3RCxtQ0FBbUM7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsNkJBQTZCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFtRCxnRkFBZ0Y7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXdELHNEQUFzRDtBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsNERBQTJELDJCQUEyQjtBQUN0RixnRUFBK0QsNkJBQTZCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLDREQUEyRCwwQkFBMEI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTBELG9FQUFvRTtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBd0Qsc0JBQXNCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLCtEQUE4RCwyQkFBMkI7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRSwyQkFBMkI7QUFDNUYsOERBQTZELHVDQUF1QztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTJELHdGQUF3RjtBQUNuSiw2Q0FBNEMsd0JBQXdCO0FBQ3BFLHdEQUF1RCx1QkFBdUI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF3RCxrQ0FBa0M7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQW9FLG1EQUFtRDtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXdELGlEQUFpRDtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQW9FLHFEQUFxRDtBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELDRDQUE0QztBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCxnQkFBZ0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQW9FLGtEQUFrRDtBQUN0SDtBQUNBO0FBQ0EscUVBQW9FLGdEQUFnRDtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O2lFQ3ozQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsRUFBQzs7Ozs7OztBQ1BEO0FBQ0E7QUFDQSxXQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYsMEJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMEUscUJBQXFCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBMkQscUJBQXFCO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQsa0NBQWtDO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQThFLHdDQUF3QztBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFpRixnQkFBZ0I7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsK0NBQThDLHVCQUF1QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBK0MscUJBQXFCO0FBQ3BFO0FBQ0E7QUFDQSw2Q0FBNEMsb0JBQW9CO0FBQ2hFO0FBQ0E7QUFDQSxnREFBK0MsZ0JBQWdCO0FBQy9EO0FBQ0E7QUFDQSw2Q0FBNEMsaUJBQWlCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFnRCwrQ0FBK0M7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDLGFBQWE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsMERBQXlELGVBQWU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLGVBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUE4RCxTQUFTO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxTQUFTO0FBQzFDLG1DQUFrQyxVQUFVO0FBQzVDLGdDQUErQixVQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0MsaUJBQWlCO0FBQ3ZELDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBNkQsb0JBQW9CLEdBQUcsdUJBQXVCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQTZELG9CQUFvQixHQUFHLHVCQUF1QjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQTZELG9CQUFvQixHQUFHLHVCQUF1QjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsa0JBQWtCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBcUUsaUNBQWlDO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCxzQ0FBc0M7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQStDLFNBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQStDLFNBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsMkJBQTJCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFnRCxjQUFjO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRCxTQUFTO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMsZ0JBQWdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFpRixnQkFBZ0I7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0MsbUJBQW1CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsb0JBQW9CO0FBQ3ZELHFDQUFvQyxhQUFhO0FBQ2pELHlDQUF3QyxvQkFBb0I7QUFDNUQ7QUFDQSxnREFBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLGVBQWU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMsZ0JBQWdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWdFLFNBQVM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCLHFEQUFxRDtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDdDZCRCxpRDs7Ozs7O2lFQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBLEVBQUM7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0EsV0FBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLDBCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsNkJBQTRCLHVEQUF1RDtBQUNuRjtBQUNBO0FBQ0EsNkJBQTRCLHdEQUF3RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCO0FBQzFCLDJCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF3RCwyRkFBMkY7QUFDbko7QUFDQSxrREFBaUQseUVBQXlFO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEwRSx5QkFBeUI7QUFDbkcsNEZBQTJGLHdCQUF3QjtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUEyRCwwQkFBMEI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBb0UsaUVBQWlFO0FBQ3JJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNEQsc0RBQXNELG9CQUFvQixFQUFFO0FBQ3hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQTZFLHVCQUF1QjtBQUNwRztBQUNBO0FBQ0E7QUFDQSxxQ0FBb0M7QUFDcEM7QUFDQSxxRUFBb0UsK0NBQStDLHlCQUF5QixFQUFFO0FBQzlJLHFFQUFvRSwwREFBMEQ7QUFDOUgscUVBQW9FLCtDQUErQyxpQkFBaUIsRUFBRTtBQUN0STtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0Esa0RBQWlELG1DQUFtQztBQUNwRjtBQUNBLGlDQUFnQyxxR0FBcUc7QUFDckk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0Isb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQSxrRUFBaUUsNERBQTREO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW1FO0FBQ25FLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBNkQsa0VBQWtFO0FBQy9ILDZEQUE0RCxnREFBZ0QsaUJBQWlCLEVBQUU7QUFDL0g7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTBELHlCQUF5QjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMEQsZ0NBQWdDO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQStELHFFQUFxRTtBQUNwSTtBQUNBO0FBQ0E7QUFDQSw2REFBNEQsbUJBQW1CO0FBQy9FLDREQUEyRCxtQkFBbUI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsZ0JBQWdCO0FBQ25ELHFFQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQztBQUNwQywwQkFBeUI7QUFDekI7QUFDQTtBQUNBLG9DQUFtQyx1QkFBdUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBMkQsa0NBQWtDO0FBQzdGO0FBQ0E7QUFDQSw0REFBMkQsbUJBQW1CO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQStDLDhGQUE4RjtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0Msc0JBQXNCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0Qyw2Q0FBNkM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWlELDhCQUE4QjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDO0FBQ2hDLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXNFLHNDQUFzQztBQUM1RztBQUNBLDJFQUEwRSxxRUFBcUU7QUFDL0k7QUFDQTtBQUNBLDhCQUE2Qiw0REFBNEQ7QUFDekY7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUFzRSxvQkFBb0I7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxvQkFBb0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLG9DQUFtQyxvQkFBb0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxxRUFBb0UsOENBQThDO0FBQ2xIO0FBQ0E7QUFDQSxxRUFBb0UsZ0RBQWdEO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O2lFQ3BoQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsRUFBQzs7Ozs7OztBQ1BEO0FBQ0E7QUFDQSxXQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYsMEJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsNkJBQTRCLHFEQUFxRDtBQUNqRjtBQUNBO0FBQ0EsNkJBQTRCLHVEQUF1RDtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLG9CQUFvQjtBQUN4RDtBQUNBO0FBQ0EscUNBQW9DLG1CQUFtQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE2RCx5Q0FBeUMsR0FBRztBQUN6RyxnRUFBK0QsNkJBQTZCLGlCQUFpQixFQUFFO0FBQy9HLDhEQUE2RCxrQkFBa0I7QUFDL0U7QUFDQSw4RUFBNkUsc0JBQXNCO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLGNBQWM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF3RCxnQkFBZ0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsZUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsbUJBQW1CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUErRCxvQkFBb0IsRUFBRTtBQUNyRjtBQUNBLGtCQUFpQjtBQUNqQixxQ0FBb0Msd0JBQXdCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsMkJBQTJCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW1ELFNBQVM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsMkJBQTJCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxvQkFBb0I7QUFDeEQsZ0NBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxnQkFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXdELFlBQVk7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQsWUFBWTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQW9ELFNBQVM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsMEJBQTBCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QjtBQUN4QjtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNEQsMENBQTBDLHNCQUFzQixFQUFFO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBb0UscUNBQXFDO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLG1FQUFrRSxzQkFBc0I7QUFDeEY7QUFDQTtBQUNBO0FBQ0EsdUVBQXNFLDZDQUE2QztBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUFzRSxxQkFBcUI7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUFzRSxxQkFBcUI7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTBELHFCQUFxQjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTBELHFCQUFxQjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW1ELHNCQUFzQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQsc0JBQXNCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0QsU0FBUztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWdELFNBQVM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFvRCxTQUFTO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0QsU0FBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUErQyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0Qyx1Q0FBdUM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLGtCQUFrQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLDRCQUE0QixFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsd0JBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDbDBFRCxpRCIsImZpbGUiOiJlajItbmF2aWdhdGlvbnMudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiksIHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItcG9wdXBzXCIpLCByZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLWJ1dHRvbnNcIiksIHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItbGlzdHNcIiksIHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItZGF0YVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1wb3B1cHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYnV0dG9uc1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1saXN0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1kYXRhXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiKSwgcmVxdWlyZShcIkBzeW5jZnVzaW9uL2VqMi1wb3B1cHNcIiksIHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItYnV0dG9uc1wiKSwgcmVxdWlyZShcIkBzeW5jZnVzaW9uL2VqMi1saXN0c1wiKSwgcmVxdWlyZShcIkBzeW5jZnVzaW9uL2VqMi1kYXRhXCIpKSA6IGZhY3Rvcnkocm9vdFtcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJdLCByb290W1wiQHN5bmNmdXNpb24vZWoyLXBvcHVwc1wiXSwgcm9vdFtcIkBzeW5jZnVzaW9uL2VqMi1idXR0b25zXCJdLCByb290W1wiQHN5bmNmdXNpb24vZWoyLWxpc3RzXCJdLCByb290W1wiQHN5bmNmdXNpb24vZWoyLWRhdGFcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTkzZDVjYjllYzk0YmYyZDMxMmIiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2NvbW1vbi9pbmRleFwiLCBcIi4vdG9vbGJhci9pbmRleFwiLCBcIi4vYWNjb3JkaW9uL2luZGV4XCIsIFwiLi9jb250ZXh0LW1lbnUvaW5kZXhcIiwgXCIuL3RhYi9pbmRleFwiLCBcIi4vdHJlZXZpZXcvaW5kZXhcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBpbmRleF8xLCBpbmRleF8yLCBpbmRleF8zLCBpbmRleF80LCBpbmRleF81LCBpbmRleF82KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChpbmRleF8xKTtcbiAgICBfX2V4cG9ydChpbmRleF8yKTtcbiAgICBfX2V4cG9ydChpbmRleF8zKTtcbiAgICBfX2V4cG9ydChpbmRleF80KTtcbiAgICBfX2V4cG9ydChpbmRleF81KTtcbiAgICBfX2V4cG9ydChpbmRleF82KTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9oLXNjcm9sbFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGhfc2Nyb2xsXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KGhfc2Nyb2xsXzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgZWoyX2Jhc2VfMSwgZWoyX2Jhc2VfMikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgQ0xTX1JPT1QgPSAnZS1oc2Nyb2xsJztcbiAgICB2YXIgQ0xTX1JUTCA9ICdlLXJ0bCc7XG4gICAgdmFyIENMU19ESVNBQkxFID0gJ2Utb3ZlcmxheSc7XG4gICAgdmFyIENMU19IU0NST0xMQkFSID0gJ2UtaHNjcm9sbC1iYXInO1xuICAgIHZhciBDTFNfSFNDUk9MTENPTiA9ICdlLWhzY3JvbGwtY29udGVudCc7XG4gICAgdmFyIENMU19OQVZBUlJPVyA9ICdlLW5hdi1hcnJvdyc7XG4gICAgdmFyIENMU19OQVZSSUdIVEFSUk9XID0gJ2UtbmF2LXJpZ2h0LWFycm93JztcbiAgICB2YXIgQ0xTX05BVkxFRlRBUlJPVyA9ICdlLW5hdi1sZWZ0LWFycm93JztcbiAgICB2YXIgQ0xTX0hTQ1JPTExOQVYgPSAnZS1zY3JvbGwtbmF2JztcbiAgICB2YXIgQ0xTX0hTQ1JPTExOQVZSSUdIVCA9ICdlLXNjcm9sbC1yaWdodC1uYXYnO1xuICAgIHZhciBDTFNfSFNDUk9MTE5BVkxFRlQgPSAnZS1zY3JvbGwtbGVmdC1uYXYnO1xuICAgIHZhciBDTFNfREVWSUNFID0gJ2Utc2Nyb2xsLWRldmljZSc7XG4gICAgdmFyIEhTY3JvbGwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoSFNjcm9sbCwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gSFNjcm9sbChvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgZWxlbWVudCkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS5wcmVSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmJyb3dzZXIgPSBlajJfYmFzZV8yLkJyb3dzZXIuaW5mby5uYW1lO1xuICAgICAgICAgICAgdGhpcy5icm93c2VyQ2hlY2sgPSB0aGlzLmJyb3dzZXIgPT09ICdtb3ppbGxhJztcbiAgICAgICAgICAgIHRoaXMuaXNEZXZpY2UgPSBlajJfYmFzZV8yLkJyb3dzZXIuaXNEZXZpY2U7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuaWVDaGVjayA9IHRoaXMuYnJvd3NlciA9PT0gJ2VkZ2UnIHx8IHRoaXMuYnJvd3NlciA9PT0gJ21zaWUnO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlkID0gZWoyX2Jhc2VfMS5nZXRVbmlxdWVJRCgnaHNjcm9sbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5pcXVlSWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZVJ0bCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTFNfUlRMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy50b3VjaE1vZHVsZSA9IG5ldyBlajJfYmFzZV8xLlRvdWNoKHRoaXMuZWxlbWVudCwgeyBzY3JvbGw6IHRoaXMudG91Y2hIYW5kbGVyLmJpbmQodGhpcykgfSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNEZXZpY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU5hdkljb24odGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5zY3JvbGxFbGUsICdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xTX0RFVklDRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsRWxlID0gZWoyX2Jhc2VfMi5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX0hTQ1JPTExDT04gfSk7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsRGl2ID0gZWoyX2Jhc2VfMi5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX0hTQ1JPTExCQVIgfSk7XG4gICAgICAgICAgICBzY3JvbGxEaXYuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBpbm5lckVsZSA9IFtdLnNsaWNlLmNhbGwoZWxlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgaW5uZXJFbGVfMSA9IGlubmVyRWxlOyBfaSA8IGlubmVyRWxlXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZV8xID0gaW5uZXJFbGVfMVtfaV07XG4gICAgICAgICAgICAgICAgc2Nyb2xsRWxlLmFwcGVuZENoaWxkKGVsZV8xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNjcm9sbERpdi5hcHBlbmRDaGlsZChzY3JvbGxFbGUpO1xuICAgICAgICAgICAgZWxlLmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gICAgICAgICAgICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3dYID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsZSA9IHNjcm9sbERpdjtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSXRlbXMgPSBzY3JvbGxFbGU7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmdldFBlcnNpc3REYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGtleUVudGl0eSA9IFsnc2Nyb2xsU3RlcCddO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkT25QZXJzaXN0KGtleUVudGl0eSk7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmdldE1vZHVsZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2hTY3JvbGwnO1xuICAgICAgICB9O1xuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShDTFNfUk9PVCk7XG4gICAgICAgICAgICB2YXIgbmF2ID0gZWoyX2Jhc2VfMS5zZWxlY3RBbGwoJyMnICsgZWxlLmlkICsgJ19uYXYuZS0nICsgZWxlLmlkICsgJ19uYXYnKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBbXS5zbGljZS5jYWxsKHRoaXMuc2Nyb2xsSXRlbXMuY2hpbGRyZW4pOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnVuaXF1ZUlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzIuZGV0YWNoKHRoaXMuc2Nyb2xsRWxlKTtcbiAgICAgICAgICAgIGlmIChuYXYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuZGV0YWNoKG5hdlswXSk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5kZXRhY2gobmF2WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLnNjcm9sbEVsZSwgJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLnRvdWNoTW9kdWxlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hNb2R1bGUgPSBudWxsO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmNyZWF0ZU5hdkljb24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGlkID0gZWxlbWVudC5pZC5jb25jYXQoJ19uYXYnKTtcbiAgICAgICAgICAgIHZhciBjbHNSaWdodCA9ICdlLScgKyBlbGVtZW50LmlkLmNvbmNhdCgnX25hdiAnICsgQ0xTX0hTQ1JPTExOQVYgKyAnICcgKyBDTFNfSFNDUk9MTE5BVlJJR0hUKTtcbiAgICAgICAgICAgIHZhciBuYXYgPSBlajJfYmFzZV8yLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgaWQ6IGlkLCBjbGFzc05hbWU6IGNsc1JpZ2h0IH0pO1xuICAgICAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgdmFyIG5hdkl0ZW0gPSBlajJfYmFzZV8yLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfTkFWUklHSFRBUlJPVyArICcgJyArIENMU19OQVZBUlJPVyArICcgZS1pY29ucycgfSk7XG4gICAgICAgICAgICB2YXIgY2xzTGVmdCA9ICdlLScgKyBlbGVtZW50LmlkLmNvbmNhdCgnX25hdiAnICsgQ0xTX0hTQ1JPTExOQVYgKyAnICcgKyBDTFNfSFNDUk9MTE5BVkxFRlQpO1xuICAgICAgICAgICAgdmFyIG5hdkVsZSA9IGVqMl9iYXNlXzIuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBpZDogaWQsIGNsYXNzTmFtZTogY2xzTGVmdCArICcgJyArIENMU19ESVNBQkxFIH0pO1xuICAgICAgICAgICAgbmF2RWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICB2YXIgbmF2TGVmdEl0ZW0gPSBlajJfYmFzZV8yLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfTkFWTEVGVEFSUk9XICsgJyAnICsgQ0xTX05BVkFSUk9XICsgJyBlLWljb25zJyB9KTtcbiAgICAgICAgICAgIG5hdkVsZS5hcHBlbmRDaGlsZChuYXZMZWZ0SXRlbSk7XG4gICAgICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG4gICAgICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5hdik7XG4gICAgICAgICAgICBlbGVtZW50Lmluc2VydEJlZm9yZShuYXZFbGUsIGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pZUNoZWNrKSB7XG4gICAgICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2UtaWUtYWxpZ24nKTtcbiAgICAgICAgICAgICAgICBuYXZFbGUuY2xhc3NMaXN0LmFkZCgnZS1pZS1hbGlnbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ldmVudEJpbmRpbmcoW25hdiwgbmF2RWxlXSk7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLm9uS2V5UHJlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgIHZhciB0aW1lb3V0RnVuXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmtleVRpbWVvdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbGVTY3JvbGxpbmcoMTAsIGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMua2V5VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRGdW5fMSgpO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLm9uS2V5VXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUua2V5ICE9PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMua2V5VGltZW91dCkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5VGltZW91dCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmtleVRpbWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUuZXZlbnRCaW5kaW5nID0gZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGVsZS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIG5ldyBlajJfYmFzZV8xLlRvdWNoKGVsLCB7IHRhcEhvbGQ6IF90aGlzLnRhYkhvbGRIYW5kbGVyLmJpbmQoX3RoaXMpLCB0YXBIb2xkVGhyZXNob2xkOiA1MDAgfSk7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIF90aGlzLm9uS2V5UHJlc3MuYmluZChfdGhpcykpO1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgX3RoaXMub25LZXlVcC5iaW5kKF90aGlzKSk7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLnJlcGVhdFNjcm9sbC5iaW5kKF90aGlzKSk7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBfdGhpcy5yZXBlYXRTY3JvbGwuYmluZChfdGhpcykpO1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZChlbCwgJ2NsaWNrJywgX3RoaXMuY2xpY2tFdmVudEhhbmRsZXIsIF90aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS5yZXBlYXRTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZW91dCk7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLnRhYkhvbGRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgdHJndCA9IGUub3JpZ2luYWxFdmVudC50YXJnZXQ7XG4gICAgICAgICAgICB0cmd0ID0gdGhpcy5jb250YWlucyh0cmd0LCBDTFNfSFNDUk9MTE5BVikgPyB0cmd0LmZpcnN0RWxlbWVudENoaWxkIDogdHJndDtcbiAgICAgICAgICAgIHZhciBzY3JvbGxEaXMgPSAxMDtcbiAgICAgICAgICAgIHZhciB0aW1lb3V0RnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmVsZVNjcm9sbGluZyhzY3JvbGxEaXMsIHRyZ3QpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGltZW91dEZ1bigpO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9O1xuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChlbGUsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUuZWxlU2Nyb2xsaW5nID0gZnVuY3Rpb24gKHNjcm9sbERpcywgdHJndCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnNjcm9sbEVsZTtcbiAgICAgICAgICAgIHZhciByb290RWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIGNsYXNzTGlzdCA9IHRyZ3QuY2xhc3NMaXN0O1xuICAgICAgICAgICAgaWYgKGNsYXNzTGlzdC5jb250YWlucyhDTFNfSFNDUk9MTE5BVikpIHtcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3QgPSB0cmd0LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX05BVkFSUk9XKS5jbGFzc0xpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWlucyhyb290RWxlLCBDTFNfUlRMKSAmJiB0aGlzLmJyb3dzZXJDaGVjaykge1xuICAgICAgICAgICAgICAgIHNjcm9sbERpcyA9IC1zY3JvbGxEaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2NybExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICBpZiAoKCF0aGlzLmNvbnRhaW5zKHJvb3RFbGUsIENMU19SVEwpIHx8IHRoaXMuYnJvd3NlckNoZWNrKSB8fCB0aGlzLmllQ2hlY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKENMU19OQVZSSUdIVEFSUk9XKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBzY3JsTGVmdCArIHNjcm9sbERpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcmxMZWZ0IC0gc2Nyb2xsRGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoQ0xTX05BVkxFRlRBUlJPVykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gc2NybExlZnQgKyBzY3JvbGxEaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBzY3JsTGVmdCAtIHNjcm9sbERpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmNsaWNrRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlU2Nyb2xsaW5nKHRoaXMuc2Nyb2xsU3RlcCwgZS50YXJnZXQpO1xuICAgICAgICB9O1xuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS50b3VjaEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuc2Nyb2xsRWxlO1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlO1xuICAgICAgICAgICAgZGlzdGFuY2UgPSBlLmRpc3RhbmNlWDtcbiAgICAgICAgICAgIGlmICgodGhpcy5pZUNoZWNrKSAmJiB0aGlzLmNvbnRhaW5zKHRoaXMuZWxlbWVudCwgQ0xTX1JUTCkpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IC1kaXN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLnNjcm9sbERpcmVjdGlvbiA9PT0gJ0xlZnQnKSB7XG4gICAgICAgICAgICAgICAgZWxlLnNjcm9sbExlZnQgPSBlbGUuc2Nyb2xsTGVmdCArIGRpc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZS5zY3JvbGxEaXJlY3Rpb24gPT09ICdSaWdodCcpIHtcbiAgICAgICAgICAgICAgICBlbGUuc2Nyb2xsTGVmdCA9IGVsZS5zY3JvbGxMZWZ0IC0gZGlzdGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmFycm93RGlzYWJsaW5nID0gZnVuY3Rpb24gKGFkZERpc2FibGUsIHJlbW92ZURpc2FibGUpIHtcbiAgICAgICAgICAgIGFkZERpc2FibGUuY2xhc3NMaXN0LmFkZChDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICBhZGREaXNhYmxlLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICBhZGREaXNhYmxlLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgIHJlbW92ZURpc2FibGUuY2xhc3NMaXN0LnJlbW92ZShDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICByZW1vdmVEaXNhYmxlLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgcmVtb3ZlRGlzYWJsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0U2Nyb2xsKCk7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLnNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGFyZ2V0Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdmFyIHJvb3RFbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgbmF2TGVmdEVsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19IU0NST0xMTkFWTEVGVCk7XG4gICAgICAgICAgICB2YXIgbmF2UmlnaHRFbGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSFNDUk9MTE5BVlJJR0hUKTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IC1zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoKCF0aGlzLmNvbnRhaW5zKHJvb3RFbGUsIENMU19SVEwpIHx8IHRoaXMuYnJvd3NlckNoZWNrKSB8fCB0aGlzLmllQ2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJvd0Rpc2FibGluZyhuYXZMZWZ0RWxlLCBuYXZSaWdodEVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycm93RGlzYWJsaW5nKG5hdlJpZ2h0RWxlLCBuYXZMZWZ0RWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmNlaWwod2lkdGggKyBzY3JvbGxMZWZ0ICsgLjEpID49IHRhcmdldC5zY3JvbGxXaWR0aCkge1xuICAgICAgICAgICAgICAgIGlmICgoIXRoaXMuY29udGFpbnMocm9vdEVsZSwgQ0xTX1JUTCkgfHwgdGhpcy5icm93c2VyQ2hlY2spIHx8IHRoaXMuaWVDaGVjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycm93RGlzYWJsaW5nKG5hdlJpZ2h0RWxlLCBuYXZMZWZ0RWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyb3dEaXNhYmxpbmcobmF2TGVmdEVsZSwgbmF2UmlnaHRFbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBkaXNFbGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpc0VsZSkge1xuICAgICAgICAgICAgICAgICAgICBkaXNFbGUuY2xhc3NMaXN0LnJlbW92ZShDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc0VsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzRWxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUub25Qcm9wZXJ0eUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3UHJvcCwgb2xkUHJvcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG5ld1Byb3ApOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzY3JvbGxTdGVwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVSdGwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcC5lbmFibGVSdGwgPyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTFNfUlRMKSA6IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMU19SVEwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gSFNjcm9sbDtcbiAgICB9KGVqMl9iYXNlXzEuQ29tcG9uZW50KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoNDApXG4gICAgXSwgSFNjcm9sbC5wcm90b3R5cGUsIFwic2Nyb2xsU3RlcFwiLCB2b2lkIDApO1xuICAgIEhTY3JvbGwgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Ob3RpZnlQcm9wZXJ0eUNoYW5nZXNcbiAgICBdLCBIU2Nyb2xsKTtcbiAgICBleHBvcnRzLkhTY3JvbGwgPSBIU2Nyb2xsO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24vaC1zY3JvbGwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi90b29sYmFyXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgdG9vbGJhcl8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydCh0b29sYmFyXzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90b29sYmFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1wb3B1cHNcIiwgXCJAc3luY2Z1c2lvbi9lajItcG9wdXBzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJ1dHRvbnNcIiwgXCIuLi9jb21tb24vaC1zY3JvbGxcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBlajJfYmFzZV8xLCBlajJfYmFzZV8yLCBlajJfYmFzZV8zLCBlajJfYmFzZV80LCBlajJfYmFzZV81LCBlajJfcG9wdXBzXzEsIGVqMl9wb3B1cHNfMiwgZWoyX2J1dHRvbnNfMSwgaF9zY3JvbGxfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgQ0xTX0lURU1TID0gJ2UtdG9vbGJhci1pdGVtcyc7XG4gICAgdmFyIENMU19JVEVNID0gJ2UtdG9vbGJhci1pdGVtJztcbiAgICB2YXIgQ0xTX1JUTCA9ICdlLXJ0bCc7XG4gICAgdmFyIENMU19TRVBBUkFUT1IgPSAnZS1zZXBhcmF0b3InO1xuICAgIHZhciBDTFNfUE9QVVBJQ09OID0gJ2UtcG9wdXAtdXAtaWNvbic7XG4gICAgdmFyIENMU19QT1BVUERPV04gPSAnZS1wb3B1cC1kb3duLWljb24nO1xuICAgIHZhciBDTFNfVEVNUExBVEUgPSAnZS10ZW1wbGF0ZSc7XG4gICAgdmFyIENMU19ESVNBQkxFID0gJ2Utb3ZlcmxheSc7XG4gICAgdmFyIENMU19QT1BVUFRFWFQgPSAnZS10b29sYmFyLXRleHQnO1xuICAgIHZhciBDTFNfVEJBUlRFWFQgPSAnZS1wb3B1cC10ZXh0JztcbiAgICB2YXIgQ0xTX1RCQVJPVkVSRkxPVyA9ICdlLW92ZXJmbG93LXNob3cnO1xuICAgIHZhciBDTFNfUE9QT1ZFUkZMT1cgPSAnZS1vdmVyZmxvdy1oaWRlJztcbiAgICB2YXIgQ0xTX1RCQVJCVE4gPSAnZS10YmFyLWJ0bic7XG4gICAgdmFyIENMU19UQkFSTkFWID0gJ2UtaG9yLW5hdic7XG4gICAgdmFyIENMU19UQkFSU0NSTE5BViA9ICdlLXNjcm9sbC1uYXYnO1xuICAgIHZhciBDTFNfVEJBUlJJR0hUID0gJ2UtdG9vbGJhci1yaWdodCc7XG4gICAgdmFyIENMU19UQkFSTEVGVCA9ICdlLXRvb2xiYXItbGVmdCc7XG4gICAgdmFyIENMU19UQkFSQ0VOVEVSID0gJ2UtdG9vbGJhci1jZW50ZXInO1xuICAgIHZhciBDTFNfVEJBUlBPUyA9ICdlLXRiYXItcG9zJztcbiAgICB2YXIgQ0xTX1RCQVJTQ1JPTEwgPSAnZS1oc2Nyb2xsLWNvbnRlbnQnO1xuICAgIHZhciBDTFNfUE9QVVBOQVYgPSAnZS1ob3ItbmF2JztcbiAgICB2YXIgQ0xTX1BPUFVQQ0xBU1MgPSAnZS10b29sYmFyLXBvcCc7XG4gICAgdmFyIENMU19QT1BVUCA9ICdlLXRvb2xiYXItcG9wdXAnO1xuICAgIHZhciBDTFNfVEJBUkJUTlRFWFQgPSAnZS10YmFyLWJ0bi10ZXh0JztcbiAgICB2YXIgQ0xTX1RCQVJOQVZBQ1QgPSAnZS1uYXYtYWN0aXZlJztcbiAgICB2YXIgQ0xTX1RCQVJJR05PUkUgPSAnZS1pZ25vcmUnO1xuICAgIHZhciBJdGVtID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEl0ZW0sIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEl0ZW0oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEl0ZW07XG4gICAgfShlajJfYmFzZV81LkNoaWxkUHJvcGVydHkpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBJdGVtLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcInRleHRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnYXV0bycpXG4gICAgXSwgSXRlbS5wcm90b3R5cGUsIFwid2lkdGhcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBJdGVtLnByb3RvdHlwZSwgXCJjc3NDbGFzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcInByZWZpeEljb25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBJdGVtLnByb3RvdHlwZSwgXCJzdWZmaXhJY29uXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ05vbmUnKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcIm92ZXJmbG93XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgSXRlbS5wcm90b3R5cGUsIFwidGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnQnV0dG9uJylcbiAgICBdLCBJdGVtLnByb3RvdHlwZSwgXCJ0eXBlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ0JvdGgnKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcInNob3dUZXh0T25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcImh0bWxBdHRyaWJ1dGVzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgSXRlbS5wcm90b3R5cGUsIFwidG9vbHRpcFRleHRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnbGVmdCcpXG4gICAgXSwgSXRlbS5wcm90b3R5cGUsIFwiYWxpZ25cIiwgdm9pZCAwKTtcbiAgICBleHBvcnRzLkl0ZW0gPSBJdGVtO1xuICAgIHZhciBUb29sYmFyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKFRvb2xiYXIsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIFRvb2xiYXIob3B0aW9ucywgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgZWxlbWVudCkgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLmtleUNvbmZpZ3MgPSB7XG4gICAgICAgICAgICAgICAgbW92ZUxlZnQ6ICdsZWZ0YXJyb3cnLFxuICAgICAgICAgICAgICAgIG1vdmVSaWdodDogJ3JpZ2h0YXJyb3cnLFxuICAgICAgICAgICAgICAgIG1vdmVVcDogJ3VwYXJyb3cnLFxuICAgICAgICAgICAgICAgIG1vdmVEb3duOiAnZG93bmFycm93JyxcbiAgICAgICAgICAgICAgICBwb3B1cE9wZW46ICdlbnRlcicsXG4gICAgICAgICAgICAgICAgcG9wdXBDbG9zZTogJ2VzY2FwZScsXG4gICAgICAgICAgICAgICAgdGFiOiAndGFiJyxcbiAgICAgICAgICAgICAgICBob21lOiAnaG9tZScsXG4gICAgICAgICAgICAgICAgZW5kOiAnZW5kJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnVud2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgd2hpbGUgKGVsZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZWxlLnJlbW92ZUNoaWxkKGVsZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnRyZ3RFbGUpIHtcbiAgICAgICAgICAgICAgICBlbGUuYXBwZW5kQ2hpbGQodGhpcy5jdHJsVGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xlYXJQcm9wZXJ0eSgpO1xuICAgICAgICAgICAgdGhpcy5wb3BPYmogPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5lbGVtZW50LCAnZS10b29scG9wJyk7XG4gICAgICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgWydhcmlhLWRpc2FibGVkJywgJ2FyaWEtb3JpZW50YXRpb24nLCAnYXJpYS1oYXNwb3B1cCcsICdyb2xlJ10uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyYik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucHJlUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdiZWZvcmVDcmVhdGUnKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kdWxlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucG9wT2JqID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZVJ0bCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMuZWxlbWVudCwgQ0xTX1JUTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLmtleU1vZHVsZSA9IG5ldyBlajJfYmFzZV8yLktleWJvYXJkRXZlbnRzKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGtleUFjdGlvbjogdGhpcy5rZXlBY3Rpb25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAga2V5Q29uZmlnczogdGhpcy5rZXlDb25maWdzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdrZXlkb3duJywgdGhpcy5kb2NLZXlEb3duLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JywgJzAnKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuZG9jS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA5ICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZS1ob3ItbmF2JykgPT09IHRydWUgJiYgZWoyX2Jhc2VfMi5pc1Zpc2libGUodGhpcy5wb3BPYmouZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcE9iai5oaWRlKHsgbmFtZTogJ1NsaWRlVXAnLCBkdXJhdGlvbjogMTAwIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGtleUNoZWNrID0gKGUua2V5Q29kZSA9PT0gNDAgfHwgZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDM1IHx8IGUua2V5Q29kZSA9PT0gMzYpO1xuICAgICAgICAgICAgaWYgKGtleUNoZWNrKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS51bndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lIU2Nyb2xsKCk7XG4gICAgICAgICAgICB0aGlzLmtleU1vZHVsZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUoZG9jdW1lbnQsICdzY3JvbGwnLCB0aGlzLmRvY0V2ZW50KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdrZXlkb3duJywgdGhpcy5kb2NLZXlEb3duKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZShkb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5kb2NFdmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmNsZWFyUHJvcGVydHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRiYXJFbGUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMudGJhckFsZ0VsZSA9IHsgbGVmdHM6IFtdLCBjZW50ZXJzOiBbXSwgcmlnaHRzOiBbXSB9O1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5kb2NFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgcG9wRWxlID0gZWoyX2Jhc2VfMi5jbG9zZXN0KGUudGFyZ2V0LCAnLmUtcG9wdXAnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcE9iaiAmJiBlajJfYmFzZV8yLmlzVmlzaWJsZSh0aGlzLnBvcE9iai5lbGVtZW50KSAmJiAhcG9wRWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BPYmouaGlkZSh7IG5hbWU6ICdTbGlkZVVwJywgZHVyYXRpb246IDEwMCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuZGVzdHJveUhTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxNb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5zY3JvbGxNb2R1bGUuZWxlbWVudCwgQ0xTX1RCQVJQT1MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbE1vZHVsZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxNb2R1bGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5kZXN0cm95SXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBbXS5zbGljZS5jYWxsKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIENMU19JVEVNKSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLmRldGFjaChlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJQcm9wZXJ0eSgpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5kZXN0cm95TW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbE1vZHVsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMuc2Nyb2xsTW9kdWxlLmVsZW1lbnQsIENMU19SVEwpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUhTY3JvbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvcE9iaikge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBSZWZyZXNoKHRoaXMucG9wT2JqLmVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZWxlLCB2YWwpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKHZhbCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChlbGUsIHZhbCkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUodmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuZWxlbWVudEZvY3VzID0gZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgdmFyIGZDaGlsZCA9IGVsZS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGlmIChmQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICBmQ2hpbGQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUVsZVN3aXRjaChlbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmNsc3RFbGVtZW50ID0gZnVuY3Rpb24gKHRick5hdkNoaywgdHJndCkge1xuICAgICAgICAgICAgdmFyIGNsc3Q7XG4gICAgICAgICAgICBpZiAodGJyTmF2Q2hrICYmIHRoaXMucG9wT2JqICYmIGVqMl9iYXNlXzIuaXNWaXNpYmxlKHRoaXMucG9wT2JqLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY2xzdCA9IHRoaXMucG9wT2JqLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW1lbnQgPT09IHRyZ3QgfHwgdGJyTmF2Q2hrKSB7XG4gICAgICAgICAgICAgICAgY2xzdCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsc3QgPSBlajJfYmFzZV8yLmNsb3Nlc3QodHJndCwgJy4nICsgQ0xTX0lURU0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNsc3Q7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmtleUhhbmRsaW5nID0gZnVuY3Rpb24gKGNsc3QsIGUsIHRyZ3QsIG5hdkNoaywgc2Nyb2xsQ2hrKSB7XG4gICAgICAgICAgICB2YXIgcG9wT2JqID0gdGhpcy5wb3BPYmo7XG4gICAgICAgICAgICB2YXIgcm9vdEVsZSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBwb3BBbmltYXRlID0geyBuYW1lOiAnU2xpZGVVcCcsIGR1cmF0aW9uOiAxMDAgfTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdtb3ZlUmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBpZiAocm9vdEVsZSA9PT0gdHJndCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Rm9jdXMoY2xzdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIW5hdkNoaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVGb2N1cyhjbHN0LCAnbmV4dCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vdmVMZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuYXZDaGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlRm9jdXMoY2xzdCwgJ3ByZXZpb3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcHVwQ2hlY2sgPSBlajJfYmFzZV8yLmNsb3Nlc3QoY2xzdCwgJy5lLXBvcHVwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBDaGVjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV8yLmlzVmlzaWJsZSh0aGlzLnBvcE9iai5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlcyA9IHBvcHVwQ2hlY2suY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmFjdGlvbiA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGUgPSBub2Rlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZSA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBDTFNfSVRFTVMgKyAnIC4nICsgQ0xTX0lURU0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmFjdGlvbiA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZSA9IG5vZGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudEZvY3VzKGVsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZVVwJzpcbiAgICAgICAgICAgICAgICBjYXNlICdtb3ZlRG93bic6XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGUuYWN0aW9uID09PSAnbW92ZVVwJyA/ICdwcmV2aW91cycgOiAnbmV4dCc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3BPYmogJiYgZWoyX2Jhc2VfMi5jbG9zZXN0KHRyZ3QsICcuZS1wb3B1cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9wRWxlID0gcG9wT2JqLmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9wRnJzdEVsZSA9IHBvcEVsZS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodmFsdWUgPT09ICdwcmV2aW91cycgJiYgcG9wRnJzdEVsZSA9PT0gY2xzdCkgfHwgKHZhbHVlID09PSAnbmV4dCcgJiYgcG9wRWxlLmxhc3RFbGVtZW50Q2hpbGQgPT09IGNsc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVGb2N1cyhjbHN0LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5hY3Rpb24gPT09ICdtb3ZlRG93bicgJiYgcG9wT2JqICYmIGVqMl9iYXNlXzIuaXNWaXNpYmxlKHBvcE9iai5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Rm9jdXMoY2xzdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndGFiJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzY3JvbGxDaGsgJiYgIW5hdkNoaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZV8xID0gY2xzdC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb290RWxlID09PSB0cmd0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlRWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlRWxlLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUVsZVJlbW92ZShlbGVfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZV8xLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncG9wdXBDbG9zZSc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3BPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcE9iai5oaWRlKHBvcEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BvcHVwT3Blbic6XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmF2Q2hrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcE9iaiAmJiAhZWoyX2Jhc2VfMi5pc1Zpc2libGUocG9wT2JqLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3BPYmouZWxlbWVudC5zdHlsZS50b3AgPSByb290RWxlLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3BPYmouc2hvdyh7IG5hbWU6ICdTbGlkZURvd24nLCBkdXJhdGlvbjogMTAwIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wT2JqLmhpZGUocG9wQW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmtleUFjdGlvbkhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGNsc3Q7XG4gICAgICAgICAgICB2YXIgdHJndCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIHRick5hdkNoayA9IHRyZ3QuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19UQkFSTkFWKTtcbiAgICAgICAgICAgIHZhciB0YmFyU2Nyb2xsQ2hrID0gdHJndC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RCQVJTQ1JMTkFWKTtcbiAgICAgICAgICAgIGNsc3QgPSB0aGlzLmNsc3RFbGVtZW50KHRick5hdkNoaywgdHJndCk7XG4gICAgICAgICAgICBpZiAoY2xzdCB8fCB0YmFyU2Nyb2xsQ2hrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYW5kbGluZyhjbHN0LCBlLCB0cmd0LCB0YnJOYXZDaGssIHRiYXJTY3JvbGxDaGspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5lbGVGb2N1cyA9IGZ1bmN0aW9uIChjbG9zZXN0LCBwb3MpIHtcbiAgICAgICAgICAgIHZhciBzaWIgPSBPYmplY3QoY2xvc2VzdClbcG9zICsgJ0VsZW1lbnRTaWJsaW5nJ107XG4gICAgICAgICAgICB2YXIgY29udGFpbnMgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19TRVBBUkFUT1IpIHx8IGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHNpYikge1xuICAgICAgICAgICAgICAgIHZhciBza2lwRWxlID0gY29udGFpbnMoc2liKTtcbiAgICAgICAgICAgICAgICBpZiAoc2tpcEVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0KHNpYilbcG9zICsgJ1NpYmxpbmcnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2liID0gT2JqZWN0KHNpYilbcG9zICsgJ1NpYmxpbmcnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraXBFbGUgPSBjb250YWlucyhzaWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNraXBFbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZUZvY3VzKHNpYiwgcG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Rm9jdXMoc2liKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBPYmplY3QoY2xvc2VzdC5wYXJlbnRFbGVtZW50KVtwb3MgKyAnRWxlbWVudFNpYmxpbmcnXTtcbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoZWxlbSkgJiYgZWxlbS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IE9iamVjdChlbGVtKVtwb3MgKyAnRWxlbWVudFNpYmxpbmcnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGVsZW0pICYmIGVsZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGVsZW0ucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbnMoZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVGb2N1cyhlbCwgcG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmZpcnN0RWxlbWVudENoaWxkLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVFbGVTd2l0Y2goZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gZWxlbS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zKGVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlRm9jdXMoZWwsIHBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRGb2N1cyhlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdHJndCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGNsc0xpc3QgPSB0cmd0LmNsYXNzTGlzdDtcbiAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgaXNQb3B1cEVsZW1lbnQgPSAhZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChlajJfYmFzZV8yLmNsb3Nlc3QodHJndCwgJy4nICsgQ0xTX1BPUFVQQ0xBU1MpKTtcbiAgICAgICAgICAgIHZhciBwb3B1cE5hdiA9IGVqMl9iYXNlXzIuY2xvc2VzdCh0cmd0LCAoJy4nICsgQ0xTX1RCQVJOQVYpKTtcbiAgICAgICAgICAgIGlmICghcG9wdXBOYXYpIHtcbiAgICAgICAgICAgICAgICBwb3B1cE5hdiA9IHRyZ3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVsZS5jaGlsZHJlblswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2UtaHNjcm9sbCcpICYmIChjbHNMaXN0LmNvbnRhaW5zKENMU19UQkFSTkFWKSkpIHtcbiAgICAgICAgICAgICAgICBjbHNMaXN0ID0gdHJndC5xdWVyeVNlbGVjdG9yKCcuZS1pY29ucycpLmNsYXNzTGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbHNMaXN0LmNvbnRhaW5zKENMU19QT1BVUElDT04pIHx8IGNsc0xpc3QuY29udGFpbnMoQ0xTX1BPUFVQRE9XTikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ2xpY2tIYW5kbGVyKGVsZSwgcG9wdXBOYXYsIENMU19SVEwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGl0ZW1PYmo7XG4gICAgICAgICAgICB2YXIgY2xzdCA9IGVqMl9iYXNlXzIuY2xvc2VzdChlLnRhcmdldCwgJy4nICsgQ0xTX0lURU0pO1xuICAgICAgICAgICAgaWYgKChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGNsc3QpIHx8IGNsc3QuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19ESVNBQkxFKSkgJiYgIXBvcHVwTmF2LmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJBUk5BVikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2xzdCkge1xuICAgICAgICAgICAgICAgIGl0ZW1PYmogPSB0aGlzLml0ZW1zW3RoaXMudGJhckVsZS5pbmRleE9mKGNsc3QpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBldmVudEFyZ3MgPSB7IG9yaWdpbmFsRXZlbnQ6IGUsIGl0ZW06IGl0ZW1PYmogfTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2tlZCcsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICBpZiAoaXNQb3B1cEVsZW1lbnQgJiYgIWV2ZW50QXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcE9iai5oaWRlKHsgbmFtZTogJ1NsaWRlVXAnLCBkdXJhdGlvbjogMTAwIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnBvcHVwQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKGVsZSwgcG9wdXBOYXYsIENMU19SVEwpIHtcbiAgICAgICAgICAgIHZhciBwb3BPYmogPSB0aGlzLnBvcE9iajtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV8yLmlzVmlzaWJsZShwb3BPYmouZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBwb3B1cE5hdi5jbGFzc0xpc3QucmVtb3ZlKENMU19UQkFSTkFWQUNUKTtcbiAgICAgICAgICAgICAgICBwb3BPYmouaGlkZSh7IG5hbWU6ICdTbGlkZVVwJywgZHVyYXRpb246IDEwMCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19SVEwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcE9iai5lbmFibGVSdGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBwb3BPYmoucG9zaXRpb24gPSB7IFg6ICdsZWZ0JywgWTogJ3RvcCcgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBvcE9iai5vZmZzZXRYID09PSAwICYmICFlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19SVEwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcE9iai5lbmFibGVSdGwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcG9wT2JqLnBvc2l0aW9uID0geyBYOiAncmlnaHQnLCBZOiAndG9wJyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3BPYmouZGF0YUJpbmQoKTtcbiAgICAgICAgICAgICAgICBwb3BPYmouZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBwb3B1cE5hdi5jbGFzc0xpc3QuYWRkKENMU19UQkFSTkFWQUNUKTtcbiAgICAgICAgICAgICAgICBwb3BPYmouc2hvdyh7IG5hbWU6ICdTbGlkZURvd24nLCBkdXJhdGlvbjogMTAwIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ29udHJvbCgpO1xuICAgICAgICAgICAgdGhpcy53aXJlRXZlbnRzKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBlajJfYmFzZV80LmZvcm1hdFVuaXQodGhpcy53aWR0aCk7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gZWoyX2Jhc2VfNC5mb3JtYXRVbml0KHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV81LkJyb3dzZXIuaW5mby5uYW1lICE9PSAnbXNpZScgfHwgdGhpcy5oZWlnaHQgIT09ICdhdXRvJykge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5lbGVtZW50LCB7ICdoZWlnaHQnOiBoZWlnaHQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKHRoaXMuZWxlbWVudCwgeyAnd2lkdGgnOiB3aWR0aCB9KTtcbiAgICAgICAgICAgIHZhciBhcmlhQXR0ciA9IHtcbiAgICAgICAgICAgICAgICAncm9sZSc6ICd0b29sYmFyJywgJ2FyaWEtZGlzYWJsZWQnOiAnZmFsc2UnLCAnYXJpYS1oYXNwb3B1cCc6ICdmYWxzZScsICdhcmlhLW9yaWVudGF0aW9uJzogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIGFyaWFBdHRyKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucmVuZGVyQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudHJndEVsZSA9ICh0aGlzLmVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkgPyB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2JykgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy50YmFyQWxnRWxlID0geyBsZWZ0czogW10sIGNlbnRlcnM6IFtdLCByaWdodHM6IFtdIH07XG4gICAgICAgICAgICB0aGlzLnJlbmRlckl0ZW1zKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlck92ZXJmbG93TW9kZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtUG9zaXRpb25pbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuaW5pdEhTY3JvbGwgPSBmdW5jdGlvbiAoZWxlbWVudCwgaW5uZXJJdGVtcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNjcm9sbE1vZHVsZSAmJiB0aGlzLmNoZWNrT3ZlcmZsb3coZWxlbWVudCwgaW5uZXJJdGVtc1swXSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU1TICsgJyAuJyArIENMU19UQkFSQ0VOVEVSKS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kdWxlID0gbmV3IGhfc2Nyb2xsXzEuSFNjcm9sbCh7IHNjcm9sbFN0ZXA6IDUwLCBlbmFibGVSdGw6IHRoaXMuZW5hYmxlUnRsIH0sIGlubmVySXRlbXNbMF0pO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMuc2Nyb2xsTW9kdWxlLmVsZW1lbnQsIENMU19UQkFSUE9TKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKHRoaXMuZWxlbWVudCwgeyBvdmVyZmxvdzogJ2hpZGRlbicgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLml0ZW1XaWR0aENhbCA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gMDtcbiAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwoZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX0lURU0pLCBpdGVtcykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCArPSAoZWwub2Zmc2V0V2lkdGggKyBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5tYXJnaW5SaWdodCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmNoZWNrT3ZlcmZsb3cgPSBmdW5jdGlvbiAoZWxlbWVudCwgaW5uZXJJdGVtKSB7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChlbGVtZW50KSB8fCBlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZWxlV2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdmFyIGl0ZW1XaWR0aDtcbiAgICAgICAgICAgIGlmICh0aGlzLnRiYXJBbGlnbiB8fCB0aGlzLnNjcm9sbE1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGl0ZW1XaWR0aCA9IHRoaXMuaXRlbVdpZHRoQ2FsKHRoaXMuc2Nyb2xsTW9kdWxlID8gaW5uZXJJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5lLWhzY3JvbGwtY29udGVudCcpIDogaW5uZXJJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1XaWR0aCA9IGlubmVySXRlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwb3BOYXYgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX1RCQVJOQVYpO1xuICAgICAgICAgICAgdmFyIHNjcm9sbE5hdiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfVEJBUlNDUkxOQVYpO1xuICAgICAgICAgICAgaWYgKGl0ZW1XaWR0aCA+IGVsZVdpZHRoIC0gKHBvcE5hdiA/IHBvcE5hdi5vZmZzZXRXaWR0aCA6IChzY3JvbGxOYXYgPyBzY3JvbGxOYXYub2Zmc2V0V2lkdGggKiAyIDogMCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnJlZnJlc2hPdmVyZmxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnJlbmRlck92ZXJmbG93TW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgaW5uZXJJdGVtcyA9IGVsZS5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNUyk7XG4gICAgICAgICAgICBpZiAoZWxlICYmIGVsZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vZmZzZXRXaWQgPSBlbGUub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLm92ZXJmbG93TW9kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdTY3JvbGxhYmxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUhTY3JvbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEhTY3JvbGwoZWxlLCBlbGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShDTFNfSVRFTVMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdQb3B1cCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZCh0aGlzLmVsZW1lbnQsICdlLXRvb2xwb3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRiYXJBbGlnbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlUG9zaXRpb25pbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrT3ZlcmZsb3coZWxlLCBpbm5lckl0ZW1zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUG9wdXBFbGUoZWxlLCBbXS5zbGljZS5jYWxsKGVqMl9iYXNlXzMuc2VsZWN0QWxsKCcuJyArIENMU19JVEVNUyArICcgLicgKyBDTFNfSVRFTSwgZWxlKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19UQkFSTkFWKS5zZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRiYXJBbGlnbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKGlubmVySXRlbXMsIENMU19UQkFSUE9TKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1Qb3NpdGlvbmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5jcmVhdGVQb3B1cEVsZSA9IGZ1bmN0aW9uIChlbGUsIGlubmVyRWxlKSB7XG4gICAgICAgICAgICB2YXIgaW5uZXJOYXYgPSBlbGUucXVlcnlTZWxlY3RvcignLicgKyBDTFNfVEJBUk5BVik7XG4gICAgICAgICAgICBpZiAoIWlubmVyTmF2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQb3B1cEljb24oZWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlubmVyTmF2ID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX1RCQVJOQVYpO1xuICAgICAgICAgICAgdmFyIGVsZVdpZHRoID0gKGVsZS5vZmZzZXRXaWR0aCAtIChpbm5lck5hdi5vZmZzZXRXaWR0aCkpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2UtcnRsJyk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUHJpb3JpdHkoZWxlLCBpbm5lckVsZSwgZWxlV2lkdGgsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlUnRsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2UtcnRsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBvcHVwKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnB1c2hpbmdQb3BwZWRFbGUgPSBmdW5jdGlvbiAodGJhck9iaiwgcG9wdXBQcmksIGVsZSwgZWxlSGVpZ2h0KSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRiYXJPYmouZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBub2RlcyA9IGVqMl9iYXNlXzMuc2VsZWN0QWxsKCcuJyArIENMU19UQkFST1ZFUkZMT1csIGVsZSk7XG4gICAgICAgICAgICB2YXIgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBwb3BwZWRFbGUgPSBbXS5zbGljZS5jYWxsKGVqMl9iYXNlXzMuc2VsZWN0QWxsKCcuJyArIENMU19QT1BVUCwgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNUykpKTtcbiAgICAgICAgICAgIHZhciBub2RlUHJpID0gMDtcbiAgICAgICAgICAgIHBvcHBlZEVsZS5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBub2RlcyA9IGVqMl9iYXNlXzMuc2VsZWN0QWxsKCcuJyArIENMU19UQkFST1ZFUkZMT1csIGVsZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJBUk9WRVJGTE9XKSAmJiBub2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YmFyT2JqLnRiUmVzaXplICYmIG5vZGVzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGUuaW5zZXJ0QmVmb3JlKGVsLCBub2Rlc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgKytub2RlUHJpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlLmluc2VydEJlZm9yZShlbCwgZWxlLmNoaWxkcmVuW25vZGVzLmxlbmd0aF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgKytub2RlUHJpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJBUk9WRVJGTE9XKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuaW5zZXJ0QmVmb3JlKGVsLCBlbGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICsrbm9kZVByaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGJhck9iai50YlJlc2l6ZSAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1BPUE9WRVJGTE9XKSAmJiBlbGUuY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiBub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLmluc2VydEJlZm9yZShlbCwgZWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICArK25vZGVQcmk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfUE9QT1ZFUkZMT1cpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwUHJpLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0YmFyT2JqLnRiUmVzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5pbnNlcnRCZWZvcmUoZWwsIGVsZS5jaGlsZE5vZGVzW25vZGVJbmRleCArIG5vZGVQcmldKTtcbiAgICAgICAgICAgICAgICAgICAgKytub2RlSW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGUuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKGVsLCB7IGRpc3BsYXk6ICcnLCBoZWlnaHQ6IGVsZUhlaWdodCArICdweCcgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvcHVwUHJpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgZWxlLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHRiYXJFbGUgPSBlajJfYmFzZV8zLnNlbGVjdEFsbCgnLicgKyBDTFNfSVRFTSwgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNUykpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRiYXJFbGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgdGJhckVsZW1lbnQgPSB0YmFyRWxlW2ldO1xuICAgICAgICAgICAgICAgIGlmICh0YmFyRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1NFUEFSQVRPUikpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZSh0YmFyRWxlbWVudCwgeyBkaXNwbGF5OiAnbm9uZScgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmNyZWF0ZVBvcHVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgZWxlSGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGVsZUl0ZW07XG4gICAgICAgICAgICBlbGVJdGVtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNICsgJzpub3QoLicgKyBDTFNfU0VQQVJBVE9SICsgJyApOm5vdCguJyArIENMU19QT1BVUCArICcgKScpO1xuICAgICAgICAgICAgZWxlSGVpZ2h0ID0gKGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID09PSAnYXV0bycgfHwgZWxlbWVudC5zdHlsZS5oZWlnaHQgPT09ICcnKSA/IG51bGwgOiBlbGVJdGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHZhciBlbGU7XG4gICAgICAgICAgICB2YXIgcG9wdXBQcmkgPSBbXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgZWxlbWVudC5pZCArICdfcG9wdXAuJyArIENMU19QT1BVUENMQVNTKSkge1xuICAgICAgICAgICAgICAgIGVsZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBlbGVtZW50LmlkICsgJ19wb3B1cC4nICsgQ0xTX1BPUFVQQ0xBU1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGlkOiBlbGVtZW50LmlkICsgJ19wb3B1cCcsIGNsYXNzTmFtZTogQ0xTX1BPUFVQQ0xBU1MgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnB1c2hpbmdQb3BwZWRFbGUodGhpcywgcG9wdXBQcmksIGVsZSwgZWxlSGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBJbml0KGVsZW1lbnQsIGVsZSk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnBvcHVwSW5pdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBlbGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wb3BPYmopIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZSk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQsIHsgb3ZlcmZsb3c6ICcnIH0pO1xuICAgICAgICAgICAgICAgIHZhciBwb3B1cCA9IG5ldyBlajJfcG9wdXBzXzEuUG9wdXAobnVsbCwge1xuICAgICAgICAgICAgICAgICAgICByZWxhdGVUbzogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAoZWxlbWVudC5vZmZzZXRIZWlnaHQpLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVSdGw6IHRoaXMuZW5hYmxlUnRsLFxuICAgICAgICAgICAgICAgICAgICBvcGVuOiB0aGlzLnBvcHVwT3Blbi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZTogdGhpcy5wb3B1cENsb3NlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5lbmFibGVSdGwgPyB7IFg6ICdsZWZ0JywgWTogJ3RvcCcgfSA6IHsgWDogJ3JpZ2h0JywgWTogJ3RvcCcgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZFRvKGVsZSk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKGRvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5kb2NFdmVudC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQoZG9jdW1lbnQsICdjbGljayAnLCB0aGlzLmRvY0V2ZW50LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHBvcHVwLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gcG9wdXAuZWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIHBvcHVwLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcE9iaiA9IHBvcHVwO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCAndHJ1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvcHVwRWxlID0gdGhpcy5wb3BPYmouZWxlbWVudDtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKHBvcHVwRWxlLCB7IG1heEhlaWdodDogJycsIGRpc3BsYXk6ICdibG9jaycgfSk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZShwb3B1cEVsZSwgeyBtYXhIZWlnaHQ6IHBvcHVwRWxlLm9mZnNldEhlaWdodCArICdweCcsIGRpc3BsYXk6ICcnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5wb3B1cE9wZW4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHBvcE9iaiA9IHRoaXMucG9wT2JqO1xuICAgICAgICAgICAgdmFyIHBvcHVwRWxlID0gdGhpcy5wb3BPYmouZWxlbWVudDtcbiAgICAgICAgICAgIHZhciB0b29sRWxlID0gdGhpcy5wb3BPYmouZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgdmFyIHBvcHVwTmF2ID0gdG9vbEVsZS5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19UQkFSTkFWKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUocG9wT2JqLmVsZW1lbnQsIHsgaGVpZ2h0OiAnYXV0bycsIG1heEhlaWdodDogJycgfSk7XG4gICAgICAgICAgICBwb3BPYmouZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBwb3BPYmouZWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgdmFyIHBvcHVwRWxlUG9zID0gcG9wdXBFbGUub2Zmc2V0VG9wICsgcG9wdXBFbGUub2Zmc2V0SGVpZ2h0ICsgZWoyX3BvcHVwc18yLmNhbGN1bGF0ZVBvc2l0aW9uKHRvb2xFbGUpLnRvcDtcbiAgICAgICAgICAgIHZhciBwb3BJY29uID0gcG9wdXBOYXYuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBwb3B1cE5hdi5jbGFzc0xpc3QuYWRkKENMU19UQkFSTkFWQUNUKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuY2xhc3NMaXN0KHBvcEljb24sIFtDTFNfUE9QVVBJQ09OXSwgW0NMU19QT1BVUERPV05dKTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxWYWwgPSBlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHdpbmRvdy5zY3JvbGxZKSA/IDAgOiB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgICAgIGlmICgod2luZG93LmlubmVySGVpZ2h0ICsgc2Nyb2xsVmFsKSA8IHBvcHVwRWxlUG9zKSB7XG4gICAgICAgICAgICAgICAgdmFyIG92ZXJmbG93SGVpZ2h0ID0gKHBvcHVwRWxlLm9mZnNldEhlaWdodCAtICgocG9wdXBFbGVQb3MgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBzY3JvbGxWYWwpICsgNSkpO1xuICAgICAgICAgICAgICAgIHBvcE9iai5oZWlnaHQgPSBvdmVyZmxvd0hlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZShwb3BPYmouZWxlbWVudCwgeyBtYXhIZWlnaHQ6IG92ZXJmbG93SGVpZ2h0ICsgJ3B4JyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucG9wdXBDbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgdmFyIHBvcHVwTmF2ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19UQkFSTkFWKTtcbiAgICAgICAgICAgIHZhciBwb3BJY29uID0gcG9wdXBOYXYuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBwb3B1cE5hdi5jbGFzc0xpc3QucmVtb3ZlKENMU19UQkFSTkFWQUNUKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuY2xhc3NMaXN0KHBvcEljb24sIFtDTFNfUE9QVVBET1dOXSwgW0NMU19QT1BVUElDT05dKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuY2hlY2tQcmlvcml0eSA9IGZ1bmN0aW9uIChlbGUsIGluRWxlLCBlbGVXaWR0aCwgcHJlKSB7XG4gICAgICAgICAgICB2YXIgbGVuID0gaW5FbGUubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGVsZVdpZCA9IGVsZVdpZHRoO1xuICAgICAgICAgICAgdmFyIHNlcENoZWNrID0gMDtcbiAgICAgICAgICAgIHZhciBpdGVtQ291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIGl0ZW1Qb3BDb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgY2hlY2tDbGFzcyA9IGZ1bmN0aW9uIChlbGUsIHZhbCkge1xuICAgICAgICAgICAgICAgIHZhciByVmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFsLmZvckVhY2goZnVuY3Rpb24gKGNscykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlLmNsYXNzTGlzdC5jb250YWlucyhjbHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByVmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByVmFsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciBtcmduID0gcGFyc2VGbG9hdCgod2luZG93LmdldENvbXB1dGVkU3R5bGUoaW5FbGVbaV0pKS5tYXJnaW5SaWdodCk7XG4gICAgICAgICAgICAgICAgbXJnbiArPSBwYXJzZUZsb2F0KCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpbkVsZVtpXSkpLm1hcmdpbkxlZnQpO1xuICAgICAgICAgICAgICAgIGlmIChpbkVsZVtpXSA9PT0gdGhpcy50YmFyRWxlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGJhckVsZU1yZ24gPSBtcmduO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKGluRWxlW2ldLm9mZnNldExlZnQgKyBpbkVsZVtpXS5vZmZzZXRXaWR0aCArIG1yZ24pID4gZWxlV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluRWxlW2ldLmNsYXNzTGlzdC5jb250YWlucyhDTFNfU0VQQVJBVE9SKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlcENoZWNrID4gMCAmJiBpdGVtQ291bnQgPT09IGl0ZW1Qb3BDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXBFbGUgPSBpbkVsZVtpICsgaXRlbUNvdW50ICsgKHNlcENoZWNrIC0gMSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0NsYXNzKHNlcEVsZSwgW0NMU19TRVBBUkFUT1IsIENMU19UQkFSSUdOT1JFXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZShzZXBFbGUsIHsgZGlzcGxheTogJ25vbmUnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcENoZWNrKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVBvcENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbkVsZVtpXS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RCQVJPVkVSRkxPVykgJiYgcHJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVXaWR0aCAtPSAoaW5FbGVbaV0ub2Zmc2V0V2lkdGggKyAobXJnbikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFjaGVja0NsYXNzKGluRWxlW2ldLCBbQ0xTX1NFUEFSQVRPUiwgQ0xTX1RCQVJJR05PUkVdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5FbGVbaV0uY2xhc3NMaXN0LmFkZChDTFNfUE9QVVApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZShpbkVsZVtpXSwgeyBkaXNwbGF5OiAnbm9uZScsIG1pbldpZHRoOiBpbkVsZVtpXS5vZmZzZXRXaWR0aCArICdweCcgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtUG9wQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVdpZHRoIC09IChpbkVsZVtpXS5vZmZzZXRXaWR0aCArIChtcmduKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvcGVkRWxlID0gZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX0lURU0gKyAnOm5vdCguJyArIENMU19QT1BVUCArICcpJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUHJpb3JpdHkoZWxlLCBwb3BlZEVsZSwgZWxlV2lkLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmNyZWF0ZVBvcHVwSWNvbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBlbGVtZW50LmlkLmNvbmNhdCgnX25hdicpO1xuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICdlLScgKyBlbGVtZW50LmlkLmNvbmNhdCgnX25hdiAnICsgQ0xTX1BPUFVQTkFWKTtcbiAgICAgICAgICAgIHZhciBuYXYgPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgaWQ6IGlkLCBjbGFzc05hbWU6IGNsYXNzTmFtZSB9KTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV81LkJyb3dzZXIuaW5mby5uYW1lID09PSAnbXNpZScgfHwgZWoyX2Jhc2VfNS5Ccm93c2VyLmluZm8ubmFtZSA9PT0gJ2VkZ2UnKSB7XG4gICAgICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2UtaWUtYWxpZ24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuYXZJdGVtID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX1BPUFVQRE9XTiArICcgZS1pY29ucycgfSk7XG4gICAgICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG4gICAgICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5hdik7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnRiYXJQcmlSZWYgPSBmdW5jdGlvbiAoaW5FbGUsIGluZHgsIHNlcFByaSwgZWwsIGRlcywgZWxXaWQsIHdpZCwgaWcpIHtcbiAgICAgICAgICAgIHZhciBpZ25vcmVDb3VudCA9IGlnO1xuICAgICAgICAgICAgdmFyIHBvcEVsZSA9IHRoaXMucG9wT2JqLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSAnLicgKyBDTFNfSVRFTSArICc6bm90KC4nICsgQ0xTX1NFUEFSQVRPUiArICcpOm5vdCguJyArIENMU19UQkFST1ZFUkZMT1cgKyAnKSc7XG4gICAgICAgICAgICB2YXIgcHJpRWxlQ250ID0gZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX1BPUFVQICsgJzpub3QoLicgKyBDTFNfVEJBUk9WRVJGTE9XICsgJyknLCBwb3BFbGUpLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBjaGVja0NsYXNzID0gZnVuY3Rpb24gKGVsZSwgdmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZS5jbGFzc0xpc3QuY29udGFpbnModmFsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMy5zZWxlY3RBbGwocXVlcnksIGluRWxlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlU2VwID0gaW5FbGUuY2hpbGRyZW5baW5keCAtIChpbmR4IC0gc2VwUHJpKSAtIDFdO1xuICAgICAgICAgICAgICAgIHZhciBpZ25vcmVDaGVjayA9ICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChlbGVTZXApICYmIGNoZWNrQ2xhc3MoZWxlU2VwLCBDTFNfVEJBUklHTk9SRSkpO1xuICAgICAgICAgICAgICAgIGlmICgoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoZWxlU2VwKSAmJiBjaGVja0NsYXNzKGVsZVNlcCwgQ0xTX1NFUEFSQVRPUikgJiYgIWVqMl9iYXNlXzIuaXNWaXNpYmxlKGVsZVNlcCkpIHx8IGlnbm9yZUNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXBEaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBlbGVTZXAuc3R5bGUuZGlzcGxheSA9ICdpbmhlcml0JztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZVNlcFdpZHRoID0gZWxlU2VwLm9mZnNldFdpZHRoICsgKHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlU2VwKS5tYXJnaW5SaWdodCkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZTZXAgPSBlbGVTZXAucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKChlbFdpZCArIGVsZVNlcFdpZHRoKSA8IHdpZCB8fCBkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluRWxlLmluc2VydEJlZm9yZShlbCwgaW5FbGUuY2hpbGRyZW5bKGluZHggKyBpZ25vcmVDb3VudCkgLSAoaW5keCAtIHNlcFByaSldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChwcmV2U2VwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTZXAuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZTZXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19TRVBBUkFUT1IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlNlcC5zdHlsZS5kaXNwbGF5ID0gc2VwRGlzcGxheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbGVTZXAuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5FbGUuaW5zZXJ0QmVmb3JlKGVsLCBpbkVsZS5jaGlsZHJlblsoaW5keCArIGlnbm9yZUNvdW50KSAtIChpbmR4IC0gc2VwUHJpKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluRWxlLmluc2VydEJlZm9yZShlbCwgaW5FbGUuY2hpbGRyZW5bKGluZHggKyBpZ25vcmVDb3VudCkgLSBwcmlFbGVDbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucG9wdXBSZWZyZXNoID0gZnVuY3Rpb24gKHBvcHVwRWxlLCBkZXN0cm95KSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIHBvcE5hdiA9IGVsZS5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19UQkFSTkFWKTtcbiAgICAgICAgICAgIHZhciBpbm5lckVsZSA9IGVsZS5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNUyk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChwb3BOYXYpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5uZXJFbGUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgcG9wdXBFbGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBlbGUub2Zmc2V0V2lkdGggLSAocG9wTmF2Lm9mZnNldFdpZHRoICsgaW5uZXJFbGUub2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cEVsZVJlZnJlc2god2lkdGgsIHBvcHVwRWxlLCBkZXN0cm95KTtcbiAgICAgICAgICAgIHBvcHVwRWxlLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIGlmIChwb3B1cEVsZS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLmRldGFjaChwb3BOYXYpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wT2JqLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLmRldGFjaCh0aGlzLnBvcE9iai5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcE9iaiA9IG51bGw7XG4gICAgICAgICAgICAgICAgZWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKCdlLXRvb2xwb3AnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuaWdub3JlRWxlRmV0Y2ggPSBmdW5jdGlvbiAoaW5kZXgsIGlubmVyRWxlKSB7XG4gICAgICAgICAgICB2YXIgaWdub3JlRWxlID0gW10uc2xpY2UuY2FsbChpbm5lckVsZS5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIENMU19UQkFSSUdOT1JFKSk7XG4gICAgICAgICAgICB2YXIgaWdub3JlSW54ID0gW107XG4gICAgICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICAgICAgaWYgKGlnbm9yZUVsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWdub3JlRWxlLmZvckVhY2goZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpZ25vcmVJbngucHVzaChbXS5zbGljZS5jYWxsKGlubmVyRWxlLmNoaWxkcmVuKS5pbmRleE9mKGVsZSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZ25vcmVJbnguZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA8PSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5wb3B1cEVsZVJlZnJlc2ggPSBmdW5jdGlvbiAod2lkdGgsIHBvcHVwRWxlLCBkZXN0cm95KSB7XG4gICAgICAgICAgICB2YXIgZWxlU3BsaWNlID0gdGhpcy50YmFyRWxlO1xuICAgICAgICAgICAgdmFyIHByaUVsZUNudDtcbiAgICAgICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgICAgIHZhciBpbm5lckVsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNUyk7XG4gICAgICAgICAgICB2YXIgaWdub3JlQ291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgdmFyIGVsV2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgYnRuVGV4dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX1RCQVJCVE5URVhUKTtcbiAgICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdlLXRidG4tYWxpZ24nKSB8fCBlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RCQVJURVhUKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnRuID0gZWwuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChidG5UZXh0KSAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RCQVJURVhUKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGV4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGJ0blRleHQpICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfUE9QVVBURVhUKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGV4dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBidG4uc3R5bGUubWluV2lkdGggPSAnMCUnO1xuICAgICAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5zdHlsZS5taW5XaWR0aCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoYnRuVGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRleHQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbCA9PT0gdGhpc18xLnRiYXJFbGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgZWxXaWR0aCArPSB0aGlzXzEudGJhckVsZU1yZ247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKGVsV2lkdGggPCB3aWR0aCB8fCBkZXN0cm95KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLm1pbldpZHRoID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19QT1BPVkVSRkxPVykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoQ0xTX1BPUFVQKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXNfMS50YmFyRWxlLmluZGV4T2YoZWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc18xLnRiYXJBbGlnbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXNfMS5pdGVtc1tpbmRleF0uYWxpZ247XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXNfMS50YmFyQWxnRWxlWyhwb3MgKyAncycpXS5pbmRleE9mKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVNwbGljZSA9IHRoaXNfMS50YmFyQWxnRWxlWyhwb3MgKyAncycpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRWxlID0gdGhpc18xLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTVMgKyAnIC4nICsgJ2UtdG9vbGJhci0nICsgcG9zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VwQmVmb3JlUHJpXzEgPSAwO1xuICAgICAgICAgICAgICAgICAgICBlbGVTcGxpY2Uuc2xpY2UoMCwgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19UQkFST1ZFUkZMT1cpIHx8IGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfU0VQQVJBVE9SKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1NFUEFSQVRPUikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAtPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwQmVmb3JlUHJpXzErKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZUNvdW50ID0gdGhpc18xLmlnbm9yZUVsZUZldGNoKGluZGV4LCBpbm5lckVsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RCQVJPVkVSRkxPVykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNfMS50YmFyUHJpUmVmKGlubmVyRWxlLCBpbmRleCwgc2VwQmVmb3JlUHJpXzEsIGVsLCBkZXN0cm95LCBlbFdpZHRoLCB3aWR0aCwgaWdub3JlQ291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggLT0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRWxlLmluc2VydEJlZm9yZShlbCwgaW5uZXJFbGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAtPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaUVsZUNudCA9IGVqMl9iYXNlXzMuc2VsZWN0QWxsKCcuJyArIENMU19UQkFST1ZFUkZMT1csIHRoaXNfMS5wb3BPYmouZWxlbWVudCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJFbGUuaW5zZXJ0QmVmb3JlKGVsLCBpbm5lckVsZS5jaGlsZHJlblsoaW5kZXggKyBpZ25vcmVDb3VudCkgLSBwcmlFbGVDbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIC09IGVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHRoaXNfMSA9IHRoaXM7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gW10uc2xpY2UuY2FsbChwb3B1cEVsZS5jaGlsZHJlbik7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZV8xID0gX2xvb3BfMShlbCk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlXzEgPT09IFwiYnJlYWtcIilcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnJlbW92ZVBvc2l0aW9uaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTVMpO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoaXRlbSkgfHwgIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMU19UQkFSUE9TKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGl0ZW0sIENMU19UQkFSUE9TKTtcbiAgICAgICAgICAgIHZhciBpbm5lckl0ZW0gPSBbXS5zbGljZS5jYWxsKGl0ZW0uY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICBpbm5lckl0ZW1bMV0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgaW5uZXJJdGVtWzJdLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucmVmcmVzaFBvc2l0aW9uaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTVMpO1xuICAgICAgICAgICAgdGhpcy5hZGQoaXRlbSwgQ0xTX1RCQVJQT1MpO1xuICAgICAgICAgICAgdGhpcy5pdGVtUG9zaXRpb25pbmcoKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuaXRlbVBvc2l0aW9uaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTVMpO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoaXRlbSkgfHwgIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMU19UQkFSUE9TKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwb3B1cE5hdiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19UQkFSTkFWKTtcbiAgICAgICAgICAgIHZhciBpbm5lckl0ZW07XG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxNb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpbm5lckl0ZW0gPSBbXS5zbGljZS5jYWxsKGl0ZW0ucXVlcnlTZWxlY3RvcignLicgKyBDTFNfVEJBUlNDUk9MTCkuY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5uZXJJdGVtID0gW10uc2xpY2UuY2FsbChpdGVtLmNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1hcmdpbiA9IGlubmVySXRlbVswXS5vZmZzZXRXaWR0aCArIGlubmVySXRlbVsyXS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHZhciB0YmFyV2lkID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgaWYgKHBvcHVwTmF2KSB7XG4gICAgICAgICAgICAgICAgdGJhcldpZCAtPSBwb3B1cE5hdi5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgcG9wV2lkID0gcG9wdXBOYXYub2Zmc2V0V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgIGlubmVySXRlbVsyXS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVSdGwgPyBpbm5lckl0ZW1bMl0uc3R5bGUubGVmdCA9IHBvcFdpZCA6IGlubmVySXRlbVsyXS5zdHlsZS5yaWdodCA9IHBvcFdpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YmFyV2lkIDw9IG1hcmdpbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9ICgoKHRiYXJXaWQgLSBtYXJnaW4pKSAtIGlubmVySXRlbVsxXS5vZmZzZXRXaWR0aCkgLyAyO1xuICAgICAgICAgICAgaW5uZXJJdGVtWzFdLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgIHZhciBtcmduID0gKGlubmVySXRlbVswXS5vZmZzZXRXaWR0aCArIHZhbHVlKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJ0bCA/IGlubmVySXRlbVsxXS5zdHlsZS5tYXJnaW5SaWdodCA9IG1yZ24gOiBpbm5lckl0ZW1bMV0uc3R5bGUubWFyZ2luTGVmdCA9IG1yZ247XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnRiYXJJdGVtQWxpZ24gPSBmdW5jdGlvbiAoaXRlbSwgaXRlbUVsZSwgcG9zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGFsaWduRGl2ID0gW107XG4gICAgICAgICAgICBhbGlnbkRpdi5wdXNoKGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19UQkFSTEVGVCB9KSk7XG4gICAgICAgICAgICBhbGlnbkRpdi5wdXNoKGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19UQkFSQ0VOVEVSIH0pKTtcbiAgICAgICAgICAgIGFsaWduRGl2LnB1c2goZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX1RCQVJSSUdIVCB9KSk7XG4gICAgICAgICAgICBpZiAocG9zID09PSAwICYmIGl0ZW0uYWxpZ24gIT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIGFsaWduRGl2LmZvckVhY2goZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtRWxlLmFwcGVuZENoaWxkKGVsZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YmFyQWxpZ24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGl0ZW1FbGUsIENMU19UQkFSUE9TKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0uYWxpZ24gIT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIHZhciBhbGlnbkVsZSA9IGl0ZW1FbGUuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICB2YXIgbGVmdEFsaWduXzEgPSBhbGlnbkRpdlswXTtcbiAgICAgICAgICAgICAgICBbXS5zbGljZS5jYWxsKGFsaWduRWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50YmFyQWxnRWxlLmxlZnRzLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0QWxpZ25fMS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaXRlbUVsZS5hcHBlbmRDaGlsZChsZWZ0QWxpZ25fMSk7XG4gICAgICAgICAgICAgICAgaXRlbUVsZS5hcHBlbmRDaGlsZChhbGlnbkRpdlsxXSk7XG4gICAgICAgICAgICAgICAgaXRlbUVsZS5hcHBlbmRDaGlsZChhbGlnbkRpdlsyXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YmFyQWxpZ24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGl0ZW1FbGUsIENMU19UQkFSUE9TKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuY3RybFRlbXBsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY3RybFRlbSA9IHRoaXMudHJndEVsZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnRyZ3RFbGUsIENMU19JVEVNUyk7XG4gICAgICAgICAgICB0aGlzLnRiYXJFbGUgPSBbXTtcbiAgICAgICAgICAgIHZhciBpbm5lckVsZSA9IFtdLnNsaWNlLmNhbGwodGhpcy50cmd0RWxlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGlubmVyRWxlLmZvckVhY2goZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChlbGUudGFnTmFtZSA9PT0gJ0RJVicpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudGJhckVsZS5wdXNoKGVsZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkKGVsZSwgQ0xTX0lURU0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5yZW5kZXJJdGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgaXRlbUVsZURvbTtcbiAgICAgICAgICAgIHZhciBpbm5lckl0ZW07XG4gICAgICAgICAgICB2YXIgaW5uZXJQb3M7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICAgICAgaWYgKGVsZSAmJiBlbGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1FbGVEb20gPSBlbGUucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTVMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudHJndEVsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHJsVGVtcGxhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZSAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtRWxlRG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1FbGVEb20gPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfSVRFTVMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJJdGVtID0gdGhpcy5yZW5kZXJTdWJDb21wb25lbnQoaXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyRWxlLmluZGV4T2YoaW5uZXJJdGVtKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGJhckVsZS5wdXNoKGlubmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRiYXJBbGlnbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YmFySXRlbUFsaWduKGl0ZW1zW2ldLCBpdGVtRWxlRG9tLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbm5lclBvcyA9IGl0ZW1FbGVEb20ucXVlcnlTZWxlY3RvcignLmUtdG9vbGJhci0nICsgaXRlbXNbaV0uYWxpZ24udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbm5lclBvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YmFyQWxnRWxlWyhpdGVtc1tpXS5hbGlnbiArICdzJyldLnB1c2goaW5uZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyUG9zLmFwcGVuZENoaWxkKGlubmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRWxlRG9tLmFwcGVuZENoaWxkKGlubmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlLmFwcGVuZENoaWxkKGl0ZW1FbGVEb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5zZXRBdHRyID0gZnVuY3Rpb24gKGF0dHIsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBPYmplY3Qua2V5cyhhdHRyKTtcbiAgICAgICAgICAgIHZhciBrZXlWYWw7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGtleVZhbCA9IGtleVtpXTtcbiAgICAgICAgICAgICAgICBrZXlWYWwgPT09ICdjbGFzcycgPyB0aGlzLmFkZChlbGVtZW50LCBhdHRyW2tleVZhbF0pIDogZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5VmFsLCBhdHRyW2tleVZhbF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5lbmFibGVJdGVtcyA9IGZ1bmN0aW9uIChpdGVtcywgaXNFbmFibGUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGl0ZW1zO1xuICAgICAgICAgICAgdmFyIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGlzRW5hYmxlKSkge1xuICAgICAgICAgICAgICAgIGlzRW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlbmFibGUgPSBmdW5jdGlvbiAoaXNFbmFibGUsIGVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0VuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKENMU19ESVNBQkxFKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChsZW4gJiYgbGVuID4gMSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnRzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlKGlzRW5hYmxlLCBlbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpc0VuYWJsZSA/IGVqMl9iYXNlXzIucmVtb3ZlQ2xhc3MoZWxlbWVudHMsIENMU19ESVNBQkxFKSA6IGVqMl9iYXNlXzIuYWRkQ2xhc3MoZWxlbWVudHMsIENMU19ESVNBQkxFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbGUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgZWxlID0gKGxlbiAmJiBsZW4gPT09IDEpID8gZWxlbWVudHNbMF0gOiBpdGVtcztcbiAgICAgICAgICAgICAgICBlbmFibGUoaXNFbmFibGUsIGVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmFkZEl0ZW1zID0gZnVuY3Rpb24gKGl0ZW1zLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGlubmVySXRlbXM7XG4gICAgICAgICAgICB2YXIgaXRlbXNEaXYgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTVMpO1xuICAgICAgICAgICAgdmFyIGlubmVyRWxlO1xuICAgICAgICAgICAgdmFyIGl0ZW1BZ24gPSAnbGVmdCc7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGUuYWxpZ24pICYmIGUuYWxpZ24gIT09ICdsZWZ0JyAmJiBpdGVtQWduID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUFnbiA9IGUuYWxpZ247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGl0ZW1zXzEgPSBpdGVtczsgX2kgPCBpdGVtc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNfMVtfaV07XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoaXRlbS50eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPSAnQnV0dG9uJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5uZXJJdGVtcyA9IGVqMl9iYXNlXzMuc2VsZWN0QWxsKCcuJyArIENMU19JVEVNLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGl0ZW0uYWxpZ24gPSBpdGVtQWduO1xuICAgICAgICAgICAgICAgIGlubmVyRWxlID0gdGhpcy5yZW5kZXJTdWJDb21wb25lbnQoaXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGJhckVsZS5sZW5ndGggPj0gaW5kZXggJiYgaW5uZXJJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveU1vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxnSW5kZXggPSBpdGVtLmFsaWduWzBdID09PSAnbCcgPyAwIDogaXRlbS5hbGlnblswXSA9PT0gJ2MnID8gMSA6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlID0gZWoyX2Jhc2VfMi5jbG9zZXN0KGlubmVySXRlbXNbMF0sICcuJyArIENMU19JVEVNUykuY2hpbGRyZW5bYWxnSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlLmluc2VydEJlZm9yZShpbm5lckVsZSwgZWxlLmNoaWxkcmVuW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRiYXJBbGdFbGVbKGl0ZW0uYWxpZ24gKyAncycpXS5zcGxpY2UoaW5kZXgsIDAsIGlubmVyRWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFBvc2l0aW9uaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckl0ZW1zWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGlubmVyRWxlLCBpbm5lckl0ZW1zW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRiYXJFbGUuc3BsaWNlKGluZGV4LCAwLCBpbm5lckVsZSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0V2lkID0gaXRlbXNEaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbXNEaXYuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICAgIHRoaXMucmVuZGVyT3ZlcmZsb3dNb2RlKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnJlbW92ZUl0ZW1zID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGFyZ3M7XG4gICAgICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgICAgICB2YXIgaW5uZXJJdGVtcyA9IFtdLnNsaWNlLmNhbGwoZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX0lURU0sIHRoaXMuZWxlbWVudCkpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoZWxlbWVudHMpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoYXJncy50b1N0cmluZygpLCAxMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtQnlJbmRleChpbmRleCwgaW5uZXJJdGVtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gW10uc2xpY2UuY2FsbChlbGVtZW50cyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLnRiYXJFbGUuaW5kZXhPZihlbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtQnlJbmRleChpbmRleCwgaW5uZXJJdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckl0ZW1zID0gZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX0lURU0sIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGUgPSAoZWxlbWVudHMgJiYgZWxlbWVudHMubGVuZ3RoICYmIGVsZW1lbnRzLmxlbmd0aCA9PT0gMSkgPyBlbGVtZW50c1swXSA6IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaW5uZXJJdGVtcy5pbmRleE9mKGVsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbUJ5SW5kZXgoaW5kZXgsIGlubmVySXRlbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnJlbW92ZUl0ZW1CeUluZGV4ID0gZnVuY3Rpb24gKGluZGV4LCBpbm5lckl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YmFyRWxlW2luZGV4XSAmJiBpbm5lckl0ZW1zW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVJZHggPSB0aGlzLnRiYXJFbGUuaW5kZXhPZihpbm5lckl0ZW1zW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleEFnbiA9IHRoaXMudGJhckFsZ0VsZVsodGhpcy5pdGVtc1tlbGVJZHhdLmFsaWduICsgJ3MnKV0uaW5kZXhPZih0aGlzLnRiYXJFbGVbZWxlSWR4XSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGJhckFsZ0VsZVsodGhpcy5pdGVtc1tlbGVJZHhdLmFsaWduICsgJ3MnKV0uc3BsaWNlKGluZGV4QWduLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5kZXRhY2goaW5uZXJJdGVtc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGVsZUlkeCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YmFyRWxlLnNwbGljZShlbGVJZHgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS50ZW1wbGF0ZVJlbmRlciA9IGZ1bmN0aW9uICh0ZW1wbGF0ZVByb3AsIGlubmVyRWxlLCBpdGVtKSB7XG4gICAgICAgICAgICB2YXIgaXRlbVR5cGUgPSBpdGVtLnR5cGU7XG4gICAgICAgICAgICB2YXIgZWxlT2JqID0gdGVtcGxhdGVQcm9wO1xuICAgICAgICAgICAgdmFyIGlzQ29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGVtcGxhdGVQcm9wKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpc0NvbXBvbmVudCA9IHR5cGVvZiAoZWxlT2JqLmFwcGVuZFRvKSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRlbXBsYXRlUHJvcCkgPT09ICdzdHJpbmcnIHx8ICFpc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZUZuID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciB2YWwgPSB0ZW1wbGF0ZVByb3A7XG4gICAgICAgICAgICAgICAgdmFsID0gKHR5cGVvZiAodGVtcGxhdGVQcm9wKSA9PT0gJ3N0cmluZycpID8gdGVtcGxhdGVQcm9wLnRyaW0oKSA6IHRlbXBsYXRlUHJvcDtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh2YWwpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlRm4gPSBlajJfYmFzZV80LmNvbXBpbGUoZWxlLm91dGVySFRNTC50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5kZXRhY2goZWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUZuID0gZWoyX2Jhc2VfNC5jb21waWxlKHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0ZW1wQXJyYXkgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRlbXBsYXRlRm4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBBcnJheSA9IHRlbXBsYXRlRm4oe30sIHRoaXMsICd0ZW1wbGF0ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGVtcEFycmF5KSAmJiB0ZW1wQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBbXS5zbGljZS5jYWxsKHRlbXBBcnJheSkuZm9yRWFjaChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoZWxlLnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRWxlLmFwcGVuZENoaWxkKGVsZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW1UeXBlID09PSAnSW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZSA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpdGVtLmlkID8gKGVsZS5pZCA9IGl0ZW0uaWQpIDogKGVsZS5pZCA9IGVqMl9iYXNlXzQuZ2V0VW5pcXVlSUQoJ3Rici1pcHQnKSk7XG4gICAgICAgICAgICAgICAgaW5uZXJFbGUuYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICAgICAgICAgICAgICBlbGVPYmouYXBwZW5kVG8oZWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkKGlubmVyRWxlLCBDTFNfVEVNUExBVEUpO1xuICAgICAgICAgICAgdGhpcy50YmFyRWxlLnB1c2goaW5uZXJFbGUpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5idXR0b25SZW5kZXJpbmcgPSBmdW5jdGlvbiAoaXRlbSwgaW5uZXJFbGUpIHtcbiAgICAgICAgICAgIHZhciBkb20gPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3NOYW1lOiBDTFNfVEJBUkJUTiB9KTtcbiAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICB2YXIgdGV4dFN0ciA9IGl0ZW0udGV4dDtcbiAgICAgICAgICAgIHZhciBpY29uQ3NzO1xuICAgICAgICAgICAgdmFyIGljb25Qb3M7XG4gICAgICAgICAgICBpdGVtLmlkID8gKGRvbS5pZCA9IGl0ZW0uaWQpIDogZG9tLmlkID0gZWoyX2Jhc2VfNC5nZXRVbmlxdWVJRCgnZS10YnItYnRuJyk7XG4gICAgICAgICAgICB2YXIgYnRuVHh0ID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ2UtdGJhci1idG4tdGV4dCcgfSk7XG4gICAgICAgICAgICBpZiAodGV4dFN0cikge1xuICAgICAgICAgICAgICAgIGJ0blR4dC5pbm5lckhUTUwgPSB0ZXh0U3RyO1xuICAgICAgICAgICAgICAgIGRvbS5hcHBlbmRDaGlsZChidG5UeHQpO1xuICAgICAgICAgICAgICAgIGRvbS5jbGFzc0xpc3QuYWRkKCdlLXRidG4tdHh0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChpbm5lckVsZSwgJ2UtdGJ0bi1hbGlnbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0ucHJlZml4SWNvbiB8fCBpdGVtLnN1ZmZpeEljb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoKGl0ZW0ucHJlZml4SWNvbiAmJiBpdGVtLnN1ZmZpeEljb24pIHx8IGl0ZW0ucHJlZml4SWNvbikge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ3NzID0gaXRlbS5wcmVmaXhJY29uICsgJyBlLWljb25zJztcbiAgICAgICAgICAgICAgICAgICAgaWNvblBvcyA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25Dc3MgPSBpdGVtLnN1ZmZpeEljb24gKyAnIGUtaWNvbnMnO1xuICAgICAgICAgICAgICAgICAgICBpY29uUG9zID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXcgZWoyX2J1dHRvbnNfMS5CdXR0b24oeyBpY29uQ3NzOiBpY29uQ3NzLCBpY29uUG9zaXRpb246IGljb25Qb3MgfSwgZG9tKTtcbiAgICAgICAgICAgIGlmIChpdGVtLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZShkb20sIHsgJ3dpZHRoJzogZWoyX2Jhc2VfNC5mb3JtYXRVbml0KGl0ZW0ud2lkdGgpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucmVuZGVyU3ViQ29tcG9uZW50ID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBpbm5lckVsZTtcbiAgICAgICAgICAgIHZhciBkb207XG4gICAgICAgICAgICBpbm5lckVsZSA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19JVEVNIH0pO1xuICAgICAgICAgICAgaW5uZXJFbGUuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGJhckVsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGJhckVsZSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uaHRtbEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHIoaXRlbS5odG1sQXR0cmlidXRlcywgaW5uZXJFbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0udG9vbHRpcFRleHQpIHtcbiAgICAgICAgICAgICAgICBpbm5lckVsZS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgaXRlbS50b29sdGlwVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5jc3NDbGFzcykge1xuICAgICAgICAgICAgICAgIGlubmVyRWxlLmNsYXNzTmFtZSA9IGlubmVyRWxlLmNsYXNzTmFtZSArICcgJyArIGl0ZW0uY3NzQ2xhc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGVSZW5kZXIoaXRlbS50ZW1wbGF0ZSwgaW5uZXJFbGUsIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQnV0dG9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbSA9IHRoaXMuYnV0dG9uUmVuZGVyaW5nKGl0ZW0sIGlubmVyRWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckVsZS5hcHBlbmRDaGlsZChkb20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJFbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLml0ZW1DbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdTZXBhcmF0b3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQoaW5uZXJFbGUsIENMU19TRVBBUkFUT1IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uc2hvd1RleHRPbikge1xuICAgICAgICAgICAgICAgIHZhciBzVHh0ID0gaXRlbS5zaG93VGV4dE9uO1xuICAgICAgICAgICAgICAgIGlmIChzVHh0ID09PSAnVG9vbGJhcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQoaW5uZXJFbGUsIENMU19QT1BVUFRFWFQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZChpbm5lckVsZSwgJ2UtdGJ0bi1hbGlnbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzVHh0ID09PSAnT3ZlcmZsb3cnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKGlubmVyRWxlLCBDTFNfVEJBUlRFWFQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLm92ZXJmbG93KSB7XG4gICAgICAgICAgICAgICAgdmFyIG92ZXJmbG93ID0gaXRlbS5vdmVyZmxvdztcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmZsb3cgPT09ICdTaG93Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZChpbm5lckVsZSwgQ0xTX1RCQVJPVkVSRkxPVyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG92ZXJmbG93ID09PSAnSGlkZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbm5lckVsZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1NFUEFSQVRPUikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKGlubmVyRWxlLCBDTFNfUE9QT1ZFUkZMT1cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlubmVyRWxlO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5pdGVtQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbGVTd2l0Y2goZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuYWN0aXZlRWxlU3dpdGNoID0gZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbGVSZW1vdmUoZWxlLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRWxlLmZvY3VzKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmFjdGl2ZUVsZVJlbW92ZSA9IGZ1bmN0aW9uIChjdXJFbGUpIHtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLmFjdGl2ZUVsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUVsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUVsZSA9IGN1ckVsZTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudHJndEVsZSkgJiYgIWN1ckVsZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEVNUExBVEUpKSB7XG4gICAgICAgICAgICAgICAgY3VyRWxlLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlRWxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5nZXRQZXJzaXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE9uUGVyc2lzdChbXSk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmdldE1vZHVsZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Rvb2xiYXInO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgdGhpcy50YlJlc2l6ZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1Qb3NpdGlvbmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucG9wT2JqKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BPYmouaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNoZWNrT3ZlcmZsb3cgPSB0aGlzLmNoZWNrT3ZlcmZsb3coZWxlLCBlbGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShDTFNfSVRFTVMpWzBdKTtcbiAgICAgICAgICAgIGlmICghY2hlY2tPdmVyZmxvdykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUhTY3JvbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGVja092ZXJmbG93ICYmIHRoaXMuc2Nyb2xsTW9kdWxlICYmICh0aGlzLm9mZnNldFdpZCA9PT0gZWxlLm9mZnNldFdpZHRoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9mZnNldFdpZCA+IGVsZS5vZmZzZXRXaWR0aCB8fCBjaGVja092ZXJmbG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJPdmVyZmxvd01vZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvcE9iaikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRiYXJBbGlnbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVBvc2l0aW9uaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBSZWZyZXNoKHRoaXMucG9wT2JqLmVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoUG9zaXRpb25pbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9mZnNldFdpZCA9IGVsZS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMudGJSZXNpemUgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUub25Qcm9wZXJ0eUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3UHJvcCwgb2xkUHJvcCkge1xuICAgICAgICAgICAgdmFyIHRFbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobmV3UHJvcCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW1zJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveU1vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUl0ZW1zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckl0ZW1zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck92ZXJmbG93TW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dpZHRoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3aWQgPSB0RWxlLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZSh0RWxlLCB7ICd3aWR0aCc6IGVqMl9iYXNlXzQuZm9ybWF0VW5pdChuZXdQcm9wLndpZHRoKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyT3ZlcmZsb3dNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3BPYmogJiYgd2lkIDwgdEVsZS5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBSZWZyZXNoKHRoaXMucG9wT2JqLmVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdoZWlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQsIHsgJ2hlaWdodCc6IGVqMl9iYXNlXzQuZm9ybWF0VW5pdChuZXdQcm9wLmhlaWdodCkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3ZlcmZsb3dNb2RlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveU1vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyT3ZlcmZsb3dNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmFibGVSdGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZCh0RWxlLCBDTFNfUlRMKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVSdGwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcC5lbmFibGVSdGwgPyB0aGlzLmFkZCh0RWxlLCBDTFNfUlRMKSA6IHRoaXMucmVtb3ZlKHRFbGUsIENMU19SVEwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuc2Nyb2xsTW9kdWxlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3AuZW5hYmxlUnRsID8gdGhpcy5hZGQodGhpcy5zY3JvbGxNb2R1bGUuZWxlbWVudCwgQ0xTX1JUTCkgOiB0aGlzLnJlbW92ZSh0aGlzLnNjcm9sbE1vZHVsZS5lbGVtZW50LCBDTFNfUlRMKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLnBvcE9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9wLmVuYWJsZVJ0bCA/IHRoaXMuYWRkKHRoaXMucG9wT2JqLmVsZW1lbnQsIENMU19SVEwpIDogdGhpcy5yZW1vdmUodGhpcy5wb3BPYmouZWxlbWVudCwgQ0xTX1JUTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1Qb3NpdGlvbmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVG9vbGJhcjtcbiAgICB9KGVqMl9iYXNlXzEuQ29tcG9uZW50KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzQuQ29sbGVjdGlvbihbXSwgSXRlbSlcbiAgICBdLCBUb29sYmFyLnByb3RvdHlwZSwgXCJpdGVtc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdhdXRvJylcbiAgICBdLCBUb29sYmFyLnByb3RvdHlwZSwgXCJ3aWR0aFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdhdXRvJylcbiAgICBdLCBUb29sYmFyLnByb3RvdHlwZSwgXCJoZWlnaHRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnU2Nyb2xsYWJsZScpXG4gICAgXSwgVG9vbGJhci5wcm90b3R5cGUsIFwib3ZlcmZsb3dNb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgVG9vbGJhci5wcm90b3R5cGUsIFwiZW5hYmxlUnRsXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIFRvb2xiYXIucHJvdG90eXBlLCBcImNsaWNrZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgVG9vbGJhci5wcm90b3R5cGUsIFwiY3JlYXRlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBUb29sYmFyLnByb3RvdHlwZSwgXCJkZXN0cm95ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgVG9vbGJhci5wcm90b3R5cGUsIFwiYmVmb3JlQ3JlYXRlXCIsIHZvaWQgMCk7XG4gICAgVG9vbGJhciA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV81Lk5vdGlmeVByb3BlcnR5Q2hhbmdlc1xuICAgIF0sIFRvb2xiYXIpO1xuICAgIGV4cG9ydHMuVG9vbGJhciA9IFRvb2xiYXI7XG4gICAgZXhwb3J0cy50b29sYmFyQnVpbGRlciA9IGVqMl9iYXNlXzUuQ3JlYXRlQnVpbGRlcihUb29sYmFyKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdG9vbGJhci90b29sYmFyLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItcG9wdXBzXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1idXR0b25zXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9hY2NvcmRpb25cIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBhY2NvcmRpb25fMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQoYWNjb3JkaW9uXzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY2NvcmRpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBlajJfYmFzZV8xLCBlajJfYmFzZV8yLCBlajJfYmFzZV8zLCBlajJfYmFzZV80LCBlajJfYmFzZV81LCBlajJfYmFzZV82KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBDTFNfQUNSRE5fUk9PVCA9ICdlLWFjcmRuLXJvb3QnO1xuICAgIHZhciBDTFNfUk9PVCA9ICdlLWFjY29yZGlvbic7XG4gICAgdmFyIENMU19JVEVNID0gJ2UtYWNyZG4taXRlbSc7XG4gICAgdmFyIENMU19JVEVNRk9DVVMgPSAnZS1pdGVtLWZvY3VzJztcbiAgICB2YXIgQ0xTX0lURU1ISURFID0gJ2UtaGlkZSc7XG4gICAgdmFyIENMU19IRUFERVIgPSAnZS1hY3Jkbi1oZWFkZXInO1xuICAgIHZhciBDTFNfSEVBREVSSUNOID0gJ2UtYWNyZG4taGVhZGVyLWljb24nO1xuICAgIHZhciBDTFNfSEVBREVSQ1ROID0gJ2UtYWNyZG4taGVhZGVyLWNvbnRlbnQnO1xuICAgIHZhciBDTFNfQ09OVEVOVCA9ICdlLWFjcmRuLXBhbmVsJztcbiAgICB2YXIgQ0xTX0NURU5UID0gJ2UtY29udGVudCc7XG4gICAgdmFyIENMU19UT09HTEVJQ04gPSAnZS10b2dnbGUtaWNvbic7XG4gICAgdmFyIENMU19DT0xMQVBTRUlDTiA9ICdlLXRnbC1jb2xsYXBzZS1pY29uIGUtaWNvbnMnO1xuICAgIHZhciBDTFNfRVhQQU5ESUNOID0gJ2UtZXhwYW5kLWljb24nO1xuICAgIHZhciBDTFNfUlRMID0gJ2UtcnRsJztcbiAgICB2YXIgQ0xTX0NUTkhJREUgPSAnZS1jb250ZW50LWhpZGUnO1xuICAgIHZhciBDTFNfU0xDVCA9ICdlLXNlbGVjdCc7XG4gICAgdmFyIENMU19TTENURUQgPSAnZS1zZWxlY3RlZCc7XG4gICAgdmFyIENMU19BQ1RJVkUgPSAnZS1hY3RpdmUnO1xuICAgIHZhciBDTFNfQU5JTUFURSA9ICdlLWFuaW1hdGUnO1xuICAgIHZhciBDTFNfRElTQUJMRSA9ICdlLW92ZXJsYXknO1xuICAgIHZhciBDTFNfVE9HQU5JTUFURSA9ICdlLXRvZ2dsZS1hbmltYXRpb24nO1xuICAgIHZhciBDTFNfTkVTVCA9ICdlLW5lc3RlZCc7XG4gICAgdmFyIENMU19FWFBBTkRTVEFURSA9ICdlLWV4cGFuZC1zdGF0ZSc7XG4gICAgdmFyIEFjY29yZGlvbkFjdGlvblNldHRpbmdzID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEFjY29yZGlvbkFjdGlvblNldHRpbmdzLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBBY2NvcmRpb25BY3Rpb25TZXR0aW5ncygpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQWNjb3JkaW9uQWN0aW9uU2V0dGluZ3M7XG4gICAgfShlajJfYmFzZV80LkNoaWxkUHJvcGVydHkpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnU2xpZGVEb3duJylcbiAgICBdLCBBY2NvcmRpb25BY3Rpb25TZXR0aW5ncy5wcm90b3R5cGUsIFwiZWZmZWN0XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoNDAwKVxuICAgIF0sIEFjY29yZGlvbkFjdGlvblNldHRpbmdzLnByb3RvdHlwZSwgXCJkdXJhdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdsaW5lYXInKVxuICAgIF0sIEFjY29yZGlvbkFjdGlvblNldHRpbmdzLnByb3RvdHlwZSwgXCJlYXNpbmdcIiwgdm9pZCAwKTtcbiAgICBleHBvcnRzLkFjY29yZGlvbkFjdGlvblNldHRpbmdzID0gQWNjb3JkaW9uQWN0aW9uU2V0dGluZ3M7XG4gICAgdmFyIEFjY29yZGlvbkFuaW1hdGlvblNldHRpbmdzID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEFjY29yZGlvbkFuaW1hdGlvblNldHRpbmdzLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBBY2NvcmRpb25BbmltYXRpb25TZXR0aW5ncygpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQWNjb3JkaW9uQW5pbWF0aW9uU2V0dGluZ3M7XG4gICAgfShlajJfYmFzZV80LkNoaWxkUHJvcGVydHkpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfNS5Db21wbGV4KHsgZWZmZWN0OiAnU2xpZGVVcCcsIGR1cmF0aW9uOiA0MDAsIGVhc2luZzogJ2xpbmVhcicgfSwgQWNjb3JkaW9uQWN0aW9uU2V0dGluZ3MpXG4gICAgXSwgQWNjb3JkaW9uQW5pbWF0aW9uU2V0dGluZ3MucHJvdG90eXBlLCBcImNvbGxhcHNlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzUuQ29tcGxleCh7IGVmZmVjdDogJ1NsaWRlRG93bicsIGR1cmF0aW9uOiA0MDAsIGVhc2luZzogJ2xpbmVhcicgfSwgQWNjb3JkaW9uQWN0aW9uU2V0dGluZ3MpXG4gICAgXSwgQWNjb3JkaW9uQW5pbWF0aW9uU2V0dGluZ3MucHJvdG90eXBlLCBcImV4cGFuZFwiLCB2b2lkIDApO1xuICAgIGV4cG9ydHMuQWNjb3JkaW9uQW5pbWF0aW9uU2V0dGluZ3MgPSBBY2NvcmRpb25BbmltYXRpb25TZXR0aW5ncztcbiAgICB2YXIgQWNjb3JkaW9uSXRlbSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhBY2NvcmRpb25JdGVtLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBBY2NvcmRpb25JdGVtKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBY2NvcmRpb25JdGVtO1xuICAgIH0oZWoyX2Jhc2VfNC5DaGlsZFByb3BlcnR5KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkodW5kZWZpbmVkKVxuICAgIF0sIEFjY29yZGlvbkl0ZW0ucHJvdG90eXBlLCBcImNvbnRlbnRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSh1bmRlZmluZWQpXG4gICAgXSwgQWNjb3JkaW9uSXRlbS5wcm90b3R5cGUsIFwiaGVhZGVyXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkodW5kZWZpbmVkKVxuICAgIF0sIEFjY29yZGlvbkl0ZW0ucHJvdG90eXBlLCBcImNzc0NsYXNzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkodW5kZWZpbmVkKVxuICAgIF0sIEFjY29yZGlvbkl0ZW0ucHJvdG90eXBlLCBcImljb25Dc3NcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBBY2NvcmRpb25JdGVtLnByb3RvdHlwZSwgXCJleHBhbmRlZFwiLCB2b2lkIDApO1xuICAgIGV4cG9ydHMuQWNjb3JkaW9uSXRlbSA9IEFjY29yZGlvbkl0ZW07XG4gICAgdmFyIEFjY29yZGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhBY2NvcmRpb24sIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEFjY29yZGlvbihvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBlbGVtZW50KSB8fCB0aGlzO1xuICAgICAgICAgICAgX3RoaXMua2V5Q29uZmlncyA9IHtcbiAgICAgICAgICAgICAgICBtb3ZlVXA6ICd1cGFycm93JyxcbiAgICAgICAgICAgICAgICBtb3ZlRG93bjogJ2Rvd25hcnJvdycsXG4gICAgICAgICAgICAgICAgZW50ZXI6ICdlbnRlcicsXG4gICAgICAgICAgICAgICAgc3BhY2U6ICdzcGFjZScsXG4gICAgICAgICAgICAgICAgaG9tZTogJ2hvbWUnLFxuICAgICAgICAgICAgICAgIGVuZDogJ2VuZCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnVud2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy5pc0Rlc3Ryb3kgPSB0cnVlO1xuICAgICAgICAgICAgd2hpbGUgKGVsZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZWxlLnJlbW92ZUNoaWxkKGVsZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnRyZ3RFbGUpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5jdHJsVGVtLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLmFwcGVuZENoaWxkKHRoaXMuY3RybFRlbS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgWydhcmlhLWRpc2FibGVkJywgJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJywgJ3JvbGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyYikge1xuICAgICAgICAgICAgICAgIF90aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLnByZVJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuZXN0ZWQgPSBlajJfYmFzZV8zLmNsb3Nlc3QodGhpcy5lbGVtZW50LCAnLicgKyBDTFNfQ09OVEVOVCk7XG4gICAgICAgICAgICB0aGlzLmlzTmVzdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNEZXN0cm95KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Rlc3Ryb3kgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChuZXN0ZWQpKSB7XG4gICAgICAgICAgICAgICAgbmVzdGVkLmNsYXNzTGlzdC5hZGQoQ0xTX05FU1QpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNOZXN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xTX0FDUkROX1JPT1QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlUnRsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5lbGVtZW50LCBDTFNfUlRMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRJdGVtcyA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGUsIHZhbCkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQodmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlLCB2YWwpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKHZhbCk7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckNvbnRyb2woKTtcbiAgICAgICAgICAgIHRoaXMud2lyZUV2ZW50cygpO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBlajJfYmFzZV82LmZvcm1hdFVuaXQodGhpcy53aWR0aCk7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gZWoyX2Jhc2VfNi5mb3JtYXRVbml0KHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzUuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5lbGVtZW50LCB7ICd3aWR0aCc6IHdpZHRoLCAnaGVpZ2h0JzogaGVpZ2h0IH0pO1xuICAgICAgICAgICAgdmFyIGFyaWFBdHRyID0ge1xuICAgICAgICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogJ2ZhbHNlJywgJ3JvbGUnOiAncHJlc2VudGF0aW9uJywgJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJzogJ3RydWUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RXhwYW5kID0gdGhpcy5leHBhbmRlZEl0ZW1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfMy5hdHRyaWJ1dGVzKHRoaXMuZWxlbWVudCwgYXJpYUF0dHIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwYW5kTW9kZSA9PT0gJ1NpbmdsZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW11bHRpc2VsZWN0YWJsZScsICdmYWxzZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLnJlbmRlckNvbnRyb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRyZ3RFbGUgPSAodGhpcy5lbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApID8gZWoyX2Jhc2VfMy5zZWxlY3QoJ2RpdicsIHRoaXMuZWxlbWVudCkgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJJdGVtcygpO1xuICAgICAgICAgICAgdGhpcy5pbml0SXRlbUV4cGFuZCgpO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLnVud2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZCh0aGlzLmtleU1vZHVsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleU1vZHVsZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUud2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc05lc3RlZCAmJiAhdGhpcy5pc0Rlc3Ryb3kpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLnJpcHBsZUVmZmVjdCh0aGlzLmVsZW1lbnQsIHsgc2VsZWN0b3I6ICcuJyArIENMU19IRUFERVIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNOZXN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleU1vZHVsZSA9IG5ldyBlajJfYmFzZV8xLktleWJvYXJkRXZlbnRzKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICBrZXlBY3Rpb246IHRoaXMua2V5QWN0aW9uSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBrZXlDb25maWdzOiB0aGlzLmtleUNvbmZpZ3MsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2tleWRvd24nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuZm9jdXNJbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xTX0lURU1GT0NVUyk7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuZm9jdXNPdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMU19JVEVNRk9DVVMpO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmN0cmxUZW1wbGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmN0cmxUZW0gPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgdmFyIGlubmVyRWxlcyA9IHRoaXMuZWxlbWVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5hZGRDbGFzcyhpbm5lckVsZXMsIFtDTFNfSVRFTV0pO1xuICAgICAgICAgICAgW10uc2xpY2UuY2FsbChpbm5lckVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgZWwuaWQgPSBlajJfYmFzZV8yLmdldFVuaXF1ZUlEKCdhY3Jkbl9pdGVtJyk7XG4gICAgICAgICAgICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkKGVsLmNoaWxkcmVuWzBdLCBDTFNfSEVBREVSKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlYWRlciA9IGVsLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXMoaGVhZGVyLCB7ICd0YWJpbmRleCc6ICcwJywgJ3JvbGUnOiAnaGVhZGluZycsICdhcmlhLWxldmVsJzogaW5uZXJFbGVzLmxlbmd0aC50b1N0cmluZygpIH0pO1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIuaWQgPSBlajJfYmFzZV8yLmdldFVuaXF1ZUlEKCdhY3Jkbl9oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKGhlYWRlciwgJ2ZvY3VzJywgX3RoaXMuZm9jdXNJbiwgX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQoaGVhZGVyLCAnYmx1cicsIF90aGlzLmZvY3VzT3V0LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWFkZXJFbGUgPSBoZWFkZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWFkZXJFbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckVsZS5jbGFzc0xpc3QuYWRkKENMU19IRUFERVJDVE4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBlbC5jaGlsZHJlblsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaWQgPSBlajJfYmFzZV8yLmdldFVuaXF1ZUlEKCdhY3Jkbl9wYW5lbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIGNvbnRlbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKENMU19TTENUKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNoaWxkcmVuWzBdLmFwcGVuZENoaWxkKF90aGlzLnRvZ2dsZUljb25HZW5lcmF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuY2xhc3NMaXN0KGNvbnRlbnQsIFtDTFNfQ09OVEVOVCwgQ0xTX0NUTkhJREVdLCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXMoY29udGVudCwgeyAnYXJpYS1sYWJlbGxlZGJ5JzogaGVhZGVyLmlkLCAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKENMU19DVEVOVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS50b2dnbGVJY29uR2VuZXJhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGdsSWNvbiA9IGVqMl9iYXNlXzUuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19UT09HTEVJQ04gfSk7XG4gICAgICAgICAgICB2YXIgaGRyQ29sSWNvbiA9IGVqMl9iYXNlXzUuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBDTFNfQ09MTEFQU0VJQ04gfSk7XG4gICAgICAgICAgICB0Z2xJY29uLmFwcGVuZENoaWxkKGhkckNvbEljb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRnbEljb247XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuaW5pdEl0ZW1FeHBhbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGVuID0gdGhpcy5pbml0RXhwYW5kLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5leHBhbmRNb2RlID09PSAnU2luZ2xlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kSXRlbSh0cnVlLCB0aGlzLmluaXRFeHBhbmRbbGVuIC0gMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEl0ZW0odHJ1ZSwgdGhpcy5pbml0RXhwYW5kW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUucmVuZGVySXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBpbm5lckl0ZW07XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZCh0aGlzLmluaXRFeHBhbmQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RXhwYW5kID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudHJndEVsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0cmxUZW1wbGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWxlICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpbm5lckl0ZW0gPSBfdGhpcy5yZW5kZXJJbm5lckl0ZW0oaXRlbSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBlbGUuYXBwZW5kQ2hpbGQoaW5uZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVySXRlbS5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZChpbm5lckl0ZW0ucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSEVBREVSKSwgJ2ZvY3VzJywgX3RoaXMuZm9jdXNJbiwgX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKGlubmVySXRlbS5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19IRUFERVIpLCAnYmx1cicsIF90aGlzLmZvY3VzT3V0LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciB0cmd0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmdzID0ge307XG4gICAgICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgICAgICB2YXIgdGdsSWNvbjtcbiAgICAgICAgICAgIHZhciBhY3JkRWxlID0gZWoyX2Jhc2VfMy5jbG9zZXN0KHRyZ3QsICcuJyArIENMU19ST09UKTtcbiAgICAgICAgICAgIGlmIChhY3JkRWxlICE9PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmd0LmNsYXNzTGlzdC5hZGQoJ2UtdGFyZ2V0Jyk7XG4gICAgICAgICAgICB2YXIgYWNyZG5JdGVtID0gZWoyX2Jhc2VfMy5jbG9zZXN0KHRyZ3QsICcuJyArIENMU19JVEVNKTtcbiAgICAgICAgICAgIHZhciBhY3JkbkhkciA9IGVqMl9iYXNlXzMuY2xvc2VzdCh0cmd0LCAnLicgKyBDTFNfSEVBREVSKTtcbiAgICAgICAgICAgIHZhciBhY3JkbkN0biA9IGVqMl9iYXNlXzMuY2xvc2VzdCh0cmd0LCAnLicgKyBDTFNfQ09OVEVOVCk7XG4gICAgICAgICAgICBpZiAoYWNyZG5JdGVtICYmIChlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGFjcmRuSGRyKSB8fCBlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGFjcmRuQ3RuKSkpIHtcbiAgICAgICAgICAgICAgICBhY3JkbkhkciA9IGFjcmRuSXRlbS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICBhY3JkbkN0biA9IGFjcmRuSXRlbS5jaGlsZHJlblsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Jkbkhkcikge1xuICAgICAgICAgICAgICAgIHRnbEljb24gPSBlajJfYmFzZV8zLnNlbGVjdCgnLicgKyBDTFNfVE9PR0xFSUNOLCBhY3Jkbkhkcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWNyZG5DdG5JdGVtO1xuICAgICAgICAgICAgaWYgKGFjcmRuQ3RuKSB7XG4gICAgICAgICAgICAgICAgYWNyZG5DdG5JdGVtID0gZWoyX2Jhc2VfMy5jbG9zZXN0KGFjcmRuQ3RuLCAnLicgKyBDTFNfSVRFTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWNyZEFjdGl2ZSA9IFtdO1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmdldEluZGV4QnlJdGVtKGFjcmRuSXRlbSk7XG4gICAgICAgICAgICBpZiAoYWNyZG5DdG5JdGVtKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRBcmdzLml0ZW0gPSB0aGlzLml0ZW1zW3RoaXMuZ2V0SW5kZXhCeUl0ZW0oYWNyZG5DdG5JdGVtKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudEFyZ3Mub3JpZ2luYWxFdmVudCA9IGU7XG4gICAgICAgICAgICB2YXIgY3RuQ2hlY2sgPSAhZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZCh0Z2xJY29uKSAmJiBlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudHJndEVsZSkgJiYgYWNyZG5JdGVtLmNoaWxkRWxlbWVudENvdW50IDw9IDE7XG4gICAgICAgICAgICBpZiAoY3RuQ2hlY2sgJiYgKGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoYWNyZG5DdG4pIHx8ICFlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGVqMl9iYXNlXzMuc2VsZWN0KCcuJyArIENMU19IRUFERVIgKyAnIC4nICsgQ0xTX1RPT0dMRUlDTiwgYWNyZG5DdG5JdGVtKSkpKSB7XG4gICAgICAgICAgICAgICAgYWNyZG5JdGVtLmFwcGVuZENoaWxkKHRoaXMuY29udGVudFJlbmRlcmluZyhpbmRleCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXJpYUF0dHJVcGRhdGUoYWNyZG5JdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2tlZCcsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICB2YXIgY250Y2xrQ2hlY2sgPSAoYWNyZG5DdG4gJiYgIWVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoZWoyX2Jhc2VfMy5zZWxlY3QoJy5lLXRhcmdldCcsIGFjcmRuQ3RuKSkpO1xuICAgICAgICAgICAgY250Y2xrQ2hlY2sgPSBjbnRjbGtDaGVjayAmJiAoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChlajJfYmFzZV8zLnNlbGVjdCgnLicgKyBDTFNfUk9PVCwgYWNyZG5DdG4pKSB8fCAhKGVqMl9iYXNlXzMuY2xvc2VzdCh0cmd0LCAnLicgKyBDTFNfUk9PVCkgPT09IHRoaXMuZWxlbWVudCkpO1xuICAgICAgICAgICAgdHJndC5jbGFzc0xpc3QucmVtb3ZlKCdlLXRhcmdldCcpO1xuICAgICAgICAgICAgaWYgKHRyZ3QuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19DT05URU5UKSB8fCB0cmd0LmNsYXNzTGlzdC5jb250YWlucyhDTFNfQ1RFTlQpIHx8IGNudGNsa0NoZWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW10uc2xpY2UuY2FsbCh0aGlzLmVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfQUNUSVZFKSkge1xuICAgICAgICAgICAgICAgICAgICBhY3JkQWN0aXZlLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGFjcmRBbmlFbGUgPSBbXS5zbGljZS5jYWxsKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIENMU19JVEVNICsgJyBbJyArIENMU19BTklNQVRFICsgJ10nKSk7XG4gICAgICAgICAgICBpZiAoYWNyZEFuaUVsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBhY3JkQW5pRWxlXzEgPSBhY3JkQW5pRWxlOyBfaSA8IGFjcmRBbmlFbGVfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gYWNyZEFuaUVsZV8xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgYWNyZEFjdGl2ZS5wdXNoKGVsLnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzYW1lQ29udGVudENoZWNrID0gYWNyZEFjdGl2ZS5pbmRleE9mKGFjcmRuQ3RuSXRlbSkgIT09IC0xICYmIGFjcmRuQ3RuLmdldEF0dHJpYnV0ZSgnZS1hbmltYXRlJykgPT09ICd0cnVlJztcbiAgICAgICAgICAgIHZhciBzYW1lSGVhZGVyID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoYWNyZG5JdGVtKSAmJiAhZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChhY3JkbkhkcikpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWNyZG5DdG5fMSA9IGVqMl9iYXNlXzMuc2VsZWN0KCcuJyArIENMU19DT05URU5ULCBhY3Jkbkl0ZW0pO1xuICAgICAgICAgICAgICAgIHZhciBhY3JkblJvb3QgPSBlajJfYmFzZV8zLmNsb3Nlc3QoYWNyZG5JdGVtLCAnLicgKyBDTFNfQUNSRE5fUk9PVCk7XG4gICAgICAgICAgICAgICAgdmFyIGV4cGFuZFN0YXRlID0gYWNyZG5Sb290LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0VYUEFORFNUQVRFKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChhY3JkbkN0bl8xKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNhbWVIZWFkZXIgPSAoZXhwYW5kU3RhdGUgPT09IGFjcmRuSXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzMuaXNWaXNpYmxlKGFjcmRuQ3RuXzEpICYmICghc2FtZUNvbnRlbnRDaGVjayB8fCBhY3JkbkN0bkl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMU19TTENURUQpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlKGFjcmRuQ3RuXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChhY3JkQWN0aXZlLmxlbmd0aCA+IDApICYmIHRoaXMuZXhwYW5kTW9kZSA9PT0gJ1NpbmdsZScgJiYgIXNhbWVDb250ZW50Q2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjcmRBY3RpdmUuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb2xsYXBzZShlajJfYmFzZV8zLnNlbGVjdCgnLicgKyBDTFNfQ09OVEVOVCwgZWwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKENMU19FWFBBTkRTVEFURSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZChhY3JkbkN0bl8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGV4cGFuZFN0YXRlKSAmJiAhc2FtZUhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRTdGF0ZS5jbGFzc0xpc3QucmVtb3ZlKENMU19FWFBBTkRTVEFURSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmVsZU1vdmVGb2N1cyA9IGZ1bmN0aW9uIChhY3Rpb24sIHJvb3QsIHRyZ3QpIHtcbiAgICAgICAgICAgIHZhciBjbHN0O1xuICAgICAgICAgICAgdmFyIGNsc3RJdGVtID0gZWoyX2Jhc2VfMy5jbG9zZXN0KHRyZ3QsICcuJyArIENMU19JVEVNKTtcbiAgICAgICAgICAgIGlmICh0cmd0ID09PSByb290KSB7XG4gICAgICAgICAgICAgICAgY2xzdCA9ICgoYWN0aW9uID09PSAnbW92ZVVwJyA/IHRyZ3QubGFzdEVsZW1lbnRDaGlsZCA6IHRyZ3QpLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0hFQURFUikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHJndC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0hFQURFUikpIHtcbiAgICAgICAgICAgICAgICBjbHN0SXRlbSA9IChhY3Rpb24gPT09ICdtb3ZlVXAnID8gY2xzdEl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZyA6IGNsc3RJdGVtLm5leHRFbGVtZW50U2libGluZyk7XG4gICAgICAgICAgICAgICAgaWYgKGNsc3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsc3QgPSBlajJfYmFzZV8zLnNlbGVjdCgnLicgKyBDTFNfSEVBREVSLCBjbHN0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNsc3QpIHtcbiAgICAgICAgICAgICAgICBjbHN0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUua2V5QWN0aW9uSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgY2xzdDtcbiAgICAgICAgICAgIHZhciByb290ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIHRyZ3QgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgICAgc3dpdGNoIChlLmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vdmVVcCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlTW92ZUZvY3VzKGUuYWN0aW9uLCByb290LCB0cmd0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZURvd24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZU1vdmVGb2N1cyhlLmFjdGlvbiwgcm9vdCwgdHJndCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NwYWNlJzpcbiAgICAgICAgICAgICAgICBjYXNlICdlbnRlcic6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB0cmd0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGNvbnRlbnQpICYmIGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19DT05URU5UKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdlLWFuaW1hdGUnKSAhPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJndC5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJndC5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgIGNsc3QgPSBlLmFjdGlvbiA9PT0gJ2hvbWUnID8gcm9vdC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlblswXSA6IHJvb3QubGFzdEVsZW1lbnRDaGlsZC5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICAgICAgY2xzdC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5oZWFkZXJFbGVHZW5lcmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSBlajJfYmFzZV81LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfSEVBREVSLCBpZDogZWoyX2Jhc2VfMi5nZXRVbmlxdWVJRCgnYWNyZG5faGVhZGVyJykgfSk7XG4gICAgICAgICAgICB2YXIgYXJpYUF0dHIgPSB7XG4gICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnLCAncm9sZSc6ICdoZWFkaW5nJywgJ2FyaWEtZXhwYW5kZWQnOiAnZmFsc2UnLCAnYXJpYS1zZWxlY3RlZCc6ICdmYWxzZScsXG4gICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAnZmFsc2UnLCAnYXJpYS1sZXZlbCc6IHRoaXMuaXRlbXMubGVuZ3RoLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXMoaGVhZGVyLCBhcmlhQXR0cik7XG4gICAgICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLnJlbmRlcklubmVySXRlbSA9IGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGlubmVyRWxlO1xuICAgICAgICAgICAgaW5uZXJFbGUgPSBlajJfYmFzZV81LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfSVRFTSB9KTtcbiAgICAgICAgICAgIGlubmVyRWxlLmlkID0gZWoyX2Jhc2VfMi5nZXRVbmlxdWVJRCgnYWNyZG5faXRlbScpO1xuICAgICAgICAgICAgaWYgKGl0ZW0uaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN0bkVsZSA9IHRoaXMuaGVhZGVyRWxlR2VuZXJhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgaGRyRWxlID0gZWoyX2Jhc2VfNS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX0hFQURFUkNUTiB9KTtcbiAgICAgICAgICAgICAgICBjdG5FbGUuYXBwZW5kQ2hpbGQoaGRyRWxlKTtcbiAgICAgICAgICAgICAgICBjdG5FbGUuYXBwZW5kQ2hpbGQodGhpcy5mZXRjaEVsZW1lbnQoaGRyRWxlLCBpdGVtLmhlYWRlciwgaW5kZXgsIHRydWUpKTtcbiAgICAgICAgICAgICAgICBpbm5lckVsZS5hcHBlbmRDaGlsZChjdG5FbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhkciA9IGVqMl9iYXNlXzMuc2VsZWN0KCcuJyArIENMU19IRUFERVIsIGlubmVyRWxlKTtcbiAgICAgICAgICAgIGlmIChpdGVtLmV4cGFuZGVkICYmICFlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGluZGV4KSAmJiAoIXRoaXMuZW5hYmxlUGVyc2lzdGVuY2UpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5pdEV4cGFuZC5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0RXhwYW5kLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLmNzc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgaW5uZXJFbGUuY2xhc3NMaXN0LmFkZChpdGVtLmNzc0NsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLmljb25Dc3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGRySWNuRWxlID0gZWoyX2Jhc2VfNS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX0hFQURFUklDTiB9KTtcbiAgICAgICAgICAgICAgICB2YXIgaWNvbiA9IGVqMl9iYXNlXzUuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBpdGVtLmljb25Dc3MgKyAnIGUtaWNvbnMnIH0pO1xuICAgICAgICAgICAgICAgIGhkckljbkVsZS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChoZHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhkciA9IHRoaXMuaGVhZGVyRWxlR2VuZXJhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaGRyLmFwcGVuZENoaWxkKGhkckljbkVsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyRWxlLmFwcGVuZENoaWxkKGhkcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBoZHIuaW5zZXJ0QmVmb3JlKGhkckljbkVsZSwgaGRyLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGRySWNvbiA9IHRoaXMudG9nZ2xlSWNvbkdlbmVyYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoaGRyKSkge1xuICAgICAgICAgICAgICAgICAgICBoZHIgPSB0aGlzLmhlYWRlckVsZUdlbmVyYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyRWxlLmFwcGVuZENoaWxkKGhkcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhkci5hcHBlbmRDaGlsZChoZHJJY29uKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChpbm5lckVsZSwgQ0xTX1NMQ1QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlubmVyRWxlO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmZldGNoRWxlbWVudCA9IGZ1bmN0aW9uIChlbGUsIHZhbHVlLCBpbmRleCwgaXNIZWFkZXIpIHtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZUZuO1xuICAgICAgICAgICAgdmFyIHRlbVN0cmluZztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodmFsdWUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRlbVN0cmluZyA9IGVsZVZhbC5vdXRlckhUTUwudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUZuID0gZWoyX2Jhc2VfMi5jb21waWxlKHRlbVN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuZGV0YWNoKGVsZVZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUZuID0gZWoyX2Jhc2VfMi5jb21waWxlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZCh0ZW1wbGF0ZUZuKSAmJiB0ZW1wbGF0ZUZuKCkubGVuZ3RoID4gMCAmJiAhKGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQodGVtcGxhdGVGbigpWzBdLnRhZ05hbWUpICYmIHRlbXBsYXRlRm4oKS5sZW5ndGggPT09IDEpKSB7XG4gICAgICAgICAgICAgICAgW10uc2xpY2UuY2FsbCh0ZW1wbGF0ZUZuKCkpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChlbC50YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKHRlbVN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XS5oZWFkZXIgPSB0ZW1TdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XS5jb250ZW50ID0gdGVtU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5hcmlhQXR0clVwZGF0ZSA9IGZ1bmN0aW9uIChpdGVtRWxlKSB7XG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gZWoyX2Jhc2VfMy5zZWxlY3QoJy4nICsgQ0xTX0hFQURFUiwgaXRlbUVsZSk7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGVqMl9iYXNlXzMuc2VsZWN0KCcuJyArIENMU19DT05URU5ULCBpdGVtRWxlKTtcbiAgICAgICAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnLCBjb250ZW50LmlkKTtcbiAgICAgICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBoZWFkZXIuaWQpO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmNvbnRlbnRSZW5kZXJpbmcgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGhpcy5pdGVtc1tpbmRleF0uY29udGVudDtcbiAgICAgICAgICAgIHZhciBpdGVtY250ID0gZWoyX2Jhc2VfNS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX0NPTlRFTlQgKyAnICcgKyBDTFNfQ1ROSElERSwgaWQ6IGVqMl9iYXNlXzIuZ2V0VW5pcXVlSUQoJ2FjcmRuX3BhbmVsJykgfSk7XG4gICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXMoaXRlbWNudCwgeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSk7XG4gICAgICAgICAgICB2YXIgY3RuID0gZWoyX2Jhc2VfNS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX0NURU5UIH0pO1xuICAgICAgICAgICAgaXRlbWNudC5hcHBlbmRDaGlsZCh0aGlzLmZldGNoRWxlbWVudChjdG4sIGNvbnRlbnQsIGluZGV4LCBmYWxzZSkpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1jbnQ7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuZXhwYW5kID0gZnVuY3Rpb24gKHRyZ3QpIHtcbiAgICAgICAgICAgIHZhciBldmVudEFyZ3M7XG4gICAgICAgICAgICB2YXIgdHJndEl0ZW1FbGUgPSBlajJfYmFzZV8zLmNsb3Nlc3QodHJndCwgJy4nICsgQ0xTX0lURU0pO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQodHJndCkgfHwgKGVqMl9iYXNlXzMuaXNWaXNpYmxlKHRyZ3QpICYmIHRyZ3QuZ2V0QXR0cmlidXRlKCdlLWFuaW1hdGUnKSAhPT0gJ3RydWUnKSB8fCB0cmd0SXRlbUVsZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0RJU0FCTEUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFjcmRuUm9vdCA9IGVqMl9iYXNlXzMuY2xvc2VzdCh0cmd0SXRlbUVsZSwgJy4nICsgQ0xTX0FDUkROX1JPT1QpO1xuICAgICAgICAgICAgdmFyIGV4cGFuZFN0YXRlID0gYWNyZG5Sb290LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0VYUEFORFNUQVRFKTtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5hbmltYXRpb24uZXhwYW5kLmVmZmVjdCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5hbmltYXRpb24uZXhwYW5kLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiB0aGlzLmFuaW1hdGlvbi5leHBhbmQuZWFzaW5nXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGljb24gPSBlajJfYmFzZV8zLnNlbGVjdCgnLicgKyBDTFNfVE9PR0xFSUNOLCB0cmd0SXRlbUVsZSkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBldmVudEFyZ3MgPSB7IGVsZW1lbnQ6IHRyZ3RJdGVtRWxlLFxuICAgICAgICAgICAgICAgIGl0ZW06IHRoaXMuaXRlbXNbdGhpcy5nZXRJbmRleEJ5SXRlbSh0cmd0SXRlbUVsZSldLFxuICAgICAgICAgICAgICAgIGlzRXhwYW5kZWQ6IHRydWUgfTtcbiAgICAgICAgICAgIHZhciBlZmYgPSBhbmltYXRpb24ubmFtZTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignZXhwYW5kaW5nJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgIGlmIChldmVudEFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKENMU19UT0dBTklNQVRFKTtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRJdGVtc1B1c2godHJndEl0ZW1FbGUpO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGV4cGFuZFN0YXRlKSkge1xuICAgICAgICAgICAgICAgIGV4cGFuZFN0YXRlLmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0VYUEFORFNUQVRFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyZ3RJdGVtRWxlLmNsYXNzTGlzdC5hZGQoQ0xTX0VYUEFORFNUQVRFKTtcbiAgICAgICAgICAgIGlmICgoYW5pbWF0aW9uLm5hbWUgPT09ICdOb25lJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZFByb2dyZXNzKCdiZWdpbicsIGljb24sIHRyZ3QsIHRyZ3RJdGVtRWxlLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kUHJvZ3Jlc3MoJ2VuZCcsIGljb24sIHRyZ3QsIHRyZ3RJdGVtRWxlLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uKGVmZiwgaWNvbiwgdHJndCwgdHJndEl0ZW1FbGUsIGFuaW1hdGlvbiwgZXZlbnRBcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5leHBhbmRBbmltYXRpb24gPSBmdW5jdGlvbiAoZWYsIGljbiwgdHJndCwgdHJndEl0ZW1FbGUsIGFuaW1hdGUsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIHRyZ3RIZ3Q7XG4gICAgICAgICAgICBpZiAoZWYgPT09ICdTbGlkZURvd24nKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZS5iZWdpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZXhwYW5kUHJvZ3Jlc3MoJ2JlZ2luJywgaWNuLCB0cmd0LCB0cmd0SXRlbUVsZSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIHRyZ3Quc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSB0cmd0SXRlbUVsZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRyZ3RIZ3QgPSB0cmd0Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdHJndC5zdHlsZS5tYXhIZWlnaHQgPSAodHJndC5vZmZzZXRIZWlnaHQpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgdHJndEl0ZW1FbGUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhbmltYXRlLnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0cmd0SXRlbUVsZS5zdHlsZS5taW5IZWlnaHQgPSAoaGVpZ2h0ICsgdHJndC5vZmZzZXRIZWlnaHQpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGFuaW1hdGUuZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV81LnNldFN0eWxlQXR0cmlidXRlKHRyZ3QsIHsgJ3Bvc2l0aW9uJzogJycsICdtYXhIZWlnaHQnOiAnJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgdHJndEl0ZW1FbGUuc3R5bGUubWluSGVpZ2h0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmV4cGFuZFByb2dyZXNzKCdlbmQnLCBpY24sIHRyZ3QsIHRyZ3RJdGVtRWxlLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZS5iZWdpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZXhwYW5kUHJvZ3Jlc3MoJ2JlZ2luJywgaWNuLCB0cmd0LCB0cmd0SXRlbUVsZSwgYXJncyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhbmltYXRlLmVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZXhwYW5kUHJvZ3Jlc3MoJ2VuZCcsIGljbiwgdHJndCwgdHJndEl0ZW1FbGUsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXcgZWoyX2Jhc2VfNC5BbmltYXRpb24oYW5pbWF0ZSkuYW5pbWF0ZSh0cmd0KTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5leHBhbmRQcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgaWNvbiwgdHJndCwgdHJndEl0ZW1FbGUsIGV2ZW50QXJncykge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUodHJndCwgQ0xTX0NUTkhJREUpO1xuICAgICAgICAgICAgdGhpcy5hZGQodHJndEl0ZW1FbGUsIENMU19TTENURUQpO1xuICAgICAgICAgICAgdGhpcy5hZGQoaWNvbiwgQ0xTX0VYUEFORElDTik7XG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT09ICdlbmQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQodHJndEl0ZW1FbGUsIENMU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIHRyZ3Quc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0cmd0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcsIHsgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZScsICdhcmlhLWV4cGFuZGVkJzogJ3RydWUnIH0pO1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZShDTFNfVE9HQU5JTUFURSk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdleHBhbmRlZCcsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuZXhwYW5kZWRJdGVtc1B1c2ggPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleEJ5SXRlbShpdGVtKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGFuZGVkSXRlbXMuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRlZEl0ZW1zLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmdldEluZGV4QnlJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHRoaXMuZWxlbWVudC5jaGlsZHJlbikuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5leHBhbmRlZEl0ZW1zUG9wID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SW5kZXhCeUl0ZW0oaXRlbSk7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkSXRlbXMuc3BsaWNlKHRoaXMuZXhwYW5kZWRJdGVtcy5pbmRleE9mKGluZGV4KSwgMSk7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuY29sbGFwc2UgPSBmdW5jdGlvbiAodHJndCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50QXJncztcbiAgICAgICAgICAgIHZhciB0cmd0SXRlbUVsZSA9IGVqMl9iYXNlXzMuY2xvc2VzdCh0cmd0LCAnLicgKyBDTFNfSVRFTSk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZCh0cmd0KSB8fCAhZWoyX2Jhc2VfMy5pc1Zpc2libGUodHJndCkgfHwgdHJndEl0ZW1FbGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19ESVNBQkxFKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5hbmltYXRpb24uY29sbGFwc2UuZWZmZWN0LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmFuaW1hdGlvbi5jb2xsYXBzZS5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogdGhpcy5hbmltYXRpb24uY29sbGFwc2UuZWFzaW5nLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBpY29uID0gZWoyX2Jhc2VfMy5zZWxlY3QoJy4nICsgQ0xTX1RPT0dMRUlDTiwgdHJndEl0ZW1FbGUpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgZXZlbnRBcmdzID0geyBlbGVtZW50OiB0cmd0SXRlbUVsZSxcbiAgICAgICAgICAgICAgICBpdGVtOiB0aGlzLml0ZW1zW3RoaXMuZ2V0SW5kZXhCeUl0ZW0odHJndEl0ZW1FbGUpXSxcbiAgICAgICAgICAgICAgICBpc0V4cGFuZGVkOiBmYWxzZSB9O1xuICAgICAgICAgICAgdmFyIGVmZiA9IGFuaW1hdGlvbi5uYW1lO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdleHBhbmRpbmcnLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgaWYgKGV2ZW50QXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkSXRlbXNQb3AodHJndEl0ZW1FbGUpO1xuICAgICAgICAgICAgdHJndEl0ZW1FbGUuY2xhc3NMaXN0LmFkZChDTFNfRVhQQU5EU1RBVEUpO1xuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKENMU19UT0dBTklNQVRFKTtcbiAgICAgICAgICAgIGlmICgoYW5pbWF0aW9uLm5hbWUgPT09ICdOb25lJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlUHJvZ3Jlc3MoJ2JlZ2luJywgaWNvbiwgdHJndCwgdHJndEl0ZW1FbGUsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZVByb2dyZXNzKCdlbmQnLCBpY29uLCB0cmd0LCB0cmd0SXRlbUVsZSwgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlQW5pbWF0aW9uKGVmZiwgdHJndCwgdHJndEl0ZW1FbGUsIGljb24sIGFuaW1hdGlvbiwgZXZlbnRBcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5jb2xsYXBzZUFuaW1hdGlvbiA9IGZ1bmN0aW9uIChlZiwgdHJndCwgdHJndEl0RWwsIGljbiwgYW5pbWF0ZSwgYXJncykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBoZWlnaHQ7XG4gICAgICAgICAgICB2YXIgdHJndEhlaWdodDtcbiAgICAgICAgICAgIHZhciBpdGVtSGVpZ2h0O1xuICAgICAgICAgICAgdmFyIHJlbWFpbjtcbiAgICAgICAgICAgIGlmIChlZiA9PT0gJ1NsaWRlVXAnKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZS5iZWdpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUhlaWdodCA9IHRyZ3RJdEVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdHJndEl0RWwuc3R5bGUubWluSGVpZ2h0ID0gaXRlbUhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHRyZ3Quc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSB0cmd0SXRFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRyZ3RIZWlnaHQgPSB0cmd0Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdHJndC5zdHlsZS5tYXhIZWlnaHQgPSB0cmd0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29sbGFwc2VQcm9ncmVzcygnYmVnaW4nLCBpY24sIHRyZ3QsIHRyZ3RJdEVsLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGFuaW1hdGUucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbiA9ICgoaGVpZ2h0IC0gKHRyZ3RIZWlnaHQgLSB0cmd0Lm9mZnNldEhlaWdodCkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbWFpbiA8IGl0ZW1IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZ3RJdEVsLnN0eWxlLm1pbkhlaWdodCA9IHJlbWFpbiArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGFuaW1hdGUuZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0cmd0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbGxhcHNlUHJvZ3Jlc3MoJ2VuZCcsIGljbiwgdHJndCwgdHJndEl0RWwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB0cmd0SXRFbC5zdHlsZS5taW5IZWlnaHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNS5zZXRTdHlsZUF0dHJpYnV0ZSh0cmd0LCB7ICdwb3NpdGlvbic6ICcnLCAnbWF4SGVpZ2h0JzogJycsICdkaXNwbGF5JzogJycgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1hdGUuYmVnaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbGxhcHNlUHJvZ3Jlc3MoJ2JlZ2luJywgaWNuLCB0cmd0LCB0cmd0SXRFbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhbmltYXRlLmVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29sbGFwc2VQcm9ncmVzcygnZW5kJywgaWNuLCB0cmd0LCB0cmd0SXRFbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ldyBlajJfYmFzZV80LkFuaW1hdGlvbihhbmltYXRlKS5hbmltYXRlKHRyZ3QpO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmNvbGxhcHNlUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGljb24sIHRyZ3QsIHRyZ3RJdGVtRWxlLCBldmVudEFyZ3MpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGljb24sIENMU19FWFBBTkRJQ04pO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUodHJndEl0ZW1FbGUsIENMU19TTENURUQpO1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzID09PSAnZW5kJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKHRyZ3QsIENMU19DVE5ISURFKTtcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoQ0xTX1RPR0FOSU1BVEUpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRyZ3RJdGVtRWxlLCBDTFNfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB0cmd0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0cmd0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcsIHsgJ2FyaWEtc2VsZWN0ZWQnOiAnZmFsc2UnLCAnYXJpYS1leHBhbmRlZCc6ICdmYWxzZScgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdleHBhbmRlZCcsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuZ2V0TW9kdWxlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnYWNjb3JkaW9uJztcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5pdGVtQXR0cmliVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGl0ZW1FbGUgPSBbXS5zbGljZS5jYWxsKHRoaXMuZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgICAgICB2YXIgaXRlbUxlbiA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgaXRlbUVsZS5mb3JFYWNoKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnNlbGVjdCgnLicgKyBDTFNfSEVBREVSLCBlbGUpLnNldEF0dHJpYnV0ZSgnYXJpYS1sZXZlbCcsICcnICsgaXRlbUxlbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5hZGRJdGVtID0gZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGUuY2hpbGRFbGVtZW50Q291bnQgPj0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgICAgICAgICAgICAgdmFyIGlubmVySXRlbUVsZSA9IHRoaXMucmVuZGVySW5uZXJJdGVtKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlLmNoaWxkRWxlbWVudENvdW50ID09PSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuYXBwZW5kQ2hpbGQoaW5uZXJJdGVtRWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5pbnNlcnRCZWZvcmUoaW5uZXJJdGVtRWxlLCBlbGUuY2hpbGRyZW5baW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKGlubmVySXRlbUVsZS5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19IRUFERVIpLCAnZm9jdXMnLCB0aGlzLmZvY3VzSW4sIHRoaXMpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZChpbm5lckl0ZW1FbGUucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSEVBREVSKSwgJ2JsdXInLCB0aGlzLmZvY3VzT3V0LCB0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1BdHRyaWJVcGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEl0ZW1SZWZyZXNoKGVsZSk7XG4gICAgICAgICAgICBpZiAoaXRlbS5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kSXRlbSh0cnVlLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuZXhwYW5kZWRJdGVtUmVmcmVzaCA9IGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBbXS5zbGljZS5jYWxsKGVsZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19TTENURUQpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmV4cGFuZGVkSXRlbXNQdXNoKGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50LmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGVsZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV8zLmRldGFjaChlbGUpO1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5pdGVtQXR0cmliVXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRJdGVtUmVmcmVzaCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuZWxlbWVudC5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChlbGUpIHx8IGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoZWoyX2Jhc2VfMy5zZWxlY3QoJy4nICsgQ0xTX0hFQURFUiwgZWxlKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGUuY2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5oaWRlSXRlbSA9IGZ1bmN0aW9uIChpbmRleCwgaXNIaWRkZW4pIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoZWxlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGlzSGlkZGVuKSkge1xuICAgICAgICAgICAgICAgIGlzSGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzSGlkZGVuID8gdGhpcy5hZGQoZWxlLCBDTFNfSVRFTUhJREUpIDogdGhpcy5yZW1vdmUoZWxlLCBDTFNfSVRFTUhJREUpO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmVuYWJsZUl0ZW0gPSBmdW5jdGlvbiAoaW5kZXgsIGlzRW5hYmxlKSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50LmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGVsZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZWxlSGVhZGVyID0gZWxlLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgaWYgKGlzRW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlLCBDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5hdHRyaWJ1dGVzKGVsZUhlYWRlciwgeyAndGFiaW5kZXgnOiAnMCcsICdhcmlhLWRpc2FibGVkJzogJ2ZhbHNlJyB9KTtcbiAgICAgICAgICAgICAgICBlbGVIZWFkZXIuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19BQ1RJVkUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kSXRlbShmYWxzZSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZU1vdmVGb2N1cygnbW92ZWRvd24nLCB0aGlzLmVsZW1lbnQsIGVsZUhlYWRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGVsZSwgQ0xTX0RJU0FCTEUpO1xuICAgICAgICAgICAgICAgIGVsZUhlYWRlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIGVsZUhlYWRlci5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuZXhwYW5kSXRlbSA9IGZ1bmN0aW9uIChpc0V4cGFuZCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgcm9vdCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGluZGV4KSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmV4cGFuZE1vZGUgPT09ICdTaW5nbGUnICYmIGlzRXhwYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGUgPSByb290LmNoaWxkcmVuW3Jvb3QuY2hpbGRFbGVtZW50Q291bnQgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtRXhwYW5kKGlzRXhwYW5kLCBlbGUsIHRoaXMuZ2V0SW5kZXhCeUl0ZW0oZWxlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBbXS5zbGljZS5jYWxsKHRoaXMuZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLml0ZW1FeHBhbmQoaXNFeHBhbmQsIGVsLCBfdGhpcy5nZXRJbmRleEJ5SXRlbShlbCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50LmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChlbGUpIHx8ICFlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19TTENUKSB8fCAoZWxlLmNsYXNzTGlzdC5jb250YWlucyhDTFNfQUNUSVZFKSAmJiBpc0V4cGFuZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZXhwYW5kTW9kZSA9PT0gJ1NpbmdsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kSXRlbShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtRXhwYW5kKGlzRXhwYW5kLCBlbGUsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuaXRlbUV4cGFuZCA9IGZ1bmN0aW9uIChpc0V4cGFuZCwgZWxlLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGN0biA9IGVsZS5jaGlsZHJlblsxXTtcbiAgICAgICAgICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19ESVNBQkxFKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGN0bikgJiYgaXNFeHBhbmQpIHtcbiAgICAgICAgICAgICAgICBjdG4gPSB0aGlzLmNvbnRlbnRSZW5kZXJpbmcoaW5kZXgpO1xuICAgICAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZChjdG4pO1xuICAgICAgICAgICAgICAgIHRoaXMuYXJpYUF0dHJVcGRhdGUoZWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoY3RuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzRXhwYW5kID8gdGhpcy5leHBhbmQoY3RuKSA6IHRoaXMuY29sbGFwc2UoY3RuKTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5nZXRQZXJzaXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBrZXlFbnRpdHkgPSBbJ2V4cGFuZGVkSXRlbXMnXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE9uUGVyc2lzdChrZXlFbnRpdHkpO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLm9uUHJvcGVydHlDaGFuZ2VkID0gZnVuY3Rpb24gKG5ld1Byb3AsIG9sZFByb3ApIHtcbiAgICAgICAgICAgIHZhciBhY3JkbiA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhuZXdQcm9wKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5hYmxlUnRsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3AuZW5hYmxlUnRsID8gdGhpcy5hZGQoYWNyZG4sIENMU19SVEwpIDogdGhpcy5yZW1vdmUoYWNyZG4sIENMU19SVEwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hlaWdodCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV81LnNldFN0eWxlQXR0cmlidXRlKHRoaXMuZWxlbWVudCwgeyAnaGVpZ2h0JzogZWoyX2Jhc2VfNi5mb3JtYXRVbml0KG5ld1Byb3AuaGVpZ2h0KSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd3aWR0aCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV81LnNldFN0eWxlQXR0cmlidXRlKHRoaXMuZWxlbWVudCwgeyAnd2lkdGgnOiBlajJfYmFzZV82LmZvcm1hdFVuaXQobmV3UHJvcC53aWR0aCkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXhwYW5kTW9kZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UHJvcC5leHBhbmRNb2RlID09PSAnU2luZ2xlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWRJdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kSXRlbShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tdWx0aXNlbGVjdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQWNjb3JkaW9uO1xuICAgIH0oZWoyX2Jhc2VfMS5Db21wb25lbnQpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfNC5Db2xsZWN0aW9uKFtdLCBBY2NvcmRpb25JdGVtKVxuICAgIF0sIEFjY29yZGlvbi5wcm90b3R5cGUsIFwiaXRlbXNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnMTAwJScpXG4gICAgXSwgQWNjb3JkaW9uLnByb3RvdHlwZSwgXCJ3aWR0aFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdhdXRvJylcbiAgICBdLCBBY2NvcmRpb24ucHJvdG90eXBlLCBcImhlaWdodFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdNdWx0aXBsZScpXG4gICAgXSwgQWNjb3JkaW9uLnByb3RvdHlwZSwgXCJleHBhbmRNb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzUuQ29tcGxleCh7fSwgQWNjb3JkaW9uQW5pbWF0aW9uU2V0dGluZ3MpXG4gICAgXSwgQWNjb3JkaW9uLnByb3RvdHlwZSwgXCJhbmltYXRpb25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgQWNjb3JkaW9uLnByb3RvdHlwZSwgXCJjbGlja2VkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIEFjY29yZGlvbi5wcm90b3R5cGUsIFwiZXhwYW5kaW5nXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIEFjY29yZGlvbi5wcm90b3R5cGUsIFwiZXhwYW5kZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgQWNjb3JkaW9uLnByb3RvdHlwZSwgXCJjcmVhdGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIEFjY29yZGlvbi5wcm90b3R5cGUsIFwiZGVzdHJveWVkXCIsIHZvaWQgMCk7XG4gICAgQWNjb3JkaW9uID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzQuTm90aWZ5UHJvcGVydHlDaGFuZ2VzXG4gICAgXSwgQWNjb3JkaW9uKTtcbiAgICBleHBvcnRzLkFjY29yZGlvbiA9IEFjY29yZGlvbjtcbiAgICBleHBvcnRzLmFjY29yZGlvbkJ1aWxkZXIgPSBlajJfYmFzZV80LkNyZWF0ZUJ1aWxkZXIoQWNjb3JkaW9uKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWNjb3JkaW9uL2FjY29yZGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2NvbnRleHQtbWVudVwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGNvbnRleHRfbWVudV8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChjb250ZXh0X21lbnVfMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRleHQtbWVudS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWxpc3RzXCIsIFwiQHN5bmNmdXNpb24vZWoyLXBvcHVwc1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIsIGVqMl9iYXNlXzMsIGVqMl9iYXNlXzQsIGVqMl9iYXNlXzUsIGVqMl9saXN0c18xLCBlajJfcG9wdXBzXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgdmFyIERPV05BUlJPVyA9ICdkb3duYXJyb3cnO1xuICAgIHZhciBFTlRFUiA9ICdlbnRlcic7XG4gICAgdmFyIEVTQ0FQRSA9ICdlc2NhcGUnO1xuICAgIHZhciBGT0NVU0VEID0gJ2UtZm9jdXNlZCc7XG4gICAgdmFyIEhFQURFUiA9ICdlLW1lbnVoZWFkZXInO1xuICAgIHZhciBMRUZUQVJST1cgPSAnbGVmdGFycm93JztcbiAgICB2YXIgUklHSFRBUlJPVyA9ICdyaWdodGFycm93JztcbiAgICB2YXIgUlRMID0gJ2UtcnRsJztcbiAgICB2YXIgU0VMRUNURUQgPSAnZS1zZWxlY3RlZCc7XG4gICAgdmFyIFNFUEFSQVRPUiA9ICdlLXNlcGFyYXRvcic7XG4gICAgdmFyIFVQQVJST1cgPSAndXBhcnJvdyc7XG4gICAgdmFyIFdSQVBQRVIgPSAnZS1jb250ZXh0bWVudS13cmFwcGVyJztcbiAgICB2YXIgQ0FSRVQgPSAnZS1jYXJldCc7XG4gICAgdmFyIElURU0gPSAnZS1tZW51LWl0ZW0nO1xuICAgIHZhciBESVNBQkxFRCA9ICdlLWRpc2FibGVkJztcbiAgICB2YXIgSElERSA9ICdlLW1lbnUtaGlkZSc7XG4gICAgdmFyIElDT05TID0gJ2UtaWNvbnMnO1xuICAgIHZhciBNZW51SXRlbSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhNZW51SXRlbSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gTWVudUl0ZW0oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1lbnVJdGVtO1xuICAgIH0oZWoyX2Jhc2VfMS5DaGlsZFByb3BlcnR5KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgTWVudUl0ZW0ucHJvdG90eXBlLCBcImljb25Dc3NcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBNZW51SXRlbS5wcm90b3R5cGUsIFwiaWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBNZW51SXRlbS5wcm90b3R5cGUsIFwic2VwYXJhdG9yXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzQuQ29sbGVjdGlvbihbXSwgTWVudUl0ZW0pXG4gICAgXSwgTWVudUl0ZW0ucHJvdG90eXBlLCBcIml0ZW1zXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgTWVudUl0ZW0ucHJvdG90eXBlLCBcInRleHRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBNZW51SXRlbS5wcm90b3R5cGUsIFwidXJsXCIsIHZvaWQgMCk7XG4gICAgZXhwb3J0cy5NZW51SXRlbSA9IE1lbnVJdGVtO1xuICAgIHZhciBDb250ZXh0TWVudSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhDb250ZXh0TWVudSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQ29udGV4dE1lbnUob3B0aW9ucywgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgZWxlbWVudCkgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGlvbiA9IG5ldyBlajJfYmFzZV8zLkFuaW1hdGlvbih7fSk7XG4gICAgICAgICAgICBfdGhpcy5uYXZJZHggPSBbXTtcbiAgICAgICAgICAgIF90aGlzLmlzVGFwSG9sZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5wcmVSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnRhZ05hbWUgPT09ICdFSi1DT05URVhUTUVOVScpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWpJbnN0ID0gZWoyX2Jhc2VfNC5nZXRWYWx1ZSgnZWoyX2luc3RhbmNlcycsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdmFyIHVsID0gZWoyX2Jhc2VfNS5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyID0gZWoyX2Jhc2VfNS5jcmVhdGVFbGVtZW50KCdFSi1DT05URVhUTUVOVScsIHsgY2xhc3NOYW1lOiBXUkFQUEVSIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh1bCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV81LmRldGFjaCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IHVsO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlLScgKyB0aGlzLmdldE1vZHVsZU5hbWUoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZXRWYWx1ZSgnZWoyX2luc3RhbmNlcycsIGVqSW5zdCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5pZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSBlajJfYmFzZV80LmdldFVuaXF1ZUlEKHRoaXMuZ2V0TW9kdWxlTmFtZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRXcmFwcGVyKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckl0ZW1zKCk7XG4gICAgICAgICAgICB0aGlzLndpcmVFdmVudHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmluaXRXcmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXIoKTtcbiAgICAgICAgICAgIGlmICghd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoV1JBUFBFUikpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyID0gZWoyX2Jhc2VfNS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogV1JBUFBFUiB9KTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5jc3NDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVSdGwpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoUlRMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgJ3JvbGUnOiAnbWVudScsICd0YWJpbmRleCc6ICcwJyB9KTtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLmdldFpJbmRleCgpO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUucmVuZGVySXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGVqMl9saXN0c18xLkxpc3RCYXNlLmNyZWF0ZUpzb25Gcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1bCA9IHRoaXMuY3JlYXRlSXRlbXModGhpcy5pdGVtcyk7XG4gICAgICAgICAgICBlajJfYmFzZV81LmFwcGVuZChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh1bC5jaGlsZHJlbiksIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS53aXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXIoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0RWxlbSA9IGVqMl9iYXNlXzUuc2VsZWN0KHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5Ccm93c2VyLmlzSW9zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hNb2R1bGUgPSBuZXcgZWoyX2Jhc2VfMi5Ub3VjaCh0aGlzLnRhcmdldEVsZW0sIHsgdGFwSG9sZDogdGhpcy50b3VjaEhhbmRsZXIuYmluZCh0aGlzKSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLnRhcmdldEVsZW0sICdjb250ZXh0bWVudScsIHRoaXMuY21lbnVIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuZ2V0U2Nyb2xsYWJsZVBhcmVudHModGhpcy50YXJnZXRFbGVtKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudF8xID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQocGFyZW50XzEsICdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5Ccm93c2VyLmlzRGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKHdyYXBwZXIsICdtb3VzZW92ZXInLCB0aGlzLm1vdmVySGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKGRvY3VtZW50LCAnbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZChkb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5rZXlib2FyZE1vZHVsZSA9IG5ldyBlajJfYmFzZV8yLktleWJvYXJkRXZlbnRzKHdyYXBwZXIsIHtcbiAgICAgICAgICAgICAgICBrZXlBY3Rpb246IHRoaXMua2V5Qm9hcmRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAga2V5Q29uZmlnczoge1xuICAgICAgICAgICAgICAgICAgICBkb3duYXJyb3c6IERPV05BUlJPVyxcbiAgICAgICAgICAgICAgICAgICAgdXBhcnJvdzogVVBBUlJPVyxcbiAgICAgICAgICAgICAgICAgICAgZW50ZXI6IEVOVEVSLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0YXJyb3c6IExFRlRBUlJPVyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRhcnJvdzogUklHSFRBUlJPVyxcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlOiBFU0NBUEVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzUucmlwcGxlRWZmZWN0KHdyYXBwZXIsIHsgc2VsZWN0b3I6ICcuJyArIElURU0gfSk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5tb3VzZURvd25IYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV81LmNsb3Nlc3QoZS50YXJnZXQsICcuJyArIFdSQVBQRVIpICE9PSB0aGlzLmdldFdyYXBwZXIoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KHRoaXMubmF2SWR4Lmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5nZXRTY3JvbGxhYmxlUGFyZW50cyA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHZhciBlbGVtU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG4gICAgICAgICAgICB2YXIgcGFyZW50Q29sbGVjdGlvbiA9IFtdO1xuICAgICAgICAgICAgdmFyIHJlZ2V4ID0gLyhhdXRvfHNjcm9sbCkvO1xuICAgICAgICAgICAgdmFyIHBhcmVudEVsZSA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgd2hpbGUgKHBhcmVudEVsZSAmJiBwYXJlbnRFbGUudGFnTmFtZSAhPT0gJ0hUTUwnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnRFbGUpO1xuICAgICAgICAgICAgICAgIGlmICghKGVsZW1TdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJyAmJiBwYXJlbnRTdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpXG4gICAgICAgICAgICAgICAgICAgICYmIHJlZ2V4LnRlc3QocGFyZW50U3R5bGUub3ZlcmZsb3cgKyBwYXJlbnRTdHlsZS5vdmVyZmxvd1kgKyBwYXJlbnRTdHlsZS5vdmVyZmxvd1gpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbGxlY3Rpb24ucHVzaChwYXJlbnRFbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnRFbGUgPSBwYXJlbnRFbGUucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudENvbGxlY3Rpb24ucHVzaChkb2N1bWVudCk7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Q29sbGVjdGlvbjtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmtleUJvYXJkSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGUuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBET1dOQVJST1c6XG4gICAgICAgICAgICAgICAgY2FzZSBVUEFSUk9XOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwRG93bktleUhhbmRsZXIoZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgUklHSFRBUlJPVzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodEVudGVyS2V5SGFuZGxlcih7IGFjdGlvbjogUklHSFRBUlJPVyB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBMRUZUQVJST1c6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdEVzY0tleUhhbmRsZXIoeyBhY3Rpb246IExFRlRBUlJPVyB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBFTlRFUjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodEVudGVyS2V5SGFuZGxlcih7IGFjdGlvbjogRU5URVIgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRVNDQVBFOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRFc2NLZXlIYW5kbGVyKHsgYWN0aW9uOiBFU0NBUEUgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUudXBEb3duS2V5SGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlcigpO1xuICAgICAgICAgICAgdmFyIGN1bCA9IHdyYXBwZXIuY2hpbGRyZW5bdGhpcy5uYXZJZHgubGVuZ3RoXTtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0SWR4ID0gZS5hY3Rpb24gPT09IERPV05BUlJPVyA/IDAgOiBjdWwuY2hpbGRFbGVtZW50Q291bnQgLSAxO1xuICAgICAgICAgICAgdmFyIGZsaUlkeCA9IGRlZmF1bHRJZHg7XG4gICAgICAgICAgICB2YXIgZmxpID0gdGhpcy5nZXRMSUJ5Q2xhc3MoY3VsLCBGT0NVU0VEKTtcbiAgICAgICAgICAgIGlmIChmbGkpIHtcbiAgICAgICAgICAgICAgICBmbGlJZHggPSB0aGlzLmdldElkeChjdWwsIGZsaSk7XG4gICAgICAgICAgICAgICAgZmxpLmNsYXNzTGlzdC5yZW1vdmUoRk9DVVNFRCk7XG4gICAgICAgICAgICAgICAgZS5hY3Rpb24gPT09IERPV05BUlJPVyA/IGZsaUlkeCsrIDogZmxpSWR4LS07XG4gICAgICAgICAgICAgICAgaWYgKGZsaUlkeCA9PT0gKGUuYWN0aW9uID09PSBET1dOQVJST1cgPyBjdWwuY2hpbGRFbGVtZW50Q291bnQgOiAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxpSWR4ID0gZGVmYXVsdElkeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2xpID0gY3VsLmNoaWxkcmVuW2ZsaUlkeF07XG4gICAgICAgICAgICBmbGlJZHggPSB0aGlzLmlzVmFsaWRMSShjbGksIGZsaUlkeCwgZS5hY3Rpb24pO1xuICAgICAgICAgICAgY3VsLmNoaWxkcmVuW2ZsaUlkeF0uY2xhc3NMaXN0LmFkZChGT0NVU0VEKTtcbiAgICAgICAgICAgIGN1bC5jaGlsZHJlbltmbGlJZHhdLmZvY3VzKCk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5pc1ZhbGlkTEkgPSBmdW5jdGlvbiAoY2xpLCBpbmRleCwgYWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlcigpO1xuICAgICAgICAgICAgdmFyIGN1bCA9IHdyYXBwZXIuY2hpbGRyZW5bdGhpcy5uYXZJZHgubGVuZ3RoXTtcbiAgICAgICAgICAgIGlmIChjbGkuY2xhc3NMaXN0LmNvbnRhaW5zKFNFUEFSQVRPUikgfHwgY2xpLmNsYXNzTGlzdC5jb250YWlucyhESVNBQkxFRCkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPT09IChET1dOQVJST1cgfHwgUklHSFRBUlJPVykgPyBpbmRleCsrIDogaW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsaSA9IGN1bC5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgICBpZiAoY2xpLmNsYXNzTGlzdC5jb250YWlucyhTRVBBUkFUT1IpIHx8IGNsaS5jbGFzc0xpc3QuY29udGFpbnMoRElTQUJMRUQpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLmlzVmFsaWRMSShjbGksIGluZGV4LCBhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUucmlnaHRFbnRlcktleUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXIoKTtcbiAgICAgICAgICAgIHZhciBjdWwgPSB3cmFwcGVyLmNoaWxkcmVuW3RoaXMubmF2SWR4Lmxlbmd0aF07XG4gICAgICAgICAgICB2YXIgZmxpID0gdGhpcy5nZXRMSUJ5Q2xhc3MoY3VsLCBGT0NVU0VEKTtcbiAgICAgICAgICAgIGlmIChmbGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxpSWR4ID0gdGhpcy5nZXRJZHgoY3VsLCBmbGkpO1xuICAgICAgICAgICAgICAgIHZhciBuYXZJZHggPSB0aGlzLm5hdklkeC5jb25jYXQoZmxpSWR4KTtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0obmF2SWR4KTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTWVudShmbGksIGl0ZW0sIG51bGwsIG51bGwsIGUpO1xuICAgICAgICAgICAgICAgICAgICBmbGkuY2xhc3NMaXN0LnJlbW92ZShGT0NVU0VEKTtcbiAgICAgICAgICAgICAgICAgICAgZmxpLmNsYXNzTGlzdC5hZGQoU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5hY3Rpb24gPT09IEVOVEVSKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIHsgZWxlbWVudDogZmxpLCBpdGVtOiB0aGlzLnRvUmF3T2JqZWN0KFtpdGVtXSkgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmxpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2SWR4LnB1c2goZmxpSWR4KTtcbiAgICAgICAgICAgICAgICAgICAgY3VsID0gd3JhcHBlci5jaGlsZHJlblt0aGlzLm5hdklkeC5sZW5ndGhdO1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuaXNWYWxpZExJKGN1bC5jaGlsZHJlblswXSwgMCwgZS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBjdWwuY2hpbGRyZW5baW5kZXhdLmNsYXNzTGlzdC5hZGQoRk9DVVNFRCk7XG4gICAgICAgICAgICAgICAgICAgIGN1bC5jaGlsZHJlbltpbmRleF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmFjdGlvbiA9PT0gRU5URVIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmxlZnRFc2NLZXlIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5hdklkeC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KHRoaXMubmF2SWR4Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1bCA9IHdyYXBwZXIuY2hpbGRyZW5bdGhpcy5uYXZJZHgubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB2YXIgc2xpID0gdGhpcy5nZXRMSUJ5Q2xhc3MoY3VsLCBTRUxFQ1RFRCk7XG4gICAgICAgICAgICAgICAgc2xpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgIGlmIChzbGkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpLmNsYXNzTGlzdC5yZW1vdmUoU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgICAgICBzbGkuY2xhc3NMaXN0LmFkZChGT0NVU0VEKTtcbiAgICAgICAgICAgICAgICAgICAgc2xpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuYWN0aW9uID09PSBFU0NBUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnRvdWNoSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLmlzVGFwSG9sZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNtZW51SGFuZGxlcihlLm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuY21lbnVIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jYW5PcGVuKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1lbnUobnVsbCwgbnVsbCwgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZLCBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTWVudShudWxsLCBudWxsLCBlLmNsaWVudFksIGUuY2xpZW50WCwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuY2xvc2VNZW51ID0gZnVuY3Rpb24gKHVsSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICh1bEluZGV4ID09PSB2b2lkIDApIHsgdWxJbmRleCA9IDA7IH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWVudVZpc2libGUoKSkge1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNudCA9IHdyYXBwZXIuY2hpbGRFbGVtZW50Q291bnQ7IGNudCA+IHVsSW5kZXg7IGNudC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQW5pbWF0aW9uKHdyYXBwZXIuY2hpbGRyZW5bY250IC0gMV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKHRoaXMubmF2SWR4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZJZHgubGVuZ3RoID0gdWxJbmRleCA/IHVsSW5kZXggLSAxIDogdWxJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdvbkNsb3NlJywgeyBpdGVtczogaXRlbXMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuaXNNZW51VmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5uYXZJZHgubGVuZ3RoID4gMCB8fCBlajJfYmFzZV81LmlzVmlzaWJsZSh0aGlzLmVsZW1lbnQpLnZhbHVlT2YoKSk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5jYW5PcGVuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIGNhbk9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgY2FuT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSB0aGlzLmZpbHRlci5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0YXJnZXQuY2xhc3NMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIuaW5kZXhPZih0YXJnZXQuY2xhc3NMaXN0W2ldKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5PcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhbk9wZW47XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKHRvcCwgbGVmdCkge1xuICAgICAgICAgICAgdGhpcy5vcGVuTWVudShudWxsLCBudWxsLCB0b3AsIGxlZnQpO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUub3Blbk1lbnUgPSBmdW5jdGlvbiAobGksIGl0ZW0sIHRvcCwgbGVmdCwgZSkge1xuICAgICAgICAgICAgaWYgKHRvcCA9PT0gdm9pZCAwKSB7IHRvcCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChsZWZ0ID09PSB2b2lkIDApIHsgbGVmdCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChlID09PSB2b2lkIDApIHsgZSA9IG51bGw7IH1cbiAgICAgICAgICAgIHZhciB1bDtcbiAgICAgICAgICAgIHZhciBuYXZJZHg7XG4gICAgICAgICAgICB2YXIgbGlJdGVtO1xuICAgICAgICAgICAgdmFyIGJlZm9yZU9wZW5FdmVudEFyZ3M7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlcigpO1xuICAgICAgICAgICAgaWYgKGxpKSB7XG4gICAgICAgICAgICAgICAgdWwgPSB0aGlzLmNyZWF0ZUl0ZW1zKGl0ZW0uaXRlbXMpO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV80LkJyb3dzZXIuaXNEZXZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5sYXN0Q2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7IHRleHQ6IGl0ZW0udGV4dCwgaWNvbkNzczogSUNPTlMgKyAnIGUtcHJldmlvdXMnIH07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoZGF0YSA9IG5ldyBNZW51SXRlbSh0aGlzLml0ZW1zWzBdLCBudWxsLCBkYXRhLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhsaSA9IHRoaXMuY3JlYXRlSXRlbShbaGRhdGFdLCB0cnVlLCAnbWVudScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB1bC5pbnNlcnRCZWZvcmUoaGxpLCB1bC5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsLnN0eWxlLnpJbmRleCA9IHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXg7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdklkeCA9IHRoaXMuZ2V0SW5kZXgobGkgPyBsaS50ZXh0Q29udGVudCA6IG51bGwpO1xuICAgICAgICAgICAgbGlJdGVtID0gbGkgPyB0aGlzLmdldEl0ZW0obmF2SWR4KSA6IG51bGw7XG4gICAgICAgICAgICBiZWZvcmVPcGVuRXZlbnRBcmdzID0geyBlbGVtZW50OiB1bCwgaXRlbXM6IGxpID8gaXRlbS5pdGVtcyA6IHRoaXMuZ2V0SXRlbXMoW10pLCBwYXJlbnRJdGVtOiBsaUl0ZW0sIGV2ZW50OiBlLCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2JlZm9yZU9wZW4nLCBiZWZvcmVPcGVuRXZlbnRBcmdzKTtcbiAgICAgICAgICAgIGlmICghYmVmb3JlT3BlbkV2ZW50QXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGxpLCB1bCwgdG9wLCBsZWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUFuaW1hdGlvbih1bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5jcmVhdGVJdGVtID0gZnVuY3Rpb24gKGl0ZW0sIHNob3dJY29uLCBtb2R1bGVOYW1lLCBpc0hlYWRlcikge1xuICAgICAgICAgICAgaWYgKGlzSGVhZGVyID09PSB2b2lkIDApIHsgaXNIZWFkZXIgPSB0cnVlOyB9XG4gICAgICAgICAgICB2YXIgbGlzdE9wdCA9IHsgc2hvd0ljb246IHNob3dJY29uLCBtb2R1bGVOYW1lOiBtb2R1bGVOYW1lIH07XG4gICAgICAgICAgICBpZiAoaXNIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICBsaXN0T3B0Lml0ZW1DbGFzcyA9IEhFQURFUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsaSA9IGVqMl9saXN0c18xLkxpc3RCYXNlLmNyZWF0ZUxpc3RJdGVtRnJvbUpzb24odGhpcy50b1Jhd09iamVjdChpdGVtKSwgbGlzdE9wdCwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gbGlbMF07XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChsaSwgdWwsIHRvcCwgbGVmdCkge1xuICAgICAgICAgICAgdmFyIHB4ID0gJ3B4JztcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlVmlzaWJsaXR5KHVsKTtcbiAgICAgICAgICAgIGlmICh1bCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbGxpZGUgPSBlajJfcG9wdXBzXzEuaXNDb2xsaWRlKHVsLCBudWxsLCBsZWZ0LCB0b3ApO1xuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlLmluZGV4T2YoJ3JpZ2h0JykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdCAtIHVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZS5pbmRleE9mKCdib3R0b20nKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlajJfcG9wdXBzXzEuZml0KHVsLCBudWxsLCB7IFg6IGZhbHNlLCBZOiB0cnVlIH0sIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG9mZnNldC50b3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbGxpZGUgPSBlajJfcG9wdXBzXzEuaXNDb2xsaWRlKHVsLCBudWxsLCBsZWZ0LCB0b3ApO1xuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlLmluZGV4T2YoJ2xlZnQnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlajJfcG9wdXBzXzEuZml0KHVsLCBudWxsLCB7IFg6IHRydWUsIFk6IGZhbHNlIH0sIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfSk7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBvZmZzZXQubGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5Ccm93c2VyLmlzRGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IE51bWJlcih0aGlzLmVsZW1lbnQuc3R5bGUudG9wLnJlcGxhY2UocHgsICcnKSk7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBOdW1iZXIodGhpcy5lbGVtZW50LnN0eWxlLmxlZnQucmVwbGFjZShweCwgJycpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gdGhpcy5lbmFibGVSdGwgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWoyX3BvcHVwc18xLmNhbGN1bGF0ZVBvc2l0aW9uKGxpLCB4LCAndG9wJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG9mZnNldC50b3A7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBvZmZzZXQubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpZGUgPSBlajJfcG9wdXBzXzEuaXNDb2xsaWRlKHVsLCBudWxsLCB0aGlzLmVuYWJsZVJ0bCA/IGxlZnQgLSB1bC5vZmZzZXRXaWR0aCA6IGxlZnQsIHRvcCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4Q29sbGlzaW9uID0gY29sbGlkZS5pbmRleE9mKCdsZWZ0JykgPiAtMSB8fCBjb2xsaWRlLmluZGV4T2YoJ3JpZ2h0JykgPiAtMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhDb2xsaXNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGVqMl9wb3B1cHNfMS5jYWxjdWxhdGVQb3NpdGlvbihsaSwgdGhpcy5lbmFibGVSdGwgPyAncmlnaHQnIDogJ2xlZnQnLCAndG9wJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gb2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlUnRsIHx8IHhDb2xsaXNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSAodGhpcy5lbmFibGVSdGwgJiYgeENvbGxpc2lvbikgPyBsZWZ0IDogbGVmdCAtIHVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlLmluZGV4T2YoJ2JvdHRvbScpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGVqMl9wb3B1cHNfMS5maXQodWwsIG51bGwsIHsgWDogZmFsc2UsIFk6IHRydWUgfSwgeyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IG9mZnNldC50b3A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVZpc2libGl0eSh1bCwgZmFsc2UpO1xuICAgICAgICAgICAgdWwuc3R5bGUudG9wID0gdG9wICsgcHg7XG4gICAgICAgICAgICB1bC5zdHlsZS5sZWZ0ID0gbGVmdCArIHB4O1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUudG9nZ2xlVmlzaWJsaXR5ID0gZnVuY3Rpb24gKHVsLCBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgIGlmIChpc1Zpc2libGUgPT09IHZvaWQgMCkgeyBpc1Zpc2libGUgPSB0cnVlOyB9XG4gICAgICAgICAgICB1bC5zdHlsZS52aXNpYmlsaXR5ID0gaXNWaXNpYmxlID8gJ2hpZGRlbicgOiAnJztcbiAgICAgICAgICAgIHVsLnN0eWxlLmRpc3BsYXkgPSBpc1Zpc2libGUgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuY3JlYXRlSXRlbXMgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgc2hvd0ljb24gPSB0aGlzLmhhc0ZpZWxkKGl0ZW1zLCAnaWNvbkNzcycpO1xuICAgICAgICAgICAgdmFyIGxpc3RCYXNlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBzaG93SWNvbjogc2hvd0ljb24sXG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ21lbnUnLFxuICAgICAgICAgICAgICAgIGl0ZW1DcmVhdGluZzogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5jdXJEYXRhLmh0bWxBdHRyaWJ1dGVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogJ21lbnVpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4OiAnLTEnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG93SWNvbiAmJiAhYXJncy5jdXJEYXRhLmljb25Dc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MuY3VyRGF0YS5pY29uQ3NzID0gSUNPTlMgKyAnIGUtYmxhbmtpY29uJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaXRlbUNyZWF0ZWQ6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmN1ckRhdGEuc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLml0ZW0uY2xhc3NMaXN0LnJlbW92ZShJVEVNKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MuaXRlbS5jbGFzc0xpc3QuYWRkKFNFUEFSQVRPUik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLml0ZW0ucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MuY3VyRGF0YS5pdGVtcyAmJiBhcmdzLmN1ckRhdGEuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BhbiA9IGVqMl9iYXNlXzUuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBJQ09OUyArICcgJyArIENBUkVUIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5pdGVtLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5pdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLml0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLml0ZW0ucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLml0ZW0uY2xhc3NMaXN0LmFkZCgnZS1tZW51LWNhcmV0LWljb24nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmlnZ2VyKCdiZWZvcmVJdGVtUmVuZGVyJywgeyBkYXRhOiBhcmdzLmN1ckRhdGEsIGl0ZW06IGFyZ3MuaXRlbSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHVsID0gZWoyX2xpc3RzXzEuTGlzdEJhc2UuY3JlYXRlTGlzdCh0aGlzLnRvUmF3T2JqZWN0KGl0ZW1zLnNsaWNlKCkpLCBsaXN0QmFzZU9wdGlvbnMsIHRydWUpO1xuICAgICAgICAgICAgdWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgICAgICByZXR1cm4gdWw7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS50b1Jhd09iamVjdCA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgdmFyIGl0ZW07XG4gICAgICAgICAgICB2YXIgbWVudUl0ZW1zID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gaXRlbXNbaV0ucHJvcGVydGllcztcbiAgICAgICAgICAgICAgICBtZW51SXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZW51SXRlbXM7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5tb3ZlckhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXIoKTtcbiAgICAgICAgICAgIHZhciB0cmd0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgY2xpID0gdGhpcy5nZXRMSSh0cmd0KTtcbiAgICAgICAgICAgIGlmIChjbGkgJiYgZWoyX2Jhc2VfNS5jbG9zZXN0KGNsaSwgJy4nICsgV1JBUFBFUikpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxpID0gZWoyX2Jhc2VfNS5zZWxlY3QoJy4nICsgRk9DVVNFRCwgd3JhcHBlcik7XG4gICAgICAgICAgICAgICAgaWYgKGZsaSkge1xuICAgICAgICAgICAgICAgICAgICBmbGkuY2xhc3NMaXN0LnJlbW92ZShGT0NVU0VEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xpLmNsYXNzTGlzdC5hZGQoRk9DVVNFRCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dJdGVtT25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrSGFuZGxlcihlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5oYXNGaWVsZCA9IGZ1bmN0aW9uIChpdGVtcywgZmllbGQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtc1tpXVtmaWVsZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuZ2V0V3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1RhcEhvbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGFwSG9sZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgdHJndCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBjbGkgPSB0aGlzLmdldExJKHRyZ3QpO1xuICAgICAgICAgICAgICAgIHZhciBpc0luc3RMSSA9IGNsaSAmJiAhZWoyX2Jhc2VfMy5pc051bGxPclVuZGVmaW5lZChlajJfYmFzZV81LmNsb3Nlc3QoY2xpLCAnLicgKyBXUkFQUEVSKSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW5zdExJICYmIGUudHlwZSA9PT0gJ2NsaWNrJyAmJiAhY2xpLmNsYXNzTGlzdC5jb250YWlucyhIRUFERVIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TElTZWxlY3RlZChjbGkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmF2SWR4ID0gdGhpcy5nZXRJbmRleChjbGkudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbShuYXZJZHgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIHsgZWxlbWVudDogY2xpLCBpdGVtOiBpdGVtIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNJbnN0TEkgJiYgKGUudHlwZSA9PT0gJ21vdXNlb3ZlcicgfHwgZWoyX2Jhc2VfNC5Ccm93c2VyLmlzRGV2aWNlIHx8IHRoaXMuc2hvd0l0ZW1PbkNsaWNrKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdWwgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGkuY2xhc3NMaXN0LmNvbnRhaW5zKEhFQURFUikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsID0gd3JhcHBlci5jaGlsZHJlblt0aGlzLm5hdklkeC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQW5pbWF0aW9uKHVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignb25PcGVuJywgeyBlbGVtZW50OiB1bCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGkgPSB0aGlzLmdldExJQnlDbGFzcyh1bCwgU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNsaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaS5jbGFzc0xpc3QucmVtb3ZlKFNFTEVDVEVEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzUuZGV0YWNoKGNsaS5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2SWR4LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbGkuY2xhc3NMaXN0LmNvbnRhaW5zKFNFUEFSQVRPUikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hvd1N1Yk1lbnUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdWwgPSBjbGkucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xpSWR4ID0gdGhpcy5nZXRJZHgoY3VsLCBjbGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5Ccm93c2VyLmlzRGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdWxJZHggPSB0aGlzLmdldElkeCh3cmFwcGVyLCBjdWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5uYXZJZHhbY3VsSWR4XSA9PT0gY2xpSWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93U3ViTWVudSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdWxJZHggIT09IHRoaXMubmF2SWR4Lmxlbmd0aCAmJiAoZS50eXBlICE9PSAnbW91c2VvdmVyJyB8fCBzaG93U3ViTWVudSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGkgPSB0aGlzLmdldExJQnlDbGFzcyhjdWwsIFNFTEVDVEVEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGkuY2xhc3NMaXN0LnJlbW92ZShTRUxFQ1RFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTWVudShjdWxJZHggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd1N1Yk1lbnUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMubmF2SWR4LmNvbmNhdChjbGlJZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbShpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZW92ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMSVNlbGVjdGVkKGNsaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1lbnUoY2xpLCBpdGVtLCBudWxsLCBudWxsLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2SWR4LnB1c2goY2xpSWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgIT09ICdtb3VzZW92ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyZ3QudGFnTmFtZSAhPT0gJ1VMJyB8fCB0cmd0LnBhcmVudEVsZW1lbnQgIT09IHdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2xpIHx8ICFjbGkucXVlcnlTZWxlY3RvcignLicgKyBDQVJFVCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuc2V0TElTZWxlY3RlZCA9IGZ1bmN0aW9uIChsaSkge1xuICAgICAgICAgICAgdmFyIHNsaSA9IHRoaXMuZ2V0TElCeUNsYXNzKGxpLnBhcmVudEVsZW1lbnQsIFNFTEVDVEVEKTtcbiAgICAgICAgICAgIGlmIChzbGkpIHtcbiAgICAgICAgICAgICAgICBzbGkuY2xhc3NMaXN0LnJlbW92ZShTRUxFQ1RFRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKEZPQ1VTRUQpO1xuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChTRUxFQ1RFRCk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5nZXRMSUJ5Q2xhc3MgPSBmdW5jdGlvbiAodWwsIGNsYXNzbmFtZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVsLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc25hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbiAobmF2SWR4KSB7XG4gICAgICAgICAgICBuYXZJZHggPSBuYXZJZHguc2xpY2UoKTtcbiAgICAgICAgICAgIHZhciBpZHggPSBuYXZJZHgucG9wKCk7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKG5hdklkeCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXNbaWR4XTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmdldEl0ZW1zID0gZnVuY3Rpb24gKG5hdklkeCkge1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmF2SWR4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBpdGVtc1tuYXZJZHhbaV1dLml0ZW1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuZ2V0SWR4ID0gZnVuY3Rpb24gKHVsLCBsaSwgc2tpcEhkcikge1xuICAgICAgICAgICAgaWYgKHNraXBIZHIgPT09IHZvaWQgMCkgeyBza2lwSGRyID0gdHJ1ZTsgfVxuICAgICAgICAgICAgdmFyIGlkeCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodWwuY2hpbGRyZW4sIGxpKTtcbiAgICAgICAgICAgIGlmIChza2lwSGRyICYmIHVsLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5jb250YWlucyhIRUFERVIpKSB7XG4gICAgICAgICAgICAgICAgaWR4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuZ2V0TEkgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgaWYgKGVsZW0udGFnTmFtZSA9PT0gJ0xJJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVqMl9iYXNlXzUuY2xvc2VzdChlbGVtLCAnbGknKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLm9uUHJvcGVydHlDaGFuZ2VkID0gZnVuY3Rpb24gKG5ld1Byb3AsIG9sZFByb3ApIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobmV3UHJvcCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nzc0NsYXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRQcm9wLmNzc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKG9sZFByb3AuY3NzQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3AuY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQobmV3UHJvcC5jc3NDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5hYmxlUnRsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShSVEwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbHRlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXIgPSBuZXdQcm9wLmZpbHRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzaG93SXRlbU9uQ2xpY2snOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bldpcmVFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0l0ZW1PbkNsaWNrID0gbmV3UHJvcC5zaG93SXRlbU9uQ2xpY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd0YXJnZXQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bldpcmVFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3UHJvcC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnVuV2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRFbGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuQnJvd3Nlci5pc0lvcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoTW9kdWxlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLnRhcmdldEVsZW0sICdjb250ZXh0bWVudScsIHRoaXMuY21lbnVIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuZ2V0U2Nyb2xsYWJsZVBhcmVudHModGhpcy50YXJnZXRFbGVtKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudF8yID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5yZW1vdmUocGFyZW50XzIsICdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5Ccm93c2VyLmlzRGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKHdyYXBwZXIsICdtb3VzZW92ZXInLCB0aGlzLm1vdmVySGFuZGxlcik7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKGRvY3VtZW50LCAnbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZShkb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5rZXlib2FyZE1vZHVsZS5kZXN0cm95KCk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS50b2dnbGVBbmltYXRpb24gPSBmdW5jdGlvbiAodWwsIGlzTWVudU9wZW4pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoaXNNZW51T3BlbiA9PT0gdm9pZCAwKSB7IGlzTWVudU9wZW4gPSB0cnVlOyB9XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltYXRpb25TZXR0aW5ncy5lZmZlY3QgPT09ICdOb25lJyB8fCAhaXNNZW51T3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kKHVsLCBpc01lbnVPcGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLmFuaW1hdGUodWwsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5hbmltYXRpb25TZXR0aW5ncy5lZmZlY3QsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmFuaW1hdGlvblNldHRpbmdzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogdGhpcy5hbmltYXRpb25TZXR0aW5ncy5lYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IG9wdGlvbnMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmQob3B0aW9ucy5lbGVtZW50LCBpc01lbnVPcGVuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKHVsLCBpc01lbnVPcGVuKSB7XG4gICAgICAgICAgICBpZiAoaXNNZW51T3Blbikge1xuICAgICAgICAgICAgICAgIHVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIHVsLnN0eWxlLm1heEhlaWdodCA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignb25PcGVuJywgeyBlbGVtZW50OiB1bCB9KTtcbiAgICAgICAgICAgICAgICBpZiAodWwucXVlcnlTZWxlY3RvcignLicgKyBGT0NVU0VEKSkge1xuICAgICAgICAgICAgICAgICAgICB1bC5xdWVyeVNlbGVjdG9yKCcuJyArIEZPQ1VTRUQpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBlbGUgPSB0aGlzLmdldFdyYXBwZXIoKS5jaGlsZHJlblt0aGlzLmdldElkeCh0aGlzLmdldFdyYXBwZXIoKSwgdWwpIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZS5xdWVyeVNlbGVjdG9yKCcuJyArIFNFTEVDVEVEKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodWwgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmxpID0gdGhpcy5nZXRMSUJ5Q2xhc3ModGhpcy5lbGVtZW50LCBGT0NVU0VEKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxpLmNsYXNzTGlzdC5yZW1vdmUoRk9DVVNFRCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaSA9IHRoaXMuZ2V0TElCeUNsYXNzKHRoaXMuZWxlbWVudCwgU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGkuY2xhc3NMaXN0LnJlbW92ZShTRUxFQ1RFRCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzUuZGV0YWNoKHVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5nZXRQZXJzaXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmdldE1vZHVsZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2NvbnRleHRtZW51JztcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmdldEluZGV4ID0gZnVuY3Rpb24gKGRhdGEsIGl0ZW1zLCBuYXZJZHgsIGlzQ2FsbEJhY2spIHtcbiAgICAgICAgICAgIGlmIChpdGVtcyA9PT0gdm9pZCAwKSB7IGl0ZW1zID0gdGhpcy5pdGVtczsgfVxuICAgICAgICAgICAgaWYgKG5hdklkeCA9PT0gdm9pZCAwKSB7IG5hdklkeCA9IFtdOyB9XG4gICAgICAgICAgICBpZiAoaXNDYWxsQmFjayA9PT0gdm9pZCAwKSB7IGlzQ2FsbEJhY2sgPSBmYWxzZTsgfVxuICAgICAgICAgICAgdmFyIGl0ZW07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udGV4dCA9PT0gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBuYXZJZHgucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0uaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdklkeCA9IHRoaXMuZ2V0SW5kZXgoZGF0YSwgaXRlbS5pdGVtcywgbmF2SWR4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hdklkeFtuYXZJZHgubGVuZ3RoIC0gMV0gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gbGVuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdklkeC5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdklkeC51bnNoaWZ0KGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBsZW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZJZHgucHVzaCgtMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKCFpc0NhbGxCYWNrICYmIG5hdklkeFswXSA9PT0gLTEpID8gW10gOiBuYXZJZHg7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5lbmFibGVJdGVtcyA9IGZ1bmN0aW9uIChpdGVtcywgZW5hYmxlKSB7XG4gICAgICAgICAgICBpZiAoZW5hYmxlID09PSB2b2lkIDApIHsgZW5hYmxlID0gdHJ1ZTsgfVxuICAgICAgICAgICAgdmFyIHVsO1xuICAgICAgICAgICAgdmFyIGlkeDtcbiAgICAgICAgICAgIHZhciBuYXZJZHg7XG4gICAgICAgICAgICB2YXIgZGlzYWJsZWQgPSBESVNBQkxFRDtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmF2SWR4ID0gdGhpcy5nZXRJbmRleChpdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgaWR4ID0gbmF2SWR4LnBvcCgpO1xuICAgICAgICAgICAgICAgIHVsID0gd3JhcHBlci5jaGlsZHJlbltuYXZJZHgubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICBpZiAodWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuQnJvd3Nlci5pc0RldmljZSAmJiAhdWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdlLWNvbnRleHRtZW51JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bC5jaGlsZHJlbltpZHggKyAxXS5jbGFzc0xpc3QucmVtb3ZlKGRpc2FibGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsLmNoaWxkcmVuW2lkeF0uY2xhc3NMaXN0LnJlbW92ZShkaXNhYmxlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5Ccm93c2VyLmlzRGV2aWNlICYmICF1bC5jbGFzc0xpc3QuY29udGFpbnMoJ2UtY29udGV4dG1lbnUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsLmNoaWxkcmVuW2lkeCArIDFdLmNsYXNzTGlzdC5hZGQoZGlzYWJsZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWwuY2hpbGRyZW5baWR4XS5jbGFzc0xpc3QuYWRkKGRpc2FibGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnNob3dJdGVtcyA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgdGhpcy5zaG93SGlkZUl0ZW1zKGl0ZW1zLCBmYWxzZSk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5oaWRlSXRlbXMgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0hpZGVJdGVtcyhpdGVtcywgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5zaG93SGlkZUl0ZW1zID0gZnVuY3Rpb24gKGl0ZW1zLCBpc2hpZGUpIHtcbiAgICAgICAgICAgIHZhciB1bDtcbiAgICAgICAgICAgIHZhciBpZHg7XG4gICAgICAgICAgICB2YXIgbmF2SWR4O1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXIoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuYXZJZHggPSB0aGlzLmdldEluZGV4KGl0ZW1zW2ldKTtcbiAgICAgICAgICAgICAgICBpZHggPSBuYXZJZHgucG9wKCk7XG4gICAgICAgICAgICAgICAgdWwgPSB3cmFwcGVyLmNoaWxkcmVuW25hdklkeC5sZW5ndGhdO1xuICAgICAgICAgICAgICAgIGlmICh1bCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNoaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5Ccm93c2VyLmlzRGV2aWNlICYmICF1bC5jbGFzc0xpc3QuY29udGFpbnMoJ2UtY29udGV4dG1lbnUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsLmNoaWxkcmVuW2lkeCArIDFdLmNsYXNzTGlzdC5hZGQoSElERSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bC5jaGlsZHJlbltpZHhdLmNsYXNzTGlzdC5hZGQoSElERSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5Ccm93c2VyLmlzRGV2aWNlICYmICF1bC5jbGFzc0xpc3QuY29udGFpbnMoJ2UtY29udGV4dG1lbnUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsLmNoaWxkcmVuW2lkeCArIDFdLmNsYXNzTGlzdC5yZW1vdmUoSElERSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bC5jaGlsZHJlbltpZHhdLmNsYXNzTGlzdC5yZW1vdmUoSElERSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5yZW1vdmVJdGVtcyA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgdmFyIGlkeDtcbiAgICAgICAgICAgIHZhciBuYXZJZHg7XG4gICAgICAgICAgICB2YXIgaWl0ZW1zO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG5hdklkeCA9IHRoaXMuZ2V0SW5kZXgoaXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgIGlkeCA9IG5hdklkeC5wb3AoKTtcbiAgICAgICAgICAgICAgICBpaXRlbXMgPSB0aGlzLmdldEl0ZW1zKG5hdklkeCk7XG4gICAgICAgICAgICAgICAgaWl0ZW1zLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgICAgIGlmICghbmF2SWR4Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV81LmRldGFjaCh0aGlzLmVsZW1lbnQuY2hpbGRyZW5baWR4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiAoaXRlbXMsIHRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0SXRlbXMoaXRlbXMsIHRleHQpO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlID0gZnVuY3Rpb24gKGl0ZW1zLCB0ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydEl0ZW1zKGl0ZW1zLCB0ZXh0LCBmYWxzZSk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5pbnNlcnRJdGVtcyA9IGZ1bmN0aW9uIChpdGVtcywgdGV4dCwgaXNBZnRlcikge1xuICAgICAgICAgICAgaWYgKGlzQWZ0ZXIgPT09IHZvaWQgMCkgeyBpc0FmdGVyID0gdHJ1ZTsgfVxuICAgICAgICAgICAgdmFyIGxpO1xuICAgICAgICAgICAgdmFyIGlkeDtcbiAgICAgICAgICAgIHZhciBuYXZJZHg7XG4gICAgICAgICAgICB2YXIgaWl0ZW1zO1xuICAgICAgICAgICAgdmFyIG1lbnVpdGVtO1xuICAgICAgICAgICAgdmFyIHNob3dJY29uO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG5hdklkeCA9IHRoaXMuZ2V0SW5kZXgodGV4dCk7XG4gICAgICAgICAgICAgICAgaWR4ID0gbmF2SWR4LnBvcCgpO1xuICAgICAgICAgICAgICAgIGlpdGVtcyA9IHRoaXMuZ2V0SXRlbXMobmF2SWR4KTtcbiAgICAgICAgICAgICAgICBtZW51aXRlbSA9IG5ldyBNZW51SXRlbShpaXRlbXNbMF0sIG51bGwsIGl0ZW1zW2ldLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpaXRlbXMuc3BsaWNlKGlzQWZ0ZXIgPyBpZHggKyAxIDogaWR4LCAwLCBtZW51aXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKCFuYXZJZHgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IGlzQWZ0ZXIgPyBpZHggKyAxIDogaWR4O1xuICAgICAgICAgICAgICAgICAgICBzaG93SWNvbiA9IHRoaXMuaGFzRmllbGQoaWl0ZW1zLCAnaWNvbkNzcycpO1xuICAgICAgICAgICAgICAgICAgICBsaSA9IHRoaXMuY3JlYXRlSXRlbShbbWVudWl0ZW1dLCBzaG93SWNvbiwgJ21lbnUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUobGksIHRoaXMuZWxlbWVudC5jaGlsZHJlbltpZHhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5nZXRaSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb247XG4gICAgICAgICAgICB2YXIgcHJvcHM7XG4gICAgICAgICAgICB2YXIgekluZGV4ID0gWyc5OTknXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkb2N1bWVudC5ib2R5LmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgIGluZGV4ID0gcHJvcHMuZ2V0UHJvcGVydHlWYWx1ZSgnei1pbmRleCcpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gcHJvcHMuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09ICdhdXRvJyAmJiBwb3NpdGlvbiAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgICAgICAgICAgekluZGV4LnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoTWF0aC5tYXguYXBwbHkoTWF0aCwgekluZGV4KSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudW5XaXJlRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgWyd0b3AnLCAnbGVmdCcsICdkaXNwbGF5JywgJ3JvbGUnLCAndGFiaW5kZXgnXS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdyYXBwZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5lbGVtZW50LCB3cmFwcGVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzUuZGV0YWNoKHdyYXBwZXIpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQ29udGV4dE1lbnU7XG4gICAgfShlajJfYmFzZV8xLkNvbXBvbmVudCkpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIENvbnRleHRNZW51LnByb3RvdHlwZSwgXCJjc3NDbGFzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIENvbnRleHRNZW51LnByb3RvdHlwZSwgXCJmaWx0ZXJcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBDb250ZXh0TWVudS5wcm90b3R5cGUsIFwic2hvd0l0ZW1PbkNsaWNrXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzQuQ29sbGVjdGlvbihbXSwgTWVudUl0ZW0pXG4gICAgXSwgQ29udGV4dE1lbnUucHJvdG90eXBlLCBcIml0ZW1zXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgQ29udGV4dE1lbnUucHJvdG90eXBlLCBcInRhcmdldFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KHsgZHVyYXRpb246IDQwMCwgZWFzaW5nOiAnZWFzZScsIGVmZmVjdDogJ1NsaWRlRG93bicgfSlcbiAgICBdLCBDb250ZXh0TWVudS5wcm90b3R5cGUsIFwiYW5pbWF0aW9uU2V0dGluZ3NcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5FdmVudCgpXG4gICAgXSwgQ29udGV4dE1lbnUucHJvdG90eXBlLCBcImJlZm9yZUl0ZW1SZW5kZXJcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5FdmVudCgpXG4gICAgXSwgQ29udGV4dE1lbnUucHJvdG90eXBlLCBcImJlZm9yZU9wZW5cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5FdmVudCgpXG4gICAgXSwgQ29udGV4dE1lbnUucHJvdG90eXBlLCBcIm9uT3BlblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLkV2ZW50KClcbiAgICBdLCBDb250ZXh0TWVudS5wcm90b3R5cGUsIFwib25DbG9zZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLkV2ZW50KClcbiAgICBdLCBDb250ZXh0TWVudS5wcm90b3R5cGUsIFwic2VsZWN0XCIsIHZvaWQgMCk7XG4gICAgQ29udGV4dE1lbnUgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Ob3RpZnlQcm9wZXJ0eUNoYW5nZXNcbiAgICBdLCBDb250ZXh0TWVudSk7XG4gICAgZXhwb3J0cy5Db250ZXh0TWVudSA9IENvbnRleHRNZW51O1xuICAgIGV4cG9ydHMuY29udGV4dE1lbnVCdWlsZGVyID0gZWoyX2Jhc2VfMS5DcmVhdGVCdWlsZGVyKENvbnRleHRNZW51KTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGV4dC1tZW51L2NvbnRleHQtbWVudS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItbGlzdHNcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi90YWJcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCB0YWJfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQodGFiXzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90YWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIi4uL3Rvb2xiYXIvdG9vbGJhclwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIsIGVqMl9iYXNlXzMsIGVqMl9iYXNlXzQsIGVqMl9iYXNlXzUsIHRvb2xiYXJfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgQ0xTX1RBQiA9ICdlLXRhYic7XG4gICAgdmFyIENMU19IRUFERVIgPSAnZS1oZWFkZXInO1xuICAgIHZhciBDTFNfQ09OVEVOVCA9ICdlLWNvbnRlbnQnO1xuICAgIHZhciBDTFNfSVRFTVMgPSAnZS1pdGVtcyc7XG4gICAgdmFyIENMU19JVEVNID0gJ2UtaXRlbSc7XG4gICAgdmFyIENMU19URU1QTEFURSA9ICdlLXRlbXBsYXRlJztcbiAgICB2YXIgQ0xTX1JUTCA9ICdlLXJ0bCc7XG4gICAgdmFyIENMU19BQ1RJVkUgPSAnZS1hY3RpdmUnO1xuICAgIHZhciBDTFNfRElTQUJMRSA9ICdlLWRpc2FibGUnO1xuICAgIHZhciBDTFNfSElEREVOID0gJ2UtaGlkZGVuJztcbiAgICB2YXIgQ0xTX0ZPQ1VTID0gJ2UtZm9jdXNlZCc7XG4gICAgdmFyIENMU19JQ09OUyA9ICdlLWljb25zJztcbiAgICB2YXIgQ0xTX0lDT04gPSAnZS1pY29uJztcbiAgICB2YXIgQ0xTX0lDT05fQ0xPU0UgPSAnZS1jbG9zZS1pY29uJztcbiAgICB2YXIgQ0xTX0NMT1NFX1NIT1cgPSAnZS1jbG9zZS1zaG93JztcbiAgICB2YXIgQ0xTX1RFWFQgPSAnZS10YWItdGV4dCc7XG4gICAgdmFyIENMU19JTkRJQ0FUT1IgPSAnZS1pbmRpY2F0b3InO1xuICAgIHZhciBDTFNfV1JBUCA9ICdlLXRhYi13cmFwJztcbiAgICB2YXIgQ0xTX1RFWFRfV1JBUCA9ICdlLXRleHQtd3JhcCc7XG4gICAgdmFyIENMU19UQUJfSUNPTiA9ICdlLXRhYi1pY29uJztcbiAgICB2YXIgQ0xTX1RCX0lURU1TID0gJ2UtdG9vbGJhci1pdGVtcyc7XG4gICAgdmFyIENMU19UQl9JVEVNID0gJ2UtdG9vbGJhci1pdGVtJztcbiAgICB2YXIgQ0xTX1RCX1BPUCA9ICdlLXRvb2xiYXItcG9wJztcbiAgICB2YXIgQ0xTX1RCX1BPUFVQID0gJ2UtdG9vbGJhci1wb3B1cCc7XG4gICAgdmFyIENMU19QT1BVUF9PUEVOID0gJ2UtcG9wdXAtb3Blbic7XG4gICAgdmFyIENMU19QT1BVUF9DTE9TRSA9ICdlLXBvcHVwLWNsb3NlJztcbiAgICB2YXIgQ0xTX1BST0dSRVNTID0gJ2UtcHJvZ3Jlc3MnO1xuICAgIHZhciBDTFNfSUdOT1JFID0gJ2UtaWdub3JlJztcbiAgICB2YXIgVGFiQWN0aW9uU2V0dGluZ3MgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoVGFiQWN0aW9uU2V0dGluZ3MsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIFRhYkFjdGlvblNldHRpbmdzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBUYWJBY3Rpb25TZXR0aW5ncztcbiAgICB9KGVqMl9iYXNlXzIuQ2hpbGRQcm9wZXJ0eSkpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdTbGlkZUxlZnRJbicpXG4gICAgXSwgVGFiQWN0aW9uU2V0dGluZ3MucHJvdG90eXBlLCBcImVmZmVjdFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KDYwMClcbiAgICBdLCBUYWJBY3Rpb25TZXR0aW5ncy5wcm90b3R5cGUsIFwiZHVyYXRpb25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnZWFzZScpXG4gICAgXSwgVGFiQWN0aW9uU2V0dGluZ3MucHJvdG90eXBlLCBcImVhc2luZ1wiLCB2b2lkIDApO1xuICAgIGV4cG9ydHMuVGFiQWN0aW9uU2V0dGluZ3MgPSBUYWJBY3Rpb25TZXR0aW5ncztcbiAgICB2YXIgVGFiQW5pbWF0aW9uU2V0dGluZ3MgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoVGFiQW5pbWF0aW9uU2V0dGluZ3MsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIFRhYkFuaW1hdGlvblNldHRpbmdzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBUYWJBbmltYXRpb25TZXR0aW5ncztcbiAgICB9KGVqMl9iYXNlXzIuQ2hpbGRQcm9wZXJ0eSkpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkNvbXBsZXgoeyBlZmZlY3Q6ICdTbGlkZUxlZnRJbicsIGR1cmF0aW9uOiA2MDAsIGVhc2luZzogJ2Vhc2UnIH0sIFRhYkFjdGlvblNldHRpbmdzKVxuICAgIF0sIFRhYkFuaW1hdGlvblNldHRpbmdzLnByb3RvdHlwZSwgXCJwcmV2aW91c1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkNvbXBsZXgoeyBlZmZlY3Q6ICdTbGlkZVJpZ2h0SW4nLCBkdXJhdGlvbjogNjAwLCBlYXNpbmc6ICdlYXNlJyB9LCBUYWJBY3Rpb25TZXR0aW5ncylcbiAgICBdLCBUYWJBbmltYXRpb25TZXR0aW5ncy5wcm90b3R5cGUsIFwibmV4dFwiLCB2b2lkIDApO1xuICAgIGV4cG9ydHMuVGFiQW5pbWF0aW9uU2V0dGluZ3MgPSBUYWJBbmltYXRpb25TZXR0aW5ncztcbiAgICB2YXIgSGVhZGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEhlYWRlciwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBIZWFkZXI7XG4gICAgfShlajJfYmFzZV8yLkNoaWxkUHJvcGVydHkpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBIZWFkZXIucHJvdG90eXBlLCBcInRleHRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBIZWFkZXIucHJvdG90eXBlLCBcImljb25Dc3NcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnbGVmdCcpXG4gICAgXSwgSGVhZGVyLnByb3RvdHlwZSwgXCJpY29uUG9zaXRpb25cIiwgdm9pZCAwKTtcbiAgICBleHBvcnRzLkhlYWRlciA9IEhlYWRlcjtcbiAgICB2YXIgVGFiSXRlbSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhUYWJJdGVtLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBUYWJJdGVtKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBUYWJJdGVtO1xuICAgIH0oZWoyX2Jhc2VfMi5DaGlsZFByb3BlcnR5KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuQ29tcGxleCh7fSwgSGVhZGVyKVxuICAgIF0sIFRhYkl0ZW0ucHJvdG90eXBlLCBcImhlYWRlclwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIFRhYkl0ZW0ucHJvdG90eXBlLCBcImNvbnRlbnRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBUYWJJdGVtLnByb3RvdHlwZSwgXCJjc3NDbGFzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIFRhYkl0ZW0ucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHZvaWQgMCk7XG4gICAgZXhwb3J0cy5UYWJJdGVtID0gVGFiSXRlbTtcbiAgICB2YXIgVGFiID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKFRhYiwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gVGFiKG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnQpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy5wcmV2SW5kZXggPSAwO1xuICAgICAgICAgICAgX3RoaXMuc2hvdyA9IHsgbmFtZTogJ1NsaWRlRG93bicsIGR1cmF0aW9uOiAxMDAgfTtcbiAgICAgICAgICAgIF90aGlzLmhpZGUgPSB7IG5hbWU6ICdTbGlkZVVwJywgZHVyYXRpb246IDEwMCB9O1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZU9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIF90aGlzLmFuaW1PYmogPSBuZXcgZWoyX2Jhc2VfNS5BbmltYXRpb24oX3RoaXMuYW5pbWF0ZU9wdGlvbnMpO1xuICAgICAgICAgICAgX3RoaXMubWF4SGVpZ2h0ID0gMDtcbiAgICAgICAgICAgIF90aGlzLnRpdGxlID0gJ0Nsb3NlJztcbiAgICAgICAgICAgIF90aGlzLmtleUNvbmZpZ3MgPSB7XG4gICAgICAgICAgICAgICAgdGFiOiAndGFiJyxcbiAgICAgICAgICAgICAgICBob21lOiAnaG9tZScsXG4gICAgICAgICAgICAgICAgZW5kOiAnZW5kJyxcbiAgICAgICAgICAgICAgICBlbnRlcjogJ2VudGVyJyxcbiAgICAgICAgICAgICAgICBzcGFjZTogJ3NwYWNlJyxcbiAgICAgICAgICAgICAgICBkZWxldGU6ICdkZWxldGUnLFxuICAgICAgICAgICAgICAgIG1vdmVMZWZ0OiAnbGVmdGFycm93JyxcbiAgICAgICAgICAgICAgICBtb3ZlUmlnaHQ6ICdyaWdodGFycm93JyxcbiAgICAgICAgICAgICAgICBtb3ZlVXA6ICd1cGFycm93JyxcbiAgICAgICAgICAgICAgICBtb3ZlRG93bjogJ2Rvd25hcnJvdydcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgVGFiLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLnRiT2JqKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGJPYmouZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51bldpcmVFdmVudHMoKTtcbiAgICAgICAgICAgIFsncm9sZScsICdhcmlhLWRpc2FibGVkJywgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsICd0YWJpbmRleCcsICdhcmlhLW9yaWVudGF0aW9uJ10uZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodmFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY250RWxlID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX1RBQiArICcgPiAuJyArIENMU19DT05URU5ULCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMU19URU1QTEFURSk7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGNudEVsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY250RWxlLmlubmVySFRNTCA9IHRoaXMuY250O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdkZXN0cm95ZWQnKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5wcmVSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmlzUG9wdXAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IGVqMl9iYXNlXzMuQnJvd3Nlci5pbmZvLm5hbWU7XG4gICAgICAgICAgICB2YXIgY3NzID0gKG5hbWUgPT09ICdtc2llJykgPyAnZS1pZScgOiAobmFtZSA9PT0gJ2VkZ2UnKSA/ICdlLWVkZ2UnIDogKG5hbWUgPT09ICdzYWZhcmknKSA/ICdlLXNhZmFyaScgOiAnJztcbiAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5lbGVtZW50LCB7ICd3aWR0aCc6IGVqMl9iYXNlXzMuZm9ybWF0VW5pdCh0aGlzLndpZHRoKSwgJ2hlaWdodCc6IGVqMl9iYXNlXzMuZm9ybWF0VW5pdCh0aGlzLmhlaWdodCkgfSk7XG4gICAgICAgICAgICB0aGlzLnNldENzc0NsYXNzKHRoaXMuZWxlbWVudCwgdGhpcy5jc3NDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCB7IHJvbGU6ICd0YWJsaXN0JywgJ2FyaWEtZGlzYWJsZWQnOiAnZmFsc2UnLCAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JzogJycgfSk7XG4gICAgICAgICAgICB0aGlzLnNldENzc0NsYXNzKHRoaXMuZWxlbWVudCwgY3NzLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckNvbnRhaW5lcigpO1xuICAgICAgICAgICAgdGhpcy53aXJlRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5yZW5kZXJDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPiAwICYmIHRoaXMuZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWoyX2Jhc2VfNC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX0NPTlRFTlQgfSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0T3JpZW50YXRpb24odGhpcy5oZWFkZXJQbGFjZW1lbnQsIGVqMl9iYXNlXzQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19IRUFERVIgfSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUZW1wbGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5lbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGVtcGxhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMU19URU1QTEFURSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX0hFQURFUiwgdGhpcy5lbGVtZW50KSkgJiYgIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX0NPTlRFTlQsIHRoaXMuZWxlbWVudCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIZWFkZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRiSXRlbXMgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfVEJfSVRFTVMsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudGJJdGVtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNS5yaXBwbGVFZmZlY3QodGhpcy50Ykl0ZW1zLCB7IHNlbGVjdG9yOiAnLmUtdGFiLXdyYXAnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCX0lURU0sIHRoaXMuZWxlbWVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRiSXRlbXMgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfVEJfSVRFTVMsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmRyTGluZSA9IGVqMl9iYXNlXzQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19JTkRJQ0FUT1IgKyAnICcgKyBDTFNfSElEREVOICsgJyAnICsgQ0xTX0lHTk9SRSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjckNudCA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuZS1oc2Nyb2xsLWNvbnRlbnQnLCB0aGlzLnRiSXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoc2NyQ250KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyQ250Lmluc2VydEJlZm9yZSh0aGlzLmJkckxpbmUsIHNjckNudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGJJdGVtcy5pbnNlcnRCZWZvcmUodGhpcy5iZHJMaW5lLCB0aGlzLnRiSXRlbXMuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50SGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UlRMKHRoaXMuZW5hYmxlUnRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5yZW5kZXJIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHRhYkl0ZW1zID0gW107XG4gICAgICAgICAgICB0aGlzLmhkckVsZSA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19IRUFERVIsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmJ0bkNscyA9IGVqMl9iYXNlXzQuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBDTFNfSUNPTlMgKyAnICcgKyBDTFNfSUNPTl9DTE9TRSwgYXR0cnM6IHsgdGl0bGU6IHRoaXMudGl0bGUgfSB9KS5vdXRlckhUTUw7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRhYkl0ZW1zID0gdGhpcy5wYXJzZU9iamVjdCh0aGlzLml0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IHRoaXMuaGRyRWxlLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgaGRySXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaGRySXRlbXMucHVzaCh0aGlzLmhkckVsZS5jaGlsZHJlbi5pdGVtKGkpLmlubmVySFRNTCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZHJFbGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGRyRWxlLmFwcGVuZENoaWxkKGVqMl9iYXNlXzQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19JVEVNUyB9KSk7XG4gICAgICAgICAgICAgICAgICAgIGhkckl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0ciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IENMU19JVEVNLCBpZDogQ0xTX0lURU0gKyAnXycgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiAndGFiJywgJ2FyaWEtY29udHJvbHMnOiBDTFNfQ09OVEVOVCArICdfJyArIGluZGV4LCAnYXJpYS1zZWxlY3RlZCc6ICdmYWxzZScgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eHQgPSBlajJfYmFzZV80LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogQ0xTX1RFWFQsIGlubmVySFRNTDogaXRlbSwgYXR0cnM6IHsgJ3JvbGUnOiAncHJlc2VudGF0aW9uJyB9IH0pLm91dGVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ID0gZWoyX2Jhc2VfNC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX1RFWFRfV1JBUCwgaW5uZXJIVE1MOiB0eHQgKyBfdGhpcy5idG5DbHMgfSkub3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXAgPSBlajJfYmFzZV80LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfV1JBUCwgaW5uZXJIVE1MOiBjb250LCBhdHRyczogeyB0YWJJbmRleDogJy0xJyB9IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX0lURU1TLCBfdGhpcy5lbGVtZW50KS5hcHBlbmRDaGlsZChlajJfYmFzZV80LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIGF0dHIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19JVEVNLCBfdGhpcy5lbGVtZW50KVtpbmRleF0uYXBwZW5kQ2hpbGQod3JhcCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGJPYmogPSBuZXcgdG9vbGJhcl8xLlRvb2xiYXIoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dNb2RlOiB0aGlzLm92ZXJmbG93TW9kZSxcbiAgICAgICAgICAgICAgICBpdGVtczogKHRhYkl0ZW1zLmxlbmd0aCAhPT0gMCkgPyB0YWJJdGVtcyA6IFtdLFxuICAgICAgICAgICAgICAgIGNsaWNrZWQ6IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy50Yk9iai5hcHBlbmRUbyh0aGlzLmhkckVsZSk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCB7ICdhcmlhLW9yaWVudGF0aW9uJzogJ2hvcml6b250YWwnIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRDbG9zZUJ1dHRvbih0aGlzLnNob3dDbG9zZUJ1dHRvbik7XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBoZWFkZXJQbGFjZW1lbnQ6ICh0aGlzLmVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0hFQURFUikpID8gJ1RvcCcgOiAnQm90dG9tJyB9LCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5yZW5kZXJDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jbnRFbGUgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfQ09OVEVOVCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHZhciBoZHJJdGVtID0gZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCX0lURU0sIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1RlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbnQgPSAodGhpcy5jbnRFbGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkgPyB0aGlzLmNudEVsZS5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudHMgPSB0aGlzLmNudEVsZS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhkckl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRzLmxlbmd0aCAtIDEgPj0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHMuaXRlbShpKS5jbGFzc05hbWUgKz0gQ0xTX0lURU07XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmF0dHJpYnV0ZXMoY29udGVudHMuaXRlbShpKSwgeyAncm9sZSc6ICd0YWJwYW5lbCcsICdhcmlhLWxhYmVsbGVkYnknOiBDTFNfSVRFTSArICdfJyArIGkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50cy5pdGVtKGkpLmlkID0gQ0xTX0NPTlRFTlQgKyAnXycgKyBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGluSFRNTCA9ICcnO1xuICAgICAgICAgICAgdmFyIHRiQ291bnQgPSBlajJfYmFzZV80LnNlbGVjdEFsbCgnLicgKyBDTFNfVEJfSVRFTSwgdGhpcy5lbGVtZW50KS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgdEl0ZW1zID0gW107XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChpdGVtLmhlYWRlci5pY29uUG9zaXRpb24pKSA/ICcnIDogaXRlbS5oZWFkZXIuaWNvblBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHZhciBjc3MgPSAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChpdGVtLmhlYWRlci5pY29uQ3NzKSkgPyAnJyA6IGl0ZW0uaGVhZGVyLmljb25Dc3M7XG4gICAgICAgICAgICAgICAgdmFyIHR4dCA9IGl0ZW0uaGVhZGVyLnRleHQ7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gKCh0YkNvdW50ID09PSAwKSA/IGluZGV4IDogKF90aGlzLmlzUmVwbGFjZSA9PT0gdHJ1ZSkgPyBpbmRleCA6IHRiQ291bnQgKyBpbmRleCk7XG4gICAgICAgICAgICAgICAgdmFyIGRpc2FibGVkID0gKGl0ZW0uZGlzYWJsZWQpID8gJyAnICsgQ0xTX0RJU0FCTEUgOiAnJztcbiAgICAgICAgICAgICAgICB2YXIgdEh0bWwgPSAoKHR4dCBpbnN0YW5jZW9mIE9iamVjdCkgPyB0eHQub3V0ZXJIVE1MIDogdHh0KTtcbiAgICAgICAgICAgICAgICB2YXIgdHh0RW1wdHkgPSAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodEh0bWwpICYmIHRIdG1sICE9PSAnJyk7XG4gICAgICAgICAgICAgICAgdmFyIHRFbGUgPSAodHh0RW1wdHkpID8gZWoyX2Jhc2VfNC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogQ0xTX1RFWFQsIGlubmVySFRNTDogdEh0bWwsIGF0dHJzOiB7ICdyb2xlJzogJ3ByZXNlbnRhdGlvbicgfVxuICAgICAgICAgICAgICAgIH0pLm91dGVySFRNTCA6ICcnO1xuICAgICAgICAgICAgICAgIHZhciBpY29uID0gZWoyX2Jhc2VfNC5jcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IENMU19JQ09OUyArICcgJyArIENMU19UQUJfSUNPTiArICcgJyArIENMU19JQ09OICsgJy0nICsgcG9zICsgJyAnICsgY3NzXG4gICAgICAgICAgICAgICAgfSkub3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgIGlmICgodHh0ID09PSAnJyB8fCB0eHQgPT09IHVuZGVmaW5lZCkgJiYgY3NzID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHR4dCAhPT0gJycgJiYgdHh0ICE9PSB1bmRlZmluZWQpICYmIGNzcyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluSFRNTCA9IChwb3MgPT09ICdsZWZ0JyB8fCBwb3MgPT09ICd0b3AnKSA/IGljb24gKyAnJyArIHRFbGUgOiB0RWxlICsgJycgKyBpY29uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5IVE1MID0gKGNzcyA9PT0gJycpID8gdEVsZSA6IGljb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRDb250ID0gZWoyX2Jhc2VfNC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX1RFWFRfV1JBUCwgaW5uZXJIVE1MOiBpbkhUTUwgKyAnJyArIF90aGlzLmJ0bkNscyB9KS5vdXRlckhUTUw7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXAgPSBlajJfYmFzZV80LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfV1JBUCwgaW5uZXJIVE1MOiB0Q29udCwgYXR0cnM6IHsgdGFiSW5kZXg6ICctMScgfSB9KTtcbiAgICAgICAgICAgICAgICB2YXIgYXR0ck9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IENMU19JVEVNICsgJ18nICsgaWQsIHJvbGU6ICd0YWInLCAnYXJpYS1zZWxlY3RlZCc6ICdmYWxzZSdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciB0SXRlbSA9IHsgaHRtbEF0dHJpYnV0ZXM6IGF0dHJPYmosIHRlbXBsYXRlOiB3cmFwLm91dGVySFRNTCB9O1xuICAgICAgICAgICAgICAgIHRJdGVtLmNzc0NsYXNzID0gaXRlbS5jc3NDbGFzcyArICcnICsgZGlzYWJsZWQgKyAnJyArICgoY3NzICE9PSAnJykgPyAnZS1pJyArIHBvcyA6ICcnKSArICcgJyArICgoIXR4dEVtcHR5KSA/IENMU19JQ09OIDogJycpO1xuICAgICAgICAgICAgICAgIGlmIChwb3MgPT09ICd0b3AnIHx8IHBvcyA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlLXZlcnRpY2FsLWljb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdEl0ZW1zLnB1c2godEl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdEl0ZW1zO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnJlbW92ZUFjdGl2ZUNsYXNzID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICB2YXIgaGRyQWN0RWxlID0gZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJzpyb290IC4nICsgQ0xTX0hFQURFUiArICcgLicgKyBDTFNfVEJfSVRFTSArICcuJyArIENMU19BQ1RJVkUsIHRoaXMuZWxlbWVudClbMF07XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoaGRyQWN0RWxlKSkge1xuICAgICAgICAgICAgICAgIGhkckFjdEVsZS5jbGFzc0xpc3QucmVtb3ZlKENMU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIHZhciBubyA9IHRoaXMuZXh0SW5kZXgoaGRyQWN0RWxlLmlkKTtcbiAgICAgICAgICAgICAgICB2YXIgdHJnID0gdGhpcy5maW5kRWxlKGVqMl9iYXNlXzIuc2VsZWN0KCcuZS1jb250ZW50JywgdGhpcy5lbGVtZW50KS5jaGlsZHJlbiwgQ0xTX0NPTlRFTlQgKyAnXycgKyBubyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuY2hlY2tQb3B1cE92ZXJmbG93ID0gZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgdGhpcy50YlBvcCA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19UQl9QT1AsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgcG9wSWNvbiA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuZS1ob3ItbmF2JywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHZhciB0YnJJdGVtcyA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19UQl9JVEVNUywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIGlmICgodGhpcy5lbmFibGVSdGwgJiYgKChwb3BJY29uLm9mZnNldExlZnQgKyBwb3BJY29uLm9mZnNldFdpZHRoKSA+IHRickl0ZW1zLm9mZnNldExlZnQpKVxuICAgICAgICAgICAgICAgIHx8ICghdGhpcy5lbmFibGVSdGwgJiYgcG9wSWNvbi5vZmZzZXRMZWZ0IDwgdGJySXRlbXMub2Zmc2V0V2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoQ0xTX1RCX1BPUFVQKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRiUG9wLmluc2VydEJlZm9yZShlbGUuY2xvbmVOb2RlKHRydWUpLCBlajJfYmFzZV80LnNlbGVjdEFsbCgnLicgKyBDTFNfVEJfUE9QVVAsIHRoaXMudGJQb3ApWzBdKTtcbiAgICAgICAgICAgICAgICBlbGUub3V0ZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5wb3B1cEhhbmRsZXIgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICB2YXIgcmlwRWxlID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5lLXJpcHBsZS1lbGVtZW50Jyk7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQocmlwRWxlKSkge1xuICAgICAgICAgICAgICAgIHJpcEVsZS5vdXRlckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfV1JBUCkuY2xhc3NMaXN0LnJlbW92ZSgnZS1yaXBwbGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGJJdGVtID0gZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCX0lURU1TICsgJyAuJyArIENMU19UQl9JVEVNLCB0aGlzLmhkckVsZSk7XG4gICAgICAgICAgICB2YXIgbGFzdENoaWxkID0gdGhpcy50Ykl0ZW1bdGhpcy50Ykl0ZW0ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAodGhpcy50Ykl0ZW0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoQ0xTX1RCX1BPUFVQKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRiSXRlbXMuYXBwZW5kQ2hpbGQodGFyZ2V0LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RFbGVJZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgICAgICB0YXJnZXQub3V0ZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQb3B1cE92ZXJmbG93KGxhc3RDaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZFbGUgPSB0aGlzLnRiSXRlbXMubGFzdENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQb3B1cE92ZXJmbG93KHByZXZFbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUG9wdXAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19UQl9JVEVNLCB0aGlzLnRiSXRlbXMpLmxlbmd0aCAtIDE7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuc2V0Q2xvc2VCdXR0b24gPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICB2YXIgdHJnID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX0hFQURFUiwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICh2YWwgPT09IHRydWUpID8gdHJnLmNsYXNzTGlzdC5hZGQoQ0xTX0NMT1NFX1NIT1cpIDogdHJnLmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0NMT1NFX1NIT1cpO1xuICAgICAgICAgICAgdGhpcy50Yk9iai5yZWZyZXNoT3ZlcmZsb3coKTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEFjdEVsZVBvc2l0aW9uKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUucHJldkN0bkFuaW1hdGlvbiA9IGZ1bmN0aW9uIChwcmV2LCBjdXJyZW50KSB7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uO1xuICAgICAgICAgICAgdmFyIGNoZWNrUlRMID0gdGhpcy5lbmFibGVSdGwgfHwgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTFNfUlRMKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUG9wdXAgfHwgcHJldiA8PSBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uLnByZXZpb3VzLmVmZmVjdCA9PT0gJ1NsaWRlTGVmdEluJykge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24gPSB7IG5hbWU6ICdTbGlkZUxlZnRPdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuYW5pbWF0aW9uLnByZXZpb3VzLmR1cmF0aW9uLCB0aW1pbmdGdW5jdGlvbjogdGhpcy5hbmltYXRpb24ucHJldmlvdXMuZWFzaW5nIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbi5uZXh0LmVmZmVjdCA9PT0gJ1NsaWRlUmlnaHRJbicpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uID0geyBuYW1lOiAnU2xpZGVSaWdodE91dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5hbmltYXRpb24ubmV4dC5kdXJhdGlvbiwgdGltaW5nRnVuY3Rpb246IHRoaXMuYW5pbWF0aW9uLm5leHQuZWFzaW5nIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhbmltYXRpb247XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUudHJpZ2dlclByZXZBbmltYXRpb24gPSBmdW5jdGlvbiAob2xkQ250LCBwcmV2SW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBhbmltYXRlT2JqID0gdGhpcy5wcmV2Q3RuQW5pbWF0aW9uKHByZXZJbmRleCwgdGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGFuaW1hdGVPYmopKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZU9iai5iZWdpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZXRTdHlsZUF0dHJpYnV0ZShvbGRDbnQsIHsgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgb2xkQ250LmNsYXNzTGlzdC5hZGQoJ2UtdmlldycpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYW5pbWF0ZU9iai5lbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9sZENudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBvbGRDbnQuY2xhc3NMaXN0LnJlbW92ZShDTFNfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICAgICAgb2xkQ250LmNsYXNzTGlzdC5yZW1vdmUoJ2UtdmlldycpO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV80LnNldFN0eWxlQXR0cmlidXRlKG9sZENudCwgeyAnZGlzcGxheSc6ICcnLCAncG9zaXRpb24nOiAnJyB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG5ldyBlajJfYmFzZV81LkFuaW1hdGlvbihhbmltYXRlT2JqKS5hbmltYXRlKG9sZENudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUudHJpZ2dlckFuaW1hdGlvbiA9IGZ1bmN0aW9uIChpZCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgcHJldkluZGV4ID0gdGhpcy5wcmV2SW5kZXg7XG4gICAgICAgICAgICB2YXIgb2xkQ250ID0gZWoyX2Jhc2VfMi5zZWxlY3QoJyMnICsgdGhpcy5wcmV2QWN0aXZlRWxlLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHByZXZFbGUgPSB0aGlzLnRiSXRlbVtwcmV2SW5kZXhdO1xuICAgICAgICAgICAgdmFyIG5vID0gdGhpcy5leHRJbmRleCh0aGlzLnRiSXRlbVt0aGlzLnNlbGVjdGVkSXRlbV0uaWQpO1xuICAgICAgICAgICAgdmFyIG5ld0NudDtcbiAgICAgICAgICAgIG5ld0NudCA9IHRoaXMuZmluZEVsZSh0aGlzLmNudEVsZS5jaGlsZHJlbiwgQ0xTX0NPTlRFTlQgKyAnXycgKyBubyk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChvbGRDbnQpICYmICFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHByZXZFbGUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkTm8gPSB0aGlzLmV4dEluZGV4KHByZXZFbGUuaWQpO1xuICAgICAgICAgICAgICAgIG9sZENudCA9IHRoaXMuZmluZEVsZSh0aGlzLmNudEVsZS5jaGlsZHJlbiwgQ0xTX0NPTlRFTlQgKyAnXycgKyBpZE5vKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmluaXRSZW5kZXIgfHwgdmFsdWUgPT09IGZhbHNlIHx8IHRoaXMuYW5pbWF0aW9uID09PSB7fSB8fCBlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuYW5pbWF0aW9uKSkge1xuICAgICAgICAgICAgICAgIGlmIChvbGRDbnQgJiYgb2xkQ250ICE9PSBuZXdDbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkQ250LmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjbnQgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfQ09OVEVOVCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHZhciBhbmltYXRlT2JqO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldkluZGV4ID4gdGhpcy5zZWxlY3RlZEl0ZW0gJiYgIXRoaXMuaXNQb3B1cCkge1xuICAgICAgICAgICAgICAgIHZhciBvcGVuRWZmID0gdGhpcy5hbmltYXRpb24ucHJldmlvdXMuZWZmZWN0O1xuICAgICAgICAgICAgICAgIGFuaW1hdGVPYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICgob3BlbkVmZiA9PT0gJ05vbmUnKSA/ICcnIDogKChvcGVuRWZmICE9PSAnU2xpZGVMZWZ0SW4nKSA/IG9wZW5FZmYgOiAnU2xpZGVMZWZ0SW4nKSksXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmFuaW1hdGlvbi5wcmV2aW91cy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246IHRoaXMuYW5pbWF0aW9uLnByZXZpb3VzLmVhc2luZ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzUG9wdXAgfHwgdGhpcy5wcmV2SW5kZXggPCB0aGlzLnNlbGVjdGVkSXRlbSB8fCB0aGlzLnByZXZJbmRleCA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xzRWZmID0gdGhpcy5hbmltYXRpb24ubmV4dC5lZmZlY3Q7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZU9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogKChjbHNFZmYgPT09ICdOb25lJykgPyAnJyA6ICgoY2xzRWZmICE9PSAnU2xpZGVSaWdodEluJykgPyBjbHNFZmYgOiAnU2xpZGVSaWdodEluJykpLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5hbmltYXRpb24ubmV4dC5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246IHRoaXMuYW5pbWF0aW9uLm5leHQuZWFzaW5nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGVPYmoucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY250LmNsYXNzTGlzdC5hZGQoQ0xTX1BST0dSRVNTKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRBY3RpdmVCb3JkZXIoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhbmltYXRlT2JqLmVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjbnQuY2xhc3NMaXN0LnJlbW92ZShDTFNfUFJPR1JFU1MpO1xuICAgICAgICAgICAgICAgIG5ld0NudC5jbGFzc0xpc3QuYWRkKENMU19BQ1RJVkUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbml0UmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyUHJldkFuaW1hdGlvbihvbGRDbnQsIHByZXZJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByZXZBY3RpdmVFbGUgPSBuZXdDbnQuaWQ7XG4gICAgICAgICAgICB0aGlzLmlzUG9wdXAgPSBmYWxzZTtcbiAgICAgICAgICAgIG5ldyBlajJfYmFzZV81LkFuaW1hdGlvbihhbmltYXRlT2JqKS5hbmltYXRlKG5ld0NudCk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUua2V5UHJlc3NlZCA9IGZ1bmN0aW9uICh0cmcpIHtcbiAgICAgICAgICAgIHZhciB0cmdQYXJlbnQgPSBlajJfYmFzZV8xLmNsb3Nlc3QodHJnLCAnLicgKyBDTFNfVEJfSVRFTSk7XG4gICAgICAgICAgICB2YXIgdHJnSW5kZXggPSB0aGlzLmdldEVsZUluZGV4KHRyZ1BhcmVudCk7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5wb3BFbGUpICYmIHRyZy5jbGFzc0xpc3QuY29udGFpbnMoJ2UtaG9yLW5hdicpKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMucG9wRWxlLmNsYXNzTGlzdC5jb250YWlucyhDTFNfUE9QVVBfT1BFTikpID8gdGhpcy5wb3BPYmouaGlkZSh0aGlzLmhpZGUpIDogdGhpcy5wb3BPYmouc2hvdyh0aGlzLnNob3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHJnLmNsYXNzTGlzdC5jb250YWlucygnZS1zY3JvbGwtbmF2JykpIHtcbiAgICAgICAgICAgICAgICB0cmcuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0cmdQYXJlbnQpICYmIHRyZ1BhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0FDVElWRSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KHRyZ0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMucG9wRWxlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BPYmouaGlkZSh0aGlzLmhpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLmdldEVsZUluZGV4ID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19UQl9JVEVNLCB0aGlzLmVsZW1lbnQpLCBpdGVtKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5leHRJbmRleCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkLnJlcGxhY2UoQ0xTX0lURU0gKyAnXycsICcnKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5nZXRDb250ZW50ID0gZnVuY3Rpb24gKGVsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZUZuO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgICB2YXIgdGVtcEVsZSA9IGVqMl9iYXNlXzQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB2YXIgY250ID0gdGhpcy5pdGVtc1tOdW1iZXIoaW5kZXgpXS5jb250ZW50O1xuICAgICAgICAgICAgdmFyIGNudEhUTUwgPSAodHlwZW9mIGNudCAhPT0gJ29iamVjdCcpID8gY250IDogY250Lm91dGVySFRNTDtcbiAgICAgICAgICAgIHRlbXBsYXRlRm4gPSBlajJfYmFzZV81LmNvbXBpbGUoY250SFRNTCk7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGVtcGxhdGVGbikgJiYgdGVtcGxhdGVGbigpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBbXS5zbGljZS5jYWxsKHRlbXBsYXRlRm4oKSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcEVsZS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWxlLmFwcGVuZENoaWxkKHRlbXBFbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlLmlubmVySFRNTCA9IGNudEhUTUw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuZmluZEVsZSA9IGZ1bmN0aW9uIChpdGVtcywga2V5KSB7XG4gICAgICAgICAgICB2YXIgZWxlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtc1tpXS5pZCA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnNldE9yaWVudGF0aW9uID0gZnVuY3Rpb24gKHBsYWNlLCBlbGUpIHtcbiAgICAgICAgICAgIChwbGFjZSA9PT0gJ0JvdHRvbScpID8gdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGVsZSkgOiB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVsZSwgZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX0NPTlRFTlQsIHRoaXMuZWxlbWVudCkpO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnNldENzc0NsYXNzID0gZnVuY3Rpb24gKGVsZSwgY2xzLCB2YWwpIHtcbiAgICAgICAgICAgIGlmIChjbHMgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpc3QgPSBjbHMuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQobGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShsaXN0W2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuc2V0Q29udGVudEhlaWdodCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY250RWxlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoZWlnaHQ7XG4gICAgICAgICAgICB2YXIgaGRyRWxlID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX0hFQURFUiwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodEFkanVzdE1vZGUgPT09ICdOb25lJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5jbnRFbGUsIHsgJ2hlaWdodCc6ICh0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gaGRyRWxlLm9mZnNldEhlaWdodCkgKyAncHgnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaGVpZ2h0QWRqdXN0TW9kZSA9PT0gJ0ZpbGwnKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZXRTdHlsZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQsIHsgJ2hlaWdodCc6ICcxMDAlJyB9KTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV80LnNldFN0eWxlQXR0cmlidXRlKHRoaXMuY250RWxlLCB7ICdoZWlnaHQnOiAnYXV0bycgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmhlaWdodEFkanVzdE1vZGUgPT09ICdBdXRvJykge1xuICAgICAgICAgICAgICAgIHZhciBjbnQgPSBlajJfYmFzZV80LnNlbGVjdEFsbCgnLicgKyBDTFNfQ09OVEVOVCArICcgPiAuJyArIENMU19JVEVNLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVGVtcGxhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNudFtpXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6YmxvY2s7IHZpc2liaWxpdHk6IHZpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5tYXhIZWlnaHQsIHRoaXMuZ2V0SGVpZ2h0KGNudFtpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY250W2ldLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbnRbaV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Zpc2liaWxpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbnRFbGUgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfQ09OVEVOVCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbnRFbGUuYXBwZW5kQ2hpbGQoZWoyX2Jhc2VfNC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IChDTFNfQ09OVEVOVCArICdfJyArIDApLCBjbGFzc05hbWU6IENMU19JVEVNICsgJyAnICsgQ0xTX0FDVElWRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyAncm9sZSc6ICd0YWJwYW5lbCcsICdhcmlhLWxhYmVsbGVkYnknOiBDTFNfSVRFTSArICdfJyArIDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmNudEVsZS5jaGlsZHJlbi5pdGVtKDApO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29udGVudChlbGUsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSBNYXRoLm1heCh0aGlzLm1heEhlaWdodCwgdGhpcy5nZXRIZWlnaHQoZWxlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb250ZW50KGVsZSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKENMU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlajJfYmFzZV80LnNldFN0eWxlQXR0cmlidXRlKHRoaXMuY250RWxlLCB7ICdoZWlnaHQnOiB0aGlzLm1heEhlaWdodCArICdweCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV80LnNldFN0eWxlQXR0cmlidXRlKHRoaXMuY250RWxlLCB7ICdoZWlnaHQnOiAnYXV0bycgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgdmFyIGNzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlKTtcbiAgICAgICAgICAgIHJldHVybiBlbGUub2Zmc2V0SGVpZ2h0ICsgcGFyc2VGbG9hdChjcy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpKSArIHBhcnNlRmxvYXQoY3MuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1ib3R0b20nKSkgK1xuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoY3MuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXRvcCcpKSArIHBhcnNlRmxvYXQoY3MuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5zZXRBY3RpdmVCb3JkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdHJnID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX1RCX0lURU0gKyAnLicgKyBDTFNfQUNUSVZFLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKHRyZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoc0NudCA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19UQl9JVEVNUyArICcgLmUtaHNjcm9sbC1jb250ZW50JywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMudGJJdGVtcyA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19UQl9JVEVNUywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHZhciBiYXIgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfSU5ESUNBVE9SLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHRiV2lkdGggPSAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChoc0NudCkpID8gdGhpcy50Ykl0ZW1zLm9mZnNldFdpZHRoIDogaHNDbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBlajJfYmFzZV80LnNldFN0eWxlQXR0cmlidXRlKGJhciwgeyAnbGVmdCc6IHRyZy5vZmZzZXRMZWZ0ICsgJ3B4JywgJ3JpZ2h0JzogdGJXaWR0aCAtICh0cmcub2Zmc2V0TGVmdCArIHRyZy5vZmZzZXRXaWR0aCkgKyAncHgnIH0pO1xuICAgICAgICAgICAgdGhpcy5iZHJMaW5lLmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0hJRERFTik7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuc2V0QWN0aXZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRiSXRlbSA9IGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19UQl9JVEVNLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHRyZyA9IHRoaXMudGJJdGVtW3ZhbHVlXTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgc2VsZWN0ZWRJdGVtOiB2YWx1ZSB9LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgaXNOYU4odmFsdWUpIHx8IHRoaXMudGJJdGVtLmxlbmd0aCA9PT0gMCB8fCB0cmcuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19BQ1RJVkUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJldiA9IHRoaXMudGJJdGVtW3RoaXMucHJldkluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQocHJldikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldi5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5hdHRyaWJ1dGVzKHRyZywgeyAnYXJpYS1jb250cm9scyc6IENMU19DT05URU5UICsgJ18nICsgdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaWQgPSB0cmcuaWQ7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFjdGl2ZUNsYXNzKGlkKTtcbiAgICAgICAgICAgIHRyZy5jbGFzc0xpc3QuYWRkKENMU19BQ1RJVkUpO1xuICAgICAgICAgICAgdHJnLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICB2YXIgbm8gPSBOdW1iZXIodGhpcy5leHRJbmRleChpZCkpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5hdHRyaWJ1dGVzKHRoaXMuZWxlbWVudCwgeyAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JzogaWQgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1RlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19DT05URU5ULCB0aGlzLmVsZW1lbnQpLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZ18xID0gdGhpcy5maW5kRWxlKGVqMl9iYXNlXzIuc2VsZWN0KCcuZS1jb250ZW50JywgdGhpcy5lbGVtZW50KS5jaGlsZHJlbiwgQ0xTX0NPTlRFTlQgKyAnXycgKyBubyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0cmdfMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZ18xLmNsYXNzTGlzdC5hZGQoQ0xTX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyQW5pbWF0aW9uKGlkLCB0aGlzLmVuYWJsZUFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfQ09OVEVOVCArICcgPiAjJyArIENMU19DT05URU5UICsgJ18nICsgdGhpcy5leHRJbmRleChpZCksIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbnRFbGUuYXBwZW5kQ2hpbGQoZWoyX2Jhc2VfNC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogQ0xTX0NPTlRFTlQgKyAnXycgKyB0aGlzLmV4dEluZGV4KGlkKSwgY2xhc3NOYW1lOiBDTFNfSVRFTSArICcgJyArIENMU19BQ1RJVkUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiAndGFicGFuZWwnLCAnYXJpYS1sYWJlbGxlZGJ5JzogQ0xTX0lURU0gKyAnXycgKyB0aGlzLmV4dEluZGV4KGlkKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZVRyZyA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19DT05URU5UICsgJyA+ICMnICsgQ0xTX0NPTlRFTlQgKyAnXycgKyB0aGlzLmV4dEluZGV4KGlkKSwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb250ZW50KGVsZVRyZywgTnVtYmVyKHRoaXMuZXh0SW5kZXgoaWQpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xTX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckFuaW1hdGlvbihpZCwgdGhpcy5lbmFibGVBbmltYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVCb3JkZXIoKTtcbiAgICAgICAgICAgIHZhciBjdXJBY3RJdGVtID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX0hFQURFUiArICcgIycgKyBpZCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEl0ZW1WaXNpYmlsaXR5KGN1ckFjdEl0ZW0pO1xuICAgICAgICAgICAgY3VyQWN0SXRlbS5maXJzdENoaWxkLmZvY3VzKCk7XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmcgPSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNJdGVtOiB0aGlzLnByZXZJdGVtLFxuICAgICAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IHRoaXMucHJldkluZGV4LFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogdHJnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IHZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdzZWxlY3RlZCcsIGV2ZW50QXJnKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5zZXRJdGVtcyA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgdGhpcy5pc1JlcGxhY2UgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50Ykl0ZW1zID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX1RCX0lURU1TLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy50Yk9iai5pdGVtcyA9IHRoaXMucGFyc2VPYmplY3QoaXRlbXMpO1xuICAgICAgICAgICAgdGhpcy50Yk9iai5kYXRhQmluZCgpO1xuICAgICAgICAgICAgdGhpcy5pc1JlcGxhY2UgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5zZXRSVEwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudGJPYmouZW5hYmxlUnRsID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnRiT2JqLmRhdGFCaW5kKCk7XG4gICAgICAgICAgICB0aGlzLnNldENzc0NsYXNzKHRoaXMuZWxlbWVudCwgQ0xTX1JUTCwgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQWN0aXZlQm9yZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUucmVmcmVzaEFjdGl2ZUJvcmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLmJkckxpbmUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iZHJMaW5lLmNsYXNzTGlzdC5hZGQoQ0xTX0hJRERFTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUJvcmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoQWN0RWxlUG9zaXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBlajJfYmFzZV81LkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnbW91c2VvdmVyJywgdGhpcy5ob3ZlckhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfNS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2tleWRvd24nLCB0aGlzLnNwYWNlS2V5RG93biwgdGhpcyk7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jbnRFbGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaE1vZHVsZSA9IG5ldyBlajJfYmFzZV81LlRvdWNoKHRoaXMuY250RWxlLCB7IHN3aXBlOiB0aGlzLnN3aXBlSGFuZGxlci5iaW5kKHRoaXMpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5rZXlNb2R1bGUgPSBuZXcgZWoyX2Jhc2VfMy5LZXlib2FyZEV2ZW50cyh0aGlzLmVsZW1lbnQsIHsga2V5QWN0aW9uOiB0aGlzLmtleUhhbmRsZXIuYmluZCh0aGlzKSwga2V5Q29uZmlnczogdGhpcy5rZXlDb25maWdzIH0pO1xuICAgICAgICAgICAgdGhpcy50YWJLZXlNb2R1bGUgPSBuZXcgZWoyX2Jhc2VfMy5LZXlib2FyZEV2ZW50cyh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBrZXlBY3Rpb246IHRoaXMua2V5SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGtleUNvbmZpZ3M6IHsgb3BlblBvcHVwOiAnc2hpZnQrZjEwJywgdGFiOiAndGFiJywgc2hpZnRUYWI6ICdzaGlmdCt0YWInIH0sXG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiAna2V5ZG93bidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnVuV2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMua2V5TW9kdWxlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMudGFiS2V5TW9kdWxlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLmNudEVsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoTW9kdWxlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZnJlc2hBY3RFbGVQb3NpdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLmhvdmVySGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0ZPQ1VTKTtcbiAgICAgICAgICAgIHZhciB0cmcgPSBhcmdzLm9yaWdpbmFsRXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIHRyZ1BhcmVudCA9IGVqMl9iYXNlXzEuY2xvc2VzdCh0cmcsICcuJyArIENMU19UQl9JVEVNKTtcbiAgICAgICAgICAgIHZhciB0cmdJbmRleCA9IHRoaXMuZ2V0RWxlSW5kZXgodHJnUGFyZW50KTtcbiAgICAgICAgICAgIGlmICh0cmcuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19JQ09OX0NMT1NFKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFiKHRyZ0luZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQb3B1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0cmdQYXJlbnQpICYmIHRyZ0luZGV4ICE9PSB0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCh0cmdJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnN3aXBlSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS52ZWxvY2l0eSA8IDMgJiYgZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUuc3dpcGVEaXJlY3Rpb24gPT09ICdSaWdodCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSXRlbSAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuc3dpcGVEaXJlY3Rpb24gPT09ICdMZWZ0JyAmJiAodGhpcy5zZWxlY3RlZEl0ZW0gIT09IGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19UQl9JVEVNLCB0aGlzLmVsZW1lbnQpLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJdGVtICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnNwYWNlS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoKGUua2V5Q29kZSA9PT0gMzIgJiYgZS53aGljaCA9PT0gMzIpIHx8IChlLmtleUNvZGUgPT09IDM1ICYmIGUud2hpY2ggPT09IDM1KSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMU19GT0NVUyk7XG4gICAgICAgICAgICB2YXIgdHJnID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgYWN0RWxlID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX0hFQURFUiArICcgLicgKyBDTFNfQUNUSVZFLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHRhYkl0ZW0gPSBlajJfYmFzZV80LnNlbGVjdEFsbCgnLicgKyBDTFNfVEJfSVRFTSArICc6bm90KC4nICsgQ0xTX1RCX1BPUFVQICsgJyknLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5wb3BFbGUgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfVEJfUE9QLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMucG9wRWxlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wT2JqID0gdGhpcy5wb3BFbGUuZWoyX2luc3RhbmNlc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoZS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzcGFjZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZW50ZXInOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5hY3Rpb24gPT09ICdlbnRlcicgJiYgdHJnLmNsYXNzTGlzdC5jb250YWlucygnZS1ob3ItbmF2JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5UHJlc3NlZCh0cmcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd0YWInOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NoaWZ0VGFiJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyZy5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1dSQVApXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBlajJfYmFzZV8xLmNsb3Nlc3QodHJnLCAnLicgKyBDTFNfVEJfSVRFTSkuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19BQ1RJVkUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJnLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3BPYmogJiYgZWoyX2Jhc2VfMi5pc1Zpc2libGUodGhpcy5wb3BPYmouZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wT2JqLmhpZGUodGhpcy5oaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhY3RFbGUuY2hpbGRyZW4uaXRlbSgwKS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZUxlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ21vdmVSaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gZWoyX2Jhc2VfMS5jbG9zZXN0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsICcuJyArIENMU19UQl9JVEVNKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hJdGVtVmlzaWJpbGl0eShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdvcGVuUG9wdXAnOlxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLnBvcEVsZSkgJiYgdGhpcy5wb3BFbGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19QT1BVUF9DTE9TRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wT2JqLnNob3codGhpcy5zaG93KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJnUGFyZW50ID0gZWoyX2Jhc2VfMS5jbG9zZXN0KHRyZywgJy4nICsgQ0xTX1RCX0lURU0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q2xvc2VCdXR0b24gPT09IHRydWUgJiYgIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodHJnUGFyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG54dFNpYiA9IHRyZ1BhcmVudC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChueHRTaWIpICYmIG54dFNpYi5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RCX0lURU0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnh0U2liLmZpcnN0Q2hpbGQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFiKHRoaXMuZ2V0RWxlSW5kZXgodHJnUGFyZW50KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVCb3JkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUucmVmcmVzaEFjdEVsZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZSA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19UQl9JVEVNICsgJy4nICsgQ0xTX1RCX1BPUFVQICsgJy4nICsgQ0xTX0FDVElWRSwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChhY3RpdmVFbGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5nZXRFbGVJbmRleChhY3RpdmVFbGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEFjdGl2ZUJvcmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnJlZnJlc2hJdGVtVmlzaWJpbGl0eSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHZhciBzY3JDbnQgPSBlajJfYmFzZV8yLnNlbGVjdCgnLmUtaHNjcm9sbC1jb250ZW50JywgdGhpcy50Ykl0ZW1zKTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChzY3JDbnQpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjckJhciA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuZS1oc2Nyb2xsLWJhcicsIHRoaXMudGJJdGVtcyk7XG4gICAgICAgICAgICAgICAgdmFyIHNjclN0YXJ0ID0gc2NyQmFyLnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgdmFyIHNjckVuZCA9IHNjclN0YXJ0ICsgc2NyQmFyLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBlbGVTdGFydCA9IHRhcmdldC5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgICAgIHZhciBlbGVXaWR0aCA9IHRhcmdldC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgZWxlRW5kID0gdGFyZ2V0Lm9mZnNldExlZnQgKyB0YXJnZXQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKChzY3JTdGFydCA8IGVsZVN0YXJ0KSAmJiAoc2NyRW5kIDwgZWxlRW5kKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlVmlld1JhbmdlID0gc2NyRW5kIC0gZWxlU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIHNjckJhci5zY3JvbGxMZWZ0ID0gc2NyU3RhcnQgKyAoZWxlV2lkdGggLSBlbGVWaWV3UmFuZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChzY3JTdGFydCA+IGVsZVN0YXJ0KSAmJiAoc2NyRW5kID4gZWxlRW5kKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZVZpZXdSYW5nZSA9IGVsZUVuZCAtIHNjclN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyQmFyLnNjcm9sbExlZnQgPSBzY3JTdGFydCAtIChlbGVXaWR0aCAtIGVsZVZpZXdSYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuaG92ZXJIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0cmcgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGlmICh0cmcuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19JQ09OX0NMT1NFKSkge1xuICAgICAgICAgICAgICAgIHRyZy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgbmV3IGVqMl9iYXNlXzMuTDEwbigndGFiJywgeyB0aXRsZTogdGhpcy50aXRsZSB9LCB0aGlzLmxvY2FsZSkuZ2V0Q29uc3RhbnQoJ3RpdGxlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLmVuYWJsZVRhYiA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciB0Ykl0ZW1zID0gZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCX0lURU0sIHRoaXMuZWxlbWVudClbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGJJdGVtcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0Ykl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0RJU0FCTEUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGJJdGVtcy5jbGFzc0xpc3QuYWRkKENMU19ESVNBQkxFKTtcbiAgICAgICAgICAgICAgICBpZiAodGJJdGVtcy5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0FDVElWRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ykl0ZW1zLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICh2YWx1ZSA9PT0gdHJ1ZSkgPyAnZmFsc2UnIDogJ3RydWUnKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5hZGRUYWIgPSBmdW5jdGlvbiAoaXRlbXMsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdhZGRpbmcnLCB7IGFkZGVkSXRlbXM6IGl0ZW1zIH0pO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBlajJfYmFzZV80LnNlbGVjdEFsbCgnLicgKyBDTFNfVEJfSVRFTSkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzVGVtcGxhdGUgPT09IHRydWUgfHwgZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCX0lURU0pLmxlbmd0aCAtIDEgPCBpbmRleCB8fCBpbmRleCA8IDAgfHwgaXNOYU4oaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5iZHJMaW5lLmNsYXNzTGlzdC5hZGQoQ0xTX0hJRERFTik7XG4gICAgICAgICAgICB0aGlzLnRiSXRlbXMgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfVEJfSVRFTVMsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgdGFiSXRlbXMgPSB0aGlzLnBhcnNlT2JqZWN0KGl0ZW1zKTtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnRiT2JqLmFkZEl0ZW1zKHRhYkl0ZW1zLCBpbmRleCk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2FkZGVkJywgeyBhZGRlZEl0ZW1zOiBpdGVtcyB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUJvcmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnJlbW92ZVRhYiA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIHRyZyA9IGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19UQl9JVEVNLCB0aGlzLmVsZW1lbnQpW2luZGV4XTtcbiAgICAgICAgICAgIHZhciByZW1vdmluZ0FyZ3MgPSB7IHJlbW92ZWRJdGVtOiB0cmcsIHJlbW92ZWRJbmRleDogaW5kZXggfTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcigncmVtb3ZpbmcnLCByZW1vdmluZ0FyZ3MpO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodHJnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGJPYmoucmVtb3ZlSXRlbXMoaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQWN0aXZlQm9yZGVyKCk7XG4gICAgICAgICAgICB2YXIgbm8gPSB0aGlzLmV4dEluZGV4KHRyZy5pZCk7XG4gICAgICAgICAgICB2YXIgY250VHJnID0gdGhpcy5maW5kRWxlKGVqMl9iYXNlXzIuc2VsZWN0KCcuZS1jb250ZW50JywgdGhpcy5lbGVtZW50KS5jaGlsZHJlbiwgQ0xTX0NPTlRFTlQgKyAnXycgKyBubyk7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoY250VHJnKSkge1xuICAgICAgICAgICAgICAgIGNudFRyZy5vdXRlckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZW1vdmVkQXJncyA9IHsgcmVtb3ZlZEl0ZW06IHRyZywgcmVtb3ZlZEluZGV4OiBpbmRleCB9O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdyZW1vdmVkJywgcmVtb3ZlZEFyZ3MpO1xuICAgICAgICAgICAgaWYgKHRyZy5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0FDVElWRSkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IChpbmRleCA+IGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19UQl9JVEVNICsgJzpub3QoLicgKyBDTFNfVEJfUE9QVVAgKyAnKScsIHRoaXMuZWxlbWVudCkubGVuZ3RoIC0gMSkgPyBpbmRleCAtIDEgOiBpbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LnNlbGVjdEFsbCgnLicgKyBDTFNfVEJfSVRFTSwgdGhpcy5lbGVtZW50KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhkckVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbmFibGVBbmltYXRpb24gPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLmhpZGVUYWIgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19UQl9JVEVNLCB0aGlzLmVsZW1lbnQpW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5iZHJMaW5lLmNsYXNzTGlzdC5hZGQoQ0xTX0hJRERFTik7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xTX0hJRERFTik7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMU19BQ1RJVkUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KChpbmRleCAhPT0gMCkgPyBpbmRleCAtIDEgOiBpbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShDTFNfSElEREVOKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlQm9yZGVyKCk7XG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnJyArIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgdGhpcy50Ykl0ZW1zID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX1RCX0lURU1TLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy50Ykl0ZW0gPSBlajJfYmFzZV80LnNlbGVjdEFsbCgnLicgKyBDTFNfVEJfSVRFTSwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMucHJldkl0ZW0gPSB0aGlzLnRiSXRlbVt0aGlzLnByZXZJbmRleF07XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5wcmV2SXRlbSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZJdGVtLmNoaWxkcmVuLml0ZW0oMCkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGV2ZW50QXJnID0ge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzSXRlbTogdGhpcy5wcmV2SXRlbSxcbiAgICAgICAgICAgICAgICBwcmV2aW91c0luZGV4OiB0aGlzLnByZXZJbmRleCxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW06IHRoaXMudGJJdGVtW3RoaXMuc2VsZWN0ZWRJdGVtXSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiB0aGlzLnNlbGVjdGVkSXRlbVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignc2VsZWN0aW5nJywgZXZlbnRBcmcpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRiSXRlbS5sZW5ndGggPiBhcmdzICYmIGFyZ3MgPj0gMCAmJiAhaXNOYU4oYXJncykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2SW5kZXggPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGJJdGVtW2FyZ3NdLmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJfUE9QVVApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZSh0aGlzLnBvcHVwSGFuZGxlcih0aGlzLnRiSXRlbVthcmdzXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZ3MgaW5zdGFuY2VvZiAoSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUodGhpcy5nZXRFbGVJbmRleChhcmdzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRDc3NDbGFzcyh0aGlzLmVsZW1lbnQsIENMU19ESVNBQkxFLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJycgKyB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuZ2V0UGVyc2lzdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRPblBlcnNpc3QoWydzZWxlY3RlZEl0ZW0nLCAnYWN0RWxlSWQnXSk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuZ2V0TW9kdWxlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAndGFiJztcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5vblByb3BlcnR5Q2hhbmdlZCA9IGZ1bmN0aW9uIChuZXdQcm9wLCBvbGRQcm9wKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobmV3UHJvcCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dpZHRoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5lbGVtZW50LCB7IHdpZHRoOiBlajJfYmFzZV8zLmZvcm1hdFVuaXQobmV3UHJvcC53aWR0aCkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaGVpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5lbGVtZW50LCB7IGhlaWdodDogZWoyX2Jhc2VfMy5mb3JtYXRVbml0KG5ld1Byb3AuaGVpZ2h0KSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudEhlaWdodChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY3NzQ2xhc3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDc3NDbGFzcyh0aGlzLmVsZW1lbnQsIG5ld1Byb3AuY3NzQ2xhc3MsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW1zJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbXMobmV3UHJvcC5pdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2hvd0Nsb3NlQnV0dG9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2xvc2VCdXR0b24obmV3UHJvcC5zaG93Q2xvc2VCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdGVkSXRlbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChuZXdQcm9wLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaGVhZGVyUGxhY2VtZW50JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wSGRyRWxlID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX0hFQURFUiwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0T3JpZW50YXRpb24obmV3UHJvcC5oZWFkZXJQbGFjZW1lbnQsIHRlbXBIZHJFbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuYWJsZVJ0bCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFJUTChuZXdQcm9wLmVuYWJsZVJ0bCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3ZlcmZsb3dNb2RlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGJPYmoub3ZlcmZsb3dNb2RlID0gbmV3UHJvcC5vdmVyZmxvd01vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRiT2JqLmRhdGFCaW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hBY3RFbGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hlaWdodEFkanVzdE1vZGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50SGVpZ2h0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFRhYjtcbiAgICB9KGVqMl9iYXNlXzEuQ29tcG9uZW50KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuQ29sbGVjdGlvbihbXSwgVGFiSXRlbSlcbiAgICBdLCBUYWIucHJvdG90eXBlLCBcIml0ZW1zXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJzEwMCUnKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwid2lkdGhcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnYXV0bycpXG4gICAgXSwgVGFiLnByb3RvdHlwZSwgXCJoZWlnaHRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBUYWIucHJvdG90eXBlLCBcImNzc0NsYXNzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoMClcbiAgICBdLCBUYWIucHJvdG90eXBlLCBcInNlbGVjdGVkSXRlbVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdUb3AnKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwiaGVhZGVyUGxhY2VtZW50XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ0NvbnRlbnQnKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwiaGVpZ2h0QWRqdXN0TW9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdTY3JvbGxhYmxlJylcbiAgICBdLCBUYWIucHJvdG90eXBlLCBcIm92ZXJmbG93TW9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwiZW5hYmxlUnRsXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgVGFiLnByb3RvdHlwZSwgXCJzaG93Q2xvc2VCdXR0b25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Db21wbGV4KHt9LCBUYWJBbmltYXRpb25TZXR0aW5ncylcbiAgICBdLCBUYWIucHJvdG90eXBlLCBcImFuaW1hdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBUYWIucHJvdG90eXBlLCBcImNyZWF0ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgVGFiLnByb3RvdHlwZSwgXCJhZGRpbmdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgVGFiLnByb3RvdHlwZSwgXCJhZGRlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBUYWIucHJvdG90eXBlLCBcInNlbGVjdGluZ1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBUYWIucHJvdG90eXBlLCBcInNlbGVjdGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwicmVtb3ZpbmdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgVGFiLnByb3RvdHlwZSwgXCJyZW1vdmVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwiZGVzdHJveWVkXCIsIHZvaWQgMCk7XG4gICAgVGFiID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuTm90aWZ5UHJvcGVydHlDaGFuZ2VzXG4gICAgXSwgVGFiKTtcbiAgICBleHBvcnRzLlRhYiA9IFRhYjtcbiAgICBleHBvcnRzLnRhYkJ1aWxkZXIgPSBlajJfYmFzZV8xLkNyZWF0ZUJ1aWxkZXIoVGFiKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGFiL3RhYi5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi90cmVldmlld1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIHRyZWV2aWV3XzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KHRyZWV2aWV3XzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90cmVldmlldy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItZGF0YVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWxpc3RzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJ1dHRvbnNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBlajJfYmFzZV8xLCBlajJfYmFzZV8yLCBlajJfYmFzZV8zLCBlajJfYmFzZV80LCBlajJfYmFzZV81LCBlajJfYmFzZV82LCBlajJfZGF0YV8xLCBlajJfYmFzZV83LCBlajJfbGlzdHNfMSwgZWoyX2J1dHRvbnNfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgUk9PVCA9ICdlLXRyZWV2aWV3JztcbiAgICB2YXIgQ09MTEFQU0lCTEUgPSAnZS1pY29uLWNvbGxhcHNpYmxlJztcbiAgICB2YXIgRVhQQU5EQUJMRSA9ICdlLWljb24tZXhwYW5kYWJsZSc7XG4gICAgdmFyIExJU1RJVEVNID0gJ2UtbGlzdC1pdGVtJztcbiAgICB2YXIgTElTVFRFWFQgPSAnZS1saXN0LXRleHQnO1xuICAgIHZhciBQQVJFTlRJVEVNID0gJ2UtbGlzdC1wYXJlbnQnO1xuICAgIHZhciBIT1ZFUiA9ICdlLWhvdmVyJztcbiAgICB2YXIgQUNUSVZFID0gJ2UtYWN0aXZlJztcbiAgICB2YXIgTE9BRCA9ICdlLWxvYWQnO1xuICAgIHZhciBQUk9DRVNTID0gJ2UtcHJvY2Vzcyc7XG4gICAgdmFyIElDT04gPSAnZS1pY29ucyc7XG4gICAgdmFyIFRFWFRXUkFQID0gJ2UtdGV4dC1jb250ZW50JztcbiAgICB2YXIgSU5QVVQgPSAnZS10cmVlLWlucHV0JztcbiAgICB2YXIgRURJVElORyA9ICdlLWVkaXRpbmcnO1xuICAgIHZhciBSVEwgPSAnZS1ydGwnO1xuICAgIHZhciBEUkFHSVRFTSA9ICdlLWRyYWctaXRlbSc7XG4gICAgdmFyIERST1BQQUJMRSA9ICdlLWRyb3BwYWJsZSc7XG4gICAgdmFyIERSQUdHSU5HID0gJ2UtZHJhZ2dpbmcnO1xuICAgIHZhciBTSUJMSU5HID0gJ2Utc2libGluZyc7XG4gICAgdmFyIERST1BJTiA9ICdlLWRyb3AtaW4nO1xuICAgIHZhciBEUk9QTkVYVCA9ICdlLWRyb3AtbmV4dCc7XG4gICAgdmFyIERST1BPVVQgPSAnZS1kcm9wLW91dCc7XG4gICAgdmFyIE5PRFJPUCA9ICdlLW5vLWRyb3AnO1xuICAgIHZhciBGVUxMUk9XV1JBUCA9ICdlLWZ1bGxyb3ctd3JhcCc7XG4gICAgdmFyIEZVTExST1cgPSAnZS1mdWxscm93JztcbiAgICB2YXIgUE9QVVAgPSAnZS1wb3B1cCc7XG4gICAgdmFyIFNFTEVDVEVEID0gJ2Utc2VsZWN0ZWQnO1xuICAgIHZhciBFWFBBTkRFRCA9ICdlLWV4cGFuZGVkJztcbiAgICB2YXIgTk9ERUNPTExBUFNFRCA9ICdlLW5vZGUtY29sbGFwc2VkJztcbiAgICB2YXIgRElTQUJMRSA9ICdlLWRpc2FibGUnO1xuICAgIHZhciBQT1BVUFNFTEVDVCA9ICdlLXNlbGVjdCc7XG4gICAgdmFyIENPTlRFTlQgPSAnZS1jb250ZW50JztcbiAgICB2YXIgRE9XTlRBSUwgPSAnZS1kb3dudGFpbCc7XG4gICAgdmFyIERST1BDT1VOVCA9ICdlLWRyb3AtY291bnQnO1xuICAgIHZhciBDSEVDSyA9ICdlLWNoZWNrJztcbiAgICB2YXIgSU5ERVRFUk1JTkFURSA9ICdlLXN0b3AnO1xuICAgIHZhciBDSEVDS0JPWFdSQVAgPSAnZS1jaGVja2JveC13cmFwcGVyJztcbiAgICB2YXIgQ0hFQ0tCT1hGUkFNRSA9ICdlLWZyYW1lJztcbiAgICB2YXIgRk9DVVMgPSAnZS1ub2RlLWZvY3VzJztcbiAgICB2YXIgdHJlZUFyaWFBdHRyID0ge1xuICAgICAgICB0cmVlUm9sZTogJ3RyZWUnLFxuICAgICAgICBpdGVtUm9sZTogJ3RyZWVpdGVtJyxcbiAgICAgICAgbGlzdFJvbGU6ICdncm91cCcsXG4gICAgICAgIGl0ZW1UZXh0OiAnJyxcbiAgICB9O1xuICAgIHZhciBGaWVsZHNTZXR0aW5ncyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhGaWVsZHNTZXR0aW5ncywgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gRmllbGRzU2V0dGluZ3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEZpZWxkc1NldHRpbmdzO1xuICAgIH0oZWoyX2Jhc2VfMi5DaGlsZFByb3BlcnR5KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJ2NoaWxkJylcbiAgICBdLCBGaWVsZHNTZXR0aW5ncy5wcm90b3R5cGUsIFwiY2hpbGRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eShbXSlcbiAgICBdLCBGaWVsZHNTZXR0aW5ncy5wcm90b3R5cGUsIFwiZGF0YVNvdXJjZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KCdleHBhbmRlZCcpXG4gICAgXSwgRmllbGRzU2V0dGluZ3MucHJvdG90eXBlLCBcImV4cGFuZGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJ2hhc0NoaWxkcmVuJylcbiAgICBdLCBGaWVsZHNTZXR0aW5ncy5wcm90b3R5cGUsIFwiaGFzQ2hpbGRyZW5cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSgnaHRtbEF0dHJpYnV0ZXMnKVxuICAgIF0sIEZpZWxkc1NldHRpbmdzLnByb3RvdHlwZSwgXCJodG1sQXR0cmlidXRlc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KCdpY29uQ3NzJylcbiAgICBdLCBGaWVsZHNTZXR0aW5ncy5wcm90b3R5cGUsIFwiaWNvbkNzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KCdpZCcpXG4gICAgXSwgRmllbGRzU2V0dGluZ3MucHJvdG90eXBlLCBcImlkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJ2ltYWdlVXJsJylcbiAgICBdLCBGaWVsZHNTZXR0aW5ncy5wcm90b3R5cGUsIFwiaW1hZ2VVcmxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSgnaXNDaGVja2VkJylcbiAgICBdLCBGaWVsZHNTZXR0aW5ncy5wcm90b3R5cGUsIFwiaXNDaGVja2VkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJ3BhcmVudElEJylcbiAgICBdLCBGaWVsZHNTZXR0aW5ncy5wcm90b3R5cGUsIFwicGFyZW50SURcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIEZpZWxkc1NldHRpbmdzLnByb3RvdHlwZSwgXCJxdWVyeVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KCdzZWxlY3RlZCcpXG4gICAgXSwgRmllbGRzU2V0dGluZ3MucHJvdG90eXBlLCBcInNlbGVjdGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkobnVsbClcbiAgICBdLCBGaWVsZHNTZXR0aW5ncy5wcm90b3R5cGUsIFwidGFibGVOYW1lXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJ3RleHQnKVxuICAgIF0sIEZpZWxkc1NldHRpbmdzLnByb3RvdHlwZSwgXCJ0ZXh0XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJ3Rvb2x0aXAnKVxuICAgIF0sIEZpZWxkc1NldHRpbmdzLnByb3RvdHlwZSwgXCJ0b29sdGlwXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJ25hdmlnYXRlVXJsJylcbiAgICBdLCBGaWVsZHNTZXR0aW5ncy5wcm90b3R5cGUsIFwibmF2aWdhdGVVcmxcIiwgdm9pZCAwKTtcbiAgICBleHBvcnRzLkZpZWxkc1NldHRpbmdzID0gRmllbGRzU2V0dGluZ3M7XG4gICAgdmFyIEFjdGlvblNldHRpbmdzID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEFjdGlvblNldHRpbmdzLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBBY3Rpb25TZXR0aW5ncygpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQWN0aW9uU2V0dGluZ3M7XG4gICAgfShlajJfYmFzZV8yLkNoaWxkUHJvcGVydHkpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSgnU2xpZGVEb3duJylcbiAgICBdLCBBY3Rpb25TZXR0aW5ncy5wcm90b3R5cGUsIFwiZWZmZWN0XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoNDAwKVxuICAgIF0sIEFjdGlvblNldHRpbmdzLnByb3RvdHlwZSwgXCJkdXJhdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KCdsaW5lYXInKVxuICAgIF0sIEFjdGlvblNldHRpbmdzLnByb3RvdHlwZSwgXCJlYXNpbmdcIiwgdm9pZCAwKTtcbiAgICBleHBvcnRzLkFjdGlvblNldHRpbmdzID0gQWN0aW9uU2V0dGluZ3M7XG4gICAgdmFyIE5vZGVBbmltYXRpb25TZXR0aW5ncyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhOb2RlQW5pbWF0aW9uU2V0dGluZ3MsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIE5vZGVBbmltYXRpb25TZXR0aW5ncygpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTm9kZUFuaW1hdGlvblNldHRpbmdzO1xuICAgIH0oZWoyX2Jhc2VfMi5DaGlsZFByb3BlcnR5KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuQ29tcGxleCh7IGVmZmVjdDogJ1NsaWRlVXAnLCBkdXJhdGlvbjogNDAwLCBlYXNpbmc6ICdsaW5lYXInIH0sIEFjdGlvblNldHRpbmdzKVxuICAgIF0sIE5vZGVBbmltYXRpb25TZXR0aW5ncy5wcm90b3R5cGUsIFwiY29sbGFwc2VcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Db21wbGV4KHsgZWZmZWN0OiAnU2xpZGVEb3duJywgZHVyYXRpb246IDQwMCwgZWFzaW5nOiAnbGluZWFyJyB9LCBBY3Rpb25TZXR0aW5ncylcbiAgICBdLCBOb2RlQW5pbWF0aW9uU2V0dGluZ3MucHJvdG90eXBlLCBcImV4cGFuZFwiLCB2b2lkIDApO1xuICAgIGV4cG9ydHMuTm9kZUFuaW1hdGlvblNldHRpbmdzID0gTm9kZUFuaW1hdGlvblNldHRpbmdzO1xuICAgIHZhciBUcmVlVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhUcmVlVmlldywgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gVHJlZVZpZXcob3B0aW9ucywgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgZWxlbWVudCkgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLmNoZWNrQWN0aW9uTm9kZXMgPSBbXTtcbiAgICAgICAgICAgIF90aGlzLmRyYWdTdGFydEFjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMua2V5Q29uZmlncyA9IHtcbiAgICAgICAgICAgICAgICBlc2NhcGU6ICdlc2NhcGUnLFxuICAgICAgICAgICAgICAgIGVuZDogJ2VuZCcsXG4gICAgICAgICAgICAgICAgZW50ZXI6ICdlbnRlcicsXG4gICAgICAgICAgICAgICAgZjI6ICdmMicsXG4gICAgICAgICAgICAgICAgaG9tZTogJ2hvbWUnLFxuICAgICAgICAgICAgICAgIG1vdmVEb3duOiAnZG93bmFycm93JyxcbiAgICAgICAgICAgICAgICBtb3ZlTGVmdDogJ2xlZnRhcnJvdycsXG4gICAgICAgICAgICAgICAgbW92ZVJpZ2h0OiAncmlnaHRhcnJvdycsXG4gICAgICAgICAgICAgICAgbW92ZVVwOiAndXBhcnJvdycsXG4gICAgICAgICAgICAgICAgY3RybERvd246ICdjdHJsK2Rvd25hcnJvdycsXG4gICAgICAgICAgICAgICAgY3RybFVwOiAnY3RybCt1cGFycm93JyxcbiAgICAgICAgICAgICAgICBjdHJsRW50ZXI6ICdjdHJsK2VudGVyJyxcbiAgICAgICAgICAgICAgICBjdHJsSG9tZTogJ2N0cmwraG9tZScsXG4gICAgICAgICAgICAgICAgY3RybEVuZDogJ2N0cmwrZW5kJyxcbiAgICAgICAgICAgICAgICBjdHJsQTogJ2N0cmwrQScsXG4gICAgICAgICAgICAgICAgc2hpZnREb3duOiAnc2hpZnQrZG93bmFycm93JyxcbiAgICAgICAgICAgICAgICBzaGlmdFVwOiAnc2hpZnQrdXBhcnJvdycsXG4gICAgICAgICAgICAgICAgc2hpZnRFbnRlcjogJ3NoaWZ0K2VudGVyJyxcbiAgICAgICAgICAgICAgICBzaGlmdEhvbWU6ICdzaGlmdCtob21lJyxcbiAgICAgICAgICAgICAgICBzaGlmdEVuZDogJ3NoaWZ0K2VuZCcsXG4gICAgICAgICAgICAgICAgY3NEb3duOiAnY3RybCtzaGlmdCtkb3duYXJyb3cnLFxuICAgICAgICAgICAgICAgIGNzVXA6ICdjdHJsK3NoaWZ0K3VwYXJyb3cnLFxuICAgICAgICAgICAgICAgIGNzRW50ZXI6ICdjdHJsK3NoaWZ0K2VudGVyJyxcbiAgICAgICAgICAgICAgICBjc0hvbWU6ICdjdHJsK3NoaWZ0K2hvbWUnLFxuICAgICAgICAgICAgICAgIGNzRW5kOiAnY3RybCtzaGlmdCtlbmQnLFxuICAgICAgICAgICAgICAgIHNwYWNlOiAnc3BhY2UnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLm1vdXNlRG93blN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRNb2R1bGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICd0cmVldmlldyc7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5wcmVSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5saXN0QmFzZU9wdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBleHBhbmRDb2xsYXBzZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHRoaXMuZmllbGRzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICAgICAgc2hvd0ljb246IHRydWUsXG4gICAgICAgICAgICAgICAgZXhwYW5kSWNvbkNsYXNzOiBFWFBBTkRBQkxFLFxuICAgICAgICAgICAgICAgIGFyaWFBdHRyaWJ1dGVzOiB0cmVlQXJpYUF0dHIsXG4gICAgICAgICAgICAgICAgZXhwYW5kSWNvblBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgaXRlbUNyZWF0ZWQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJlZm9yZU5vZGVDcmVhdGUoZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmxpc3RCYXNlT3B0aW9uLmZpZWxkcy51cmwgPSB0aGlzLmZpZWxkcy5uYXZpZ2F0ZVVybDtcbiAgICAgICAgICAgIHRoaXMuYW5pT2JqID0gbmV3IGVqMl9iYXNlXzQuQW5pbWF0aW9uKHt9KTtcbiAgICAgICAgICAgIHRoaXMudHJlZUxpc3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuc2VsZWN0ZWROb2RlcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBzZWxlY3RlZE5vZGVzOiBbXSB9LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY2hlY2tlZE5vZGVzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IGNoZWNrZWROb2RlczogW10gfSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRQZXJzaXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBrZXlFbnRpdHkgPSBbJ3NlbGVjdGVkTm9kZXMnLCAnY2hlY2tlZE5vZGVzJ107XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRPblBlcnNpc3Qoa2V5RW50aXR5KTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhQmluZGluZygpO1xuICAgICAgICAgICAgdGhpcy5zZXRFeHBhbmRPblR5cGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0UmlwcGxlKCk7XG4gICAgICAgICAgICB0aGlzLndpcmVFZGl0aW5nRXZlbnRzKHRoaXMuYWxsb3dFZGl0aW5nKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RHJhZ0FuZERyb3AodGhpcy5hbGxvd0RyYWdBbmREcm9wKTtcbiAgICAgICAgICAgIHRoaXMud2lyZUV2ZW50cygpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCB0cmVlQXJpYUF0dHIudHJlZVJvbGUpO1xuICAgICAgICAgICAgdGhpcy5zZXRDc3NDbGFzcyhudWxsLCB0aGlzLmNzc0NsYXNzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RW5hYmxlUnRsKCk7XG4gICAgICAgICAgICB0aGlzLnNldEZ1bGxSb3codGhpcy5mdWxsUm93U2VsZWN0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0VG91Y2hQb3B1cCh0aGlzLmFsbG93TXVsdGlTZWxlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5zZXRNdWx0aVNlbGVjdCh0aGlzLmFsbG93TXVsdGlTZWxlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5ub2RlVGVtcGxhdGVGbiA9IHRoaXMudGVtcGxhdGVDb21wbGllcih0aGlzLm5vZGVUZW1wbGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5zZXRFbmFibGVSdGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJ0bCA/IGVqMl9iYXNlXzYuYWRkQ2xhc3MoW3RoaXMuZWxlbWVudF0sIFJUTCkgOiBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFt0aGlzLmVsZW1lbnRdLCBSVEwpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuc2V0UmlwcGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRlbXBTdHIgPSAnLicgKyBGVUxMUk9XICsgJywuJyArIFRFWFRXUkFQO1xuICAgICAgICAgICAgdmFyIHJpcHBsZU1vZGVsID0ge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB0ZW1wU3RyLFxuICAgICAgICAgICAgICAgIGlnbm9yZTogJy4nICsgVEVYVFdSQVAgKyAnID4gLicgKyBJQ09OICsgJywuJyArIElOUFVUICsgJywgLicgKyBDSEVDS0JPWFdSQVBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUZuID0gZWoyX2Jhc2VfNC5yaXBwbGVFZmZlY3QodGhpcy5lbGVtZW50LCByaXBwbGVNb2RlbCk7XG4gICAgICAgICAgICB2YXIgaWNvbk1vZGVsID0ge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLicgKyBURVhUV1JBUCArICcgPiAuJyArIElDT04sXG4gICAgICAgICAgICAgICAgaXNDZW50ZXJSaXBwbGU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVJY29uRm4gPSBlajJfYmFzZV80LnJpcHBsZUVmZmVjdCh0aGlzLmVsZW1lbnQsIGljb25Nb2RlbCk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5zZXRGdWxsUm93ID0gZnVuY3Rpb24gKGlzRW5hYmxlZCkge1xuICAgICAgICAgICAgaXNFbmFibGVkID8gZWoyX2Jhc2VfNi5hZGRDbGFzcyhbdGhpcy5lbGVtZW50XSwgRlVMTFJPV1dSQVApIDogZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhbdGhpcy5lbGVtZW50XSwgRlVMTFJPV1dSQVApO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuc2V0VG91Y2hQb3B1cCA9IGZ1bmN0aW9uIChpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIGlmIChpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9wdXAgPSBlajJfYmFzZV82LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBQT1BVUCwgc3R5bGVzOiAnZGlzcGxheTpub25lOycgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBlajJfYmFzZV82LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDT05URU5ULCBhdHRyczogeyB0YWJJbmRleDogJy0xJyB9IH0pO1xuICAgICAgICAgICAgICAgIHZhciBpY29uID0gZWoyX2Jhc2VfNi5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IElDT04gfSk7XG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV82LmFwcGVuZChbY29udGVudCwgZWoyX2Jhc2VfNi5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogRE9XTlRBSUwgfSldLCBwb3B1cCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5hZGQoY29udGVudCwgJ2NsaWNrJywgdGhpcy5wb3B1cENsaWNrLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBwb3B1cCA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFBPUFVQLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChwb3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmRldGFjaChwb3B1cCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuc2V0TXVsdGlTZWxlY3QgPSBmdW5jdGlvbiAoaXNFbmFibGVkKSB7XG4gICAgICAgICAgICBpZiAoaXNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tdWx0aXNlbGVjdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tdWx0aXNlbGVjdGFibGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnBvcHVwQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB0YXJnZXQgPSBlajJfYmFzZV82LmNsb3Nlc3QodGFyZ2V0LCAnLicgKyBQT1BVUCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhQT1BVUFNFTEVDVCkpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFt0YXJnZXRdLCBQT1BVUFNFTEVDVCk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgUE9QVVAsIHRoaXMuZWxlbWVudCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW3RhcmdldF0sIFBPUFVQU0VMRUNUKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnRlbXBsYXRlQ29tcGxpZXIgPSBmdW5jdGlvbiAodGVtcGxhdGUpIHtcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRlbXBsYXRlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlajJfYmFzZV8xLmNvbXBpbGUoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0ZW1wbGF0ZSkuaW5uZXJIVE1MLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVqMl9iYXNlXzEuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnNldERhdGFCaW5kaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudHJlZUxpc3QucHVzaCgnZmFsc2UnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkcy5kYXRhU291cmNlIGluc3RhbmNlb2YgZWoyX2RhdGFfMS5EYXRhTWFuYWdlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLmRhdGFTb3VyY2UuZXhlY3V0ZVF1ZXJ5KHRoaXMuZ2V0UXVlcnkodGhpcy5maWVsZHMpKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyZWVMaXN0LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmVlRGF0YSA9IGUucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pc051bWJlclR5cGVJZCA9IF90aGlzLnRyZWVEYXRhWzBdID8gKCh0eXBlb2YgX3RoaXMudHJlZURhdGFbMF1bX3RoaXMuZmllbGRzLmlkXSA9PT0gJ251bWJlcicpID8gdHJ1ZSA6IGZhbHNlKSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRSb290RGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZW5kZXJJdGVtcyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnRyZWVMaXN0Lmxlbmd0aCA9PT0gMCAmJiAhX3RoaXMuaXNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmZpbmFsaXplKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudHJlZUxpc3QucG9wKCk7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5maWVsZHMuZGF0YVNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb290RGF0YSA9IHRoaXMudHJlZURhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJlZURhdGEgPSB0aGlzLmZpZWxkcy5kYXRhU291cmNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFJvb3REYXRhKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySXRlbXMoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudHJlZUxpc3QubGVuZ3RoID09PSAwICYmICF0aGlzLmlzTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0UXVlcnkgPSBmdW5jdGlvbiAobWFwcGVyLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgdmFsdWUgPSBudWxsOyB9XG4gICAgICAgICAgICB2YXIgY29sdW1ucyA9IFtdO1xuICAgICAgICAgICAgdmFyIHF1ZXJ5O1xuICAgICAgICAgICAgaWYgKCFtYXBwZXIucXVlcnkpIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IG5ldyBlajJfZGF0YV8xLlF1ZXJ5KCk7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSB0aGlzLmdldEFjdHVhbFByb3BlcnRpZXMobWFwcGVyKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMocHJvcCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2wgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2wgIT09ICdkYXRhU291cmNlJyAmJiBjb2wgIT09ICd0YWJsZU5hbWUnICYmIGNvbCAhPT0gJ2NoaWxkJyAmJiAhIW1hcHBlcltjb2xdXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBjb2x1bW5zLmluZGV4T2YobWFwcGVyW2NvbF0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKG1hcHBlcltjb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBxdWVyeS5zZWxlY3QoY29sdW1ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AuaGFzT3duUHJvcGVydHkoJ3RhYmxlTmFtZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LmZyb20obWFwcGVyLnRhYmxlTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSBtYXBwZXIucXVlcnkuY2xvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9saXN0c18xLkxpc3RCYXNlLmFkZFNvcnRpbmcodGhpcy5zb3J0T3JkZXIsIG1hcHBlci50ZXh0LCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpICYmICFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKG1hcHBlci5wYXJlbnRJRCkpIHtcbiAgICAgICAgICAgICAgICBxdWVyeS53aGVyZShtYXBwZXIucGFyZW50SUQsICdlcXVhbCcsICh0aGlzLmlzTnVtYmVyVHlwZUlkID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuc2V0Um9vdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFUeXBlID0gdGhpcy5nZXREYXRhVHlwZSh0aGlzLnRyZWVEYXRhLCB0aGlzLmZpZWxkcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBlZERhdGEgPSB0aGlzLmdldEdyb3VwZWREYXRhKHRoaXMudHJlZURhdGEsIHRoaXMuZmllbGRzLnBhcmVudElEKTtcbiAgICAgICAgICAgICAgICB2YXIgcm9vdEl0ZW1zID0gdGhpcy5nZXRDaGlsZE5vZGVzKHRoaXMudHJlZURhdGEsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQocm9vdEl0ZW1zKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb3REYXRhID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb3REYXRhID0gcm9vdEl0ZW1zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGEgPSB0aGlzLnRyZWVEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUucmVuZGVySXRlbXMgPSBmdW5jdGlvbiAoaXNTb3J0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdEJhc2VPcHRpb24uYXJpYUF0dHJpYnV0ZXMubGV2ZWwgPSAxO1xuICAgICAgICAgICAgdGhpcy51bEVsZW1lbnQgPSBlajJfbGlzdHNfMS5MaXN0QmFzZS5jcmVhdGVMaXN0KGlzU29ydGVkID8gdGhpcy5yb290RGF0YSA6IHRoaXMuZ2V0U29ydGVkRGF0YSh0aGlzLnJvb3REYXRhKSwgdGhpcy5saXN0QmFzZU9wdGlvbik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy51bEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5maW5hbGl6ZU5vZGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmJlZm9yZU5vZGVDcmVhdGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NoZWNrQm94KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrYm94RWxlID0gZWoyX2J1dHRvbnNfMS5jcmVhdGVDaGVja0JveCh0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgaWNvbiA9IGVqMl9iYXNlXzYuc2VsZWN0KCdkaXYuJyArIElDT04sIGUuaXRlbSk7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZS5pdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS11aWQnKTtcbiAgICAgICAgICAgICAgICBlLml0ZW0uY2hpbGROb2Rlc1swXS5pbnNlcnRCZWZvcmUoY2hlY2tib3hFbGUsIGUuaXRlbS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChpY29uKSA/IDAgOiAxXSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZE5vZGVzLmluZGV4T2YoaWQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgQ0hFQ0tCT1hGUkFNRSwgY2hlY2tib3hFbGUpLmNsYXNzTGlzdC5hZGQoQ0hFQ0spO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveEVsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hlY2soZS5pdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZS5jdXJEYXRhW2UuZmllbGRzLmlzQ2hlY2tlZF0pICYmIGUuY3VyRGF0YVtlLmZpZWxkcy5pc0NoZWNrZWRdLnRvU3RyaW5nKCkgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBDSEVDS0JPWEZSQU1FLCBjaGVja2JveEVsZSkuY2xhc3NMaXN0LmFkZChDSEVDSyk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94RWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDaGVjayhlLml0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hFbGUuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mdWxsUm93U2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGdWxsUm93KGUuaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd011bHRpU2VsZWN0aW9uICYmICFlLml0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFNFTEVDVEVEKSkge1xuICAgICAgICAgICAgICAgIGUuaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmaWVsZHMgPSBlLmZpZWxkcztcbiAgICAgICAgICAgIHRoaXMuYWRkQWN0aW9uQ2xhc3MoZSwgZmllbGRzLnNlbGVjdGVkLCBTRUxFQ1RFRCk7XG4gICAgICAgICAgICB0aGlzLmFkZEFjdGlvbkNsYXNzKGUsIGZpZWxkcy5leHBhbmRlZCwgRVhQQU5ERUQpO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMubm9kZVRlbXBsYXRlRm4pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHRFbGUgPSBlLml0ZW0ucXVlcnlTZWxlY3RvcignLicgKyBMSVNUVEVYVCk7XG4gICAgICAgICAgICAgICAgdGV4dEVsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBlajJfYmFzZV82LmFwcGVuZCh0aGlzLm5vZGVUZW1wbGF0ZUZuKGUuY3VyRGF0YSksIHRleHRFbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgICAgICBub2RlOiBlLml0ZW0sXG4gICAgICAgICAgICAgICAgbm9kZURhdGE6IGUuY3VyRGF0YSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBlLnRleHQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdkcmF3Tm9kZScsIGV2ZW50QXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5hZGRBY3Rpb25DbGFzcyA9IGZ1bmN0aW9uIChlLCBhY3Rpb24sIGNzc0NsYXNzKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGUuY3VyRGF0YTtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGFjdGlvbikgJiYgIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZGF0YVthY3Rpb25dKSAmJiBkYXRhW2FjdGlvbl0udG9TdHJpbmcoKSAhPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgIGUuaXRlbS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldERhdGFUeXBlID0gZnVuY3Rpb24gKGRzLCBtYXBwZXIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIG1hcHBlci5jaGlsZCA9PT0gJ3N0cmluZycpICYmIGRzW2ldLmhhc093blByb3BlcnR5KG1hcHBlci5jaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkc1tpXS5oYXNPd25Qcm9wZXJ0eShtYXBwZXIucGFyZW50SUQpIHx8IGRzW2ldLmhhc093blByb3BlcnR5KG1hcHBlci5oYXNDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRHcm91cGVkRGF0YSA9IGZ1bmN0aW9uIChkYXRhU291cmNlLCBncm91cEJ5KSB7XG4gICAgICAgICAgICB2YXIgY3VzUXVlcnkgPSBuZXcgZWoyX2RhdGFfMS5RdWVyeSgpLmdyb3VwKGdyb3VwQnkpO1xuICAgICAgICAgICAgdmFyIGRzID0gZWoyX2xpc3RzXzEuTGlzdEJhc2UuZ2V0RGF0YVNvdXJjZShkYXRhU291cmNlLCBjdXNRdWVyeSk7XG4gICAgICAgICAgICB2YXIgZ3JwSXRlbSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtT2JqID0gZHNbal0uaXRlbXM7XG4gICAgICAgICAgICAgICAgZ3JwSXRlbS5wdXNoKGl0ZW1PYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdycEl0ZW07XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRTb3J0ZWREYXRhID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgICAgIGlmIChsaXN0ICYmIHRoaXMuc29ydE9yZGVyICE9PSAnTm9uZScpIHtcbiAgICAgICAgICAgICAgICBsaXN0ID0gZWoyX2xpc3RzXzEuTGlzdEJhc2UuZ2V0RGF0YVNvdXJjZShsaXN0LCBlajJfbGlzdHNfMS5MaXN0QmFzZS5hZGRTb3J0aW5nKHRoaXMuc29ydE9yZGVyLCB0aGlzLmZpZWxkcy50ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmZpbmFsaXplTm9kZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc05vZGVzID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgU0VMRUNURUQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZShzTm9kZXNbaV0sIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhzTm9kZXMsIFNFTEVDVEVEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjTm9kZXMgPSBlajJfYmFzZV82LnNlbGVjdEFsbCgnLicgKyBMSVNUSVRFTSArICc6bm90KC4nICsgRVhQQU5ERUQgKyAnKScsIGVsZW1lbnQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjTm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaWNvbiA9IGVqMl9iYXNlXzYuc2VsZWN0KCdkaXYuJyArIElDT04sIGNOb2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgaWYgKGljb24gJiYgaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoRVhQQU5EQUJMRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY05vZGVzW2pdLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtjTm9kZXNbal1dLCBOT0RFQ09MTEFQU0VEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZU5vZGVzID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgRVhQQU5ERUQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNoaWxkTm9kZXMoZU5vZGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoZU5vZGVzLCBFWFBBTkRFRCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDaGVja0JveCkge1xuICAgICAgICAgICAgICAgIHZhciBub2Rlc18xID0gW10uY29uY2F0KFtdLCB0aGlzLmNoZWNrZWROb2Rlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGVja0JveCA9IF90aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdWlkPVwiJyArIHZhbHVlICsgJ1wiXScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChjaGVja0JveCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzXzEgPSBub2Rlc18xLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZSAhPT0gdmFsdWU7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgY2hlY2tlZE5vZGVzOiBub2Rlc18xIH0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZW5zdXJlUGFyZW50Q2hlY2tTdGF0ZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoUk9PVCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdWxFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoTElTVElURU0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHVsRWxlbWVudCA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFBBUkVOVElURU0sIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tlZE5vZGVzID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgQ0hFQ0ssIHVsRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgTElTVElURU0sIHVsRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrQm94RWxlID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKENIRUNLQk9YV1JBUClbMF07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gY2hlY2tlZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGNoZWNrQm94RWxlLCAnY2hlY2snLCBudWxsLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShjaGVja0JveEVsZSwgJ2luZGV0ZXJtaW5hdGUnLCBudWxsLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tlZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGNoZWNrQm94RWxlLCAndW5jaGVjaycsIG51bGwsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50VUwgPSBlajJfYmFzZV82LmNsb3Nlc3QoZWxlbWVudCwgJy4nICsgUEFSRU5USVRFTSk7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKHBhcmVudFVMKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBhcmVudCA9IGVqMl9iYXNlXzYuY2xvc2VzdChwYXJlbnRVTCwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZVBhcmVudENoZWNrU3RhdGUoY3VycmVudFBhcmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZW5zdXJlQ2hpbGRDaGVja1N0YXRlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGUpIHtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZEVsZW1lbnQgPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBQQVJFTlRJVEVNLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tCb3hlcyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoY2hpbGRFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja0JveGVzID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgQ0hFQ0tCT1hXUkFQLCBjaGlsZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNDaGVja2VkID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKENIRUNLQk9YRlJBTUUpWzBdLmNsYXNzTGlzdC5jb250YWlucyhDSEVDSyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGVja2VkU3RhdGUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBjaGVja0JveGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VycmVudExvYWREYXRhKSAmJiAhZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZCh0aGlzLmN1cnJlbnRMb2FkRGF0YVtpbmRleF1bdGhpcy5maWVsZHMuaXNDaGVja2VkXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkU3RhdGUgPSB0aGlzLmN1cnJlbnRMb2FkRGF0YVtpbmRleF1bdGhpcy5maWVsZHMuaXNDaGVja2VkXSA/ICdjaGVjaycgOiAndW5jaGVjayc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkU3RhdGUgPSBpc0NoZWNrZWQgPyAnY2hlY2snIDogJ3VuY2hlY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShjaGVja0JveGVzW2luZGV4XSwgY2hlY2tlZFN0YXRlLCBlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmRvQ2hlY2tCb3hBY3Rpb24gPSBmdW5jdGlvbiAobm9kZXMsIGRvQ2hlY2spIHtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChub2RlcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpRWxlID0gdGhpcy5nZXRFbGVtZW50KG5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobGlFbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hlY2tCb3ggPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBQQVJFTlRJVEVNICsgJyAuJyArIENIRUNLQk9YV1JBUCwgbGlFbGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ2hlY2tOb2RlKGNoZWNrQm94LCAhZG9DaGVjaywgbGlFbGUsIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjaGVja0JveGVzID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgQ0hFQ0tCT1hXUkFQLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBjaGVja0JveGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGNoZWNrQm94ZXNbaW5kZXhdLCBkb0NoZWNrID8gJ2NoZWNrJyA6ICd1bmNoZWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAod3JhcHBlciwgc3RhdGUsIGUsIGlzUHJldmVudCwgaXNBZGQpIHtcbiAgICAgICAgICAgIHZhciBhcmlhU3RhdGU7XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmdzO1xuICAgICAgICAgICAgdmFyIGN1cnJMaSA9IGVqMl9iYXNlXzYuY2xvc2VzdCh3cmFwcGVyLCAnLicgKyBMSVNUSVRFTSk7XG4gICAgICAgICAgICBpZiAoIWlzUHJldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBY3Rpb25Ob2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGV2ZW50QXJncyA9IHRoaXMuZ2V0Q2hlY2tFdmVudChjdXJyTGksIHN0YXRlLCBlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ25vZGVDaGVja2luZycsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50QXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmcmFtZVNwYW4gPSB3cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoQ0hFQ0tCT1hGUkFNRSlbMF07XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09ICdjaGVjaycgJiYgIWZyYW1lU3Bhbi5jbGFzc0xpc3QuY29udGFpbnMoQ0hFQ0spKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVTcGFuLmNsYXNzTGlzdC5yZW1vdmUoSU5ERVRFUk1JTkFURSk7XG4gICAgICAgICAgICAgICAgZnJhbWVTcGFuLmNsYXNzTGlzdC5hZGQoQ0hFQ0spO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hlY2soY3VyckxpKTtcbiAgICAgICAgICAgICAgICBhcmlhU3RhdGUgPSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PT0gJ3VuY2hlY2snICYmIChmcmFtZVNwYW4uY2xhc3NMaXN0LmNvbnRhaW5zKENIRUNLKSB8fCBmcmFtZVNwYW4uY2xhc3NMaXN0LmNvbnRhaW5zKElOREVURVJNSU5BVEUpKSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW2ZyYW1lU3Bhbl0sIFtDSEVDSywgSU5ERVRFUk1JTkFURV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hlY2soY3VyckxpKTtcbiAgICAgICAgICAgICAgICBhcmlhU3RhdGUgPSAnZmFsc2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09ICdpbmRldGVybWluYXRlJyAmJiAhZnJhbWVTcGFuLmNsYXNzTGlzdC5jb250YWlucyhJTkRFVEVSTUlOQVRFKSkge1xuICAgICAgICAgICAgICAgIGZyYW1lU3Bhbi5jbGFzc0xpc3QucmVtb3ZlKENIRUNLKTtcbiAgICAgICAgICAgICAgICBmcmFtZVNwYW4uY2xhc3NMaXN0LmFkZChJTkRFVEVSTUlOQVRFKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoZWNrKGN1cnJMaSk7XG4gICAgICAgICAgICAgICAgYXJpYVN0YXRlID0gJ21peGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyaWFTdGF0ZSA9IHN0YXRlID09PSAnY2hlY2snID8gJ3RydWUnIDogc3RhdGUgPT09ICd1bmNoZWNrJyA/ICdmYWxzZScgOiBhcmlhU3RhdGU7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoYXJpYVN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCBhcmlhU3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzQWRkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBbXS5jb25jYXQoW10sIHRoaXMuY2hlY2tBY3Rpb25Ob2Rlcyk7XG4gICAgICAgICAgICAgICAgZXZlbnRBcmdzID0gdGhpcy5nZXRDaGVja0V2ZW50KGN1cnJMaSwgc3RhdGUsIGUpO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV8xLmlzVW5kZWZpbmVkKGlzUHJldmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRBcmdzLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNQcmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGFyaWFTdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsIGFyaWFTdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QXJncy5kYXRhWzBdLmNoZWNrZWQgPSBhcmlhU3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbm9kZUNoZWNrZWQnLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQWN0aW9uTm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5hZGRDaGVjayA9IGZ1bmN0aW9uIChsaUVsZSkge1xuICAgICAgICAgICAgdmFyIGlkID0gbGlFbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXVpZCcpO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGlkKSAmJiB0aGlzLmNoZWNrZWROb2Rlcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWROb2Rlcy5wdXNoKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnJlbW92ZUNoZWNrID0gZnVuY3Rpb24gKGxpRWxlKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoZWNrZWROb2Rlcy5pbmRleE9mKGxpRWxlLmdldEF0dHJpYnV0ZSgnZGF0YS11aWQnKSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRDaGVja0V2ZW50ID0gZnVuY3Rpb24gKGN1cnJMaSwgYWN0aW9uLCBlKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQWN0aW9uTm9kZXMucHVzaCh0aGlzLmdldE5vZGVEYXRhKGN1cnJMaSkpO1xuICAgICAgICAgICAgdmFyIG5vZGVEYXRhID0gdGhpcy5jaGVja0FjdGlvbk5vZGVzO1xuICAgICAgICAgICAgcmV0dXJuIHsgYWN0aW9uOiBhY3Rpb24sIGNhbmNlbDogZmFsc2UsIGlzSW50ZXJhY3RlZDogZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChlKSA/IGZhbHNlIDogdHJ1ZSwgbm9kZTogY3VyckxpLCBkYXRhOiBub2RlRGF0YSB9O1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZmluYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3ROb2RlID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgTElTVElURU0sIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoZmlyc3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbZmlyc3ROb2RlXSwgRk9DVVMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kb1NlbGVjdGlvbkFjdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmdzID0geyBkYXRhOiB0aGlzLnRyZWVEYXRhIH07XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2RhdGFCb3VuZCcsIGV2ZW50QXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5kb1NlbGVjdGlvbkFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzTm9kZXMgPSBlajJfYmFzZV82LnNlbGVjdEFsbCgnLicgKyBTRUxFQ1RFRCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHZhciBzVWlkcyA9IHRoaXMuc2VsZWN0ZWROb2RlcztcbiAgICAgICAgICAgIGlmIChzVWlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgc2VsZWN0ZWROb2RlczogW10gfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzVWlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc05vZGUgPSBlajJfYmFzZV82LnNlbGVjdCgnW2RhdGEtdWlkPVwiJyArIHNVaWRzW2ldICsgJ1wiXScsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZShzTm9kZSwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hbGxvd011bHRpU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0R2l2ZW5Ob2RlcyhzTm9kZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhzTm9kZXMsIFNFTEVDVEVEKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnNlbGVjdEdpdmVuTm9kZXMgPSBmdW5jdGlvbiAoc05vZGVzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZShzTm9kZXNbaV0sIG51bGwsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hbGxvd011bHRpU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnY29udGV4dG1lbnUgJywgdGhpcy5wcmV2ZW50Q29udGV4dE1lbnUpO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQgfHwgdGhpcy5kcmFnU3RhcnRBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NMaXN0ID0gdGFyZ2V0LmNsYXNzTGlzdDtcbiAgICAgICAgICAgICAgICB2YXIgbGkgPSBlajJfYmFzZV82LmNsb3Nlc3QodGFyZ2V0LCAnLicgKyBMSVNUSVRFTSk7XG4gICAgICAgICAgICAgICAgaWYgKCFsaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUhvdmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNFbGVtZW50KGxpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NoZWNrQm94KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hlY2tXcmFwcGVyID0gZWoyX2Jhc2VfNi5jbG9zZXN0KHRhcmdldCwgJy4nICsgQ0hFQ0tCT1hXUkFQKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChjaGVja1dyYXBwZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrRWxlbWVudCA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIENIRUNLQk9YRlJBTUUsIGNoZWNrV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUNoZWNrTm9kZShjaGVja1dyYXBwZXIsIGNoZWNrRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0hFQ0spLCBsaSwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyQ2xpY2tFdmVudChlLCBsaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoRVhQQU5EQUJMRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kQWN0aW9uKGxpLCB0YXJnZXQsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNsYXNzTGlzdC5jb250YWlucyhDT0xMQVBTSUJMRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VOb2RlKGxpLCB0YXJnZXQsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbGFzc0xpc3QuY29udGFpbnMoUEFSRU5USVRFTSkgJiYgIWNsYXNzTGlzdC5jb250YWlucyhMSVNUSVRFTSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXVsdGlTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMS5Ccm93c2VyLmlzRGV2aWNlICYmIHRoaXMuYWxsb3dNdWx0aVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9wdXAgPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBQT1BVUCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV82LmlzVmlzaWJsZShwb3B1cCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHh0V3JhcCA9IGVqMl9iYXNlXzYuY2xvc2VzdCh0YXJnZXQsICcuJyArIFRFWFRXUkFQKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0V3JhcCA9ICF0eHRXcmFwID8gZS50YXJnZXQgOiB0eHRXcmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gdHh0V3JhcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc0xlZnQgPSAoZS5jbGllbnRYIC0gcG9zLmxlZnQpICsgdHh0V3JhcC5vZmZzZXRMZWZ0IC0gKHBvcHVwLm9mZnNldFdpZHRoIC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NUb3AgPSB0eHRXcmFwLm9mZnNldFRvcCAtIHBvcHVwLm9mZnNldEhlaWdodCAtIDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5zdHlsZS5sZWZ0ID0gKHBvc0xlZnQgPCAwID8gMCA6IHBvc0xlZnQpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuc3R5bGUudG9wID0gKHBvc1RvcCA8IDAgPyAwIDogcG9zVG9wKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoUE9QVVBTRUxFQ1QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aVNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3QobGksIGUsIG11bHRpU2VsZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJDbGlja0V2ZW50KGUsIGxpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5ub2RlQ2hlY2tpbmdFdmVudCA9IGZ1bmN0aW9uICh3cmFwcGVyLCBpc0NoZWNrLCBlKSB7XG4gICAgICAgICAgICB2YXIgY3VyckxpID0gZWoyX2Jhc2VfNi5jbG9zZXN0KHdyYXBwZXIsICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBY3Rpb25Ob2RlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIGFyaWFTdGF0ZSA9ICFpc0NoZWNrID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChhcmlhU3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsIGFyaWFTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmdzID0gdGhpcy5nZXRDaGVja0V2ZW50KGN1cnJMaSwgIWlzQ2hlY2sgPyAndW5jaGVjaycgOiAnY2hlY2snLCBlKTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbm9kZUNoZWNraW5nJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgIHJldHVybiBldmVudEFyZ3M7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5ub2RlQ2hlY2tlZEV2ZW50ID0gZnVuY3Rpb24gKHdyYXBwZXIsIGlzQ2hlY2ssIGUpIHtcbiAgICAgICAgICAgIHZhciBjdXJyTGkgPSBlajJfYmFzZV82LmNsb3Nlc3Qod3JhcHBlciwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgdmFyIGV2ZW50QXJncyA9IHRoaXMuZ2V0Q2hlY2tFdmVudCh3cmFwcGVyLCBpc0NoZWNrID8gJ3VuY2hlY2snIDogJ2NoZWNrJywgZSk7XG4gICAgICAgICAgICBldmVudEFyZ3MuZGF0YSA9IGV2ZW50QXJncy5kYXRhLnNwbGljZSgwLCBldmVudEFyZ3MuZGF0YS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbm9kZUNoZWNrZWQnLCBldmVudEFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUudHJpZ2dlckNsaWNrRXZlbnQgPSBmdW5jdGlvbiAoZSwgbGkpIHtcbiAgICAgICAgICAgIHZhciBldmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAgbm9kZTogbGksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdub2RlQ2xpY2tlZCcsIGV2ZW50QXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5leHBhbmROb2RlID0gZnVuY3Rpb24gKGN1cnJMaSwgaWNvbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW2ljb25dLCBMT0FEKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW2ljb25dLCBFWFBBTkRBQkxFKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2ljb25dLCBDT0xMQVBTSUJMRSk7XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSAwO1xuICAgICAgICAgICAgdmFyIGVuZCA9IDA7XG4gICAgICAgICAgICB2YXIgcHJveHkgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHVsID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgUEFSRU5USVRFTSwgY3VyckxpKTtcbiAgICAgICAgICAgIHZhciBsaUVsZSA9IGN1cnJMaTtcbiAgICAgICAgICAgIHRoaXMuc2V0SGVpZ2h0KGxpRWxlLCB1bCk7XG4gICAgICAgICAgICB0aGlzLmFuaU9iai5hbmltYXRlKHVsLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5hbmltYXRpb24uZXhwYW5kLmVmZmVjdCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5hbmltYXRpb24uZXhwYW5kLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiB0aGlzLmFuaW1hdGlvbi5leHBhbmQuZWFzaW5nLFxuICAgICAgICAgICAgICAgIGJlZ2luOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICBsaUVsZS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGxpRWxlLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgVEVYVFdSQVAsIGN1cnJMaSkub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgcHJveHkuYW5pbWF0ZUhlaWdodChhcmdzLCBzdGFydCwgZW5kKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVuZDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICBsaUVsZS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBsaUVsZS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhbaWNvbl0sIFBST0NFU1MpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyTGkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhbY3VyckxpXSwgTk9ERUNPTExBUFNFRCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc0xvYWRlZCAmJiBfdGhpcy5leHBhbmRBcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmlnZ2VyKCdub2RlRXhwYW5kZWQnLCBfdGhpcy5leHBhbmRBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuY29sbGFwc2VOb2RlID0gZnVuY3Rpb24gKGN1cnJMaSwgaWNvbiwgZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucyhQUk9DRVNTKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2ljb25dLCBQUk9DRVNTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb2xBcmdzO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBjb2xBcmdzID0gdGhpcy5nZXRFeHBhbmRFdmVudChjdXJyTGksIGUpO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbm9kZUNvbGxhcHNpbmcnLCBjb2xBcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sQXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW2ljb25dLCBDT0xMQVBTSUJMRSk7XG4gICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtpY29uXSwgRVhQQU5EQUJMRSk7XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSAwO1xuICAgICAgICAgICAgdmFyIGVuZCA9IDA7XG4gICAgICAgICAgICB2YXIgcHJveHkgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHVsID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgUEFSRU5USVRFTSwgY3VyckxpKTtcbiAgICAgICAgICAgIHZhciBsaUVsZSA9IGN1cnJMaTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2N1cnJMaV0sIE5PREVDT0xMQVBTRUQpO1xuICAgICAgICAgICAgdGhpcy5hbmlPYmouYW5pbWF0ZSh1bCwge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuYW5pbWF0aW9uLmNvbGxhcHNlLmVmZmVjdCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5hbmltYXRpb24uY29sbGFwc2UuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246IHRoaXMuYW5pbWF0aW9uLmNvbGxhcHNlLmVhc2luZyxcbiAgICAgICAgICAgICAgICBiZWdpbjogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlFbGUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBURVhUV1JBUCwgY3VyckxpKS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IGxpRWxlLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICBwcm94eS5hbmltYXRlSGVpZ2h0KGFyZ3MsIHN0YXJ0LCBlbmQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW5kOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICBsaUVsZS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgbGlFbGUuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW2ljb25dLCBQUk9DRVNTKTtcbiAgICAgICAgICAgICAgICAgICAgY3VyckxpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRyaWdnZXIoJ25vZGVDb2xsYXBzZWQnLCBjb2xBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGN1cnJMaSwgdWwpIHtcbiAgICAgICAgICAgIHVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgY3VyckxpLnN0eWxlLmhlaWdodCA9IGN1cnJMaS5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgdWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHVsLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbiAoYXJncywgc3RhcnQsIGVuZCkge1xuICAgICAgICAgICAgdmFyIHJlbWFpbmluZyA9IChhcmdzLmR1cmF0aW9uIC0gYXJncy50aW1lU3RhbXApIC8gYXJncy5kdXJhdGlvbjtcbiAgICAgICAgICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gKGVuZCAtIHN0YXJ0KSAqIHJlbWFpbmluZyArIHN0YXJ0O1xuICAgICAgICAgICAgYXJncy5lbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY3VycmVudEhlaWdodCArICdweCc7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5yZW5kZXJDaGlsZE5vZGVzID0gZnVuY3Rpb24gKHBhcmVudExpLCBleHBhbmRDaGlsZCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBlaWNvbiA9IGVqMl9iYXNlXzYuc2VsZWN0KCdkaXYuJyArIElDT04sIHBhcmVudExpKTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGVpY29uKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2VpY29uXSwgTE9BRCk7XG4gICAgICAgICAgICB2YXIgY2hpbGRJdGVtcztcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkcy5kYXRhU291cmNlIGluc3RhbmNlb2YgZWoyX2RhdGFfMS5EYXRhTWFuYWdlcikge1xuICAgICAgICAgICAgICAgIHZhciBsZXZlbCA9IHRoaXMucGFyZW50cyhwYXJlbnRMaSwgJy4nICsgUEFSRU5USVRFTSkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBtYXBwZXJfMSA9IHRoaXMuZ2V0Q2hpbGRGaWVsZHModGhpcy5maWVsZHMsIGxldmVsLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChtYXBwZXJfMSkgfHwgZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChtYXBwZXJfMS5kYXRhU291cmNlKSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmRldGFjaChlaWNvbik7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudExpLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUxpc3QucHVzaCgnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICBtYXBwZXJfMS5kYXRhU291cmNlLmV4ZWN1dGVRdWVyeSh0aGlzLmdldFF1ZXJ5KG1hcHBlcl8xLCBwYXJlbnRMaS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdWlkJykpKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyZWVMaXN0LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZEl0ZW1zID0gZS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnRMb2FkRGF0YSA9IGNoaWxkSXRlbXM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGNoaWxkSXRlbXMpIHx8IGNoaWxkSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmRldGFjaChlaWNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRMaS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0gX3RoaXMuZ2V0QWN0dWFsUHJvcGVydGllcyhtYXBwZXJfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5saXN0QmFzZU9wdGlvbi5maWVsZHMgPSBwcm9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGlzdEJhc2VPcHRpb24uZmllbGRzLnVybCA9IHByb3AubmF2aWdhdGVVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5saXN0QmFzZU9wdGlvbi5hcmlhQXR0cmlidXRlcy5sZXZlbCA9IHBhcnNlRmxvYXQocGFyZW50TGkuZ2V0QXR0cmlidXRlKCdhcmlhLWxldmVsJykpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudExpLmFwcGVuZENoaWxkKGVqMl9saXN0c18xLkxpc3RCYXNlLmNyZWF0ZUxpc3QoY2hpbGRJdGVtcywgX3RoaXMubGlzdEJhc2VPcHRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmV4cGFuZE5vZGUocGFyZW50TGksIGVpY29uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVuc3VyZUNoZWNrTm9kZShwYXJlbnRMaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5maW5hbGl6ZU5vZGUocGFyZW50TGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVuZGVyU3ViQ2hpbGQocGFyZW50TGksIGV4cGFuZENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMudHJlZUxpc3QubGVuZ3RoID09PSAwICYmICFfdGhpcy5pc0xvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmluYWxpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hpbGRJdGVtcyA9IHRoaXMuZ2V0Q2hpbGROb2Rlcyh0aGlzLnRyZWVEYXRhLCBwYXJlbnRMaS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdWlkJykpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExvYWREYXRhID0gY2hpbGRJdGVtcztcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChjaGlsZEl0ZW1zKSB8fCBjaGlsZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmRldGFjaChlaWNvbik7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudExpLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RCYXNlT3B0aW9uLmFyaWFBdHRyaWJ1dGVzLmxldmVsID0gcGFyc2VGbG9hdChwYXJlbnRMaS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGV2ZWwnKSkgKyAxO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRMaS5hcHBlbmRDaGlsZChlajJfbGlzdHNfMS5MaXN0QmFzZS5jcmVhdGVMaXN0KHRoaXMuZ2V0U29ydGVkRGF0YShjaGlsZEl0ZW1zKSwgdGhpcy5saXN0QmFzZU9wdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZE5vZGUocGFyZW50TGksIGVpY29uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVDaGVja05vZGUocGFyZW50TGkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmFsaXplTm9kZShwYXJlbnRMaSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU3ViQ2hpbGQocGFyZW50TGksIGV4cGFuZENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5lbnN1cmVDaGVja05vZGUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NoZWNrQm94KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVDaGlsZENoZWNrU3RhdGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVQYXJlbnRDaGVja1N0YXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9hZERhdGEgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0Q2hpbGRGaWVsZHMgPSBmdW5jdGlvbiAobWFwcGVyLCBub2RlTGV2ZWwsIGRhdGFMZXZlbCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkRGF0YTtcbiAgICAgICAgICAgIGlmIChub2RlTGV2ZWwgPT09IGRhdGFMZXZlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENoaWxkTWFwcGVyKG1hcHBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGlsZEZpZWxkcyh0aGlzLmdldENoaWxkTWFwcGVyKG1hcHBlciksIG5vZGVMZXZlbCwgZGF0YUxldmVsICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRDaGlsZE1hcHBlciA9IGZ1bmN0aW9uIChtYXBwZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAodHlwZW9mIG1hcHBlci5jaGlsZCA9PT0gJ3N0cmluZycgfHwgZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChtYXBwZXIuY2hpbGQpKSA/IG1hcHBlciA6IG1hcHBlci5jaGlsZDtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldENoaWxkTm9kZXMgPSBmdW5jdGlvbiAob2JqLCBwYXJlbnRJZCwgaXNSb290KSB7XG4gICAgICAgICAgICBpZiAoaXNSb290ID09PSB2b2lkIDApIHsgaXNSb290ID0gZmFsc2U7IH1cbiAgICAgICAgICAgIHZhciBjaGlsZE5vZGVzO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQob2JqKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kYXRhVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENoaWxkR3JvdXAodGhpcy5ncm91cGVkRGF0YSwgcGFyZW50SWQsIGlzUm9vdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRzLmNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgb2JqbGVuID0gb2JqLmxlbmd0aDsgaSA8IG9iamxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqW2ldW3RoaXMuZmllbGRzLmlkXSAmJiBvYmpbaV1bdGhpcy5maWVsZHMuaWRdLnRvU3RyaW5nKCkgPT09IHBhcmVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ialtpXVt0aGlzLmZpZWxkcy5jaGlsZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvYmpbaV0uaGFzT3duUHJvcGVydHkodGhpcy5maWVsZHMuY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcyhvYmpbaV1bdGhpcy5maWVsZHMuY2hpbGRdLCBwYXJlbnRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlcztcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldENoaWxkR3JvdXAgPSBmdW5jdGlvbiAoZGF0YSwgcGFyZW50SWQsIGlzUm9vdCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkTm9kZXM7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChkYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG9iamxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgb2JqbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZGF0YVtpXVswXSkgJiYgIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZGF0YVtpXVswXVt0aGlzLmZpZWxkcy5wYXJlbnRJRF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldWzBdW3RoaXMuZmllbGRzLnBhcmVudElEXS50b1N0cmluZygpID09PSBwYXJlbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNSb290KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUucmVuZGVyU3ViQ2hpbGQgPSBmdW5jdGlvbiAoZWxlbWVudCwgZXhwYW5kQ2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChleHBhbmRDaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBjSWNvbnMgPSBlajJfYmFzZV82LnNlbGVjdEFsbCgnLicgKyBFWFBBTkRBQkxFLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY0ljb25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpY29uID0gY0ljb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyTGkgPSBlajJfYmFzZV82LmNsb3Nlc3QoaWNvbiwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNoaWxkTm9kZXMoY3VyTGksIGV4cGFuZENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS50b2dnbGVTZWxlY3QgPSBmdW5jdGlvbiAobGksIGUsIG11bHRpU2VsZWN0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd011bHRpU2VsZWN0aW9uICYmICgoZSAmJiBlLmN0cmxLZXkpIHx8IG11bHRpU2VsZWN0KSAmJiB0aGlzLmlzQWN0aXZlKGxpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zZWxlY3ROb2RlKGxpLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9kZShsaSwgZSwgbXVsdGlTZWxlY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiAobGkpIHtcbiAgICAgICAgICAgIHJldHVybiBsaS5jbGFzc0xpc3QuY29udGFpbnMoQUNUSVZFKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnNlbGVjdE5vZGUgPSBmdW5jdGlvbiAobGksIGUsIG11bHRpU2VsZWN0KSB7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChsaSkgfHwgKCF0aGlzLmFsbG93TXVsdGlTZWxlY3Rpb24gJiYgdGhpcy5pc0FjdGl2ZShsaSkgJiYgIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZSkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGb2N1c0VsZW1lbnQobGkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBldmVudEFyZ3M7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgICAgICAgICAgIGV2ZW50QXJncyA9IHRoaXMuZ2V0U2VsZWN0RXZlbnQobGksICdzZWxlY3QnLCBlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ25vZGVTZWxlY3RpbmcnLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgICAgIGlmIChldmVudEFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWxsb3dNdWx0aVNlbGVjdGlvbiB8fCAoIW11bHRpU2VsZWN0ICYmICghZSB8fCAoZSAmJiAhZS5jdHJsS2V5KSkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RBbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFsbG93TXVsdGlTZWxlY3Rpb24gJiYgZSAmJiBlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXJ0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Tm9kZSA9IGxpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRJbmRleCA9IHRoaXMubGlMaXN0LmluZGV4T2YodGhpcy5zdGFydE5vZGUpO1xuICAgICAgICAgICAgICAgIHZhciBlbmRJbmRleCA9IHRoaXMubGlMaXN0LmluZGV4T2YobGkpO1xuICAgICAgICAgICAgICAgIGlmIChzdGFydEluZGV4ID4gZW5kSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBzdGFydEluZGV4O1xuICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gdGVtcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgPD0gZW5kSW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyck5vZGUgPSB0aGlzLmxpTGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzYuaXNWaXNpYmxlKGN1cnJOb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTZWxlY3QoY3Vyck5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydE5vZGUgPSBsaTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNlbGVjdChsaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzRWxlbWVudChsaSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbm9kZVNlbGVjdGVkJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnVuc2VsZWN0Tm9kZSA9IGZ1bmN0aW9uIChsaSwgZSkge1xuICAgICAgICAgICAgdmFyIGV2ZW50QXJncztcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRBcmdzID0gdGhpcy5nZXRTZWxlY3RFdmVudChsaSwgJ3VuLXNlbGVjdCcsIGUpO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbm9kZVNlbGVjdGluZycsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50QXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0KGxpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNFbGVtZW50KGxpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdub2RlU2VsZWN0ZWQnLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuc2V0Rm9jdXNFbGVtZW50ID0gZnVuY3Rpb24gKGxpKSB7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobGkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvY3VzZWROb2RlID0gdGhpcy5nZXRGb2N1c2VkTm9kZSgpO1xuICAgICAgICAgICAgICAgIGlmIChmb2N1c2VkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFtmb2N1c2VkTm9kZV0sIEZPQ1VTKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbbGldLCBGT0NVUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5hZGRTZWxlY3QgPSBmdW5jdGlvbiAobGlFbGUpIHtcbiAgICAgICAgICAgIGxpRWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtsaUVsZV0sIEFDVElWRSk7XG4gICAgICAgICAgICB2YXIgaWQgPSBsaUVsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdWlkJyk7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoaWQpICYmIHRoaXMuc2VsZWN0ZWROb2Rlcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZXMucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5yZW1vdmVTZWxlY3QgPSBmdW5jdGlvbiAobGlFbGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbG93TXVsdGlTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBsaUVsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpRWxlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhbbGlFbGVdLCBBQ1RJVkUpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zZWxlY3RlZE5vZGVzLmluZGV4T2YobGlFbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXVpZCcpKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5yZW1vdmVTZWxlY3RBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRMSSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIEFDVElWRSk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHNlbGVjdGVkTElfMSA9IHNlbGVjdGVkTEk7IF9pIDwgc2VsZWN0ZWRMSV8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBlbGUgPSBzZWxlY3RlZExJXzFbX2ldO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFsbG93TXVsdGlTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3Moc2VsZWN0ZWRMSSwgQUNUSVZFKTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHNlbGVjdGVkTm9kZXM6IFtdIH0sIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0U2VsZWN0RXZlbnQgPSBmdW5jdGlvbiAoY3VyckxpLCBhY3Rpb24sIGUpIHtcbiAgICAgICAgICAgIHZhciBub2RlRGF0YSA9IHRoaXMuZ2V0Tm9kZURhdGEoY3VyckxpKTtcbiAgICAgICAgICAgIHJldHVybiB7IGFjdGlvbjogYWN0aW9uLCBjYW5jZWw6IGZhbHNlLCBpc0ludGVyYWN0ZWQ6IGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZSkgPyBmYWxzZSA6IHRydWUsIG5vZGU6IGN1cnJMaSwgbm9kZURhdGE6IG5vZGVEYXRhIH07XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5zZXRFeHBhbmRPblR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZE9uVHlwZSA9ICh0aGlzLmV4cGFuZE9uID09PSAnYXV0bycpID8gKGVqMl9iYXNlXzEuQnJvd3Nlci5pc0RldmljZSA/ICdjbGljaycgOiAnZGJsY2xpY2snKSA6IHRoaXMuZXhwYW5kT247XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5leHBhbmRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0IHx8ICh0aGlzLmFsbG93RWRpdGluZyAmJiBlLnR5cGUgPT09ICdkYmxjbGljaycpIHx8IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoUk9PVCkgfHxcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFBBUkVOVElURU0pIHx8IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoTElTVElURU0pIHx8XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhJQ09OKSB8fCB0aGlzLnNob3dDaGVja0JveCAmJiBlajJfYmFzZV82LmNsb3Nlc3QodGFyZ2V0LCAnLicgKyBDSEVDS0JPWFdSQVApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRDb2xsYXBzZUFjdGlvbihlajJfYmFzZV82LmNsb3Nlc3QodGFyZ2V0LCAnLicgKyBMSVNUSVRFTSksIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZXhwYW5kQ29sbGFwc2VBY3Rpb24gPSBmdW5jdGlvbiAoY3VyckxpLCBlKSB7XG4gICAgICAgICAgICB2YXIgaWNvbiA9IGVqMl9iYXNlXzYuc2VsZWN0KCdkaXYuJyArIElDT04sIGN1cnJMaSk7XG4gICAgICAgICAgICBpZiAoIWljb24gfHwgaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoUFJPQ0VTUykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NMaXN0ID0gaWNvbi5jbGFzc0xpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzTGlzdC5jb250YWlucyhFWFBBTkRBQkxFKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEFjdGlvbihjdXJyTGksIGljb24sIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZU5vZGUoY3VyckxpLCBpY29uLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5leHBhbmRBY3Rpb24gPSBmdW5jdGlvbiAoY3VyckxpLCBpY29uLCBlLCBleHBhbmRDaGlsZCkge1xuICAgICAgICAgICAgaWYgKGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFBST0NFU1MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbaWNvbl0sIFBST0NFU1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEFyZ3MgPSB0aGlzLmdldEV4cGFuZEV2ZW50KGN1cnJMaSwgZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdub2RlRXhwYW5kaW5nJywgdGhpcy5leHBhbmRBcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5leHBhbmRBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHVsID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgUEFSRU5USVRFTSwgY3VyckxpKTtcbiAgICAgICAgICAgIGlmICh1bCAmJiB1bC5ub2RlTmFtZSA9PT0gJ1VMJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kTm9kZShjdXJyTGksIGljb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZE5vZGVzKGN1cnJMaSwgZXhwYW5kQ2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUua2V5QWN0aW9uSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgZm9jdXNlZE5vZGUgPSB0aGlzLmdldEZvY3VzZWROb2RlKCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoSU5QVVQpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucEVsZSA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAoZS5hY3Rpb24gPT09ICdlbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wRWxlLmJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2ZvY3VzZWROb2RlXSwgSE9WRVIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlLmFjdGlvbiA9PT0gJ2VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wRWxlLnZhbHVlID0gdGhpcy5vbGRUZXh0O1xuICAgICAgICAgICAgICAgICAgICBpbnBFbGUuYmx1cigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbZm9jdXNlZE5vZGVdLCBIT1ZFUik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBldmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgY2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBldmVudDogZSxcbiAgICAgICAgICAgICAgICBub2RlOiBmb2N1c2VkTm9kZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2tleVByZXNzJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgIGlmIChldmVudEFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChlLmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NwYWNlJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NoZWNrQm94KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTm9kZShlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtb3ZlUmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Ob2RlKHRoaXMuZW5hYmxlUnRsID8gZmFsc2UgOiB0cnVlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZUxlZnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Ob2RlKHRoaXMuZW5hYmxlUnRsID8gdHJ1ZSA6IGZhbHNlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZURvd24nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2N0cmxEb3duJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzaGlmdERvd24nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NzRG93bic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtb3ZlVXAnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2N0cmxVcCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnc2hpZnRVcCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnY3NVcCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVOb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnc2hpZnRIb21lJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjdHJsSG9tZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnY3NIb21lJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVJvb3ROb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NoaWZ0RW5kJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjdHJsRW5kJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjc0VuZCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVSb290Tm9kZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2VudGVyJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjdHJsRW50ZXInOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NoaWZ0RW50ZXInOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NzRW50ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdChmb2N1c2VkTm9kZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2YyJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dFZGl0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVRleHRib3goZm9jdXNlZE5vZGUsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2N0cmxBJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dNdWx0aVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNOb2RlcyA9IGVqMl9iYXNlXzYuc2VsZWN0QWxsKCcuJyArIExJU1RJVEVNICsgJzpub3QoLicgKyBBQ1RJVkUgKyAnKScsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEdpdmVuTm9kZXMoc05vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmNoZWNrTm9kZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgZm9jdXNlZE5vZGUgPSB0aGlzLmdldEZvY3VzZWROb2RlKCk7XG4gICAgICAgICAgICB2YXIgY2hlY2tXcmFwID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgQ0hFQ0tCT1hXUkFQLCBmb2N1c2VkTm9kZSk7XG4gICAgICAgICAgICB2YXIgaXNDaGVja2VkID0gZWoyX2Jhc2VfNi5zZWxlY3QoJyAuJyArIENIRUNLQk9YRlJBTUUsIGNoZWNrV3JhcCkuY2xhc3NMaXN0LmNvbnRhaW5zKENIRUNLKTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDaGVja05vZGUoY2hlY2tXcmFwLCBpc0NoZWNrZWQsIGZvY3VzZWROb2RlLCBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnZhbGlkYXRlQ2hlY2tOb2RlID0gZnVuY3Rpb24gKGNoZWNrV3JhcCwgaXNDaGVjaywgbGksIGUpIHtcbiAgICAgICAgICAgIHZhciBldmVudEFyZ3MgPSB0aGlzLm5vZGVDaGVja2luZ0V2ZW50KGNoZWNrV3JhcCwgaXNDaGVjaywgZSk7XG4gICAgICAgICAgICBpZiAoZXZlbnRBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoY2hlY2tXcmFwLCBpc0NoZWNrID8gJ3VuY2hlY2snIDogJ2NoZWNrJywgZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmVuc3VyZUNoaWxkQ2hlY2tTdGF0ZShsaSk7XG4gICAgICAgICAgICB0aGlzLmVuc3VyZVBhcmVudENoZWNrU3RhdGUoZWoyX2Jhc2VfNi5jbG9zZXN0KGVqMl9iYXNlXzYuY2xvc2VzdChsaSwgJy4nICsgUEFSRU5USVRFTSksICcuJyArIExJU1RJVEVNKSk7XG4gICAgICAgICAgICB0aGlzLm5vZGVDaGVja2VkRXZlbnQoY2hlY2tXcmFwLCBpc0NoZWNrLCBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLm9wZW5Ob2RlID0gZnVuY3Rpb24gKHRvQmVPcGVuZWQsIGUpIHtcbiAgICAgICAgICAgIHZhciBmb2N1c2VkTm9kZSA9IHRoaXMuZ2V0Rm9jdXNlZE5vZGUoKTtcbiAgICAgICAgICAgIHZhciBpY29uID0gZWoyX2Jhc2VfNi5zZWxlY3QoJ2Rpdi4nICsgSUNPTiwgZm9jdXNlZE5vZGUpO1xuICAgICAgICAgICAgaWYgKHRvQmVPcGVuZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucyhFWFBBTkRBQkxFKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEFjdGlvbihmb2N1c2VkTm9kZSwgaWNvbiwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTmV4dE5vZGUoZm9jdXNlZE5vZGUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpY29uICYmIGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKENPTExBUFNJQkxFKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlTm9kZShmb2N1c2VkTm9kZSwgaWNvbiwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50TGkgPSBlajJfYmFzZV82LmNsb3Nlc3QoZWoyX2Jhc2VfNi5jbG9zZXN0KGZvY3VzZWROb2RlLCAnLicgKyBQQVJFTlRJVEVNKSwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudExpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZvY3VzKGZvY3VzZWROb2RlLCBwYXJlbnRMaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5uYXZpZ2F0ZU5vZGUgPSBmdW5jdGlvbiAoaXNUb3dhcmRzKSB7XG4gICAgICAgICAgICB2YXIgZm9jdXNlZE5vZGUgPSB0aGlzLmdldEZvY3VzZWROb2RlKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzTmV4dE5vZGUoZm9jdXNlZE5vZGUsIGlzVG93YXJkcyk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5uYXZpZ2F0ZVJvb3ROb2RlID0gZnVuY3Rpb24gKGlzQmFja3dhcmRzKSB7XG4gICAgICAgICAgICB2YXIgZm9jdXNlZE5vZGUgPSB0aGlzLmdldEZvY3VzZWROb2RlKCk7XG4gICAgICAgICAgICB2YXIgcm9vdE5vZGUgPSBpc0JhY2t3YXJkcyA/IHRoaXMuZ2V0Um9vdE5vZGUoKSA6IHRoaXMuZ2V0RW5kTm9kZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRGb2N1cyhmb2N1c2VkTm9kZSwgcm9vdE5vZGUpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0Rm9jdXNlZE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZk5vZGUgPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBMSVNUSVRFTSArICcuJyArIEZPQ1VTLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZk5vZGUpID8gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgTElTVElURU0sIHRoaXMuZWxlbWVudCkgOiBmTm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmZvY3VzTmV4dE5vZGUgPSBmdW5jdGlvbiAobGksIGlzVG93YXJkcykge1xuICAgICAgICAgICAgdmFyIG5leHROb2RlID0gaXNUb3dhcmRzID8gdGhpcy5nZXROZXh0Tm9kZShsaSkgOiB0aGlzLmdldFByZXZOb2RlKGxpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXMobGksIG5leHROb2RlKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldE5leHROb2RlID0gZnVuY3Rpb24gKGxpKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmxpTGlzdC5pbmRleE9mKGxpKTtcbiAgICAgICAgICAgIHZhciBuZXh0Tm9kZTtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIG5leHROb2RlID0gdGhpcy5saUxpc3RbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKG5leHROb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAoIWVqMl9iYXNlXzYuaXNWaXNpYmxlKG5leHROb2RlKSk7XG4gICAgICAgICAgICByZXR1cm4gbmV4dE5vZGU7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRQcmV2Tm9kZSA9IGZ1bmN0aW9uIChsaSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5saUxpc3QuaW5kZXhPZihsaSk7XG4gICAgICAgICAgICB2YXIgcHJldk5vZGU7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICBwcmV2Tm9kZSA9IHRoaXMubGlMaXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChwcmV2Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKCFlajJfYmFzZV82LmlzVmlzaWJsZShwcmV2Tm9kZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHByZXZOb2RlO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0Um9vdE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICAgICAgdmFyIHJvb3ROb2RlO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHJvb3ROb2RlID0gdGhpcy5saUxpc3RbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB9IHdoaWxlICghZWoyX2Jhc2VfNi5pc1Zpc2libGUocm9vdE5vZGUpKTtcbiAgICAgICAgICAgIHJldHVybiByb290Tm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldEVuZE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmxpTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgdmFyIGVuZE5vZGU7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgZW5kTm9kZSA9IHRoaXMubGlMaXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgfSB3aGlsZSAoIWVqMl9iYXNlXzYuaXNWaXNpYmxlKGVuZE5vZGUpKTtcbiAgICAgICAgICAgIHJldHVybiBlbmROb2RlO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuc2V0Rm9jdXMgPSBmdW5jdGlvbiAocHJlTm9kZSwgbmV4dE5vZGUpIHtcbiAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW3ByZU5vZGVdLCBbSE9WRVIsIEZPQ1VTXSk7XG4gICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtuZXh0Tm9kZV0sIFtIT1ZFUiwgRk9DVVNdKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmZvY3VzSW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW91c2VEb3duU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbdGhpcy5nZXRGb2N1c2VkTm9kZSgpXSwgSE9WRVIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25TdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmZvY3VzT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhbdGhpcy5nZXRGb2N1c2VkTm9kZSgpXSwgSE9WRVIpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUub25Nb3VzZU92ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGNsYXNzTGlzdCA9IHRhcmdldC5jbGFzc0xpc3Q7XG4gICAgICAgICAgICB2YXIgY3VycmVudExpID0gZWoyX2Jhc2VfNi5jbG9zZXN0KHRhcmdldCwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50TGkgfHwgY2xhc3NMaXN0LmNvbnRhaW5zKFBBUkVOVElURU0pIHx8IGNsYXNzTGlzdC5jb250YWlucyhMSVNUSVRFTSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUhvdmVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRIb3ZlcihjdXJyZW50TGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuc2V0SG92ZXIgPSBmdW5jdGlvbiAobGkpIHtcbiAgICAgICAgICAgIGlmICghbGkuY2xhc3NMaXN0LmNvbnRhaW5zKEhPVkVSKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSG92ZXIoKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtsaV0sIEhPVkVSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSG92ZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnJlbW92ZUhvdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhvdmVyZWROb2RlID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgSE9WRVIsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoaG92ZXJlZE5vZGUgJiYgaG92ZXJlZE5vZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhob3ZlcmVkTm9kZSwgSE9WRVIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXROb2RlRGF0YSA9IGZ1bmN0aW9uIChjdXJyTGkpIHtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChjdXJyTGkpICYmIGN1cnJMaS5jbGFzc0xpc3QuY29udGFpbnMoTElTVElURU0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gY3VyckxpLmdldEF0dHJpYnV0ZSgnZGF0YS11aWQnKTtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIExJU1RURVhULCBjdXJyTGkpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIHZhciBwTm9kZSA9IGVqMl9iYXNlXzYuY2xvc2VzdChjdXJyTGkucGFyZW50Tm9kZSwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgICAgIHZhciBwaWQgPSBwTm9kZSA/IHBOb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS11aWQnKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gY3VyckxpLmNsYXNzTGlzdC5jb250YWlucyhBQ1RJVkUpO1xuICAgICAgICAgICAgICAgIHZhciBleHBhbmRlZCA9IChjdXJyTGkuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJykgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dDaGVja0JveCkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgQ0hFQ0tCT1hXUkFQLCBjdXJyTGkpLmdldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBpZCwgdGV4dDogdGV4dCwgcGFyZW50SUQ6IHBpZCwgc2VsZWN0ZWQ6IHNlbGVjdGVkLCBleHBhbmRlZDogZXhwYW5kZWQsIGNoZWNrZWQ6IGNoZWNrZWQgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGlkOiAnJywgdGV4dDogJycsIHBhcmVudElEOiAnJywgc2VsZWN0ZWQ6ICcnLCBleHBhbmRlZDogJycsIGNoZWNrZWQ6ICcnIH07XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRFeHBhbmRFdmVudCA9IGZ1bmN0aW9uIChjdXJyTGksIGUpIHtcbiAgICAgICAgICAgIHZhciBub2RlRGF0YSA9IHRoaXMuZ2V0Tm9kZURhdGEoY3VyckxpKTtcbiAgICAgICAgICAgIHJldHVybiB7IGNhbmNlbDogZmFsc2UsIGlzSW50ZXJhY3RlZDogZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChlKSA/IGZhbHNlIDogdHJ1ZSwgbm9kZTogY3VyckxpLCBub2RlRGF0YTogbm9kZURhdGEgfTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnJlUmVuZGVyTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBzZWxlY3RlZE5vZGVzOiBbXSB9LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YUJpbmRpbmcoKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnNldENzc0NsYXNzID0gZnVuY3Rpb24gKG9sZENsYXNzLCBuZXdDbGFzcykge1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKG9sZENsYXNzKSAmJiBvbGRDbGFzcyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFt0aGlzLmVsZW1lbnRdLCBvbGRDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChuZXdDbGFzcykgJiYgbmV3Q2xhc3MgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbdGhpcy5lbGVtZW50XSwgbmV3Q2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5lZGl0aW5nSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCB8fCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFJPT1QpIHx8IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoUEFSRU5USVRFTSkgfHxcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKExJU1RJVEVNKSB8fCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKElDT04pIHx8XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhJTlBVVCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHZhciBsaUVsZSA9IGVqMl9iYXNlXzYuY2xvc2VzdCh0YXJnZXQsICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVRleHRib3gobGlFbGUsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuY3JlYXRlVGV4dGJveCA9IGZ1bmN0aW9uIChsaUVsZSwgZSkge1xuICAgICAgICAgICAgdmFyIHRleHRFbGUgPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBMSVNUVEVYVCwgbGlFbGUpO1xuICAgICAgICAgICAgdGhpcy5vbGRUZXh0ID0gdGV4dEVsZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHZhciBldmVudEFyZ3MgPSB0aGlzLmdldEVkaXRFdmVudChsaUVsZSwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ25vZGVFZGl0aW5nJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgIGlmIChldmVudEFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0eWxlID0gJ3dpZHRoOicgKyB0ZXh0RWxlLm9mZnNldFdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIHZhciBpbnBFbGUgPSBlajJfYmFzZV82LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBjbGFzc05hbWU6IElOUFVULCBzdHlsZXM6IHN0eWxlLCBhdHRyczogeyB2YWx1ZTogdGhpcy5vbGRUZXh0IH0gfSk7XG4gICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtsaUVsZV0sIEVESVRJTkcpO1xuICAgICAgICAgICAgdGV4dEVsZS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGV4dEVsZS5hcHBlbmRDaGlsZChpbnBFbGUpO1xuICAgICAgICAgICAgaW5wRWxlLmZvY3VzKCk7XG4gICAgICAgICAgICB2YXIgaW5wdXRFbGUgPSBpbnBFbGU7XG4gICAgICAgICAgICBpbnB1dEVsZS5zZXRTZWxlY3Rpb25SYW5nZSgwLCBpbnB1dEVsZS52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgdGhpcy53aXJlSW5wdXRFdmVudHMoaW5wRWxlKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmlucHV0Rm9jdXNPdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIG5ld1RleHQgPSB0YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB2YXIgdHh0RWxlID0gZWoyX2Jhc2VfNi5jbG9zZXN0KHRhcmdldCwgJy4nICsgTElTVFRFWFQpO1xuICAgICAgICAgICAgdmFyIGxpRWxlID0gZWoyX2Jhc2VfNi5jbG9zZXN0KHRhcmdldCwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgdHh0RWxlLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlID0gbmV3VGV4dDtcbiAgICAgICAgICAgIGVqMl9iYXNlXzYuZGV0YWNoKHRhcmdldCk7XG4gICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFtsaUVsZV0sIEVESVRJTkcpO1xuICAgICAgICAgICAgdHh0RWxlLmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ25vZGVFZGl0ZWQnLCB0aGlzLmdldEVkaXRFdmVudChsaUVsZSwgbmV3VGV4dCkpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGVsZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS11aWQ9XCInICsgZWxlICsgJ1wiXScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGVsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRFZGl0RXZlbnQgPSBmdW5jdGlvbiAobGlFbGUsIG5ld1RleHQpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5nZXROb2RlRGF0YShsaUVsZSk7XG4gICAgICAgICAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlLCBuZXdUZXh0OiBuZXdUZXh0LCBub2RlOiBsaUVsZSwgbm9kZURhdGE6IGRhdGEsIG9sZFRleHQ6IHRoaXMub2xkVGV4dCB9O1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuc2V0RHJhZ0FuZERyb3AgPSBmdW5jdGlvbiAodG9CaW5kKSB7XG4gICAgICAgICAgICBpZiAodG9CaW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplRHJhZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95RHJhZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZURyYWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHZpcnR1YWxFbGU7XG4gICAgICAgICAgICB0aGlzLmRyYWdPYmogPSBuZXcgZWoyX2Jhc2VfNS5EcmFnZ2FibGUodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgZW5hYmxlVGFpbE1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQ6IGVqMl9iYXNlXzEuQnJvd3Nlci5pc0lvcyA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjdXJzb3JBdDogeyB0b3A6IC0yMCB9LFxuICAgICAgICAgICAgICAgIGRyYWdUYXJnZXQ6ICcuJyArIFRFWFRXUkFQLFxuICAgICAgICAgICAgICAgIGhlbHBlcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHJhZ1RhcmdldCA9IGUuc2VuZGVyLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyYWdSb290ID0gZWoyX2Jhc2VfNi5jbG9zZXN0KF90aGlzLmRyYWdUYXJnZXQsICcuJyArIFJPT1QpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZHJhZ1dyYXAgPSBlajJfYmFzZV82LmNsb3Nlc3QoX3RoaXMuZHJhZ1RhcmdldCwgJy4nICsgVEVYVFdSQVApO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kcmFnTGkgPSBlajJfYmFzZV82LmNsb3Nlc3QoX3RoaXMuZHJhZ1RhcmdldCwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZnVsbFJvd1NlbGVjdCAmJiAhZHJhZ1dyYXAgJiYgX3RoaXMuZHJhZ1RhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoRlVMTFJPVykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdXcmFwID0gX3RoaXMuZHJhZ1RhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5kcmFnVGFyZ2V0IHx8ICFlLmVsZW1lbnQuaXNTYW1lTm9kZShkcmFnUm9vdCkgfHwgIWRyYWdXcmFwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kcmFnVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhST09UKSB8fCBfdGhpcy5kcmFnVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhQQVJFTlRJVEVNKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHJhZ1RhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoTElTVElURU0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lRWxlID0gKGRyYWdXcmFwLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGVqMl9iYXNlXzYuc2VsZWN0KCdkaXYuJyArIElDT04sIGNsb25lRWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpY29uID0gZWoyX2Jhc2VfNi5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogSUNPTiArICcgJyArIEVYUEFOREFCTEUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZUVsZS5pbnNlcnRCZWZvcmUoaWNvbiwgY2xvbmVFbGUuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBjc3NDbGFzcyA9IERSQUdJVEVNICsgJyAnICsgUk9PVCArICcgJyArIChfdGhpcy5lbmFibGVSdGwgPyBSVEwgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHZpcnR1YWxFbGUgPSBlajJfYmFzZV82LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBjc3NDbGFzcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmlydHVhbEVsZS5hcHBlbmRDaGlsZChjbG9uZUVsZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuTGVuID0gX3RoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuTGVuID4gMSAmJiBfdGhpcy5hbGxvd011bHRpU2VsZWN0aW9uICYmIF90aGlzLmRyYWdMaS5jbGFzc0xpc3QuY29udGFpbnMoQUNUSVZFKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNOb2RlID0gZWoyX2Jhc2VfNi5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IERST1BDT1VOVCwgaW5uZXJIVE1MOiAnJyArIG5MZW4gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXJ0dWFsRWxlLmFwcGVuZENoaWxkKGNOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHZpcnR1YWxFbGUpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kcmFnRGF0YSA9IF90aGlzLmdldE5vZGVEYXRhKF90aGlzLmRyYWdMaSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aXJ0dWFsRWxlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZHJhZ1N0YXJ0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtfdGhpcy5lbGVtZW50XSwgRFJBR0dJTkcpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRBcmdzID0gX3RoaXMuZ2V0RHJhZ0V2ZW50KGUuZXZlbnQsIF90aGlzLCBudWxsLCBlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyaWdnZXIoJ25vZGVEcmFnU3RhcnQnLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5kZXRhY2godmlydHVhbEVsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFtfdGhpcy5lbGVtZW50XSwgRFJBR0dJTkcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRyYWdTdGFydEFjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kcmFnQWN0aW9uKGUsIHZpcnR1YWxFbGUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZHJhZ1N0b3A6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW190aGlzLmVsZW1lbnRdLCBEUkFHR0lORyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZVZpcnR1YWxFbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3BUYXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3BSb290ID0gKGVqMl9iYXNlXzYuY2xvc2VzdChkcm9wVGFyZ2V0LCAnLicgKyBEUk9QUEFCTEUpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkcm9wVGFyZ2V0IHx8ICFkcm9wUm9vdCB8fCBkcm9wVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhST09UKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5kZXRhY2goZS5oZWxwZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRBcmdzID0gX3RoaXMuZ2V0RHJhZ0V2ZW50KGUuZXZlbnQsIF90aGlzLCBkcm9wVGFyZ2V0LCBkcm9wVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJpZ2dlcignbm9kZURyYWdTdG9wJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50QXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuZGV0YWNoKGUuaGVscGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHJhZ1N0YXJ0QWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRyb3BPYmogPSBuZXcgZWoyX2Jhc2VfNS5Ecm9wcGFibGUodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgb3V0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZSkgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhTSUJMSU5HKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnbm90LWFsbG93ZWQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvdmVyOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICcnO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZHJvcDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHJvcEFjdGlvbihlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmRyYWdBY3Rpb24gPSBmdW5jdGlvbiAoZSwgdmlydHVhbEVsZSkge1xuICAgICAgICAgICAgdmFyIGRyb3BSb290ID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGUudGFyZ2V0LCAnLicgKyBEUk9QUEFCTEUpO1xuICAgICAgICAgICAgdmFyIGRyb3BXcmFwID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGUudGFyZ2V0LCAnLicgKyBURVhUV1JBUCk7XG4gICAgICAgICAgICB2YXIgaWNvbiA9IGVqMl9iYXNlXzYuc2VsZWN0KCdkaXYuJyArIElDT04sIHZpcnR1YWxFbGUpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhbaWNvbl0sIFtEUk9QSU4sIERST1BORVhULCBEUk9QT1VULCBOT0RST1BdKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVmlydHVhbEVsZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnJztcbiAgICAgICAgICAgIHZhciBjbGFzc0xpc3QgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XG4gICAgICAgICAgICBpZiAodGhpcy5mdWxsUm93U2VsZWN0ICYmICFkcm9wV3JhcCAmJiAhZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChjbGFzc0xpc3QpICYmIGNsYXNzTGlzdC5jb250YWlucyhGVUxMUk9XKSkge1xuICAgICAgICAgICAgICAgIGRyb3BXcmFwID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRyb3BSb290KSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyb3BMaSA9IGVqMl9iYXNlXzYuY2xvc2VzdChlLnRhcmdldCwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgICAgIGlmICghZHJvcFJvb3QuY2xhc3NMaXN0LmNvbnRhaW5zKFJPT1QpIHx8IChkcm9wV3JhcCAmJlxuICAgICAgICAgICAgICAgICAgICAoIWRyb3BMaS5pc1NhbWVOb2RlKHRoaXMuZHJhZ0xpKSAmJiAhdGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5kcmFnTGksIGRyb3BMaSkpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSAmJiAoZS5ldmVudC5vZmZzZXRZIDwgNykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2ljb25dLCBEUk9QTkVYVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmlyRWxlID0gZWoyX2Jhc2VfNi5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogU0lCTElORyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZnVsbFJvd1NlbGVjdCA/ICgxKSA6ICgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BMaS5pbnNlcnRCZWZvcmUodmlyRWxlLCBkcm9wTGkuY2hpbGRyZW5baW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlICYmIChlLnRhcmdldC5vZmZzZXRIZWlnaHQgPiAwICYmIGUuZXZlbnQub2Zmc2V0WSA+IChlLnRhcmdldC5vZmZzZXRIZWlnaHQgLSAxMCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtpY29uXSwgRFJPUE5FWFQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZpckVsZSA9IGVqMl9iYXNlXzYuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IFNJQkxJTkcgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmZ1bGxSb3dTZWxlY3QgPyAoMikgOiAoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wTGkuaW5zZXJ0QmVmb3JlKHZpckVsZSwgZHJvcExpLmNoaWxkcmVuW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtpY29uXSwgRFJPUElOKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0xJJyAmJiAoIWRyb3BMaS5pc1NhbWVOb2RlKHRoaXMuZHJhZ0xpKSAmJiAhdGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5kcmFnTGksIGRyb3BMaSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2ljb25dLCBEUk9QTkVYVCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVmlydHVhbEVsZShlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFNJQkxJTkcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2ljb25dLCBEUk9QTkVYVCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtpY29uXSwgRFJPUE9VVCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbaWNvbl0sIE5PRFJPUCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnbm90LWFsbG93ZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdub2RlRHJhZ2dpbmcnLCB0aGlzLmdldERyYWdFdmVudChlLmV2ZW50LCB0aGlzLCBlLnRhcmdldCwgZS50YXJnZXQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmRyb3BBY3Rpb24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGRyb3BUYXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHZhciBkcmFnT2JqID0gZS5kcmFnRGF0YS5kcmFnZ2FibGUuZWoyX2luc3RhbmNlc1swXTtcbiAgICAgICAgICAgIHZhciBkcmFnVGFyZ2V0ID0gZHJhZ09iai5kcmFnVGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGRyYWdMaSA9IChlajJfYmFzZV82LmNsb3Nlc3QoZHJhZ1RhcmdldCwgJy4nICsgTElTVElURU0pKTtcbiAgICAgICAgICAgIHZhciBkcm9wTGkgPSAoZWoyX2Jhc2VfNi5jbG9zZXN0KGRyb3BUYXJnZXQsICcuJyArIExJU1RJVEVNKSk7XG4gICAgICAgICAgICBlajJfYmFzZV82LmRldGFjaChlLmRyb3BwZWRFbGVtZW50KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJyc7XG4gICAgICAgICAgICBpZiAoIWRyb3BMaSB8fCBkcm9wTGkuaXNTYW1lTm9kZShkcmFnTGkpIHx8IHRoaXMuaXNEZXNjZW5kYW50KGRyYWdMaSwgZHJvcExpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkcmFnT2JqLmFsbG93TXVsdGlTZWxlY3Rpb24gJiYgKGRyYWdMaS5jbGFzc0xpc3QuY29udGFpbnMoQUNUSVZFKSB8fCAoZS5ldmVudC5vZmZzZXRZIDwgNyB8fFxuICAgICAgICAgICAgICAgIChlLnRhcmdldC5vZmZzZXRIZWlnaHQgPiAwICYmIGUuZXZlbnQub2Zmc2V0WSA+IChlLnRhcmdldC5vZmZzZXRIZWlnaHQgLSAxMCkpKSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc05vZGVzID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgQUNUSVZFLCBkcmFnT2JqLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkcm9wTGkuaXNTYW1lTm9kZShzTm9kZXNbaV0pIHx8IHRoaXMuaXNEZXNjZW5kYW50KHNOb2Rlc1tpXSwgZHJvcExpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmROb2RlKGRyb3BUYXJnZXQsIHNOb2Rlc1tpXSwgZHJvcExpLCBlLCBkcmFnT2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZE5vZGUoZHJvcFRhcmdldCwgZHJhZ0xpLCBkcm9wTGksIGUsIGRyYWdPYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdub2RlRHJvcHBlZCcsIHRoaXMuZ2V0RHJhZ0V2ZW50KGUuZXZlbnQsIGRyYWdPYmosIGRyb3BUYXJnZXQsIGUudGFyZ2V0KSk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5hcHBlbmROb2RlID0gZnVuY3Rpb24gKGRyb3BUYXJnZXQsIGRyYWdMaSwgZHJvcExpLCBlLCBkcmFnT2JqKSB7XG4gICAgICAgICAgICBpZiAoZHJvcFRhcmdldC5ub2RlTmFtZSA9PT0gJ0xJJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcEFzU2libGluZ05vZGUoZHJhZ0xpLCBkcm9wTGksIGUsIGRyYWdPYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wQXNDaGlsZE5vZGUoZHJhZ0xpLCBkcm9wTGksIGRyYWdPYmosIG51bGwsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZHJvcEFzU2libGluZ05vZGUgPSBmdW5jdGlvbiAoZHJhZ0xpLCBkcm9wTGksIGUsIGRyYWdPYmopIHtcbiAgICAgICAgICAgIHZhciBkcm9wVWwgPSBlajJfYmFzZV82LmNsb3Nlc3QoZHJvcExpLCAnLicgKyBQQVJFTlRJVEVNKTtcbiAgICAgICAgICAgIHZhciBkcmFnUGFyZW50VWwgPSBlajJfYmFzZV82LmNsb3Nlc3QoZHJhZ0xpLCAnLicgKyBQQVJFTlRJVEVNKTtcbiAgICAgICAgICAgIHZhciBkcmFnUGFyZW50TGkgPSBlajJfYmFzZV82LmNsb3Nlc3QoZHJhZ1BhcmVudFVsLCAnLicgKyBMSVNUSVRFTSk7XG4gICAgICAgICAgICB2YXIgcHJlO1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm9mZnNldEhlaWdodCA+IDAgJiYgZS5ldmVudC5vZmZzZXRZID4gZS50YXJnZXQub2Zmc2V0SGVpZ2h0IC0gMikge1xuICAgICAgICAgICAgICAgIHByZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZS5ldmVudC5vZmZzZXRZIDwgMikge1xuICAgICAgICAgICAgICAgIHByZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcm9wVWwuaW5zZXJ0QmVmb3JlKGRyYWdMaSwgcHJlID8gZS50YXJnZXQgOiBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50KGRyYWdQYXJlbnRVbCwgZHJhZ1BhcmVudExpKTtcbiAgICAgICAgICAgIGlmIChkcmFnT2JqLmVsZW1lbnQuaWQgPT09IHRoaXMuZWxlbWVudC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZHJhZ09iai51cGRhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmRyb3BBc0NoaWxkTm9kZSA9IGZ1bmN0aW9uIChkcmFnTGksIGRyb3BMaSwgZHJhZ09iaiwgaW5kZXgsIGUpIHtcbiAgICAgICAgICAgIHZhciBkcmFnUGFyZW50VWwgPSBlajJfYmFzZV82LmNsb3Nlc3QoZHJhZ0xpLCAnLicgKyBQQVJFTlRJVEVNKTtcbiAgICAgICAgICAgIHZhciBkcmFnUGFyZW50TGkgPSBlajJfYmFzZV82LmNsb3Nlc3QoZHJhZ1BhcmVudFVsLCAnLicgKyBMSVNUSVRFTSk7XG4gICAgICAgICAgICB2YXIgZHJvcFBhcmVudFVsID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGRyb3BMaSwgJy4nICsgUEFSRU5USVRFTSk7XG4gICAgICAgICAgICBpZiAoZSAmJiAoZS5ldmVudC5vZmZzZXRZIDwgNykpIHtcbiAgICAgICAgICAgICAgICBkcm9wUGFyZW50VWwuaW5zZXJ0QmVmb3JlKGRyYWdMaSwgZHJvcExpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGUgJiYgKGUudGFyZ2V0Lm9mZnNldEhlaWdodCA+IDAgJiYgZS5ldmVudC5vZmZzZXRZID4gKGUudGFyZ2V0Lm9mZnNldEhlaWdodCAtIDEwKSkpIHtcbiAgICAgICAgICAgICAgICBkcm9wUGFyZW50VWwuaW5zZXJ0QmVmb3JlKGRyYWdMaSwgZHJvcExpLm5leHRFbGVtZW50U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZHJvcFVsID0gdGhpcy5leHBhbmRQYXJlbnQoZHJvcExpKTtcbiAgICAgICAgICAgICAgICBkcm9wVWwuaW5zZXJ0QmVmb3JlKGRyYWdMaSwgZHJvcFVsLmNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudChkcmFnUGFyZW50VWwsIGRyYWdQYXJlbnRMaSk7XG4gICAgICAgICAgICBpZiAoZHJhZ09iai5lbGVtZW50LmlkID09PSB0aGlzLmVsZW1lbnQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRyYWdPYmoudXBkYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5leHBhbmRQYXJlbnQgPSBmdW5jdGlvbiAoZHJvcExpKSB7XG4gICAgICAgICAgICB2YXIgZHJvcEljb24gPSBlajJfYmFzZV82LnNlbGVjdCgnZGl2LicgKyBJQ09OLCBkcm9wTGkpO1xuICAgICAgICAgICAgaWYgKGRyb3BJY29uICYmIGRyb3BJY29uLmNsYXNzTGlzdC5jb250YWlucyhFWFBBTkRBQkxFKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kQWN0aW9uKGRyb3BMaSwgZHJvcEljb24sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRyb3BVbCA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFBBUkVOVElURU0sIGRyb3BMaSk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChkcm9wVWwpKSB7XG4gICAgICAgICAgICAgICAgZWoyX2xpc3RzXzEuTGlzdEJhc2UuZ2VuZXJhdGVJY29uKGRyb3BMaSwgQ09MTEFQU0lCTEUsIHRoaXMubGlzdEJhc2VPcHRpb24pO1xuICAgICAgICAgICAgICAgIHZhciBpY29uID0gZWoyX2Jhc2VfNi5zZWxlY3QoJ2Rpdi4nICsgSUNPTiwgZHJvcExpKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFtpY29uXSwgRVhQQU5EQUJMRSk7XG4gICAgICAgICAgICAgICAgZHJvcFVsID0gZWoyX2xpc3RzXzEuTGlzdEJhc2UuZ2VuZXJhdGVVTChbXSwgbnVsbCwgdGhpcy5saXN0QmFzZU9wdGlvbik7XG4gICAgICAgICAgICAgICAgZHJvcExpLmFwcGVuZENoaWxkKGRyb3BVbCk7XG4gICAgICAgICAgICAgICAgZHJvcExpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhbZHJvcExpXSwgTk9ERUNPTExBUFNFRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZHJvcFVsO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUudXBkYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChkcmFnUGFyZW50VWwsIGRyYWdQYXJlbnRMaSkge1xuICAgICAgICAgICAgaWYgKGRyYWdQYXJlbnRMaSAmJiBkcmFnUGFyZW50VWwuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ0ljb24gPSBlajJfYmFzZV82LnNlbGVjdCgnZGl2LicgKyBJQ09OLCBkcmFnUGFyZW50TGkpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuZGV0YWNoKGRyYWdQYXJlbnRVbCk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5kZXRhY2goZHJhZ0ljb24pO1xuICAgICAgICAgICAgICAgIGRyYWdQYXJlbnRMaS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnJlbmRlclZpcnR1YWxFbGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHByZTtcbiAgICAgICAgICAgIGlmIChlLmV2ZW50Lm9mZnNldFkgPiBlLnRhcmdldC5vZmZzZXRIZWlnaHQgLSAyKSB7XG4gICAgICAgICAgICAgICAgcHJlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLmV2ZW50Lm9mZnNldFkgPCAyKSB7XG4gICAgICAgICAgICAgICAgcHJlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2aXJFbGUgPSBlajJfYmFzZV82LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBTSUJMSU5HIH0pO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5mdWxsUm93U2VsZWN0ID8gKHByZSA/IDEgOiAyKSA6IChwcmUgPyAwIDogMSk7XG4gICAgICAgICAgICBlLnRhcmdldC5pbnNlcnRCZWZvcmUodmlyRWxlLCBlLnRhcmdldC5jaGlsZHJlbltpbmRleF0pO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUucmVtb3ZlVmlydHVhbEVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzaWJFbGUgPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBTSUJMSU5HKTtcbiAgICAgICAgICAgIGlmIChzaWJFbGUpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV82LmRldGFjaChzaWJFbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZGVzdHJveURyYWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnT2JqICYmIHRoaXMuZHJvcE9iaikge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ09iai5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wT2JqLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldERyYWdFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgb2JqLCBkcm9wVGFyZ2V0LCB0YXJnZXQpIHtcbiAgICAgICAgICAgIHZhciBkcm9wTGkgPSBkcm9wVGFyZ2V0ID8gZWoyX2Jhc2VfNi5jbG9zZXN0KGRyb3BUYXJnZXQsICcuJyArIExJU1RJVEVNKSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgZHJvcERhdGEgPSBkcm9wTGkgPyB0aGlzLmdldE5vZGVEYXRhKGRyb3BMaSkgOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBkcmFnZ2VkTm9kZTogb2JqLmRyYWdMaSxcbiAgICAgICAgICAgICAgICBkcmFnZ2VkTm9kZURhdGE6IG9iai5kcmFnRGF0YSxcbiAgICAgICAgICAgICAgICBkcm9wcGVkTm9kZTogZHJvcExpLFxuICAgICAgICAgICAgICAgIGRyb3BwZWROb2RlRGF0YTogZHJvcERhdGEsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5hZGRGdWxsUm93ID0gZnVuY3Rpb24gKHRvQWRkKSB7XG4gICAgICAgICAgICB2YXIgbGVuID0gdGhpcy5saUxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHRvQWRkKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZ1bGxSb3codGhpcy5saUxpc3RbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvd0RpdiA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIEZVTExST1csIHRoaXMubGlMaXN0W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5kZXRhY2gocm93RGl2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5jcmVhdGVGdWxsUm93ID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciByb3dEaXYgPSBlajJfYmFzZV82LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBGVUxMUk9XIH0pO1xuICAgICAgICAgICAgaXRlbS5pbnNlcnRCZWZvcmUocm93RGl2LCBpdGVtLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuYWRkTXVsdGlTZWxlY3QgPSBmdW5jdGlvbiAodG9BZGQpIHtcbiAgICAgICAgICAgIGlmICh0b0FkZCkge1xuICAgICAgICAgICAgICAgIHZhciBsaUVsZXMgPSBlajJfYmFzZV82LnNlbGVjdEFsbCgnLicgKyBMSVNUSVRFTSArICc6bm90KFthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSknLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgbGlFbGVzXzEgPSBsaUVsZXM7IF9pIDwgbGlFbGVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGUgPSBsaUVsZXNfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlFbGVzID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgTElTVElURU0gKyAnW2FyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiXScsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBsaUVsZXNfMiA9IGxpRWxlczsgX2EgPCBsaUVsZXNfMi5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZSA9IGxpRWxlc18yW19hXTtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmNvbGxhcHNlQnlMZXZlbCA9IGZ1bmN0aW9uIChlbGVtZW50LCBsZXZlbCwgZXhjbHVkZUhpZGRlbk5vZGVzKSB7XG4gICAgICAgICAgICBpZiAobGV2ZWwgPiAwICYmICFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNOb2RlcyA9IHRoaXMuZ2V0VmlzaWJsZU5vZGVzKGV4Y2x1ZGVIaWRkZW5Ob2RlcywgZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY05vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaUVsZSA9IGNOb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGljb24gPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBDT0xMQVBTSUJMRSwgZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgVEVYVFdSQVAsIGxpRWxlKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChpY29uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZU5vZGUobGlFbGUsIGljb24sIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VCeUxldmVsKGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFBBUkVOVElURU0sIGxpRWxlKSwgbGV2ZWwgLSAxLCBleGNsdWRlSGlkZGVuTm9kZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmNvbGxhcHNlQWxsTm9kZXMgPSBmdW5jdGlvbiAoZXhjbHVkZUhpZGRlbk5vZGVzKSB7XG4gICAgICAgICAgICB2YXIgY0ljb25zID0gdGhpcy5nZXRWaXNpYmxlTm9kZXMoZXhjbHVkZUhpZGRlbk5vZGVzLCBlajJfYmFzZV82LnNlbGVjdEFsbCgnLicgKyBDT0xMQVBTSUJMRSwgdGhpcy5lbGVtZW50KSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY0ljb25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSBjSWNvbnNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGxpRWxlID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGljb24sICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlTm9kZShsaUVsZSwgaWNvbiwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5leHBhbmRCeUxldmVsID0gZnVuY3Rpb24gKGVsZW1lbnQsIGxldmVsLCBleGNsdWRlSGlkZGVuTm9kZXMpIHtcbiAgICAgICAgICAgIGlmIChsZXZlbCA+IDAgJiYgIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZU5vZGVzID0gdGhpcy5nZXRWaXNpYmxlTm9kZXMoZXhjbHVkZUhpZGRlbk5vZGVzLCBlbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlTm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpRWxlID0gZU5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWNvbiA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIEVYUEFOREFCTEUsIGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFRFWFRXUkFQLCBsaUVsZSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoaWNvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kQWN0aW9uKGxpRWxlLCBpY29uLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEJ5TGV2ZWwoZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgUEFSRU5USVRFTSwgbGlFbGUpLCBsZXZlbCAtIDEsIGV4Y2x1ZGVIaWRkZW5Ob2Rlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZXhwYW5kQWxsTm9kZXMgPSBmdW5jdGlvbiAoZXhjbHVkZUhpZGRlbk5vZGVzKSB7XG4gICAgICAgICAgICB2YXIgZUljb25zID0gdGhpcy5nZXRWaXNpYmxlTm9kZXMoZXhjbHVkZUhpZGRlbk5vZGVzLCBlajJfYmFzZV82LnNlbGVjdEFsbCgnLicgKyBFWFBBTkRBQkxFLCB0aGlzLmVsZW1lbnQpKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlSWNvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaWNvbiA9IGVJY29uc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgbGlFbGUgPSBlajJfYmFzZV82LmNsb3Nlc3QoaWNvbiwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kQWN0aW9uKGxpRWxlLCBpY29uLCBudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldFZpc2libGVOb2RlcyA9IGZ1bmN0aW9uIChleGNsdWRlSGlkZGVuTm9kZXMsIG5vZGVzKSB7XG4gICAgICAgICAgICB2YXIgdk5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZXMpO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVIaWRkZW5Ob2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdk5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNi5pc1Zpc2libGUodk5vZGVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdk5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2Tm9kZXM7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5yZW1vdmVOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBkcmFnUGFyZW50VWwgPSBlajJfYmFzZV82LmNsb3Nlc3Qobm9kZSwgJy4nICsgUEFSRU5USVRFTSk7XG4gICAgICAgICAgICB2YXIgZHJhZ1BhcmVudExpID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGRyYWdQYXJlbnRVbCwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgZWoyX2Jhc2VfNi5kZXRhY2gobm9kZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnQoZHJhZ1BhcmVudFVsLCBkcmFnUGFyZW50TGkpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnN0YW5jZSgpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUudXBkYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUudXBkYXRlTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubGlMaXN0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgTElTVElURU0sIHRoaXMuZWxlbWVudCkpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUudXBkYXRlU2VsZWN0ZWROb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHNlbGVjdGVkTm9kZXM6IFtdIH0sIHRydWUpO1xuICAgICAgICAgICAgdmFyIHNOb2RlcyA9IGVqMl9iYXNlXzYuc2VsZWN0QWxsKCcuJyArIEFDVElWRSwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0R2l2ZW5Ob2RlcyhzTm9kZXMpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZG9HaXZlbkFjdGlvbiA9IGZ1bmN0aW9uIChub2Rlcywgc2VsZWN0b3IsIHRvRXhwYW5kKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlFbGUgPSB0aGlzLmdldEVsZW1lbnQobm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGxpRWxlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBzZWxlY3RvciwgZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgVEVYVFdSQVAsIGxpRWxlKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGljb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvRXhwYW5kID8gdGhpcy5leHBhbmRBY3Rpb24obGlFbGUsIGljb24sIG51bGwpIDogdGhpcy5jb2xsYXBzZU5vZGUobGlFbGUsIGljb24sIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmFkZEdpdmVuTm9kZXMgPSBmdW5jdGlvbiAobm9kZXMsIGRyb3BMaSwgaW5kZXgsIGlzUmVtb3RlKSB7XG4gICAgICAgICAgICB2YXIgbGV2ZWwgPSBkcm9wTGkgPyBwYXJzZUZsb2F0KGRyb3BMaS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGV2ZWwnKSkgKyAxIDogMTtcbiAgICAgICAgICAgIGlmIChpc1JlbW90ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWFwcGVyKGxldmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsaSA9IGVqMl9saXN0c18xLkxpc3RCYXNlLmNyZWF0ZUxpc3RJdGVtRnJvbUpzb24obm9kZXMsIHRoaXMubGlzdEJhc2VPcHRpb24sIGxldmVsKTtcbiAgICAgICAgICAgIHZhciBkcm9wVWwgPSBkcm9wTGkgPyB0aGlzLmV4cGFuZFBhcmVudChkcm9wTGkpIDogZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgUEFSRU5USVRFTSwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHZhciByZWZOb2RlID0gZHJvcFVsLmNoaWxkTm9kZXNbaW5kZXhdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRyb3BVbC5pbnNlcnRCZWZvcmUobGlbaV0sIHJlZk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5maW5hbGl6ZU5vZGUoZHJvcFVsKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnVwZGF0ZU1hcHBlciA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICAgICAgICAgICAgdmFyIG1hcHBlciA9IChsZXZlbCA9PT0gMSkgPyB0aGlzLmZpZWxkcyA6IHRoaXMuZ2V0Q2hpbGRGaWVsZHModGhpcy5maWVsZHMsIGxldmVsIC0gMSwgMSk7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHRoaXMuZ2V0QWN0dWFsUHJvcGVydGllcyhtYXBwZXIpO1xuICAgICAgICAgICAgdGhpcy5saXN0QmFzZU9wdGlvbi5maWVsZHMgPSBwcm9wO1xuICAgICAgICAgICAgdGhpcy5saXN0QmFzZU9wdGlvbi5maWVsZHMudXJsID0gcHJvcC5uYXZpZ2F0ZVVybDtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmRvRGlzYWJsZUFjdGlvbiA9IGZ1bmN0aW9uIChub2Rlcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpRWxlID0gdGhpcy5nZXRFbGVtZW50KG5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChsaUVsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpRWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbbGlFbGVdLCBESVNBQkxFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmRvRW5hYmxlQWN0aW9uID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlFbGUgPSB0aGlzLmdldEVsZW1lbnQobm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGxpRWxlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGlFbGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhbbGlFbGVdLCBESVNBQkxFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLndpcmVJbnB1dEV2ZW50cyA9IGZ1bmN0aW9uIChpbnBFbGUpIHtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLmFkZChpbnBFbGUsICdibHVyJywgdGhpcy5pbnB1dEZvY3VzT3V0LCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLndpcmVFZGl0aW5nRXZlbnRzID0gZnVuY3Rpb24gKHRvQmluZCkge1xuICAgICAgICAgICAgaWYgKHRvQmluZCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm94eV8xID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMS5Ccm93c2VyLmlzSW9zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFZGl0T2JqID0gbmV3IGVqMl9iYXNlXzcuVG91Y2godGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3VibGVUYXA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlfMS5lZGl0aW5nSGFuZGxlcihlLm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdkYmxjbGljaycsIHRoaXMuZWRpdGluZ0hhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV8xLkJyb3dzZXIuaXNJb3MgJiYgdGhpcy50b3VjaEVkaXRPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaEVkaXRPYmouZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ2RibGNsaWNrJywgdGhpcy5lZGl0aW5nSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUud2lyZUNsaWNrRXZlbnQgPSBmdW5jdGlvbiAodG9CaW5kKSB7XG4gICAgICAgICAgICBpZiAodG9CaW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3h5XzIgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV8xLkJyb3dzZXIuaXNJb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaENsaWNrT2JqID0gbmV3IGVqMl9iYXNlXzcuVG91Y2godGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlfMi5jbGlja0hhbmRsZXIoZS5vcmlnaW5hbEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzEuQnJvd3Nlci5pc0lvcyAmJiB0aGlzLnRvdWNoQ2xpY2tPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaENsaWNrT2JqLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS53aXJlRXhwYW5kT25FdmVudCA9IGZ1bmN0aW9uICh0b0JpbmQpIHtcbiAgICAgICAgICAgIGlmICh0b0JpbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJveHlfMyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzEuQnJvd3Nlci5pc0lvcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5leHBhbmRPblR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFeHBhbmRPYmogPSBuZXcgZWoyX2Jhc2VfNy5Ub3VjaCh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5XzMuZXhwYW5kSGFuZGxlcihlLm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaEV4cGFuZE9iaiA9IG5ldyBlajJfYmFzZV83LlRvdWNoKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdWJsZVRhcDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlfMy5leHBhbmRIYW5kbGVyKGUub3JpZ2luYWxFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsIHRoaXMuZXhwYW5kT25UeXBlLCB0aGlzLmV4cGFuZEhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV8xLkJyb3dzZXIuaXNJb3MgJiYgdGhpcy50b3VjaEV4cGFuZE9iaikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoRXhwYW5kT2JqLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsIHRoaXMuZXhwYW5kT25UeXBlLCB0aGlzLmV4cGFuZEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLm1vdXNlRG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5tb3VzZURvd25TdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGUuY3RybEtleSAmJiB0aGlzLmFsbG93TXVsdGlTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnY29udGV4dG1lbnUgJywgdGhpcy5wcmV2ZW50Q29udGV4dE1lbnUsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5wcmV2ZW50Q29udGV4dE1lbnUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUud2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy53aXJlQ2xpY2tFdmVudCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMud2lyZUV4cGFuZE9uRXZlbnQodHJ1ZSk7XG4gICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnZm9jdXMnLCB0aGlzLmZvY3VzSW4sIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2JsdXInLCB0aGlzLmZvY3VzT3V0LCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2VPdmVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdtb3VzZW91dCcsIHRoaXMub25Nb3VzZUxlYXZlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRNb2R1bGUgPSBuZXcgZWoyX2Jhc2VfMy5LZXlib2FyZEV2ZW50cyh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBrZXlBY3Rpb246IHRoaXMua2V5QWN0aW9uSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGtleUNvbmZpZ3M6IHRoaXMua2V5Q29uZmlncyxcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdrZXlkb3duJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUudW5XaXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLndpcmVDbGlja0V2ZW50KGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMud2lyZUV4cGFuZE9uRXZlbnQoZmFsc2UpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ2ZvY3VzJywgdGhpcy5mb2N1c0luKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdibHVyJywgdGhpcy5mb2N1c091dCk7XG4gICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnbW91c2VvdmVyJywgdGhpcy5vbk1vdXNlT3Zlcik7XG4gICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnbW91c2VvdXQnLCB0aGlzLm9uTW91c2VMZWF2ZSk7XG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkTW9kdWxlLmRlc3Ryb3koKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnBhcmVudHMgPSBmdW5jdGlvbiAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVkID0gW107XG4gICAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB3aGlsZSAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZWwpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzYubWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZWQucHVzaChlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVkO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuaXNEZXNjZW5kYW50ID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHdoaWxlICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChub2RlKSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5zZXRDaGVja2VkTm9kZXMgPSBmdW5jdGlvbiAobm9kZXMpIHtcbiAgICAgICAgICAgIG5vZGVzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShub2RlcykpO1xuICAgICAgICAgICAgdGhpcy51bmNoZWNrQWxsKCk7XG4gICAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBbGwobm9kZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUub25Qcm9wZXJ0eUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3UHJvcCwgb2xkUHJvcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG5ld1Byb3ApOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbGxvd0RyYWdBbmREcm9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RHJhZ0FuZERyb3AodGhpcy5hbGxvd0RyYWdBbmREcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbGxvd0VkaXRpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlRWRpdGluZ0V2ZW50cyh0aGlzLmFsbG93RWRpdGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWxsb3dNdWx0aVNlbGVjdGlvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc05vZGUgPSB0aGlzLmdldEVsZW1lbnQodGhpcy5zZWxlY3RlZE5vZGVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUoc05vZGUsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUb3VjaFBvcHVwKHRoaXMuYWxsb3dNdWx0aVNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE11bHRpU2VsZWN0KHRoaXMuYWxsb3dNdWx0aVNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE11bHRpU2VsZWN0KHRoaXMuYWxsb3dNdWx0aVNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tlZE5vZGVzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dDaGVja0JveCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZE5vZGVzID0gb2xkUHJvcC5jaGVja2VkTm9kZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDaGVja2VkTm9kZXMobmV3UHJvcC5jaGVja2VkTm9kZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nzc0NsYXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3NzQ2xhc3Mob2xkUHJvcC5jc3NDbGFzcywgbmV3UHJvcC5jc3NDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5hYmxlUnRsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RW5hYmxlUnRsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXhwYW5kT24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlRXhwYW5kT25FdmVudChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEV4cGFuZE9uVHlwZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlRXhwYW5kT25FdmVudCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmaWVsZHMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0QmFzZU9wdGlvbi5maWVsZHMgPSB0aGlzLmZpZWxkcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0QmFzZU9wdGlvbi5maWVsZHMudXJsID0gdGhpcy5maWVsZHMubmF2aWdhdGVVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlUmVuZGVyTm9kZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmdWxsUm93U2VsZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RnVsbFJvdyh0aGlzLmZ1bGxSb3dTZWxlY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRGdWxsUm93KHRoaXMuZnVsbFJvd1NlbGVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9kZVRlbXBsYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZVRlbXBsYXRlRm4gPSB0aGlzLnRlbXBsYXRlQ29tcGxpZXIodGhpcy5ub2RlVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZVJlbmRlck5vZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0ZWROb2Rlcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgc2VsZWN0ZWROb2RlczogbmV3UHJvcC5zZWxlY3RlZE5vZGVzIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NlbGVjdGlvbkFjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Nob3dDaGVja0JveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlUmVuZGVyTm9kZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzb3J0T3JkZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZVJlbmRlck5vZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgICAgICAgICAgdGhpcy51bldpcmVFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMud2lyZUVkaXRpbmdFdmVudHMoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVGbigpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVJY29uRm4oKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3NzQ2xhc3ModGhpcy5jc3NDbGFzcywgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnNldERyYWdBbmREcm9wKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RnVsbFJvdyhmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNldFRvdWNoUG9wdXAoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5zZXRNdWx0aVNlbGVjdChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmFkZE5vZGVzID0gZnVuY3Rpb24gKG5vZGVzLCB0YXJnZXQsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChub2RlcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZHJvcExpID0gdGhpcy5nZXRFbGVtZW50KHRhcmdldCk7XG4gICAgICAgICAgICBub2RlcyA9IHRoaXMuZ2V0U29ydGVkRGF0YShub2Rlcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZHMuZGF0YVNvdXJjZSBpbnN0YW5jZW9mIGVqMl9kYXRhXzEuRGF0YU1hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEdpdmVuTm9kZXMobm9kZXMsIGRyb3BMaSwgaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5kYXRhVHlwZSA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkR2l2ZW5Ob2Rlcyhub2RlcywgZHJvcExpLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZHJvcExpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkR2l2ZW5Ob2Rlcyhub2RlcywgZHJvcExpLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGlkID0gbm9kZXNbaV1bdGhpcy5maWVsZHMucGFyZW50SURdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcExpID0gcGlkID8gdGhpcy5nZXRFbGVtZW50KHBpZC50b1N0cmluZygpKSA6IHBpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkR2l2ZW5Ob2Rlcyhbbm9kZXNbaV1dLCBkcm9wTGksIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmNoZWNrQWxsID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG93Q2hlY2tCb3gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvQ2hlY2tCb3hBY3Rpb24obm9kZXMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuY29sbGFwc2VBbGwgPSBmdW5jdGlvbiAobm9kZXMsIGxldmVsLCBleGNsdWRlSGlkZGVuTm9kZXMpIHtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChub2RlcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvR2l2ZW5BY3Rpb24obm9kZXMsIENPTExBUFNJQkxFLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VCeUxldmVsKGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFBBUkVOVElURU0sIHRoaXMuZWxlbWVudCksIGxldmVsLCBleGNsdWRlSGlkZGVuTm9kZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbE5vZGVzKGV4Y2x1ZGVIaWRkZW5Ob2Rlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZGlzYWJsZU5vZGVzID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChub2RlcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvRGlzYWJsZUFjdGlvbih0aGlzLnNlbGVjdGVkTm9kZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0Rpc2FibGVBY3Rpb24obm9kZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZW5hYmxlQWxsID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChub2RlcykpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlFbGUgPSBlajJfYmFzZV82LnNlbGVjdEFsbCgnLicgKyBESVNBQkxFLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgbGlFbGVfMSA9IGxpRWxlOyBfaSA8IGxpRWxlXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGUgPSBsaUVsZV8xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKGxpRWxlLCBESVNBQkxFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZG9FbmFibGVBY3Rpb24obm9kZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZW5zdXJlVmlzaWJsZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB2YXIgbGlFbGUgPSB0aGlzLmdldEVsZW1lbnQobm9kZSk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChsaUVsZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcGFyZW50cyA9IHRoaXMucGFyZW50cyhsaUVsZSwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgdGhpcy5leHBhbmRBbGwocGFyZW50cyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgbGlFbGUuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7IH0sIDQ1MCk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5leHBhbmRBbGwgPSBmdW5jdGlvbiAobm9kZXMsIGxldmVsLCBleGNsdWRlSGlkZGVuTm9kZXMpIHtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChub2RlcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvR2l2ZW5BY3Rpb24obm9kZXMsIEVYUEFOREFCTEUsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGxldmVsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEJ5TGV2ZWwoZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgUEFSRU5USVRFTSwgdGhpcy5lbGVtZW50KSwgbGV2ZWwsIGV4Y2x1ZGVIaWRkZW5Ob2Rlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEFsbE5vZGVzKGV4Y2x1ZGVIaWRkZW5Ob2Rlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0Tm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KG5vZGUpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0Tm9kZURldGFpbHMgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuZ2V0RWxlbWVudChub2RlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE5vZGVEYXRhKGVsZSk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5tb3ZlTm9kZXMgPSBmdW5jdGlvbiAoc291cmNlTm9kZXMsIHRhcmdldCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBkcm9wTGkgPSB0aGlzLmdldEVsZW1lbnQodGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGRyb3BMaSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyYWdMaSA9IHRoaXMuZ2V0RWxlbWVudChzb3VyY2VOb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZHJhZ0xpKSB8fCBkcm9wTGkuaXNTYW1lTm9kZShkcmFnTGkpIHx8IHRoaXMuaXNEZXNjZW5kYW50KGRyYWdMaSwgZHJvcExpKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wQXNDaGlsZE5vZGUoZHJhZ0xpLCBkcm9wTGksIHRoaXMsIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnJlbW92ZU5vZGVzID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlFbGUgPSB0aGlzLmdldEVsZW1lbnQobm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGxpRWxlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVOb2RlKGxpRWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gKHRhcmdldCwgbmV3VGV4dCkge1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQodGFyZ2V0KSB8fCBlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKG5ld1RleHQpIHx8ICF0aGlzLmFsbG93RWRpdGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsaUVsZSA9IHRoaXMuZ2V0RWxlbWVudCh0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobGlFbGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHR4dEVsZSA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIExJU1RURVhULCBsaUVsZSk7XG4gICAgICAgICAgICB0eHRFbGUuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUgPSBuZXdUZXh0O1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUudW5jaGVja0FsbCA9IGZ1bmN0aW9uIChub2Rlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NoZWNrQm94KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0NoZWNrQm94QWN0aW9uKG5vZGVzLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBUcmVlVmlldztcbiAgICB9KGVqMl9iYXNlXzEuQ29tcG9uZW50KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcImFsbG93RHJhZ0FuZERyb3BcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwiYWxsb3dFZGl0aW5nXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcImFsbG93TXVsdGlTZWxlY3Rpb25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Db21wbGV4KHt9LCBOb2RlQW5pbWF0aW9uU2V0dGluZ3MpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcImFuaW1hdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwiY2hlY2tlZE5vZGVzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJycpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcImNzc0NsYXNzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcImVuYWJsZVJ0bFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KCdhdXRvJylcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwiZXhwYW5kT25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Db21wbGV4KHt9LCBGaWVsZHNTZXR0aW5ncylcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwiZmllbGRzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkodHJ1ZSlcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwiZnVsbFJvd1NlbGVjdFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZVRlbXBsYXRlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJzZWxlY3RlZE5vZGVzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJ05vbmUnKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJzb3J0T3JkZXJcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwic2hvd0NoZWNrQm94XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJjcmVhdGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJkYXRhQm91bmRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcImRyYXdOb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJkZXN0cm95ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcImtleVByZXNzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJub2RlQ2hlY2tlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZUNoZWNraW5nXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJub2RlQ2xpY2tlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZUNvbGxhcHNlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZUNvbGxhcHNpbmdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcIm5vZGVEcmFnZ2luZ1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZURyYWdTdGFydFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZURyYWdTdG9wXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJub2RlRHJvcHBlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZUVkaXRlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZUVkaXRpbmdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcIm5vZGVFeHBhbmRlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZUV4cGFuZGluZ1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZVNlbGVjdGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJub2RlU2VsZWN0aW5nXCIsIHZvaWQgMCk7XG4gICAgVHJlZVZpZXcgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Ob3RpZnlQcm9wZXJ0eUNoYW5nZXNcbiAgICBdLCBUcmVlVmlldyk7XG4gICAgZXhwb3J0cy5UcmVlVmlldyA9IFRyZWVWaWV3O1xuICAgIGV4cG9ydHMudHJlZVZpZXdIZWxwZXIgPSBlajJfYmFzZV8xLkNyZWF0ZUJ1aWxkZXIoVHJlZVZpZXcpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90cmVldmlldy90cmVldmlldy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItZGF0YVwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9