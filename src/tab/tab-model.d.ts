import { Component, Property, Event, EmitType, closest, Collection, Complex, CreateBuilder, attributes } from '@syncfusion/ej2-base';import { INotifyPropertyChanged, NotifyPropertyChanges, ChildProperty, AnimationOptions, select, isVisible } from '@syncfusion/ej2-base';import { KeyboardEvents, KeyboardEventArgs, MouseEventArgs, Effect, Browser, formatUnit, DomElements, L10n } from '@syncfusion/ej2-base';import { createElement as buildTag, setStyleAttribute as setStyle, isNullOrUndefined as isNOU, selectAll } from '@syncfusion/ej2-base';import { EventHandler, rippleEffect, Touch, SwipeEventArgs, compile, Animation, AnimationModel, BaseEventArgs } from '@syncfusion/ej2-base';import { Popup } from '@syncfusion/ej2-popups';import { Toolbar, OverflowMode, ClickEventArgs } from '../toolbar/toolbar';import { TabHelper } from './tab-builder';
import {TabEffect,headerPosition,heightStyles,SelectEventArgs,RemoveEventArgs} from "./tab";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class TabActionSettings
 */
export interface TabActionSettingsModel {

    /**
     * Specifies the animation effect for displaying Tab content.
     * @default : 'SlideLeftIn';
     */
    effect?: TabEffect;

    /**
     * Specifies the time duration to transform content.
     * @default : 600;
     */
    duration?: number;

    /**
     * Specifies easing effect applied while transforming content.
     * @default : 'ease';
     */
    easing?: string;

}

/**
 * Interface for a class TabAnimationSettings
 */
export interface TabAnimationSettingsModel {

    /**
     * Specifies the animation is to be showing while moving previous Tab content.
     * @default { effect: 'SlideLeftIn', duration: 600, easing: 'ease' }
     */
    previous?: TabActionSettingsModel;

    /**
     * Specifies the animation is to be showing while moving next Tab content.
     * @default { effect: 'SlideRightIn', duration: 600, easing: 'ease' }
     */
    next?: TabActionSettingsModel;

}

/**
 * Interface for a class Header
 */
export interface HeaderModel {

    /**
     * Specifies the display text of the Tab item header.
     * @default ''
     */
    text?: string | HTMLElement;

    /**
     * Specifies the icon class, which is used to render an icon in the Tab header.
     * @default ''
     */
    iconCss?: string;

    /**
     * Options for positioning the icon in the Tab item header. This property depends on `iconCss` property.
     * Possible values are:
     * - Left – Places the icon to the `left` of the item.
     * - Top - Places the icon on the `top` of the item.
     * - Right - Places the icon to the `right` end of the item.
     * - Bottom - Places the icon on the `bottom` of the item.
     * @default 'left'
     */
    iconPosition?: string;

}

/**
 * Interface for a class TabItem
 */
export interface TabItemModel {

    /**
     * The object used for configuring the Tab item header properties.
     * @default {}
     */
    header?: HeaderModel;

    /**
     * Specifies the content of Tab item, which can be displayed when the concern item header is selected.
     * @default ''
     */
    content?: string | HTMLElement;

    /**
     * Sets the CSS classes to the Tab item which helps to customize its styles.
     * @default ''
     */
    cssClass?: string;

    /**
     * Set as true to disable user interactions of the Tab item.
     * @default false
     */
    disabled?: boolean;

}

/**
 * Interface for a class Tab
 */
export interface TabModel extends ComponentModel{

    /**
     * An array of object that is used to configure the Tab component.
     * ```typescript
     *   let tabObj: Tab = new Tab( {
     *     items: [
     *       { header: { text: 'TabItem1' }, content: 'Tab Item1 Content' },
     *       { header: { text: 'TabItem2' }, content: 'Tab Item2 Content' }
     *     ]
     *   });
     *   tabObj.appendTo('#tab');
     * ```
     * @default []
     */
    items?: TabItemModel[];

    /**
     * Specifies the width of the Tab component. Default, Tab width sets based on the width of its parent.
     * @default '100%'
     */
    width?: string | number;

    /**
     * Specifies the height of the Tab component. Default, Tab height sets based on the height of its parent.
     * To use height property, heightAdjustMode must set as 'None'.
     * @default 'auto'
     */
    height?: string | number;

    /**
     * Sets the CSS classes to root element of the Tab which helps to customize component styles.
     * @default ''
     */
    cssClass?: string;

    /**
     * Specifies the index for activating the current Tab item.
     * ```typescript
     *   let tabObj: Tab = new Tab( {
     *     selectedItem: 1,
     *     items: [
     *       { header: { text: 'TabItem1' }, content: 'Tab Item1 Content' },
     *       { header: { text: 'TabItem2' }, content: 'Tab Item2 Content' }
     *     ]
     *   });
     *   tabObj.appendTo('#tab');
     * ```
     * @default 0
     */
    selectedItem?: number;

    /**
     * Specifies the orientation of Tab header.
     * Possible values are:
     * - Top - Places the Tab header on the top.
     * - Bottom - Places the Tab header to the bottom.
     * @default 'Top'
     */
    headerPlacement?: headerPosition;

    /**
     * Specifies the height style for Tab content.
     * Possible values are:
     * - None - Based on height property given, content panel height is set.
     * - Auto - Tallest panel height of given Tab contents is set to all other panels.
     * - Content - Based on the corresponding content height, content panel height is set.
     * - Fill - Based on the parent height, content panel hight is set.
     * @default 'Content'
     */
    heightAdjustMode?: heightStyles;

    /**
     * Specifies the Tab display mode when Tab content exceeds the viewing area.
     * Possible modes are:
     * - Scrollable - All the elements are displayed in a single line with horizontal scrolling enabled.
     * - Popup - Tab container holds the items that can be placed within the available space and rest of the items are moved to the popup.
     * If the popup content overflows the height of the page, then the rest of the elements are scrollable.
     * @default 'Scrollable'
     */
    overflowMode?: OverflowMode;

    /**
     * Specifies the direction of the Tab. For the cultures like Arabic, direction can be switched as right to left.
     * @default false
     */
    enableRtl?: boolean;

    /**
     * Specifies whether to show the close button for the header items in which it is used to remove the item from the Tab.
     * @default false
     */
    showCloseButton?: boolean;

    /**
     * Specifies the animation configuration settings while showing the content of the Tab.
     * @default 
     * { previous: { effect: 'SlideLeftIn', duration: 600, easing: 'ease' },
     *   next: { effect: 'SlideRightIn', duration: 600, easing: 'ease' } }
     */
    animation?: TabAnimationSettingsModel;

    /**
     * The event will be fired once the component rendering is completed.
     * @event
     */
    created?: EmitType<Event>;

    /**
     * The event will be fired before adding the item to the Tab.
     * @event
     */
    adding?: EmitType<Event>;

    /**
     * The event will be fired after adding the item to the Tab.
     * @event
     */
    added?: EmitType<Event>;

    /**
     * The event will be fired before the item gets selected.
     * @event
     */
    selecting?: EmitType<SelectEventArgs>;

    /**
     * The event will be fired after the item gets selected.
     * @event
     */
    selected?: EmitType<SelectEventArgs>;

    /**
     * The event will be fired before removing the item from the Tab.
     * @event
     */
    removing?: EmitType<RemoveEventArgs>;

    /**
     * The event will be fired after removing the item from the Tab.
     * @event
     */
    removed?: EmitType<RemoveEventArgs>;

    /**
     * The event will be fired when the component gets destroyed.
     * @event
     */
    destroyed?: EmitType<Event>;

}