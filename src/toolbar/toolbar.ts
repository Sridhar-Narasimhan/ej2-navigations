import { Component, EventHandler, Property, Event, EmitType, BaseEventArgs } from '@syncfusion/ej2-base';
import { addClass, removeClass, isVisible, closest, attributes, detach, classList, KeyboardEvents } from '@syncfusion/ej2-base';
import { createElement as buildTag, selectAll, setStyleAttribute as setStyle, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { isNullOrUndefined as isNOU, getUniqueID, formatUnit, Collection, compile as templateCompiler } from '@syncfusion/ej2-base';
import { INotifyPropertyChanged, NotifyPropertyChanges, CreateBuilder, ChildProperty, Browser } from '@syncfusion/ej2-base';
import { Popup } from '@syncfusion/ej2-popups';
import { calculatePosition } from '@syncfusion/ej2-popups';
import { Button, IconPosition } from '@syncfusion/ej2-buttons';
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

type HTEle = HTMLElement;
type Str = string;
type ItmAlign = 'lefts' | 'centers' | 'rights';

export type ItemAlign = 'left' | 'center' | 'right';

const CLS_ITEMS: Str = 'e-toolbar-items';
const CLS_ITEM: Str = 'e-toolbar-item';
const CLS_RTL: Str = 'e-rtl';
const CLS_SEPARATOR: Str = 'e-separator';
const CLS_POPUPICON: Str = 'e-popup-up-icon';
const CLS_POPUPDOWN: Str = 'e-popup-down-icon';
const CLS_TEMPLATE: Str = 'e-template';
const CLS_DISABLE: Str = 'e-overlay';
const CLS_POPUPTEXT: Str = 'e-toolbar-text';
const CLS_TBARTEXT: Str = 'e-popup-text';
const CLS_TBAROVERFLOW: Str = 'e-overflow-show';
const CLS_POPOVERFLOW: Str = 'e-overflow-hide';
const CLS_TBARBTN: Str = 'e-tbar-btn' ;
const CLS_TBARNAV: Str = 'e-hor-nav';
const CLS_TBARSCRLNAV: Str = 'e-scroll-nav';
const CLS_TBARRIGHT : Str = 'e-toolbar-right' ;
const CLS_TBARLEFT : Str = 'e-toolbar-left' ;
const CLS_TBARCENTER : Str = 'e-toolbar-center';
const CLS_TBARPOS : Str = 'e-tbar-pos' ;
const CLS_TBARSCROLL : Str = 'e-hscroll-content';
const CLS_POPUPNAV: Str = 'e-hor-nav';
const CLS_POPUPCLASS: Str = 'e-toolbar-pop';
const CLS_POPUP: Str = 'e-toolbar-popup';
const CLS_TBARBTNTEXT: Str = 'e-tbar-btn-text';
const CLS_TBARNAVACT: Str = 'e-nav-active';
const CLS_TBARIGNORE: Str = 'e-ignore';


interface Template {
    appendTo: Function;
}

interface ToolbarItemAlignIn {
    lefts: HTMLElement[];
    centers: HTMLElement[];
    rights: HTMLElement[];
}
export interface ClickEventArgs extends BaseEventArgs {
  /** Defines the current Toolbar Item Object. */
  item: ItemModel;
  /** Defines the current Event arguments. */
  originalEvent: Event;
  /** Defines the prevent action. */
  cancel?: boolean;
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
     * Specifies the location for aligning toolbar items in the toolbar. Each command will be aligned according to the `align` property.
     * 
     * Possible values are:
     * - Left – To align commands to the left side of the Toolbar.
     * - Center - To align commands to the center of the Toolbar.
     * - Right - To align commands to the right side of the Toolbar.
     * ```html
     * <div id="element"> </div>
     * ```
     * ```typescript
     * let toolbar: Toolbar = new Toolbar({
     *     items: [
     *         { text: "Home" },
     *         { text: "My Home Page" , align: 'center' },
     *         { text: "Search", align: 'right' }
     *         { text: "Settings", align: 'right' }
     *     ]
     * });
     * toolbar.appendTo('#element');
     * ```
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
    private trgtEle: HTEle;
    private ctrlTem: HTEle;

    /** @hidden */
    private popObj: Popup;
    /** @hidden */
    private tbarEle: HTMLElement[];
    /** @hidden */
    private tbarAlgEle: ToolbarItemAlignIn;
    /** @hidden */
    private tbarAlign: boolean;
    /** @hidden */
    private tbarEleMrgn: number;
    /** @hidden */
    private tbResize: boolean;
    private offsetWid: number;
    private keyModule: KeyboardEvents;
    private scrollModule: HScroll;
    private activeEle: HTEle;

    /**
     * Contains the keyboard configuration of the toolbar.
     */
    private keyConfigs: { [key: string]: Str } = {
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
    public clicked: EmitType<ClickEventArgs>;
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
     * Removes the control from the DOM and also removes all its related events.
     * @returns void
     */
    public destroy(): void {
        let ele: HTEle = this.element;
        super.destroy();
        this.unwireEvents();
        while (ele.firstChild) {
            ele.removeChild(ele.firstChild); }
        if (this.trgtEle) {
            ele.appendChild(this.ctrlTem); }
        this.clearProperty();
        this.popObj = null;
        this.remove(this.element, 'e-toolpop');
        ele.removeAttribute('style');
        ['aria-disabled', 'aria-orientation', 'aria-haspopup', 'role'].forEach((attrb: string): void => {
            this.element.removeAttribute(attrb);
        });
    }
    /**
     * Initialize the event handler
     * @private
     */
    protected preRender(): void {
        this.trigger('beforeCreate');
        this.scrollModule = null;
        this.popObj = null;
        if (this.enableRtl) {
            this.add(this.element, CLS_RTL);
        }
    }
    /**
     * Initializes a new instance of the Toolbar class.
     * @param options  - Specifies toolbar model properties as options.
     * @param element  - Specifies the element that is rendered as a toolbar.
     */
    constructor(options?: ToolbarModel, element?: string | HTMLElement) {
        super(options, <HTEle | Str>element);
    }
    private wireEvents(): void {
        EventHandler.add(this.element, 'click', this.clickHandler, this);
        window.addEventListener('resize', this.resize.bind(this));
        this.keyModule = new KeyboardEvents(
            this.element,
            {
                keyAction: this.keyActionHandler.bind(this),
                keyConfigs: this.keyConfigs
            });
        EventHandler.add(this.element, 'keydown', this.docKeyDown, this);
        this.element.setAttribute('tabIndex', '0');
    }
    private docKeyDown (e: KeyboardEvent): void {
        if (e.keyCode === 9 && (<HTEle> e.target).classList.contains('e-hor-nav') === true && isVisible(this.popObj.element)) {
            this.popObj.hide({ name: 'SlideUp', duration: 100 }); }
        let keyCheck: boolean = (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 35 || e.keyCode === 36);
        if (keyCheck) {
           e.preventDefault(); }
    }
    private unwireEvents(): void {
        EventHandler.remove(this.element, 'click', this.clickHandler);
        this.destroyHScroll();
        this.keyModule.destroy();
        EventHandler.remove(document, 'scroll', this.docEvent);
        EventHandler.remove(this.element, 'keydown', this.docKeyDown);
        EventHandler.remove(document, 'click', this.docEvent);
    }
    private clearProperty(): void {
        this.tbarEle = [];
        this.tbarAlgEle = {lefts : [] , centers: [], rights: [] };
    }
    private docEvent(e: Event): void {
        let popEle: Element = closest(<Element>e.target, '.e-popup');
        if (this.popObj && isVisible(this.popObj.element) && !popEle) {
            this.popObj.hide({ name: 'SlideUp', duration: 100 });
        }
    }
    private destroyHScroll(): void {
        if (this.scrollModule) {
            if (this.tbarAlign) { this.add(this.scrollModule.element, CLS_TBARPOS); }
            this.scrollModule.destroy(); this.scrollModule = null;
        }
    }
    private destroyItems(): void {
       [].slice.call(this.element.querySelectorAll('.' + CLS_ITEM)).forEach ((el: HTEle) => {
           detach(el);
       });
       this.clearProperty();
    }
    private destroyMode(): void {
        if (this.scrollModule) {
            this.remove(this.scrollModule.element, CLS_RTL);
            this.destroyHScroll();
        }
        if (this.popObj) {
            this.popupRefresh(this.popObj.element, true);
        }
    }
    private add(ele: HTEle, val : Str): void {
      ele.classList.add(val);
    }
    private remove(ele: HTEle, val : Str): void {
      ele.classList.remove(val);
    }
    private elementFocus(ele: HTEle): void {
      let fChild: HTEle = <HTEle>ele.firstElementChild;
      if (fChild) {
          fChild.focus();
          this.activeEleSwitch(ele);
      } else {
          ele.focus(); }
    }
    private clstElement(tbrNavChk: Boolean, trgt: HTEle): HTEle {
        let clst: HTEle;
        if (tbrNavChk && this.popObj && isVisible(this.popObj.element)) {
            clst = <HTEle>this.popObj.element.querySelector('.' + CLS_ITEM);
        } else if (this.element === trgt || tbrNavChk) {
            clst = <HTEle>this.element.querySelector('.' + CLS_ITEM);
        } else {
            clst = <HTEle>closest(trgt, '.' + CLS_ITEM);
        }
        return clst;
    }
    private keyHandling(clst: HTEle, e: KeyboardEventArgs, trgt: HTEle, navChk: Boolean, scrollChk: Boolean): void {
        let popObj: Popup = this.popObj;
        let rootEle: HTEle = this.element;
        let popAnimate: Object = { name: 'SlideUp', duration: 100 };
        switch (e.action) {
            case 'moveRight':
                if (rootEle === trgt ) {
                    this.elementFocus(clst);
                } else if (!navChk) {
                    this.eleFocus(clst, 'next');
                }
                break;
            case 'moveLeft':
                if (!navChk) {
                    this.eleFocus(clst, 'previous'); }
                break;
            case 'home':
            case 'end':
                let ele: HTEle;
                let nodes: NodeList;
                if (clst) {
                    let popupCheck: HTEle = <HTEle>closest(clst, '.e-popup');
                    if (popupCheck) {
                        if (isVisible(this.popObj.element)) {
                            nodes = popupCheck.children;
                            if (e.action === 'home') {
                                ele = <HTEle>nodes[0];
                            } else {
                                ele = <HTEle>nodes[nodes.length - 1];
                            }
                        }
                    } else {
                        nodes = this.element.querySelectorAll('.' + CLS_ITEMS + ' .' + CLS_ITEM);
                        if (e.action === 'home') {
                            ele = <HTEle>nodes[0];
                        } else {
                            ele = <HTEle>nodes[nodes.length - 1];
                        }
                    }
                    if (ele) {
                        this.elementFocus(ele);
                    }
                }
                break;
            case 'moveUp':
            case 'moveDown':
                let value: Str = e.action === 'moveUp' ? 'previous' : 'next';
                if (popObj && closest(trgt, '.e-popup')) {
                    let popEle: HTEle = popObj.element;
                    let popFrstEle: HTEle = popEle.firstElementChild as HTEle;
                    if ((value === 'previous' && popFrstEle === clst) || (value === 'next' && popEle.lastElementChild === clst) ) {
                        return;
                    } else {
                        this.eleFocus(clst, value);
                    }
                } else if (e.action === 'moveDown' && popObj && isVisible(popObj.element) ) {
                    this.elementFocus(clst);
                }
                break;
            case 'tab':
                if (!scrollChk && !navChk) {
                    let ele: HTEle = (<HTEle>clst.firstElementChild);
                    if (rootEle === trgt ) {
                        if (this.activeEle) {
                            this.activeEle.focus();
                        } else {
                            this.activeEleRemove(ele);
                            ele.focus();
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
                if (popObj && !isVisible(popObj.element)) {
                    popObj.element.style.top = rootEle.offsetHeight + 'px';
                    popObj.show({ name: 'SlideDown', duration: 100 });
                } else {
                    popObj.hide(popAnimate);
                }
                break;
        }
    }
    private keyActionHandler(e: KeyboardEventArgs): void {
        e.preventDefault();
        let clst: HTEle;
        let trgt: HTEle = <HTEle>e.target;
        let tbrNavChk: boolean = trgt.classList.contains(CLS_TBARNAV);
        let tbarScrollChk: boolean = trgt.classList.contains(CLS_TBARSCRLNAV);
        clst = this.clstElement(tbrNavChk, trgt);
        if (clst || tbarScrollChk) {
         this.keyHandling(clst, e, trgt, tbrNavChk, tbarScrollChk);
        }
    }
   private eleFocus(closest: HTEle, pos: Str): void {
     let sib: HTEle = Object(closest)[pos + 'ElementSibling'];
     let contains: Function = (el: HTEle) => {
        return el.classList.contains(CLS_SEPARATOR) || el.classList.contains(CLS_DISABLE); };
     if (sib) {
         let skipEle: boolean = contains(sib);
         if (skipEle) {
                if ( Object(sib)[pos + 'Sibling']) {
                    sib = <HTEle> Object(sib)[pos + 'Sibling'];
                    skipEle = contains(sib);
                    if (skipEle) {
                        this.eleFocus(sib, pos); return; }
                    }
            }
         this.elementFocus(sib);
        } else if (this.tbarAlign) {
           let elem: HTEle = Object( closest.parentElement)[pos + 'ElementSibling'] as HTEle;
           if (!isNOU(elem) && elem.children.length === 0) {
            elem = Object(elem)[pos + 'ElementSibling'] as HTEle;
           }
           if (!isNOU(elem) && elem.children.length > 0) {
             if (pos === 'next') {
                let el: HTEle = <HTEle>elem.querySelector('.' + CLS_ITEM);
                if (contains(el)) {
                   this.eleFocus(el, pos); } else {
              (<HTEle>el.firstElementChild).focus();
              this.activeEleSwitch(el); }
            } else {
                let el: HTEle = <HTEle>elem.lastElementChild;
                if (contains(el)) {
                   this.eleFocus(el, pos); } else {
                   this.elementFocus(el); } }
           }
        }
   }
    private clickHandler(e: Event): void {
        let trgt: HTEle = <HTEle>e.target;
        let clsList: DOMTokenList = trgt.classList;
        let ele: HTEle = this.element;
        let isPopupElement: boolean = !isNOU(closest(trgt, '.' + CLS_POPUPCLASS));
        let popupNav: HTEle = <HTEle>closest(trgt, ('.' + CLS_TBARNAV));
        if (!popupNav) {
            popupNav = trgt;
        }
        if (!ele.children[0].classList.contains('e-hscroll') && (clsList.contains(CLS_TBARNAV))) {
            clsList = trgt.querySelector('.e-icons').classList;
        }
        if (clsList.contains(CLS_POPUPICON) || clsList.contains(CLS_POPUPDOWN)) {
          this.popupClickHandler(ele, popupNav , CLS_RTL);
        }
        let itemObj: ItemModel;
        let clst: HTEle = <HTEle>closest(<Node>e.target , '.' + CLS_ITEM);
        if ((isNOU(clst) || clst.classList.contains(CLS_DISABLE)) && !popupNav.classList.contains(CLS_TBARNAV) ) {
            return; }
        if (clst) {
          itemObj = this.items[this.tbarEle.indexOf(clst)];
        }
        let eventArgs: ClickEventArgs = {originalEvent: e, item: itemObj};
        this.trigger('clicked', eventArgs);
        if (isPopupElement && !eventArgs.cancel) {
          this.popObj.hide({ name: 'SlideUp', duration: 100 }); }
    };

    private popupClickHandler(ele: HTMLElement, popupNav: HTMLElement, CLS_RTL: Str): void {
        let popObj: Popup = this.popObj;
        if (isVisible(popObj.element)) {
            popupNav.classList.remove(CLS_TBARNAVACT);
            popObj.hide({ name: 'SlideUp', duration: 100 });
        } else {
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
    }
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
        let width: Str = formatUnit(this.width);
        let  height: Str = formatUnit(this.height);
        if (Browser.info.name !== 'msie' || this.height !== 'auto' ) {
          setStyle(this.element, {'height': height}); }
        setStyle(this.element, { 'width': width });
        let ariaAttr: { [key: string]: Str } = {
            'role': 'toolbar', 'aria-disabled': 'false', 'aria-haspopup': 'false', 'aria-orientation': 'horizontal',
        };
        attributes(this.element, ariaAttr);
    }
    private renderControl(): void {
        this.trgtEle = (this.element.children.length > 0) ? <HTEle>this.element.querySelector('div') : null;
        this.tbarAlgEle = {lefts : [] , centers: [], rights: [] };
        this.renderItems();
        this.renderOverflowMode();
        if (this.tbarAlign) { this.itemPositioning(); }
    }
    private initHScroll(element: HTEle, innerItems: NodeList): void {
        if (!this.scrollModule && this.checkOverflow(element, <HTEle>innerItems[0])) {
         if (this.tbarAlign) {
            this.element.querySelector('.' + CLS_ITEMS + ' .' + CLS_TBARCENTER).removeAttribute('style');
         }
         this.scrollModule = new HScroll({ scrollStep: 50, enableRtl: this.enableRtl }, <HTEle>innerItems[0]);
         this.remove(this.scrollModule.element, CLS_TBARPOS);
         setStyle(this.element, {overflow: 'hidden'});
        }
    }
    private itemWidthCal(items: HTEle): number {
      let width: number = 0;
      [].slice.call( selectAll('.' + CLS_ITEM), items).forEach ((el: HTEle) => {
         width += (el.offsetWidth + parseFloat(window.getComputedStyle(el).marginRight));
      });
      return width;
    }
    private checkOverflow(element: HTEle, innerItem: HTEle): boolean {
        if (isNOU(element) || isNOU(innerItem)) {
            return false;
        }
        let eleWidth: number = element.offsetWidth;
        let itemWidth: number;
        if (this.tbarAlign || this.scrollModule) {
          itemWidth = this.itemWidthCal(this.scrollModule ? <HTEle>innerItem.querySelector('.e-hscroll-content') : innerItem);
        } else {
         itemWidth = innerItem.offsetWidth; }
        let popNav: HTEle = <HTEle>element.querySelector('.' + CLS_TBARNAV);
        let scrollNav: HTEle = <HTEle>element.querySelector('.' + CLS_TBARSCRLNAV);
        if (itemWidth > eleWidth - (popNav ? popNav.offsetWidth : (scrollNav ? scrollNav.offsetWidth * 2 : 0))) {
            return true;
        } else { return false; }
    }
    /** @hidden */
    public refreshOverflow(): void {
      this.resize();
    }
    private renderOverflowMode(): void {
        let ele: HTEle = this.element;
        let innerItems: HTEle = <HTEle>ele.querySelector('.' + CLS_ITEMS);
        if (ele && ele.children.length > 0) {
            this.offsetWid = ele.offsetWidth;
            switch (this.overflowMode) {
                case 'Scrollable':
                    this.destroyHScroll();
                    this.initHScroll(ele, ele.getElementsByClassName(CLS_ITEMS));
                    break;
                case 'Popup':
                        this.add(this.element, 'e-toolpop');
                        if (this.tbarAlign) { this.removePositioning(); }
                        if (this.checkOverflow(ele, innerItems)) {
                        this.createPopupEle(ele, [].slice.call(selectAll('.' + CLS_ITEMS + ' .' + CLS_ITEM, ele)));
                        this.element.querySelector('.' + CLS_TBARNAV).setAttribute('tabIndex', '0');
                    }
                        if (this.tbarAlign) {
                         this.add(innerItems, CLS_TBARPOS);
                         this.itemPositioning(); }
                    break;
            }
        }
    }

    private createPopupEle(ele: HTMLElement, innerEle: HTMLElement[]): void {
        let innerNav: HTEle = <HTEle>ele.querySelector('.' + CLS_TBARNAV);
        if (!innerNav) {
            this.createPopupIcon(ele);
        }
        innerNav = <HTEle>ele.querySelector('.' + CLS_TBARNAV);
        let eleWidth: number = (ele.offsetWidth - (innerNav.offsetWidth));
        this.element.classList.remove('e-rtl');
        this.checkPriority(ele, innerEle, eleWidth, true);
        if (this.enableRtl) {
            this.element.classList.add('e-rtl');
        }
        this.createPopup();
    }
    private pushingPoppedEle(tbarObj: Toolbar, popupPri: Element[], ele: HTEle, eleHeight: number): void {
        let element: HTEle = tbarObj.element;
        let nodes: HTEle[] = selectAll('.' + CLS_TBAROVERFLOW, ele);
        let nodeIndex: number = 0;
        let poppedEle: HTEle[] = [].slice.call(selectAll('.' + CLS_POPUP, element.querySelector('.' + CLS_ITEMS)));
        let nodePri: number = 0;
        poppedEle.forEach((el: HTEle, index: number) => {
            nodes = selectAll('.' + CLS_TBAROVERFLOW, ele);
            if (el.classList.contains(CLS_TBAROVERFLOW) && nodes.length > 0) {
                if (tbarObj.tbResize && nodes.length > index) {
                    ele.insertBefore(el, nodes[index]); ++nodePri;
                } else { ele.insertBefore(el, ele.children[nodes.length]); ++nodePri; }
            } else if (el.classList.contains(CLS_TBAROVERFLOW)) {
                ele.insertBefore(el, ele.firstChild); ++nodePri;
            } else if (tbarObj.tbResize && el.classList.contains(CLS_POPOVERFLOW) && ele.children.length > 0 && nodes.length === 0) {
                ele.insertBefore(el, ele.firstChild); ++nodePri;
            } else if (el.classList.contains(CLS_POPOVERFLOW)) {
                popupPri.push(el);
            } else if (tbarObj.tbResize) {
                ele.insertBefore(el, ele.childNodes[nodeIndex + nodePri]);
                ++nodeIndex;
            } else {
                ele.appendChild(el);
            }
            setStyle(el, { display: '', height: eleHeight + 'px' });
        });
        popupPri.forEach((el: Element) => {
            ele.appendChild(el);
        });
        let tbarEle: HTEle[] = selectAll('.' + CLS_ITEM, element.querySelector('.' + CLS_ITEMS));
        for (let i: number = tbarEle.length - 1; i >= 0; i--) {
            let tbarElement: HTEle = tbarEle[i];
            if (tbarElement.classList.contains(CLS_SEPARATOR)) {
                setStyle(tbarElement, { display: 'none' });
            } else {
                break;
            }
        }
    }
    private createPopup(): void {
        let element: HTEle = this.element;
        let eleHeight: number;
        let eleItem: Element;
        eleItem = element.querySelector('.' + CLS_ITEM + ':not(.' + CLS_SEPARATOR + ' ):not(.' + CLS_POPUP + ' )');
        eleHeight = (element.style.height === 'auto' || element.style.height === '') ? null : (eleItem as HTEle).offsetHeight;
        let ele: HTEle;
        let popupPri: Element[] = [];
        if (element.querySelector('#' + element.id + '_popup.' + CLS_POPUPCLASS)) {
            ele = <HTEle>element.querySelector('#' + element.id + '_popup.' + CLS_POPUPCLASS);
        } else {
            ele = buildTag('div', { id: element.id + '_popup', className: CLS_POPUPCLASS });
        }
        this.pushingPoppedEle(this, popupPri, ele, eleHeight);
        this.popupInit(element, ele);
    }

    private popupInit(element: HTEle, ele: HTEle): void {
        if (!this.popObj) {
            element.appendChild(ele);
            setStyle(this.element, { overflow: '' });
            let popup: Popup = new Popup(null, {
            relateTo: this.element,
            offsetY: (element.offsetHeight),
            enableRtl: this.enableRtl,
            open: this.popupOpen.bind(this),
            close: this.popupClose,
            position: this.enableRtl ? { X: 'left', Y: 'top' } : { X: 'right', Y: 'top' }
        });
            popup.appendTo(ele);
            EventHandler.add(document, 'scroll', this.docEvent.bind(this));
            EventHandler.add(document, 'click ', this.docEvent.bind(this));
            popup.element.style.maxHeight = popup.element.offsetHeight + 'px';
            popup.hide();
            this.popObj = popup;
            this.element.setAttribute('aria-haspopup', 'true');
        } else {
            let popupEle: HTEle = this.popObj.element;
            setStyle(popupEle, { maxHeight: '', display: 'block' });
            setStyle(popupEle, { maxHeight: popupEle.offsetHeight + 'px', display: '' });
        }
    }
    private popupOpen(e: Event): void {
        let popObj: Popup = this.popObj;
        let popupEle: HTEle = this.popObj.element;
        let toolEle: HTEle = this.popObj.element.parentElement;
        let popupNav: HTEle = <HTEle>toolEle.querySelector('.' + CLS_TBARNAV);
        setStyle(popObj.element, { height: 'auto', maxHeight: '' });
        popObj.element.style.maxHeight = popObj.element.offsetHeight + 'px';
        let popupElePos: number = popupEle.offsetTop + popupEle.offsetHeight + calculatePosition(toolEle).top;
        let popIcon: Element = (popupNav.firstElementChild as Element);
        popupNav.classList.add(CLS_TBARNAVACT);
        classList(popIcon, [CLS_POPUPICON], [CLS_POPUPDOWN]);
        let scrollVal: number = isNOU(window.scrollY) ?  0 : window.scrollY;
        if ((window.innerHeight + scrollVal) < popupElePos) {
        let overflowHeight: number = (popupEle.offsetHeight - ((popupElePos - window.innerHeight - scrollVal) + 5));
        popObj.height = overflowHeight + 'px';
        setStyle(popObj.element, { maxHeight: overflowHeight + 'px' });
        }
    }

    private popupClose(e: Event): void {
        let element: HTEle = this.element.parentElement;
        let popupNav: HTEle = <HTEle>element.querySelector('.' + CLS_TBARNAV);
        let popIcon: Element = (popupNav.firstElementChild as Element);
        popupNav.classList.remove(CLS_TBARNAVACT);
        classList(popIcon, [CLS_POPUPDOWN], [CLS_POPUPICON]);
    }
   private checkPriority(ele: HTEle, inEle: HTEle[], eleWidth: number, pre: boolean): void {
        let len: number = inEle.length;
        let eleWid: number = eleWidth;
        let sepCheck: number = 0; let itemCount: number = 0; let itemPopCount: number = 0;
        let checkClass: Function = (ele: HTEle, val : Str[]) => {
          let rVal: Boolean = false;
          val.forEach((cls: string) => {
            if (ele.classList.contains(cls)) {
                rVal = true;
            }
            });
          return rVal;
         };
        for (let i: number = len - 1; i >= 0; i--) {
            let mrgn: number = parseFloat((window.getComputedStyle(inEle[i])).marginRight);
            mrgn += parseFloat((window.getComputedStyle(inEle[i])).marginLeft);
            if (inEle[i] === this.tbarEle[0]) { this.tbarEleMrgn = mrgn; }
            if ((inEle[i].offsetLeft + inEle[i].offsetWidth + mrgn) > eleWidth) {
                if (inEle[i].classList.contains(CLS_SEPARATOR)) {
                    if (sepCheck > 0 && itemCount === itemPopCount) {
                        let sepEle: HTEle = (inEle[i + itemCount + (sepCheck - 1)] as HTEle);
                        if (checkClass(sepEle, [CLS_SEPARATOR, CLS_TBARIGNORE])) {
                            setStyle(sepEle, { display: 'none' });
                        }
                    }
                    sepCheck++; itemCount = 0; itemPopCount = 0;
                } else {
                    itemCount++;
                }
                if (inEle[i].classList.contains(CLS_TBAROVERFLOW) && pre) {
                    eleWidth -= (inEle[i].offsetWidth + (mrgn));
                } else if (!checkClass(inEle[i], [CLS_SEPARATOR, CLS_TBARIGNORE] )) {
                    inEle[i].classList.add(CLS_POPUP);
                    setStyle(inEle[i], { display: 'none', minWidth: inEle[i].offsetWidth + 'px' });
                    itemPopCount++;
                } else {
                    eleWidth -= (inEle[i].offsetWidth + (mrgn));
                }
            }
        }
        if (pre) {
            let popedEle: HTEle[] = selectAll('.' + CLS_ITEM + ':not(.' + CLS_POPUP + ')', this.element);
            this.checkPriority(ele, popedEle, eleWid, false);
        }
    }

    private createPopupIcon(element: HTEle): void {
        let id: Str = element.id.concat('_nav');
        let className: Str = 'e-' + element.id.concat('_nav ' + CLS_POPUPNAV);
        let nav: HTEle = buildTag('div', { id: id, className: className });
        if (Browser.info.name === 'msie' || Browser.info.name === 'edge') {
            nav.classList.add('e-ie-align');
        }
        let navItem: HTEle = buildTag('div', { className: CLS_POPUPDOWN + ' e-icons' });
        nav.appendChild(navItem);
        nav.setAttribute('tabindex', '0');
        element.appendChild(nav);
    }

    private tbarPriRef(inEle: HTEle, indx: number, sepPri: number, el: HTEle, des: boolean, elWid: number, wid: number, ig: number): void {
        let ignoreCount: number = ig;
        let popEle: HTEle = this.popObj.element;
        let query: Str = '.' + CLS_ITEM + ':not(.' + CLS_SEPARATOR + '):not(.' + CLS_TBAROVERFLOW + ')';
        let priEleCnt: number = selectAll('.' + CLS_POPUP + ':not(.' + CLS_TBAROVERFLOW + ')', popEle).length;
        let checkClass: Function = (ele: HTEle, val : Str) => {
             return ele.classList.contains(val); };
        if (selectAll(query, inEle).length === 0) {
            let eleSep: HTEle = inEle.children[indx - (indx - sepPri) - 1] as HTEle;
            let ignoreCheck: Boolean = (!isNOU(eleSep) && checkClass(eleSep, CLS_TBARIGNORE));
            if ((!isNOU(eleSep) && checkClass(eleSep, CLS_SEPARATOR) && !isVisible(eleSep)) || ignoreCheck  ) {
                let sepDisplay: Str = 'none';
                eleSep.style.display = 'inherit';
                let eleSepWidth: number = eleSep.offsetWidth + (parseFloat(window.getComputedStyle(eleSep).marginRight) * 2);
                let prevSep: HTEle = eleSep.previousElementSibling as HTEle;
                if ((elWid + eleSepWidth) < wid || des) {
                    inEle.insertBefore(el, inEle.children[(indx + ignoreCount) - (indx - sepPri)]);
                    if (!isNOU(prevSep)) {
                        prevSep.style.display = '';
                    }
                } else {
                    if (prevSep.classList.contains(CLS_SEPARATOR)) {
                        prevSep.style.display = sepDisplay;
                    }
                }
                eleSep.style.display = '';
            } else {
                inEle.insertBefore(el, inEle.children[(indx + ignoreCount) - (indx - sepPri)]);
            }
        } else {
            inEle.insertBefore(el, inEle.children[(indx + ignoreCount) - priEleCnt]);
        }
    }

    private popupRefresh(popupEle: HTMLElement, destroy: boolean): void {
        let ele: HTEle = this.element;
        let popNav: HTEle = <HTEle>ele.querySelector('.' + CLS_TBARNAV);
        let innerEle: HTEle = <HTEle>ele.querySelector('.' + CLS_ITEMS);
        if (isNOU(popNav)) {
            return;
        }
        innerEle.removeAttribute('style');
        popupEle.style.display = 'block';
        let width: number = ele.offsetWidth - (popNav.offsetWidth + innerEle.offsetWidth);
        this.popupEleRefresh(width, popupEle, destroy);
        popupEle.style.display = '';
        if (popupEle.children.length === 0) {
            detach(popNav);
            this.popObj.destroy();
            detach(this.popObj.element);
            this.popObj = null;
            ele.setAttribute('aria-haspopup', 'false');
            ele.classList.remove('e-toolpop');
        }
    }
    private ignoreEleFetch (index: number, innerEle: HTEle): number {
        let ignoreEle: HTEle[] = [].slice.call(innerEle.querySelectorAll('.' + CLS_TBARIGNORE));
        let ignoreInx: number[] = [];
        let count: number = 0;
        if (ignoreEle.length > 0) {
            ignoreEle.forEach((ele: HTEle): void => {
             ignoreInx.push([].slice.call(innerEle.children).indexOf(ele));
            });  } else {
                return 0;
            }
        ignoreInx.forEach((val: number): void => {
         if (val <= index) { count++; }
        });
        return count;
    }
    private popupEleRefresh(width: number, popupEle: HTEle, destroy: boolean): void {
        let eleSplice: HTEle[] = this.tbarEle;
        let priEleCnt: number;
        let index: number;
        let innerEle: HTEle = <HTEle>this.element.querySelector('.' + CLS_ITEMS);
        let ignoreCount: number = 0;
        for (let el of [].slice.call(popupEle.children)) {
            el.style.position = 'absolute';
            let elWidth: number = el.offsetWidth;
            let btnText: HTEle = el.querySelector('.' + CLS_TBARBTNTEXT);
            if (el.classList.contains('e-tbtn-align') || el.classList.contains(CLS_TBARTEXT)) {
                let btn: HTEle = el.children[0];
                if (!isNOU(btnText) && el.classList.contains(CLS_TBARTEXT)) {
                    btnText.style.display = 'none';
                } else if (!isNOU(btnText) && el.classList.contains(CLS_POPUPTEXT)) {
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
                el.style.minWidth = '';
                if (!el.classList.contains(CLS_POPOVERFLOW)) {
                    el.classList.remove(CLS_POPUP);
                }
                index = this.tbarEle.indexOf(el);
                if (this.tbarAlign) {
                    let pos: ItemAlign = this.items[index].align;
                    index = this.tbarAlgEle[(pos + 's') as ItmAlign].indexOf(el);
                    eleSplice = this.tbarAlgEle[(pos + 's') as ItmAlign];
                    innerEle = <HTEle>this.element.querySelector('.' + CLS_ITEMS + ' .' + 'e-toolbar-' + pos);
                }
                let sepBeforePri: number = 0;
                eleSplice.slice(0, index).forEach((el: HTEle) => {
                    if (el.classList.contains(CLS_TBAROVERFLOW) || el.classList.contains(CLS_SEPARATOR)) {
                        if (el.classList.contains(CLS_SEPARATOR)) {
                            el.style.display = '';
                            width -= el.offsetWidth;
                        }
                        sepBeforePri++;
                    }
                });
                ignoreCount = this.ignoreEleFetch(index, innerEle);
                if (el.classList.contains(CLS_TBAROVERFLOW)) {
                    this.tbarPriRef(innerEle, index, sepBeforePri, el, destroy, elWidth, width, ignoreCount);
                    width -= el.offsetWidth;
                } else if (index === 0) {
                    innerEle.insertBefore(el, innerEle.firstChild);
                    width -= el.offsetWidth;
                } else {
                    priEleCnt = selectAll('.' + CLS_TBAROVERFLOW, this.popObj.element).length;
                    innerEle.insertBefore(el, innerEle.children[(index + ignoreCount) - priEleCnt]);
                    width -= el.offsetWidth;
                }
                el.style.height = '';
            } else {
                break;
            }
        }
    }
    private removePositioning(): void {
      let item: HTEle = this.element.querySelector('.' + CLS_ITEMS) as HTEle;
      if (isNOU(item) || !item.classList.contains(CLS_TBARPOS)) { return; }
      this.remove(item, CLS_TBARPOS);
      let innerItem: HTEle[] = [].slice.call(item.childNodes);
      innerItem[1].removeAttribute('style');
      innerItem[2].removeAttribute('style');
    }
    private refreshPositioning(): void {
      let item: HTEle = this.element.querySelector('.' + CLS_ITEMS) as HTEle;
      this.add(item, CLS_TBARPOS);
      this.itemPositioning();
    }
    private itemPositioning(): void {
      let item: HTEle = this.element.querySelector('.' + CLS_ITEMS) as HTEle;
      if (isNOU(item) || !item.classList.contains(CLS_TBARPOS)) { return; }
      let popupNav: HTEle = <HTEle>this.element.querySelector('.' + CLS_TBARNAV);
      let innerItem: HTEle[];
      if (this.scrollModule) {
          innerItem = [].slice.call(item.querySelector('.' + CLS_TBARSCROLL).children);
      } else {
      innerItem = [].slice.call(item.childNodes); }
      let margin: number = innerItem[0].offsetWidth + innerItem[2].offsetWidth;
      let tbarWid: number = this.element.offsetWidth;
      if (popupNav) {
          tbarWid -= popupNav.offsetWidth;
          let popWid: string = popupNav.offsetWidth + 'px';
          innerItem[2].removeAttribute('style');
          this.enableRtl ? innerItem[2].style.left = popWid :  innerItem[2].style.right = popWid;
      }
      if (tbarWid <= margin) { return; }
      let value: number = (((tbarWid - margin)) - innerItem[1].offsetWidth) / 2;
      innerItem[1].removeAttribute('style');
      let mrgn: Str = (innerItem[0].offsetWidth + value) + 'px';
      this.enableRtl ? innerItem[1].style.marginRight = mrgn : innerItem[1].style.marginLeft = mrgn;
    }
    private tbarItemAlign(item: ItemModel, itemEle: HTEle, pos: number ): void {
      let alignDiv: HTMLElement[] = [];
      alignDiv.push( buildTag('div', { className: CLS_TBARLEFT } ));
      alignDiv.push( buildTag('div', { className: CLS_TBARCENTER } ));
      alignDiv.push( buildTag('div', { className: CLS_TBARRIGHT } ));
      if (pos === 0 && item.align !== 'left' )  {
        alignDiv.forEach((ele: HTEle) => {
        itemEle.appendChild(ele);
        });
        this.tbarAlign = true;
        this.add(itemEle, CLS_TBARPOS);
      } else if (item.align !== 'left') {
        let alignEle: NodeList = itemEle.childNodes;
        let leftAlign: HTEle = alignDiv[0];
        [].slice.call(alignEle).forEach((el: HTEle) => {
          this.tbarAlgEle.lefts.push(el);
          leftAlign.appendChild(el);
        });
        itemEle.appendChild(leftAlign);
        itemEle.appendChild(alignDiv[1]);
        itemEle.appendChild(alignDiv[2]);
        this.tbarAlign = true;
        this.add(itemEle, CLS_TBARPOS);
      }
    }
    private ctrlTemplate(): void {
        this.ctrlTem = <HTEle>this.trgtEle.cloneNode(true);
        this.add(this.trgtEle, CLS_ITEMS);
        this.tbarEle = [];
        let innerEle: HTEle[] = [].slice.call(this.trgtEle.children);
        innerEle.forEach((ele: HTEle) => {
            if (ele.tagName === 'DIV') {
                this.tbarEle.push(ele);
                ele.setAttribute('aria-disabled', 'false');
                this.add(ele, CLS_ITEM);
            }
        });
    }
    private renderItems(): void {
        let ele: HTEle = this.element;
        let itemEleDom: HTEle;
        let innerItem: HTEle;
        let innerPos: HTEle;
        let items: Item[] = <Item[]>this.items;
        if (ele && ele.children.length > 0) {
            itemEleDom = <HTEle>ele.querySelector('.' + CLS_ITEMS);
        }
        if (this.trgtEle != null) {
          this.ctrlTemplate();
        } else if (ele && items.length > 0) {
            if (!itemEleDom) {
                itemEleDom = buildTag('div', { className: CLS_ITEMS });
            }
            for (let i: number = 0; i < items.length; i++) {
                innerItem = this.renderSubComponent(items[i]);
                if (this.tbarEle.indexOf(innerItem) === -1) {
                this.tbarEle.push(innerItem); }
                if (!this.tbarAlign) {
                  this.tbarItemAlign(items[i] , itemEleDom , i); }
                innerPos = <HTEle>itemEleDom.querySelector('.e-toolbar-' + items[i].align.toLowerCase());
                if (innerPos) {
                  this.tbarAlgEle[(items[i].align + 's') as ItmAlign].push(innerItem);
                  innerPos.appendChild(innerItem);
                } else {
                    itemEleDom.appendChild(innerItem);
                }
            }
            ele.appendChild(itemEleDom);
        }
    }
    private setAttr(attr: { [key: string]: Str; }, element: HTEle): void {
        let key: Object[] = Object.keys(attr);
        let keyVal: Str;
        for (let i: number = 0; i < key.length; i++) {
        keyVal = key[i] as Str;
        keyVal === 'class' ? this.add(element, attr[keyVal]) : element.setAttribute(keyVal, attr[keyVal]);
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
        let enable: Function = (isEnable: Boolean, ele: HTEle) => {
          if (isEnable ) {
                  ele.classList.remove(CLS_DISABLE);
                  ele.setAttribute('aria-disabled', 'false');
               }  else {
                  ele.classList.add(CLS_DISABLE);
                  ele.setAttribute('aria-disabled', 'true');
               }
        };
        if (len && len > 1) {
            for (let ele of [].slice.call(elements)) {
               enable(isEnable, ele);
            }
            isEnable ?  removeClass(elements, CLS_DISABLE) : addClass(elements, CLS_DISABLE);
        } else {
            let ele: HTEle;
            ele = (len && len === 1) ? <HTEle>elements[0] : <HTEle>items;
            enable(isEnable, ele);
        }
    }
    /**
     * Adds new items to the Toolbar which accepts an array as toolbar items.
     * @param  {ItemsModel[]} items - DOM element or an Array of item which to be added to the toolbar.
     * @param  {number} index - Number value that determines where the command to be added. By default index is 0.
     * @returns void
     */
    public addItems(items: ItemModel[], index?: number): void {
        let innerItems: HTEle[];
        let itemsDiv: HTEle = <HTEle>this.element.querySelector('.' + CLS_ITEMS);
        let innerEle: HTEle;
        let itemAgn: Str = 'left';
        if (isNOU(index)) {
            index = 0;
        }
        items.forEach((e: ItemModel) => {
          if (!isNOU(e.align) && e.align !== 'left' && itemAgn === 'left') {
           itemAgn = e.align; }
        });
        for (let item of items) {
            if (isNOU(item.type)) {
            item.type = 'Button'; }
            innerItems = selectAll('.' + CLS_ITEM, this.element);
            item.align = <ItemAlign>itemAgn;
            innerEle = this.renderSubComponent(item);
            if (this.tbarEle.length >= index && innerItems.length > 0) {
                this.destroyMode();
                if (this.tbarAlign) {
                 let algIndex: number = item.align[0] === 'l' ? 0 : item.align[0] === 'c' ? 1 : 2;
                 let ele: Element;
                 ele = closest(innerItems[0] , '.' + CLS_ITEMS).children[algIndex];
                 ele.insertBefore(innerEle, ele.children[index]);
                 this.tbarAlgEle[(item.align + 's') as ItmAlign].splice(index, 0, innerEle);
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
     * @param  {number|HTMLElement|NodeList|HTMLElement[]} args
     * Index or DOM element or an Array of item which is to be removed from the toolbar.
     * @returns void
     */
    public removeItems(args: number | HTMLElement | NodeList | Element | HTMLElement[]): void {
        let elements: NodeList = <NodeList>args;
        let index: number;
        let innerItems: HTEle[] = [].slice.call(selectAll('.' + CLS_ITEM, this.element));
        if (typeof (elements) === 'number') {
            index = parseInt(args.toString(), 10);
            this.removeItemByIndex(index, innerItems);
        } else {
            if (elements && elements.length > 1) {
            for (let ele of [].slice.call(elements)) {
                index = this.tbarEle.indexOf(ele);
                this.removeItemByIndex(index, innerItems);
                innerItems = selectAll('.' + CLS_ITEM, this.element);
            }
        } else {
           let ele: HTEle = (elements && elements.length && elements.length === 1) ? <HTEle>elements[0] : <HTEle>args;
           index = innerItems.indexOf(ele);
           this.removeItemByIndex(index, innerItems);
        }
        }
        this.resize();
    }
    private removeItemByIndex(index: number, innerItems: HTEle[]): void {
        if (this.tbarEle[index] && innerItems[index]) {
            let eleIdx: number = this.tbarEle.indexOf(innerItems[index]);
            if (this.tbarAlign) {
              let indexAgn: number = this.tbarAlgEle[(this.items[eleIdx].align + 's') as ItmAlign].indexOf(this.tbarEle[eleIdx]);
              this.tbarAlgEle[(this.items[eleIdx].align + 's') as ItmAlign].splice(indexAgn, 1);
            }
            detach(innerItems[index]);
            this.items.splice(eleIdx, 1);
            this.tbarEle.splice(eleIdx, 1);
        }
    }
    private templateRender(templateProp: Object | Str, innerEle: HTEle, item: ItemModel): void {
        let itemType: Str = item.type;
        let eleObj: Template = <Template>templateProp;
        let isComponent: Boolean;
        if (typeof (templateProp) === 'object') {
            isComponent = typeof(eleObj.appendTo) === 'function';
            }
        if (typeof (templateProp) === 'string' || !isComponent) {
            let templateFn: Function;
            let val: Str = <Str>templateProp;
            val  = (typeof (templateProp) === 'string') ? <Str>templateProp.trim() : <Str>templateProp;
            let e: Object;
            try {
                if (document.querySelectorAll(val).length) {
                    let ele: Element = document.querySelector(val);
                    templateFn = templateCompiler(ele.outerHTML.trim());
                    detach(ele);
                }
            } catch (e) {
                templateFn = templateCompiler(val);
            }
            if (!isNOU(templateFn) && templateFn().length > 0) {
                [].slice.call(templateFn()).forEach((ele: HTEle): void => {
                   if (!isNOU(ele.tagName)) {
                       ele.style.display = ''; }
                   innerEle.appendChild(ele);
               });
            }
        } else if (itemType === 'Input') {
            let ele: HTEle = buildTag('input');
            item.id ? (ele.id = item.id) : (ele.id = getUniqueID('tbr-ipt'));
            innerEle.appendChild(ele);
            eleObj.appendTo(ele);
        }
        this.add(innerEle, CLS_TEMPLATE);
        this.tbarEle.push(innerEle);
    }
    private buttonRendering(item: ItemModel, innerEle: HTEle): HTEle {
        let dom: HTEle = buildTag('button', { className: CLS_TBARBTN });
        dom.setAttribute('type', 'button');
        let textStr: Str = item.text;
        let iconCss: Str;
        let iconPos: Str;
        item.id ? (dom.id = item.id) : dom.id = getUniqueID('e-tbr-btn');
        let btnTxt: HTEle = buildTag('div', { className: 'e-tbar-btn-text' });
        if (textStr) {
            btnTxt.innerHTML = textStr;
            dom.appendChild(btnTxt);
            dom.classList.add('e-tbtn-txt');
        } else {
            this.add(innerEle, 'e-tbtn-align');
        }
        if (item.prefixIcon || item.suffixIcon) {
            if ((item.prefixIcon && item.suffixIcon) || item.prefixIcon) {
                iconCss = item.prefixIcon + ' e-icons';
                iconPos = 'left';
            } else {
                iconCss = item.suffixIcon + ' e-icons';
                iconPos = 'right';
            }
        }
        new Button({iconCss: iconCss, iconPosition: <IconPosition>iconPos }, dom as HTMLButtonElement);
        if (item.width) {
            setStyle(dom, { 'width': formatUnit(item.width) });
        }
        return dom;
    }
    private renderSubComponent(item: ItemModel): HTEle {
        let innerEle: HTEle;
        let dom: HTEle;
        innerEle = buildTag('div', { className: CLS_ITEM });
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
        } else {
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
            let sTxt: Str = item.showTextOn;
            if (sTxt === 'Toolbar') {
                this.add(innerEle, CLS_POPUPTEXT);
                this.add(innerEle, 'e-tbtn-align' );
            } else if (sTxt === 'Overflow') {
                this.add(innerEle, CLS_TBARTEXT);
            }
        }
        if (item.overflow) {
            let overflow: Str = item.overflow;
            if (overflow === 'Show') {
                this.add(innerEle, CLS_TBAROVERFLOW);
            } else if (overflow === 'Hide') {
                if (!innerEle.classList.contains(CLS_SEPARATOR)) {
                    this.add(innerEle, CLS_POPOVERFLOW);
                }
            }
        }
        return innerEle;
    }
    private itemClick(e: Event): void {
        this.activeEleSwitch(<HTEle>e.currentTarget);
    }
    private activeEleSwitch(ele : HTEle): void {
        this.activeEleRemove(<HTEle>ele.firstElementChild);
        this.activeEle.focus();
    }
    private activeEleRemove(curEle: HTEle): void {
        if (!isNOU(this.activeEle)) {
          this.activeEle.setAttribute('tabindex', '-1');
        }
        this.activeEle = curEle;
        if (isNOU(this.trgtEle) && !(<HTEle>curEle.parentElement).classList.contains(CLS_TEMPLATE)) {
          curEle.removeAttribute('tabindex');
          } else {
          this.activeEle.setAttribute('tabindex', '0');
          }
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
        let ele: HTEle = this.element;
        this.tbResize = true;
        if (this.tbarAlign) { this.itemPositioning(); }
        if (this.popObj) {
           this.popObj.hide();
        }
        let checkOverflow: boolean = this.checkOverflow(ele, ele.getElementsByClassName(CLS_ITEMS)[0] as HTEle);
        if (!checkOverflow) {
            this.destroyHScroll(); }
        if (checkOverflow && this.scrollModule && (this.offsetWid === ele.offsetWidth)) { return; }
        if (this.offsetWid > ele.offsetWidth || checkOverflow) {
            this.renderOverflowMode();
        }
        if (this.popObj) {
            if (this.tbarAlign) { this.removePositioning(); }
            this.popupRefresh(this.popObj.element, false);
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
        let tEle: HTEle = this.element;
        for (let prop of Object.keys(newProp)) {
            switch (prop) {
                case 'items':
                    this.destroyMode();
                    this.destroyItems();
                    this.renderItems();
                    this.renderOverflowMode();
                    break;
                case 'width':
                    let wid: number = tEle.offsetWidth;
                    setStyle(tEle, { 'width': formatUnit(newProp.width) });
                    this.renderOverflowMode();
                    if (this.popObj && wid < tEle.offsetWidth) {
                        this.popupRefresh(this.popObj.element, false);
                    }
                    break;
                case 'height':
                    setStyle(this.element, { 'height': formatUnit(newProp.height) });
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
                    if (!isNOU(this.scrollModule)) {
                     newProp.enableRtl ? this.add(this.scrollModule.element, CLS_RTL) : this.remove(this.scrollModule.element, CLS_RTL);
                    }
                    if (!isNOU(this.popObj)) {
                     newProp.enableRtl ? this.add(this.popObj.element, CLS_RTL) : this.remove(this.popObj.element, CLS_RTL);
                    }
                    if (this.tbarAlign) { this.itemPositioning(); }
                    break;
            }
        }
    }
}
export let toolbarBuilder: ToolbarHelper = <ToolbarHelper>CreateBuilder(Toolbar);