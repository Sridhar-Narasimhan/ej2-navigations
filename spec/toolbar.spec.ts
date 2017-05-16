/**
 * toolbar spec document
 */
import { ScrollEventArgs, TouchEventArgs, Browser } from '@syncfusion/ej2-base/index';
import { createElement, isVisible, setStyleAttribute } from '@syncfusion/ej2-base/dom';
import { Toolbar } from '../src/toolbar/toolbar';
import { HScroll } from '../src/common/h-scroll';
import { Button } from '@syncfusion/ej2-buttons/src/button/button';
import '../node_modules/es6-promise/dist/es6-promise';

let ieUa: string = 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; .NET4.0E; .NET4.0C; ' +
    'Tablet PC 2.0; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; InfoPath.3; rv:11.0) like Gecko';

describe('Toolbar Control', () => {
    let css: string = ".e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} ";
    let style: HTMLStyleElement = document.createElement('style'); style.type = 'text/css';
    let styleNode: Node = style.appendChild(document.createTextNode(css));
    document.getElementsByTagName('head')[0].appendChild(style);

    describe('Dom toolbar element', () => {
        let toolbar: any;
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });

        it('Control class testing', () => {
            toolbar = new Toolbar();
            toolbar.appendTo('#ej2Toolbar');
            toolbar.checkOverflow();
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            expect(element.classList.contains('e-toolbar')).toEqual(true);
            expect(element.style.width).toEqual('auto');
        });
    });


    describe('Main Property testing', () => {
        let toolbar: Toolbar;
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });

        it('default Value testing', () => {
            toolbar = new Toolbar({
                items: [
                    {
                        type: 'Button',
                        text: 'Bold',
                    }]
            });
            toolbar.appendTo('#ej2Toolbar');
            expect(toolbar.items[0].id).toEqual('');
            expect(toolbar.items[0].cssClass).toEqual('');
            expect(toolbar.items[0].prefixIcon).toEqual('');
            expect(toolbar.items[0].suffixIcon).toEqual('');
            expect(toolbar.items[0].template).toEqual('');
            expect(toolbar.items[0].tooltipText).toEqual('');
        });

        it('Item button property testing', () => {
            toolbar = new Toolbar({
                items: [
                    {
                        type: 'Button',
                        text: 'Bold',
                    }]
            });
            toolbar.appendTo('#ej2Toolbar');
            let element: Element = document.getElementsByClassName('e-toolbar')[0];
            expect(element.children.length).toEqual(1);
            expect(element.getElementsByClassName('e-toolbar-items').length).toEqual(1);
            expect(element.getElementsByClassName('e-toolbar-item').length).toEqual(1);
            if (toolbar.items[0].type.toString() === 'Button') {
                expect(element.getElementsByClassName('e-toolbar-item')[0].getElementsByTagName('button').length).toEqual(1);
            }
        });
      
        it('Width property as number testing', () => {
            toolbar = new Toolbar({
                width: 500
            });
            toolbar.appendTo('#ej2Toolbar');
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            expect(element.style.width).toEqual('500px');
        });

        it('Width property as string testing', () => {
            toolbar = new Toolbar({
                width: '500px', items: [{ type: 'Separator', cssClass: 'e-contentItem e-css-class' }]
            });
            toolbar.appendTo('#ej2Toolbar');
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            expect(element.querySelector('.e-toolbar-items .e-toolbar-item').classList.contains('e-contentItem')).toEqual(true);
            expect(element.querySelector('.e-toolbar-items .e-toolbar-item').classList.contains('e-css-class')).toEqual(true);
            expect(element.style.width).toEqual('500px');
        });

        it('Height property as number testing', () => {
            toolbar = new Toolbar({
                height: 500
            });
            toolbar.appendTo('#ej2Toolbar');
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            expect(element.style.height).toEqual('500px')
        });

        it('Height property as string testing', () => {
            toolbar = new Toolbar({
                height: '500px', items: [{ type: 'Separator', cssClass: 'e-contentItem' }]
            });
            toolbar.appendTo('#ej2Toolbar');
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            expect(element.querySelector('.e-toolbar-items .e-toolbar-item').classList.contains('e-contentItem')).toEqual(true);
            expect(element.style.height).toEqual('500px')
        });

        it('Height property sets throught onPropertyChange', () => {
            toolbar = new Toolbar({
                items: [{ type: 'Separator' }]
            });
            toolbar.appendTo('#ej2Toolbar');
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            expect(element.style.height).toEqual('auto');
            toolbar.height = '300px';
            toolbar.dataBind();
            expect(element.style.height).toEqual('300px');
            toolbar.height = 'auto';
            toolbar.dataBind();
            expect(element.style.height).toEqual('auto');
        });
        it('Item separator property testing', () => {
            toolbar = new Toolbar({
                items: [
                    {
                        type: 'Separator',
                    }]
            });
            toolbar.appendTo('#ej2Toolbar');
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            if (toolbar.items[0].type.toString() === 'Separator') {
                expect(element.getElementsByClassName('e-separator').length).toEqual(1);
            }
        });
    });

    describe('Persistance testing', () => {
        let toolbar: Toolbar;
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Overflow style as scroll testing', () => {
            window.localStorage.setItem('toolbarej2Toolbar', JSON.stringify({ overflowMode: 'Popup' }));
            toolbar = new Toolbar({
                width: 20,
                enablePersistence: true,
                items: [{
                    type: 'Button', text: 'Bold',
                }],
            });
            toolbar.appendTo('#ej2Toolbar');
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            expect(JSON.parse(window.localStorage.toolbarej2Toolbar).hasOwnProperty()).toEqual(false);
        });
    });
    describe('Event and destroy function testing', () => {
        let toolbar: Toolbar;
        let i: number = 0;
        function clickFn(): void {
            i++;
        }
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
        });

        it('BeforeCreate,create and click event testing', () => {
            toolbar = new Toolbar({
                width: '500px',
                created: clickFn,
                destroyed: clickFn,
                clicked: clickFn,
                beforeCreate: clickFn,
                items: [{ type: 'Separator' }]
            });
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar.appendTo('#ej2Toolbar');
            expect(i).toEqual(2);
            element.click();
            expect(i).toEqual(3);
        });

        it('Destroy event and function testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            expect(i).toEqual(4);
            expect(element.classList.contains('e-cornor')).toEqual(false);
            expect(element.classList.contains('e-toolbar')).toEqual(false);
            expect(element.children.length).toEqual(0);
            element.click();
            expect(i).toEqual(4);
        });
    });

    describe('onPropertyChanged function testing', () => {
        let toolbar: Toolbar;
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Width property as number testing', () => {
            toolbar = new Toolbar({ items: [{ type: 'Separator' }] });
            toolbar.appendTo('#ej2Toolbar');
            toolbar.width = 500;
            toolbar.dataBind();
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            expect(element.style.width).toEqual('500px')
        });

        it('Width property as string testing', () => {
            toolbar = new Toolbar({ items: [{ type: 'Separator' }] });
            toolbar.appendTo('#ej2Toolbar');
            toolbar.width = '500px';
            toolbar.dataBind();
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            expect(element.style.width).toEqual('500px')
        });

        it('Width property as empty string testing', () => {
            toolbar = new Toolbar({ items: [{ type: 'Separator' }] });
            toolbar.appendTo('#ej2Toolbar');
            toolbar.width = '';
            toolbar.dataBind();
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            expect(element.style.width).toEqual('auto')
        });

        it('Item separator property testing', () => {
            toolbar = new Toolbar();
            toolbar.appendTo('#ej2Toolbar');
            toolbar.items = [{ type: 'Separator', }]
            toolbar.dataBind();
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            if (toolbar.items[0].type.toString() === 'Separator') {
                expect(element.getElementsByClassName('e-separator').length).toEqual(1);
            }
        });

        it('Item button property testing', () => {
            toolbar = new Toolbar({});
            toolbar.appendTo('#ej2Toolbar');
            toolbar.items = [{ type: 'Button', text: 'Bold' }];
            toolbar.dataBind();
            let element: Element = document.getElementsByClassName('e-toolbar')[0];
            expect(element.children.length).toEqual(1);
            expect(element.getElementsByClassName('e-toolbar-items').length).toEqual(1);
            expect(element.getElementsByClassName('e-toolbar-item').length).toEqual(1);
            if (toolbar.items[0].type.toString() === 'Button') {
                expect(element.getElementsByClassName('e-toolbar-item')[0].getElementsByTagName('button').length).toEqual(1);
            }
        });
    });

    describe('Overflow content Testing', () => {
        let toolbar: Toolbar;
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Overflow style as hidden testing', () => {
            toolbar = new Toolbar({
                items: [{
                    type: 'Button', text: 'Bold',
                }],
            });
            toolbar.appendTo('#ej2Toolbar');
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            expect(element.classList.contains('e-hscroll')).toEqual(false);
            let scrollEvent = document.createEvent('MouseEvents');
            scrollEvent.initEvent('scroll', false, false);
            element.dispatchEvent(scrollEvent);
        });
        it('Overflow style as scroll testing', () => {
            toolbar = new Toolbar({
                width: 30,
                items: [{
                    type: 'Button', text: 'Bold',
                }],
            });
            toolbar.appendTo('#ej2Toolbar');
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            let innerelement: NodeList = element.getElementsByClassName('e-toolbar-items');
            setStyleAttribute(<HTMLElement>innerelement[0], { display: 'inline-block' });
            setStyleAttribute(<HTMLElement>element.getElementsByClassName('e-toolbar-item')[0], { display: 'inline-block' });
            toolbar.items = [{
                type: 'Button', text: 'Bold',
            }]
            toolbar.dataBind();
            let scrollELe: HTMLElement = <HTMLElement>element.children[0];
            expect(scrollELe.classList.contains('e-hscroll')).toEqual(true);
        });

        it('Overflow navigation testing', () => {
            toolbar = new Toolbar({
                width: 30,
                items: [{
                    type: 'Button', text: 'Bold',
                }],
            });
            toolbar.appendTo('#ej2Toolbar');
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            let scrollELe: HTMLElement = <HTMLElement>element.children[0];
            expect(scrollELe.classList.contains('e-hscroll')).toEqual(true);
            let innerNavEle: HTMLElement = <HTMLElement>scrollELe.children[0]
            expect(innerNavEle.classList.contains('e-hor-nav')).toEqual(true);
            let innerNavElement: HTMLElement = <HTMLElement>innerNavEle.querySelector('.e-icons');
            expect(innerNavElement.classList.contains('e-nav-arrow')).toEqual(true);
            expect(innerNavElement.classList.contains('e-nav-right-arrow')).toEqual(true);
            let scrollEvent = document.createEvent('MouseEvents');
            scrollEvent.initEvent('scroll', false, false);
            innerNavElement.remove();
            element.dispatchEvent(scrollEvent);
        });
    });

    describe('Overflow content horizontal scrolling  Testing', () => {
        let toolbar: Toolbar;
        it('Overflow navigation horizontal scrolling event handler testing', () => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
            toolbar = new Toolbar({
                width: 100,
                items: [{
                    type: 'Button', text: 'Bold'
                }, {
                    type: 'Button', text: 'Underline'
                }],
            });
            toolbar.appendTo('#ej2Toolbar');
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            let scrollELe: HTMLElement = <HTMLElement>element.children[0];
            expect(scrollELe.classList.contains('e-hscroll')).toEqual(true);
            scrollELe.style.display = 'inline-block';
            toolbar.items = [{
                type: 'Button', text: 'Underline',
            }]
            toolbar.dataBind();
            expect(scrollELe.classList.contains('e-hscroll')).toEqual(true);
            let innerNavElement: HTMLElement = <HTMLElement>scrollELe.children[0];
            let innerArrowEle: HTMLElement = <HTMLElement>innerNavElement.querySelector('.e-icons');
            expect(innerArrowEle.classList.contains('e-nav-right-arrow')).toEqual(true);
            let scrollEvent = document.createEvent('MouseEvents');
            let scrollCon: HTMLElement = <HTMLElement>element.querySelector('.e-hscroll-bar');
            scrollEvent.initEvent('scroll', false, false);
            innerNavElement.click();
            scrollCon.dispatchEvent(scrollEvent);
            innerNavElement.click();
            innerNavElement.click();
            innerNavElement.click();
            innerNavElement.click();
            scrollCon.dispatchEvent(scrollEvent);
            innerNavElement.click();
            scrollCon.dispatchEvent(scrollEvent);
            expect(innerArrowEle.classList.contains('e-nav-left-arrow')).toEqual(true);
            innerNavElement.click();
            scrollCon.dispatchEvent(scrollEvent);
            scrollCon.scrollLeft = 0;
            scrollCon.dispatchEvent(scrollEvent);
            expect(innerArrowEle.classList.contains('e-nav-right-arrow')).toEqual(true);
            innerArrowEle.click();
        });

        it('Overflow navigation event handler testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 20,
            });
            toolbar.appendTo('#ej2Toolbar');
            let scrollELe: HTMLElement = <HTMLElement>element.children[0];
            expect(scrollELe.classList.contains('e-hscroll')).toEqual(true);
        });
    });

    describe('Main property OverflowMode testing', () => {
        let toolbar: Toolbar;
        document.body.innerHTML = '';
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it(' Main property OverflowMode given as enum testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: 'Scrollable',
                items: [{
                    type: 'Button', text: 'Underline',
                }],
            });
            toolbar.appendTo('#ej2Toolbar');
            let scrollELe: HTMLElement = <HTMLElement>element.children[0];
            expect(scrollELe.classList.contains('e-hscroll')).toEqual(true);
        });
        it(' Main property OverflowMode given as enum testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 130,
                overflowMode: 'Scrollable',
                items: [{
                    type: 'Button', text: 'Underline',
                }],
            });
            toolbar.appendTo('#ej2Toolbar');
            let scrollELe: HTMLElement = <HTMLElement>element.children[0];
            expect(scrollELe.classList.contains('e-hscroll')).toEqual(false);
        });
        it(' Main property OverflowMode given as string testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: "Scrollable",
                items: [{
                    type: 'Button', text: 'Underline',
                }],
            });
            toolbar.appendTo('#ej2Toolbar');
            let scrollELe: HTMLElement = <HTMLElement>element.children[0];
            expect(scrollELe.classList.contains('e-hscroll')).toEqual(true);
        });
        it(' Main property OverflowMode given as enum  testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: 'Popup',
                items: [{
                    type: 'Button', text: 'Underline',
                }],
            });
            toolbar.appendTo('#ej2Toolbar');
            let scrollELe: HTMLElement = <HTMLElement>element.children[0];
            expect(scrollELe.classList.contains('e-hscroll')).toEqual(false);
        });
        it(' Main property OverflowMode given as string testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: "Popup",
                items: [{
                    type: 'Button', text: 'Underline',
                }],
            });
            toolbar.appendTo('#ej2Toolbar');
            let scrollELe: HTMLElement = <HTMLElement>element.children[0];
            expect(scrollELe.classList.contains('e-hscroll')).toEqual(false);
        });
    });
    describe(' Html attributes property testing in items main property', () => {
        let toolbar: Toolbar;
        document.body.innerHTML = '';
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Html attributes property giving as role', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: "Popup",
                items: [{
                    type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' },
                }],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.getElementsByClassName('e-toolbar-item')[0];
            expect(ele.getAttribute('role')).toEqual('Toolbar');
        });
        it('Html attributes property giving as class', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: "Popup",
                items: [{
                    type: 'Button', text: 'Underline', htmlAttributes: { 'class': "e-tool" },
                }],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.getElementsByClassName('e-toolbar-item')[0];
            expect(ele.classList.contains('e-tool')).toEqual(true);
        });
        it('Html attributes property giving as style', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: "Popup",
                items: [{
                    type: 'Button', text: 'Underline', htmlAttributes: { 'style': "color:red" },
                }],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.getElementsByClassName('e-toolbar-item')[0];
            expect(ele.style.color).toEqual('red');
        });
    });

    describe('Tooltip text property testing in items main property', () => {
        let toolbar: Toolbar;
        document.body.innerHTML = '';
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Tooltip text given as string', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: "Popup",
                items: [{
                    type: 'Button', text: 'Underline', tooltipText: 'Bold',
                }],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.getElementsByClassName('e-toolbar-item')[0];
            expect(ele.getAttribute('title')).toEqual('Bold');
        });
    });
    describe('Width property testing in items main property', () => {
        let toolbar: Toolbar;
        document.body.innerHTML = '';
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Width property testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                items: [{
                    type: 'Button', text: 'Underline', width: 50
                }],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.querySelector('.e-toolbar-item');
            let innerEle: HTMLElement = <HTMLElement>ele.querySelector('button');
            expect(innerEle.style.width).toEqual('50px');
        });
    });
    describe('Prefix Icon property testing in items main property', () => {
        let toolbar: Toolbar;
        document.body.innerHTML = '';
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Prefix Icon property testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                items: [{
                    type: 'Button', text: 'Underline', prefixIcon: 'e-prefix-icon'
                }],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.querySelector('.e-toolbar-item');
            let innerEle: HTMLElement = <HTMLElement>ele.querySelector('button');
            expect(innerEle.children.length).toEqual(2);
            expect((<HTMLElement>innerEle.children[0]).classList.contains('e-prefix-icon')).toEqual(true);
            expect((<HTMLElement>innerEle.children[1]).classList.contains('e-tbar-btn-text')).toEqual(true);
        });
    });

    describe('Id  property testing in items main property', () => {
        let toolbar: Toolbar;
        document.body.innerHTML = '';
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Suffix Icon property testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                items: [{
                    type: 'Button', text: 'Underline', id: 'btnId', suffixIcon: 'e-suffix-icon'
                }],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.querySelector('.e-toolbar-item');
            let innerEle: HTMLElement = <HTMLElement>ele.querySelector('button');
            expect(innerEle.id).toEqual('btnId');
        });
    });

    describe('Suffix Icon property testing in items main property', () => {
        let toolbar: Toolbar;
        document.body.innerHTML = '';
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Suffix Icon property testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                items: [{
                    type: 'Button', text: 'Underline', suffixIcon: 'e-suffix-icon'
                }],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.querySelector('.e-toolbar-item');
            let innerEle: HTMLElement = <HTMLElement>ele.querySelector('button');
            expect(innerEle.children.length).toEqual(2);
            expect((<HTMLElement>innerEle.children[1]).classList.contains('e-suffix-icon')).toEqual(true);
            expect((<HTMLElement>innerEle.children[0]).classList.contains('e-tbar-btn-text')).toEqual(true);
        });
    });


    describe('Prefix Icon and Suffix icon property testing in items main property', () => {
        let toolbar: Toolbar;
        document.body.innerHTML = '';
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Prefix Icon property testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                items: [{
                    type: 'Button', text: 'Underline', prefixIcon: 'e-prefix-icon', suffixIcon: 'e-suffix-icon'
                }],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.querySelector('.e-toolbar-item');
            let innerEle: HTMLElement = <HTMLElement>ele.querySelector('button');
            expect(innerEle.children.length).toEqual(2);
            expect((<HTMLElement>innerEle.children[0]).classList.contains('e-prefix-icon')).toEqual(true);
            expect((<HTMLElement>innerEle.children[1]).classList.contains('e-tbar-btn-text')).toEqual(true);
        });
        it('Prefix Icon property testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                items: [{
                    type: 'Button', prefixIcon: 'e-prefix-icon', suffixIcon: 'e-suffix-icon'
                }],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.querySelector('.e-toolbar-item');
            let innerEle: HTMLElement = <HTMLElement>ele.querySelector('button');
            expect(innerEle.children.length).toEqual(1);
            expect((<HTMLElement>innerEle.children[0]).classList.contains('e-prefix-icon')).toEqual(true);
        });
    });

    describe('ShowtexOn property testing in items main property', () => {
        let toolbar: any;
        document.body.innerHTML = '';
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it('showtextOn given as string with Popup', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: "Popup",
                items: [
                    { type: 'Button', text: 'Underline', showTextOn: 'Toolbar' },
                    { type: 'Button', text: 'Bold' },
                    { type: 'Button', text: 'Italic' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.getElementsByClassName('e-toolbar-item')[0];
            expect(toolbar.popupObj.element.querySelectorAll('.e-toolbar-text').length > 0).toEqual(true);
        });
        it('showtextOn given as string', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 170,
                overflowMode: "Popup",
                items: [
                    { type: 'Button', text: 'Underline', showTextOn: 'Toolbar' },
                    { type: 'Button', text: 'Bold' },
                    { type: 'Button', text: 'Italic' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.getElementsByClassName('e-toolbar-item')[0];
            expect(element.querySelectorAll('.e-toolbar-text').length > 0).toEqual(true);
        });
        it('showtextOn given as string with Popup', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: "Popup",
                items: [
                    { type: 'Button', text: 'Underline', showTextOn: 'Overflow' },
                    { type: 'Button', text: 'Bold' },
                    { type: 'Button', text: 'Italic' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.getElementsByClassName('e-toolbar-item')[0];
            expect(toolbar.popupObj.element.querySelectorAll('.e-popup-text').length > 0).toEqual(true);
        });
        it('showtextOn given as string', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 170,
                overflowMode: "Popup",
                items: [
                    { type: 'Button', text: 'Underline', showTextOn: 'Overflow' },
                    { type: 'Button', text: 'Bold' },
                    { type: 'Button', text: 'Italic' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.getElementsByClassName('e-toolbar-item')[0];
            expect(element.querySelectorAll('.e-popup-text').length > 0).toEqual(true);
        });
        it('showtextOn given as string', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 170,
                overflowMode: "Popup",
                items: [
                    { type: 'Button', text: 'Underline', showTextOn: 'Both' },
                    { type: 'Button', text: 'Bold' },
                    { type: 'Button', text: 'Italic' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
            let ele: HTMLElement = <HTMLElement>element.getElementsByClassName('e-toolbar-item')[0];
            expect(element.querySelectorAll('.e-toolbar-text').length > 0).toEqual(false);
            expect((<HTMLElement>element.querySelectorAll('.e-toolbar-item')[0]).classList.contains('e-toolbar-text')).toEqual(false);
        });
    });

    describe('Popuped element height testing based on toolbar height', () => {
        let toolbar: any;
        document.body.innerHTML = '';
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Popuped element height testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                height: 40,
                width: 100,
                overflowMode: "Popup",
                items: [{
                    type: 'Button', text: 'New', id: 'btnId'
                },{
                    type: 'Button', text: 'Underline'
                }],
            }); toolbar.appendTo('#ej2Toolbar');
            let popupEle: HTMLElement = toolbar.popupObj.element.querySelector('.e-toolbar-item') as HTMLElement;
            expect (popupEle.style.height === '').toEqual(false);
        });
    });

    describe('Template property testing in items main property', () => {
        let toolbar: Toolbar;
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
            let button: HTMLElement = createElement('Button', { id: 'Template' });
            button.innerHTML = 'Template1'
            document.body.appendChild(button);
            new Button({  }, '#Template');
        })
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        function creatfunction(e: Event) {
            new Button({ }, '#Template1');
        }
        it('Template text given as string', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: "Popup",
                items: [{ template: '#Template', type: 'Button', text: 'Underline', tooltipText: 'Bold', }],
            }); toolbar.appendTo('#ej2Toolbar');
            expect(element.querySelector('#Template').parentElement.classList.contains('e-toolbar-item')).toEqual(true);
        });
        it('Template text given as string as Element', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                created: creatfunction,
                overflowMode: 'Popup',
                items: [{ template: "<button id='Template1'>", type: 'Button', text: 'Underline', tooltipText: 'Bold', }],
            }); toolbar.appendTo('#ej2Toolbar');
            expect(element.querySelector('#Template1').parentElement.classList.contains('e-toolbar-item')).toEqual(true);
        });
        it('Template given as Interface', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                created: creatfunction,
                overflowMode: "Popup",
                items: [{ template: new Button({}), type: 'Input', text: 'Underline', tooltipText: 'Bold', }],
            }); toolbar.appendTo('#ej2Toolbar');
            let template: HTMLElement = <HTMLElement>element.querySelector('.e-template input');
            expect(element.querySelector('.e-template').classList.contains('e-toolbar-item')).toEqual(true);
            expect(template.classList.contains('e-btn')).toEqual(true);
            expect(template.classList.contains('e-control')).toEqual(true);
            expect(template.id === 'input_ID').toEqual(false);
        });
        it('Template given as Interface with Type others', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                created: creatfunction,
                overflowMode: "Popup",
                items: [{ template: new Button({}), id: 'input_ID', type: 'Button', text: 'Underline', tooltipText: 'Bold', }],
            }); toolbar.appendTo('#ej2Toolbar');
            let template: NodeList = element.querySelectorAll('#input_ID')
            expect(template.length === 0).toEqual(true);
        });
        it('Template given as Interface with Id', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                created: creatfunction,
                overflowMode: "Popup",
                items: [{ template: new Button({ }), id: 'input_ID', type: 'Input', text: 'Underline', tooltipText: 'Bold', }],
            }); toolbar.appendTo('#ej2Toolbar');
            let template: HTMLElement = <HTMLElement>element.querySelector('.e-template input');
            expect(element.querySelector('.e-template').classList.contains('e-toolbar-item')).toEqual(true);
            expect(template.classList.contains('e-btn')).toEqual(true);
            expect(template.classList.contains('e-control')).toEqual(true);
            expect(template.id === 'input_ID').toEqual(true);
        });
        it('Template given as Interface with EnumType', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                created: creatfunction,
                overflowMode: "Popup",
                items: [{ template: new Button({}), id: 'input_ID', type: 'Input', text: 'Underline', tooltipText: 'Bold', }],
            }); toolbar.appendTo('#ej2Toolbar');
            let template: HTMLElement = <HTMLElement>element.querySelector('.e-template input');
            expect(element.querySelector('.e-template').classList.contains('e-toolbar-item')).toEqual(true);
            expect(template.classList.contains('e-btn')).toEqual(true);
            expect(template.classList.contains('e-control')).toEqual(true);
            expect(template.id === 'input_ID').toEqual(true);
        });
    });
    describe('Overflow property testing in items Prob', () => {
        let toolbar: Toolbar;
        document.body.innerHTML = '';
        beforeEach((): void => {
            toolbar = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
            setStyleAttribute(ele, { 'display`': 'block', 'white-space': 'nowrap', 'position': 'relative' });
            ele.style.display = 'block';
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (toolbar) {
                toolbar.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Overflow priority sets "Show" as string', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                items: [{ type: 'Button', text: 'Underline', overflow: "Show", tooltipText: 'Bold' }],
            }); toolbar.appendTo('#ej2Toolbar');
            expect(element.querySelector('.e-toolbar-item').classList.contains('e-overflow-show')).toEqual(true);
        });
        it('Overflow priority sets "Show" as enum', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                items: [{ type: 'Button', text: 'Underline', overflow: 'Show', tooltipText: 'Bold', }],
            }); toolbar.appendTo('#ej2Toolbar');
            expect(element.querySelector('.e-toolbar-item').classList.contains('e-overflow-show')).toEqual(true);
        });
        it('Overflow property popup control testing div element testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: 'Popup',
                items: [{ type: 'Button', text: 'Underline', overflow: 'Show', tooltipText: 'Bold', }],
            }); toolbar.appendTo('#ej2Toolbar');
            expect(element.children.length == 3).toEqual(true);
            expect(element.querySelector('.e-popup').classList.contains('e-toolbar-pop')).toEqual(true);
            expect(isVisible(element.querySelector('.e-popup'))).toEqual(false);
        });
        it('Overflow property popup control testing div element testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: 'Popup',
                items: [{
                    type: 'Button', text: 'Underline', overflow: 'Show', tooltipText: 'Bold'
                }],
            }); toolbar.appendTo('#ej2Toolbar');
            expect(element.children.length == 3).toEqual(true);
        });
        it('Overflow property popup control testing navigation icon testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: 'Popup',
                items: [{
                    type: 'Button', text: 'Bold', overflow: 'Show', tooltipText: 'Bold',
                }],
            }); toolbar.appendTo('#ej2Toolbar');
            expect(element.children[0].childElementCount == 1).toEqual(true);
            expect(element.querySelector('#' + element.id + '_nav').classList.contains('e-' + element.id + '_nav')).toEqual(true);
            expect(element.querySelector('#' + element.id + '_nav').classList.contains('e-hor-nav')).toEqual(true);
            expect(element.querySelector('.e-hor-nav').querySelector('.e-icons').classList.contains('e-popup-down-icon')).toEqual(true);
        });

        it('Overflow property popup control testing popup opening and closing Testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: 'Popup',
                items: [
                    { type: 'Button', text: 'Underline', overflow: 'Hide', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Bold', overflow: 'Show', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Italic', overflow: 'Show', tooltipText: 'Bold' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
            let pop_Nav:HTMLElement = document.getElementById(element.id + '_nav');
            let nav_icon: HTMLElement = pop_Nav.firstChild as HTMLElement;
            pop_Nav.click();
            let tool: any = toolbar;
            tool.popupObj.show();
            expect(isVisible(element.querySelector('.e-popup'))).toEqual(true);
            expect(nav_icon.classList.contains('e-popup-up-icon')).toEqual(true);
            expect(isVisible(element.querySelector('.e-popup .e-toolbar-item'))).toEqual(true);
            expect(element.querySelectorAll('.e-popup .e-toolbar-item').length == 3).toEqual(true);
            expect(element.querySelectorAll('.e-popup .e-toolbar-item.e-toolbar-popup').length == 3).toEqual(true);
            document.getElementById(element.id + '_nav').click();
            tool.popupObj.hide();
            expect(nav_icon.classList.contains('e-popup-down-icon')).toEqual(true);
            expect(isVisible(element.querySelector('.e-popup'))).toEqual(false);
        });
        it('Overflow property popup control testing popup priority wise alignment testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: 'Popup',
                items: [
                    { type: 'Button', text: 'Underline', overflow: 'Hide', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Bold', overflow: 'Show', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Italic', overflow: 'Show', tooltipText: 'Bold' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
            expect(element.querySelector('.e-popup .e-toolbar-item').classList.contains('e-overflow-show')).toEqual(true);
            expect((<Element>element.querySelectorAll('.e-popup .e-toolbar-item')[1]).classList.contains('e-overflow-show')).toEqual(true);
            expect((<Element>element.querySelectorAll('.e-popup .e-toolbar-item')[2]).classList.contains('e-overflow-show')).toEqual(false);
            expect(element.querySelectorAll('.e-popup .e-toolbar-item.e-overflow-show').length == 2).toEqual(true);
        });
        it('Overflow property popup control OverflowOption testing', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 100,
                overflowMode: 'Popup',
                items: [
                    { type: 'Button', text: 'Underline', overflow: 'Hide', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Bold', overflow: 'None', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Italic', overflow: 'Show', tooltipText: 'Bold' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
            expect(element.querySelector('.e-popup').classList.contains('e-toolbar-pop')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length == 1).toEqual(true);
            expect((<Element>element.querySelectorAll('.e-toolbar-items .e-toolbar-item')[0]).classList.contains('e-overflow-show')).toEqual(true);
            expect(element.querySelectorAll('.e-popup .e-toolbar-item').length == 2).toEqual(true);
            expect(element.querySelectorAll('.e-popup .e-toolbar-item button')[0].children[0].innerHTML).toEqual('Bold');
        });
        it('Overflow property popup control OverflowOption give Hide as string', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 200,
                overflowMode: 'Popup',
                items: [
                    { type: 'Button', text: 'Underline', overflow: 'None', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Bold', overflow: 'None', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Italic', overflow: 'Show', tooltipText: 'Bold' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
            expect(element.querySelectorAll('.e-popup').length == 0).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length == 3).toEqual(true);
            expect((<Element>element.querySelectorAll('.e-toolbar-items .e-toolbar-item')[0]).classList.contains('e-overflow-show')).toEqual(false);
            expect((<Element>element.querySelectorAll('.e-toolbar-items .e-toolbar-item')[1]).classList.contains('e-overflow-show')).toEqual(false);
            expect((<Element>element.querySelectorAll('.e-toolbar-items .e-toolbar-item')[2]).classList.contains('e-overflow-show')).toEqual(true);
            expect(element.querySelectorAll('.e-popup .e-toolbar-item').length == 0).toEqual(true);
        });
        it('Overflow property popup control OverflowOption give Hide as string', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: 'Popup',
                items: [
                    { type: 'Button', text: 'Underline', overflow: 'Hide', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Bold', overflow: 'Hide', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Italic', overflow: 'Show', tooltipText: 'Bold' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
        });
        it('Overflow property popup control OverflowOption With separator', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 70,
                overflowMode: 'Popup',
                items: [
                    { type: 'Separator', text: 'Underline', overflow: 'Hide', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Bold', overflow: 'Hide', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Italic', overflow: 'Show', tooltipText: 'Bold' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
            expect(element.querySelectorAll('.e-popup .e-toolbar-item').length == 2).toEqual(true);
        });
        it('Overflow property popup control testing popup element refresh with increasing width', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 30,
                overflowMode: 'Popup',
                items: [
                    { type: 'Separator', text: 'Underline', overflow: 'Hide', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Bold', overflow: 'Hide', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Italic', overflow: 'Show', tooltipText: 'Bold' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
            expect(element.querySelectorAll('.e-popup .e-toolbar-item').length == 2).toEqual(true);
            (<HTMLElement>element.querySelector('.e-toolbar-items')).classList.add('e-fix-width');
            toolbar.width = 100;
            toolbar.dataBind();
            expect(element.querySelectorAll('.e-popup .e-toolbar-item').length == 1).toEqual(true);
            expect(element.querySelector('.e-popup .e-toolbar-popup button').children[0].innerHTML).toEqual('Bold');
            toolbar.width = 500;
            toolbar.dataBind();
            expect(element.querySelectorAll('.e-popup .e-toolbar-item').length == 0).toEqual(true);
        });
        it('Overflow property popup control testing popup element refresh with decreasing width', () => {
            let element: HTMLElement = document.getElementById('ej2Toolbar');
            toolbar = new Toolbar({
                width: 140,
                overflowMode: 'Popup',
                items: [
                    { type: 'Button', text: 'Underline', overflow: 'None', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Bold', overflow: 'Show', tooltipText: 'Bold' },
                    { type: 'Button', text: 'Italic', overflow: 'None', tooltipText: 'Bold' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
            toolbar.width = 30;
            toolbar.dataBind();
            expect(element.querySelectorAll('.e-popup .e-toolbar-item').length == 3).toEqual(true);
            expect(element.querySelector('.e-popup .e-toolbar-popup button').children[0].innerHTML).toEqual('Bold');
            expect(element.querySelectorAll('.e-popup .e-toolbar-popup button')[1].children[0].innerHTML).toEqual('Underline');
            expect(element.querySelectorAll('.e-popup .e-toolbar-popup button')[2].children[0].innerHTML).toEqual('Italic');
            toolbar.width = 250;
            toolbar.dataBind();
        });
        describe(' Text property in items toolbar testing', () => {
            let toolbar: Toolbar;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it(' Text property testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 30,
                    items: [{ type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' } }],
                }); toolbar.appendTo('#ej2Toolbar');
                let ele: HTMLElement = <HTMLElement>element.getElementsByClassName('e-toolbar-item')[0];
                expect(element.querySelector('.e-toolbar-item button').children[0].innerHTML).toEqual('Bold');
            });
        });

        describe(' Touch event (scroll and swipe) handler testing', () => {
            let toolbar: Toolbar;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Touch event scroll testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let scroll: any;
                toolbar = new Toolbar({
                    width: 50,
                    overflowMode: 'Scrollable',
                    items: [{
                        type: 'Button', text: 'Hii', htmlAttributes: { 'role': 'Toolbar' },
                    }, {
                        type: 'Button', text: 'Unterline button',
                    }],
                }); toolbar.appendTo('#ej2Toolbar');
                let scrollELe: HTMLElement = <HTMLElement>element.children[0];
                expect(scrollELe.classList.contains('e-hscroll')).toEqual(true);
                let TchEvent: TouchEventArgs;
                let event: ScrollEventArgs = { scrollDirection: 'Right', name: 'scroll', distanceX: 30, distanceY: 0, originalEvent: TchEvent, startEvents: TchEvent, startX: 30, startY: 0, velocity: 4 };
                scroll = new HScroll({}, element);
                scroll.touchScrollHandler(event);
                event.scrollDirection = 'Left'; event.name = 'scroll'; event.distanceX = 30;
                scroll.touchScrollHandler(event);
                event.name = 'swipe';
                scroll.touchScrollHandler(event);
            });
        });

        describe('Resize testing', () => {
            let toolbar: any;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Resize testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Popup',
                    items: [{
                        type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' },
                    },
                    {
                        type: 'Button', text: 'Underline Button',
                    }],
                }); toolbar.appendTo('#ej2Toolbar');
                element.style.width = '50px';
                toolbar.resize();
                expect(element.classList.contains('e-toolpop')).toEqual(true);
                expect(element.querySelector('.e-toolbar-pop').childNodes.length).toEqual(2);
                expect(element.querySelectorAll('.e-toolbar-items .-toolbar-item').length == 0).toEqual(true);
            });
        });

        describe('Resize testing', () => {
            let toolbar: Toolbar;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Resize testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Popup',
                    items: [{
                        type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }
                    }, { type: 'Button', text: 'Underline button' }],
                });
                toolbar.appendTo('#ej2Toolbar');
            });
        });

        describe(' Keyboard Interaction testing', () => {
            let toolbar: any;
            let keyEventArgs: any;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('allowKeyboardInteraction Property testing ', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Popup',
                    items: [
                        { type: 'Button', text: 'new', },
                        { type: 'Button', text: 'Underline Button', }]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveRight',
                    target: toolbar.element.querySelector('.e-toolbar-item'),
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                toolbar.keyActionHandler(keyEventArgs);
            });
            it('Right arrow Key Testing select option', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        { type: 'Button', text: 'new', htmlAttributes: { 'role': 'Toolbar' } },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' } },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' } },
                    ]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveRight',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[0],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML).toEqual('Underline');
            });

            it('Right arrow Key  without Element testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }, }
                    ]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveRight',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[2],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML === 'Underline').toEqual(false);
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveRight',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[2],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML === 'Underline').toEqual(false);
            });
            it('Right arrow Key with toolbar element Focusing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 50,
                    overflowMode: 'Scrollable',
                    items: [
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }, }
                    ]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveRight',
                    target: toolbar.element,
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML === 'New').toEqual(true);
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveRight',
                    target: toolbar.element.querySelectorAll('.e-hor-nav')[0],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML === 'Bold').toEqual(false);
            });

            it('Right arrow Key  with inbetween Separator testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Separator' },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }, }]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveRight',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[0],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML).toEqual('Underline');
            });
            it('Right arrow Key  with multiple Separator testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Separator' },
                        { type: 'Separator' },]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveRight',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[2],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.classList.contains('e-toolbar')).toEqual(true);
            });
            it('Right arrow Key  with multiple Separator testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Separator' },
                        { type: 'Separator' },
                        { type: 'Separator' },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }, },]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveRight',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[2],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML).toEqual('Bold');
            });
            it('Left arrow Key  with multiple Separator testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Separator' },
                        { type: 'Separator' },
                        { type: 'Separator' },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }, },]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveLeft',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[5],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML).toEqual('Underline');
            });
            it('Left arrow Key  with multiple Separator testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        { type: 'Separator' },
                        { type: 'Separator' },
                        { type: 'Separator' },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }, },]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveLeft',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[3],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.classList.contains('e-toolbar')).toEqual(true);
            });
            it('Tab Key testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Separator' },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }, }]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'tab',
                    target: toolbar.element,
                };
               expect(element.classList.contains('e-keyboard')).toEqual(true);
               toolbar.keyActionHandler(keyEventArgs);
               expect(document.activeElement.children[0].innerHTML).toEqual('New');
            });
            it('Tab Key testing with item Click', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let ele: HTMLInputElement = <HTMLInputElement>createElement('input', {id:'input1'  });
                let ele1: HTMLInputElement = <HTMLInputElement>createElement('input', {id:'input2'});
                ele.type= 'text'; ele1.type = 'text';
                element.parentElement.insertBefore(ele,element);
                element.parentElement.appendChild(ele1);
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Separator' },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }, }]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'tab',
                    target: toolbar.element,
                };
               expect(element.classList.contains('e-keyboard')).toEqual(true);
               toolbar.keyActionHandler(keyEventArgs);
               let el:HTMLElement =  toolbar.element.querySelectorAll('.e-toolbar-item')[0].firstChild;
               expect(document.activeElement.children[0].innerHTML).toEqual('New');
               expect(el.getAttribute('tabindex') === null).toEqual(true);
               toolbar.element.querySelectorAll('.e-toolbar-item')[2].click();
               expect(el.getAttribute('tabindex')).toEqual('-1');
               expect(document.activeElement.children[0].innerHTML).toEqual('Underline');
               toolbar.element.querySelectorAll('.e-toolbar-item')[1].click();
               expect(el.getAttribute('tabindex')).toEqual('-1');
               expect(document.activeElement.children[0].innerHTML).toEqual('Underline');
               keyEventArgs = {
                    preventDefault: function () { },
                    action: 'tab',
                    target: toolbar.element,
                };
               toolbar.keyActionHandler(keyEventArgs);
               expect(el.getAttribute('tabindex')).toEqual('-1');
               expect(document.activeElement.children[0].innerHTML).toEqual('Underline');
            });
            it('Tab key with Document testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let btn : HTMLElement =  createElement('button', { id: 'focusButton' });
                let btn1 : HTMLElement =  createElement('button', { id: 'focusButton1' });
                element.parentElement.insertBefore(btn, element)
                element.parentElement.insertBefore(btn1, element)
                toolbar = new Toolbar({
                    width: 100,
                    overflowMode: 'Popup',
                    items: [
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Separator' },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }, }]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'tab',
                    target: toolbar.element.querySelector('.e-hor-nav'),
                };
               expect(element.classList.contains('e-keyboard')).toEqual(true);
               toolbar.keyActionHandler(keyEventArgs);
               expect(document.activeElement.children[0].innerHTML === 'New').toEqual(true);
            });
            it('Tab key with Document testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let btn : HTMLElement =  createElement('button', { id: 'focusButton' });
                let btn1 : HTMLElement =  createElement('button', { id: 'focusButton1' });
                element.parentElement.insertBefore(btn, element)
                element.parentElement.insertBefore(btn1, element)
                toolbar = new Toolbar({
                    width: 100,
                    overflowMode: 'Popup',
                    items: [
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Separator' },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }, }]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'tab',
                    target: toolbar.element.querySelector('.e-toolbar-item'),
                };
               expect(element.classList.contains('e-keyboard')).toEqual(true);
               toolbar.keyActionHandler(keyEventArgs);
               toolbar.element.focus();
               expect(document.activeElement.classList.contains('e-toolbar')).toEqual(true);
            });
            it('Tab key without items testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let btn : HTMLElement =  createElement('button', { id: 'focusButton' });
                let btn1 : HTMLElement =  createElement('button', { id: 'focusButton1' });
                element.parentElement.insertBefore(btn, element);
                element.parentElement.insertBefore(btn1, element);
                
                toolbar = new Toolbar({
                    width: 100,
                    overflowMode: 'Popup',
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'tab',
                    target: toolbar.element,
                };
               expect(element.classList.contains('e-keyboard')).toEqual(true);
               toolbar.keyActionHandler(keyEventArgs);
               toolbar.element.focus();
               expect(document.activeElement.classList.contains('e-toolbar')).toEqual(true);
            });
            it('Move Left with Focusing Navigation testing without Separator', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let btn : HTMLElement =  createElement('button', { id: 'focusButton' });
                let btn1 : HTMLElement =  createElement('button', { id: 'focusButton1' });
                element.parentElement.insertBefore(btn, element)
                element.parentElement.insertBefore(btn1, element)
                toolbar = new Toolbar({
                    width: 100,
                    overflowMode: 'Popup',
                    items: [
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }, }]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveLeft',
                    target: toolbar.element.querySelector('.e-hor-nav'),
                };
               expect(element.classList.contains('e-keyboard')).toEqual(true);
               toolbar.keyActionHandler(keyEventArgs);
               expect(document.activeElement.children[0].innerHTML === 'New').toEqual(true);
            });
            it('Move Left with Focusing Navigation testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let btn : HTMLElement =  createElement('button', { id: 'focusButton' });
                let btn1 : HTMLElement =  createElement('button', { id: 'focusButton1' });
                element.parentElement.insertBefore(btn, element)
                element.parentElement.insertBefore(btn1, element)
                toolbar = new Toolbar({
                    width: 100,
                    overflowMode: 'Popup',
                    items: [
                        { type: 'Separator' },
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Separator' },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }, }]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveLeft',
                    target: toolbar.element.querySelector('.e-hor-nav'),
                };
               expect(element.classList.contains('e-keyboard')).toEqual(true);
               toolbar.keyActionHandler(keyEventArgs);
               expect(document.activeElement.children[0].innerHTML === 'New').toEqual(true);
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveRight',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[1],
                };
               expect(element.classList.contains('e-keyboard')).toEqual(true);
               toolbar.keyActionHandler(keyEventArgs);
               expect(document.activeElement.classList.contains('e-hor-nav')).toEqual(true);
            });
            it('Right arrow Key  with last element as Separator testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }, },
                        { type: 'Separator' },
                    ]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveRight',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[2],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML == 'Underline').toEqual(false);
            });

            it('Left arrow Key   testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        {
                            type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' },
                        },
                        {
                            type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' },
                        },
                        {
                            type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' },
                        }
                    ]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveLeft',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[1],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML).toEqual('New');
            });

            it('Left arrow Key  without Element in left side testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({

                    overflowMode: 'Popup',
                    width: 100,
                    items: [
                        {
                            type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' },
                        },
                        {
                            type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' },
                        },
                        {
                            type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' },
                        }
                    ]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveLeft',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[0],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML === 'New').toEqual(false);
            });

            it('Left arrow Key  with in between Separator  testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' },
                        },
                        { type: 'Separator' },
                        {
                            type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' },
                        },
                        {
                            type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' },
                        }
                    ]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveLeft',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[2],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML).toEqual('New');
            });
            it('Left arrow Key  with Separator as first element  testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    overflowMode: 'Popup',
                    items: [{ type: 'Separator' },
                    {
                        type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' },
                    },
                    {
                        type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' },
                    },
                    {
                        type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' },
                    }
                    ]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveLeft',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[1],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                element.focus();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML === 'New').toEqual(false);
            });
            it('Up arrow Key   testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 30,
                    overflowMode: 'Popup',
                    items: [
                        { type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' } },
                        { type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' } },
                        {
                            type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' }
                        }
                    ]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveUp',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[1],
                };
                toolbar.popupObj.show();
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML).toEqual('New');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveUp',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[0],
                };
                toolbar.popupObj.show();
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.classList.contains('e-hor-nav')).toEqual(true);      
            });
            it('Up arrow Key  without Popup  testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        {
                            type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' },
                        },
                        {
                            type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' },
                        },
                        {
                            type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' },
                        }
                    ]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveUp',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[1],
                };
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML == 'New').toEqual(false);
            });
            it('Down arrow Key    testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 30,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' },
                        },
                        {
                            type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' },
                        },
                        {
                            type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' },
                        }
                    ]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveDown',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[1],
                };
                toolbar.popupObj.show();
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML).toEqual('Bold');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveDown',
                    target: toolbar.element.querySelector('.e-hor-nav'),
                };
                toolbar.popupObj.show();
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML).toEqual('New');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'popupOpen',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[1],
                };
                toolbar.popupObj.show();
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                toolbar.keyActionHandler(keyEventArgs);
            });

            it('Down arrow Key  without Popup  testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        {
                            type: 'Button', text: 'New', htmlAttributes: { 'role': 'Toolbar' },
                        },
                        {
                            type: 'Button', text: 'Underline', htmlAttributes: { 'role': 'Toolbar' },
                        },
                        {
                            type: 'Button', text: 'Bold', htmlAttributes: { 'role': 'Toolbar' },
                        }
                    ]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'moveDown',
                    target: toolbar.element.querySelectorAll('.e-toolbar-item')[1],
                };
                toolbar.element.focus();
                expect(element.classList.contains('e-keyboard')).toEqual(true);
                toolbar.keyActionHandler(keyEventArgs);
                expect(document.activeElement.children[0].innerHTML === 'Bold').toEqual(false);
            });
        });
        describe(' Public methods add items Testing', () => {
            let toolbar: Toolbar;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('addItem method Testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 250,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'Unterline',
                        },
                        {
                            type: 'Button', text: 'Bold',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                expect(toolbar.items.length).toEqual(3);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item button')[2].children[0].innerHTML).toEqual('Bold');
                toolbar.addItems([
                    { type: 'Button', text: 'Underline1' }, { type: 'Button', text: 'Bold1' }
                ], 2);
                expect(toolbar.items.length).toEqual(5);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item button')[2].children[0].innerHTML).toEqual('Underline1');
                expect(toolbar.element.querySelectorAll('.e-toolbar-item button')[3].children[0].innerHTML).toEqual('Bold1');
                toolbar.addItems([
                    { type: 'Button', text: 'Underline1' }, { type: 'Button', text: 'Bold1' }
                ], 7);
                expect(toolbar.items.length === 7).toEqual(false);
            });
            it('addItem method without passing index', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 250,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'Unterline',
                        },
                        {
                            type: 'Button', text: 'Bold',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                expect(toolbar.items.length).toEqual(3);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item button')[2].children[0].innerHTML).toEqual('Bold');
                toolbar.addItems([
                    { type: 'Button', text: 'Underline1' }, { type: 'Button', text: 'Bold1' }
                ]);
                expect(toolbar.items.length).toEqual(5);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item button')[0].children[0].innerHTML).toEqual('Underline1');
                expect(toolbar.element.querySelectorAll('.e-toolbar-item button')[1].children[0].innerHTML).toEqual('Bold1');
            });
        });

        describe(' Public methods remove items Testing', () => {
            let toolbar: any;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it(' removeItems method Testing using index', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 250,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'Unterline',
                        },
                        {
                            type: 'Button', text: 'Bold',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                expect(toolbar.items.length).toEqual(3);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item button')[2].children[0].innerHTML).toEqual('Bold');
                toolbar.removeItems(1);
                expect(toolbar.items.length).toEqual(2);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item button')[1].children[0].innerHTML).toEqual('Bold');
                toolbar.removeItems(5);
                expect(toolbar.items.length).toEqual(2);
            });
            it(' removeItems method Testing using index', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 120,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'Unterline',
                        },
                        {
                            type: 'Button', text: 'Bold',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                expect(toolbar.items.length).toEqual(3);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item button')[2].children[0].innerHTML).toEqual('Bold');
                toolbar.removeItems(toolbar.popupObj.element.querySelectorAll('.e-toolbar-item'));
                expect(toolbar.items.length).toEqual(1);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item button')[0].children[0].innerHTML).toEqual('Hii');
            });
            it(' removeItems method Testing using index', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 100,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'Underline',
                        },
                        {
                            type: 'Button', text: 'Bold',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                expect(toolbar.items.length).toEqual(3);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item button')[2].children[0].innerHTML).toEqual('Bold');
                toolbar.removeItems([toolbar.popupObj.element.querySelectorAll('.e-toolbar-item')[0]]);
                expect(toolbar.items.length).toEqual(2);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item button')[0].children[0].innerHTML).toEqual('Hii');
                expect(toolbar.popupObj.element.querySelectorAll('.e-toolbar-item button')[0].children[0].innerHTML).toEqual('Bold');
            });
        });

        describe(' Public methods enableItems Testing', () => {
            let toolbar: any;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it(' enableItems method Testing ', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 250,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'Unterline',
                        },
                        {
                            type: 'Button', text: 'Bold',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                toolbar.enableItems(toolbar.element.querySelectorAll('.e-toolbar-item'), false);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item')[0].classList.contains('e-overlay')).toEqual(true);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item')[1].classList.contains('e-overlay')).toEqual(true);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item')[2].classList.contains('e-overlay')).toEqual(true);
            });

            it(' enableItems method Testing ', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 250,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'Unterline',
                        },
                        {
                            type: 'Button', text: 'Bold',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                toolbar.enableItems(toolbar.element.querySelectorAll('.e-toolbar-item'), false);
                toolbar.enableItems(toolbar.element.querySelectorAll('.e-toolbar-item'), true);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item')[0].classList.contains('e-overlay')).toEqual(false);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item')[1].classList.contains('e-overlay')).toEqual(false);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item')[2].classList.contains('e-overlay')).toEqual(false);
                toolbar.enableItems(toolbar.element.querySelector('.e-toolbar-item'), false);
                expect(toolbar.element.querySelector('.e-toolbar-item').classList.contains('e-overlay')).toEqual(true);
            });

            it(' enableItems method Testing without passing 2nd args ', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 250,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'Unterline',
                        },
                        {
                            type: 'Button', text: 'Bold',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                toolbar.enableItems([toolbar.element.querySelectorAll('.e-toolbar-item')[0]], false);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item')[0].classList.contains('e-overlay')).toEqual(true);
                toolbar.enableItems([toolbar.element.querySelectorAll('.e-toolbar-item')[0]]);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item')[0].classList.contains('e-overlay')).toEqual(false);

            });
            it(' enableItems method Testing ', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 250,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'Unterline',
                        },
                        {
                            type: 'Button', text: 'Bold',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                toolbar.enableItems([toolbar.element.querySelectorAll('.e-toolbar-item')[0]], false);
                toolbar.enableItems([toolbar.element.querySelectorAll('.e-toolbar-item')[0]], true);
                expect(toolbar.element.querySelectorAll('.e-toolbar-item')[0].classList.contains('e-overlay')).toEqual(false);
            });

        });


        describe('Resize testing with Scrolling and Popup Mode', () => {
            let toolbar: any;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Resize testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'New Chart Button',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn',
                        },
                        {
                            type: 'Button', text: 'ChartButton',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                let popNav: NodeList = element.querySelectorAll('.e-hor-nav');
                expect(popNav.length > 0).toEqual(true);
                element.style.width = '50px';
                toolbar.resize();
                expect(popNav.length > 0).toEqual(true);
            });
            it('Resize testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'New Chart Button',
                        },
                        { type: 'Separator' },
                        {
                            type: 'Button', text: 'UnderlineBtn',
                        },
                        {
                            type: 'Button', text: 'ChartButton',
                        },
                        { type: 'Separator' },
                        {
                            type: 'Button', text: 'Next_Prev_Btn',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                let popNav: NodeList = element.querySelectorAll('.e-hor-nav');
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(3);
                (<HTMLElement>element.querySelector('.e-toolbar-items')).classList.add('e-fix-width');
                element.style.width = '200px';
                toolbar.resize();
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(4);
                element.style.width = '250px';
                toolbar.resize();
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(6);
                expect((<HTMLElement>element.querySelectorAll('.e-toolbar-items .e-toolbar-item button')[1]).children[0].innerHTML).toEqual('New Chart Button');
                expect((<HTMLElement>element.querySelectorAll('.e-toolbar-items .e-toolbar-item')[2]).classList.contains('e-separator')).toEqual(true);
                expect((<HTMLElement>element.querySelectorAll('.e-toolbar-items .e-toolbar-item')[3]).querySelector('button').children[0].innerHTML).toEqual('UnderlineBtn');
            });

            it('Resize testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'New Chart Button',
                        },
                        { type: 'Separator' },
                        {
                            type: 'Button', text: 'UnderlineBtn',
                        },
                        {
                            type: 'Button', text: 'ChartButton',
                        },
                        { type: 'Separator' },
                        {
                            type: 'Button', text: 'Next_Prev_Btn',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                let popNav: NodeList = element.querySelectorAll('.e-hor-nav');
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(3);
                (<HTMLElement>element.querySelector('.e-toolbar-items')).classList.add('e-fix-width');
                expect(element.classList.contains('e-toolpop')).toEqual(true);
                element.style.width = '200px';
                toolbar.resize();
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(4);
                element.style.width = '250px';
                toolbar.resize();
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(6);
                element.style.width = 'auto';
                toolbar.resize();
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(7);
            });
            it('Resize testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    overflowMode: 'Scrollable',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'New Chart Button',
                        },
                        { type: 'Separator' },
                        {
                            type: 'Button', text: 'UnderlineBtn',
                        },
                        {
                            type: 'Button', text: 'ChartButton',
                        },
                        { type: 'Separator' },
                        {
                            type: 'Button', text: 'Next_Prev_Btn',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                let popNav: NodeList = element.querySelectorAll('.e-hor-nav');
                element.style.width = 'auto';
                toolbar.resize();
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(7);
            });

            it('Resize testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 190,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Button', text: 'New Chart Button',
                        }
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                let popNav: NodeList = element.querySelectorAll('.e-hor-nav');
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(2);
                (<HTMLElement>element.querySelector('.e-toolbar-items')).classList.add('e-fix-width');
                element.style.width = '150px';
                toolbar.resize();
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(2);
            });
        });

        describe('Resize testing with Popup priority', () => {
            let toolbar: any;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                document.body.innerHTML = '';
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Resize with Priority', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 180,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Hide',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Hide',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Show',
                        }
                    ],
                }, '#ej2Toolbar');
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(2);
                element.style.width = '200px';
                toolbar.resize();
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(2);
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item .e-tbar-btn-text')[1].innerHTML).toEqual('UnderlineBtn');
                expect(element.querySelectorAll('.e-toolbar-pop .e-toolbar-item .e-tbar-btn-text')[0].innerHTML).toEqual('Next_Prev_Btn');
                expect(element.querySelectorAll('.e-toolbar-pop .e-toolbar-item .e-tbar-btn-text')[1].innerHTML).toEqual('New Chart Button');
                expect(element.querySelectorAll('.e-toolbar-pop .e-toolbar-item .e-tbar-btn-text')[2].innerHTML).toEqual('ChartButton');
                element.style.width = '330px';
                toolbar.resize();
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item .e-tbar-btn-text')[2].innerHTML).toEqual('Next_Prev_Btn');
                element.style.width = '440px';
                toolbar.resize();
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item .e-tbar-btn-text')[1].innerHTML).toEqual('New Chart Button');
                element.style.width = '550px';
                toolbar.resize();
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item .e-tbar-btn-text')[3].innerHTML).toEqual('ChartButton');
            });
            it('Resize with Priority Separator', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let separator: HTMLElement;
                toolbar = new Toolbar({
                    width: 200,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Hide',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Hide',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Show',
                        }
                    ],
                }, '#ej2Toolbar');
                let itemCollection : NodeList = element.querySelectorAll('.e-toolbar-items .e-toolbar-item');
                expect(itemCollection.length).toEqual(4);
                separator = itemCollection[3] as HTMLElement;
                expect(separator.classList.contains('e-separator')).toEqual(true);
                expect(separator.style.display).toEqual('none');
                element.style.width = '150px';
                toolbar.resize();
                itemCollection = element.querySelectorAll('.e-toolbar-items .e-toolbar-item');
                expect(itemCollection.length).toEqual(3);
                separator = itemCollection[1] as HTMLElement;
                expect(separator.classList.contains('e-separator')).toEqual(true);
                expect(separator.style.display).toEqual('none');
                element.style.width = '180px';
                toolbar.resize();
                itemCollection = element.querySelectorAll('.e-toolbar-items .e-toolbar-item');
                separator = itemCollection[1] as HTMLElement;
              //  expect(separator.style.display).toEqual('');
                separator = itemCollection[3] as HTMLElement;
                //expect(separator.style.display).toEqual('none');
            });
            it('Resize with popup without text item case', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let separator: HTMLElement;
                toolbar = new Toolbar({
                    width: 210,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Hide',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Hide',
                        },
                        {
                            type: 'Button', prefixIcon:'e-btn-icon' , overflow: 'Show',
                        }
                    ],
                }, '#ej2Toolbar');
                let itemCollection : NodeList = element.querySelectorAll('.e-toolbar-items .e-toolbar-item');
                expect(itemCollection.length).toEqual(5);
                element.style.width = '100px';
                toolbar.resize();
                itemCollection = element.querySelectorAll('.e-toolbar-items .e-toolbar-item');
                expect(toolbar.popupObj.element.querySelectorAll('.e-tbtn-align').length>0).toEqual(true);
                expect(itemCollection.length).toEqual(3);
                element.style.width = '250px';
                toolbar.resize();
                expect(toolbar.popupObj.element.querySelectorAll('.e-tbtn-align').length>0).toEqual(false);
            });
            it('Resize with popup without text item with showtexton toolbar mode', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let separator: HTMLElement;
                toolbar = new Toolbar({
                    width: 210,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', text: 'New Chart Button',showTextOn:'Toolbar', overflow: 'Hide',
                        },
                        {
                            type: 'Button', text: 'Chart',showTextOn:'Toolbar', overflow: 'Show',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Hide',
                        },
                        {
                            type: 'Button', prefixIcon:'e-btn-icon' , overflow: 'Show',
                        }
                    ],
                }, '#ej2Toolbar');
                element.style.width = '70px';
                toolbar.resize();
                element.style.width = '170px';
                toolbar.resize();
            });
            it('Resize with popup without text and showtexton case', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let separator: HTMLElement;
                toolbar = new Toolbar({
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', text: 'New Chart Button',showTextOn:'Overflow', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                toolbar.popupRefresh(); //for popup refresh check without popup navigation.
            });
            it('Resize with popup without text and showtexton case', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let separator: HTMLElement;
                toolbar = new Toolbar({
                    width: 220,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', text: 'New Chart Button',showTextOn:'Overflow', overflow: 'Hide',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', prefixIcon:'e-btn-icon', text: 'ChartButton', overflow: 'Hide',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', prefixIcon:'e-btn-icon' , overflow: 'Show',
                        }
                    ],
                }, '#ej2Toolbar');
                let itemCollection : NodeList = element.querySelectorAll('.e-toolbar-items .e-toolbar-item');
                expect(itemCollection.length).toEqual(7);
                element.style.width = '200px';
                toolbar.resize();
                element.style.width = '180px';
                toolbar.resize();
                element.style.width = '80px';
                toolbar.resize();
                itemCollection = element.querySelectorAll('.e-toolbar-items .e-toolbar-item');
                expect(itemCollection.length).toEqual(5);
                element.style.width = '250px';
                toolbar.resize();
                element.style.width = '80px';
                toolbar.resize();
                toolbar.overflowMode = 'Scrollable';
                toolbar.dataBind();
                expect(element.querySelectorAll('.e-hscroll').length).toEqual(1);
                expect(element.querySelectorAll('.e-popup').length).toEqual(0);
                element.style.width = '250px';
                toolbar.enableRtl = true;
                toolbar.dataBind();
                toolbar.resize();
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item button')[0].children[0].innerHTML).toEqual('Hii');
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item button')[1].children[0].innerHTML).toEqual('New Chart Button');
                toolbar.overflowMode = 'Popup';
                toolbar.dataBind();
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item button')[0].children[0].innerHTML).toEqual('Hii');
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item button')[1].children[0].innerHTML).toEqual('UnderlineBtn');
                expect(element.querySelectorAll('.e-hscroll').length).toEqual(0);
                expect(element.querySelectorAll('.e-popup').length).toEqual(1);
                toolbar.popupObj.show();
                element.style.width = '80px';
                toolbar.resize();
            });
            it('Resize with combined priority with multiple separator', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let separator: HTMLElement;
                toolbar = new Toolbar({
                    width: 200,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', text: 'New Chart Button',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', prefixIcon:'e-btn-icon', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button',text: 'PictureButton' , overflow: 'Show',
                        }
                    ],
                }, '#ej2Toolbar');
                let itemCollection : NodeList = element.querySelectorAll('.e-toolbar-items .e-toolbar-item');
                //expect(itemCollection.length).toEqual(5);
                element.style.width = '100px';
                toolbar.resize();
                itemCollection = element.querySelectorAll('.e-toolbar-items .e-toolbar-item');
                element.style.width = '250px';
                toolbar.resize();
            });
            it('Resize with combined priority with multiple separator', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let separator: HTMLElement;
                toolbar = new Toolbar({
                    width: 200,
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Separator'
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        }
                    ],
                }, '#ej2Toolbar');
                let itemCollection : NodeList = element.querySelectorAll('.e-toolbar-items .e-toolbar-item');
                //expect(itemCollection.length).toEqual(5);
                element.style.width = '100px';
                toolbar.resize();
                itemCollection = element.querySelectorAll('.e-toolbar-items .e-toolbar-item');
                element.style.width = '250px';
                toolbar.resize();
            });
        });

        describe('onproperty change popup', () => {
            let toolbar: Toolbar;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('onproperty change popup', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 50,
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(5);
                toolbar.overflowMode = 'Popup';
                toolbar.dataBind();
                expect(element.querySelectorAll('.e-hscroll').length).toEqual(0);
                expect(element.querySelectorAll('.e-popup').length).toEqual(1);
                toolbar.overflowMode = 'Scrollable';
                toolbar.dataBind();
                expect(element.querySelectorAll('.e-hscroll').length).toEqual(1);
                expect(element.querySelectorAll('.e-popup').length).toEqual(0);
            });
            it('onproperty change popup without hscroll Module', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(5);
                toolbar.overflowMode = 'Popup';
                toolbar.dataBind();
                expect(element.querySelectorAll('.e-hscroll').length).toEqual(0);
            });
            it('onproperty change popup with RTL', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 50,
                    enableRtl: true,
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(5);
                toolbar.overflowMode = 'Popup';
                toolbar.dataBind();
                expect(element.querySelectorAll('.e-hscroll').length).toEqual(0);
                expect(element.querySelectorAll('.e-popup').length).toEqual(1);
                expect(element.classList.contains('e-rtl')).toEqual(true);
            });
            it('onproperty change Scrollable', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 100, 
                    overflowMode : 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(1);
                toolbar.overflowMode = 'Scrollable';
                toolbar.dataBind();
                expect(element.querySelectorAll('.e-hscroll').length).toEqual(1);
                expect(element.querySelectorAll('.e-popup').length).toEqual(0);
            });
            it('onproperty change Scrollable with RTL', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 250,
                    enableRtl: true,
                    overflowMode : 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item button')[0].children[0].innerHTML).toEqual('Hii');
                expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item button')[1].children[0].innerHTML).toEqual('New Chart Button');
                toolbar.overflowMode = 'Scrollable';
                toolbar.dataBind();
                expect(element.querySelectorAll('.e-hscroll').length).toEqual(1);
                expect(element.querySelectorAll('.e-popup').length).toEqual(0);
            });
        });
        describe('Popup Priority Testing', () => {
            let toolbar: Toolbar;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Popup Priority Testing check', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    overflowMode: 'Popup',
                    width: 170,
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                expect(element.querySelectorAll('.e-popup .e-toolbar-item').length).toEqual(4);
                expect(element.querySelectorAll('.e-popup .e-toolbar-item button')[3].children[0].innerHTML).toEqual('Next_Prev_Btn');
            });
        });


        describe('RTL testing', () => {
            let toolbar: Toolbar;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('rtl class adding check', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 170,
                    enableRtl : true,
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                toolbar.dataBind();
                expect(element.classList.contains('e-rtl')).toEqual(true);
            });
            it('rtl class adding check with popup', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                let innerNavElement: HTMLElement = <HTMLElement>element.querySelector('.e-hor-nav');
                toolbar = new Toolbar({
                    overflowMode: 'Popup',
                    width: 170,
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                toolbar.enableRtl = true;
                toolbar.dataBind();
                expect(element.classList.contains('e-rtl')).toEqual(true);
            });
            it('rtl class adding check  with on property change ', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    overflowMode: 'Popup',
                    width: 170,
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                toolbar.enableRtl = true;
                toolbar.dataBind();
                expect(element.classList.contains('e-rtl')).toEqual(true);
            });
            it('rtl class adding check  with on proerty change ', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    overflowMode: 'Popup',
                    width: 170,
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                toolbar.enableRtl = true;
                toolbar.dataBind();
                expect(element.classList.contains('e-rtl')).toEqual(true);
                let innerNavElement: HTMLElement = <HTMLElement>element.querySelector('.e-hor-nav');
                innerNavElement.click();
                innerNavElement.click();
            });
            it('rtl class adding check  with on proerty change ', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');

                toolbar = new Toolbar({
                    overflowMode: 'Scrollable',
                    width: 170,
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                toolbar.enableRtl = true;
                toolbar.dataBind();
                expect(element.classList.contains('e-rtl')).toEqual(true);
                let innerNavElement: HTMLElement = <HTMLElement>element.querySelector('.e-hor-nav');
                innerNavElement.click();
                toolbar.enableRtl = false;
                toolbar.dataBind();
                expect(element.classList.contains('e-rtl')).toEqual(false);
            });
            it('rtl class adding check  with on proerty change ', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    overflowMode: 'Popup',
                    width: 170,
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                toolbar.enableRtl = true;
                toolbar.dataBind();
                expect(element.classList.contains('e-rtl')).toEqual(true);
                let innerNavElement: HTMLElement = <HTMLElement>element.querySelector('.e-hor-nav');
                innerNavElement.click();
                toolbar.enableRtl = false;
                toolbar.dataBind();
                expect(element.classList.contains('e-rtl')).toEqual(false);
                innerNavElement.click();
            });
        });
        describe('Aria attributes Testing', () => {
            let toolbar: Toolbar;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Toolbar root element aria testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    overflowMode: 'Popup',
                    items: [
                        {
                            type: 'Button', text: 'Hii', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'New Chart Button', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'UnderlineBtn', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'ChartButton', overflow: 'Show',
                        },
                        {
                            type: 'Button', text: 'Next_Prev_Btn', overflow: 'Hide',
                        }
                    ],
                }, '#ej2Toolbar');
                expect(element.getAttribute('aria-disabled')).toEqual('false');
                expect(element.getAttribute('aria-haspopup')).toEqual('false');
                expect(element.classList.contains('e-toolpop')).toEqual(false);
                expect(element.getAttribute('role')).toEqual('toolbar');
                expect(element.getAttribute('aria-orientation')).toEqual('horizontal');
                toolbar.width = 200;
                toolbar.dataBind();
                expect(element.getAttribute('aria-haspopup')).toEqual('true');
                expect(element.classList.contains('e-toolpop')).toEqual(true);
                toolbar.width = '1000px';
                toolbar.dataBind();
                expect(element.getAttribute('aria-haspopup')).toEqual('false');
                expect(element.classList.contains('e-toolpop')).toEqual(false);
            });
        });

        describe('Template Toolbar Testing with div', () => {
            let toolbar: Toolbar;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                document.body.innerHTML = '';
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                let innerEle: HTMLElement = createElement('div');
                let innerEle1: HTMLElement = createElement('div');
                let innerEle_1: HTMLElement = createElement('div', { className: 'e-toolbar-item' });
                let innerEle_: HTMLElement = createElement('div');
                innerEle.appendChild(innerEle_);
                innerEle.appendChild(innerEle_1);
                ele.appendChild(innerEle);
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Template Toolbar Testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({}, '#ej2Toolbar');
                expect(element.querySelectorAll('.e-toolbar-items').length === 1).toEqual(true);
                let innerEle = <HTMLElement>element.querySelector('.e-toolbar-items');
                expect((<HTMLElement>innerEle.children[0]).classList.contains('e-toolbar-item')).toEqual(true);
                expect((<HTMLElement>innerEle.children[1]).classList.contains('e-toolbar-item')).toEqual(true);
            });
        });

        describe('Template Toolbar Testing with span', () => {
            let toolbar: Toolbar;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                document.body.innerHTML = '';
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                let innerEle: HTMLElement = createElement('div');
                let innerEle1: HTMLElement = createElement('div');
                let innerEle_1: HTMLElement = createElement('div', { className: 'e-toolbar-item' });
                let innerEle_: HTMLElement = createElement('span');
                innerEle.appendChild(innerEle_);
                innerEle.appendChild(innerEle_1);
                ele.appendChild(innerEle);
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Template Toolbar Testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({}, '#ej2Toolbar');
                expect(element.querySelectorAll('.e-toolbar-items').length === 1).toEqual(true);
                let innerEle = <HTMLElement>element.querySelector('.e-toolbar-items');
                expect((<HTMLElement>innerEle.children[0]).classList.contains('e-toolbar-item')).toEqual(false);
                expect((<HTMLElement>innerEle.children[1]).classList.contains('e-toolbar-item')).toEqual(true);
            });
        });
    });

        describe('Cross Browser Testing with IE popup icon alignment', () => {
            let toolbar: any;
            let keyEventArgs: any;
            document.body.innerHTML = '';
            beforeEach((): void => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('Cross browser Testing with IE', () => {
                Browser.userAgent = ieUa;
                toolbar = new Toolbar({
                width: 70,
                overflowMode: "Popup",
                items: [
                    { type: 'Button', text: 'Underline', showTextOn: 'Toolbar' },
                    { type: 'Button', text: 'Bold' },
                    { type: 'Button', text: 'Italic' }
                ],
            }); toolbar.appendTo('#ej2Toolbar');
           let popupNav: HTMLElement = toolbar.element.querySelector('.e-hor-nav') as HTMLElement;
           expect (popupNav.classList.contains('e-ie-align')).toEqual(true);
            });
        });


        describe('Popup Open animation testing with animation', () => {
            let toolbar: any;
            let keyEventArgs: any;
            document.body.innerHTML = '';
            beforeEach((done: Function) => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 50,
                    overflowMode: 'Popup',
                    items: [
                        { type: 'Button', text: 'new', },
                        { type: 'Button', text: 'Underline Button', }]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'popupOpen',
                    target: toolbar.element.querySelector('.e-hor-nav'),
                };
                toolbar.keyActionHandler(keyEventArgs);
                setTimeout(() => { done(); }, 450);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('popup Open througth keyboard testing ', () => {
                expect (isVisible(toolbar.popupObj.element) ).toEqual(true);
                toolbar.popupObj.hide();
            });
        });
        describe('Popup Open animation  testing in keyboard in opened state with animation', () => {
            let toolbar: any;
            let keyEventArgs: any;
            document.body.innerHTML = '';
            beforeEach((done: Function) => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 50,
                    overflowMode: 'Popup',
                    items: [
                        { type: 'Button', text: 'new', },
                        { type: 'Button', text: 'Underline Button', }]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'popupOpen',
                    target: toolbar.element.querySelector('.e-hor-nav'),
                };
                toolbar.popupObj.element.style.display = 'none';
                toolbar.keyActionHandler(keyEventArgs);
                setTimeout(() => { done(); }, 450);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('popup Open througth keyboard testing ', () => {
                expect (isVisible(toolbar.popupObj.element) ).toEqual(true);
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'popupOpen',
                    target: toolbar.element.querySelector('.e-hor-nav'),
                };
                toolbar.popupObj.element.style.display = 'block';
                toolbar.keyActionHandler(keyEventArgs);
            });
        });
        describe('Popup Close animation testing with animation', () => {
            let toolbar: any;
            let keyEventArgs: any;
            document.body.innerHTML = '';
            beforeEach((done: Function) => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 50,
                    overflowMode: 'Popup',
                    items: [
                        { type: 'Button', text: 'new', },
                        { type: 'Button', text: 'Underline Button', }]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'popupClose',
                    target: toolbar.element,
                };
                toolbar.popupObj.element.style.display = 'block';
                toolbar.keyActionHandler(keyEventArgs);
                setTimeout(() => { done(); }, 450);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('popup close with througth keyboard testing with animation', () => {
                expect (isVisible(toolbar.popupObj.element) ).toEqual(false);
            });
        });
        describe('Popup Close animation testing with animation', () => {
            let toolbar: any;
            let keyEventArgs: any;
            document.body.innerHTML = '';
            beforeEach((done: Function) => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                toolbar = new Toolbar({
                    width: 50,
                    overflowMode: 'Popup',
                    items: [
                        { type: 'Button', text: 'new', },
                        { type: 'Button', text: 'Underline Button', }]
                });
                toolbar.appendTo('#ej2Toolbar');
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'popupClose',
                    target: toolbar.element,
                };
                toolbar.keyActionHandler(keyEventArgs);
                setTimeout(() => { done(); }, 450);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('popup close with througth keyboard testing without popup opened ', () => {
                expect (isVisible(toolbar.popupObj.element) ).toEqual(false);
            });
        });
        describe('Popup with more content overflow testing', () => {
            let toolbar: any;
            let keyEventArgs: any;
            document.body.innerHTML = '';
            beforeEach((done: Function) => {
                toolbar = undefined;
                let ele: HTMLElement = createElement('div', { id: 'ej2Toolbar' });
                setStyleAttribute(ele, { 'display': 'block', 'white-space': 'nowrap', 'position': 'relative' });
                ele.style.display = 'block';
                document.body.appendChild(ele);
                toolbar = new Toolbar({
                width: 20,
                overflowMode: 'Popup',
                items: [
                  {type: 'Button', text: 'Hii2',},{type: 'Button', text: 'Unterline22',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Hii',},   {type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Bold',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Bold',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Bold',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Bold',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Bold',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Bold',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Bold',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Bold',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Bold',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Bold',},{type: 'Button', text: 'Hii',},{type: 'Button', text: 'Unterline',},{type: 'Button', text: 'Bold',},
                    ],
                }); toolbar.appendTo('#ej2Toolbar');
                let popupNav: HTMLElement = toolbar.element.querySelector('.e-hor-nav') as HTMLElement;
                let win : any = window;
                win.innerHeight = 40;
                popupNav.click();
                setTimeout(() => { done(); }, 450);
            });
            afterEach((): void => {
                if (toolbar) {
                    toolbar.destroy();
                }
                document.body.innerHTML = '';
            });
            it('popup opened with content overflow testing', () => {
                let element: HTMLElement = document.getElementById('ej2Toolbar');
                expect(toolbar.popupObj.element.style.height === 'auto').toEqual(false);
                expect(toolbar.popupObj.element.style.maxHeight === '').toEqual(false);
            });
        });
});                