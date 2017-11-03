import{Tab} from "./tab";

import{ OverflowMode} from "../toolbar/toolbar";
import{ headerPosition, heightStyles, TabEffect} from "./tab";

export interface TabHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): Tab
	/**
	* The event will be fired after adding the item to the Tab.
	*/
	added(value:Function): BuilderProperties;
	/**
	* The event will be fired before adding the item to the Tab.
	*/
	adding(value:Function): BuilderProperties;
	/**
	* The event will be fired once the component rendering is completed.
	*/
	created(value:Function): BuilderProperties;
	/**
	* The event will be fired when the component gets destroyed.
	*/
	destroyed(value:Function): BuilderProperties;
	/**
	* The event will be fired after removing the item from the Tab.
	*/
	removed(value:Function): BuilderProperties;
	/**
	* The event will be fired before removing the item from the Tab.
	*/
	removing(value:Function): BuilderProperties;
	/**
	* The event will be fired after the item gets selected.
	*/
	selected(value:Function): BuilderProperties;
	/**
	* The event will be fired before the item gets selected.
	*/
	selecting(value:Function): BuilderProperties;
	/**
	* Specifies the animation configuration settings while showing the content of the Tab.
	*/
	animation(value: (val:TabAnimationSettingsModel) => void | Object): BuilderProperties;
	/**
	* Sets the CSS classes to root element of the Tab that helps to customize component styles.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Enable or disable persisting component's state between page reloads.
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* Specifies the direction of the Tab. For the culture like Arabic, direction can be switched as right-to-left.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Specifies the orientation of Tab header.
The possible values are:
- Top: Places the Tab header on the top.
- Bottom: Places the Tab header at the bottom.
	*/
	headerPlacement(value:headerPosition): BuilderProperties;
	/**
	* Specifies the height of the Tab component. By default, Tab height is set based on the height of its parent.
To use height property, heightAdjustMode must be set to 'None'.
	*/
	height(value:string|number): BuilderProperties;
	/**
	* Specifies the height style for Tab content.
The possible values are:
- None: Based on the given height property, the content panel height is set.
- Auto: Tallest panel height of a given Tab content is set to all the other panels.
- Content: Based on the corresponding content height, the content panel height is set.
- Fill: Based on the parent height, the content panel hight is set.
	*/
	heightAdjustMode(value:heightStyles): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
	/**
	* Specifies the Tab display mode when Tab content exceeds the viewing area.
The possible modes are:
- Scrollable: All the elements are displayed in a single line with horizontal scrolling enabled.
- Popup: Tab container holds the items that can be placed within the available space and rest of the items are moved to the popup.
If the popup content overflows the height of the page, the rest of the elements can be viewed by scrolling the popup.
	*/
	overflowMode(value:OverflowMode): BuilderProperties;
	/**
	* Specifies the index for activating the current Tab item.
```typescript
  let tabObj: Tab = new Tab( {
    selectedItem: 1,
    items: [
      { header: { text: 'TabItem1' }, content: 'Tab Item1 Content' },
      { header: { text: 'TabItem2' }, content: 'Tab Item2 Content' }
    ]
  });
  tabObj.appendTo('#tab');
```
	*/
	selectedItem(value:number): BuilderProperties;
	/**
	* Specifies whether to show the close button for header items to remove the item from the Tab.
	*/
	showCloseButton(value:boolean): BuilderProperties;
	/**
	* Specifies the width of the Tab component. Default, Tab width sets based on the width of its parent.
	*/
	width(value:string|number): BuilderProperties;
}
export interface TabActionSettingsModel {
	/**
	* Specifies the time duration to transform content.
	*/
	duration(value:number): TabActionSettingsModel;
	/**
	* Specifies easing effect applied while transforming content.
	*/
	easing(value:string): TabActionSettingsModel;
	/**
	* Specifies the animation effect for displaying Tab content.
	*/
	effect(value:TabEffect): TabActionSettingsModel;
}
export interface TabAnimationSettingsModel {
	/**
	* Specifies the animation to appear while moving to next Tab content.
	*/
	next(value: (val:TabActionSettingsModel) => void | Object): TabAnimationSettingsModel;
	/**
	* Specifies the animation to appear while moving to previous Tab content.
	*/
	previous(value: (val:TabActionSettingsModel) => void | Object): TabAnimationSettingsModel;
}