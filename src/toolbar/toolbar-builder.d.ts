import{Toolbar} from "./toolbar";

import{ ItemType, DisplayMode, OverflowOption, OverflowMode, ItemAlign} from "./toolbar";

export interface ToolbarHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): Toolbar
	/**
	* The event will be fired before the control rendered on a page.
	*/
	beforeCreate(value:Function): BuilderProperties;
	/**
	* The event will be fired while clicking on the toolbar elements.
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
	* Enable or disable persisting component's state between page reloads.
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* Specifies the direction of the toolbar commands. For the cultures like Arabic, direction can be switched as right to left.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Specifies the height of the toolbar in pixels/number/percentage. Number value is considered as pixels.
	*/
	height(value:string|number): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* An array of item that is used to configure toolbar commands.
	*/
	items(value: (val:ItemModel) => void | Object): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component.
	*/
	locale(value:string): BuilderProperties;
	/**
	* Specifies the toolbar display mode when toolbar content exceeds the viewing area.
Possible modes are:
- Scrollable - All the elements are displayed in a single line with horizontal scrolling enabled.
- Popup - Prioritized elements are displayed in toolbar and rest of elements are moved to *popup*.
If the popup content overflows the height of the page, the rest of the elements will be hidden.
	*/
	overflowMode(value:OverflowMode): BuilderProperties;
	/**
	* Specifies the width of the toolbar in pixels/number/percentage. Number value is considered as pixels.
	*/
	width(value:string|number): BuilderProperties;
}
export interface ItemModel {
	/**
	* Specifies the location for aligning items in the toolbar. Each command will be aligned according to the `align` property.
Possible values are:
- Left – Places the items to the `left` start of the toolbar.
- Center - Places the items to the `center` to the toolbar.
- Right - Places the items to the `right` end of the toolbar.
	*/
	align(value:ItemAlign): ItemModel;
	/**
	* Defines single / multiple classes (separated by space ) are to be used for commands customization.
	*/
	cssClass(value:string): ItemModel;
	/**
	* Defines a htmlAttributes which can be used for adding custom attributes to toolbar command.
Supports HTML attributes such as style, class, etc.
	*/
	htmlAttributes(value:Object): ItemModel;
	/**
	* Specifies the unique id to be used with button or input element of toolbar items.
	*/
	id(value:string): ItemModel;
	/**
	* Specifies the toolbar command display area when an element's content is large to fit in an available space.
Applicable to `popup` mode only. Possible values are:
- show - Always shows item in *toolbar* with primary priority.
- hide - Always shows item in *popup* with secondary priority.
- none - No priority considers to display and as per the normal order control moves to popup when content exceeds.
	*/
	overflow(value:OverflowOption): ItemModel;
	/**
	* Defines single / multiple classes separated by space which can be used to specify an icon for the button.
The icon will be positioned before the text content if text available, else icon alone button will be rendered.
	*/
	prefixIcon(value:string): ItemModel;
	/**
	* Specifies where the button text will be displayed in *popup mode* of the toolbar.
Possible values are:
- Toolbar - Text will be displayed in *toolbar* only.
- Overflow - Text will be displayed when content overflowed to *popup* only.
- Both - Text will be displayed in *popup* and *toolbar*.
	*/
	showTextOn(value:DisplayMode): ItemModel;
	/**
	* Defines single / multiple classes separated by space which can be used to specify an icon for the button.
The icon will be positioned after the text content if text available.
	*/
	suffixIcon(value:string): ItemModel;
	/**
	* Specifies the HTML element / element id as a string which can be added as toolbar command.
```
E.g - items: [{ template: '<input placeholder="Search"/>' },{ template: '#checkbox1' }]
```
	*/
	template(value:string|Object): ItemModel;
	/**
	* Specifies the text to be displayed on the toolbar button.
	*/
	text(value:string): ItemModel;
	/**
	* Sets the text that appears as a html tooltip in the toolbar command.
	*/
	tooltipText(value:string): ItemModel;
	/**
	* Specifies the types of command to be rendered in the toolbar.
Supported types are:
- Button - Creates the button control with its given properties like text, prefixIcon, etc.
- Separator - Adds a horizontal line that separates the toolbar commands.
- Input - Creates an input element and it's applicable to template rendering with Syncfusion controls like drop down list,
auto complete, etc.
	*/
	type(value:ItemType): ItemModel;
	/**
	* Specifies the width of the toolbar button commands.
	*/
	width(value:number|string): ItemModel;
	add(): ItemModel;
}