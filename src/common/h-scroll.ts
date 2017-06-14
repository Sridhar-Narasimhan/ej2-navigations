import { Component } from '@syncfusion/ej2-base/component';
import { Touch, ScrollEventArgs, TouchEventArgs } from '@syncfusion/ej2-base/touch';
import { EventHandler } from '@syncfusion/ej2-base/event-handler';
import { NotifyPropertyChanges, INotifyPropertyChanged, Property } from '@syncfusion/ej2-base/notify-property-change';
import { createElement, detach, classList } from '@syncfusion/ej2-base/dom';
import { getUniqueID } from '@syncfusion/ej2-base/util';
import { HScrollModel } from './h-scroll-model';
import { Browser } from '@syncfusion/ej2-base/browser';

const CLASS_ROOT: string = 'e-hscroll';
const CLASS_RTL : string = 'e-rtl';
const CLASS_HSCROLLBAR : string = 'e-hscroll-bar';
const CLASS_HSCROLLCON : string = 'e-hscroll-content';
const CLASS_NAVARROW : string = 'e-nav-arrow';
const CLASS_NAVRIGHTARROW : string = 'e-nav-right-arrow';
const CLASS_NAVLEFTARROW : string = 'e-nav-left-arrow';
const CLASS_HSCROLLNAV : string = 'e-hor-nav';

interface TapEventArgs {
    name: string;
    originalEvent: TouchEventArgs | TouchEvent;
}
/**
 * HScroll module is introduces horizontal scroller when content exceeds the current viewing area.
 * It can be useful for the components like Toolbar, Tab which needs horizontal scrolling alone.
 * Hidden content can be view by touch moving or icon click.
 * ```html
 * <div id="scroll"/>
 * <script>
 *   var scrollObj = new HScroll();
 *   scrollObj.appendTo("#scroll");
 * </script>
 * ```
 */
@NotifyPropertyChanges
export class HScroll extends Component<HTMLElement> implements INotifyPropertyChanged {
    private touchModule: Touch;
    private scrollEle: HTMLElement;
    private scrollItems: HTMLElement;
    private uniqueId : boolean;
    private timeout: number;
    private browser: string;
    private browserCheck: boolean;
    /**
     * Specifies the left or right scrolling distance of the horizontal scrollbar moving.
     * @default '40'
     */
    @Property(40)
    public scrollStep: number;
    /**
     * Initialize the event handler
     * @private
     */
    protected preRender(): void {
        this.browser = Browser.info.name;
        this.browserCheck = this.browser === 'mozilla';
        this.initialize();
        if (this.element.id === '') {
            this.element.id = getUniqueID('hscroll');
            this.uniqueId = true;
        }
        this.element.style.display = 'block';
        if (this.enableRtl) {
            this.element.classList.add(CLASS_RTL);
        }
    }
    /**
     * To Initialize the control rendering
     * @private
     */
    protected render(): void {
        this.createNavigationIcon(this.element, CLASS_NAVRIGHTARROW + ' ' + CLASS_NAVARROW);
    }
    /**
     * Initializes a new instance of the HScroll class.
     * @param options  - Specifies HScroll model properties as options.
     * @param element  - Specifies the element for which horizontal scrolling applies.
     */
    constructor(options?: HScrollModel, element?: string | HTMLElement) {
        super(options, <HTMLElement | string>element);
    }
    private initialize(): void {
        let scrollEle: HTMLElement = createElement('div', { className: CLASS_HSCROLLCON });
        let scrollDiv: HTMLElement = createElement('div', { className: CLASS_HSCROLLBAR });
        let ele: HTMLElement = this.element;
        let innerEle: HTMLElement[] = [].slice.call(ele.children);
        for (let ele of innerEle) {
            scrollEle.appendChild(ele);
        }
        scrollDiv.appendChild(scrollEle);
        ele.appendChild(scrollDiv);
        scrollDiv.style.overflowX = 'hidden';
        this.scrollEle = scrollDiv;
        this.scrollItems = scrollEle;
    }
    protected getPersistData(): string {
        let keyEntity: string[] = ['scrollStep'];
        return this.addOnPersist(keyEntity);
    }
    /**
     * Returns the current module name.
     * @returns string
     * @private
     */
    protected getModuleName(): string {
        return 'hScroll';
    }
    /**
     * To destroy the HScroll Module.Removes the control from the DOM and also removes all its related events.
     * @returns void
     */
    public destroy(): void {
        let ele: HTMLElement = this.element;
        ele.style.display = '';
        ele.classList.remove(CLASS_ROOT);
        let nav: HTMLElement = <HTMLElement>ele.querySelector('#' + ele.id + '_nav.e-' + ele.id + '_nav');
        EventHandler.remove(nav, 'click', this.clickEventHandler);
        for (let elem of [].slice.call(this.scrollItems.children)) {
            ele.appendChild(elem);
        }
        if (this.uniqueId) {
           this.element.removeAttribute('id'); }
        detach(this.scrollEle);
        nav.parentElement.removeChild(nav);
        EventHandler.remove(this.scrollEle, 'scroll', this.scrollEventHandler);
        this.touchModule.destroy();
        this.touchModule = null;
        super.destroy();
    }
    private createNavigationIcon(element: HTMLElement, classList: string): void {
        let id: string = element.id.concat('_nav');
        let className: string = 'e-' + element.id.concat('_nav ' + CLASS_HSCROLLNAV);
        let nav: HTMLElement = createElement('div', { id: id, className: className });
        let navItem: HTMLElement = createElement('div', { className: classList + ' e-icons' });
        nav.appendChild(navItem);
        nav.setAttribute('tabindex', '0');
        element.insertBefore(nav, element.firstChild);
        EventHandler.add(this.scrollEle, 'scroll', this.scrollEventHandler, this);
        new Touch(nav, {taphold: this.tabHoldHandler.bind(this) });
        if (Browser.info.name === 'msie' ) {
          nav.classList.add('e-ie-align'); }
        nav.addEventListener('mouseup', this.repeatScroll.bind(this));
        nav.addEventListener('touchend', this.repeatScroll.bind(this));
        nav.addEventListener('contextmenu', (e: Event) => {
            e.preventDefault();
        });
        EventHandler.add(nav, 'click', this.clickEventHandler, this);
        this.touchModule = new Touch(element, { scroll: this.touchScrollHandler.bind(this) });
    }
    private repeatScroll(e: Event ): void {
      clearInterval (this.timeout);
    }
    private tabHoldHandler(e: TapEventArgs): void {
       let trgt: HTMLElement = e.originalEvent.target as HTMLElement;
       trgt = trgt.classList.contains(CLASS_HSCROLLNAV) ? <HTMLElement>trgt.firstElementChild : trgt ;
       let timeoutFun: Function = () => {
       let scrollDis: number = 10;
       this.contentScrolling(scrollDis, trgt);
       };
       this.timeout = setInterval(
           () => {
              timeoutFun();
        }, 50);
    }
    private contentScrolling(scrollDis: number, trgt: HTMLElement ): void {
        let element: HTMLElement = this.scrollEle;
        let classList: DOMTokenList = trgt.classList;
        if (classList.contains(CLASS_HSCROLLNAV)) {
            classList = this.element.querySelector('.' + CLASS_NAVARROW).classList;
        }
        if (this.element.classList.contains(CLASS_RTL) && this.browserCheck) {
            scrollDis = - scrollDis;
        }
        if ((!this.element.classList.contains(CLASS_RTL) || this.browserCheck)  || this.browser === 'edge') {
            if (classList.contains(CLASS_NAVRIGHTARROW)) {
                element.scrollLeft = element.scrollLeft + scrollDis;
            } else {
                element.scrollLeft = element.scrollLeft - scrollDis;
            }
        } else {
            if (classList.contains(CLASS_NAVLEFTARROW)) {
                element.scrollLeft = element.scrollLeft + scrollDis;
            } else {
                element.scrollLeft = element.scrollLeft - scrollDis;
            }
        }
    }
    private clickEventHandler(e: Event): void {
        this.contentScrolling(this.scrollStep , <HTMLElement>e.target);
    }
    private touchScrollHandler(e: ScrollEventArgs): void {
            let ele: HTMLElement = this.scrollEle;
            let distance: number;
            distance = e.distanceX;
            if (this.browser === 'edge') {
                distance = - distance;
            }
            if (e.scrollDirection === 'Left') {
                ele.scrollLeft = ele.scrollLeft + distance;
            } else if (e.scrollDirection === 'Right') {
                ele.scrollLeft = ele.scrollLeft - distance;
            }
    }
    private scrollEventHandler(e: Event): void {
        let target: HTMLElement = <HTMLElement>e.target;
        let width: number = target.offsetWidth;
        let navElement: Element = (<Element>this.element.firstChild.firstChild);
        if (navElement) {
            let scrollLeft: number = target.scrollLeft;
            if (scrollLeft <= 0) {
                scrollLeft = -scrollLeft;
            }
            if (scrollLeft === 0) {
                if ((!this.element.classList.contains(CLASS_RTL) || this.browserCheck) || this.browser === 'edge') {
                    classList(navElement as Element, [CLASS_NAVRIGHTARROW], [CLASS_NAVLEFTARROW]);
                } else {
                    classList(navElement as Element, [CLASS_NAVLEFTARROW], [CLASS_NAVRIGHTARROW]);
                }
            } else if (Math.ceil(width + scrollLeft) >= target.scrollWidth) {
                if ((!this.element.classList.contains(CLASS_RTL) || this.browserCheck) || this.browser === 'edge') {
                    classList(navElement as Element, [CLASS_NAVLEFTARROW], [CLASS_NAVRIGHTARROW]);
                } else {
                    classList(navElement as Element, [CLASS_NAVRIGHTARROW], [CLASS_NAVLEFTARROW]);
                }
            } else {
                return;
            }
            return;
        } else {
            return;
        }
    }
    /**
     * Gets called when the model property changes.The data that describes the old and new values of property that changed.
     * @param  {HScrollModel} newProp
     * @param  {HScrollModel} oldProp
     * @returns void
     * @private
     */
    public onPropertyChanged(newProp: HScrollModel, oldProp: HScrollModel): void {
        for (let prop of Object.keys(newProp)) {
            switch (prop) {
                case 'scrollStep':
                    break;
                case 'enableRtl':
                    newProp.enableRtl ? this.element.classList.add(CLASS_RTL) : this.element.classList.remove(CLASS_RTL);
                    break;
            }
        }
    }
}
