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
	* Triggers when the data source is populated in TreeView.
	*/
	dataBound(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView control is destroyed successfully.
	*/
	destroyed(value:Function): BuilderProperties;
	/**
	* Triggers before the TreeView node is appended to TreeView element. It helps to customize the specific nodes.
	*/
	drawNode(value:Function): BuilderProperties;
	/**
	* Triggers when key press successfully. It helps to customize the operations at key press.
	*/
	keyPress(value:Function): BuilderProperties;
	/**
	* Triggers when TreeView node is checked/unchecked successfully.
	*/
	nodeChecked(value:Function): BuilderProperties;
	/**
	* Triggers before TreeView node is going to be checked/unchecked.
	*/
	nodeChecking(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView node is clicked successfully.
	*/
	nodeClicked(value:Function): BuilderProperties;
	/**
	* Triggers when the TreeView node is collapsed successfully.
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
	* Triggers when a TreeView node is dropped on target element successfully.
	*/
	nodeDropped(value:Function): BuilderProperties;
	/**
	* Triggers when TreeView node is renamed successfully.
	*/
	nodeEdited(value:Function): BuilderProperties;
	/**
	* Triggers before TreeView node is going to be renamed.
	*/
	nodeEditing(value:Function): BuilderProperties;
	/**
	* Triggers when TreeView node is expanded successfully.
	*/
	nodeExpanded(value:Function): BuilderProperties;
	/**
	* Triggers before TreeView node is going to be expanded.
	*/
	nodeExpanding(value:Function): BuilderProperties;
	/**
	* Triggers when TreeView node is selected/unselected successfully.
	*/
	nodeSelected(value:Function): BuilderProperties;
	/**
	* Triggers before TreeView node is going to be selected/unselected.
	*/
	nodeSelecting(value:Function): BuilderProperties;
	/**
	* Indicates whether the TreeView allow drag-and-drop the nodes. To drag-and-drop a node in desktop, you can hold mouse on node
and drag it to the target node and drop the node by releasing the mouse. For touch devices, drag and drop operation is performed
by touch, touch move, and touch end. You can drag-and-drop a node by touch dragging in mobile. For more information on drag-and-drop
the nodes concepts, refer [Drag and Drop](http://ej2.syncfusion.com/documentation/treeview/drag-and-drop.html).
	*/
	allowDragAndDrop(value:boolean): BuilderProperties;
	/**
	* Enables or disables editing of the text in node of the TreeView. When `allowEditing` property is true,
the TreeView allows you to edit the node by double-click on the node or press **F2** key on selected node. For more information
on node editing concept, refer [Node Editing](http://ej2.syncfusion.com/documentation/treeview/node-editing.html).
	*/
	allowEditing(value:boolean): BuilderProperties;
	/**
	* Enables or disables the multi-selection of nodes in TreeView. To select multiple nodes:
* Select the nodes by hold down the **CTRL** key while clicking on the nodes.
* Select the consecutive nodes by click on first node to select and hold down the **SHIFT** key
while click on the last node to select.
For more information on multi-selection concept,
refer [Multi-Selection](http://ej2.syncfusion.com/documentation/treeview/multi-selection.html).
	*/
	allowMultiSelection(value:boolean): BuilderProperties;
	/**
	* Specifies the type of animation applied on expanding and collapsing the nodes along with duration.
	*/
	animation(value: (val:NodeAnimationSettingsModel) => void | Object): BuilderProperties;
	/**
	* Specifies the CSS classes to add with root element of the TreeView which helps to customize the appearance of the component.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Enable or disable persisting TreeView state between page reloads. If enabled, following list of states will be persisted.
1. Selected Nodes
2. Checked Nodes
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* Enables or disables the RTL mode on the component which displays the content in the direction from right to left.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Specifies an action that determines the node can expand or collapse. The available actions are,
* `auto` - The expand/collapse operation happens when double-click on the node in desktop, and the same operation happens
when single-click on the node in mobile devices.
* `click` - The expand/collapse operation happens when single-click on node in both desktop and mobile devices.
* `dblclick` - The expand/collapse operation happens when double-click on node in both desktop and mobile devices.
	*/
	expandOn(value:ExpandOnSettings): BuilderProperties;
	/**
	* Specifies the data source that the TreeView is displaying nodes, and used to map the columns to corresponding fields
such as id, text, parentID.
	*/
	fields(value: (val:FieldsSettingsModel) => void | Object): BuilderProperties;
	/**
	* Enables or disables the full node selection of TreeView. If the `fullRowSelect` property is enabled,
the entire node will be selected by clicking its text.
	*/
	fullRowSelect(value:boolean): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
	*/
	locale(value:string): BuilderProperties;
	/**
	* Specifies a template to render customized content for all nodes of a TreeView. If the `nodeTemplate` property is set,
the template content overrides the displayed node text. The property can accept both
[template string](http://ej2.syncfusion.com/documentation/base/template-engine.html) or HTML element ID that holding the content.
For more information on template concept, refer [Template](http://ej2.syncfusion.com/documentation/treeview/template.html).
	*/
	nodeTemplate(value:string): BuilderProperties;
	/**
	* Indicates the nodes will be display the CheckBoxes in the TreeView component. The CheckBox display next to
the expand/collapse icon for a node.
For more information on CheckBoxes concept, refer [CheckBox](http://ej2.syncfusion.com/documentation/treeview/checkbox.html).
	*/
	showCheckBox(value:boolean): BuilderProperties;
	/**
	* Specifies a value that indicates whether the nodes in the TreeView component are sorted in ascending or descending order,
or are not sorted. The available types of sort order are,
* `None` - The nodes are not sorted.
* `Ascending` - The nodes are sorted in ascending order.
* `Descending` - The nodes are sorted in descending order.
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
	* Binds the fields settings for child nodes or mapping field for nested nodes objects which contains array of JSON objects.
	*/
	child(value:string|FieldsSettingsModel): FieldsSettingsModel;
	/**
	* Specifies the array of JavaScript objects or instance of DataManager to populate nodes to the TreeView component.
	*/
	dataSource(value:DataManager): FieldsSettingsModel;
	/**
	* Specifies mapping field for expand state of TreeView node.
	*/
	expanded(value:string): FieldsSettingsModel;
	/**
	* Specifies mapping field for hasChildren whether a node has child nodes or not.
	*/
	hasChildren(value:string): FieldsSettingsModel;
	/**
	* Specifies mapping field for htmlAttributes, which are needed to be added in TreeView node.
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
	* Specifies mapping field for navigateUrl, which are needed to be added as hyper-link of TreeView node.
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
	* Specifies the table name. It used to fetch data from specific table in server.
	*/
	tableName(value:string): FieldsSettingsModel;
	/**
	* Specifies mapping field for text, which are displayed as TreeView node's display text.
	*/
	text(value:string): FieldsSettingsModel;
	/**
	* Specifies mapping field for tooltip, which will be displayed as hovering text of TreeView node.
	*/
	tooltip(value:string): FieldsSettingsModel;
}