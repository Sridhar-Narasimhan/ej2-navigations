import { Component, enableRtl, EventHandler, Property, Event, EmitType, Browser } from '@syncfusion/ej2-base';
import { addClass, removeClass, isVisible, setStyleAttribute, closest, attributes, detach } from '@syncfusion/ej2-base/dom';
import { createElement as buildTag, selectAll, classList } from '@syncfusion/ej2-base/dom';
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


export type ItemAlign = 'left' | 'center' | 'right';

const CLASS_ITEMS: string = 'e-toolbar-items';
const CLASS_ITEM: string = 'e-toolbar-item';
const CLASS_RTL: string = 'e-rtl';
const CLASS_SEPARATOR: string = 'e-separator';
const CLASS_POPUPICON: string = 'e-popup-up-icon';
const CLASS_POPUPDOWN: string = 'e-popup-down-icon';
const CLASS_POPUP: string = 'e-toolbar-popup';
const CLASS_POPUPCLASS: string = 'e-toolbar-pop';
const CLASS_TEMPLATE: string = 'e-template';
const CLASS_DISABLE: string = 'e-overlay';
const CLASS_POPUPTEXT: string = 'e-toolbar-text';
const CLASS_TBARTEXT: string = 'e-popup-text';
const CLASS_TBAROVERFLOW: string = 'e-overflow-show';
const CLASS_POPOVERFLOW: string = 'e-overflow-hide';
const CLASS_TBARBTNTEXT: string = 'e-tbar-btn-text';
const CLASS_TBARBTN: string = 'e-tbar-btn' ;
const CLASS_TBARNAV: string = 'e-hor-nav';
const CLASS_TBARNAVACT : string = 'e-nav-active';
const CLASS_POPUPNAV : string = 'e-hor-nav' ;
const CLASS_TBARRIGHT : string = 'e-toolbar-right' ;
const CLASS_TBARLEFT : string = 'e-toolbar-left' ;
const CLASS_TBARCENTER : string = 'e-toolbar-center';
const CLASS_TBARPOS : string = 'e-tbar-pos' ;
const CLASS_TBARSCROLL : string = 'e-hscroll-content';


interface Template {
    appendTo: Function;
}
interface TbarItemAlignIn {
    left: HTMLElement[];
    center: HTMLElement[];
    right: HTMLElement[];
}
export interface ClickEventArgs {
  item: ItemModel;
  eventName: string;
  originalEvent: Event;
}
/**
 * An item object that is used to configure toolbar commands.
 */
export class Item extends ChildProperty<Item>  {
    /**
     * Specifies the unique id to be used with button or input element of toolbar items.
     * @default ""
     */
    @Property('')
    public id: string;
    /**
     * Specifies the text to be displayed on the toolbar button.
     * @default ""
     */
    @Property('')
    public text: string;
    /**
     * Specifies the width of the toolbar button commands.
     * @default 'auto'
     */
    @Property('auto')
    public width: number | string;
    /**
     * Defines single / multiple classes (separated by space ) are to be used for commands customization.
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
     * Specifies the types of command to be rendered in the toolbar.
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
     * Sets the text that appears as a html tooltip in the toolbar command.
     * @default ""
     */
    @Property('')
    public tooltipText: string;
    /**
     * Specifies the location for aligning items in the toolbar. Each command will be aligned according to the `align` property.
     * Possible values are:    
     * - Left – Places the items to the `left` start of the toolbar.
     * - Center - Places the items to the `center` to the toolbar.
     * - Right - Places the items to the `right` end of the toolbar.
     * @default "left"
     */
    @Property('left')
    public align: ItemAlign;
}
/**
 * Toolbar control is a contains group of commands that are aligned horizontally.
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
    private tbarAlgEle: TbarItemAlignIn;
    private offsetWid: number;
    private keyModule: KeyboardEvents;
    private scrollModule: HScroll;
    private activeEle: HTMLElement;
    private tbResize: boolean;
    private tbarAlign: boolean;
    private tbarEleMrgn: number;
    private sliceFn: Function;

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
     * Specifies the direction of the toolbar commands. For the cultures like Arabic, direction can be switched as right to left.
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
     * The event will be fired once the control rendering is completed.
     * @event
     */
    @Event()
    public created: EmitType<Event>;
    /**
     * The event will be fired when the control gets destroyed.
     * @event
     */
    @Event()
    public destroyed: EmitType<Event>;
    /**
     * The event will be fired before the control rendered on a page.
     * @event
     */
    @Event()
    public beforeCreate: EmitType<Event>;
    /**
     * Removes the control from the DOM and also removes all its related events
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
        this.destroyHScroll();
        this.keyModule.destroy();
        if (this.popupObj) {
            EventHandler.remove(document, 'scroll', this.docEvent);
            EventHandler.remove(document, 'click', this.docEvent);
        }
    }
    private destroyHScroll(): void {
        if (this.scrollModule) {
            if (this.tbarAlign) { this.scrollModule.element.classList.add(CLASS_TBARPOS); }
            this.scrollModule.destroy(); this.scrollModule = null;
        }
    }
    private keyActionHandler(e: KeyboardEventArgs): void {
        e.preventDefault();
        let clst: HTMLElement;
        let trgt: HTMLElement = <HTMLElement>e.target;
        let rootEle: HTMLElement = this.element;
        let popupObj: Popup = this.popupObj;
        if (trgt.classList.contains(CLASS_TBARNAV) && popupObj && isVisible(popupObj.element)) {
            clst = <HTMLElement>popupObj.element.querySelector('.' + CLASS_ITEM);
        } else if (rootEle === trgt || trgt.classList.contains(CLASS_TBARNAV)) {
            clst = <HTMLElement>rootEle.querySelector('.' + CLASS_ITEM);
        } else {
            clst = <HTMLElement>closest(trgt, '.' + CLASS_ITEM);
        }
        if (clst) {
            switch (e.action) {
                case 'moveRight':
                    if (rootEle === trgt || trgt.classList.contains(CLASS_TBARNAV)) {
                        (<HTMLElement>clst.firstChild).focus();
                    } else {
                        this.eleFocus(clst, 'next');
                    }
                    break;
                case 'moveLeft':
                    if (popupObj && trgt.classList.contains(CLASS_TBARNAV)) {
                        if (this.tbarAlign) {
                           clst = <HTMLElement>closest(clst, '.' + CLASS_ITEMS);
                           let innerItems: HTMLElement[] = selectAll('.' + CLASS_ITEM , clst);
                           clst = innerItems[innerItems.length - 1] as HTMLElement;
                        } else {
                        clst = clst.parentElement.lastElementChild as HTMLElement; }
                    }
                    if (trgt.classList.contains(CLASS_TBARNAV) && !clst.classList.contains(CLASS_SEPARATOR)) {
                        (<HTMLElement>clst.firstChild).focus();
                    } else {
                        this.eleFocus(clst, 'previous');
                    }
                    break;
                case 'moveUp':
                    if (popupObj && closest(trgt, '.e-popup')) {
                        if (popupObj.element.firstElementChild === clst) {
                            (<HTMLElement>rootEle.querySelector('.' + CLASS_TBARNAV)).focus();
                        } else {
                            this.eleFocus(clst, 'previous');
                        }
                    }
                    break;
                case 'moveDown':
                    if (popupObj && closest(trgt, '.e-popup')) {
                        this.eleFocus(clst, 'next');
                    } else if (popupObj && isVisible(popupObj.element)) {
                        (<HTMLElement>clst.firstChild).focus();
                    }
                    break;
                case 'tab':
                    let ele: HTMLElement = (<HTMLElement>clst.firstChild);
                    if (rootEle === trgt || trgt.classList.contains(CLASS_TBARNAV)) {
                        if (this.activeEle) {
                            this.activeEle.focus();
                        } else {
                            this.activeEleRemove(ele); ele.focus();
                        }
                    }
                    break;
                case 'popupClose':
                    if (popupObj) {
                        popupObj.hide({ name: 'SlideUp', duration: 100 });
                    }
                    break;
                case 'popupOpen':
                    if (!trgt.classList.contains(CLASS_TBARNAV)) {
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
   private eleFocus(closest: HTMLElement, pos: string): void {
     let sib: HTMLElement = Object(closest)[pos + 'ElementSibling'];
     if (sib) {
         if (sib.classList.contains(CLASS_SEPARATOR)) {
                if ( Object(sib)[pos + 'Sibling']) {
                    sib = <HTMLElement> Object(sib)[pos + 'Sibling'];
                    if (sib.classList.contains(CLASS_SEPARATOR)) {
                        this.eleFocus(sib, pos); }
                    } else if (this.popupObj && pos === 'next') {
                    (this.element.querySelector('.' + CLASS_TBARNAV) as HTMLElement).focus(); }
            }
         if (!isNOU(sib.firstChild)) {
           (<HTMLElement>sib.firstChild).focus();
           }
        } else if (this.tbarAlign) {
           let elem: HTMLElement = Object( closest.parentElement)[pos + 'ElementSibling'] as HTMLElement;
           if (!isNOU(elem) && elem.children.length > 0) {
             if (pos === 'next') {
             (<HTMLElement>elem.querySelector('.' + CLASS_ITEM).firstChild).focus();
            } else {
                (<HTMLElement>elem.lastElementChild.firstChild).focus(); }
           } else if (this.popupObj) {
            (this.element.querySelector('.' + CLASS_TBARNAV) as HTMLElement).focus();
        }
        } else if (this.popupObj && pos === 'next') {
            (this.element.querySelector('.' + CLASS_TBARNAV) as HTMLElement).focus();
        }
   }
    private clickEventHandler(e: Event): void {
        let trgt: HTMLElement = <HTMLElement>e.target;
        let clsList: DOMTokenList = trgt.classList;
        let ele: HTMLElement = this.element;
        let popObj: Popup = this.popupObj;
        let popupNav: HTMLElement = <HTMLElement>closest(trgt, ('.' + CLASS_TBARNAV));
        if (!popupNav) {
            popupNav = trgt;
        }
        if (!ele.children[0].classList.contains('e-hscroll') && (clsList.contains(CLASS_TBARNAV))) {
            clsList = trgt.querySelector('.e-icons').classList;
        }
        if (clsList.contains(CLASS_POPUPICON) || clsList.contains(CLASS_POPUPDOWN)) {
            if (isVisible(popObj.element)) {
                popupNav.classList.remove(CLASS_TBARNAVACT);
                popObj.hide({ name: 'SlideUp', duration: 100 });
            } else {
                if (ele.classList.contains(CLASS_RTL)) {
                    popObj.enableRtl = true;
                    popObj.position = { X: 'left', Y: 'top' };
                }
                if (popObj.offsetX === 0 && !ele.classList.contains(CLASS_RTL)) {
                    popObj.enableRtl = false;
                    popObj.position = { X: 'right', Y: 'top' };
                }
                popObj.dataBind();
                popObj.element.style.top = this.element.offsetHeight + 'px';
                popupNav.classList.add(CLASS_TBARNAVACT);
                popObj.show({ name: 'SlideDown', duration: 100 });
            }
        }
        let itemObj: ItemModel;
        let clst: HTMLElement = <HTMLElement>closest(<Node>e.target , '.' + CLASS_ITEM);
        if (clst) {
          itemObj = this.items[this.sliceFn.call(clst.parentElement.children).indexOf(clst)];
        }
        let eventArgs: ClickEventArgs = { eventName: 'clicked', originalEvent: e, item: itemObj};
        this.trigger('clicked', eventArgs);
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
        let ariaAttr: { [key: string]: string } = {
            'role': 'toolbar', 'aria-disabled': 'false', 'aria-haspopup': 'false', 'aria-orientation': 'horizontal',
        };
        attributes(this.element, ariaAttr);
    }
    private renderControl(): void {
        this.trgtEle = (this.element.children.length > 0) ? <HTMLElement>this.element.querySelector('div') : null;
        this.tbarAlgEle = {left : [] , center: [], right: [] };
        this.sliceFn = [].slice;
        this.renderItems();
        this.renderOverflowMode();
        if (this.tbarAlign) { this.itemPositioning(); }
    }
    private initHScroll(element: HTMLElement, innerItems: NodeList): void {
        if (!this.scrollModule && this.checkOverflow(element, <HTMLElement>innerItems[0])) {
         if (this.tbarAlign) { this.element.querySelector('.' + CLASS_ITEMS + ' .' + CLASS_TBARCENTER).removeAttribute('style'); }
         this.scrollModule = new HScroll({ scrollStep: 50, enableRtl: this.enableRtl }, <HTMLElement>innerItems[0]);
         this.scrollModule.element.classList.remove(CLASS_TBARPOS);
         setStyleAttribute(this.element, {overflow: 'hidden'});
        }
    }
    private itemWidthCal(innerItem: HTMLElement): number {
      let width: number = 0;
      this.sliceFn.call(innerItem.children).forEach ((el: HTMLElement) => {
         width += el.offsetWidth;
      });
      return width;
    }
    private checkOverflow(element: HTMLElement, innerItem: HTMLElement): boolean {
        if (isNOU(element) || isNOU(innerItem)) {
            return false;
        }
        let eleWidth: number = element.offsetWidth;
        let itemWidth: number;
        if (this.tbarAlign) {
          itemWidth = this.itemWidthCal(innerItem);
        } else {
         itemWidth = innerItem.offsetWidth; }
        let popNav: HTMLElement = <HTMLElement>element.querySelector('.' + CLASS_TBARNAV);
        if (itemWidth > eleWidth - (popNav ? popNav.offsetWidth : 0)) {
            return true;
        } else { return false; }
    }
    private renderOverflowMode(): void {
        let ele: HTMLElement = this.element;
        let innerItems: HTMLElement = <HTMLElement>ele.querySelector('.' + CLASS_ITEMS);
        if (ele && ele.children.length > 0) {
            this.offsetWid = ele.offsetWidth;
            switch (this.overflowMode) {
                case 'Scrollable':
                    this.destroyHScroll();
                    this.initHScroll(ele, ele.getElementsByClassName(CLASS_ITEMS));
                    break;
                case 'Popup':
                    this.element.classList.add('e-toolpop');
                    if (this.tbarAlign) { this.removePositioning(); }
                    if (this.checkOverflow(ele, innerItems)) {
                        this.createOverflowIcon(ele, this.sliceFn.call(selectAll('.' + CLASS_ITEMS + ' .' + CLASS_ITEM, ele)));
                        this.element.querySelector('.' + CLASS_TBARNAV).setAttribute('tabIndex', '0');
                    }
                    if (this.tbarAlign) {
                    innerItems.classList.add(CLASS_TBARPOS);
                    this.itemPositioning(); }
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
            mrgn += parseFloat((window.getComputedStyle(inEle[i])).marginLeft);
            if (inEle[i] === this.tbarEle[0]) { this.tbarEleMrgn = mrgn; }
            if ((inEle[i].offsetLeft + inEle[i].offsetWidth + mrgn) > eleWidth) {
                if (inEle[i].classList.contains(CLASS_SEPARATOR)) {
                    if (sepCheck > 0 && itemCount === itemPopCount) {
                        let sepEle : HTMLElement = (inEle[i + itemCount + (sepCheck - 1)] as HTMLElement);
                        if (sepEle.classList.contains(CLASS_SEPARATOR)) {
                          setStyleAttribute(sepEle, {display: 'none' }); }
                    }
                    sepCheck++; itemCount = 0; itemPopCount = 0;
                } else {
                    itemCount++;
                }
                if (inEle[i].classList.contains(CLASS_TBAROVERFLOW) && pre) {
                    eleWidth -= (inEle[i].offsetWidth + (mrgn));
                } else if (!inEle[i].classList.contains(CLASS_SEPARATOR)) {
                    inEle[i].classList.add(CLASS_POPUP);
                    setStyleAttribute(inEle[i] , {display: 'none'});
                    itemPopCount++;
                } else {
                    eleWidth -= (inEle[i].offsetWidth + (mrgn));
                }
            }
        }
        if (pre) {
            let popedEle: HTMLElement[] = selectAll('.' + CLASS_ITEM + ':not(.' + CLASS_POPUP + ')', this.element);
            this.checkPriority(ele, popedEle, eleWid, false);
        }
    }
    private createOverflowIcon(ele: HTMLElement, innerEle: HTMLElement[]): void {
        let innerNav: HTMLElement = <HTMLElement>ele.querySelector('.' + CLASS_TBARNAV);
        if (!innerNav) {
            this.createPopupIcon(ele);
        }
        innerNav = <HTMLElement>ele.querySelector('.' + CLASS_TBARNAV);
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
        let className: string = 'e-' + element.id.concat('_nav ' + CLASS_POPUPNAV);
        let nav: HTMLElement = buildTag('div', { id: id, className: className });
        if (Browser.info.name === 'msie' ) {
          nav.classList.add('e-ie-align'); }
        let navItem: HTMLElement = buildTag('div', { className: CLASS_POPUPDOWN + ' e-icons' });
        nav.appendChild(navItem);
        nav.setAttribute('tabindex', '0');
        element.insertBefore(nav, element.firstChild);
    }
    private createPopup(): void {
        let element: HTMLElement = this.element;
        let eleHeight: number;
        let eleItem: Element;
        eleItem = element.querySelector('.' + CLASS_ITEM + ':not(.' + CLASS_SEPARATOR + ' ):not(.' + CLASS_POPUP + ' )');
        eleHeight = element.style.height === 'auto' ? null : (eleItem as HTMLElement).offsetHeight;
        let ele: HTMLElement;
        let nodes: HTMLElement[];
        let popupPri: Element[] = [];
        if (element.querySelector('#' + element.id + '_popup.' + CLASS_POPUPCLASS)) {
            ele = <HTMLElement>element.querySelector('#' + element.id + '_popup.' + CLASS_POPUPCLASS);
        } else {
            ele = buildTag('div', { id: element.id + '_popup', className: CLASS_POPUPCLASS });
        }
        let poppedEle: HTMLElement[] = this.sliceFn.call(selectAll('.' + CLASS_POPUP, element.querySelector('.' + CLASS_ITEMS)));
        nodes = selectAll('.' + CLASS_TBAROVERFLOW, ele);
        let nodeIndex: number = 0;
        let nodePri: number = 0;
        poppedEle.forEach((el: HTMLElement, index: number) => {
            nodes = selectAll('.' + CLASS_TBAROVERFLOW, ele);
            if (el.classList.contains(CLASS_TBAROVERFLOW) && nodes.length > 0) {
                if (this.tbResize && nodes.length > index) {
                    ele.insertBefore(el, nodes[index]); ++nodePri;
                } else { ele.insertBefore(el, ele.children[nodes.length]); ++nodePri; }
            } else if (el.classList.contains(CLASS_TBAROVERFLOW)) {
                ele.insertBefore(el, ele.firstChild); ++nodePri;
            } else if ( this.tbResize && el.classList.contains(CLASS_POPOVERFLOW) && ele.children.length > 0 && nodes.length === 0 ) {
                ele.insertBefore(el, ele.firstChild); ++nodePri;
            } else if (el.classList.contains(CLASS_POPOVERFLOW)) {
                popupPri.push(el);
            } else if (this.tbResize) {
                ele.insertBefore(el, ele.childNodes[nodeIndex + nodePri]);
                ++nodeIndex;
            } else {
                ele.appendChild(el);
            }
            setStyleAttribute(el , {display : '', height: eleHeight + 'px' } );
        });
        popupPri.forEach((el: Element) => {
            ele.appendChild(el);
        });
        let tbarEle: HTMLElement[] = selectAll('.' + CLASS_ITEM, element.querySelector('.' + CLASS_ITEMS));
        for (let i: number = tbarEle.length - 1; i >= 0; i--) {
            let tbarElement: HTMLElement = tbarEle[i];
            if (tbarElement.classList.contains(CLASS_SEPARATOR)) {
                setStyleAttribute(tbarElement, {display: 'none'});
            } else {
                break;
            }
        }
        this.initPopup(element, ele);
    }
    private initPopup (element: HTMLElement, ele: HTMLElement): void {
        if (!this.popupObj) {
            element.appendChild(ele);
            setStyleAttribute(this.element, {overflow: ''});
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
            setStyleAttribute(popupEle, {maxHeight: '' , display : 'block'});
            setStyleAttribute(popupEle, {maxHeight: popupEle.offsetHeight + 'px' , display : ''});
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
        let popupNav: HTMLElement = <HTMLElement>toolEle.querySelector('.' + CLASS_TBARNAV);
        setStyleAttribute (popObj.element, {height: 'auto', maxHeight: ''});
        popObj.element.style.height = 'auto';
        popObj.element.style.maxHeight = '';
        popObj.element.style.maxHeight = popObj.element.clientHeight + 'px';
        let popupElePos: number = popupEle.offsetTop + popupEle.offsetHeight + calculatePosition(toolEle).top;
        if (!isNOU(popupNav)) {
            let popIcon: Element = (popupNav.firstElementChild as Element);
            popupNav.classList.add(CLASS_TBARNAVACT);
            classList(popIcon, [CLASS_POPUPICON], [CLASS_POPUPDOWN] );
        }
        if ((window.innerHeight + window.scrollY) < popupElePos) {
            let overflowHeight: number = (popupEle.offsetHeight - ((popupElePos - window.innerHeight - window.scrollY) + 5));
            popObj.height = overflowHeight + 'px';
            setStyleAttribute(popObj.element, {maxHeight: overflowHeight + 'px'});
        }
    }
    private popupClose(e: Event): void {
        let element: HTMLElement = this.element.parentElement;
        let popupNav: HTMLElement = <HTMLElement>element.querySelector('.' + CLASS_TBARNAV);
        if (popupNav) {
            let popIcon: Element = (popupNav.firstElementChild as Element);
            popupNav.classList.remove(CLASS_TBARNAVACT);
            classList(popIcon, [CLASS_POPUPDOWN], [CLASS_POPUPICON] );
        }
    }
    private removePositioning(): void {
      let item: HTMLElement = this.element.querySelector('.' + CLASS_ITEMS) as HTMLElement;
      if (isNOU(item) || !item.classList.contains(CLASS_TBARPOS)) { return; }
      item.classList.remove(CLASS_TBARPOS);
      let innerItem: HTMLElement[] = this.sliceFn.call(item.childNodes);
      innerItem[1].removeAttribute('style');
      innerItem[2].removeAttribute('style');
    }
    private refreshPositioning(): void {
      let item: HTMLElement = this.element.querySelector('.' + CLASS_ITEMS) as HTMLElement;
      item.classList.add(CLASS_TBARPOS);
      this.itemPositioning();
    }
    private itemPositioning(): void {
      let item: HTMLElement = this.element.querySelector('.' + CLASS_ITEMS) as HTMLElement;
      if (isNOU(item) || !item.classList.contains(CLASS_TBARPOS)) { return; }
      let popupNav: HTMLElement = <HTMLElement>this.element.querySelector('.' + CLASS_TBARNAV);
      let innerItem: HTMLElement[];
      if (this.scrollModule) {
          innerItem = this.sliceFn.call(item.querySelector('.' + CLASS_TBARSCROLL).children);
      } else {
      innerItem = this.sliceFn.call(item.childNodes); }
      let margin: number = innerItem[0].offsetWidth + innerItem[2].offsetWidth;
      let tbarWid: number = this.element.offsetWidth;
      if (popupNav) {
          tbarWid -= popupNav.offsetWidth;
          innerItem[2].style.right = popupNav.offsetWidth + 'px';
      }
      if (tbarWid <= margin) { return; }
      let value: number = (((tbarWid - margin)) - innerItem[1].offsetWidth) / 2;
      innerItem[1].style.marginLeft = (innerItem[0].offsetWidth + value) + 'px';
    }
    private tbarItemAlign(item: ItemModel, itemEle: HTMLElement, pos: number ): void {
      if (pos === 0 && item.align !== 'left' )  {
        itemEle.appendChild( buildTag('div', { className: CLASS_TBARLEFT } ));
        itemEle.appendChild( buildTag('div', { className: CLASS_TBARCENTER } ));
        itemEle.appendChild( buildTag('div', { className: CLASS_TBARRIGHT } ));
        this.tbarAlign = true;
        itemEle.classList.add(CLASS_TBARPOS);
      } else if (item.align !== 'left') {
        let alignEle: NodeList = itemEle.childNodes;
        let leftAlign: HTMLElement = buildTag('div', { className: CLASS_TBARLEFT });
        this.sliceFn.call(alignEle).forEach((el: HTMLElement) => {
          this.tbarAlgEle.left.push(el);
          leftAlign.appendChild(el);
        });
        itemEle.appendChild(leftAlign);
        itemEle.appendChild( buildTag('div', { className: CLASS_TBARCENTER } ));
        itemEle.appendChild( buildTag('div', { className: CLASS_TBARRIGHT } ));
        this.tbarAlign = true;
        itemEle.classList.add(CLASS_TBARPOS);
      }

    }
    private renderItems(): void {
        let ele: HTMLElement = this.element;
        let itemEleDom: HTMLElement;
        let innerItem: HTMLElement;
        let innerPos: HTMLElement;
        let items: Item[] = <Item[]>this.items;
        if (ele && ele.children.length > 0) {
            let navEle: HTMLElement[] = selectAll('.' + CLASS_TBARNAV, ele);
            itemEleDom = navEle.length > 0 ? <HTMLElement>ele.children[1] : <HTMLElement>ele.children[0];
        }
        if (this.trgtEle != null) {
            this.trgtEle.classList.add(CLASS_ITEMS);
            this.tbarEle = [];
            let innerEle: HTMLElement[] = this.sliceFn.call(this.trgtEle.children);
            innerEle.forEach((ele: HTMLElement) => {
                if (ele.tagName === 'DIV') {
                    this.tbarEle.push(ele);
                    ele.classList.add(CLASS_ITEM);
                }
            });
        } else if (ele && items.length > 0) {
            if (!itemEleDom) {
                itemEleDom = buildTag('div', { className: CLASS_ITEMS });
            }
            for (let i: number = 0; i < items.length; i++) {
                innerItem = this.renderSubComponent(items[i]);
                this.tbarEle.push(innerItem);
                if (!this.tbarAlign) {
                  this.tbarItemAlign(items[i] , itemEleDom , i); }
                innerPos = <HTMLElement>itemEleDom.querySelector('.e-toolbar-' + items[i].align.toLowerCase());
                if (innerPos) {
                  this.tbarAlgEle[items[i].align].push(innerItem);
                  innerPos.appendChild(innerItem);
                } else {
                    itemEleDom.appendChild(innerItem);
                }
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
    private popupEleRefresh(width: number, popupEle: HTMLElement, destroy: boolean): void {
        let eleSplice: HTMLElement[] = this.tbarEle;
        let priEleCnt: number;
        let index: number;
        let innerEle: HTMLElement = <HTMLElement>this.element.querySelector('.' + CLASS_ITEMS);
        for (let el of this.sliceFn.call(popupEle.children)) {
            el.style.position = 'absolute';
            let elWidth: number = el.offsetWidth;
            let btnText: HTMLElement = el.querySelector('.' + CLASS_TBARBTNTEXT);
            if (el.classList.contains('e-tbtn-align') || el.classList.contains(CLASS_TBARTEXT)) {
                let btn: HTMLElement = el.children[0];
                if (!isNOU(btnText) && el.classList.contains(CLASS_TBARTEXT)) {
                    btnText.style.display = 'none';
                } else if (!isNOU(btnText) && el.classList.contains(CLASS_POPUPTEXT)) {
                    btnText.style.display = 'block';
                }
                btn.style.minWidth = '0%';
                elWidth = el.offsetWidth;
                btn.style.minWidth = '';
                if (!isNOU(btnText)) {
                    btnText.style.display = '';
                }
            }
            if (el === this.tbarEle[0]) { elWidth += this.tbarEleMrgn; }
            el.style.position = '';
            if (elWidth < width || destroy) {
                if (!el.classList.contains(CLASS_POPOVERFLOW)) {
                    el.classList.remove(CLASS_POPUP);
                }
                index = this.tbarEle.indexOf(el);
                if (this.tbarAlign) {
                    let pos: ItemAlign = this.items[index].align;
                    index = this.tbarAlgEle[pos].indexOf(el);
                    eleSplice = this.tbarAlgEle[pos];
                    innerEle = <HTMLElement>this.element.querySelector('.' + CLASS_ITEMS + ' .' + 'e-toolbar-' + pos);
                }
                let sepBeforePri: number = 0;
                eleSplice.slice(0, index).forEach((el: HTMLElement) => {
                    if (el.classList.contains(CLASS_TBAROVERFLOW) || el.classList.contains(CLASS_SEPARATOR)) {
                        if (el.classList.contains(CLASS_SEPARATOR)) {
                            el.style.display = '';
                            width -= el.offsetWidth;
                        }
                        sepBeforePri++;
                    }
                });
                if (el.classList.contains(CLASS_TBAROVERFLOW)) {
                    let popEle: HTMLElement = this.popupObj.element;
                    let query: string = '.' + CLASS_ITEM + ':not(.' + CLASS_SEPARATOR + '):not(.' + CLASS_TBAROVERFLOW + ')';
                    priEleCnt = selectAll('.' + CLASS_POPUP + ':not(.' + CLASS_TBAROVERFLOW + ')', popEle).length;
                    if (selectAll(query, innerEle).length === 0) {
                        let eleSep: HTMLElement = innerEle.children[index - (index - sepBeforePri) - 1] as HTMLElement;
                        if (!isNOU(eleSep) && eleSep.classList.contains(CLASS_SEPARATOR) && !isVisible(eleSep)) {
                            let sepDisplay: string = 'none';
                            eleSep.style.display = 'inherit';
                            let eleSepWidth: number = eleSep.offsetWidth + (parseFloat(window.getComputedStyle(eleSep).marginRight) * 2);
                            let prevSep: HTMLElement = eleSep.previousElementSibling as HTMLElement;
                            if ((elWidth + eleSepWidth) < width || destroy) {
                                innerEle.insertBefore(el, innerEle.children[index - (index - sepBeforePri)]);
                                if (!isNOU(prevSep)) {
                                    prevSep.style.display = '';
                                }
                            } else {
                                if (prevSep.classList.contains(CLASS_SEPARATOR)) {
                                    prevSep.style.display = sepDisplay;
                                }
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
                    priEleCnt = selectAll('.' + CLASS_TBAROVERFLOW, this.popupObj.element).length;
                    innerEle.insertBefore(el, innerEle.children[index - priEleCnt]);
                    width -= el.offsetWidth;
                }
                el.style.height = '';
            } else {
                break;
            }
        }
    }
    private popupRefresh(popupEle: HTMLElement, destroy: boolean): void {
        let ele: HTMLElement = this.element;
        let popNav: HTMLElement = <HTMLElement>ele.querySelector('.' + CLASS_TBARNAV);
        let innerEle: HTMLElement = <HTMLElement>ele.querySelector('.' + CLASS_ITEMS);
        if (isNOU(popNav)) {
            return; }
        innerEle.removeAttribute('style');
        popupEle.style.display = 'block';
        let width: number = ele.offsetWidth - (popNav.offsetWidth + innerEle.offsetWidth);
        this.popupEleRefresh(width, popupEle, destroy);
        popupEle.style.display = '';
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
     * @param  {HTMLElement|NodeList} items - DOM element or an array of item which is to be enabled or disabled.
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
            isEnable ? removeClass(elements, CLASS_DISABLE) : addClass(elements, CLASS_DISABLE);
        } else {
            let ele: HTMLElement;
            ele = (len && len === 1) ? <HTMLElement>elements[0] : <HTMLElement>items;
            isEnable ? ele.classList.remove(CLASS_DISABLE) : ele.classList.add(CLASS_DISABLE);
        }
    }
    /**
     * Adds new items to the Toolbar which accepts an array as toolbar items.
     * @param  {ItemsModel[]} items - DOM element or an Array of item which to be added to the toolbar.
     * @param  {number} index - Number value that determines where the command to be added. By default index is 0.
     * @returns void
     */
    public addItems(items: ItemModel[], index?: number): void {
        let innerItems: HTMLElement[];
        let itemsDiv: HTMLElement = <HTMLElement>this.element.querySelector('.' + CLASS_ITEMS);
        let innerEle: HTMLElement;
        let itemAgn: string = 'left';
        if (isNOU(index)) {
            index = 0;
        }
        items.forEach((e: ItemModel) => {
          if (!isNOU(e.align) && e.align !== 'left' && itemAgn === 'left') {
           itemAgn = e.align;  }
        });
        for (let item of items) {
            innerItems = selectAll('.' + CLASS_ITEM, this.element);
            item.align = <ItemAlign>itemAgn;
            innerEle = this.renderSubComponent(item);
            if (this.tbarEle.length > index && innerItems.length > 0) {
                if (this.tbarAlign) {
                 let algIndex: number = item.align[0] === 'l' ? 0 : item.align[0] === 'c' ? 1 : 2;
                 let ele: Element;
                 if (this.scrollModule) {
                 ele = closest(innerItems[0] , '.' + CLASS_ITEMS + ' .' + CLASS_TBARSCROLL).children[algIndex];
                 } else {
                 ele = closest(innerItems[0] , '.' + CLASS_ITEMS).children[algIndex]; }
                 ele.insertBefore(innerEle, ele.children[index]);
                 this.tbarAlgEle[item.align].splice(index, 0, innerEle);
                 this.refreshPositioning();
                }else {
                innerItems[0].parentNode.insertBefore(innerEle, innerItems[index]); }
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
     * Removes the items from the toolbar. Acceptable arguments are index of item / HTMLElement / Node list.
     * @param  {number|HTMLElement|NodeList} args  - Index or DOM element or an Array of item which is to be removed from the toolbar.
     * @returns void
     */
    public removeItems(args: number | HTMLElement | NodeList | Element): void {
        let elements: NodeList = <NodeList>args;
        let index: number;
        let innerItems: HTMLElement[] = this.sliceFn.call(selectAll('.' + CLASS_ITEM, this.element));
        if (typeof (elements) === 'number') {
            index = parseInt(args.toString(), 10);
            this.removeItemByIndex(index, innerItems);
        } else {
            if (elements && elements.length > 1) {
            for (let ele of this.sliceFn.call(elements)) {
                index = this.tbarEle.indexOf(ele);
                this.removeItemByIndex(index, innerItems);
                innerItems = selectAll('.' + CLASS_ITEM, this.element);
            }
        } else {
           let ele: HTMLElement = (elements && elements.length && elements.length === 1) ? <HTMLElement>elements[0] : <HTMLElement>args;
           index = innerItems.indexOf(ele);
           this.removeItemByIndex(index, innerItems);
        }
        }
        this.resize();
    }
    private removeItemByIndex(index: number, innerItems: HTMLElement[]): void {
        if (this.tbarEle[index] && innerItems[index]) {
            let eleIdx: number = this.tbarEle.indexOf(innerItems[index]);
            if (this.tbarAlign) {
              let indexAgn: number = this.tbarAlgEle[this.items[eleIdx].align].indexOf(this.tbarEle[eleIdx]);
              this.tbarAlgEle[this.items[eleIdx].align].splice(indexAgn, 1);
            }
            detach(innerItems[index]);
            this.items.splice(eleIdx, 1);
            this.tbarEle.splice(eleIdx, 1);
        }
    }
    private templateRender(templateProp: Object | string, innerEle: HTMLElement, item: ItemModel): void {
        let itemType: string = item.type;
        if (typeof (templateProp) === 'string') {
            innerEle.innerHTML = templateProp;
            let ele: HTMLElement = <HTMLElement>innerEle.childNodes[0];
            if (!ele.tagName) {
                let templateEle: Node = document.querySelector(templateProp);
                innerEle.innerHTML = '';
                innerEle.appendChild(templateEle);
            }
        } else if (itemType === 'Input' || itemType === '2') {
            let templateProperty: Template = <Template>templateProp;
            let ele: HTMLElement = buildTag('input');
            item.id ? (ele.id = item.id) : (ele.id = getUniqueID('tbr-ipt'));
            innerEle.appendChild(ele);
            templateProperty.appendTo(ele);
        }
        innerEle.classList.add(CLASS_TEMPLATE);
        this.tbarEle.push(innerEle);
    }
    private renderSubComponent(item: ItemModel): HTMLElement {
        let innerEle: HTMLElement;
        let dom: HTMLElement;
        innerEle = buildTag('div', { className: CLASS_ITEM });
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
        } else {
            switch (item.type) {
                case 'Button':
                    let textStr: string = item.text;
                    dom = buildTag('button', { className: CLASS_TBARBTN });
                    item.id ? (dom.id = item.id) : dom.id = getUniqueID('e-tbr-btn');
                    let btnTxt: HTMLElement = buildTag('div', { className: 'e-tbar-btn-text' });
                    if (textStr) {
                        btnTxt.innerHTML = textStr;
                        dom.appendChild(btnTxt);
                    } else {
                        innerEle.classList.add('e-tbtn-align');
                    }
                    let btnObj: Button = new Button({}, dom as HTMLButtonElement);
                    if (item.prefixIcon || item.suffixIcon) {
                       if ((item.prefixIcon && item.suffixIcon) || item.prefixIcon) {
                         btnObj.iconCss = item.prefixIcon + ' e-icons';
                         btnObj.iconPosition = 'left';
                       } else {
                           btnObj.iconCss = item.suffixIcon + ' e-icons';
                           btnObj.iconPosition = 'right';
                       }
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
                    innerEle.classList.add(CLASS_SEPARATOR);
                    break;
            }
        }
        if (item.showTextOn) {
            let sTxt: string = item.showTextOn;
            if (sTxt === 'Toolbar') {
                innerEle.classList.add(CLASS_POPUPTEXT);
                innerEle.classList.add('e-tbtn-align');
            } else if (sTxt === 'Overflow') {
                innerEle.classList.add(CLASS_TBARTEXT);
            }
        }
        if (item.overflow) {
            let overflow: string = item.overflow;
            if (overflow === 'Show') {
                innerEle.classList.add(CLASS_TBAROVERFLOW);
            } else if (overflow === 'Hide') {
                if (!innerEle.classList.contains(CLASS_SEPARATOR)) {
                    innerEle.classList.add(CLASS_POPOVERFLOW);
                }
            }
        }
        return innerEle;
    }
    private itemClick(e: Event): void {
        this.activeEleRemove((<HTMLElement>e.currentTarget).firstChild as HTMLElement);
        this.activeEle.focus();
    }
    private activeEleRemove(curEle: HTMLElement): void {
        if (!isNOU(this.activeEle)) {
          this.activeEle.setAttribute('tabindex', '-1');
        }
        this.activeEle = curEle;
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
        if (this.tbarAlign) { this.itemPositioning(); }
        if (this.popupObj) {
           this.popupObj.hide();
        }
        let checkOverflow: boolean = this.checkOverflow(ele, ele.getElementsByClassName(CLASS_ITEMS)[0] as HTMLElement);
        if (checkOverflow && this.scrollModule && (this.offsetWid === ele.offsetWidth)) { return; }
        if (this.offsetWid > ele.offsetWidth || checkOverflow) {
            this.renderOverflowMode();
        }
        if (this.popupObj) {
            if (this.tbarAlign) { this.removePositioning(); }
            this.popupRefresh(this.popupObj.element, false);
            if (this.tbarAlign) { this.refreshPositioning(); }
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
                    this.destroyHScroll();
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
                        this.scrollModule.element.classList.remove(CLASS_RTL);
                        this.destroyHScroll();
                    }
                    if (this.popupObj) {
                        this.popupRefresh(this.popupObj.element, true);
                    }
                    this.renderOverflowMode();
                    if (this.enableRtl) {
                        this.element.classList.add(CLASS_RTL);
                    }
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        this.element.classList.add(CLASS_RTL);
                        if (!isNOU(this.scrollModule)) {
                            this.scrollModule.element.classList.add(CLASS_RTL);
                        }
                        if (!isNOU(this.popupObj)) {
                            this.popupObj.element.classList.add(CLASS_RTL);
                        }
                    } else {
                        this.element.classList.remove(CLASS_RTL);
                        if (!isNOU(this.scrollModule)) {
                            this.scrollModule.element.classList.remove(CLASS_RTL);
                        }
                        if (!isNOU(this.popupObj)) {
                            this.popupObj.element.classList.remove(CLASS_RTL);
                        }
                    }
                    break;
            }
        }
    }
}
export let toolbarBuilder: ToolbarHelper = <ToolbarHelper>CreateBuilder(Toolbar);