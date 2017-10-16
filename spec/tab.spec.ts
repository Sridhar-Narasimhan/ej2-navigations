/**
 * tab spec document
 */
import { Browser, createElement, closest, DomElements, L10n, Animation, isVisible } from '@syncfusion/ej2-base';
import { Tab } from '../src/tab/tab';
import { TabActionSettingsModel, TabAnimationSettingsModel } from '../src/tab/tab-model';
import { Toolbar } from '../src/toolbar/toolbar';
import '../node_modules/es6-promise/dist/es6-promise';

describe('Tab Control', () => {
    // DOM Element with Control Class testing
    describe('Root of tab element', () => {
        let tab: any;
        let ele: HTMLElement
        beforeEach((): void => {
            tab = undefined;
            ele = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Control class testing', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('e-tab')).toEqual(true);
            expect(element.classList.contains('e-control')).toEqual(true);
        });
        it('Template - Control and template class testing', () => {
            ele.innerHTML = '<div class="e-header"> </div> <div class="e-content"></div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('e-tab')).toEqual(true);
            expect(element.classList.contains('e-template')).toEqual(true);
        });
        it('Items - Toolbar child element testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" }
                ]
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(element.querySelector('.e-header').classList.contains('e-toolbar')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(1);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(1);
        });
        it('Template - Toolbar child element testing', () => {
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> </div> <div class="e-content"> <div> Content1 </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(element.querySelector('.e-header').classList.contains('e-toolbar')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(1);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(1);
        });
        it('Template - Without content element', () => {
            ele.innerHTML = '<div class="e-header"> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('.e-header').classList.contains('e-control')).toEqual(false);
            expect(element.querySelector('.e-header').classList.contains('e-toolbar')).toEqual(false);
        });
        it('Template - Without header element', () => {
            ele.innerHTML = '<div class="e-content"> <div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('.e-content div').classList.contains('e-item')).toEqual(false);
        });
    });
    describe('Tab default model value testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Main public property - Default model value testing', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.height).toEqual('auto');
            expect(tab.width).toEqual('100%');
            expect(tab.cssClass).toEqual('');
            expect(tab.selectedItem).toEqual(0);
            expect(tab.showCloseButton).toEqual(false);
            expect(tab.heightAdjustMode).toEqual('Content');
            expect(tab.enableRtl).toEqual(false);
            expect(tab.items).toEqual([]);
            expect(tab.headerPlacement).toEqual('Top');
            expect(tab.enablePersistence).toEqual(false);
            expect(tab.overflowMode).toEqual('Scrollable');
        });
        it('Tab items collection - default model value testing', () => {
            tab = new Tab({
                items: [{}]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.items[0].header instanceof Object).toEqual(true);
            expect(tab.items[0].content).toEqual('');
            expect(tab.items[0].cssClass).toEqual('');
            expect(tab.items[0].disabled).toEqual(false);
        });
        it('TabItemHeader object - default model value testing', () => {
            tab = new Tab({ 
                items: [{}]
             });
            tab.appendTo('#ej2Tab');
            expect(tab.items[0].header.text).toEqual('');
            expect(tab.items[0].header.iconCss).toEqual('');
            expect(tab.items[0].header.iconPosition).toEqual('left');
        });
    });
    describe('Dynamic model value testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Model value testing', () => {
            tab = new Tab({
                width: '300px',
                height: '250px',
                selectedItem: 2,
                cssClass: 'e-test e-test2',
                heightAdjustMode: 'Auto',
                enableRtl: true,
                showCloseButton: true,
                enablePersistence: false,
                overflowMode: 'Popup',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.width).toEqual('300px');
            expect(tab.height).toEqual('250px');
            expect(tab.selectedItem).toEqual(2);
            expect(tab.cssClass).toEqual('e-test e-test2');
            expect(tab.heightAdjustMode).toEqual('Auto');
            expect(tab.cssClass).toContain('e-test2');
            expect(tab.cssClass).toContain('e-test');
            expect(tab.showCloseButton).toEqual(true);
            expect(tab.enableRtl).toEqual(true);
            expect(tab.enablePersistence).toEqual(false);
            expect(tab.overflowMode).toEqual('Popup');
        });
        it('Base property animation with models', () => {
            let prevSetting: TabActionSettingsModel = {
                effect: 'FadeIn',
                duration: 500,
                easing: 'ease'
            }
            let nextSetting: TabActionSettingsModel = {
                effect: 'FadeOut',
                duration: 500,
                easing: 'ease'
            }
            let anima: TabAnimationSettingsModel = {
                previous: prevSetting,
                next: nextSetting
            }
            tab = new Tab({
                width: '300px',
                height: '250px',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" }
                ],
                animation: anima
            }, '#ej2Tab');
            expect(tab.width).toEqual('300px');
            expect(tab.animation.previous.effect).toEqual('FadeIn');
            expect(tab.animation.next.effect).toEqual('FadeOut');
        });
        it('Animation default value assign testing', () => {
            tab = new Tab({
                width: '300px',
                height: '250px',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" }
                ],
                animation: {
                    previous: { effect: 'SlideLeftIn', duration: 400, easing: 'ease' },
                    next: { effect: 'SlideRightIn', duration: 400, easing: 'ease' }
                }
            }, '#ej2Tab');
            expect(tab.width).toEqual('300px');
            expect(tab.animation.previous.effect).toEqual('SlideLeftIn');
            expect(tab.animation.next.effect).toEqual('SlideRightIn');
        });
        it('Animation model value testing', () => {
            tab = new Tab({
                width: '300px',
                height: '250px',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" }
                ],
                animation: {
                    previous: { effect: 'None', duration: 400, easing: 'ease' },
                    next: { effect: 'FadeOut', duration: 400, easing: 'ease' }
                }
            }, '#ej2Tab');
            expect(tab.width).toEqual('300px');
            expect(tab.animation.previous.effect).toEqual('None');
            expect(tab.animation.next.effect).toEqual('FadeOut');
        });
        it('Tab items collection - New model value testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1", "iconCss": "e-icon", "iconPosition": "right" }, content: "Content1", cssClass: "tabCssClass" }
                ]
             });
            tab.appendTo('#ej2Tab');
            expect(tab.items[0].content).toEqual('Content1');
            expect(tab.items[0].cssClass).toEqual('tabCssClass');
            expect(tab.items[0].header instanceof Object).toEqual(true);
            expect(tab.items[0].header.text).toEqual('item1');
            expect(tab.items[0].header.iconCss).toEqual('e-icon');
            expect(tab.items[0].header.iconPosition).toEqual('right');
        });
    });
    describe('Width property testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Width value as number', () => {
            tab = new Tab({
                width: 500
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).toEqual('500px');
        });
        it('Width value as string', () => {
            tab = new Tab({
                width: '500px'
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).toEqual('500px');
        });
        it('Width value with %', () => {
            tab = new Tab({
                width: '40%'
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).toEqual('40%');
        });
        it('Width value as auto', () => {
            tab = new Tab({
                width: 'auto'
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).toEqual('auto');
        });
        it('Width value as negative 0', () => {
            tab = new Tab({
                width: -0
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).not.toEqual("-300px");
            expect(element.style.width).toEqual("0px");
        });
        it('Width value as negative number', () => {
            tab = new Tab({
                width: -300
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).not.toEqual("-300px");
            expect(element.style.width).not.toEqual("300px");
        });
        it('Width value as negative string', () => {
            tab = new Tab({
                width: '-300px'
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).not.toEqual("-300px");
            expect(element.style.width).not.toEqual("300px");
        });
        it('Width value as negative percentage', () => {
            tab = new Tab({
                width: '-20%'
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).not.toEqual("-20%");
        });
        it('onPropertyChange - Width value as number', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.width = 500;
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).toEqual('500px');
        });
        it('onPropertyChange - Width value as string', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.width = '500px';
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).toEqual('500px');
        });
        it('onPropertyChange - Width value as %', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.width = '40%';
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).toEqual('40%');
        });
        it('onPropertyChange - Width value as auto', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.width = 'auto';
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).toEqual('auto');
        });
        it('onPropertyChange - Width value as negative number', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.width = -300;
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).not.toEqual("-300px");
            expect(element.style.width).not.toEqual("300px");
        });
        it('onPropertyChange - Width value as negative 0', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.width = -0;
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).not.toEqual("-300px");
            expect(element.style.width).toEqual("0px");
        });
        it('onPropertyChange - Width value as negative number', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.width = '-300px';
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).not.toEqual("-300px");
            expect(element.style.width).not.toEqual("300px");
        });
        it('onPropertyChange - Width value as negative percentage', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.width = '-20%';
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.width).not.toEqual("-20%");
        });
    });
    describe('Height property testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Height value as number', () => {
            tab = new Tab({
                height: 300
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).toEqual('300px');
        });
        it('Height value as string', () => {
            tab = new Tab({
                height: '300px'
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).toEqual('300px');
        });
        it('Height value as %', () => {
            tab = new Tab({
                height: '20%'
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).toEqual('20%');
        });
        it('Height value as auto', () => {
            tab = new Tab({
                height: 'auto'
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).toEqual('auto');
        });
        it('Height value as negative number', () => {
            tab = new Tab({
                height: -300
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).not.toEqual("-300px");
            expect(element.style.height).not.toEqual("300px");
        });
        it('Height value as negative 0', () => {
            tab = new Tab({
                height: -0
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).not.toEqual("-300px");
            expect(element.style.height).toEqual("0px");
        });
        it('Height value as negative pixel', () => {
            tab = new Tab({
                height: '-300px'
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).not.toEqual("-300px");
            expect(element.style.height).not.toEqual("300px");
        });
        it('Height value as negative percentage', () => {
            tab = new Tab({
                height: '-20%'
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).not.toEqual("-20%");
        });
        it('onPropertyChanged - Height value as number', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.height = 300;
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).toEqual('300px');
        });
        it('onPropertyChanged - Height value as string', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.height = '300px';
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).toEqual('300px');
        });
        it('onPropertyChanged - Height value as %', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.height = '20%';
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).toEqual('20%');
        });
        it('onPropertyChanged - Height value as auto', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.height = 'auto';
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).toEqual('auto');
        });
        it('onPropertyChanged - Height value as negative number', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.height = -300;
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).not.toEqual("-300px");
            expect(element.style.height).not.toEqual("300px");
        });
        it('onPropertyChanged - Height value as negative number', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.height = -0;
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).not.toEqual("-300px");
            expect(element.style.height).toEqual("0px");
        });
        it('onPropertyChanged - Height value as negative pixel', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.height = '-300px';
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).not.toEqual("-300px");
            expect(element.style.height).not.toEqual("300px");
        });
        it('onPropertyChanged - Height value as negative percentage', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.height = '-20%';
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.style.height).not.toEqual("-20%");
        });
    });
    describe('Items property testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Tab items count testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Items - Tab items with iconCSS testing', () => {
            tab = new Tab({
                items: [
                    { header: { "iconCss": "e-bold" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Items - tab items onPropertyChanged with count testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            let newItems: object[] = [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content" }
                ];
            tab.items = newItems;
            tab.dataBind();
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
    });
    describe('Disabled toolbar item property testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Disabled class availability testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2", disabled: true }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(true);
        });
    });
    describe('overflowMode property testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Default mode value testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.overflowMode).toEqual('Scrollable');
        });
        it('Popup mode - Model value testing', () => {
            tab = new Tab({
                overflowMode: 'Popup',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.overflowMode).toEqual('Popup');
        });
        it('Scrollable mode - Model value testing', () => {
            tab = new Tab({
                overflowMode: 'Scrollable',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.overflowMode).toEqual('Scrollable');
        });
        it('onPropertyChanged to overflowMode model value testing for popup', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.overflowMode).toEqual('Scrollable');
            tab.overflowMode = 'Popup';
            tab.dataBind();
            expect(tab.overflowMode).toEqual('Popup');
        });
        it('onPropertyChanged to overflowMode model value testing for scrollable', () => {
            tab = new Tab({
                overflowMode: 'Popup',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.overflowMode).toEqual('Popup');
            tab.overflowMode = 'Scrollable';
            tab.dataBind();
            expect(tab.overflowMode).toEqual('Scrollable');
        });
    });
    describe('heightAdjustMode Property testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            let div: HTMLElement = createElement('div', { id: 'test' })
            document.body.appendChild(ele);
            document.body.appendChild(div);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Initial rendering value set as Auto', () => {
            tab = new Tab({
                heightAdjustMode: 'Auto',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.heightAdjustMode).toEqual('Auto');
        });
        it('Items - Initial rendering value set as Content', () => {
            tab = new Tab({
                heightAdjustMode: 'Content',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.heightAdjustMode).toEqual('Content');
        });
        it('Items - Initial rendering value set as Fill', () => {
            tab = new Tab({
                heightAdjustMode: 'Fill',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.heightAdjustMode).toEqual('Fill');
        });
        it('Items - Initial rendering value set as None', () => {
            tab = new Tab({
                heightAdjustMode: 'None',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.heightAdjustMode).toEqual('None');
        });
        it('Items - Initial rendering value set as None with height value', () => {
            tab = new Tab({
                heightAdjustMode: 'None',
                height: 200,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let ele: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.heightAdjustMode).toEqual('None');
            expect(tab.height).toEqual(200);
            expect(ele.querySelector('.e-content').scrollHeight).toBeLessThan(ele.offsetHeight);
        });
        it('Items - HTMLElement passing as content', () => {
            let test: HTMLElement = <HTMLElement> document.querySelector('#test');
            tab = new Tab({
                heightAdjustMode: 'Auto',
                items: [
                    { header: { "text": "item1" }, content: test },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let ele: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.heightAdjustMode).toEqual('Auto');
        });
        it('Items - onPropertyChanged value set as Auto', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            tab.heightAdjustMode = 'Auto';
            tab.dataBind();
            expect(tab.heightAdjustMode).toEqual('Auto');
        });
        it('Items - onPropertyChanged value set as Content', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            tab.heightAdjustMode = 'Content';
            tab.dataBind();
            expect(tab.heightAdjustMode).toEqual('Content');
        });
        it('Items - onPropertyChanged value set as Fill', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            tab.heightAdjustMode = 'Fill';
            tab.dataBind();
            expect(tab.heightAdjustMode).toEqual('Fill');
        });
        it('Items - onPropertyChanged value set as None', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            tab.heightAdjustMode = 'None';
            tab.dataBind();
            expect(tab.heightAdjustMode).toEqual('None');
        });
        it('Items - onPropertyChanged value set as None with height value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let ele: HTMLElement = document.getElementById('ej2Tab');
            tab.heightAdjustMode = 'None';
            tab.height = 200;
            tab.dataBind();
            expect(tab.heightAdjustMode).toEqual('None');
            expect(tab.height).toEqual(200);
            expect(ele.querySelector('.e-content').scrollHeight).toBeLessThan(ele.offsetHeight);
        });
        it('Template - Initial rendering value set as Auto', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                heightAdjustMode: 'Auto'
            });
            tab.appendTo('#ej2Tab');
            expect(tab.heightAdjustMode).toEqual('Auto');
        });
        it('Template - Initial rendering value set as Content', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                heightAdjustMode: 'Content'
            });
            tab.appendTo('#ej2Tab');
            expect(tab.heightAdjustMode).toEqual('Content');
        });
        it('Template - Initial rendering value set as Fill', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                heightAdjustMode: 'Fill'
            });
            tab.appendTo('#ej2Tab');
            expect(tab.heightAdjustMode).toEqual('Fill');
        });
        it('Template - Initial rendering value set as None', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                heightAdjustMode: 'None'
            });
            tab.appendTo('#ej2Tab');
            expect(tab.heightAdjustMode).toEqual('None');
        });
        it('Template - Initial rendering value set as None with height value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                heightAdjustMode: 'None',
                height: 200
            });
            tab.appendTo('#ej2Tab');
            expect(tab.heightAdjustMode).toEqual('None');
            expect(tab.height).toEqual(200);
            expect(ele.querySelector('.e-content').scrollHeight).toBeLessThan(ele.offsetHeight);
        });
        it('Template - onPropertyChanged value set as Auto', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.heightAdjustMode = 'Auto';
            tab.dataBind();
            expect(tab.heightAdjustMode).toEqual('Auto');
        });
        it('Template - onPropertyChanged value set as Content', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.heightAdjustMode = 'Content';
            tab.dataBind();
            expect(tab.heightAdjustMode).toEqual('Content');
        });
        it('Template - onPropertyChanged value set as Fill', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.heightAdjustMode = 'Fill';
            tab.dataBind();
            expect(tab.heightAdjustMode).toEqual('Fill');
        });
        it('Template - onPropertyChanged value set as None', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.heightAdjustMode = 'None';
            tab.dataBind();
            expect(tab.heightAdjustMode).toEqual('None');
        });
        it('Template - Initial rendering value set as None with height value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.heightAdjustMode = 'None';
            tab.height = 200;
            tab.dataBind();
            expect(tab.heightAdjustMode).toEqual('None');
            expect(tab.height).toEqual(200);
            expect(ele.querySelector('.e-content').scrollHeight).toBeLessThan(ele.offsetHeight);
        });
    });
    describe('Header item and content count testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Equal header and content', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" }
                ]   
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(3);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(1);
        });
        it('Items - Three header and two content', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" } }
                ]   
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(3);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(1);
        });
        it('Items - Three header and no content', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" } },
                    { header: { "text": "item2" } },
                    { header: { "text": "item3" } }
                ]   
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(3);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(1);
        });
        it('Items - Two header and three content', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { content: "Content3" }
                ]   
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(2);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(1);
        });
        it('Items - No header and three content', () => {
            tab = new Tab({
                items: [
                    { content: "Content1" },
                    { content: "Content2" },
                    { content: "Content3" }
                ]   
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(0);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(0);
        });
        it('Items - Empty objects', () => {
            tab = new Tab({
                items: [ { }, { }, { } ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(0);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(0);
        });
        it('Items - Empty array', () => {
            tab = new Tab({
                items: []
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(0);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(0);
        });
        it('Items - Text With HTMLElement', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let txtEle: HTMLElement = createElement('div', { id: 'testEle' });
            tab = new Tab({
                items: [
                    { header: { "text": txtEle }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]   
            });
            tab.appendTo('#ej2Tab');
            expect(element.querySelector('.e-header .e-toolbar-item.e-active .e-tab-text > div').id).toEqual('testEle');
        });
        it('Template - Equal header and content', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> <div> item3 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <div> <h1>Content3</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(3);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(3);
        });
        it('Template - Three header and two content', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> <div> item3 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(3);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(2);
        });
        it('Template - Three header and no content', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> <div> item3 </div> </div>'
                + '<div class="e-content"> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(3);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(0);
        });
        it('Template - Two header and three content', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <div> <h1>Content3</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(2);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(2);
        });
        it('Template - No header and three content', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <div> <h1>Content3</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(0);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(0);
        });
        it('Template - Empty value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div>  </div> <div>  </div> <div>  </div> </div>'
                + '<div class="e-content"> <div></div> <div> </div> <div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(3);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(3);
        });
        it('Template - Empty child', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header">  </div>'
                + '<div class="e-content"> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-toolbar-item').length).toEqual(0);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(0);
        });
    });
    describe('Main property - cssClass property testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('cssClass property with single class', () => {
            tab = new Tab({
                cssClass: 'tab1'
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('tab1')).toEqual(true);
        });
        it('cssClass property with multiple class', () => {
            tab = new Tab({
                cssClass: 'tab1 root'
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('tab1')).toEqual(true);
            expect(element.classList.contains('root')).toEqual(true);
        });
        it('onPropertyChange with single class passing in cssClass property', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.cssClass = "tab1";
            tab.dataBind();
            expect(tab.cssClass).toEqual('tab1');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('tab1')).toEqual(true);
        });
        it('onPropertyChange with multiple class passing in cssClass property', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            tab.cssClass = "tab1 root";
            tab.dataBind();
            expect(tab.cssClass).toEqual('tab1 root');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('tab1')).toEqual(true);
            expect(element.classList.contains('root')).toEqual(true);
        });
    });
    describe('Main property headerPlacement testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - headerPlacement property with default value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" }
                ]
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(tab.headerPlacement).toEqual('Top');
        });
        it('Items - headerPlacement property as bottom', () => {
            tab = new Tab({
                headerPlacement: 'Bottom',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.item(1).classList.contains('e-header')).toEqual(true);
            expect(tab.headerPlacement).toEqual('Bottom');
        });
        it('Items - headerPlacement property with onPropertyChanged testing', () => {
            tab = new Tab({
                headerPlacement: 'Top',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(tab.headerPlacement).toEqual('Top');
            tab.headerPlacement = 'Bottom';
            tab.dataBind();
            expect(tab.headerPlacement).toEqual('Bottom');
            expect(element.querySelectorAll('.e-header').length).toEqual(1);
            expect(element.children.item(1).classList.contains('e-header')).toEqual(true);
            tab.headerPlacement = 'Top';
            tab.dataBind();
            expect(tab.headerPlacement).toEqual('Top');
            expect(element.querySelectorAll('.e-header').length).toEqual(1);
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
        });
        it('Items - headerPlacement onPropertyChanged with model value testing', () => {
            tab = new Tab({
                selectedItem: 1,
                headerPlacement: 'Top',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(tab.headerPlacement).toEqual('Top');
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            tab.headerPlacement = 'Bottom';
            tab.dataBind();
            expect(tab.headerPlacement).toEqual('Bottom');
            expect(element.querySelectorAll('.e-header').length).toEqual(1);
            expect(element.children.item(1).classList.contains('e-header')).toEqual(true);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Items - headerPlacement with toolbar render testing', () => {
            tab = new Tab({
                headerPlacement: 'Top',
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(element.children.item(0).classList.contains('e-toolbar')).toEqual(true);
            expect(tab.headerPlacement).toEqual('Top');
            tab.headerPlacement = 'Bottom';
            tab.dataBind();
            expect(tab.headerPlacement).toEqual('Bottom');
            expect(element.querySelectorAll('.e-header').length).toEqual(1);
            expect(element.children.item(1).classList.contains('e-header')).toEqual(true);
            expect(element.children.item(1).classList.contains('e-toolbar')).toEqual(true);
        });
        it('Template - headerPlacement property with default value', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            element.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(tab.headerPlacement).toEqual('Top');
        });
        it('Template - headerPlacement property as bottom', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div> <div class="e-header"> <div> item1 </div>'
                '<div> item2 </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.item(1).classList.contains('e-header')).toEqual(true);
            expect(tab.headerPlacement).toEqual('Bottom');
        });
        it('Template - headerPlacement property with onPropertyChanged', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(tab.headerPlacement).toEqual('Top');
            tab.headerPlacement = 'Bottom';
            tab.dataBind();
            expect(tab.headerPlacement).toEqual('Bottom');
            expect(element.querySelectorAll('.e-header').length).toEqual(1);
            expect(element.children.item(1).classList.contains('e-header')).toEqual(true);
        });
        it('Template - onPropertyChanged with headerPlacement model value testing', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(tab.headerPlacement).toEqual('Top');
            tab.select(1);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            tab.headerPlacement = 'Bottom';
            tab.dataBind();
            expect(tab.headerPlacement).toEqual('Bottom');
            expect(element.querySelectorAll('.e-header').length).toEqual(1);
            expect(element.children.item(1).classList.contains('e-header')).toEqual(true);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Template - headerPlacement with toolbar render testing', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(element.children.item(0).classList.contains('e-toolbar')).toEqual(true);
            expect(tab.headerPlacement).toEqual('Top');
            tab.headerPlacement = 'Bottom';
            tab.dataBind();
            expect(tab.headerPlacement).toEqual('Bottom');
            expect(element.querySelectorAll('.e-header').length).toEqual(1);
            expect(element.children.item(1).classList.contains('e-header')).toEqual(true);
            expect(element.children.item(1).classList.contains('e-toolbar')).toEqual(true);
        });
    });
    describe('enableRTL property testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Default model value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.enableRtl).toEqual(false);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('e-rtl')).toEqual(false);
            expect(element.querySelector('.e-header').classList.contains('e-rtl')).toEqual(false);
        });
        it('Items - enableRTL at initial rendering', () => {
            tab = new Tab({
                enableRtl: true,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.enableRtl).toEqual(true);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('e-rtl')).toEqual(true);
            expect(element.querySelector('.e-header').classList.contains('e-rtl')).toEqual(true);
        });
        it('Items - onPropertyChanged with enableRTL', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.enableRtl).toEqual(false);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('e-rtl')).toEqual(false);
            expect(element.querySelector('.e-header').classList.contains('e-rtl')).toEqual(false);
            tab.enableRtl = true;
            tab.dataBind();
            expect(tab.enableRtl).toEqual(true);
            expect(element.classList.contains('e-rtl')).toEqual(true);
            expect(element.querySelector('.e-header').classList.contains('e-rtl')).toEqual(true);
            tab.enableRtl = false;
            tab.dataBind();
            expect(tab.enableRtl).toEqual(false);
            expect(element.classList.contains('e-rtl')).toEqual(false);
            expect(element.querySelector('.e-header').classList.contains('e-rtl')).toEqual(false);
        });
        it('Template - Default model value', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            element.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.enableRtl).toEqual(false);
            expect(element.classList.contains('e-rtl')).toEqual(false);
            expect(element.querySelector('.e-header').classList.contains('e-rtl')).toEqual(false);
        });
        it('Template - EnableRTL at initial rendering', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            element.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                enableRtl: true
            });
            tab.appendTo('#ej2Tab');
            expect(tab.enableRtl).toEqual(true);
            expect(element.classList.contains('e-rtl')).toEqual(true);
            expect(element.querySelector('.e-header').classList.contains('e-rtl')).toEqual(true);
        });

        it('Template - onPropertyChanged with enableRTL', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            element.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.enableRtl).toEqual(false);
            expect(element.classList.contains('e-rtl')).toEqual(false);
            expect(element.querySelector('.e-header').classList.contains('e-rtl')).toEqual(false);
            tab.enableRtl = true;
            tab.dataBind();
            expect(tab.enableRtl).toEqual(true);
            expect(element.classList.contains('e-rtl')).toEqual(true);
            expect(element.querySelector('.e-header').classList.contains('e-rtl')).toEqual(true);
            tab.enableRtl = false;
            tab.dataBind();
            expect(tab.enableRtl).toEqual(false);
            expect(element.classList.contains('e-rtl')).toEqual(false);
            expect(element.querySelector('.e-header').classList.contains('e-rtl')).toEqual(false);
        });
    });
    describe('showCloseButton property testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Close icon availability checking', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.showCloseButton).toEqual(false);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-icons.e-close-icon').length == 2).toEqual(true);
        });
        it('Items - Default model value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.showCloseButton).toEqual(false);
            let element: HTMLElement = document.getElementById('ej2Tab');
        });
        it('Items - enable a showCloseButton at initial rendering', () => {
            tab = new Tab({
                showCloseButton: true,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.showCloseButton).toEqual(true);
            let element: HTMLElement = document.getElementById('ej2Tab');
        });
        it('Items - onPropertyChanged with showCloseButton property testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.showCloseButton).toEqual(false);
            tab.showCloseButton = true;
            tab.dataBind();
            expect(tab.showCloseButton).toEqual(true);
            tab.showCloseButton = false;
            tab.dataBind();
            expect(tab.showCloseButton).toEqual(false);
        });
        it('Items - Click event testing with close button', () => {
            tab = new Tab({
                showCloseButton: true,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.showCloseButton).toEqual(true);
            let element: HTMLElement = document.getElementById('ej2Tab');
            let target: HTMLElement = <HTMLElement> element.querySelectorAll('.e-toolbar-item .e-close-icon')[0];
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            target.click();
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(1);
        });
        it('Template - Close button availability checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            element.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.showCloseButton).toEqual(false);
            expect(element.querySelectorAll('.e-header .e-icons.e-close-icon').length == 2).toEqual(true);
        });
        it('Template - Default model value', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            element.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.showCloseButton).toEqual(false);
        });
        it('Template - enable a showCloseButton at initial rendering', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            element.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                showCloseButton: true
            });
            tab.appendTo('#ej2Tab');
            expect(tab.showCloseButton).toEqual(true);
        });
        it('Template - onPropertyChanged with showCloseButton property testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            element.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.showCloseButton).toEqual(false);
            tab.showCloseButton = true;
            tab.dataBind();
            expect(tab.showCloseButton).toEqual(true);
            tab.showCloseButton = false;
            tab.dataBind();
            expect(tab.showCloseButton).toEqual(false);
        });
        it('Template - Click event testing with close button', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            element.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                showCloseButton: true
            });
            tab.appendTo('#ej2Tab');
            expect(tab.showCloseButton).toEqual(true);
            let target: HTMLElement = <HTMLElement> element.querySelectorAll('.e-toolbar-item .e-close-icon')[0];
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            target.click();
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(1);
        });
    });
    describe('Main property selectedItem testing', () => {
        let tab: Tab;
        let tbEle: HTMLElement
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            tbEle = createElement('div', { id: 'toolbar' });
            document.body.appendChild(ele);
            document.body.appendChild(tbEle);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Element render to content', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: tbEle },
                    { header: { "text": "item1" }, content: <HTMLElement>document.querySelector('#toolbar') },
                    { header: { "text": "item2" }, content: '<div id ="e-itemTemplate" tabindex="0" >Hi</div>' },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(false);
        });
        it('Items - selectedItem with default value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(false);
        });
        it('Items - selectedItem as 1', () => {
            tab = new Tab({
                selectedItem: 1,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(1);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Items - selectedItem as existed value', () => {
            tab = new Tab({
                selectedItem: 1,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(tab.selectedItem).toEqual(1);
            tab.selectedItem = 3;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Items - selectedItem as negative value', () => {
            tab = new Tab({
                selectedItem: -1,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Items - selectedItem as NaN value', () => {
            tab = new Tab({
                selectedItem: NaN,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Items - onPropertyChanged with selectedItem as 1', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            tab.selectedItem = 1;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(1);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Items - onPropertyChanged with selectedItem with existed value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(tab.selectedItem).toEqual(0);
            tab.selectedItem = 3;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Items - onPropertyChanged with selectedItem as negative value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            tab.selectedItem = -1;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Items - onPropertyChanged with selectedItem as NaN value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            tab.selectedItem = NaN;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Items - onPropertyChanged with selectedItem as same value', () => {
            tab = new Tab({
                selectedItem: 1,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(1);
            tab.selectedItem = 1;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(1);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Items - selectedItem value check using select method with HTMLElement', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1", "iconCss": "e-icon", "iconPosition": "right" }, content: "Content1", cssClass: "tabCssClass" },
                    { header: { "text": "item2", "iconCss": "e-icon", "iconPosition": "right" }, content: "Content2", cssClass: "tabCssClass" }
                ]
             });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(tab.element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.select(<HTMLElement> document.querySelectorAll('.e-toolbar-item').item(1));
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Items - selectedItem property using select method with invalid HTMLElement', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1", "iconCss": "e-icon", "iconPosition": "right" }, content: "Content1", cssClass: "tabCssClass" },
                    { header: { "text": "item2", "iconCss": "e-icon", "iconPosition": "right" }, content: "Content2", cssClass: "tabCssClass" }
                ]
             });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(tab.element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.select(<HTMLElement> document.querySelector('.e-toolbar-items'));
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Template - selectedItem with default value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(false);
        });
        it('Template - selectedItem as 1', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                selectedItem: 1
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(1);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Template - selectedItem with existed value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                selectedItem: 1
            });
            tab.appendTo('#ej2Tab');
            expect(tab.element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(tab.selectedItem).toEqual(1);
            tab.selectedItem = 3;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Template - selectedItem as negative value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                selectedItem: -1
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Template - selectedItem as NaN value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                selectedItem: NaN
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Template - onPropertyChanged as 1', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            tab.selectedItem = 1;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(1);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Template - onPropertyChanged with selectedItem as same value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                selectedItem: 1
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(1);
            tab.selectedItem = 1;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(1);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Template - onPropertyChanged with selectedItem as existed value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(tab.selectedItem).toEqual(0);
            tab.selectedItem = 3;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Template - onPropertyChanged with selectedItem as negative value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            tab.selectedItem = -1;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Template - onPropertyChanged with selectedItem as NaN value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            tab.selectedItem = NaN;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Template - selectedItem value check using select method with HTMLElement', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(tab.element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.select(<HTMLElement> document.querySelectorAll('.e-toolbar-item').item(1));
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Template - selectedItem value check using select method with invalid HTMLElement', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(tab.element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.select(<HTMLElement> document.querySelector('.e-toolbar-items'));
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(false);
        });
    });
    describe('enableTab method testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - enableTab as false', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(1, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(true);
        });
        it('Items - enableTab as true', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(1, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(true);
            tab.enableTab(1, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
        it('Items - enableTab as false to active item', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(0, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(true);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Items - enableTab as false with unknown index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(2, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
        it('Items - enableTab as true with unknown index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(2, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(2, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
        it('Items - enableTab as false with negative index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(-1, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
        it('Items - enableTab as true with negative index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(-1, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(-1, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
        it('Items - enableTab as false with NaN index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(NaN, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
        it('Items - enableTab as true with NaN index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(NaN, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(NaN, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
        it('Template - enableTab as false', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(1, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(true);
        });
        it('Template - enableTab as true', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(1, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(true);
            tab.enableTab(1, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
        it('Template - enableTab as false to active item', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(0, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(true);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Template - enableTab as false with unknown index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(2, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
        it('Template - enableTab as true with unknown index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(2, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(2, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
        it('Template - enableTab as false with negative index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(-1, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
        it('Template - enableTab as true with negative index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(-1, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(-1, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
        it('Template - enableTab as false with NaN index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(NaN, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
        it('Template - enableTab as true with NaN index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(NaN, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.enableTab(NaN, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-disable')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
        });
    });
    describe('addTab method testing', () => {
        let tab: Tab;
        let newItems: object[];
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
            newItems = [
                { header: { "text": "item1" }, content: "Content1" },
                { header: { "text": "item2" }, content: "Content2" }
            ];
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - New index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.addTab(newItems, 1);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(4);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).id).toEqual('e-item_2');
            expect(element.querySelectorAll('.e-toolbar-item').item(2).id).toEqual('e-item_3');
            expect(element.querySelectorAll('.e-toolbar-item').item(3).id).toEqual('e-item_1');
        });
        it('Items - Unknown index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.addTab(newItems, 2);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Items - Without index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.addTab(newItems);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(4);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).id).toEqual('e-item_2');
            expect(element.querySelectorAll('.e-toolbar-item').item(2).id).toEqual('e-item_3');
        });
        it('Items - Negative index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.addTab(newItems, -1);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Items - NaN index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.addTab(newItems, NaN);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Items - Passing empty array', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.addTab([], 1);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Items - Active Index testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.addTab(newItems, 0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(4);
        });
        it('Template - New index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.addTab(newItems, 1);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Template - Unknown index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.addTab(newItems, 2);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Template - Negative index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.addTab(newItems, -1);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Template - NaN index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.addTab(newItems, NaN);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Template - Empty array', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.addTab([], 1);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Template - Active Index testing', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.addTab(newItems, 0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
    });
    describe('removeTab method testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Specified value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.removeTab(1);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(1);
        });
        it('Items - Animation with removeTab', () => {
            tab = new Tab({
                selectedItem: 2,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" },
                    { header: { "text": "item4" }, content: "Content4" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(4);
            tab.selectedItem = 3;
            tab.dataBind();
            tab.removeTab(3);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(3);
        });
        it('Items - Animation with removeTab test', () => {
            tab = new Tab({
                selectedItem: 3,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" },
                    { header: { "text": "item4" }, content: "Content4" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(4);
            tab.removeTab(3);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(3);
            tab.removeTab(0);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Items - Active item remove testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.removeTab(0);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(1);
        });
        it('Items - Unknown value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.removeTab(2);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Items - Negative value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.removeTab(-1);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Items - NaN value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.removeTab(NaN);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Items - Removing all item', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.removeTab(1);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(1);
            tab.removeTab(0);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(0);
            expect(element.querySelectorAll('.e-content .e-item').length).toEqual(0);
        });
        it('Items - Active class state ensuring', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" },
                    { header: { "text": "item4" }, content: "Content4" },
                    { header: { "text": "item5" }, content: "Content5" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(2);
            expect(tab.selectedItem).toEqual(2);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(true);
            tab.removeTab(2);
            expect(tab.selectedItem).toEqual(2);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).id).toEqual('e-item_3');
            tab.select(3);
            expect(tab.selectedItem).toEqual(3);
            expect(element.querySelectorAll('.e-toolbar-item').item(3).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(3).id).toEqual('e-item_4');
            tab.removeTab(3);
            expect(tab.selectedItem).toEqual(2);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).id).toEqual('e-item_3');
            tab.select(0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).id).toEqual('e-item_0');
            tab.removeTab(0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).id).toEqual('e-item_1');
        });
        it('Template - Specified value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.removeTab(1);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(1);
        });
        it('Template - Unknown value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.removeTab(2);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Template - Negative value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.removeTab(-1);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Template - NaN value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
            tab.removeTab(NaN);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(2);
        });
        it('Template - Active class state ensuring', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> <div> item3 </div>'
            + '<div> item4 </div> <div> item5 </div> </div> <div class="e-content"> <div> <div> <h1>Content1</h1>'
            + '<p> text</p> </div> </div> <div> <div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <div>'
            + '<h1>Content3</h1> <p> text</p> </div> </div> <div> <div> <h1>Content4</h1> <p> text</p> </div> </div>'
            + '<div> <div> <h1>Content1</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(2);
            expect(tab.selectedItem).toEqual(2);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(true);
            tab.removeTab(2);
            expect(tab.selectedItem).toEqual(2);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).id).toEqual('e-item_3');
            tab.select(3);
            expect(tab.selectedItem).toEqual(3);
            expect(element.querySelectorAll('.e-toolbar-item').item(3).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(3).id).toEqual('e-item_4');
            tab.removeTab(3);
            expect(tab.selectedItem).toEqual(2);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).id).toEqual('e-item_3');
            tab.select(0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).id).toEqual('e-item_0');
            tab.removeTab(0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).id).toEqual('e-item_1');
        });
    });
    describe('hideTab method testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - hideTab as true', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(1, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(true);
        });
        it('Items - hideTab as false', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(1, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(true);
            tab.hideTab(1, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Items - hideTab as true with unknown index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(2, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Items - hideTab as false with unknown index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(2, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(2, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Items - hideTab as true with negative index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(-1, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Items - hideTab as false with negative index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(-1, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(-1, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Items - Missing boolean value for hideTab', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Items - hideTab as true with NaN index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(NaN, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Items - hideTab as false with NaN index', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(NaN, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(NaN, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Items - hideTab as true with active class', () => {
            tab = new Tab({
                selectedItem: 2,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(2);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(true);
            tab.hideTab(2, true);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-hidden')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.select(0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(false);
            tab.hideTab(0, true);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Items - hideTab as false with active class', () => {
            tab = new Tab({
                selectedItem: 2,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(2);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(true);
            tab.hideTab(2, true);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-hidden')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(2, false);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.select(0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.hideTab(0, true);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(0, false);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Template - hideTab as true', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(1, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(true);
        });
        it('Template - hideTab as false', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(1, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(true);
            tab.hideTab(1, false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Template - hideTab as true with unknown index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(2, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Template - hideTab as false with unknown index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(2, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Template - hideTab as true with negative index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.hideTab(-1, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Template - hideTab as false with NaN index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.hideTab(NaN, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Template - hideTab as true with NaN index', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-disable')).toEqual(false);
            tab.hideTab(NaN, true);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Template - hideTab as true with active class', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> <div> item3 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <h1>Content3</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                selectedItem: 2
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(2);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(true);
            tab.hideTab(2, true);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-hidden')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.select(0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(false);
            tab.hideTab(0, true);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
        it('Template - hideTab as false with active class', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> <div> item3 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <h1>Content3</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                selectedItem: 2
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(2);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(true);
            tab.hideTab(2, true);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-hidden')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(2, false);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(2).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.select(0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.hideTab(0, true);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
            tab.hideTab(0, false);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-hidden')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-hidden')).toEqual(false);
        });
    });
    describe('Select method testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Select method with empty item', () => {
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(0);
            tab.select(0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(0);
        });
        it('Items - Select method with new value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(1);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Items - Select method with same value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Items - Select method with existed value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(2);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Items - Select method with negative value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(-1);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Items - Select method with new value animation testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" },
                    { header: { "text": "item4" }, content: "Content4" }
                ],
                animation: {
                    previous: { effect: 'ZoomIn', duration: 400, easing: 'ease' },
                    next: { effect: 'ZoomOut', duration: 400, easing: 'ease' }
                }
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(1);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            tab.select(2);
            expect(tab.selectedItem).toEqual(2);
            tab.select(0);
            expect(tab.selectedItem).toEqual(0);
        });
        it('Items - Select method with NaN value', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(NaN);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Items - Select method with HTMLElement', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(tab.element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.select(<HTMLElement> document.querySelectorAll('.e-toolbar-item').item(1));
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Items - Select method with invalid HTMLElement', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(<HTMLElement> element.querySelector('.e-toolbar-items').children.item(3));
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Template - Select method with empty item', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> </div> <div class="e-content"> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(0);
            tab.select(0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').length).toEqual(0);
        });
        it('Template - Select method with new value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(1);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Template - Select method with same value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(0);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Template - Select method with existed value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(2);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Template - Select method with negative value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(-1);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Template - Select method with NaN value', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(-1);
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('Template - Select method with HTMLElement', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(tab.element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.select(<HTMLElement> document.querySelectorAll('.e-toolbar-item').item(1));
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.querySelectorAll('.e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Template - Select method with invalid HTMLElement', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(<HTMLElement> element.querySelector('.e-toolbar-items').children.item(3));
            expect(tab.selectedItem).toEqual(0);
            expect(element.querySelectorAll('.e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
    });
    describe('Destroy method testing', () => {
        let tab: any;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Destroy', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.length).toEqual(2);
            tab.destroy();
            expect(element.children.length).toEqual(0);
        });
        it('Template - Without header element tab destroy', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect(tab.toolbarObj).toEqual(undefined);
            tab.destroy();
        });
    });
    describe('Disable method testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Disable as true', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('e-disable')).toEqual(false);
            tab.disable(true);
            expect(element.classList.contains('e-disable')).toEqual(true);
        });
        it('Items - Disable as false', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('e-disable')).toEqual(false);
            tab.disable(true);
            expect(element.classList.contains('e-disable')).toEqual(true);
            tab.disable(false);
            expect(element.classList.contains('e-disable')).toEqual(false);
        });
        it('Template - Disable as true', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('e-disable')).toEqual(false);
            tab.disable(true);
            expect(element.classList.contains('e-disable')).toEqual(true);
        });
        it('Template - Disable as false', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('e-disable')).toEqual(false);
            tab.disable(true);
            expect(element.classList.contains('e-disable')).toEqual(true);
            tab.disable(false);
            expect(element.classList.contains('e-disable')).toEqual(false);
        });
    });
    describe('Events initialize testing', () => {
        let tab: Tab;
        let i: number = 0;
        function clickFn(): void {
            i++;
        }
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - created event', () => {
            tab = new Tab({
                created: clickFn,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(i).toEqual(1);
        });
        it('Items - selecting and selected events' , () => {
            tab = new Tab({
                selecting: clickFn,
                selected: clickFn,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(i).toEqual(3);
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.select(1);
            expect(i).toEqual(5);
        });
        it('Items - removing and removed events', () => {
            tab = new Tab({
                removing: clickFn,
                removed: clickFn,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.removeTab(1);
            expect(i).toEqual(7);
        });
        it('Items - adding and added events', () => {
            tab = new Tab({
                adding: clickFn,
                added: clickFn,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.addTab([ { header: { "text": "item1" }, content: "Content1" } ], 1);
            expect(i).toEqual(9);
        });
        it('Template - created event', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                created: clickFn
            });
            tab.appendTo('#ej2Tab');
            expect(i).toEqual(10);
        });
        it('Template - selecting and selected events', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                selecting: clickFn,
                selected: clickFn
            });
            tab.appendTo('#ej2Tab');
            expect(i).toEqual(12);
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.select(1);
            expect(i).toEqual(14);
        });
        it('Template - removing and removed events', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                removing: clickFn,
                removed: clickFn
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.removeTab(1);
            expect(i).toEqual(16);
        });
        it('Template - adding and added events', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                adding: clickFn,
                added: clickFn
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.addTab([ { header: { "text": "item1" }, content: "Content1" } ], 1);
            expect(i).toEqual(17);
        });
    });
    describe('Tab direct child element testing', () => {
        let tab: Tab;
        let ele: HTMLElement;
        beforeEach((): void => {
            tab = undefined;
            ele = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items based rendering - Child element checking', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.length).toEqual(2);
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(element.children.item(1).classList.contains('e-content')).toEqual(true);
        });
        it('Template based rendering - Child element checking', () => {
            ele.innerHTML = '<div class="e-header"> </div> <div class="e-content"></div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.length).toEqual(2);
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(element.children.item(1).classList.contains('e-content')).toEqual(true);
        });
        it('Items and Template combined input based control rendering test', () => {
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> </div> <div class="e-content">  <div> content1 </div> </div>';
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.length).toEqual(2);
            expect(element.classList.contains('e-template')).toEqual(true);
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(element.children.item(1).classList.contains('e-content')).toEqual(true);
        });
    });
    describe('Scrollable - Mobile adaptive mode', () => {
        let tab: any;
        let keyEventArgs: any;
        let toolbar: DomElements;
        let toolbarObj: any;
        beforeAll((): void => {
            let css: string = ".e-toolbar-item { display: table-cell !important } .e-scroll-left-nav { height: 20px;} .e-scroll-right-nav {height: 20px; } button { font-family:Arial; font-size: 14px; padding: 1px 6px; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; height: 38px; display: block }";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            let styleNode: Node = style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
        });
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
            tab = new Tab();
            tab.appendTo('#ej2Tab');
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        afterAll((): void => {
            document.getElementById('scroll').remove();
        });
        it('Items - Required scrollable class testing', () => {
            tab = new Tab({
                width: '200px',
                overflowMode: 'Scrollable',
                items: [
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" },
                    { header: { "text": "header-item6" }, content: "Content6" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('.e-toolbar-items').classList.contains('e-hscroll')).toEqual(true);
            expect(element.querySelectorAll('.e-scroll-nav').length).toEqual(2);
            expect(element.querySelectorAll('.e-scroll-left-nav').length).toEqual(1);
            expect(element.querySelectorAll('.e-scroll-right-nav').length).toEqual(1);
            expect(element.querySelectorAll('.e-hscroll-bar').length).toEqual(1);
            expect(element.querySelectorAll('.e-hscroll-content').length).toEqual(1);
            expect(element.querySelectorAll('.e-hscroll-content .e-toolbar-item').length).toEqual(6);
        });
        it('Items - Switching to popup mode with no toolbar items testing', () => {
            tab = new Tab({
                width: '50px',
                overflowMode: 'Scrollable',
                items: [
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" },
                    { header: { "text": "header-item6" }, content: "Content6" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.overflowMode = 'Popup';
            tab.dataBind();
            expect(element.querySelectorAll('.e-toolbar-item').item(0).id).toEqual('e-item_0');
        });
        it('Items - Perform scroll by click event', () => {
            tab = new Tab({
                width: '200px',
                overflowMode: 'Scrollable',
                items: [
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" },
                    { header: { "text": "header-item6" }, content: "Content6" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let rightScrollArrow: HTMLElement = <HTMLElement> document.querySelector('.e-scroll-right-nav');
            let leftScrollArrow: HTMLElement = <HTMLElement> document.querySelector('.e-scroll-left-nav');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').getBoundingClientRect().left > 0).toEqual(true);
            rightScrollArrow.click();
            expect(element.querySelector('#e-item_0').getBoundingClientRect().left < 0).toEqual(true);
            leftScrollArrow.click();
            expect(element.querySelector('#e-item_0').getBoundingClientRect().left > 0).toEqual(true);
        });
        it('Space key testing', () => {
            tab = new Tab({
                width: '200px',
                overflowMode: 'Scrollable',
                items: [
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" },
                    { header: { "text": "header-item6" }, content: "Content6" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element,
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'end',
                target: actEle1,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_5');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'space',
                target: actEle2,
            };
            tab.keyHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(tab.selectedItem).toEqual(5);
            expect(element.querySelector('#e-item_5').classList.contains('e-active')).toEqual(true);
            expect(closest(actEle3, '.e-toolbar-item').classList.contains('e-active')).toEqual(true);
        });
        it('Template - Required scrollable class testing', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> header-item1 </div> <div> header-item2 </div>'
            +' <div> header-item3 </div> <div> header-item4 </div> <div> header-item5 </div>'
            + '<div> header-item6 </div> </div> <div class="e-content"> <div> <div> <h1>Content1</h1>'
            + '<p> text</p> </div> </div> <div> <div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <div>'
            + '<h1>Content3</h1> <p> text</p> </div> </div> <div> <div> <h1>Content4</h1> <p> text</p> </div>'
            + '</div> <div> <div> <h1>Content5</h1> <p> text</p> </div> </div> <div> <div> <h1>Content6</h1>'
            + '<p> text</p> </div> </div> </div>';
            tab = new Tab({
                width: '200px',
                overflowMode: 'Scrollable',
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('.e-toolbar-items').classList.contains('e-hscroll')).toEqual(true);
            expect(element.querySelectorAll('.e-scroll-nav').length).toEqual(2);
            expect(element.querySelectorAll('.e-scroll-left-nav').length).toEqual(1);
            expect(element.querySelectorAll('.e-scroll-right-nav').length).toEqual(1);
            expect(element.querySelectorAll('.e-hscroll-bar').length).toEqual(1);
            expect(element.querySelectorAll('.e-hscroll-content').length).toEqual(1);
            expect(element.querySelectorAll('.e-hscroll-content .e-toolbar-item').length).toEqual(6);
        });
        it('Template - Switching to popup mode with no toolbar items testing', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> header-item1 </div> <div> header-item2 </div>'
            +' <div> header-item3 </div> <div> header-item4 </div> <div> header-item5 </div>'
            + '<div> header-item6 </div> </div> <div class="e-content"> <div> <div> <h1>Content1</h1>'
            + '<p> text</p> </div> </div> <div> <div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <div>'
            + '<h1>Content3</h1> <p> text</p> </div> </div> <div> <div> <h1>Content4</h1> <p> text</p> </div>'
            + '</div> <div> <div> <h1>Content5</h1> <p> text</p> </div> </div> <div> <div> <h1>Content6</h1>'
            + '<p> text</p> </div> </div> </div>';
            tab = new Tab({
                width: '50px',
                overflowMode: 'Scrollable',
            });
            tab.appendTo('#ej2Tab');
            tab.overflowMode = 'Popup';
            tab.dataBind();
            expect(ele.querySelectorAll('.e-toolbar-item').item(0).id).toEqual('e-item_0');
        });
        it('Template - Perform scroll by click event', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> header-item1 </div> <div> header-item2 </div>'
            +' <div> header-item3 </div> <div> header-item4 </div> <div> header-item5 </div>'
            + '<div> header-item6 </div> </div> <div class="e-content"> <div> <div> <h1>Content1</h1>'
            + '<p> text</p> </div> </div> <div> <div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <div>'
            + '<h1>Content3</h1> <p> text</p> </div> </div> <div> <div> <h1>Content4</h1> <p> text</p> </div>'
            + '</div> <div> <div> <h1>Content5</h1> <p> text</p> </div> </div> <div> <div> <h1>Content6</h1>'
            + '<p> text</p> </div> </div> </div>';
            tab = new Tab({
                width: '200px',
                overflowMode: 'Scrollable',
            });
            tab.appendTo('#ej2Tab');
            let rightScrollArrow: HTMLElement = <HTMLElement> document.querySelector('.e-scroll-right-nav');
            let leftScrollArrow: HTMLElement = <HTMLElement> document.querySelector('.e-scroll-left-nav');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').getBoundingClientRect().left > 0).toEqual(true);
            rightScrollArrow.click();
            expect(element.querySelector('#e-item_0').getBoundingClientRect().left < 0).toEqual(true);
            leftScrollArrow.click();
            expect(element.querySelector('#e-item_0').getBoundingClientRect().left > 0).toEqual(true);
        });
    });
    describe('Popup [Items] - Mobile adaptive mode - class and element testing', () => {
        let tab: Tab;
        beforeAll((): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
        });
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
            tab = new Tab({
                width: '200px',
                overflowMode: 'Popup',
                items: [
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" },
                    { header: { "text": "header-item6" }, content: "Content6" }
                ]
            });
            tab.appendTo('#ej2Tab');
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        afterAll((): void => {
            document.getElementById('scroll').remove();
        });
        it('Header element popup class testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('.e-header').classList.contains('e-toolpop')).toEqual(true);
        });
        it('Popup container element availability checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-pop').length).toEqual(1);
        });
        it('Popup container class checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('.e-toolbar-pop').classList.contains('e-control')).toEqual(true);
            expect(element.querySelector('.e-toolbar-pop').classList.contains('e-popup')).toEqual(true);
        });
        it('Popup container holds toolbar item checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-pop .e-toolbar-item').length > 0).toEqual(true);
        });
        it('Popup class testing in toolbar item inside the popup', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-pop .e-toolbar-item').item(0).classList.contains('e-toolbar-popup')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-pop .e-toolbar-item').item(1).classList.contains('e-toolbar-popup')).toEqual(true);
        });
        it('Popup button availability checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-_nav').length > 0).toEqual(true);
            expect(element.querySelectorAll('.e-header .e-hor-nav').length > 0).toEqual(true);
            expect(element.querySelectorAll('.e-header .e-hor-nav .e-icons').length > 0).toEqual(true);
        });
        it('Popup default icon class testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('.e-toolbar-pop').classList.contains('e-popup-close')).toEqual(true);
        });
    });
    describe('Popup [Template] - Mobile adaptive mode - class and element testing', () => {
        let tab: Tab;
        beforeAll((): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
        });
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            ele.innerHTML = '<div class="e-header"> <div> header-item0 </div> <div> header-item1 </div>'
            +' <div> header-item2 </div> <div> header-item3 </div> <div> header-item4 </div>'
            + '<div> header-item5 </div> </div> <div class="e-content"> <div> <div> <h1>Content1</h1>'
            + '<p> text</p> </div> </div> <div> <div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <div>'
            + '<h1>Content3</h1> <p> text</p> </div> </div> <div> <div> <h1>Content4</h1> <p> text</p> </div>'
            + '</div> <div> <div> <h1>Content5</h1> <p> text</p> </div> </div> <div> <div> <h1>Content6</h1>'
            + '<p> text</p> </div> </div> </div>';
            document.body.appendChild(ele);
            tab = new Tab({
                width: '200px',
                overflowMode: 'Popup'
            });
            tab.appendTo('#ej2Tab');
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        afterAll((): void => {
            document.getElementById('scroll').remove();
        });
        it('Header element popup class testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('.e-header').classList.contains('e-toolpop')).toEqual(true);
        });
        it('Popup container element availability checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-pop').length).toEqual(1);
        });
        it('Popup container class checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('.e-toolbar-pop').classList.contains('e-control')).toEqual(true);
            expect(element.querySelector('.e-toolbar-pop').classList.contains('e-popup')).toEqual(true);
        });
        it('Popup container holds toolbar item checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-pop .e-toolbar-item').length > 0).toEqual(true);
        });
        it('Popup class testing in toolbar item inside the popup', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-pop .e-toolbar-item').item(0).classList.contains('e-toolbar-popup')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-pop .e-toolbar-item').item(1).classList.contains('e-toolbar-popup')).toEqual(true);
        });
        it('Popup button availability checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-header .e-_nav').length > 0).toEqual(true);
            expect(element.querySelectorAll('.e-header .e-hor-nav').length > 0).toEqual(true);
            expect(element.querySelectorAll('.e-header .e-hor-nav .e-icons').length > 0).toEqual(true);
        });
        it('Popup default icon class testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('.e-toolbar-pop').classList.contains('e-popup-close')).toEqual(true);
        });
    });
    describe('Items [Popup] - Mobile adaptive mode [Handling]', () => {
        let tab: Tab;
        beforeEach((done: Function): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
            tab = new Tab({
                width: '150px',
                overflowMode: 'Popup',
                items: [
                    { header: { "text": "header-item0" }, content: "Content0" },
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let popup: HTMLElement = <HTMLElement> document.querySelector('.e-header .e-hor-nav');
            popup.click();
            setTimeout(() => { done(); }, 450);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Select element from popup by click event', () => {
            let targetElement: HTMLElement = document.getElementById('e-item_1');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(0).id).toEqual('e-item_0');
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).id).toEqual('e-item_1');
            targetElement.click();
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(0).id).toEqual('e-item_1');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).id).toEqual('e-item_0');
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).classList.contains('e-active')).toEqual(false);
        });
        it('Select element from popup by click event when RTL enable state', () => {
            tab.enableRtl = true;
            tab.dataBind();
            let targetElement: HTMLElement = document.getElementById('e-item_1');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(0).id).toEqual('e-item_0');
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).id).toEqual('e-item_1');
            targetElement.click();
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(0).id).toEqual('e-item_1');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).id).toEqual('e-item_0');
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).classList.contains('e-active')).toEqual(false);
        });
        it('OverflowMode switching', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.overflowMode = "Scrollable";
            tab.width = 100;
            tab.dataBind();
            expect(element.querySelectorAll('.e-hscroll-bar').length).toEqual(1);
            tab.overflowMode = "Popup";
            tab.dataBind();
            expect(element.querySelectorAll('.e-toolbar-pop').length).toEqual(1);
        });
        it('Ripple element availability checking', () => {
            let targetElement: HTMLElement = document.getElementById('e-item_1');
            let element: HTMLElement = document.getElementById('ej2Tab');
            targetElement.querySelector('.e-close-icon').classList.add('e-ripple-element');
            targetElement.click();
            expect(targetElement.querySelectorAll('.e-ripple-element').length == 0).toEqual(true);
        });
        it('Select method to popup element selection', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(0).id).toEqual('e-item_0');
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).id).toEqual('e-item_1');
            tab.select(2);
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(0).id).toEqual('e-item_2');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).id).toEqual('e-item_0');
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).classList.contains('e-active')).toEqual(false);
        });
    });
    describe('Template [Popup] - Mobile adaptive mode [Handling]', () => {
        let tab: Tab;
        beforeEach((done: Function): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            ele.innerHTML = '<div class="e-header"> <div> header-item0 </div> <div> header-item1 </div>'
            +' <div> header-item2 </div> <div> header-item3 </div> <div> header-item4 </div>'
            + '<div> header-item5 </div> </div> <div class="e-content"> <div> <div> <h1>Content1</h1>'
            + '<p> text</p> </div> </div> <div> <div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <div>'
            + '<h1>Content3</h1> <p> text</p> </div> </div> <div> <div> <h1>Content4</h1> <p> text</p> </div>'
            + '</div> <div> <div> <h1>Content5</h1> <p> text</p> </div> </div> <div> <div> <h1>Content6</h1>'
            + '<p> text</p> </div> </div> </div>';
            document.body.appendChild(ele);
            tab = new Tab({
                width: '200px',
                overflowMode: 'Popup'
            });
            tab.appendTo('#ej2Tab');
            let popup: HTMLElement = <HTMLElement> document.querySelector('.e-header .e-hor-nav');
            popup.click();
            setTimeout(() => { done(); }, 450);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Select element from popup by click event', () => {
            let targetElement: HTMLElement = document.getElementById('e-item_2');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(1).id).toEqual('e-item_1');
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).id).toEqual('e-item_2');
            targetElement.click();
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(1).id).toEqual('e-item_2');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).id).toEqual('e-item_1');
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).classList.contains('e-active')).toEqual(false);
        });
        it('Select method to popup element selection', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(1).id).toEqual('e-item_1');
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).id).toEqual('e-item_2');
            tab.select(2);
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(1).id).toEqual('e-item_2');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).id).toEqual('e-item_1');
            expect(element.querySelectorAll('.e-toolbar-item.e-toolbar-popup').item(0).classList.contains('e-active')).toEqual(false);
        });
    });
    describe('Animation combination testing', () => {
        let tab: Tab;
        beforeEach((done: Function): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
            tab = new Tab({
                width: '400px',
                overflowMode: 'Popup',
                items: [
                    { header: { "text": "header-item0" }, content: "Content0" },
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let popup: HTMLElement = <HTMLElement> document.querySelector('.e-header .e-hor-nav');
            popup.click();
            setTimeout(() => { done(); }, 450);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Animation setting with none value', () => {
            tab.animation = {
                previous: { effect: 'None', duration: 400, easing: 'ease' },
                next: { effect: 'None', duration: 400, easing: 'ease' }
            }
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('<div>Content0</div>');
            tab.selectedItem = 1;
            tab.dataBind();
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_1').innerHTML).toEqual('<div>Content1</div>');
            tab.selectedItem = 0;
            tab.dataBind();
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('<div>Content0</div>');
        });
        it('Animation setting with different value', () => {
            tab.animation = {
                previous: { effect: 'FadeZoomIn', duration: 400, easing: 'ease' },
                next: { effect: 'ZoomOut', duration: 400, easing: 'ease' }
            }
            tab.dataBind();
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('<div>Content0</div>');
            tab.selectedItem = 1;
            tab.dataBind();
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_1').innerHTML).toEqual('<div>Content1</div>');
            tab.selectedItem = 0;
            tab.dataBind();
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('<div>Content0</div>');
        });
    });
    describe('Items - Animations related testing', () => {
        let tab: Tab;
        beforeEach((done: Function): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
            tab = new Tab({
                width: '400px',
                overflowMode: 'Popup',
                items: [
                    { header: { "text": "header-item0" }, content: "Content0" },
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let popup: HTMLElement = <HTMLElement> document.querySelector('.e-header .e-hor-nav');
            popup.click();
            setTimeout(() => { done(); }, 450);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Default content value checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('<div>Content0</div>');
        });
        it('SelectedItem property based content value checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('<div>Content0</div>');
            tab.selectedItem = 1;
            tab.dataBind();
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_1').innerHTML).toEqual('<div>Content1</div>');
            tab.selectedItem = 0;
            tab.dataBind();
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('<div>Content0</div>');
        });
        it('Select method based content value checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('<div>Content0</div>');
            tab.select(1);
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_1').innerHTML).toEqual('<div>Content1</div>');
            tab.select(0);
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('<div>Content0</div>');
        });
        it('Select method based content value checking with RTL', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('<div>Content0</div>');
            tab.enableRtl = true;
            tab.dataBind();
            tab.select(1);
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_1').innerHTML).toEqual('<div>Content1</div>');
            tab.select(0);
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('<div>Content0</div>');
        });
        it('SelectedItem property using popup element - Content value checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('<div>Content0</div>');
            tab.selectedItem = 2;
            tab.dataBind();
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('#e-item_2').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_2').innerHTML).toEqual('<div>Content2</div>');
            tab.selectedItem = 4;
            tab.dataBind();
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').id).toEqual('e-item_4');
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').id).toEqual('e-item_3');
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_4').innerHTML).toEqual('<div>Content4</div>');
            tab.selectedItem = 5;
            tab.dataBind();
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').id).toEqual('e-item_5');
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').id).toEqual('e-item_4');
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_5').innerHTML).toEqual('<div>Content5</div>');
        });
        it('Select method using popup element - Content value checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('<div>Content0</div>');
            tab.select(2);
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('#e-item_2').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_2').innerHTML).toEqual('<div>Content2</div>');
            tab.select(3);
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').id).toEqual('e-item_3');
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').id).toEqual('e-item_4');
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_3').innerHTML).toEqual('<div>Content3</div>');
            tab.select(4);
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').id).toEqual('e-item_4');
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').id).toEqual('e-item_3');
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_4').innerHTML).toEqual('<div>Content4</div>');
        });
    });
    describe('Template - Animations related testing', () => {
        let tab: Tab;
        beforeEach((done: Function): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            ele.innerHTML = '<div class="e-header"> <div> header-item0 </div> <div> header-item1 </div>'
            +' <div> header-item2 </div> <div> header-item3 </div> <div> header-item4 </div>'
            + '<div> header-item5 </div> </div> <div class="e-content"> <div>Content0</div> <div>Content1</div> <div>Content2</div>'
            + '<div>Content3</div> <div>Content4</div> <div>Content5</div>';
            document.body.appendChild(ele);
            tab = new Tab({
                width: '300px',
                overflowMode: 'Popup'
            });
            tab.appendTo('#ej2Tab');
            let popup: HTMLElement = <HTMLElement> document.querySelector('.e-header .e-hor-nav');
            popup.click();
            setTimeout(() => { done(); }, 450);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Default content value checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('Content0');
        });
        it('SelectedItem property based content value checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('Content0');
            tab.selectedItem = 1;
            tab.dataBind();
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_1').innerHTML).toEqual('Content1');
            tab.selectedItem = 0;
            tab.dataBind();
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('Content0');
        });
        it('Select method based content value checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('Content0');
            tab.select(1);
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_1').innerHTML).toEqual('Content1');
            tab.select(0);
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('Content0');
        });
        it('Select method based content value checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('Content0');
            tab.enableRtl = true;
            tab.dataBind();
            tab.select(1);
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_1').innerHTML).toEqual('Content1');
            tab.select(0);
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('#e-item_1').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('Content0');
        });
        it('SelectedItem property using popup element - Content value checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_0').innerHTML).toEqual('Content0');
            tab.selectedItem = 2;
            tab.dataBind();
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('#e-item_2').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_2').innerHTML).toEqual('Content2');
            tab.selectedItem = 3;
            tab.dataBind();
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').id).toEqual('e-item_3');
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').id).toEqual('e-item_2');
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_3').innerHTML).toEqual('Content3');
            tab.selectedItem = 4;
            tab.dataBind();
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').id).toEqual('e-item_4');
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').id).toEqual('e-item_3');
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_4').innerHTML).toEqual('Content4');
        });
        it('Select method using popup element - Content value checking', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content .e-item').innerHTML).toEqual('Content0');
            tab.select(2);
            expect(element.querySelector('#e-item_0').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('#e-item_2').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-content #e-content_2').innerHTML).toEqual('Content2');
            tab.select(4);
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').id).toEqual('e-item_4');
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').id).toEqual('e-item_2');
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_4').innerHTML).toEqual('Content4');
            tab.select(5);
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').id).toEqual('e-item_5');
            expect(element.querySelector('.e-toolbar-item:not(.e-toolbar-popup):last-child').classList.contains('e-active')).toEqual(true);
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').id).toEqual('e-item_4');
            expect(element.querySelector('.e-toolbar-item.e-toolbar-popup:first-child').classList.contains('e-active')).toEqual(false);
            expect(element.querySelector('.e-content #e-content_5').innerHTML).toEqual('Content5');
        });
    });
    describe('Scrollable mode - Active item focusd view testing', () => {
        let tab: any;
        let keyEventArgs: any;
        let toolbar: DomElements;
        let toolbarObj: any;
        beforeEach((): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
            tab = new Tab({
                width: '150px',
                overflowMode: 'Scrollable',
                items: [
                    { header: { "text": "header-item0" }, content: "Content0" },
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            toolbar = <DomElements> element.querySelector('.e-header');
            toolbarObj = <Toolbar> toolbar.ej2_instances[0];
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('moveRight and moveLeft key with item visibility testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element,
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'moveRight',
                target: actEle1,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            keyEventArgs = {
                preventDefault: function () { },
                action: 'moveRight',
                target: actEle1,
            };
            tab.keyHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_1');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'moveLeft',
                target: actEle2,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            keyEventArgs = {
                preventDefault: function () { },
                action: 'moveLeft',
                target: actEle2,
            };
            tab.keyHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle3, '.e-toolbar-item').id).toEqual('e-item_0');
        });
    });
    describe('Items - Keyboard navigation testing', () => {
        let tab: any;
        let keyEventArgs: any;
        let toolbar: DomElements;
        let toolbarObj: any;
        beforeEach((done: Function): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
            tab = new Tab({
                width: '400px',
                overflowMode: 'Popup',
                items: [
                    { header: { "text": "header-item0" }, content: "Content0" },
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let popup: HTMLElement = <HTMLElement> document.querySelector('.e-header .e-hor-nav');
            popup.click();
            let element: HTMLElement = document.getElementById('ej2Tab');
            toolbar = <DomElements> element.querySelector('.e-header');
            toolbarObj = <Toolbar> toolbar.ej2_instances[0];
            setTimeout(() => { done(); }, 450);
        });
        afterEach((): void => {
            expect(isVisible(tab.popObj.element)).toBe(false);
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('moveRight and moveLeft with shiftTab popup openingkey testing', (done: Function): void => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element,
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'moveRight',
                target: actEle1,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_1');
            expect(isVisible(tab.popObj.element)).toBe(true);
            keyEventArgs = {
                preventDefault: function () { },
                action: 'shiftTab',
                target: actEle2,
            };
            tab.keyHandler(keyEventArgs);
            setTimeout(() => { done(); }, 450);
        });

    });
    describe('Items - Keyboard navigation testing', () => {
        let tab: any;
        let keyEventArgs: any;
        let toolbar: DomElements;
        let toolbarObj: any;
        beforeEach((done: Function): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
            tab = new Tab({
                width: '400px',
                overflowMode: 'Popup',
                items: [
                    { header: { "text": "header-item0" }, content: "Content0" },
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let popup: HTMLElement = <HTMLElement> document.querySelector('.e-header .e-hor-nav');
            popup.click();
            let element: HTMLElement = document.getElementById('ej2Tab');
            toolbar = <DomElements> element.querySelector('.e-header');
            toolbarObj = <Toolbar> toolbar.ej2_instances[0];
            setTimeout(() => { done(); }, 450);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('keyboard class testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('e-keyboard')).toEqual(true);
            expect(element.querySelector('.e-header').classList.contains('e-keyboard')).toEqual(true);
        });
        it('Tab key testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element,
            };
            tab.keyHandler(keyEventArgs);
            let actEle: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle, '.e-toolbar-item').id).toEqual('e-item_0');
        });
        it('moveRight and moveLeft key testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element,
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'moveRight',
                target: actEle1,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_1');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'shiftTab',
                target: actEle2,
            };
            tab.keyHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(actEle3.getAttribute('tabindex')).toEqual('-1');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'moveLeft',
                target: actEle3,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle4: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle4, '.e-toolbar-item').id).toEqual('e-item_0');
        });
        
        it('Home and End key testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element,
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'end',
                target: actEle1,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_3');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'home',
                target: actEle2,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle3, '.e-toolbar-item').id).toEqual('e-item_0');
        });
        it('Space key testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element,
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'end',
                target: actEle1,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_3');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'space',
                target: actEle2,
            };
            tab.keyHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(tab.selectedItem).toEqual(3);
            expect(element.querySelector('#e-item_3').classList.contains('e-active')).toEqual(true);
            expect(closest(actEle3, '.e-toolbar-item').classList.contains('e-active')).toEqual(true);
            keyEventArgs = {
                preventDefault: function () { },
                action: 'space',
                target: actEle3,
            };
            tab.keyHandler(keyEventArgs);
            let actEle4: HTMLElement = <HTMLElement> document.activeElement;
            expect(tab.selectedItem).toEqual(3);
            expect(element.querySelector('#e-item_3').classList.contains('e-active')).toEqual(true);
            expect(closest(actEle4, '.e-toolbar-item').classList.contains('e-active')).toEqual(true);
            tab.height = 2000;
            tab.dataBind();
            let actEle5: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle5, '.e-toolbar-item').classList.contains('e-active')).toEqual(true);
            expect(document.documentElement.scrollTop).toEqual(0);
            let e: any = new KeyboardEvent("keydown", {bubbles : true, cancelable : true, key : '32', shiftKey : true});
            Object.defineProperty(e, "keyCode", {"value" : 32});
            Object.defineProperty(e, "which", {"value" : 32});
            actEle5.dispatchEvent(e);
            expect(document.documentElement.scrollTop).toEqual(0);
            let eve: any = new KeyboardEvent("keydown", {bubbles : true, cancelable : true, key : '32', shiftKey : true});
            Object.defineProperty(eve, "keyCode", {"value" : 32});
            Object.defineProperty(eve, "which", {"value" : 40});
            actEle5.dispatchEvent(eve);
            expect(document.documentElement.scrollTop).toEqual(0);
            let arg: any = new KeyboardEvent("keydown", {bubbles : true, cancelable : true, key : '35', shiftKey : true});
            Object.defineProperty(arg, "keyCode", {"value" : 35});
            Object.defineProperty(arg, "which", {"value" : 35});
            actEle5.dispatchEvent(arg);
            expect(document.documentElement.scrollTop).toEqual(0);
        });
        it('Space key to popup close testing', (done: Function) => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let trgEle: HTMLElement = <HTMLElement> element.querySelector('.e-hor-nav');
            trgEle.focus();
            keyEventArgs = {
                preventDefault: function () { },
                action: 'space',
                target: trgEle,
            };
            tab.keyHandler(keyEventArgs);
            setTimeout(function() {
                let element: HTMLElement = document.getElementById('ej2Tab');
                expect(element.querySelector('.e-toolbar-pop').classList.contains('e-popup-close')).toEqual(true);
                done();
            }, 1000);
        });
        it('Enter key testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element,
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'end',
                target: actEle1,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_3');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'enter',
                target: actEle2,
            };
            tab.keyHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(element.querySelector('#e-item_3').classList.contains('e-active')).toEqual(true);
            expect(closest(actEle3, '.e-toolbar-item').classList.contains('e-active')).toEqual(true);
        });
        it('Delete key testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.showCloseButton = true;
            tab.dataBind();
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(tab.showCloseButton).toEqual(true);
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'end',
                target: actEle1
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_3');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(4);
            keyEventArgs = {
                preventDefault: function () { },
                action: 'delete',
                target: actEle2
            };
            tab.keyHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(element.querySelector('#e-item_3')).toEqual(null);
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(4);
        });
        it('Delete key with showCloseButton as false', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(tab.showCloseButton).toEqual(false);
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'end',
                target: actEle1
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_3');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(4);
            keyEventArgs = {
                preventDefault: function () { },
                action: 'delete',
                target: actEle2
            };
            tab.keyHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(element.querySelector('#e-item_3')).not.toEqual(null);
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(4);
        });
        it('Delete key with invalid element as target', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.showCloseButton = true;
            tab.dataBind();
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(tab.showCloseButton).toEqual(true);
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'end',
                target: actEle1
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_3');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(4);
            keyEventArgs = {
                preventDefault: function () { },
                action: 'delete',
                target: element
            };
            tab.keyHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(element.querySelector('#e-item_3')).not.toEqual(null);
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(4);
        });
        it('Delete key press with next element focus testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.showCloseButton = true;
            tab.dataBind();
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(tab.showCloseButton).toEqual(true);
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            let trgEle: HTMLElement = <HTMLElement> element.querySelector('#e-item_1 div');
            trgEle.focus();
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_1');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(4);
            keyEventArgs = {
                preventDefault: function () { },
                action: 'delete',
                target: actEle2
            };
            tab.keyHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(element.querySelector('#e-item_1')).toEqual(null);
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(4);
            let actEle4: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle4, '.e-toolbar-item').id).toEqual('e-item_2');
        });
    });
    describe('Template - Keyboard navigation testing', () => {
        let tab: any;
        let keyEventArgs: any;
        let toolbar: DomElements;
        let toolbarObj: any;
        beforeEach((done: Function): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            ele.innerHTML = '<div class="e-header"> <div> header-item0 </div> <div> header-item1 </div>'
            +' <div> header-item2 </div> <div> header-item3 </div> <div> header-item4 </div>'
            + '<div> header-item5 </div> </div> <div class="e-content"> <div> <div> <h1>Content1</h1>'
            + '<p> text</p> </div> </div> <div> <div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <div>'
            + '<h1>Content3</h1> <p> text</p> </div> </div> <div> <div> <h1>Content4</h1> <p> text</p> </div>'
            + '</div> <div> <div> <h1>Content5</h1> <p> text</p> </div> </div> <div> <div> <h1>Content6</h1>'
            + '<p> text</p> </div> </div> </div>';
            document.body.appendChild(ele);
            tab = new Tab({
                width: '300px',
                overflowMode: 'Popup',
            });
            tab.appendTo('#ej2Tab');
            let popup: HTMLElement = <HTMLElement> document.querySelector('.e-header .e-hor-nav');
            popup.click();
            let element: HTMLElement = document.getElementById('ej2Tab');
            toolbar = <DomElements> element.querySelector('.e-header');
            toolbarObj = <Toolbar> toolbar.ej2_instances[0];
            setTimeout(() => { done(); }, 450);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('keyboard class testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('e-keyboard')).toEqual(true);
            expect(element.querySelector('.e-header').classList.contains('e-keyboard')).toEqual(true);
        });
        it('Tab key testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element,
            };
            tab.keyHandler(keyEventArgs);
            let actEle: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle, '.e-toolbar-item').id).toEqual('e-item_0');
        });
        it('moveRight and moveLeft key testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element,
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'moveRight',
                target: actEle1,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_1');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'moveLeft',
                target: actEle2,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle3, '.e-toolbar-item').id).toEqual('e-item_0');
        });
        it('Home and End key testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element,
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'end',
                target: actEle1,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_2');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'home',
                target: actEle2,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle3, '.e-toolbar-item').id).toEqual('e-item_0');
        });
        it('Space key testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element,
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'end',
                target: actEle1,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_2');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'space',
                target: actEle2,
            };
            tab.keyHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(element.querySelector('#e-item_2').classList.contains('e-active')).toEqual(true);
            expect(closest(actEle3, '.e-toolbar-item').classList.contains('e-active')).toEqual(true);
        });
        it('Space key to popup close testing', (done: Function) => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let trgEle: HTMLElement = <HTMLElement> element.querySelector('.e-hor-nav');
            trgEle.focus();
            keyEventArgs = {
                preventDefault: function () { },
                action: 'space',
                target: trgEle,
            };
            tab.keyHandler(keyEventArgs);
            setTimeout(function() {
                let element: HTMLElement = document.getElementById('ej2Tab');
                expect(element.querySelector('.e-toolbar-pop').classList.contains('e-popup-close')).toEqual(true);
                done();
            }, 1000);
        });
        it('Enter key testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element,
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'end',
                target: actEle1,
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_2');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'enter',
                target: actEle2,
            };
            tab.keyHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(element.querySelector('#e-item_2').classList.contains('e-active')).toEqual(true);
            expect(closest(actEle3, '.e-toolbar-item').classList.contains('e-active')).toEqual(true);
        });
        it('Delete key testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.showCloseButton = true;
            tab.dataBind();
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(tab.showCloseButton).toEqual(true);
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'end',
                target: actEle1
            };
            toolbarObj.keyActionHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_2');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(3);
            keyEventArgs = {
                preventDefault: function () { },
                action: 'delete',
                target: actEle2
            };
            tab.keyHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(element.querySelector('#e-item_2')).toEqual(null);
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(3);
        });
        it('Delete key press with next element focus testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            tab.showCloseButton = true;
            tab.dataBind();
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            keyEventArgs = {
                preventDefault: function () { },
                action: 'tab',
                target: element
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(tab.showCloseButton).toEqual(true);
            expect(closest(actEle1, '.e-toolbar-item').id).toEqual('e-item_0');
            let trgEle: HTMLElement = <HTMLElement> element.querySelector('#e-item_1 div');
            trgEle.focus();
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle2, '.e-toolbar-item').id).toEqual('e-item_1');
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(3);
            keyEventArgs = {
                preventDefault: function () { },
                action: 'delete',
                target: actEle2
            };
            tab.keyHandler(keyEventArgs);
            let actEle3: HTMLElement = <HTMLElement> document.activeElement;
            expect(element.querySelector('#e-item_1')).toEqual(null);
            expect(element.querySelectorAll('.e-toolbar-items .e-toolbar-item').length).toEqual(3);
            let actEle4: HTMLElement = <HTMLElement> document.activeElement;
            expect(closest(actEle4, '.e-toolbar-item').id).toEqual('e-item_2');
        });
    });
    describe('Items - Keyboard navigation at scrollable mode testing', () => {
        let tab: any;
        let keyEventArgs: any;
        beforeEach((): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
            tab = new Tab({
                width: '200px',
                items: [
                    { header: { "text": "header-item0" }, content: "Content0" },
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" }
                ]
            });
            tab.appendTo('#ej2Tab');
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Enter key testing', () => {
            let trgEle: HTMLElement;
            let element: HTMLElement = document.getElementById('ej2Tab');
            trgEle = <HTMLElement> element.querySelector('.e-scroll-right-nav');
            trgEle.focus();
            keyEventArgs = {
                preventDefault: function () { },
                action: 'enter',
                target: trgEle,
            };
            tab.keyHandler(keyEventArgs);
            let actEle1: HTMLElement = <HTMLElement> document.activeElement;
            expect(element.querySelector('#e-item_0').getBoundingClientRect().left < 0).toEqual(true);
            trgEle = <HTMLElement> element.querySelector('.e-scroll-left-nav');
            trgEle.focus();
            keyEventArgs = {
                preventDefault: function () { },
                action: 'enter',
                target: trgEle,
            };
            tab.keyHandler(keyEventArgs);
            let actEle2: HTMLElement = <HTMLElement> document.activeElement;
            expect(element.querySelector('#e-item_0').getBoundingClientRect().left > 0).toEqual(true);
        });
    });
    describe('Items - Resize to active element position testing', () => {
        let tab: any;
        beforeEach((): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
            tab = new Tab({
                width: '300px',
                overflowMode: 'Popup',
                items: [
                    { header: { "text": "header-item0" }, content: "Content0" },
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" }
                ]
            });
            tab.appendTo('#ej2Tab');
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Active element visibility testing when resize', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            tab.select(2);
            expect(tab.selectedItem).toEqual(2);
            expect(element.querySelector('.e-toolbar-item.e-active').id).toEqual('e-item_2');
            expect(element.querySelector('#e-item_1').classList.contains('e-toolbar-popup')).toEqual(false);
            expect(element.querySelector('#e-item_2').classList.contains('e-toolbar-popup')).toEqual(false);
            tab.width = 250;
            tab.dataBind();
            toolbarObj.resize();
            tab.refreshActElePosition();
            expect(element.querySelectorAll('.e-toolbar-pop').length).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-pop .e-toolbar-item').length).toEqual(4);
            expect(element.querySelector('.e-toolbar-item.e-active').id).toEqual('e-item_2');
            expect(element.querySelector('#e-item_1').classList.contains('e-toolbar-popup')).toEqual(true);
            expect(element.querySelector('#e-item_2').classList.contains('e-toolbar-popup')).toEqual(false);
         });
    });
    describe('Template - Resize to active element position testing', () => {
        let tab: any;
        beforeEach((): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            ele.innerHTML = '<div class="e-header"> <div> header-item0 </div> <div> header-item1 </div>'
            +' <div> header-item2 </div> <div> header-item3 </div> <div> header-item4 </div>'
            + '<div> header-item5 </div> </div> <div class="e-content"> <div> <div> <h1>Content1</h1>'
            + '<p> text</p> </div> </div> <div> <div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <div>'
            + '<h1>Content3</h1> <p> text</p> </div> </div> <div> <div> <h1>Content4</h1> <p> text</p> </div>'
            + '</div> <div> <div> <h1>Content5</h1> <p> text</p> </div> </div> <div> <div> <h1>Content6</h1>'
            + '<p> text</p> </div> </div> </div>';
            document.body.appendChild(ele);
            tab = new Tab({
                width: '600px',
                overflowMode: 'Popup'
            });
            tab.appendTo('#ej2Tab');
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Active element visibility testing when resize', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let toolbar: DomElements = <DomElements> element.querySelector('.e-header');
            let toolbarObj: any = <Toolbar> toolbar.ej2_instances[0];
            tab.select(3);
            expect(tab.selectedItem).toEqual(3);
            expect(element.querySelector('.e-toolbar-item.e-active').id).toEqual('e-item_3');
            expect(element.querySelector('#e-item_2').classList.contains('e-toolbar-popup')).toEqual(false);
            expect(element.querySelector('#e-item_3').classList.contains('e-toolbar-popup')).toEqual(false);
            tab.width = 300;
            tab.dataBind();
            toolbarObj.resize();
            tab.refreshActElePosition();
            expect(element.querySelectorAll('.e-toolbar-pop').length).toEqual(1);
            expect(element.querySelectorAll('.e-toolbar-pop .e-toolbar-item').length).toEqual(3);
            expect(element.querySelector('.e-toolbar-item.e-active').id).toEqual('e-item_3');
            expect(element.querySelector('#e-item_2').classList.contains('e-toolbar-popup')).toEqual(true);
            expect(element.querySelector('#e-item_3').classList.contains('e-toolbar-popup')).toEqual(false);
         });
    });
    describe('Items - Popup open testing using keyboard navigation', () => {
        let tab: any;
        let keyEventArgs: any;
        beforeEach((): void => {
            let css: string = ".e-toolbar { display: block; white-space: nowrap; position: relative; } .e-separator { border-right:1px solid; height: 15px; margin: 7.5px 3px} .e-hor-nav { height: 30px; } .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator + .e-separator { display:none } .e-toolbar-items { display: inline-block; } .e-toolbar-items.e-hscroll { width:inherit; }  .e-toolbar .e-fix-width {width : 0px !important; } .e-toolbar .e-tbarpop  { position: fixed; } .e-toolbar-items .e-toolbar-item, .e-toolbar-left, .e-toolbar-center, .e-toolbar-right { display: inline-block; } .e-toolbar .e-hor-nav { float:right; width:30px; }  .e-toolbar .e-toolbar-pop { position: fixed;} .e-popup-open { display:block } .e-popup-close { display: none } button {font-family:Arial; font-size: 14px; padding: 1px 6px} ";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
            tab = new Tab({
                width: '400px',
                overflowMode: 'Popup',
                items: [
                    { header: { "text": "header-item0" }, content: "Content0" },
                    { header: { "text": "header-item1" }, content: "Content1" },
                    { header: { "text": "header-item2" }, content: "Content2" },
                    { header: { "text": "header-item3" }, content: "Content3" },
                    { header: { "text": "header-item4" }, content: "Content4" },
                    { header: { "text": "header-item5" }, content: "Content5" }
                ]
            });
            tab.appendTo('#ej2Tab');
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Open Popup when press space key', (done: Function) => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let trgEle: HTMLElement = <HTMLElement> element.querySelector('.e-hor-nav');
            trgEle.focus();
            keyEventArgs = {
                preventDefault: function () { },
                action: 'space',
                target: trgEle,
            };
            tab.keyHandler(keyEventArgs);
            setTimeout(function() {
                let element: HTMLElement = document.getElementById('ej2Tab');
                expect(element.querySelector('.e-toolbar-pop').classList.contains('e-popup-open')).toEqual(true);
                done();
            }, 1000);
        });
        it('Open Popup when press enter key', (done: Function) => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let trgEle: HTMLElement = <HTMLElement> element.querySelector('.e-hor-nav');
            trgEle.focus();
            keyEventArgs = {
                preventDefault: function () { },
                action: 'enter',
                target: trgEle,
            };
            tab.keyHandler(keyEventArgs);
            setTimeout(function() {
                let element: HTMLElement = document.getElementById('ej2Tab');
                expect(element.querySelector('.e-toolbar-pop').classList.contains('e-popup-open')).toEqual(false);
                done();
            }, 1000);
        });
        it('Open Popup when press shift+f10 key', (done: Function) => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let trgEle: HTMLElement = <HTMLElement> element.querySelector('.e-hor-nav');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'openPopup',
                target: trgEle,
            };
            tab.keyHandler(keyEventArgs);
            setTimeout(function() {
                let element: HTMLElement = document.getElementById('ej2Tab');
                expect(element.querySelector('.e-toolbar-pop').classList.contains('e-popup-open')).toEqual(true);
                keyEventArgs = {
                    preventDefault: function () { },
                    action: 'openPopup',
                    target: trgEle,
                };
                tab.keyHandler(keyEventArgs);
                expect(element.querySelector('.e-toolbar-pop').classList.contains('e-popup-open')).toEqual(true);
                done();
            }, 1000);
        });
        it('Open Popup when invalid key press', (done: Function) => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let trgEle: HTMLElement = <HTMLElement> element.querySelector('.e-toolbar-popup');
            keyEventArgs = {
                preventDefault: function () { },
                action: 'openPopup',
                target: trgEle,
            };
            tab.keyHandler(keyEventArgs);
            setTimeout(function() {
                let element: HTMLElement = document.getElementById('ej2Tab');
                expect(element.querySelector('.e-toolbar-pop').classList.contains('e-popup-open')).toEqual(true);
                done();
            }, 1000);
        });
    });
    describe('Item based render testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Tab child element count and it class testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" }
                ]   
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.length).toEqual(2);
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(element.children.item(1).classList.contains('e-content')).toEqual(true);
        });
        it('Items collection availability checking', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                ]   
             });
            tab.appendTo('#ej2Tab');
            expect(tab.items).not.toEqual([]);
        });
        it('Icon Class - Single class', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1", 'iconCss': 'e-btn-icon', "iconPosition": "left" }, content: "Content1" },
                    { header: { "text": "item2", 'iconCss': 'e-btn-icon', "iconPosition": "right" }, content: "Content2" },
                ]
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.getElementsByClassName('e-btn-icon').item(0).classList.contains('e-icon-left')).toEqual(true);
            expect(element.getElementsByClassName('e-btn-icon').item(1).classList.contains('e-icon-right')).toEqual(true);
        });
        it('Icon Class - Multiple class', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1", 'iconCss': 'e-btn-icon', "iconPosition": "left" }, content: "Content1" },
                    { header: { "text": "item2", 'iconCss': 'e-btn-icon e-btn', "iconPosition": "right" }, content: "Content2" },
                ]
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.getElementsByClassName('e-btn-icon').item(0).classList.contains('e-icon-left')).toEqual(true);
            expect(element.getElementsByClassName('e-btn-icon').item(1).classList.contains('e-icon-right')).toEqual(true);
            expect(element.getElementsByClassName('e-btn-icon').item(1).classList.contains('e-btn')).toEqual(true);
        });
        it('Icon Class - Without text', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { 'iconCss': 'e-btn-icon' }, content: "Content2",  },
                ]   
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.getElementsByClassName('e-toolbar-item').item(1).classList.contains('e-icon')).toEqual(true);
        });
        it('Icon position', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1", 'iconCss': 'e-btn-icon', "iconPosition": "left" }, content: "Content1" },
                    { header: { "text": "item2", 'iconCss': 'e-btn-icon', "iconPosition": "right" }, content: "Content2" },
                    { header: { "text": "item3", 'iconCss': 'e-btn-icon', "iconPosition": "top" }, content: "Content3" },
                    { header: { "text": "item4", 'iconCss': 'e-btn-icon', "iconPosition": "bottom" }, content: "Content4" }
                ]   
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.getElementsByClassName('e-toolbar-item').item(0).classList.contains('e-ileft')).toEqual(true);
            expect(element.getElementsByClassName('e-toolbar-item').item(1).classList.contains('e-iright')).toEqual(true);
            expect(element.getElementsByClassName('e-toolbar-item').item(2).classList.contains('e-itop')).toEqual(true);
            expect(element.getElementsByClassName('e-toolbar-item').item(3).classList.contains('e-ibottom')).toEqual(true);
        });
        it('Content render with HTMLElement', () => {
            let cnt: HTMLElement = createElement('div', { id: 'content' });
            document.body.appendChild(cnt);
            cnt.innerHTML = 'testing';
            let cntEle: HTMLElement = document.getElementById('content');
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: cntEle }
                ]
             });
            tab.appendTo('#ej2Tab');
            expect(tab.items[0].content).toEqual(cntEle);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('#content').length).toEqual(1);
        });
        it('Content render with HTML string', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: '<div id="content"> content1 </div>' }
                ]
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.querySelectorAll('#content').length).toEqual(1);
        });
        it('Select method with selectedItem value Testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" }
                ]   
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            expect(element.getElementsByClassName('e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            tab.select(1);
            expect(tab.selectedItem).toEqual(1);
            expect(element.getElementsByClassName('e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            tab.select(2);
            expect(tab.selectedItem).toEqual(2);
            expect(element.getElementsByClassName('e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.getElementsByClassName('e-toolbar-item').item(1).classList.contains('e-active')).toEqual(false);
            expect(element.getElementsByClassName('e-toolbar-item').item(2).classList.contains('e-active')).toEqual(true);
            tab.select(3);
            expect(tab.selectedItem).toEqual(0);
            expect(element.getElementsByClassName('e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('onPropertyChanged for selectedItem', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" }
                ]
             });
            tab.appendTo('#ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            tab.selectedItem = 1;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(1);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.getElementsByClassName('e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.getElementsByClassName('e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('TabItemHeader click event', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" }
                ]   
             });
            tab.appendTo('#ej2Tab');
            let element: HTMLElement = document.getElementById('ej2Tab');
            let toolbarElement: HTMLElement = <HTMLElement> document.querySelectorAll('.e-toolbar-item')[1];
            expect(element.getElementsByClassName('e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(tab.selectedItem).toEqual(0);
            toolbarElement.click();
            expect(tab.selectedItem).toEqual(1);
            expect(element.getElementsByClassName('e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
    });
    describe('Template based rendering', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> <div> item3 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>' 
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> <div> <div> <h1>Content3</h1> <p> text</p> </div>'
                + '</div> </div>';
            document.body.appendChild(ele);
            tab = new Tab();
            tab.appendTo('#ej2Tab');
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Control class testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.classList.contains('e-tab')).toEqual(true);
            expect(element.classList.contains('e-template')).toEqual(true);
        });
        it('Ensuring items property value exist or not class testing', () => {
            expect(tab.items).toEqual([]);
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.length).not.toEqual(0);
        });
        it('Template rendering with required child testing', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(element.children.length).toEqual(2);
            expect(element.children.item(0).classList.contains('e-header')).toEqual(true);
            expect(element.children.item(1).classList.contains('e-content')).toEqual(true);
        });
        it('Select method with template', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            tab.select(1);
            expect(tab.selectedItem).toEqual(1);
            expect(element.querySelectorAll('.e-content > .e-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.getElementsByClassName('e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
            expect(element.getElementsByClassName('e-item').item(1).classList.contains('e-active')).toEqual(true);
            tab.select(2);
            expect(tab.selectedItem).toEqual(2);
            expect(element.getElementsByClassName('e-toolbar-item').item(1).classList.contains('e-active')).toEqual(false);
            expect(element.getElementsByClassName('e-item').item(1).classList.contains('e-active')).toEqual(false);
            expect(element.getElementsByClassName('e-toolbar-item').item(2).classList.contains('e-active')).toEqual(true);
            expect(element.getElementsByClassName('e-item').item(2).classList.contains('e-active')).toEqual(true);
            tab.select(3);
            expect(tab.selectedItem).toEqual(0);
            expect(element.getElementsByClassName('e-item').item(0).classList.contains('e-active')).toEqual(true);
        });
        it('onPropertyChanged for selectedItem', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            expect(tab.selectedItem).toEqual(0);
            tab.selectedItem = 1;
            tab.dataBind();
            expect(tab.selectedItem).toEqual(1);
            expect(element.getElementsByClassName('e-toolbar-item').item(0).classList.contains('e-active')).toEqual(false);
            expect(element.getElementsByClassName('e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
        it('Tab header item click event', () => {
            let element: HTMLElement = document.getElementById('ej2Tab');
            let toolbarElement: HTMLElement = <HTMLElement> document.querySelectorAll('.e-toolbar-item')[1];
            expect(element.getElementsByClassName('e-toolbar-item').item(0).classList.contains('e-active')).toEqual(true);
            expect(tab.selectedItem).toEqual(0);
            toolbarElement.click();
            expect(tab.selectedItem).toEqual(1);
            expect(element.getElementsByClassName('e-toolbar-item').item(1).classList.contains('e-active')).toEqual(true);
        });
    });
    describe('Persistence property testing', () => {
        let tab: Tab;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - localStorage value', () => {
            window.localStorage.setItem('tabej2Tab', JSON.stringify({ actEleId: 'e-item_1' }));
            tab = new Tab({
                enablePersistence: true,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            expect(JSON.parse(window.localStorage.tabej2Tab).actEleId).toEqual('e-item_1');
        });
    });
    describe('Localization - Mouseover on close icon testing', () => {
        let tab: any;
        let mouseEventArgs: any;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
            L10n.load({
                'fr-BE': {
                    'tab': {
                        'title': "Cls",
                    }
                },
                'en-US': {
                    'tab': {
                        'title': 'Close',
                    }
                }
            });
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Defualt title value testing', () => {
            tab = new Tab({
                showCloseButton: true,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let trg: HTMLElement = <HTMLElement> document.querySelector('.e-close-icon');
            mouseEventArgs = {
                target: trg
            };
            tab.hoverHandler(mouseEventArgs);
            expect(document.querySelector('.e-close-icon').getAttribute('title')).toEqual('Close');
        });
        it('Items - New localization mapping to title text testing', () => {
            tab = new Tab({
                locale: 'fr-BE',
                showCloseButton: true,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let trg: HTMLElement = <HTMLElement> document.querySelector('.e-close-icon');
            mouseEventArgs = {
                target: trg
            };
            tab.hoverHandler(mouseEventArgs);
            expect(document.querySelector('.e-close-icon').getAttribute('title')).toEqual('Cls');
        });
        it('Items - Mapping invalid element', () => {
            tab = new Tab({
                locale: 'fr-BE',
                showCloseButton: true,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let trg: HTMLElement = <HTMLElement> document.querySelector('.e-close-icon').parentElement;
            mouseEventArgs = {
                target: trg
            };
            tab.hoverHandler(mouseEventArgs);
            expect(document.querySelector('.e-close-icon').getAttribute('title')).not.toEqual('Cls');
        });
        it('Template - Default title text testing', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                showCloseButton: true
            });
            tab.appendTo('#ej2Tab');
            let trg: HTMLElement = <HTMLElement> document.querySelector('.e-close-icon');
            mouseEventArgs = {
                target: trg
            };
            tab.hoverHandler(mouseEventArgs);
            expect(document.querySelector('.e-close-icon').getAttribute('title')).toEqual('Close');
        });
        it('Template - New localization mapping with title text testing', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                showCloseButton: true,
                locale: 'fr-BE'
            });
            tab.appendTo('#ej2Tab');
            let trg: HTMLElement = <HTMLElement> document.querySelector('.e-close-icon');
            mouseEventArgs = {
                target: trg
            };
            tab.hoverHandler(mouseEventArgs);
            expect(document.querySelector('.e-close-icon').getAttribute('title')).toEqual('Cls');
        });
        it('Template - Mapping invalid element', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                showCloseButton: true,
                locale: 'fr-BE'
            });
            tab.appendTo('#ej2Tab');
            let trg: HTMLElement = <HTMLElement> document.querySelector('.e-close-icon').parentElement;
            mouseEventArgs = {
                target: trg
            };
            tab.hoverHandler(mouseEventArgs);
            expect(document.querySelector('.e-close-icon').getAttribute('title')).not.toEqual('Cls');
        });
    });
    describe('Border element testing', () => {
        let tab: Tab;
        beforeAll((): void => {
            let css: string = ".e-hor-nav { position: absolute }";
            let style: HTMLStyleElement = document.createElement('style'); 
            style.type = 'text/css';
            style.id = 'scroll';
            let styleNode: Node = style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
        });
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        afterAll((): void => {
            document.getElementById('scroll').remove();
        });
        it('Items - Border element class list and availability checking', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let ele: HTMLElement = document.getElementById('ej2Tab');
            expect((<HTMLElement> ele.querySelector('.e-toolbar-items').firstChild).classList.contains('e-indicator')).toEqual(true);
            expect((<HTMLElement> ele.querySelector('.e-toolbar-items').firstChild).classList.contains('e-ignore')).toEqual(true);
            expect((<HTMLElement> ele.querySelector('.e-toolbar-items').firstChild).classList.contains('e-hidden')).toEqual(false);
        });
        it('Items - Scrollable mode border element appended place checking', () => {
            tab = new Tab({
                width: 50,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let ele: HTMLElement = document.getElementById('ej2Tab');
            expect((<HTMLElement> ele.querySelector('.e-hscroll-content').firstChild).classList.contains('e-indicator')).toEqual(true);
        });
        it('Template - Border element class list and availability checking', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab();
            tab.appendTo('#ej2Tab');
            expect((<HTMLElement> ele.querySelector('.e-toolbar-items').firstChild).classList.contains('e-indicator')).toEqual(true);
            expect((<HTMLElement> ele.querySelector('.e-toolbar-items').firstChild).classList.contains('e-ignore')).toEqual(true);
            expect((<HTMLElement> ele.querySelector('.e-toolbar-items').firstChild).classList.contains('e-hidden')).toEqual(false);
        });
        it('Template - Scrollable mode Border element appended place checking', () => {
            let ele: HTMLElement = document.getElementById('ej2Tab');
            ele.innerHTML = '<div class="e-header"> <div> item1 </div> <div> item2 </div> </div>'
                + '<div class="e-content"> <div> <div> <h1>Content1</h1> <p> text</p> </div> </div> <div>'
                + '<div> <h1>Content2</h1> <p> text</p> </div> </div> </div>';
            tab = new Tab({
                width: 50
            });
            tab.appendTo('#ej2Tab');
            expect((<HTMLElement> ele.querySelector('.e-hscroll-content').firstChild).classList.contains('e-indicator')).toEqual(true);
        });
    });
    describe('Swipe event testing', () => {
        let tab: any;
        let swipeEventArgs: any;
        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Items - Swipe right and left testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            swipeEventArgs = {
                preventDefault: function () { },
                swipeDirection: 'Left',
                originalEvent: {
                    changedTouches: {}
                }
            };
            tab.swipeHandler(swipeEventArgs);
            let ele: HTMLElement = document.getElementById('ej2Tab');
            expect(ele.querySelector('#e-item_1').classList.contains('e-active')).toEqual(true);
            swipeEventArgs = {
                preventDefault: function () { },
                swipeDirection: 'Right'
            };
            tab.swipeHandler(swipeEventArgs);
            expect(ele.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
        });
        it('Items - Swipe right and left testing', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            swipeEventArgs = {
                preventDefault: function () { },
                swipeDirection: 'Left',
                velocity: 0.58,
                originalEvent: { }
            };
            tab.swipeHandler(swipeEventArgs);
            let ele: HTMLElement = document.getElementById('ej2Tab');
            expect(ele.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
        });
        it('Items - Swipe left to right testing', () => {
            tab = new Tab({
                width: 100,
                selectedItem: 3,
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" },
                    { header: { "text": "item3" }, content: "Content3" },
                    { header: { "text": "item4" }, content: "Content4" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let ele: HTMLElement = document.getElementById('ej2Tab');
            expect(ele.querySelector('#e-item_3').classList.contains('e-active')).toEqual(true);
            swipeEventArgs = {
                preventDefault: function () { },
                swipeDirection: 'Right'
            };
            tab.swipeHandler(swipeEventArgs);
            expect(ele.querySelector('#e-item_2').classList.contains('e-active')).toEqual(true);
            swipeEventArgs = {
                preventDefault: function () { },
                swipeDirection: 'Right'
            };
            tab.swipeHandler(swipeEventArgs);
            expect(ele.querySelector('#e-item_1').classList.contains('e-active')).toEqual(true);
        });
        it('Items - Swipe top and bottom', () => {
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            swipeEventArgs = {
                preventDefault: function () { },
                swipeDirection: 'Top'
            };
            tab.swipeHandler(swipeEventArgs);
            let ele: HTMLElement = document.getElementById('ej2Tab');
            expect(ele.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
            swipeEventArgs = {
                preventDefault: function () { },
                swipeDirection: 'Bottom'
            };
            tab.swipeHandler(swipeEventArgs);
            expect(ele.querySelector('#e-item_0').classList.contains('e-active')).toEqual(true);
        });
    });
    describe('Cross browser tab element class testing', () => {
        let tab: any;
        let ieUa: string = 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; .NET4.0E; .NET4.0C; ' +
        'Tablet PC 2.0; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; InfoPath.3; rv:11.0) like Gecko';
        let safari: string = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_90) AppleWebKit/602.4.8 ' +
        '(KHTML, like Gecko) Version/10.0.3 Safari/602.4.8';
        let edge: string = 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240';
        let box: string = 'Mozilla/5.0 (Windows NT 6.1; rv:23.0) Gecko/20100101 Firefox/23.0';

        beforeEach((): void => {
            tab = undefined;
            let ele: HTMLElement = createElement('div', { id: 'ej2Tab' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (tab) {
                tab.destroy();
            }
            document.body.innerHTML = '';
        });
        it('Default', () => {
            Browser.userAgent = box;
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let ele: HTMLElement = document.getElementById('ej2Tab');
            expect(ele.classList.contains('e-ie')).toEqual(false);
            expect(ele.classList.contains('e-edge')).toEqual(false);
            expect(ele.classList.contains('e-safari')).toEqual(false);
        });
        it('User Agent as IE', () => {
            Browser.userAgent = ieUa;
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let ele: HTMLElement = document.getElementById('ej2Tab');
            expect(ele.classList.contains('e-ie')).toEqual(true);
        });
        it('User Agent as Edge', () => {
            Browser.userAgent = edge;
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let ele: HTMLElement = document.getElementById('ej2Tab');
            expect(ele.classList.contains('e-edge')).toEqual(true);
        });
        it('User Agent as Safari', () => {
            Browser.userAgent = safari;
            tab = new Tab({
                items: [
                    { header: { "text": "item1" }, content: "Content1" },
                    { header: { "text": "item2" }, content: "Content2" }
                ]
            });
            tab.appendTo('#ej2Tab');
            let ele: HTMLElement = document.getElementById('ej2Tab');
            expect(ele.classList.contains('e-safari')).toEqual(true);
        });
    });
});