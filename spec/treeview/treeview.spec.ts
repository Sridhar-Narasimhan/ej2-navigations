/**
 * TreeView spec document
 */

import { createElement, Browser } from '@syncfusion/ej2-base';
import { EventHandler, EmitType } from '@syncfusion/ej2-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { TreeView } from "../../src/treeview/treeview";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { hierarchicalData, hierarchicalData1, hierarchicalData2, hierarchicalData3, localData, localData1, localData2, localData3, remoteData, remoteData1, remoteData2, remoteData2_1, remoteData1_1, hierarchicalData4, localData4 } from '../../spec/treeview/datasource.spec';
import '../../node_modules/es6-promise/dist/es6-promise';

function copyObject(source: any, destiation: any): Object {
    for (let prop in source) {
        destiation[prop] = source[prop];
    }
    return destiation;
}

function getEventObject(eventType: string, eventName: string, currentTarget?: Element, target?: Element, x?: number, y?: number): Object {
    let tempEvent: any = document.createEvent(eventType);
    tempEvent.initEvent(eventName, true, true);
    let returnObject: any = copyObject(tempEvent, {});
    returnObject.preventDefault = () => { return true; };

    if (!isNullOrUndefined(x)) {
        returnObject.pageX = x;
        returnObject.clientX = x;
    }
    if (!isNullOrUndefined(y)) {
        returnObject.pageY = y;
        returnObject.clientY = y;
    }
    if (!isNullOrUndefined(currentTarget)) {
        returnObject.currentTarget = currentTarget;
    }
    if (!isNullOrUndefined(target)) {
        returnObject.target = returnObject.srcElement = returnObject.toElement = target;
        returnObject.offsetY = 7;
    }

    return returnObject;
}

function setMouseCordinates(eventarg: any, x: number, y: number): Object {
    eventarg.pageX = x;
    eventarg.pageY = y;
    eventarg.clientX = x;
    eventarg.clientY = y;
    eventarg.offsetY = 7;
    return eventarg;
}

describe('TreeView control', () => {
    describe('DOM element testing', () => {
        let treeObj: TreeView;
        beforeEach((): void => {
            let Chromebrowser: string = "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36";
            Browser.userAgent = Chromebrowser;
            treeObj = undefined;
            let ele: HTMLElement = createElement('div', { id: 'tree1' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (treeObj)
                treeObj.destroy();
            document.body.innerHTML = '';
        });
        it('with base class', () => {
            treeObj = new TreeView({},'#tree1');
            expect(document.getElementById('tree1').classList.contains('e-control')).toEqual(true);
            expect(document.getElementById('tree1').classList.contains('e-treeview')).toEqual(true);
        });
    });
    describe('Hierarchical data binding testing', () => {
        describe('Default functionality testing', () => {
            let mouseEventArgs: any = {
                preventDefault: (): void => {},
                stopImmediatePropagation: (): void => {},
                target: null,
                type: null,
            };
            let treeObj: any;
            beforeEach((): void => {
                treeObj = undefined;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
            });
            it('with null fields', () => {
                treeObj = new TreeView({ fields: null },'#tree1');
                expect(treeObj.element.querySelectorAll('li').length).toBe(0);
            });
            it('with empty fields', () => {
                treeObj = new TreeView({ fields: {} },'#tree1');
                expect(treeObj.element.querySelectorAll('li').length).toBe(0);
            });
            it('with null datasource', () => {
                treeObj = new TreeView({ fields: { dataSource: null } },'#tree1');
                expect(treeObj.element.querySelectorAll('li').length).toBe(0);
            });
            it('with empty datasource', () => {
                treeObj = new TreeView({ fields: { dataSource: [] } },'#tree1');
                expect(treeObj.element.querySelectorAll('li').length).toBe(0);
            });
            it('selectedNodes property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData },
                    selectedNodes: ['30']
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li.length).toBe(10);
                    expect(li[0].classList.contains('e-active')).toBe(false);
                    expect(li[9].classList.contains('e-active')).toBe(true);
                    done();
                }, 450);
            });
            it('without mapping fields', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData },
                    fullRowSelect: false,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelectorAll('li').length).toBe(10);
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Artwork');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe("1");
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Artwork node');
                    expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                    expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://npmci.syncfusion.com/')).not.toBe(-1);
                    let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(newli[2].childElementCount).toBe(2);
                    expect((newli[2].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((newli[2].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(newli[2].getAttribute('aria-expanded')).toBe('true');
                    expect(newli[3].childElementCount).toBe(2);
                    expect((newli[3].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((newli[3].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(newli[3].getAttribute('aria-expanded')).toBe('true');
                    mouseEventArgs.target = newli[0].querySelector('.e-icons');
                    expect(newli[0].childElementCount).toBe(1);
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(newli[0].childElementCount).toBe(2);
                        expect((newli[0] as Element).querySelector('.e-list-item').getAttribute('data-uid')).toBe('2');
                        expect(newli[0].querySelector('.e-list-parent').querySelector('.e-list-text').innerHTML).toBe('Abstract');
                        expect(document.getElementById('tree1').classList.contains('customTree')).toEqual(false);
                        expect(document.getElementById('tree1').classList.contains('productTree')).toEqual(false);
                        done();
                    }, 450);
                }, 500);
            });
            it('with mapping fields', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild", expanded: 'nodeExpanded', navigateUrl: 'nodeUrl',
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr', selected: 'nodeSelected' },
                    cssClass: 'customTree productTree',
                    fullRowSelect: false,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelectorAll('li').length).toBe(13);
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                    expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                    expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://npmci.syncfusion.com/')).not.toBe(-1);
                    let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(newli[3].childElementCount).toBe(2);
                    expect((newli[3].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((newli[3].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(newli[3].getAttribute('aria-expanded')).toBe('true');
                    expect(newli[4].childElementCount).toBe(2);
                    expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(newli[4].getAttribute('aria-expanded')).toBe('true');
                    mouseEventArgs.target = newli[0].querySelector('.e-icons');
                    expect(newli[0].childElementCount).toBe(1);
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(newli[0].childElementCount).toBe(2);
                        expect((newli[0] as Element).querySelector('.e-list-item').getAttribute('data-uid')).toBe('01-01');
                        expect(newli[0].querySelector('.e-list-parent').querySelector('.e-list-text').innerHTML).toBe('Gouttes.mp3');
                        expect(document.getElementById('tree1').classList.contains('customTree')).toEqual(true);
                        expect(document.getElementById('tree1').classList.contains('productTree')).toEqual(true);
                        done();
                    }, 450);
                }, 500);
            });
            it('sortOrder property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild",
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr', selected: 'nodeSelected' },
                    sortOrder: 'Ascending'
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelectorAll('li').length).toBe(5);
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Documents');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('03');
                    done();
                }, 100);
            });
            it('allowEditing property with default value testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild",
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', },
                    fullRowSelect: false,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    mouseEventArgs.target = li[0].querySelector('.e-list-text');
                    mouseEventArgs.type = 'dblclick';
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    expect(li[0].childElementCount).toBe(1);
                    expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                    treeObj.expandHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(false);
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                        expect(li[0].childElementCount).toBe(2);
                        expect(li[0].getAttribute('aria-expanded')).toBe('true');
                        expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                        done();
                    }, 450);
                }, 100);
            });
            it('allowEditing property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild",
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', },
                    allowEditing: true,
                    fullRowSelect: false,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    mouseEventArgs.target = li[0].querySelector('.e-list-text');
                    mouseEventArgs.type = 'dblclick';
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    expect(li[0].childElementCount).toBe(1);
                    expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                    treeObj.expandHandler(mouseEventArgs);
                    treeObj.editingHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[0].childElementCount).toBe(1);
                        expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                        expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                        expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music');
                        (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music node';
                        (li[0].querySelector('.e-tree-input') as HTMLInputElement).blur();
                        expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                        expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                        mouseEventArgs.target = li[0].querySelector('.e-list-item');
                        treeObj.editingHandler(mouseEventArgs);
                        expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                        done();
                    }, 100);
                }, 100);
            });
            it('enableRtl property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild",
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr', selected: 'nodeSelected' },
                    enableRtl: true,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.classList.contains('e-rtl')).toBe(true);
                    done();
                }, 100);
            });
            it('showCheckBox property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild",
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr', selected: 'nodeSelected' },
                        showCheckBox: true,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let checkEle: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-checkbox-wrapper');
                    expect(checkEle.length).toBeGreaterThan(0);
                    done();
                }, 100);
            });
            it('allowDragAndDrop property with default value testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild" },
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.dragObj).toBe(undefined);
                    expect(treeObj.dropObj).toBe(undefined);
                    done();
                }, 100);
            });
            it('allowDragAndDrop property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild" },
                    allowDragAndDrop: true,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.dragObj).not.toBe(undefined);
                    expect(treeObj.dropObj).not.toBe(undefined);
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[0].querySelector('.e-list-text'), 15, 10);
                    EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                    let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[0].querySelector('.e-list-text'), 15, 70);
                    EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                    mousemove.srcElement = mousemove.target = mousemove.toElement = li[0].querySelector('.e-list-text');
                    mousemove = setMouseCordinates(mousemove, 15, 75);
                    EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                    let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[0].querySelector('.e-list-text'));
                    mouseup.type = 'mouseup';
                    EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                    done();
                }, 100);
            });
            it('fullRowSelect property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild", iconCss: 'nodeIcon', imageUrl: 'nodeImage', },
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.classList.contains('e-fullrow-wrap')).toBe(true);
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].childElementCount).toBe(2);
                    done();
                }, 100);
            });
            it('allowMultiSelection property testing with default value', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData3, id: "nodeId", text: "nodeText", child: "nodeChild", selected: 'nodeSelected1', },
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    // check selected attribute
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(1);
                    expect(treeObj.selectedNodes).toContain('01');
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                    // select node with id
                    li[1].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(false);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(1);
                    expect(treeObj.selectedNodes).not.toContain('01');
                    expect(treeObj.selectedNodes).toContain('02');
                    // checking ctrl key
                    li[1].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(false);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(1);
                    expect(treeObj.selectedNodes).not.toContain('01');
                    expect(treeObj.selectedNodes).toContain('02');
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, shiftKey: true });
                    // checking shift key
                    li[3].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(false);
                    expect(li[1].classList.contains('e-active')).toBe(false);
                    expect(li[2].classList.contains('e-active')).toBe(false);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(1);
                    expect(treeObj.selectedNodes).not.toContain('01');
                    expect(treeObj.selectedNodes).not.toContain('02');
                    expect(treeObj.selectedNodes).not.toContain('03');
                    expect(treeObj.selectedNodes).toContain('04');
                    done();
                }, 100);
            });
            it('allowMultiSelection property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData3, id: "nodeId", text: "nodeText", child: "nodeChild", selected: 'nodeSelected1', },
                    allowMultiSelection: true,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(2);
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('04');
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                    // select node with id
                    li[1].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(3);
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('02');
                    expect(treeObj.selectedNodes).toContain('04');
                    // unselect node with id
                    li[1].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[1].classList.contains('e-active')).toBe(false);
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(2);
                    expect(treeObj.selectedNodes).not.toContain('02');
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('04');
                    // select node without id
                    li[7].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[1].classList.contains('e-active')).toBe(false);
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(li[7].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(2);
                    expect(treeObj.selectedNodes).not.toContain('02');
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('04');
                    expect(treeObj.selectedNodes).not.toContain(null);
                    // unselect node without id
                    li[7].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[1].classList.contains('e-active')).toBe(false);
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(li[7].classList.contains('e-active')).toBe(false);
                    expect(treeObj.selectedNodes.length).toBe(2);
                    expect(treeObj.selectedNodes).not.toContain('02');
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('04');
                    expect(treeObj.selectedNodes).not.toContain(null);
                    done();
                }, 100);
            });
            it('allowMultiSelection property testing with shift key', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData3, id: "nodeId", text: "nodeText", child: "nodeChild", },
                    allowMultiSelection: true,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, shiftKey: true });
                    // select middle node
                    li[1].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(1);
                    expect(treeObj.selectedNodes).toContain('02');
                    // select first node
                    li[0].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(2);
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('02');
                    // select next node
                    li[3].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(false);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(li[2].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(3);
                    expect(treeObj.selectedNodes).not.toContain('01');
                    expect(treeObj.selectedNodes).toContain('02');
                    expect(treeObj.selectedNodes).toContain('03');
                    expect(treeObj.selectedNodes).toContain('04');
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, });
                    // expand first node
                    li[0].querySelector('.e-icons').dispatchEvent(e);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        // collpase first node
                        li[0].querySelector('.e-icons').dispatchEvent(e);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, shiftKey: true });
                            // check invisible node
                            newli[0].querySelector('.e-list-text').dispatchEvent(e);
                            expect(newli[0].classList.contains('e-active')).toBe(true);
                            expect(newli[1].classList.contains('e-active')).toBe(false);
                            expect(newli[2].classList.contains('e-active')).toBe(true);
                            expect(newli[3].classList.contains('e-active')).toBe(false);
                            expect(newli[4].classList.contains('e-active')).toBe(false);
                            expect(treeObj.selectedNodes.length).toBe(2);
                            expect(treeObj.selectedNodes).toContain('01');
                            expect(treeObj.selectedNodes).not.toContain('01-01');
                            expect(treeObj.selectedNodes).toContain('02');
                            expect(treeObj.selectedNodes).not.toContain('03');
                            expect(treeObj.selectedNodes).not.toContain('04');
                            done();
                        }, 450);
                    }, 450);
                }, 100);
            });
            it('allowMultiSelection property testing with selected attribute', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData3, id: "nodeId", text: "nodeText", child: "nodeChild", selected: 'nodeSelected1', expanded: 'nodeExpanded1' },
                    allowMultiSelection: true,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(li[4].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(3);
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('04');
                    expect(treeObj.selectedNodes).toContain('04-01');
                    done();
                }, 100);
            });
            it('allowMultiSelection property testing with selectedNodes', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData3, id: "nodeId", text: "nodeText", child: "nodeChild", selected: 'nodeSelected1', expanded: 'nodeExpanded1' },
                    allowMultiSelection: true,
                    selectedNodes: ['02', '03', '04-02']
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].classList.contains('e-active')).toBe(false);
                    expect(li[3].classList.contains('e-active')).toBe(false);
                    expect(li[4].classList.contains('e-active')).toBe(false);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(li[2].classList.contains('e-active')).toBe(true);
                    expect(li[8].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(3);
                    expect(treeObj.selectedNodes).not.toContain('01');
                    expect(treeObj.selectedNodes).not.toContain('04');
                    expect(treeObj.selectedNodes).not.toContain('04-01');
                    expect(treeObj.selectedNodes).toContain('02');
                    expect(treeObj.selectedNodes).toContain('03');
                    expect(treeObj.selectedNodes).toContain('04-02');
                    done();
                }, 100);
            });
            it('template support testing with draw event', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild", expanded: 'nodeExpanded1' },
                    drawNode: (args) => {
                        var rowDiv = document.createElement('span');
                        if (!args.node.querySelector('.e-icons')) {
                            rowDiv.className += 'child';
                        } else {
                            rowDiv.className += 'parent';
                        }
                        args.node.children[1].appendChild(rowDiv);
                    },
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                    expect(li[0].querySelector('.parent')).not.toBe(null);
                    expect(li[0].querySelector('.child')).toBe(null);
                    expect(li[1].querySelector('.child')).not.toBe(null);
                    expect(li[1].querySelector('.parent')).toBe(null);
                    done();
                }, 450);
            });
            it('template support testing with string', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild", expanded: 'nodeExpanded1' },
                    nodeTemplate: '${if(nodeChild == undefined)}<b>${nodeText}</b>${else}<i>${nodeText}</i>${/if}',
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                    expect(li[0].querySelector('i')).not.toBe(null);
                    expect(li[0].querySelector('b')).toBe(null);
                    expect(li[1].querySelector('b')).not.toBe(null);
                    expect(li[1].querySelector('i')).toBe(null);
                    done();
                }, 450);
            });
            it('template support testing with script', (done: Function) => {
                let template: Element = createElement('div', { id: 'template' });
                template.innerHTML = '${if(nodeChild == undefined)}<b>${nodeText}</b>${else}<i>${nodeText}</i>${/if}';
                document.body.appendChild(template);    
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild", expanded: 'nodeExpanded1' },
                    nodeTemplate: '#template',
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                    expect(li[0].querySelector('i')).not.toBe(null);
                    expect(li[0].querySelector('b')).toBe(null);
                    expect(li[1].querySelector('b')).not.toBe(null);
                    expect(li[1].querySelector('i')).toBe(null);
                    done();
                }, 450);
            });
        });
        describe('property change testing', () => {
            let mouseEventArgs: any = {
                preventDefault: (): void => {},
                stopImmediatePropagation: (): void => {},
                target: null,
                type: null,
            };
            let treeObj: any;
            beforeEach(() => {
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData2, id: "nodeId", text: "nodeText", child: "nodeChild", selected: 'nodeSelected', navigateUrl: 'nodeUrl',
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr' },
                    fullRowSelect: false,
                });
                treeObj.appendTo(ele);
            });
            afterEach(() => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
            });
            it('dataSource property', () => {
                expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields.dataSource = hierarchicalData1;
                treeObj.dataBind();
                expect(treeObj.element.querySelectorAll('li').length).toBe(5);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields text property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { text: 'subText' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Pictures');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields id property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { id: 'subId' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('21');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields child property', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                expect(li[0].childElementCount).toBe(1);
                treeObj.clickHandler(mouseEventArgs);
                expect(li[0].childElementCount).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(li[0].querySelector('.e-list-parent').querySelector('.e-list-text').innerHTML).toBe('Wind.jpg');
                expect(li[0].querySelector('.e-list-parent').querySelector('.e-list-item').getAttribute('data-uid')).toBe('01-01');
                let cli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(cli[1].childElementCount).toBe(1);
                mouseEventArgs.target = cli[1].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                expect(cli[1].childElementCount).toBe(1);
                expect(cli[1].querySelector('.e-icons')).toBe(null);
                treeObj.fields = { child: "subChild" };
                treeObj.dataBind();
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = newli[0].querySelector('.e-icons');
                expect(newli[0].childElementCount).toBe(1);
                treeObj.clickHandler(mouseEventArgs);
                expect(newli[0].childElementCount).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(newli[0].querySelector('.e-list-parent').querySelector('.e-list-text').innerHTML).toBe('Gouttes.jpg');
                expect(newli[0].querySelector('.e-list-parent').querySelector('.e-list-item').getAttribute('data-uid')).toBe('21-01');
                let dli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(dli[1].childElementCount).toBe(1);
                mouseEventArgs.target = dli[1].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                expect(dli[1].childElementCount).toBe(1);
                expect(cli[1].querySelector('.e-icons')).toBe(null);
            });
            it('fields iconCss property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { iconCss: 'subIcon' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('file')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields imageUrl property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { imageUrl: 'subImage' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Cricket.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields tooltip property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { tooltip: 'subTooltip' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Pictures node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields htmlAttributes property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { htmlAttributes: 'subHtmlAttr' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('customnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('blue');
            });
            it('fields expanded property', () => {
                expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { expanded: 'subExpanded' };
                treeObj.dataBind();
                expect(treeObj.element.querySelectorAll('li').length).toBe(3);
                expect(treeObj.element.querySelectorAll('li')[0].childElementCount).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[2].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[2].style.backgroundColor).toBe('red');
            });
            it('fields selected property', () => {
                expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { selected: 'subSelected' };
                treeObj.dataBind();
                expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields url property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://npmci.syncfusion.com/')).not.toBe(-1);
                treeObj.fields = { navigateUrl: 'subUrl' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://npmci.syncfusion.com/')).toBe(-1);
                expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://ej2.syncfusion.com/demos/')).not.toBe(-1);
            });
            it('expandOn property testing', (done: Function) => {
                treeObj.expandOn = 'click';
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[0].childElementCount).toBe(1);
                treeObj.expandHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(li[0].childElementCount).toBe(2);
                    expect(li[0].getAttribute('aria-expanded')).toBe('true');
                    treeObj.expandHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                        expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[0].getAttribute('aria-expanded')).toBe('false');
                        expect((li[0]).classList.contains('e-node-collapsed')).toBe(true);
                        treeObj.expandHandler(mouseEventArgs);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                            expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                            expect(li[0].getAttribute('aria-expanded')).toBe('true');                    
                            expect((li[0]).classList.contains('e-node-collapsed')).toBe(false);                  
                            let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            expect(newli[1].querySelector('.e-icons')).toBe(null);
                            expect(newli[1].childElementCount).toBe(1);
                            expect(newli[1].getAttribute('aria-expanded')).toBe(null);
                            done();
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('cssClass property testing', () => {
                treeObj.cssClass = 'customTree productTree';
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('customTree')).toEqual(true);
                expect(document.getElementById('tree1').classList.contains('productTree')).toEqual(true);
                expect(document.getElementById('tree1').classList.contains('dynamicTree')).toEqual(false);
                expect(document.getElementById('tree1').classList.contains('demoTree')).toEqual(false);
                treeObj.cssClass = 'dynamicTree demoTree';
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('customTree')).toEqual(false);
                expect(document.getElementById('tree1').classList.contains('productTree')).toEqual(false);
                expect(document.getElementById('tree1').classList.contains('dynamicTree')).toEqual(true);
                expect(document.getElementById('tree1').classList.contains('demoTree')).toEqual(true);
                treeObj.cssClass = '';
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('dynamicTree')).toEqual(false);
                expect(document.getElementById('tree1').classList.contains('demoTree')).toEqual(false);
            });
            it('selectedNodes property testing', () => {
                expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('e-active')).toBe(false);
                treeObj.selectedNodes = ['02'];
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('e-active')).toBe(true);
            });
            it('sortOrder property testing', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li.length).toBe(2);
                expect(li[0].querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(li[0].getAttribute('data-uid')).toBe('01');
                treeObj.sortOrder = 'Ascending';
                treeObj.dataBind();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li1: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li1.length).toBe(2);
                    expect(li1[0].querySelector('.e-list-text').innerHTML).toBe('Downloads');
                    expect(li1[0].getAttribute('data-uid')).toBe('02');
                    treeObj.sortOrder = 'Descending';
                    treeObj.dataBind();
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        let li2: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                        expect(li2.length).toBe(2);
                        expect(li2[0].querySelector('.e-list-text').innerHTML).toBe('Music');
                        expect(li2[0].getAttribute('data-uid')).toBe('01');
                        treeObj.sortOrder = 'Ascending';
                        treeObj.dataBind();
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            let li3: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            expect(li3.length).toBe(2);
                            expect(li3[0].querySelector('.e-list-text').innerHTML).toBe('Downloads');
                            expect(li3[0].getAttribute('data-uid')).toBe('02');
                            treeObj.sortOrder = 'None';
                            treeObj.dataBind();
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                let li4: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                                expect(li4.length).toBe(2);
                                expect(li4[0].querySelector('.e-list-text').innerHTML).toBe('Music');
                                expect(li4[0].getAttribute('data-uid')).toBe('01');
                                done();
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            });
            it('allowEditing property testing', (done: Function) => {
                treeObj.allowEditing = true;
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                mouseEventArgs.type = 'dblclick';
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[0].childElementCount).toBe(1);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                treeObj.expandHandler(mouseEventArgs);
                treeObj.editingHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    expect(li[0].childElementCount).toBe(1);
                    expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                    expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                    expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music');
                    (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music node';
                    (li[0].querySelector('.e-tree-input') as HTMLInputElement).blur();
                    expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                    expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                    treeObj.allowEditing = false;
                    treeObj.dataBind();
                    treeObj.expandHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(false);
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                        expect(li[0].childElementCount).toBe(2);
                        expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                        done();
                    }, 450);
                }, 100);
            });
            it('enableRtl property testing', () => {
                expect(document.getElementById('tree1').classList.contains('e-rtl')).toEqual(false);
                treeObj.enableRtl = true;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-rtl')).toEqual(true);
                treeObj.enableRtl = false;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-rtl')).toEqual(false);
            });
            it('allowDragAndDrop property testing', () => {
                expect(treeObj.dragObj).toBe(undefined);
                expect(treeObj.dropObj).toBe(undefined);
                treeObj.allowDragAndDrop = true;
                treeObj.dataBind();
                expect(treeObj.dragObj.isDestroyed).toBe(false);
                expect(treeObj.dropObj.isDestroyed).toBe(false);
                treeObj.allowDragAndDrop = false;
                treeObj.dataBind();
                expect(treeObj.dragObj.isDestroyed).toBe(true);
                expect(treeObj.dropObj.isDestroyed).toBe(true);
            });
            it('fullRowSelect property testing', () => {
                expect(document.getElementById('tree1').classList.contains('e-fullrow-wrap')).toEqual(false);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(1);
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-fullrow-wrap')).toEqual(true);
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(newli[0].childElementCount).toBe(2);
                treeObj.fullRowSelect = false;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-fullrow-wrap')).toEqual(false);
                let cusli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(cusli[0].childElementCount).toBe(1);
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-fullrow-wrap')).toEqual(true);
            });
            it('allowMultiSelection property testing', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-active')).toBe(true);
                expect(li[1].classList.contains('e-active')).toBe(false);
                expect(treeObj.selectedNodes.length).toBe(1);
                expect(treeObj.selectedNodes).toContain('01');
                treeObj.allowMultiSelection = true;
                treeObj.dataBind();
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                li[1].querySelector('.e-list-text').dispatchEvent(e);
                expect(li[0].classList.contains('e-active')).toBe(true);
                expect(li[1].classList.contains('e-active')).toBe(true);
                expect(treeObj.selectedNodes.length).toBe(2);
                expect(treeObj.selectedNodes).toContain('01');
                expect(treeObj.selectedNodes).toContain('02');
                treeObj.allowMultiSelection = false;
                treeObj.dataBind();
                expect(li[0].classList.contains('e-active')).toBe(true);
                expect(li[1].classList.contains('e-active')).toBe(false);
                expect(treeObj.selectedNodes.length).toBe(1);
                expect(treeObj.selectedNodes).toContain('01');
                expect(treeObj.selectedNodes).not.toContain('02');
            });
            it('nodeTemplate property testing', () => {
                let template: Element = createElement('div', { id: 'template' });
                template.innerHTML = '${if(nodeChild == undefined)}<b>${nodeText}</b>${else}<i>${nodeText}</i>${/if}';
                document.body.appendChild(template);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                expect(li[0].querySelector('i')).toBe(null);
                expect(li[0].querySelector('b')).toBe(null);
                treeObj.nodeTemplate = 'template';
                treeObj.dataBind();
                let nli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                expect(nli[0].querySelector('i')).toBe(null);
                expect(nli[0].querySelector('b')).toBe(null);
                treeObj.nodeTemplate = null;
                treeObj.dataBind();
                let mli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                expect(mli[0].querySelector('i')).toBe(null);
                expect(mli[0].querySelector('b')).toBe(null);
                treeObj.nodeTemplate = '#template';
                treeObj.dataBind();
                let ali: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                expect(ali[0].querySelector('i')).not.toBe(null);
                expect(ali[0].querySelector('b')).toBe(null);
                treeObj.nodeTemplate = '${if(nodeChild == undefined)}<b>${nodeText}</b>${else}<i>${nodeText}</i>${/if}';
                treeObj.dataBind();
                let bli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                expect(bli[0].querySelector('i')).not.toBe(null);
                expect(bli[0].querySelector('b')).toBe(null);
            });
            it('dataSource with null and empty', () => {
                expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                treeObj.fields.dataSource = null;
                treeObj.dataBind();
                expect(treeObj.element.querySelectorAll('li').length).toBe(0);
                treeObj.fields.dataSource = [];
                treeObj.dataBind();
                expect(treeObj.element.querySelectorAll('li').length).toBe(0);
            });
        });
        describe('mouse events testing', () => {
            let mouseEventArgs: any = {
                preventDefault: (): void => {},
                stopImmediatePropagation: (): void => {},
                target: null,
                type: null,
            };
            let treeObj: any;
            let ele: HTMLElement = createElement('div', { id: 'tree1' });
            beforeAll(() => {
                document.body.appendChild(ele);
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    fullRowSelect: false,
                });
                treeObj.appendTo(ele);
            });
            afterAll(() => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
            });
            it('mouse click on expand/collapse icon', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[3].querySelector('.e-icons');
                expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[3].childElementCount).toBe(1);
                expect(treeObj.element.querySelectorAll('[aria-expanded="true"]').length).toBe(0);
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(li[3].childElementCount).toBe(2);
                    expect(li[3].getAttribute('aria-expanded')).toBe('true');
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                        expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[3].getAttribute('aria-expanded')).toBe('false');
                        treeObj.clickHandler(mouseEventArgs);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                            expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                            expect(li[3].getAttribute('aria-expanded')).toBe('true');
                            let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            mouseEventArgs.target = newli[4].querySelector('.e-icons');
                            expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                            expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                            expect(newli[4].childElementCount).toBe(1);
                            treeObj.clickHandler(mouseEventArgs);
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                                expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                                expect(newli[4].childElementCount).toBe(2);
                                expect(li[3].getAttribute('aria-expanded')).toBe('true');
                                expect(newli[4].getAttribute('aria-expanded')).toBe('true');
                                treeObj.clickHandler(mouseEventArgs);
                                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                                setTimeout(function() {
                                    expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                                    expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                                    expect(newli[4].getAttribute('aria-expanded')).toBe('false');
                                    done();
                                }, 450);
                            }, 450);
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('mouse click on text', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[1].querySelector('.e-text-content');
                expect((li[1] as Element).classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(0);
                treeObj.clickHandler(mouseEventArgs);
                expect((li[1] as Element).classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(li[1].getAttribute('aria-selected')).toBe('true');
                mouseEventArgs.target = li[0].querySelector('.e-text-content');
                expect((li[0] as Element).classList.contains('e-active')).toBe(false);            
                treeObj.clickHandler(mouseEventArgs);            
                expect((li[1] as Element).classList.contains('e-active')).toBe(false);
                expect((li[0] as Element).classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(li[0].getAttribute('aria-selected')).toBe('true');
            });
            it('mouse click on ul', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let ul: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('ul');
                mouseEventArgs.target = ul[0];
                expect((li[0] as Element).classList.contains('e-active')).toBe(true);
                treeObj.clickHandler(mouseEventArgs);
                expect((li[0] as Element).classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(li[0].getAttribute('aria-selected')).toBe('true');
                mouseEventArgs.target = ul[1];
                treeObj.clickHandler(mouseEventArgs);
                expect((li[0] as Element).classList.contains('e-active')).toBe(true);
                expect((li[3] as Element).classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(li[0].getAttribute('aria-selected')).toBe('true');
            });
            it('mouse double click on text', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[12].querySelector('.e-list-text');
                expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[12].childElementCount).toBe(1);
                treeObj.expandHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(li[12].childElementCount).toBe(2);
                    expect(li[12].getAttribute('aria-expanded')).toBe('true');
                    treeObj.expandHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                        expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[12].getAttribute('aria-expanded')).toBe('false');
                        treeObj.expandHandler(mouseEventArgs);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                            expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                            expect(li[12].getAttribute('aria-expanded')).toBe('true');
                            let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            mouseEventArgs.target = newli[13].querySelector('.e-list-text');
                            expect(newli[13].querySelector('.e-icons')).toBe(null);
                            expect(newli[13].childElementCount).toBe(1);
                            treeObj.expandHandler(mouseEventArgs);
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                expect(newli[13].querySelector('.e-icons')).toBe(null);
                                expect(newli[13].childElementCount).toBe(1);
                                expect(newli[13].getAttribute('aria-expanded')).toBe(null);
                                mouseEventArgs.target = newli[12].querySelector('.e-icons');
                                treeObj.expandHandler(mouseEventArgs);
                                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                                setTimeout(function() {
                                    expect((newli[12].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                                    expect((newli[12].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                                    expect(newli[12].getAttribute('aria-expanded')).toBe('true');
                                    done();
                                }, 450);
                            }, 450);
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('mouse hover and mouse leave testing', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[1].querySelector('.e-text-content');
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[1].classList.contains('e-hover')).toBe(false);
                treeObj.onMouseOver(mouseEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[1].classList.contains('e-hover')).toBe(true);
                let ul: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('ul');
                mouseEventArgs.target = ul[0];
                treeObj.onMouseOver(mouseEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[1].classList.contains('e-hover')).toBe(false);
                mouseEventArgs.target = li[3].querySelector('.e-icons');
                expect(li[3].classList.contains('e-hover')).toBe(false);
                treeObj.onMouseOver(mouseEventArgs);
                expect(li[3].classList.contains('e-hover')).toBe(true);
                mouseEventArgs.target = treeObj.element;
                treeObj.onMouseOver(mouseEventArgs);
                expect(li[3].classList.contains('e-hover')).toBe(false);
                mouseEventArgs.target = li[1].querySelector('.e-text-content');
                treeObj.onMouseOver(mouseEventArgs);
                expect(li[1].classList.contains('e-hover')).toBe(true);
                treeObj.onMouseOver(mouseEventArgs);
                expect(li[1].classList.contains('e-hover')).toBe(true);
                treeObj.onMouseLeave(mouseEventArgs);
                expect(li[1].classList.contains('e-hover')).toBe(false);
            });
            it('mouse click on full row', () => {
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[1].querySelector('.e-fullrow');
                expect((li[1] as Element).classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                treeObj.clickHandler(mouseEventArgs);
                expect((li[1] as Element).classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(li[1].getAttribute('aria-selected')).toBe('true');
                mouseEventArgs.target = li[0].querySelector('.e-fullrow');
                expect((li[0] as Element).classList.contains('e-active')).toBe(false);            
                treeObj.clickHandler(mouseEventArgs);            
                expect((li[1] as Element).classList.contains('e-active')).toBe(false);
                expect((li[0] as Element).classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(li[0].getAttribute('aria-selected')).toBe('true');
                treeObj.fullRowSelect = false;
                treeObj.dataBind();
            });
        });
        describe('keyboard navigation testing', () => {
            let keyboardEventArgs: any = {
                preventDefault: (): void => {},
                action: null,
                target: null,
                stopImmediatePropagation: (): void => {},
            };
            let treeObj: any;
            let ele: HTMLElement = createElement('div', { id: 'tree1' });
            beforeAll(() => {
                document.body.appendChild(ele);
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    fullRowSelect: false,
                });
                treeObj.appendTo(ele);
            });
            afterAll(() => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
            });
            it('tab key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[1].classList.contains('e-node-focus')).toBe(false);
                keyboardEventArgs.action = 'tab';
                treeObj.focusIn();
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[1].classList.contains('e-node-focus')).toBe(false);
            });
            it('down arrow key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[1].classList.contains('e-hover')).toBe(false);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[1].classList.contains('e-node-focus')).toBe(false);
                keyboardEventArgs.action = 'moveDown';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[1].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(false);
                expect(li[1].classList.contains('e-node-focus')).toBe(true);
                treeObj.keyActionHandler(keyboardEventArgs);
                treeObj.keyActionHandler(keyboardEventArgs);
                treeObj.keyActionHandler(keyboardEventArgs);
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[1].classList.contains('e-hover')).toBe(false);
                expect(li[4].classList.contains('e-hover')).toBe(true);
                expect(li[1].classList.contains('e-node-focus')).toBe(false);
                expect(li[4].classList.contains('e-node-focus')).toBe(true);
            });
            it('up arrow key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[4].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(false);
                expect(li[4].classList.contains('e-node-focus')).toBe(true);
                keyboardEventArgs.action = 'moveUp';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[3].classList.contains('e-hover')).toBe(true);
                expect(li[4].classList.contains('e-hover')).toBe(false);
                expect(li[3].classList.contains('e-node-focus')).toBe(true);
                expect(li[4].classList.contains('e-node-focus')).toBe(false);
                treeObj.keyActionHandler(keyboardEventArgs);
                treeObj.keyActionHandler(keyboardEventArgs);
                treeObj.keyActionHandler(keyboardEventArgs);
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[1].classList.contains('e-hover')).toBe(false);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[1].classList.contains('e-node-focus')).toBe(false);
            });
            it('end key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[li.length-1].classList.contains('e-hover')).toBe(false);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[li.length-1].classList.contains('e-node-focus')).toBe(false);
                keyboardEventArgs.action = 'end';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[li.length-1].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(false);
                expect(li[li.length-1].classList.contains('e-node-focus')).toBe(true);
            });
            it('home key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[li.length-1].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(false);
                expect(li[li.length-1].classList.contains('e-node-focus')).toBe(true);
                keyboardEventArgs.action = 'home';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[li.length-1].classList.contains('e-hover')).toBe(false);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[li.length-1].classList.contains('e-node-focus')).toBe(false);
            });
            it('enter key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[0].classList.contains('e-active')).toBe(false);
                keyboardEventArgs.action = 'enter';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[0].classList.contains('e-active')).toBe(true);
            });
            it('right arrow key pressed', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[1].classList.contains('e-node-focus')).toBe(false);
                expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                expect(li[0].childElementCount).toBe(1);
                keyboardEventArgs.action = 'moveRight';
                treeObj.keyActionHandler(keyboardEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[0].classList.contains('e-hover')).toBe(true);
                    expect(li[0].classList.contains('e-node-focus')).toBe(true);
                    expect(li[1].classList.contains('e-node-focus')).toBe(false);
                    expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(li[0].childElementCount).toBe(2);
                    let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    keyboardEventArgs.action = 'moveRight';
                    treeObj.keyActionHandler(keyboardEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(newli[0].classList.contains('e-hover')).toBe(false);
                        expect(newli[1].classList.contains('e-hover')).toBe(true);
                        expect(newli[0].classList.contains('e-node-focus')).toBe(false);
                        expect(newli[1].classList.contains('e-node-focus')).toBe(true);
                        expect(newli[1].childElementCount).toBe(1);
                        keyboardEventArgs.action = 'moveRight';
                        treeObj.keyActionHandler(keyboardEventArgs);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect(newli[0].classList.contains('e-hover')).toBe(false);
                            expect(newli[1].classList.contains('e-hover')).toBe(true);
                            expect(newli[2].classList.contains('e-hover')).toBe(false);
                            expect(newli[0].classList.contains('e-node-focus')).toBe(false);
                            expect(newli[1].classList.contains('e-node-focus')).toBe(true);
                            expect(newli[2].classList.contains('e-node-focus')).toBe(false);
                            expect(newli[1].childElementCount).toBe(1);
                            done();
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('left arrow key pressed', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                keyboardEventArgs.action = 'moveLeft';
                treeObj.keyActionHandler(keyboardEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[0].classList.contains('e-hover')).toBe(true);
                    expect(li[1].classList.contains('e-hover')).toBe(false);
                    expect(li[0].classList.contains('e-node-focus')).toBe(true);
                    expect(li[1].classList.contains('e-node-focus')).toBe(false);
                    expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(li[0].childElementCount).toBe(2);
                    keyboardEventArgs.action = 'moveLeft';
                    treeObj.keyActionHandler(keyboardEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].classList.contains('e-hover')).toBe(true);
                        expect(li[1].classList.contains('e-hover')).toBe(false);
                        expect(li[0].classList.contains('e-node-focus')).toBe(true);
                        expect(li[1].classList.contains('e-node-focus')).toBe(false);
                        expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                        expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[0].childElementCount).toBe(2);
                        keyboardEventArgs.action = 'moveLeft';
                        treeObj.keyActionHandler(keyboardEventArgs);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect(li[0].classList.contains('e-hover')).toBe(true);
                            expect(li[1].classList.contains('e-hover')).toBe(false);
                            expect(li[0].classList.contains('e-node-focus')).toBe(true);
                            expect(li[1].classList.contains('e-node-focus')).toBe(false);
                            expect(li[0].childElementCount).toBe(2);
                            done();
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('f2 key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect(li[0].querySelector('.e-tree-input')).toBe(null);
                keyboardEventArgs.action = 'f2';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect(li[0].querySelector('.e-tree-input')).toBe(null);
                treeObj.allowEditing = true;
                treeObj.dataBind();
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                expect(li[0].querySelector('.e-tree-input')).not.toBe(null);
                expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music');
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music node';
                keyboardEventArgs.action = 'enter';
                keyboardEventArgs.target = li[0].querySelector('.e-tree-input');
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect(li[0].querySelector('.e-tree-input')).toBe(null);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                keyboardEventArgs.action = 'f2';
                keyboardEventArgs.target = null;
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                expect(li[0].querySelector('.e-tree-input')).not.toBe(null);
                expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music node');
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music value';
                keyboardEventArgs.action = 'escape';
                keyboardEventArgs.target = li[0].querySelector('.e-tree-input');
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect(li[0].querySelector('.e-tree-input')).toBe(null);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                keyboardEventArgs.action = 'f2';
                keyboardEventArgs.target = null;
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                expect(li[0].querySelector('.e-tree-input')).not.toBe(null);
                expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music node');
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music value';
                keyboardEventArgs.action = 'tab';
                keyboardEventArgs.target = li[0].querySelector('.e-tree-input');
                treeObj.keyActionHandler(keyboardEventArgs);
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).blur();
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect(li[0].querySelector('.e-tree-input')).toBe(null);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music value');
                treeObj.allowEditing = false;
                treeObj.dataBind();
            });
            it('focus out testing', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                treeObj.focusOut();
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
            });
            it('CtrlA testing', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                keyboardEventArgs.action = 'ctrlA';
                keyboardEventArgs.target = li[1].querySelector('.e-list-text');
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[1].classList.contains('e-active')).toBe(false);
                treeObj.allowMultiSelection = true;
                treeObj.dataBind();
                keyboardEventArgs.action = 'ctrlA';
                keyboardEventArgs.target = li[1].querySelector('.e-list-text');
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[1].classList.contains('e-active')).toBe(true);
            });
        });
        describe('events testing', () => {
            let mouseEventArgs: any = {
                preventDefault: (): void => {},
                stopImmediatePropagation: (): void => {},
                target: null,
                type: null,
            };
            let keyboardEventArgs: any = {
                preventDefault: (): void => {},
                action: null
            };
            let treeObj: any;
            let i: number = 0;
            let originalTimeout: any;
            function clickFn(): void {
                i++;
            }
            beforeEach((): void => {
                treeObj = undefined;
                i = 0;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            });
            afterEach((): void => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
            });
            it('created event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    created: clickFn
                },'#tree1');
                expect(i).toEqual(1);
            });
            it('drawNode event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    drawNode: clickFn
                },'#tree1');
                expect(i).toEqual(5);
            });
            it('dataBound event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    dataBound: clickFn
                },'#tree1');
                expect(i).toEqual(1);
            });
            it('nodeExpanding event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeExpanding: clickFn
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                expect(i).toEqual(1);
            });
            it('nodeExpanded event is triggered', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeExpanded: clickFn,
                    animation: { expand: { duration: 0 }, collapse: { duration: 0 } },
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(i).toEqual(1);
                    done();
                }, 100);
            });
            it('nodeCollapsing event is triggered', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeCollapsing: clickFn
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.clickHandler(mouseEventArgs);
                    expect(i).toEqual(1);
                    done();
                }, 450);                
            });
            it('nodeCollapsed event is triggered', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeCollapsed: clickFn,
                    animation: { expand: { duration: 0 }, collapse: { duration: 0 } },
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(i).toEqual(1);
                        done();
                    }, 100);
                }, 100);
            });
            it('nodeSelecting event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData3, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeSelecting: clickFn,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                treeObj.clickHandler(mouseEventArgs);
                expect(i).toEqual(1);
                i = 0;
                expect(li[0].classList.contains('e-active')).toBe(true);
                mouseEventArgs.target = li[7].querySelector('.e-list-text');
                treeObj.clickHandler(mouseEventArgs);
                expect(i).toEqual(1);
                expect(li[7].classList.contains('e-active')).toBe(true);
                treeObj.allowMultiSelection = true;
                treeObj.dataBind();
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                li[7].querySelector('.e-list-text').dispatchEvent(e);
                expect(i).toEqual(2);
                expect(li[7].classList.contains('e-active')).toBe(false);
            });
            it('nodeSelected event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeSelected: clickFn,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                treeObj.clickHandler(mouseEventArgs);
                expect(i).toEqual(1);
                expect(li[0].classList.contains('e-active')).toBe(true);
                i = 0;
                mouseEventArgs.target = li[4].querySelector('.e-list-text');
                treeObj.clickHandler(mouseEventArgs);
                expect(i).toEqual(1);
                expect(li[4].classList.contains('e-active')).toBe(true);
                treeObj.allowMultiSelection = true;
                treeObj.dataBind();
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                li[4].querySelector('.e-list-text').dispatchEvent(e);
                expect(i).toEqual(2);
                expect(li[4].classList.contains('e-active')).toBe(false);
            });
            it('nodeEditing event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeEditing: clickFn,
                    fullRowSelect: false,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                mouseEventArgs.type = 'dblclick';
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[0].childElementCount).toBe(1);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                treeObj.editingHandler(mouseEventArgs);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[0].childElementCount).toBe(1);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music');
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music node';
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).blur();
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                expect(i).toEqual(1);
            });
            it('nodeEdited event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeEdited: clickFn,
                    fullRowSelect: false,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                mouseEventArgs.type = 'dblclick';
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[0].childElementCount).toBe(1);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                treeObj.editingHandler(mouseEventArgs);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[0].childElementCount).toBe(1);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music');
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music node';
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).blur();
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                expect(i).toEqual(1);
            });
            it('nodeClicked event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeClicked: clickFn,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, });
                li[0].querySelector('.e-list-text').dispatchEvent(e);
                expect(i).toEqual(1);
                expect(li[0].classList.contains('e-active')).toBe(true);
            });
            it('keyPress event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    keyPress: clickFn,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                keyboardEventArgs.action = 'tab';
                treeObj.focusIn();
                expect(li[0].classList.contains('e-hover')).toBe(true);
                keyboardEventArgs.action = 'moveDown';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(i).toEqual(1);
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[1].classList.contains('e-hover')).toBe(true);
            });
            it('darg and drop events are triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeDragStart: clickFn,
                    nodeDragging: clickFn,
                    nodeDragStop: clickFn,
                    nodeDropped: clickFn,
                    allowDragAndDrop: true,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-list-text'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);                
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-list-text'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(i).toEqual(1);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1].querySelector('.e-list-text');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(i).toEqual(2);
                i = 0;
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1].querySelector('.e-list-text'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(i).toEqual(2);
                expect(li[1].childElementCount).toBe(3);
                expect(li[1].children[2].childElementCount).toBe(3);
            });
            it('destroyed event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    destroyed: clickFn
                },'#tree1');
                treeObj.destroy();
                expect(i).toEqual(1);
            });
        });
        describe('methods testing', () => {
            let treeObj: any;
            beforeEach(() => {
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                treeObj = new TreeView({ fields: { dataSource: hierarchicalData3, id: "nodeId", text: "nodeText", child:"nodeChild" } });
                treeObj.appendTo(ele);
            });
            afterEach(() => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
            });
            it('get module name', () => {
                expect(treeObj.getModuleName()).toBe('treeview');
            });
            it('checkAll', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                treeObj.showCheckBox = true;
                treeObj.checkAll();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let checkEle: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-check');
                    expect(checkEle.length).toBe(0);
                    done();
                }, 450);
            });
            it('uncheckAll', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                treeObj.showCheckBox = true;
                treeObj.uncheckAll();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let checkEle: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-check');
                    expect(checkEle.length).toBe(0);
                    done();
                }, 450);
            });
            it('persistence testing', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let sItems: any = JSON.parse(treeObj.getPersistData());
                expect(sItems.selectedNodes.length).toBe(0);
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, });
                li[0].querySelector('.e-list-text').dispatchEvent(e);
                let seItems: any = JSON.parse(treeObj.getPersistData());
                expect(seItems.selectedNodes.length).toBe(1);
                expect(seItems.selectedNodes).toContain('01');
            });
            it('replaceText', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.replaceText(li[0], 'Rain');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.allowEditing = true;
                treeObj.dataBind();
                treeObj.replaceText(li[0], 'Rain');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Rain');
                treeObj.replaceText('01', 'Music');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.replaceText('011', 'Music');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.replaceText('01', null);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.replaceText(null, null);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.allowEditing = false;
                treeObj.dataBind();
            });
            it('expandAll', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(2);
                treeObj.expandAll();
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(newli[0].childElementCount).toBe(3);
                expect(newli[0].children[2].childElementCount).toBe(1);
                expect(newli[11].childElementCount).toBe(3);
                expect(newli[11].children[2].childElementCount).toBe(5);
                expect(newli[12].childElementCount).toBe(3);
                expect(newli[12].children[2].childElementCount).toBe(2);
                expect(newli[14].childElementCount).toBe(3);
                expect(newli[14].children[2].childElementCount).toBe(1);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[0].getAttribute('aria-expanded')).toBe('true');
                    done();
                }, 450);
            });
            it('expandAll with specific nodes', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(2);
                treeObj.expandAll(['01', li[1], '03', '099', '07']);
                expect(li[0].childElementCount).toBe(3);
                expect(li[0].children[2].childElementCount).toBe(1);
                expect(li[1].childElementCount).toBe(3);
                expect(li[1].children[2].childElementCount).toBe(2);
                expect(li[2].childElementCount).toBe(3);
                expect(li[2].children[2].childElementCount).toBe(5);
                treeObj.expandAll('04');
                expect(li[4].childElementCount).toBe(2);
                treeObj.expandAll(null);
                expect(li[4].childElementCount).toBe(3);
            });
            it('expandAll with level', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(2);
                treeObj.expandAll(null, 1);
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(newli[0].childElementCount).toBe(3);
                expect(newli[0].children[2].childElementCount).toBe(1);
                expect(newli[11].childElementCount).toBe(3);
                expect(newli[11].children[2].childElementCount).toBe(5);
                expect(newli[12].childElementCount).toBe(2);
                treeObj.expandAll(null, 3);
                let nli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(nli[0].childElementCount).toBe(3);
                expect(nli[0].children[2].childElementCount).toBe(1);
                expect(nli[11].childElementCount).toBe(3);
                expect(nli[11].children[2].childElementCount).toBe(5);
                expect(nli[12].childElementCount).toBe(3);
                expect(nli[12].children[2].childElementCount).toBe(2);
                expect(nli[14].childElementCount).toBe(3);
                expect(nli[14].children[2].childElementCount).toBe(1);
            });
            it('expandAll with excludeHiddenNodes', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(2);                
                treeObj.expandAll(null, 1, true);
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(newli[0].childElementCount).toBe(3);
                expect(newli[0].children[2].childElementCount).toBe(1);
                expect(newli[11].childElementCount).toBe(3);
                expect(newli[11].children[2].childElementCount).toBe(5);
                expect(newli[12].childElementCount).toBe(2);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, });
                    newli[11].querySelector('.e-icons').dispatchEvent(e);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        treeObj.expandAll(null, 2, true);
                        expect(newli[12].childElementCount).toBe(2);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            newli[11].querySelector('.e-icons').dispatchEvent(e);
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                treeObj.expandAll(null, 0, true);
                                expect(newli[12].childElementCount).toBe(2);
                                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                                setTimeout(function() {
                                    treeObj.expandAll(null, null, true);
                                    let nli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                                    expect(nli[0].childElementCount).toBe(3);
                                    expect(nli[0].children[2].childElementCount).toBe(1);
                                    expect(nli[11].childElementCount).toBe(3);
                                    expect(nli[11].children[2].childElementCount).toBe(5);
                                    expect(nli[12].childElementCount).toBe(3);
                                    expect(nli[12].children[2].childElementCount).toBe(2);
                                    expect(nli[14].childElementCount).toBe(3);
                                    expect(nli[14].children[2].childElementCount).toBe(1);
                                    done();
                                }, 450);
                            }, 450);
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('collapseAll', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(2);
                treeObj.expandAll();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(newli[0].childElementCount).toBe(3);
                    expect(newli[0].children[2].childElementCount).toBe(1);
                    expect(li[0].getAttribute('aria-expanded')).toBe('true');
                    treeObj.collapseAll();
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].getAttribute('aria-expanded')).toBe('false');
                        done();
                    }, 450);
                }, 450);
            });
            it('collapseAll with specific nodes', (done: Function) => {
                treeObj.expandAll();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                    treeObj.collapseAll(['01', li[2], '03', '099', '07']);
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    expect(li[2].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    expect(li[5].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    treeObj.collapseAll('04');
                    expect(li[11].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                    treeObj.collapseAll(null);
                    expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    done();
                }, 450);
            });
            it('collapseAll with level', (done: Function) => {
                treeObj.expandAll();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                    treeObj.collapseAll(null, 1);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[11].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                        treeObj.collapseAll(null, 3);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            let nli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                            expect(li[14].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);                            
                            done();
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('collapseAll with excludeHiddenNodes', (done: Function) => {
                treeObj.expandAll();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.collapseAll(null, 1, true);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[11].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                        treeObj.collapseAll(null, 2, true);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                            treeObj.collapseAll(null, 0, true);
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, });
                                li[11].querySelector('.e-icons').dispatchEvent(e);
                                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                                setTimeout(function() {
                                    expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                                    treeObj.collapseAll(null, null, true);
                                    let nli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                                    expect(nli[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                                    expect(nli[14].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                                    done();
                                }, 450);
                            }, 450);
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('ensureVisible', (done: Function) => {
                treeObj.expandAll();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.collapseAll(null, 1, true);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                        treeObj.ensureVisible('0');
                        treeObj.ensureVisible('04-01-01');
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect(li[11].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                            expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                            treeObj.ensureVisible(li[15]);
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                expect(li[14].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                                done();
                            }, 450);
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('disableNodes', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-disable')).toBe(false);
                expect(li[0].getAttribute('aria-disabled')).toBe(null);
                treeObj.disableNodes(['01', li[2], '03', '099', '07']);
                expect(li[0].classList.contains('e-disable')).toBe(true);
                expect(li[0].getAttribute('aria-disabled')).toBe('true');
                expect(li[2].classList.contains('e-disable')).toBe(true);
                expect(li[2].getAttribute('aria-disabled')).toBe('true');
                expect(li[8].classList.contains('e-disable')).toBe(true);
                expect(li[8].getAttribute('aria-disabled')).toBe('true');
                treeObj.disableNodes(null);
                expect(li[3].classList.contains('e-disable')).toBe(false);
                expect(li[3].getAttribute('aria-disabled')).toBe(null);
            });
            it('enableAll', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                treeObj.disableNodes(['01', li[2], '03', '099', '07']);
                expect(li[0].classList.contains('e-disable')).toBe(true);
                expect(li[2].classList.contains('e-disable')).toBe(true);
                expect(li[8].classList.contains('e-disable')).toBe(true);
                treeObj.enableAll(['01', li[2], '099']);
                expect(li[0].classList.contains('e-disable')).toBe(false);
                expect(li[0].getAttribute('aria-disabled')).toBe(null);
                expect(li[2].classList.contains('e-disable')).toBe(false);
                expect(li[2].getAttribute('aria-disabled')).toBe(null);
                expect(li[8].classList.contains('e-disable')).toBe(true);
                expect(li[8].getAttribute('aria-disabled')).toBe('true');
                treeObj.enableAll();
                expect(li[8].classList.contains('e-disable')).toBe(false);
                expect(li[8].getAttribute('aria-disabled')).toBe(null);
            });
            it('getNode', () => {
                expect(treeObj.getNode(null)).toBe(null);
                expect(treeObj.getNode(1)).toBe(null);
                expect(treeObj.getNode('0')).toBe(null);
                expect(treeObj.getNode('01')).not.toBe(null);
            });
            it('getNodeDetails', () => {
                expect(treeObj.getNodeDetails(null).text).toBe('');
                expect(treeObj.getNodeDetails(1).text).toBe('');
                expect(treeObj.getNodeDetails('0').text).toBe('');
                expect(treeObj.getNodeDetails('01').text).toBe('Music');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(treeObj.getNodeDetails(li[1]).text).toBe('Videos');
            });
            it('moveNodes', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                treeObj.moveNodes(null, '0');
                treeObj.moveNodes(['01','02'], '03');
                expect(li[2].childElementCount).toBe(3);
                expect(li[2].children[2].childElementCount).toBe(7);
                expect(li[1].parentNode.parentNode).toBe(li[2]);
                expect(li[0].parentNode.parentNode).toBe(li[2]);
                treeObj.moveNodes(['03', li[0]], '02', 0);
                expect(li[1].childElementCount).toBe(3);
                expect(li[1].children[2].childElementCount).toBe(3);
                expect(li[0].parentNode.parentNode).toBe(li[1]);
                expect(li[2].parentNode.parentNode).not.toBe(li[1]);
            });
            it('removeNodes', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                treeObj.selectedNodes = ['02'];
                treeObj.dataBind();
                expect(treeObj.liList.length).toBe(9);
                treeObj.removeNodes('0');
                expect(treeObj.liList.length).toBe(9);
                treeObj.removeNodes(['01','02']);
                expect(treeObj.liList.length).toBe(7);
                treeObj.removeNodes([li[2]]);
                expect(treeObj.liList.length).toBe(6);
                expect(treeObj.liList.length).toBe(treeObj.element.querySelectorAll('li').length);
                expect(treeObj.selectedNodes.length).toBe(0);
            });
            it('addNodes', (done: Function) => {
                treeObj.addNodes(null);
                treeObj.addNodes(hierarchicalData4);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(treeObj.liList.length).toBe(11);
                    expect(treeObj.liList.length).toBe(li.length);
                    expect(treeObj.element.querySelectorAll('.e-list-text')[9].innerHTML).toBe('Music');
                    expect(treeObj.element.querySelectorAll('.e-list-item')[9].getAttribute('data-uid')).toBe('11');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelectorAll('.e-list-item')[9].title).toBe('This is Music node');
                    expect(treeObj.element.querySelectorAll('.e-list-item')[9].classList.contains('e-active')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[10].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[10].style.backgroundColor).toBe('red');
                    treeObj.removeNodes(['11', '12']);
                    treeObj.addNodes(hierarchicalData4, '01');
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                        expect(treeObj.liList.length).toBe(12);
                        expect(treeObj.liList.length).toBe(li.length);
                        expect(treeObj.element.querySelectorAll('.e-list-text')[2].innerHTML).toBe('Music');
                        expect(treeObj.element.querySelectorAll('.e-list-item')[2].getAttribute('data-uid')).toBe('11');
                        expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                        expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                        expect(treeObj.element.querySelectorAll('.e-list-item')[2].title).toBe('This is Music node');
                        expect(treeObj.element.querySelectorAll('.e-list-item')[2].classList.contains('e-active')).toBe(true);
                        expect(treeObj.element.querySelectorAll('li')[3].classList.contains('firstnode')).toBe(true);
                        expect(treeObj.element.querySelectorAll('li')[3].style.backgroundColor).toBe('red');
                        treeObj.removeNodes(['11', '12']);
                        treeObj.addNodes(hierarchicalData4, null, 1);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            expect(treeObj.liList.length).toBe(12);
                            expect(treeObj.liList.length).toBe(li.length);
                            expect(treeObj.element.querySelectorAll('.e-list-text')[2].innerHTML).toBe('Music');
                            expect(treeObj.element.querySelectorAll('.e-list-item')[2].getAttribute('data-uid')).toBe('11');
                            expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                            expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                            expect(treeObj.element.querySelectorAll('.e-list-item')[2].title).toBe('This is Music node');
                            expect(treeObj.element.querySelectorAll('.e-list-item')[2].classList.contains('e-active')).toBe(true);
                            expect(treeObj.element.querySelectorAll('li')[3].classList.contains('firstnode')).toBe(true);
                            expect(treeObj.element.querySelectorAll('li')[3].style.backgroundColor).toBe('red');
                            treeObj.removeNodes(['11', '12']);
                            treeObj.addNodes(hierarchicalData4, '01', 0);
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                                expect(treeObj.liList.length).toBe(12);
                                expect(treeObj.liList.length).toBe(li.length);
                                expect(treeObj.element.querySelectorAll('.e-list-text')[1].innerHTML).toBe('Music');
                                expect(treeObj.element.querySelectorAll('.e-list-item')[1].getAttribute('data-uid')).toBe('11');
                                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                                expect(treeObj.element.querySelectorAll('.e-list-item')[1].title).toBe('This is Music node');
                                expect(treeObj.element.querySelectorAll('.e-list-item')[1].classList.contains('e-active')).toBe(true);
                                expect(treeObj.element.querySelectorAll('li')[2].classList.contains('firstnode')).toBe(true);
                                expect(treeObj.element.querySelectorAll('li')[2].style.backgroundColor).toBe('red');
                                done();
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            });
            it('destroy', () => {
                treeObj.destroy();
                expect(treeObj.element.className).toBe('');
                expect(treeObj.element.childElementCount).toBe(0);
            });
        });
        describe('animation testing', () => {
            let mouseEventArgs: any = {
                preventDefault: (): void => {},
                stopImmediatePropagation: (): void => {},
                target: null,
                type: null,
            };
            let treeObj: any;
            let i: number = 0;
            let originalTimeout: any;
            function clickFn(): void {
                i++;
            }
            beforeEach((): void => {
                treeObj = undefined;
                i = 0;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            });
            afterEach((): void => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
            });
            it('default value with nodeExpanded event', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeExpanded: clickFn,
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(i).toEqual(1);
                    done();
                }, 450);
            });
            it('default value with nodeCollapsed event', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeCollapsed: clickFn,
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(i).toEqual(1);
                        done();
                    }, 450);
                }, 450);
            });
            it('disable expand animation', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeExpanded: clickFn,
                    animation: { expand: { duration: 0 } }
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(i).toEqual(1);
                    done();
                }, 100);
            });
            it('disable collpase animation', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeCollapsed: clickFn,
                    animation: { collapse: { duration: 0 } }
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(i).toEqual(1);
                        done();
                    }, 100);
                }, 450);
            });
            it('property change expand animation', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeExpanded: clickFn,                    
                },'#tree1');
                treeObj.animation = { expand: { duration: 100 } };
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(i).toEqual(1);
                    done();
                }, 150);
            });
            it('property change collpase animation', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child:"nodeChild" },
                    nodeCollapsed: clickFn,
                },'#tree1');
                treeObj.animation = { collapse: { duration: 100 } };
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(i).toEqual(1);
                        done();
                    }, 150);
                }, 450);
            });
        });
        describe('Drag and drop functionality testing', () => {
            let treeObj: any;
            beforeEach((done: Function): void => {
                treeObj = undefined;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild", navigateUrl: 'nodeUrl', iconCss: 'nodeIcon', imageUrl: 'nodeImage1', expanded: 'nodeExpanded1' },
                    allowDragAndDrop: true,
                    fullRowSelect: false,
                    dataBound: ()=> {
                        done();
                    }
                },'#tree1');
            });
            afterEach((): void => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
            });
            it('testing with target as text', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-list-text'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-list-text'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1].querySelector('.e-list-text');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1].querySelector('.e-list-text'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[1].childElementCount).toBe(2);
                expect(li[1].children[1].childElementCount).toBe(1);
                expect(li[1].getAttribute('aria-expanded')).toBe('true');
            });
            it('testing with target as expand icon', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[3].querySelector('.e-icons'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[3].querySelector('.e-icons'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[0].querySelector('.e-icons');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[0].querySelector('.e-icons'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
            });
            it('testing with target as custom icon', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[1].querySelector('.e-list-icon'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[1].querySelector('.e-list-icon'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[5].querySelector('.e-list-icon');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[5].querySelector('.e-list-icon'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(1);
                expect(li[0].getAttribute('aria-expanded')).toBe(null);
                expect(li[5].childElementCount).toBe(2);
                expect(li[5].children[1].childElementCount).toBe(5);
            });
            it('testing with target as custom image', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-list-img'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-list-img'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[0].querySelector('.e-list-img');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[0].querySelector('.e-list-img'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
                expect(li[2].childElementCount).toBe(1);
            });
            it('testing with target as text wrapper with child', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1].querySelector('.e-text-content');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-in')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1].querySelector('.e-text-content'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[1].childElementCount).toBe(2);
                expect(li[1].children[1].childElementCount).toBe(1);
                expect(li[1].getAttribute('aria-expanded')).toBe('true');
            });
            it('testing with target as text wrapper with out child', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[3].querySelector('.e-text-content');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-in')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[3].querySelector('.e-text-content'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[3].childElementCount).toBe(2);
                expect(li[3].children[1].childElementCount).toBe(6);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[3].getAttribute('aria-expanded')).toBe('true');
                    done();
                }, 450);
            });
            it('testing with target as before li element', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2], 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2], 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[2].querySelector('.e-text-content');
                mousemove = setMouseCordinates(mousemove, 15, 45);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1];
                mousemove = setMouseCordinates(mousemove, 15, 50);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(li[1].childElementCount).toBe(2);
                expect(li[1].querySelector('.e-sibling')).not.toBe(null);
                expect(document.querySelector('.e-drop-next')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1], 15, 50);
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
                // need to check
                // expect(li[0].children[1].querySelector('.e-list-text').innerHTML).toBe('Videos');
                expect(li[1].childElementCount).toBe(1);
                expect(li[1].querySelector('.e-sibling')).toBe(null);
                expect(li[1].getAttribute('aria-expanded')).toBe(null);
            });
            it('testing with target as after li element', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2], 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2], 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[2].querySelector('.e-text-content');
                mousemove = setMouseCordinates(mousemove, 15, 45);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1];
                mousemove = setMouseCordinates(mousemove, 15, 80);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(li[1].childElementCount).toBe(2);
                expect(li[1].querySelector('.e-sibling')).not.toBe(null);
                expect(document.querySelector('.e-drop-next')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1], 15, 80);
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
                expect(li[0].children[1].querySelector('.e-list-text').innerHTML).toBe('Gouttes.mp3');
                expect(li[1].childElementCount).toBe(1);
                expect(li[1].querySelector('.e-sibling')).toBe(null);
                expect(li[1].getAttribute('aria-expanded')).toBe(null);
            });
            it('testing with target as treeview element', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = treeObj.element;
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-out')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, treeObj.element);
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(1);
                expect(document.querySelector('.e-drop-out')).toBe(null);
            });
            it('testing with target as document', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = document.getElementsByTagName('body')[0];
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-no-drop')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, document.getElementsByTagName('body')[0]);
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(1);
                expect(document.querySelector('.e-no-drop')).toBe(null);
            });
            it('testing with target as non droppable element', () => {
                let ele: HTMLElement = createElement('div', { id: 'nontree' });
                document.body.appendChild(ele);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = document.getElementById('nontree');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-no-drop')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, document.getElementById('nontree'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(1);
                expect(document.querySelector('.e-drop-out')).toBe(null);
            });
            it('testing with target as full row with child', () => {
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-fullrow'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-fullrow'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1].querySelector('.e-fullrow');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-in')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1].querySelector('.e-fullrow'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[1].childElementCount).toBe(3);
                expect(li[1].children[2].childElementCount).toBe(1);
                expect(li[1].getAttribute('aria-expanded')).toBe('true');
            });
            it('testing with target as full row with out child', (done: Function) => {
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-fullrow'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-fullrow'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[3].querySelector('.e-fullrow');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-in')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[3].querySelector('.e-fullrow'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[3].childElementCount).toBe(3);
                expect(li[3].children[2].childElementCount).toBe(6);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[3].getAttribute('aria-expanded')).toBe('true');
                    done();
                }, 450);
            });
            it('with multi selection', (done: Function) => {
                treeObj.allowMultiSelection = true;
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                li[0].querySelector('.e-list-text').dispatchEvent(e);
                li[1].querySelector('.e-list-text').dispatchEvent(e);
                // dragging non active element
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-list-text'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-list-text'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1].querySelector('.e-list-text');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1].querySelector('.e-list-text'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[1].childElementCount).toBe(2);
                expect(li[1].children[1].childElementCount).toBe(1);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[1].getAttribute('aria-expanded')).toBe('true');
                    li[2].querySelector('.e-list-text').dispatchEvent(e);
                    treeObj.enableRtl = true;
                    treeObj.dataBind();
                    // dragging active element
                    let mousedown1: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[0].querySelector('.e-list-text'), 15, 10);
                    EventHandler.trigger(treeObj.element, 'mousedown', mousedown1);
                    let mousemove1: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[0].querySelector('.e-list-text'), 15, 70);
                    EventHandler.trigger(<any>(document), 'mousemove', mousemove1);
                    mousemove.srcElement = mousemove.target = mousemove.toElement = li[3].querySelector('.e-list-text');
                    mousemove = setMouseCordinates(mousemove, 15, 75);
                    EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                    let mouseup1: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[3].querySelector('.e-list-text'));
                    mouseup.type = 'mouseup';
                    EventHandler.trigger(<any>(document), 'mouseup', mouseup1);
                    expect(li[3].childElementCount).toBe(2);
                    expect(li[3].children[1].childElementCount).toBe(8);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[3].getAttribute('aria-expanded')).toBe('true');
                        done();
                    }, 450);
                }, 450);
            });
            it('code coverage', () => {
                expect(document.body.style.cursor).toBe('');
                treeObj.dropObj.out({target:document.body});
                expect(document.body.style.cursor).toBe('not-allowed');
            });
        });
    });
    describe('Local data binding testing', () => {
        describe('Default functionality testing', () => {
            let mouseEventArgs: any = {
                preventDefault: (): void => {},
                stopImmediatePropagation: (): void => {},
                target: null,
                type: null,
            };
            let treeObj: any;
            beforeEach((): void => {
                treeObj = undefined;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
            });
            afterEach((): void => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
            });
            it('with null fields', () => {
                treeObj = new TreeView({ fields: null },'#tree1');
                expect(treeObj.element.querySelectorAll('li').length).toBe(0);
            });
            it('with empty fields', () => {
                treeObj = new TreeView({ fields: {} },'#tree1');
                expect(treeObj.element.querySelectorAll('li').length).toBe(0);
            });
            it('with null datasource', () => {
                treeObj = new TreeView({ fields: { dataSource: null } },'#tree1');
                expect(treeObj.element.querySelectorAll('li').length).toBe(0);
            });
            it('with empty datasource', () => {
                treeObj = new TreeView({ fields: { dataSource: [] } },'#tree1');
                expect(treeObj.element.querySelectorAll('li').length).toBe(0);
            });
            it('selectedNodes property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData },
                    selectedNodes: ['30']
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li.length).toBe(10);
                    expect(li[0].classList.contains('e-active')).toBe(false);
                    expect(li[9].classList.contains('e-active')).toBe(true);
                    done();
                }, 450);
            });
            it('without mapping fields', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData },
                    fullRowSelect: false,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelectorAll('li').length).toBe(10);
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Artwork');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe("1");
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Artwork node');
                    expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                    expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://npmci.syncfusion.com/')).not.toBe(-1);
                    let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(newli[2].childElementCount).toBe(2);
                    expect((newli[2].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((newli[2].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(newli[2].getAttribute('aria-expanded')).toBe('true');
                    expect(newli[3].childElementCount).toBe(2);
                    expect((newli[3].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((newli[3].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(newli[3].getAttribute('aria-expanded')).toBe('true');
                    mouseEventArgs.target = newli[0].querySelector('.e-icons');
                    expect(newli[0].childElementCount).toBe(1);
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(newli[0].childElementCount).toBe(2);
                        expect((newli[0] as Element).querySelector('.e-list-item').getAttribute('data-uid')).toBe('2');
                        expect(newli[0].querySelector('.e-list-parent').querySelector('.e-list-text').innerHTML).toBe('Abstract');
                        expect(document.getElementById('tree1').classList.contains('customTree')).toEqual(false);
                        expect(document.getElementById('tree1').classList.contains('productTree')).toEqual(false);
                        done();
                    }, 450);
                }, 450);
            });
            it('with mapping fields', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", expanded: 'nodeExpanded', navigateUrl: 'nodeUrl',
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr', selected: 'nodeSelected' },
                    cssClass: 'customTree productTree',
                    fullRowSelect: false,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelectorAll('li').length).toBe(13);
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                    expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                    expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://npmci.syncfusion.com/')).not.toBe(-1);
                    let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(newli[3].childElementCount).toBe(2);
                    expect((newli[3].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((newli[3].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(newli[3].getAttribute('aria-expanded')).toBe('true');
                    expect(newli[4].childElementCount).toBe(2);
                    expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(newli[4].getAttribute('aria-expanded')).toBe('true');
                    mouseEventArgs.target = newli[0].querySelector('.e-icons');
                    expect(newli[0].childElementCount).toBe(1);
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(newli[0].childElementCount).toBe(2);
                        expect((newli[0] as Element).querySelector('.e-list-item').getAttribute('data-uid')).toBe('01-01');
                        expect(newli[0].querySelector('.e-list-parent').querySelector('.e-list-text').innerHTML).toBe('Gouttes.mp3');
                        expect(document.getElementById('tree1').classList.contains('customTree')).toEqual(true);
                        expect(document.getElementById('tree1').classList.contains('productTree')).toEqual(true);
                        done();
                    }, 450);
                }, 500);
            });
            it('sortOrder property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild",
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr', selected: 'nodeSelected' },
                    sortOrder: 'Ascending'
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelectorAll('li').length).toBe(5);
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Documents');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('03');
                    done();
                }, 100);
            });
            it('allowEditing property with default value testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild",
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr', selected: 'nodeSelected' },
                    fullRowSelect: false,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    mouseEventArgs.target = li[0].querySelector('.e-list-text');
                    mouseEventArgs.type = 'dblclick';
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    expect(li[0].childElementCount).toBe(1);
                    expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                    treeObj.expandHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(false);
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                        expect(li[0].childElementCount).toBe(2);
                        expect(li[0].getAttribute('aria-expanded')).toBe('true');
                        expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                        done();
                    }, 450);
                }, 100);
            });
            it('allowEditing property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild",
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr', selected: 'nodeSelected' },
                    allowEditing: true,
                    fullRowSelect: false,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    mouseEventArgs.target = li[0].querySelector('.e-list-text');
                    mouseEventArgs.type = 'dblclick';
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    expect(li[0].childElementCount).toBe(1);
                    expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                    treeObj.expandHandler(mouseEventArgs);
                    treeObj.editingHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[0].childElementCount).toBe(1);
                        expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                        expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                        expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music');
                        (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music node';
                        (li[0].querySelector('.e-tree-input') as HTMLInputElement).blur();
                        expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                        expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                        mouseEventArgs.target = li[0].querySelector('.e-list-item');
                        treeObj.editingHandler(mouseEventArgs);
                        expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                        done();
                    }, 100);
                }, 100);
            });
            it('enableRtl property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData1, id: "nodeId", text: "nodeText", child: "nodeChild",
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr', selected: 'nodeSelected' },
                    enableRtl: true,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.classList.contains('e-rtl')).toBe(true);
                    done();
                }, 100);
            });
            it(' checkedNodes with events ', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1 , id: "nodeId", text: "nodeText", child: "nodeChild", isChecked:"nodeChecked" },
                    showCheckBox: true
                },'#tree1');
                treeObj.checkedNodes= ['01', '03-03'];
                treeObj.dataBind();     
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                treeObj.clickHandler({target:li[2].querySelector('.e-icons')});
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.clickHandler({target:li[2].querySelector('.e-ripple-container')});
                    setTimeout(function() {
                        expect(treeObj.checkedNodes.length === 7 ).toBe(true);
                        done();
                    },100);
                }, 100);
            });
            it(' checkedNodes property testing ', (done) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: hierarchicalData1 , id: "nodeId", text: "nodeText", child: "nodeChild", isChecked:"nodeChecked" },
                    showCheckBox: true,
                    checkedNodes: ['01', '03', '03-03']                    
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true });
                li[0].querySelector('.e-checkbox-wrapper').dispatchEvent(e);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let checkEle: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-check');
                    expect(checkEle.length).toBeGreaterThan(1);
                    done();
                }, 100);
            });
            describe('space key testing', () => {
                let keyboardEventArgs: any = {
                    preventDefault: (): void => {},
                    action: null
                };
                let treeObj: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                beforeAll(() => {
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: hierarchicalData1 , id: "nodeId", text: "nodeText", child: "nodeChild", isChecked:"nodeChecked" },
                        showCheckBox: true                    
                    });
                    treeObj.appendTo(ele);
                });
                afterAll(() => {
                    if (treeObj)
                        treeObj.destroy();
                    document.body.innerHTML = '';
                });
                it('space key pressed', () => {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    treeObj.focusIn();
                    keyboardEventArgs.action = 'space';
                    treeObj.keyActionHandler(keyboardEventArgs);
                    expect(li[0].querySelectorAll('.e-check').length).toBeGreaterThan(0);
                });
            });
            it('allowDragAndDrop property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild" },
                    allowDragAndDrop: true,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.dragObj).not.toBe(undefined);
                    expect(treeObj.dropObj).not.toBe(undefined);
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[0].querySelector('.e-list-text'), 15, 10);
                    EventHandler.trigger(treeObj.element, 'mousedown', mousedown);        
                    let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[0].querySelector('.e-list-text'), 15, 70);
                    EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                    mousemove.srcElement = mousemove.target = mousemove.toElement = li[0].querySelector('.e-list-text');
                    mousemove = setMouseCordinates(mousemove, 15, 75);
                    EventHandler.trigger(<any>(document), 'mousemove', mousemove);        
                    let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[0].querySelector('.e-list-text'));
                    mouseup.type = 'mouseup';
                    EventHandler.trigger(<any>(document), 'mouseup', mouseup);            
                    done();
                }, 100);
            });
            it('fullRowSelect property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild" },
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.classList.contains('e-fullrow-wrap')).toBe(true);
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].childElementCount).toBe(2);
                    done();
                }, 100);
            });
            it('allowMultiSelection property testing with default value', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData3, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", selected: 'nodeSelected1', },
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    // check selected attribute
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(1);
                    expect(treeObj.selectedNodes).toContain('01');
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                    // select node with id
                    li[1].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(false);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(1);
                    expect(treeObj.selectedNodes).not.toContain('01');
                    expect(treeObj.selectedNodes).toContain('02');
                    // checking ctrl key
                    li[1].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(false);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(1);
                    expect(treeObj.selectedNodes).not.toContain('01');
                    expect(treeObj.selectedNodes).toContain('02');
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, shiftKey: true });
                    // checking shift key
                    li[3].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(false);
                    expect(li[1].classList.contains('e-active')).toBe(false);
                    expect(li[2].classList.contains('e-active')).toBe(false);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(1);
                    expect(treeObj.selectedNodes).not.toContain('01');
                    expect(treeObj.selectedNodes).not.toContain('02');
                    expect(treeObj.selectedNodes).not.toContain('03');
                    expect(treeObj.selectedNodes).toContain('04');
                    done();
                }, 100);
            });
            it('allowMultiSelection property testing', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData3, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", selected: 'nodeSelected1', },
                    allowMultiSelection: true,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(2);
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('04');
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                    // select node with id
                    li[1].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(3);
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('02');
                    expect(treeObj.selectedNodes).toContain('04');
                    // unselect node with id
                    li[1].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[1].classList.contains('e-active')).toBe(false);
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(2);
                    expect(treeObj.selectedNodes).not.toContain('02');
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('04');
                    // select node without id
                    li[7].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[1].classList.contains('e-active')).toBe(false);
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(li[7].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(2);
                    expect(treeObj.selectedNodes).not.toContain('02');
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('04');
                    expect(treeObj.selectedNodes).not.toContain(null);
                    // unselect node without id
                    li[7].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[1].classList.contains('e-active')).toBe(false);
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(li[7].classList.contains('e-active')).toBe(false);
                    expect(treeObj.selectedNodes.length).toBe(2);
                    expect(treeObj.selectedNodes).not.toContain('02');
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('04');
                    expect(treeObj.selectedNodes).not.toContain(null);
                    done();
                }, 100);
            });
            it('allowMultiSelection property testing with shift key', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData3, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", },
                    allowMultiSelection: true,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, shiftKey: true });
                    // select middle node
                    li[1].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(1);
                    expect(treeObj.selectedNodes).toContain('02');
                    // select first node
                    li[0].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(2);
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('02');
                    // select next node
                    li[3].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(false);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(li[2].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(3);
                    expect(treeObj.selectedNodes).not.toContain('01');
                    expect(treeObj.selectedNodes).toContain('02');
                    expect(treeObj.selectedNodes).toContain('03');
                    expect(treeObj.selectedNodes).toContain('04');
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, });
                    // expand first node
                    li[0].querySelector('.e-icons').dispatchEvent(e);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        // collpase first node
                        li[0].querySelector('.e-icons').dispatchEvent(e);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, shiftKey: true });
                            // check invisible node
                            newli[0].querySelector('.e-list-text').dispatchEvent(e);
                            expect(newli[0].classList.contains('e-active')).toBe(true);
                            expect(newli[1].classList.contains('e-active')).toBe(false);
                            expect(newli[2].classList.contains('e-active')).toBe(true);
                            expect(newli[3].classList.contains('e-active')).toBe(false);
                            expect(newli[4].classList.contains('e-active')).toBe(false);
                            expect(treeObj.selectedNodes.length).toBe(2);
                            expect(treeObj.selectedNodes).toContain('01');
                            expect(treeObj.selectedNodes).not.toContain('01-01');
                            expect(treeObj.selectedNodes).toContain('02');
                            expect(treeObj.selectedNodes).not.toContain('03');
                            expect(treeObj.selectedNodes).not.toContain('04');
                            done();
                        }, 450);
                    }, 450);
                }, 100);
            });
            it('allowMultiSelection property testing with selected attribute', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData3, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", selected: 'nodeSelected1', expanded: 'nodeExpanded1' },
                    allowMultiSelection: true,
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(li[4].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(3);
                    expect(treeObj.selectedNodes).toContain('01');
                    expect(treeObj.selectedNodes).toContain('04');
                    expect(treeObj.selectedNodes).toContain('04-01');
                    done();
                }, 100);
            });
            it('allowMultiSelection property testing with selectedNodes', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData3, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", selected: 'nodeSelected1', expanded: 'nodeExpanded1' },
                    allowMultiSelection: true,
                    selectedNodes: ['02', '03', '04-02']
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].classList.contains('e-active')).toBe(false);
                    expect(li[3].classList.contains('e-active')).toBe(false);
                    expect(li[4].classList.contains('e-active')).toBe(false);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(li[2].classList.contains('e-active')).toBe(true);
                    expect(li[8].classList.contains('e-active')).toBe(true);
                    expect(treeObj.selectedNodes.length).toBe(3);
                    expect(treeObj.selectedNodes).not.toContain('01');
                    expect(treeObj.selectedNodes).not.toContain('04');
                    expect(treeObj.selectedNodes).not.toContain('04-01');
                    expect(treeObj.selectedNodes).toContain('02');
                    expect(treeObj.selectedNodes).toContain('03');
                    expect(treeObj.selectedNodes).toContain('04-02');
                    done();
                }, 100);
            });
            it('template support testing with draw event', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", expanded: 'nodeExpanded1' },
                    drawNode: (args) => {
                        var rowDiv = document.createElement('span');
                        if (!args.node.querySelector('.e-icons')) {
                            rowDiv.className += 'child';
                        } else {
                            rowDiv.className += 'parent';
                        }
                        args.node.children[1].appendChild(rowDiv);
                    },
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                    expect(li[0].querySelector('.parent')).not.toBe(null);
                    expect(li[0].querySelector('.child')).toBe(null);
                    expect(li[1].querySelector('.child')).not.toBe(null);
                    expect(li[1].querySelector('.parent')).toBe(null);
                    done();
                }, 450);
            });
            it('template support testing with string', (done: Function) => {
                treeObj = new TreeView({ 
                    fields: { dataSource: localData1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", expanded: 'nodeExpanded1' },
                    nodeTemplate: '${if(hasChild == undefined)}<b>${nodeText}</b>${else}<i>${nodeText}</i>${/if}',
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                    expect(li[0].querySelector('i')).not.toBe(null);
                    expect(li[0].querySelector('b')).toBe(null);
                    expect(li[1].querySelector('b')).not.toBe(null);
                    expect(li[1].querySelector('i')).toBe(null);
                    done();
                }, 450);
            });
            it('template support testing with script', (done: Function) => {
                let template: Element = createElement('div', { id: 'template' });
                template.innerHTML = '${if(hasChild == undefined)}<b>${nodeText}</b>${else}<i>${nodeText}</i>${/if}';
                document.body.appendChild(template);    
                treeObj = new TreeView({ 
                    fields: { dataSource: localData1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", expanded: 'nodeExpanded1' },
                    nodeTemplate: '#template',
                },'#tree1');
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                    expect(li[0].querySelector('i')).not.toBe(null);
                    expect(li[0].querySelector('b')).toBe(null);
                    expect(li[1].querySelector('b')).not.toBe(null);
                    expect(li[1].querySelector('i')).toBe(null);
                    done();
                }, 450);
            });
        });
        describe('property change testing', () => {
            let mouseEventArgs: any = {
                preventDefault: (): void => {},
                stopImmediatePropagation: (): void => {},
                target: null,
                type: null,
            };
            let treeObj: any;
            beforeEach(() => {
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                treeObj = new TreeView({ 
                    fields: { dataSource: localData2, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", navigateUrl: 'nodeUrl',
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr', selected: 'nodeSelected' },
                    fullRowSelect: false,
                });
                treeObj.appendTo(ele);
            });
            afterEach(() => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
            });
            it('dataSource property', () => {
                expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields.dataSource = localData1;
                treeObj.dataBind();
                expect(treeObj.element.querySelectorAll('li').length).toBe(5);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields text property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { text: 'subText' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Pictures');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields id property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { id: 'subId' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('21');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields parentID property', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                expect(li[0].childElementCount).toBe(1);
                treeObj.clickHandler(mouseEventArgs);
                expect(li[0].childElementCount).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(li[0].querySelector('.e-list-parent').querySelector('.e-list-text').innerHTML).toBe('Wind.jpg');
                expect(li[0].querySelector('.e-list-parent').querySelector('.e-list-item').getAttribute('data-uid')).toBe('01-01');
                let cli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(cli[1].childElementCount).toBe(1);
                mouseEventArgs.target = cli[1].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                expect(cli[1].childElementCount).toBe(1);
                expect(cli[1].querySelector('.e-icons')).toBe(null);
                treeObj.fields = { id: 'subId', parentID: "subPid" };
                treeObj.dataBind();
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = newli[0].querySelector('.e-icons');
                expect(newli[0].childElementCount).toBe(1);
                treeObj.clickHandler(mouseEventArgs);
                expect(newli[0].childElementCount).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('21');
                expect(newli[0].querySelector('.e-list-parent').querySelector('.e-list-text').innerHTML).toBe('Wind.jpg');
                expect(newli[0].querySelector('.e-list-parent').querySelector('.e-list-item').getAttribute('data-uid')).toBe('21-01');
                let dli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(dli[1].childElementCount).toBe(1);
                mouseEventArgs.target = dli[1].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                expect(dli[1].childElementCount).toBe(1);
                expect(cli[1].querySelector('.e-icons')).toBe(null);
            });
            it('fields hasChildren property', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                expect(li[0].childElementCount).toBe(1);
                treeObj.clickHandler(mouseEventArgs);
                expect(li[0].childElementCount).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(li[0].querySelector('.e-list-parent').querySelector('.e-list-text').innerHTML).toBe('Wind.jpg');
                expect(li[0].querySelector('.e-list-parent').querySelector('.e-list-item').getAttribute('data-uid')).toBe('01-01');
                let cli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(cli[1].childElementCount).toBe(1);
                mouseEventArgs.target = cli[1].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                expect(cli[1].childElementCount).toBe(1);
                expect(cli[1].querySelector('.e-icons')).toBe(null);
                treeObj.fields = { hasChildren: 'subHasChild' };
                treeObj.dataBind();
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = newli[0].querySelector('.e-icons');
                expect(newli[0].childElementCount).toBe(1);
                treeObj.clickHandler(mouseEventArgs);
                expect(newli[0].childElementCount).toBe(1);
                expect(newli[0].querySelector('.e-icons')).toBe(null);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
            });
            it('fields iconCss property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { iconCss: 'subIcon' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('file')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields imageUrl property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { imageUrl: 'subImage' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Cricket.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields tooltip property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { tooltip: 'subTooltip' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Pictures node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields htmlAttributes property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { htmlAttributes: 'subHtmlAttr' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('customnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('blue');
            });
            it('fields expanded property', () => {
                expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { expanded: 'subExpanded' };
                treeObj.dataBind();
                expect(treeObj.element.querySelectorAll('li').length).toBe(3);
                expect(treeObj.element.querySelectorAll('li')[0].childElementCount).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[2].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[2].style.backgroundColor).toBe('red');
            });
            it('fields selected property', () => {
                expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { selected: 'subSelected' };
                treeObj.dataBind();
                expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
            });
            it('fields url property', () => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://npmci.syncfusion.com/')).not.toBe(-1);
                treeObj.fields = { navigateUrl: 'subUrl' };
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://npmci.syncfusion.com/')).toBe(-1);
                expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://ej2.syncfusion.com/demos/')).not.toBe(-1);
            });
            it('expandOn property testing', (done: Function) => {
                treeObj.expandOn = 'click';
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[0].childElementCount).toBe(1);
                treeObj.expandHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(li[0].childElementCount).toBe(2);
                    expect(li[0].getAttribute('aria-expanded')).toBe('true');
                    treeObj.expandHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                        expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[0].getAttribute('aria-expanded')).toBe('false');
                        treeObj.expandHandler(mouseEventArgs);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                            expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                            expect(li[0].getAttribute('aria-expanded')).toBe('true');                    
                            let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            mouseEventArgs.target = newli[1].querySelector('.e-list-text');
                            expect(newli[1].querySelector('.e-icons')).not.toBe(null);
                            expect(newli[1].childElementCount).toBe(1);
                            treeObj.expandHandler(mouseEventArgs);
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                expect(newli[1].querySelector('.e-icons')).toBe(null);
                                expect(newli[1].childElementCount).toBe(1);
                                expect(newli[1].getAttribute('aria-expanded')).toBe(null);
                                done();
                            }, 450);
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('cssClass property testing', () => {
                treeObj.cssClass = 'customTree productTree';
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('customTree')).toEqual(true);
                expect(document.getElementById('tree1').classList.contains('productTree')).toEqual(true);
                expect(document.getElementById('tree1').classList.contains('dynamicTree')).toEqual(false);
                expect(document.getElementById('tree1').classList.contains('demoTree')).toEqual(false);
                treeObj.cssClass = 'dynamicTree demoTree';
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('customTree')).toEqual(false);
                expect(document.getElementById('tree1').classList.contains('productTree')).toEqual(false);
                expect(document.getElementById('tree1').classList.contains('dynamicTree')).toEqual(true);
                expect(document.getElementById('tree1').classList.contains('demoTree')).toEqual(true);
                treeObj.cssClass = '';
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('dynamicTree')).toEqual(false);
                expect(document.getElementById('tree1').classList.contains('demoTree')).toEqual(false);
            });
            it('selectedNodes property testing', () => {
                expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('e-active')).toBe(false);
                treeObj.selectedNodes = ['02'];
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('e-active')).toBe(true);
            });
            it('sortOrder property testing', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li.length).toBe(2);
                expect(li[0].querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(li[0].getAttribute('data-uid')).toBe('01');
                treeObj.sortOrder = 'Ascending';
                treeObj.dataBind();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li1: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li1.length).toBe(2);
                    expect(li1[0].querySelector('.e-list-text').innerHTML).toBe('Downloads');
                    expect(li1[0].getAttribute('data-uid')).toBe('02');
                    treeObj.sortOrder = 'Descending';
                    treeObj.dataBind();
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        let li2: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                        expect(li2.length).toBe(2);
                        expect(li2[0].querySelector('.e-list-text').innerHTML).toBe('Music');
                        expect(li2[0].getAttribute('data-uid')).toBe('01');
                        treeObj.sortOrder = 'Ascending';
                        treeObj.dataBind();
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            let li3: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            expect(li3.length).toBe(2);
                            expect(li3[0].querySelector('.e-list-text').innerHTML).toBe('Downloads');
                            expect(li3[0].getAttribute('data-uid')).toBe('02');
                            treeObj.sortOrder = 'None';
                            treeObj.dataBind();
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                let li4: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                                expect(li4.length).toBe(2);
                                expect(li4[0].querySelector('.e-list-text').innerHTML).toBe('Music');
                                expect(li4[0].getAttribute('data-uid')).toBe('01');
                                done();
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            });
            it('allowEditing property testing', (done: Function) => {
                treeObj.allowEditing = true;
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                mouseEventArgs.type = 'dblclick';
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[0].childElementCount).toBe(1);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                treeObj.expandHandler(mouseEventArgs);
                treeObj.editingHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    expect(li[0].childElementCount).toBe(1);
                    expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                    expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                    expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music');
                    (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music node';
                    (li[0].querySelector('.e-tree-input') as HTMLInputElement).blur();
                    expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                    expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                    treeObj.allowEditing = false;
                    treeObj.dataBind();
                    treeObj.expandHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(false);
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                        expect(li[0].childElementCount).toBe(2);
                        expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                        done();
                    }, 450);
                }, 100);
            });
            it('enableRtl property testing', () => {
                expect(document.getElementById('tree1').classList.contains('e-rtl')).toEqual(false);
                treeObj.enableRtl = true;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-rtl')).toEqual(true);
                treeObj.enableRtl = false;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-rtl')).toEqual(false);
            });
            it('allowDragAndDrop property testing', () => {
                expect(treeObj.dragObj).toBe(undefined);
                expect(treeObj.dropObj).toBe(undefined);
                treeObj.allowDragAndDrop = true;
                treeObj.dataBind();
                expect(treeObj.dragObj.isDestroyed).toBe(false);
                expect(treeObj.dropObj.isDestroyed).toBe(false);
                treeObj.allowDragAndDrop = false;
                treeObj.dataBind();
                expect(treeObj.dragObj.isDestroyed).toBe(true);
                expect(treeObj.dropObj.isDestroyed).toBe(true);
            });
            it('fullRowSelect property testing', () => {
                expect(document.getElementById('tree1').classList.contains('e-fullrow-wrap')).toEqual(false);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(1);
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-fullrow-wrap')).toEqual(true);
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(newli[0].childElementCount).toBe(2);
                treeObj.fullRowSelect = false;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-fullrow-wrap')).toEqual(false);
                let cusli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(cusli[0].childElementCount).toBe(1);
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-fullrow-wrap')).toEqual(true);
            });
            it('allowMultiSelection property testing', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-active')).toBe(true);
                expect(li[1].classList.contains('e-active')).toBe(false);
                expect(treeObj.selectedNodes.length).toBe(1);
                expect(treeObj.selectedNodes).toContain('01');
                treeObj.allowMultiSelection = true;
                treeObj.dataBind();
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                li[1].querySelector('.e-list-text').dispatchEvent(e);
                expect(li[0].classList.contains('e-active')).toBe(true);
                expect(li[1].classList.contains('e-active')).toBe(true);
                expect(treeObj.selectedNodes.length).toBe(2);
                expect(treeObj.selectedNodes).toContain('01');
                expect(treeObj.selectedNodes).toContain('02');
                treeObj.allowMultiSelection = false;
                treeObj.dataBind();
                expect(li[0].classList.contains('e-active')).toBe(true);
                expect(li[1].classList.contains('e-active')).toBe(false);
                expect(treeObj.selectedNodes.length).toBe(1);
                expect(treeObj.selectedNodes).toContain('01');
                expect(treeObj.selectedNodes).not.toContain('02');
            });
            it('nodeTemplate property testing', () => {
                let template: Element = createElement('div', { id: 'template' });
                template.innerHTML = '${if(hasChild == undefined)}<b>${nodeText}</b>${else}<i>${nodeText}</i>${/if}';
                document.body.appendChild(template);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                expect(li[0].querySelector('i')).toBe(null);
                expect(li[0].querySelector('b')).toBe(null);
                treeObj.nodeTemplate = 'template';
                treeObj.dataBind();
                let nli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                expect(nli[0].querySelector('i')).toBe(null);
                expect(nli[0].querySelector('b')).toBe(null);
                treeObj.nodeTemplate = null;
                treeObj.dataBind();
                let mli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                expect(mli[0].querySelector('i')).toBe(null);
                expect(mli[0].querySelector('b')).toBe(null);
                treeObj.nodeTemplate = '#template';
                treeObj.dataBind();
                let ali: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                expect(ali[0].querySelector('i')).not.toBe(null);
                expect(ali[0].querySelector('b')).toBe(null);
                treeObj.nodeTemplate = '${if(hasChild == undefined)}<b>${nodeText}</b>${else}<i>${nodeText}</i>${/if}';
                treeObj.dataBind();
                let bli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                expect(bli[0].querySelector('i')).not.toBe(null);
                expect(bli[0].querySelector('b')).toBe(null);
            });
            it('dataSource with null and empty', () => {
                expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                treeObj.fields.dataSource = null;
                treeObj.dataBind();
                expect(treeObj.element.querySelectorAll('li').length).toBe(0);
                treeObj.fields.dataSource = [];
                treeObj.dataBind();
                expect(treeObj.element.querySelectorAll('li').length).toBe(0);
            });
        });
        describe('mouse events testing', () => {
            let mouseEventArgs: any = {
                preventDefault: (): void => {},
                stopImmediatePropagation: (): void => {},
                target: null,
                type: null,
            };
            let treeObj: any;
            let ele: HTMLElement = createElement('div', { id: 'tree1' });
            beforeAll(() => {
                document.body.appendChild(ele);
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    fullRowSelect: false,
                });
                treeObj.appendTo(ele);
            });
            afterAll(() => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
            });
            it('mouse click on expand/collapse icon', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[3].querySelector('.e-icons');
                expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[3].childElementCount).toBe(1);
                expect(treeObj.element.querySelectorAll('[aria-expanded="true"]').length).toBe(0);
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(li[3].childElementCount).toBe(2);
                    expect(li[3].getAttribute('aria-expanded')).toBe('true');
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                        expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[3].getAttribute('aria-expanded')).toBe('false');
                        treeObj.clickHandler(mouseEventArgs);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                            expect((li[3].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                            expect(li[3].getAttribute('aria-expanded')).toBe('true');
                            let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            mouseEventArgs.target = newli[4].querySelector('.e-icons');
                            expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                            expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                            expect(newli[4].childElementCount).toBe(1);
                            treeObj.clickHandler(mouseEventArgs);
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                                expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                                expect(newli[4].childElementCount).toBe(2);
                                expect(li[3].getAttribute('aria-expanded')).toBe('true');
                                expect(newli[4].getAttribute('aria-expanded')).toBe('true');
                                treeObj.clickHandler(mouseEventArgs);
                                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                                setTimeout(function() {
                                    expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                                    expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                                    expect(newli[4].getAttribute('aria-expanded')).toBe('false');
                                    done();
                                }, 450);
                            }, 450);
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('mouse click on text', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[1].querySelector('.e-text-content');
                expect((li[1] as Element).classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(0);
                treeObj.clickHandler(mouseEventArgs);
                expect((li[1] as Element).classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(li[1].getAttribute('aria-selected')).toBe('true');
                mouseEventArgs.target = li[0].querySelector('.e-text-content');
                expect((li[0] as Element).classList.contains('e-active')).toBe(false);            
                treeObj.clickHandler(mouseEventArgs);            
                expect((li[1] as Element).classList.contains('e-active')).toBe(false);
                expect((li[0] as Element).classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(li[0].getAttribute('aria-selected')).toBe('true');
            });
            it('mouse click on ul', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let ul: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('ul');
                mouseEventArgs.target = ul[0];
                expect((li[0] as Element).classList.contains('e-active')).toBe(true);
                treeObj.clickHandler(mouseEventArgs);
                expect((li[0] as Element).classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(li[0].getAttribute('aria-selected')).toBe('true');
                mouseEventArgs.target = ul[1];
                treeObj.clickHandler(mouseEventArgs);
                expect((li[0] as Element).classList.contains('e-active')).toBe(true);
                expect((li[3] as Element).classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(li[0].getAttribute('aria-selected')).toBe('true');
            });
            it('mouse double click on text', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[12].querySelector('.e-list-text');
                expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[12].childElementCount).toBe(1);
                treeObj.expandHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(li[12].childElementCount).toBe(2);
                    expect(li[12].getAttribute('aria-expanded')).toBe('true');
                    treeObj.expandHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                        expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[12].getAttribute('aria-expanded')).toBe('false');
                        treeObj.expandHandler(mouseEventArgs);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                            expect((li[12].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                            expect(li[12].getAttribute('aria-expanded')).toBe('true');
                            let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            mouseEventArgs.target = newli[13].querySelector('.e-list-text');
                            expect(newli[13].querySelector('.e-icons')).toBe(null);
                            expect(newli[13].childElementCount).toBe(1);
                            treeObj.expandHandler(mouseEventArgs);
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                expect(newli[13].querySelector('.e-icons')).toBe(null);
                                expect(newli[13].childElementCount).toBe(1);
                                expect(newli[13].getAttribute('aria-expanded')).toBe(null);
                                mouseEventArgs.target = newli[12].querySelector('.e-icons');
                                treeObj.expandHandler(mouseEventArgs);
                                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                                setTimeout(function() {
                                    expect((newli[12].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                                    expect((newli[12].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                                    expect(newli[12].getAttribute('aria-expanded')).toBe('true');
                                    done();
                                }, 450);
                            }, 450);
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('mouse hover and mouse leave testing', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[1].querySelector('.e-text-content');
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[1].classList.contains('e-hover')).toBe(false);
                treeObj.onMouseOver(mouseEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[1].classList.contains('e-hover')).toBe(true);
                let ul: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('ul');
                mouseEventArgs.target = ul[0];
                treeObj.onMouseOver(mouseEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[1].classList.contains('e-hover')).toBe(false);
                mouseEventArgs.target = li[3].querySelector('.e-icons');
                expect(li[3].classList.contains('e-hover')).toBe(false);
                treeObj.onMouseOver(mouseEventArgs);
                expect(li[3].classList.contains('e-hover')).toBe(true);
                mouseEventArgs.target = treeObj.element;
                treeObj.onMouseOver(mouseEventArgs);
                expect(li[3].classList.contains('e-hover')).toBe(false);
                mouseEventArgs.target = li[1].querySelector('.e-text-content');
                treeObj.onMouseOver(mouseEventArgs);
                expect(li[1].classList.contains('e-hover')).toBe(true);
                treeObj.onMouseOver(mouseEventArgs);
                expect(li[1].classList.contains('e-hover')).toBe(true);
                treeObj.onMouseLeave(mouseEventArgs);
                expect(li[1].classList.contains('e-hover')).toBe(false);
            });
            it('mouse click on full row', () => {
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[1].querySelector('.e-fullrow');
                expect((li[1] as Element).classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                treeObj.clickHandler(mouseEventArgs);
                expect((li[1] as Element).classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(li[1].getAttribute('aria-selected')).toBe('true');
                mouseEventArgs.target = li[0].querySelector('.e-fullrow');
                expect((li[0] as Element).classList.contains('e-active')).toBe(false);            
                treeObj.clickHandler(mouseEventArgs);            
                expect((li[1] as Element).classList.contains('e-active')).toBe(false);
                expect((li[0] as Element).classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(li[0].getAttribute('aria-selected')).toBe('true');
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
            });
        });
        describe('keyboard navigation testing', () => {
            let keyboardEventArgs: any = {
                preventDefault: (): void => {},
                action: null
            };
            let treeObj: any;
            let ele: HTMLElement = createElement('div', { id: 'tree1' });
            beforeAll(() => {
                document.body.appendChild(ele);
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    fullRowSelect: false,
                });
                treeObj.appendTo(ele);
            });
            afterAll(() => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
            });
            it('tab key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[1].classList.contains('e-node-focus')).toBe(false);
                keyboardEventArgs.action = 'tab';
                treeObj.focusIn();
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[1].classList.contains('e-node-focus')).toBe(false);
            });
            it('down arrow key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[1].classList.contains('e-hover')).toBe(false);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[1].classList.contains('e-node-focus')).toBe(false);
                keyboardEventArgs.action = 'moveDown';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[1].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(false);
                expect(li[1].classList.contains('e-node-focus')).toBe(true);
                treeObj.keyActionHandler(keyboardEventArgs);
                treeObj.keyActionHandler(keyboardEventArgs);
                treeObj.keyActionHandler(keyboardEventArgs);
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[1].classList.contains('e-hover')).toBe(false);
                expect(li[4].classList.contains('e-hover')).toBe(true);
                expect(li[1].classList.contains('e-node-focus')).toBe(false);
                expect(li[4].classList.contains('e-node-focus')).toBe(true);
            });
            it('up arrow key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[4].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(false);
                expect(li[4].classList.contains('e-node-focus')).toBe(true);
                keyboardEventArgs.action = 'moveUp';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[3].classList.contains('e-hover')).toBe(true);
                expect(li[4].classList.contains('e-hover')).toBe(false);
                expect(li[3].classList.contains('e-node-focus')).toBe(true);
                expect(li[4].classList.contains('e-node-focus')).toBe(false);
                treeObj.keyActionHandler(keyboardEventArgs);
                treeObj.keyActionHandler(keyboardEventArgs);
                treeObj.keyActionHandler(keyboardEventArgs);
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[1].classList.contains('e-hover')).toBe(false);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[1].classList.contains('e-node-focus')).toBe(false);
            });
            it('end key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[li.length-1].classList.contains('e-hover')).toBe(false);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[li.length-1].classList.contains('e-node-focus')).toBe(false);
                keyboardEventArgs.action = 'end';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[li.length-1].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(false);
                expect(li[li.length-1].classList.contains('e-node-focus')).toBe(true);
            });
            it('home key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[li.length-1].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(false);
                expect(li[li.length-1].classList.contains('e-node-focus')).toBe(true);
                keyboardEventArgs.action = 'home';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[li.length-1].classList.contains('e-hover')).toBe(false);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[li.length-1].classList.contains('e-node-focus')).toBe(false);
            });
            it('enter key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[0].classList.contains('e-active')).toBe(false);
                keyboardEventArgs.action = 'enter';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[0].classList.contains('e-active')).toBe(true);
            });
            it('right arrow key pressed', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-hover')).toBe(true);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
                expect(li[1].classList.contains('e-node-focus')).toBe(false);
                expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                expect(li[0].childElementCount).toBe(1);
                keyboardEventArgs.action = 'moveRight';
                treeObj.keyActionHandler(keyboardEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[0].classList.contains('e-hover')).toBe(true);
                    expect(li[0].classList.contains('e-node-focus')).toBe(true);
                    expect(li[1].classList.contains('e-node-focus')).toBe(false);
                    expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(li[0].childElementCount).toBe(2);
                    let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    keyboardEventArgs.action = 'moveRight';
                    treeObj.keyActionHandler(keyboardEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(newli[0].classList.contains('e-hover')).toBe(false);
                        expect(newli[1].classList.contains('e-hover')).toBe(true);
                        expect(newli[0].classList.contains('e-node-focus')).toBe(false);
                        expect(newli[1].classList.contains('e-node-focus')).toBe(true);
                        expect(newli[1].childElementCount).toBe(1);
                        keyboardEventArgs.action = 'moveRight';
                        treeObj.keyActionHandler(keyboardEventArgs);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect(newli[0].classList.contains('e-hover')).toBe(false);
                            expect(newli[1].classList.contains('e-hover')).toBe(true);
                            expect(newli[2].classList.contains('e-hover')).toBe(false);
                            expect(newli[0].classList.contains('e-node-focus')).toBe(false);
                            expect(newli[1].classList.contains('e-node-focus')).toBe(true);
                            expect(newli[2].classList.contains('e-node-focus')).toBe(false);
                            expect(newli[1].childElementCount).toBe(1);
                            done();
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('left arrow key pressed', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                keyboardEventArgs.action = 'moveLeft';
                treeObj.keyActionHandler(keyboardEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[0].classList.contains('e-hover')).toBe(true);
                    expect(li[1].classList.contains('e-hover')).toBe(false);
                    expect(li[0].classList.contains('e-node-focus')).toBe(true);
                    expect(li[1].classList.contains('e-node-focus')).toBe(false);
                    expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(false);
                    expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(true);
                    expect(li[0].childElementCount).toBe(2);
                    keyboardEventArgs.action = 'moveLeft';
                    treeObj.keyActionHandler(keyboardEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].classList.contains('e-hover')).toBe(true);
                        expect(li[1].classList.contains('e-hover')).toBe(false);
                        expect(li[0].classList.contains('e-node-focus')).toBe(true);
                        expect(li[1].classList.contains('e-node-focus')).toBe(false);
                        expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                        expect((li[0].querySelector('.e-icons') as Element).classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[0].childElementCount).toBe(2);
                        keyboardEventArgs.action = 'moveLeft';
                        treeObj.keyActionHandler(keyboardEventArgs);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect(li[0].classList.contains('e-hover')).toBe(true);
                            expect(li[1].classList.contains('e-hover')).toBe(false);
                            expect(li[0].classList.contains('e-node-focus')).toBe(true);
                            expect(li[1].classList.contains('e-node-focus')).toBe(false);
                            expect(li[0].childElementCount).toBe(2);
                            done();
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('f2 key pressed', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect(li[0].querySelector('.e-tree-input')).toBe(null);
                keyboardEventArgs.action = 'f2';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect(li[0].querySelector('.e-tree-input')).toBe(null);
                treeObj.allowEditing = true;
                treeObj.dataBind();
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                expect(li[0].querySelector('.e-tree-input')).not.toBe(null);
                expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music');
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music node';
                keyboardEventArgs.action = 'enter';
                keyboardEventArgs.target = li[0].querySelector('.e-tree-input');
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect(li[0].querySelector('.e-tree-input')).toBe(null);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                keyboardEventArgs.action = 'f2';
                keyboardEventArgs.target = null;
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                expect(li[0].querySelector('.e-tree-input')).not.toBe(null);
                expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music node');
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music value';
                keyboardEventArgs.action = 'escape';
                keyboardEventArgs.target = li[0].querySelector('.e-tree-input');
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect(li[0].querySelector('.e-tree-input')).toBe(null);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                keyboardEventArgs.action = 'f2';
                keyboardEventArgs.target = null;
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                expect(li[0].querySelector('.e-tree-input')).not.toBe(null);
                expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music node');
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music value';
                keyboardEventArgs.action = 'tab';
                keyboardEventArgs.target = li[0].querySelector('.e-tree-input');
                treeObj.keyActionHandler(keyboardEventArgs);
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).blur();
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect(li[0].querySelector('.e-tree-input')).toBe(null);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music value');
                treeObj.allowEditing = false;
                treeObj.dataBind();
            });
            it('focus out testing', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                treeObj.focusOut();
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[0].classList.contains('e-node-focus')).toBe(true);
            });
            it('CtrlA testing', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                keyboardEventArgs.action = 'ctrlA';
                keyboardEventArgs.target = li[1].querySelector('.e-list-text');
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[1].classList.contains('e-active')).toBe(false);
                treeObj.allowMultiSelection = true;
                treeObj.dataBind();
                keyboardEventArgs.action = 'ctrlA';
                keyboardEventArgs.target = li[1].querySelector('.e-list-text');
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(li[1].classList.contains('e-active')).toBe(true);
            });
        });
        describe('events testing', () => {
            let mouseEventArgs: any = {
                preventDefault: (): void => {},
                stopImmediatePropagation: (): void => {},
                target: null,
                type: null,
            };
            let keyboardEventArgs: any = {
                preventDefault: (): void => {},
                action: null
            };
            let treeObj: any;
            let i: number = 0;
            let originalTimeout: any;
            function clickFn(): void {
                i++;
            }
            beforeEach((): void => {
                treeObj = undefined;
                i = 0;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            });
            afterEach((): void => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
            });
            it('created event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    created: clickFn
                },'#tree1');
                expect(i).toEqual(1);
            });
            it('drawNode event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    drawNode: clickFn
                },'#tree1');
                expect(i).toEqual(5);
            });
            it('dataBound event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    dataBound: clickFn
                },'#tree1');
                expect(i).toEqual(1);
            });
            it('nodeExpanding event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeExpanding: clickFn
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                expect(i).toEqual(1);
            });
            it('nodeExpanded event is triggered', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeExpanded: clickFn,
                    animation: { expand: { duration: 0 }, collapse: { duration: 0 } },
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(i).toEqual(1);
                    done();
                }, 100);
            });
            it('nodeCollapsing event is triggered', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeCollapsing: clickFn
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.clickHandler(mouseEventArgs);
                    expect(i).toEqual(1);
                    done();
                }, 450);                
            });
            it('nodeCollapsed event is triggered', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeCollapsed: clickFn,
                    animation: { expand: { duration: 0 }, collapse: { duration: 0 } },
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(i).toEqual(1);
                        done();
                    }, 100);
                }, 100);
            });
            it('nodeSelecting event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: localData3, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeSelecting: clickFn,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                treeObj.clickHandler(mouseEventArgs);
                expect(i).toEqual(1);
                i = 0;
                expect(li[0].classList.contains('e-active')).toBe(true);
                mouseEventArgs.target = li[7].querySelector('.e-list-text');
                treeObj.clickHandler(mouseEventArgs);
                expect(i).toEqual(1);
                expect(li[7].classList.contains('e-active')).toBe(true);
                treeObj.allowMultiSelection = true;
                treeObj.dataBind();
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                li[7].querySelector('.e-list-text').dispatchEvent(e);
                expect(i).toEqual(2);
                expect(li[7].classList.contains('e-active')).toBe(false);
            });
            it('nodeSelected event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeSelected: clickFn,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                treeObj.clickHandler(mouseEventArgs);
                expect(i).toEqual(1);
                expect(li[0].classList.contains('e-active')).toBe(true);
                i = 0;
                mouseEventArgs.target = li[4].querySelector('.e-list-text');
                treeObj.clickHandler(mouseEventArgs);
                expect(i).toEqual(1);
                expect(li[4].classList.contains('e-active')).toBe(true);
                treeObj.allowMultiSelection = true;
                treeObj.dataBind();
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                li[4].querySelector('.e-list-text').dispatchEvent(e);
                expect(i).toEqual(2);
                expect(li[4].classList.contains('e-active')).toBe(false);
            });
            it('nodeEditing event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeEditing: clickFn,
                    fullRowSelect: false,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                mouseEventArgs.type = 'dblclick';
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[0].childElementCount).toBe(1);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                treeObj.editingHandler(mouseEventArgs);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[0].childElementCount).toBe(1);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music');
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music node';
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).blur();
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                expect(i).toEqual(1);
            });
            it('nodeEdited event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeEdited: clickFn,
                    fullRowSelect: false,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                mouseEventArgs.type = 'dblclick';
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[0].childElementCount).toBe(1);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                treeObj.editingHandler(mouseEventArgs);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[0].childElementCount).toBe(1);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music');
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music node';
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).blur();
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                expect(i).toEqual(1);
            });
            it('nodeClicked event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeClicked: clickFn,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, });
                li[0].querySelector('.e-list-text').dispatchEvent(e);
                expect(i).toEqual(1);
                expect(li[0].classList.contains('e-active')).toBe(true);
            });
            it('keyPress event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    keyPress: clickFn,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                keyboardEventArgs.action = 'tab';
                treeObj.focusIn();
                expect(li[0].classList.contains('e-hover')).toBe(true);
                keyboardEventArgs.action = 'moveDown';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(i).toEqual(1);
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[1].classList.contains('e-hover')).toBe(true);
            });
            it('darg and drop events are triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeDragStart: clickFn,
                    nodeDragging: clickFn,
                    nodeDragStop: clickFn,
                    nodeDropped: clickFn,
                    allowDragAndDrop: true,
                },'#tree1');
                expect(i).toEqual(0);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-list-text'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);                
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-list-text'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(i).toEqual(1);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1].querySelector('.e-list-text');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(i).toEqual(2);
                i = 0;
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1].querySelector('.e-list-text'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(i).toEqual(2);
                expect(li[1].childElementCount).toBe(3);
                expect(li[1].children[2].childElementCount).toBe(3);
            });
            it('destroyed event is triggered', () => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    destroyed: clickFn
                },'#tree1');
                treeObj.destroy();
                expect(i).toEqual(1);
            });
        });
        describe('methods testing', () => {
            let treeObj: any;
            beforeEach(() => {
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                treeObj = new TreeView({ fields: { dataSource: localData3, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' } });
                treeObj.appendTo(ele);
            });
            afterEach(() => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
            });
            it('get module name', () => {
                expect(treeObj.getModuleName()).toBe('treeview');
            });
            it('persistence testing', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let sItems: any = JSON.parse(treeObj.getPersistData());
                expect(sItems.selectedNodes.length).toBe(0);
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, });
                li[0].querySelector('.e-list-text').dispatchEvent(e);
                let seItems: any = JSON.parse(treeObj.getPersistData());
                expect(seItems.selectedNodes.length).toBe(1);
                expect(seItems.selectedNodes).toContain('01');
            });
            it('replaceText', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.replaceText(li[0], 'Rain');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.allowEditing = true;
                treeObj.dataBind();
                treeObj.replaceText(li[0], 'Rain');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Rain');
                treeObj.replaceText('01', 'Music');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.replaceText('011', 'Music');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.replaceText('01', null);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.replaceText(null, null);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.allowEditing = false;
                treeObj.dataBind();
            });
            it('expandAll', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(2);
                treeObj.expandAll();
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(newli[0].childElementCount).toBe(3);
                expect(newli[0].children[2].childElementCount).toBe(1);
                expect(newli[11].childElementCount).toBe(3);
                expect(newli[11].children[2].childElementCount).toBe(5);
                expect(newli[12].childElementCount).toBe(3);
                expect(newli[12].children[2].childElementCount).toBe(2);
                expect(newli[14].childElementCount).toBe(3);
                expect(newli[14].children[2].childElementCount).toBe(1);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[0].getAttribute('aria-expanded')).toBe('true');
                    done();
                }, 450);
            });
            it('expandAll with specific nodes', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(2);
                treeObj.expandAll(['01', li[1], '03', '099', '07']);
                expect(li[0].childElementCount).toBe(3);
                expect(li[0].children[2].childElementCount).toBe(1);
                expect(li[1].childElementCount).toBe(3);
                expect(li[1].children[2].childElementCount).toBe(2);
                expect(li[2].childElementCount).toBe(3);
                expect(li[2].children[2].childElementCount).toBe(5);
                treeObj.expandAll('04');
                expect(li[4].childElementCount).toBe(2);
                treeObj.expandAll(null);
                expect(li[4].childElementCount).toBe(3);
            });
            it('expandAll with level', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(2);
                treeObj.expandAll(null, 1);
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(newli[0].childElementCount).toBe(3);
                expect(newli[0].children[2].childElementCount).toBe(1);
                expect(newli[11].childElementCount).toBe(3);
                expect(newli[11].children[2].childElementCount).toBe(5);
                expect(newli[12].childElementCount).toBe(2);
                treeObj.expandAll(null, 3);
                let nli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(nli[0].childElementCount).toBe(3);
                expect(nli[0].children[2].childElementCount).toBe(1);
                expect(nli[11].childElementCount).toBe(3);
                expect(nli[11].children[2].childElementCount).toBe(5);
                expect(nli[12].childElementCount).toBe(3);
                expect(nli[12].children[2].childElementCount).toBe(2);
                expect(nli[14].childElementCount).toBe(3);
                expect(nli[14].children[2].childElementCount).toBe(1);
            });
            it('expandAll with excludeHiddenNodes', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(2);                
                treeObj.expandAll(null, 1, true);
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(newli[0].childElementCount).toBe(3);
                expect(newli[0].children[2].childElementCount).toBe(1);
                expect(newli[11].childElementCount).toBe(3);
                expect(newli[11].children[2].childElementCount).toBe(5);
                expect(newli[12].childElementCount).toBe(2);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, });
                    newli[11].querySelector('.e-icons').dispatchEvent(e);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        treeObj.expandAll(null, 2, true);
                        expect(newli[12].childElementCount).toBe(2);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            newli[11].querySelector('.e-icons').dispatchEvent(e);
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                treeObj.expandAll(null, 0, true);
                                expect(newli[12].childElementCount).toBe(2);
                                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                                setTimeout(function() {
                                    treeObj.expandAll(null, null, true);
                                    let nli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                                    expect(nli[0].childElementCount).toBe(3);
                                    expect(nli[0].children[2].childElementCount).toBe(1);
                                    expect(nli[11].childElementCount).toBe(3);
                                    expect(nli[11].children[2].childElementCount).toBe(5);
                                    expect(nli[12].childElementCount).toBe(3);
                                    expect(nli[12].children[2].childElementCount).toBe(2);
                                    expect(nli[14].childElementCount).toBe(3);
                                    expect(nli[14].children[2].childElementCount).toBe(1);
                                    done();
                                }, 450);
                            }, 450);
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('collapseAll', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(2);
                treeObj.expandAll();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(newli[0].childElementCount).toBe(3);
                    expect(newli[0].children[2].childElementCount).toBe(1);
                    expect(li[0].getAttribute('aria-expanded')).toBe('true');
                    treeObj.collapseAll();
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].getAttribute('aria-expanded')).toBe('false');
                        done();
                    }, 450);
                }, 450);
            });
            it('collapseAll with specific nodes', (done: Function) => {
                treeObj.expandAll();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                    treeObj.collapseAll(['01', li[2], '03', '099', '07']);
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    expect(li[2].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    expect(li[5].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    treeObj.collapseAll('04');
                    expect(li[11].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                    treeObj.collapseAll(null);
                    expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    done();
                }, 450);
            });
            it('collapseAll with level', (done: Function) => {
                treeObj.expandAll();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                    treeObj.collapseAll(null, 1);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[11].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                        treeObj.collapseAll(null, 3);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            let nli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                            expect(li[14].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);                            
                            done();
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('collapseAll with excludeHiddenNodes', (done: Function) => {
                treeObj.expandAll();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.collapseAll(null, 1, true);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[11].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                        treeObj.collapseAll(null, 2, true);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                            treeObj.collapseAll(null, 0, true);
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, });
                                li[11].querySelector('.e-icons').dispatchEvent(e);
                                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                                setTimeout(function() {
                                    expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                                    treeObj.collapseAll(null, null, true);
                                    let nli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                                    expect(nli[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                                    expect(nli[14].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                                    done();
                                }, 450);
                            }, 450);
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('ensureVisible', (done: Function) => {
                treeObj.expandAll();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.collapseAll(null, 1, true);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                        treeObj.ensureVisible('0');
                        treeObj.ensureVisible('04-01-01');
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect(li[11].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                            expect(li[12].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                            treeObj.ensureVisible(li[15]);
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                expect(li[14].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                                done();
                            }, 450);
                        }, 450);
                    }, 450);
                }, 450);
            });
            it('disableNodes', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-disable')).toBe(false);
                expect(li[0].getAttribute('aria-disabled')).toBe(null);
                treeObj.disableNodes(['01', li[2], '03', '099', '07']);
                expect(li[0].classList.contains('e-disable')).toBe(true);
                expect(li[0].getAttribute('aria-disabled')).toBe('true');
                expect(li[2].classList.contains('e-disable')).toBe(true);
                expect(li[2].getAttribute('aria-disabled')).toBe('true');
                expect(li[8].classList.contains('e-disable')).toBe(true);
                expect(li[8].getAttribute('aria-disabled')).toBe('true');
                treeObj.disableNodes(null);
                expect(li[3].classList.contains('e-disable')).toBe(false);
                expect(li[3].getAttribute('aria-disabled')).toBe(null);
            });
            it('enableAll', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                treeObj.disableNodes(['01', li[2], '03', '099', '07']);
                expect(li[0].classList.contains('e-disable')).toBe(true);
                expect(li[2].classList.contains('e-disable')).toBe(true);
                expect(li[8].classList.contains('e-disable')).toBe(true);
                treeObj.enableAll(['01', li[2], '099']);
                expect(li[0].classList.contains('e-disable')).toBe(false);
                expect(li[0].getAttribute('aria-disabled')).toBe(null);
                expect(li[2].classList.contains('e-disable')).toBe(false);
                expect(li[2].getAttribute('aria-disabled')).toBe(null);
                expect(li[8].classList.contains('e-disable')).toBe(true);
                expect(li[8].getAttribute('aria-disabled')).toBe('true');
                treeObj.enableAll();
                expect(li[8].classList.contains('e-disable')).toBe(false);
                expect(li[8].getAttribute('aria-disabled')).toBe(null);
            });
            it('getNode', () => {
                expect(treeObj.getNode(null)).toBe(null);
                expect(treeObj.getNode(1)).toBe(null);
                expect(treeObj.getNode('0')).toBe(null);
                expect(treeObj.getNode('01')).not.toBe(null);
            });
            it('getNodeDetails', () => {
                expect(treeObj.getNodeDetails(null).text).toBe('');
                expect(treeObj.getNodeDetails(1).text).toBe('');
                expect(treeObj.getNodeDetails('0').text).toBe('');
                expect(treeObj.getNodeDetails('01').text).toBe('Music');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(treeObj.getNodeDetails(li[1]).text).toBe('Videos');
            });
            it('moveNodes', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                treeObj.moveNodes(null, '0');
                treeObj.moveNodes(['01','02'], '03');
                expect(li[2].childElementCount).toBe(3);
                expect(li[2].children[2].childElementCount).toBe(7);
                expect(li[1].parentNode.parentNode).toBe(li[2]);
                expect(li[0].parentNode.parentNode).toBe(li[2]);
                treeObj.moveNodes(['03', li[0]], '02', 0);
                expect(li[1].childElementCount).toBe(3);
                expect(li[1].children[2].childElementCount).toBe(3);
                expect(li[0].parentNode.parentNode).toBe(li[1]);
                expect(li[2].parentNode.parentNode).not.toBe(li[1]);
            });
            it('removeNodes', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                treeObj.selectedNodes = ['02'];
                treeObj.dataBind();
                expect(treeObj.liList.length).toBe(9);
                treeObj.removeNodes('0');
                expect(treeObj.liList.length).toBe(9);
                treeObj.removeNodes(['01','02']);
                expect(treeObj.liList.length).toBe(7);
                treeObj.removeNodes([li[2]]);
                expect(treeObj.liList.length).toBe(6);
                expect(treeObj.liList.length).toBe(treeObj.element.querySelectorAll('li').length);
                expect(treeObj.selectedNodes.length).toBe(0);
            });
            it('addNodes', (done: Function) => {
                treeObj.addNodes(null);
                treeObj.addNodes(localData4);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(treeObj.liList.length).toBe(13);
                    expect(treeObj.liList.length).toBe(li.length);
                    expect(treeObj.element.querySelectorAll('.e-list-text')[9].innerHTML).toBe('Music');
                    expect(treeObj.element.querySelectorAll('.e-list-item')[9].getAttribute('data-uid')).toBe('11');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelectorAll('.e-list-item')[9].title).toBe('This is Music node');
                    expect(treeObj.element.querySelectorAll('.e-list-item')[9].classList.contains('e-active')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[11].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[11].style.backgroundColor).toBe('red');
                    treeObj.removeNodes(['11', '11-01', '12', '12-01']);
                    treeObj.addNodes(localData4, '01');
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                        expect(treeObj.liList.length).toBe(14);
                        expect(treeObj.liList.length).toBe(li.length);
                        expect(treeObj.element.querySelectorAll('.e-list-text')[2].innerHTML).toBe('Music');
                        expect(treeObj.element.querySelectorAll('.e-list-item')[2].getAttribute('data-uid')).toBe('11');
                        expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                        expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                        expect(treeObj.element.querySelectorAll('.e-list-item')[2].title).toBe('This is Music node');
                        expect(treeObj.element.querySelectorAll('.e-list-item')[2].classList.contains('e-active')).toBe(true);
                        expect(treeObj.element.querySelectorAll('li')[4].classList.contains('firstnode')).toBe(true);
                        expect(treeObj.element.querySelectorAll('li')[4].style.backgroundColor).toBe('red');
                        treeObj.removeNodes(['11', '11-01', '12', '12-01']);
                        treeObj.addNodes(localData4, null, 1);
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            expect(treeObj.liList.length).toBe(14);
                            expect(treeObj.liList.length).toBe(li.length);
                            expect(treeObj.element.querySelectorAll('.e-list-text')[4].innerHTML).toBe('Music');
                            expect(treeObj.element.querySelectorAll('.e-list-item')[4].getAttribute('data-uid')).toBe('11');
                            expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                            expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                            expect(treeObj.element.querySelectorAll('.e-list-item')[4].title).toBe('This is Music node');
                            expect(treeObj.element.querySelectorAll('.e-list-item')[4].classList.contains('e-active')).toBe(true);
                            expect(treeObj.element.querySelectorAll('li')[2].classList.contains('firstnode')).toBe(true);
                            expect(treeObj.element.querySelectorAll('li')[2].style.backgroundColor).toBe('red');
                            treeObj.removeNodes(['11', '11-01', '12', '12-01']);
                            treeObj.addNodes(localData4, '01', 0);
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                                expect(treeObj.liList.length).toBe(14);
                                expect(treeObj.liList.length).toBe(li.length);
                                expect(treeObj.element.querySelectorAll('.e-list-text')[1].innerHTML).toBe('Music');
                                expect(treeObj.element.querySelectorAll('.e-list-item')[1].getAttribute('data-uid')).toBe('11');
                                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                                expect(treeObj.element.querySelectorAll('.e-list-item')[1].title).toBe('This is Music node');
                                expect(treeObj.element.querySelectorAll('.e-list-item')[1].classList.contains('e-active')).toBe(true);
                                expect(treeObj.element.querySelectorAll('li')[3].classList.contains('firstnode')).toBe(true);
                                expect(treeObj.element.querySelectorAll('li')[3].style.backgroundColor).toBe('red');
                                done();
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            });
            it('destroy', () => {
                treeObj.destroy();
                expect(treeObj.element.className).toBe('');
                expect(treeObj.element.childElementCount).toBe(0);
            });
        });
        describe('animation testing', () => {
            let mouseEventArgs: any = {
                preventDefault: (): void => {},
                stopImmediatePropagation: (): void => {},
                target: null,
                type: null,
            };
            let treeObj: any;
            let i: number = 0;
            let originalTimeout: any;
            function clickFn(): void {
                i++;
            }
            beforeEach((): void => {
                treeObj = undefined;
                i = 0;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            });
            afterEach((): void => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
            });
            it('default value with nodeExpanded event', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeExpanded: clickFn,
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(i).toEqual(1);
                    done();
                }, 450);
            });
            it('default value with nodeCollapsed event', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeCollapsed: clickFn,
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(i).toEqual(1);
                        done();
                    }, 450);
                }, 450);
            });
            it('disable expand animation', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeExpanded: clickFn,
                    animation: { expand: { duration: 0 } }
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(i).toEqual(1);
                    done();
                }, 100);
            });
            it('disable collpase animation', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeCollapsed: clickFn,
                    animation: { collapse: { duration: 0 } }
                },'#tree1');
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(i).toEqual(1);
                        done();
                    }, 100);
                }, 450);
            });
            it('property change expand animation', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeExpanded: clickFn,                    
                },'#tree1');
                treeObj.animation = { expand: { duration: 100 } };
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(i).toEqual(1);
                    done();
                }, 150);
            });
            it('property change collpase animation', (done: Function) => {
                treeObj = new TreeView({
                    fields: { dataSource: localData1, id: 'nodeId', text: 'nodeText', parentID: 'nodePid', hasChildren: 'hasChild' },
                    nodeCollapsed: clickFn,
                },'#tree1');
                treeObj.animation = { collapse: { duration: 100 } };
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    treeObj.clickHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(i).toEqual(1);
                        done();
                    }, 150);
                }, 450);
            });
        });
        describe('Drag and drop functionality testing', () => {
            let treeObj: any;
            beforeEach((done: Function): void => {
                treeObj = undefined;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                treeObj = new TreeView({ 
                    fields: { dataSource: localData1, id: "nodeId", text: "nodeText", parentID: 'nodePid', hasChildren: 'hasChild', navigateUrl: 'nodeUrl', iconCss: 'icons', imageUrl: 'nodeImage1', expanded: 'nodeExpanded1' },
                    allowDragAndDrop: true,
                    fullRowSelect: false,
                    dataBound: ()=> {
                        done();
                    }
                },'#tree1');
            });
            afterEach((): void => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
            });
            it('testing with target as text', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-list-text'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-list-text'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1].querySelector('.e-list-text');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1].querySelector('.e-list-text'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[1].childElementCount).toBe(2);
                expect(li[1].children[1].childElementCount).toBe(1);
                expect(li[1].getAttribute('aria-expanded')).toBe('true');
            });
            it('testing with target as expand icon', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[3].querySelector('.e-icons'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[3].querySelector('.e-icons'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[0].querySelector('.e-icons');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[0].querySelector('.e-icons'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
            });
            it('testing with target as custom icon', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[1].querySelector('.e-list-icon'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[1].querySelector('.e-list-icon'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[5].querySelector('.e-list-icon');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[5].querySelector('.e-list-icon'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(1);
                expect(li[0].getAttribute('aria-expanded')).toBe(null);
                expect(li[5].childElementCount).toBe(2);
                expect(li[5].children[1].childElementCount).toBe(5);
            });
            it('testing with target as custom image', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-list-img'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-list-img'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[0].querySelector('.e-list-img');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[0].querySelector('.e-list-img'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
                expect(li[2].childElementCount).toBe(1);
            });
            it('testing with target as text wrapper with child', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1].querySelector('.e-text-content');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-in')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1].querySelector('.e-text-content'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[1].childElementCount).toBe(2);
                expect(li[1].children[1].childElementCount).toBe(1);
                expect(li[1].getAttribute('aria-expanded')).toBe('true');
            });
            it('testing with target as text wrapper with out child', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[3].querySelector('.e-text-content');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-in')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[3].querySelector('.e-text-content'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[3].childElementCount).toBe(2);
                expect(li[3].children[1].childElementCount).toBe(6);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[3].getAttribute('aria-expanded')).toBe('true');
                    done();
                }, 450);
            });
            it('testing with target as before li element', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2], 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2], 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[2].querySelector('.e-text-content');
                mousemove = setMouseCordinates(mousemove, 15, 45);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1];
                mousemove = setMouseCordinates(mousemove, 15, 50);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(li[1].childElementCount).toBe(2);
                expect(li[1].querySelector('.e-sibling')).not.toBe(null);
                expect(document.querySelector('.e-drop-next')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1], 15, 50);
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
                // need to check
                // expect(li[0].children[1].querySelector('.e-list-text').innerHTML).toBe('Videos');
                expect(li[1].childElementCount).toBe(1);
                expect(li[1].querySelector('.e-sibling')).toBe(null);
                expect(li[1].getAttribute('aria-expanded')).toBe(null);
            });
            it('testing with target as after li element', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2], 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2], 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[2].querySelector('.e-text-content');
                mousemove = setMouseCordinates(mousemove, 15, 45);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1];
                mousemove = setMouseCordinates(mousemove, 15, 80);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(li[1].childElementCount).toBe(2);
                expect(li[1].querySelector('.e-sibling')).not.toBe(null);
                expect(document.querySelector('.e-drop-next')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1], 15, 80);
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
                expect(li[0].children[1].querySelector('.e-list-text').innerHTML).toBe('Gouttes.mp3');
                expect(li[1].childElementCount).toBe(1);
                expect(li[1].querySelector('.e-sibling')).toBe(null);
                expect(li[1].getAttribute('aria-expanded')).toBe(null);
            });
            it('testing with target as treeview element', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = treeObj.element;
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-out')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, treeObj.element);
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(1);
                expect(document.querySelector('.e-drop-out')).toBe(null);
            });
            it('testing with target as document', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = document.getElementsByTagName('body')[0];
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-no-drop')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, document.getElementsByTagName('body')[0]);
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(1);
                expect(document.querySelector('.e-no-drop')).toBe(null);
            });
            it('testing with target as non droppable element', () => {
                let ele: HTMLElement = createElement('div', { id: 'nontree' });
                document.body.appendChild(ele);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = document.getElementById('nontree');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-no-drop')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, document.getElementById('nontree'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(1);
                expect(document.querySelector('.e-no-drop')).toBe(null);
            });
            it('testing with target as full row with child', () => {
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-fullrow'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-fullrow'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1].querySelector('.e-fullrow');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-in')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1].querySelector('.e-fullrow'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[1].childElementCount).toBe(3);
                expect(li[1].children[2].childElementCount).toBe(1);
                expect(li[1].getAttribute('aria-expanded')).toBe('true');
            });
            it('testing with target as full row with out child', (done: Function) => {
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-fullrow'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-fullrow'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[3].querySelector('.e-fullrow');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-in')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[3].querySelector('.e-fullrow'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[3].childElementCount).toBe(3);
                expect(li[3].children[2].childElementCount).toBe(6);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[3].getAttribute('aria-expanded')).toBe('true');
                    done();
                }, 450);
            });
            it('with multi selection', (done: Function) => {
                treeObj.allowMultiSelection = true;
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                li[0].querySelector('.e-list-text').dispatchEvent(e);
                li[1].querySelector('.e-list-text').dispatchEvent(e);
                // dragging non active element
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-list-text'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-list-text'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1].querySelector('.e-list-text');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1].querySelector('.e-list-text'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[1].childElementCount).toBe(2);
                expect(li[1].children[1].childElementCount).toBe(1);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[1].getAttribute('aria-expanded')).toBe('true');
                    li[2].querySelector('.e-list-text').dispatchEvent(e);
                    treeObj.enableRtl = true;
                    treeObj.dataBind();
                    // dragging active element
                    let mousedown1: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[0].querySelector('.e-list-text'), 15, 10);
                    EventHandler.trigger(treeObj.element, 'mousedown', mousedown1);
                    let mousemove1: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[0].querySelector('.e-list-text'), 15, 70);
                    EventHandler.trigger(<any>(document), 'mousemove', mousemove1);
                    mousemove.srcElement = mousemove.target = mousemove.toElement = li[3].querySelector('.e-list-text');
                    mousemove = setMouseCordinates(mousemove, 15, 75);
                    EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                    let mouseup1: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[3].querySelector('.e-list-text'));
                    mouseup.type = 'mouseup';
                    EventHandler.trigger(<any>(document), 'mouseup', mouseup1);
                    expect(li[3].childElementCount).toBe(2);
                    expect(li[3].children[1].childElementCount).toBe(8);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[3].getAttribute('aria-expanded')).toBe('true');
                        done();
                    }, 450);
                }, 450);
            });
            it('code coverage', () => {
                expect(document.body.style.cursor).toBe('');
                treeObj.dropObj.out({target:document.body});
                expect(document.body.style.cursor).toBe('not-allowed');
            });
        });
    });
    describe('Remote data binding testing', () => {
        describe('Default functionality testing', () => {
            describe('with empty arguments', () => {
                let treeObj: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                beforeEach((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: 'OrderID', text: 'CustomerID', iconCss: 'ShipCity', imageUrl: 'ShipCountry', tooltip: 'ShipName', hasChildren: 'Freight' },
                        dataBound:() => {
                            done();
                        },
                        cssClass: 'customTree productTree',
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: [], __count: 0})
                    });
                });
                afterEach(() => {
                    if (ele)
                        ele.remove();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                });
                it('functionality testing', () => {            
                    expect(treeObj.element.querySelectorAll('li').length).toBe(0);
                    expect(document.getElementById('tree1').classList.contains('customTree')).toEqual(true);
                    expect(document.getElementById('tree1').classList.contains('productTree')).toEqual(true);
                });
            });
            describe('with id as number', () => {
                let mouseEventArgs: any = {
                    preventDefault: (): void => {},
                    stopImmediatePropagation: (): void => {},
                    target: null,
                    type: null,
                };
                let treeObj: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                let originalTimeout: any;
                beforeAll((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: 'OrderID', text: 'CustomerID', iconCss: 'ShipCity', tooltip: 'ShipName', selected: 'nodeSelected', hasChildren: 'Freight', query: new Query().from("Categories").select("CategoryID,CategoryName,Description").take(7), navigateUrl: 'nodeUrl',
                            child: { dataSource: dataManager1, id: 'CustomerID', text: 'ShipCountry', parentID: 'OrderID', navigateUrl: 'nodeUrl', },
                        },
                        fullRowSelect: false,                        
                        dataBound:() => {
                            done();
                        }
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData, __count: 15})
                    });
                    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                });
                afterAll(() => {
                    if (ele)
                        ele.remove();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;                
                });
                it('functionality testing', (done: Function) => {            
                    expect(treeObj.element.querySelectorAll('li').length).toBe(15);
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('VINET');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('10248');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('Reims')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('Vins et alcools Chevalier');
                    expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-item').childElementCount).toBe(1);
                    expect(treeObj.element.querySelector('.e-list-item').querySelector('.e-icons')).not.toBe(null);
                    expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://npmci.syncfusion.com/')).not.toBe(-1);
                    let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    mouseEventArgs.target = newli[1].querySelector('.e-icons');
                    expect(newli[1].childElementCount).toBe(1);
                    treeObj.preventContextMenu(mouseEventArgs);
                    treeObj.clickHandler(mouseEventArgs);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: [], __count: 0})
                    });
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(newli[1].childElementCount).toBe(1);
                        expect(newli[1].querySelector('.e-icons')).toBe(null);                
                        mouseEventArgs.target = newli[0].querySelector('.e-icons');
                        expect(newli[0].childElementCount).toBe(1);
                        treeObj.clickHandler(mouseEventArgs);
                        expect(newli[0].querySelector('.e-icons').classList.contains('e-load')).toBe(true);
                        this.request = jasmine.Ajax.requests.mostRecent();
                        this.request.respondWith({
                            status: 200,
                            responseText: JSON.stringify({d: remoteData, __count: 15})
                        });
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect(newli[0].childElementCount).toBe(2);
                            expect(newli[0].querySelector('.e-icons')).not.toBe(null);
                            expect(newli[0].querySelector('.e-icons').classList.contains('e-load')).toBe(false);
                            expect((newli[0].querySelector('.e-list-url') as any).href.indexOf('http://npmci.syncfusion.com/')).not.toBe(-1);
                            done();
                        }, 100);
                    }, 100);
                });
            });
            describe('with id as string', () => {
                let mouseEventArgs: any = {
                    preventDefault: (): void => {},
                    stopImmediatePropagation: (): void => {},
                    target: null,
                    type: null,
                };
                let treeObj: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                let originalTimeout: any;
                beforeEach((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: 'CustomerID', text: 'OrderID', iconCss: 'ShipCity', tooltip: 'ShipName', hasChildren: 'Freight', tableName: 'Employees', htmlAttributes: 'HtmlAttr', imageUrl: 'Image', selected: 'nodeSelected', navigateUrl: 'nodeUrl',
                            child: { dataSource: dataManager1, id: 'CustomerID', text: 'ShipCountry', parentID: 'OrderID', hasChildren: 'ShipCountry' }
                        },
                        dataBound:() => {
                            done();
                        },
                        fullRowSelect: false,                        
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData, __count: 15})
                    });
                    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                });
                afterEach(() => {
                    if (ele)
                        ele.remove();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
                });
                it('functionality testing', (done: Function) => {            
                    expect(treeObj.element.querySelectorAll('li').length).toBe(15);
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('10248');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('VINET');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('Reims')).toBe(true);                
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('Vins et alcools Chevalier');
                    expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[2].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[2].style.backgroundColor).toBe('red');
                    expect(treeObj.element.querySelector('.e-list-item').childElementCount).toBe(1);
                    expect(treeObj.element.querySelector('.e-list-item').querySelector('.e-icons')).not.toBe(null);
                    expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://npmci.syncfusion.com/')).not.toBe(-1);
                    let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    mouseEventArgs.target = newli[1].querySelector('.e-icons');
                    expect(newli[1].childElementCount).toBe(1);
                    treeObj.clickHandler(mouseEventArgs);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: [], __count: 0})
                    });
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(newli[1].childElementCount).toBe(1);
                        expect(newli[1].querySelector('.e-icons')).toBe(null);                
                        mouseEventArgs.target = newli[0].querySelector('.e-icons');
                        expect(newli[0].childElementCount).toBe(1);
                        treeObj.clickHandler(mouseEventArgs);
                        this.request = jasmine.Ajax.requests.mostRecent();
                        this.request.respondWith({
                            status: 200,
                            responseText: JSON.stringify({d: remoteData, __count: 15})
                        });
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            expect(newli[0].childElementCount).toBe(2);
                            expect(newli[0].querySelector('.e-icons')).not.toBe(null);
                            done();
                        }, 100);
                    }, 100);
                });
            });
            describe('sortOrder property testing', () => {
                let treeObj: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                beforeEach((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", 
                            iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr', selected: 'nodeSelected' 
                        },
                        dataBound:() => {
                            done();
                        },
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData2, __count: 2})
                    });
                });
                afterEach(() => {
                    if (ele)
                        ele.remove();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                });
                it('functionality testing', (done: Function) => {
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                        expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                        expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                        done();
                    }, 100);
                });
            });
            describe('allowEditing property testing', () => {
                let mouseEventArgs: any = {
                    preventDefault: (): void => {},
                    stopImmediatePropagation: (): void => {},
                    target: null,
                    type: null,
                };
                let treeObj: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                beforeEach((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", 
                            tooltip: 'nodeTooltip', selected: 'nodeSelected' 
                        },
                        allowEditing: true,
                        fullRowSelect: false,
                        dataBound:() => {
                            done();
                        },
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData2, __count: 2})
                    });
                });
                afterEach(() => {
                    if (ele)
                        ele.remove();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                });
                it('functionality testing', (done: Function) => {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    mouseEventArgs.target = li[0].querySelector('.e-list-text');
                    mouseEventArgs.type = 'dblclick';
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    expect(li[0].childElementCount).toBe(1);
                    expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                    treeObj.expandHandler(mouseEventArgs);
                    treeObj.editingHandler(mouseEventArgs);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                        expect(li[0].childElementCount).toBe(1);
                        expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                        expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                        expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music');
                        (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music node';
                        (li[0].querySelector('.e-tree-input') as HTMLInputElement).blur();
                        expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                        expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                        done();
                    }, 100);
                });
            });
            describe('enableRtl property testing', () => {
                let treeObj: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                beforeEach((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", 
                            tooltip: 'nodeTooltip', selected: 'nodeSelected' 
                        },
                        enableRtl: true,
                        dataBound:() => {
                            done();
                        },
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData2, __count: 2})
                    });
                });
                afterEach(() => {
                    if (ele)
                        ele.remove();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                });
                it('functionality testing', (done: Function) => {
                    expect(treeObj.element.classList.contains('e-rtl')).toBe(true);
                    done();
                }, 100);
            });
            describe('allowDragAndDrop property testing', () => {
                let treeObj: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                beforeEach((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", 
                            tooltip: 'nodeTooltip', selected: 'nodeSelected' 
                        },
                        allowDragAndDrop: true,
                        dataBound:() => {
                            done();
                        },
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData2, __count: 2})
                    });
                });
                afterEach(() => {
                    if (ele)
                        ele.remove();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                });
                it('functionality testing', (done: Function) => {
                    expect(treeObj.dragObj).not.toBe(undefined);
                    expect(treeObj.dropObj).not.toBe(undefined);
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[0].querySelector('.e-list-text'), 15, 10);
                    EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                    let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[0].querySelector('.e-list-text'), 15, 70);
                    EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                    mousemove.srcElement = mousemove.target = mousemove.toElement = li[0].querySelector('.e-list-text');
                    mousemove = setMouseCordinates(mousemove, 15, 75);
                    EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                    let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[0].querySelector('.e-list-text'));
                    mouseup.type = 'mouseup';
                    EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                    done();
                }, 100);
            });
            describe('fullRowSelect property testing', () => {
                let treeObj: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                beforeEach((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", 
                            tooltip: 'nodeTooltip', selected: 'nodeSelected' 
                        },
                        dataBound:() => {
                            done();
                        },
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData2, __count: 2})
                    });
                });
                afterEach(() => {
                    if (ele)
                        ele.remove();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                });
                it('functionality testing', (done: Function) => {
                    expect(treeObj.element.classList.contains('e-fullrow-wrap')).toBe(true);
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].childElementCount).toBe(2);
                    done();
                }, 100);
            });
            describe('allowMultiSelection property testing', () => {
                let treeObj: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                beforeEach((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", 
                            tooltip: 'nodeTooltip', selected: 'nodeSelected'
                        },
                        allowMultiSelection: true,
                        dataBound:() => {
                            done();
                        },
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData1_1, __count: 5})
                    });
                });
                afterEach(() => {
                    if (ele)
                        ele.remove();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                });
                it('functionality testing', (done: Function) => {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                    li[1].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    li[3].querySelector('.e-list-text').dispatchEvent(e);
                    li[1].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(true);
                    expect(li[1].classList.contains('e-active')).toBe(false);
                    expect(li[3].classList.contains('e-active')).toBe(false);
                    var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, shiftKey: true });
                    li[3].querySelector('.e-list-text').dispatchEvent(e);
                    expect(li[0].classList.contains('e-active')).toBe(false);
                    expect(li[1].classList.contains('e-active')).toBe(true);
                    expect(li[2].classList.contains('e-active')).toBe(true);
                    expect(li[3].classList.contains('e-active')).toBe(true);
                    done();
                }, 100);
            });
            describe('template support testing with draw event', () => {
                let treeObj: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                beforeEach((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", 
                            tooltip: 'nodeTooltip', selected: 'nodeSelected' 
                        },
                        drawNode: (args) => {
                            var rowDiv = document.createElement('span');
                            if (!args.node.querySelector('.e-icons')) {
                                rowDiv.className += 'child';
                            } else {
                                rowDiv.className += 'parent';
                            }
                            args.node.children[1].appendChild(rowDiv);
                        },
                        dataBound:() => {
                            done();
                        },
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData2, __count: 2})
                    });
                });
                afterEach(() => {
                    if (ele)
                        ele.remove();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                });
                it('functionality testing', (done: Function) => {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                    expect(li[0].querySelector('.parent')).not.toBe(null);
                    expect(li[0].querySelector('.child')).toBe(null);
                    done();
                }, 4450);
            });
            describe('template support testing with string', () => {
                let treeObj: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                beforeEach((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", 
                            tooltip: 'nodeTooltip', selected: 'nodeSelected' 
                        },
                        nodeTemplate: '${if(hasChild == undefined)}<b>${nodeText}</b>${else}<i>${nodeText}</i>${/if}',
                        dataBound:() => {
                            done();
                        },
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData2, __count: 2})
                    });
                });
                afterEach(() => {
                    if (ele)
                        ele.remove();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                });
                it('functionality testing', (done: Function) => {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                    expect(li[0].querySelector('i')).not.toBe(null);
                    expect(li[0].querySelector('b')).toBe(null);
                    expect(li[1].querySelector('b')).not.toBe(null);
                    expect(li[1].querySelector('i')).toBe(null);
                    done();
                }, 4450);
            });
            describe('template support testing with script', () => {
                let treeObj: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                beforeEach((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    let template: Element = createElement('div', { id: 'template' });
                    template.innerHTML = '${if(hasChild == undefined)}<b>${nodeText}</b>${else}<i>${nodeText}</i>${/if}';
                    document.body.appendChild(template);  
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", 
                            tooltip: 'nodeTooltip', selected: 'nodeSelected' 
                        },
                        nodeTemplate: '#template',
                        dataBound:() => {
                            done();
                        },
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData2, __count: 2})
                    });
                });
                afterEach(() => {
                    if (ele)
                        ele.remove();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                });
                it('functionality testing', (done: Function) => {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                    expect(li[0].querySelector('i')).not.toBe(null);
                    expect(li[0].querySelector('b')).toBe(null);
                    expect(li[1].querySelector('b')).not.toBe(null);
                    expect(li[1].querySelector('i')).toBe(null);
                    done();
                }, 4450);
            });
        });
        describe('property change testing', () => {
            let mouseEventArgs: any = {
                preventDefault: (): void => {},
                stopImmediatePropagation: (): void => {},
                target: null,
                type: null,
            };
            let treeObj: any;
            let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
            let dataManager2: DataManager = new DataManager({ url: '/TreeView/remoteData2' });
            let originalTimeout: any;
            beforeEach((done: Function) => {
                jasmine.Ajax.install();
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                treeObj = new TreeView({ 
                    fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", navigateUrl: 'nodeUrl',
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr', selected: 'nodeSelected' 
                    },
                    dataBound:() => {
                        done();
                    },
                    cssClass: 'customTree productTree',
                    fullRowSelect: false,
                });
                treeObj.appendTo(ele);
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 2})
                });
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            });
            afterEach(() => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
                jasmine.Ajax.uninstall();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
            });
            it('dataSource property', (done: Function) => {
                expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields.dataSource = dataManager2;
                treeObj.dataBind();
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData1, __count: 2})
                });
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelectorAll('li').length).toBe(5);
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                    done();
                },100)
            });
            it('fields text property', (done: Function) => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { text: 'subText' };
                treeObj.dataBind();
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 2})
                });
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Pictures');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                    done();
                }, 100);
            });
            it('fields id property', (done: Function) => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { id: 'subId' };
                treeObj.dataBind();
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 2})
                });
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('21');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                    done();
                }, 100);
            });
            it('fields iconCss property', (done: Function) => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { iconCss: 'subIcon' };
                treeObj.dataBind();
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 2})
                });
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('file')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                    done();
                }, 100);
            });
            it('fields imageUrl property', (done: Function) => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { imageUrl: 'subImage' };
                treeObj.dataBind();
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 2})
                });
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Cricket.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                    done();
                }, 100);
            });
            it('fields tooltip property', (done: Function) => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { tooltip: 'subTooltip' };
                treeObj.dataBind();
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 2})
                });
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Pictures node');
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                    done();
                }, 100);
            });
            it('fields htmlAttributes property', (done: Function) => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { htmlAttributes: 'subHtmlAttr' };
                treeObj.dataBind();
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 2})
                });
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('customnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('blue');
                    done();
                }, 100);
            });
            it('fields selected property', (done: Function) => {
                expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                treeObj.fields = { selected: 'subSelected' };
                treeObj.dataBind();
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 2})
                });
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelectorAll('li').length).toBe(2);
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                    expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(false);
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('e-active')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                    done();
                }, 100);
            });
            it('fields url property', (done: Function) => {
                expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://npmci.syncfusion.com/')).not.toBe(-1);
                treeObj.fields = { navigateUrl: 'subUrl' };
                treeObj.dataBind();
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 2})
                });
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(treeObj.element.querySelector('.e-list-text').innerHTML).toBe('Music');
                    expect(treeObj.element.querySelector('.e-list-item').getAttribute('data-uid')).toBe('01');
                    expect(treeObj.element.querySelector('.e-list-icon').classList.contains('folder')).toBe(true);
                    expect(treeObj.element.querySelector('.e-list-img').src.indexOf('images/Shooting.png')).not.toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-item').title).toBe('This is Music node');
                    expect(treeObj.element.querySelectorAll('li')[1].classList.contains('firstnode')).toBe(true);
                    expect(treeObj.element.querySelectorAll('li')[1].style.backgroundColor).toBe('red');
                    expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://npmci.syncfusion.com/')).toBe(-1);
                    expect(treeObj.element.querySelector('.e-list-url').href.indexOf('http://ej2.syncfusion.com/demos/')).not.toBe(-1);
                    done();
                }, 100);
            });
            it('cssClass property testing', () => {
                treeObj.cssClass = 'customTree productTree';
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('customTree')).toEqual(true);
                expect(document.getElementById('tree1').classList.contains('productTree')).toEqual(true);
                expect(document.getElementById('tree1').classList.contains('dynamicTree')).toEqual(false);
                expect(document.getElementById('tree1').classList.contains('demoTree')).toEqual(false);
                treeObj.cssClass = 'dynamicTree demoTree';
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('customTree')).toEqual(false);
                expect(document.getElementById('tree1').classList.contains('productTree')).toEqual(false);
                expect(document.getElementById('tree1').classList.contains('dynamicTree')).toEqual(true);
                expect(document.getElementById('tree1').classList.contains('demoTree')).toEqual(true);
                treeObj.cssClass = '';
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('dynamicTree')).toEqual(false);
                expect(document.getElementById('tree1').classList.contains('demoTree')).toEqual(false);
            });
            it('selectedNodes property testing', () => {
                expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('e-active')).toBe(false);
                treeObj.selectedNodes = ['02'];
                treeObj.dataBind();
                expect(treeObj.element.querySelector('.e-list-item').classList.contains('e-active')).toBe(false);
                expect(treeObj.element.querySelectorAll('li')[1].classList.contains('e-active')).toBe(true);
            });
            it('sortOrder property testing', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li.length).toBe(2);
                expect(li[0].querySelector('.e-list-text').innerHTML).toBe('Music');
                expect(li[0].getAttribute('data-uid')).toBe('01');
                treeObj.sortOrder = 'Ascending';
                treeObj.dataBind();
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2_1, __count: 2})
                });
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li1: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(li1.length).toBe(2);
                    expect(li1[0].querySelector('.e-list-text').innerHTML).toBe('Downloads');
                    expect(li1[0].getAttribute('data-uid')).toBe('02');
                    treeObj.sortOrder = 'Descending';
                    treeObj.dataBind();
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData2, __count: 2})
                    });
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        let li2: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                        expect(li2.length).toBe(2);
                        expect(li2[0].querySelector('.e-list-text').innerHTML).toBe('Music');
                        expect(li2[0].getAttribute('data-uid')).toBe('01');
                        treeObj.sortOrder = 'Ascending';
                        treeObj.dataBind();
                        this.request = jasmine.Ajax.requests.mostRecent();
                        this.request.respondWith({
                            status: 200,
                            responseText: JSON.stringify({d: remoteData2_1, __count: 2})
                        });
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            let li3: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                            expect(li3.length).toBe(2);
                            expect(li3[0].querySelector('.e-list-text').innerHTML).toBe('Downloads');
                            expect(li3[0].getAttribute('data-uid')).toBe('02');
                            treeObj.sortOrder = 'None';
                            treeObj.dataBind();
                            this.request = jasmine.Ajax.requests.mostRecent();
                            this.request.respondWith({
                                status: 200,
                                responseText: JSON.stringify({d: remoteData2, __count: 2})
                            });
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                let li4: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                                expect(li4.length).toBe(2);
                                expect(li4[0].querySelector('.e-list-text').innerHTML).toBe('Music');
                                expect(li4[0].getAttribute('data-uid')).toBe('01');
                                done();
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            });
            it('allowEditing property testing', (done: Function) => {
                treeObj.allowEditing = true;
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                mouseEventArgs.type = 'dblclick';
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                expect(li[0].childElementCount).toBe(1);
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                treeObj.expandHandler(mouseEventArgs);
                treeObj.editingHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(true);
                    expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(false);
                    expect(li[0].childElementCount).toBe(1);
                    expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                    expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                    expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music');
                    (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music node';
                    (li[0].querySelector('.e-tree-input') as HTMLInputElement).blur();
                    expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                    expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                    treeObj.allowEditing = false;
                    treeObj.dataBind();
                    treeObj.expandHandler(mouseEventArgs);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData2_1, __count: 2})
                    });
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-expandable')).toBe(false);
                        expect(li[0].querySelector('.e-icons').classList.contains('e-icon-collapsible')).toBe(true);
                        expect(li[0].childElementCount).toBe(2);
                        expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                        done();
                    }, 450);
                }, 100);
            });
            it('enableRtl property testing', () => {
                expect(document.getElementById('tree1').classList.contains('e-rtl')).toEqual(false);
                treeObj.enableRtl = true;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-rtl')).toEqual(true);
                treeObj.enableRtl = false;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-rtl')).toEqual(false);
            });
            it('allowDragAndDrop property testing', () => {
                expect(treeObj.dragObj).toBe(undefined);
                expect(treeObj.dropObj).toBe(undefined);
                treeObj.allowDragAndDrop = true;
                treeObj.dataBind();
                expect(treeObj.dragObj.isDestroyed).toBe(false);
                expect(treeObj.dropObj.isDestroyed).toBe(false);
                treeObj.allowDragAndDrop = false;
                treeObj.dataBind();
                expect(treeObj.dragObj.isDestroyed).toBe(true);
                expect(treeObj.dropObj.isDestroyed).toBe(true);
            });
            it('fullRowSelect property testing', () => {
                expect(document.getElementById('tree1').classList.contains('e-fullrow-wrap')).toEqual(false);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(1);
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-fullrow-wrap')).toEqual(true);
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(newli[0].childElementCount).toBe(2);
                treeObj.fullRowSelect = false;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-fullrow-wrap')).toEqual(false);
                let cusli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(cusli[0].childElementCount).toBe(1);
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                expect(document.getElementById('tree1').classList.contains('e-fullrow-wrap')).toEqual(true);
            });
            it('allowMultiSelection property testing', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-active')).toBe(true);
                expect(li[1].classList.contains('e-active')).toBe(false);
                expect(treeObj.selectedNodes.length).toBe(1);
                expect(treeObj.selectedNodes).toContain('01');
                treeObj.allowMultiSelection = true;
                treeObj.dataBind();
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                li[1].querySelector('.e-list-text').dispatchEvent(e);
                expect(li[0].classList.contains('e-active')).toBe(true);
                expect(li[1].classList.contains('e-active')).toBe(true);
                expect(treeObj.selectedNodes.length).toBe(2);
                expect(treeObj.selectedNodes).toContain('01');
                expect(treeObj.selectedNodes).toContain('02');
                treeObj.allowMultiSelection = false;
                treeObj.dataBind();
                expect(li[0].classList.contains('e-active')).toBe(true);
                expect(li[1].classList.contains('e-active')).toBe(false);
                expect(treeObj.selectedNodes.length).toBe(1);
                expect(treeObj.selectedNodes).toContain('01');
                expect(treeObj.selectedNodes).not.toContain('02');
            });
            it('nodeTemplate property testing', (done: Function) => {
                let template: Element = createElement('div', { id: 'template' });
                template.innerHTML = '${if(hasChild == undefined)}<b>${nodeText}</b>${else}<i>${nodeText}</i>${/if}';
                document.body.appendChild(template);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                expect(li[0].querySelector('i')).toBe(null);
                expect(li[0].querySelector('b')).toBe(null);
                treeObj.nodeTemplate = 'template';
                treeObj.dataBind();
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 2})
                });
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let nli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                    expect(nli[0].querySelector('i')).toBe(null);
                    expect(nli[0].querySelector('b')).toBe(null);
                    treeObj.nodeTemplate = null;
                    treeObj.dataBind();
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData2, __count: 2})
                    });
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        let mli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                        expect(mli[0].querySelector('i')).toBe(null);
                        expect(mli[0].querySelector('b')).toBe(null);
                        treeObj.nodeTemplate = '#template';
                        treeObj.dataBind();
                        this.request = jasmine.Ajax.requests.mostRecent();
                        this.request.respondWith({
                            status: 200,
                            responseText: JSON.stringify({d: remoteData2, __count: 2})
                        });
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                        setTimeout(function() {
                            let ali: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                            expect(ali[0].querySelector('i')).not.toBe(null);
                            expect(ali[0].querySelector('b')).toBe(null);
                            treeObj.nodeTemplate = '${if(hasChild == undefined)}<b>${nodeText}</b>${else}<i>${nodeText}</i>${/if}';
                            treeObj.dataBind();
                            this.request = jasmine.Ajax.requests.mostRecent();
                            this.request.respondWith({
                                status: 200,
                                responseText: JSON.stringify({d: remoteData2, __count: 2})
                            });
                            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                            setTimeout(function() {
                                let bli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('.e-text-content');
                                expect(bli[0].querySelector('i')).not.toBe(null);
                                expect(bli[0].querySelector('b')).toBe(null);
                                done();
                            }, 450);
                        }, 450);
                    }, 450);
                }, 450);
            });
        });
        describe('events testing', () => {
            let mouseEventArgs: any = {
                preventDefault: (): void => {},
                stopImmediatePropagation: (): void => {},
                target: null,
                type: null,
            };
            let keyboardEventArgs: any = {
                preventDefault: (): void => {},
                action: null
            };
            let createdFunction: () => void = jasmine.createSpy('created');
            let destroyFunction: () => void = jasmine.createSpy('destroyed');
            let dataBoundFunction: () => void = jasmine.createSpy('dataBound');
            let expandingFunction: () => void = jasmine.createSpy('nodeExpanding');
            let expandedFunction: () => void = jasmine.createSpy('nodeExpanded');
            let collapsingFunction: () => void = jasmine.createSpy('nodeCollapsing');
            let collapsedFunction: () => void = jasmine.createSpy('nodeCollapsed');
            let selectingFunction: () => void = jasmine.createSpy('nodeSelecting');
            let selectedFunction: () => void = jasmine.createSpy('nodeSelected');
            let editingFunction: () => void = jasmine.createSpy('nodeEditing');
            let editedFunction: () => void = jasmine.createSpy('nodeEdited');
            let drawNodeFunction: () => void = jasmine.createSpy('drawNode');
            let keyPressFunction: () => void = jasmine.createSpy('keyPress');
            let nodeClickedFunction: () => void = jasmine.createSpy('nodeClicked');
            let nodeDragStartFunction: () => void = jasmine.createSpy('nodeDragStart');
            let nodeDraggingFunction: () => void = jasmine.createSpy('nodeDragging');
            let nodeDragStopFunction: () => void = jasmine.createSpy('nodeDragStop');
            let nodeDroppedFunction: () => void = jasmine.createSpy('nodeDropped');
            let treeObj: any;
            let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
            let originalTimeout: any;
            beforeAll((done: Function) => {
                jasmine.Ajax.install();
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                treeObj = new TreeView({ 
                    fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", 
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr' 
                    },
                    animation: { expand: { duration: 0 }, collapse: { duration: 0 } },
                    fullRowSelect: false,
                    allowMultiSelection: true,
                    allowDragAndDrop: true,
                    dataBound: dataBoundFunction,
                    created: createdFunction,
                    destroyed: destroyFunction,
                    nodeExpanding: expandingFunction,
                    nodeExpanded: expandedFunction,
                    nodeCollapsing: collapsingFunction,
                    nodeCollapsed: collapsedFunction,
                    nodeSelecting: selectingFunction,
                    nodeSelected: selectedFunction,
                    nodeEditing: editingFunction,
                    nodeEdited: editedFunction,
                    drawNode: drawNodeFunction,
                    keyPress: keyPressFunction,
                    nodeClicked: nodeClickedFunction,
                    nodeDragStart: nodeDragStartFunction,
                    nodeDragging: nodeDraggingFunction,
                    nodeDragStop: nodeDragStopFunction,
                    nodeDropped: nodeDroppedFunction,
                });
                treeObj.appendTo(ele);
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 2})
                });
                setTimeout(() => { done(); }, 100);
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            });
            afterAll(() => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
                jasmine.Ajax.uninstall();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
            });
            it('created event is triggered', () => {                
                expect(createdFunction).toHaveBeenCalled();
            });
            it('drawNode event is triggered', () => {                
                expect(drawNodeFunction).toHaveBeenCalled();
            });
            it('dataBound event is triggered', () => {
                expect(dataBoundFunction).toHaveBeenCalled();
            });
            it('nodeExpanding and nodeExpanded events are triggered', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                expect(expandingFunction).toHaveBeenCalled();
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 15})
                });
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
                setTimeout(function() {
                    expect(expandedFunction).toHaveBeenCalled();
                    done();
                }, 500);
            });
            it('nodeCollapsing and nodeCollapsed events are triggered', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-icons');
                treeObj.clickHandler(mouseEventArgs);
                expect(collapsingFunction).toHaveBeenCalled();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
                setTimeout(function() {
                    expect(collapsedFunction).toHaveBeenCalled();
                    done();
                }, 500);
            });
            it('nodeSelecting event is triggered', () => {
                expect(selectingFunction).not.toHaveBeenCalled();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                treeObj.clickHandler(mouseEventArgs);
                expect(selectingFunction).toHaveBeenCalled();
                expect(li[0].classList.contains('e-active')).toBe(true);
                treeObj.allowMultiSelection = true;
                treeObj.dataBind();
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                li[0].querySelector('.e-list-text').dispatchEvent(e);
                expect(selectingFunction).toHaveBeenCalled();
                expect(li[0].classList.contains('e-active')).toBe(false);
            });
            it('nodeSelected event is triggered', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[1].querySelector('.e-list-text');
                treeObj.clickHandler(mouseEventArgs);
                expect(selectedFunction).toHaveBeenCalled();
                expect(li[1].classList.contains('e-active')).toBe(true);
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, ctrlKey: true });
                li[1].querySelector('.e-list-text').dispatchEvent(e);
                expect(selectedFunction).toHaveBeenCalled();
                expect(li[1].classList.contains('e-active')).toBe(false);
                treeObj.allowMultiSelection = false;
                treeObj.dataBind();
                li[1].querySelector('.e-list-text').dispatchEvent(e);
            });
            it('nodeEditing and nodeEdited events are triggered', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                mouseEventArgs.target = li[0].querySelector('.e-list-text');
                mouseEventArgs.type = 'dblclick';
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                treeObj.editingHandler(mouseEventArgs);
                expect(editingFunction).toHaveBeenCalled();
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(1);
                expect(li[0].querySelector('.e-tree-input').nodeName).toBe('INPUT');
                expect((li[0].querySelector('.e-tree-input') as HTMLInputElement).value).toBe('Music');
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).value = 'Music node';
                (li[0].querySelector('.e-tree-input') as HTMLInputElement).blur();
                expect(li[0].querySelector('.e-list-text').childElementCount).toBe(0);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music node');
                expect(editedFunction).toHaveBeenCalled();
            });
            it('nodeClicked event is triggered', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, });
                li[0].querySelector('.e-list-text').dispatchEvent(e);
                expect(nodeClickedFunction).toHaveBeenCalled();
                expect(li[0].classList.contains('e-active')).toBe(true);
            });
            it('keyPress event is triggered', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                keyboardEventArgs.action = 'tab';
                treeObj.focusIn();
                expect(li[0].classList.contains('e-hover')).toBe(true);
                keyboardEventArgs.action = 'moveDown';
                treeObj.keyActionHandler(keyboardEventArgs);
                expect(keyPressFunction).toHaveBeenCalled();
                expect(li[0].classList.contains('e-hover')).toBe(false);
                expect(li[3].classList.contains('e-hover')).toBe(true);
            });
            it('darg and drop events are triggered', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[3].querySelector('.e-list-text'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);                
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[3].querySelector('.e-list-text'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(nodeDragStartFunction).toHaveBeenCalled();
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[0].querySelector('.e-list-text');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(nodeDraggingFunction).toHaveBeenCalled();
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[0].querySelector('.e-list-text'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(nodeDragStopFunction).toHaveBeenCalled();
                expect(nodeDroppedFunction).toHaveBeenCalled();
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(3);
            });
            it('destroyed event is triggered', () => {
                treeObj.destroy();
                expect(destroyFunction).toHaveBeenCalled();
            });
        });
        describe('methods testing', () => {
            let treeObj: any;
            let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
            let originalTimeout: any;
            beforeEach((done: Function) => {
                jasmine.Ajax.install();
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                treeObj = new TreeView({ 
                    fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", 
                        iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr' 
                    },
                    dataBound: () => { done(); },
                });
                treeObj.appendTo(ele);
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 2})
                });
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            });
            afterEach(() => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
                jasmine.Ajax.uninstall();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
            });
            it('get module name', () => {
                expect(treeObj.getModuleName()).toBe('treeview');
            });
            it('persistence testing', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let sItems: any = JSON.parse(treeObj.getPersistData());
                expect(sItems.selectedNodes.length).toBe(0);
                var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, });
                li[0].querySelector('.e-list-text').dispatchEvent(e);
                let seItems: any = JSON.parse(treeObj.getPersistData());
                expect(seItems.selectedNodes.length).toBe(1);
                expect(seItems.selectedNodes).toContain('01');
            });
            it('replaceText', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.replaceText(li[0], 'Rain');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.allowEditing = true;
                treeObj.dataBind();
                treeObj.replaceText(li[0], 'Rain');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Rain');
                treeObj.replaceText('01', 'Music');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.replaceText('011', 'Music');
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.replaceText('01', null);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.replaceText(null, null);
                expect((li[0].querySelector('.e-list-text') as HTMLElement).childNodes[0].nodeValue).toBe('Music');
                treeObj.allowEditing = false;
                treeObj.dataBind();
            });
            it('expandAll', (done: Function) => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].childElementCount).toBe(2);
                treeObj.expandAll();
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData2, __count: 2})
                });
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect(li[0].childElementCount).toBe(3);
                    expect(li[0].children[2].childElementCount).toBe(2);
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(li[0].getAttribute('aria-expanded')).toBe('true');
                        done();
                    }, 450);
                }, 450);
            });
            it('disableNodes', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(li[0].classList.contains('e-disable')).toBe(false);
                expect(li[0].getAttribute('aria-disabled')).toBe(null);
                treeObj.disableNodes(['01']);
                expect(li[0].classList.contains('e-disable')).toBe(true);
                expect(li[0].getAttribute('aria-disabled')).toBe('true');
            });
            it('enableAll', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                treeObj.disableNodes(['01', li[1]]);
                expect(li[0].classList.contains('e-disable')).toBe(true);
                expect(li[1].classList.contains('e-disable')).toBe(true);
                treeObj.enableAll(['01']);
                expect(li[0].classList.contains('e-disable')).toBe(false);
                expect(li[0].getAttribute('aria-disabled')).toBe(null);
                expect(li[1].classList.contains('e-disable')).toBe(true);
                expect(li[1].getAttribute('aria-disabled')).toBe('true');
                treeObj.enableAll();
                expect(li[1].classList.contains('e-disable')).toBe(false);
                expect(li[1].getAttribute('aria-disabled')).toBe(null);
            });
            it('addNodes', (done: Function) => {
                treeObj.addNodes(null);
                treeObj.addNodes(hierarchicalData4);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    expect(treeObj.liList.length).toBe(4);
                    expect(treeObj.liList.length).toBe(li.length);
                    expect(treeObj.element.querySelectorAll('.e-list-text')[2].innerHTML).toBe('Music');
                    expect(treeObj.element.querySelectorAll('.e-list-item')[2].getAttribute('data-uid')).toBe('11');
                    done();
                }, 450);
            });
            it('destroy', () => {
                treeObj.destroy();
                expect(treeObj.element.className).toBe('');
                expect(treeObj.element.childElementCount).toBe(0);
            });
        });
        describe('Worst case testing', () => {
            describe('Code coverage', () => {
                let mouseEventArgs: any = {
                    preventDefault: (): void => {},
                    stopImmediatePropagation: (): void => {},
                    target: null,
                    type: null,
                };
                let treeObj: any;
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                let originalTimeout: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                beforeAll((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", 
                            iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr', child: { id: "nodeId" }
                        },
                        dataBound: () => { done(); },
                        fullRowSelect: false,
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData2, __count: 2})
                    });
                    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                });
                afterAll(() => {
                    if (treeObj)
                        treeObj.destroy();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
                });
                it('without child data source', (done: Function) => {
                    let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    mouseEventArgs.target = newli[0].querySelector('.e-icons');
                    expect(newli[0].childElementCount).toBe(1);
                    treeObj.clickHandler(mouseEventArgs);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: [], __count: 0})
                    });
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(newli[0].childElementCount).toBe(1);
                        expect(newli[0].querySelector('.e-icons')).toBe(null);
                        done();
                    }, 100)
                });
            });
            describe('Code coverage', () => {
                let mouseEventArgs: any = {
                    preventDefault: (): void => {},
                    stopImmediatePropagation: (): void => {},
                    target: null,
                    type: null,
                };
                let treeObj: any;
                let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
                let originalTimeout: any;
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                beforeAll((done: Function) => {
                    jasmine.Ajax.install();
                    document.body.appendChild(ele);
                    treeObj = new TreeView({ 
                        fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: "hasChild", 
                            iconCss: 'nodeIcon', imageUrl: 'nodeImage', tooltip: 'nodeTooltip', htmlAttributes: 'nodeHtmlAttr',
                        },
                        dataBound: () => { done(); },
                        fullRowSelect: false,
                    });
                    treeObj.appendTo(ele);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: remoteData2, __count: 2})
                    });
                    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                });
                afterAll(() => {
                    if (treeObj)
                        treeObj.destroy();
                    document.body.innerHTML = '';
                    jasmine.Ajax.uninstall();
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
                });
                it('without child', (done: Function) => {
                    let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                    mouseEventArgs.target = newli[0].querySelector('.e-icons');
                    expect(newli[0].childElementCount).toBe(1);
                    treeObj.clickHandler(mouseEventArgs);
                    this.request = jasmine.Ajax.requests.mostRecent();
                    this.request.respondWith({
                        status: 200,
                        responseText: JSON.stringify({d: [], __count: 0})
                    });
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                    setTimeout(function() {
                        expect(newli[0].childElementCount).toBe(1);
                        expect(newli[0].querySelector('.e-icons')).toBe(null);
                        done();
                    }, 100)
                });
            });
        });
        describe('Drag and drop functionality testing', () => {
            let treeObj: any;
            let dataManager1: DataManager = new DataManager({ url: '/TreeView/remoteData' });
            let originalTimeout: any;
            beforeAll((done: Function) => {
                jasmine.Ajax.install();
                let ele: HTMLElement = createElement('div', { id: 'tree1' });
                document.body.appendChild(ele);
                treeObj = new TreeView({ 
                    fields: { dataSource: dataManager1, id: "nodeId", parentID: 'nodePid', text: "nodeText", iconCss: 'icons', imageUrl: 'nodeImage1' },
                    allowDragAndDrop: true,
                    fullRowSelect: false,
                    dataBound: () => { done(); },
                });
                treeObj.appendTo(ele);
                this.request = jasmine.Ajax.requests.mostRecent();
                this.request.respondWith({
                    status: 200,
                    responseText: JSON.stringify({d: remoteData1, __count: 6})
                });
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            });
            afterAll(() => {
                if (treeObj)
                    treeObj.destroy();
                document.body.innerHTML = '';
                jasmine.Ajax.uninstall();
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
            });
            it('testing with target as text', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[1].querySelector('.e-list-text'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[1].querySelector('.e-list-text'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[0].querySelector('.e-list-text');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[0].querySelector('.e-list-text'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(1);
                expect(li[0].getAttribute('aria-expanded')).toBe('true');
            });
            it('testing with target as expand icon', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-list-text'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-list-text'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[0].querySelector('.e-icons');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[0].querySelector('.e-icons'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
            });
            it('testing with target as custom icon', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[1].querySelector('.e-list-icon'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[1].querySelector('.e-list-icon'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[3].querySelector('.e-list-icon');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[3].querySelector('.e-list-icon'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[3].childElementCount).toBe(2);
                expect(li[3].children[1].childElementCount).toBe(1);
            });
            it('testing with target as text wrapper with child', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[3].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[3].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[0].querySelector('.e-text-content');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-in')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[0].querySelector('.e-text-content'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
                expect(li[0].getAttribute('aria-expanded')).toBe('true');
            });
            it('testing with target as text wrapper with out child', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[3].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[3].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[4].querySelector('.e-text-content');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-in')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[4].querySelector('.e-text-content'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[4].childElementCount).toBe(2);
                expect(li[4].children[1].childElementCount).toBe(1);
                expect(li[4].getAttribute('aria-expanded')).toBe('true');
            });
            it('testing with target as before li element', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2], 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2], 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[2].querySelector('.e-text-content');
                mousemove = setMouseCordinates(mousemove, 15, 45);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1];
                mousemove = setMouseCordinates(mousemove, 15, 50);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(li[1].childElementCount).toBe(2);
                expect(li[1].querySelector('.e-sibling')).not.toBe(null);
                expect(document.querySelector('.e-drop-next')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1], 15, 50);
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
                // need to check
                //expect(li[0].children[1].querySelector('.e-list-text').innerHTML).toBe('Documents');
                expect(li[1].childElementCount).toBe(1);
                expect(li[1].querySelector('.e-sibling')).toBe(null);
                expect(li[1].getAttribute('aria-expanded')).toBe(null);
            });
            it('testing with target as treeview element', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = treeObj.element;
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-out')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, treeObj.element);
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
                expect(document.querySelector('.e-drop-out')).toBe(null);
            });
            it('testing with target as document', () => {
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = document.getElementsByTagName('body')[0];
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-no-drop')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, document.getElementsByTagName('body')[0]);
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
                expect(document.querySelector('.e-no-drop')).toBe(null);
            });
            it('testing with target as non droppable element', () => {
                let ele: HTMLElement = createElement('div', { id: 'nontree' });
                document.body.appendChild(ele);
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[2].querySelector('.e-text-content'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[2].querySelector('.e-text-content'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = document.getElementById('nontree');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-no-drop')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, document.getElementById('nontree'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(2);
                expect(li[0].children[1].childElementCount).toBe(2);
                expect(document.querySelector('.e-no-drop')).toBe(null);
            });
            it('testing with target as full row with child', () => {
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[3].querySelector('.e-fullrow'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[3].querySelector('.e-fullrow'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[0].querySelector('.e-fullrow');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-in')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[0].querySelector('.e-fullrow'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[0].childElementCount).toBe(3);
                expect(li[0].children[2].childElementCount).toBe(3);
                expect(li[0].getAttribute('aria-expanded')).toBe('true');
                treeObj.fullRowSelect = false;
                treeObj.dataBind();
            });
            it('testing with target as full row with out child', () => {
                treeObj.fullRowSelect = true;
                treeObj.dataBind();
                let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                let mousedown: any = getEventObject('MouseEvents', 'mousedown', treeObj.element, li[3].querySelector('.e-fullrow'), 15, 10);
                EventHandler.trigger(treeObj.element, 'mousedown', mousedown);
                let mousemove: any = getEventObject('MouseEvents', 'mousemove', treeObj.element, li[3].querySelector('.e-fullrow'), 15, 70);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                mousemove.srcElement = mousemove.target = mousemove.toElement = li[1].querySelector('.e-fullrow');
                mousemove = setMouseCordinates(mousemove, 15, 75);
                EventHandler.trigger(<any>(document), 'mousemove', mousemove);
                expect(document.querySelector('.e-drop-in')).not.toBe(null);
                let mouseup: any = getEventObject('MouseEvents', 'mouseup', treeObj.element, li[1].querySelector('.e-fullrow'));
                mouseup.type = 'mouseup';
                EventHandler.trigger(<any>(document), 'mouseup', mouseup);
                expect(li[1].childElementCount).toBe(3);
                expect(li[1].children[2].childElementCount).toBe(1);
                expect(li[1].getAttribute('aria-expanded')).toBe('true');
                treeObj.fullRowSelect = false;
                treeObj.dataBind();
            });
            it('code coverage', () => {
                expect(document.body.style.cursor).toBe('');
                treeObj.dropObj.out({target:document.body});
                expect(document.body.style.cursor).toBe('not-allowed');
            });
        });
    });    
    describe('Worst case testing', () => {
        let treeObj: any;
        let mouseEventArgs: any = {
            preventDefault: (): void => {},
            stopImmediatePropagation: (): void => {},
            target: null,
            type: null,
        };
        beforeEach((): void => {
            treeObj = undefined;
            let ele: HTMLElement = createElement('div', { id: 'tree1' });
            document.body.appendChild(ele);
        });
        afterEach((): void => {
            if (treeObj)
                treeObj.destroy();
            document.body.innerHTML = '';
        });
        it('with hierarchical data binding', (done: Function) => {
            treeObj = new TreeView({
                fields: { dataSource: hierarchicalData3, id: "nodeId", text: "nodeText", tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', selected: 'nodeSelected' },
                fullRowSelect: false,
            },'#tree1');
            let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
            expect(li[5].querySelector('.e-icons')).toBe(null);
            expect(li[5].childElementCount).toBe(1);
            expect(li[6].querySelector('.e-icons')).toBe(null);
            expect(li[6].childElementCount).toBe(1);
            mouseEventArgs.target = li[7].querySelector('.e-icons');
            expect((li[7].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
            expect(li[7].childElementCount).toBe(1);
            treeObj.clickHandler(mouseEventArgs);
            expect(li[7].querySelector('.e-icons')).toBe(null);
            expect(li[7].childElementCount).toBe(1);
            mouseEventArgs.target = li[4].querySelector('.e-icons');
            expect(li[4].childElementCount).toBe(1);
            treeObj.clickHandler(mouseEventArgs);
            treeObj.clickHandler(mouseEventArgs);
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            setTimeout(function() {
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(newli[4].childElementCount).toBe(2);
                expect(newli[5].classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(newli[5].getAttribute('aria-selected')).toBe('true');
                treeObj.clickHandler(mouseEventArgs);
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                    done();
                }, 450);
            }, 450);
        });
        it('with local data binding', (done: Function) => {
            treeObj = new TreeView({
                fields: { dataSource: localData3, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: 'hasChild', tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', selected: 'nodeSelected' },
                fullRowSelect: false,
            },'#tree1');
            let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
            mouseEventArgs.target = li[5].querySelector('.e-icons');
            expect((li[5].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
            expect(li[5].childElementCount).toBe(1);
            treeObj.clickHandler(mouseEventArgs);
            expect(li[5].querySelector('.e-icons')).toBe(null);
            expect(li[5].childElementCount).toBe(1);
            mouseEventArgs.target = li[6].querySelector('.e-icons');
            expect((li[6].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
            expect(li[6].childElementCount).toBe(1);
            treeObj.clickHandler(mouseEventArgs);
            expect(li[6].querySelector('.e-icons')).toBe(null);
            expect(li[6].childElementCount).toBe(1);
            mouseEventArgs.target = li[7].querySelector('.e-icons');
            expect((li[7].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
            expect(li[7].childElementCount).toBe(1);
            treeObj.clickHandler(mouseEventArgs);
            expect(li[7].querySelector('.e-icons')).toBe(null);
            expect(li[7].childElementCount).toBe(1);
            mouseEventArgs.target = li[4].querySelector('.e-icons');
            expect(li[4].childElementCount).toBe(1);
            treeObj.clickHandler(mouseEventArgs);
            treeObj.clickHandler(mouseEventArgs);
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            setTimeout(function() {
                let newli: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
                expect(newli[4].childElementCount).toBe(2);
                expect(newli[5].classList.contains('e-active')).toBe(true);
                expect(treeObj.element.querySelectorAll('[aria-selected]').length).toBe(1);
                expect(newli[5].getAttribute('aria-selected')).toBe('true');
                treeObj.clickHandler(mouseEventArgs);
                treeObj.clickHandler(mouseEventArgs);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                setTimeout(function() {
                    expect((newli[4].querySelector('.e-icons') as Element).classList.contains('e-icon-expandable')).toBe(true);
                    done();
                }, 450);
            }, 450);
        });
    });
    describe('IOS node editing testing', () => {
        let treeObj: any;
        let mouseEventArgs: any = {
            preventDefault: (): void => {},
            stopImmediatePropagation: (): void => {},
            target: null,
            type: null,
        };
        let tapEvent: any = {
            originalEvent: mouseEventArgs,
        };
        let iosPhoneUa: string = 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3';
        beforeEach(() => {
            Browser.userAgent = iosPhoneUa;
            let ele: HTMLElement = createElement('div', { id: 'tree1' });
            document.body.appendChild(ele);
            treeObj = new TreeView({ 
                fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild", },
                allowEditing: true,
            });
            treeObj.appendTo(ele);
        });
        afterEach(() => {
            let Chromebrowser: string = "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36";
            Browser.userAgent = Chromebrowser;
            if (treeObj)
                treeObj.destroy();
            document.body.innerHTML = '';
        });
        it('IOS testing', () => {
            expect(treeObj.touchEditObj.isDestroyed).toBe(false);
            expect(treeObj.touchClickObj.isDestroyed).toBe(false);
            expect(treeObj.touchExpandObj.isDestroyed).toBe(false);
            let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
            mouseEventArgs.target = li[0].querySelector('.e-list-text');
            treeObj.touchEditObj.doubleTap(tapEvent);
            treeObj.allowEditing = false;
            treeObj.dataBind();
            treeObj.touchClickObj.tap(tapEvent);
            treeObj.touchExpandObj.tap(tapEvent);
            treeObj.expandOn = 'dblclick';
            treeObj.dataBind();
            treeObj.touchExpandObj.doubleTap(tapEvent);
            expect(treeObj.touchEditObj.isDestroyed).toBe(true);
            treeObj.destroy();
            expect(treeObj.touchClickObj.isDestroyed).toBe(true);
            expect(treeObj.touchExpandObj.isDestroyed).toBe(true);
        });
    });
    describe('touch action testing', () => {
        let treeObj: any;
        let androidPhoneUa: string = 'Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JWR66Y) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.92 Safari/537.36';
        beforeEach(() => {
            Browser.userAgent = androidPhoneUa;
            let ele: HTMLElement = createElement('div', { id: 'tree1' });
            document.body.appendChild(ele);
            treeObj = new TreeView({ 
                fields: { dataSource: hierarchicalData1, id: "nodeId", text: "nodeText", child: "nodeChild", },
                allowMultiSelection: true,
            });
            treeObj.appendTo(ele);
        });
        afterEach(() => {
            let Chromebrowser: string = "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36";
            Browser.userAgent = Chromebrowser;
            if (treeObj)
                treeObj.destroy();
            document.body.innerHTML = '';
        });
        it('popup display testing', () => {
            expect(treeObj.element.querySelector('.e-popup')).not.toBe(null);
            treeObj.allowMultiSelection = false;
            treeObj.dataBind();
            expect(treeObj.element.querySelector('.e-popup')).toBe(null);
        });
        it('multi selection testing', () => {
            let popup: any = treeObj.element.querySelector('.e-popup');
            expect(popup.style.display).toBe('none');
            let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
            var e = new MouseEvent("click", { view: window, bubbles: true, cancelable: true, });
            li[0].querySelector('.e-list-text').dispatchEvent(e);
            expect(li[0].classList.contains('e-active')).toBe(true);
            expect(popup.style.display).toBe('');
            popup.querySelector('.e-content').dispatchEvent(e);
            expect(popup.classList.contains('e-select')).toBe(true);
            li[1].querySelector('.e-fullrow').dispatchEvent(e);
            expect(popup.style.display).toBe('');
            expect(li[0].classList.contains('e-active')).toBe(true);
            expect(li[1].classList.contains('e-active')).toBe(true);
            popup.querySelector('.e-content').dispatchEvent(e);
            expect(popup.classList.contains('e-select')).toBe(false);
            expect(popup.style.display).toBe('none');
            li[2].querySelector('.e-fullrow').dispatchEvent(e);
            expect(popup.style.display).toBe('');
            expect(li[0].classList.contains('e-active')).toBe(false);
            expect(li[1].classList.contains('e-active')).toBe(false);
            expect(li[2].classList.contains('e-active')).toBe(true);
        });
        
        it('focus in testing', () => {
            let li: Element[] = <Element[] & NodeListOf<Element>>treeObj.element.querySelectorAll('li');
            treeObj.mouseDownStatus=true;
            treeObj.focusIn();
            expect(li[0].classList.contains('e-hover')).toBe(false);
            expect(li[0].classList.contains('e-node-focus')).toBe(true);
        });
    });
});