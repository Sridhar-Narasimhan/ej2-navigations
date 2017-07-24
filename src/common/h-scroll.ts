import { Touch, ScrollEventArgs, TouchEventArgs, Component, EventHandler } from '@syncfusion/ej2-base';
import { NotifyPropertyChanges, INotifyPropertyChanged, Property, Browser } from '@syncfusion/ej2-base';
import { createElement as buildTag, detach, classList } from '@syncfusion/ej2-base/dom';
import { getUniqueID } from '@syncfusion/ej2-base/util';
import { HScrollModel } from './h-scroll-model';

const CLS_ROOT: string = 'e-hscroll';
const CLS_RTL : string = 'e-rtl';
const CLS_HSCROLLBAR : string = 'e-hscroll-bar';
const CLS_HSCROLLCON : string = 'e-hscroll-content';
const CLS_NAVARROW : string = 'e-nav-arrow';
const CLS_NAVRIGHTARROW : string = 'e-nav-right-arrow';
const CLS_NAVLEFTARROW : string = 'e-nav-left-arrow';
const CLS_HSCROLLNAV : string = 'e-hor-nav';

type HTEle = HTMLElement;

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
    private scrollEle: HTEle;
    private scrollItems: HTEle;
    private uniqueId : boolean;
    private timeout: number;
    private browser: string;
    private browserCheck: boolean;
    private ieCheck: boolean;
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
        let element: HTEle = this.element;
        this.ieCheck = this.browser === 'edge' || this.browser === 'msie';
        this.initialize();
        if (element.id === '') {
            element.id = getUniqueID('hscroll');
            this.uniqueId = true;
        }
        element.style.display = 'block';
        if (this.enableRtl) {
            element.classList.add(CLS_RTL);
        }
    }
    /**
     * To Initialize the control rendering
     * @private
     */
    protected render(): void {
        this.createNavIcon(this.element, CLS_NAVRIGHTARROW + ' ' + CLS_NAVARROW);
    }
    /**
     * Initializes a new instance of the HScroll class.
     * @param options  - Specifies HScroll model properties as options.
     * @param element  - Specifies the element for which horizontal scrolling applies.
     */
    constructor(options?: HScrollModel, element?: string | HTMLElement) {
        super(options, <HTEle | string>element);
    }
    private initialize(): void {
        let scrollEle: HTEle = buildTag('div', { className: CLS_HSCROLLCON });
        let scrollDiv: HTEle = buildTag('div', { className: CLS_HSCROLLBAR });
        let ele: HTEle = this.element;
        let innerEle: HTEle[] = [].slice.call(ele.children);
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
     * Removes the control from the DOM and also removes all its related events.
     * @returns void
     */
    public destroy(): void {
        let ele: HTEle = this.element;
        ele.style.display = '';
        ele.classList.remove(CLS_ROOT);
        let nav: HTEle = <HTEle>ele.querySelector('#' + ele.id + '_nav.e-' + ele.id + '_nav');
        EventHandler.remove(nav, 'click', this.clickEventHandler);
        for (let elem of [].slice.call(this.scrollItems.children)) {
            ele.appendChild(elem);
        }
        if (this.uniqueId) {
           this.element.removeAttribute('id'); }
        detach(this.scrollEle);
        nav.parentElement.removeChild(nav);
        EventHandler.remove(this.scrollEle, 'scroll', this.scrollHandler);
        this.touchModule.destroy();
        this.touchModule = null;
        super.destroy();
    }
    private createNavIcon(element: HTEle, classList: string): void {
        let id: string = element.id.concat('_nav');
        let className: string = 'e-' + element.id.concat('_nav ' + CLS_HSCROLLNAV);
        let nav: HTEle = buildTag('div', { id: id, className: className });
        let navItem: HTEle = buildTag('div', { className: classList + ' e-icons' });
        nav.appendChild(navItem);
        nav.setAttribute('tabindex', '0');
        element.insertBefore(nav, element.firstChild);
        EventHandler.add(this.scrollEle, 'scroll', this.scrollHandler, this);
        new Touch(nav, {tapHold: this.tabHoldHandler.bind(this) });
        if (this.ieCheck ) {
          nav.classList.add('e-ie-align'); }
        nav.addEventListener('mouseup', this.repeatScroll.bind(this));
        nav.addEventListener('touchend', this.repeatScroll.bind(this));
        nav.addEventListener('contextmenu', (e: Event) => {
            e.preventDefault();
        });
        EventHandler.add(nav, 'click', this.clickEventHandler, this);
        this.touchModule = new Touch(element, { scroll: this.touchHandler.bind(this) });
    }
    private repeatScroll(e: Event ): void {
      clearInterval (this.timeout);
    }
    private tabHoldHandler(e: TapEventArgs): void {
       let trgt: HTEle = e.originalEvent.target as HTEle;
       trgt = this.contains(trgt, CLS_HSCROLLNAV) ? <HTEle>trgt.firstElementChild : trgt ;
       let timeoutFun: Function = () => {
       let scrollDis: number = 10;
       this.eleScrolling(scrollDis, trgt);
       };
       this.timeout = setInterval(
           () => {
              timeoutFun();
        }, 50);
    }
    private contains(ele: HTEle, className: string): boolean {
     return ele.classList.contains(className);
    }
    private eleScrolling(scrollDis: number, trgt: HTEle ): void {
        let element: HTEle = this.scrollEle;
        let rootEle: HTEle = this.element;
        let classList: DOMTokenList = trgt.classList;
        if (classList.contains(CLS_HSCROLLNAV)) {
            classList = this.element.querySelector('.' + CLS_NAVARROW).classList;
        }
        if (this.contains(rootEle, CLS_RTL) && this.browserCheck) {
            scrollDis = - scrollDis;
        }
        let scrlLeft: number = element.scrollLeft;
        if ((!this.contains(rootEle, CLS_RTL) || this.browserCheck)  || this.ieCheck) {
            if (classList.contains(CLS_NAVRIGHTARROW)) {
                element.scrollLeft = scrlLeft + scrollDis;
            } else {
                element.scrollLeft = scrlLeft - scrollDis;
            }
        } else {
            if (classList.contains(CLS_NAVLEFTARROW)) {
                element.scrollLeft = scrlLeft + scrollDis;
            } else {
                element.scrollLeft = scrlLeft - scrollDis;
            }
        }
    }
    private clickEventHandler(e: Event): void {
        this.eleScrolling(this.scrollStep , <HTEle>e.target);
    }
    private touchHandler(e: ScrollEventArgs): void {
            let ele: HTEle = this.scrollEle;
            let distance: number;
            distance = e.distanceX;
            if ((this.ieCheck)  && this.contains(this.element, CLS_RTL)) {
                distance = - distance;
            }
            if (e.scrollDirection === 'Left') {
                ele.scrollLeft = ele.scrollLeft + distance;
            } else if (e.scrollDirection === 'Right') {
                ele.scrollLeft = ele.scrollLeft - distance;
            }
    }
    private scrollHandler(e: Event): void {
        let target: HTEle = <HTEle>e.target;
        let width: number = target.offsetWidth;
        let rootEle: HTEle = this.element;
        let navEle: Element = (<Element>this.element.firstChild.firstChild);
        if (navEle) {
            let scrollLeft: number = target.scrollLeft;
            if (scrollLeft <= 0) {
                scrollLeft = -scrollLeft;
            }
            if (scrollLeft === 0) {
                if ((!this.contains(rootEle, CLS_RTL) || this.browserCheck) || this.ieCheck) {
                    classList(navEle, [CLS_NAVRIGHTARROW], [CLS_NAVLEFTARROW]);
                } else {
                    classList(navEle, [CLS_NAVLEFTARROW], [CLS_NAVRIGHTARROW]);
                }
            } else if (Math.ceil(width + scrollLeft) >= target.scrollWidth) {
                if ((!this.contains(rootEle, CLS_RTL) || this.browserCheck) || this.ieCheck) {
                    classList(navEle, [CLS_NAVLEFTARROW], [CLS_NAVRIGHTARROW]);
                } else {
                    classList(navEle, [CLS_NAVRIGHTARROW], [CLS_NAVLEFTARROW]);
                }
            }
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
                    newProp.enableRtl ? this.element.classList.add(CLS_RTL) : this.element.classList.remove(CLS_RTL);
                    break;
            }
        }
    }
}
