import { Component, Property, ChildProperty, NotifyPropertyChanges, INotifyPropertyChanged } from '@syncfusion/ej2-base';import { Event, EventHandler, EmitType, BaseEventArgs, KeyboardEvents, KeyboardEventArgs, Touch, TapEventArgs } from '@syncfusion/ej2-base';import { attributes, Animation, AnimationOptions, TouchEventArgs, MouseEventArgs } from '@syncfusion/ej2-base';import { Browser, Collection, setValue, getValue, getUniqueID, getInstance } from '@syncfusion/ej2-base';import { select, selectAll, closest, createElement, detach, append, rippleEffect, isVisible, remove } from '@syncfusion/ej2-base';import { ListBase, ListBaseOptions } from '@syncfusion/ej2-lists';import { calculatePosition, OffsetPosition, isCollide, fit, getScrollableParent, getZindexPartial } from '@syncfusion/ej2-popups';
import {MenuAnimationSettings,MenuEventArgs,BeforeOpenCloseMenuEventArgs,OpenCloseMenuEventArgs} from "./context-menu";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class MenuItem
 */
export interface MenuItemModel {

    /**
     * Defines class/multiple classes separated by a space for the menu Item that is used to include an icon.
     * Menu Item can include font icon and sprite image.
     * @default ''
     */
    iconCss?: string;

    /**
     * Specifies the id for menu item.
     * @default ''
     */
    id?: string;

    /**
     * Specifies separator between the menu items. Separator are horizontal lines used to group menu items.
     * @default false
     */
    separator?: boolean;

    /**
     * Specifies the sub menu items that is the array of MenuItem model.
     * @default []
     */
    items?: MenuItemModel[];

    /**
     * Specifies text for menu item.
     * @default ''
     */
    text?: string;

    /**
     * Specifies url for menu item that creates the anchor link to navigate to the url provided.
     * @default ''
     */
    url?: string;

}

/**
 * Interface for a class ContextMenu
 */
export interface ContextMenuModel extends ComponentModel{

    /**
     * Defines class/multiple classes separated by a space in the ContextMenu wrapper.
     * ContextMenu customization can be achieved by using this.
     * @default ''
     */
    cssClass?: string;

    /**
     * Specifies the filter selector for elements inside the target in that the context menu will be opened.
     * @default ''
     */
    filter?: string;

    /**
     * Specifies whether to show the sub menu or not on click.
     * When set to true, the sub menu will open only on mouse click.
     * @default false
     */
    showItemOnClick?: boolean;

    /**
     * Specifies menu items with its properties which will be rendered as Context Menu.
     * @default []
     */
    items?: MenuItemModel[];

    /**
     * Specifies target element selector in which the ContextMenu should be opened.
     * @default ''
     */
    target?: string;

    /**
     * Specifies the animation settings for the sub menu open.
     * @default { duration: 400, easing: 'ease', effect: 'SlideDown' }
     */
    animationSettings?: MenuAnimationSettings;

    /**
     * Triggers while rendering each menu item.
     * @event
     */
    beforeItemRender?: EmitType<MenuEventArgs>;

    /**
     * Triggers before opening the menu item.
     * @event
     */
    beforeOpen?: EmitType<BeforeOpenCloseMenuEventArgs>;

    /**
     * Triggers while opening the menu item.
     * @event
     */
    onOpen?: EmitType<OpenCloseMenuEventArgs>;

    /**
     * Triggers before closing the menu.
     * @event
     */
    beforeClose?: EmitType<BeforeOpenCloseMenuEventArgs>;

    /**
     * Triggers while closing the menu.
     * @event
     */
    onClose?: EmitType<OpenCloseMenuEventArgs>;

    /**
     * Triggers while selecting menu item.
     * @event
     */
    select?: EmitType<MenuEventArgs>;

}