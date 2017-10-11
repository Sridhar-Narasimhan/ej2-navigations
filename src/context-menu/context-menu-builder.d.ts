import{ContextMenu} from "./context-menu";

import{ MenuEffect} from "./context-menu";

export interface ContextMenuHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): ContextMenu
	/**
	* Triggers while rendering each menu item.
	*/
	beforeItemRender(value:Function): BuilderProperties;
	/**
	* Triggers before opening the menu item.
	*/
	beforeOpen(value:Function): BuilderProperties;
	/**
	* Triggers while closing menu item.
	*/
	onClose(value:Function): BuilderProperties;
	/**
	* Triggers while opening menu item.
	*/
	onOpen(value:Function): BuilderProperties;
	/**
	* Triggers while selecting menu item.
	*/
	select(value:Function): BuilderProperties;
	/**
	* Specifies the animation settings for sub menu open.
	*/
	animationSettings(value: (val:MenuAnimationSettings) => void | Object): BuilderProperties;
	/**
	* Defines class/multiple classes separated by a space in the ContextMenu wrapper.
ContextMenu customization can be achieved using this.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Enable or disable persisting component's state between page reloads.
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* Enable or disable rendering component in right to left direction.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Specifies the filter selector for elements inside the target in which the context menu will be opened.
	*/
	filter(value:string): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
	/**
	* Specifies whether to show sub menu on click or not.
When set to true, the sub menu will open only on mouse click.
	*/
	showItemOnClick(value:boolean): BuilderProperties;
	/**
	* Specifies target element selector in which ContextMenu should be opened.
	*/
	target(value:string): BuilderProperties;
}
export interface MenuAnimationSettings {
	/**
	* Specifies time duration to transform object.
	*/
	duration(value:number): MenuAnimationSettings;
	/**
	* Specifies easing effect applied while transform.
	*/
	easing(value:string): MenuAnimationSettings;
	/**
	* Specifies effect that shown in sub menu transform.
	*/
	effect(value:MenuEffect): MenuAnimationSettings;
}