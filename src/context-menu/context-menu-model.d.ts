import { Component, CreateBuilder, Property, ChildProperty, NotifyPropertyChanges, INotifyPropertyChanged } from '@syncfusion/ej2-base';import { Event, EventHandler, EmitType, BaseEventArgs, KeyboardEvents, KeyboardEventArgs, Touch, TapEventArgs } from '@syncfusion/ej2-base';import { attributes, Animation, AnimationOptions, TouchEventArgs, MouseEventArgs, isNullOrUndefined } from '@syncfusion/ej2-base';import { Browser, Collection, setValue, getValue, getUniqueID } from '@syncfusion/ej2-base';import { select, closest, createElement, detach, append, rippleEffect, isVisible } from '@syncfusion/ej2-base';import { ListBase, ListBaseOptions } from '@syncfusion/ej2-lists';import { calculatePosition, OffsetPosition, isCollide, fit } from '@syncfusion/ej2-popups';import { ContextMenuHelper } from './context-menu-builder';
import {MenuAnimationSettings,EventArgs,BeforeItemRenderEventArgs,BeforeOpenEventArgs,CloseMenuEventArgs,SelectMenuEventArgs} from "./context-menu";
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
     * Specifies id for menu item.
     * @default ''
     */
    id?: string;

    /**
     * Specifies separator between menu items. Separator are horizontal lines used to group menu items.
     * @default false
     */
    separator?: boolean;

    /**
     * Specifies the sub menu items which is array of MenuItem model.
     * @default []
     */
    items?: MenuItemModel[];

    /**
     * Specifies text for menu item.
     * @default ''
     */
    text?: string;

    /**
     * Specifies url for menu item which creates the anchor link to navigate to url provided.
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
     * ContextMenu customization can be achieved using this.
     * @default ''
     */
    cssClass?: string;

    /**
     * Specifies the filter selector for elements inside the target in which the context menu will be opened.
     * @default ''
     */
    filter?: string;

    /**
     * Specifies whether to show sub menu on click or not.
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
     * Specifies target element selector in which ContextMenu should be opened.
     * @default ''
     */
    target?: string;

    /**
     * Specifies the animation settings for sub menu open.
     * @default { duration: 400, easing: 'ease', effect: 'SlideDown' }
     */
    animationSettings?: MenuAnimationSettings;

    /**
     * Triggers while rendering each menu item.
     * @event
     */
    beforeItemRender?: EmitType<BeforeItemRenderEventArgs>;

    /**
     * Triggers before opening the menu item.
     * @event
     */
    beforeOpen?: EmitType<BeforeOpenEventArgs>;

    /**
     * Triggers while opening menu item.
     * @event
     */
    onOpen?: EmitType<EventArgs>;

    /**
     * Triggers while closing menu item.
     * @event
     */
    onClose?: EmitType<CloseMenuEventArgs>;

    /**
     * Triggers while selecting menu item.
     * @event
     */
    select?: EmitType<SelectMenuEventArgs>;

}