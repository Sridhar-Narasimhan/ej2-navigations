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
	* Triggers when the TreeView control is created successfully.
	*/
	created(value:Function): BuilderProperties;
	/**
	* Triggers when data source is populated in the TreeView.
	*/
	dataBound(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView control is destroyed successfully.
	*/
	destroyed(value:Function): BuilderProperties;
	/**
	* Triggers before the TreeView node is appended to the TreeView element. It helps to customize specific nodes.
	*/
	drawNode(value:Function): BuilderProperties;
	/**
	* Triggers when key press is successful. It helps to customize the operations at key press.
	*/
	keyPress(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView node is checked/unchecked successfully.
	*/
	nodeChecked(value:Function): BuilderProperties;
	/**
	* Triggers before the TreeView node is to be checked/unchecked.
	*/
	nodeChecking(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView node is clicked successfully.
	*/
	nodeClicked(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView node collapses successfully.
	*/
	nodeCollapsed(value:Function): BuilderProperties;
	/**
	* Triggers before the TreeView node collapses.
	*/
	nodeCollapsing(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView node drag (move) starts.
	*/
	nodeDragStart(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView node drag (move) is stopped.
	*/
	nodeDragStop(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView node is dragged (moved) continuously.
	*/
	nodeDragging(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView node is dropped on target element successfully.
	*/
	nodeDropped(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView node is renamed successfully.
	*/
	nodeEdited(value:Function): BuilderProperties;
	/**
	* Triggers before the TreeView node is renamed.
	*/
	nodeEditing(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView node expands successfully.
	*/
	nodeExpanded(value:Function): BuilderProperties;
	/**
	* Triggers before the TreeView node is to be expanded.
	*/
	nodeExpanding(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView node is selected/unselected successfully.
	*/
	nodeSelected(value:Function): BuilderProperties;
	/**
	* Triggers before the TreeView node is selected/unselected.
	*/
	nodeSelecting(value:Function): BuilderProperties;
	/**
	* Indicates whether the TreeView allows drag and drop of nodes. To drag and drop a node in
desktop, hold the mouse on the node, drag it to the target node and drop the node by releasing
the mouse. For touch devices, drag and drop operation is performed by touch, touch move
and touch end. For more information on drag and drop nodes concept, refer to
[Drag and Drop](http://ej2.syncfusion.com/documentation/treeview/drag-and-drop.html).
	*/
	allowDragAndDrop(value:boolean): BuilderProperties;
	/**
	* Enables or disables editing of the text in the TreeView node. When `allowEditing` property is set
to true, the TreeView allows you to edit the node by double clicking the node or by navigating to
the node and pressing **F2** key. For more information on node editing, refer
to [Node Editing](http://ej2.syncfusion.com/documentation/treeview/node-editing.html).
	*/
	allowEditing(value:boolean): BuilderProperties;
	/**
	* Enables or disables multi-selection of nodes. To select multiple nodes:
* Select the nodes by holding down the CTRL key while clicking on the nodes.
* Select consecutive nodes by clicking the first node to select and hold down the **SHIFT** key
and click the last node to select.
	*/
	allowMultiSelection(value:boolean): BuilderProperties;
	/**
	* Specifies the type of animation applied on expanding and collapsing the nodes along with duration.
	*/
	animation(value: (val:NodeAnimationSettingsModel) => void | Object): BuilderProperties;
	/**
	* Specifies the CSS classes to be added with root element of the TreeView to help customize the appearance of the component.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Enables or disables persisting TreeView state between page reloads. If enabled, following states will persist.
1. Selected Nodes
2. Checked Nodes
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* Enables or disables RTL mode on the component that displays the content in the right to left direction.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Specifies an action that determines whether the node can expand or collapse. The available actions are,
* `auto` - The expand/collapse operation happens when you double-click the node in desktop, and when you single-click
the node in mobile devices.
* `click` - The expand/collapse operation happens when you single-click the node in both desktop and mobile devices.
* `dblclick` - The expand/collapse operation happens when you double-click the node in both desktop and mobile devices.
	*/
	expandOn(value:ExpandOnSettings): BuilderProperties;
	/**
	* Specifies the data source and mapping fields to render TreeView nodes.
	*/
	fields(value: (val:FieldsSettingsModel) => void | Object): BuilderProperties;
	/**
	* Enables or disables the full node selection. If the `fullRowSelect` property is enabled, all the
nodes will be selected by clicking its text.
	*/
	fullRowSelect(value:boolean): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
	/**
	* Specifies a template to render customized content for all the nodes. If the `nodeTemplate` property
is set, the template content overrides the displayed node text. The property accepts template string
[template string](http://ej2.syncfusion.com/documentation/base/template-engine.html)
or HTML element ID holding the content. For more information on template concept, refer to
[Template](http://ej2.syncfusion.com/documentation/treeview/template.html).
	*/
	nodeTemplate(value:string): BuilderProperties;
	/**
	* Indicates that the nodes will display CheckBoxes in the TreeView.
The CheckBox will be displayed next to the expand/collapse icon of the node. For more information on CheckBoxes, refer to
CheckBox](http://ej2.syncfusion.com/documentation/treeview/checkbox.html).
	*/
	showCheckBox(value:boolean): BuilderProperties;
	/**
	* Specifies a value that indicates whether the nodes are sorted in the ascending or descending order,
or are not sorted at all. The available types of sort order are,
* `None` - The nodes are not sorted.
* `Ascending` - The nodes are sorted in the ascending order.
* `Descending` - The nodes are sorted in the ascending order.
	*/
	sortOrder(value:SortOrder): BuilderProperties;
}
export interface ActionSettingsModel {
	/**
	* Specifies the duration to animate.
	*/
	duration(value:number): ActionSettingsModel;
	/**
	* Specifies the animation timing function.
	*/
	easing(value:string): ActionSettingsModel;
	/**
	* Specifies the type of animation.
	*/
	effect(value:Effect): ActionSettingsModel;
}
export interface NodeAnimationSettingsModel {
	/**
	* Specifies the animation that applies on collapsing the nodes.
	*/
	collapse(value: (val:ActionSettingsModel) => void | Object): NodeAnimationSettingsModel;
	/**
	* Specifies the animation that applies on expanding the nodes.
	*/
	expand(value: (val:ActionSettingsModel) => void | Object): NodeAnimationSettingsModel;
}
export interface FieldsSettingsModel {
	/**
	* Binds the field settings for child nodes or mapping field for nested nodes objects that contain array of JSON objects.
	*/
	child(value:string|FieldsSettingsModel): FieldsSettingsModel;
	/**
	* Specifies the array of JavaScript objects or instance of DataManager to populate the nodes.
	*/
	dataSource(value:DataManager): FieldsSettingsModel;
	/**
	* Specifies the mapping field for expand state of the TreeView node.
	*/
	expanded(value:string): FieldsSettingsModel;
	/**
	* Specifies the mapping field for hasChildren to check whether a node has child nodes or not.
	*/
	hasChildren(value:string): FieldsSettingsModel;
	/**
	* Specifies the mapping field for htmlAttributes to be added to the TreeView node.
	*/
	htmlAttributes(value:string): FieldsSettingsModel;
	/**
	* Specifies the mapping field for icon class of each TreeView node that will be added before the text.
	*/
	iconCss(value:string): FieldsSettingsModel;
	/**
	* Specifies the ID field mapped in dataSource.
	*/
	id(value:string): FieldsSettingsModel;
	/**
	* Specifies the mapping field for image URL of each TreeView node where image will be added before the text.
	*/
	imageUrl(value:string): FieldsSettingsModel;
	/**
	* Specifies the field for checked state of the TreeView node.
	*/
	isChecked(value:string): FieldsSettingsModel;
	/**
	* Specifies the mapping field for navigateUrl to be added as hyper-link of the TreeView node.
	*/
	navigateUrl(value:string): FieldsSettingsModel;
	/**
	* Specifies the parent ID field mapped in dataSource.
	*/
	parentID(value:string): FieldsSettingsModel;
	/**
	* Defines the external [`Query`](http://ej2.syncfusion.com/documentation/data/api-query.html)
that will execute along with data processing.
	*/
	query(value:Query): FieldsSettingsModel;
	/**
	* Specifies the mapping field for selected state of the TreeView node.
	*/
	selected(value:string): FieldsSettingsModel;
	/**
	* Specifies the table name used to fetch data from a specific table in the server.
	*/
	tableName(value:string): FieldsSettingsModel;
	/**
	* Specifies the mapping field for text displayed as TreeView node's display text.
	*/
	text(value:string): FieldsSettingsModel;
	/**
	* Specifies the mapping field for tooltip that will be displayed as hovering text of the TreeView node.
	*/
	tooltip(value:string): FieldsSettingsModel;
}