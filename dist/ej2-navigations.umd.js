/*!
*  filename: ej2-navigations.umd.js
*  version : 1.0.22
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
	            if (ul === this.element) {
	                this.toggleVisiblity(ul);
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
	                this.toggleVisiblity(ul, false);
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
	                    this.toggleVisiblity(ul);
	                    var collide = ej2_popups_1.isCollide(ul, null, this.enableRtl ? left - ul.offsetWidth : left, top);
	                    this.toggleVisiblity(ul, false);
	                    if (collide.length) {
	                        offset = ej2_popups_1.calculatePosition(li, this.enableRtl ? 'right' : 'left', 'top');
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
	                if (cli && e.type === 'click' && !cli.querySelector('.' + CARET)) {
	                    this.setLISelected(cli);
	                    var navIdx = this.getIndex(cli.textContent);
	                    var item = this.getItem(navIdx);
	                    this.trigger('select', { element: cli, item: item });
	                }
	                if (cli && ej2_base_5.closest(cli, '.' + WRAPPER) && (e.type === 'mouseover' || ej2_base_4.Browser.isDevice || this.showItemOnClick)) {
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
	                                var count = 0;
	                                var idx = this.navIdx.concat(cliIdx);
	                                for (var i = 0; i < idx.length; i++) {
	                                    if (ej2_base_3.isNullOrUndefined(idx[i])) {
	                                        count = i;
	                                    }
	                                }
	                                if (!ej2_base_3.isNullOrUndefined(idx[count])) {
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
	                var checkboxEle = ej2_buttons_1.createCheckBox();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyOWUzYmI5YzkwM2Y5MTdkZTg2ZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2gtc2Nyb2xsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xiYXIvdG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItcG9wdXBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN5bmNmdXNpb24vZWoyLWJ1dHRvbnNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3JkaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0LW1lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN5bmNmdXNpb24vZWoyLWxpc3RzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFiL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlZXZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyZWV2aWV3L3RyZWV2aWV3LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1kYXRhXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDLG1DQUFtQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkIsaUNBQWlDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDO0FBQ3ZD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTRELGdEQUFnRDtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBb0Usa0RBQWtEO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQzUxQ0QsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7aUVDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsRUFBQzs7Ozs7OztBQ1BEO0FBQ0E7QUFDQSxXQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYsMEJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLDZCQUE0QixxREFBcUQ7QUFDakY7QUFDQTtBQUNBLDZCQUE0Qix1REFBdUQ7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF3RCxtQ0FBbUM7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsNkJBQTZCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFtRCxnRkFBZ0Y7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXdELHNEQUFzRDtBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsNERBQTJELDJCQUEyQjtBQUN0RixnRUFBK0QsNkJBQTZCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLDREQUEyRCwwQkFBMEI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTBELG9FQUFvRTtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBd0Qsc0JBQXNCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLCtEQUE4RCwyQkFBMkI7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRSwyQkFBMkI7QUFDNUYsOERBQTZELHVDQUF1QztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTJELHdGQUF3RjtBQUNuSiw2Q0FBNEMsd0JBQXdCO0FBQ3BFLHdEQUF1RCx1QkFBdUI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF3RCxrQ0FBa0M7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQW9FLG1EQUFtRDtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXdELGlEQUFpRDtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQW9FLHFEQUFxRDtBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQStDLFNBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLDJCQUEyQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0QsY0FBYztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUErQyxnQkFBZ0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZ0UsNkJBQTZCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDLGdCQUFnQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBLDhCQUE2Qiw0REFBNEQ7QUFDekY7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUFzRSxvQkFBb0I7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxvQkFBb0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLG9DQUFtQyxvQkFBb0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxxRUFBb0UsOENBQThDO0FBQ2xIO0FBQ0E7QUFDQSxxRUFBb0UsZ0RBQWdEO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxvQkFBb0I7QUFDeEQsZ0NBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxnQkFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXdELFlBQVk7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQsWUFBWTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQW9ELFNBQVM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsMEJBQTBCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QjtBQUN4QjtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNEQsMENBQTBDLHNCQUFzQixFQUFFO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBb0UscUNBQXFDO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLG1FQUFrRSxzQkFBc0I7QUFDeEY7QUFDQTtBQUNBO0FBQ0EsdUVBQXNFLDZDQUE2QztBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUFzRSxxQkFBcUI7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUFzRSxxQkFBcUI7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTBELHFCQUFxQjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTBELHFCQUFxQjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW1ELHNCQUFzQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQsc0JBQXNCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0QsU0FBUztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWdELFNBQVM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFvRCxTQUFTO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0QsU0FBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUErQyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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dW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiksIHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItcG9wdXBzXCIpLCByZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLWJ1dHRvbnNcIiksIHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItbGlzdHNcIiksIHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItZGF0YVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1wb3B1cHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYnV0dG9uc1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1saXN0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1kYXRhXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiKSwgcmVxdWlyZShcIkBzeW5jZnVzaW9uL2VqMi1wb3B1cHNcIiksIHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItYnV0dG9uc1wiKSwgcmVxdWlyZShcIkBzeW5jZnVzaW9uL2VqMi1saXN0c1wiKSwgcmVxdWlyZShcIkBzeW5jZnVzaW9uL2VqMi1kYXRhXCIpKSA6IGZhY3Rvcnkocm9vdFtcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJdLCByb290W1wiQHN5bmNmdXNpb24vZWoyLXBvcHVwc1wiXSwgcm9vdFtcIkBzeW5jZnVzaW9uL2VqMi1idXR0b25zXCJdLCByb290W1wiQHN5bmNmdXNpb24vZWoyLWxpc3RzXCJdLCByb290W1wiQHN5bmNmdXNpb24vZWoyLWRhdGFcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE3X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjllM2JiOWM5MDNmOTE3ZGU4NmYiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2NvbW1vbi9pbmRleFwiLCBcIi4vdG9vbGJhci9pbmRleFwiLCBcIi4vYWNjb3JkaW9uL2luZGV4XCIsIFwiLi9jb250ZXh0LW1lbnUvaW5kZXhcIiwgXCIuL3RhYi9pbmRleFwiLCBcIi4vdHJlZXZpZXcvaW5kZXhcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBpbmRleF8xLCBpbmRleF8yLCBpbmRleF8zLCBpbmRleF80LCBpbmRleF81LCBpbmRleF82KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChpbmRleF8xKTtcbiAgICBfX2V4cG9ydChpbmRleF8yKTtcbiAgICBfX2V4cG9ydChpbmRleF8zKTtcbiAgICBfX2V4cG9ydChpbmRleF80KTtcbiAgICBfX2V4cG9ydChpbmRleF81KTtcbiAgICBfX2V4cG9ydChpbmRleF82KTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9oLXNjcm9sbFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGhfc2Nyb2xsXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KGhfc2Nyb2xsXzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgZWoyX2Jhc2VfMSwgZWoyX2Jhc2VfMikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgQ0xTX1JPT1QgPSAnZS1oc2Nyb2xsJztcbiAgICB2YXIgQ0xTX1JUTCA9ICdlLXJ0bCc7XG4gICAgdmFyIENMU19ESVNBQkxFID0gJ2Utb3ZlcmxheSc7XG4gICAgdmFyIENMU19IU0NST0xMQkFSID0gJ2UtaHNjcm9sbC1iYXInO1xuICAgIHZhciBDTFNfSFNDUk9MTENPTiA9ICdlLWhzY3JvbGwtY29udGVudCc7XG4gICAgdmFyIENMU19OQVZBUlJPVyA9ICdlLW5hdi1hcnJvdyc7XG4gICAgdmFyIENMU19OQVZSSUdIVEFSUk9XID0gJ2UtbmF2LXJpZ2h0LWFycm93JztcbiAgICB2YXIgQ0xTX05BVkxFRlRBUlJPVyA9ICdlLW5hdi1sZWZ0LWFycm93JztcbiAgICB2YXIgQ0xTX0hTQ1JPTExOQVYgPSAnZS1zY3JvbGwtbmF2JztcbiAgICB2YXIgQ0xTX0hTQ1JPTExOQVZSSUdIVCA9ICdlLXNjcm9sbC1yaWdodC1uYXYnO1xuICAgIHZhciBDTFNfSFNDUk9MTE5BVkxFRlQgPSAnZS1zY3JvbGwtbGVmdC1uYXYnO1xuICAgIHZhciBDTFNfREVWSUNFID0gJ2Utc2Nyb2xsLWRldmljZSc7XG4gICAgdmFyIEhTY3JvbGwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoSFNjcm9sbCwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gSFNjcm9sbChvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgZWxlbWVudCkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS5wcmVSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmJyb3dzZXIgPSBlajJfYmFzZV8yLkJyb3dzZXIuaW5mby5uYW1lO1xuICAgICAgICAgICAgdGhpcy5icm93c2VyQ2hlY2sgPSB0aGlzLmJyb3dzZXIgPT09ICdtb3ppbGxhJztcbiAgICAgICAgICAgIHRoaXMuaXNEZXZpY2UgPSBlajJfYmFzZV8yLkJyb3dzZXIuaXNEZXZpY2U7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuaWVDaGVjayA9IHRoaXMuYnJvd3NlciA9PT0gJ2VkZ2UnIHx8IHRoaXMuYnJvd3NlciA9PT0gJ21zaWUnO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlkID0gZWoyX2Jhc2VfMS5nZXRVbmlxdWVJRCgnaHNjcm9sbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5pcXVlSWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZVJ0bCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTFNfUlRMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy50b3VjaE1vZHVsZSA9IG5ldyBlajJfYmFzZV8xLlRvdWNoKHRoaXMuZWxlbWVudCwgeyBzY3JvbGw6IHRoaXMudG91Y2hIYW5kbGVyLmJpbmQodGhpcykgfSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNEZXZpY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU5hdkljb24odGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5zY3JvbGxFbGUsICdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xTX0RFVklDRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsRWxlID0gZWoyX2Jhc2VfMi5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX0hTQ1JPTExDT04gfSk7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsRGl2ID0gZWoyX2Jhc2VfMi5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX0hTQ1JPTExCQVIgfSk7XG4gICAgICAgICAgICBzY3JvbGxEaXYuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBpbm5lckVsZSA9IFtdLnNsaWNlLmNhbGwoZWxlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgaW5uZXJFbGVfMSA9IGlubmVyRWxlOyBfaSA8IGlubmVyRWxlXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZV8xID0gaW5uZXJFbGVfMVtfaV07XG4gICAgICAgICAgICAgICAgc2Nyb2xsRWxlLmFwcGVuZENoaWxkKGVsZV8xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNjcm9sbERpdi5hcHBlbmRDaGlsZChzY3JvbGxFbGUpO1xuICAgICAgICAgICAgZWxlLmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gICAgICAgICAgICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3dYID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsZSA9IHNjcm9sbERpdjtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSXRlbXMgPSBzY3JvbGxFbGU7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmdldFBlcnNpc3REYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGtleUVudGl0eSA9IFsnc2Nyb2xsU3RlcCddO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkT25QZXJzaXN0KGtleUVudGl0eSk7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmdldE1vZHVsZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2hTY3JvbGwnO1xuICAgICAgICB9O1xuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShDTFNfUk9PVCk7XG4gICAgICAgICAgICB2YXIgbmF2ID0gZWoyX2Jhc2VfMS5zZWxlY3RBbGwoJyMnICsgZWxlLmlkICsgJ19uYXYuZS0nICsgZWxlLmlkICsgJ19uYXYnKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBbXS5zbGljZS5jYWxsKHRoaXMuc2Nyb2xsSXRlbXMuY2hpbGRyZW4pOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnVuaXF1ZUlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzIuZGV0YWNoKHRoaXMuc2Nyb2xsRWxlKTtcbiAgICAgICAgICAgIGlmIChuYXYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuZGV0YWNoKG5hdlswXSk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5kZXRhY2gobmF2WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLnNjcm9sbEVsZSwgJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLnRvdWNoTW9kdWxlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hNb2R1bGUgPSBudWxsO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmNyZWF0ZU5hdkljb24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGlkID0gZWxlbWVudC5pZC5jb25jYXQoJ19uYXYnKTtcbiAgICAgICAgICAgIHZhciBjbHNSaWdodCA9ICdlLScgKyBlbGVtZW50LmlkLmNvbmNhdCgnX25hdiAnICsgQ0xTX0hTQ1JPTExOQVYgKyAnICcgKyBDTFNfSFNDUk9MTE5BVlJJR0hUKTtcbiAgICAgICAgICAgIHZhciBuYXYgPSBlajJfYmFzZV8yLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgaWQ6IGlkLCBjbGFzc05hbWU6IGNsc1JpZ2h0IH0pO1xuICAgICAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgdmFyIG5hdkl0ZW0gPSBlajJfYmFzZV8yLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfTkFWUklHSFRBUlJPVyArICcgJyArIENMU19OQVZBUlJPVyArICcgZS1pY29ucycgfSk7XG4gICAgICAgICAgICB2YXIgY2xzTGVmdCA9ICdlLScgKyBlbGVtZW50LmlkLmNvbmNhdCgnX25hdiAnICsgQ0xTX0hTQ1JPTExOQVYgKyAnICcgKyBDTFNfSFNDUk9MTE5BVkxFRlQpO1xuICAgICAgICAgICAgdmFyIG5hdkVsZSA9IGVqMl9iYXNlXzIuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBpZDogaWQsIGNsYXNzTmFtZTogY2xzTGVmdCArICcgJyArIENMU19ESVNBQkxFIH0pO1xuICAgICAgICAgICAgbmF2RWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICB2YXIgbmF2TGVmdEl0ZW0gPSBlajJfYmFzZV8yLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfTkFWTEVGVEFSUk9XICsgJyAnICsgQ0xTX05BVkFSUk9XICsgJyBlLWljb25zJyB9KTtcbiAgICAgICAgICAgIG5hdkVsZS5hcHBlbmRDaGlsZChuYXZMZWZ0SXRlbSk7XG4gICAgICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG4gICAgICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5hdik7XG4gICAgICAgICAgICBlbGVtZW50Lmluc2VydEJlZm9yZShuYXZFbGUsIGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pZUNoZWNrKSB7XG4gICAgICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2UtaWUtYWxpZ24nKTtcbiAgICAgICAgICAgICAgICBuYXZFbGUuY2xhc3NMaXN0LmFkZCgnZS1pZS1hbGlnbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ldmVudEJpbmRpbmcoW25hdiwgbmF2RWxlXSk7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLm9uS2V5UHJlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgIHZhciB0aW1lb3V0RnVuXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmtleVRpbWVvdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbGVTY3JvbGxpbmcoMTAsIGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMua2V5VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRGdW5fMSgpO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLm9uS2V5VXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUua2V5ICE9PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMua2V5VGltZW91dCkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5VGltZW91dCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmtleVRpbWVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUuZXZlbnRCaW5kaW5nID0gZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGVsZS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIG5ldyBlajJfYmFzZV8xLlRvdWNoKGVsLCB7IHRhcEhvbGQ6IF90aGlzLnRhYkhvbGRIYW5kbGVyLmJpbmQoX3RoaXMpLCB0YXBIb2xkVGhyZXNob2xkOiA1MDAgfSk7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIF90aGlzLm9uS2V5UHJlc3MuYmluZChfdGhpcykpO1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgX3RoaXMub25LZXlVcC5iaW5kKF90aGlzKSk7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLnJlcGVhdFNjcm9sbC5iaW5kKF90aGlzKSk7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBfdGhpcy5yZXBlYXRTY3JvbGwuYmluZChfdGhpcykpO1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZChlbCwgJ2NsaWNrJywgX3RoaXMuY2xpY2tFdmVudEhhbmRsZXIsIF90aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS5yZXBlYXRTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZW91dCk7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLnRhYkhvbGRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgdHJndCA9IGUub3JpZ2luYWxFdmVudC50YXJnZXQ7XG4gICAgICAgICAgICB0cmd0ID0gdGhpcy5jb250YWlucyh0cmd0LCBDTFNfSFNDUk9MTE5BVikgPyB0cmd0LmZpcnN0RWxlbWVudENoaWxkIDogdHJndDtcbiAgICAgICAgICAgIHZhciBzY3JvbGxEaXMgPSAxMDtcbiAgICAgICAgICAgIHZhciB0aW1lb3V0RnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmVsZVNjcm9sbGluZyhzY3JvbGxEaXMsIHRyZ3QpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGltZW91dEZ1bigpO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9O1xuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChlbGUsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUuZWxlU2Nyb2xsaW5nID0gZnVuY3Rpb24gKHNjcm9sbERpcywgdHJndCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnNjcm9sbEVsZTtcbiAgICAgICAgICAgIHZhciByb290RWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIGNsYXNzTGlzdCA9IHRyZ3QuY2xhc3NMaXN0O1xuICAgICAgICAgICAgaWYgKGNsYXNzTGlzdC5jb250YWlucyhDTFNfSFNDUk9MTE5BVikpIHtcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3QgPSB0cmd0LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX05BVkFSUk9XKS5jbGFzc0xpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWlucyhyb290RWxlLCBDTFNfUlRMKSAmJiB0aGlzLmJyb3dzZXJDaGVjaykge1xuICAgICAgICAgICAgICAgIHNjcm9sbERpcyA9IC1zY3JvbGxEaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2NybExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICBpZiAoKCF0aGlzLmNvbnRhaW5zKHJvb3RFbGUsIENMU19SVEwpIHx8IHRoaXMuYnJvd3NlckNoZWNrKSB8fCB0aGlzLmllQ2hlY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKENMU19OQVZSSUdIVEFSUk9XKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBzY3JsTGVmdCArIHNjcm9sbERpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcmxMZWZ0IC0gc2Nyb2xsRGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoQ0xTX05BVkxFRlRBUlJPVykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gc2NybExlZnQgKyBzY3JvbGxEaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBzY3JsTGVmdCAtIHNjcm9sbERpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmNsaWNrRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlU2Nyb2xsaW5nKHRoaXMuc2Nyb2xsU3RlcCwgZS50YXJnZXQpO1xuICAgICAgICB9O1xuICAgICAgICBIU2Nyb2xsLnByb3RvdHlwZS50b3VjaEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuc2Nyb2xsRWxlO1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlO1xuICAgICAgICAgICAgZGlzdGFuY2UgPSBlLmRpc3RhbmNlWDtcbiAgICAgICAgICAgIGlmICgodGhpcy5pZUNoZWNrKSAmJiB0aGlzLmNvbnRhaW5zKHRoaXMuZWxlbWVudCwgQ0xTX1JUTCkpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IC1kaXN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLnNjcm9sbERpcmVjdGlvbiA9PT0gJ0xlZnQnKSB7XG4gICAgICAgICAgICAgICAgZWxlLnNjcm9sbExlZnQgPSBlbGUuc2Nyb2xsTGVmdCArIGRpc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZS5zY3JvbGxEaXJlY3Rpb24gPT09ICdSaWdodCcpIHtcbiAgICAgICAgICAgICAgICBlbGUuc2Nyb2xsTGVmdCA9IGVsZS5zY3JvbGxMZWZ0IC0gZGlzdGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLmFycm93RGlzYWJsaW5nID0gZnVuY3Rpb24gKGFkZERpc2FibGUsIHJlbW92ZURpc2FibGUpIHtcbiAgICAgICAgICAgIGFkZERpc2FibGUuY2xhc3NMaXN0LmFkZChDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICBhZGREaXNhYmxlLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICBhZGREaXNhYmxlLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgIHJlbW92ZURpc2FibGUuY2xhc3NMaXN0LnJlbW92ZShDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICByZW1vdmVEaXNhYmxlLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgcmVtb3ZlRGlzYWJsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0U2Nyb2xsKCk7XG4gICAgICAgIH07XG4gICAgICAgIEhTY3JvbGwucHJvdG90eXBlLnNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGFyZ2V0Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdmFyIHJvb3RFbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgbmF2TGVmdEVsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19IU0NST0xMTkFWTEVGVCk7XG4gICAgICAgICAgICB2YXIgbmF2UmlnaHRFbGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSFNDUk9MTE5BVlJJR0hUKTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IC1zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoKCF0aGlzLmNvbnRhaW5zKHJvb3RFbGUsIENMU19SVEwpIHx8IHRoaXMuYnJvd3NlckNoZWNrKSB8fCB0aGlzLmllQ2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJvd0Rpc2FibGluZyhuYXZMZWZ0RWxlLCBuYXZSaWdodEVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycm93RGlzYWJsaW5nKG5hdlJpZ2h0RWxlLCBuYXZMZWZ0RWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmNlaWwod2lkdGggKyBzY3JvbGxMZWZ0ICsgLjEpID49IHRhcmdldC5zY3JvbGxXaWR0aCkge1xuICAgICAgICAgICAgICAgIGlmICgoIXRoaXMuY29udGFpbnMocm9vdEVsZSwgQ0xTX1JUTCkgfHwgdGhpcy5icm93c2VyQ2hlY2spIHx8IHRoaXMuaWVDaGVjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycm93RGlzYWJsaW5nKG5hdlJpZ2h0RWxlLCBuYXZMZWZ0RWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyb3dEaXNhYmxpbmcobmF2TGVmdEVsZSwgbmF2UmlnaHRFbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBkaXNFbGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpc0VsZSkge1xuICAgICAgICAgICAgICAgICAgICBkaXNFbGUuY2xhc3NMaXN0LnJlbW92ZShDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc0VsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzRWxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgSFNjcm9sbC5wcm90b3R5cGUub25Qcm9wZXJ0eUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3UHJvcCwgb2xkUHJvcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG5ld1Byb3ApOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzY3JvbGxTdGVwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVSdGwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcC5lbmFibGVSdGwgPyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTFNfUlRMKSA6IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMU19SVEwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gSFNjcm9sbDtcbiAgICB9KGVqMl9iYXNlXzEuQ29tcG9uZW50KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoNDApXG4gICAgXSwgSFNjcm9sbC5wcm90b3R5cGUsIFwic2Nyb2xsU3RlcFwiLCB2b2lkIDApO1xuICAgIEhTY3JvbGwgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Ob3RpZnlQcm9wZXJ0eUNoYW5nZXNcbiAgICBdLCBIU2Nyb2xsKTtcbiAgICBleHBvcnRzLkhTY3JvbGwgPSBIU2Nyb2xsO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24vaC1zY3JvbGwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi90b29sYmFyXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgdG9vbGJhcl8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydCh0b29sYmFyXzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90b29sYmFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1wb3B1cHNcIiwgXCJAc3luY2Z1c2lvbi9lajItcG9wdXBzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJ1dHRvbnNcIiwgXCIuLi9jb21tb24vaC1zY3JvbGxcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBlajJfYmFzZV8xLCBlajJfYmFzZV8yLCBlajJfYmFzZV8zLCBlajJfYmFzZV80LCBlajJfYmFzZV81LCBlajJfcG9wdXBzXzEsIGVqMl9wb3B1cHNfMiwgZWoyX2J1dHRvbnNfMSwgaF9zY3JvbGxfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgQ0xTX0lURU1TID0gJ2UtdG9vbGJhci1pdGVtcyc7XG4gICAgdmFyIENMU19JVEVNID0gJ2UtdG9vbGJhci1pdGVtJztcbiAgICB2YXIgQ0xTX1JUTCA9ICdlLXJ0bCc7XG4gICAgdmFyIENMU19TRVBBUkFUT1IgPSAnZS1zZXBhcmF0b3InO1xuICAgIHZhciBDTFNfUE9QVVBJQ09OID0gJ2UtcG9wdXAtdXAtaWNvbic7XG4gICAgdmFyIENMU19QT1BVUERPV04gPSAnZS1wb3B1cC1kb3duLWljb24nO1xuICAgIHZhciBDTFNfVEVNUExBVEUgPSAnZS10ZW1wbGF0ZSc7XG4gICAgdmFyIENMU19ESVNBQkxFID0gJ2Utb3ZlcmxheSc7XG4gICAgdmFyIENMU19QT1BVUFRFWFQgPSAnZS10b29sYmFyLXRleHQnO1xuICAgIHZhciBDTFNfVEJBUlRFWFQgPSAnZS1wb3B1cC10ZXh0JztcbiAgICB2YXIgQ0xTX1RCQVJPVkVSRkxPVyA9ICdlLW92ZXJmbG93LXNob3cnO1xuICAgIHZhciBDTFNfUE9QT1ZFUkZMT1cgPSAnZS1vdmVyZmxvdy1oaWRlJztcbiAgICB2YXIgQ0xTX1RCQVJCVE4gPSAnZS10YmFyLWJ0bic7XG4gICAgdmFyIENMU19UQkFSTkFWID0gJ2UtaG9yLW5hdic7XG4gICAgdmFyIENMU19UQkFSU0NSTE5BViA9ICdlLXNjcm9sbC1uYXYnO1xuICAgIHZhciBDTFNfVEJBUlJJR0hUID0gJ2UtdG9vbGJhci1yaWdodCc7XG4gICAgdmFyIENMU19UQkFSTEVGVCA9ICdlLXRvb2xiYXItbGVmdCc7XG4gICAgdmFyIENMU19UQkFSQ0VOVEVSID0gJ2UtdG9vbGJhci1jZW50ZXInO1xuICAgIHZhciBDTFNfVEJBUlBPUyA9ICdlLXRiYXItcG9zJztcbiAgICB2YXIgQ0xTX1RCQVJTQ1JPTEwgPSAnZS1oc2Nyb2xsLWNvbnRlbnQnO1xuICAgIHZhciBDTFNfUE9QVVBOQVYgPSAnZS1ob3ItbmF2JztcbiAgICB2YXIgQ0xTX1BPUFVQQ0xBU1MgPSAnZS10b29sYmFyLXBvcCc7XG4gICAgdmFyIENMU19QT1BVUCA9ICdlLXRvb2xiYXItcG9wdXAnO1xuICAgIHZhciBDTFNfVEJBUkJUTlRFWFQgPSAnZS10YmFyLWJ0bi10ZXh0JztcbiAgICB2YXIgQ0xTX1RCQVJOQVZBQ1QgPSAnZS1uYXYtYWN0aXZlJztcbiAgICB2YXIgQ0xTX1RCQVJJR05PUkUgPSAnZS1pZ25vcmUnO1xuICAgIHZhciBJdGVtID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEl0ZW0sIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEl0ZW0oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEl0ZW07XG4gICAgfShlajJfYmFzZV81LkNoaWxkUHJvcGVydHkpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBJdGVtLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcInRleHRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnYXV0bycpXG4gICAgXSwgSXRlbS5wcm90b3R5cGUsIFwid2lkdGhcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBJdGVtLnByb3RvdHlwZSwgXCJjc3NDbGFzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcInByZWZpeEljb25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBJdGVtLnByb3RvdHlwZSwgXCJzdWZmaXhJY29uXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ05vbmUnKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcIm92ZXJmbG93XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgSXRlbS5wcm90b3R5cGUsIFwidGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnQnV0dG9uJylcbiAgICBdLCBJdGVtLnByb3RvdHlwZSwgXCJ0eXBlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ0JvdGgnKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcInNob3dUZXh0T25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIEl0ZW0ucHJvdG90eXBlLCBcImh0bWxBdHRyaWJ1dGVzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgSXRlbS5wcm90b3R5cGUsIFwidG9vbHRpcFRleHRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnbGVmdCcpXG4gICAgXSwgSXRlbS5wcm90b3R5cGUsIFwiYWxpZ25cIiwgdm9pZCAwKTtcbiAgICBleHBvcnRzLkl0ZW0gPSBJdGVtO1xuICAgIHZhciBUb29sYmFyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKFRvb2xiYXIsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIFRvb2xiYXIob3B0aW9ucywgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgZWxlbWVudCkgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLmtleUNvbmZpZ3MgPSB7XG4gICAgICAgICAgICAgICAgbW92ZUxlZnQ6ICdsZWZ0YXJyb3cnLFxuICAgICAgICAgICAgICAgIG1vdmVSaWdodDogJ3JpZ2h0YXJyb3cnLFxuICAgICAgICAgICAgICAgIG1vdmVVcDogJ3VwYXJyb3cnLFxuICAgICAgICAgICAgICAgIG1vdmVEb3duOiAnZG93bmFycm93JyxcbiAgICAgICAgICAgICAgICBwb3B1cE9wZW46ICdlbnRlcicsXG4gICAgICAgICAgICAgICAgcG9wdXBDbG9zZTogJ2VzY2FwZScsXG4gICAgICAgICAgICAgICAgdGFiOiAndGFiJyxcbiAgICAgICAgICAgICAgICBob21lOiAnaG9tZScsXG4gICAgICAgICAgICAgICAgZW5kOiAnZW5kJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnVud2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgd2hpbGUgKGVsZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZWxlLnJlbW92ZUNoaWxkKGVsZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnRyZ3RFbGUpIHtcbiAgICAgICAgICAgICAgICBlbGUuYXBwZW5kQ2hpbGQodGhpcy5jdHJsVGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xlYXJQcm9wZXJ0eSgpO1xuICAgICAgICAgICAgdGhpcy5wb3BPYmogPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5lbGVtZW50LCAnZS10b29scG9wJyk7XG4gICAgICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgWydhcmlhLWRpc2FibGVkJywgJ2FyaWEtb3JpZW50YXRpb24nLCAnYXJpYS1oYXNwb3B1cCcsICdyb2xlJ10uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyYik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucHJlUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdiZWZvcmVDcmVhdGUnKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kdWxlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucG9wT2JqID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZVJ0bCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMuZWxlbWVudCwgQ0xTX1JUTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLmtleU1vZHVsZSA9IG5ldyBlajJfYmFzZV8yLktleWJvYXJkRXZlbnRzKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGtleUFjdGlvbjogdGhpcy5rZXlBY3Rpb25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAga2V5Q29uZmlnczogdGhpcy5rZXlDb25maWdzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdrZXlkb3duJywgdGhpcy5kb2NLZXlEb3duLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JywgJzAnKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuZG9jS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA5ICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZS1ob3ItbmF2JykgPT09IHRydWUgJiYgZWoyX2Jhc2VfMi5pc1Zpc2libGUodGhpcy5wb3BPYmouZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcE9iai5oaWRlKHsgbmFtZTogJ1NsaWRlVXAnLCBkdXJhdGlvbjogMTAwIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChlLmtleUNvZGUgPT09IDQwIHx8IGUua2V5Q29kZSA9PT0gMzgpICYmICFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMucG9wT2JqKSAmJiBlajJfYmFzZV8yLmlzVmlzaWJsZSh0aGlzLnBvcE9iai5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUudW53aXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95SFNjcm9sbCgpO1xuICAgICAgICAgICAgdGhpcy5rZXlNb2R1bGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKGRvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5kb2NFdmVudCk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAna2V5ZG93bicsIHRoaXMuZG9jS2V5RG93bik7XG4gICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5yZW1vdmUoZG9jdW1lbnQsICdjbGljaycsIHRoaXMuZG9jRXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5jbGVhclByb3BlcnR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy50YmFyRWxlID0gW107XG4gICAgICAgICAgICB0aGlzLnRiYXJBbGdFbGUgPSB7IGxlZnRzOiBbXSwgY2VudGVyczogW10sIHJpZ2h0czogW10gfTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuZG9jRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHBvcEVsZSA9IGVqMl9iYXNlXzIuY2xvc2VzdChlLnRhcmdldCwgJy5lLXBvcHVwJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3BPYmogJiYgZWoyX2Jhc2VfMi5pc1Zpc2libGUodGhpcy5wb3BPYmouZWxlbWVudCkgJiYgIXBvcEVsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wT2JqLmhpZGUoeyBuYW1lOiAnU2xpZGVVcCcsIGR1cmF0aW9uOiAxMDAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmRlc3Ryb3lIU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsTW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMuc2Nyb2xsTW9kdWxlLmVsZW1lbnQsIENMU19UQkFSUE9TKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxNb2R1bGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kdWxlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuZGVzdHJveUl0ZW1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgW10uc2xpY2UuY2FsbCh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBDTFNfSVRFTSkpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5kZXRhY2goZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyUHJvcGVydHkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuZGVzdHJveU1vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxNb2R1bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLnNjcm9sbE1vZHVsZS5lbGVtZW50LCBDTFNfUlRMKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lIU2Nyb2xsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wb3BPYmopIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwUmVmcmVzaCh0aGlzLnBvcE9iai5lbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGVsZSwgdmFsKSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZCh2YWwpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlLCB2YWwpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKHZhbCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmVsZW1lbnRGb2N1cyA9IGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgICAgIHZhciBmQ2hpbGQgPSBlbGUuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBpZiAoZkNoaWxkKSB7XG4gICAgICAgICAgICAgICAgZkNoaWxkLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVFbGVTd2l0Y2goZWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5jbHN0RWxlbWVudCA9IGZ1bmN0aW9uICh0YnJOYXZDaGssIHRyZ3QpIHtcbiAgICAgICAgICAgIHZhciBjbHN0O1xuICAgICAgICAgICAgaWYgKHRick5hdkNoayAmJiB0aGlzLnBvcE9iaiAmJiBlajJfYmFzZV8yLmlzVmlzaWJsZSh0aGlzLnBvcE9iai5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGNsc3QgPSB0aGlzLnBvcE9iai5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5lbGVtZW50ID09PSB0cmd0IHx8IHRick5hdkNoaykge1xuICAgICAgICAgICAgICAgIGNsc3QgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbHN0ID0gZWoyX2Jhc2VfMi5jbG9zZXN0KHRyZ3QsICcuJyArIENMU19JVEVNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjbHN0O1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5rZXlIYW5kbGluZyA9IGZ1bmN0aW9uIChjbHN0LCBlLCB0cmd0LCBuYXZDaGssIHNjcm9sbENoaykge1xuICAgICAgICAgICAgdmFyIHBvcE9iaiA9IHRoaXMucG9wT2JqO1xuICAgICAgICAgICAgdmFyIHJvb3RFbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgcG9wQW5pbWF0ZSA9IHsgbmFtZTogJ1NsaWRlVXAnLCBkdXJhdGlvbjogMTAwIH07XG4gICAgICAgICAgICBzd2l0Y2ggKGUuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZVJpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvb3RFbGUgPT09IHRyZ3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudEZvY3VzKGNsc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFuYXZDaGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlRm9jdXMoY2xzdCwgJ25leHQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtb3ZlTGVmdCc6XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmF2Q2hrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZUZvY3VzKGNsc3QsICdwcmV2aW91cycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlcyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3B1cENoZWNrID0gZWoyX2Jhc2VfMi5jbG9zZXN0KGNsc3QsICcuZS1wb3B1cCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwQ2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMi5pc1Zpc2libGUodGhpcy5wb3BPYmouZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBwb3B1cENoZWNrLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5hY3Rpb24gPT09ICdob21lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlID0gbm9kZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGUgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgQ0xTX0lURU1TICsgJyAuJyArIENMU19JVEVNKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5hY3Rpb24gPT09ICdob21lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGUgPSBub2Rlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZSA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRGb2N1cyhlbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vdmVVcCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZURvd24nOlxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBlLmFjdGlvbiA9PT0gJ21vdmVVcCcgPyAncHJldmlvdXMnIDogJ25leHQnO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9wT2JqICYmIGVqMl9iYXNlXzIuY2xvc2VzdCh0cmd0LCAnLmUtcG9wdXAnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcEVsZSA9IHBvcE9iai5lbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcEZyc3RFbGUgPSBwb3BFbGUuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHZhbHVlID09PSAncHJldmlvdXMnICYmIHBvcEZyc3RFbGUgPT09IGNsc3QpIHx8ICh2YWx1ZSA9PT0gJ25leHQnICYmIHBvcEVsZS5sYXN0RWxlbWVudENoaWxkID09PSBjbHN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlRm9jdXMoY2xzdCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUuYWN0aW9uID09PSAnbW92ZURvd24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRGb2N1cyhjbHN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd0YWInOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNjcm9sbENoayAmJiAhbmF2Q2hrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlXzEgPSBjbHN0LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvb3RFbGUgPT09IHRyZ3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVFbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVFbGUuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlRWxlUmVtb3ZlKGVsZV8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlXzEuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwb3B1cENsb3NlJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcE9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wT2JqLmhpZGUocG9wQW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncG9wdXBPcGVuJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuYXZDaGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocG9wT2JqICYmICFlajJfYmFzZV8yLmlzVmlzaWJsZShwb3BPYmouZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcE9iai5lbGVtZW50LnN0eWxlLnRvcCA9IHJvb3RFbGUub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcE9iai5zaG93KHsgbmFtZTogJ1NsaWRlRG93bicsIGR1cmF0aW9uOiAxMDAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3BPYmouaGlkZShwb3BBbmltYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUua2V5QWN0aW9uSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgY2xzdDtcbiAgICAgICAgICAgIHZhciB0cmd0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgdGJyTmF2Q2hrID0gdHJndC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RCQVJOQVYpO1xuICAgICAgICAgICAgdmFyIHRiYXJTY3JvbGxDaGsgPSB0cmd0LmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJBUlNDUkxOQVYpO1xuICAgICAgICAgICAgY2xzdCA9IHRoaXMuY2xzdEVsZW1lbnQodGJyTmF2Q2hrLCB0cmd0KTtcbiAgICAgICAgICAgIGlmIChjbHN0IHx8IHRiYXJTY3JvbGxDaGspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhbmRsaW5nKGNsc3QsIGUsIHRyZ3QsIHRick5hdkNoaywgdGJhclNjcm9sbENoayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmVsZUZvY3VzID0gZnVuY3Rpb24gKGNsb3Nlc3QsIHBvcykge1xuICAgICAgICAgICAgdmFyIHNpYiA9IE9iamVjdChjbG9zZXN0KVtwb3MgKyAnRWxlbWVudFNpYmxpbmcnXTtcbiAgICAgICAgICAgIHZhciBjb250YWlucyA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1NFUEFSQVRPUikgfHwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19ESVNBQkxFKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoc2liKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNraXBFbGUgPSBjb250YWlucyhzaWIpO1xuICAgICAgICAgICAgICAgIGlmIChza2lwRWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qoc2liKVtwb3MgKyAnU2libGluZyddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWIgPSBPYmplY3Qoc2liKVtwb3MgKyAnU2libGluZyddO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2tpcEVsZSA9IGNvbnRhaW5zKHNpYik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2tpcEVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlRm9jdXMoc2liLCBwb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRGb2N1cyhzaWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IE9iamVjdChjbG9zZXN0LnBhcmVudEVsZW1lbnQpW3BvcyArICdFbGVtZW50U2libGluZyddO1xuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChlbGVtKSAmJiBlbGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zKGVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlRm9jdXMoZWwsIHBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5maXJzdEVsZW1lbnRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlRWxlU3dpdGNoKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGVsZW0ubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250YWlucyhlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZUZvY3VzKGVsLCBwb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Rm9jdXMoZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRyZ3QgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHZhciBjbHNMaXN0ID0gdHJndC5jbGFzc0xpc3Q7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIHBvcHVwTmF2ID0gZWoyX2Jhc2VfMi5jbG9zZXN0KHRyZ3QsICgnLicgKyBDTFNfVEJBUk5BVikpO1xuICAgICAgICAgICAgaWYgKCFwb3B1cE5hdikge1xuICAgICAgICAgICAgICAgIHBvcHVwTmF2ID0gdHJndDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWxlLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5jb250YWlucygnZS1oc2Nyb2xsJykgJiYgKGNsc0xpc3QuY29udGFpbnMoQ0xTX1RCQVJOQVYpKSkge1xuICAgICAgICAgICAgICAgIGNsc0xpc3QgPSB0cmd0LnF1ZXJ5U2VsZWN0b3IoJy5lLWljb25zJykuY2xhc3NMaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNsc0xpc3QuY29udGFpbnMoQ0xTX1BPUFVQSUNPTikgfHwgY2xzTGlzdC5jb250YWlucyhDTFNfUE9QVVBET1dOKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDbGlja0hhbmRsZXIoZWxlLCBwb3B1cE5hdiwgQ0xTX1JUTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaXRlbU9iajtcbiAgICAgICAgICAgIHZhciBjbHN0ID0gZWoyX2Jhc2VfMi5jbG9zZXN0KGUudGFyZ2V0LCAnLicgKyBDTFNfSVRFTSk7XG4gICAgICAgICAgICBpZiAoKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoY2xzdCkgfHwgY2xzdC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0RJU0FCTEUpKSAmJiAhcG9wdXBOYXYuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19UQkFSTkFWKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbHN0KSB7XG4gICAgICAgICAgICAgICAgaXRlbU9iaiA9IHRoaXMuaXRlbXNbdGhpcy50YmFyRWxlLmluZGV4T2YoY2xzdCldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGV2ZW50QXJncyA9IHsgb3JpZ2luYWxFdmVudDogZSwgaXRlbTogaXRlbU9iaiB9O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGlja2VkJywgZXZlbnRBcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5wb3B1cENsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlbGUsIHBvcHVwTmF2LCBDTFNfUlRMKSB7XG4gICAgICAgICAgICB2YXIgcG9wT2JqID0gdGhpcy5wb3BPYmo7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMi5pc1Zpc2libGUocG9wT2JqLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcG9wdXBOYXYuY2xhc3NMaXN0LnJlbW92ZShDTFNfVEJBUk5BVkFDVCk7XG4gICAgICAgICAgICAgICAgcG9wT2JqLmhpZGUoeyBuYW1lOiAnU2xpZGVVcCcsIGR1cmF0aW9uOiAxMDAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlLmNsYXNzTGlzdC5jb250YWlucyhDTFNfUlRMKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3BPYmouZW5hYmxlUnRsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcG9wT2JqLnBvc2l0aW9uID0geyBYOiAnbGVmdCcsIFk6ICd0b3AnIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwb3BPYmoub2Zmc2V0WCA9PT0gMCAmJiAhZWxlLmNsYXNzTGlzdC5jb250YWlucyhDTFNfUlRMKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3BPYmouZW5hYmxlUnRsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHBvcE9iai5wb3NpdGlvbiA9IHsgWDogJ3JpZ2h0JywgWTogJ3RvcCcgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9wT2JqLmRhdGFCaW5kKCk7XG4gICAgICAgICAgICAgICAgcG9wT2JqLmVsZW1lbnQuc3R5bGUudG9wID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgcG9wdXBOYXYuY2xhc3NMaXN0LmFkZChDTFNfVEJBUk5BVkFDVCk7XG4gICAgICAgICAgICAgICAgcG9wT2JqLnNob3coeyBuYW1lOiAnU2xpZGVEb3duJywgZHVyYXRpb246IDEwMCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckNvbnRyb2woKTtcbiAgICAgICAgICAgIHRoaXMud2lyZUV2ZW50cygpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gZWoyX2Jhc2VfNC5mb3JtYXRVbml0KHRoaXMud2lkdGgpO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGVqMl9iYXNlXzQuZm9ybWF0VW5pdCh0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNS5Ccm93c2VyLmluZm8ubmFtZSAhPT0gJ21zaWUnIHx8IHRoaXMuaGVpZ2h0ICE9PSAnYXV0bycpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKHRoaXMuZWxlbWVudCwgeyAnaGVpZ2h0JzogaGVpZ2h0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQsIHsgJ3dpZHRoJzogd2lkdGggfSk7XG4gICAgICAgICAgICB2YXIgYXJpYUF0dHIgPSB7XG4gICAgICAgICAgICAgICAgJ3JvbGUnOiAndG9vbGJhcicsICdhcmlhLWRpc2FibGVkJzogJ2ZhbHNlJywgJ2FyaWEtaGFzcG9wdXAnOiAnZmFsc2UnLCAnYXJpYS1vcmllbnRhdGlvbic6ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBlajJfYmFzZV8yLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCBhcmlhQXR0cik7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnJlbmRlckNvbnRyb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRyZ3RFbGUgPSAodGhpcy5lbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApID8gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpIDogbnVsbDtcbiAgICAgICAgICAgIHRoaXMudGJhckFsZ0VsZSA9IHsgbGVmdHM6IFtdLCBjZW50ZXJzOiBbXSwgcmlnaHRzOiBbXSB9O1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJJdGVtcygpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJPdmVyZmxvd01vZGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRiYXJBbGlnbikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVBvc2l0aW9uaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmluaXRIU2Nyb2xsID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlubmVySXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zY3JvbGxNb2R1bGUgJiYgdGhpcy5jaGVja092ZXJmbG93KGVsZW1lbnQsIGlubmVySXRlbXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNUyArICcgLicgKyBDTFNfVEJBUkNFTlRFUikucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbE1vZHVsZSA9IG5ldyBoX3Njcm9sbF8xLkhTY3JvbGwoeyBzY3JvbGxTdGVwOiA1MCwgZW5hYmxlUnRsOiB0aGlzLmVuYWJsZVJ0bCB9LCBpbm5lckl0ZW1zWzBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLnNjcm9sbE1vZHVsZS5lbGVtZW50LCBDTFNfVEJBUlBPUyk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQsIHsgb3ZlcmZsb3c6ICdoaWRkZW4nIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5pdGVtV2lkdGhDYWwgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IDA7XG4gICAgICAgICAgICBbXS5zbGljZS5jYWxsKGVqMl9iYXNlXzMuc2VsZWN0QWxsKCcuJyArIENMU19JVEVNKSwgaXRlbXMpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB3aWR0aDtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuY2hlY2tPdmVyZmxvdyA9IGZ1bmN0aW9uIChlbGVtZW50LCBpbm5lckl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGVsZW1lbnQpIHx8IGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlbGVXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB2YXIgaXRlbVdpZHRoO1xuICAgICAgICAgICAgaWYgKHRoaXMudGJhckFsaWduIHx8IHRoaXMuc2Nyb2xsTW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaXRlbVdpZHRoID0gdGhpcy5pdGVtV2lkdGhDYWwodGhpcy5zY3JvbGxNb2R1bGUgPyBpbm5lckl0ZW0ucXVlcnlTZWxlY3RvcignLmUtaHNjcm9sbC1jb250ZW50JykgOiBpbm5lckl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbVdpZHRoID0gaW5uZXJJdGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBvcE5hdiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfVEJBUk5BVik7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsTmF2ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19UQkFSU0NSTE5BVik7XG4gICAgICAgICAgICBpZiAoaXRlbVdpZHRoID4gZWxlV2lkdGggLSAocG9wTmF2ID8gcG9wTmF2Lm9mZnNldFdpZHRoIDogKHNjcm9sbE5hdiA/IHNjcm9sbE5hdi5vZmZzZXRXaWR0aCAqIDIgOiAwKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucmVmcmVzaE92ZXJmbG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucmVuZGVyT3ZlcmZsb3dNb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBpbm5lckl0ZW1zID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU1TKTtcbiAgICAgICAgICAgIGlmIChlbGUgJiYgZWxlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldFdpZCA9IGVsZS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3ZlcmZsb3dNb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1Njcm9sbGFibGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95SFNjcm9sbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0SFNjcm9sbChlbGUsIGVsZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKENMU19JVEVNUykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BvcHVwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMuZWxlbWVudCwgJ2UtdG9vbHBvcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVQb3NpdGlvbmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tPdmVyZmxvdyhlbGUsIGlubmVySXRlbXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQb3B1cEVsZShlbGUsIFtdLnNsaWNlLmNhbGwoZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX0lURU1TICsgJyAuJyArIENMU19JVEVNLCBlbGUpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX1RCQVJOQVYpLnNldEF0dHJpYnV0ZSgndGFiSW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQoaW5uZXJJdGVtcywgQ0xTX1RCQVJQT1MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVBvc2l0aW9uaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmNyZWF0ZVBvcHVwRWxlID0gZnVuY3Rpb24gKGVsZSwgaW5uZXJFbGUpIHtcbiAgICAgICAgICAgIHZhciBpbm5lck5hdiA9IGVsZS5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19UQkFSTkFWKTtcbiAgICAgICAgICAgIGlmICghaW5uZXJOYXYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBvcHVwSWNvbihlbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5uZXJOYXYgPSBlbGUucXVlcnlTZWxlY3RvcignLicgKyBDTFNfVEJBUk5BVik7XG4gICAgICAgICAgICB2YXIgZWxlV2lkdGggPSAoZWxlLm9mZnNldFdpZHRoIC0gKGlubmVyTmF2Lm9mZnNldFdpZHRoKSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZS1ydGwnKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQcmlvcml0eShlbGUsIGlubmVyRWxlLCBlbGVXaWR0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVSdGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZS1ydGwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUG9wdXAoKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucHVzaGluZ1BvcHBlZEVsZSA9IGZ1bmN0aW9uICh0YmFyT2JqLCBwb3B1cFByaSwgZWxlLCBlbGVIZWlnaHQpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGJhck9iai5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCQVJPVkVSRkxPVywgZWxlKTtcbiAgICAgICAgICAgIHZhciBub2RlSW5kZXggPSAwO1xuICAgICAgICAgICAgdmFyIHBvcHBlZEVsZSA9IFtdLnNsaWNlLmNhbGwoZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX1BPUFVQLCBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU1TKSkpO1xuICAgICAgICAgICAgdmFyIG5vZGVQcmkgPSAwO1xuICAgICAgICAgICAgcG9wcGVkRWxlLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIG5vZGVzID0gZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCQVJPVkVSRkxPVywgZWxlKTtcbiAgICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19UQkFST1ZFUkZMT1cpICYmIG5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRiYXJPYmoudGJSZXNpemUgJiYgbm9kZXMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZS5pbnNlcnRCZWZvcmUoZWwsIG5vZGVzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICArK25vZGVQcmk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGUuaW5zZXJ0QmVmb3JlKGVsLCBlbGUuY2hpbGRyZW5bbm9kZXMubGVuZ3RoXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICArK25vZGVQcmk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19UQkFST1ZFUkZMT1cpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5pbnNlcnRCZWZvcmUoZWwsIGVsZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgKytub2RlUHJpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0YmFyT2JqLnRiUmVzaXplICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfUE9QT1ZFUkZMT1cpICYmIGVsZS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuaW5zZXJ0QmVmb3JlKGVsLCBlbGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICsrbm9kZVByaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19QT1BPVkVSRkxPVykpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBQcmkucHVzaChlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRiYXJPYmoudGJSZXNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLmluc2VydEJlZm9yZShlbCwgZWxlLmNoaWxkTm9kZXNbbm9kZUluZGV4ICsgbm9kZVByaV0pO1xuICAgICAgICAgICAgICAgICAgICArK25vZGVJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUoZWwsIHsgZGlzcGxheTogJycsIGhlaWdodDogZWxlSGVpZ2h0ICsgJ3B4JyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9wdXBQcmkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbGUuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgdGJhckVsZSA9IGVqMl9iYXNlXzMuc2VsZWN0QWxsKCcuJyArIENMU19JVEVNLCBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU1TKSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGJhckVsZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciB0YmFyRWxlbWVudCA9IHRiYXJFbGVbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRiYXJFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTFNfU0VQQVJBVE9SKSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKHRiYXJFbGVtZW50LCB7IGRpc3BsYXk6ICdub25lJyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuY3JlYXRlUG9wdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBlbGVIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgZWxlSXRlbTtcbiAgICAgICAgICAgIGVsZUl0ZW0gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU0gKyAnOm5vdCguJyArIENMU19TRVBBUkFUT1IgKyAnICk6bm90KC4nICsgQ0xTX1BPUFVQICsgJyApJyk7XG4gICAgICAgICAgICBlbGVIZWlnaHQgPSAoZWxlbWVudC5zdHlsZS5oZWlnaHQgPT09ICdhdXRvJyB8fCBlbGVtZW50LnN0eWxlLmhlaWdodCA9PT0gJycpID8gbnVsbCA6IGVsZUl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGVsZTtcbiAgICAgICAgICAgIHZhciBwb3B1cFByaSA9IFtdO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBlbGVtZW50LmlkICsgJ19wb3B1cC4nICsgQ0xTX1BPUFVQQ0xBU1MpKSB7XG4gICAgICAgICAgICAgICAgZWxlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGVsZW1lbnQuaWQgKyAnX3BvcHVwLicgKyBDTFNfUE9QVVBDTEFTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGUgPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgaWQ6IGVsZW1lbnQuaWQgKyAnX3BvcHVwJywgY2xhc3NOYW1lOiBDTFNfUE9QVVBDTEFTUyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHVzaGluZ1BvcHBlZEVsZSh0aGlzLCBwb3B1cFByaSwgZWxlLCBlbGVIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cEluaXQoZWxlbWVudCwgZWxlKTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucG9wdXBJbml0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGVsZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcE9iaikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKHRoaXMuZWxlbWVudCwgeyBvdmVyZmxvdzogJycgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHBvcHVwID0gbmV3IGVqMl9wb3B1cHNfMS5Qb3B1cChudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGF0ZVRvOiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IChlbGVtZW50Lm9mZnNldEhlaWdodCksXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVJ0bDogdGhpcy5lbmFibGVSdGwsXG4gICAgICAgICAgICAgICAgICAgIG9wZW46IHRoaXMucG9wdXBPcGVuLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlOiB0aGlzLnBvcHVwQ2xvc2UsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmVuYWJsZVJ0bCA/IHsgWDogJ2xlZnQnLCBZOiAndG9wJyB9IDogeyBYOiAncmlnaHQnLCBZOiAndG9wJyB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcG9wdXAuYXBwZW5kVG8oZWxlKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQoZG9jdW1lbnQsICdzY3JvbGwnLCB0aGlzLmRvY0V2ZW50LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZChkb2N1bWVudCwgJ2NsaWNrICcsIHRoaXMuZG9jRXZlbnQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgcG9wdXAuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBwb3B1cC5lbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgcG9wdXAuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wT2JqID0gcG9wdXA7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcsICd0cnVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9wdXBFbGUgPSB0aGlzLnBvcE9iai5lbGVtZW50O1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2V0U3R5bGVBdHRyaWJ1dGUocG9wdXBFbGUsIHsgbWF4SGVpZ2h0OiAnJywgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKHBvcHVwRWxlLCB7IG1heEhlaWdodDogcG9wdXBFbGUub2Zmc2V0SGVpZ2h0ICsgJ3B4JywgZGlzcGxheTogJycgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnBvcHVwT3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgcG9wT2JqID0gdGhpcy5wb3BPYmo7XG4gICAgICAgICAgICB2YXIgcG9wdXBFbGUgPSB0aGlzLnBvcE9iai5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIHRvb2xFbGUgPSB0aGlzLnBvcE9iai5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgcG9wdXBOYXYgPSB0b29sRWxlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX1RCQVJOQVYpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZShwb3BPYmouZWxlbWVudCwgeyBoZWlnaHQ6ICdhdXRvJywgbWF4SGVpZ2h0OiAnJyB9KTtcbiAgICAgICAgICAgIHBvcE9iai5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHBvcE9iai5lbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgICAgICB2YXIgcG9wdXBFbGVQb3MgPSBwb3B1cEVsZS5vZmZzZXRUb3AgKyBwb3B1cEVsZS5vZmZzZXRIZWlnaHQgKyBlajJfcG9wdXBzXzIuY2FsY3VsYXRlUG9zaXRpb24odG9vbEVsZSkudG9wO1xuICAgICAgICAgICAgdmFyIHBvcEljb24gPSBwb3B1cE5hdi5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIHBvcHVwTmF2LmNsYXNzTGlzdC5hZGQoQ0xTX1RCQVJOQVZBQ1QpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5jbGFzc0xpc3QocG9wSWNvbiwgW0NMU19QT1BVUElDT05dLCBbQ0xTX1BPUFVQRE9XTl0pO1xuICAgICAgICAgICAgdmFyIHNjcm9sbFZhbCA9IGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQod2luZG93LnNjcm9sbFkpID8gMCA6IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICAgICAgaWYgKCh3aW5kb3cuaW5uZXJIZWlnaHQgKyBzY3JvbGxWYWwpIDwgcG9wdXBFbGVQb3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmZsb3dIZWlnaHQgPSAocG9wdXBFbGUub2Zmc2V0SGVpZ2h0IC0gKChwb3B1cEVsZVBvcyAtIHdpbmRvdy5pbm5lckhlaWdodCAtIHNjcm9sbFZhbCkgKyA1KSk7XG4gICAgICAgICAgICAgICAgcG9wT2JqLmhlaWdodCA9IG92ZXJmbG93SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKHBvcE9iai5lbGVtZW50LCB7IG1heEhlaWdodDogb3ZlcmZsb3dIZWlnaHQgKyAncHgnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5wb3B1cENsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgcG9wdXBOYXYgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX1RCQVJOQVYpO1xuICAgICAgICAgICAgdmFyIHBvcEljb24gPSBwb3B1cE5hdi5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIHBvcHVwTmF2LmNsYXNzTGlzdC5yZW1vdmUoQ0xTX1RCQVJOQVZBQ1QpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5jbGFzc0xpc3QocG9wSWNvbiwgW0NMU19QT1BVUERPV05dLCBbQ0xTX1BPUFVQSUNPTl0pO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5jaGVja1ByaW9yaXR5ID0gZnVuY3Rpb24gKGVsZSwgaW5FbGUsIGVsZVdpZHRoLCBwcmUpIHtcbiAgICAgICAgICAgIHZhciBsZW4gPSBpbkVsZS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZWxlV2lkID0gZWxlV2lkdGg7XG4gICAgICAgICAgICB2YXIgc2VwQ2hlY2sgPSAwO1xuICAgICAgICAgICAgdmFyIGl0ZW1Db3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgaXRlbVBvcENvdW50ID0gMDtcbiAgICAgICAgICAgIHZhciBjaGVja0NsYXNzID0gZnVuY3Rpb24gKGVsZSwgdmFsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJWYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YWwuZm9yRWFjaChmdW5jdGlvbiAoY2xzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJWYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJWYWw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxlbiAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1yZ24gPSBwYXJzZUZsb2F0KCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpbkVsZVtpXSkpLm1hcmdpblJpZ2h0KTtcbiAgICAgICAgICAgICAgICBtcmduICs9IHBhcnNlRmxvYXQoKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGluRWxlW2ldKSkubWFyZ2luTGVmdCk7XG4gICAgICAgICAgICAgICAgaWYgKGluRWxlW2ldID09PSB0aGlzLnRiYXJFbGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YmFyRWxlTXJnbiA9IG1yZ247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoaW5FbGVbaV0ub2Zmc2V0TGVmdCArIGluRWxlW2ldLm9mZnNldFdpZHRoICsgbXJnbikgPiBlbGVXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5FbGVbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKENMU19TRVBBUkFUT1IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VwQ2hlY2sgPiAwICYmIGl0ZW1Db3VudCA9PT0gaXRlbVBvcENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlcEVsZSA9IGluRWxlW2kgKyBpdGVtQ291bnQgKyAoc2VwQ2hlY2sgLSAxKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQ2xhc3Moc2VwRWxlLCBbQ0xTX1NFUEFSQVRPUiwgQ0xTX1RCQVJJR05PUkVdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKHNlcEVsZSwgeyBkaXNwbGF5OiAnbm9uZScgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VwQ2hlY2srKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtUG9wQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluRWxlW2ldLmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJBUk9WRVJGTE9XKSAmJiBwcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVdpZHRoIC09IChpbkVsZVtpXS5vZmZzZXRXaWR0aCArIChtcmduKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWNoZWNrQ2xhc3MoaW5FbGVbaV0sIFtDTFNfU0VQQVJBVE9SLCBDTFNfVEJBUklHTk9SRV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbkVsZVtpXS5jbGFzc0xpc3QuYWRkKENMU19QT1BVUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnNldFN0eWxlQXR0cmlidXRlKGluRWxlW2ldLCB7IGRpc3BsYXk6ICdub25lJywgbWluV2lkdGg6IGluRWxlW2ldLm9mZnNldFdpZHRoICsgJ3B4JyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Qb3BDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlV2lkdGggLT0gKGluRWxlW2ldLm9mZnNldFdpZHRoICsgKG1yZ24pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9wZWRFbGUgPSBlajJfYmFzZV8zLnNlbGVjdEFsbCgnLicgKyBDTFNfSVRFTSArICc6bm90KC4nICsgQ0xTX1BPUFVQICsgJyknLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQcmlvcml0eShlbGUsIHBvcGVkRWxlLCBlbGVXaWQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuY3JlYXRlUG9wdXBJY29uID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGVsZW1lbnQuaWQuY29uY2F0KCdfbmF2Jyk7XG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gJ2UtJyArIGVsZW1lbnQuaWQuY29uY2F0KCdfbmF2ICcgKyBDTFNfUE9QVVBOQVYpO1xuICAgICAgICAgICAgdmFyIG5hdiA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBpZDogaWQsIGNsYXNzTmFtZTogY2xhc3NOYW1lIH0pO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzUuQnJvd3Nlci5pbmZvLm5hbWUgPT09ICdtc2llJyB8fCBlajJfYmFzZV81LkJyb3dzZXIuaW5mby5uYW1lID09PSAnZWRnZScpIHtcbiAgICAgICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnZS1pZS1hbGlnbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5hdkl0ZW0gPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfUE9QVVBET1dOICsgJyBlLWljb25zJyB9KTtcbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChuYXZJdGVtKTtcbiAgICAgICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUudGJhclByaVJlZiA9IGZ1bmN0aW9uIChpbkVsZSwgaW5keCwgc2VwUHJpLCBlbCwgZGVzLCBlbFdpZCwgd2lkLCBpZykge1xuICAgICAgICAgICAgdmFyIGlnbm9yZUNvdW50ID0gaWc7XG4gICAgICAgICAgICB2YXIgcG9wRWxlID0gdGhpcy5wb3BPYmouZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBxdWVyeSA9ICcuJyArIENMU19JVEVNICsgJzpub3QoLicgKyBDTFNfU0VQQVJBVE9SICsgJyk6bm90KC4nICsgQ0xTX1RCQVJPVkVSRkxPVyArICcpJztcbiAgICAgICAgICAgIHZhciBwcmlFbGVDbnQgPSBlajJfYmFzZV8zLnNlbGVjdEFsbCgnLicgKyBDTFNfUE9QVVAgKyAnOm5vdCguJyArIENMU19UQkFST1ZFUkZMT1cgKyAnKScsIHBvcEVsZSkubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGNoZWNrQ2xhc3MgPSBmdW5jdGlvbiAoZWxlLCB2YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlLmNsYXNzTGlzdC5jb250YWlucyh2YWwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV8zLnNlbGVjdEFsbChxdWVyeSwgaW5FbGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVTZXAgPSBpbkVsZS5jaGlsZHJlbltpbmR4IC0gKGluZHggLSBzZXBQcmkpIC0gMV07XG4gICAgICAgICAgICAgICAgdmFyIGlnbm9yZUNoZWNrID0gKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGVsZVNlcCkgJiYgY2hlY2tDbGFzcyhlbGVTZXAsIENMU19UQkFSSUdOT1JFKSk7XG4gICAgICAgICAgICAgICAgaWYgKCghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChlbGVTZXApICYmIGNoZWNrQ2xhc3MoZWxlU2VwLCBDTFNfU0VQQVJBVE9SKSAmJiAhZWoyX2Jhc2VfMi5pc1Zpc2libGUoZWxlU2VwKSkgfHwgaWdub3JlQ2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlcERpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGVsZVNlcC5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlU2VwV2lkdGggPSBlbGVTZXAub2Zmc2V0V2lkdGggKyAocGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVTZXApLm1hcmdpblJpZ2h0KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlNlcCA9IGVsZVNlcC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGVsV2lkICsgZWxlU2VwV2lkdGgpIDwgd2lkIHx8IGRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5FbGUuaW5zZXJ0QmVmb3JlKGVsLCBpbkVsZS5jaGlsZHJlblsoaW5keCArIGlnbm9yZUNvdW50KSAtIChpbmR4IC0gc2VwUHJpKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHByZXZTZXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlNlcC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldlNlcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1NFUEFSQVRPUikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2U2VwLnN0eWxlLmRpc3BsYXkgPSBzZXBEaXNwbGF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsZVNlcC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbkVsZS5pbnNlcnRCZWZvcmUoZWwsIGluRWxlLmNoaWxkcmVuWyhpbmR4ICsgaWdub3JlQ291bnQpIC0gKGluZHggLSBzZXBQcmkpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5FbGUuaW5zZXJ0QmVmb3JlKGVsLCBpbkVsZS5jaGlsZHJlblsoaW5keCArIGlnbm9yZUNvdW50KSAtIHByaUVsZUNudF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5wb3B1cFJlZnJlc2ggPSBmdW5jdGlvbiAocG9wdXBFbGUsIGRlc3Ryb3kpIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgcG9wTmF2ID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX1RCQVJOQVYpO1xuICAgICAgICAgICAgdmFyIGlubmVyRWxlID0gZWxlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU1TKTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHBvcE5hdikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbm5lckVsZS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICBwb3B1cEVsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IGVsZS5vZmZzZXRXaWR0aCAtIChwb3BOYXYub2Zmc2V0V2lkdGggKyBpbm5lckVsZS5vZmZzZXRXaWR0aCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwRWxlUmVmcmVzaCh3aWR0aCwgcG9wdXBFbGUsIGRlc3Ryb3kpO1xuICAgICAgICAgICAgcG9wdXBFbGUuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgaWYgKHBvcHVwRWxlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuZGV0YWNoKHBvcE5hdik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BPYmouZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuZGV0YWNoKHRoaXMucG9wT2JqLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wT2JqID0gbnVsbDtcbiAgICAgICAgICAgICAgICBlbGUuc2V0QXR0cmlidXRlKCdhcmlhLWhhc3BvcHVwJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2UtdG9vbHBvcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5pZ25vcmVFbGVGZXRjaCA9IGZ1bmN0aW9uIChpbmRleCwgaW5uZXJFbGUpIHtcbiAgICAgICAgICAgIHZhciBpZ25vcmVFbGUgPSBbXS5zbGljZS5jYWxsKGlubmVyRWxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgQ0xTX1RCQVJJR05PUkUpKTtcbiAgICAgICAgICAgIHZhciBpZ25vcmVJbnggPSBbXTtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgICAgICBpZiAoaWdub3JlRWxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZ25vcmVFbGUuZm9yRWFjaChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZUlueC5wdXNoKFtdLnNsaWNlLmNhbGwoaW5uZXJFbGUuY2hpbGRyZW4pLmluZGV4T2YoZWxlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlnbm9yZUlueC5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsIDw9IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnBvcHVwRWxlUmVmcmVzaCA9IGZ1bmN0aW9uICh3aWR0aCwgcG9wdXBFbGUsIGRlc3Ryb3kpIHtcbiAgICAgICAgICAgIHZhciBlbGVTcGxpY2UgPSB0aGlzLnRiYXJFbGU7XG4gICAgICAgICAgICB2YXIgcHJpRWxlQ250O1xuICAgICAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICAgICAgdmFyIGlubmVyRWxlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0lURU1TKTtcbiAgICAgICAgICAgIHZhciBpZ25vcmVDb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICB2YXIgZWxXaWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBidG5UZXh0ID0gZWwucXVlcnlTZWxlY3RvcignLicgKyBDTFNfVEJBUkJUTlRFWFQpO1xuICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2UtdGJ0bi1hbGlnbicpIHx8IGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJBUlRFWFQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBidG4gPSBlbC5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGJ0blRleHQpICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJBUlRFWFQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5UZXh0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoYnRuVGV4dCkgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19QT1BVUFRFWFQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5UZXh0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5zdHlsZS5taW5XaWR0aCA9ICcwJSc7XG4gICAgICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgYnRuLnN0eWxlLm1pbldpZHRoID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChidG5UZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGV4dC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsID09PSB0aGlzXzEudGJhckVsZVswXSkge1xuICAgICAgICAgICAgICAgICAgICBlbFdpZHRoICs9IHRoaXNfMS50YmFyRWxlTXJnbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoZWxXaWR0aCA8IHdpZHRoIHx8IGRlc3Ryb3kpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUubWluV2lkdGggPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1BPUE9WRVJGTE9XKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShDTFNfUE9QVVApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpc18xLnRiYXJFbGUuaW5kZXhPZihlbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzXzEudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gdGhpc18xLml0ZW1zW2luZGV4XS5hbGlnbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpc18xLnRiYXJBbGdFbGVbKHBvcyArICdzJyldLmluZGV4T2YoZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlU3BsaWNlID0gdGhpc18xLnRiYXJBbGdFbGVbKHBvcyArICdzJyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJFbGUgPSB0aGlzXzEuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNUyArICcgLicgKyAnZS10b29sYmFyLScgKyBwb3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXBCZWZvcmVQcmlfMSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGVsZVNwbGljZS5zbGljZSgwLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RCQVJPVkVSRkxPVykgfHwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19TRVBBUkFUT1IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfU0VQQVJBVE9SKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIC09IGVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBCZWZvcmVQcmlfMSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlQ291bnQgPSB0aGlzXzEuaWdub3JlRWxlRmV0Y2goaW5kZXgsIGlubmVyRWxlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJBUk9WRVJGTE9XKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc18xLnRiYXJQcmlSZWYoaW5uZXJFbGUsIGluZGV4LCBzZXBCZWZvcmVQcmlfMSwgZWwsIGRlc3Ryb3ksIGVsV2lkdGgsIHdpZHRoLCBpZ25vcmVDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAtPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJFbGUuaW5zZXJ0QmVmb3JlKGVsLCBpbm5lckVsZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIC09IGVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpRWxlQ250ID0gZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCQVJPVkVSRkxPVywgdGhpc18xLnBvcE9iai5lbGVtZW50KS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckVsZS5pbnNlcnRCZWZvcmUoZWwsIGlubmVyRWxlLmNoaWxkcmVuWyhpbmRleCArIGlnbm9yZUNvdW50KSAtIHByaUVsZUNudF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggLT0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgdGhpc18xID0gdGhpcztcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBbXS5zbGljZS5jYWxsKHBvcHVwRWxlLmNoaWxkcmVuKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKGVsKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVfMSA9PT0gXCJicmVha1wiKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucmVtb3ZlUG9zaXRpb25pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNUyk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChpdGVtKSB8fCAhaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RCQVJQT1MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoaXRlbSwgQ0xTX1RCQVJQT1MpO1xuICAgICAgICAgICAgdmFyIGlubmVySXRlbSA9IFtdLnNsaWNlLmNhbGwoaXRlbS5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgIGlubmVySXRlbVsxXS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICBpbm5lckl0ZW1bMl0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5yZWZyZXNoUG9zaXRpb25pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNUyk7XG4gICAgICAgICAgICB0aGlzLmFkZChpdGVtLCBDTFNfVEJBUlBPUyk7XG4gICAgICAgICAgICB0aGlzLml0ZW1Qb3NpdGlvbmluZygpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5pdGVtUG9zaXRpb25pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19JVEVNUyk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChpdGVtKSB8fCAhaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1RCQVJQT1MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBvcHVwTmF2ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX1RCQVJOQVYpO1xuICAgICAgICAgICAgdmFyIGlubmVySXRlbTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbE1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGlubmVySXRlbSA9IFtdLnNsaWNlLmNhbGwoaXRlbS5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19UQkFSU0NST0xMKS5jaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbm5lckl0ZW0gPSBbXS5zbGljZS5jYWxsKGl0ZW0uY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWFyZ2luID0gaW5uZXJJdGVtWzBdLm9mZnNldFdpZHRoICsgaW5uZXJJdGVtWzJdLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdmFyIHRiYXJXaWQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBpZiAocG9wdXBOYXYpIHtcbiAgICAgICAgICAgICAgICB0YmFyV2lkIC09IHBvcHVwTmF2Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIGlubmVySXRlbVsyXS5zdHlsZS5yaWdodCA9IHBvcHVwTmF2Lm9mZnNldFdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YmFyV2lkIDw9IG1hcmdpbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9ICgoKHRiYXJXaWQgLSBtYXJnaW4pKSAtIGlubmVySXRlbVsxXS5vZmZzZXRXaWR0aCkgLyAyO1xuICAgICAgICAgICAgaW5uZXJJdGVtWzFdLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgIHZhciBtcmduID0gKGlubmVySXRlbVswXS5vZmZzZXRXaWR0aCArIHZhbHVlKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJ0bCA/IGlubmVySXRlbVsxXS5zdHlsZS5tYXJnaW5SaWdodCA9IG1yZ24gOiBpbm5lckl0ZW1bMV0uc3R5bGUubWFyZ2luTGVmdCA9IG1yZ247XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnRiYXJJdGVtQWxpZ24gPSBmdW5jdGlvbiAoaXRlbSwgaXRlbUVsZSwgcG9zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGFsaWduRGl2ID0gW107XG4gICAgICAgICAgICBhbGlnbkRpdi5wdXNoKGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19UQkFSTEVGVCB9KSk7XG4gICAgICAgICAgICBhbGlnbkRpdi5wdXNoKGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19UQkFSQ0VOVEVSIH0pKTtcbiAgICAgICAgICAgIGFsaWduRGl2LnB1c2goZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX1RCQVJSSUdIVCB9KSk7XG4gICAgICAgICAgICBpZiAocG9zID09PSAwICYmIGl0ZW0uYWxpZ24gIT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIGFsaWduRGl2LmZvckVhY2goZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtRWxlLmFwcGVuZENoaWxkKGVsZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YmFyQWxpZ24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGl0ZW1FbGUsIENMU19UQkFSUE9TKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0uYWxpZ24gIT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIHZhciBhbGlnbkVsZSA9IGl0ZW1FbGUuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICB2YXIgbGVmdEFsaWduXzEgPSBhbGlnbkRpdlswXTtcbiAgICAgICAgICAgICAgICBbXS5zbGljZS5jYWxsKGFsaWduRWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50YmFyQWxnRWxlLmxlZnRzLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0QWxpZ25fMS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaXRlbUVsZS5hcHBlbmRDaGlsZChsZWZ0QWxpZ25fMSk7XG4gICAgICAgICAgICAgICAgaXRlbUVsZS5hcHBlbmRDaGlsZChhbGlnbkRpdlsxXSk7XG4gICAgICAgICAgICAgICAgaXRlbUVsZS5hcHBlbmRDaGlsZChhbGlnbkRpdlsyXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YmFyQWxpZ24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGl0ZW1FbGUsIENMU19UQkFSUE9TKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuY3RybFRlbXBsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY3RybFRlbSA9IHRoaXMudHJndEVsZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnRyZ3RFbGUsIENMU19JVEVNUyk7XG4gICAgICAgICAgICB0aGlzLnRiYXJFbGUgPSBbXTtcbiAgICAgICAgICAgIHZhciBpbm5lckVsZSA9IFtdLnNsaWNlLmNhbGwodGhpcy50cmd0RWxlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGlubmVyRWxlLmZvckVhY2goZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChlbGUudGFnTmFtZSA9PT0gJ0RJVicpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudGJhckVsZS5wdXNoKGVsZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkKGVsZSwgQ0xTX0lURU0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5yZW5kZXJJdGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgaXRlbUVsZURvbTtcbiAgICAgICAgICAgIHZhciBpbm5lckl0ZW07XG4gICAgICAgICAgICB2YXIgaW5uZXJQb3M7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICAgICAgaWYgKGVsZSAmJiBlbGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1FbGVEb20gPSBlbGUucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTVMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudHJndEVsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHJsVGVtcGxhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZSAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtRWxlRG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1FbGVEb20gPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfSVRFTVMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJJdGVtID0gdGhpcy5yZW5kZXJTdWJDb21wb25lbnQoaXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyRWxlLmluZGV4T2YoaW5uZXJJdGVtKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGJhckVsZS5wdXNoKGlubmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRiYXJBbGlnbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YmFySXRlbUFsaWduKGl0ZW1zW2ldLCBpdGVtRWxlRG9tLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbm5lclBvcyA9IGl0ZW1FbGVEb20ucXVlcnlTZWxlY3RvcignLmUtdG9vbGJhci0nICsgaXRlbXNbaV0uYWxpZ24udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbm5lclBvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YmFyQWxnRWxlWyhpdGVtc1tpXS5hbGlnbiArICdzJyldLnB1c2goaW5uZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyUG9zLmFwcGVuZENoaWxkKGlubmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRWxlRG9tLmFwcGVuZENoaWxkKGlubmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlLmFwcGVuZENoaWxkKGl0ZW1FbGVEb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5zZXRBdHRyID0gZnVuY3Rpb24gKGF0dHIsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBPYmplY3Qua2V5cyhhdHRyKTtcbiAgICAgICAgICAgIHZhciBrZXlWYWw7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGtleVZhbCA9IGtleVtpXTtcbiAgICAgICAgICAgICAgICBrZXlWYWwgPT09ICdjbGFzcycgPyB0aGlzLmFkZChlbGVtZW50LCBhdHRyW2tleVZhbF0pIDogZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5VmFsLCBhdHRyW2tleVZhbF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5lbmFibGVJdGVtcyA9IGZ1bmN0aW9uIChpdGVtcywgaXNFbmFibGUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGl0ZW1zO1xuICAgICAgICAgICAgdmFyIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGlzRW5hYmxlKSkge1xuICAgICAgICAgICAgICAgIGlzRW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlbmFibGUgPSBmdW5jdGlvbiAoaXNFbmFibGUsIGVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0VuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKENMU19ESVNBQkxFKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChsZW4gJiYgbGVuID4gMSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnRzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlKGlzRW5hYmxlLCBlbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpc0VuYWJsZSA/IGVqMl9iYXNlXzIucmVtb3ZlQ2xhc3MoZWxlbWVudHMsIENMU19ESVNBQkxFKSA6IGVqMl9iYXNlXzIuYWRkQ2xhc3MoZWxlbWVudHMsIENMU19ESVNBQkxFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbGUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgZWxlID0gKGxlbiAmJiBsZW4gPT09IDEpID8gZWxlbWVudHNbMF0gOiBpdGVtcztcbiAgICAgICAgICAgICAgICBlbmFibGUoaXNFbmFibGUsIGVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmFkZEl0ZW1zID0gZnVuY3Rpb24gKGl0ZW1zLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGlubmVySXRlbXM7XG4gICAgICAgICAgICB2YXIgaXRlbXNEaXYgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSVRFTVMpO1xuICAgICAgICAgICAgdmFyIGlubmVyRWxlO1xuICAgICAgICAgICAgdmFyIGl0ZW1BZ24gPSAnbGVmdCc7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGUuYWxpZ24pICYmIGUuYWxpZ24gIT09ICdsZWZ0JyAmJiBpdGVtQWduID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUFnbiA9IGUuYWxpZ247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGl0ZW1zXzEgPSBpdGVtczsgX2kgPCBpdGVtc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNfMVtfaV07XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoaXRlbS50eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPSAnQnV0dG9uJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5uZXJJdGVtcyA9IGVqMl9iYXNlXzMuc2VsZWN0QWxsKCcuJyArIENMU19JVEVNLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGl0ZW0uYWxpZ24gPSBpdGVtQWduO1xuICAgICAgICAgICAgICAgIGlubmVyRWxlID0gdGhpcy5yZW5kZXJTdWJDb21wb25lbnQoaXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGJhckVsZS5sZW5ndGggPj0gaW5kZXggJiYgaW5uZXJJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveU1vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxnSW5kZXggPSBpdGVtLmFsaWduWzBdID09PSAnbCcgPyAwIDogaXRlbS5hbGlnblswXSA9PT0gJ2MnID8gMSA6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlID0gZWoyX2Jhc2VfMi5jbG9zZXN0KGlubmVySXRlbXNbMF0sICcuJyArIENMU19JVEVNUykuY2hpbGRyZW5bYWxnSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlLmluc2VydEJlZm9yZShpbm5lckVsZSwgZWxlLmNoaWxkcmVuW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRiYXJBbGdFbGVbKGl0ZW0uYWxpZ24gKyAncycpXS5zcGxpY2UoaW5kZXgsIDAsIGlubmVyRWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFBvc2l0aW9uaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckl0ZW1zWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGlubmVyRWxlLCBpbm5lckl0ZW1zW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRiYXJFbGUuc3BsaWNlKGluZGV4LCAwLCBpbm5lckVsZSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0V2lkID0gaXRlbXNEaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbXNEaXYuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICAgIHRoaXMucmVuZGVyT3ZlcmZsb3dNb2RlKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnJlbW92ZUl0ZW1zID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGFyZ3M7XG4gICAgICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgICAgICB2YXIgaW5uZXJJdGVtcyA9IFtdLnNsaWNlLmNhbGwoZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX0lURU0sIHRoaXMuZWxlbWVudCkpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoZWxlbWVudHMpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoYXJncy50b1N0cmluZygpLCAxMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtQnlJbmRleChpbmRleCwgaW5uZXJJdGVtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gW10uc2xpY2UuY2FsbChlbGVtZW50cyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLnRiYXJFbGUuaW5kZXhPZihlbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtQnlJbmRleChpbmRleCwgaW5uZXJJdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckl0ZW1zID0gZWoyX2Jhc2VfMy5zZWxlY3RBbGwoJy4nICsgQ0xTX0lURU0sIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGUgPSAoZWxlbWVudHMgJiYgZWxlbWVudHMubGVuZ3RoICYmIGVsZW1lbnRzLmxlbmd0aCA9PT0gMSkgPyBlbGVtZW50c1swXSA6IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaW5uZXJJdGVtcy5pbmRleE9mKGVsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbUJ5SW5kZXgoaW5kZXgsIGlubmVySXRlbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLnJlbW92ZUl0ZW1CeUluZGV4ID0gZnVuY3Rpb24gKGluZGV4LCBpbm5lckl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YmFyRWxlW2luZGV4XSAmJiBpbm5lckl0ZW1zW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVJZHggPSB0aGlzLnRiYXJFbGUuaW5kZXhPZihpbm5lckl0ZW1zW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGJhckFsaWduKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleEFnbiA9IHRoaXMudGJhckFsZ0VsZVsodGhpcy5pdGVtc1tlbGVJZHhdLmFsaWduICsgJ3MnKV0uaW5kZXhPZih0aGlzLnRiYXJFbGVbZWxlSWR4XSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGJhckFsZ0VsZVsodGhpcy5pdGVtc1tlbGVJZHhdLmFsaWduICsgJ3MnKV0uc3BsaWNlKGluZGV4QWduLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5kZXRhY2goaW5uZXJJdGVtc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGVsZUlkeCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YmFyRWxlLnNwbGljZShlbGVJZHgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS50ZW1wbGF0ZVJlbmRlciA9IGZ1bmN0aW9uICh0ZW1wbGF0ZVByb3AsIGlubmVyRWxlLCBpdGVtKSB7XG4gICAgICAgICAgICB2YXIgaXRlbVR5cGUgPSBpdGVtLnR5cGU7XG4gICAgICAgICAgICB2YXIgZWxlT2JqID0gdGVtcGxhdGVQcm9wO1xuICAgICAgICAgICAgdmFyIGlzQ29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGVtcGxhdGVQcm9wKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpc0NvbXBvbmVudCA9IHR5cGVvZiAoZWxlT2JqLmFwcGVuZFRvKSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRlbXBsYXRlUHJvcCkgPT09ICdzdHJpbmcnIHx8ICFpc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZUZuID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciB2YWwgPSB0ZW1wbGF0ZVByb3A7XG4gICAgICAgICAgICAgICAgdmFsID0gKHR5cGVvZiAodGVtcGxhdGVQcm9wKSA9PT0gJ3N0cmluZycpID8gdGVtcGxhdGVQcm9wLnRyaW0oKSA6IHRlbXBsYXRlUHJvcDtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh2YWwpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlRm4gPSBlajJfYmFzZV80LmNvbXBpbGUoZWxlLm91dGVySFRNTC50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5kZXRhY2goZWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUZuID0gZWoyX2Jhc2VfNC5jb21waWxlKHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0ZW1wbGF0ZUZuKSAmJiB0ZW1wbGF0ZUZuKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBbXS5zbGljZS5jYWxsKHRlbXBsYXRlRm4oKSkuZm9yRWFjaChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoZWxlLnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyRWxlLmFwcGVuZENoaWxkKGVsZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW1UeXBlID09PSAnSW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZSA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpdGVtLmlkID8gKGVsZS5pZCA9IGl0ZW0uaWQpIDogKGVsZS5pZCA9IGVqMl9iYXNlXzQuZ2V0VW5pcXVlSUQoJ3Rici1pcHQnKSk7XG4gICAgICAgICAgICAgICAgaW5uZXJFbGUuYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICAgICAgICAgICAgICBlbGVPYmouYXBwZW5kVG8oZWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkKGlubmVyRWxlLCBDTFNfVEVNUExBVEUpO1xuICAgICAgICAgICAgdGhpcy50YmFyRWxlLnB1c2goaW5uZXJFbGUpO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5idXR0b25SZW5kZXJpbmcgPSBmdW5jdGlvbiAoaXRlbSwgaW5uZXJFbGUpIHtcbiAgICAgICAgICAgIHZhciBkb20gPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3NOYW1lOiBDTFNfVEJBUkJUTiB9KTtcbiAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICB2YXIgdGV4dFN0ciA9IGl0ZW0udGV4dDtcbiAgICAgICAgICAgIHZhciBpY29uQ3NzO1xuICAgICAgICAgICAgdmFyIGljb25Qb3M7XG4gICAgICAgICAgICBpdGVtLmlkID8gKGRvbS5pZCA9IGl0ZW0uaWQpIDogZG9tLmlkID0gZWoyX2Jhc2VfNC5nZXRVbmlxdWVJRCgnZS10YnItYnRuJyk7XG4gICAgICAgICAgICB2YXIgYnRuVHh0ID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ2UtdGJhci1idG4tdGV4dCcgfSk7XG4gICAgICAgICAgICBpZiAodGV4dFN0cikge1xuICAgICAgICAgICAgICAgIGJ0blR4dC5pbm5lckhUTUwgPSB0ZXh0U3RyO1xuICAgICAgICAgICAgICAgIGRvbS5hcHBlbmRDaGlsZChidG5UeHQpO1xuICAgICAgICAgICAgICAgIGRvbS5jbGFzc0xpc3QuYWRkKCdlLXRidG4tdHh0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChpbm5lckVsZSwgJ2UtdGJ0bi1hbGlnbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0ucHJlZml4SWNvbiB8fCBpdGVtLnN1ZmZpeEljb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoKGl0ZW0ucHJlZml4SWNvbiAmJiBpdGVtLnN1ZmZpeEljb24pIHx8IGl0ZW0ucHJlZml4SWNvbikge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ3NzID0gaXRlbS5wcmVmaXhJY29uICsgJyBlLWljb25zJztcbiAgICAgICAgICAgICAgICAgICAgaWNvblBvcyA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25Dc3MgPSBpdGVtLnN1ZmZpeEljb24gKyAnIGUtaWNvbnMnO1xuICAgICAgICAgICAgICAgICAgICBpY29uUG9zID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXcgZWoyX2J1dHRvbnNfMS5CdXR0b24oeyBpY29uQ3NzOiBpY29uQ3NzLCBpY29uUG9zaXRpb246IGljb25Qb3MgfSwgZG9tKTtcbiAgICAgICAgICAgIGlmIChpdGVtLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZShkb20sIHsgJ3dpZHRoJzogZWoyX2Jhc2VfNC5mb3JtYXRVbml0KGl0ZW0ud2lkdGgpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUucmVuZGVyU3ViQ29tcG9uZW50ID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBpbm5lckVsZTtcbiAgICAgICAgICAgIHZhciBkb207XG4gICAgICAgICAgICBpbm5lckVsZSA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19JVEVNIH0pO1xuICAgICAgICAgICAgaW5uZXJFbGUuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGJhckVsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGJhckVsZSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uaHRtbEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHIoaXRlbS5odG1sQXR0cmlidXRlcywgaW5uZXJFbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0udG9vbHRpcFRleHQpIHtcbiAgICAgICAgICAgICAgICBpbm5lckVsZS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgaXRlbS50b29sdGlwVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5jc3NDbGFzcykge1xuICAgICAgICAgICAgICAgIGlubmVyRWxlLmNsYXNzTmFtZSA9IGlubmVyRWxlLmNsYXNzTmFtZSArICcgJyArIGl0ZW0uY3NzQ2xhc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGVSZW5kZXIoaXRlbS50ZW1wbGF0ZSwgaW5uZXJFbGUsIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQnV0dG9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbSA9IHRoaXMuYnV0dG9uUmVuZGVyaW5nKGl0ZW0sIGlubmVyRWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckVsZS5hcHBlbmRDaGlsZChkb20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJFbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLml0ZW1DbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdTZXBhcmF0b3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQoaW5uZXJFbGUsIENMU19TRVBBUkFUT1IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uc2hvd1RleHRPbikge1xuICAgICAgICAgICAgICAgIHZhciBzVHh0ID0gaXRlbS5zaG93VGV4dE9uO1xuICAgICAgICAgICAgICAgIGlmIChzVHh0ID09PSAnVG9vbGJhcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQoaW5uZXJFbGUsIENMU19QT1BVUFRFWFQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZChpbm5lckVsZSwgJ2UtdGJ0bi1hbGlnbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzVHh0ID09PSAnT3ZlcmZsb3cnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKGlubmVyRWxlLCBDTFNfVEJBUlRFWFQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLm92ZXJmbG93KSB7XG4gICAgICAgICAgICAgICAgdmFyIG92ZXJmbG93ID0gaXRlbS5vdmVyZmxvdztcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmZsb3cgPT09ICdTaG93Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZChpbm5lckVsZSwgQ0xTX1RCQVJPVkVSRkxPVyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG92ZXJmbG93ID09PSAnSGlkZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbm5lckVsZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1NFUEFSQVRPUikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKGlubmVyRWxlLCBDTFNfUE9QT1ZFUkZMT1cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlubmVyRWxlO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5pdGVtQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbGVTd2l0Y2goZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUuYWN0aXZlRWxlU3dpdGNoID0gZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbGVSZW1vdmUoZWxlLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRWxlLmZvY3VzKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmFjdGl2ZUVsZVJlbW92ZSA9IGZ1bmN0aW9uIChjdXJFbGUpIHtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLmFjdGl2ZUVsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUVsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUVsZSA9IGN1ckVsZTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudHJndEVsZSkgJiYgIWN1ckVsZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEVNUExBVEUpKSB7XG4gICAgICAgICAgICAgICAgY3VyRWxlLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlRWxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5nZXRQZXJzaXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE9uUGVyc2lzdChbXSk7XG4gICAgICAgIH07XG4gICAgICAgIFRvb2xiYXIucHJvdG90eXBlLmdldE1vZHVsZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Rvb2xiYXInO1xuICAgICAgICB9O1xuICAgICAgICBUb29sYmFyLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgdGhpcy50YlJlc2l6ZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1Qb3NpdGlvbmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucG9wT2JqKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BPYmouaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNoZWNrT3ZlcmZsb3cgPSB0aGlzLmNoZWNrT3ZlcmZsb3coZWxlLCBlbGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShDTFNfSVRFTVMpWzBdKTtcbiAgICAgICAgICAgIGlmICghY2hlY2tPdmVyZmxvdykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUhTY3JvbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGVja092ZXJmbG93ICYmIHRoaXMuc2Nyb2xsTW9kdWxlICYmICh0aGlzLm9mZnNldFdpZCA9PT0gZWxlLm9mZnNldFdpZHRoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9mZnNldFdpZCA+IGVsZS5vZmZzZXRXaWR0aCB8fCBjaGVja092ZXJmbG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJPdmVyZmxvd01vZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvcE9iaikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRiYXJBbGlnbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVBvc2l0aW9uaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBSZWZyZXNoKHRoaXMucG9wT2JqLmVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YmFyQWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoUG9zaXRpb25pbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9mZnNldFdpZCA9IGVsZS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMudGJSZXNpemUgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgVG9vbGJhci5wcm90b3R5cGUub25Qcm9wZXJ0eUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3UHJvcCwgb2xkUHJvcCkge1xuICAgICAgICAgICAgdmFyIHRFbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobmV3UHJvcCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW1zJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveU1vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUl0ZW1zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckl0ZW1zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck92ZXJmbG93TW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dpZHRoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3aWQgPSB0RWxlLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZSh0RWxlLCB7ICd3aWR0aCc6IGVqMl9iYXNlXzQuZm9ybWF0VW5pdChuZXdQcm9wLndpZHRoKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyT3ZlcmZsb3dNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3BPYmogJiYgd2lkIDwgdEVsZS5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBSZWZyZXNoKHRoaXMucG9wT2JqLmVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdoZWlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5zZXRTdHlsZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQsIHsgJ2hlaWdodCc6IGVqMl9iYXNlXzQuZm9ybWF0VW5pdChuZXdQcm9wLmhlaWdodCkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3ZlcmZsb3dNb2RlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveU1vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyT3ZlcmZsb3dNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmFibGVSdGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZCh0RWxlLCBDTFNfUlRMKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVSdGwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcC5lbmFibGVSdGwgPyB0aGlzLmFkZCh0RWxlLCBDTFNfUlRMKSA6IHRoaXMucmVtb3ZlKHRFbGUsIENMU19SVEwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuc2Nyb2xsTW9kdWxlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3AuZW5hYmxlUnRsID8gdGhpcy5hZGQodGhpcy5zY3JvbGxNb2R1bGUuZWxlbWVudCwgQ0xTX1JUTCkgOiB0aGlzLnJlbW92ZSh0aGlzLnNjcm9sbE1vZHVsZS5lbGVtZW50LCBDTFNfUlRMKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLnBvcE9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9wLmVuYWJsZVJ0bCA/IHRoaXMuYWRkKHRoaXMucG9wT2JqLmVsZW1lbnQsIENMU19SVEwpIDogdGhpcy5yZW1vdmUodGhpcy5wb3BPYmouZWxlbWVudCwgQ0xTX1JUTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBUb29sYmFyO1xuICAgIH0oZWoyX2Jhc2VfMS5Db21wb25lbnQpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfNC5Db2xsZWN0aW9uKFtdLCBJdGVtKVxuICAgIF0sIFRvb2xiYXIucHJvdG90eXBlLCBcIml0ZW1zXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ2F1dG8nKVxuICAgIF0sIFRvb2xiYXIucHJvdG90eXBlLCBcIndpZHRoXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ2F1dG8nKVxuICAgIF0sIFRvb2xiYXIucHJvdG90eXBlLCBcImhlaWdodFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdTY3JvbGxhYmxlJylcbiAgICBdLCBUb29sYmFyLnByb3RvdHlwZSwgXCJvdmVyZmxvd01vZGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBUb29sYmFyLnByb3RvdHlwZSwgXCJlbmFibGVSdGxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgVG9vbGJhci5wcm90b3R5cGUsIFwiY2xpY2tlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBUb29sYmFyLnByb3RvdHlwZSwgXCJjcmVhdGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIFRvb2xiYXIucHJvdG90eXBlLCBcImRlc3Ryb3llZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBUb29sYmFyLnByb3RvdHlwZSwgXCJiZWZvcmVDcmVhdGVcIiwgdm9pZCAwKTtcbiAgICBUb29sYmFyID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzUuTm90aWZ5UHJvcGVydHlDaGFuZ2VzXG4gICAgXSwgVG9vbGJhcik7XG4gICAgZXhwb3J0cy5Ub29sYmFyID0gVG9vbGJhcjtcbiAgICBleHBvcnRzLnRvb2xiYXJCdWlsZGVyID0gZWoyX2Jhc2VfNS5DcmVhdGVCdWlsZGVyKFRvb2xiYXIpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90b29sYmFyL3Rvb2xiYXIuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1wb3B1cHNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHN5bmNmdXNpb24vZWoyLWJ1dHRvbnNcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2FjY29yZGlvblwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGFjY29yZGlvbl8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChhY2NvcmRpb25fMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjY29yZGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIsIGVqMl9iYXNlXzMsIGVqMl9iYXNlXzQsIGVqMl9iYXNlXzUsIGVqMl9iYXNlXzYpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgdmFyIENMU19BQ1JETl9ST09UID0gJ2UtYWNyZG4tcm9vdCc7XG4gICAgdmFyIENMU19ST09UID0gJ2UtYWNjb3JkaW9uJztcbiAgICB2YXIgQ0xTX0lURU0gPSAnZS1hY3Jkbi1pdGVtJztcbiAgICB2YXIgQ0xTX0lURU1GT0NVUyA9ICdlLWl0ZW0tZm9jdXMnO1xuICAgIHZhciBDTFNfSVRFTUhJREUgPSAnZS1oaWRlJztcbiAgICB2YXIgQ0xTX0hFQURFUiA9ICdlLWFjcmRuLWhlYWRlcic7XG4gICAgdmFyIENMU19IRUFERVJJQ04gPSAnZS1hY3Jkbi1oZWFkZXItaWNvbic7XG4gICAgdmFyIENMU19IRUFERVJDVE4gPSAnZS1hY3Jkbi1oZWFkZXItY29udGVudCc7XG4gICAgdmFyIENMU19DT05URU5UID0gJ2UtYWNyZG4tcGFuZWwnO1xuICAgIHZhciBDTFNfQ1RFTlQgPSAnZS1jb250ZW50JztcbiAgICB2YXIgQ0xTX1RPT0dMRUlDTiA9ICdlLXRvZ2dsZS1pY29uJztcbiAgICB2YXIgQ0xTX0NPTExBUFNFSUNOID0gJ2UtdGdsLWNvbGxhcHNlLWljb24gZS1pY29ucyc7XG4gICAgdmFyIENMU19FWFBBTkRJQ04gPSAnZS1leHBhbmQtaWNvbic7XG4gICAgdmFyIENMU19SVEwgPSAnZS1ydGwnO1xuICAgIHZhciBDTFNfQ1ROSElERSA9ICdlLWNvbnRlbnQtaGlkZSc7XG4gICAgdmFyIENMU19TTENUID0gJ2Utc2VsZWN0JztcbiAgICB2YXIgQ0xTX1NMQ1RFRCA9ICdlLXNlbGVjdGVkJztcbiAgICB2YXIgQ0xTX0FDVElWRSA9ICdlLWFjdGl2ZSc7XG4gICAgdmFyIENMU19BTklNQVRFID0gJ2UtYW5pbWF0ZSc7XG4gICAgdmFyIENMU19ESVNBQkxFID0gJ2Utb3ZlcmxheSc7XG4gICAgdmFyIENMU19UT0dBTklNQVRFID0gJ2UtdG9nZ2xlLWFuaW1hdGlvbic7XG4gICAgdmFyIENMU19ORVNUID0gJ2UtbmVzdGVkJztcbiAgICB2YXIgQ0xTX0VYUEFORFNUQVRFID0gJ2UtZXhwYW5kLXN0YXRlJztcbiAgICB2YXIgQWNjb3JkaW9uQWN0aW9uU2V0dGluZ3MgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoQWNjb3JkaW9uQWN0aW9uU2V0dGluZ3MsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEFjY29yZGlvbkFjdGlvblNldHRpbmdzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBY2NvcmRpb25BY3Rpb25TZXR0aW5ncztcbiAgICB9KGVqMl9iYXNlXzQuQ2hpbGRQcm9wZXJ0eSkpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdTbGlkZURvd24nKVxuICAgIF0sIEFjY29yZGlvbkFjdGlvblNldHRpbmdzLnByb3RvdHlwZSwgXCJlZmZlY3RcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSg0MDApXG4gICAgXSwgQWNjb3JkaW9uQWN0aW9uU2V0dGluZ3MucHJvdG90eXBlLCBcImR1cmF0aW9uXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ2xpbmVhcicpXG4gICAgXSwgQWNjb3JkaW9uQWN0aW9uU2V0dGluZ3MucHJvdG90eXBlLCBcImVhc2luZ1wiLCB2b2lkIDApO1xuICAgIGV4cG9ydHMuQWNjb3JkaW9uQWN0aW9uU2V0dGluZ3MgPSBBY2NvcmRpb25BY3Rpb25TZXR0aW5ncztcbiAgICB2YXIgQWNjb3JkaW9uQW5pbWF0aW9uU2V0dGluZ3MgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoQWNjb3JkaW9uQW5pbWF0aW9uU2V0dGluZ3MsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEFjY29yZGlvbkFuaW1hdGlvblNldHRpbmdzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBY2NvcmRpb25BbmltYXRpb25TZXR0aW5ncztcbiAgICB9KGVqMl9iYXNlXzQuQ2hpbGRQcm9wZXJ0eSkpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV81LkNvbXBsZXgoeyBlZmZlY3Q6ICdTbGlkZVVwJywgZHVyYXRpb246IDQwMCwgZWFzaW5nOiAnbGluZWFyJyB9LCBBY2NvcmRpb25BY3Rpb25TZXR0aW5ncylcbiAgICBdLCBBY2NvcmRpb25BbmltYXRpb25TZXR0aW5ncy5wcm90b3R5cGUsIFwiY29sbGFwc2VcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfNS5Db21wbGV4KHsgZWZmZWN0OiAnU2xpZGVEb3duJywgZHVyYXRpb246IDQwMCwgZWFzaW5nOiAnbGluZWFyJyB9LCBBY2NvcmRpb25BY3Rpb25TZXR0aW5ncylcbiAgICBdLCBBY2NvcmRpb25BbmltYXRpb25TZXR0aW5ncy5wcm90b3R5cGUsIFwiZXhwYW5kXCIsIHZvaWQgMCk7XG4gICAgZXhwb3J0cy5BY2NvcmRpb25BbmltYXRpb25TZXR0aW5ncyA9IEFjY29yZGlvbkFuaW1hdGlvblNldHRpbmdzO1xuICAgIHZhciBBY2NvcmRpb25JdGVtID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEFjY29yZGlvbkl0ZW0sIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEFjY29yZGlvbkl0ZW0oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFjY29yZGlvbkl0ZW07XG4gICAgfShlajJfYmFzZV80LkNoaWxkUHJvcGVydHkpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSh1bmRlZmluZWQpXG4gICAgXSwgQWNjb3JkaW9uSXRlbS5wcm90b3R5cGUsIFwiY29udGVudFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KHVuZGVmaW5lZClcbiAgICBdLCBBY2NvcmRpb25JdGVtLnByb3RvdHlwZSwgXCJoZWFkZXJcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSh1bmRlZmluZWQpXG4gICAgXSwgQWNjb3JkaW9uSXRlbS5wcm90b3R5cGUsIFwiY3NzQ2xhc3NcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSh1bmRlZmluZWQpXG4gICAgXSwgQWNjb3JkaW9uSXRlbS5wcm90b3R5cGUsIFwiaWNvbkNzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIEFjY29yZGlvbkl0ZW0ucHJvdG90eXBlLCBcImV4cGFuZGVkXCIsIHZvaWQgMCk7XG4gICAgZXhwb3J0cy5BY2NvcmRpb25JdGVtID0gQWNjb3JkaW9uSXRlbTtcbiAgICB2YXIgQWNjb3JkaW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEFjY29yZGlvbiwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQWNjb3JkaW9uKG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnQpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy5rZXlDb25maWdzID0ge1xuICAgICAgICAgICAgICAgIG1vdmVVcDogJ3VwYXJyb3cnLFxuICAgICAgICAgICAgICAgIG1vdmVEb3duOiAnZG93bmFycm93JyxcbiAgICAgICAgICAgICAgICBlbnRlcjogJ2VudGVyJyxcbiAgICAgICAgICAgICAgICBzcGFjZTogJ3NwYWNlJyxcbiAgICAgICAgICAgICAgICBob21lOiAnaG9tZScsXG4gICAgICAgICAgICAgICAgZW5kOiAnZW5kJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudW53aXJlRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLmlzRGVzdHJveSA9IHRydWU7XG4gICAgICAgICAgICB3aGlsZSAoZWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBlbGUucmVtb3ZlQ2hpbGQoZWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudHJndEVsZSkge1xuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmN0cmxUZW0uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuYXBwZW5kQ2hpbGQodGhpcy5jdHJsVGVtLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICBbJ2FyaWEtZGlzYWJsZWQnLCAnYXJpYS1tdWx0aXNlbGVjdGFibGUnLCAncm9sZSddLmZvckVhY2goZnVuY3Rpb24gKGF0dHJiKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUucHJlUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5lc3RlZCA9IGVqMl9iYXNlXzMuY2xvc2VzdCh0aGlzLmVsZW1lbnQsICcuJyArIENMU19DT05URU5UKTtcbiAgICAgICAgICAgIHRoaXMuaXNOZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Rlc3Ryb3kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVzdHJveSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKG5lc3RlZCkpIHtcbiAgICAgICAgICAgICAgICBuZXN0ZWQuY2xhc3NMaXN0LmFkZChDTFNfTkVTVCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc05lc3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTFNfQUNSRE5fUk9PVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVSdGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZCh0aGlzLmVsZW1lbnQsIENMU19SVEwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEl0ZW1zID0gW107XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGVsZSwgdmFsKSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZCh2YWwpO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChlbGUsIHZhbCkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUodmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ29udHJvbCgpO1xuICAgICAgICAgICAgdGhpcy53aXJlRXZlbnRzKCk7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IGVqMl9iYXNlXzYuZm9ybWF0VW5pdCh0aGlzLndpZHRoKTtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBlajJfYmFzZV82LmZvcm1hdFVuaXQodGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfNS5zZXRTdHlsZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQsIHsgJ3dpZHRoJzogd2lkdGgsICdoZWlnaHQnOiBoZWlnaHQgfSk7XG4gICAgICAgICAgICB2YXIgYXJpYUF0dHIgPSB7XG4gICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAnZmFsc2UnLCAncm9sZSc6ICdwcmVzZW50YXRpb24nLCAnYXJpYS1tdWx0aXNlbGVjdGFibGUnOiAndHJ1ZSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGhpcy5leHBhbmRlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRFeHBhbmQgPSB0aGlzLmV4cGFuZGVkSXRlbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCBhcmlhQXR0cik7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBhbmRNb2RlID09PSAnU2luZ2xlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUucmVuZGVyQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudHJndEVsZSA9ICh0aGlzLmVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkgPyBlajJfYmFzZV8zLnNlbGVjdCgnZGl2JywgdGhpcy5lbGVtZW50KSA6IG51bGw7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckl0ZW1zKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRJdGVtRXhwYW5kKCk7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUudW53aXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMua2V5TW9kdWxlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5TW9kdWxlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS53aXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTmVzdGVkICYmICF0aGlzLmlzRGVzdHJveSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEucmlwcGxlRWZmZWN0KHRoaXMuZWxlbWVudCwgeyBzZWxlY3RvcjogJy4nICsgQ0xTX0hFQURFUiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5pc05lc3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5TW9kdWxlID0gbmV3IGVqMl9iYXNlXzEuS2V5Ym9hcmRFdmVudHModGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIGtleUFjdGlvbjogdGhpcy5rZXlBY3Rpb25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGtleUNvbmZpZ3M6IHRoaXMua2V5Q29uZmlncyxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lOiAna2V5ZG93bidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5mb2N1c0luID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTFNfSVRFTUZPQ1VTKTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5mb2N1c091dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0lURU1GT0NVUyk7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuY3RybFRlbXBsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY3RybFRlbSA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB2YXIgaW5uZXJFbGVzID0gdGhpcy5lbGVtZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgICBlajJfYmFzZV8zLmFkZENsYXNzKGlubmVyRWxlcywgW0NMU19JVEVNXSk7XG4gICAgICAgICAgICBbXS5zbGljZS5jYWxsKGlubmVyRWxlcykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5pZCA9IGVqMl9iYXNlXzIuZ2V0VW5pcXVlSUQoJ2FjcmRuX2l0ZW0nKTtcbiAgICAgICAgICAgICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGQoZWwuY2hpbGRyZW5bMF0sIENMU19IRUFERVIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGVhZGVyID0gZWwuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyhoZWFkZXIsIHsgJ3RhYmluZGV4JzogJzAnLCAncm9sZSc6ICdoZWFkaW5nJywgJ2FyaWEtbGV2ZWwnOiBpbm5lckVsZXMubGVuZ3RoLnRvU3RyaW5nKCkgfSk7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5pZCA9IGVqMl9iYXNlXzIuZ2V0VW5pcXVlSUQoJ2FjcmRuX2hlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQoaGVhZGVyLCAnZm9jdXMnLCBfdGhpcy5mb2N1c0luLCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuRXZlbnRIYW5kbGVyLmFkZChoZWFkZXIsICdibHVyJywgX3RoaXMuZm9jdXNPdXQsIF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlYWRlckVsZSA9IGhlYWRlci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRlckVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyRWxlLmNsYXNzTGlzdC5hZGQoQ0xTX0hFQURFUkNUTik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IGVsLmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5pZCA9IGVqMl9iYXNlXzIuZ2V0VW5pcXVlSUQoJ2FjcmRuX3BhbmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJywgY29udGVudC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoQ0xTX1NMQ1QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2hpbGRyZW5bMF0uYXBwZW5kQ2hpbGQoX3RoaXMudG9nZ2xlSWNvbkdlbmVyYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5jbGFzc0xpc3QoY29udGVudCwgW0NMU19DT05URU5ULCBDTFNfQ1ROSElERV0sIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyhjb250ZW50LCB7ICdhcmlhLWxhYmVsbGVkYnknOiBoZWFkZXIuaWQsICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoQ0xTX0NURU5UKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLnRvZ2dsZUljb25HZW5lcmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0Z2xJY29uID0gZWoyX2Jhc2VfNS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX1RPT0dMRUlDTiB9KTtcbiAgICAgICAgICAgIHZhciBoZHJDb2xJY29uID0gZWoyX2Jhc2VfNS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IENMU19DT0xMQVBTRUlDTiB9KTtcbiAgICAgICAgICAgIHRnbEljb24uYXBwZW5kQ2hpbGQoaGRyQ29sSWNvbik7XG4gICAgICAgICAgICByZXR1cm4gdGdsSWNvbjtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5pbml0SXRlbUV4cGFuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsZW4gPSB0aGlzLmluaXRFeHBhbmQubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGFuZE1vZGUgPT09ICdTaW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRJdGVtKHRydWUsIHRoaXMuaW5pdEV4cGFuZFtsZW4gLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kSXRlbSh0cnVlLCB0aGlzLmluaXRFeHBhbmRbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5yZW5kZXJJdGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgdmFyIGlubmVySXRlbTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuaW5pdEV4cGFuZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRFeHBhbmQgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQodGhpcy50cmd0RWxlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3RybFRlbXBsYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbGUgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVySXRlbSA9IF90aGlzLnJlbmRlcklubmVySXRlbShpdGVtLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZChpbm5lckl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXJJdGVtLmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKGlubmVySXRlbS5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19IRUFERVIpLCAnZm9jdXMnLCBfdGhpcy5mb2N1c0luLCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQoaW5uZXJJdGVtLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0hFQURFUiksICdibHVyJywgX3RoaXMuZm9jdXNPdXQsIF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHRyZ3QgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHZhciBldmVudEFyZ3MgPSB7fTtcbiAgICAgICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgICAgIHZhciB0Z2xJY29uO1xuICAgICAgICAgICAgdmFyIGFjcmRFbGUgPSBlajJfYmFzZV8zLmNsb3Nlc3QodHJndCwgJy4nICsgQ0xTX1JPT1QpO1xuICAgICAgICAgICAgaWYgKGFjcmRFbGUgIT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyZ3QuY2xhc3NMaXN0LmFkZCgnZS10YXJnZXQnKTtcbiAgICAgICAgICAgIHZhciBhY3Jkbkl0ZW0gPSBlajJfYmFzZV8zLmNsb3Nlc3QodHJndCwgJy4nICsgQ0xTX0lURU0pO1xuICAgICAgICAgICAgdmFyIGFjcmRuSGRyID0gZWoyX2Jhc2VfMy5jbG9zZXN0KHRyZ3QsICcuJyArIENMU19IRUFERVIpO1xuICAgICAgICAgICAgdmFyIGFjcmRuQ3RuID0gZWoyX2Jhc2VfMy5jbG9zZXN0KHRyZ3QsICcuJyArIENMU19DT05URU5UKTtcbiAgICAgICAgICAgIGlmIChhY3Jkbkl0ZW0gJiYgKGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoYWNyZG5IZHIpIHx8IGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoYWNyZG5DdG4pKSkge1xuICAgICAgICAgICAgICAgIGFjcmRuSGRyID0gYWNyZG5JdGVtLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIGFjcmRuQ3RuID0gYWNyZG5JdGVtLmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjcmRuSGRyKSB7XG4gICAgICAgICAgICAgICAgdGdsSWNvbiA9IGVqMl9iYXNlXzMuc2VsZWN0KCcuJyArIENMU19UT09HTEVJQ04sIGFjcmRuSGRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhY3JkbkN0bkl0ZW07XG4gICAgICAgICAgICBpZiAoYWNyZG5DdG4pIHtcbiAgICAgICAgICAgICAgICBhY3JkbkN0bkl0ZW0gPSBlajJfYmFzZV8zLmNsb3Nlc3QoYWNyZG5DdG4sICcuJyArIENMU19JVEVNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhY3JkQWN0aXZlID0gW107XG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuZ2V0SW5kZXhCeUl0ZW0oYWNyZG5JdGVtKTtcbiAgICAgICAgICAgIGlmIChhY3JkbkN0bkl0ZW0pIHtcbiAgICAgICAgICAgICAgICBldmVudEFyZ3MuaXRlbSA9IHRoaXMuaXRlbXNbdGhpcy5nZXRJbmRleEJ5SXRlbShhY3JkbkN0bkl0ZW0pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50QXJncy5vcmlnaW5hbEV2ZW50ID0gZTtcbiAgICAgICAgICAgIHZhciBjdG5DaGVjayA9ICFlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKHRnbEljb24pICYmIGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQodGhpcy50cmd0RWxlKSAmJiBhY3Jkbkl0ZW0uY2hpbGRFbGVtZW50Q291bnQgPD0gMTtcbiAgICAgICAgICAgIGlmIChjdG5DaGVjayAmJiAoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChhY3JkbkN0bikgfHwgIWVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoZWoyX2Jhc2VfMy5zZWxlY3QoJy4nICsgQ0xTX0hFQURFUiArICcgLicgKyBDTFNfVE9PR0xFSUNOLCBhY3JkbkN0bkl0ZW0pKSkpIHtcbiAgICAgICAgICAgICAgICBhY3Jkbkl0ZW0uYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50UmVuZGVyaW5nKGluZGV4KSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcmlhQXR0clVwZGF0ZShhY3Jkbkl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGlja2VkJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgIHZhciBjbnRjbGtDaGVjayA9IChhY3JkbkN0biAmJiAhZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChlajJfYmFzZV8zLnNlbGVjdCgnLmUtdGFyZ2V0JywgYWNyZG5DdG4pKSk7XG4gICAgICAgICAgICBjbnRjbGtDaGVjayA9IGNudGNsa0NoZWNrICYmIChlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGVqMl9iYXNlXzMuc2VsZWN0KCcuJyArIENMU19ST09ULCBhY3JkbkN0bikpIHx8ICEoZWoyX2Jhc2VfMy5jbG9zZXN0KHRyZ3QsICcuJyArIENMU19ST09UKSA9PT0gdGhpcy5lbGVtZW50KSk7XG4gICAgICAgICAgICB0cmd0LmNsYXNzTGlzdC5yZW1vdmUoJ2UtdGFyZ2V0Jyk7XG4gICAgICAgICAgICBpZiAodHJndC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0NPTlRFTlQpIHx8IHRyZ3QuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19DVEVOVCkgfHwgY250Y2xrQ2hlY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbXS5zbGljZS5jYWxsKHRoaXMuZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19BQ1RJVkUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjcmRBY3RpdmUucHVzaChlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgYWNyZEFuaUVsZSA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgQ0xTX0lURU0gKyAnIFsnICsgQ0xTX0FOSU1BVEUgKyAnXScpKTtcbiAgICAgICAgICAgIGlmIChhY3JkQW5pRWxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGFjcmRBbmlFbGVfMSA9IGFjcmRBbmlFbGU7IF9pIDwgYWNyZEFuaUVsZV8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBhY3JkQW5pRWxlXzFbX2ldO1xuICAgICAgICAgICAgICAgICAgICBhY3JkQWN0aXZlLnB1c2goZWwucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNhbWVDb250ZW50Q2hlY2sgPSBhY3JkQWN0aXZlLmluZGV4T2YoYWNyZG5DdG5JdGVtKSAhPT0gLTEgJiYgYWNyZG5DdG4uZ2V0QXR0cmlidXRlKCdlLWFuaW1hdGUnKSA9PT0gJ3RydWUnO1xuICAgICAgICAgICAgdmFyIHNhbWVIZWFkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChhY3Jkbkl0ZW0pICYmICFlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGFjcmRuSGRyKSkge1xuICAgICAgICAgICAgICAgIHZhciBhY3JkbkN0bl8xID0gZWoyX2Jhc2VfMy5zZWxlY3QoJy4nICsgQ0xTX0NPTlRFTlQsIGFjcmRuSXRlbSk7XG4gICAgICAgICAgICAgICAgdmFyIGFjcmRuUm9vdCA9IGVqMl9iYXNlXzMuY2xvc2VzdChhY3Jkbkl0ZW0sICcuJyArIENMU19BQ1JETl9ST09UKTtcbiAgICAgICAgICAgICAgICB2YXIgZXhwYW5kU3RhdGUgPSBhY3JkblJvb3QucXVlcnlTZWxlY3RvcignLicgKyBDTFNfRVhQQU5EU1RBVEUpO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGFjcmRuQ3RuXzEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2FtZUhlYWRlciA9IChleHBhbmRTdGF0ZSA9PT0gYWNyZG5JdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMy5pc1Zpc2libGUoYWNyZG5DdG5fMSkgJiYgKCFzYW1lQ29udGVudENoZWNrIHx8IGFjcmRuQ3RuSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1NMQ1RFRCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2UoYWNyZG5DdG5fMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGFjcmRBY3RpdmUubGVuZ3RoID4gMCkgJiYgdGhpcy5leHBhbmRNb2RlID09PSAnU2luZ2xlJyAmJiAhc2FtZUNvbnRlbnRDaGVjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNyZEFjdGl2ZS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbGxhcHNlKGVqMl9iYXNlXzMuc2VsZWN0KCcuJyArIENMU19DT05URU5ULCBlbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0VYUEFORFNUQVRFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kKGFjcmRuQ3RuXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoZXhwYW5kU3RhdGUpICYmICFzYW1lSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZFN0YXRlLmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0VYUEFORFNUQVRFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuZWxlTW92ZUZvY3VzID0gZnVuY3Rpb24gKGFjdGlvbiwgcm9vdCwgdHJndCkge1xuICAgICAgICAgICAgdmFyIGNsc3Q7XG4gICAgICAgICAgICB2YXIgY2xzdEl0ZW0gPSBlajJfYmFzZV8zLmNsb3Nlc3QodHJndCwgJy4nICsgQ0xTX0lURU0pO1xuICAgICAgICAgICAgaWYgKHRyZ3QgPT09IHJvb3QpIHtcbiAgICAgICAgICAgICAgICBjbHN0ID0gKChhY3Rpb24gPT09ICdtb3ZlVXAnID8gdHJndC5sYXN0RWxlbWVudENoaWxkIDogdHJndCkucXVlcnlTZWxlY3RvcignLicgKyBDTFNfSEVBREVSKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0cmd0LmNsYXNzTGlzdC5jb250YWlucyhDTFNfSEVBREVSKSkge1xuICAgICAgICAgICAgICAgIGNsc3RJdGVtID0gKGFjdGlvbiA9PT0gJ21vdmVVcCcgPyBjbHN0SXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIDogY2xzdEl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICBpZiAoY2xzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzdCA9IGVqMl9iYXNlXzMuc2VsZWN0KCcuJyArIENMU19IRUFERVIsIGNsc3RJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2xzdCkge1xuICAgICAgICAgICAgICAgIGNsc3QuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5rZXlBY3Rpb25IYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBjbHN0O1xuICAgICAgICAgICAgdmFyIHJvb3QgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgdHJndCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgICBzd2l0Y2ggKGUuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZVVwJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVNb3ZlRm9jdXMoZS5hY3Rpb24sIHJvb3QsIHRyZ3QpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtb3ZlRG93bic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlTW92ZUZvY3VzKGUuYWN0aW9uLCByb290LCB0cmd0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BhY2UnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2VudGVyJzpcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IHRyZ3QubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoY29udGVudCkgJiYgY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0NPTlRFTlQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudC5nZXRBdHRyaWJ1dGUoJ2UtYW5pbWF0ZScpICE9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmd0LmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmd0LmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgY2xzdCA9IGUuYWN0aW9uID09PSAnaG9tZScgPyByb290LmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuWzBdIDogcm9vdC5sYXN0RWxlbWVudENoaWxkLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICBjbHN0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmhlYWRlckVsZUdlbmVyYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhlYWRlciA9IGVqMl9iYXNlXzUuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19IRUFERVIsIGlkOiBlajJfYmFzZV8yLmdldFVuaXF1ZUlEKCdhY3Jkbl9oZWFkZXInKSB9KTtcbiAgICAgICAgICAgIHZhciBhcmlhQXR0ciA9IHtcbiAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnMCcsICdyb2xlJzogJ2hlYWRpbmcnLCAnYXJpYS1leHBhbmRlZCc6ICdmYWxzZScsICdhcmlhLXNlbGVjdGVkJzogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICdmYWxzZScsICdhcmlhLWxldmVsJzogdGhpcy5pdGVtcy5sZW5ndGgudG9TdHJpbmcoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyhoZWFkZXIsIGFyaWFBdHRyKTtcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUucmVuZGVySW5uZXJJdGVtID0gZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgaW5uZXJFbGU7XG4gICAgICAgICAgICBpbm5lckVsZSA9IGVqMl9iYXNlXzUuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19JVEVNIH0pO1xuICAgICAgICAgICAgaW5uZXJFbGUuaWQgPSBlajJfYmFzZV8yLmdldFVuaXF1ZUlEKCdhY3Jkbl9pdGVtJyk7XG4gICAgICAgICAgICBpZiAoaXRlbS5oZWFkZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3RuRWxlID0gdGhpcy5oZWFkZXJFbGVHZW5lcmF0ZSgpO1xuICAgICAgICAgICAgICAgIHZhciBoZHJFbGUgPSBlajJfYmFzZV81LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfSEVBREVSQ1ROIH0pO1xuICAgICAgICAgICAgICAgIGN0bkVsZS5hcHBlbmRDaGlsZChoZHJFbGUpO1xuICAgICAgICAgICAgICAgIGN0bkVsZS5hcHBlbmRDaGlsZCh0aGlzLmZldGNoRWxlbWVudChoZHJFbGUsIGl0ZW0uaGVhZGVyLCBpbmRleCwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIGlubmVyRWxlLmFwcGVuZENoaWxkKGN0bkVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGRyID0gZWoyX2Jhc2VfMy5zZWxlY3QoJy4nICsgQ0xTX0hFQURFUiwgaW5uZXJFbGUpO1xuICAgICAgICAgICAgaWYgKGl0ZW0uZXhwYW5kZWQgJiYgIWVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoaW5kZXgpICYmICghdGhpcy5lbmFibGVQZXJzaXN0ZW5jZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbml0RXhwYW5kLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRFeHBhbmQucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBpbm5lckVsZS5jbGFzc0xpc3QuYWRkKGl0ZW0uY3NzQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uaWNvbkNzcykge1xuICAgICAgICAgICAgICAgIHZhciBoZHJJY25FbGUgPSBlajJfYmFzZV81LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfSEVBREVSSUNOIH0pO1xuICAgICAgICAgICAgICAgIHZhciBpY29uID0gZWoyX2Jhc2VfNS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IGl0ZW0uaWNvbkNzcyArICcgZS1pY29ucycgfSk7XG4gICAgICAgICAgICAgICAgaGRySWNuRWxlLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGhkcikpIHtcbiAgICAgICAgICAgICAgICAgICAgaGRyID0gdGhpcy5oZWFkZXJFbGVHZW5lcmF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBoZHIuYXBwZW5kQ2hpbGQoaGRySWNuRWxlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJFbGUuYXBwZW5kQ2hpbGQoaGRyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhkci5pbnNlcnRCZWZvcmUoaGRySWNuRWxlLCBoZHIuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uY29udGVudCkge1xuICAgICAgICAgICAgICAgIHZhciBoZHJJY29uID0gdGhpcy50b2dnbGVJY29uR2VuZXJhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChoZHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhkciA9IHRoaXMuaGVhZGVyRWxlR2VuZXJhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJFbGUuYXBwZW5kQ2hpbGQoaGRyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGRyLmFwcGVuZENoaWxkKGhkckljb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGlubmVyRWxlLCBDTFNfU0xDVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5uZXJFbGU7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuZmV0Y2hFbGVtZW50ID0gZnVuY3Rpb24gKGVsZSwgdmFsdWUsIGluZGV4LCBpc0hlYWRlcikge1xuICAgICAgICAgICAgdmFyIHRlbXBsYXRlRm47XG4gICAgICAgICAgICB2YXIgdGVtU3RyaW5nO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh2YWx1ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtU3RyaW5nID0gZWxlVmFsLm91dGVySFRNTC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlRm4gPSBlajJfYmFzZV8yLmNvbXBpbGUodGVtU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5kZXRhY2goZWxlVmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlRm4gPSBlajJfYmFzZV8yLmNvbXBpbGUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKHRlbXBsYXRlRm4pICYmIHRlbXBsYXRlRm4oKS5sZW5ndGggPiAwICYmICEoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZCh0ZW1wbGF0ZUZuKClbMF0udGFnTmFtZSkgJiYgdGVtcGxhdGVGbigpLmxlbmd0aCA9PT0gMSkpIHtcbiAgICAgICAgICAgICAgICBbXS5zbGljZS5jYWxsKHRlbXBsYXRlRm4oKSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGVsLnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxlLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQodGVtU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdLmhlYWRlciA9IHRlbVN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdLmNvbnRlbnQgPSB0ZW1TdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmFyaWFBdHRyVXBkYXRlID0gZnVuY3Rpb24gKGl0ZW1FbGUpIHtcbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSBlajJfYmFzZV8zLnNlbGVjdCgnLicgKyBDTFNfSEVBREVSLCBpdGVtRWxlKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gZWoyX2Jhc2VfMy5zZWxlY3QoJy4nICsgQ0xTX0NPTlRFTlQsIGl0ZW1FbGUpO1xuICAgICAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIGNvbnRlbnQuaWQpO1xuICAgICAgICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGhlYWRlci5pZCk7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuY29udGVudFJlbmRlcmluZyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLml0ZW1zW2luZGV4XS5jb250ZW50O1xuICAgICAgICAgICAgdmFyIGl0ZW1jbnQgPSBlajJfYmFzZV81LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfQ09OVEVOVCArICcgJyArIENMU19DVE5ISURFLCBpZDogZWoyX2Jhc2VfMi5nZXRVbmlxdWVJRCgnYWNyZG5fcGFuZWwnKSB9KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuYXR0cmlidXRlcyhpdGVtY250LCB7ICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9KTtcbiAgICAgICAgICAgIHZhciBjdG4gPSBlajJfYmFzZV81LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfQ1RFTlQgfSk7XG4gICAgICAgICAgICBpdGVtY250LmFwcGVuZENoaWxkKHRoaXMuZmV0Y2hFbGVtZW50KGN0biwgY29udGVudCwgaW5kZXgsIGZhbHNlKSk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbWNudDtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5leHBhbmQgPSBmdW5jdGlvbiAodHJndCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50QXJncztcbiAgICAgICAgICAgIHZhciB0cmd0SXRlbUVsZSA9IGVqMl9iYXNlXzMuY2xvc2VzdCh0cmd0LCAnLicgKyBDTFNfSVRFTSk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZCh0cmd0KSB8fCAoZWoyX2Jhc2VfMy5pc1Zpc2libGUodHJndCkgJiYgdHJndC5nZXRBdHRyaWJ1dGUoJ2UtYW5pbWF0ZScpICE9PSAndHJ1ZScpIHx8IHRyZ3RJdGVtRWxlLmNsYXNzTGlzdC5jb250YWlucyhDTFNfRElTQUJMRSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWNyZG5Sb290ID0gZWoyX2Jhc2VfMy5jbG9zZXN0KHRyZ3RJdGVtRWxlLCAnLicgKyBDTFNfQUNSRE5fUk9PVCk7XG4gICAgICAgICAgICB2YXIgZXhwYW5kU3RhdGUgPSBhY3JkblJvb3QucXVlcnlTZWxlY3RvcignLicgKyBDTFNfRVhQQU5EU1RBVEUpO1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmFuaW1hdGlvbi5leHBhbmQuZWZmZWN0LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmFuaW1hdGlvbi5leHBhbmQuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246IHRoaXMuYW5pbWF0aW9uLmV4cGFuZC5lYXNpbmdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgaWNvbiA9IGVqMl9iYXNlXzMuc2VsZWN0KCcuJyArIENMU19UT09HTEVJQ04sIHRyZ3RJdGVtRWxlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGV2ZW50QXJncyA9IHsgZWxlbWVudDogdHJndEl0ZW1FbGUsXG4gICAgICAgICAgICAgICAgaXRlbTogdGhpcy5pdGVtc1t0aGlzLmdldEluZGV4QnlJdGVtKHRyZ3RJdGVtRWxlKV0sXG4gICAgICAgICAgICAgICAgaXNFeHBhbmRlZDogdHJ1ZSB9O1xuICAgICAgICAgICAgdmFyIGVmZiA9IGFuaW1hdGlvbi5uYW1lO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdleHBhbmRpbmcnLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgaWYgKGV2ZW50QXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoQ0xTX1RPR0FOSU1BVEUpO1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEl0ZW1zUHVzaCh0cmd0SXRlbUVsZSk7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoZXhwYW5kU3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kU3RhdGUuY2xhc3NMaXN0LnJlbW92ZShDTFNfRVhQQU5EU1RBVEUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJndEl0ZW1FbGUuY2xhc3NMaXN0LmFkZChDTFNfRVhQQU5EU1RBVEUpO1xuICAgICAgICAgICAgaWYgKChhbmltYXRpb24ubmFtZSA9PT0gJ05vbmUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kUHJvZ3Jlc3MoJ2JlZ2luJywgaWNvbiwgdHJndCwgdHJndEl0ZW1FbGUsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRQcm9ncmVzcygnZW5kJywgaWNvbiwgdHJndCwgdHJndEl0ZW1FbGUsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5leHBhbmRBbmltYXRpb24oZWZmLCBpY29uLCB0cmd0LCB0cmd0SXRlbUVsZSwgYW5pbWF0aW9uLCBldmVudEFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmV4cGFuZEFuaW1hdGlvbiA9IGZ1bmN0aW9uIChlZiwgaWNuLCB0cmd0LCB0cmd0SXRlbUVsZSwgYW5pbWF0ZSwgYXJncykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBoZWlnaHQ7XG4gICAgICAgICAgICB2YXIgdHJndEhndDtcbiAgICAgICAgICAgIGlmIChlZiA9PT0gJ1NsaWRlRG93bicpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRlLmJlZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5leHBhbmRQcm9ncmVzcygnYmVnaW4nLCBpY24sIHRyZ3QsIHRyZ3RJdGVtRWxlLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgdHJndC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRyZ3RJdGVtRWxlLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdHJndEhndCA9IHRyZ3Qub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0cmd0LnN0eWxlLm1heEhlaWdodCA9ICh0cmd0Lm9mZnNldEhlaWdodCkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB0cmd0SXRlbUVsZS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGFuaW1hdGUucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyZ3RJdGVtRWxlLnN0eWxlLm1pbkhlaWdodCA9IChoZWlnaHQgKyB0cmd0Lm9mZnNldEhlaWdodCkgKyAncHgnO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYW5pbWF0ZS5lbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzUuc2V0U3R5bGVBdHRyaWJ1dGUodHJndCwgeyAncG9zaXRpb24nOiAnJywgJ21heEhlaWdodCc6ICcnIH0pO1xuICAgICAgICAgICAgICAgICAgICB0cmd0SXRlbUVsZS5zdHlsZS5taW5IZWlnaHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZXhwYW5kUHJvZ3Jlc3MoJ2VuZCcsIGljbiwgdHJndCwgdHJndEl0ZW1FbGUsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltYXRlLmJlZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5leHBhbmRQcm9ncmVzcygnYmVnaW4nLCBpY24sIHRyZ3QsIHRyZ3RJdGVtRWxlLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGFuaW1hdGUuZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5leHBhbmRQcm9ncmVzcygnZW5kJywgaWNuLCB0cmd0LCB0cmd0SXRlbUVsZSwgYXJncyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ldyBlajJfYmFzZV80LkFuaW1hdGlvbihhbmltYXRlKS5hbmltYXRlKHRyZ3QpO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmV4cGFuZFByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBpY29uLCB0cmd0LCB0cmd0SXRlbUVsZSwgZXZlbnRBcmdzKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSh0cmd0LCBDTFNfQ1ROSElERSk7XG4gICAgICAgICAgICB0aGlzLmFkZCh0cmd0SXRlbUVsZSwgQ0xTX1NMQ1RFRCk7XG4gICAgICAgICAgICB0aGlzLmFkZChpY29uLCBDTFNfRVhQQU5ESUNOKTtcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZCh0cmd0SXRlbUVsZSwgQ0xTX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgdHJndC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5hdHRyaWJ1dGVzKHRyZ3QucHJldmlvdXNFbGVtZW50U2libGluZywgeyAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJywgJ2FyaWEtZXhwYW5kZWQnOiAndHJ1ZScgfSk7XG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKENMU19UT0dBTklNQVRFKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2V4cGFuZGVkJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5leHBhbmRlZEl0ZW1zUHVzaCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4QnlJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWRJdGVtcy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZGVkSXRlbXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuZ2V0SW5kZXhCeUl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy5lbGVtZW50LmNoaWxkcmVuKS5pbmRleE9mKGl0ZW0pO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmV4cGFuZGVkSXRlbXNQb3AgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleEJ5SXRlbShpdGVtKTtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRJdGVtcy5zcGxpY2UodGhpcy5leHBhbmRlZEl0ZW1zLmluZGV4T2YoaW5kZXgpLCAxKTtcbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5jb2xsYXBzZSA9IGZ1bmN0aW9uICh0cmd0KSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmdzO1xuICAgICAgICAgICAgdmFyIHRyZ3RJdGVtRWxlID0gZWoyX2Jhc2VfMy5jbG9zZXN0KHRyZ3QsICcuJyArIENMU19JVEVNKTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKHRyZ3QpIHx8ICFlajJfYmFzZV8zLmlzVmlzaWJsZSh0cmd0KSB8fCB0cmd0SXRlbUVsZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0RJU0FCTEUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmFuaW1hdGlvbi5jb2xsYXBzZS5lZmZlY3QsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuYW5pbWF0aW9uLmNvbGxhcHNlLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiB0aGlzLmFuaW1hdGlvbi5jb2xsYXBzZS5lYXNpbmcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGljb24gPSBlajJfYmFzZV8zLnNlbGVjdCgnLicgKyBDTFNfVE9PR0xFSUNOLCB0cmd0SXRlbUVsZSkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBldmVudEFyZ3MgPSB7IGVsZW1lbnQ6IHRyZ3RJdGVtRWxlLFxuICAgICAgICAgICAgICAgIGl0ZW06IHRoaXMuaXRlbXNbdGhpcy5nZXRJbmRleEJ5SXRlbSh0cmd0SXRlbUVsZSldLFxuICAgICAgICAgICAgICAgIGlzRXhwYW5kZWQ6IGZhbHNlIH07XG4gICAgICAgICAgICB2YXIgZWZmID0gYW5pbWF0aW9uLm5hbWU7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2V4cGFuZGluZycsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICBpZiAoZXZlbnRBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRJdGVtc1BvcCh0cmd0SXRlbUVsZSk7XG4gICAgICAgICAgICB0cmd0SXRlbUVsZS5jbGFzc0xpc3QuYWRkKENMU19FWFBBTkRTVEFURSk7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoQ0xTX1RPR0FOSU1BVEUpO1xuICAgICAgICAgICAgaWYgKChhbmltYXRpb24ubmFtZSA9PT0gJ05vbmUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VQcm9ncmVzcygnYmVnaW4nLCBpY29uLCB0cmd0LCB0cmd0SXRlbUVsZSwgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlUHJvZ3Jlc3MoJ2VuZCcsIGljb24sIHRyZ3QsIHRyZ3RJdGVtRWxlLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbmltYXRpb24oZWZmLCB0cmd0LCB0cmd0SXRlbUVsZSwgaWNvbiwgYW5pbWF0aW9uLCBldmVudEFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmNvbGxhcHNlQW5pbWF0aW9uID0gZnVuY3Rpb24gKGVmLCB0cmd0LCB0cmd0SXRFbCwgaWNuLCBhbmltYXRlLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGhlaWdodDtcbiAgICAgICAgICAgIHZhciB0cmd0SGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGl0ZW1IZWlnaHQ7XG4gICAgICAgICAgICB2YXIgcmVtYWluO1xuICAgICAgICAgICAgaWYgKGVmID09PSAnU2xpZGVVcCcpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRlLmJlZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtSGVpZ2h0ID0gdHJndEl0RWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0cmd0SXRFbC5zdHlsZS5taW5IZWlnaHQgPSBpdGVtSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgdHJndC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRyZ3RJdEVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdHJndEhlaWdodCA9IHRyZ3Qub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0cmd0LnN0eWxlLm1heEhlaWdodCA9IHRyZ3RIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb2xsYXBzZVByb2dyZXNzKCdiZWdpbicsIGljbiwgdHJndCwgdHJndEl0RWwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYW5pbWF0ZS5wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluID0gKChoZWlnaHQgLSAodHJndEhlaWdodCAtIHRyZ3Qub2Zmc2V0SGVpZ2h0KSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVtYWluIDwgaXRlbUhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJndEl0RWwuc3R5bGUubWluSGVpZ2h0ID0gcmVtYWluICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYW5pbWF0ZS5lbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyZ3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29sbGFwc2VQcm9ncmVzcygnZW5kJywgaWNuLCB0cmd0LCB0cmd0SXRFbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIHRyZ3RJdEVsLnN0eWxlLm1pbkhlaWdodCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV81LnNldFN0eWxlQXR0cmlidXRlKHRyZ3QsIHsgJ3Bvc2l0aW9uJzogJycsICdtYXhIZWlnaHQnOiAnJywgJ2Rpc3BsYXknOiAnJyB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZS5iZWdpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29sbGFwc2VQcm9ncmVzcygnYmVnaW4nLCBpY24sIHRyZ3QsIHRyZ3RJdEVsLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGFuaW1hdGUuZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb2xsYXBzZVByb2dyZXNzKCdlbmQnLCBpY24sIHRyZ3QsIHRyZ3RJdEVsLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3IGVqMl9iYXNlXzQuQW5pbWF0aW9uKGFuaW1hdGUpLmFuaW1hdGUodHJndCk7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuY29sbGFwc2VQcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgaWNvbiwgdHJndCwgdHJndEl0ZW1FbGUsIGV2ZW50QXJncykge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoaWNvbiwgQ0xTX0VYUEFORElDTik7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSh0cmd0SXRlbUVsZSwgQ0xTX1NMQ1RFRCk7XG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT09ICdlbmQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQodHJndCwgQ0xTX0NUTkhJREUpO1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZShDTFNfVE9HQU5JTUFURSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUodHJndEl0ZW1FbGUsIENMU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIHRyZ3Quc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5hdHRyaWJ1dGVzKHRyZ3QucHJldmlvdXNFbGVtZW50U2libGluZywgeyAnYXJpYS1zZWxlY3RlZCc6ICdmYWxzZScsICdhcmlhLWV4cGFuZGVkJzogJ2ZhbHNlJyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2V4cGFuZGVkJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5nZXRNb2R1bGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdhY2NvcmRpb24nO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLml0ZW1BdHRyaWJVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXRlbUVsZSA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIHZhciBpdGVtTGVuID0gdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICBpdGVtRWxlLmZvckVhY2goZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuc2VsZWN0KCcuJyArIENMU19IRUFERVIsIGVsZSkuc2V0QXR0cmlidXRlKCdhcmlhLWxldmVsJywgJycgKyBpdGVtTGVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmFkZEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZS5jaGlsZEVsZW1lbnRDb3VudCA+PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5uZXJJdGVtRWxlID0gdGhpcy5yZW5kZXJJbm5lckl0ZW0oaXRlbSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChlbGUuY2hpbGRFbGVtZW50Q291bnQgPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZChpbm5lckl0ZW1FbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLmluc2VydEJlZm9yZShpbm5lckl0ZW1FbGUsIGVsZS5jaGlsZHJlbltpbmRleF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLkV2ZW50SGFuZGxlci5hZGQoaW5uZXJJdGVtRWxlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0xTX0hFQURFUiksICdmb2N1cycsIHRoaXMuZm9jdXNJbiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMS5FdmVudEhhbmRsZXIuYWRkKGlubmVySXRlbUVsZS5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19IRUFERVIpLCAnYmx1cicsIHRoaXMuZm9jdXNPdXQsIHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUF0dHJpYlVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEl0ZW1zID0gW107XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkSXRlbVJlZnJlc2goZWxlKTtcbiAgICAgICAgICAgIGlmIChpdGVtLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRJdGVtKHRydWUsIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5leHBhbmRlZEl0ZW1SZWZyZXNoID0gZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwoZWxlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1NMQ1RFRCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZXhwYW5kZWRJdGVtc1B1c2goZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoZWxlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzMuZGV0YWNoKGVsZSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1BdHRyaWJVcGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEl0ZW1SZWZyZXNoKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gdGhpcy5lbGVtZW50LmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGVsZSkgfHwgZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChlajJfYmFzZV8zLnNlbGVjdCgnLicgKyBDTFNfSEVBREVSLCBlbGUpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZS5jaGlsZHJlblswXS5mb2N1cygpO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmhpZGVJdGVtID0gZnVuY3Rpb24gKGluZGV4LCBpc0hpZGRlbikge1xuICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuZWxlbWVudC5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChlbGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoaXNIaWRkZW4pKSB7XG4gICAgICAgICAgICAgICAgaXNIaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNIaWRkZW4gPyB0aGlzLmFkZChlbGUsIENMU19JVEVNSElERSkgOiB0aGlzLnJlbW92ZShlbGUsIENMU19JVEVNSElERSk7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUuZW5hYmxlSXRlbSA9IGZ1bmN0aW9uIChpbmRleCwgaXNFbmFibGUpIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoZWxlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlbGVIZWFkZXIgPSBlbGUuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBpZiAoaXNFbmFibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZShlbGUsIENMU19ESVNBQkxFKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmF0dHJpYnV0ZXMoZWxlSGVhZGVyLCB7ICd0YWJpbmRleCc6ICcwJywgJ2FyaWEtZGlzYWJsZWQnOiAnZmFsc2UnIH0pO1xuICAgICAgICAgICAgICAgIGVsZUhlYWRlci5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0FDVElWRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBhbmRJdGVtKGZhbHNlLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlTW92ZUZvY3VzKCdtb3ZlZG93bicsIHRoaXMuZWxlbWVudCwgZWxlSGVhZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoZWxlLCBDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICAgICAgZWxlSGVhZGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgZWxlSGVhZGVyLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5leHBhbmRJdGVtID0gZnVuY3Rpb24gKGlzRXhwYW5kLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciByb290ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXhwYW5kTW9kZSA9PT0gJ1NpbmdsZScgJiYgaXNFeHBhbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZSA9IHJvb3QuY2hpbGRyZW5bcm9vdC5jaGlsZEVsZW1lbnRDb3VudCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1FeHBhbmQoaXNFeHBhbmQsIGVsZSwgdGhpcy5nZXRJbmRleEJ5SXRlbShlbGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwodGhpcy5lbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXRlbUV4cGFuZChpc0V4cGFuZCwgZWwsIF90aGlzLmdldEluZGV4QnlJdGVtKGVsKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV82LmlzTnVsbE9yVW5kZWZpbmVkKGVsZSkgfHwgIWVsZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1NMQ1QpIHx8IChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19BQ1RJVkUpICYmIGlzRXhwYW5kKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5leHBhbmRNb2RlID09PSAnU2luZ2xlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBhbmRJdGVtKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1FeHBhbmQoaXNFeHBhbmQsIGVsZSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQWNjb3JkaW9uLnByb3RvdHlwZS5pdGVtRXhwYW5kID0gZnVuY3Rpb24gKGlzRXhwYW5kLCBlbGUsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY3RuID0gZWxlLmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgaWYgKGVsZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0RJU0FCTEUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzYuaXNOdWxsT3JVbmRlZmluZWQoY3RuKSAmJiBpc0V4cGFuZCkge1xuICAgICAgICAgICAgICAgIGN0biA9IHRoaXMuY29udGVudFJlbmRlcmluZyhpbmRleCk7XG4gICAgICAgICAgICAgICAgZWxlLmFwcGVuZENoaWxkKGN0bik7XG4gICAgICAgICAgICAgICAgdGhpcy5hcmlhQXR0clVwZGF0ZShlbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWoyX2Jhc2VfNi5pc051bGxPclVuZGVmaW5lZChjdG4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNFeHBhbmQgPyB0aGlzLmV4cGFuZChjdG4pIDogdGhpcy5jb2xsYXBzZShjdG4pO1xuICAgICAgICB9O1xuICAgICAgICBBY2NvcmRpb24ucHJvdG90eXBlLmdldFBlcnNpc3REYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGtleUVudGl0eSA9IFsnZXhwYW5kZWRJdGVtcyddO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkT25QZXJzaXN0KGtleUVudGl0eSk7XG4gICAgICAgIH07XG4gICAgICAgIEFjY29yZGlvbi5wcm90b3R5cGUub25Qcm9wZXJ0eUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3UHJvcCwgb2xkUHJvcCkge1xuICAgICAgICAgICAgdmFyIGFjcmRuID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG5ld1Byb3ApOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVSdGwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcC5lbmFibGVSdGwgPyB0aGlzLmFkZChhY3JkbiwgQ0xTX1JUTCkgOiB0aGlzLnJlbW92ZShhY3JkbiwgQ0xTX1JUTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaGVpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzUuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5lbGVtZW50LCB7ICdoZWlnaHQnOiBlajJfYmFzZV82LmZvcm1hdFVuaXQobmV3UHJvcC5oZWlnaHQpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dpZHRoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzUuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5lbGVtZW50LCB7ICd3aWR0aCc6IGVqMl9iYXNlXzYuZm9ybWF0VW5pdChuZXdQcm9wLndpZHRoKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdleHBhbmRNb2RlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQcm9wLmV4cGFuZE1vZGUgPT09ICdTaW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tdWx0aXNlbGVjdGFibGUnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5leHBhbmRlZEl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBhbmRJdGVtKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW11bHRpc2VsZWN0YWJsZScsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBBY2NvcmRpb247XG4gICAgfShlajJfYmFzZV8xLkNvbXBvbmVudCkpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV80LkNvbGxlY3Rpb24oW10sIEFjY29yZGlvbkl0ZW0pXG4gICAgXSwgQWNjb3JkaW9uLnByb3RvdHlwZSwgXCJpdGVtc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcxMDAlJylcbiAgICBdLCBBY2NvcmRpb24ucHJvdG90eXBlLCBcIndpZHRoXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ2F1dG8nKVxuICAgIF0sIEFjY29yZGlvbi5wcm90b3R5cGUsIFwiaGVpZ2h0XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ011bHRpcGxlJylcbiAgICBdLCBBY2NvcmRpb24ucHJvdG90eXBlLCBcImV4cGFuZE1vZGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfNS5Db21wbGV4KHt9LCBBY2NvcmRpb25BbmltYXRpb25TZXR0aW5ncylcbiAgICBdLCBBY2NvcmRpb24ucHJvdG90eXBlLCBcImFuaW1hdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBBY2NvcmRpb24ucHJvdG90eXBlLCBcImNsaWNrZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgQWNjb3JkaW9uLnByb3RvdHlwZSwgXCJleHBhbmRpbmdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgQWNjb3JkaW9uLnByb3RvdHlwZSwgXCJleHBhbmRlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBBY2NvcmRpb24ucHJvdG90eXBlLCBcImNyZWF0ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgQWNjb3JkaW9uLnByb3RvdHlwZSwgXCJkZXN0cm95ZWRcIiwgdm9pZCAwKTtcbiAgICBBY2NvcmRpb24gPSBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfNC5Ob3RpZnlQcm9wZXJ0eUNoYW5nZXNcbiAgICBdLCBBY2NvcmRpb24pO1xuICAgIGV4cG9ydHMuQWNjb3JkaW9uID0gQWNjb3JkaW9uO1xuICAgIGV4cG9ydHMuYWNjb3JkaW9uQnVpbGRlciA9IGVqMl9iYXNlXzQuQ3JlYXRlQnVpbGRlcihBY2NvcmRpb24pO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vY29udGV4dC1tZW51XCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgY29udGV4dF9tZW51XzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KGNvbnRleHRfbWVudV8xKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGV4dC1tZW51L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItbGlzdHNcIiwgXCJAc3luY2Z1c2lvbi9lajItcG9wdXBzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgZWoyX2Jhc2VfMSwgZWoyX2Jhc2VfMiwgZWoyX2Jhc2VfMywgZWoyX2Jhc2VfNCwgZWoyX2Jhc2VfNSwgZWoyX2xpc3RzXzEsIGVqMl9wb3B1cHNfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgRE9XTkFSUk9XID0gJ2Rvd25hcnJvdyc7XG4gICAgdmFyIEVOVEVSID0gJ2VudGVyJztcbiAgICB2YXIgRVNDQVBFID0gJ2VzY2FwZSc7XG4gICAgdmFyIEZPQ1VTRUQgPSAnZS1mb2N1c2VkJztcbiAgICB2YXIgSEVBREVSID0gJ2UtbWVudWhlYWRlcic7XG4gICAgdmFyIExFRlRBUlJPVyA9ICdsZWZ0YXJyb3cnO1xuICAgIHZhciBSSUdIVEFSUk9XID0gJ3JpZ2h0YXJyb3cnO1xuICAgIHZhciBSVEwgPSAnZS1ydGwnO1xuICAgIHZhciBTRUxFQ1RFRCA9ICdlLXNlbGVjdGVkJztcbiAgICB2YXIgU0VQQVJBVE9SID0gJ2Utc2VwYXJhdG9yJztcbiAgICB2YXIgVVBBUlJPVyA9ICd1cGFycm93JztcbiAgICB2YXIgV1JBUFBFUiA9ICdlLWNvbnRleHRtZW51LXdyYXBwZXInO1xuICAgIHZhciBDQVJFVCA9ICdlLWNhcmV0JztcbiAgICB2YXIgSVRFTSA9ICdlLW1lbnUtaXRlbSc7XG4gICAgdmFyIERJU0FCTEVEID0gJ2UtZGlzYWJsZWQnO1xuICAgIHZhciBISURFID0gJ2UtbWVudS1oaWRlJztcbiAgICB2YXIgSUNPTlMgPSAnZS1pY29ucyc7XG4gICAgdmFyIE1lbnVJdGVtID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKE1lbnVJdGVtLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBNZW51SXRlbSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWVudUl0ZW07XG4gICAgfShlajJfYmFzZV8xLkNoaWxkUHJvcGVydHkpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBNZW51SXRlbS5wcm90b3R5cGUsIFwiaWNvbkNzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIE1lbnVJdGVtLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIE1lbnVJdGVtLnByb3RvdHlwZSwgXCJzZXBhcmF0b3JcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfNC5Db2xsZWN0aW9uKFtdLCBNZW51SXRlbSlcbiAgICBdLCBNZW51SXRlbS5wcm90b3R5cGUsIFwiaXRlbXNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBNZW51SXRlbS5wcm90b3R5cGUsIFwidGV4dFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIE1lbnVJdGVtLnByb3RvdHlwZSwgXCJ1cmxcIiwgdm9pZCAwKTtcbiAgICBleHBvcnRzLk1lbnVJdGVtID0gTWVudUl0ZW07XG4gICAgdmFyIENvbnRleHRNZW51ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKENvbnRleHRNZW51LCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBDb250ZXh0TWVudShvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBlbGVtZW50KSB8fCB0aGlzO1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uID0gbmV3IGVqMl9iYXNlXzMuQW5pbWF0aW9uKHt9KTtcbiAgICAgICAgICAgIF90aGlzLm5hdklkeCA9IFtdO1xuICAgICAgICAgICAgX3RoaXMuaXNUYXBIb2xkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnByZVJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQudGFnTmFtZSA9PT0gJ0VKLUNPTlRFWFRNRU5VJykge1xuICAgICAgICAgICAgICAgIHZhciBlakluc3QgPSBlajJfYmFzZV80LmdldFZhbHVlKCdlajJfaW5zdGFuY2VzJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB2YXIgdWwgPSBlajJfYmFzZV81LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBlajJfYmFzZV81LmNyZWF0ZUVsZW1lbnQoJ0VKLUNPTlRFWFRNRU5VJywgeyBjbGFzc05hbWU6IFdSQVBQRVIgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHVsLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzUuZGV0YWNoKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gdWw7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2UtJyArIHRoaXMuZ2V0TW9kdWxlTmFtZSgpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV80LnNldFZhbHVlKCdlajJfaW5zdGFuY2VzJywgZWpJbnN0LCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IGVqMl9iYXNlXzQuZ2V0VW5pcXVlSUQodGhpcy5nZXRNb2R1bGVOYW1lKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFdyYXBwZXIoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVySXRlbXMoKTtcbiAgICAgICAgICAgIHRoaXMud2lyZUV2ZW50cygpO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuaW5pdFdyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlcigpO1xuICAgICAgICAgICAgaWYgKCF3cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyhXUkFQUEVSKSkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIgPSBlajJfYmFzZV81LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBXUkFQUEVSIH0pO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jc3NDbGFzcykge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNzc0NsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZVJ0bCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChSVEwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfMy5hdHRyaWJ1dGVzKHRoaXMuZWxlbWVudCwgeyAncm9sZSc6ICdtZW51JywgJ3RhYmluZGV4JzogJzAnIH0pO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMuZ2V0WkluZGV4KCk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5yZW5kZXJJdGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gZWoyX2xpc3RzXzEuTGlzdEJhc2UuY3JlYXRlSnNvbkZyb21FbGVtZW50KHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHVsID0gdGhpcy5jcmVhdGVJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzUuYXBwZW5kKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHVsLmNoaWxkcmVuKSwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlcigpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRFbGVtID0gZWoyX2Jhc2VfNS5zZWxlY3QodGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV80LkJyb3dzZXIuaXNJb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaE1vZHVsZSA9IG5ldyBlajJfYmFzZV8yLlRvdWNoKHRoaXMudGFyZ2V0RWxlbSwgeyB0YXBIb2xkOiB0aGlzLnRvdWNoSGFuZGxlci5iaW5kKHRoaXMpIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKHRoaXMudGFyZ2V0RWxlbSwgJ2NvbnRleHRtZW51JywgdGhpcy5jbWVudUhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5nZXRTY3JvbGxhYmxlUGFyZW50cyh0aGlzLnRhcmdldEVsZW0pOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50XzEgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZChwYXJlbnRfMSwgJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LkJyb3dzZXIuaXNEZXZpY2UpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQod3JhcHBlciwgJ21vdXNlb3ZlcicsIHRoaXMubW92ZXJIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQoZG9jdW1lbnQsICdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKGRvY3VtZW50LCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkTW9kdWxlID0gbmV3IGVqMl9iYXNlXzIuS2V5Ym9hcmRFdmVudHMod3JhcHBlciwge1xuICAgICAgICAgICAgICAgIGtleUFjdGlvbjogdGhpcy5rZXlCb2FyZEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBrZXlDb25maWdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRvd25hcnJvdzogRE9XTkFSUk9XLFxuICAgICAgICAgICAgICAgICAgICB1cGFycm93OiBVUEFSUk9XLFxuICAgICAgICAgICAgICAgICAgICBlbnRlcjogRU5URVIsXG4gICAgICAgICAgICAgICAgICAgIGxlZnRhcnJvdzogTEVGVEFSUk9XLFxuICAgICAgICAgICAgICAgICAgICByaWdodGFycm93OiBSSUdIVEFSUk9XLFxuICAgICAgICAgICAgICAgICAgICBlc2NhcGU6IEVTQ0FQRVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWoyX2Jhc2VfNS5yaXBwbGVFZmZlY3Qod3JhcHBlciwgeyBzZWxlY3RvcjogJy4nICsgSVRFTSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLm1vdXNlRG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzUuY2xvc2VzdChlLnRhcmdldCwgJy4nICsgV1JBUFBFUikgIT09IHRoaXMuZ2V0V3JhcHBlcigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUodGhpcy5uYXZJZHgubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmdldFNjcm9sbGFibGVQYXJlbnRzID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIGVsZW1TdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciBwYXJlbnRDb2xsZWN0aW9uID0gW107XG4gICAgICAgICAgICB2YXIgcmVnZXggPSAvKGF1dG98c2Nyb2xsKS87XG4gICAgICAgICAgICB2YXIgcGFyZW50RWxlID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB3aGlsZSAocGFyZW50RWxlICYmIHBhcmVudEVsZS50YWdOYW1lICE9PSAnSFRNTCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBhcmVudEVsZSk7XG4gICAgICAgICAgICAgICAgaWYgKCEoZWxlbVN0eWxlLnBvc2l0aW9uID09PSAnYWJzb2x1dGUnICYmIHBhcmVudFN0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJylcbiAgICAgICAgICAgICAgICAgICAgJiYgcmVnZXgudGVzdChwYXJlbnRTdHlsZS5vdmVyZmxvdyArIHBhcmVudFN0eWxlLm92ZXJmbG93WSArIHBhcmVudFN0eWxlLm92ZXJmbG93WCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29sbGVjdGlvbi5wdXNoKHBhcmVudEVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmVudEVsZSA9IHBhcmVudEVsZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50Q29sbGVjdGlvbi5wdXNoKGRvY3VtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRDb2xsZWN0aW9uO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUua2V5Qm9hcmRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIERPV05BUlJPVzpcbiAgICAgICAgICAgICAgICBjYXNlIFVQQVJST1c6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBEb3duS2V5SGFuZGxlcihlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBSSUdIVEFSUk9XOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0RW50ZXJLZXlIYW5kbGVyKHsgYWN0aW9uOiBSSUdIVEFSUk9XIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIExFRlRBUlJPVzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0RXNjS2V5SGFuZGxlcih7IGFjdGlvbjogTEVGVEFSUk9XIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEVOVEVSOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0RW50ZXJLZXlIYW5kbGVyKHsgYWN0aW9uOiBFTlRFUiB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBFU0NBUEU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdEVzY0tleUhhbmRsZXIoeyBhY3Rpb246IEVTQ0FQRSB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS51cERvd25LZXlIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICB2YXIgY3VsID0gd3JhcHBlci5jaGlsZHJlblt0aGlzLm5hdklkeC5sZW5ndGhdO1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRJZHggPSBlLmFjdGlvbiA9PT0gRE9XTkFSUk9XID8gMCA6IGN1bC5jaGlsZEVsZW1lbnRDb3VudCAtIDE7XG4gICAgICAgICAgICB2YXIgZmxpSWR4ID0gZGVmYXVsdElkeDtcbiAgICAgICAgICAgIHZhciBmbGkgPSB0aGlzLmdldExJQnlDbGFzcyhjdWwsIEZPQ1VTRUQpO1xuICAgICAgICAgICAgaWYgKGZsaSkge1xuICAgICAgICAgICAgICAgIGZsaUlkeCA9IHRoaXMuZ2V0SWR4KGN1bCwgZmxpKTtcbiAgICAgICAgICAgICAgICBmbGkuY2xhc3NMaXN0LnJlbW92ZShGT0NVU0VEKTtcbiAgICAgICAgICAgICAgICBlLmFjdGlvbiA9PT0gRE9XTkFSUk9XID8gZmxpSWR4KysgOiBmbGlJZHgtLTtcbiAgICAgICAgICAgICAgICBpZiAoZmxpSWR4ID09PSAoZS5hY3Rpb24gPT09IERPV05BUlJPVyA/IGN1bC5jaGlsZEVsZW1lbnRDb3VudCA6IC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBmbGlJZHggPSBkZWZhdWx0SWR4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjbGkgPSBjdWwuY2hpbGRyZW5bZmxpSWR4XTtcbiAgICAgICAgICAgIGZsaUlkeCA9IHRoaXMuaXNWYWxpZExJKGNsaSwgZmxpSWR4LCBlLmFjdGlvbik7XG4gICAgICAgICAgICBjdWwuY2hpbGRyZW5bZmxpSWR4XS5jbGFzc0xpc3QuYWRkKEZPQ1VTRUQpO1xuICAgICAgICAgICAgY3VsLmNoaWxkcmVuW2ZsaUlkeF0uZm9jdXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmlzVmFsaWRMSSA9IGZ1bmN0aW9uIChjbGksIGluZGV4LCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICB2YXIgY3VsID0gd3JhcHBlci5jaGlsZHJlblt0aGlzLm5hdklkeC5sZW5ndGhdO1xuICAgICAgICAgICAgaWYgKGNsaS5jbGFzc0xpc3QuY29udGFpbnMoU0VQQVJBVE9SKSB8fCBjbGkuY2xhc3NMaXN0LmNvbnRhaW5zKERJU0FCTEVEKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gKERPV05BUlJPVyB8fCBSSUdIVEFSUk9XKSA/IGluZGV4KysgOiBpbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xpID0gY3VsLmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChjbGkuY2xhc3NMaXN0LmNvbnRhaW5zKFNFUEFSQVRPUikgfHwgY2xpLmNsYXNzTGlzdC5jb250YWlucyhESVNBQkxFRCkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuaXNWYWxpZExJKGNsaSwgaW5kZXgsIGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5yaWdodEVudGVyS2V5SGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlcigpO1xuICAgICAgICAgICAgdmFyIGN1bCA9IHdyYXBwZXIuY2hpbGRyZW5bdGhpcy5uYXZJZHgubGVuZ3RoXTtcbiAgICAgICAgICAgIHZhciBmbGkgPSB0aGlzLmdldExJQnlDbGFzcyhjdWwsIEZPQ1VTRUQpO1xuICAgICAgICAgICAgaWYgKGZsaSkge1xuICAgICAgICAgICAgICAgIHZhciBmbGlJZHggPSB0aGlzLmdldElkeChjdWwsIGZsaSk7XG4gICAgICAgICAgICAgICAgdmFyIG5hdklkeCA9IHRoaXMubmF2SWR4LmNvbmNhdChmbGlJZHgpO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbShuYXZJZHgpO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5NZW51KGZsaSwgaXRlbSwgbnVsbCwgbnVsbCwgZSk7XG4gICAgICAgICAgICAgICAgICAgIGZsaS5jbGFzc0xpc3QucmVtb3ZlKEZPQ1VTRUQpO1xuICAgICAgICAgICAgICAgICAgICBmbGkuY2xhc3NMaXN0LmFkZChTRUxFQ1RFRCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignc2VsZWN0JywgeyBlbGVtZW50OiBmbGksIGl0ZW06IHRoaXMudG9SYXdPYmplY3QoW2l0ZW1dKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZmxpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2SWR4LnB1c2goZmxpSWR4KTtcbiAgICAgICAgICAgICAgICAgICAgY3VsID0gd3JhcHBlci5jaGlsZHJlblt0aGlzLm5hdklkeC5sZW5ndGhdO1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuaXNWYWxpZExJKGN1bC5jaGlsZHJlblswXSwgMCwgZS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBjdWwuY2hpbGRyZW5baW5kZXhdLmNsYXNzTGlzdC5hZGQoRk9DVVNFRCk7XG4gICAgICAgICAgICAgICAgICAgIGN1bC5jaGlsZHJlbltpbmRleF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmFjdGlvbiA9PT0gRU5URVIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmxlZnRFc2NLZXlIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5hdklkeC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KHRoaXMubmF2SWR4Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1bCA9IHdyYXBwZXIuY2hpbGRyZW5bdGhpcy5uYXZJZHgubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB2YXIgc2xpID0gdGhpcy5nZXRMSUJ5Q2xhc3MoY3VsLCBTRUxFQ1RFRCk7XG4gICAgICAgICAgICAgICAgc2xpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgIGlmIChzbGkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpLmNsYXNzTGlzdC5yZW1vdmUoU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgICAgICBzbGkuY2xhc3NMaXN0LmFkZChGT0NVU0VEKTtcbiAgICAgICAgICAgICAgICAgICAgc2xpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuYWN0aW9uID09PSBFU0NBUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnRvdWNoSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLmlzVGFwSG9sZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNtZW51SGFuZGxlcihlLm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuY21lbnVIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jYW5PcGVuKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1lbnUobnVsbCwgbnVsbCwgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZLCBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTWVudShudWxsLCBudWxsLCBlLmNsaWVudFksIGUuY2xpZW50WCwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuY2xvc2VNZW51ID0gZnVuY3Rpb24gKHVsSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICh1bEluZGV4ID09PSB2b2lkIDApIHsgdWxJbmRleCA9IDA7IH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWVudVZpc2libGUoKSkge1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNudCA9IHdyYXBwZXIuY2hpbGRFbGVtZW50Q291bnQ7IGNudCA+IHVsSW5kZXg7IGNudC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQW5pbWF0aW9uKHdyYXBwZXIuY2hpbGRyZW5bY250IC0gMV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKHRoaXMubmF2SWR4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZJZHgubGVuZ3RoID0gdWxJbmRleCA/IHVsSW5kZXggLSAxIDogdWxJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdvbkNsb3NlJywgeyBpdGVtczogaXRlbXMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuaXNNZW51VmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5uYXZJZHgubGVuZ3RoID4gMCB8fCBlajJfYmFzZV81LmlzVmlzaWJsZSh0aGlzLmVsZW1lbnQpLnZhbHVlT2YoKSk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5jYW5PcGVuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIGNhbk9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgY2FuT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSB0aGlzLmZpbHRlci5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0YXJnZXQuY2xhc3NMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIuaW5kZXhPZih0YXJnZXQuY2xhc3NMaXN0W2ldKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5PcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhbk9wZW47XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKHRvcCwgbGVmdCkge1xuICAgICAgICAgICAgdGhpcy5vcGVuTWVudShudWxsLCBudWxsLCB0b3AsIGxlZnQpO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUub3Blbk1lbnUgPSBmdW5jdGlvbiAobGksIGl0ZW0sIHRvcCwgbGVmdCwgZSkge1xuICAgICAgICAgICAgaWYgKHRvcCA9PT0gdm9pZCAwKSB7IHRvcCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChsZWZ0ID09PSB2b2lkIDApIHsgbGVmdCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChlID09PSB2b2lkIDApIHsgZSA9IG51bGw7IH1cbiAgICAgICAgICAgIHZhciB1bDtcbiAgICAgICAgICAgIHZhciBuYXZJZHg7XG4gICAgICAgICAgICB2YXIgbGlJdGVtO1xuICAgICAgICAgICAgdmFyIGJlZm9yZU9wZW5FdmVudEFyZ3M7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlcigpO1xuICAgICAgICAgICAgaWYgKGxpKSB7XG4gICAgICAgICAgICAgICAgdWwgPSB0aGlzLmNyZWF0ZUl0ZW1zKGl0ZW0uaXRlbXMpO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV80LkJyb3dzZXIuaXNEZXZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5sYXN0Q2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7IHRleHQ6IGl0ZW0udGV4dCwgaWNvbkNzczogSUNPTlMgKyAnIGUtcHJldmlvdXMnIH07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoZGF0YSA9IG5ldyBNZW51SXRlbSh0aGlzLml0ZW1zWzBdLCBudWxsLCBkYXRhLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhsaSA9IHRoaXMuY3JlYXRlSXRlbShbaGRhdGFdLCB0cnVlLCAnbWVudScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB1bC5pbnNlcnRCZWZvcmUoaGxpLCB1bC5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsLnN0eWxlLnpJbmRleCA9IHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXg7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdklkeCA9IHRoaXMuZ2V0SW5kZXgobGkgPyBsaS50ZXh0Q29udGVudCA6IG51bGwpO1xuICAgICAgICAgICAgbGlJdGVtID0gbGkgPyB0aGlzLmdldEl0ZW0obmF2SWR4KSA6IG51bGw7XG4gICAgICAgICAgICBiZWZvcmVPcGVuRXZlbnRBcmdzID0geyBlbGVtZW50OiB1bCwgaXRlbXM6IGxpID8gaXRlbS5pdGVtcyA6IHRoaXMuZ2V0SXRlbXMoW10pLCBwYXJlbnRJdGVtOiBsaUl0ZW0sIGV2ZW50OiBlLCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2JlZm9yZU9wZW4nLCBiZWZvcmVPcGVuRXZlbnRBcmdzKTtcbiAgICAgICAgICAgIGlmICghYmVmb3JlT3BlbkV2ZW50QXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGxpLCB1bCwgdG9wLCBsZWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUFuaW1hdGlvbih1bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5jcmVhdGVJdGVtID0gZnVuY3Rpb24gKGl0ZW0sIHNob3dJY29uLCBtb2R1bGVOYW1lLCBpc0hlYWRlcikge1xuICAgICAgICAgICAgaWYgKGlzSGVhZGVyID09PSB2b2lkIDApIHsgaXNIZWFkZXIgPSB0cnVlOyB9XG4gICAgICAgICAgICB2YXIgbGlzdE9wdCA9IHsgc2hvd0ljb246IHNob3dJY29uLCBtb2R1bGVOYW1lOiBtb2R1bGVOYW1lIH07XG4gICAgICAgICAgICBpZiAoaXNIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICBsaXN0T3B0Lml0ZW1DbGFzcyA9IEhFQURFUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsaSA9IGVqMl9saXN0c18xLkxpc3RCYXNlLmNyZWF0ZUxpc3RJdGVtRnJvbUpzb24odGhpcy50b1Jhd09iamVjdChpdGVtKSwgbGlzdE9wdCwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gbGlbMF07XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChsaSwgdWwsIHRvcCwgbGVmdCkge1xuICAgICAgICAgICAgdmFyIHB4ID0gJ3B4JztcbiAgICAgICAgICAgIGlmICh1bCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVWaXNpYmxpdHkodWwpO1xuICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlID0gZWoyX3BvcHVwc18xLmlzQ29sbGlkZSh1bCwgbnVsbCwgbGVmdCwgdG9wKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZS5pbmRleE9mKCdyaWdodCcpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQgLSB1bC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpZGUuaW5kZXhPZignYm90dG9tJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWoyX3BvcHVwc18xLmZpdCh1bCwgbnVsbCwgeyBYOiBmYWxzZSwgWTogdHJ1ZSB9LCB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH0pO1xuICAgICAgICAgICAgICAgICAgICB0b3AgPSBvZmZzZXQudG9wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2xsaWRlID0gZWoyX3BvcHVwc18xLmlzQ29sbGlkZSh1bCwgbnVsbCwgbGVmdCwgdG9wKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZS5pbmRleE9mKCdsZWZ0JykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWoyX3BvcHVwc18xLmZpdCh1bCwgbnVsbCwgeyBYOiB0cnVlLCBZOiBmYWxzZSB9LCB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH0pO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gb2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlVmlzaWJsaXR5KHVsLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5Ccm93c2VyLmlzRGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IE51bWJlcih0aGlzLmVsZW1lbnQuc3R5bGUudG9wLnJlcGxhY2UocHgsICcnKSk7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBOdW1iZXIodGhpcy5lbGVtZW50LnN0eWxlLmxlZnQucmVwbGFjZShweCwgJycpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gdGhpcy5lbmFibGVSdGwgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWoyX3BvcHVwc18xLmNhbGN1bGF0ZVBvc2l0aW9uKGxpLCB4LCAndG9wJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG9mZnNldC50b3A7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBvZmZzZXQubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVWaXNpYmxpdHkodWwpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlkZSA9IGVqMl9wb3B1cHNfMS5pc0NvbGxpZGUodWwsIG51bGwsIHRoaXMuZW5hYmxlUnRsID8gbGVmdCAtIHVsLm9mZnNldFdpZHRoIDogbGVmdCwgdG9wKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVWaXNpYmxpdHkodWwsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlajJfcG9wdXBzXzEuY2FsY3VsYXRlUG9zaXRpb24obGksIHRoaXMuZW5hYmxlUnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JywgJ3RvcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IG9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZVJ0bCB8fCBjb2xsaWRlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVWaXNpYmxpdHkodWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9ICh0aGlzLmVuYWJsZVJ0bCAmJiBjb2xsaWRlLmxlbmd0aCkgPyBsZWZ0IDogbGVmdCAtIHVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVWaXNpYmxpdHkodWwsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsLnN0eWxlLnRvcCA9IHRvcCArIHB4O1xuICAgICAgICAgICAgdWwuc3R5bGUubGVmdCA9IGxlZnQgKyBweDtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnRvZ2dsZVZpc2libGl0eSA9IGZ1bmN0aW9uICh1bCwgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICBpZiAoaXNWaXNpYmxlID09PSB2b2lkIDApIHsgaXNWaXNpYmxlID0gdHJ1ZTsgfVxuICAgICAgICAgICAgdWwuc3R5bGUudmlzaWJpbGl0eSA9IGlzVmlzaWJsZSA/ICdoaWRkZW4nIDogJyc7XG4gICAgICAgICAgICB1bC5zdHlsZS5kaXNwbGF5ID0gaXNWaXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmNyZWF0ZUl0ZW1zID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHNob3dJY29uID0gdGhpcy5oYXNGaWVsZChpdGVtcywgJ2ljb25Dc3MnKTtcbiAgICAgICAgICAgIHZhciBsaXN0QmFzZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgc2hvd0ljb246IHNob3dJY29uLFxuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICdtZW51JyxcbiAgICAgICAgICAgICAgICBpdGVtQ3JlYXRpbmc6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuY3VyRGF0YS5odG1sQXR0cmlidXRlcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6ICdtZW51aXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleDogJy0xJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0ljb24gJiYgIWFyZ3MuY3VyRGF0YS5pY29uQ3NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLmN1ckRhdGEuaWNvbkNzcyA9IElDT05TICsgJyBlLWJsYW5raWNvbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGl0ZW1DcmVhdGVkOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5jdXJEYXRhLnNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5pdGVtLmNsYXNzTGlzdC5yZW1vdmUoSVRFTSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLml0ZW0uY2xhc3NMaXN0LmFkZChTRVBBUkFUT1IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5pdGVtLnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmN1ckRhdGEuaXRlbXMgJiYgYXJncy5jdXJEYXRhLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwYW4gPSBlajJfYmFzZV81LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogSUNPTlMgKyAnICcgKyBDQVJFVCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MuaXRlbS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MuaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5pdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5pdGVtLnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5pdGVtLmNsYXNzTGlzdC5hZGQoJ2UtbWVudS1jYXJldC1pY29uJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJpZ2dlcignYmVmb3JlSXRlbVJlbmRlcicsIHsgZGF0YTogYXJncy5jdXJEYXRhLCBpdGVtOiBhcmdzLml0ZW0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB1bCA9IGVqMl9saXN0c18xLkxpc3RCYXNlLmNyZWF0ZUxpc3QodGhpcy50b1Jhd09iamVjdChpdGVtcy5zbGljZSgpKSwgbGlzdEJhc2VPcHRpb25zLCB0cnVlKTtcbiAgICAgICAgICAgIHVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgcmV0dXJuIHVsO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUudG9SYXdPYmplY3QgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgICAgIHZhciBpdGVtO1xuICAgICAgICAgICAgdmFyIG1lbnVJdGVtcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldLnByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVudUl0ZW1zO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUubW92ZXJIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICB2YXIgdHJndCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGNsaSA9IHRoaXMuZ2V0TEkodHJndCk7XG4gICAgICAgICAgICBpZiAoY2xpICYmIGVqMl9iYXNlXzUuY2xvc2VzdChjbGksICcuJyArIFdSQVBQRVIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZsaSA9IGVqMl9iYXNlXzUuc2VsZWN0KCcuJyArIEZPQ1VTRUQsIHdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGlmIChmbGkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxpLmNsYXNzTGlzdC5yZW1vdmUoRk9DVVNFRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsaS5jbGFzc0xpc3QuYWRkKEZPQ1VTRUQpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaG93SXRlbU9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja0hhbmRsZXIoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuaGFzRmllbGQgPSBmdW5jdGlvbiAoaXRlbXMsIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXNbaV1bZmllbGRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmdldFdyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUYXBIb2xkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhcEhvbGQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICAgICAgdmFyIHRyZ3QgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgY2xpID0gdGhpcy5nZXRMSSh0cmd0KTtcbiAgICAgICAgICAgICAgICBpZiAoY2xpICYmIGUudHlwZSA9PT0gJ2NsaWNrJyAmJiAhY2xpLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQ0FSRVQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TElTZWxlY3RlZChjbGkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmF2SWR4ID0gdGhpcy5nZXRJbmRleChjbGkudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbShuYXZJZHgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIHsgZWxlbWVudDogY2xpLCBpdGVtOiBpdGVtIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2xpICYmIGVqMl9iYXNlXzUuY2xvc2VzdChjbGksICcuJyArIFdSQVBQRVIpICYmIChlLnR5cGUgPT09ICdtb3VzZW92ZXInIHx8IGVqMl9iYXNlXzQuQnJvd3Nlci5pc0RldmljZSB8fCB0aGlzLnNob3dJdGVtT25DbGljaykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVsID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xpLmNsYXNzTGlzdC5jb250YWlucyhIRUFERVIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bCA9IHdyYXBwZXIuY2hpbGRyZW5bdGhpcy5uYXZJZHgubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUFuaW1hdGlvbih1bCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ29uT3BlbicsIHsgZWxlbWVudDogdWwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpID0gdGhpcy5nZXRMSUJ5Q2xhc3ModWwsIFNFTEVDVEVEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGkuY2xhc3NMaXN0LnJlbW92ZShTRUxFQ1RFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV81LmRldGFjaChjbGkucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdklkeC5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2xpLmNsYXNzTGlzdC5jb250YWlucyhTRVBBUkFUT1IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNob3dTdWJNZW51ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VsID0gY2xpLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsaUlkeCA9IHRoaXMuZ2V0SWR4KGN1bCwgY2xpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuQnJvd3Nlci5pc0RldmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VsSWR4ID0gdGhpcy5nZXRJZHgod3JhcHBlciwgY3VsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubmF2SWR4W2N1bElkeF0gPT09IGNsaUlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1N1Yk1lbnUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VsSWR4ICE9PSB0aGlzLm5hdklkeC5sZW5ndGggJiYgKGUudHlwZSAhPT0gJ21vdXNlb3ZlcicgfHwgc2hvd1N1Yk1lbnUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpID0gdGhpcy5nZXRMSUJ5Q2xhc3MoY3VsLCBTRUxFQ1RFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpLmNsYXNzTGlzdC5yZW1vdmUoU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoY3VsSWR4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dTdWJNZW51KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLm5hdklkeC5jb25jYXQoY2xpSWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpZHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV8zLmlzTnVsbE9yVW5kZWZpbmVkKGlkeFtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV8zLmlzTnVsbE9yVW5kZWZpbmVkKGlkeFtjb3VudF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbShpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMSVNlbGVjdGVkKGNsaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hdklkeCA9IHRoaXMuZ2V0SW5kZXgoY2xpLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlJdGVtID0gdGhpcy5nZXRJdGVtKG5hdklkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdzZWxlY3QnLCB7IGVsZW1lbnQ6IGNsaSwgaXRlbTogbGlJdGVtIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1lbnUoY2xpLCBpdGVtLCBudWxsLCBudWxsLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdklkeC5wdXNoKGNsaUlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50eXBlICE9PSAnbW91c2VvdmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyZ3QudGFnTmFtZSAhPT0gJ1VMJyB8fCB0cmd0LnBhcmVudEVsZW1lbnQgIT09IHdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2xpIHx8ICFjbGkucXVlcnlTZWxlY3RvcignLicgKyBDQVJFVCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuc2V0TElTZWxlY3RlZCA9IGZ1bmN0aW9uIChsaSkge1xuICAgICAgICAgICAgdmFyIHNsaSA9IHRoaXMuZ2V0TElCeUNsYXNzKGxpLnBhcmVudEVsZW1lbnQsIFNFTEVDVEVEKTtcbiAgICAgICAgICAgIGlmIChzbGkpIHtcbiAgICAgICAgICAgICAgICBzbGkuY2xhc3NMaXN0LnJlbW92ZShTRUxFQ1RFRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKEZPQ1VTRUQpO1xuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChTRUxFQ1RFRCk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5nZXRMSUJ5Q2xhc3MgPSBmdW5jdGlvbiAodWwsIGNsYXNzbmFtZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVsLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc25hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbiAobmF2SWR4KSB7XG4gICAgICAgICAgICBuYXZJZHggPSBuYXZJZHguc2xpY2UoKTtcbiAgICAgICAgICAgIHZhciBpZHggPSBuYXZJZHgucG9wKCk7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKG5hdklkeCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXNbaWR4XTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmdldEl0ZW1zID0gZnVuY3Rpb24gKG5hdklkeCkge1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmF2SWR4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBpdGVtc1tuYXZJZHhbaV1dLml0ZW1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuZ2V0SWR4ID0gZnVuY3Rpb24gKHVsLCBsaSwgc2tpcEhkcikge1xuICAgICAgICAgICAgaWYgKHNraXBIZHIgPT09IHZvaWQgMCkgeyBza2lwSGRyID0gdHJ1ZTsgfVxuICAgICAgICAgICAgdmFyIGlkeCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodWwuY2hpbGRyZW4sIGxpKTtcbiAgICAgICAgICAgIGlmIChza2lwSGRyICYmIHVsLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5jb250YWlucyhIRUFERVIpKSB7XG4gICAgICAgICAgICAgICAgaWR4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuZ2V0TEkgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgaWYgKGVsZW0udGFnTmFtZSA9PT0gJ0xJJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVqMl9iYXNlXzUuY2xvc2VzdChlbGVtLCAnbGknKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLm9uUHJvcGVydHlDaGFuZ2VkID0gZnVuY3Rpb24gKG5ld1Byb3AsIG9sZFByb3ApIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobmV3UHJvcCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nzc0NsYXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRQcm9wLmNzc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKG9sZFByb3AuY3NzQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3AuY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQobmV3UHJvcC5jc3NDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5hYmxlUnRsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShSVEwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbHRlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXIgPSBuZXdQcm9wLmZpbHRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzaG93SXRlbU9uQ2xpY2snOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bldpcmVFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0l0ZW1PbkNsaWNrID0gbmV3UHJvcC5zaG93SXRlbU9uQ2xpY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd0YXJnZXQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bldpcmVFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3UHJvcC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnVuV2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRFbGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuQnJvd3Nlci5pc0lvcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoTW9kdWxlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLnRhcmdldEVsZW0sICdjb250ZXh0bWVudScsIHRoaXMuY21lbnVIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuZ2V0U2Nyb2xsYWJsZVBhcmVudHModGhpcy50YXJnZXRFbGVtKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudF8yID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5yZW1vdmUocGFyZW50XzIsICdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5Ccm93c2VyLmlzRGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKHdyYXBwZXIsICdtb3VzZW92ZXInLCB0aGlzLm1vdmVySGFuZGxlcik7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKGRvY3VtZW50LCAnbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZShkb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5rZXlib2FyZE1vZHVsZS5kZXN0cm95KCk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS50b2dnbGVBbmltYXRpb24gPSBmdW5jdGlvbiAodWwsIGlzTWVudU9wZW4pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoaXNNZW51T3BlbiA9PT0gdm9pZCAwKSB7IGlzTWVudU9wZW4gPSB0cnVlOyB9XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltYXRpb25TZXR0aW5ncy5lZmZlY3QgPT09ICdOb25lJyB8fCAhaXNNZW51T3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kKHVsLCBpc01lbnVPcGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLmFuaW1hdGUodWwsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5hbmltYXRpb25TZXR0aW5ncy5lZmZlY3QsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmFuaW1hdGlvblNldHRpbmdzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogdGhpcy5hbmltYXRpb25TZXR0aW5ncy5lYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWVudU9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IG9wdGlvbnMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmQob3B0aW9ucy5lbGVtZW50LCBpc01lbnVPcGVuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKHVsLCBpc01lbnVPcGVuKSB7XG4gICAgICAgICAgICBpZiAoaXNNZW51T3Blbikge1xuICAgICAgICAgICAgICAgIHVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignb25PcGVuJywgeyBlbGVtZW50OiB1bCB9KTtcbiAgICAgICAgICAgICAgICBpZiAodWwucXVlcnlTZWxlY3RvcignLicgKyBGT0NVU0VEKSkge1xuICAgICAgICAgICAgICAgICAgICB1bC5xdWVyeVNlbGVjdG9yKCcuJyArIEZPQ1VTRUQpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBlbGUgPSB0aGlzLmdldFdyYXBwZXIoKS5jaGlsZHJlblt0aGlzLmdldElkeCh0aGlzLmdldFdyYXBwZXIoKSwgdWwpIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZS5xdWVyeVNlbGVjdG9yKCcuJyArIFNFTEVDVEVEKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodWwgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmxpID0gdGhpcy5nZXRMSUJ5Q2xhc3ModGhpcy5lbGVtZW50LCBGT0NVU0VEKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxpLmNsYXNzTGlzdC5yZW1vdmUoRk9DVVNFRCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaSA9IHRoaXMuZ2V0TElCeUNsYXNzKHRoaXMuZWxlbWVudCwgU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGkuY2xhc3NMaXN0LnJlbW92ZShTRUxFQ1RFRCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzUuZGV0YWNoKHVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5nZXRQZXJzaXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmdldE1vZHVsZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2NvbnRleHRtZW51JztcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmNoZWNrSW5kZXggPSBmdW5jdGlvbiAoZGF0YSwgaXRlbXMpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtc1tpXS50ZXh0ID09PSBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5nZXRJbmRleCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gW107XG4gICAgICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIGluZGV4Q291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgICAgIGluZGV4LnB1c2godGhpcy5jaGVja0luZGV4KGRhdGEsIGl0ZW1zKSk7XG4gICAgICAgICAgICBpZiAoaW5kZXguaW5kZXhPZigtMSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBbXTtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pdGVtcy5sZW5ndGggPiAwOyB9KTtcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LnB1c2goX3RoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LnB1c2goX3RoaXMuY2hlY2tJbmRleChkYXRhLCBpdGVtLml0ZW1zKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4LmluZGV4T2YoLTEpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmRleC5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1zcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zcyA9IGl0ZW1zW2tdLml0ZW1zO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleC5wdXNoKGl0ZW1zcy5pbmRleE9mKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleC5wdXNoKF90aGlzLmNoZWNrSW5kZXgoZGF0YSwgaXRlbS5pdGVtcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleC5pbmRleE9mKC0xKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleC5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBpdGVtcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2xvb3BfMShrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmVuYWJsZUl0ZW1zID0gZnVuY3Rpb24gKGl0ZW1zLCBlbmFibGUpIHtcbiAgICAgICAgICAgIGlmIChlbmFibGUgPT09IHZvaWQgMCkgeyBlbmFibGUgPSB0cnVlOyB9XG4gICAgICAgICAgICB2YXIgdWw7XG4gICAgICAgICAgICB2YXIgaWR4O1xuICAgICAgICAgICAgdmFyIG5hdklkeDtcbiAgICAgICAgICAgIHZhciBkaXNhYmxlZCA9IERJU0FCTEVEO1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXIoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuYXZJZHggPSB0aGlzLmdldEluZGV4KGl0ZW1zW2ldKTtcbiAgICAgICAgICAgICAgICBpZHggPSBuYXZJZHgucG9wKCk7XG4gICAgICAgICAgICAgICAgdWwgPSB3cmFwcGVyLmNoaWxkcmVuW25hdklkeC5sZW5ndGhdO1xuICAgICAgICAgICAgICAgIGlmICh1bCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5Ccm93c2VyLmlzRGV2aWNlICYmICF1bC5jbGFzc0xpc3QuY29udGFpbnMoJ2UtY29udGV4dG1lbnUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsLmNoaWxkcmVuW2lkeCArIDFdLmNsYXNzTGlzdC5yZW1vdmUoZGlzYWJsZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWwuY2hpbGRyZW5baWR4XS5jbGFzc0xpc3QucmVtb3ZlKGRpc2FibGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV80LkJyb3dzZXIuaXNEZXZpY2UgJiYgIXVsLmNsYXNzTGlzdC5jb250YWlucygnZS1jb250ZXh0bWVudScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWwuY2hpbGRyZW5baWR4ICsgMV0uY2xhc3NMaXN0LmFkZChkaXNhYmxlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bC5jaGlsZHJlbltpZHhdLmNsYXNzTGlzdC5hZGQoZGlzYWJsZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb250ZXh0TWVudS5wcm90b3R5cGUuc2hvd0l0ZW1zID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dIaWRlSXRlbXMoaXRlbXMsIGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmhpZGVJdGVtcyA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgdGhpcy5zaG93SGlkZUl0ZW1zKGl0ZW1zLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnNob3dIaWRlSXRlbXMgPSBmdW5jdGlvbiAoaXRlbXMsIGlzaGlkZSkge1xuICAgICAgICAgICAgdmFyIHVsO1xuICAgICAgICAgICAgdmFyIGlkeDtcbiAgICAgICAgICAgIHZhciBuYXZJZHg7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlcigpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG5hdklkeCA9IHRoaXMuZ2V0SW5kZXgoaXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgIGlkeCA9IG5hdklkeC5wb3AoKTtcbiAgICAgICAgICAgICAgICB1bCA9IHdyYXBwZXIuY2hpbGRyZW5bbmF2SWR4Lmxlbmd0aF07XG4gICAgICAgICAgICAgICAgaWYgKHVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc2hpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV80LkJyb3dzZXIuaXNEZXZpY2UgJiYgIXVsLmNsYXNzTGlzdC5jb250YWlucygnZS1jb250ZXh0bWVudScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWwuY2hpbGRyZW5baWR4ICsgMV0uY2xhc3NMaXN0LmFkZChISURFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsLmNoaWxkcmVuW2lkeF0uY2xhc3NMaXN0LmFkZChISURFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV80LkJyb3dzZXIuaXNEZXZpY2UgJiYgIXVsLmNsYXNzTGlzdC5jb250YWlucygnZS1jb250ZXh0bWVudScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWwuY2hpbGRyZW5baWR4ICsgMV0uY2xhc3NMaXN0LnJlbW92ZShISURFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsLmNoaWxkcmVuW2lkeF0uY2xhc3NMaXN0LnJlbW92ZShISURFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLnJlbW92ZUl0ZW1zID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgICAgICB2YXIgaWR4O1xuICAgICAgICAgICAgdmFyIG5hdklkeDtcbiAgICAgICAgICAgIHZhciBpaXRlbXM7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmF2SWR4ID0gdGhpcy5nZXRJbmRleChpdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgaWR4ID0gbmF2SWR4LnBvcCgpO1xuICAgICAgICAgICAgICAgIGlpdGVtcyA9IHRoaXMuZ2V0SXRlbXMobmF2SWR4KTtcbiAgICAgICAgICAgICAgICBpaXRlbXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKCFuYXZJZHgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzUuZGV0YWNoKHRoaXMuZWxlbWVudC5jaGlsZHJlbltpZHhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChpdGVtcywgdGV4dCkge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRJdGVtcyhpdGVtcywgdGV4dCk7XG4gICAgICAgIH07XG4gICAgICAgIENvbnRleHRNZW51LnByb3RvdHlwZS5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbiAoaXRlbXMsIHRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0SXRlbXMoaXRlbXMsIHRleHQsIGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmluc2VydEl0ZW1zID0gZnVuY3Rpb24gKGl0ZW1zLCB0ZXh0LCBpc0FmdGVyKSB7XG4gICAgICAgICAgICBpZiAoaXNBZnRlciA9PT0gdm9pZCAwKSB7IGlzQWZ0ZXIgPSB0cnVlOyB9XG4gICAgICAgICAgICB2YXIgbGk7XG4gICAgICAgICAgICB2YXIgaWR4O1xuICAgICAgICAgICAgdmFyIG5hdklkeDtcbiAgICAgICAgICAgIHZhciBpaXRlbXM7XG4gICAgICAgICAgICB2YXIgbWVudWl0ZW07XG4gICAgICAgICAgICB2YXIgc2hvd0ljb247XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmF2SWR4ID0gdGhpcy5nZXRJbmRleCh0ZXh0KTtcbiAgICAgICAgICAgICAgICBpZHggPSBuYXZJZHgucG9wKCk7XG4gICAgICAgICAgICAgICAgaWl0ZW1zID0gdGhpcy5nZXRJdGVtcyhuYXZJZHgpO1xuICAgICAgICAgICAgICAgIG1lbnVpdGVtID0gbmV3IE1lbnVJdGVtKGlpdGVtc1swXSwgbnVsbCwgaXRlbXNbaV0sIHRydWUpO1xuICAgICAgICAgICAgICAgIGlpdGVtcy5zcGxpY2UoaXNBZnRlciA/IGlkeCArIDEgOiBpZHgsIDAsIG1lbnVpdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoIW5hdklkeC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWR4ID0gaXNBZnRlciA/IGlkeCArIDEgOiBpZHg7XG4gICAgICAgICAgICAgICAgICAgIHNob3dJY29uID0gdGhpcy5oYXNGaWVsZChpaXRlbXMsICdpY29uQ3NzJyk7XG4gICAgICAgICAgICAgICAgICAgIGxpID0gdGhpcy5jcmVhdGVJdGVtKFttZW51aXRlbV0sIHNob3dJY29uLCAnbWVudScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShsaSwgdGhpcy5lbGVtZW50LmNoaWxkcmVuW2lkeF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmdldFpJbmRleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciBwcm9wcztcbiAgICAgICAgICAgIHZhciB6SW5kZXggPSBbJzk5OSddO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRvY3VtZW50LmJvZHkuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwcm9wcyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keS5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBwcm9wcy5nZXRQcm9wZXJ0eVZhbHVlKCd6LWluZGV4Jyk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBwcm9wcy5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gJ2F1dG8nICYmIHBvc2l0aW9uICE9PSAnc3RhdGljJykge1xuICAgICAgICAgICAgICAgICAgICB6SW5kZXgucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChNYXRoLm1heC5hcHBseShNYXRoLCB6SW5kZXgpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29udGV4dE1lbnUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXIoKTtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy51bldpcmVFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBbJ3RvcCcsICdsZWZ0JywgJ2Rpc3BsYXknLCAncm9sZScsICd0YWJpbmRleCddLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd3JhcHBlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmVsZW1lbnQsIHdyYXBwZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfNS5kZXRhY2god3JhcHBlcik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBDb250ZXh0TWVudTtcbiAgICB9KGVqMl9iYXNlXzEuQ29tcG9uZW50KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgQ29udGV4dE1lbnUucHJvdG90eXBlLCBcImNzc0NsYXNzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgQ29udGV4dE1lbnUucHJvdG90eXBlLCBcImZpbHRlclwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIENvbnRleHRNZW51LnByb3RvdHlwZSwgXCJzaG93SXRlbU9uQ2xpY2tcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfNC5Db2xsZWN0aW9uKFtdLCBNZW51SXRlbSlcbiAgICBdLCBDb250ZXh0TWVudS5wcm90b3R5cGUsIFwiaXRlbXNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBDb250ZXh0TWVudS5wcm90b3R5cGUsIFwidGFyZ2V0XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoeyBkdXJhdGlvbjogNDAwLCBlYXNpbmc6ICdlYXNlJywgZWZmZWN0OiAnU2xpZGVEb3duJyB9KVxuICAgIF0sIENvbnRleHRNZW51LnByb3RvdHlwZSwgXCJhbmltYXRpb25TZXR0aW5nc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLkV2ZW50KClcbiAgICBdLCBDb250ZXh0TWVudS5wcm90b3R5cGUsIFwiYmVmb3JlSXRlbVJlbmRlclwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLkV2ZW50KClcbiAgICBdLCBDb250ZXh0TWVudS5wcm90b3R5cGUsIFwiYmVmb3JlT3BlblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLkV2ZW50KClcbiAgICBdLCBDb250ZXh0TWVudS5wcm90b3R5cGUsIFwib25PcGVuXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuRXZlbnQoKVxuICAgIF0sIENvbnRleHRNZW51LnByb3RvdHlwZSwgXCJvbkNsb3NlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuRXZlbnQoKVxuICAgIF0sIENvbnRleHRNZW51LnByb3RvdHlwZSwgXCJzZWxlY3RcIiwgdm9pZCAwKTtcbiAgICBDb250ZXh0TWVudSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLk5vdGlmeVByb3BlcnR5Q2hhbmdlc1xuICAgIF0sIENvbnRleHRNZW51KTtcbiAgICBleHBvcnRzLkNvbnRleHRNZW51ID0gQ29udGV4dE1lbnU7XG4gICAgZXhwb3J0cy5jb250ZXh0TWVudUJ1aWxkZXIgPSBlajJfYmFzZV8xLkNyZWF0ZUJ1aWxkZXIoQ29udGV4dE1lbnUpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1saXN0c1wiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL3RhYlwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIHRhYl8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydCh0YWJfMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RhYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiLi4vdG9vbGJhci90b29sYmFyXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgZWoyX2Jhc2VfMSwgZWoyX2Jhc2VfMiwgZWoyX2Jhc2VfMywgZWoyX2Jhc2VfNCwgZWoyX2Jhc2VfNSwgdG9vbGJhcl8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBDTFNfVEFCID0gJ2UtdGFiJztcbiAgICB2YXIgQ0xTX0hFQURFUiA9ICdlLWhlYWRlcic7XG4gICAgdmFyIENMU19DT05URU5UID0gJ2UtY29udGVudCc7XG4gICAgdmFyIENMU19JVEVNUyA9ICdlLWl0ZW1zJztcbiAgICB2YXIgQ0xTX0lURU0gPSAnZS1pdGVtJztcbiAgICB2YXIgQ0xTX1RFTVBMQVRFID0gJ2UtdGVtcGxhdGUnO1xuICAgIHZhciBDTFNfUlRMID0gJ2UtcnRsJztcbiAgICB2YXIgQ0xTX0FDVElWRSA9ICdlLWFjdGl2ZSc7XG4gICAgdmFyIENMU19ESVNBQkxFID0gJ2UtZGlzYWJsZSc7XG4gICAgdmFyIENMU19ISURERU4gPSAnZS1oaWRkZW4nO1xuICAgIHZhciBDTFNfRk9DVVMgPSAnZS1mb2N1c2VkJztcbiAgICB2YXIgQ0xTX0lDT05TID0gJ2UtaWNvbnMnO1xuICAgIHZhciBDTFNfSUNPTiA9ICdlLWljb24nO1xuICAgIHZhciBDTFNfSUNPTl9DTE9TRSA9ICdlLWNsb3NlLWljb24nO1xuICAgIHZhciBDTFNfQ0xPU0VfU0hPVyA9ICdlLWNsb3NlLXNob3cnO1xuICAgIHZhciBDTFNfVEVYVCA9ICdlLXRhYi10ZXh0JztcbiAgICB2YXIgQ0xTX0lORElDQVRPUiA9ICdlLWluZGljYXRvcic7XG4gICAgdmFyIENMU19XUkFQID0gJ2UtdGFiLXdyYXAnO1xuICAgIHZhciBDTFNfVEVYVF9XUkFQID0gJ2UtdGV4dC13cmFwJztcbiAgICB2YXIgQ0xTX1RBQl9JQ09OID0gJ2UtdGFiLWljb24nO1xuICAgIHZhciBDTFNfVEJfSVRFTVMgPSAnZS10b29sYmFyLWl0ZW1zJztcbiAgICB2YXIgQ0xTX1RCX0lURU0gPSAnZS10b29sYmFyLWl0ZW0nO1xuICAgIHZhciBDTFNfVEJfUE9QID0gJ2UtdG9vbGJhci1wb3AnO1xuICAgIHZhciBDTFNfVEJfUE9QVVAgPSAnZS10b29sYmFyLXBvcHVwJztcbiAgICB2YXIgQ0xTX1BPUFVQX09QRU4gPSAnZS1wb3B1cC1vcGVuJztcbiAgICB2YXIgQ0xTX1BPUFVQX0NMT1NFID0gJ2UtcG9wdXAtY2xvc2UnO1xuICAgIHZhciBDTFNfUFJPR1JFU1MgPSAnZS1wcm9ncmVzcyc7XG4gICAgdmFyIENMU19JR05PUkUgPSAnZS1pZ25vcmUnO1xuICAgIHZhciBUYWJBY3Rpb25TZXR0aW5ncyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhUYWJBY3Rpb25TZXR0aW5ncywgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gVGFiQWN0aW9uU2V0dGluZ3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFRhYkFjdGlvblNldHRpbmdzO1xuICAgIH0oZWoyX2Jhc2VfMi5DaGlsZFByb3BlcnR5KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ1NsaWRlTGVmdEluJylcbiAgICBdLCBUYWJBY3Rpb25TZXR0aW5ncy5wcm90b3R5cGUsIFwiZWZmZWN0XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoNjAwKVxuICAgIF0sIFRhYkFjdGlvblNldHRpbmdzLnByb3RvdHlwZSwgXCJkdXJhdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdlYXNlJylcbiAgICBdLCBUYWJBY3Rpb25TZXR0aW5ncy5wcm90b3R5cGUsIFwiZWFzaW5nXCIsIHZvaWQgMCk7XG4gICAgZXhwb3J0cy5UYWJBY3Rpb25TZXR0aW5ncyA9IFRhYkFjdGlvblNldHRpbmdzO1xuICAgIHZhciBUYWJBbmltYXRpb25TZXR0aW5ncyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhUYWJBbmltYXRpb25TZXR0aW5ncywgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gVGFiQW5pbWF0aW9uU2V0dGluZ3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFRhYkFuaW1hdGlvblNldHRpbmdzO1xuICAgIH0oZWoyX2Jhc2VfMi5DaGlsZFByb3BlcnR5KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuQ29tcGxleCh7IGVmZmVjdDogJ1NsaWRlTGVmdEluJywgZHVyYXRpb246IDYwMCwgZWFzaW5nOiAnZWFzZScgfSwgVGFiQWN0aW9uU2V0dGluZ3MpXG4gICAgXSwgVGFiQW5pbWF0aW9uU2V0dGluZ3MucHJvdG90eXBlLCBcInByZXZpb3VzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuQ29tcGxleCh7IGVmZmVjdDogJ1NsaWRlUmlnaHRJbicsIGR1cmF0aW9uOiA2MDAsIGVhc2luZzogJ2Vhc2UnIH0sIFRhYkFjdGlvblNldHRpbmdzKVxuICAgIF0sIFRhYkFuaW1hdGlvblNldHRpbmdzLnByb3RvdHlwZSwgXCJuZXh0XCIsIHZvaWQgMCk7XG4gICAgZXhwb3J0cy5UYWJBbmltYXRpb25TZXR0aW5ncyA9IFRhYkFuaW1hdGlvblNldHRpbmdzO1xuICAgIHZhciBIZWFkZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoSGVhZGVyLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEhlYWRlcjtcbiAgICB9KGVqMl9iYXNlXzIuQ2hpbGRQcm9wZXJ0eSkpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIEhlYWRlci5wcm90b3R5cGUsIFwidGV4dFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIEhlYWRlci5wcm90b3R5cGUsIFwiaWNvbkNzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdsZWZ0JylcbiAgICBdLCBIZWFkZXIucHJvdG90eXBlLCBcImljb25Qb3NpdGlvblwiLCB2b2lkIDApO1xuICAgIGV4cG9ydHMuSGVhZGVyID0gSGVhZGVyO1xuICAgIHZhciBUYWJJdGVtID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKFRhYkl0ZW0sIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIFRhYkl0ZW0oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFRhYkl0ZW07XG4gICAgfShlajJfYmFzZV8yLkNoaWxkUHJvcGVydHkpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Db21wbGV4KHt9LCBIZWFkZXIpXG4gICAgXSwgVGFiSXRlbS5wcm90b3R5cGUsIFwiaGVhZGVyXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgVGFiSXRlbS5wcm90b3R5cGUsIFwiY29udGVudFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIFRhYkl0ZW0ucHJvdG90eXBlLCBcImNzc0NsYXNzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgVGFiSXRlbS5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwgdm9pZCAwKTtcbiAgICBleHBvcnRzLlRhYkl0ZW0gPSBUYWJJdGVtO1xuICAgIHZhciBUYWIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoVGFiLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBUYWIob3B0aW9ucywgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucywgZWxlbWVudCkgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLnByZXZJbmRleCA9IDA7XG4gICAgICAgICAgICBfdGhpcy5zaG93ID0geyBuYW1lOiAnU2xpZGVEb3duJywgZHVyYXRpb246IDEwMCB9O1xuICAgICAgICAgICAgX3RoaXMuaGlkZSA9IHsgbmFtZTogJ1NsaWRlVXAnLCBkdXJhdGlvbjogMTAwIH07XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRlT3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgX3RoaXMuYW5pbU9iaiA9IG5ldyBlajJfYmFzZV81LkFuaW1hdGlvbihfdGhpcy5hbmltYXRlT3B0aW9ucyk7XG4gICAgICAgICAgICBfdGhpcy5tYXhIZWlnaHQgPSAwO1xuICAgICAgICAgICAgX3RoaXMudGl0bGUgPSAnQ2xvc2UnO1xuICAgICAgICAgICAgX3RoaXMua2V5Q29uZmlncyA9IHtcbiAgICAgICAgICAgICAgICB0YWI6ICd0YWInLFxuICAgICAgICAgICAgICAgIGhvbWU6ICdob21lJyxcbiAgICAgICAgICAgICAgICBlbmQ6ICdlbmQnLFxuICAgICAgICAgICAgICAgIGVudGVyOiAnZW50ZXInLFxuICAgICAgICAgICAgICAgIHNwYWNlOiAnc3BhY2UnLFxuICAgICAgICAgICAgICAgIGRlbGV0ZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgICAgbW92ZUxlZnQ6ICdsZWZ0YXJyb3cnLFxuICAgICAgICAgICAgICAgIG1vdmVSaWdodDogJ3JpZ2h0YXJyb3cnLFxuICAgICAgICAgICAgICAgIG1vdmVVcDogJ3VwYXJyb3cnLFxuICAgICAgICAgICAgICAgIG1vdmVEb3duOiAnZG93bmFycm93J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuICAgICAgICBUYWIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudGJPYmopKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50Yk9iai5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVuV2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgWydyb2xlJywgJ2FyaWEtZGlzYWJsZWQnLCAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgJ3RhYmluZGV4JywgJ2FyaWEtb3JpZW50YXRpb24nXS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh2YWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjbnRFbGUgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfVEFCICsgJyA+IC4nICsgQ0xTX0NPTlRFTlQsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xTX1RFTVBMQVRFKTtcbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoY250RWxlKSkge1xuICAgICAgICAgICAgICAgICAgICBjbnRFbGUuaW5uZXJIVE1MID0gdGhpcy5jbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2Rlc3Ryb3llZCcpO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnByZVJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNQb3B1cCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbml0UmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBuYW1lID0gZWoyX2Jhc2VfMy5Ccm93c2VyLmluZm8ubmFtZTtcbiAgICAgICAgICAgIHZhciBjc3MgPSAobmFtZSA9PT0gJ21zaWUnKSA/ICdlLWllJyA6IChuYW1lID09PSAnZWRnZScpID8gJ2UtZWRnZScgOiAobmFtZSA9PT0gJ3NhZmFyaScpID8gJ2Utc2FmYXJpJyA6ICcnO1xuICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZXRTdHlsZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQsIHsgJ3dpZHRoJzogZWoyX2Jhc2VfMy5mb3JtYXRVbml0KHRoaXMud2lkdGgpLCAnaGVpZ2h0JzogZWoyX2Jhc2VfMy5mb3JtYXRVbml0KHRoaXMuaGVpZ2h0KSB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3NzQ2xhc3ModGhpcy5lbGVtZW50LCB0aGlzLmNzc0NsYXNzLCB0cnVlKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgcm9sZTogJ3RhYmxpc3QnLCAnYXJpYS1kaXNhYmxlZCc6ICdmYWxzZScsICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiAnJyB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3NzQ2xhc3ModGhpcy5lbGVtZW50LCBjc3MsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ29udGFpbmVyKCk7XG4gICAgICAgICAgICB0aGlzLndpcmVFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlbmRlciA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnJlbmRlckNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA+IDAgJiYgdGhpcy5lbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChlajJfYmFzZV80LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfQ09OVEVOVCB9KSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRPcmllbnRhdGlvbih0aGlzLmhlYWRlclBsYWNlbWVudCwgZWoyX2Jhc2VfNC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX0hFQURFUiB9KSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RlbXBsYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUZW1wbGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xTX1RFTVBMQVRFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfSEVBREVSLCB0aGlzLmVsZW1lbnQpKSAmJiAhZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfQ09OVEVOVCwgdGhpcy5lbGVtZW50KSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhlYWRlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMudGJJdGVtcyA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19UQl9JVEVNUywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGhpcy50Ykl0ZW1zKSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV81LnJpcHBsZUVmZmVjdCh0aGlzLnRiSXRlbXMsIHsgc2VsZWN0b3I6ICcuZS10YWItd3JhcCcgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV80LnNlbGVjdEFsbCgnLicgKyBDTFNfVEJfSVRFTSwgdGhpcy5lbGVtZW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGJJdGVtcyA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19UQl9JVEVNUywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZHJMaW5lID0gZWoyX2Jhc2VfNC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX0lORElDQVRPUiArICcgJyArIENMU19ISURERU4gKyAnICcgKyBDTFNfSUdOT1JFIH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2NyQ250ID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy5lLWhzY3JvbGwtY29udGVudCcsIHRoaXMudGJJdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChzY3JDbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JDbnQuaW5zZXJ0QmVmb3JlKHRoaXMuYmRyTGluZSwgc2NyQ250LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50Ykl0ZW1zLmluc2VydEJlZm9yZSh0aGlzLmJkckxpbmUsIHRoaXMudGJJdGVtcy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbnRlbnRIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSVEwodGhpcy5lbmFibGVSdGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnJlbmRlckhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgdGFiSXRlbXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuaGRyRWxlID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX0hFQURFUiwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuYnRuQ2xzID0gZWoyX2Jhc2VfNC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IENMU19JQ09OUyArICcgJyArIENMU19JQ09OX0NMT1NFLCBhdHRyczogeyB0aXRsZTogdGhpcy50aXRsZSB9IH0pLm91dGVySFRNTDtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1RlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgdGFiSXRlbXMgPSB0aGlzLnBhcnNlT2JqZWN0KHRoaXMuaXRlbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gdGhpcy5oZHJFbGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBoZHJJdGVtcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBoZHJJdGVtcy5wdXNoKHRoaXMuaGRyRWxlLmNoaWxkcmVuLml0ZW0oaSkuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhkckVsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZHJFbGUuYXBwZW5kQ2hpbGQoZWoyX2Jhc2VfNC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogQ0xTX0lURU1TIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgaGRySXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogQ0xTX0lURU0sIGlkOiBDTFNfSVRFTSArICdfJyArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6ICd0YWInLCAnYXJpYS1jb250cm9scyc6IENMU19DT05URU5UICsgJ18nICsgaW5kZXgsICdhcmlhLXNlbGVjdGVkJzogJ2ZhbHNlJyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4dCA9IGVqMl9iYXNlXzQuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBDTFNfVEVYVCwgaW5uZXJIVE1MOiBpdGVtLCBhdHRyczogeyAncm9sZSc6ICdwcmVzZW50YXRpb24nIH0gfSkub3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnQgPSBlajJfYmFzZV80LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfVEVYVF9XUkFQLCBpbm5lckhUTUw6IHR4dCArIF90aGlzLmJ0bkNscyB9KS5vdXRlckhUTUw7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9IGVqMl9iYXNlXzQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19XUkFQLCBpbm5lckhUTUw6IGNvbnQsIGF0dHJzOiB7IHRhYkluZGV4OiAnLTEnIH0gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfSVRFTVMsIF90aGlzLmVsZW1lbnQpLmFwcGVuZENoaWxkKGVqMl9iYXNlXzQuY3JlYXRlRWxlbWVudCgnZGl2JywgYXR0cikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJy4nICsgQ0xTX0lURU0sIF90aGlzLmVsZW1lbnQpW2luZGV4XS5hcHBlbmRDaGlsZCh3cmFwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50Yk9iaiA9IG5ldyB0b29sYmFyXzEuVG9vbGJhcih7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvd01vZGU6IHRoaXMub3ZlcmZsb3dNb2RlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiAodGFiSXRlbXMubGVuZ3RoICE9PSAwKSA/IHRhYkl0ZW1zIDogW10sXG4gICAgICAgICAgICAgICAgY2xpY2tlZDogdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnRiT2JqLmFwcGVuZFRvKHRoaXMuaGRyRWxlKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyh0aGlzLmVsZW1lbnQsIHsgJ2FyaWEtb3JpZW50YXRpb24nOiAnaG9yaXpvbnRhbCcgfSk7XG4gICAgICAgICAgICB0aGlzLnNldENsb3NlQnV0dG9uKHRoaXMuc2hvd0Nsb3NlQnV0dG9uKTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IGhlYWRlclBsYWNlbWVudDogKHRoaXMuZWxlbWVudC5jaGlsZHJlbi5pdGVtKDApLmNsYXNzTGlzdC5jb250YWlucyhDTFNfSEVBREVSKSkgPyAnVG9wJyA6ICdCb3R0b20nIH0sIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnJlbmRlckNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNudEVsZSA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19DT05URU5ULCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIGhkckl0ZW0gPSBlajJfYmFzZV80LnNlbGVjdEFsbCgnLicgKyBDTFNfVEJfSVRFTSwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNudCA9ICh0aGlzLmNudEVsZS5jaGlsZHJlbi5sZW5ndGggPiAwKSA/IHRoaXMuY250RWxlLmlubmVySFRNTCA6ICcnO1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50cyA9IHRoaXMuY250RWxlLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGRySXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudHMubGVuZ3RoIC0gMSA+PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50cy5pdGVtKGkpLmNsYXNzTmFtZSArPSBDTFNfSVRFTTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzEuYXR0cmlidXRlcyhjb250ZW50cy5pdGVtKGkpLCB7ICdyb2xlJzogJ3RhYnBhbmVsJywgJ2FyaWEtbGFiZWxsZWRieSc6IENMU19JVEVNICsgJ18nICsgaSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzLml0ZW0oaSkuaWQgPSBDTFNfQ09OVEVOVCArICdfJyArIGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUucGFyc2VPYmplY3QgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgaW5IVE1MID0gJyc7XG4gICAgICAgICAgICB2YXIgdGJDb3VudCA9IGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19UQl9JVEVNLCB0aGlzLmVsZW1lbnQpLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciB0SXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGl0ZW0uaGVhZGVyLmljb25Qb3NpdGlvbikpID8gJycgOiBpdGVtLmhlYWRlci5pY29uUG9zaXRpb247XG4gICAgICAgICAgICAgICAgdmFyIGNzcyA9IChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGl0ZW0uaGVhZGVyLmljb25Dc3MpKSA/ICcnIDogaXRlbS5oZWFkZXIuaWNvbkNzcztcbiAgICAgICAgICAgICAgICB2YXIgdHh0ID0gaXRlbS5oZWFkZXIudGV4dDtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSAoKHRiQ291bnQgPT09IDApID8gaW5kZXggOiAoX3RoaXMuaXNSZXBsYWNlID09PSB0cnVlKSA/IGluZGV4IDogdGJDb3VudCArIGluZGV4KTtcbiAgICAgICAgICAgICAgICB2YXIgZGlzYWJsZWQgPSAoaXRlbS5kaXNhYmxlZCkgPyAnICcgKyBDTFNfRElTQUJMRSA6ICcnO1xuICAgICAgICAgICAgICAgIHZhciB0SHRtbCA9ICgodHh0IGluc3RhbmNlb2YgT2JqZWN0KSA/IHR4dC5vdXRlckhUTUwgOiB0eHQpO1xuICAgICAgICAgICAgICAgIHZhciB0eHRFbXB0eSA9ICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0SHRtbCkgJiYgdEh0bWwgIT09ICcnKTtcbiAgICAgICAgICAgICAgICB2YXIgdEVsZSA9ICh0eHRFbXB0eSkgPyBlajJfYmFzZV80LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBDTFNfVEVYVCwgaW5uZXJIVE1MOiB0SHRtbCwgYXR0cnM6IHsgJ3JvbGUnOiAncHJlc2VudGF0aW9uJyB9XG4gICAgICAgICAgICAgICAgfSkub3V0ZXJIVE1MIDogJyc7XG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSBlajJfYmFzZV80LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogQ0xTX0lDT05TICsgJyAnICsgQ0xTX1RBQl9JQ09OICsgJyAnICsgQ0xTX0lDT04gKyAnLScgKyBwb3MgKyAnICcgKyBjc3NcbiAgICAgICAgICAgICAgICB9KS5vdXRlckhUTUw7XG4gICAgICAgICAgICAgICAgaWYgKCh0eHQgPT09ICcnIHx8IHR4dCA9PT0gdW5kZWZpbmVkKSAmJiBjc3MgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgodHh0ICE9PSAnJyAmJiB0eHQgIT09IHVuZGVmaW5lZCkgJiYgY3NzICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5IVE1MID0gKHBvcyA9PT0gJ2xlZnQnIHx8IHBvcyA9PT0gJ3RvcCcpID8gaWNvbiArICcnICsgdEVsZSA6IHRFbGUgKyAnJyArIGljb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbkhUTUwgPSAoY3NzID09PSAnJykgPyB0RWxlIDogaWNvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdENvbnQgPSBlajJfYmFzZV80LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBDTFNfVEVYVF9XUkFQLCBpbm5lckhUTUw6IGluSFRNTCArICcnICsgX3RoaXMuYnRuQ2xzIH0pLm91dGVySFRNTDtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcCA9IGVqMl9iYXNlXzQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENMU19XUkFQLCBpbm5lckhUTUw6IHRDb250LCBhdHRyczogeyB0YWJJbmRleDogJy0xJyB9IH0pO1xuICAgICAgICAgICAgICAgIHZhciBhdHRyT2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogQ0xTX0lURU0gKyAnXycgKyBpZCwgcm9sZTogJ3RhYicsICdhcmlhLXNlbGVjdGVkJzogJ2ZhbHNlJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHRJdGVtID0geyBodG1sQXR0cmlidXRlczogYXR0ck9iaiwgdGVtcGxhdGU6IHdyYXAub3V0ZXJIVE1MIH07XG4gICAgICAgICAgICAgICAgdEl0ZW0uY3NzQ2xhc3MgPSBpdGVtLmNzc0NsYXNzICsgJycgKyBkaXNhYmxlZCArICcnICsgKChjc3MgIT09ICcnKSA/ICdlLWknICsgcG9zIDogJycpICsgJyAnICsgKCghdHh0RW1wdHkpID8gQ0xTX0lDT04gOiAnJyk7XG4gICAgICAgICAgICAgICAgaWYgKHBvcyA9PT0gJ3RvcCcgfHwgcG9zID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2UtdmVydGljYWwtaWNvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0SXRlbXMucHVzaCh0SXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0SXRlbXM7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUucmVtb3ZlQWN0aXZlQ2xhc3MgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHZhciBoZHJBY3RFbGUgPSBlajJfYmFzZV80LnNlbGVjdEFsbCgnOnJvb3QgLicgKyBDTFNfSEVBREVSICsgJyAuJyArIENMU19UQl9JVEVNICsgJy4nICsgQ0xTX0FDVElWRSwgdGhpcy5lbGVtZW50KVswXTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChoZHJBY3RFbGUpKSB7XG4gICAgICAgICAgICAgICAgaGRyQWN0RWxlLmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgdmFyIG5vID0gdGhpcy5leHRJbmRleChoZHJBY3RFbGUuaWQpO1xuICAgICAgICAgICAgICAgIHZhciB0cmcgPSB0aGlzLmZpbmRFbGUoZWoyX2Jhc2VfMi5zZWxlY3QoJy5lLWNvbnRlbnQnLCB0aGlzLmVsZW1lbnQpLmNoaWxkcmVuLCBDTFNfQ09OVEVOVCArICdfJyArIG5vKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5jaGVja1BvcHVwT3ZlcmZsb3cgPSBmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgICAgICB0aGlzLnRiUG9wID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX1RCX1BPUCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHZhciBwb3BJY29uID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy5lLWhvci1uYXYnLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHRickl0ZW1zID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX1RCX0lURU1TLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCh0aGlzLmVuYWJsZVJ0bCAmJiAoKHBvcEljb24ub2Zmc2V0TGVmdCArIHBvcEljb24ub2Zmc2V0V2lkdGgpID4gdGJySXRlbXMub2Zmc2V0TGVmdCkpXG4gICAgICAgICAgICAgICAgfHwgKCF0aGlzLmVuYWJsZVJ0bCAmJiBwb3BJY29uLm9mZnNldExlZnQgPCB0YnJJdGVtcy5vZmZzZXRXaWR0aCkpIHtcbiAgICAgICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChDTFNfVEJfUE9QVVApO1xuICAgICAgICAgICAgICAgIHRoaXMudGJQb3AuaW5zZXJ0QmVmb3JlKGVsZS5jbG9uZU5vZGUodHJ1ZSksIGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19UQl9QT1BVUCwgdGhpcy50YlBvcClbMF0pO1xuICAgICAgICAgICAgICAgIGVsZS5vdXRlckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnBvcHVwSGFuZGxlciA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHZhciByaXBFbGUgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLmUtcmlwcGxlLWVsZW1lbnQnKTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChyaXBFbGUpKSB7XG4gICAgICAgICAgICAgICAgcmlwRWxlLm91dGVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuJyArIENMU19XUkFQKS5jbGFzc0xpc3QucmVtb3ZlKCdlLXJpcHBsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50Ykl0ZW0gPSBlajJfYmFzZV80LnNlbGVjdEFsbCgnLicgKyBDTFNfVEJfSVRFTVMgKyAnIC4nICsgQ0xTX1RCX0lURU0sIHRoaXMuaGRyRWxlKTtcbiAgICAgICAgICAgIHZhciBsYXN0Q2hpbGQgPSB0aGlzLnRiSXRlbVt0aGlzLnRiSXRlbS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRiSXRlbS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShDTFNfVEJfUE9QVVApO1xuICAgICAgICAgICAgICAgIHRoaXMudGJJdGVtcy5hcHBlbmRDaGlsZCh0YXJnZXQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdEVsZUlkID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgICAgIHRhcmdldC5vdXRlckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1BvcHVwT3ZlcmZsb3cobGFzdENoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldkVsZSA9IHRoaXMudGJJdGVtcy5sYXN0Q2hpbGQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1BvcHVwT3ZlcmZsb3cocHJldkVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQb3B1cCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCX0lURU0sIHRoaXMudGJJdGVtcykubGVuZ3RoIC0gMTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5zZXRDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHZhciB0cmcgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfSEVBREVSLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgKHZhbCA9PT0gdHJ1ZSkgPyB0cmcuY2xhc3NMaXN0LmFkZChDTFNfQ0xPU0VfU0hPVykgOiB0cmcuY2xhc3NMaXN0LnJlbW92ZShDTFNfQ0xPU0VfU0hPVyk7XG4gICAgICAgICAgICB0aGlzLnRiT2JqLnJlZnJlc2hPdmVyZmxvdygpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQWN0RWxlUG9zaXRpb24oKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5wcmV2Q3RuQW5pbWF0aW9uID0gZnVuY3Rpb24gKHByZXYsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb247XG4gICAgICAgICAgICB2YXIgY2hlY2tSVEwgPSB0aGlzLmVuYWJsZVJ0bCB8fCB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19SVEwpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNQb3B1cCB8fCBwcmV2IDw9IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltYXRpb24ucHJldmlvdXMuZWZmZWN0ID09PSAnU2xpZGVMZWZ0SW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbiA9IHsgbmFtZTogJ1NsaWRlTGVmdE91dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5hbmltYXRpb24ucHJldmlvdXMuZHVyYXRpb24sIHRpbWluZ0Z1bmN0aW9uOiB0aGlzLmFuaW1hdGlvbi5wcmV2aW91cy5lYXNpbmcgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uLm5leHQuZWZmZWN0ID09PSAnU2xpZGVSaWdodEluJykge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24gPSB7IG5hbWU6ICdTbGlkZVJpZ2h0T3V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmFuaW1hdGlvbi5uZXh0LmR1cmF0aW9uLCB0aW1pbmdGdW5jdGlvbjogdGhpcy5hbmltYXRpb24ubmV4dC5lYXNpbmcgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS50cmlnZ2VyUHJldkFuaW1hdGlvbiA9IGZ1bmN0aW9uIChvbGRDbnQsIHByZXZJbmRleCkge1xuICAgICAgICAgICAgdmFyIGFuaW1hdGVPYmogPSB0aGlzLnByZXZDdG5BbmltYXRpb24ocHJldkluZGV4LCB0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoYW5pbWF0ZU9iaikpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRlT2JqLmJlZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV80LnNldFN0eWxlQXR0cmlidXRlKG9sZENudCwgeyAncG9zaXRpb24nOiAnYWJzb2x1dGUnIH0pO1xuICAgICAgICAgICAgICAgICAgICBvbGRDbnQuY2xhc3NMaXN0LmFkZCgnZS12aWV3Jyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhbmltYXRlT2JqLmVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkQ250LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIG9sZENudC5jbGFzc0xpc3QucmVtb3ZlKENMU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgICAgICBvbGRDbnQuY2xhc3NMaXN0LnJlbW92ZSgnZS12aWV3Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0U3R5bGVBdHRyaWJ1dGUob2xkQ250LCB7ICdkaXNwbGF5JzogJycsICdwb3NpdGlvbic6ICcnIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbmV3IGVqMl9iYXNlXzUuQW5pbWF0aW9uKGFuaW1hdGVPYmopLmFuaW1hdGUob2xkQ250KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS50cmlnZ2VyQW5pbWF0aW9uID0gZnVuY3Rpb24gKGlkLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBwcmV2SW5kZXggPSB0aGlzLnByZXZJbmRleDtcbiAgICAgICAgICAgIHZhciBvbGRDbnQgPSBlajJfYmFzZV8yLnNlbGVjdCgnIycgKyB0aGlzLnByZXZBY3RpdmVFbGUsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgcHJldkVsZSA9IHRoaXMudGJJdGVtW3ByZXZJbmRleF07XG4gICAgICAgICAgICB2YXIgbm8gPSB0aGlzLmV4dEluZGV4KHRoaXMudGJJdGVtW3RoaXMuc2VsZWN0ZWRJdGVtXS5pZCk7XG4gICAgICAgICAgICB2YXIgbmV3Q250O1xuICAgICAgICAgICAgbmV3Q250ID0gdGhpcy5maW5kRWxlKHRoaXMuY250RWxlLmNoaWxkcmVuLCBDTFNfQ09OVEVOVCArICdfJyArIG5vKTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKG9sZENudCkgJiYgIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQocHJldkVsZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWRObyA9IHRoaXMuZXh0SW5kZXgocHJldkVsZS5pZCk7XG4gICAgICAgICAgICAgICAgb2xkQ250ID0gdGhpcy5maW5kRWxlKHRoaXMuY250RWxlLmNoaWxkcmVuLCBDTFNfQ09OVEVOVCArICdfJyArIGlkTm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaW5pdFJlbmRlciB8fCB2YWx1ZSA9PT0gZmFsc2UgfHwgdGhpcy5hbmltYXRpb24gPT09IHt9IHx8IGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5hbmltYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9sZENudCAmJiBvbGRDbnQgIT09IG5ld0NudCkge1xuICAgICAgICAgICAgICAgICAgICBvbGRDbnQuY2xhc3NMaXN0LnJlbW92ZShDTFNfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNudCA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19DT05URU5ULCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIGFuaW1hdGVPYmo7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2SW5kZXggPiB0aGlzLnNlbGVjdGVkSXRlbSAmJiAhdGhpcy5pc1BvcHVwKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wZW5FZmYgPSB0aGlzLmFuaW1hdGlvbi5wcmV2aW91cy5lZmZlY3Q7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZU9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogKChvcGVuRWZmID09PSAnTm9uZScpID8gJycgOiAoKG9wZW5FZmYgIT09ICdTbGlkZUxlZnRJbicpID8gb3BlbkVmZiA6ICdTbGlkZUxlZnRJbicpKSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuYW5pbWF0aW9uLnByZXZpb3VzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogdGhpcy5hbmltYXRpb24ucHJldmlvdXMuZWFzaW5nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNQb3B1cCB8fCB0aGlzLnByZXZJbmRleCA8IHRoaXMuc2VsZWN0ZWRJdGVtIHx8IHRoaXMucHJldkluZGV4ID09PSB0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBjbHNFZmYgPSB0aGlzLmFuaW1hdGlvbi5uZXh0LmVmZmVjdDtcbiAgICAgICAgICAgICAgICBhbmltYXRlT2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAoKGNsc0VmZiA9PT0gJ05vbmUnKSA/ICcnIDogKChjbHNFZmYgIT09ICdTbGlkZVJpZ2h0SW4nKSA/IGNsc0VmZiA6ICdTbGlkZVJpZ2h0SW4nKSksXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmFuaW1hdGlvbi5uZXh0LmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogdGhpcy5hbmltYXRpb24ubmV4dC5lYXNpbmdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0ZU9iai5wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjbnQuY2xhc3NMaXN0LmFkZChDTFNfUFJPR1JFU1MpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEFjdGl2ZUJvcmRlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFuaW1hdGVPYmouZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNudC5jbGFzc0xpc3QucmVtb3ZlKENMU19QUk9HUkVTUyk7XG4gICAgICAgICAgICAgICAgbmV3Q250LmNsYXNzTGlzdC5hZGQoQ0xTX0FDVElWRSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJQcmV2QW5pbWF0aW9uKG9sZENudCwgcHJldkluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJldkFjdGl2ZUVsZSA9IG5ld0NudC5pZDtcbiAgICAgICAgICAgIHRoaXMuaXNQb3B1cCA9IGZhbHNlO1xuICAgICAgICAgICAgbmV3IGVqMl9iYXNlXzUuQW5pbWF0aW9uKGFuaW1hdGVPYmopLmFuaW1hdGUobmV3Q250KTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5rZXlQcmVzc2VkID0gZnVuY3Rpb24gKHRyZykge1xuICAgICAgICAgICAgdmFyIHRyZ1BhcmVudCA9IGVqMl9iYXNlXzEuY2xvc2VzdCh0cmcsICcuJyArIENMU19UQl9JVEVNKTtcbiAgICAgICAgICAgIHZhciB0cmdJbmRleCA9IHRoaXMuZ2V0RWxlSW5kZXgodHJnUGFyZW50KTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLnBvcEVsZSkgJiYgdHJnLmNsYXNzTGlzdC5jb250YWlucygnZS1ob3ItbmF2JykpIHtcbiAgICAgICAgICAgICAgICAodGhpcy5wb3BFbGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19QT1BVUF9PUEVOKSkgPyB0aGlzLnBvcE9iai5oaWRlKHRoaXMuaGlkZSkgOiB0aGlzLnBvcE9iai5zaG93KHRoaXMuc2hvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0cmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdlLXNjcm9sbC1uYXYnKSkge1xuICAgICAgICAgICAgICAgIHRyZy5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRyZ1BhcmVudCkgJiYgdHJnUGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhDTFNfQUNUSVZFKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QodHJnSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5wb3BFbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcE9iai5oaWRlKHRoaXMuaGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuZ2V0RWxlSW5kZXggPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCX0lURU0sIHRoaXMuZWxlbWVudCksIGl0ZW0pO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLmV4dEluZGV4ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQucmVwbGFjZShDTFNfSVRFTSArICdfJywgJycpO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLmdldENvbnRlbnQgPSBmdW5jdGlvbiAoZWxlLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIHRlbXBsYXRlRm47XG4gICAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAgIHZhciB0ZW1wRWxlID0gZWoyX2Jhc2VfNC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHZhciBjbnQgPSB0aGlzLml0ZW1zW051bWJlcihpbmRleCldLmNvbnRlbnQ7XG4gICAgICAgICAgICB2YXIgY250SFRNTCA9ICh0eXBlb2YgY250ICE9PSAnb2JqZWN0JykgPyBjbnQgOiBjbnQub3V0ZXJIVE1MO1xuICAgICAgICAgICAgdGVtcGxhdGVGbiA9IGVqMl9iYXNlXzUuY29tcGlsZShjbnRIVE1MKTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0ZW1wbGF0ZUZuKSAmJiB0ZW1wbGF0ZUZuKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwodGVtcGxhdGVGbigpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wRWxlLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbGUuYXBwZW5kQ2hpbGQodGVtcEVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gY250SFRNTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5maW5kRWxlID0gZnVuY3Rpb24gKGl0ZW1zLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBlbGU7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zW2ldLmlkID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlID0gaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGU7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuc2V0T3JpZW50YXRpb24gPSBmdW5jdGlvbiAocGxhY2UsIGVsZSkge1xuICAgICAgICAgICAgKHBsYWNlID09PSAnQm90dG9tJykgPyB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlKSA6IHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUoZWxlLCBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfQ09OVEVOVCwgdGhpcy5lbGVtZW50KSk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuc2V0Q3NzQ2xhc3MgPSBmdW5jdGlvbiAoZWxlLCBjbHMsIHZhbCkge1xuICAgICAgICAgICAgaWYgKGNscyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGlzdCA9IGNscy5zcGxpdCgnICcpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChsaXN0W2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGxpc3RbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5zZXRDb250ZW50SGVpZ2h0ID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jbnRFbGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhlaWdodDtcbiAgICAgICAgICAgIHZhciBoZHJFbGUgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfSEVBREVSLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0QWRqdXN0TW9kZSA9PT0gJ05vbmUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZXRTdHlsZUF0dHJpYnV0ZSh0aGlzLmNudEVsZSwgeyAnaGVpZ2h0JzogKHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBoZHJFbGUub2Zmc2V0SGVpZ2h0KSArICdweCcgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5oZWlnaHRBZGp1c3RNb2RlID09PSAnRmlsbCcpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV80LnNldFN0eWxlQXR0cmlidXRlKHRoaXMuZWxlbWVudCwgeyAnaGVpZ2h0JzogJzEwMCUnIH0pO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5jbnRFbGUsIHsgJ2hlaWdodCc6ICdhdXRvJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaGVpZ2h0QWRqdXN0TW9kZSA9PT0gJ0F1dG8nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNudCA9IGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19DT05URU5UICsgJyA+IC4nICsgQ0xTX0lURU0sIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNUZW1wbGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY250W2ldLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpibG9jazsgdmlzaWJpbGl0eTogdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSBNYXRoLm1heCh0aGlzLm1heEhlaWdodCwgdGhpcy5nZXRIZWlnaHQoY250W2ldKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbnRbaV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNudFtpXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndmlzaWJpbGl0eScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNudEVsZSA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19DT05URU5ULCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNudEVsZS5hcHBlbmRDaGlsZChlajJfYmFzZV80LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogKENMU19DT05URU5UICsgJ18nICsgMCksIGNsYXNzTmFtZTogQ0xTX0lURU0gKyAnICcgKyBDTFNfQUNUSVZFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7ICdyb2xlJzogJ3RhYnBhbmVsJywgJ2FyaWEtbGFiZWxsZWRieSc6IENMU19JVEVNICsgJ18nICsgMCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZSA9IHRoaXMuY250RWxlLmNoaWxkcmVuLml0ZW0oMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb250ZW50KGVsZSwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1heEhlaWdodCA9IE1hdGgubWF4KHRoaXMubWF4SGVpZ2h0LCB0aGlzLmdldEhlaWdodChlbGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbnRlbnQoZWxlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5jbnRFbGUsIHsgJ2hlaWdodCc6IHRoaXMubWF4SGVpZ2h0ICsgJ3B4JyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0U3R5bGVBdHRyaWJ1dGUodGhpcy5jbnRFbGUsIHsgJ2hlaWdodCc6ICdhdXRvJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgICAgICB2YXIgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGUpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZS5vZmZzZXRIZWlnaHQgKyBwYXJzZUZsb2F0KGNzLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJykpICsgcGFyc2VGbG9hdChjcy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpKSArXG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdChjcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJykpICsgcGFyc2VGbG9hdChjcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tYm90dG9tJykpO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnNldEFjdGl2ZUJvcmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0cmcgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfVEJfSVRFTSArICcuJyArIENMU19BQ1RJVkUsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAodHJnID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhzQ250ID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX1RCX0lURU1TICsgJyAuZS1oc2Nyb2xsLWNvbnRlbnQnLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy50Ykl0ZW1zID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX1RCX0lURU1TLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIGJhciA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19JTkRJQ0FUT1IsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgdGJXaWR0aCA9IChlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGhzQ250KSkgPyB0aGlzLnRiSXRlbXMub2Zmc2V0V2lkdGggOiBoc0NudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGVqMl9iYXNlXzQuc2V0U3R5bGVBdHRyaWJ1dGUoYmFyLCB7ICdsZWZ0JzogdHJnLm9mZnNldExlZnQgKyAncHgnLCAncmlnaHQnOiB0YldpZHRoIC0gKHRyZy5vZmZzZXRMZWZ0ICsgdHJnLm9mZnNldFdpZHRoKSArICdweCcgfSk7XG4gICAgICAgICAgICB0aGlzLmJkckxpbmUuY2xhc3NMaXN0LnJlbW92ZShDTFNfSElEREVOKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5zZXRBY3RpdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudGJJdGVtID0gZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCX0lURU0sIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgdHJnID0gdGhpcy50Ykl0ZW1bdmFsdWVdO1xuICAgICAgICAgICAgaWYgKHZhbHVlID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBzZWxlY3RlZEl0ZW06IHZhbHVlIH0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMCB8fCBpc05hTih2YWx1ZSkgfHwgdGhpcy50Ykl0ZW0ubGVuZ3RoID09PSAwIHx8IHRyZy5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0FDVElWRSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2ID0gdGhpcy50Ykl0ZW1bdGhpcy5wcmV2SW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChwcmV2KSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLmF0dHJpYnV0ZXModHJnLCB7ICdhcmlhLWNvbnRyb2xzJzogQ0xTX0NPTlRFTlQgKyAnXycgKyB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpZCA9IHRyZy5pZDtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWN0aXZlQ2xhc3MoaWQpO1xuICAgICAgICAgICAgdHJnLmNsYXNzTGlzdC5hZGQoQ0xTX0FDVElWRSk7XG4gICAgICAgICAgICB0cmcuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIHZhciBubyA9IE51bWJlcih0aGlzLmV4dEluZGV4KGlkKSk7XG4gICAgICAgICAgICBlajJfYmFzZV8xLmF0dHJpYnV0ZXModGhpcy5lbGVtZW50LCB7ICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBpZCB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX0NPTlRFTlQsIHRoaXMuZWxlbWVudCkuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJnXzEgPSB0aGlzLmZpbmRFbGUoZWoyX2Jhc2VfMi5zZWxlY3QoJy5lLWNvbnRlbnQnLCB0aGlzLmVsZW1lbnQpLmNoaWxkcmVuLCBDTFNfQ09OVEVOVCArICdfJyArIG5vKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRyZ18xKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJnXzEuY2xhc3NMaXN0LmFkZChDTFNfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJBbmltYXRpb24oaWQsIHRoaXMuZW5hYmxlQW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19DT05URU5UICsgJyA+ICMnICsgQ0xTX0NPTlRFTlQgKyAnXycgKyB0aGlzLmV4dEluZGV4KGlkKSwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNudEVsZS5hcHBlbmRDaGlsZChlajJfYmFzZV80LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBDTFNfQ09OVEVOVCArICdfJyArIHRoaXMuZXh0SW5kZXgoaWQpLCBjbGFzc05hbWU6IENMU19JVEVNICsgJyAnICsgQ0xTX0FDVElWRSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6ICd0YWJwYW5lbCcsICdhcmlhLWxhYmVsbGVkYnknOiBDTFNfSVRFTSArICdfJyArIHRoaXMuZXh0SW5kZXgoaWQpIH1cbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlVHJnID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX0NPTlRFTlQgKyAnID4gIycgKyBDTFNfQ09OVEVOVCArICdfJyArIHRoaXMuZXh0SW5kZXgoaWQpLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbnRlbnQoZWxlVHJnLCBOdW1iZXIodGhpcy5leHRJbmRleChpZCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChDTFNfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyQW5pbWF0aW9uKGlkLCB0aGlzLmVuYWJsZUFuaW1hdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUJvcmRlcigpO1xuICAgICAgICAgICAgdmFyIGN1ckFjdEl0ZW0gPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfSEVBREVSICsgJyAjJyArIGlkLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoSXRlbVZpc2liaWxpdHkoY3VyQWN0SXRlbSk7XG4gICAgICAgICAgICBjdXJBY3RJdGVtLmZpcnN0Q2hpbGQuZm9jdXMoKTtcbiAgICAgICAgICAgIHZhciBldmVudEFyZyA9IHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0l0ZW06IHRoaXMucHJldkl0ZW0sXG4gICAgICAgICAgICAgICAgcHJldmlvdXNJbmRleDogdGhpcy5wcmV2SW5kZXgsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiB0cmcsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogdmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3NlbGVjdGVkJywgZXZlbnRBcmcpO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnNldEl0ZW1zID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVwbGFjZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRiSXRlbXMgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfVEJfSVRFTVMsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnRiT2JqLml0ZW1zID0gdGhpcy5wYXJzZU9iamVjdChpdGVtcyk7XG4gICAgICAgICAgICB0aGlzLnRiT2JqLmRhdGFCaW5kKCk7XG4gICAgICAgICAgICB0aGlzLmlzUmVwbGFjZSA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnNldFJUTCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy50Yk9iai5lbmFibGVSdGwgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudGJPYmouZGF0YUJpbmQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3NzQ2xhc3ModGhpcy5lbGVtZW50LCBDTFNfUlRMLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hBY3RpdmVCb3JkZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5yZWZyZXNoQWN0aXZlQm9yZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuYmRyTGluZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJkckxpbmUuY2xhc3NMaXN0LmFkZChDTFNfSElEREVOKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlQm9yZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUud2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZnJlc2hBY3RFbGVQb3NpdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzUuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdtb3VzZW92ZXInLCB0aGlzLmhvdmVySGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV81LkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAna2V5ZG93bicsIHRoaXMuc3BhY2VLZXlEb3duLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLmNudEVsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoTW9kdWxlID0gbmV3IGVqMl9iYXNlXzUuVG91Y2godGhpcy5jbnRFbGUsIHsgc3dpcGU6IHRoaXMuc3dpcGVIYW5kbGVyLmJpbmQodGhpcykgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmtleU1vZHVsZSA9IG5ldyBlajJfYmFzZV8zLktleWJvYXJkRXZlbnRzKHRoaXMuZWxlbWVudCwgeyBrZXlBY3Rpb246IHRoaXMua2V5SGFuZGxlci5iaW5kKHRoaXMpLCBrZXlDb25maWdzOiB0aGlzLmtleUNvbmZpZ3MgfSk7XG4gICAgICAgICAgICB0aGlzLnRhYktleU1vZHVsZSA9IG5ldyBlajJfYmFzZV8zLktleWJvYXJkRXZlbnRzKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGtleUFjdGlvbjogdGhpcy5rZXlIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAga2V5Q29uZmlnczogeyBvcGVuUG9wdXA6ICdzaGlmdCtmMTAnLCB0YWI6ICd0YWInLCBzaGlmdFRhYjogJ3NoaWZ0K3RhYicgfSxcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdrZXlkb3duJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUudW5XaXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5rZXlNb2R1bGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy50YWJLZXlNb2R1bGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY250RWxlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2hNb2R1bGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVmcmVzaEFjdEVsZVBvc2l0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuaG92ZXJIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTFNfRk9DVVMpO1xuICAgICAgICAgICAgdmFyIHRyZyA9IGFyZ3Mub3JpZ2luYWxFdmVudC50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgdHJnUGFyZW50ID0gZWoyX2Jhc2VfMS5jbG9zZXN0KHRyZywgJy4nICsgQ0xTX1RCX0lURU0pO1xuICAgICAgICAgICAgdmFyIHRyZ0luZGV4ID0gdGhpcy5nZXRFbGVJbmRleCh0cmdQYXJlbnQpO1xuICAgICAgICAgICAgaWYgKHRyZy5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0lDT05fQ0xPU0UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUYWIodHJnSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BvcHVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRyZ1BhcmVudCkgJiYgdHJnSW5kZXggIT09IHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KHRyZ0luZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnZlbG9jaXR5IDwgMyAmJiBlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5zd2lwZURpcmVjdGlvbiA9PT0gJ1JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJdGVtIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5zd2lwZURpcmVjdGlvbiA9PT0gJ0xlZnQnICYmICh0aGlzLnNlbGVjdGVkSXRlbSAhPT0gZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCX0lURU0sIHRoaXMuZWxlbWVudCkubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZEl0ZW0gKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuc3BhY2VLZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICgoZS5rZXlDb2RlID09PSAzMiAmJiBlLndoaWNoID09PSAzMikgfHwgKGUua2V5Q29kZSA9PT0gMzUgJiYgZS53aGljaCA9PT0gMzUpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLmtleUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xTX0ZPQ1VTKTtcbiAgICAgICAgICAgIHZhciB0cmcgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHZhciBhY3RFbGUgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfSEVBREVSICsgJyAuJyArIENMU19BQ1RJVkUsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgdGFiSXRlbSA9IGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19UQl9JVEVNICsgJzpub3QoLicgKyBDTFNfVEJfUE9QVVAgKyAnKScsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnBvcEVsZSA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19UQl9QT1AsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5wb3BFbGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BPYmogPSB0aGlzLnBvcEVsZS5lajJfaW5zdGFuY2VzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChlLmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NwYWNlJzpcbiAgICAgICAgICAgICAgICBjYXNlICdlbnRlcic6XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmFjdGlvbiA9PT0gJ2VudGVyJyAmJiB0cmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdlLWhvci1uYXYnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlQcmVzc2VkKHRyZyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYic6XG4gICAgICAgICAgICAgICAgY2FzZSAnc2hpZnRUYWInOlxuICAgICAgICAgICAgICAgICAgICBpZiAodHJnLmNsYXNzTGlzdC5jb250YWlucyhDTFNfV1JBUClcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGVqMl9iYXNlXzEuY2xvc2VzdCh0cmcsICcuJyArIENMU19UQl9JVEVNKS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0FDVElWRSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmcuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvcE9iaiAmJiBlajJfYmFzZV8yLmlzVmlzaWJsZSh0aGlzLnBvcE9iai5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BPYmouaGlkZSh0aGlzLmhpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFjdEVsZS5jaGlsZHJlbi5pdGVtKDApLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtb3ZlTGVmdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZVJpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBlajJfYmFzZV8xLmNsb3Nlc3QoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCwgJy4nICsgQ0xTX1RCX0lURU0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEl0ZW1WaXNpYmlsaXR5KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ29wZW5Qb3B1cCc6XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMucG9wRWxlKSAmJiB0aGlzLnBvcEVsZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX1BPUFVQX0NMT1NFKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BPYmouc2hvdyh0aGlzLnNob3cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmdQYXJlbnQgPSBlajJfYmFzZV8xLmNsb3Nlc3QodHJnLCAnLicgKyBDTFNfVEJfSVRFTSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dDbG9zZUJ1dHRvbiA9PT0gdHJ1ZSAmJiAhZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0cmdQYXJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnh0U2liID0gdHJnUGFyZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKG54dFNpYikgJiYgbnh0U2liLmNsYXNzTGlzdC5jb250YWlucyhDTFNfVEJfSVRFTSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBueHRTaWIuZmlyc3RDaGlsZC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUYWIodGhpcy5nZXRFbGVJbmRleCh0cmdQYXJlbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUJvcmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5yZWZyZXNoQWN0RWxlUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWN0aXZlRWxlID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy4nICsgQ0xTX1RCX0lURU0gKyAnLicgKyBDTFNfVEJfUE9QVVAgKyAnLicgKyBDTFNfQUNUSVZFLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKGFjdGl2ZUVsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLmdldEVsZUluZGV4KGFjdGl2ZUVsZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQWN0aXZlQm9yZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUucmVmcmVzaEl0ZW1WaXNpYmlsaXR5ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIHNjckNudCA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuZS1oc2Nyb2xsLWNvbnRlbnQnLCB0aGlzLnRiSXRlbXMpO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV80LmlzTnVsbE9yVW5kZWZpbmVkKHNjckNudCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2NyQmFyID0gZWoyX2Jhc2VfMi5zZWxlY3QoJy5lLWhzY3JvbGwtYmFyJywgdGhpcy50Ykl0ZW1zKTtcbiAgICAgICAgICAgICAgICB2YXIgc2NyU3RhcnQgPSBzY3JCYXIuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICB2YXIgc2NyRW5kID0gc2NyU3RhcnQgKyBzY3JCYXIub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIGVsZVN0YXJ0ID0gdGFyZ2V0Lm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgdmFyIGVsZVdpZHRoID0gdGFyZ2V0Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBlbGVFbmQgPSB0YXJnZXQub2Zmc2V0TGVmdCArIHRhcmdldC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICBpZiAoKHNjclN0YXJ0IDwgZWxlU3RhcnQpICYmIChzY3JFbmQgPCBlbGVFbmQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVWaWV3UmFuZ2UgPSBzY3JFbmQgLSBlbGVTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgc2NyQmFyLnNjcm9sbExlZnQgPSBzY3JTdGFydCArIChlbGVXaWR0aCAtIGVsZVZpZXdSYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHNjclN0YXJ0ID4gZWxlU3RhcnQpICYmIChzY3JFbmQgPiBlbGVFbmQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlVmlld1JhbmdlID0gZWxlRW5kIC0gc2NyU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JCYXIuc2Nyb2xsTGVmdCA9IHNjclN0YXJ0IC0gKGVsZVdpZHRoIC0gZWxlVmlld1JhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5ob3ZlckhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRyZyA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHRyZy5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0lDT05fQ0xPU0UpKSB7XG4gICAgICAgICAgICAgICAgdHJnLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBuZXcgZWoyX2Jhc2VfMy5MMTBuKCd0YWInLCB7IHRpdGxlOiB0aGlzLnRpdGxlIH0sIHRoaXMubG9jYWxlKS5nZXRDb25zdGFudCgndGl0bGUnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuZW5hYmxlVGFiID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHRiSXRlbXMgPSBlajJfYmFzZV80LnNlbGVjdEFsbCgnLicgKyBDTFNfVEJfSVRFTSwgdGhpcy5lbGVtZW50KVtpbmRleF07XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0Ykl0ZW1zKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRiSXRlbXMuY2xhc3NMaXN0LnJlbW92ZShDTFNfRElTQUJMRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0Ykl0ZW1zLmNsYXNzTGlzdC5hZGQoQ0xTX0RJU0FCTEUpO1xuICAgICAgICAgICAgICAgIGlmICh0Ykl0ZW1zLmNsYXNzTGlzdC5jb250YWlucyhDTFNfQUNUSVZFKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChpbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRiSXRlbXMuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgKHZhbHVlID09PSB0cnVlKSA/ICdmYWxzZScgOiAndHJ1ZScpO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLmFkZFRhYiA9IGZ1bmN0aW9uIChpdGVtcywgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2FkZGluZycsIHsgYWRkZWRJdGVtczogaXRlbXMgfSk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19UQl9JVEVNKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUZW1wbGF0ZSA9PT0gdHJ1ZSB8fCBlajJfYmFzZV80LnNlbGVjdEFsbCgnLicgKyBDTFNfVEJfSVRFTSkubGVuZ3RoIC0gMSA8IGluZGV4IHx8IGluZGV4IDwgMCB8fCBpc05hTihpbmRleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJkckxpbmUuY2xhc3NMaXN0LmFkZChDTFNfSElEREVOKTtcbiAgICAgICAgICAgIHRoaXMudGJJdGVtcyA9IGVqMl9iYXNlXzIuc2VsZWN0KCcuJyArIENMU19UQl9JVEVNUywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHZhciB0YWJJdGVtcyA9IHRoaXMucGFyc2VPYmplY3QoaXRlbXMpO1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIF90aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudGJPYmouYWRkSXRlbXModGFiSXRlbXMsIGluZGV4KTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignYWRkZWQnLCB7IGFkZGVkSXRlbXM6IGl0ZW1zIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtID09PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlQm9yZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUucmVtb3ZlVGFiID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgdHJnID0gZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCX0lURU0sIHRoaXMuZWxlbWVudClbaW5kZXhdO1xuICAgICAgICAgICAgdmFyIHJlbW92aW5nQXJncyA9IHsgcmVtb3ZlZEl0ZW06IHRyZywgcmVtb3ZlZEluZGV4OiBpbmRleCB9O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdyZW1vdmluZycsIHJlbW92aW5nQXJncyk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0cmcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50Yk9iai5yZW1vdmVJdGVtcyhpbmRleCk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hBY3RpdmVCb3JkZXIoKTtcbiAgICAgICAgICAgIHZhciBubyA9IHRoaXMuZXh0SW5kZXgodHJnLmlkKTtcbiAgICAgICAgICAgIHZhciBjbnRUcmcgPSB0aGlzLmZpbmRFbGUoZWoyX2Jhc2VfMi5zZWxlY3QoJy5lLWNvbnRlbnQnLCB0aGlzLmVsZW1lbnQpLmNoaWxkcmVuLCBDTFNfQ09OVEVOVCArICdfJyArIG5vKTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZChjbnRUcmcpKSB7XG4gICAgICAgICAgICAgICAgY250VHJnLm91dGVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlbW92ZWRBcmdzID0geyByZW1vdmVkSXRlbTogdHJnLCByZW1vdmVkSW5kZXg6IGluZGV4IH07XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3JlbW92ZWQnLCByZW1vdmVkQXJncyk7XG4gICAgICAgICAgICBpZiAodHJnLmNsYXNzTGlzdC5jb250YWlucyhDTFNfQUNUSVZFKSkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gKGluZGV4ID4gZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCX0lURU0gKyAnOm5vdCguJyArIENMU19UQl9QT1BVUCArICcpJywgdGhpcy5lbGVtZW50KS5sZW5ndGggLSAxKSA/IGluZGV4IC0gMSA6IGluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19UQl9JVEVNLCB0aGlzLmVsZW1lbnQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGRyRWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVuYWJsZUFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFRhYi5wcm90b3R5cGUuaGlkZVRhYiA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gZWoyX2Jhc2VfNC5zZWxlY3RBbGwoJy4nICsgQ0xTX1RCX0lURU0sIHRoaXMuZWxlbWVudClbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzQuaXNOdWxsT3JVbmRlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJkckxpbmUuY2xhc3NMaXN0LmFkZChDTFNfSElEREVOKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChDTFNfSElEREVOKTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xTX0FDVElWRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoKGluZGV4ICE9PSAwKSA/IGluZGV4IC0gMSA6IGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKENMU19ISURERU4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVCb3JkZXIoKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICcnICsgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICB0aGlzLnRiSXRlbXMgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfVEJfSVRFTVMsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnRiSXRlbSA9IGVqMl9iYXNlXzQuc2VsZWN0QWxsKCcuJyArIENMU19UQl9JVEVNLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5wcmV2SXRlbSA9IHRoaXMudGJJdGVtW3RoaXMucHJldkluZGV4XTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNC5pc051bGxPclVuZGVmaW5lZCh0aGlzLnByZXZJdGVtKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJldkl0ZW0uY2hpbGRyZW4uaXRlbSgwKS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmcgPSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNJdGVtOiB0aGlzLnByZXZJdGVtLFxuICAgICAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IHRoaXMucHJldkluZGV4LFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogdGhpcy50Ykl0ZW1bdGhpcy5zZWxlY3RlZEl0ZW1dLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IHRoaXMuc2VsZWN0ZWRJdGVtXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdzZWxlY3RpbmcnLCBldmVudEFyZyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3MgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGJJdGVtLmxlbmd0aCA+IGFyZ3MgJiYgYXJncyA+PSAwICYmICFpc05hTihhcmdzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZJbmRleCA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50Ykl0ZW1bYXJnc10uY2xhc3NMaXN0LmNvbnRhaW5zKENMU19UQl9QT1BVUCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMucG9wdXBIYW5kbGVyKHRoaXMudGJJdGVtW2FyZ3NdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJncyBpbnN0YW5jZW9mIChIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZSh0aGlzLmdldEVsZUluZGV4KGFyZ3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldENzc0NsYXNzKHRoaXMuZWxlbWVudCwgQ0xTX0RJU0FCTEUsIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAnJyArIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5nZXRQZXJzaXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE9uUGVyc2lzdChbJ3NlbGVjdGVkSXRlbScsICdhY3RFbGVJZCddKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFiLnByb3RvdHlwZS5nZXRNb2R1bGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICd0YWInO1xuICAgICAgICB9O1xuICAgICAgICBUYWIucHJvdG90eXBlLm9uUHJvcGVydHlDaGFuZ2VkID0gZnVuY3Rpb24gKG5ld1Byb3AsIG9sZFByb3ApIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhuZXdQcm9wKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnd2lkdGgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZXRTdHlsZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQsIHsgd2lkdGg6IGVqMl9iYXNlXzMuZm9ybWF0VW5pdChuZXdQcm9wLndpZHRoKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdoZWlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZXRTdHlsZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQsIHsgaGVpZ2h0OiBlajJfYmFzZV8zLmZvcm1hdFVuaXQobmV3UHJvcC5oZWlnaHQpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50SGVpZ2h0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjc3NDbGFzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENzc0NsYXNzKHRoaXMuZWxlbWVudCwgbmV3UHJvcC5jc3NDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaXRlbXMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyhuZXdQcm9wLml0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzaG93Q2xvc2VCdXR0b24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDbG9zZUJ1dHRvbihuZXdQcm9wLnNob3dDbG9zZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0ZWRJdGVtJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KG5ld1Byb3Auc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXJQbGFjZW1lbnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBIZHJFbGUgPSBlajJfYmFzZV8yLnNlbGVjdCgnLicgKyBDTFNfSEVBREVSLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcmllbnRhdGlvbihuZXdQcm9wLmhlYWRlclBsYWNlbWVudCwgdGVtcEhkckVsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5hYmxlUnRsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UlRMKG5ld1Byb3AuZW5hYmxlUnRsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvdmVyZmxvd01vZGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50Yk9iai5vdmVyZmxvd01vZGUgPSBuZXdQcm9wLm92ZXJmbG93TW9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGJPYmouZGF0YUJpbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEFjdEVsZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaGVpZ2h0QWRqdXN0TW9kZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbnRlbnRIZWlnaHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVGFiO1xuICAgIH0oZWoyX2Jhc2VfMS5Db21wb25lbnQpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Db2xsZWN0aW9uKFtdLCBUYWJJdGVtKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwiaXRlbXNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnMTAwJScpXG4gICAgXSwgVGFiLnByb3RvdHlwZSwgXCJ3aWR0aFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdhdXRvJylcbiAgICBdLCBUYWIucHJvdG90eXBlLCBcImhlaWdodFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwiY3NzQ2xhc3NcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgwKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwic2VsZWN0ZWRJdGVtXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ1RvcCcpXG4gICAgXSwgVGFiLnByb3RvdHlwZSwgXCJoZWFkZXJQbGFjZW1lbnRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnQ29udGVudCcpXG4gICAgXSwgVGFiLnByb3RvdHlwZSwgXCJoZWlnaHRBZGp1c3RNb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJ1Njcm9sbGFibGUnKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwib3ZlcmZsb3dNb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgVGFiLnByb3RvdHlwZSwgXCJlbmFibGVSdGxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBUYWIucHJvdG90eXBlLCBcInNob3dDbG9zZUJ1dHRvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkNvbXBsZXgoe30sIFRhYkFuaW1hdGlvblNldHRpbmdzKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwiYW5pbWF0aW9uXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwiY3JlYXRlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBUYWIucHJvdG90eXBlLCBcImFkZGluZ1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBUYWIucHJvdG90eXBlLCBcImFkZGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwic2VsZWN0aW5nXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuRXZlbnQoKVxuICAgIF0sIFRhYi5wcm90b3R5cGUsIFwic2VsZWN0ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgVGFiLnByb3RvdHlwZSwgXCJyZW1vdmluZ1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLkV2ZW50KClcbiAgICBdLCBUYWIucHJvdG90eXBlLCBcInJlbW92ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5FdmVudCgpXG4gICAgXSwgVGFiLnByb3RvdHlwZSwgXCJkZXN0cm95ZWRcIiwgdm9pZCAwKTtcbiAgICBUYWIgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Ob3RpZnlQcm9wZXJ0eUNoYW5nZXNcbiAgICBdLCBUYWIpO1xuICAgIGV4cG9ydHMuVGFiID0gVGFiO1xuICAgIGV4cG9ydHMudGFiQnVpbGRlciA9IGVqMl9iYXNlXzEuQ3JlYXRlQnVpbGRlcihUYWIpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90YWIvdGFiLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL3RyZWV2aWV3XCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgdHJlZXZpZXdfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQodHJlZXZpZXdfMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RyZWV2aWV3L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1kYXRhXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItbGlzdHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYnV0dG9uc1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIsIGVqMl9iYXNlXzMsIGVqMl9iYXNlXzQsIGVqMl9iYXNlXzUsIGVqMl9iYXNlXzYsIGVqMl9kYXRhXzEsIGVqMl9iYXNlXzcsIGVqMl9saXN0c18xLCBlajJfYnV0dG9uc18xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBST09UID0gJ2UtdHJlZXZpZXcnO1xuICAgIHZhciBDT0xMQVBTSUJMRSA9ICdlLWljb24tY29sbGFwc2libGUnO1xuICAgIHZhciBFWFBBTkRBQkxFID0gJ2UtaWNvbi1leHBhbmRhYmxlJztcbiAgICB2YXIgTElTVElURU0gPSAnZS1saXN0LWl0ZW0nO1xuICAgIHZhciBMSVNUVEVYVCA9ICdlLWxpc3QtdGV4dCc7XG4gICAgdmFyIFBBUkVOVElURU0gPSAnZS1saXN0LXBhcmVudCc7XG4gICAgdmFyIEhPVkVSID0gJ2UtaG92ZXInO1xuICAgIHZhciBBQ1RJVkUgPSAnZS1hY3RpdmUnO1xuICAgIHZhciBMT0FEID0gJ2UtbG9hZCc7XG4gICAgdmFyIFBST0NFU1MgPSAnZS1wcm9jZXNzJztcbiAgICB2YXIgSUNPTiA9ICdlLWljb25zJztcbiAgICB2YXIgVEVYVFdSQVAgPSAnZS10ZXh0LWNvbnRlbnQnO1xuICAgIHZhciBJTlBVVCA9ICdlLXRyZWUtaW5wdXQnO1xuICAgIHZhciBFRElUSU5HID0gJ2UtZWRpdGluZyc7XG4gICAgdmFyIFJUTCA9ICdlLXJ0bCc7XG4gICAgdmFyIERSQUdJVEVNID0gJ2UtZHJhZy1pdGVtJztcbiAgICB2YXIgRFJPUFBBQkxFID0gJ2UtZHJvcHBhYmxlJztcbiAgICB2YXIgRFJBR0dJTkcgPSAnZS1kcmFnZ2luZyc7XG4gICAgdmFyIFNJQkxJTkcgPSAnZS1zaWJsaW5nJztcbiAgICB2YXIgRFJPUElOID0gJ2UtZHJvcC1pbic7XG4gICAgdmFyIERST1BORVhUID0gJ2UtZHJvcC1uZXh0JztcbiAgICB2YXIgRFJPUE9VVCA9ICdlLWRyb3Atb3V0JztcbiAgICB2YXIgTk9EUk9QID0gJ2Utbm8tZHJvcCc7XG4gICAgdmFyIEZVTExST1dXUkFQID0gJ2UtZnVsbHJvdy13cmFwJztcbiAgICB2YXIgRlVMTFJPVyA9ICdlLWZ1bGxyb3cnO1xuICAgIHZhciBQT1BVUCA9ICdlLXBvcHVwJztcbiAgICB2YXIgU0VMRUNURUQgPSAnZS1zZWxlY3RlZCc7XG4gICAgdmFyIEVYUEFOREVEID0gJ2UtZXhwYW5kZWQnO1xuICAgIHZhciBOT0RFQ09MTEFQU0VEID0gJ2Utbm9kZS1jb2xsYXBzZWQnO1xuICAgIHZhciBESVNBQkxFID0gJ2UtZGlzYWJsZSc7XG4gICAgdmFyIFBPUFVQU0VMRUNUID0gJ2Utc2VsZWN0JztcbiAgICB2YXIgQ09OVEVOVCA9ICdlLWNvbnRlbnQnO1xuICAgIHZhciBET1dOVEFJTCA9ICdlLWRvd250YWlsJztcbiAgICB2YXIgRFJPUENPVU5UID0gJ2UtZHJvcC1jb3VudCc7XG4gICAgdmFyIENIRUNLID0gJ2UtY2hlY2snO1xuICAgIHZhciBJTkRFVEVSTUlOQVRFID0gJ2Utc3RvcCc7XG4gICAgdmFyIENIRUNLQk9YV1JBUCA9ICdlLWNoZWNrYm94LXdyYXBwZXInO1xuICAgIHZhciBDSEVDS0JPWEZSQU1FID0gJ2UtZnJhbWUnO1xuICAgIHZhciBGT0NVUyA9ICdlLW5vZGUtZm9jdXMnO1xuICAgIHZhciB0cmVlQXJpYUF0dHIgPSB7XG4gICAgICAgIHRyZWVSb2xlOiAndHJlZScsXG4gICAgICAgIGl0ZW1Sb2xlOiAndHJlZWl0ZW0nLFxuICAgICAgICBsaXN0Um9sZTogJ2dyb3VwJyxcbiAgICAgICAgaXRlbVRleHQ6ICcnLFxuICAgIH07XG4gICAgdmFyIEZpZWxkc1NldHRpbmdzID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEZpZWxkc1NldHRpbmdzLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBGaWVsZHNTZXR0aW5ncygpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRmllbGRzU2V0dGluZ3M7XG4gICAgfShlajJfYmFzZV8yLkNoaWxkUHJvcGVydHkpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSgnY2hpbGQnKVxuICAgIF0sIEZpZWxkc1NldHRpbmdzLnByb3RvdHlwZSwgXCJjaGlsZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KFtdKVxuICAgIF0sIEZpZWxkc1NldHRpbmdzLnByb3RvdHlwZSwgXCJkYXRhU291cmNlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJ2V4cGFuZGVkJylcbiAgICBdLCBGaWVsZHNTZXR0aW5ncy5wcm90b3R5cGUsIFwiZXhwYW5kZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSgnaGFzQ2hpbGRyZW4nKVxuICAgIF0sIEZpZWxkc1NldHRpbmdzLnByb3RvdHlwZSwgXCJoYXNDaGlsZHJlblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KCdodG1sQXR0cmlidXRlcycpXG4gICAgXSwgRmllbGRzU2V0dGluZ3MucHJvdG90eXBlLCBcImh0bWxBdHRyaWJ1dGVzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJ2ljb25Dc3MnKVxuICAgIF0sIEZpZWxkc1NldHRpbmdzLnByb3RvdHlwZSwgXCJpY29uQ3NzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJ2lkJylcbiAgICBdLCBGaWVsZHNTZXR0aW5ncy5wcm90b3R5cGUsIFwiaWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSgnaW1hZ2VVcmwnKVxuICAgIF0sIEZpZWxkc1NldHRpbmdzLnByb3RvdHlwZSwgXCJpbWFnZVVybFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KCdpc0NoZWNrZWQnKVxuICAgIF0sIEZpZWxkc1NldHRpbmdzLnByb3RvdHlwZSwgXCJpc0NoZWNrZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSgncGFyZW50SUQnKVxuICAgIF0sIEZpZWxkc1NldHRpbmdzLnByb3RvdHlwZSwgXCJwYXJlbnRJRFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KG51bGwpXG4gICAgXSwgRmllbGRzU2V0dGluZ3MucHJvdG90eXBlLCBcInF1ZXJ5XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJ3NlbGVjdGVkJylcbiAgICBdLCBGaWVsZHNTZXR0aW5ncy5wcm90b3R5cGUsIFwic2VsZWN0ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eShudWxsKVxuICAgIF0sIEZpZWxkc1NldHRpbmdzLnByb3RvdHlwZSwgXCJ0YWJsZU5hbWVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSgndGV4dCcpXG4gICAgXSwgRmllbGRzU2V0dGluZ3MucHJvdG90eXBlLCBcInRleHRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSgndG9vbHRpcCcpXG4gICAgXSwgRmllbGRzU2V0dGluZ3MucHJvdG90eXBlLCBcInRvb2x0aXBcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSgnbmF2aWdhdGVVcmwnKVxuICAgIF0sIEZpZWxkc1NldHRpbmdzLnByb3RvdHlwZSwgXCJuYXZpZ2F0ZVVybFwiLCB2b2lkIDApO1xuICAgIGV4cG9ydHMuRmllbGRzU2V0dGluZ3MgPSBGaWVsZHNTZXR0aW5ncztcbiAgICB2YXIgQWN0aW9uU2V0dGluZ3MgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoQWN0aW9uU2V0dGluZ3MsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEFjdGlvblNldHRpbmdzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBY3Rpb25TZXR0aW5ncztcbiAgICB9KGVqMl9iYXNlXzIuQ2hpbGRQcm9wZXJ0eSkpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KCdTbGlkZURvd24nKVxuICAgIF0sIEFjdGlvblNldHRpbmdzLnByb3RvdHlwZSwgXCJlZmZlY3RcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSg0MDApXG4gICAgXSwgQWN0aW9uU2V0dGluZ3MucHJvdG90eXBlLCBcImR1cmF0aW9uXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoJ2xpbmVhcicpXG4gICAgXSwgQWN0aW9uU2V0dGluZ3MucHJvdG90eXBlLCBcImVhc2luZ1wiLCB2b2lkIDApO1xuICAgIGV4cG9ydHMuQWN0aW9uU2V0dGluZ3MgPSBBY3Rpb25TZXR0aW5ncztcbiAgICB2YXIgTm9kZUFuaW1hdGlvblNldHRpbmdzID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKE5vZGVBbmltYXRpb25TZXR0aW5ncywgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gTm9kZUFuaW1hdGlvblNldHRpbmdzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOb2RlQW5pbWF0aW9uU2V0dGluZ3M7XG4gICAgfShlajJfYmFzZV8yLkNoaWxkUHJvcGVydHkpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Db21wbGV4KHsgZWZmZWN0OiAnU2xpZGVVcCcsIGR1cmF0aW9uOiA0MDAsIGVhc2luZzogJ2xpbmVhcicgfSwgQWN0aW9uU2V0dGluZ3MpXG4gICAgXSwgTm9kZUFuaW1hdGlvblNldHRpbmdzLnByb3RvdHlwZSwgXCJjb2xsYXBzZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLkNvbXBsZXgoeyBlZmZlY3Q6ICdTbGlkZURvd24nLCBkdXJhdGlvbjogNDAwLCBlYXNpbmc6ICdsaW5lYXInIH0sIEFjdGlvblNldHRpbmdzKVxuICAgIF0sIE5vZGVBbmltYXRpb25TZXR0aW5ncy5wcm90b3R5cGUsIFwiZXhwYW5kXCIsIHZvaWQgMCk7XG4gICAgZXhwb3J0cy5Ob2RlQW5pbWF0aW9uU2V0dGluZ3MgPSBOb2RlQW5pbWF0aW9uU2V0dGluZ3M7XG4gICAgdmFyIFRyZWVWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKFRyZWVWaWV3LCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBUcmVlVmlldyhvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBlbGVtZW50KSB8fCB0aGlzO1xuICAgICAgICAgICAgX3RoaXMuY2hlY2tBY3Rpb25Ob2RlcyA9IFtdO1xuICAgICAgICAgICAgX3RoaXMuZHJhZ1N0YXJ0QWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5rZXlDb25maWdzID0ge1xuICAgICAgICAgICAgICAgIGVzY2FwZTogJ2VzY2FwZScsXG4gICAgICAgICAgICAgICAgZW5kOiAnZW5kJyxcbiAgICAgICAgICAgICAgICBlbnRlcjogJ2VudGVyJyxcbiAgICAgICAgICAgICAgICBmMjogJ2YyJyxcbiAgICAgICAgICAgICAgICBob21lOiAnaG9tZScsXG4gICAgICAgICAgICAgICAgbW92ZURvd246ICdkb3duYXJyb3cnLFxuICAgICAgICAgICAgICAgIG1vdmVMZWZ0OiAnbGVmdGFycm93JyxcbiAgICAgICAgICAgICAgICBtb3ZlUmlnaHQ6ICdyaWdodGFycm93JyxcbiAgICAgICAgICAgICAgICBtb3ZlVXA6ICd1cGFycm93JyxcbiAgICAgICAgICAgICAgICBjdHJsRG93bjogJ2N0cmwrZG93bmFycm93JyxcbiAgICAgICAgICAgICAgICBjdHJsVXA6ICdjdHJsK3VwYXJyb3cnLFxuICAgICAgICAgICAgICAgIGN0cmxFbnRlcjogJ2N0cmwrZW50ZXInLFxuICAgICAgICAgICAgICAgIGN0cmxIb21lOiAnY3RybCtob21lJyxcbiAgICAgICAgICAgICAgICBjdHJsRW5kOiAnY3RybCtlbmQnLFxuICAgICAgICAgICAgICAgIGN0cmxBOiAnY3RybCtBJyxcbiAgICAgICAgICAgICAgICBzaGlmdERvd246ICdzaGlmdCtkb3duYXJyb3cnLFxuICAgICAgICAgICAgICAgIHNoaWZ0VXA6ICdzaGlmdCt1cGFycm93JyxcbiAgICAgICAgICAgICAgICBzaGlmdEVudGVyOiAnc2hpZnQrZW50ZXInLFxuICAgICAgICAgICAgICAgIHNoaWZ0SG9tZTogJ3NoaWZ0K2hvbWUnLFxuICAgICAgICAgICAgICAgIHNoaWZ0RW5kOiAnc2hpZnQrZW5kJyxcbiAgICAgICAgICAgICAgICBjc0Rvd246ICdjdHJsK3NoaWZ0K2Rvd25hcnJvdycsXG4gICAgICAgICAgICAgICAgY3NVcDogJ2N0cmwrc2hpZnQrdXBhcnJvdycsXG4gICAgICAgICAgICAgICAgY3NFbnRlcjogJ2N0cmwrc2hpZnQrZW50ZXInLFxuICAgICAgICAgICAgICAgIGNzSG9tZTogJ2N0cmwrc2hpZnQraG9tZScsXG4gICAgICAgICAgICAgICAgY3NFbmQ6ICdjdHJsK3NoaWZ0K2VuZCcsXG4gICAgICAgICAgICAgICAgc3BhY2U6ICdzcGFjZScsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMubW91c2VEb3duU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldE1vZHVsZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3RyZWV2aWV3JztcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnByZVJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmxpc3RCYXNlT3B0aW9uID0ge1xuICAgICAgICAgICAgICAgIGV4cGFuZENvbGxhcHNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZpZWxkczogdGhpcy5maWVsZHMucHJvcGVydGllcyxcbiAgICAgICAgICAgICAgICBzaG93SWNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleHBhbmRJY29uQ2xhc3M6IEVYUEFOREFCTEUsXG4gICAgICAgICAgICAgICAgYXJpYUF0dHJpYnV0ZXM6IHRyZWVBcmlhQXR0cixcbiAgICAgICAgICAgICAgICBleHBhbmRJY29uUG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICBpdGVtQ3JlYXRlZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYmVmb3JlTm9kZUNyZWF0ZShlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubGlzdEJhc2VPcHRpb24uZmllbGRzLnVybCA9IHRoaXMuZmllbGRzLm5hdmlnYXRlVXJsO1xuICAgICAgICAgICAgdGhpcy5hbmlPYmogPSBuZXcgZWoyX2Jhc2VfNC5BbmltYXRpb24oe30pO1xuICAgICAgICAgICAgdGhpcy50cmVlTGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5zZWxlY3RlZE5vZGVzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHNlbGVjdGVkTm9kZXM6IFtdIH0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jaGVja2VkTm9kZXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgY2hlY2tlZE5vZGVzOiBbXSB9LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldFBlcnNpc3REYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGtleUVudGl0eSA9IFsnc2VsZWN0ZWROb2RlcycsICdjaGVja2VkTm9kZXMnXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE9uUGVyc2lzdChrZXlFbnRpdHkpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGFCaW5kaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnNldEV4cGFuZE9uVHlwZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRSaXBwbGUoKTtcbiAgICAgICAgICAgIHRoaXMud2lyZUVkaXRpbmdFdmVudHModGhpcy5hbGxvd0VkaXRpbmcpO1xuICAgICAgICAgICAgdGhpcy5zZXREcmFnQW5kRHJvcCh0aGlzLmFsbG93RHJhZ0FuZERyb3ApO1xuICAgICAgICAgICAgdGhpcy53aXJlRXZlbnRzKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsIHRyZWVBcmlhQXR0ci50cmVlUm9sZSk7XG4gICAgICAgICAgICB0aGlzLnNldENzc0NsYXNzKG51bGwsIHRoaXMuY3NzQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5zZXRFbmFibGVSdGwoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RnVsbFJvdyh0aGlzLmZ1bGxSb3dTZWxlY3QpO1xuICAgICAgICAgICAgdGhpcy5zZXRUb3VjaFBvcHVwKHRoaXMuYWxsb3dNdWx0aVNlbGVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLnNldE11bHRpU2VsZWN0KHRoaXMuYWxsb3dNdWx0aVNlbGVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLm5vZGVUZW1wbGF0ZUZuID0gdGhpcy50ZW1wbGF0ZUNvbXBsaWVyKHRoaXMubm9kZVRlbXBsYXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnNldEVuYWJsZVJ0bCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUnRsID8gZWoyX2Jhc2VfNi5hZGRDbGFzcyhbdGhpcy5lbGVtZW50XSwgUlRMKSA6IGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW3RoaXMuZWxlbWVudF0sIFJUTCk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5zZXRSaXBwbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGVtcFN0ciA9ICcuJyArIEZVTExST1cgKyAnLC4nICsgVEVYVFdSQVA7XG4gICAgICAgICAgICB2YXIgcmlwcGxlTW9kZWwgPSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHRlbXBTdHIsXG4gICAgICAgICAgICAgICAgaWdub3JlOiAnLicgKyBURVhUV1JBUCArICcgPiAuJyArIElDT04gKyAnLC4nICsgSU5QVVQgKyAnLCAuJyArIENIRUNLQk9YV1JBUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlRm4gPSBlajJfYmFzZV80LnJpcHBsZUVmZmVjdCh0aGlzLmVsZW1lbnQsIHJpcHBsZU1vZGVsKTtcbiAgICAgICAgICAgIHZhciBpY29uTW9kZWwgPSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuJyArIFRFWFRXUkFQICsgJyA+IC4nICsgSUNPTixcbiAgICAgICAgICAgICAgICBpc0NlbnRlclJpcHBsZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUljb25GbiA9IGVqMl9iYXNlXzQucmlwcGxlRWZmZWN0KHRoaXMuZWxlbWVudCwgaWNvbk1vZGVsKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnNldEZ1bGxSb3cgPSBmdW5jdGlvbiAoaXNFbmFibGVkKSB7XG4gICAgICAgICAgICBpc0VuYWJsZWQgPyBlajJfYmFzZV82LmFkZENsYXNzKFt0aGlzLmVsZW1lbnRdLCBGVUxMUk9XV1JBUCkgOiBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFt0aGlzLmVsZW1lbnRdLCBGVUxMUk9XV1JBUCk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5zZXRUb3VjaFBvcHVwID0gZnVuY3Rpb24gKGlzRW5hYmxlZCkge1xuICAgICAgICAgICAgaWYgKGlzRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHZhciBwb3B1cCA9IGVqMl9iYXNlXzYuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IFBPUFVQLCBzdHlsZXM6ICdkaXNwbGF5Om5vbmU7JyB9KTtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IGVqMl9iYXNlXzYuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IENPTlRFTlQsIGF0dHJzOiB7IHRhYkluZGV4OiAnLTEnIH0gfSk7XG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSBlajJfYmFzZV82LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogSUNPTiB9KTtcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYXBwZW5kKFtjb250ZW50LCBlajJfYmFzZV82LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBET1dOVEFJTCB9KV0sIHBvcHVwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocG9wdXApO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLmFkZChjb250ZW50LCAnY2xpY2snLCB0aGlzLnBvcHVwQ2xpY2ssIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvcHVwID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgUE9QVVAsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHBvcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuZGV0YWNoKHBvcHVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5zZXRNdWx0aVNlbGVjdCA9IGZ1bmN0aW9uIChpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIGlmIChpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW11bHRpc2VsZWN0YWJsZScsICd0cnVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW11bHRpc2VsZWN0YWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUucG9wdXBDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIHRhcmdldCA9IGVqMl9iYXNlXzYuY2xvc2VzdCh0YXJnZXQsICcuJyArIFBPUFVQKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFBPUFVQU0VMRUNUKSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW3RhcmdldF0sIFBPUFVQU0VMRUNUKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBQT1BVUCwgdGhpcy5lbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbdGFyZ2V0XSwgUE9QVVBTRUxFQ1QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUudGVtcGxhdGVDb21wbGllciA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGVtcGxhdGUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVqMl9iYXNlXzEuY29tcGlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRlbXBsYXRlKS5pbm5lckhUTUwudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWoyX2Jhc2VfMS5jb21waWxlKHRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuc2V0RGF0YUJpbmRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy50cmVlTGlzdC5wdXNoKCdmYWxzZScpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRzLmRhdGFTb3VyY2UgaW5zdGFuY2VvZiBlajJfZGF0YV8xLkRhdGFNYW5hZ2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZGF0YVNvdXJjZS5leGVjdXRlUXVlcnkodGhpcy5nZXRRdWVyeSh0aGlzLmZpZWxkcykpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJlZUxpc3QucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyZWVEYXRhID0gZS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmlzTnVtYmVyVHlwZUlkID0gX3RoaXMudHJlZURhdGFbMF0gPyAoKHR5cGVvZiBfdGhpcy50cmVlRGF0YVswXVtfdGhpcy5maWVsZHMuaWRdID09PSAnbnVtYmVyJykgPyB0cnVlIDogZmFsc2UpIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFJvb3REYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlbmRlckl0ZW1zKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMudHJlZUxpc3QubGVuZ3RoID09PSAwICYmICFfdGhpcy5pc0xvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmluYWxpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmVlTGlzdC5wb3AoKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZCh0aGlzLmZpZWxkcy5kYXRhU291cmNlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb3REYXRhID0gdGhpcy50cmVlRGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmVlRGF0YSA9IHRoaXMuZmllbGRzLmRhdGFTb3VyY2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Um9vdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJJdGVtcyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy50cmVlTGlzdC5sZW5ndGggPT09IDAgJiYgIXRoaXMuaXNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRRdWVyeSA9IGZ1bmN0aW9uIChtYXBwZXIsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IG51bGw7IH1cbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gW107XG4gICAgICAgICAgICB2YXIgcXVlcnk7XG4gICAgICAgICAgICBpZiAoIW1hcHBlci5xdWVyeSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gbmV3IGVqMl9kYXRhXzEuUXVlcnkoKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IHRoaXMuZ2V0QWN0dWFsUHJvcGVydGllcyhtYXBwZXIpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhwcm9wKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCAhPT0gJ2RhdGFTb3VyY2UnICYmIGNvbCAhPT0gJ3RhYmxlTmFtZScgJiYgY29sICE9PSAnY2hpbGQnICYmICEhbWFwcGVyW2NvbF1cbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGNvbHVtbnMuaW5kZXhPZihtYXBwZXJbY29sXSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zLnB1c2gobWFwcGVyW2NvbF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHF1ZXJ5LnNlbGVjdChjb2x1bW5zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcC5oYXNPd25Qcm9wZXJ0eSgndGFibGVOYW1lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkuZnJvbShtYXBwZXIudGFibGVOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IG1hcHBlci5xdWVyeS5jbG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWoyX2xpc3RzXzEuTGlzdEJhc2UuYWRkU29ydGluZyh0aGlzLnNvcnRPcmRlciwgbWFwcGVyLnRleHQsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgJiYgIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobWFwcGVyLnBhcmVudElEKSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlKG1hcHBlci5wYXJlbnRJRCwgJ2VxdWFsJywgKHRoaXMuaXNOdW1iZXJUeXBlSWQgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5zZXRSb290RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVR5cGUgPSB0aGlzLmdldERhdGFUeXBlKHRoaXMudHJlZURhdGEsIHRoaXMuZmllbGRzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cGVkRGF0YSA9IHRoaXMuZ2V0R3JvdXBlZERhdGEodGhpcy50cmVlRGF0YSwgdGhpcy5maWVsZHMucGFyZW50SUQpO1xuICAgICAgICAgICAgICAgIHZhciByb290SXRlbXMgPSB0aGlzLmdldENoaWxkTm9kZXModGhpcy50cmVlRGF0YSwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChyb290SXRlbXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGEgPSByb290SXRlbXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290RGF0YSA9IHRoaXMudHJlZURhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5yZW5kZXJJdGVtcyA9IGZ1bmN0aW9uIChpc1NvcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5saXN0QmFzZU9wdGlvbi5hcmlhQXR0cmlidXRlcy5sZXZlbCA9IDE7XG4gICAgICAgICAgICB0aGlzLnVsRWxlbWVudCA9IGVqMl9saXN0c18xLkxpc3RCYXNlLmNyZWF0ZUxpc3QoaXNTb3J0ZWQgPyB0aGlzLnJvb3REYXRhIDogdGhpcy5nZXRTb3J0ZWREYXRhKHRoaXMucm9vdERhdGEpLCB0aGlzLmxpc3RCYXNlT3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnVsRWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmZpbmFsaXplTm9kZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuYmVmb3JlTm9kZUNyZWF0ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG93Q2hlY2tCb3gpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tib3hFbGUgPSBlajJfYnV0dG9uc18xLmNyZWF0ZUNoZWNrQm94KCk7XG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSBlajJfYmFzZV82LnNlbGVjdCgnZGl2LicgKyBJQ09OLCBlLml0ZW0pO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGUuaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdWlkJyk7XG4gICAgICAgICAgICAgICAgZS5pdGVtLmNoaWxkTm9kZXNbMF0uaW5zZXJ0QmVmb3JlKGNoZWNrYm94RWxlLCBlLml0ZW0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzW2VqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoaWNvbikgPyAwIDogMV0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWROb2Rlcy5pbmRleE9mKGlkKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIENIRUNLQk9YRlJBTUUsIGNoZWNrYm94RWxlKS5jbGFzc0xpc3QuYWRkKENIRUNLKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hFbGUuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENoZWNrKGUuaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGUuY3VyRGF0YVtlLmZpZWxkcy5pc0NoZWNrZWRdKSAmJiBlLmN1ckRhdGFbZS5maWVsZHMuaXNDaGVja2VkXS50b1N0cmluZygpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgQ0hFQ0tCT1hGUkFNRSwgY2hlY2tib3hFbGUpLmNsYXNzTGlzdC5hZGQoQ0hFQ0spO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveEVsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hlY2soZS5pdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94RWxlLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZnVsbFJvd1NlbGVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRnVsbFJvdyhlLml0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dNdWx0aVNlbGVjdGlvbiAmJiAhZS5pdGVtLmNsYXNzTGlzdC5jb250YWlucyhTRUxFQ1RFRCkpIHtcbiAgICAgICAgICAgICAgICBlLml0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZmllbGRzID0gZS5maWVsZHM7XG4gICAgICAgICAgICB0aGlzLmFkZEFjdGlvbkNsYXNzKGUsIGZpZWxkcy5zZWxlY3RlZCwgU0VMRUNURUQpO1xuICAgICAgICAgICAgdGhpcy5hZGRBY3Rpb25DbGFzcyhlLCBmaWVsZHMuZXhwYW5kZWQsIEVYUEFOREVEKTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZCh0aGlzLm5vZGVUZW1wbGF0ZUZuKSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0RWxlID0gZS5pdGVtLnF1ZXJ5U2VsZWN0b3IoJy4nICsgTElTVFRFWFQpO1xuICAgICAgICAgICAgICAgIHRleHRFbGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hcHBlbmQodGhpcy5ub2RlVGVtcGxhdGVGbihlLmN1ckRhdGEpLCB0ZXh0RWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBldmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgbm9kZTogZS5pdGVtLFxuICAgICAgICAgICAgICAgIG5vZGVEYXRhOiBlLmN1ckRhdGEsXG4gICAgICAgICAgICAgICAgdGV4dDogZS50ZXh0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignZHJhd05vZGUnLCBldmVudEFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuYWRkQWN0aW9uQ2xhc3MgPSBmdW5jdGlvbiAoZSwgYWN0aW9uLCBjc3NDbGFzcykge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBlLmN1ckRhdGE7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShhY3Rpb24pICYmICFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGRhdGFbYWN0aW9uXSkgJiYgZGF0YVthY3Rpb25dLnRvU3RyaW5nKCkgIT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICBlLml0ZW0uY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXREYXRhVHlwZSA9IGZ1bmN0aW9uIChkcywgbWFwcGVyKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBtYXBwZXIuY2hpbGQgPT09ICdzdHJpbmcnKSAmJiBkc1tpXS5oYXNPd25Qcm9wZXJ0eShtYXBwZXIuY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZHNbaV0uaGFzT3duUHJvcGVydHkobWFwcGVyLnBhcmVudElEKSB8fCBkc1tpXS5oYXNPd25Qcm9wZXJ0eShtYXBwZXIuaGFzQ2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0R3JvdXBlZERhdGEgPSBmdW5jdGlvbiAoZGF0YVNvdXJjZSwgZ3JvdXBCeSkge1xuICAgICAgICAgICAgdmFyIGN1c1F1ZXJ5ID0gbmV3IGVqMl9kYXRhXzEuUXVlcnkoKS5ncm91cChncm91cEJ5KTtcbiAgICAgICAgICAgIHZhciBkcyA9IGVqMl9saXN0c18xLkxpc3RCYXNlLmdldERhdGFTb3VyY2UoZGF0YVNvdXJjZSwgY3VzUXVlcnkpO1xuICAgICAgICAgICAgdmFyIGdycEl0ZW0gPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbU9iaiA9IGRzW2pdLml0ZW1zO1xuICAgICAgICAgICAgICAgIGdycEl0ZW0ucHVzaChpdGVtT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBncnBJdGVtO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0U29ydGVkRGF0YSA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgICAgICBpZiAobGlzdCAmJiB0aGlzLnNvcnRPcmRlciAhPT0gJ05vbmUnKSB7XG4gICAgICAgICAgICAgICAgbGlzdCA9IGVqMl9saXN0c18xLkxpc3RCYXNlLmdldERhdGFTb3VyY2UobGlzdCwgZWoyX2xpc3RzXzEuTGlzdEJhc2UuYWRkU29ydGluZyh0aGlzLnNvcnRPcmRlciwgdGhpcy5maWVsZHMudGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5maW5hbGl6ZU5vZGUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNOb2RlcyA9IGVqMl9iYXNlXzYuc2VsZWN0QWxsKCcuJyArIFNFTEVDVEVELCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUoc05vZGVzW2ldLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3Moc05vZGVzLCBTRUxFQ1RFRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY05vZGVzID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgTElTVElURU0gKyAnOm5vdCguJyArIEVYUEFOREVEICsgJyknLCBlbGVtZW50KTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY05vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSBlajJfYmFzZV82LnNlbGVjdCgnZGl2LicgKyBJQ09OLCBjTm9kZXNbal0pO1xuICAgICAgICAgICAgICAgIGlmIChpY29uICYmIGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKEVYUEFOREFCTEUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNOb2Rlc1tqXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbY05vZGVzW2pdXSwgTk9ERUNPTExBUFNFRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGVOb2RlcyA9IGVqMl9iYXNlXzYuc2VsZWN0QWxsKCcuJyArIEVYUEFOREVELCBlbGVtZW50KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZE5vZGVzKGVOb2Rlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKGVOb2RlcywgRVhQQU5ERUQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG93Q2hlY2tCb3gpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXNfMSA9IFtdLmNvbmNhdChbXSwgdGhpcy5jaGVja2VkTm9kZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hlY2tCb3ggPSBfdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXVpZD1cIicgKyB2YWx1ZSArICdcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoY2hlY2tCb3gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc18xID0gbm9kZXNfMS5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUgIT09IHZhbHVlOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IGNoZWNrZWROb2Rlczogbm9kZXNfMSB9LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmVuc3VyZVBhcmVudENoZWNrU3RhdGUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFJPT1QpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHVsRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKExJU1RJVEVNKSkge1xuICAgICAgICAgICAgICAgICAgICB1bEVsZW1lbnQgPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBQQVJFTlRJVEVNLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrZWROb2RlcyA9IGVqMl9iYXNlXzYuc2VsZWN0QWxsKCcuJyArIENIRUNLLCB1bEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHZhciBub2RlcyA9IGVqMl9iYXNlXzYuc2VsZWN0QWxsKCcuJyArIExJU1RJVEVNLCB1bEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHZhciBjaGVja0JveEVsZSA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShDSEVDS0JPWFdSQVApWzBdO1xuICAgICAgICAgICAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IGNoZWNrZWROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShjaGVja0JveEVsZSwgJ2NoZWNrJywgbnVsbCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoY2hlY2tCb3hFbGUsICdpbmRldGVybWluYXRlJywgbnVsbCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrZWROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShjaGVja0JveEVsZSwgJ3VuY2hlY2snLCBudWxsLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudFVMID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGVsZW1lbnQsICcuJyArIFBBUkVOVElURU0pO1xuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChwYXJlbnRVTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQYXJlbnQgPSBlajJfYmFzZV82LmNsb3Nlc3QocGFyZW50VUwsICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVQYXJlbnRDaGVja1N0YXRlKGN1cnJlbnRQYXJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmVuc3VyZUNoaWxkQ2hlY2tTdGF0ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBlKSB7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRFbGVtZW50ID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgUEFSRU5USVRFTSwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrQm94ZXMgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGNoaWxkRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tCb3hlcyA9IGVqMl9iYXNlXzYuc2VsZWN0QWxsKCcuJyArIENIRUNLQk9YV1JBUCwgY2hpbGRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShDSEVDS0JPWEZSQU1FKVswXS5jbGFzc0xpc3QuY29udGFpbnMoQ0hFQ0spO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hlY2tlZFN0YXRlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgY2hlY2tCb3hlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZCh0aGlzLmN1cnJlbnRMb2FkRGF0YSkgJiYgIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXJyZW50TG9hZERhdGFbaW5kZXhdW3RoaXMuZmllbGRzLmlzQ2hlY2tlZF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFN0YXRlID0gdGhpcy5jdXJyZW50TG9hZERhdGFbaW5kZXhdW3RoaXMuZmllbGRzLmlzQ2hlY2tlZF0gPyAnY2hlY2snIDogJ3VuY2hlY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFN0YXRlID0gaXNDaGVja2VkID8gJ2NoZWNrJyA6ICd1bmNoZWNrJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoY2hlY2tCb3hlc1tpbmRleF0sIGNoZWNrZWRTdGF0ZSwgZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5kb0NoZWNrQm94QWN0aW9uID0gZnVuY3Rpb24gKG5vZGVzLCBkb0NoZWNrKSB7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobm9kZXMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaUVsZSA9IHRoaXMuZ2V0RWxlbWVudChub2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGxpRWxlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrQm94ID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgUEFSRU5USVRFTSArICcgLicgKyBDSEVDS0JPWFdSQVAsIGxpRWxlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUNoZWNrTm9kZShjaGVja0JveCwgIWRvQ2hlY2ssIGxpRWxlLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tCb3hlcyA9IGVqMl9iYXNlXzYuc2VsZWN0QWxsKCcuJyArIENIRUNLQk9YV1JBUCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgY2hlY2tCb3hlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShjaGVja0JveGVzW2luZGV4XSwgZG9DaGVjayA/ICdjaGVjaycgOiAndW5jaGVjaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKHdyYXBwZXIsIHN0YXRlLCBlLCBpc1ByZXZlbnQsIGlzQWRkKSB7XG4gICAgICAgICAgICB2YXIgYXJpYVN0YXRlO1xuICAgICAgICAgICAgdmFyIGV2ZW50QXJncztcbiAgICAgICAgICAgIHZhciBjdXJyTGkgPSBlajJfYmFzZV82LmNsb3Nlc3Qod3JhcHBlciwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgaWYgKCFpc1ByZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQWN0aW9uTm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBldmVudEFyZ3MgPSB0aGlzLmdldENoZWNrRXZlbnQoY3VyckxpLCBzdGF0ZSwgZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdub2RlQ2hlY2tpbmcnLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgICAgIGlmIChldmVudEFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZnJhbWVTcGFuID0gd3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKENIRUNLQk9YRlJBTUUpWzBdO1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAnY2hlY2snICYmICFmcmFtZVNwYW4uY2xhc3NMaXN0LmNvbnRhaW5zKENIRUNLKSkge1xuICAgICAgICAgICAgICAgIGZyYW1lU3Bhbi5jbGFzc0xpc3QucmVtb3ZlKElOREVURVJNSU5BVEUpO1xuICAgICAgICAgICAgICAgIGZyYW1lU3Bhbi5jbGFzc0xpc3QuYWRkKENIRUNLKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENoZWNrKGN1cnJMaSk7XG4gICAgICAgICAgICAgICAgYXJpYVN0YXRlID0gJ3RydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09ICd1bmNoZWNrJyAmJiAoZnJhbWVTcGFuLmNsYXNzTGlzdC5jb250YWlucyhDSEVDSykgfHwgZnJhbWVTcGFuLmNsYXNzTGlzdC5jb250YWlucyhJTkRFVEVSTUlOQVRFKSkpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFtmcmFtZVNwYW5dLCBbQ0hFQ0ssIElOREVURVJNSU5BVEVdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoZWNrKGN1cnJMaSk7XG4gICAgICAgICAgICAgICAgYXJpYVN0YXRlID0gJ2ZhbHNlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSAnaW5kZXRlcm1pbmF0ZScgJiYgIWZyYW1lU3Bhbi5jbGFzc0xpc3QuY29udGFpbnMoSU5ERVRFUk1JTkFURSkpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVNwYW4uY2xhc3NMaXN0LnJlbW92ZShDSEVDSyk7XG4gICAgICAgICAgICAgICAgZnJhbWVTcGFuLmNsYXNzTGlzdC5hZGQoSU5ERVRFUk1JTkFURSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGVjayhjdXJyTGkpO1xuICAgICAgICAgICAgICAgIGFyaWFTdGF0ZSA9ICdtaXhlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmlhU3RhdGUgPSBzdGF0ZSA9PT0gJ2NoZWNrJyA/ICd0cnVlJyA6IHN0YXRlID09PSAndW5jaGVjaycgPyAnZmFsc2UnIDogYXJpYVN0YXRlO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGFyaWFTdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgYXJpYVN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0FkZCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gW10uY29uY2F0KFtdLCB0aGlzLmNoZWNrQWN0aW9uTm9kZXMpO1xuICAgICAgICAgICAgICAgIGV2ZW50QXJncyA9IHRoaXMuZ2V0Q2hlY2tFdmVudChjdXJyTGksIHN0YXRlLCBlKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMS5pc1VuZGVmaW5lZChpc1ByZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QXJncy5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlzUHJldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChhcmlhU3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCBhcmlhU3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBldmVudEFyZ3MuZGF0YVswXS5jaGVja2VkID0gYXJpYVN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ25vZGVDaGVja2VkJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0FjdGlvbk5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuYWRkQ2hlY2sgPSBmdW5jdGlvbiAobGlFbGUpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGxpRWxlLmdldEF0dHJpYnV0ZSgnZGF0YS11aWQnKTtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChpZCkgJiYgdGhpcy5jaGVja2VkTm9kZXMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkTm9kZXMucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5yZW1vdmVDaGVjayA9IGZ1bmN0aW9uIChsaUVsZSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGVja2VkTm9kZXMuaW5kZXhPZihsaUVsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdWlkJykpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0Q2hlY2tFdmVudCA9IGZ1bmN0aW9uIChjdXJyTGksIGFjdGlvbiwgZSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0FjdGlvbk5vZGVzLnB1c2godGhpcy5nZXROb2RlRGF0YShjdXJyTGkpKTtcbiAgICAgICAgICAgIHZhciBub2RlRGF0YSA9IHRoaXMuY2hlY2tBY3Rpb25Ob2RlcztcbiAgICAgICAgICAgIHJldHVybiB7IGFjdGlvbjogYWN0aW9uLCBjYW5jZWw6IGZhbHNlLCBpc0ludGVyYWN0ZWQ6IGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZSkgPyBmYWxzZSA6IHRydWUsIG5vZGU6IGN1cnJMaSwgZGF0YTogbm9kZURhdGEgfTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmZpbmFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZpcnN0Tm9kZSA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIExJU1RJVEVNLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGZpcnN0Tm9kZSkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2ZpcnN0Tm9kZV0sIEZPQ1VTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZG9TZWxlY3Rpb25BY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGV2ZW50QXJncyA9IHsgZGF0YTogdGhpcy50cmVlRGF0YSB9O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdkYXRhQm91bmQnLCBldmVudEFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZG9TZWxlY3Rpb25BY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc05vZGVzID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgU0VMRUNURUQsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgc1VpZHMgPSB0aGlzLnNlbGVjdGVkTm9kZXM7XG4gICAgICAgICAgICBpZiAoc1VpZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHNlbGVjdGVkTm9kZXM6IFtdIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc1VpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNOb2RlID0gZWoyX2Jhc2VfNi5zZWxlY3QoJ1tkYXRhLXVpZD1cIicgKyBzVWlkc1tpXSArICdcIl0nLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUoc05vZGUsIG51bGwsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWxsb3dNdWx0aVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEdpdmVuTm9kZXMoc05vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3Moc05vZGVzLCBTRUxFQ1RFRCk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5zZWxlY3RHaXZlbk5vZGVzID0gZnVuY3Rpb24gKHNOb2Rlcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUoc05vZGVzW2ldLCBudWxsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWxsb3dNdWx0aVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ2NvbnRleHRtZW51ICcsIHRoaXMucHJldmVudENvbnRleHRNZW51KTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0IHx8IHRoaXMuZHJhZ1N0YXJ0QWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzTGlzdCA9IHRhcmdldC5jbGFzc0xpc3Q7XG4gICAgICAgICAgICAgICAgdmFyIGxpID0gZWoyX2Jhc2VfNi5jbG9zZXN0KHRhcmdldCwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgICAgIGlmICghbGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVIb3ZlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZvY3VzRWxlbWVudChsaSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dDaGVja0JveCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrV3JhcHBlciA9IGVqMl9iYXNlXzYuY2xvc2VzdCh0YXJnZXQsICcuJyArIENIRUNLQk9YV1JBUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoY2hlY2tXcmFwcGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGVja0VsZW1lbnQgPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBDSEVDS0JPWEZSQU1FLCBjaGVja1dyYXBwZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDaGVja05vZGUoY2hlY2tXcmFwcGVyLCBjaGVja0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENIRUNLKSwgbGksIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckNsaWNrRXZlbnQoZSwgbGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKEVYUEFOREFCTEUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEFjdGlvbihsaSwgdGFyZ2V0LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjbGFzc0xpc3QuY29udGFpbnMoQ09MTEFQU0lCTEUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlTm9kZShsaSwgdGFyZ2V0LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2xhc3NMaXN0LmNvbnRhaW5zKFBBUkVOVElURU0pICYmICFjbGFzc0xpc3QuY29udGFpbnMoTElTVElURU0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG11bHRpU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzEuQnJvd3Nlci5pc0RldmljZSAmJiB0aGlzLmFsbG93TXVsdGlTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcHVwID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgUE9QVVAsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNi5pc1Zpc2libGUocG9wdXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4dFdyYXAgPSBlajJfYmFzZV82LmNsb3Nlc3QodGFyZ2V0LCAnLicgKyBURVhUV1JBUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dFdyYXAgPSAhdHh0V3JhcCA/IGUudGFyZ2V0IDogdHh0V3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IHR4dFdyYXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NMZWZ0ID0gKGUuY2xpZW50WCAtIHBvcy5sZWZ0KSArIHR4dFdyYXAub2Zmc2V0TGVmdCAtIChwb3B1cC5vZmZzZXRXaWR0aCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zVG9wID0gdHh0V3JhcC5vZmZzZXRUb3AgLSBwb3B1cC5vZmZzZXRIZWlnaHQgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuc3R5bGUubGVmdCA9IChwb3NMZWZ0IDwgMCA/IDAgOiBwb3NMZWZ0KSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLnN0eWxlLnRvcCA9IChwb3NUb3AgPCAwID8gMCA6IHBvc1RvcCkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFBPUFVQU0VMRUNUKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlTZWxlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0KGxpLCBlLCBtdWx0aVNlbGVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyQ2xpY2tFdmVudChlLCBsaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUubm9kZUNoZWNraW5nRXZlbnQgPSBmdW5jdGlvbiAod3JhcHBlciwgaXNDaGVjaywgZSkge1xuICAgICAgICAgICAgdmFyIGN1cnJMaSA9IGVqMl9iYXNlXzYuY2xvc2VzdCh3cmFwcGVyLCAnLicgKyBMSVNUSVRFTSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQWN0aW9uTm9kZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBhcmlhU3RhdGUgPSAhaXNDaGVjayA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoYXJpYVN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCBhcmlhU3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGV2ZW50QXJncyA9IHRoaXMuZ2V0Q2hlY2tFdmVudChjdXJyTGksICFpc0NoZWNrID8gJ3VuY2hlY2snIDogJ2NoZWNrJywgZSk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ25vZGVDaGVja2luZycsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnRBcmdzO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUubm9kZUNoZWNrZWRFdmVudCA9IGZ1bmN0aW9uICh3cmFwcGVyLCBpc0NoZWNrLCBlKSB7XG4gICAgICAgICAgICB2YXIgY3VyckxpID0gZWoyX2Jhc2VfNi5jbG9zZXN0KHdyYXBwZXIsICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgIHZhciBldmVudEFyZ3MgPSB0aGlzLmdldENoZWNrRXZlbnQod3JhcHBlciwgaXNDaGVjayA/ICd1bmNoZWNrJyA6ICdjaGVjaycsIGUpO1xuICAgICAgICAgICAgZXZlbnRBcmdzLmRhdGEgPSBldmVudEFyZ3MuZGF0YS5zcGxpY2UoMCwgZXZlbnRBcmdzLmRhdGEubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ25vZGVDaGVja2VkJywgZXZlbnRBcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnRyaWdnZXJDbGlja0V2ZW50ID0gZnVuY3Rpb24gKGUsIGxpKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgICAgIGV2ZW50OiBlLFxuICAgICAgICAgICAgICAgIG5vZGU6IGxpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbm9kZUNsaWNrZWQnLCBldmVudEFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZXhwYW5kTm9kZSA9IGZ1bmN0aW9uIChjdXJyTGksIGljb24pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFtpY29uXSwgTE9BRCk7XG4gICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFtpY29uXSwgRVhQQU5EQUJMRSk7XG4gICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtpY29uXSwgQ09MTEFQU0lCTEUpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gMDtcbiAgICAgICAgICAgIHZhciBlbmQgPSAwO1xuICAgICAgICAgICAgdmFyIHByb3h5ID0gdGhpcztcbiAgICAgICAgICAgIHZhciB1bCA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFBBUkVOVElURU0sIGN1cnJMaSk7XG4gICAgICAgICAgICB2YXIgbGlFbGUgPSBjdXJyTGk7XG4gICAgICAgICAgICB0aGlzLnNldEhlaWdodChsaUVsZSwgdWwpO1xuICAgICAgICAgICAgdGhpcy5hbmlPYmouYW5pbWF0ZSh1bCwge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuYW5pbWF0aW9uLmV4cGFuZC5lZmZlY3QsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuYW5pbWF0aW9uLmV4cGFuZC5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogdGhpcy5hbmltYXRpb24uZXhwYW5kLmVhc2luZyxcbiAgICAgICAgICAgICAgICBiZWdpbjogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlFbGUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBsaUVsZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFRFWFRXUkFQLCBjdXJyTGkpLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5LmFuaW1hdGVIZWlnaHQoYXJncywgc3RhcnQsIGVuZCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbmQ6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgbGlFbGUuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbGlFbGUuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW2ljb25dLCBQUk9DRVNTKTtcbiAgICAgICAgICAgICAgICAgICAgY3VyckxpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW2N1cnJMaV0sIE5PREVDT0xMQVBTRUQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNMb2FkZWQgJiYgX3RoaXMuZXhwYW5kQXJncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJpZ2dlcignbm9kZUV4cGFuZGVkJywgX3RoaXMuZXhwYW5kQXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmNvbGxhcHNlTm9kZSA9IGZ1bmN0aW9uIChjdXJyTGksIGljb24sIGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoUFJPQ0VTUykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtpY29uXSwgUFJPQ0VTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29sQXJncztcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgY29sQXJncyA9IHRoaXMuZ2V0RXhwYW5kRXZlbnQoY3VyckxpLCBlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ25vZGVDb2xsYXBzaW5nJywgY29sQXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbEFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFtpY29uXSwgQ09MTEFQU0lCTEUpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbaWNvbl0sIEVYUEFOREFCTEUpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gMDtcbiAgICAgICAgICAgIHZhciBlbmQgPSAwO1xuICAgICAgICAgICAgdmFyIHByb3h5ID0gdGhpcztcbiAgICAgICAgICAgIHZhciB1bCA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFBBUkVOVElURU0sIGN1cnJMaSk7XG4gICAgICAgICAgICB2YXIgbGlFbGUgPSBjdXJyTGk7XG4gICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtjdXJyTGldLCBOT0RFQ09MTEFQU0VEKTtcbiAgICAgICAgICAgIHRoaXMuYW5pT2JqLmFuaW1hdGUodWwsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmFuaW1hdGlvbi5jb2xsYXBzZS5lZmZlY3QsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuYW5pbWF0aW9uLmNvbGxhcHNlLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiB0aGlzLmFuaW1hdGlvbi5jb2xsYXBzZS5lYXNpbmcsXG4gICAgICAgICAgICAgICAgYmVnaW46IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpRWxlLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgVEVYVFdSQVAsIGN1cnJMaSkub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBsaUVsZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHkuYW5pbWF0ZUhlaWdodChhcmdzLCBzdGFydCwgZW5kKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVuZDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlFbGUuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgYXJncy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGxpRWxlLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFtpY29uXSwgUFJPQ0VTUyk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJMaS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmlnZ2VyKCdub2RlQ29sbGFwc2VkJywgY29sQXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uIChjdXJyTGksIHVsKSB7XG4gICAgICAgICAgICB1bC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHVsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGN1cnJMaS5zdHlsZS5oZWlnaHQgPSBjdXJyTGkub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIHVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB1bC5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24gKGFyZ3MsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgICAgIHZhciByZW1haW5pbmcgPSAoYXJncy5kdXJhdGlvbiAtIGFyZ3MudGltZVN0YW1wKSAvIGFyZ3MuZHVyYXRpb247XG4gICAgICAgICAgICB2YXIgY3VycmVudEhlaWdodCA9IChlbmQgLSBzdGFydCkgKiByZW1haW5pbmcgKyBzdGFydDtcbiAgICAgICAgICAgIGFyZ3MuZWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGN1cnJlbnRIZWlnaHQgKyAncHgnO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUucmVuZGVyQ2hpbGROb2RlcyA9IGZ1bmN0aW9uIChwYXJlbnRMaSwgZXhwYW5kQ2hpbGQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZWljb24gPSBlajJfYmFzZV82LnNlbGVjdCgnZGl2LicgKyBJQ09OLCBwYXJlbnRMaSk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChlaWNvbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtlaWNvbl0sIExPQUQpO1xuICAgICAgICAgICAgdmFyIGNoaWxkSXRlbXM7XG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZHMuZGF0YVNvdXJjZSBpbnN0YW5jZW9mIGVqMl9kYXRhXzEuRGF0YU1hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGV2ZWwgPSB0aGlzLnBhcmVudHMocGFyZW50TGksICcuJyArIFBBUkVOVElURU0pLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVyXzEgPSB0aGlzLmdldENoaWxkRmllbGRzKHRoaXMuZmllbGRzLCBsZXZlbCwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobWFwcGVyXzEpIHx8IGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobWFwcGVyXzEuZGF0YVNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5kZXRhY2goZWljb24pO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRMaS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVMaXN0LnB1c2goJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgbWFwcGVyXzEuZGF0YVNvdXJjZS5leGVjdXRlUXVlcnkodGhpcy5nZXRRdWVyeShtYXBwZXJfMSwgcGFyZW50TGkuZ2V0QXR0cmlidXRlKCdkYXRhLXVpZCcpKSkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmVlTGlzdC5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRJdGVtcyA9IGUucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50TG9hZERhdGEgPSBjaGlsZEl0ZW1zO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChjaGlsZEl0ZW1zKSB8fCBjaGlsZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5kZXRhY2goZWljb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50TGkucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IF90aGlzLmdldEFjdHVhbFByb3BlcnRpZXMobWFwcGVyXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGlzdEJhc2VPcHRpb24uZmllbGRzID0gcHJvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxpc3RCYXNlT3B0aW9uLmZpZWxkcy51cmwgPSBwcm9wLm5hdmlnYXRlVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGlzdEJhc2VPcHRpb24uYXJpYUF0dHJpYnV0ZXMubGV2ZWwgPSBwYXJzZUZsb2F0KHBhcmVudExpLmdldEF0dHJpYnV0ZSgnYXJpYS1sZXZlbCcpKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRMaS5hcHBlbmRDaGlsZChlajJfbGlzdHNfMS5MaXN0QmFzZS5jcmVhdGVMaXN0KGNoaWxkSXRlbXMsIF90aGlzLmxpc3RCYXNlT3B0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5leHBhbmROb2RlKHBhcmVudExpLCBlaWNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbnN1cmVDaGVja05vZGUocGFyZW50TGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmluYWxpemVOb2RlKHBhcmVudExpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlbmRlclN1YkNoaWxkKHBhcmVudExpLCBleHBhbmRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnRyZWVMaXN0Lmxlbmd0aCA9PT0gMCAmJiAhX3RoaXMuaXNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmZpbmFsaXplKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkSXRlbXMgPSB0aGlzLmdldENoaWxkTm9kZXModGhpcy50cmVlRGF0YSwgcGFyZW50TGkuZ2V0QXR0cmlidXRlKCdkYXRhLXVpZCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkRGF0YSA9IGNoaWxkSXRlbXM7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoY2hpbGRJdGVtcykgfHwgY2hpbGRJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5kZXRhY2goZWljb24pO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRMaS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0QmFzZU9wdGlvbi5hcmlhQXR0cmlidXRlcy5sZXZlbCA9IHBhcnNlRmxvYXQocGFyZW50TGkuZ2V0QXR0cmlidXRlKCdhcmlhLWxldmVsJykpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50TGkuYXBwZW5kQ2hpbGQoZWoyX2xpc3RzXzEuTGlzdEJhc2UuY3JlYXRlTGlzdCh0aGlzLmdldFNvcnRlZERhdGEoY2hpbGRJdGVtcyksIHRoaXMubGlzdEJhc2VPcHRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBhbmROb2RlKHBhcmVudExpLCBlaWNvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlQ2hlY2tOb2RlKHBhcmVudExpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5hbGl6ZU5vZGUocGFyZW50TGkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclN1YkNoaWxkKHBhcmVudExpLCBleHBhbmRDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZW5zdXJlQ2hlY2tOb2RlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDaGVja0JveCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlQ2hpbGRDaGVja1N0YXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlUGFyZW50Q2hlY2tTdGF0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudExvYWREYXRhID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldENoaWxkRmllbGRzID0gZnVuY3Rpb24gKG1hcHBlciwgbm9kZUxldmVsLCBkYXRhTGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZERhdGE7XG4gICAgICAgICAgICBpZiAobm9kZUxldmVsID09PSBkYXRhTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGlsZE1hcHBlcihtYXBwZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hpbGRGaWVsZHModGhpcy5nZXRDaGlsZE1hcHBlcihtYXBwZXIpLCBub2RlTGV2ZWwsIGRhdGFMZXZlbCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0Q2hpbGRNYXBwZXIgPSBmdW5jdGlvbiAobWFwcGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBtYXBwZXIuY2hpbGQgPT09ICdzdHJpbmcnIHx8IGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobWFwcGVyLmNoaWxkKSkgPyBtYXBwZXIgOiBtYXBwZXIuY2hpbGQ7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRDaGlsZE5vZGVzID0gZnVuY3Rpb24gKG9iaiwgcGFyZW50SWQsIGlzUm9vdCkge1xuICAgICAgICAgICAgaWYgKGlzUm9vdCA9PT0gdm9pZCAwKSB7IGlzUm9vdCA9IGZhbHNlOyB9XG4gICAgICAgICAgICB2YXIgY2hpbGROb2RlcztcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKG9iaikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZGF0YVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGlsZEdyb3VwKHRoaXMuZ3JvdXBlZERhdGEsIHBhcmVudElkLCBpc1Jvb3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkcy5jaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG9iamxlbiA9IG9iai5sZW5ndGg7IGkgPCBvYmpsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ialtpXVt0aGlzLmZpZWxkcy5pZF0gJiYgb2JqW2ldW3RoaXMuZmllbGRzLmlkXS50b1N0cmluZygpID09PSBwYXJlbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpbaV1bdGhpcy5maWVsZHMuY2hpbGRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob2JqW2ldLmhhc093blByb3BlcnR5KHRoaXMuZmllbGRzLmNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMob2JqW2ldW3RoaXMuZmllbGRzLmNoaWxkXSwgcGFyZW50SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZXM7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRDaGlsZEdyb3VwID0gZnVuY3Rpb24gKGRhdGEsIHBhcmVudElkLCBpc1Jvb3QpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZE5vZGVzO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBvYmpsZW4gPSBkYXRhLmxlbmd0aDsgaSA8IG9iamxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGRhdGFbaV1bMF0pICYmICFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGRhdGFbaV1bMF1bdGhpcy5maWVsZHMucGFyZW50SURdKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXVswXVt0aGlzLmZpZWxkcy5wYXJlbnRJRF0udG9TdHJpbmcoKSA9PT0gcGFyZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzUm9vdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlcztcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnJlbmRlclN1YkNoaWxkID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV4cGFuZENoaWxkKSB7XG4gICAgICAgICAgICBpZiAoZXhwYW5kQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY0ljb25zID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgRVhQQU5EQUJMRSwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNJY29ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWNvbiA9IGNJY29uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1ckxpID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGljb24sICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZE5vZGVzKGN1ckxpLCBleHBhbmRDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUudG9nZ2xlU2VsZWN0ID0gZnVuY3Rpb24gKGxpLCBlLCBtdWx0aVNlbGVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dNdWx0aVNlbGVjdGlvbiAmJiAoKGUgJiYgZS5jdHJsS2V5KSB8fCBtdWx0aVNlbGVjdCkgJiYgdGhpcy5pc0FjdGl2ZShsaSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2VsZWN0Tm9kZShsaSwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5vZGUobGksIGUsIG11bHRpU2VsZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKGxpKSB7XG4gICAgICAgICAgICByZXR1cm4gbGkuY2xhc3NMaXN0LmNvbnRhaW5zKEFDVElWRSkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5zZWxlY3ROb2RlID0gZnVuY3Rpb24gKGxpLCBlLCBtdWx0aVNlbGVjdCkge1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobGkpIHx8ICghdGhpcy5hbGxvd011bHRpU2VsZWN0aW9uICYmIHRoaXMuaXNBY3RpdmUobGkpICYmICFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGUpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNFbGVtZW50KGxpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmdzO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBldmVudEFyZ3MgPSB0aGlzLmdldFNlbGVjdEV2ZW50KGxpLCAnc2VsZWN0JywgZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdub2RlU2VsZWN0aW5nJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmFsbG93TXVsdGlTZWxlY3Rpb24gfHwgKCFtdWx0aVNlbGVjdCAmJiAoIWUgfHwgKGUgJiYgIWUuY3RybEtleSkpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0QWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd011bHRpU2VsZWN0aW9uICYmIGUgJiYgZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGFydE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydE5vZGUgPSBsaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSB0aGlzLmxpTGlzdC5pbmRleE9mKHRoaXMuc3RhcnROb2RlKTtcbiAgICAgICAgICAgICAgICB2YXIgZW5kSW5kZXggPSB0aGlzLmxpTGlzdC5pbmRleE9mKGxpKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA+IGVuZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gc3RhcnRJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICBlbmRJbmRleCA9IHRlbXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpIDw9IGVuZEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJOb2RlID0gdGhpcy5saUxpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV82LmlzVmlzaWJsZShjdXJyTm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU2VsZWN0KGN1cnJOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnROb2RlID0gbGk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTZWxlY3QobGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRGb2N1c0VsZW1lbnQobGkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ25vZGVTZWxlY3RlZCcsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS51bnNlbGVjdE5vZGUgPSBmdW5jdGlvbiAobGksIGUpIHtcbiAgICAgICAgICAgIHZhciBldmVudEFyZ3M7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgICAgICAgICAgIGV2ZW50QXJncyA9IHRoaXMuZ2V0U2VsZWN0RXZlbnQobGksICd1bi1zZWxlY3QnLCBlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ25vZGVTZWxlY3RpbmcnLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgICAgIGlmIChldmVudEFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdChsaSk7XG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzRWxlbWVudChsaSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbm9kZVNlbGVjdGVkJywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnNldEZvY3VzRWxlbWVudCA9IGZ1bmN0aW9uIChsaSkge1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGxpKSkge1xuICAgICAgICAgICAgICAgIHZhciBmb2N1c2VkTm9kZSA9IHRoaXMuZ2V0Rm9jdXNlZE5vZGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoZm9jdXNlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhbZm9jdXNlZE5vZGVdLCBGT0NVUyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2xpXSwgRk9DVVMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuYWRkU2VsZWN0ID0gZnVuY3Rpb24gKGxpRWxlKSB7XG4gICAgICAgICAgICBsaUVsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbbGlFbGVdLCBBQ1RJVkUpO1xuICAgICAgICAgICAgdmFyIGlkID0gbGlFbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXVpZCcpO1xuICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGlkKSAmJiB0aGlzLnNlbGVjdGVkTm9kZXMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzLnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUucmVtb3ZlU2VsZWN0ID0gZnVuY3Rpb24gKGxpRWxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd011bHRpU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGlFbGUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaUVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW2xpRWxlXSwgQUNUSVZFKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc2VsZWN0ZWROb2Rlcy5pbmRleE9mKGxpRWxlLmdldEF0dHJpYnV0ZSgnZGF0YS11aWQnKSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUucmVtb3ZlU2VsZWN0QWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkTEkgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBBQ1RJVkUpO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBzZWxlY3RlZExJXzEgPSBzZWxlY3RlZExJOyBfaSA8IHNlbGVjdGVkTElfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlID0gc2VsZWN0ZWRMSV8xW19pXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbGxvd011bHRpU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKHNlbGVjdGVkTEksIEFDVElWRSk7XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBzZWxlY3RlZE5vZGVzOiBbXSB9LCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldFNlbGVjdEV2ZW50ID0gZnVuY3Rpb24gKGN1cnJMaSwgYWN0aW9uLCBlKSB7XG4gICAgICAgICAgICB2YXIgbm9kZURhdGEgPSB0aGlzLmdldE5vZGVEYXRhKGN1cnJMaSk7XG4gICAgICAgICAgICByZXR1cm4geyBhY3Rpb246IGFjdGlvbiwgY2FuY2VsOiBmYWxzZSwgaXNJbnRlcmFjdGVkOiBlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGUpID8gZmFsc2UgOiB0cnVlLCBub2RlOiBjdXJyTGksIG5vZGVEYXRhOiBub2RlRGF0YSB9O1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuc2V0RXhwYW5kT25UeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRPblR5cGUgPSAodGhpcy5leHBhbmRPbiA9PT0gJ2F1dG8nKSA/IChlajJfYmFzZV8xLkJyb3dzZXIuaXNEZXZpY2UgPyAnY2xpY2snIDogJ2RibGNsaWNrJykgOiB0aGlzLmV4cGFuZE9uO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZXhwYW5kSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCB8fCAodGhpcy5hbGxvd0VkaXRpbmcgJiYgZS50eXBlID09PSAnZGJsY2xpY2snKSB8fCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFJPT1QpIHx8XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhQQVJFTlRJVEVNKSB8fCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKExJU1RJVEVNKSB8fFxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoSUNPTikgfHwgdGhpcy5zaG93Q2hlY2tCb3ggJiYgZWoyX2Jhc2VfNi5jbG9zZXN0KHRhcmdldCwgJy4nICsgQ0hFQ0tCT1hXUkFQKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kQ29sbGFwc2VBY3Rpb24oZWoyX2Jhc2VfNi5jbG9zZXN0KHRhcmdldCwgJy4nICsgTElTVElURU0pLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmV4cGFuZENvbGxhcHNlQWN0aW9uID0gZnVuY3Rpb24gKGN1cnJMaSwgZSkge1xuICAgICAgICAgICAgdmFyIGljb24gPSBlajJfYmFzZV82LnNlbGVjdCgnZGl2LicgKyBJQ09OLCBjdXJyTGkpO1xuICAgICAgICAgICAgaWYgKCFpY29uIHx8IGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKFBST0NFU1MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzTGlzdCA9IGljb24uY2xhc3NMaXN0O1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoRVhQQU5EQUJMRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBhbmRBY3Rpb24oY3VyckxpLCBpY29uLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VOb2RlKGN1cnJMaSwgaWNvbiwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZXhwYW5kQWN0aW9uID0gZnVuY3Rpb24gKGN1cnJMaSwgaWNvbiwgZSwgZXhwYW5kQ2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChpY29uLmNsYXNzTGlzdC5jb250YWlucyhQUk9DRVNTKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2ljb25dLCBQUk9DRVNTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRBcmdzID0gdGhpcy5nZXRFeHBhbmRFdmVudChjdXJyTGksIGUpO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbm9kZUV4cGFuZGluZycsIHRoaXMuZXhwYW5kQXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXhwYW5kQXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1bCA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFBBUkVOVElURU0sIGN1cnJMaSk7XG4gICAgICAgICAgICBpZiAodWwgJiYgdWwubm9kZU5hbWUgPT09ICdVTCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZE5vZGUoY3VyckxpLCBpY29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2hpbGROb2RlcyhjdXJyTGksIGV4cGFuZENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmtleUFjdGlvbkhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGZvY3VzZWROb2RlID0gdGhpcy5nZXRGb2N1c2VkTm9kZSgpO1xuICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKElOUFVUKSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnBFbGUgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKGUuYWN0aW9uID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucEVsZS5ibHVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtmb2N1c2VkTm9kZV0sIEhPVkVSKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5hY3Rpb24gPT09ICdlc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucEVsZS52YWx1ZSA9IHRoaXMub2xkVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgaW5wRWxlLmJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2ZvY3VzZWROb2RlXSwgSE9WRVIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgICAgIGNhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAgbm9kZTogZm9jdXNlZE5vZGUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdrZXlQcmVzcycsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICBpZiAoZXZlbnRBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoZS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzcGFjZSc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dDaGVja0JveCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja05vZGUoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZVJpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTm9kZSh0aGlzLmVuYWJsZVJ0bCA/IGZhbHNlIDogdHJ1ZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vdmVMZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTm9kZSh0aGlzLmVuYWJsZVJ0bCA/IHRydWUgOiBmYWxzZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vdmVEb3duJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjdHJsRG93bic6XG4gICAgICAgICAgICAgICAgY2FzZSAnc2hpZnREb3duJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjc0Rvd24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlTm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92ZVVwJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjdHJsVXAnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NoaWZ0VXAnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NzVXAnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlTm9kZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NoaWZ0SG9tZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnY3RybEhvbWUnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NzSG9tZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVSb290Tm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzaGlmdEVuZCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnY3RybEVuZCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnY3NFbmQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlUm9vdE5vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdlbnRlcic6XG4gICAgICAgICAgICAgICAgY2FzZSAnY3RybEVudGVyJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzaGlmdEVudGVyJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjc0VudGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3QoZm9jdXNlZE5vZGUsIGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdmMic6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFsbG93RWRpdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUZXh0Ym94KGZvY3VzZWROb2RlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjdHJsQSc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFsbG93TXVsdGlTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzTm9kZXMgPSBlajJfYmFzZV82LnNlbGVjdEFsbCgnLicgKyBMSVNUSVRFTSArICc6bm90KC4nICsgQUNUSVZFICsgJyknLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RHaXZlbk5vZGVzKHNOb2Rlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5jaGVja05vZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGZvY3VzZWROb2RlID0gdGhpcy5nZXRGb2N1c2VkTm9kZSgpO1xuICAgICAgICAgICAgdmFyIGNoZWNrV3JhcCA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIENIRUNLQk9YV1JBUCwgZm9jdXNlZE5vZGUpO1xuICAgICAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IGVqMl9iYXNlXzYuc2VsZWN0KCcgLicgKyBDSEVDS0JPWEZSQU1FLCBjaGVja1dyYXApLmNsYXNzTGlzdC5jb250YWlucyhDSEVDSyk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ2hlY2tOb2RlKGNoZWNrV3JhcCwgaXNDaGVja2VkLCBmb2N1c2VkTm9kZSwgZSk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS52YWxpZGF0ZUNoZWNrTm9kZSA9IGZ1bmN0aW9uIChjaGVja1dyYXAsIGlzQ2hlY2ssIGxpLCBlKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmdzID0gdGhpcy5ub2RlQ2hlY2tpbmdFdmVudChjaGVja1dyYXAsIGlzQ2hlY2ssIGUpO1xuICAgICAgICAgICAgaWYgKGV2ZW50QXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGNoZWNrV3JhcCwgaXNDaGVjayA/ICd1bmNoZWNrJyA6ICdjaGVjaycsIGUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5lbnN1cmVDaGlsZENoZWNrU3RhdGUobGkpO1xuICAgICAgICAgICAgdGhpcy5lbnN1cmVQYXJlbnRDaGVja1N0YXRlKGVqMl9iYXNlXzYuY2xvc2VzdChlajJfYmFzZV82LmNsb3Nlc3QobGksICcuJyArIFBBUkVOVElURU0pLCAnLicgKyBMSVNUSVRFTSkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlQ2hlY2tlZEV2ZW50KGNoZWNrV3JhcCwgaXNDaGVjaywgZSk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5vcGVuTm9kZSA9IGZ1bmN0aW9uICh0b0JlT3BlbmVkLCBlKSB7XG4gICAgICAgICAgICB2YXIgZm9jdXNlZE5vZGUgPSB0aGlzLmdldEZvY3VzZWROb2RlKCk7XG4gICAgICAgICAgICB2YXIgaWNvbiA9IGVqMl9iYXNlXzYuc2VsZWN0KCdkaXYuJyArIElDT04sIGZvY3VzZWROb2RlKTtcbiAgICAgICAgICAgIGlmICh0b0JlT3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpY29uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoRVhQQU5EQUJMRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBhbmRBY3Rpb24oZm9jdXNlZE5vZGUsIGljb24sIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c05leHROb2RlKGZvY3VzZWROb2RlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaWNvbiAmJiBpY29uLmNsYXNzTGlzdC5jb250YWlucyhDT0xMQVBTSUJMRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZU5vZGUoZm9jdXNlZE5vZGUsIGljb24sIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudExpID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGVqMl9iYXNlXzYuY2xvc2VzdChmb2N1c2VkTm9kZSwgJy4nICsgUEFSRU5USVRFTSksICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRMaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGb2N1cyhmb2N1c2VkTm9kZSwgcGFyZW50TGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUubmF2aWdhdGVOb2RlID0gZnVuY3Rpb24gKGlzVG93YXJkcykge1xuICAgICAgICAgICAgdmFyIGZvY3VzZWROb2RlID0gdGhpcy5nZXRGb2N1c2VkTm9kZSgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c05leHROb2RlKGZvY3VzZWROb2RlLCBpc1Rvd2FyZHMpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUubmF2aWdhdGVSb290Tm9kZSA9IGZ1bmN0aW9uIChpc0JhY2t3YXJkcykge1xuICAgICAgICAgICAgdmFyIGZvY3VzZWROb2RlID0gdGhpcy5nZXRGb2N1c2VkTm9kZSgpO1xuICAgICAgICAgICAgdmFyIHJvb3ROb2RlID0gaXNCYWNrd2FyZHMgPyB0aGlzLmdldFJvb3ROb2RlKCkgOiB0aGlzLmdldEVuZE5vZGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXMoZm9jdXNlZE5vZGUsIHJvb3ROb2RlKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldEZvY3VzZWROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZOb2RlID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgTElTVElURU0gKyAnLicgKyBGT0NVUywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGZOb2RlKSA/IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIExJU1RJVEVNLCB0aGlzLmVsZW1lbnQpIDogZk5vZGU7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5mb2N1c05leHROb2RlID0gZnVuY3Rpb24gKGxpLCBpc1Rvd2FyZHMpIHtcbiAgICAgICAgICAgIHZhciBuZXh0Tm9kZSA9IGlzVG93YXJkcyA/IHRoaXMuZ2V0TmV4dE5vZGUobGkpIDogdGhpcy5nZXRQcmV2Tm9kZShsaSk7XG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzKGxpLCBuZXh0Tm9kZSk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXROZXh0Tm9kZSA9IGZ1bmN0aW9uIChsaSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5saUxpc3QuaW5kZXhPZihsaSk7XG4gICAgICAgICAgICB2YXIgbmV4dE5vZGU7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICBuZXh0Tm9kZSA9IHRoaXMubGlMaXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChuZXh0Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKCFlajJfYmFzZV82LmlzVmlzaWJsZShuZXh0Tm9kZSkpO1xuICAgICAgICAgICAgcmV0dXJuIG5leHROb2RlO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0UHJldk5vZGUgPSBmdW5jdGlvbiAobGkpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMubGlMaXN0LmluZGV4T2YobGkpO1xuICAgICAgICAgICAgdmFyIHByZXZOb2RlO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgcHJldk5vZGUgPSB0aGlzLmxpTGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQocHJldk5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlICghZWoyX2Jhc2VfNi5pc1Zpc2libGUocHJldk5vZGUpKTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2Tm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldFJvb3ROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciByb290Tm9kZTtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICByb290Tm9kZSA9IHRoaXMubGlMaXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgfSB3aGlsZSAoIWVqMl9iYXNlXzYuaXNWaXNpYmxlKHJvb3ROb2RlKSk7XG4gICAgICAgICAgICByZXR1cm4gcm9vdE5vZGU7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRFbmROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5saUxpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHZhciBlbmROb2RlO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGVuZE5vZGUgPSB0aGlzLmxpTGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgIH0gd2hpbGUgKCFlajJfYmFzZV82LmlzVmlzaWJsZShlbmROb2RlKSk7XG4gICAgICAgICAgICByZXR1cm4gZW5kTm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnNldEZvY3VzID0gZnVuY3Rpb24gKHByZU5vZGUsIG5leHROb2RlKSB7XG4gICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFtwcmVOb2RlXSwgW0hPVkVSLCBGT0NVU10pO1xuICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbbmV4dE5vZGVdLCBbSE9WRVIsIEZPQ1VTXSk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5mb2N1c0luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1vdXNlRG93blN0YXR1cykge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW3RoaXMuZ2V0Rm9jdXNlZE5vZGUoKV0sIEhPVkVSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5mb2N1c091dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW3RoaXMuZ2V0Rm9jdXNlZE5vZGUoKV0sIEhPVkVSKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLm9uTW91c2VPdmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHZhciBjbGFzc0xpc3QgPSB0YXJnZXQuY2xhc3NMaXN0O1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRMaSA9IGVqMl9iYXNlXzYuY2xvc2VzdCh0YXJnZXQsICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgIGlmICghY3VycmVudExpIHx8IGNsYXNzTGlzdC5jb250YWlucyhQQVJFTlRJVEVNKSB8fCBjbGFzc0xpc3QuY29udGFpbnMoTElTVElURU0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVIb3ZlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SG92ZXIoY3VycmVudExpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnNldEhvdmVyID0gZnVuY3Rpb24gKGxpKSB7XG4gICAgICAgICAgICBpZiAoIWxpLmNsYXNzTGlzdC5jb250YWlucyhIT1ZFUikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUhvdmVyKCk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbbGldLCBIT1ZFUik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUhvdmVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5yZW1vdmVIb3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBob3ZlcmVkTm9kZSA9IGVqMl9iYXNlXzYuc2VsZWN0QWxsKCcuJyArIEhPVkVSLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGhvdmVyZWROb2RlICYmIGhvdmVyZWROb2RlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoaG92ZXJlZE5vZGUsIEhPVkVSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0Tm9kZURhdGEgPSBmdW5jdGlvbiAoY3VyckxpKSB7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoY3VyckxpKSAmJiBjdXJyTGkuY2xhc3NMaXN0LmNvbnRhaW5zKExJU1RJVEVNKSkge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGN1cnJMaS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdWlkJyk7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBMSVNUVEVYVCwgY3VyckxpKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB2YXIgcE5vZGUgPSBlajJfYmFzZV82LmNsb3Nlc3QoY3VyckxpLnBhcmVudE5vZGUsICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgICAgICB2YXIgcGlkID0gcE5vZGUgPyBwTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdWlkJykgOiBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IGN1cnJMaS5jbGFzc0xpc3QuY29udGFpbnMoQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB2YXIgZXhwYW5kZWQgPSAoY3VyckxpLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZScpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBjaGVja2VkID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q2hlY2tCb3gpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCA9IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIENIRUNLQk9YV1JBUCwgY3VyckxpKS5nZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogaWQsIHRleHQ6IHRleHQsIHBhcmVudElEOiBwaWQsIHNlbGVjdGVkOiBzZWxlY3RlZCwgZXhwYW5kZWQ6IGV4cGFuZGVkLCBjaGVja2VkOiBjaGVja2VkIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBpZDogJycsIHRleHQ6ICcnLCBwYXJlbnRJRDogJycsIHNlbGVjdGVkOiAnJywgZXhwYW5kZWQ6ICcnLCBjaGVja2VkOiAnJyB9O1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0RXhwYW5kRXZlbnQgPSBmdW5jdGlvbiAoY3VyckxpLCBlKSB7XG4gICAgICAgICAgICB2YXIgbm9kZURhdGEgPSB0aGlzLmdldE5vZGVEYXRhKGN1cnJMaSk7XG4gICAgICAgICAgICByZXR1cm4geyBjYW5jZWw6IGZhbHNlLCBpc0ludGVyYWN0ZWQ6IGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZSkgPyBmYWxzZSA6IHRydWUsIG5vZGU6IGN1cnJMaSwgbm9kZURhdGE6IG5vZGVEYXRhIH07XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5yZVJlbmRlck5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgc2VsZWN0ZWROb2RlczogW10gfSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldERhdGFCaW5kaW5nKCk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5zZXRDc3NDbGFzcyA9IGZ1bmN0aW9uIChvbGRDbGFzcywgbmV3Q2xhc3MpIHtcbiAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChvbGRDbGFzcykgJiYgb2xkQ2xhc3MgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhbdGhpcy5lbGVtZW50XSwgb2xkQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobmV3Q2xhc3MpICYmIG5ld0NsYXNzICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW3RoaXMuZWxlbWVudF0sIG5ld0NsYXNzLnNwbGl0KCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZWRpdGluZ0hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQgfHwgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhST09UKSB8fCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFBBUkVOVElURU0pIHx8XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhMSVNUSVRFTSkgfHwgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhJQ09OKSB8fFxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoSU5QVVQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB2YXIgbGlFbGUgPSBlajJfYmFzZV82LmNsb3Nlc3QodGFyZ2V0LCAnLicgKyBMSVNUSVRFTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUZXh0Ym94KGxpRWxlLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmNyZWF0ZVRleHRib3ggPSBmdW5jdGlvbiAobGlFbGUsIGUpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0RWxlID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgTElTVFRFWFQsIGxpRWxlKTtcbiAgICAgICAgICAgIHRoaXMub2xkVGV4dCA9IHRleHRFbGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB2YXIgZXZlbnRBcmdzID0gdGhpcy5nZXRFZGl0RXZlbnQobGlFbGUsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdub2RlRWRpdGluZycsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICBpZiAoZXZlbnRBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdHlsZSA9ICd3aWR0aDonICsgdGV4dEVsZS5vZmZzZXRXaWR0aCArICdweCc7XG4gICAgICAgICAgICB2YXIgaW5wRWxlID0gZWoyX2Jhc2VfNi5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgY2xhc3NOYW1lOiBJTlBVVCwgc3R5bGVzOiBzdHlsZSwgYXR0cnM6IHsgdmFsdWU6IHRoaXMub2xkVGV4dCB9IH0pO1xuICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbbGlFbGVdLCBFRElUSU5HKTtcbiAgICAgICAgICAgIHRleHRFbGUuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRleHRFbGUuYXBwZW5kQ2hpbGQoaW5wRWxlKTtcbiAgICAgICAgICAgIGlucEVsZS5mb2N1cygpO1xuICAgICAgICAgICAgdmFyIGlucHV0RWxlID0gaW5wRWxlO1xuICAgICAgICAgICAgaW5wdXRFbGUuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgaW5wdXRFbGUudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgIHRoaXMud2lyZUlucHV0RXZlbnRzKGlucEVsZSk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5pbnB1dEZvY3VzT3V0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHZhciBuZXdUZXh0ID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdmFyIHR4dEVsZSA9IGVqMl9iYXNlXzYuY2xvc2VzdCh0YXJnZXQsICcuJyArIExJU1RURVhUKTtcbiAgICAgICAgICAgIHZhciBsaUVsZSA9IGVqMl9iYXNlXzYuY2xvc2VzdCh0YXJnZXQsICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgIHR4dEVsZS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZSA9IG5ld1RleHQ7XG4gICAgICAgICAgICBlajJfYmFzZV82LmRldGFjaCh0YXJnZXQpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhbbGlFbGVdLCBFRElUSU5HKTtcbiAgICAgICAgICAgIHR4dEVsZS5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdub2RlRWRpdGVkJywgdGhpcy5nZXRFZGl0RXZlbnQobGlFbGUsIG5ld1RleHQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChlbGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdWlkPVwiJyArIGVsZSArICdcIl0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZ2V0RWRpdEV2ZW50ID0gZnVuY3Rpb24gKGxpRWxlLCBuZXdUZXh0KSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0Tm9kZURhdGEobGlFbGUpO1xuICAgICAgICAgICAgcmV0dXJuIHsgY2FuY2VsOiBmYWxzZSwgbmV3VGV4dDogbmV3VGV4dCwgbm9kZTogbGlFbGUsIG5vZGVEYXRhOiBkYXRhLCBvbGRUZXh0OiB0aGlzLm9sZFRleHQgfTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnNldERyYWdBbmREcm9wID0gZnVuY3Rpb24gKHRvQmluZCkge1xuICAgICAgICAgICAgaWYgKHRvQmluZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZURyYWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveURyYWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmluaXRpYWxpemVEcmFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciB2aXJ0dWFsRWxlO1xuICAgICAgICAgICAgdGhpcy5kcmFnT2JqID0gbmV3IGVqMl9iYXNlXzUuRHJhZ2dhYmxlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGVuYWJsZVRhaWxNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBlajJfYmFzZV8xLkJyb3dzZXIuaXNJb3MgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY3Vyc29yQXQ6IHsgdG9wOiAtMjAgfSxcbiAgICAgICAgICAgICAgICBkcmFnVGFyZ2V0OiAnLicgKyBURVhUV1JBUCxcbiAgICAgICAgICAgICAgICBoZWxwZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRyYWdUYXJnZXQgPSBlLnNlbmRlci50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkcmFnUm9vdCA9IGVqMl9iYXNlXzYuY2xvc2VzdChfdGhpcy5kcmFnVGFyZ2V0LCAnLicgKyBST09UKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyYWdXcmFwID0gZWoyX2Jhc2VfNi5jbG9zZXN0KF90aGlzLmRyYWdUYXJnZXQsICcuJyArIFRFWFRXUkFQKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHJhZ0xpID0gZWoyX2Jhc2VfNi5jbG9zZXN0KF90aGlzLmRyYWdUYXJnZXQsICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmZ1bGxSb3dTZWxlY3QgJiYgIWRyYWdXcmFwICYmIF90aGlzLmRyYWdUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKEZVTExST1cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnV3JhcCA9IF90aGlzLmRyYWdUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZHJhZ1RhcmdldCB8fCAhZS5lbGVtZW50LmlzU2FtZU5vZGUoZHJhZ1Jvb3QpIHx8ICFkcmFnV3JhcCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHJhZ1RhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoUk9PVCkgfHwgX3RoaXMuZHJhZ1RhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoUEFSRU5USVRFTSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRyYWdUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKExJU1RJVEVNKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZUVsZSA9IChkcmFnV3JhcC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChlajJfYmFzZV82LnNlbGVjdCgnZGl2LicgKyBJQ09OLCBjbG9uZUVsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWNvbiA9IGVqMl9iYXNlXzYuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IElDT04gKyAnICcgKyBFWFBBTkRBQkxFIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVFbGUuaW5zZXJ0QmVmb3JlKGljb24sIGNsb25lRWxlLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgY3NzQ2xhc3MgPSBEUkFHSVRFTSArICcgJyArIFJPT1QgKyAnICcgKyAoX3RoaXMuZW5hYmxlUnRsID8gUlRMIDogJycpO1xuICAgICAgICAgICAgICAgICAgICB2aXJ0dWFsRWxlID0gZWoyX2Jhc2VfNi5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogY3NzQ2xhc3MgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZpcnR1YWxFbGUuYXBwZW5kQ2hpbGQoY2xvbmVFbGUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbkxlbiA9IF90aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBpZiAobkxlbiA+IDEgJiYgX3RoaXMuYWxsb3dNdWx0aVNlbGVjdGlvbiAmJiBfdGhpcy5kcmFnTGkuY2xhc3NMaXN0LmNvbnRhaW5zKEFDVElWRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjTm9kZSA9IGVqMl9iYXNlXzYuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBEUk9QQ09VTlQsIGlubmVySFRNTDogJycgKyBuTGVuIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlydHVhbEVsZS5hcHBlbmRDaGlsZChjTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aXJ0dWFsRWxlKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHJhZ0RhdGEgPSBfdGhpcy5nZXROb2RlRGF0YShfdGhpcy5kcmFnTGkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmlydHVhbEVsZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRyYWdTdGFydDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbX3RoaXMuZWxlbWVudF0sIERSQUdHSU5HKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50QXJncyA9IF90aGlzLmdldERyYWdFdmVudChlLmV2ZW50LCBfdGhpcywgbnVsbCwgZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmlnZ2VyKCdub2RlRHJhZ1N0YXJ0JywgZXZlbnRBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50QXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuZGV0YWNoKHZpcnR1YWxFbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhbX3RoaXMuZWxlbWVudF0sIERSQUdHSU5HKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kcmFnU3RhcnRBY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHJhZ0FjdGlvbihlLCB2aXJ0dWFsRWxlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRyYWdTdG9wOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LnJlbW92ZUNsYXNzKFtfdGhpcy5lbGVtZW50XSwgRFJBR0dJTkcpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVWaXJ0dWFsRWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkcm9wVGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkcm9wUm9vdCA9IChlajJfYmFzZV82LmNsb3Nlc3QoZHJvcFRhcmdldCwgJy4nICsgRFJPUFBBQkxFKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZHJvcFRhcmdldCB8fCAhZHJvcFJvb3QgfHwgZHJvcFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoUk9PVCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuZGV0YWNoKGUuaGVscGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50QXJncyA9IF90aGlzLmdldERyYWdFdmVudChlLmV2ZW50LCBfdGhpcywgZHJvcFRhcmdldCwgZHJvcFRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyaWdnZXIoJ25vZGVEcmFnU3RvcCcsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudEFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmRldGFjaChlLmhlbHBlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRyYWdTdGFydEFjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5kcm9wT2JqID0gbmV3IGVqMl9iYXNlXzUuRHJvcHBhYmxlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIG91dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGUpICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoU0lCTElORykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ25vdC1hbGxvd2VkJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb3ZlcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnJztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRyb3A6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRyb3BBY3Rpb24oZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5kcmFnQWN0aW9uID0gZnVuY3Rpb24gKGUsIHZpcnR1YWxFbGUpIHtcbiAgICAgICAgICAgIHZhciBkcm9wUm9vdCA9IGVqMl9iYXNlXzYuY2xvc2VzdChlLnRhcmdldCwgJy4nICsgRFJPUFBBQkxFKTtcbiAgICAgICAgICAgIHZhciBkcm9wV3JhcCA9IGVqMl9iYXNlXzYuY2xvc2VzdChlLnRhcmdldCwgJy4nICsgVEVYVFdSQVApO1xuICAgICAgICAgICAgdmFyIGljb24gPSBlajJfYmFzZV82LnNlbGVjdCgnZGl2LicgKyBJQ09OLCB2aXJ0dWFsRWxlKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW2ljb25dLCBbRFJPUElOLCBEUk9QTkVYVCwgRFJPUE9VVCwgTk9EUk9QXSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVZpcnR1YWxFbGUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJyc7XG4gICAgICAgICAgICB2YXIgY2xhc3NMaXN0ID0gZS50YXJnZXQuY2xhc3NMaXN0O1xuICAgICAgICAgICAgaWYgKHRoaXMuZnVsbFJvd1NlbGVjdCAmJiAhZHJvcFdyYXAgJiYgIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoY2xhc3NMaXN0KSAmJiBjbGFzc0xpc3QuY29udGFpbnMoRlVMTFJPVykpIHtcbiAgICAgICAgICAgICAgICBkcm9wV3JhcCA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkcm9wUm9vdCkge1xuICAgICAgICAgICAgICAgIHZhciBkcm9wTGkgPSBlajJfYmFzZV82LmNsb3Nlc3QoZS50YXJnZXQsICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgICAgICBpZiAoIWRyb3BSb290LmNsYXNzTGlzdC5jb250YWlucyhST09UKSB8fCAoZHJvcFdyYXAgJiZcbiAgICAgICAgICAgICAgICAgICAgKCFkcm9wTGkuaXNTYW1lTm9kZSh0aGlzLmRyYWdMaSkgJiYgIXRoaXMuaXNEZXNjZW5kYW50KHRoaXMuZHJhZ0xpLCBkcm9wTGkpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUgJiYgKGUuZXZlbnQub2Zmc2V0WSA8IDcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtpY29uXSwgRFJPUE5FWFQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZpckVsZSA9IGVqMl9iYXNlXzYuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IFNJQkxJTkcgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmZ1bGxSb3dTZWxlY3QgPyAoMSkgOiAoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wTGkuaW5zZXJ0QmVmb3JlKHZpckVsZSwgZHJvcExpLmNoaWxkcmVuW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZSAmJiAoZS50YXJnZXQub2Zmc2V0SGVpZ2h0ID4gMCAmJiBlLmV2ZW50Lm9mZnNldFkgPiAoZS50YXJnZXQub2Zmc2V0SGVpZ2h0IC0gMTApKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbaWNvbl0sIERST1BORVhUKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2aXJFbGUgPSBlajJfYmFzZV82LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBTSUJMSU5HIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5mdWxsUm93U2VsZWN0ID8gKDIpIDogKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcExpLmluc2VydEJlZm9yZSh2aXJFbGUsIGRyb3BMaS5jaGlsZHJlbltpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbaWNvbl0sIERST1BJTik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT09ICdMSScgJiYgKCFkcm9wTGkuaXNTYW1lTm9kZSh0aGlzLmRyYWdMaSkgJiYgIXRoaXMuaXNEZXNjZW5kYW50KHRoaXMuZHJhZ0xpLCBkcm9wTGkpKSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtpY29uXSwgRFJPUE5FWFQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclZpcnR1YWxFbGUoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhTSUJMSU5HKSkge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV82LmFkZENsYXNzKFtpY29uXSwgRFJPUE5FWFQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5hZGRDbGFzcyhbaWNvbl0sIERST1BPVVQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2ljb25dLCBOT0RST1ApO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ25vdC1hbGxvd2VkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbm9kZURyYWdnaW5nJywgdGhpcy5nZXREcmFnRXZlbnQoZS5ldmVudCwgdGhpcywgZS50YXJnZXQsIGUudGFyZ2V0KSk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5kcm9wQWN0aW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBkcm9wVGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgZHJhZ09iaiA9IGUuZHJhZ0RhdGEuZHJhZ2dhYmxlLmVqMl9pbnN0YW5jZXNbMF07XG4gICAgICAgICAgICB2YXIgZHJhZ1RhcmdldCA9IGRyYWdPYmouZHJhZ1RhcmdldDtcbiAgICAgICAgICAgIHZhciBkcmFnTGkgPSAoZWoyX2Jhc2VfNi5jbG9zZXN0KGRyYWdUYXJnZXQsICcuJyArIExJU1RJVEVNKSk7XG4gICAgICAgICAgICB2YXIgZHJvcExpID0gKGVqMl9iYXNlXzYuY2xvc2VzdChkcm9wVGFyZ2V0LCAnLicgKyBMSVNUSVRFTSkpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfNi5kZXRhY2goZS5kcm9wcGVkRWxlbWVudCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICcnO1xuICAgICAgICAgICAgaWYgKCFkcm9wTGkgfHwgZHJvcExpLmlzU2FtZU5vZGUoZHJhZ0xpKSB8fCB0aGlzLmlzRGVzY2VuZGFudChkcmFnTGksIGRyb3BMaSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZHJhZ09iai5hbGxvd011bHRpU2VsZWN0aW9uICYmIChkcmFnTGkuY2xhc3NMaXN0LmNvbnRhaW5zKEFDVElWRSkgfHwgKGUuZXZlbnQub2Zmc2V0WSA8IDcgfHxcbiAgICAgICAgICAgICAgICAoZS50YXJnZXQub2Zmc2V0SGVpZ2h0ID4gMCAmJiBlLmV2ZW50Lm9mZnNldFkgPiAoZS50YXJnZXQub2Zmc2V0SGVpZ2h0IC0gMTApKSkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNOb2RlcyA9IGVqMl9iYXNlXzYuc2VsZWN0QWxsKCcuJyArIEFDVElWRSwgZHJhZ09iai5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHJvcExpLmlzU2FtZU5vZGUoc05vZGVzW2ldKSB8fCB0aGlzLmlzRGVzY2VuZGFudChzTm9kZXNbaV0sIGRyb3BMaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kTm9kZShkcm9wVGFyZ2V0LCBzTm9kZXNbaV0sIGRyb3BMaSwgZSwgZHJhZ09iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmROb2RlKGRyb3BUYXJnZXQsIGRyYWdMaSwgZHJvcExpLCBlLCBkcmFnT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbm9kZURyb3BwZWQnLCB0aGlzLmdldERyYWdFdmVudChlLmV2ZW50LCBkcmFnT2JqLCBkcm9wVGFyZ2V0LCBlLnRhcmdldCkpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuYXBwZW5kTm9kZSA9IGZ1bmN0aW9uIChkcm9wVGFyZ2V0LCBkcmFnTGksIGRyb3BMaSwgZSwgZHJhZ09iaikge1xuICAgICAgICAgICAgaWYgKGRyb3BUYXJnZXQubm9kZU5hbWUgPT09ICdMSScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3BBc1NpYmxpbmdOb2RlKGRyYWdMaSwgZHJvcExpLCBlLCBkcmFnT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcEFzQ2hpbGROb2RlKGRyYWdMaSwgZHJvcExpLCBkcmFnT2JqLCBudWxsLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmRyb3BBc1NpYmxpbmdOb2RlID0gZnVuY3Rpb24gKGRyYWdMaSwgZHJvcExpLCBlLCBkcmFnT2JqKSB7XG4gICAgICAgICAgICB2YXIgZHJvcFVsID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGRyb3BMaSwgJy4nICsgUEFSRU5USVRFTSk7XG4gICAgICAgICAgICB2YXIgZHJhZ1BhcmVudFVsID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGRyYWdMaSwgJy4nICsgUEFSRU5USVRFTSk7XG4gICAgICAgICAgICB2YXIgZHJhZ1BhcmVudExpID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGRyYWdQYXJlbnRVbCwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgdmFyIHByZTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5vZmZzZXRIZWlnaHQgPiAwICYmIGUuZXZlbnQub2Zmc2V0WSA+IGUudGFyZ2V0Lm9mZnNldEhlaWdodCAtIDIpIHtcbiAgICAgICAgICAgICAgICBwcmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGUuZXZlbnQub2Zmc2V0WSA8IDIpIHtcbiAgICAgICAgICAgICAgICBwcmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcFVsLmluc2VydEJlZm9yZShkcmFnTGksIHByZSA/IGUudGFyZ2V0IDogZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudChkcmFnUGFyZW50VWwsIGRyYWdQYXJlbnRMaSk7XG4gICAgICAgICAgICBpZiAoZHJhZ09iai5lbGVtZW50LmlkID09PSB0aGlzLmVsZW1lbnQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRyYWdPYmoudXBkYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5kcm9wQXNDaGlsZE5vZGUgPSBmdW5jdGlvbiAoZHJhZ0xpLCBkcm9wTGksIGRyYWdPYmosIGluZGV4LCBlKSB7XG4gICAgICAgICAgICB2YXIgZHJhZ1BhcmVudFVsID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGRyYWdMaSwgJy4nICsgUEFSRU5USVRFTSk7XG4gICAgICAgICAgICB2YXIgZHJhZ1BhcmVudExpID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGRyYWdQYXJlbnRVbCwgJy4nICsgTElTVElURU0pO1xuICAgICAgICAgICAgdmFyIGRyb3BQYXJlbnRVbCA9IGVqMl9iYXNlXzYuY2xvc2VzdChkcm9wTGksICcuJyArIFBBUkVOVElURU0pO1xuICAgICAgICAgICAgaWYgKGUgJiYgKGUuZXZlbnQub2Zmc2V0WSA8IDcpKSB7XG4gICAgICAgICAgICAgICAgZHJvcFBhcmVudFVsLmluc2VydEJlZm9yZShkcmFnTGksIGRyb3BMaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlICYmIChlLnRhcmdldC5vZmZzZXRIZWlnaHQgPiAwICYmIGUuZXZlbnQub2Zmc2V0WSA+IChlLnRhcmdldC5vZmZzZXRIZWlnaHQgLSAxMCkpKSB7XG4gICAgICAgICAgICAgICAgZHJvcFBhcmVudFVsLmluc2VydEJlZm9yZShkcmFnTGksIGRyb3BMaS5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyb3BVbCA9IHRoaXMuZXhwYW5kUGFyZW50KGRyb3BMaSk7XG4gICAgICAgICAgICAgICAgZHJvcFVsLmluc2VydEJlZm9yZShkcmFnTGksIGRyb3BVbC5jaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnQoZHJhZ1BhcmVudFVsLCBkcmFnUGFyZW50TGkpO1xuICAgICAgICAgICAgaWYgKGRyYWdPYmouZWxlbWVudC5pZCA9PT0gdGhpcy5lbGVtZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcmFnT2JqLnVwZGF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZXhwYW5kUGFyZW50ID0gZnVuY3Rpb24gKGRyb3BMaSkge1xuICAgICAgICAgICAgdmFyIGRyb3BJY29uID0gZWoyX2Jhc2VfNi5zZWxlY3QoJ2Rpdi4nICsgSUNPTiwgZHJvcExpKTtcbiAgICAgICAgICAgIGlmIChkcm9wSWNvbiAmJiBkcm9wSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoRVhQQU5EQUJMRSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEFjdGlvbihkcm9wTGksIGRyb3BJY29uLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkcm9wVWwgPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBQQVJFTlRJVEVNLCBkcm9wTGkpO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoZHJvcFVsKSkge1xuICAgICAgICAgICAgICAgIGVqMl9saXN0c18xLkxpc3RCYXNlLmdlbmVyYXRlSWNvbihkcm9wTGksIENPTExBUFNJQkxFLCB0aGlzLmxpc3RCYXNlT3B0aW9uKTtcbiAgICAgICAgICAgICAgICB2YXIgaWNvbiA9IGVqMl9iYXNlXzYuc2VsZWN0KCdkaXYuJyArIElDT04sIGRyb3BMaSk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhbaWNvbl0sIEVYUEFOREFCTEUpO1xuICAgICAgICAgICAgICAgIGRyb3BVbCA9IGVqMl9saXN0c18xLkxpc3RCYXNlLmdlbmVyYXRlVUwoW10sIG51bGwsIHRoaXMubGlzdEJhc2VPcHRpb24pO1xuICAgICAgICAgICAgICAgIGRyb3BMaS5hcHBlbmRDaGlsZChkcm9wVWwpO1xuICAgICAgICAgICAgICAgIGRyb3BMaS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW2Ryb3BMaV0sIE5PREVDT0xMQVBTRUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRyb3BVbDtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnVwZGF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoZHJhZ1BhcmVudFVsLCBkcmFnUGFyZW50TGkpIHtcbiAgICAgICAgICAgIGlmIChkcmFnUGFyZW50TGkgJiYgZHJhZ1BhcmVudFVsLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyYWdJY29uID0gZWoyX2Jhc2VfNi5zZWxlY3QoJ2Rpdi4nICsgSUNPTiwgZHJhZ1BhcmVudExpKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV82LmRldGFjaChkcmFnUGFyZW50VWwpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuZGV0YWNoKGRyYWdJY29uKTtcbiAgICAgICAgICAgICAgICBkcmFnUGFyZW50TGkucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5yZW5kZXJWaXJ0dWFsRWxlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBwcmU7XG4gICAgICAgICAgICBpZiAoZS5ldmVudC5vZmZzZXRZID4gZS50YXJnZXQub2Zmc2V0SGVpZ2h0IC0gMikge1xuICAgICAgICAgICAgICAgIHByZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZS5ldmVudC5vZmZzZXRZIDwgMikge1xuICAgICAgICAgICAgICAgIHByZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmlyRWxlID0gZWoyX2Jhc2VfNi5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogU0lCTElORyB9KTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZnVsbFJvd1NlbGVjdCA/IChwcmUgPyAxIDogMikgOiAocHJlID8gMCA6IDEpO1xuICAgICAgICAgICAgZS50YXJnZXQuaW5zZXJ0QmVmb3JlKHZpckVsZSwgZS50YXJnZXQuY2hpbGRyZW5baW5kZXhdKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnJlbW92ZVZpcnR1YWxFbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2liRWxlID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgU0lCTElORyk7XG4gICAgICAgICAgICBpZiAoc2liRWxlKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5kZXRhY2goc2liRWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmRlc3Ryb3lEcmFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ09iaiAmJiB0aGlzLmRyb3BPYmopIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdPYmouZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcE9iai5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXREcmFnRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIG9iaiwgZHJvcFRhcmdldCwgdGFyZ2V0KSB7XG4gICAgICAgICAgICB2YXIgZHJvcExpID0gZHJvcFRhcmdldCA/IGVqMl9iYXNlXzYuY2xvc2VzdChkcm9wVGFyZ2V0LCAnLicgKyBMSVNUSVRFTSkgOiBudWxsO1xuICAgICAgICAgICAgdmFyIGRyb3BEYXRhID0gZHJvcExpID8gdGhpcy5nZXROb2RlRGF0YShkcm9wTGkpIDogbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgZHJhZ2dlZE5vZGU6IG9iai5kcmFnTGksXG4gICAgICAgICAgICAgICAgZHJhZ2dlZE5vZGVEYXRhOiBvYmouZHJhZ0RhdGEsXG4gICAgICAgICAgICAgICAgZHJvcHBlZE5vZGU6IGRyb3BMaSxcbiAgICAgICAgICAgICAgICBkcm9wcGVkTm9kZURhdGE6IGRyb3BEYXRhLFxuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuYWRkRnVsbFJvdyA9IGZ1bmN0aW9uICh0b0FkZCkge1xuICAgICAgICAgICAgdmFyIGxlbiA9IHRoaXMubGlMaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0b0FkZCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGdWxsUm93KHRoaXMubGlMaXN0W2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3dEaXYgPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBGVUxMUk9XLCB0aGlzLmxpTGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuZGV0YWNoKHJvd0Rpdik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuY3JlYXRlRnVsbFJvdyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgcm93RGl2ID0gZWoyX2Jhc2VfNi5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogRlVMTFJPVyB9KTtcbiAgICAgICAgICAgIGl0ZW0uaW5zZXJ0QmVmb3JlKHJvd0RpdiwgaXRlbS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmFkZE11bHRpU2VsZWN0ID0gZnVuY3Rpb24gKHRvQWRkKSB7XG4gICAgICAgICAgICBpZiAodG9BZGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlFbGVzID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgTElTVElURU0gKyAnOm5vdChbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0pJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGxpRWxlc18xID0gbGlFbGVzOyBfaSA8IGxpRWxlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlID0gbGlFbGVzXzFbX2ldO1xuICAgICAgICAgICAgICAgICAgICBlbGUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpRWxlcyA9IGVqMl9iYXNlXzYuc2VsZWN0QWxsKCcuJyArIExJU1RJVEVNICsgJ1thcmlhLXNlbGVjdGVkPVwiZmFsc2VcIl0nLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9hID0gMCwgbGlFbGVzXzIgPSBsaUVsZXM7IF9hIDwgbGlFbGVzXzIubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGUgPSBsaUVsZXNfMltfYV07XG4gICAgICAgICAgICAgICAgICAgIGVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5jb2xsYXBzZUJ5TGV2ZWwgPSBmdW5jdGlvbiAoZWxlbWVudCwgbGV2ZWwsIGV4Y2x1ZGVIaWRkZW5Ob2Rlcykge1xuICAgICAgICAgICAgaWYgKGxldmVsID4gMCAmJiAhZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHZhciBjTm9kZXMgPSB0aGlzLmdldFZpc2libGVOb2RlcyhleGNsdWRlSGlkZGVuTm9kZXMsIGVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNOb2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlFbGUgPSBjTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBpY29uID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgQ09MTEFQU0lCTEUsIGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFRFWFRXUkFQLCBsaUVsZSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQoaWNvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VOb2RlKGxpRWxlLCBpY29uLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQnlMZXZlbChlajJfYmFzZV82LnNlbGVjdCgnLicgKyBQQVJFTlRJVEVNLCBsaUVsZSksIGxldmVsIC0gMSwgZXhjbHVkZUhpZGRlbk5vZGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5jb2xsYXBzZUFsbE5vZGVzID0gZnVuY3Rpb24gKGV4Y2x1ZGVIaWRkZW5Ob2Rlcykge1xuICAgICAgICAgICAgdmFyIGNJY29ucyA9IHRoaXMuZ2V0VmlzaWJsZU5vZGVzKGV4Y2x1ZGVIaWRkZW5Ob2RlcywgZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgQ09MTEFQU0lCTEUsIHRoaXMuZWxlbWVudCkpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNJY29ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpY29uID0gY0ljb25zW2ldO1xuICAgICAgICAgICAgICAgIHZhciBsaUVsZSA9IGVqMl9iYXNlXzYuY2xvc2VzdChpY29uLCAnLicgKyBMSVNUSVRFTSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZU5vZGUobGlFbGUsIGljb24sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZXhwYW5kQnlMZXZlbCA9IGZ1bmN0aW9uIChlbGVtZW50LCBsZXZlbCwgZXhjbHVkZUhpZGRlbk5vZGVzKSB7XG4gICAgICAgICAgICBpZiAobGV2ZWwgPiAwICYmICFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVOb2RlcyA9IHRoaXMuZ2V0VmlzaWJsZU5vZGVzKGV4Y2x1ZGVIaWRkZW5Ob2RlcywgZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZU5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaUVsZSA9IGVOb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGljb24gPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBFWFBBTkRBQkxFLCBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBURVhUV1JBUCwgbGlFbGUpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGljb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEFjdGlvbihsaUVsZSwgaWNvbiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBhbmRCeUxldmVsKGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFBBUkVOVElURU0sIGxpRWxlKSwgbGV2ZWwgLSAxLCBleGNsdWRlSGlkZGVuTm9kZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmV4cGFuZEFsbE5vZGVzID0gZnVuY3Rpb24gKGV4Y2x1ZGVIaWRkZW5Ob2Rlcykge1xuICAgICAgICAgICAgdmFyIGVJY29ucyA9IHRoaXMuZ2V0VmlzaWJsZU5vZGVzKGV4Y2x1ZGVIaWRkZW5Ob2RlcywgZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgRVhQQU5EQUJMRSwgdGhpcy5lbGVtZW50KSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZUljb25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSBlSWNvbnNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGxpRWxlID0gZWoyX2Jhc2VfNi5jbG9zZXN0KGljb24sICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEFjdGlvbihsaUVsZSwgaWNvbiwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5nZXRWaXNpYmxlTm9kZXMgPSBmdW5jdGlvbiAoZXhjbHVkZUhpZGRlbk5vZGVzLCBub2Rlcykge1xuICAgICAgICAgICAgdmFyIHZOb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlSGlkZGVuTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzYuaXNWaXNpYmxlKHZOb2Rlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZOb2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdk5vZGVzO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUucmVtb3ZlTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB2YXIgZHJhZ1BhcmVudFVsID0gZWoyX2Jhc2VfNi5jbG9zZXN0KG5vZGUsICcuJyArIFBBUkVOVElURU0pO1xuICAgICAgICAgICAgdmFyIGRyYWdQYXJlbnRMaSA9IGVqMl9iYXNlXzYuY2xvc2VzdChkcmFnUGFyZW50VWwsICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzYuZGV0YWNoKG5vZGUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50KGRyYWdQYXJlbnRVbCwgZHJhZ1BhcmVudExpKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnVwZGF0ZUluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmxpTGlzdCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVqMl9iYXNlXzYuc2VsZWN0QWxsKCcuJyArIExJU1RJVEVNLCB0aGlzLmVsZW1lbnQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnVwZGF0ZVNlbGVjdGVkTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBzZWxlY3RlZE5vZGVzOiBbXSB9LCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBzTm9kZXMgPSBlajJfYmFzZV82LnNlbGVjdEFsbCgnLicgKyBBQ1RJVkUsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEdpdmVuTm9kZXMoc05vZGVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmRvR2l2ZW5BY3Rpb24gPSBmdW5jdGlvbiAobm9kZXMsIHNlbGVjdG9yLCB0b0V4cGFuZCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpRWxlID0gdGhpcy5nZXRFbGVtZW50KG5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChsaUVsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBpY29uID0gZWoyX2Jhc2VfNi5zZWxlY3QoJy4nICsgc2VsZWN0b3IsIGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFRFWFRXUkFQLCBsaUVsZSkpO1xuICAgICAgICAgICAgICAgIGlmICghZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChpY29uKSkge1xuICAgICAgICAgICAgICAgICAgICB0b0V4cGFuZCA/IHRoaXMuZXhwYW5kQWN0aW9uKGxpRWxlLCBpY29uLCBudWxsKSA6IHRoaXMuY29sbGFwc2VOb2RlKGxpRWxlLCBpY29uLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5hZGRHaXZlbk5vZGVzID0gZnVuY3Rpb24gKG5vZGVzLCBkcm9wTGksIGluZGV4LCBpc1JlbW90ZSkge1xuICAgICAgICAgICAgdmFyIGxldmVsID0gZHJvcExpID8gcGFyc2VGbG9hdChkcm9wTGkuZ2V0QXR0cmlidXRlKCdhcmlhLWxldmVsJykpICsgMSA6IDE7XG4gICAgICAgICAgICBpZiAoaXNSZW1vdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hcHBlcihsZXZlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGkgPSBlajJfbGlzdHNfMS5MaXN0QmFzZS5jcmVhdGVMaXN0SXRlbUZyb21Kc29uKG5vZGVzLCB0aGlzLmxpc3RCYXNlT3B0aW9uLCBsZXZlbCk7XG4gICAgICAgICAgICB2YXIgZHJvcFVsID0gZHJvcExpID8gdGhpcy5leHBhbmRQYXJlbnQoZHJvcExpKSA6IGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFBBUkVOVElURU0sIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgcmVmTm9kZSA9IGRyb3BVbC5jaGlsZE5vZGVzW2luZGV4XTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkcm9wVWwuaW5zZXJ0QmVmb3JlKGxpW2ldLCByZWZOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmluYWxpemVOb2RlKGRyb3BVbCk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS51cGRhdGVNYXBwZXIgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBtYXBwZXIgPSAobGV2ZWwgPT09IDEpID8gdGhpcy5maWVsZHMgOiB0aGlzLmdldENoaWxkRmllbGRzKHRoaXMuZmllbGRzLCBsZXZlbCAtIDEsIDEpO1xuICAgICAgICAgICAgdmFyIHByb3AgPSB0aGlzLmdldEFjdHVhbFByb3BlcnRpZXMobWFwcGVyKTtcbiAgICAgICAgICAgIHRoaXMubGlzdEJhc2VPcHRpb24uZmllbGRzID0gcHJvcDtcbiAgICAgICAgICAgIHRoaXMubGlzdEJhc2VPcHRpb24uZmllbGRzLnVybCA9IHByb3AubmF2aWdhdGVVcmw7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5kb0Rpc2FibGVBY3Rpb24gPSBmdW5jdGlvbiAobm9kZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBub2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBsaUVsZSA9IHRoaXMuZ2V0RWxlbWVudChub2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobGlFbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaUVsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYuYWRkQ2xhc3MoW2xpRWxlXSwgRElTQUJMRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5kb0VuYWJsZUFjdGlvbiA9IGZ1bmN0aW9uIChub2Rlcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpRWxlID0gdGhpcy5nZXRFbGVtZW50KG5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChsaUVsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpRWxlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzYucmVtb3ZlQ2xhc3MoW2xpRWxlXSwgRElTQUJMRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS53aXJlSW5wdXRFdmVudHMgPSBmdW5jdGlvbiAoaW5wRWxlKSB7XG4gICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5hZGQoaW5wRWxlLCAnYmx1cicsIHRoaXMuaW5wdXRGb2N1c091dCwgdGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS53aXJlRWRpdGluZ0V2ZW50cyA9IGZ1bmN0aW9uICh0b0JpbmQpIHtcbiAgICAgICAgICAgIGlmICh0b0JpbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJveHlfMSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzEuQnJvd3Nlci5pc0lvcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoRWRpdE9iaiA9IG5ldyBlajJfYmFzZV83LlRvdWNoKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG91YmxlVGFwOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5XzEuZWRpdGluZ0hhbmRsZXIoZS5vcmlnaW5hbEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnZGJsY2xpY2snLCB0aGlzLmVkaXRpbmdIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMS5Ccm93c2VyLmlzSW9zICYmIHRoaXMudG91Y2hFZGl0T2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFZGl0T2JqLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdkYmxjbGljaycsIHRoaXMuZWRpdGluZ0hhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLndpcmVDbGlja0V2ZW50ID0gZnVuY3Rpb24gKHRvQmluZCkge1xuICAgICAgICAgICAgaWYgKHRvQmluZCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm94eV8yID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMS5Ccm93c2VyLmlzSW9zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hDbGlja09iaiA9IG5ldyBlajJfYmFzZV83LlRvdWNoKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5XzIuY2xpY2tIYW5kbGVyKGUub3JpZ2luYWxFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV8xLkJyb3dzZXIuaXNJb3MgJiYgdGhpcy50b3VjaENsaWNrT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hDbGlja09iai5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUud2lyZUV4cGFuZE9uRXZlbnQgPSBmdW5jdGlvbiAodG9CaW5kKSB7XG4gICAgICAgICAgICBpZiAodG9CaW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3h5XzMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV8xLkJyb3dzZXIuaXNJb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZXhwYW5kT25UeXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoRXhwYW5kT2JqID0gbmV3IGVqMl9iYXNlXzcuVG91Y2godGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eV8zLmV4cGFuZEhhbmRsZXIoZS5vcmlnaW5hbEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFeHBhbmRPYmogPSBuZXcgZWoyX2Jhc2VfNy5Ub3VjaCh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3VibGVUYXA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5XzMuZXhwYW5kSGFuZGxlcihlLm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCB0aGlzLmV4cGFuZE9uVHlwZSwgdGhpcy5leHBhbmRIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfMS5Ccm93c2VyLmlzSW9zICYmIHRoaXMudG91Y2hFeHBhbmRPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaEV4cGFuZE9iai5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCB0aGlzLmV4cGFuZE9uVHlwZSwgdGhpcy5leHBhbmRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5tb3VzZURvd25IYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgJiYgdGhpcy5hbGxvd011bHRpU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2NvbnRleHRtZW51ICcsIHRoaXMucHJldmVudENvbnRleHRNZW51LCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUucHJldmVudENvbnRleHRNZW51ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLndpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMud2lyZUNsaWNrRXZlbnQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLndpcmVFeHBhbmRPbkV2ZW50KHRydWUpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5FdmVudEhhbmRsZXIuYWRkKHRoaXMuZWxlbWVudCwgJ2ZvY3VzJywgdGhpcy5mb2N1c0luLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdibHVyJywgdGhpcy5mb2N1c091dCwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnbW91c2VvdmVyJywgdGhpcy5vbk1vdXNlT3ZlciwgdGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnbW91c2VvdXQnLCB0aGlzLm9uTW91c2VMZWF2ZSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkTW9kdWxlID0gbmV3IGVqMl9iYXNlXzMuS2V5Ym9hcmRFdmVudHModGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICAgICAga2V5QWN0aW9uOiB0aGlzLmtleUFjdGlvbkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBrZXlDb25maWdzOiB0aGlzLmtleUNvbmZpZ3MsXG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiAna2V5ZG93bicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnVuV2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy53aXJlQ2xpY2tFdmVudChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLndpcmVFeHBhbmRPbkV2ZW50KGZhbHNlKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzMuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdmb2N1cycsIHRoaXMuZm9jdXNJbik7XG4gICAgICAgICAgICBlajJfYmFzZV8zLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnYmx1cicsIHRoaXMuZm9jdXNPdXQpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ21vdXNlb3ZlcicsIHRoaXMub25Nb3VzZU92ZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5FdmVudEhhbmRsZXIucmVtb3ZlKHRoaXMuZWxlbWVudCwgJ21vdXNlb3V0JywgdGhpcy5vbk1vdXNlTGVhdmUpO1xuICAgICAgICAgICAgdGhpcy5rZXlib2FyZE1vZHVsZS5kZXN0cm95KCk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5wYXJlbnRzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlZCA9IFtdO1xuICAgICAgICAgICAgdmFyIGVsID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgd2hpbGUgKCFlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGVsKSkge1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV82Lm1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVkLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmlzRGVzY2VuZGFudCA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB3aGlsZSAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuc2V0Q2hlY2tlZE5vZGVzID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gICAgICAgICAgICBub2RlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobm9kZXMpKTtcbiAgICAgICAgICAgIHRoaXMudW5jaGVja0FsbCgpO1xuICAgICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQWxsKG5vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLm9uUHJvcGVydHlDaGFuZ2VkID0gZnVuY3Rpb24gKG5ld1Byb3AsIG9sZFByb3ApIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhuZXdQcm9wKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWxsb3dEcmFnQW5kRHJvcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERyYWdBbmREcm9wKHRoaXMuYWxsb3dEcmFnQW5kRHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWxsb3dFZGl0aW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZUVkaXRpbmdFdmVudHModGhpcy5hbGxvd0VkaXRpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FsbG93TXVsdGlTZWxlY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNOb2RlID0gdGhpcy5nZXRFbGVtZW50KHRoaXMuc2VsZWN0ZWROb2Rlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0QWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3ROb2RlKHNOb2RlLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VG91Y2hQb3B1cCh0aGlzLmFsbG93TXVsdGlTZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNdWx0aVNlbGVjdCh0aGlzLmFsbG93TXVsdGlTZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRNdWx0aVNlbGVjdCh0aGlzLmFsbG93TXVsdGlTZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrZWROb2Rlcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q2hlY2tCb3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWROb2RlcyA9IG9sZFByb3AuY2hlY2tlZE5vZGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2hlY2tlZE5vZGVzKG5ld1Byb3AuY2hlY2tlZE5vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjc3NDbGFzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENzc0NsYXNzKG9sZFByb3AuY3NzQ2xhc3MsIG5ld1Byb3AuY3NzQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuYWJsZVJ0bCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVuYWJsZVJ0bCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2V4cGFuZE9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZUV4cGFuZE9uRXZlbnQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFeHBhbmRPblR5cGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZUV4cGFuZE9uRXZlbnQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmllbGRzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEJhc2VPcHRpb24uZmllbGRzID0gdGhpcy5maWVsZHMucHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEJhc2VPcHRpb24uZmllbGRzLnVybCA9IHRoaXMuZmllbGRzLm5hdmlnYXRlVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZVJlbmRlck5vZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZnVsbFJvd1NlbGVjdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZ1bGxSb3codGhpcy5mdWxsUm93U2VsZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRnVsbFJvdyh0aGlzLmZ1bGxSb3dTZWxlY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vZGVUZW1wbGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVUZW1wbGF0ZUZuID0gdGhpcy50ZW1wbGF0ZUNvbXBsaWVyKHRoaXMubm9kZVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVSZW5kZXJOb2RlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdGVkTm9kZXMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHNlbGVjdGVkTm9kZXM6IG5ld1Byb3Auc2VsZWN0ZWROb2RlcyB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9TZWxlY3Rpb25BY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzaG93Q2hlY2tCb3gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZVJlbmRlck5vZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc29ydE9yZGVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVSZW5kZXJOb2RlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgICAgICAgIHRoaXMudW5XaXJlRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLndpcmVFZGl0aW5nRXZlbnRzKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlRm4oKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlSWNvbkZuKCk7XG4gICAgICAgICAgICB0aGlzLnNldENzc0NsYXNzKHRoaXMuY3NzQ2xhc3MsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5zZXREcmFnQW5kRHJvcChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNldEZ1bGxSb3coZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5zZXRUb3VjaFBvcHVwKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TXVsdGlTZWxlY3QoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5hZGROb2RlcyA9IGZ1bmN0aW9uIChub2RlcywgdGFyZ2V0LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobm9kZXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRyb3BMaSA9IHRoaXMuZ2V0RWxlbWVudCh0YXJnZXQpO1xuICAgICAgICAgICAgbm9kZXMgPSB0aGlzLmdldFNvcnRlZERhdGEobm9kZXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRzLmRhdGFTb3VyY2UgaW5zdGFuY2VvZiBlajJfZGF0YV8xLkRhdGFNYW5hZ2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRHaXZlbk5vZGVzKG5vZGVzLCBkcm9wTGksIGluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZGF0YVR5cGUgPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEdpdmVuTm9kZXMobm9kZXMsIGRyb3BMaSwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRyb3BMaSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEdpdmVuTm9kZXMobm9kZXMsIGRyb3BMaSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBpZCA9IG5vZGVzW2ldW3RoaXMuZmllbGRzLnBhcmVudElEXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BMaSA9IHBpZCA/IHRoaXMuZ2V0RWxlbWVudChwaWQudG9TdHJpbmcoKSkgOiBwaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEdpdmVuTm9kZXMoW25vZGVzW2ldXSwgZHJvcExpLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5jaGVja0FsbCA9IGZ1bmN0aW9uIChub2Rlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NoZWNrQm94KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0NoZWNrQm94QWN0aW9uKG5vZGVzLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmNvbGxhcHNlQWxsID0gZnVuY3Rpb24gKG5vZGVzLCBsZXZlbCwgZXhjbHVkZUhpZGRlbk5vZGVzKSB7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobm9kZXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0dpdmVuQWN0aW9uKG5vZGVzLCBDT0xMQVBTSUJMRSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGxldmVsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQnlMZXZlbChlajJfYmFzZV82LnNlbGVjdCgnLicgKyBQQVJFTlRJVEVNLCB0aGlzLmVsZW1lbnQpLCBsZXZlbCwgZXhjbHVkZUhpZGRlbk5vZGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxOb2RlcyhleGNsdWRlSGlkZGVuTm9kZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmRpc2FibGVOb2RlcyA9IGZ1bmN0aW9uIChub2Rlcykge1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobm9kZXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0Rpc2FibGVBY3Rpb24odGhpcy5zZWxlY3RlZE5vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZG9EaXNhYmxlQWN0aW9uKG5vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmVuYWJsZUFsbCA9IGZ1bmN0aW9uIChub2Rlcykge1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobm9kZXMpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpRWxlID0gZWoyX2Jhc2VfNi5zZWxlY3RBbGwoJy4nICsgRElTQUJMRSwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGxpRWxlXzEgPSBsaUVsZTsgX2kgPCBsaUVsZV8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlID0gbGlFbGVfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgIGVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNi5yZW1vdmVDbGFzcyhsaUVsZSwgRElTQUJMRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvRW5hYmxlQWN0aW9uKG5vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmVuc3VyZVZpc2libGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdmFyIGxpRWxlID0gdGhpcy5nZXRFbGVtZW50KG5vZGUpO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobGlFbGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBhcmVudHMgPSB0aGlzLnBhcmVudHMobGlFbGUsICcuJyArIExJU1RJVEVNKTtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kQWxsKHBhcmVudHMpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGxpRWxlLnNjcm9sbEludG9WaWV3KHRydWUpOyB9LCA0NTApO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUuZXhwYW5kQWxsID0gZnVuY3Rpb24gKG5vZGVzLCBsZXZlbCwgZXhjbHVkZUhpZGRlbk5vZGVzKSB7XG4gICAgICAgICAgICBpZiAoIWVqMl9iYXNlXzcuaXNOdWxsT3JVbmRlZmluZWQobm9kZXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0dpdmVuQWN0aW9uKG5vZGVzLCBFWFBBTkRBQkxFLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBhbmRCeUxldmVsKGVqMl9iYXNlXzYuc2VsZWN0KCcuJyArIFBBUkVOVElURU0sIHRoaXMuZWxlbWVudCksIGxldmVsLCBleGNsdWRlSGlkZGVuTm9kZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBhbmRBbGxOb2RlcyhleGNsdWRlSGlkZGVuTm9kZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudChub2RlKTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLmdldE5vZGVEZXRhaWxzID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSB0aGlzLmdldEVsZW1lbnQobm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXROb2RlRGF0YShlbGUpO1xuICAgICAgICB9O1xuICAgICAgICBUcmVlVmlldy5wcm90b3R5cGUubW92ZU5vZGVzID0gZnVuY3Rpb24gKHNvdXJjZU5vZGVzLCB0YXJnZXQsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZHJvcExpID0gdGhpcy5nZXRFbGVtZW50KHRhcmdldCk7XG4gICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChkcm9wTGkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkcmFnTGkgPSB0aGlzLmdldEVsZW1lbnQoc291cmNlTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGRyYWdMaSkgfHwgZHJvcExpLmlzU2FtZU5vZGUoZHJhZ0xpKSB8fCB0aGlzLmlzRGVzY2VuZGFudChkcmFnTGksIGRyb3BMaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcEFzQ2hpbGROb2RlKGRyYWdMaSwgZHJvcExpLCB0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5yZW1vdmVOb2RlcyA9IGZ1bmN0aW9uIChub2Rlcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpRWxlID0gdGhpcy5nZXRFbGVtZW50KG5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChsaUVsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTm9kZShsaUVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFRyZWVWaWV3LnByb3RvdHlwZS5yZXBsYWNlVGV4dCA9IGZ1bmN0aW9uICh0YXJnZXQsIG5ld1RleHQpIHtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKHRhcmdldCkgfHwgZWoyX2Jhc2VfNy5pc051bGxPclVuZGVmaW5lZChuZXdUZXh0KSB8fCAhdGhpcy5hbGxvd0VkaXRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGlFbGUgPSB0aGlzLmdldEVsZW1lbnQodGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV83LmlzTnVsbE9yVW5kZWZpbmVkKGxpRWxlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0eHRFbGUgPSBlajJfYmFzZV82LnNlbGVjdCgnLicgKyBMSVNUVEVYVCwgbGlFbGUpO1xuICAgICAgICAgICAgdHh0RWxlLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlID0gbmV3VGV4dDtcbiAgICAgICAgfTtcbiAgICAgICAgVHJlZVZpZXcucHJvdG90eXBlLnVuY2hlY2tBbGwgPSBmdW5jdGlvbiAobm9kZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDaGVja0JveCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZG9DaGVja0JveEFjdGlvbihub2RlcywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVHJlZVZpZXc7XG4gICAgfShlajJfYmFzZV8xLkNvbXBvbmVudCkpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJhbGxvd0RyYWdBbmREcm9wXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcImFsbG93RWRpdGluZ1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJhbGxvd011bHRpU2VsZWN0aW9uXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuQ29tcGxleCh7fSwgTm9kZUFuaW1hdGlvblNldHRpbmdzKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJhbmltYXRpb25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcImNoZWNrZWROb2Rlc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KCcnKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJjc3NDbGFzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJlbmFibGVSdGxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSgnYXV0bycpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcImV4cGFuZE9uXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuQ29tcGxleCh7fSwgRmllbGRzU2V0dGluZ3MpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcImZpZWxkc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KHRydWUpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcImZ1bGxSb3dTZWxlY3RcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMi5Qcm9wZXJ0eSgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcIm5vZGVUZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwic2VsZWN0ZWROb2Rlc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLlByb3BlcnR5KCdOb25lJylcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwic29ydE9yZGVyXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcInNob3dDaGVja0JveFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwiY3JlYXRlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwiZGF0YUJvdW5kXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJkcmF3Tm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwiZGVzdHJveWVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJrZXlQcmVzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZUNoZWNrZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcIm5vZGVDaGVja2luZ1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZUNsaWNrZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcIm5vZGVDb2xsYXBzZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcIm5vZGVDb2xsYXBzaW5nXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJub2RlRHJhZ2dpbmdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcIm5vZGVEcmFnU3RhcnRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcIm5vZGVEcmFnU3RvcFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZURyb3BwZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcIm5vZGVFZGl0ZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcIm5vZGVFZGl0aW5nXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzMuRXZlbnQoKVxuICAgIF0sIFRyZWVWaWV3LnByb3RvdHlwZSwgXCJub2RlRXhwYW5kZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcIm5vZGVFeHBhbmRpbmdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMy5FdmVudCgpXG4gICAgXSwgVHJlZVZpZXcucHJvdG90eXBlLCBcIm5vZGVTZWxlY3RlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8zLkV2ZW50KClcbiAgICBdLCBUcmVlVmlldy5wcm90b3R5cGUsIFwibm9kZVNlbGVjdGluZ1wiLCB2b2lkIDApO1xuICAgIFRyZWVWaWV3ID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuTm90aWZ5UHJvcGVydHlDaGFuZ2VzXG4gICAgXSwgVHJlZVZpZXcpO1xuICAgIGV4cG9ydHMuVHJlZVZpZXcgPSBUcmVlVmlldztcbiAgICBleHBvcnRzLnRyZWVWaWV3SGVscGVyID0gZWoyX2Jhc2VfMS5DcmVhdGVCdWlsZGVyKFRyZWVWaWV3KTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdHJlZXZpZXcvdHJlZXZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHN5bmNmdXNpb24vZWoyLWRhdGFcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==