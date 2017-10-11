import { Component, EventHandler, Property, Event, EmitType, AnimationModel, KeyboardEvents, rippleEffect } from '@syncfusion/ej2-base';import { KeyboardEventArgs, BaseEventArgs, Effect, getUniqueID, compile as templateCompiler } from '@syncfusion/ej2-base';import { addClass, isVisible, closest, attributes, classList, detach, select } from '@syncfusion/ej2-base';import { INotifyPropertyChanged, NotifyPropertyChanges, CreateBuilder, ChildProperty, Collection, Animation } from '@syncfusion/ej2-base';import { createElement as buildTag, setStyleAttribute as setStyle, Complex  } from '@syncfusion/ej2-base';import { isNullOrUndefined as isNOU, formatUnit } from '@syncfusion/ej2-base';import { AccordionHelper } from './accordion-builder';
import {AccordionEffect,ExpandMode,AccordionClickArgs,ExpandEventArgs} from "./accordion";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class AccordionActionSettings
 */
export interface AccordionActionSettingsModel {

    /**
   * Specify the type of animation.
   * @default : 'SlideDown';
   */
    effect?: AccordionEffect;

    /**
   * Specify the duration to animate.
   * @default : 400;
   */
    duration?: number;

    /**
   * Specify the animation timing function.
   * @default : 'linear';
   */
    easing?: string;

}

/**
 * Interface for a class AccordionAnimationSettings
 */
export interface AccordionAnimationSettingsModel {

    /**
   * Specifies the animation is to be shown while collapsing the Accordion item.
   * @default { effect: 'SlideDown', duration: 400, easing: 'linear' }
   */
    collapse?: AccordionActionSettingsModel;

    /**
   * Specifies the animation is to be shown while expanding the Accordion item.
   * @default { effect: 'SlideDown', duration: 400, easing: 'linear' }
   */
    expand?: AccordionActionSettingsModel;

}

/**
 * Interface for a class AccordionItem
 */
export interface AccordionItemModel {

    /**
     * Sets the text content is to be displayed for the Accordion item.
     * You can set the content of the Accordion item using `content` property.
     * It also supports to include title as the `HTML element` , `string` or `query selector`.
     * ```typescript
     *   let accordionObj: Accordion = new Accordion( { 
     *        items : [ 
     *          { header: 'Accordion Header', content: 'Accordion Content' },
     *          { header: '<div>Accordion Header</div>', content: '<div>Accordion Content</div' },
     *          { header: '#headerContent', content: '#panelContent' }]
     *        });
     *   accordionObj.appendTo('#accordion');
     * ```
     * @default undefined
     */
    content?: string;

    /**
     * Sets the header text is to be displayed for the Accordion item.
     * You can set the title of the Accordion item using `header` property.
     * It also supports to include title as the `HTML element` , `string` or `query selector`.
     * ```typescript
     *   let accordionObj: Accordion = new Accordion( { 
     *        items : [ 
     *          { header: 'Accordion Header', content: 'Accordion Content' },
     *          { header: '<div>Accordion Header</div>', content: '<div>Accordion Content</div' },
     *          { header: '#headerContent', content: '#panelContent' }]
     *        });
     *   accordionObj.appendTo('#accordion');
     * ```
     * @default undefined
     */
    header?: string;

    /**
     * Defines single / multiple classes (separated by a space ) are to be used for Accordion item customization.
     * @default undefined
     */
    cssClass?: string;

    /**
     * Defines an icon with the given custom CSS class which is to be rendered before the header text.
     * You can add the css classes to the `iconCss` property and write the css styles to the defined class to set images/icons
     * Adding icon is applied to header only.
     * ```typescript
     *   let accordionObj: Accordion = new Accordion( { 
     *        items : [ 
     *          { header: 'Accordion Header', iconCss: 'e-app-icon' }]
     *        });
     *   accordionObj.appendTo('#accordion');
     * ```
     * ```css
     * .e-app-icon::before {
     *   content: "\e710";
     * }
     * ```
     * @default undefined
     */
    iconCss?: string;

    /**
     * Sets the expand (true) or collapse (false) state of the Accordion item. Default all the items are in a collapsed state.
     * @default 'false'
     */
    expanded?: Boolean;

}

/**
 * Interface for a class Accordion
 */
export interface AccordionModel extends ComponentModel{

    /**
     * An array of item that is used to specify Accordion items.
     * ```typescript
     *   let accordionObj: Accordion = new Accordion( { 
     *        items : [ 
     *          { header: 'Accordion Header', content: 'Accordion Content' }]
     *        });
     *   accordionObj.appendTo('#accordion');
     * ```
     * @default []
     */
    items?: AccordionItemModel[];

    /**
     * Specifies the width of the Accordion in pixels/number/percentage. Number value is considered as pixels.
     * @default '100%'
     */
    width?: string | number;

    /**
     * Specifies the height of the Accordion in pixels/number/percentage. Number value is considered as pixels.
     * @default 'auto'
     */
    height?: string | number;

    /**
     * Specifies the options to expand single or multiple panel at a time.
     * Possible values are:
     * - Single - Sets to expand only one Accordion item at a time.
     * - Multiple - Sets to expand more than one Accordion item at a time.
     * @default 'Multiple'
     */
    expandMode?: ExpandMode;

    /**
     * Specifies the animation configuration settings for expanding and collapsing the panel.
     * @default { expand: { effect: 'SlideDown', duration: 400, easing: 'linear' },
     * collapse: { effect: 'SlideUp', duration: 400, easing: 'linear' }}
     */
    animation?: AccordionAnimationSettingsModel;

    /**
     * The event will be fired while clicking on the Accordion headers.
     * @event
     */
    clicked?: EmitType<AccordionClickArgs>;

    /**
     * The event will be fired before item collapsing/expanding .
     * @event
     */
    expanding?: EmitType<ExpandEventArgs>;

    /**
     * The event will be fired after item collapsed/expanded .
     * @event
     */
    expanded?: EmitType<ExpandEventArgs>;

    /**
     * The event will be fired once the control rendering is completed.
     * @event
     */
    created?: EmitType<Event>;

    /**
     * The event will be fired when the control gets destroyed.
     * @event
     */
    destroyed?: EmitType<Event>;

}