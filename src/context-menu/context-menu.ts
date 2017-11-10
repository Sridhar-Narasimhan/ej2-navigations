import { Component, CreateBuilder, Property, ChildProperty, NotifyPropertyChanges, INotifyPropertyChanged } from '@syncfusion/ej2-base';
import { Event, EventHandler, EmitType, BaseEventArgs, KeyboardEvents, KeyboardEventArgs, Touch, TapEventArgs } from '@syncfusion/ej2-base';
import { attributes, Animation, AnimationOptions, TouchEventArgs, MouseEventArgs } from '@syncfusion/ej2-base';
import { Browser, Collection, setValue, getValue, getUniqueID, getInstance } from '@syncfusion/ej2-base';
import { select, selectAll, closest, createElement, detach, append, rippleEffect, isVisible } from '@syncfusion/ej2-base';
import { ListBase, ListBaseOptions } from '@syncfusion/ej2-lists';
import { calculatePosition, OffsetPosition, isCollide, fit } from '@syncfusion/ej2-popups';
import { ContextMenuModel, MenuItemModel } from './context-menu-model';
import { ContextMenuHelper } from './context-menu-builder';

const DOWNARROW: string = 'downarrow';

const ENTER: string = 'enter';

const ESCAPE: string = 'escape';

const FOCUSED: string = 'e-focused';

const HEADER: string = 'e-menuheader';

const LEFTARROW: string = 'leftarrow';

const RIGHTARROW: string = 'rightarrow';

const RTL: string = 'e-rtl';

const SELECTED: string = 'e-selected';

const SEPARATOR: string = 'e-separator';

const UPARROW: string = 'uparrow';

const WRAPPER: string = 'e-contextmenu-wrapper';

const CARET: string = 'e-caret';

const ITEM: string = 'e-menu-item';

const DISABLED: string = 'e-disabled';

const HIDE: string = 'e-menu-hide';

const ICONS: string = 'e-icons';

/**
 * Menu animation effects
 */
export type MenuEffect = 'None' | 'SlideDown' | 'ZoomIn';

/**
 * Specifies context menu items.
 */
export class MenuItem extends ChildProperty<MenuItem> {
    /**
     * Defines class/multiple classes separated by a space for the menu Item that is used to include an icon.
     * Menu Item can include font icon and sprite image.
     * @default ''
     */
    @Property('')
    public iconCss: string;

    /**
     * Specifies id for menu item.
     * @default ''
     */
    @Property('')
    public id: string;

    /**
     * Specifies separator between menu items. Separator are horizontal lines used to group menu items.
     * @default false
     */
    @Property(false)
    public separator: boolean;

    /**
     * Specifies the sub menu items which is array of MenuItem model.
     * @default []
     */
    @Collection<MenuItemModel>([], MenuItem)
    public items: MenuItemModel[];

    /**
     * Specifies text for menu item.
     * @default ''
     */
    @Property('')
    public text: string;

    /**
     * Specifies url for menu item which creates the anchor link to navigate to url provided.
     * @default ''
     */
    @Property('')
    public url: string;
}

/**
 * ContextMenu is a graphical user interface that appears on user right click / touch hold operation.
 * ```html
 * <div id = 'target'></div>
 * <ul id = 'contextmenu'></ul>
 * ```
 * ```typescript
 * <script>
 * var contextMenuObj = new ContextMenu({items: [{ text: 'Cut' }, { text: 'Copy' },{ text: 'Paste' }], target: '#target'});
 * </script>
 * ```
 */
@NotifyPropertyChanges
export class ContextMenu extends Component<HTMLUListElement> implements INotifyPropertyChanged {
    private animation: Animation = new Animation({});
    private navIdx: number[] = [];
    private isTapHold: boolean = false;
    /**
     * Defines class/multiple classes separated by a space in the ContextMenu wrapper.
     * ContextMenu customization can be achieved using this.
     * @default ''
     */
    @Property('')
    public cssClass: string;

    /**
     * Specifies the filter selector for elements inside the target in which the context menu will be opened.
     * @default ''
     */
    @Property('')
    public filter: string;

    /**
     * Specifies whether to show sub menu on click or not.
     * When set to true, the sub menu will open only on mouse click.
     * @default false
     */
    @Property(false)
    public showItemOnClick: boolean;

    /**
     * Specifies menu items with its properties which will be rendered as Context Menu.
     * @default []
     */
    @Collection<MenuItemModel>([], MenuItem)
    public items: MenuItemModel[];

    /**
     * Specifies target element selector in which ContextMenu should be opened.
     * @default ''
     */
    @Property('')
    public target: string;

    /**
     * Specifies the animation settings for sub menu open.
     * @default { duration: 400, easing: 'ease', effect: 'SlideDown' }
     */
    @Property<MenuAnimationSettings>({ duration: 400, easing: 'ease', effect: 'SlideDown' })
    public animationSettings: MenuAnimationSettings;

    /**
     * Triggers while rendering each menu item.
     * @event
     */
    @Event()
    public beforeItemRender: EmitType<MenuEventArgs>;

    /**
     * Triggers before opening the menu item.
     * @event
     */
    @Event()
    public beforeOpen: EmitType<BeforeOpenCloseMenuEventArgs>;

    /**
     * Triggers while opening the menu item.
     * @event
     */
    @Event()
    public onOpen: EmitType<OpenCloseMenuEventArgs>;

    /**
     * Triggers before closing the menu.
     * @event
     */
    @Event()
    public beforeClose: EmitType<BeforeOpenCloseMenuEventArgs>;

    /**
     * Triggers while closing the menu.
     * @event
     */
    @Event()
    public onClose: EmitType<OpenCloseMenuEventArgs>;

    /**
     * Triggers while selecting menu item.
     * @event
     */
    @Event()
    public select: EmitType<MenuEventArgs>;

    /**
     * Constructor for creating the widget.
     * @private
     */
    constructor(options?: ContextMenuModel, element?: string | HTMLUListElement) {
        super(options, <HTMLUListElement | string>element);
    }

    /**
     * Initialized animation with parent menu animation settings.
     * @private
     */
    protected preRender(): void {
        if (this.element.tagName === 'EJ-CONTEXTMENU') {
            let ejInst: Object = getValue('ej2_instances', this.element);
            let ul: Element = createElement('ul');
            let wrapper: Element = createElement('EJ-CONTEXTMENU', { className: WRAPPER });
            this.element.parentNode.insertBefore(ul, this.element);
            detach(this.element);
            this.element = ul as HTMLUListElement;
            this.element.classList.add('e-' + this.getModuleName());
            document.body.appendChild(wrapper);
            wrapper.appendChild(this.element);
            setValue('ej2_instances', ejInst, this.element);
            if (!this.element.id) {
                this.element.id = getUniqueID(this.getModuleName());
            }
        }
    }

    /**    
     * Initialize the control rendering
     * @private
     */
    protected render(): void {
        this.initWrapper();
        this.renderItems();
        this.wireEvents();
    }

    private initWrapper(): void {
        let wrapper: Element = this.getWrapper();
        if (!wrapper) {
            wrapper = createElement('div', { className: WRAPPER });
            document.body.appendChild(wrapper);
        }
        if (this.cssClass) {
            wrapper.classList.add(this.cssClass);
        }
        if (this.enableRtl) {
            wrapper.classList.add(RTL);
        }
        attributes(this.element, <{ [key: string]: string }>{ 'role': 'menu', 'tabindex': '0' });
        wrapper.appendChild(this.element);
        this.element.style.zIndex = this.getZIndex();
    }

    private renderItems(): void {
        if (!this.items.length) {
            this.items = ListBase.createJsonFromElement(this.element);
            this.element.innerHTML = '';
        }
        let ul: Element = this.createItems(this.items);
        append(Array.prototype.slice.call(ul.children), this.element);
    }

    private wireEvents(): void {
        let wrapper: HTMLElement = this.getWrapper() as HTMLElement;
        if (this.target) {
            let target: HTMLElement;
            let targetElems: HTMLElement[] = selectAll(this.target);
            for (let i: number = 0, len: number = targetElems.length; i < len; i++) {
                target = targetElems[i];
                if (Browser.isIos) {
                    new Touch(target, { tapHold: this.touchHandler.bind(this) });
                } else {
                    EventHandler.add(target, 'contextmenu', this.cmenuHandler, this);
                }
            }
            for (let parent of this.getScrollableParents(target)) {
                EventHandler.add(parent, 'scroll', this.scrollHandler, this);
            }
        }
        if (!Browser.isDevice) {
            EventHandler.add(wrapper, 'mouseover', this.moverHandler, this);
            EventHandler.add(document, 'mousedown', this.mouseDownHandler, this);
        }
        EventHandler.add(document, 'click', this.clickHandler, this);
        new KeyboardEvents(wrapper, {
            keyAction: this.keyBoardHandler.bind(this),
            keyConfigs: {
                downarrow: DOWNARROW,
                uparrow: UPARROW,
                enter: ENTER,
                leftarrow: LEFTARROW,
                rightarrow: RIGHTARROW,
                escape: ESCAPE
            }
        });
        rippleEffect(wrapper, { selector: '.' + ITEM });
    }

    private mouseDownHandler(e: MouseEvent): void {
        if (closest(e.target as Element, '.' + WRAPPER) !== this.getWrapper()) {
            this.closeMenu(this.navIdx.length, e);
        }
    }

    private getScrollableParents(target: HTMLElement): HTMLElement[] {
        let elemStyle: CSSStyleDeclaration = getComputedStyle(target);
        let parentCollection: HTMLElement[] = [];
        let regex: RegExp = /(auto|scroll)/;
        let parentEle: HTMLElement = target.parentElement;
        while (parentEle && parentEle.tagName !== 'HTML') {
            let parentStyle: CSSStyleDeclaration = getComputedStyle(parentEle);
            if (!(elemStyle.position === 'absolute' && parentStyle.position === 'static')
                && regex.test(parentStyle.overflow + parentStyle.overflowY + parentStyle.overflowX)) {
                parentCollection.push(parentEle);
            }
            parentEle = parentEle.parentElement;
        }
        parentCollection.push(<HTMLElement & Document>document);
        return parentCollection;
    }

    private keyBoardHandler(e: KeyboardEventArgs): void {
        e.preventDefault();
        switch (e.action) {
            case DOWNARROW:
            case UPARROW:
                this.upDownKeyHandler(e);
                break;
            case RIGHTARROW:
                this.rightEnterKeyHandler({ action: RIGHTARROW } as KeyboardEventArgs);
                break;
            case LEFTARROW:
                this.leftEscKeyHandler({ action: LEFTARROW } as KeyboardEventArgs);
                break;
            case ENTER:
                this.rightEnterKeyHandler({ action: ENTER } as KeyboardEventArgs);
                break;
            case ESCAPE:
                this.leftEscKeyHandler({ action: ESCAPE } as KeyboardEventArgs);
                break;
        }
    }

    private upDownKeyHandler(e: KeyboardEventArgs): void {
        let wrapper: Element = this.getWrapper();
        let cul: Element = wrapper.children[this.navIdx.length];
        let defaultIdx: number = e.action === DOWNARROW ? 0 : cul.childElementCount - 1;
        let fliIdx: number = defaultIdx;
        let fli: Element = this.getLIByClass(cul, FOCUSED);
        if (fli) {
            fliIdx = this.getIdx(cul, fli);
            fli.classList.remove(FOCUSED);
            e.action === DOWNARROW ? fliIdx++ : fliIdx--;
            if (fliIdx === (e.action === DOWNARROW ? cul.childElementCount : -1)) {
                fliIdx = defaultIdx;
            }
        }
        let cli: Element = cul.children[fliIdx];
        fliIdx = this.isValidLI(cli, fliIdx, e.action);
        cul.children[fliIdx].classList.add(FOCUSED);
        (cul.children[fliIdx] as HTMLElement).focus();
    }

    private isValidLI(cli: Element, index: number, action: string): number {
        let wrapper: Element = this.getWrapper();
        let cul: Element = wrapper.children[this.navIdx.length];
        if (cli.classList.contains(SEPARATOR) || cli.classList.contains(DISABLED)) {
            action === (DOWNARROW || RIGHTARROW) ? index++ : index--;
        }
        cli = cul.children[index];
        if (cli.classList.contains(SEPARATOR) || cli.classList.contains(DISABLED)) {
            index = this.isValidLI(cli, index, action);
        }
        return index;
    }

    private rightEnterKeyHandler(e: KeyboardEventArgs): void {
        let wrapper: Element = this.getWrapper();
        let cul: Element = wrapper.children[this.navIdx.length];
        let fli: Element = this.getLIByClass(cul, FOCUSED);
        if (fli) {
            let fliIdx: number = this.getIdx(cul, fli);
            let navIdx: number[] = this.navIdx.concat(fliIdx);
            let index: number;
            let item: MenuItemModel = this.getItem(navIdx);
            if (item.items.length) {
                this.navIdx.push(fliIdx);
                this.openMenu(fli, item, null, null, e);
                fli.classList.remove(FOCUSED);
                fli.classList.add(SELECTED);
                if (e.action === ENTER) {
                    let eventArgs: MenuEventArgs = { element: fli as HTMLElement, item: item };
                    this.trigger('select', eventArgs);
                }
                (fli as HTMLElement).focus();
                cul = wrapper.children[this.navIdx.length];
                index = this.isValidLI(cul.children[0], 0, e.action);
                cul.children[index].classList.add(FOCUSED);
                (cul.children[index] as HTMLElement).focus();
            } else {
                if (e.action === ENTER) {
                    this.close();
                }
            }
        }
    }

    private leftEscKeyHandler(e: KeyboardEventArgs): void {
        if (this.navIdx.length) {
            let wrapper: Element = this.getWrapper();
            this.closeMenu(this.navIdx.length, e);
            let cul: Element = wrapper.children[this.navIdx.length];
            let sli: Element = this.getLIByClass(cul, SELECTED);
            sli.setAttribute('aria-expanded', 'false');
            if (sli) {
                sli.classList.remove(SELECTED);
                sli.classList.add(FOCUSED);
                (sli as HTMLElement).focus();
            }
        } else {
            if (e.action === ESCAPE) {
                this.close();
            }
        }
    }

    private scrollHandler(e: MouseEvent): void {
        this.closeMenu(null, e);
    }

    private touchHandler(e: TapEventArgs): void {
        this.isTapHold = true;
        this.cmenuHandler(e.originalEvent);
    }

    private cmenuHandler(e: MouseEvent & (TouchEventArgs | MouseEventArgs)): void {
        e.preventDefault();
        this.closeMenu(null, e);
        if (this.canOpen(e.target as Element)) {
            if (e.changedTouches) {
                this.openMenu(null, null, e.changedTouches[0].clientY, e.changedTouches[0].clientX, e);
            } else {
                this.openMenu(null, null, e.clientY, e.clientX, e);
            }
        }
    }

    /**
     * Closes the ContextMenu if it is opened.
     */
    public close(): void {
        this.closeMenu();
    }

    private closeMenu(ulIndex: number = 0, e: MouseEvent | KeyboardEvent = null): void {
        if (this.isMenuVisible()) {
            let ul: HTMLElement;
            let item: MenuItemModel;
            let items: MenuItemModel[];
            let closeArgs: OpenCloseMenuEventArgs;
            let beforeCloseArgs: BeforeOpenCloseMenuEventArgs;
            let wrapper: Element = this.getWrapper();
            for (let cnt: number = wrapper.childElementCount; cnt > ulIndex; cnt--) {
                item = this.navIdx.length ? this.getItem(this.navIdx) : null;
                items = item ? item.items : this.items;
                ul = wrapper.children[cnt - 1] as HTMLElement;
                beforeCloseArgs = { element: ul, parentItem: item, items: items, event: e, cancel: false };
                this.trigger('beforeClose', beforeCloseArgs);
                if (!beforeCloseArgs.cancel) {
                    this.toggleAnimation(ul, false);
                    this.navIdx.length = ulIndex ? ulIndex - 1 : ulIndex;
                    closeArgs = { element: ul, parentItem: item, items: items };
                    this.trigger('onClose', closeArgs);
                }
            }
        }
    }

    private isMenuVisible(): boolean {
        return (this.navIdx.length > 0 || (this.element.classList.contains('e-contextmenu') && isVisible(this.element).valueOf()));
    }

    private canOpen(target: Element): boolean {
        let canOpen: boolean = true;
        if (this.filter) {
            canOpen = false;
            let filter: string[] = this.filter.split(' ');
            for (let i: number = 0, len: number = target.classList.length; i < len; i++) {
                if (filter.indexOf(target.classList[i]) > -1) {
                    canOpen = true;
                    break;
                }
            }
        }
        return canOpen;
    }

    /**
     * This method is used to open the ContextMenu in specified position.
     * @param top To specify ContextMenu vertical positioning.
     * @param left To specify ContextMenu horizontal positioning.
     * @returns void
     */
    public open(top: number, left: number): void {
        this.openMenu(null, null, top, left);
    }

    private openMenu(li: Element, item: MenuItemModel, top: number = 0, left: number = 0, e: MouseEvent | KeyboardEvent = null): void {
        let ul: HTMLElement;
        let navIdx: number[];
        let wrapper: Element = this.getWrapper();
        if (li) {
            ul = this.createItems(item.items);
            if (Browser.isDevice) {
                (wrapper.lastChild as HTMLElement).style.display = 'none';
                let data: { [key: string]: string } = { text: item.text, iconCss: ICONS + ' e-previous' };
                let hdata: MenuItem = new MenuItem(this.items[0] as MenuItem, null, data, true);
                let hli: Element = this.createItem([hdata], true, 'menu', true);
                ul.insertBefore(hli, ul.children[0]);
            }
            ul.style.zIndex = this.element.style.zIndex;
            wrapper.appendChild(ul);
        } else {
            ul = this.element;
        }
        navIdx = this.getIndex(li ? li.textContent : null);
        let items: MenuItemModel[] = li ? item.items : this.items;
        let eventArgs: BeforeOpenCloseMenuEventArgs = { element: ul, items: items, parentItem: item, event: e, cancel: false };
        this.trigger('beforeOpen', eventArgs);
        if (eventArgs.cancel) {
            this.navIdx.pop();
        } else {
            this.setPosition(li, ul, top, left);
            this.toggleAnimation(ul);
        }
    }

    private createItem(item: MenuItemModel[], showIcon: boolean, moduleName: string, isHeader: boolean = true): Element {
        let listOpt: ListBaseOptions = { showIcon: showIcon, moduleName: moduleName };
        if (isHeader) {
            listOpt.itemClass = HEADER;
        }
        let li: HTMLElement[] = ListBase.createListItemFromJson(this.toRawObject(item), listOpt, 0, true);
        return li[0];
    }

    private setPosition(li: Element, ul: HTMLElement, top: number, left: number): void {
        let px: string = 'px';
        this.toggleVisiblity(ul);
        if (ul === this.element) {
            let collide: string[] = isCollide(ul, null, left, top);
            if (collide.indexOf('right') > -1) {
                left = left - ul.offsetWidth;
            }
            if (collide.indexOf('bottom') > -1) {
                let offset: OffsetPosition = fit(ul, null, { X: false, Y: true }, { top: top, left: left });
                top = offset.top;
            }
            collide = isCollide(ul, null, left, top);
            if (collide.indexOf('left') > -1) {
                let offset: OffsetPosition = fit(ul, null, { X: true, Y: false }, { top: top, left: left });
                left = offset.left;
            }
        } else {
            if (Browser.isDevice) {
                top = Number(this.element.style.top.replace(px, ''));
                left = Number(this.element.style.left.replace(px, ''));
            } else {
                let x: string = this.enableRtl ? 'left' : 'right';
                let offset: OffsetPosition = calculatePosition(li, x, 'top');
                top = offset.top;
                left = offset.left;
                let collide: string[] = isCollide(ul, null, this.enableRtl ? left - ul.offsetWidth : left, top);
                let xCollision: boolean = collide.indexOf('left') > -1 || collide.indexOf('right') > -1;
                if (xCollision) {
                    offset = calculatePosition(li, this.enableRtl ? 'right' : 'left', 'top');
                    left = offset.left;
                }
                if (this.enableRtl || xCollision) {
                    left = (this.enableRtl && xCollision) ? left : left - ul.offsetWidth;
                }
                if (collide.indexOf('bottom') > -1) {
                    offset = fit(ul, null, { X: false, Y: true }, { top: top, left: left });
                    top = offset.top;
                }
            }
        }
        this.toggleVisiblity(ul, false);
        ul.style.top = top + px;
        ul.style.left = left + px;
    }

    private toggleVisiblity(ul: HTMLElement, isVisible: boolean = true): void {
        ul.style.visibility = isVisible ? 'hidden' : '';
        ul.style.display = isVisible ? 'block' : 'none';
    }

    private createItems(items: MenuItemModel[]): HTMLElement {
        let showIcon: boolean = this.hasField(items, 'iconCss');
        let listBaseOptions: ListBaseOptions = {
            showIcon: showIcon,
            moduleName: 'menu',
            itemCreating: (args: { curData: ListBaseMenuModel }): void => {
                args.curData.htmlAttributes = {
                    role: 'menuitem',
                    tabindex: '-1'
                };
                if (showIcon && !args.curData.iconCss) {
                    args.curData.iconCss = ICONS + ' e-blankicon';
                }
            },
            itemCreated: (args: { curData: MenuItemModel, item: Element }): void => {
                if (args.curData.separator) {
                    args.item.classList.remove(ITEM);
                    args.item.classList.add(SEPARATOR);
                    args.item.removeAttribute('role');
                }
                if (args.curData.items && args.curData.items.length) {
                    let span: Element = createElement('span', { className: ICONS + ' ' + CARET });
                    args.item.appendChild(span);
                    args.item.setAttribute('aria-haspopup', 'true');
                    args.item.setAttribute('aria-expanded', 'false');
                    args.item.removeAttribute('role');
                    (args.item as HTMLElement).classList.add('e-menu-caret-icon');
                }
                let eventArgs: MenuEventArgs = { item: args.curData, element: args.item as HTMLElement };
                this.trigger('beforeItemRender', eventArgs);
            }
        };
        let ul: HTMLElement = ListBase.createList(this.toRawObject(items.slice()), listBaseOptions, true);
        ul.setAttribute('tabindex', '0');
        return ul;
    }

    private toRawObject(items: MenuItemModel[]): { [key: string]: object }[] {
        let item: { [key: string]: Object };
        let menuItems: { [key: string]: object }[] = [];
        for (let i: number = 0, len: number = items.length; i < len; i++) {
            item = <{ [key: string]: Object }>(items[i] as MenuItemModel & { properties: Object }).properties;
            menuItems.push(item);
        }
        return menuItems;
    }

    private moverHandler(e: MouseEvent): void {
        let wrapper: Element = this.getWrapper();
        let trgt: Element = e.target as Element;
        let cli: Element = this.getLI(trgt);
        if (cli && closest(cli, '.' + WRAPPER)) {
            let fli: Element = select('.' + FOCUSED, wrapper);
            if (fli) {
                fli.classList.remove(FOCUSED);
            }
            cli.classList.add(FOCUSED);
            if (!this.showItemOnClick) {
                this.clickHandler(e);
            }
        }
    }

    private hasField(items: MenuItemModel[], field: string): boolean {
        for (let i: number = 0, len: number = items.length; i < len; i++) {
            if ((<{ [key: string]: object }>items[i])[field]) {
                return true;
            }
        }
        return false;
    }

    private getWrapper(): Element {
        return closest(this.element, '.' + WRAPPER);
    }

    private clickHandler(e: MouseEvent): void {
        if (this.isTapHold) {
            this.isTapHold = false;
        } else {
            let wrapper: Element = this.getWrapper();
            let trgt: Element = e.target as Element;
            let cli: Element = this.getLI(trgt);
            let cliWrapper: Element = cli ? closest(cli, '.' + WRAPPER) : null;
            let isInstLI: boolean = cli && cliWrapper && wrapper.firstElementChild.id === cliWrapper.firstElementChild.id;
            if (isInstLI && e.type === 'click' && !cli.classList.contains(HEADER)) {
                this.setLISelected(cli);
                let navIdx: number[] = this.getIndex(cli.textContent);
                let item: MenuItemModel = this.getItem(navIdx);
                let eventArgs: MenuEventArgs = { element: cli as HTMLElement, item: item };
                this.trigger('select', eventArgs);
            }
            if (isInstLI && (e.type === 'mouseover' || Browser.isDevice || this.showItemOnClick)) {
                let ul: HTMLElement;
                if (cli.classList.contains(HEADER)) {
                    ul = wrapper.children[this.navIdx.length - 1] as HTMLElement;
                    this.toggleAnimation(ul);
                    let sli: Element = this.getLIByClass(ul, SELECTED);
                    if (sli) {
                        sli.classList.remove(SELECTED);
                    }
                    detach(cli.parentNode);
                    this.navIdx.pop();
                } else {
                    if (!cli.classList.contains(SEPARATOR)) {
                        let showSubMenu: boolean = true;
                        let cul: Element = cli.parentNode as Element;
                        let cliIdx: number = this.getIdx(cul, cli);
                        if (!Browser.isDevice) {
                            let culIdx: number = this.getIdx(wrapper, cul);
                            if (this.navIdx[culIdx] === cliIdx) {
                                showSubMenu = false;
                            }
                            if (culIdx !== this.navIdx.length && (e.type !== 'mouseover' || showSubMenu)) {
                                let sli: Element = this.getLIByClass(cul, SELECTED);
                                if (sli) {
                                    sli.classList.remove(SELECTED);
                                }
                                this.closeMenu(culIdx + 1, e);
                            }
                        }
                        if (showSubMenu) {
                            let idx: number[] = this.navIdx.concat(cliIdx);
                            let item: MenuItemModel = this.getItem(idx);
                            if (item.items.length) {
                                if (e.type === 'mouseover') {
                                    this.setLISelected(cli);
                                }
                                cli.setAttribute('aria-expanded', 'true');
                                this.navIdx.push(cliIdx);
                                this.openMenu(cli, item, null, null, e);
                            } else {
                                if (e.type !== 'mouseover') {
                                    this.closeMenu(null, e);
                                }
                            }
                        }
                    }
                }
            } else {
                if (trgt.tagName !== 'UL' || trgt.parentElement !== wrapper) {
                    if (!cli || !cli.querySelector('.' + CARET)) {
                        this.closeMenu(null, e);
                    }
                }
            }
        }
    }

    private setLISelected(li: Element): void {
        let sli: Element = this.getLIByClass(li.parentElement, SELECTED);
        if (sli) {
            sli.classList.remove(SELECTED);
        }
        li.classList.remove(FOCUSED);
        li.classList.add(SELECTED);
    }

    private getLIByClass(ul: Element, classname: string): Element {
        for (let i: number = 0, len: number = ul.children.length; i < len; i++) {
            if (ul.children[i].classList.contains(classname)) {
                return ul.children[i];
            }
        }
        return null;
    }

    private getItem(navIdx: number[]): MenuItemModel {
        navIdx = navIdx.slice();
        let idx: number = navIdx.pop();
        let items: MenuItemModel[] = this.getItems(navIdx);
        return items[idx];
    }

    private getItems(navIdx: number[]): MenuItemModel[] {
        let items: MenuItemModel[] = this.items;
        for (let i: number = 0; i < navIdx.length; i++) {
            items = items[navIdx[i]].items;
        }
        return items;
    }

    private getIdx(ul: Element, li: Element, skipHdr: boolean = true): number {
        let idx: number = Array.prototype.indexOf.call(ul.children, li);
        if (skipHdr && ul.children[0].classList.contains(HEADER)) {
            idx--;
        }
        return idx;
    }

    private getLI(elem: Element): Element {
        if (elem.tagName === 'LI') {
            return elem;
        }
        return closest(elem, 'li');
    }

    /**
     * Called internally if any of the property value changed
     * @private
     * @param {ContextMenuModel} newProp
     * @param {ContextMenuModel} oldProp
     * @returns void
     */
    public onPropertyChanged(newProp: ContextMenuModel, oldProp: ContextMenuModel): void {
        let wrapper: Element = this.getWrapper();
        for (let prop of Object.keys(newProp)) {
            switch (prop) {
                case 'cssClass':
                    if (oldProp.cssClass) {
                        wrapper.classList.remove(oldProp.cssClass);
                    }
                    if (newProp.cssClass) {
                        wrapper.classList.add(newProp.cssClass);
                    }
                    break;
                case 'enableRtl':
                    wrapper.classList.toggle(RTL);
                    break;
                case 'filter':
                    this.closeMenu();
                    this.filter = newProp.filter;
                    break;
                case 'showItemOnClick':
                    this.unWireEvents();
                    this.showItemOnClick = newProp.showItemOnClick;
                    this.wireEvents();
                    break;
                case 'target':
                    this.unWireEvents();
                    this.target = newProp.target;
                    this.wireEvents();
                    break;
                case 'items':
                    this.refresh();
                    break;
            }
        }
    }

    /**
     * Used to unwire the bind events.
     * @private
     */
    protected unWireEvents(): void {
        let wrapper: HTMLElement = this.getWrapper() as HTMLElement;
        if (this.target) {
            let target: HTMLElement;
            let touchModule: Touch;
            let targetElems: HTMLElement[] = selectAll(this.target);
            for (let i: number = 0, len: number = targetElems.length; i < len; i++) {
                target = targetElems[i];
                if (Browser.isIos) {
                    touchModule = getInstance(target, Touch) as Touch;
                    if (touchModule) {
                        touchModule.destroy();
                    }
                } else {
                    EventHandler.remove(target, 'contextmenu', this.cmenuHandler);
                }
            }
            if (target) {
                for (let parent of this.getScrollableParents(target)) {
                    EventHandler.remove(parent, 'scroll', this.scrollHandler);
                }
            }
        }
        if (!Browser.isDevice) {
            EventHandler.remove(wrapper, 'mouseover', this.moverHandler);
            EventHandler.remove(document, 'mousedown', this.mouseDownHandler);
        }
        EventHandler.remove(document, 'click', this.clickHandler);
        let keyboardModule: KeyboardEvents = getInstance(wrapper, KeyboardEvents) as KeyboardEvents;
        if (keyboardModule) {
            keyboardModule.destroy();
        }
    }

    private toggleAnimation(ul: HTMLElement, isMenuOpen: boolean = true): void {
        if (this.animationSettings.effect === 'None' || !isMenuOpen) {
            this.end(ul, isMenuOpen);
        } else {
            this.animation.animate(ul, {
                name: this.animationSettings.effect,
                duration: this.animationSettings.duration,
                timingFunction: this.animationSettings.easing,
                begin: (options: AnimationOptions) => {
                    options.element.style.display = 'block';
                    options.element.style.maxHeight = options.element.getBoundingClientRect().height + 'px';
                },
                end: (options: AnimationOptions) => {
                    this.end(options.element, isMenuOpen);
                }
            });
        }
    }

    private end(ul: HTMLElement, isMenuOpen: boolean): void {
        if (isMenuOpen) {
            ul.style.display = 'block';
            ul.style.maxHeight = '';
            let item: MenuItemModel = this.navIdx.length ? this.getItem(this.navIdx) : null;
            let eventArgs: OpenCloseMenuEventArgs = { element: ul as HTMLElement, parentItem: item, items: item ? item.items : this.items };
            this.trigger('onOpen', eventArgs);
            if (ul.querySelector('.' + FOCUSED)) {
                (ul.querySelector('.' + FOCUSED) as HTMLElement).focus();
            } else {
                let ele: HTMLElement;
                ele = this.getWrapper().children[this.getIdx(this.getWrapper(), ul) - 1] as HTMLElement;
                if (ele) {
                    (ele.querySelector('.' + SELECTED) as HTMLElement).focus();
                } else {
                    this.element.focus();
                }
            }
        } else {
            if (ul === this.element) {
                let fli: Element = this.getLIByClass(this.element, FOCUSED);
                if (fli) {
                    fli.classList.remove(FOCUSED);
                }
                let sli: Element = this.getLIByClass(this.element, SELECTED);
                if (sli) {
                    sli.classList.remove(SELECTED);
                }
                ul.style.display = 'none';
            } else {
                detach(ul);
            }
        }
    }

    /**
     * Get the properties to be maintained in the persisted state.
     * @returns string
     */
    protected getPersistData(): string {
        return '';
    }

    /**
     * Get component name.
     * @returns string
     * @private
     */
    protected getModuleName(): string {
        return 'contextmenu';
    }

    private getIndex(data: string, items: MenuItemModel[] = this.items, navIdx: number[] = [], isCallBack: boolean = false): number[] {
        let item: MenuItemModel;
        for (let i: number = 0, len: number = items.length; i < len; i++) {
            item = items[i];
            if (item.text === data) {
                navIdx.push(i);
                break;
            } else if (item.items.length) {
                navIdx = this.getIndex(data, item.items, navIdx, true);
                if (navIdx[navIdx.length - 1] === -1) {
                    if (i !== len - 1) {
                        navIdx.pop();
                    }
                } else {
                    navIdx.unshift(i);
                    break;
                }
            } else {
                if (i === len - 1) {
                    navIdx.push(-1);
                }
            }
        }
        return (!isCallBack && navIdx[0] === -1) ? [] : navIdx;
    }

    /**
     * This method is used to enable or disable the menu items in the ContextMenu based on the items and enable argument.
     * @param items Text items that needs to be enabled/disabled.
     * @param enable Set `true`/`false` to enable/disable list items.
     * @returns void
     */
    public enableItems(items: string[], enable: boolean = true): void {
        let ul: Element;
        let idx: number;
        let navIdx: number[];
        let disabled: string = DISABLED;
        let wrapper: Element = this.getWrapper();
        for (let i: number = 0; i < items.length; i++) {
            navIdx = this.getIndex(items[i]);
            idx = navIdx.pop();
            ul = wrapper.children[navIdx.length];
            if (ul) {
                if (enable) {
                    if (Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
                        ul.children[idx + 1].classList.remove(disabled);
                    } else {
                        ul.children[idx].classList.remove(disabled);
                    }
                } else {
                    if (Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
                        ul.children[idx + 1].classList.add(disabled);
                    } else {
                        ul.children[idx].classList.add(disabled);
                    }
                }
            }
        }
    }

    /**
     * This method is used to show the menu items in the ContextMenu based on the items text.
     * @param items Text items that needs to be shown.
     * @returns void
     */
    public showItems(items: string[]): void {
        this.showHideItems(items, false);
    }

    /**
     * This method is used to hide the menu items in the ContextMenu based on the items text.
     * @param items Text items that needs to be hidden.
     * @returns void
     */
    public hideItems(items: string[]): void {
        this.showHideItems(items, true);
    }

    private showHideItems(items: string[], ishide: boolean): void {
        let ul: Element;
        let idx: number;
        let navIdx: number[];
        let wrapper: Element = this.getWrapper();
        for (let i: number = 0; i < items.length; i++) {
            navIdx = this.getIndex(items[i]);
            idx = navIdx.pop();
            ul = wrapper.children[navIdx.length];
            if (ul) {
                if (ishide) {
                    if (Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
                        ul.children[idx + 1].classList.add(HIDE);
                    } else {
                        ul.children[idx].classList.add(HIDE);
                    }
                } else {
                    if (Browser.isDevice && !ul.classList.contains('e-contextmenu')) {
                        ul.children[idx + 1].classList.remove(HIDE);
                    } else {
                        ul.children[idx].classList.remove(HIDE);
                    }
                }
            }
        }
    }

    /**
     * It is used to remove the menu items from the ContextMenu based on the items text.
     * @param items Text items that needs to be removed.
     * @returns void
     */
    public removeItems(items: string[]): void {
        let idx: number;
        let navIdx: number[];
        let iitems: MenuItemModel[];
        for (let i: number = 0; i < items.length; i++) {
            navIdx = this.getIndex(items[i]);
            idx = navIdx.pop();
            iitems = this.getItems(navIdx);
            iitems.splice(idx, 1);
            if (!navIdx.length) {
                detach(this.element.children[idx]);
            }
        }
    }

    /**
     * It is used to insert the menu items after the specified menu item text.
     * @param items Items that needs to be inserted.
     * @param text Text item after which the element to be inserted.
     * @returns void
     */
    public insertAfter(items: MenuItemModel[], text: string): void {
        this.insertItems(items, text);
    }

    /**
     * It is used to insert the menu items before the specified menu item text.
     * @param items Items that needs to be inserted.
     * @param text Text item before which the element to be inserted.
     * @returns void
     */
    public insertBefore(items: MenuItemModel[], text: string): void {
        this.insertItems(items, text, false);
    }

    private insertItems(items: MenuItemModel[], text: string, isAfter: boolean = true): void {
        let li: Element;
        let idx: number;
        let navIdx: number[];
        let iitems: MenuItemModel[];
        let menuitem: MenuItem;
        let showIcon: boolean;
        for (let i: number = 0; i < items.length; i++) {
            navIdx = this.getIndex(text);
            idx = navIdx.pop();
            iitems = this.getItems(navIdx);
            menuitem = new MenuItem(iitems[0] as MenuItem, null, items[i], true);
            iitems.splice(isAfter ? idx + 1 : idx, 0, menuitem);
            if (!navIdx.length) {
                idx = isAfter ? idx + 1 : idx;
                showIcon = this.hasField(iitems, 'iconCss');
                li = this.createItem([menuitem], showIcon, 'menu', false);
                this.element.insertBefore(li, this.element.children[idx]);
            }
        }
    }

    private getZIndex(): string {
        let index: string;
        let position: string;
        let props: CSSStyleDeclaration;
        let zIndex: string[] = ['999'];
        for (let i: number = 0, len: number = document.body.children.length; i < len; i++) {
            props = document.defaultView.getComputedStyle(document.body.children[i]);
            index = props.getPropertyValue('z-index');
            position = props.getPropertyValue('position');
            if (index !== 'auto' && position !== 'static') {
                zIndex.push(index);
            }
        }
        return (Math.max.apply(Math, zIndex) + 1).toString();
    }

    /**
     * To destroy the widget.
     * @returns void
     */

    public destroy(): void {
        let wrapper: Element = this.getWrapper();
        if (wrapper) {
            super.destroy();
            this.unWireEvents();
            this.closeMenu();
            this.element.innerHTML = '';
            ['top', 'left', 'display', 'z-index'].forEach((key: string) => {
                this.element.style.removeProperty(key);
            });
            ['role', 'tabindex', 'class', 'style'].forEach((key: string) => {
                if (['class', 'style'].indexOf(key) === -1 || !this.element.getAttribute(key)) {
                    this.element.removeAttribute(key);
                }
            });
            wrapper.parentNode.insertBefore(this.element, wrapper);
            detach(wrapper);
        }
    }
}

/**
 * Interface for before item render / select event.
 * @private
 */
export interface MenuEventArgs extends BaseEventArgs {
    element: HTMLElement;
    item: MenuItemModel;
}

/**
 * Interface for before open / close event.
 * @private
 */
export interface BeforeOpenCloseMenuEventArgs extends BaseEventArgs {
    element: HTMLElement;
    items: MenuItemModel[];
    parentItem: MenuItemModel;
    event: Event;
    cancel: boolean;
}

/**
 * Interface for open / close event.
 */
export interface OpenCloseMenuEventArgs extends BaseEventArgs {
    element: HTMLElement;
    items: MenuItemModel[];
    parentItem: MenuItemModel;
}

/**
 * Animation configuration settings.
 */
export interface MenuAnimationSettings {
    /**
     * Specifies effect that shown in sub menu transform.
     */
    effect?: MenuEffect;
    /**
     * Specifies time duration to transform object.
     */
    duration?: number;
    /**
     * Specifies easing effect applied while transform.
     */
    easing?: string;
}

export interface ListBaseMenuModel extends MenuItemModel {
    htmlAttributes: { [key: string]: string };
}

/**
 * Builder for ContextMenu.
 * @private
 */
export let contextMenuBuilder: ContextMenuHelper = <ContextMenuHelper>CreateBuilder(ContextMenu);