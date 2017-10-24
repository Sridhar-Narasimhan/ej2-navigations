import{TreeView} from "./treeview";
import { rippleEffect, Effect, Animation, AnimationOptions, RippleOptions } from '@syncfusion/ej2-base';
import { TreeViewModel, FieldsSettingsModel, NodeAnimationSettingsModel, ActionSettingsModel } from './treeview-model';
import { DataManager, Query } from '@syncfusion/ej2-data';
import{ ExpandOnSettings, SortOrder} from "./treeview";

export interface TreeViewHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): TreeView
	/**
	* Triggers when the TreeView control created successfully.
	*/
	created(value:Function): BuilderProperties;
	/**
	* Triggers when data source is populated in the TreeView.
	*/
	dataBound(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView control destroyed successfully.
	*/
	destroyed(value:Function): BuilderProperties;
	/**
	* Triggers before the TreeView node is appended to TreeView element. You can customize the specific node in this event.
	*/
	drawNode(value:Function): BuilderProperties;
	/**
	* Triggers when key press successfully. It helps to customize the operations at key press.
	*/
	keyPress(value:Function): BuilderProperties;
	/**
	* Triggers when TreeView node was checked/unchecked.
	*/
	nodeChecked(value:Function): BuilderProperties;
	/**
	* Triggers before TreeView node is going to be checked/unchecked.
	*/
	nodeChecking(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView node was clicked.
	*/
	nodeClicked(value:Function): BuilderProperties;
	/**
	* Triggers when a TreeView was collapsed.
	*/
	nodeCollapsed(value:Function): BuilderProperties;
	/**
	* Triggers before TreeView node is going to be collapsed.
	*/
	nodeCollapsing(value:Function): BuilderProperties;
	/**
	* Triggers when a TreeView node is drag(move) started.
	*/
	nodeDragStart(value:Function): BuilderProperties;
	/**
	* Triggers when a TreeView node is dragging(move) stopped.
	*/
	nodeDragStop(value:Function): BuilderProperties;
	/**
	* Triggers when a TreeView node is dragged (moved) continuously.
	*/
	nodeDragging(value:Function): BuilderProperties;
	/**
	* Triggers when a TreeView node is dropped on target element.
	*/
	nodeDropped(value:Function): BuilderProperties;
	/**
	* Triggers when TreeView node was renamed successfully.
	*/
	nodeEdited(value:Function): BuilderProperties;
	/**
	* Triggers before TreeView node is going to be renamed.
	*/
	nodeEditing(value:Function): BuilderProperties;
	/**
	* Triggers when TreeView node was expanded.
	*/
	nodeExpanded(value:Function): BuilderProperties;
	/**
	* Triggers before TreeView node is going to be expanded.
	*/
	nodeExpanding(value:Function): BuilderProperties;
	/**
	* Triggers when TreeView node was selected/unselected.
	*/
	nodeSelected(value:Function): BuilderProperties;
	/**
	* Triggers before TreeView node is going to be selected/unselected.
	*/
	nodeSelecting(value:Function): BuilderProperties;
	/**
	* Enable or disable node drag and drop option in TreeView.
	*/
	allowDragAndDrop(value:boolean): BuilderProperties;
	/**
	* Enable or disable editing option in TreeView.
	*/
	allowEditing(value:boolean): BuilderProperties;
	/**
	* Enable or disable multi selection option in TreeView.
	*/
	allowMultiSelection(value:boolean): BuilderProperties;
	/**
	* Specifies the animation configuration settings for expanding and collapsing node.
	*/
	animation(value: (val:NodeAnimationSettingsModel) => void | Object): BuilderProperties;
	/**
	* Specifies the CSS classes to root element of the TreeView component which helps to customize the complete UI styles.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Enable or disable persisting component's state between page reloads.
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* Enable or disable the RTL mode on the component which displays the content in the direction from right to left.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Specifies the action to expand or collapse the TreeView node.
	*/
	expandOn(value:ExpandOnSettings): BuilderProperties;
	/**
	* The fields property maps the columns of the data table and binds the data to the component.
	*/
	fields(value: (val:FieldsSettingsModel) => void | Object): BuilderProperties;
	/**
	* Enable or disable full row selection option in TreeView.
	*/
	fullRowSelect(value:boolean): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
	/**
	* The node template which renders customized nodes from given template.
	*/
	nodeTemplate(value:string): BuilderProperties;
	/**
	* Gets or sets a value that indicates whether to display or hide CheckBox for all TreeView nodes
	*/
	showCheckBox(value:boolean): BuilderProperties;
	/**
	* Specifies the sort order to sort the data source.
	*/
	sortOrder(value:SortOrder): BuilderProperties;
}
export interface ActionSettingsModel {
	/**
	* Specify the duration to animate.
	*/
	duration(value:number): ActionSettingsModel;
	/**
	* Specify the animation timing function.
	*/
	easing(value:string): ActionSettingsModel;
	/**
	* Specify the type of animation.
	*/
	effect(value:Effect): ActionSettingsModel;
}
export interface NodeAnimationSettingsModel {
	/**
	* Specifies the animation settings for collapsing node.
	*/
	collapse(value: (val:ActionSettingsModel) => void | Object): NodeAnimationSettingsModel;
	/**
	* Specifies the animation settings for expanding node.
	*/
	expand(value: (val:ActionSettingsModel) => void | Object): NodeAnimationSettingsModel;
}
export interface FieldsSettingsModel {
	/**
	* Specifies child data source fields or child mapping fields of child nodes.
	*/
	child(value:string|FieldsSettingsModel): FieldsSettingsModel;
	/**
	* Specifies the array of JSON objects or data manager to generate TreeView nodes.
	*/
	dataSource(value:DataManager): FieldsSettingsModel;
	/**
	* Specifies mapping field for expand state of TreeView node.
	*/
	expanded(value:string): FieldsSettingsModel;
	/**
	* Specifies mapping hasChildren field whether a node has child nodes or not.
	*/
	hasChildren(value:string): FieldsSettingsModel;
	/**
	* Specifies mapping field for htmlAttributes, which are need to be added in TreeView node.
	*/
	htmlAttributes(value:string): FieldsSettingsModel;
	/**
	* Specifies mapping field for the icon class of each TreeView node which will be added before to inner text.
	*/
	iconCss(value:string): FieldsSettingsModel;
	/**
	* Specifies ID field that mapped in dataSource.
	*/
	id(value:string): FieldsSettingsModel;
	/**
	* Specifies mapping field for the image url of each TreeView node and image will be added before to inner text.
	*/
	imageUrl(value:string): FieldsSettingsModel;
	/**
	* Specifies mapping field for checked state of TreeView node.
	*/
	isChecked(value:string): FieldsSettingsModel;
	/**
	* Specifies TreeView node hyper-link field.
	*/
	navigateUrl(value:string): FieldsSettingsModel;
	/**
	* Specifies parent ID field that mapped in dataSource.
	*/
	parentID(value:string): FieldsSettingsModel;
	/**
	* Defines the external [`Query`](http://ej2.syncfusion.com/documentation/data/api-query.html)
which will execute along with data processing.
	*/
	query(value:Query): FieldsSettingsModel;
	/**
	* Specifies mapping field for selected state of TreeView node.
	*/
	selected(value:string): FieldsSettingsModel;
	/**
	* Specifies when need to fetch specific table from remote data.
	*/
	tableName(value:string): FieldsSettingsModel;
	/**
	* Specifies TreeView node display text field.
	*/
	text(value:string): FieldsSettingsModel;
	/**
	* Specifies TreeView node hovering text field.
	*/
	tooltip(value:string): FieldsSettingsModel;
}