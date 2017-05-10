/**
 * Horizontal scroll spec document
 */
import { ScrollEventArgs, TouchEventArgs, Browser } from '@syncfusion/ej2-base/index';
import { setStyleAttribute } from '@syncfusion/ej2-base/dom';
import { HScroll } from '../src/common/h-scroll';
import { isNullOrUndefined} from '@syncfusion/ej2-base/util'


let firefoxUa: string = 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0';

describe('Horizontal scroll bar Base items', () => {
    describe(' Horizontal scroll Base Testing', () => {
        let scroll: any;
        beforeEach((): void => {
            let ele: HTMLElement = document.createElement('div');
            ele.id = 'Sample';
            ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div>	</div>";
            setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
            document.body.appendChild(ele);

        });
        afterEach((): void => {
            if (scroll)
                scroll.destroy();
            document.body.innerHTML = '';
        });
        it('Horizontal scroll test', () => {
            let ele: HTMLElement = document.getElementById('inneritems');
            scroll = new HScroll({}, ele);
            expect(ele.classList.contains("e-hscroll")).toEqual(true);
        });
        it('Horizontal Touch test', () => {
            let ele: HTMLElement = document.getElementById('inneritems');
            scroll = new HScroll({}, ele);
            expect(ele.classList.contains("e-touch")).toEqual(true);
        });
        it('Horizontal Touch test', () => {
            let ele: HTMLElement = document.getElementById('inneritems');
            scroll = new HScroll({}, ele);
            expect((<HTMLElement>ele.querySelector('.e-hscroll-content')).childElementCount == 3).toEqual(true);
        });
        it('Horizontal Touch test', () => {
            let ele: HTMLElement = document.getElementById('inneritems');
            scroll = new HScroll({}, ele);
            expect((<HTMLElement>ele.querySelector('.e-hscroll-content')).childElementCount == 3).toEqual(true);
        });
    });
    describe('HSCrollbar Persistance Testing', () => {
        let scroll: HScroll;
        beforeEach((): void => {
            let ele: HTMLElement = document.createElement('div');
            ele.id = 'Sample';
            ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div>	</div>";
            setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (scroll)
                scroll.destroy();
            document.body.innerHTML = '';
        });
        it('HScrollBase Persistance scrollLeft Testing', () => {
            window.localStorage.setItem('hScrollinneritems', JSON.stringify({ scrollStep: 50 }));
            let ele: HTMLElement = document.getElementById('inneritems');
            scroll = new HScroll({
                enablePersistence: true,
            }, ele);
            expect(scroll.scrollStep).toEqual(50);
        });
    });
    describe(' Property Change Testing', () => {
        let scroll: HScroll;
        beforeEach((): void => {
            let ele: HTMLElement = document.createElement('div');
            ele.id = 'Sample';
            ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div></div>";
            setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (scroll)
                scroll.destroy();
            document.body.innerHTML = '';
        });
        it('HScrollBase Persistance scrollLeft Testing', () => {
            let ele: HTMLElement = document.getElementById('inneritems');
            scroll = new HScroll({
            }, ele);
            scroll.scrollStep = 50;
            scroll.dataBind();
            expect(scroll.scrollStep).toEqual(50);
        });
    });
    describe('Unique id testing', () => {
        let scroll: HScroll;
        beforeEach((): void => {
            let ele: HTMLElement = document.createElement('div');
            ele.id = 'Sample';
            ele.innerHTML = "<div class= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div></div>";
            setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            document.body.innerHTML = '';
        });
        it('Unique id testing', () => {
            let ele: HTMLElement = document.getElementsByClassName('inneritems')[0] as HTMLElement;
            scroll = new HScroll({
            }, ele);
            let uniqueId: string = ele.getAttribute('id');
            expect(uniqueId.length > 0).toEqual(true);
            scroll.scrollStep = 50;
            scroll.dataBind();
            expect(scroll.scrollStep).toEqual(50);
            scroll.destroy();
            uniqueId = ele.getAttribute('id');
            expect(isNullOrUndefined(uniqueId)).toEqual(true);

        });
    });
    describe(' Property Change Testing', () => {
        let scroll: any;
        beforeEach((): void => {
            let ele: HTMLElement = document.createElement('div');
            ele.style.overflow = 'hidden';
            ele.id = 'Sample';
            ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div></div>	";
            setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (scroll)
                scroll.destroy();
            document.body.innerHTML = '';
        });
        it('HScrollBase Persistance scrollLeft Testing', () => {
            let ele: HTMLElement = document.getElementById('inneritems');
            scroll = new HScroll({});
            scroll.appendTo('#Sample');
            let scrollEle: HTMLElement = scroll.element.children[1];
            let tchEvent: TouchEventArgs;
            let navEle: HTMLElement = scroll.element.firstChild.lastChild;
            let scrollEvent: Event = document.createEvent('MouseEvents');
            scrollEvent.initEvent('scroll', false, false);
            let event: ScrollEventArgs = {
                scrollDirection: 'Left',
                name: 'scroll',
                distanceX: 30,
                distanceY: 0, originalEvent: tchEvent, startEvents: tchEvent, startX: 30, startY: 0, velocity: 4
            };
            expect(scrollEle.scrollLeft).toEqual(0);
            scroll.touchScrollHandler(event);
            expect(scrollEle.scrollLeft).toEqual(30);
            event.scrollDirection = 'Right'; event.name = 'scroll'; event.distanceX = 30;
            scroll.touchScrollHandler(event);
            expect(scrollEle.scrollLeft).toEqual(0);
            event.scrollDirection = 'Left'; event.name = 'scroll'; event.distanceX = 40;
            scroll.touchScrollHandler(event);
            expect(scrollEle.scrollLeft).toEqual(40);
            event.scrollDirection = 'Left'; event.name = 'scroll'; event.distanceX = 10;
            scroll.touchScrollHandler(event);
            scrollEle.dispatchEvent(scrollEvent);
            expect(scrollEle.scrollLeft).toEqual(50);
            event.scrollDirection = 'Left'; event.name = 'scroll'; event.distanceX = 10;
            scroll.touchScrollHandler(event);
            expect(scrollEle.scrollLeft).toEqual(60);
            event.scrollDirection = 'Left'; event.name = 'scroll'; event.distanceX = 10;
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

    describe(' RTL Testing', () => {
        let scroll: any;
        beforeEach((): void => {
            let ele: HTMLElement = document.createElement('div');
            ele.style.overflow = 'hidden';
            ele.id = 'Sample';
            ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div></div>";
            setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (scroll) {
                scroll.destroy();
            }
            document.body.innerHTML = '';
        });
        it('RTL Testing', () => {
            let ele: HTMLElement = document.getElementById('Sample');
            scroll = new HScroll({}); scroll.appendTo('#inneritems');
            scroll.element.classList.add('e-rtl');
            let navEle: HTMLElement = <HTMLElement>ele.firstChild.firstChild.lastChild;
            let scrollEle: HTMLElement = scroll.element.children[1];
            let scrollEvent: Event = document.createEvent('MouseEvents');
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
    describe('RTL Testing', () => {
            let scroll: any;
            beforeEach((): void => {
                let ele: HTMLElement = document.createElement('div');
                ele.style.overflow = 'hidden';
                ele.id = 'Sample';
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div></div>";
                setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                document.body.innerHTML = '';
            });
            it('EnableRTL Property Testing', () => {
                let ele: HTMLElement = document.getElementById('inneritems');
                scroll = new HScroll({ enableRtl: true }, ele);
                expect(scroll.element.classList.contains('e-rtl')).toEqual(true);
                let navEle: HTMLElement = scroll.element.firstChild.lastChild;
                navEle.click();
            });
        });
        describe('RTL Testing in onPropertyChange', () => {
            let scroll: any;
            beforeEach((): void => {
                document.body.innerHTML = '';
                let ele: HTMLElement = document.createElement('div');
                ele.style.overflow = 'hidden';
                ele.id = 'Sample';
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div></div>";
                setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                document.body.innerHTML = '';
            });
            it('EnableRTL Property Testing using dataBind', () => {
                let ele: HTMLElement = document.getElementById('inneritems');
                scroll = new HScroll({},ele);
                scroll.enableRtl = true;
                scroll.dataBind();
                expect(scroll.element.classList.contains('e-rtl')).toEqual(true);
            });
        });
        describe('RTL Testing in onPropertyChange', () => {
            let scroll: any;
            beforeEach((): void => {
                document.body.innerHTML = '';
                let ele: HTMLElement = document.createElement('div');
                ele.style.overflow = 'hidden';
                ele.id = 'Sample';
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div></div>";
                setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                document.body.innerHTML = '';
            });
            it('EnableRTL Property Testing using dataBind', () => {
                let ele: HTMLElement = document.getElementById('inneritems');
                scroll = new HScroll({ enableRtl : true },ele);
                expect(scroll.element.classList.contains('e-rtl')).toEqual(true);
                scroll.enableRtl = false;
                scroll.dataBind();
                expect(scroll.element.classList.contains('e-rtl')).toEqual(false);
            });
        });
        describe('Tab Hold Testing', () => {
            let scroll: any;
            beforeEach((): void => {
                document.body.innerHTML = '';
                let ele: HTMLElement = document.createElement('div');
                ele.style.overflow = 'hidden';
                ele.id = 'Sample';
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div></div>";
                setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
            });
            afterEach((): void => {
               document.body.innerHTML = '';
            });
            it('Tab Hold Testing with contious moving', () => {
               let ele: HTMLElement = document.getElementById('inneritems');
                scroll = new HScroll({}, ele);
                let scrollEle: HTMLElement = scroll.element.children[1];
                let navEle: HTMLElement = <HTMLElement>ele.firstChild;
                let navIcon: HTMLElement = navEle.firstChild as HTMLElement;
                expect(navEle.classList.contains('e-touch')).toEqual(true);
                let e: any = {}; e.originalEvent = {};
                e.originalEvent.target = navEle.firstChild;
                expect(navIcon.classList.contains('e-nav-right-arrow')).toEqual(true);
                scroll.tabHoldHandler(e);
                let scrollEvent: Event = document.createEvent('MouseEvents');
                let scrollEventContext: Event = document.createEvent('MouseEvents');
                scrollEvent.initEvent('mouseup', false, false);
                scrollEventContext.initEvent('contextmenu', false, false);
                navEle.dispatchEvent(scrollEventContext);
                navEle.dispatchEvent(scrollEvent);
                e.originalEvent.target = navEle;
                scroll.tabHoldHandler(e);
            });
        });
        describe('Cross Browser Testing for Scrolling in RTL mode', () => {
            let scroll: any;
            beforeEach((): void => {
                document.body.innerHTML = '';
                let ele: HTMLElement = document.createElement('div');
                ele.style.overflow = 'hidden';
                ele.id = 'Sample';
                let css: string = ".e-rtl { direction: rtl; } ";
                let style: HTMLStyleElement = document.createElement('style'); style.type = 'text/css';
                let styleNode: Node = style.appendChild(document.createTextNode(css));
                document.getElementsByTagName('head')[0].appendChild(style);
                ele.innerHTML = "<div id= 'inneritems' style='display: inline-block;'><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div><div id='item' style='display: inline-block;'><button> Stylllllle</button></div></div>";
                setStyleAttribute(ele, { width: '50px', 'white-space': 'nowrap' });
                document.body.appendChild(ele);
                Browser.userAgent = firefoxUa;
            });
            afterEach((): void => {
                document.body.innerHTML = '';
            });
            it('EnableRTL Property Testing using dataBind', () => {
                let ele: HTMLElement = document.getElementById('inneritems');
                scroll = new HScroll({ enableRtl : true, scrollStep: 50 }, ele);
                expect(scroll.element.classList.contains('e-rtl')).toEqual(true);
                let scrollEle: HTMLElement = scroll.element.children[1];
                let navEle: HTMLElement = <HTMLElement>ele.firstChild;
                let navIcon: HTMLElement = navEle.firstChild as HTMLElement;
                let scrollEvent: Event = document.createEvent('MouseEvents');
                scrollEvent.initEvent('scroll', false, false);
                navEle.click();
                navEle.click();
                navEle.click();
                scrollEle.dispatchEvent(scrollEvent);
                //expect(navIcon.classList.contains('e-nav-right-arrow')).toEqual(true);
            });
        });
    });