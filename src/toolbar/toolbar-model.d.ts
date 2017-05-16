import { Component, enableRtl, EventHandler, Property, Event, EmitType, Browser } from '@syncfusion/ej2-base';import { addClass, removeClass, isVisible, setStyleAttribute, closest, attributes, detach } from '@syncfusion/ej2-base/dom';import { createElement as buildTag } from '@syncfusion/ej2-base/dom';import { isNullOrUndefined as isNOU, getUniqueID, formatUnit } from '@syncfusion/ej2-base/util';import { INotifyPropertyChanged, NotifyPropertyChanges, CreateBuilder, ChildProperty } from '@syncfusion/ej2-base';import { KeyboardEvents, KeyboardEventArgs, Collection } from '@syncfusion/ej2-base';import { calculatePosition } from '@syncfusion/ej2-popups/src/common/position';import { Popup} from '@syncfusion/ej2-popups';import { Button } from '@syncfusion/ej2-buttons';import { HScroll } from '../common/h-scroll';import { ToolbarHelper } from './toolbar-builder';
import {OverflowOption,ItemType,DisplayMode,OverflowMode} from "./toolbar";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class Item
 */
export interface ItemModel {

    /**
     * Specifies the id of the toolbar item such as button, input elements.     * @default ""     */    id?: string;

    /**
     * Specifies the text of the toolbar button.     * @default ""     */    text?: string;

    /**
     * Specifies the width of the toolbar button.     * @default 'auto'     */    width?: number | string;

    /**
     * Defines single / multiple classes separated by space which can be used for toolbar command customization.     * @default ""     */    cssClass?: string;

    /**
     * Defines single / multiple classes separated by space which can be used to specify an icon for the button.     * The icon will be positioned before the text content if text available, else icon alone button will be rendered.     * @default ""     */    prefixIcon?: string;

    /**
     * Defines single / multiple classes separated by space which can be used to specify an icon for the button.     * The icon will be positioned after the text content if text available.     * @default ""     */    suffixIcon?: string;

    /**
     * Specifies the toolbar command display area when an element's content is large to fit in an available space.     * Applicable to `popup` mode only. Possible values are:     * - show - Always shows item in *toolbar* with primary priority.     * - hide - Always shows item in *popup* with secondary priority.     * - none - No priority considers to display and as per the normal order control moves to popup when content exceeds.     * @default 'None'     */    overflow?: OverflowOption;

    /**
     * Specifies the HTML element / element id as a string which can be added as toolbar command.     * ```     * E.g - items: [{ template: '<input placeholder="Search"/>' },{ template: '#checkbox1' }]     * ```     * @default ""     */    template?: string | Object;

    /**
     * Specifies the type of command to be rendered in the toolbar.     * Supported types are:     * - Button - Creates the button control with its given properties like text, prefixIcon, etc.     * - Separator - Adds a horizontal line that separates the toolbar commands.     * - Input - Creates an input element and it's applicable to template rendering with Syncfusion controls like drop down list,      * auto complete, etc.     * @default 'Button'     */    type?: ItemType;

    /**
     * Specifies where the button text will be displayed in *popup mode* of the toolbar.     * Possible values are:     * - Toolbar - Text will be displayed in *toolbar* only.     * - Overflow - Text will be displayed when content overflowed to *popup* only.     * - Both - Text will be displayed in *popup* and *toolbar*.     * @default 'Both'     */    showTextOn?: DisplayMode;

    /**
     * Defines a htmlAttributes which can be used for adding custom attributes to toolbar command.     * Supports HTML attributes such as style, class, etc.     * @default 'null'     */    htmlAttributes?: { [key: string]: string; };

    /**
     * Sets the text that appears as a tooltip in the toolbar command.     * @default ""     */    tooltipText?: string;

}

/**
 * Interface for a class Toolbar
 */
export interface ToolbarModel extends ComponentModel{

    /**
     * An array of item that is used to configure toolbar commands.     * @default []     */    items?: ItemModel[];

    /**
     * Specifies the width of the toolbar in pixels/number/percentage. Number value is considered as pixels.     * @default 'auto'     */    width?: string | number;

    /**
     * Specifies the height of the toolbar in pixels/number/percentage. Number value is considered as pixels.     * @default 'auto'     */    height?: string | number;

    /**
     * Specifies the toolbar display mode when toolbar content exceeds the viewing area.     * Possible modes are:     * - Scrollable - All the elements are displayed in a single line with horizontal scrolling enabled.     * - Popup - Prioritized elements are displayed in toolbar and rest of elements are moved to *popup*.     * If the popup content overflows the height of the page, the rest of the elements will be hidden.     * @default 'Scrollable'     */    overflowMode?: OverflowMode;

    /**
     * Specifies the direction of the toolbar items. For the cultures like Arabic, direction can be switched as right to left.     * @default 'false'     */    enableRtl?: boolean;

    /**
     * The event will be fired while clicking on the toolbar elements.     * @event     */    clicked?: EmitType<Event>;

    /**
     * The event will be fired once the widget rendering is completed.     * @event     */    created?: EmitType<Event>;

    /**
     * The event will be fired when the widget gets destroyed.     * @event     */    destroyed?: EmitType<Event>;

    /**
     * The event will be fired before the widget renders on a page.     * @event     */    beforeCreate?: EmitType<Event>;

}