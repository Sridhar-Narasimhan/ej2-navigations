import{Accordion} from "./accordion";

import{ ExpandMode, AccordionEffect} from "./accordion";

export interface AccordionHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): Accordion
	/**
	* The event will be fired while clicking on the Accordion headers.
	*/
	clicked(value:Function): BuilderProperties;
	/**
	* The event will be fired once the control rendering is completed.
	*/
	created(value:Function): BuilderProperties;
	/**
	* The event will be fired when the control gets destroyed.
	*/
	destroyed(value:Function): BuilderProperties;
	/**
	* The event will be fired after the item gets collapsed/expanded.
	*/
	expanded(value:Function): BuilderProperties;
	/**
	* The event will be fired before the item gets collapsed/expanded.
	*/
	expanding(value:Function): BuilderProperties;
	/**
	* Specifies the animation configuration settings for expanding and collapsing the panel.
	*/
	animation(value: (val:AccordionAnimationSettingsModel) => void | Object): BuilderProperties;
	/**
	* Enable or disable persisting component's state between page reloads.
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* Enable or disable rendering component in right to left direction.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Specifies the options to expand single or multiple panel at a time.
The possible values are:
- Single: Sets to expand only one Accordion item at a time.
- Multiple: Sets to expand more than one Accordion item at a time.
	*/
	expandMode(value:ExpandMode): BuilderProperties;
	/**
	* Specifies the height of the Accordion in pixels/number/percentage. Number value is considered as pixels.
	*/
	height(value:string|number): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
	/**
	* Specifies the width of the Accordion in pixels/number/percentage. Number value is considered as pixels.
	*/
	width(value:string|number): BuilderProperties;
}
export interface AccordionActionSettingsModel {
	/**
	* Specifies the duration to animate.
	*/
	duration(value:number): AccordionActionSettingsModel;
	/**
	* Specifies the animation timing function.
	*/
	easing(value:string): AccordionActionSettingsModel;
	/**
	* Specifies the type of animation.
	*/
	effect(value:AccordionEffect): AccordionActionSettingsModel;
}
export interface AccordionAnimationSettingsModel {
	/**
	* Specifies the animation to appear while collapsing the Accordion item.
	*/
	collapse(value: (val:AccordionActionSettingsModel) => void | Object): AccordionAnimationSettingsModel;
	/**
	* Specifies the animation to appear while expanding the Accordion item.
	*/
	expand(value: (val:AccordionActionSettingsModel) => void | Object): AccordionAnimationSettingsModel;
}