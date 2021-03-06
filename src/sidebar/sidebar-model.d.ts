import { Component, formatUnit, EventHandler, Event, isNullOrUndefined, closest } from '@syncfusion/ej2-base';import { Property, EmitType, NotifyPropertyChanges, INotifyPropertyChanged, Browser } from '@syncfusion/ej2-base';import { setStyleAttribute as setStyle, addClass, removeClass, createElement, Touch, SwipeEventArgs } from '@syncfusion/ej2-base';
import {SidebarPosition,SidebarType} from "./sidebar";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class Sidebar
 */
export interface SidebarModel extends ComponentModel{

    /**
     * Specifies the size of the Sidebar in dock state.
     * @default 'auto'
     */
    dockSize?: string | number;

    /**
     * Specifies the media query whether the sidebar need to be opened when the resolution meets
     * ```typescript
     *   let defaultSidebar: Sidebar = new Sidebar({
     *       mediaQuery: window.matchMedia('(min-width: 600px)') 
     *   });
     * ```
     * @default null
     */
    mediaQuery?: MediaQueryList;

    /**
     * Specifies the docking state of the component.
     * @default false
     */
    enableDock?: boolean;

    /**
     * Enables the expand or collapse while swiping in touch devices.
     * @default true
     */
    enableGestures?: boolean;

    /**
     * Specifies the Sidebar in RTL state.
     * @default false
     */
    enableRtl?: boolean;

    /**
     * Specifies the Sidebar animation to be enabled or not.
     * @default true
     */
    animate?: boolean;

    /**
     * Specifies the height of the Sidebar.
     * @default 'auto'
     */
    height?: string | number;

    /**
     * Specifies whether the Sidebar need to be closed or not when document area is clicked.
     * @default false
     */
    closeOnDocumentClick?: boolean;

    /**
     * Specifies the position of the Sidebar (Left/Right) corresponding to the main content.
     * @default 'Left'
     */
    position?: SidebarPosition;

    /**
     * Allows to place the sidebar inside the target element.
     * @default null
     */
    target?: HTMLElement | string;

    /**
     * Specifies the whether to apply overlay options to main content when the Sidebar is in an open state.
     * @default false
     */
    showBackdrop?: boolean;

    /**
     * Specifies the expanding types of the Sidebar.
     * * `Over` - The sidebar floats over the main content area.
     * * `Push` - The sidebar pushes the main content area to appear side-by-side, and shrinks the main content within the screen width.
     * * `Slide` - The sidebar translates the x and y positions of main content area based on the sidebar width. 
     * The main content area will not be adjusted within the screen width.
     * * `Auto` - Sidebar with `Over` type in mobile resolution and `Push` type in other higher resolutions.
     * > For more details about SidebarType refer to 
     * [`SidebarType`](./variations.html#types) documentation.
     * @default 'Auto'
     */
    type?: SidebarType;

    /**
     * Specifies the width of the Sidebar.
     * @default 'auto'
     */
    width?: string | number;

    /**
     * Specifies the z-index of the Sidebar. It is applicable only when sidebar act as overlay type.
     * @default 1000
     */
    zIndex?: string | number;

    /**
     * Triggers when component is created.
     * @event 
     */
    created?: EmitType<Event>;

    /**
     * Triggers when component is closed.
     *  @event 
     */
    close?: EmitType<Event>;

    /**
     * Triggers when component is opened.
     *  @event 
     */
    open?: EmitType<Event>;

    /**
     * Triggers when component is show or hide.
     *  @event 
     */
    change?: EmitType<Event>;

    /**
     * Triggers when component gets destroyed.
     *  @event 
     */
    destroyed?: EmitType<Event>;

}