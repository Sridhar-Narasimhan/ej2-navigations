import{Toolbar} from "./toolbar";

import{ OverflowMode} from "./toolbar";

export interface ToolbarHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): Toolbar
	/**
	* The event will be fired before the control is rendered on a page.
	*/
	beforeCreate(value:Function): BuilderProperties;
	/**
	* The event will be fired on clicking the Toolbar elements.
	*/
	clicked(value:Function): BuilderProperties;
	/**
	* The event will be fired when the control is rendered.
	*/
	created(value:Function): BuilderProperties;
	/**
	* The event will be fired when the control gets destroyed.
	*/
	destroyed(value:Function): BuilderProperties;
	/**
	* Enable or disable persisting component's state between page reloads.
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* Specifies the direction of the Toolbar commands. For cultures like Arabic, Hebrew, etc. direction can be switched to right to left.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Specifies the height of the Toolbar in pixels/number/percentage. Number value is considered as pixels.
	*/
	height(value:string|number): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
	/**
	* Specifies the Toolbar display mode when Toolbar content exceeds the viewing area.
Possible modes are:
- Scrollable: All the elements are displayed in a single line with horizontal scrolling enabled.
- Popup: Prioritized elements are displayed on the Toolbar and the rest of elements are moved to the *popup*.
If the popup content overflows the height of the page, the rest of the elements will be hidden.
	*/
	overflowMode(value:OverflowMode): BuilderProperties;
	/**
	* Specifies the width of the Toolbar in pixels/numbers/percentage. Number value is considered as pixels.
	*/
	width(value:string|number): BuilderProperties;
}