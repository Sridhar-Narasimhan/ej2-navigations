define(["require", "exports", "@syncfusion/ej2-base/index", "@syncfusion/ej2-base/dom", "../src/common/h-scroll", "@syncfusion/ej2-base/util"], function (require, exports, index_1, dom_1, h_scroll_1, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var firefoxUa = 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0';
    var ieUa = 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; .NET4.0E; .NET4.0C; ' +
        'Tablet PC 2.0; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; InfoPath.3; rv:11.0) like Gecko';
    describe('Horizontal scroll bar Base items', function () {
        describe(' Horizontal scroll Base Testing', function () {
            var scroll;
            beforeEach(function () {
                var ele = document.createElement('div');
                ele.id = 'Sample';
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div>	</div>";
                dom_1.setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                if (scroll)
                    scroll.destroy();
                document.body.innerHTML = '';
            });
            it('Horizontal scroll test', function () {
                var ele = document.getElementById('inneritems');
                scroll = new h_scroll_1.HScroll({}, ele);
                expect(ele.classList.contains("e-hscroll")).toEqual(true);
            });
            it('Horizontal Touch test', function () {
                var ele = document.getElementById('inneritems');
                scroll = new h_scroll_1.HScroll({}, ele);
                expect(ele.classList.contains("e-touch")).toEqual(true);
            });
            it('Horizontal Touch test', function () {
                var ele = document.getElementById('inneritems');
                scroll = new h_scroll_1.HScroll({}, ele);
                expect(ele.querySelector('.e-hscroll-content').childElementCount == 3).toEqual(true);
            });
            it('Horizontal Touch test', function () {
                var ele = document.getElementById('inneritems');
                scroll = new h_scroll_1.HScroll({}, ele);
                expect(ele.querySelector('.e-hscroll-content').childElementCount == 3).toEqual(true);
            });
        });
        describe('HSCrollbar Persistance Testing', function () {
            var scroll;
            beforeEach(function () {
                var ele = document.createElement('div');
                ele.id = 'Sample';
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button>Btn_style</button></div><div id='item' style='display: inline-block;'><button>Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div>	</div>";
                dom_1.setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                if (scroll)
                    scroll.destroy();
                document.body.innerHTML = '';
            });
            it('HScrollBase Persistance scrollLeft Testing', function () {
                window.localStorage.setItem('hScrollinneritems', JSON.stringify({ scrollStep: 50 }));
                var ele = document.getElementById('inneritems');
                scroll = new h_scroll_1.HScroll({
                    enablePersistence: true,
                }, ele);
                expect(scroll.scrollStep).toEqual(50);
            });
        });
        describe(' Property Change Testing', function () {
            var scroll;
            beforeEach(function () {
                var ele = document.createElement('div');
                ele.id = 'Sample';
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div></div>";
                dom_1.setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                if (scroll)
                    scroll.destroy();
                document.body.innerHTML = '';
            });
            it('HScrollBase Persistance scrollLeft Testing', function () {
                var ele = document.getElementById('inneritems');
                scroll = new h_scroll_1.HScroll({}, ele);
                scroll.scrollStep = 50;
                scroll.dataBind();
                expect(scroll.scrollStep).toEqual(50);
            });
        });
        describe('Unique id testing', function () {
            var scroll;
            beforeEach(function () {
                var ele = document.createElement('div');
                ele.id = 'Sample';
                ele.innerHTML = "<div class= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div></div>";
                dom_1.setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                document.body.innerHTML = '';
            });
            it('Unique id testing', function () {
                var ele = document.getElementsByClassName('inneritems')[0];
                scroll = new h_scroll_1.HScroll({}, ele);
                var uniqueId = ele.getAttribute('id');
                expect(uniqueId.length > 0).toEqual(true);
                scroll.scrollStep = 50;
                scroll.dataBind();
                expect(scroll.scrollStep).toEqual(50);
                scroll.destroy();
                uniqueId = ele.getAttribute('id');
                expect(util_1.isNullOrUndefined(uniqueId)).toEqual(true);
            });
        });
        describe(' Property Change Testing', function () {
            var scroll;
            beforeEach(function () {
                var ele = document.createElement('div');
                ele.style.overflow = 'hidden';
                ele.id = 'Sample';
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div></div>	";
                dom_1.setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                if (scroll)
                    scroll.destroy();
                document.body.innerHTML = '';
            });
            it('HScrollBase Persistance scrollLeft Testing', function () {
                var ele = document.getElementById('inneritems');
                scroll = new h_scroll_1.HScroll({});
                scroll.appendTo('#Sample');
                var scrollEle = scroll.element.children[1];
                var tchEvent;
                var navEle = scroll.element.firstChild.lastChild;
                var scrollEvent = document.createEvent('MouseEvents');
                scrollEvent.initEvent('scroll', false, false);
                var event = {
                    scrollDirection: 'Left',
                    name: 'scroll',
                    distanceX: 30,
                    distanceY: 0, originalEvent: tchEvent, startEvents: tchEvent, startX: 30, startY: 0, velocity: 4
                };
                expect(scrollEle.scrollLeft).toEqual(0);
                scroll.touchScrollHandler(event);
                expect(scrollEle.scrollLeft).toEqual(30);
                event.scrollDirection = 'Right';
                event.name = 'scroll';
                event.distanceX = 30;
                scroll.touchScrollHandler(event);
                event.scrollDirection = 'Top';
                event.name = 'scroll';
                event.distanceX = 30;
                scroll.touchScrollHandler(event);
                expect(scrollEle.scrollLeft).toEqual(0);
                event.scrollDirection = 'Left';
                event.name = 'scroll';
                event.distanceX = 40;
                scroll.touchScrollHandler(event);
                expect(scrollEle.scrollLeft).toEqual(40);
                event.scrollDirection = 'Left';
                event.name = 'scroll';
                event.distanceX = 10;
                scroll.touchScrollHandler(event);
                scrollEle.dispatchEvent(scrollEvent);
                expect(scrollEle.scrollLeft).toEqual(50);
                event.scrollDirection = 'Left';
                event.name = 'scroll';
                event.distanceX = 10;
                scroll.touchScrollHandler(event);
                expect(scrollEle.scrollLeft).toEqual(60);
                event.scrollDirection = 'Left';
                event.name = 'scroll';
                event.distanceX = 10;
                scroll.touchScrollHandler(event);
                expect(scrollEle.scrollLeft).toEqual(70);
                scrollEle.scrollLeft = 500;
                scrollEle.dispatchEvent(scrollEvent);
                expect(navEle.classList.contains('e-nav-left-arrow')).toEqual(true);
                scrollEle.scrollLeft = 0;
                scrollEvent.initEvent('scroll', false, false);
                scrollEle.dispatchEvent(scrollEvent);
                expect(navEle.classList.contains('e-nav-right-arrow')).toEqual(true);
                navEle.parentElement.click();
                scrollEle.dispatchEvent(scrollEvent);
                expect(scrollEle.scrollLeft).toEqual(40);
                scrollEle.scrollLeft = 160;
                navEle.click();
                scrollEle.dispatchEvent(scrollEvent);
                expect(navEle.classList.contains('e-nav-left-arrow')).toEqual(true);
                navEle.click();
                navEle.remove();
                scrollEle.dispatchEvent(scrollEvent);
                event.name = 'swipe';
                scroll.touchScrollHandler(event);
            });
        });
        describe(' RTL Testing', function () {
            var scroll;
            beforeEach(function () {
                var ele = document.createElement('div');
                ele.style.overflow = 'hidden';
                ele.id = 'Sample';
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div></div>";
                dom_1.setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                if (scroll) {
                    scroll.destroy();
                }
                document.body.innerHTML = '';
            });
            it('RTL Testing', function () {
                var ele = document.getElementById('Sample');
                scroll = new h_scroll_1.HScroll({});
                scroll.appendTo('#inneritems');
                scroll.element.classList.add('e-rtl');
                var navEle = ele.firstChild.firstChild.lastChild;
                var scrollEle = scroll.element.children[1];
                var scrollEvent = document.createEvent('MouseEvents');
                scrollEvent.initEvent('scroll', false, false);
                navEle.click();
                scrollEle.dispatchEvent(scrollEvent);
                navEle.click();
                scrollEle.dispatchEvent(scrollEvent);
                navEle.click();
                scrollEle.dispatchEvent(scrollEvent);
                navEle.click();
                scrollEle.dispatchEvent(scrollEvent);
                navEle.click();
                scrollEle.dispatchEvent(scrollEvent);
                expect(navEle.classList.contains('e-nav-right-arrow')).toEqual(true);
                navEle.click();
                scrollEle.dispatchEvent(scrollEvent);
                navEle.click();
            });
        });
        describe('RTL Testing', function () {
            var scroll;
            beforeEach(function () {
                var ele = document.createElement('div');
                ele.style.overflow = 'hidden';
                ele.id = 'Sample';
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div></div>";
                dom_1.setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                document.body.innerHTML = '';
            });
            it('EnableRTL Property Testing', function () {
                var ele = document.getElementById('inneritems');
                scroll = new h_scroll_1.HScroll({ enableRtl: true }, ele);
                expect(scroll.element.classList.contains('e-rtl')).toEqual(true);
                var navEle = scroll.element.firstChild.lastChild;
                navEle.click();
            });
        });
        describe('RTL Testing in onPropertyChange', function () {
            var scroll;
            beforeEach(function () {
                document.body.innerHTML = '';
                var ele = document.createElement('div');
                ele.style.overflow = 'hidden';
                ele.id = 'Sample';
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div></div>";
                dom_1.setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                document.body.innerHTML = '';
            });
            it('EnableRTL Property Testing using dataBind', function () {
                var ele = document.getElementById('inneritems');
                scroll = new h_scroll_1.HScroll({}, ele);
                scroll.enableRtl = true;
                scroll.dataBind();
                expect(scroll.element.classList.contains('e-rtl')).toEqual(true);
            });
        });
        describe('RTL Testing in onPropertyChange', function () {
            var scroll;
            beforeEach(function () {
                document.body.innerHTML = '';
                var ele = document.createElement('div');
                ele.style.overflow = 'hidden';
                ele.id = 'Sample';
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div></div>";
                dom_1.setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                document.body.innerHTML = '';
            });
            it('EnableRTL Property Testing using dataBind', function () {
                var ele = document.getElementById('inneritems');
                scroll = new h_scroll_1.HScroll({ enableRtl: true }, ele);
                expect(scroll.element.classList.contains('e-rtl')).toEqual(true);
                scroll.enableRtl = false;
                scroll.dataBind();
                expect(scroll.element.classList.contains('e-rtl')).toEqual(false);
            });
        });
        describe('Tab Hold Testing', function () {
            var scroll;
            beforeEach(function () {
                document.body.innerHTML = '';
                var ele = document.createElement('div');
                ele.style.overflow = 'hidden';
                ele.id = 'Sample';
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div></div>";
                dom_1.setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                document.body.innerHTML = '';
            });
            it('Tab Hold Testing with contious moving', function () {
                var ele = document.getElementById('inneritems');
                scroll = new h_scroll_1.HScroll({}, ele);
                var scrollEle = scroll.element.children[1];
                var navEle = ele.firstChild;
                var navIcon = navEle.firstChild;
                expect(navEle.classList.contains('e-touch')).toEqual(true);
                var e = {};
                e.originalEvent = {};
                e.originalEvent.target = navEle.firstChild;
                expect(navIcon.classList.contains('e-nav-right-arrow')).toEqual(true);
                scroll.tabHoldHandler(e);
                var scrollEvent = document.createEvent('MouseEvents');
                var scrollEventContext = document.createEvent('MouseEvents');
                scrollEvent.initEvent('mouseup', false, false);
                scrollEventContext.initEvent('contextmenu', false, false);
                navEle.dispatchEvent(scrollEventContext);
                navEle.dispatchEvent(scrollEvent);
                e.originalEvent.target = navEle;
                scroll.tabHoldHandler(e);
            });
        });
        describe('Cross Browser Mozilla Testing for Scrolling in RTL mode', function () {
            var scroll;
            beforeEach(function () {
                document.body.innerHTML = '';
                var ele = document.createElement('div');
                ele.style.overflow = 'hidden';
                ele.id = 'Sample';
                var css = ".e-rtl { direction: rtl; } ";
                var style = document.createElement('style');
                style.type = 'text/css';
                var styleNode = style.appendChild(document.createTextNode(css));
                document.getElementsByTagName('head')[0].appendChild(style);
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div></div>";
                dom_1.setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
                index_1.Browser.userAgent = firefoxUa;
            });
            afterEach(function () {
                document.body.innerHTML = '';
            });
            it('EnableRTL Property Testing using dataBind', function () {
                index_1.Browser.userAgent = firefoxUa;
                var ele = document.getElementById('inneritems');
                scroll = new h_scroll_1.HScroll({ enableRtl: true, scrollStep: 50 }, ele);
                expect(scroll.element.classList.contains('e-rtl')).toEqual(true);
                var scrollEle = scroll.element.children[1];
                var navEle = ele.firstChild;
                var navIcon = navEle.firstChild;
                var scrollEvent = document.createEvent('MouseEvents');
                scrollEvent.initEvent('scroll', false, false);
                navEle.click();
                navEle.click();
                navEle.click();
                scrollEle.dispatchEvent(scrollEvent);
            });
        });
        describe('Cross Browser IE Testing for Scrolling in RTL mode', function () {
            var scroll;
            beforeEach(function () {
                document.body.innerHTML = '';
                var ele = document.createElement('div');
                ele.style.overflow = 'hidden';
                ele.id = 'Sample';
                var css = ".e-rtl { direction: rtl; } ";
                var style = document.createElement('style');
                style.type = 'text/css';
                var styleNode = style.appendChild(document.createTextNode(css));
                document.getElementsByTagName('head')[0].appendChild(style);
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div><div id='item' style='display: inline-block;'><button> Btn_style</button></div></div>";
                dom_1.setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach(function () {
                document.body.innerHTML = '';
            });
            it('Cross browser testing with IE', function () {
                var ele = document.getElementById('inneritems');
                index_1.Browser.userAgent = ieUa;
                scroll = new h_scroll_1.HScroll({ enableRtl: true, scrollStep: 50 }, ele);
                expect(scroll.element.classList.contains('e-rtl')).toEqual(true);
                var scrollEle = scroll.element.children[1];
                var navEle = ele.firstChild;
                expect(navEle.classList.contains('e-ie-align')).toEqual(true);
            });
        });
    });
});
