import { Component, enableRtl, EventHandler, Property, Event, EmitType, Browser } from '@syncfusion/ej2-base';
import { addClass, removeClass, isVisible, setStyleAttribute, closest, attributes, detach } from '@syncfusion/ej2-base/dom';
import { createElement as buildTag } from '@syncfusion/ej2-base/dom';
import { isNullOrUndefined as isNOU, getUniqueID, formatUnit } from '@syncfusion/ej2-base/util';
import { INotifyPropertyChanged, NotifyPropertyChanges, CreateBuilder, ChildProperty } from '@syncfusion/ej2-base';
import { KeyboardEvents, KeyboardEventArgs, Collection } from '@syncfusion/ej2-base';
import { calculatePosition } from '@syncfusion/ej2-popups/src/common/position';
import { Popup} from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';
import { HScroll } from '../common/h-scroll';
import { ToolbarModel, ItemModel } from './toolbar-model';
import { ToolbarHelper } from './toolbar-builder';

/**
 * Specifies the options for supporting element types of toolbar command.
 */
export type ItemType = 'Button' | 'Separator' | 'Input';
/**
 * Specifies the options of where the text will be displayed in popup mode of the toolbar.
 */
export type DisplayMode = 'Both' | 'Overflow' | 'Toolbar';
/**
 * Specifies the options of the toolbar item display area when the toolbar content overflows to available space.Applicable to `popup` mode.
 */
export type OverflowOption = 'None' | 'Show' | 'Hide';
/**
 * Specifies the options of toolbar display mode. Display option is considered when toolbar content exceeds the available space.
 */
export type OverflowMode = 'Scrollable' | 'Popup';

const CLASSNAMES: ClassNames = {
    ITEMS: 'e-toolbar-items',
    ITEM: 'e-toolbar-item',
    RTL: 'e-rtl',
    SEPARATOR: 'e-separator',
    POPUPICON: 'e-popup-up-icon',
    POPUPDOWN: 'e-popup-down-icon',
    POPUP: 'e-toolbar-popup',
    POPUPCLASS: 'e-toolbar-pop',
    TEMPLATE: 'e-template',
    DISABLE: 'e-overlay',
    POPUPTEXT: 'e-toolbar-text',
    TBARTEXT: 'e-popup-text',
    TBAROVERFLOW: 'e-overflow-show',
    POPOVERFLOW: 'e-overflow-hide',
    TBARBTNTEXT: 'e-tbar-btn-text',
    TBARBTN: 'e-tbar-btn',
    TBARNAV: 'e-hor-nav',
    TBARNAVACT: 'e-nav-active',
    POPUPNAV: 'e-hor-nav'
};

interface Template {
    appendTo: Function;
}

interface ClassNames {
    TBARBTNTEXT: string;
    ITEMS: string;
    ITEM: string;
    RTL: string;
    TBARTEXT: string;
    POPUPTEXT: string;
    SEPARATOR: string;
    POPUPICON: string;
    POPUP: string;
    TEMPLATE: string;
    DISABLE: string;
    TBAROVERFLOW: string;
    POPOVERFLOW: string;
    TBARBTN: string;
    TBARNAV: string;
    TBARNAVACT: string;
    POPUPCLASS: string;
    POPUPDOWN: string;
    POPUPNAV: string;
}
/**
 * An item object that is used to configure toolbar commands.
 */
export class Item extends ChildProperty<Item>  {
    /**
     * Specifies the id of the toolbar item such as button, input elements.
     * @default ""
     */
    @Property('')
    public id: string;
    /**
     * Specifies the text of the toolbar button.
     * @default ""
     */
    @Property('')
    public text: string;
    /**
     * Specifies the width of the toolbar button.
     * @default 'auto'
     */
    @Property('auto')
    public width: number | string;
    /**
     * Defines single / multiple classes separated by space which can be used for toolbar command customization.
     * @default ""
     */
    @Property('')
    public cssClass: string;

    /**
     * Defines single / multiple classes separated by space which can be used to specify an icon for the button.
     * The icon will be positioned before the text content if text available, else icon alone button will be rendered.
     * @default ""
     */
    @Property('')
    public prefixIcon: string;
    /**
     * Defines single / multiple classes separated by space which can be used to specify an icon for the button.
     * The icon will be positioned after the text content if text available.
     * @default ""
     */
    @Property('')
    public suffixIcon: string;
    /**
     * Specifies the toolbar command display area when an element's content is large to fit in an available space.
     * Applicable to `popup` mode only. Possible values are:
     * - show - Always shows item in *toolbar* with primary priority.
     * - hide - Always shows item in *popup* with secondary priority.
     * - none - No priority considers to display and as per the normal order control moves to popup when content exceeds.
     * @default 'None'
     */
    @Property('None')
    public overflow: OverflowOption;
    /**
     * Specifies the HTML element / element id as a string which can be added as toolbar command.
     * ```
     * E.g - items: [{ template: '<input placeholder="Search"/>' },{ template: '#checkbox1' }]
     * ```
     * @default ""
     */
    @Property('')
    public template: string | Object;
    /**
     * Specifies the type of command to be rendered in the toolbar.
     * Supported types are:
     * - Button - Creates the button control with its given properties like text, prefixIcon, etc.
     * - Separator - Adds a horizontal line that separates the toolbar commands.
     * - Input - Creates an input element and it's applicable to template rendering with Syncfusion controls like drop down list, 
     * auto complete, etc.
     * @default 'Button'
     */
    @Property('Button')
    public type: ItemType;
    /**
     * Specifies where the button text will be displayed in *popup mode* of the toolbar.
     * Possible values are:
     * - Toolbar - Text will be displayed in *toolbar* only.
     * - Overflow - Text will be displayed when content overflowed to *popup* only.
     * - Both - Text will be displayed in *popup* and *toolbar*.
     * @default 'Both'
     */
    @Property('Both')
    public showTextOn: DisplayMode;
    /**
     * Defines a htmlAttributes which can be used for adding custom attributes to toolbar command.
     * Supports HTML attributes such as style, class, etc.
     * @default 'null'
     */
    @Property(null)
    public htmlAttributes: { [key: string]: string; };
    /**
     * Sets the text that appears as a tooltip in the toolbar command.
     * @default ""
     */
    @Property('')
    public tooltipText: string;
}
/**
 * Toolbar control is a container for a group of commands or controls that are typically related in their function.
 * ```html
 * <div id="toolbar"/>
 * <script>
 *   var toolbarObj = new Toolbar();
 *   toolbarObj.appendTo("#toolbar");
 * </script>
 * ```
 */
@NotifyPropertyChanges
export class Toolbar extends Component<HTMLElement> implements INotifyPropertyChanged {
    private trgtEle: HTMLElement;
    private popupObj: Popup;
    private tbarEle: HTMLElement[];
    private offsetWid: number;
    private keyModule: KeyboardEvents;
    private scrollModule: HScroll;
    private activeEle: HTMLElement;
    private tbResize: boolean;
    /**
     * Contains the keyboard configuration of the toolbar.
     */
    private keyConfigs: { [key: string]: string } = {
        moveLeft: 'leftarrow',
        moveRight: 'rightarrow',
        moveUp: 'uparrow',
        moveDown: 'downarrow',
        popupOpen: 'enter',
        popupClose: 'escape',
        tab: 'tab'
    };
    /**
     * An array of item that is used to configure toolbar commands.
     * @default []
     */
    @Collection<ItemModel>([], Item)
    public items: ItemModel[];
    /**
     * Specifies the width of the toolbar in pixels/number/percentage. Number value is considered as pixels.
     * @default 'auto'
     */
    @Property('auto')
    public width: string | number;
    /**
     * Specifies the height of the toolbar in pixels/number/percentage. Number value is considered as pixels.
     * @default 'auto'
     */
    @Property('auto')
    public height: string | number;
    /**
     * Specifies the toolbar display mode when toolbar content exceeds the viewing area.
     * Possible modes are:
     * - Scrollable - All the elements are displayed in a single line with horizontal scrolling enabled.
     * - Popup - Prioritized elements are displayed in toolbar and rest of elements are moved to *popup*.
     * If the popup content overflows the height of the page, the rest of the elements will be hidden.
     * @default 'Scrollable'
     */
    @Property('Scrollable')
    public overflowMode: OverflowMode;
    /**
     * Specifies the direction of the toolbar items. For the cultures like Arabic, direction can be switched as right to left.
     * @default 'false'
     */
    @Property(false)
    public enableRtl: boolean;
    /**
     * The event will be fired while clicking on the toolbar elements.
     * @event
     */
    @Event()
    public clicked: EmitType<Event>;
    /**
     * The event will be fired once the widget rendering is completed.
     * @event
     */
    @Event()
    public created: EmitType<Event>;
    /**
     * The event will be fired when the widget gets destroyed.
     * @event
     */
    @Event()
    public destroyed: EmitType<Event>;
    /**
     * The event will be fired before the widget renders on a page.
     * @event
     */
    @Event()
    public beforeCreate: EmitType<Event>;
    /**
     * Removes the widget safely from the DOM and also detaches all its related event handlers.
     * @returns void
     */
    public destroy(): void {
        let ele: HTMLElement = this.element;
        super.destroy();
        this.unwireEvents();
        if (ele.children.length > 0) {
            ele.removeChild(ele.children[0]);
        }
        ele.removeAttribute('style');
    }
    /**
     * Initialize the event handler
     * @private
     */
    protected preRender(): void {
        this.trigger('beforeCreate');
        if (this.enableRtl) {
            this.element.classList.add('e-rtl');
        }
    }
    /**
     * Initializes a new instance of the Toolbar class.
     * @param options  - Specifies toolbar model properties as options.
     * @param element  - Specifies the element that is rendered as a toolbar.
     */
    constructor(options?: ToolbarModel, element?: string | HTMLElement) {
        super(options, <HTMLElement | string>element);
    }
    private wireEvents(): void {
        EventHandler.add(this.element, 'click', this.clickEventHandler, this);
        window.onresize = this.resize.bind(this);
        this.keyModule = new KeyboardEvents(
            this.element,
            {
                keyAction: this.keyActionHandler.bind(this),
                keyConfigs: this.keyConfigs
            });
        this.element.setAttribute('tabIndex', '0');
    }
    private unwireEvents(): void {
        EventHandler.remove(this.element, 'click', this.clickEventHandler);
        if (this.scrollModule) {
            this.scrollModule.destroy(); this.scrollModule = null;
        }
        this.keyModule.destroy();
        if (this.popupObj) {
            EventHandler.remove(document, 'scroll', this.docEvent);
            EventHandler.remove(document, 'click', this.docEvent);
        }
    }
    private keyActionHandler(e: KeyboardEventArgs): void {
        e.preventDefault();
        let clst: HTMLElement;
        let trgt: HTMLElement = <HTMLElement>e.target;
        let rootEle: HTMLElement = this.element;
        let popupObj: Popup = this.popupObj;
        if (trgt.classList.contains(CLASSNAMES.TBARNAV) && popupObj && isVisible(popupObj.element)) {
            clst = <HTMLElement>popupObj.element.querySelector('.' + CLASSNAMES.ITEM);
        } else if (rootEle === trgt || trgt.classList.contains(CLASSNAMES.TBARNAV)) {
            clst = <HTMLElement>rootEle.querySelector('.' + CLASSNAMES.ITEM);
        } else {
            clst = <HTMLElement>closest(trgt, '.' + CLASSNAMES.ITEM);
        }
        if (clst) {
            switch (e.action) {
                case 'moveRight':
                    if (rootEle === trgt || trgt.classList.contains(CLASSNAMES.TBARNAV)) {
                        (<HTMLElement>clst.firstChild).focus();
                    } else {
                        this.nextEleFocus(clst);
                    }
                    break;
                case 'moveLeft':
                    if (popupObj && trgt.classList.contains(CLASSNAMES.TBARNAV)) {
                        clst = clst.parentElement.lastElementChild as HTMLElement;
                    }
                    if (trgt.classList.contains(CLASSNAMES.TBARNAV) && !clst.classList.contains(CLASSNAMES.SEPARATOR)) {
                        (<HTMLElement>clst.firstChild).focus();
                    } else {
                        this.prevEleFocus(clst);
                    }
                    break;
                case 'moveUp':
                    if (popupObj && closest(trgt, '.e-popup')) {
                        if (popupObj.element.firstElementChild === clst) {
                            (<HTMLElement>rootEle.querySelector('.' + CLASSNAMES.TBARNAV)).focus();
                        } else {
                            this.prevEleFocus(clst);
                        }
                    } else { return; }
                    break;
                case 'moveDown':
                    if (popupObj && closest(trgt, '.e-popup')) {
                        this.nextEleFocus(clst);
                    } else if (popupObj && isVisible(popupObj.element)) {
                        (<HTMLElement>clst.firstChild).focus();
                    } else { return; }
                    break;
                case 'tab':
                    let ele: HTMLElement = (<HTMLElement>clst.firstChild);
                    if (rootEle === trgt || trgt.classList.contains(CLASSNAMES.TBARNAV)) {
                        if (this.activeEle) {
                            this.activeEle.focus();
                        } else {
                            this.activeEleRemove(ele); ele.focus();
                        }
                    }
                    break;
                case 'popupClose':
                    if (popupObj && isVisible(popupObj.element)) {
                        popupObj.hide({ name: 'SlideUp', duration: 100 });
                    }
                    break;
                case 'popupOpen':
                    if (!trgt.classList.contains(CLASSNAMES.TBARNAV)) {
                        return;
                    }
                    if (popupObj && !isVisible(popupObj.element)) {
                        popupObj.element.style.top = rootEle.offsetHeight + 'px';
                        popupObj.show({ name: 'SlideDown', duration: 100 });
                    } else {
                        popupObj.hide({ name: 'SlideUp', duration: 100 });
                    }
                    break;
            }
        }
    }
    private prevEleFocus(closest: HTMLElement): void {
        let prevSib: HTMLElement = <HTMLElement>closest.previousElementSibling;
        if (prevSib) {
            if (prevSib.classList.contains(CLASSNAMES.SEPARATOR)) {
                if (prevSib.previousSibling) {
                    prevSib = <HTMLElement>prevSib.previousSibling;
                    if (prevSib.classList.contains(CLASSNAMES.SEPARATOR)) {
                        this.prevEleFocus(prevSib);
                    }
                } else { return; }
            }
            if (!isNOU(prevSib.firstChild)) {
                (<HTMLElement>prevSib.firstChild).focus();
            }
        } else { return; }
    }
    private nextEleFocus(closest: HTMLElement): void {
        let nextSib: HTMLElement = <HTMLElement>closest.nextElementSibling;
        if (nextSib) {
            if (nextSib.classList.contains(CLASSNAMES.SEPARATOR)) {
                if (nextSib.nextSibling) {
                    nextSib = <HTMLElement>nextSib.nextSibling;
                    if (nextSib.classList.contains(CLASSNAMES.SEPARATOR)) {
                        this.nextEleFocus(nextSib);
                    }
                } else if (this.popupObj) {
                    (this.element.querySelector('.' + CLASSNAMES.TBARNAV) as HTMLElement).focus();
                } else { return; }
            }
            if (!isNOU(nextSib.firstChild)) {
                (<HTMLElement>nextSib.firstChild).focus();
            }
        } else if (this.popupObj) {
            (this.element.querySelector('.' + CLASSNAMES.TBARNAV) as HTMLElement).focus();
        } else { return; }
    }
    private clickEventHandler(e: Event): void {
        let trgt: HTMLElement = <HTMLElement>e.target;
        let clsList: DOMTokenList = trgt.classList;
        let ele: HTMLElement = this.element;
        let popObj: Popup = this.popupObj;
        let popupNav: HTMLElement = <HTMLElement>closest(trgt, ('.' + CLASSNAMES.TBARNAV));
        if (!popupNav) {
            popupNav = trgt;
        }
        if (!ele.children[0].classList.contains('e-hscroll') && (clsList.contains(CLASSNAMES.TBARNAV))) {
            clsList = trgt.querySelector('.e-icons').classList;
        }
        if (clsList.contains(CLASSNAMES.POPUPICON) || clsList.contains(CLASSNAMES.POPUPDOWN)) {
            if (isVisible(popObj.element)) {
                popupNav.classList.remove(CLASSNAMES.TBARNAVACT);
                popObj.hide({ name: 'SlideUp', duration: 100 });
            } else {
                if (ele.classList.contains(CLASSNAMES.RTL)) {
                    popObj.enableRtl = true;
                    popObj.position = { X: 'left', Y: 'top' };
                }
                if (popObj.offsetX === 0 && !ele.classList.contains(CLASSNAMES.RTL)) {
                    popObj.enableRtl = false;
                    popObj.position = { X: 'right', Y: 'top' };
                }
                popObj.dataBind();
                popObj.element.style.top = this.element.offsetHeight + 'px';
                popupNav.classList.add(CLASSNAMES.TBARNAVACT);
                popObj.show({ name: 'SlideDown', duration: 100 });
            }
        }
        this.trigger('clicked', e);
    };
    /**
     * To Initialize the control rendering
     * @private
     */
    protected render(): void {
        this.initialize();
        this.renderControl();
        this.wireEvents();
    }
    private initialize(): void {
        let width: string = formatUnit(this.width);
        let height: string = formatUnit(this.height);
        setStyleAttribute(this.element, { 'width': width, 'height': height });
        let ariaAttr: { [key: string]: Object } = {
            'role': 'toolbar', 'aria-disabled': 'false', 'aria-haspopup': 'false', 'aria-orientation': 'horizontal',
        };
        attributes(this.element, <{ [key: string]: string }>ariaAttr);
    }
    private renderControl(): void {
        this.trgtEle = (this.element.children.length > 0) ? <HTMLElement>this.element.querySelector('div') : null;
        this.renderItems();
        this.renderOverflowMode();
    }
    private initHScroll(element: HTMLElement, innerItems: NodeList): void {
        if (!this.scrollModule && this.checkOverflow(element, <HTMLElement>innerItems[0])) {
            this.scrollModule = new HScroll({ scrollStep: 50, enableRtl: this.enableRtl }, <HTMLElement>innerItems[0]);
            this.element.style.overflow = 'hidden';
        }
    }
    private checkOverflow(element: HTMLElement, innerItem: HTMLElement): boolean {
        if (isNOU(element) || isNOU(innerItem)) {
            return false;
        }
        let eleWidth: number = element.offsetWidth;
        let itemWidth: number = innerItem.offsetWidth;
        let popNav: HTMLElement = <HTMLElement>element.querySelector('.' + CLASSNAMES.TBARNAV);
        if (itemWidth > eleWidth - (popNav ? popNav.offsetWidth : 0)) {
            return true;
        } else { return false; }
    }
    private renderOverflowMode(): void {
        let ele: HTMLElement = this.element;
        if (ele && ele.children.length > 0) {
            this.offsetWid = ele.offsetWidth;
            switch (this.overflowMode.toString()) {
                case 'Scrollable':
                    if (this.scrollModule) {
                        this.scrollModule.destroy();
                        this.scrollModule = null;
                    }
                    this.initHScroll(ele, ele.getElementsByClassName(CLASSNAMES.ITEMS));
                    break;
                case 'Popup':
                    this.element.classList.add('e-toolpop');
                    if (this.checkOverflow(ele, <HTMLElement>ele.querySelector('.' + CLASSNAMES.ITEMS))) {
                        this.createOverflowIcon(ele, [].slice.call(ele.querySelectorAll('.' + CLASSNAMES.ITEMS + ' .' + CLASSNAMES.ITEM)));
                        this.element.querySelector('.' + CLASSNAMES.TBARNAV).setAttribute('tabIndex', '0');
                    } else if (isNOU(this.popupObj)) {
                        this.element.classList.remove('e-toolpop');
                    }
                    break;
            }
        }
    }
    private checkPriority(ele: HTMLElement, inEle: HTMLElement[], eleWidth: number, pre: boolean): void {
        let len: number = inEle.length;
        let eleWid: number = eleWidth;
        let sepCheck: number = 0; let itemCount: number = 0; let itemPopCount: number = 0;
        for (let i: number = len - 1; i >= 0; i--) {
            let mrgn: number = parseFloat((window.getComputedStyle(inEle[i])).marginRight);
            if ((inEle[i].offsetLeft + inEle[i].offsetWidth + mrgn * 2) > eleWidth) {
                if (inEle[i].classList.contains(CLASSNAMES.SEPARATOR)) {
                    if (sepCheck > 0 && itemCount === itemPopCount) {
                        let sepEle : HTMLElement = (inEle[i + itemCount + (sepCheck - 1)] as HTMLElement);
                        if (sepEle.classList.contains(CLASSNAMES.SEPARATOR)) {
                         sepEle.style.display = 'none'; }
                    }
                    sepCheck++; itemCount = 0; itemPopCount = 0;
                } else {
                    itemCount++;
                }
                if (inEle[i].classList.contains(CLASSNAMES.TBAROVERFLOW) && pre) {
                    eleWidth -= (inEle[i].offsetWidth + (mrgn * 2));
                } else if (!inEle[i].classList.contains(CLASSNAMES.SEPARATOR)) {
                    inEle[i].classList.add(CLASSNAMES.POPUP);
                    inEle[i].style.display = 'none';
                    itemPopCount++;
                } else {
                    eleWidth -= (inEle[i].offsetWidth);
                }
            }
            if (inEle[i].classList.contains(CLASSNAMES.POPOVERFLOW)) {
                let elem: HTMLElement = <HTMLElement>ele.querySelector('.' + CLASSNAMES.ITEMS + ' .' + CLASSNAMES.POPUP);
                if (elem && elem.classList.contains(CLASSNAMES.POPOVERFLOW)) {
                    elem.style.display = '';
                    elem.classList.remove(CLASSNAMES.POPUP);
                    inEle[i].classList.add(CLASSNAMES.POPUP);
                    inEle[i].style.display = 'none';
                }
            }
        }
        if (pre) {
            let popedEle: NodeList = this.element.querySelectorAll('.' + CLASSNAMES.ITEM + ':not(.' + CLASSNAMES.POPUP + ')');
            let inEl: HTMLElement[] = [].slice.call(popedEle);
            this.checkPriority(ele, inEl, eleWid, false);
        }
    }
    private createOverflowIcon(ele: HTMLElement, innerEle: HTMLElement[]): void {
        let innerNav: HTMLElement = <HTMLElement>ele.querySelector('.' + CLASSNAMES.TBARNAV);
        if (!innerNav) {
            this.createPopupIcon(ele);
        }
        innerNav = <HTMLElement>ele.querySelector('.' + CLASSNAMES.TBARNAV);
        let eleWidth: number = (ele.offsetWidth - (innerNav.offsetWidth));
        if (this.enableRtl) {
            this.element.classList.remove('e-rtl'); }
        this.checkPriority(ele, innerEle, eleWidth, true);
        if (this.enableRtl) {
            this.element.classList.add('e-rtl'); }
        this.createPopup();
    }
    private createPopupIcon(element: HTMLElement): void {
        let id: string = element.id.concat('_nav');
        let className: string = 'e-' + element.id.concat('_nav ' + CLASSNAMES.POPUPNAV);
        let nav: HTMLElement = buildTag('div', { id: id, className: className });
        if (Browser.info.name === 'msie' ) {
          nav.classList.add('e-ie-align'); }
        let navItem: HTMLElement = buildTag('div', { className: CLASSNAMES.POPUPDOWN + ' e-icons' });
        nav.appendChild(navItem);
        nav.setAttribute('tabindex', '0');
        element.insertBefore(nav, element.firstChild);
    }
    private createPopup(): void {
        let element: HTMLElement = this.element;
        let eleHeight: number;
        let eleItem: Element;
        eleItem = element.querySelector('.' + CLASSNAMES.ITEM + ':not(.' + CLASSNAMES.SEPARATOR + ' ):not(.' + CLASSNAMES.POPUP + ' )');
        eleHeight = element.style.height === 'auto' ? null : (eleItem as HTMLElement).offsetHeight;
        let ele: HTMLElement;
        let nodes: NodeList;
        let popupPri: Element[] = [];
        if (element.querySelector('#' + element.id + '_popup.' + CLASSNAMES.POPUPCLASS)) {
            ele = <HTMLElement>element.querySelector('#' + element.id + '_popup.' + CLASSNAMES.POPUPCLASS);
        } else {
            ele = buildTag('div', { id: element.id + '_popup', className: CLASSNAMES.POPUPCLASS });
        }
        let poppedEle: NodeList = element.querySelector('.' + CLASSNAMES.ITEMS).querySelectorAll('.' + CLASSNAMES.POPUP);
        let popupEle: HTMLElement[] = [].slice.call(poppedEle);
        nodes = ele.querySelectorAll('.' + CLASSNAMES.TBAROVERFLOW);
        let nodeIndex: number = 0;
        let nodePri: number = 0;
        popupEle.forEach((el: HTMLElement, index: number) => {
            nodes = ele.querySelectorAll('.' + CLASSNAMES.TBAROVERFLOW);
            if (el.classList.contains(CLASSNAMES.TBAROVERFLOW) && nodes.length > 0) {
                if (this.tbResize && nodes.length > index) {
                    ele.insertBefore(el, nodes[index]); ++nodePri;
                } else { ele.insertBefore(el, ele.children[nodes.length]); ++nodePri; }
            } else if (el.classList.contains(CLASSNAMES.TBAROVERFLOW)) {
                ele.insertBefore(el, ele.firstChild); ++nodePri;
            } else if (el.classList.contains(CLASSNAMES.POPOVERFLOW)) {
                popupPri.push(el);
            } else if (this.tbResize) {
                ele.insertBefore(el, ele.childNodes[nodeIndex + nodePri]);
                ++nodeIndex;
            } else {
                ele.appendChild(el);
            }
            el.style.display = '';
            el.style.height = eleHeight + 'px';
        });
        popupPri.forEach((el: Element) => {
            ele.appendChild(el);
        });
        let tbarEle: NodeList = element.querySelector('.' + CLASSNAMES.ITEMS).querySelectorAll('.' + CLASSNAMES.ITEM);
        for (let i: number = tbarEle.length - 1; i >= 0; i--) {
            let tbarElement: HTMLElement = tbarEle[i] as HTMLElement;
            if (tbarElement.classList.contains(CLASSNAMES.SEPARATOR)) {
                tbarElement.style.display = 'none';
            } else {
                break;
            }
        }
        if (!this.popupObj) {
            element.appendChild(ele);
            this.element.style.overflow = '';
            let popup: Popup = new Popup(ele, {
                relateTo: element,
                offsetY: (element.offsetHeight),
                enableRtl: this.enableRtl,
                open: this.popupOpen.bind(this),
                close: this.popupClose,
                position: this.enableRtl ? { X: 'left', Y: 'top' } : { X: 'right', Y: 'top' }
            });
            EventHandler.add(document, 'scroll', this.docEvent.bind(this));
            EventHandler.add(document, 'click ', this.docEvent.bind(this));
            popup.element.style.maxHeight = popup.element.offsetHeight + 'px';
            popup.hide();
            this.popupObj = popup;
            this.element.setAttribute('aria-haspopup', 'true');
        } else {
            let popupEle: HTMLElement = this.popupObj.element;
            popupEle.style.maxHeight = '';
            popupEle.style.display = 'block';
            popupEle.style.maxHeight = popupEle.offsetHeight + 'px';
            popupEle.style.display = 'none';
        }
    }
    private docEvent(e: Event): void {
        let popEle: Element = closest(<Element>e.target, '.e-popup');
        if (this.popupObj && isVisible(this.popupObj.element) && !popEle) {
            this.popupObj.hide({ name: 'SlideUp', duration: 100 });
        }
    }
    private popupOpen(e: Event): void {
        let popObj: Popup =  this.popupObj;
        let popupEle: HTMLElement = this.popupObj.element;
        let toolEle: HTMLElement = this.element;
        let popupNav: HTMLElement = <HTMLElement>toolEle.querySelector('.' + CLASSNAMES.TBARNAV);
        popObj.element.style.height = 'auto';
        popObj.element.style.maxHeight = '';
        popObj.element.style.maxHeight = popObj.element.clientHeight + 'px';
        let popupElePos: number = popupEle.offsetTop + popupEle.offsetHeight + calculatePosition(toolEle).top;
        if (!isNOU(popupNav)) {
            let popIcon: DOMTokenList = (popupNav.firstElementChild as HTMLElement).classList;
            popupNav.classList.add(CLASSNAMES.TBARNAVACT); popIcon.remove(CLASSNAMES.POPUPDOWN); popIcon.add(CLASSNAMES.POPUPICON);
        }
        if ((window.innerHeight + window.scrollY) < popupElePos) {
            let overflowHeight: number = (popupEle.offsetHeight - ((popupElePos - window.innerHeight - window.scrollY) + 5));
            popObj.height = overflowHeight + 'px';
            popObj.element.style.maxHeight = overflowHeight + 'px';
        }
    }
    private popupClose(e: Event): void {
        let element: HTMLElement = this.element.parentElement;
        let popupNav: HTMLElement = <HTMLElement>element.querySelector('.' + CLASSNAMES.TBARNAV);
        if (popupNav) {
            let popIcon: DOMTokenList = (popupNav.firstElementChild as HTMLElement).classList;
            popupNav.classList.remove(CLASSNAMES.TBARNAVACT); popIcon.remove(CLASSNAMES.POPUPICON); popIcon.add(CLASSNAMES.POPUPDOWN);
        }
    }
    private renderItems(): void {
        let ele: HTMLElement = this.element;
        let itemEleDom: HTMLElement;
        let innerItem: HTMLElement;
        let popupNav: HTMLElement = <HTMLElement>ele.querySelector('.' + CLASSNAMES.TBARNAV);
        let items: Item[] = <Item[]>this.items;
        if (ele && ele.children.length > 0) {
            let navEle: NodeList = ele.querySelectorAll('.' + CLASSNAMES.TBARNAV);
            itemEleDom = navEle.length > 0 ? <HTMLElement>ele.children[1] : <HTMLElement>ele.children[0];
        }
        if (this.trgtEle != null) {
            this.trgtEle.classList.add(CLASSNAMES.ITEMS);
            let innerEle: HTMLElement[] = [].slice.call(this.trgtEle.children);
            innerEle.forEach((ele: HTMLElement) => {
                if (ele.tagName === 'DIV') {
                    ele.classList.add(CLASSNAMES.ITEM);
                }
            });
        } else if (ele && items.length > 0) {
            if (!itemEleDom) {
                itemEleDom = buildTag('div', { className: CLASSNAMES.ITEMS });
            }
            for (let i: number = 0; i < items.length; i++) {
                innerItem = this.renderSubComponent(items[i]);
                this.tbarEle.push(innerItem);
                itemEleDom.appendChild(innerItem);
            }
            ele.appendChild(itemEleDom);
        }
    }
    private setAttr(attr: { [key: string]: string; }, element: HTMLElement): void {
        let key: string = Object.keys(attr)[0];
        switch (key) {
            case 'class':
                element.classList.add(attr[key]);
                break;
            case 'style':
                let value: Object = JSON.parse(<string>'\{"' + attr[key].replace(':', '\":\"') + '\"}');
                setStyleAttribute(element, <{ [key: string]: Object }>value);
                break;
            default:
                element.setAttribute(key, attr[key]);
                break;
        }
    }
    private popupRefresh(popupEle: HTMLElement, destroy: boolean): void {
        let ele: HTMLElement = this.element;
        let popNav: HTMLElement = <HTMLElement>ele.querySelector('.' + CLASSNAMES.TBARNAV);
        let innerEle: HTMLElement = <HTMLElement>ele.querySelector('.' + CLASSNAMES.ITEMS);
        let eleSplice: HTMLElement[] = this.tbarEle;
        let priEleCnt: number;
        let index: number;
        if (isNOU(popNav)) {
            return;
        }
        innerEle.removeAttribute('style');
        popupEle.style.display = 'block';
        let width: number = ele.offsetWidth - (popNav.offsetWidth + innerEle.offsetWidth);
        for (let el of [].slice.call(popupEle.children)) {
            el.style.position = 'absolute';
            let elWidth: number = el.offsetWidth;
            let btnText: HTMLElement = el.querySelector('.' + CLASSNAMES.TBARBTNTEXT);
            if (el.classList.contains('e-tbtn-align') || el.classList.contains(CLASSNAMES.TBARTEXT)) {
                let btn: HTMLElement = el.children[0];
                if (!isNOU(btnText) && el.classList.contains(CLASSNAMES.TBARTEXT)) {
                    btnText.style.display = 'none';
                } else if (!isNOU(btnText) && el.classList.contains(CLASSNAMES.POPUPTEXT)) {
                    btnText.style.display = 'block';
                }
                btn.style.minWidth = '0%';
                elWidth = el.offsetWidth;
                btn.style.minWidth = '';
                if (!isNOU(btnText)) {
                    btnText.style.display = '';
                }
            }
            el.style.position = '';
            if (elWidth < width || destroy) {
                if (!el.classList.contains(CLASSNAMES.POPOVERFLOW)) {
                    el.classList.remove(CLASSNAMES.POPUP);
                }
                index = this.tbarEle.indexOf(el);
                let sepBeforePri: number = 0;
                eleSplice.slice(0, index).forEach((el: HTMLElement) => {
                    if (el.classList.contains(CLASSNAMES.TBAROVERFLOW) || el.classList.contains(CLASSNAMES.SEPARATOR)) {
                        if (el.classList.contains(CLASSNAMES.SEPARATOR)) {
                            el.style.display = '';
                            width -= el.offsetWidth;
                        }
                        sepBeforePri++;
                    }
                });
                if (el.classList.contains(CLASSNAMES.TBAROVERFLOW)) {
                    let popEle: HTMLElement = this.popupObj.element;
                    let query: string = '.' + CLASSNAMES.ITEM + ':not(.' + CLASSNAMES.SEPARATOR + '):not(.' + CLASSNAMES.TBAROVERFLOW + ')';
                    priEleCnt = popEle.querySelectorAll('.' + CLASSNAMES.POPUP + ':not(.' + CLASSNAMES.TBAROVERFLOW + ')').length;
                    if (innerEle.querySelectorAll(query).length === 0) {
                        let eleSep: HTMLElement = innerEle.children[index - (index - sepBeforePri) - 1] as HTMLElement;
                        if (!isNOU(eleSep) && eleSep.classList.contains(CLASSNAMES.SEPARATOR) && !isVisible(eleSep)) {
                            let sepDisplay: string = 'none';
                            eleSep.style.display = 'inherit';
                            let eleSepWidth: number = eleSep.offsetWidth + (parseFloat(window.getComputedStyle(eleSep).marginRight) * 2);
                            let prevSep: HTMLElement = eleSep.previousElementSibling as HTMLElement;
                            if ((elWidth + eleSepWidth) < width  || destroy) {
                                innerEle.insertBefore(el, innerEle.children[index - (index - sepBeforePri)]);
                                if (!isNOU(prevSep)) {
                                    prevSep.style.display = '';
                                }
                            } else {
                                prevSep.style.display = sepDisplay;
                            }
                            eleSep.style.display = '';
                        } else {
                            innerEle.insertBefore(el, innerEle.children[index - (index - sepBeforePri)]);
                        }
                    } else {
                        innerEle.insertBefore(el, innerEle.children[index - priEleCnt]);
                    }
                    width -= el.offsetWidth;
                } else if (index === 0) {
                    innerEle.insertBefore(el, innerEle.firstChild);
                    width -= el.offsetWidth;
                } else {
                    priEleCnt = this.popupObj.element.querySelectorAll(CLASSNAMES.TBAROVERFLOW).length;
                    innerEle.insertBefore(el, innerEle.children[index - priEleCnt]);
                    width -= el.offsetWidth;
                }
                el.style.height = '';
            } else {
                break;
            }
        }
        popupEle.style.display = 'none';
        if (popupEle.children.length === 0) {
            detach(popNav);
            this.popupObj.destroy();
            detach(this.popupObj.element);
            this.popupObj = null;
            this.element.setAttribute('aria-haspopup', 'false');
            this.element.classList.remove('e-toolpop');
        }
    }
    /**
     * Enables or disables the specified toolbar item.
     * @param  {HTMLElement|NodeList} items - DOM element or an Array of item which to be enabled or disabled.
     * @param  {boolean} isEnable  - Boolean value that determines whether the command should be enabled or disabled.
     * By default `isEnable` is true.
     * @returns void
     */
    public enableItems(items: HTMLElement | NodeList, isEnable?: boolean): void {
        let elements: NodeList = <NodeList>items;
        let len: number = elements.length;
        if (isNOU(isEnable)) {
            isEnable = true;
        }
        if (len && len > 1) {
            isEnable ? removeClass(elements, CLASSNAMES.DISABLE) : addClass(elements, CLASSNAMES.DISABLE);
        } else {
            let ele: HTMLElement;
            ele = (len && len === 1) ? <HTMLElement>elements[0] : <HTMLElement>items;
            isEnable ? ele.classList.remove(CLASSNAMES.DISABLE) : ele.classList.add(CLASSNAMES.DISABLE);
        }
    }
    /**
     * Adds new items to the Toolbar widget. Accepts an array as toolbar items.
     * @param  {ItemsModel[]} items - DOM element or an Array of item which to be added to the toolbar.
     * @param  {number} index - Number value that determines where the command to be added. By default index is 0.
     * @returns void
     */
    public addItems(items: ItemModel[], index?: number): void {
        let innerItems: NodeList;
        let itemsDiv: HTMLElement = <HTMLElement>this.element.querySelector('.' + CLASSNAMES.ITEMS);
        let innerEle: HTMLElement;
        if (isNOU(index)) {
            index = 0;
        }
        for (let item of items) {
            innerItems = this.element.querySelectorAll('.' + CLASSNAMES.ITEM);
            innerEle = this.renderSubComponent(item);
            if (this.tbarEle.length > index && innerItems.length > 0) {
                innerItems[0].parentNode.insertBefore(innerEle, innerItems[index]);
                this.items.splice(index, 0, item);
                this.tbarEle.splice(index, 0, innerEle);
                index++;
                this.offsetWid = itemsDiv.offsetWidth;
            }
        }
        itemsDiv.style.width = '';
        this.renderOverflowMode();
    }
    /**
     * Removes the items from the toolbar. Acceptable arguments are indexed of item / HTMLElement / Node list.
     * @param  {number|HTMLElement|NodeList} args  - Index or DOM element or an Array of item which is to be removed from the toolbar.
     * @returns void
     */
    public removeItems(args: number | HTMLElement | NodeList): void {
        let index: number;
        let innerItems: HTMLElement[] = [].slice.call(this.element.querySelectorAll('.' + CLASSNAMES.ITEM));
        if (typeof (args) === 'number') {
            index = parseInt(args.toString(), 10);
            this.removeItemByIndex(index, innerItems);
        } else {
            for (let ele of [].slice.call(args)) {
                index = this.tbarEle.indexOf(ele);
                this.removeItemByIndex(index, innerItems);
            }
        }
        this.resize();
    }
    private removeItemByIndex(index: number, innerItems: HTMLElement[]): void {
        if (this.tbarEle[index] && innerItems[index]) {
            let eleIdx: number = innerItems.indexOf(this.tbarEle[index]);
            detach(innerItems[eleIdx]);
            this.items.splice(index, 1);
            this.tbarEle.splice(index, 1);
        }
    }
    private templateRender(templateProp: Object | string, innerEle: HTMLElement, item: ItemModel): void {
        let itemType: string = item.type.toString();
        if (typeof (templateProp) === 'string') {
            innerEle.innerHTML = templateProp;
            let ele: HTMLElement = <HTMLElement>innerEle.childNodes[0];
            if (!ele.tagName) {
                let templateEle: Node = document.querySelector(templateProp);
                innerEle.innerHTML = '';
                innerEle.appendChild(templateEle);
            }
            innerEle.classList.add(CLASSNAMES.TEMPLATE);
            this.tbarEle.push(innerEle);
        } else if (itemType === 'Input' || itemType === '2') {
            let templateProperty: Template = <Template>templateProp;
            let ele: HTMLElement = buildTag('input');
            item.id ? (ele.id = item.id) : (ele.id = getUniqueID('tbr-ipt'));
            templateProperty.appendTo(ele);
            innerEle.appendChild(ele);
            innerEle.classList.add(CLASSNAMES.TEMPLATE);
            this.tbarEle.push(innerEle);
        }
    }
    private renderSubComponent(item: ItemModel): HTMLElement {
        let innerEle: HTMLElement;
        let dom: HTMLElement;
        innerEle = buildTag('div', { className: CLASSNAMES.ITEM });
        if (!this.tbarEle) {
            this.tbarEle = [];
        }
        if (item.cssClass) {
            innerEle.className = innerEle.className + ' ' + item.cssClass;
        }
        if (item.htmlAttributes) {
            this.setAttr(item.htmlAttributes, innerEle);
        }
        if (item.tooltipText) {
            innerEle.setAttribute('title', item.tooltipText);
        }
        if (item.template) {
            this.templateRender(item.template, innerEle, item);
        } else {
            switch (item.type.toString()) {
                case 'Button':
                    let textStr: string = item.text;
                    dom = buildTag('button', { className: 'e-tbar-btn' });
                    item.id ? (dom.id = item.id) : dom.id = getUniqueID('e-tbr-btn');
                    let btnTxt: HTMLElement = buildTag('div', { className: 'e-tbar-btn-text' });
                    if (item.text) {
                        btnTxt.innerHTML = item.text;
                        dom.appendChild(btnTxt);
                    } else {
                        innerEle.classList.add('e-tbtn-align');
                    }
                    let btnObj: Button = new Button({}, dom as HTMLButtonElement);
                    if (item.prefixIcon && item.suffixIcon) {
                        btnObj.iconCss = item.prefixIcon + ' e-icons';
                        btnObj.iconPosition = 'left';
                    } else if (item.prefixIcon) {
                        btnObj.iconCss = item.prefixIcon + ' e-icons';
                        btnObj.iconPosition = 'left';
                    } else if (item.suffixIcon) {
                        btnObj.iconCss = item.suffixIcon + ' e-icons';
                        btnObj.iconPosition = 'right';
                    }
                    btnObj.dataBind();

                    if (item.width) {
                        setStyleAttribute(dom, { 'width': formatUnit(item.width) });
                    }
                    dom.setAttribute('tabindex', '-1');
                    innerEle.appendChild(dom);
                    innerEle.addEventListener('click', this.itemClick.bind(this));
                    break;
                case 'Separator':
                    innerEle.classList.add(CLASSNAMES.SEPARATOR);
                    break;
            }
        }
        if (item.showTextOn) {
            let sTxt: string = item.showTextOn.toString();
            if (sTxt === 'Toolbar' || sTxt === '2') {
                innerEle.classList.add(CLASSNAMES.POPUPTEXT);
                innerEle.classList.add('e-tbtn-align');
            } else if (sTxt === 'Overflow' || sTxt === '1') {
                innerEle.classList.add(CLASSNAMES.TBARTEXT);
            }
        }
        if (item.overflow) {
            let overflow: string = item.overflow.toString();
            if (overflow === 'Show' || overflow === '1') {
                innerEle.classList.add(CLASSNAMES.TBAROVERFLOW);
            } else if (overflow === 'Hide' || overflow === '2') {
                if (!innerEle.classList.contains(CLASSNAMES.SEPARATOR)) {
                    innerEle.classList.add(CLASSNAMES.POPOVERFLOW);
                }
            }
        }
        return innerEle;
    }
    private itemClick(e: Event): void {
        let target: HTMLElement = e.currentTarget as HTMLElement;
        let ele: HTMLElement = target.firstChild as HTMLElement;
        this.activeEleRemove(ele);
        this.activeEle.focus();
    }
    private activeEleRemove(curEle: HTMLElement): void {
        if (isNOU(this.activeEle)) {
            this.activeEle = curEle;
        } else {
            this.activeEle.setAttribute('tabindex', '-1');
            this.activeEle = curEle;
        }
        curEle.removeAttribute('tabindex');
    }
    protected getPersistData(): string {
        return this.addOnPersist([]);
    }
    /**
     * Returns the current module name.
     * @returns string
     * @private
     */
    protected getModuleName(): string {
        return 'toolbar';
    }
    private resize(): void {
        let ele: HTMLElement = this.element;
        this.tbResize = true;
        if (this.popupObj && isVisible(this.popupObj.element)) {
           this.popupObj.hide();
        }
        let checkOverflow: boolean = this.checkOverflow(ele, ele.getElementsByClassName(CLASSNAMES.ITEMS)[0] as HTMLElement);
        if (this.offsetWid > ele.offsetWidth || this.scrollModule || checkOverflow) {
            this.renderOverflowMode();
        }
        if (this.popupObj) {
            this.popupRefresh(this.popupObj.element, false);
        }
        this.offsetWid = ele.offsetWidth;
        this.tbResize = false;
    }
    /**
     * Gets called when the model property changes.The data that describes the old and new values of the property that changed.
     * @param  {ToolbarModel} newProp
     * @param  {ToolbarModel} oldProp
     * @returns void
     * @private
     */
    public onPropertyChanged(newProp: ToolbarModel, oldProp: ToolbarModel): void {
        for (let prop of Object.keys(newProp)) {
            switch (prop) {
                case 'items':
                    if (this.scrollModule) {
                        this.scrollModule.destroy();
                        this.scrollModule = null;
                    }
                    this.renderItems();
                    this.renderOverflowMode();
                    break;
                case 'width':
                    let wid: number = this.element.offsetWidth;
                    setStyleAttribute(this.element, { 'width': formatUnit(newProp.width) });
                    this.renderOverflowMode();
                    if (this.popupObj && wid < this.element.offsetWidth) {
                        this.popupRefresh(this.popupObj.element, false);
                    }
                    break;
                case 'height':
                    setStyleAttribute(this.element, { 'height': formatUnit(newProp.height) });
                    break;
                case 'overflowMode':
                    if (this.scrollModule) {
                        this.scrollModule.element.classList.remove(CLASSNAMES.RTL);
                        this.scrollModule.destroy();
                        this.scrollModule = null;
                    }
                    if (this.popupObj) {
                        let popNav: HTMLElement = <HTMLElement>this.element.querySelector('.' + CLASSNAMES.TBARNAV);
                        this.popupRefresh(this.popupObj.element, true);
                    }
                    this.renderOverflowMode();
                    if (this.enableRtl) {
                        this.element.classList.add(CLASSNAMES.RTL);
                    }
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        this.element.classList.add(CLASSNAMES.RTL);
                        if (!isNOU(this.scrollModule)) {
                            this.scrollModule.element.classList.add(CLASSNAMES.RTL);
                        }
                        if (!isNOU(this.popupObj)) {
                            this.popupObj.element.classList.add(CLASSNAMES.RTL);
                        }
                    } else {
                        this.element.classList.remove(CLASSNAMES.RTL);
                        if (!isNOU(this.scrollModule)) {
                            this.scrollModule.element.classList.remove(CLASSNAMES.RTL);
                        }
                        if (!isNOU(this.popupObj)) {
                            this.popupObj.element.classList.remove(CLASSNAMES.RTL);
                        }
                    }
                    break;
            }
        }
    }
}
export let toolbarBuilder: ToolbarHelper = <ToolbarHelper>CreateBuilder(Toolbar);