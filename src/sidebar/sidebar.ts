import { Component, formatUnit, EventHandler, Event, isNullOrUndefined } from '@syncfusion/ej2-base';
import { Property, EmitType, NotifyPropertyChanges, INotifyPropertyChanged, Browser } from '@syncfusion/ej2-base';
import { setStyleAttribute as setStyle, addClass, removeClass, createElement, Touch, SwipeEventArgs } from '@syncfusion/ej2-base';
import { SidebarModel } from './sidebar-model';

const CONTROL: string = 'e-control';
const ROOT: string = 'e-sidebar';
const DOCKER: string = 'e-dock';
const CLOSE: string = 'e-close';
const OPEN: string = 'e-open';
const DEFAULTBACKDROP: string = 'e-sidebar-overlay';
const CONTEXTBACKDROP: string = 'e-backdrop';
const RTL: string = 'e-rtl';
const RIGHT: string = 'e-right';
const LEFT: string = 'e-left';
const OVER: string = 'e-over';
const PUSH: string = 'e-push';
const SLIDE: string = 'e-slide';
const VISIBILITY: string = 'e-visibility';
const CONTENT: string = 'e-content';
const DISABLEANIMATION: string = 'e-disable-animation';


/**
 * Specifies the Sidebar types.
 */
export type SidebarType = 'slide' | 'over' | 'push' | 'auto';
/**
 * Specifies the Sidebar positions.
 */
export type SidebarPosition = 'left' | 'right';


@NotifyPropertyChanges
export class Sidebar extends Component<HTMLElement> implements INotifyPropertyChanged {

    private barWidth: Number;
    private eventArguments: EventArgs;
    private modal: HTMLElement;
    private swipeContentObject: Touch;
    private swipeElementObject: Touch;

    /**
     * Specifies the size of the Sidebar in dock state.
     * @default 'auto'.
     */
    @Property('auto')
    public dockSize: string | number;
    /**
     * Specifies the media query whether the sidebar need to be opened when the resolution meets
     * @default null.
     */
    @Property(null)
    public mediaQuery: MediaQueryList;
    /**
     * Specifies the docking state of the component.
     * @default false.
     */
    @Property(false)
    public enableDock: boolean;
    /**
     * Enables the expand or collapse while swiping in touch devices.
     * @default true.
     */
    @Property(true)
    public enableGestures: boolean;
    /**
     * Specifies the Sidebar in RTL state.
     * @default false.
     */
    @Property(false)
    public enableRtl: boolean;
    /**
     * Specifies the Sidebar animation to be enabled or not.
     * @default true.
     */
    @Property(true)
    public animation: boolean;
    /**
     * Specifies the height of the Sidebar.
     * @default 'auto'.
     */
    @Property('auto')
    public height: string | number;
    /**
     * Specifies whether the Sidebar need to be closed or not when document area is clicked.
     * @default true.
     */
    @Property(true)
    public closeOnDocumentClick: boolean;
    /**
     * Specifies the position of the Sidebar (left/right) corresponding to the primary content.
     * @default 'left'.
     */
    @Property('left')
    public position: SidebarPosition;
    /**
     * Specifies the element position of the Sidebar inside any element.
     * @default null.
     */
    @Property(null)
    public contextTo: HTMLElement;
    /**
     * Specifies the whether to apply overlay options to primary content when the Sidebar is in an open state.
     * @default false.
     */
    @Property(false)
    public showBackdrop: boolean;
    /**
     * Specifies the expanding types of the Sidebar.
     * @default 'auto'.
     */
    @Property('auto')
    public type: SidebarType;
    /**
     * Specifies the width of the Sidebar.
     * @default 'auto'.
     */
    @Property('auto')
    public width: string | number;
    /**
     * Specifies the z-index of the Sidebar.
     * @default 1000.
     */
    @Property(1000)
    public zIndex: string | number;
    /**
     * Triggers the event when component is created.
     * @event 
     */
    @Event()
    public created: EmitType<Event>;
    /**
     * Triggers when component is closed.
     *  @event 
     */
    @Event()
    public close: EmitType<Event>;
    /**
     * Triggers when component is opened.
     *  @event 
     */
    @Event()
    public open: EmitType<Event>;
    /**
     * Triggers when component is show or hide.
     *  @event 
     */
    @Event()
    public change: EmitType<Event>;
    /**
     * Triggers when component gets destroyed.
     *  @event 
     */
    @Event()
    public destroyed: EmitType<Event>;

    constructor(options?: SidebarModel, element?: string | HTMLElement) {
        super(options, element);
    }
    protected preRender(): void {
        this.setWidth();
        this.barWidth = this.element.getBoundingClientRect().width;
    }
    protected render(): void {
        this.initialize();
        this.wireEvents();
    }

    protected initialize(): void {
        this.setContext();
        this.addClass();
        this.setZindex();
        if (this.enableDock) {
            this.setDock();
        }
        this.setMediaQuery();
        this.changeType(this.type);
    }

    private setContext(): void {
        if (this.contextTo) {
            this.contextTo.insertAdjacentElement('afterbegin', this.element);
            addClass([this.element], 'e-context-absolute');
            addClass([this.contextTo], 'e-context-relative');
        }
    }

    private setWidth(): void {
        if (this.enableDock && this.position === 'left') {
            setStyle(this.element, { 'width': formatUnit(this.dockSize) });
        } else if (this.enableDock && this.position === 'right') {
            setStyle(this.element, { 'width': formatUnit(this.dockSize) });
        } else if (!this.enableDock) {
            setStyle(this.element, { 'width': formatUnit(this.width) });
        }

    }
    private setZindex(): void {
        setStyle(this.element, { 'z-index': '' + this.zIndex });
    }

    private addClass(): void {
        addClass([this.element.nextElementSibling], CONTENT);
        if (!this.enableDock && this.type !== 'auto') {
            addClass([this.element], [VISIBILITY]);
        }
        removeClass([this.element], [OPEN, CLOSE, RIGHT, LEFT, SLIDE, PUSH, OVER]);
        this.element.classList.add(ROOT);
        addClass([this.element], (this.position === 'right') ? RIGHT : LEFT);
        if (this.type === 'auto' && !Browser.isDevice && !this.enableDock) {
            addClass([this.element], OPEN);
        } else {
            addClass([this.element], CLOSE);
        }
    }
    private destroyBackDrop(): void {
        if (this.contextTo && this.showBackdrop) {
            let sibling: HTMLElement = <HTMLElement>this.element.nextElementSibling;
            removeClass([sibling], CONTEXTBACKDROP);
        } else if (this.showBackdrop && this.modal) {
            this.modal.style.display = 'none';
            this.modal.outerHTML = '';
            this.modal = null;
        }
    }
    /** 
     * Hide the Sidebar component.
     * @returns void 
     */
    public hide(): void {
        if (this.element.classList.contains(CLOSE)) {
            return;
        }
        if (this.element.classList.contains(OPEN)) {
            this.eventArguments = { name: 'change', element: this.element };
            this.trigger('change', this.eventArguments);
        }
        addClass([this.element], CLOSE);
        removeClass([this.element], OPEN);
        this.enableDock ? setStyle(this.element, { 'width': formatUnit(this.dockSize) }) :
            setStyle(this.element, { 'width': formatUnit(this.width) });
        this.barWidth = this.element.getBoundingClientRect().width;
        this.changeType(this.type);
        let sibling: HTMLElement = <HTMLElement>this.element.nextElementSibling;
        if (!this.enableDock && sibling) {
            sibling.style.transform = 'translateX(' + 0 + 'px)';
            sibling.style.margin = '0px';
        }
        this.setDock();
        this.eventArguments = { name: 'change', element: this.element };
        this.trigger('close', this.eventArguments);
        this.destroyBackDrop();
        if (this.closeOnDocumentClick) {
            EventHandler.remove(document, 'mousedown', this.documentclickHandler);
        }
        this.setAnimation();
    }
    /** 
     * Shows the Sidebar component.
     * @returns void 
     */
    public show(): void {
        removeClass([this.element], VISIBILITY);
        if (this.element.classList.contains(OPEN)) {
            return;
        }
        if (this.element.classList.contains(CLOSE)) {
            this.eventArguments = { name: 'open', element: this.element };
            this.trigger('change', this.eventArguments);
        }
        addClass([this.element], OPEN);
        setStyle(this.element, { 'transform': '' });
        removeClass([this.element], CLOSE);
        setStyle(this.element, { 'width': formatUnit(this.width) });
        this.barWidth = this.element.getBoundingClientRect().width;
        this.changeType(this.type);
        this.createBackDrop();
        this.eventArguments.name = 'open';
        this.eventArguments.element = this.element;
        this.trigger('open', this.eventArguments);
        if (this.closeOnDocumentClick) {
            EventHandler.add(document, 'mousedown', this.documentclickHandler, this);
        }
        this.setAnimation();
    }

    private setAnimation(): void {
        if (this.animation) {
            removeClass([this.element], DISABLEANIMATION);
        } else {
            addClass([this.element], DISABLEANIMATION);
        }
    }

    private setDock(): void {
        if (this.enableDock && this.position === 'left') {
            setStyle(this.element, { 'transform': 'translateX(' + -100 + '%) translateX(' + formatUnit(this.dockSize) + ')' });
        } else if (this.enableDock && this.position === 'right') {
            setStyle(this.element, { 'transform': 'translateX(' + 100 + '%) translateX(' + '-' + formatUnit(this.dockSize) + ')' });
        }
        if (this.element.classList.contains(CLOSE) && this.enableDock) {
            setStyle(this.element, { 'width': formatUnit(this.dockSize) });
        }
    }
    private createBackDrop(): void {
        if (this.contextTo && this.showBackdrop) {
            let sibling: HTMLElement = <HTMLElement>this.element.nextElementSibling;
            addClass([sibling], CONTEXTBACKDROP);
        } else if (this.showBackdrop && !this.modal && this.isOpen()) {
            this.modal = createElement('div');
            this.modal.className = DEFAULTBACKDROP;
            this.modal.style.display = 'block';
            document.body.appendChild(this.modal);
        }
    }

    protected getPersistData(): string {
        return this.addOnPersist(['type', 'position']);
    }

    /**
     * Returns the current module name.
     * @returns string
     * @private
     */
    protected getModuleName(): string {
        return 'sidebar';
    }

    /** 
     * Shows or hides the Sidebar based on the current state.
     * @returns void 
     */
    public toggle(e?: Event): void {
        this.element.classList.contains(OPEN) ? this.hide() : this.show();
    }

    /** 
     * Specifies the current state of the Sidebar component.
     * @returns boolean 
     */

    public isOpen(): boolean {
        return this.element.classList.contains(OPEN) ? true : false;
    }
    private setMediaQuery(): void {
        if (this.mediaQuery && this.mediaQuery.matches) {
            this.show();
        } else if (this.mediaQuery && this.isOpen()) {
            this.hide();
        }
    }
    protected resize(e: Event): void {
        if (this.type === 'auto') {
            if (Browser.isDevice) {
                addClass([this.element], OVER);
            } else {
                addClass([this.element], PUSH);
            }
        }
        this.setMediaQuery();

    }

    private documentclickHandler(e: MouseEvent): void {
        if ((<HTMLElement>e.target).closest('.' + CONTROL + '' + '.' + ROOT)) {
            return;
        }
        this.hide();
    }

    private enableGestureHandler(args: SwipeEventArgs): void {
        if (this.position === 'left' && args.swipeDirection === 'Right' &&
            (args.startX <= 20 && args.distanceX >= 50 && args.velocity >= 0.5)) {
            this.show();
        } else if (this.position === 'left' && args.swipeDirection === 'Left') {
            this.hide();
        } else if (this.position === 'right' && args.swipeDirection === 'Right') {
            this.hide();
        } else if (this.position === 'right' && args.swipeDirection === 'Left'
            && (window.innerWidth - args.startX <= 20 && args.distanceX >= 50 && args.velocity >= 0.5)) {
            this.show();
        }
    }
    private setEnableGestures(): void {
        if (this.enableGestures) {
            this.swipeContentObject = new Touch(document.body, { swipe: this.enableGestureHandler.bind(this) });
            this.swipeElementObject = new Touch(<HTMLElement>this.element, { swipe: this.enableGestureHandler.bind(this) });
        } else {
            if (this.swipeContentObject && this.swipeElementObject) {
                this.swipeContentObject.destroy();
                this.swipeElementObject.destroy();
            }
        }
    }
    private wireEvents(): void {
        this.setEnableGestures();
        window.addEventListener('resize', this.resize.bind(this));
    }
    private unWireEvents(): void {
        window.removeEventListener('resize', this.resize.bind(this));
        EventHandler.remove(document, 'mousedown', this.documentclickHandler);
        if (this.swipeContentObject) { this.swipeContentObject.destroy(); }
        if (this.swipeElementObject) { this.swipeElementObject.destroy(); }
    }
    public onPropertyChanged(newProp: SidebarModel, oldProp: SidebarModel): void {
        for (let prop of Object.keys(newProp)) {
            switch (prop) {
                case 'width':
                    this.setWidth();
                    if (!this.isOpen()) {
                        this.setDock();
                    }
                    break;
                case 'animation':
                    this.setAnimation();
                    break;
                case 'type':
                    removeClass([this.element], [VISIBILITY]);
                    this.addClass();
                    this.changeType(this.type);
                    break;
                case 'position':
                    this.element.style.transform = '';
                    if (this.position === 'right') {
                        removeClass([this.element], LEFT);
                        addClass([this.element], RIGHT);
                    } else {
                        removeClass([this.element], RIGHT);
                        addClass([this.element], LEFT);
                    }
                    this.changeType(this.type);
                    break;
                case 'showBackdrop':
                    if (this.showBackdrop) { this.createBackDrop(); } else {
                        if (this.modal) {
                            this.modal.style.display = 'none';
                            this.modal.outerHTML = '';
                            this.modal = null;
                        }
                    }
                    break;
                case 'enableDock':
                    if (!this.isOpen()) {
                        this.setDock();
                    }
                    break;
                case 'zIndex':
                    this.setZindex();
                    break;
                case 'mediaQuery':
                    this.setMediaQuery();
                    break;
                case 'enableGestures':
                    this.setEnableGestures();
                    break;
            }
        }
    }

    protected changeType(type?: string): void {
        this.setZindex();
        if (this.enableDock) {
            addClass([this.element], DOCKER);
        }
        let sibling: HTMLElement = <HTMLElement>this.element.nextElementSibling;
        if (sibling) {
            sibling.style.transform = 'translateX(' + 0 + 'px)';
            sibling.style.margin = '0px';
        }
        let margin: string = this.position === 'left' ? '0px 0px 0px ' + this.barWidth + 'px' : '0px ' + this.barWidth + 'px 0px 0px';
        let tempWidth: Number = this.position === 'left' ? this.barWidth : - (this.barWidth);
        removeClass([this.element], [PUSH, OVER, SLIDE]);
        switch (type) {
            case 'push':
                addClass([this.element], [PUSH]);
                if (sibling && (this.enableDock || this.element.classList.contains(OPEN))) {
                    sibling.style.margin = margin;
                } break;
            case 'slide':
                addClass([this.element], [SLIDE]);
                if (sibling && (this.enableDock || this.element.classList.contains(OPEN))) {
                    sibling.style.transform = 'translateX(' + tempWidth + 'px)';
                } break;
            case 'over':
                addClass([this.element], [OVER]);
                if (this.enableDock && this.element.classList.contains(CLOSE)) {
                    if (sibling) {
                        sibling.style.margin = margin;
                    }
                }
                break;
            case 'auto':
                if (Browser.isDevice) {
                    if (sibling && (this.enableDock) && !this.isOpen()) {
                        sibling.style.margin = margin;
                        addClass([this.element], PUSH);
                    } else {
                        addClass([this.element], OVER);
                    }
                } else {
                    addClass([this.element], PUSH);
                    if (sibling && (this.enableDock || this.element.classList.contains(OPEN))) {
                        sibling.style.margin = margin;
                    }
                }
        }
    }

    /**
     * Removes the control from the DOM and removes all its related events
     * @returns void
     */
    public destroy(): void {
        super.destroy();
        removeClass([this.element], [OPEN, CLOSE, PUSH, SLIDE, OVER, LEFT, RIGHT]);
        if (this.contextTo) {
            removeClass([this.element], 'e-context-absolute');
            removeClass([this.contextTo], 'e-context-relative');
        }
        this.destroyBackDrop();
        this.element.style.width = '';
        this.element.style.zIndex = '';
        this.element.style.transform = '';
        if (!isNullOrUndefined((<HTMLElement>this.element.nextElementSibling))) {
            (<HTMLElement>this.element.nextElementSibling).style.margin = '';
            (<HTMLElement>this.element.nextElementSibling).style.transform = '';
        }
        this.unWireEvents();
    }
}
/**
 * Defines the event arguments for the event.
 * @returns void
 */

export interface EventArgs {
    name: string;
    element: HTMLElement;
}