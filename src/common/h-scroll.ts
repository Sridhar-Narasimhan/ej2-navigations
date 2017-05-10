import { Component } from '@syncfusion/ej2-base/component';
import { Touch, ScrollEventArgs, TouchEventArgs } from '@syncfusion/ej2-base/touch';
import { EventHandler } from '@syncfusion/ej2-base/event-handler';
import { NotifyPropertyChanges, INotifyPropertyChanged, Property } from '@syncfusion/ej2-base/notify-property-change';
import { createElement } from '@syncfusion/ej2-base/dom';
import { getUniqueID } from '@syncfusion/ej2-base/util';
import { HScrollModel } from './h-scroll-model';
import { Browser } from '@syncfusion/ej2-base/browser';

const CLASSNAMES: ClassNames = {
    ROOT: 'e-hscroll',
    RTL: 'e-rtl',
    HSCROLLBAR: 'e-hscroll-bar',
    HSCROLLCON: 'e-hscroll-content',
    NAVARROW: 'e-nav-arrow',
    NAVRIGHTARROW: 'e-nav-right-arrow',
    NAVLEFTARROW: 'e-nav-left-arrow',
    HSCROLLNAV: 'e-hor-nav'
};
interface ClassNames {
    ROOT: string;
    HSCROLLBAR: string;
    HSCROLLCON: string;
    HSCROLLNAV: string;
    NAVARROW: string;
    NAVRIGHTARROW: string;
    NAVLEFTARROW: string;
    RTL: string;
}
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
    private innerEle: HTMLElement;
    private touchModule: Touch;
    private scrollEle: HTMLElement;
    private scrollItems: HTMLElement;
    private uniqueId : boolean;
    private timeout: number;
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
        this.initialize();
        if (this.element.id === '') {
            this.element.id = getUniqueID('hscroll');
            this.uniqueId = true;
        }
        this.element.style.display = 'block';
        if (this.enableRtl) {
            this.element.classList.add(CLASSNAMES.RTL);
        }
    }
    /**
     * To Initialize the control rendering
     * @private
     */
    protected render(): void {
        this.createNavigationIcon(this.element, CLASSNAMES.NAVRIGHTARROW + ' ' + CLASSNAMES.NAVARROW);
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
        let scrollEle: HTMLElement = createElement('div', { className: CLASSNAMES.HSCROLLCON });
        let scrollDiv: HTMLElement = createElement('div', { className: CLASSNAMES.HSCROLLBAR });
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
     * Removes the widget safely from DOM and also detaches all its related event handlers.
     * @returns void
     */
    public destroy(): void {
        let ele: HTMLElement = this.element;
        ele.style.display = '';
        ele.classList.remove(CLASSNAMES.ROOT);
        let nav: HTMLElement = <HTMLElement>ele.querySelector('#' + ele.id + '_nav.e-' + ele.id + '_nav');
        EventHandler.remove(nav, 'click', this.clickEventHandler);
        for (let elem of [].slice.call(this.scrollItems.children)) {
            ele.appendChild(elem);
        }
        if (this.uniqueId) {
           this.element.removeAttribute('id'); }
        this.scrollEle.remove();
        nav.parentElement.removeChild(nav);
        EventHandler.remove(this.scrollEle, 'scroll', this.scrollEventHandler);
        this.touchModule.destroy();
        this.touchModule = null;
        super.destroy();
    }
    private createNavigationIcon(element: HTMLElement, classList: string): void {
        let id: string = element.id.concat('_nav');
        let className: string = 'e-' + element.id.concat('_nav ' + CLASSNAMES.HSCROLLNAV);
        let nav: HTMLElement = createElement('div', { id: id, className: className });
        let navItem: HTMLElement = createElement('div', { className: classList + ' e-icons' });
        nav.appendChild(navItem);
        nav.setAttribute('tabindex', '0');
        element.insertBefore(nav, element.firstChild);
        EventHandler.add(this.scrollEle, 'scroll', this.scrollEventHandler, this);
        let tchObj: Touch = new Touch(nav, {taphold: this.tabHoldHandler.bind(this) });
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
       trgt = trgt.classList.contains(CLASSNAMES.HSCROLLNAV) ? <HTMLElement>trgt.firstElementChild : trgt ;
       let timeoutFun: Function = () => {
       let element: HTMLElement = this.scrollEle;
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
        if (classList.contains(CLASSNAMES.HSCROLLNAV)) {
            classList = this.element.querySelector('.' + CLASSNAMES.NAVARROW).classList;
        }
        if (this.element.classList.contains(CLASSNAMES.RTL) && Browser.info.name === 'mozilla') {
            scrollDis = - scrollDis;
        }
        if (!this.element.classList.contains(CLASSNAMES.RTL) || Browser.info.name === 'mozilla') {
            if (classList.contains(CLASSNAMES.NAVRIGHTARROW)) {
                element.scrollLeft = element.scrollLeft + scrollDis;
            } else {
                element.scrollLeft = element.scrollLeft - scrollDis;
            }
        } else {
            if (classList.contains(CLASSNAMES.NAVLEFTARROW)) {
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
            if (e.scrollDirection === 'Left') {
                ele.scrollLeft = ele.scrollLeft + distance;
            } else {
                ele.scrollLeft = ele.scrollLeft - distance;
            }
    }
    private scrollEventHandler(e: Event): void {
        let target: HTMLElement = <HTMLElement>e.target;
        let width: number = target.offsetWidth;
        let navElement: HTMLElement = (<HTMLElement>this.element.firstChild);
        let scrollVal: number = (this.element.clientWidth + this.element.scrollLeft - navElement.offsetWidth);
        if (navElement.firstChild) {
            let navClassList: DOMTokenList = (<HTMLElement>navElement.firstChild).classList;
            let scrollLeft: number = target.scrollLeft;
            if (scrollLeft <= 0) {
                scrollLeft = -scrollLeft;
            }
            if (scrollLeft === 0) {
                if (!this.element.classList.contains(CLASSNAMES.RTL) || Browser.info.name === 'mozilla') {
                    navClassList.add(CLASSNAMES.NAVRIGHTARROW); navClassList.remove(CLASSNAMES.NAVLEFTARROW);
                } else {
                    navClassList.add(CLASSNAMES.NAVLEFTARROW); navClassList.remove(CLASSNAMES.NAVRIGHTARROW);
                }
            } else if (Math.ceil(width + scrollLeft) >= target.scrollWidth) {
                if (!this.element.classList.contains(CLASSNAMES.RTL) || Browser.info.name === 'mozilla') {
                    navClassList.add(CLASSNAMES.NAVLEFTARROW); navClassList.remove(CLASSNAMES.NAVRIGHTARROW);
                } else {
                    navClassList.add(CLASSNAMES.NAVRIGHTARROW); navClassList.remove(CLASSNAMES.NAVLEFTARROW);
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
                    newProp.enableRtl ? this.element.classList.add(CLASSNAMES.RTL) : this.element.classList.remove(CLASSNAMES.RTL);
                    break;
            }
        }
    }
}
