import { Component, EmitType, isUndefined, CreateBuilder, Browser, compile } from '@syncfusion/ej2-base';import { Property, INotifyPropertyChanged, NotifyPropertyChanges, ChildProperty, Complex } from '@syncfusion/ej2-base';import { Event, EventHandler, KeyboardEvents, KeyboardEventArgs } from '@syncfusion/ej2-base';import { rippleEffect, Effect, Animation, AnimationOptions, RippleOptions } from '@syncfusion/ej2-base';import { Draggable, DragEventArgs, Droppable, DropEventArgs } from '@syncfusion/ej2-base';import { addClass, removeClass, closest, matches, detach, select, selectAll, isVisible, createElement, append } from '@syncfusion/ej2-base';import { DataManager, Query } from '@syncfusion/ej2-data';import { isNullOrUndefined as isNOU, Touch, TapEventArgs } from '@syncfusion/ej2-base';import { ListBase, ListBaseOptions, AriaAttributesMapping, FieldsMapping } from '@syncfusion/ej2-lists';import { createCheckBox } from '@syncfusion/ej2-buttons';import { Input, InputObject } from '@syncfusion/ej2-inputs';import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';import { TreeViewHelper } from './treeview-builder';
import {ExpandOnSettings,SortOrder,DataBoundEventArgs,DrawNodeEventArgs,NodeKeyPressEventArgs,NodeCheckEventArgs,NodeClickEventArgs,NodeExpandEventArgs,DragAndDropEventArgs,NodeEditEventArgs,NodeSelectEventArgs} from "./treeview";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class FieldsSettings
 */
export interface FieldsSettingsModel {

    /**
     * Binds the fields settings for child nodes or mapping field for nested nodes objects which contains array of JSON objects.
     */
    child?: string | FieldsSettingsModel;

    /**
     * Specifies the array of JavaScript objects or instance of DataManager to populate nodes to the TreeView component.
     * @default []
     */
    dataSource?: { [key: string]: Object }[] | DataManager;

    /**
     * Specifies mapping field for expand state of TreeView node.
     */
    expanded?: string;

    /**
     * Specifies mapping field for hasChildren whether a node has child nodes or not.
     */
    hasChildren?: string;

    /**
     * Specifies mapping field for htmlAttributes, which are needed to be added in TreeView node.
     */
    htmlAttributes?: string;

    /**
     * Specifies mapping field for the icon class of each TreeView node which will be added before to inner text.
     */
    iconCss?: string;

    /**
     * Specifies ID field that mapped in dataSource.
     */
    id?: string;

    /**
     * Specifies mapping field for the image url of each TreeView node and image will be added before to inner text.
     */
    imageUrl?: string;

    /**
     * Specifies mapping field for checked state of TreeView node.
     */
    isChecked?: string;

    /**
     * Specifies parent ID field that mapped in dataSource.
     */
    parentID?: string;

    /**
     * Defines the external [`Query`](http://ej2.syncfusion.com/documentation/data/api-query.html) 
     * which will execute along with data processing.    
     * @default null    
     */
    query?: Query;

    /**
     * Specifies mapping field for selected state of TreeView node.
     */
    selected?: string;

    /**
     * Specifies the table name. It used to fetch data from specific table in server.
     */
    tableName?: string;

    /**
     * Specifies mapping field for text, which are displayed as TreeView node's display text.
     */
    text?: string;

    /**
     * Specifies mapping field for tooltip, which will be displayed as hovering text of TreeView node.
     */
    tooltip?: string;

    /**
     * Specifies mapping field for navigateUrl, which are needed to be added as hyper-link of TreeView node.
     */
    navigateUrl?: string;

}

/**
 * Interface for a class ActionSettings
 */
export interface ActionSettingsModel {

    /**
     * Specify the type of animation.
     * @default : 'SlideDown';
     */
    effect?: Effect;

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
 * Interface for a class NodeAnimationSettings
 */
export interface NodeAnimationSettingsModel {

    /**
     * Specifies the animation that applies on collapsing the nodes.
     * @default { effect: 'SlideUp', duration: 400, easing: 'linear' }
     */
    collapse?: ActionSettingsModel;

    /**
     * Specifies the animation that applies on expanding the nodes.
     * @default { effect: 'SlideDown', duration: 400, easing: 'linear' }
     */
    expand?: ActionSettingsModel;

}

/**
 * Interface for a class TreeView
 */
export interface TreeViewModel extends ComponentModel{

    /**
     * Indicates whether the TreeView allow drag-and-drop the nodes. To drag-and-drop a node in desktop, you can hold mouse on node
     * and drag it to the target node and drop the node by releasing the mouse. For touch devices, drag and drop operation is performed
     * by touch, touch move, and touch end. You can drag-and-drop a node by touch dragging in mobile. For more information on drag-and-drop
     * the nodes concepts, refer [Drag and Drop](http://ej2.syncfusion.com/documentation/treeview/drag-and-drop.html).
     * @default false
     */
    allowDragAndDrop?: boolean;

    /**
     * Enables or disables editing of the text in node of the TreeView. When `allowEditing` property is true,
     * the TreeView allows you to edit the node by double-click on the node or press **F2** key on selected node. For more information
     * on node editing concept, refer [Node Editing](http://ej2.syncfusion.com/documentation/treeview/node-editing.html).
     * @default false
     */
    allowEditing?: boolean;

    /**
     * Enables or disables the multi-selection of nodes in TreeView. To select multiple nodes:
     * * Select the nodes by hold down the **CTRL** key while clicking on the nodes.
     * * Select the consecutive nodes by click on first node to select and hold down the **SHIFT** key
     * while click on the last node to select.
     * For more information on multi-selection concept,
     * refer [Multi-Selection](http://ej2.syncfusion.com/documentation/treeview/multi-selection.html).
     * @default false
     */
    allowMultiSelection?: boolean;

    /**
     * Specifies the type of animation applied on expanding and collapsing the nodes along with duration.
     * @default {expand: { effect: 'SlideDown', duration: 400, easing: 'linear' },
     * collapse: { effect: 'SlideUp', duration: 400, easing: 'linear' }}
     */
    animation?: NodeAnimationSettingsModel;

    /**
     * The `checkedNodes` property used to determine which nodes to be checked or which nodes are checked already in the TreeView component.
     * The `checkedNodes` property is depending on the value of `showCheckBox` property.
     * @default []
     */
    checkedNodes?: string[];

    /**
     * Specifies the CSS classes to add with root element of the TreeView which helps to customize the appearance of the component.
     * @default ''
     */
    cssClass?: string;

    /**
     * Enable or disable persisting TreeView state between page reloads. If enabled, following list of states will be persisted.
     * 1. Selected Nodes
     * 2. Checked Nodes
     * @default false
     */
    enablePersistence?: boolean;

    /**
     * Enables or disables the RTL mode on the component which displays the content in the direction from right to left.
     * @default false
     */
    enableRtl?: boolean;

    /**
     * Specifies an action that determines the node can expand or collapse. The available actions are,
     * * `auto` - The expand/collapse operation happens when double-click on the node in desktop, and the same operation happens
     * when single-click on the node in mobile devices.
     * * `click` - The expand/collapse operation happens when single-click on node in both desktop and mobile devices.
     * * `dblclick` - The expand/collapse operation happens when double-click on node in both desktop and mobile devices.
     * @default 'auto'
     */
    expandOn?: ExpandOnSettings;

    /**
     * Specifies the data source that the TreeView is displaying nodes, and used to map the columns to corresponding fields
     * such as id, text, parentID.
     * @default {id: 'id', text: 'text', dataSource: [], child: 'child', parentID: 'parentID', hasChildren: 'hasChildren',
     *  expanded: 'expanded', htmlAttributes: 'htmlAttributes', iconCss: 'iconCss', imageUrl: 'imageUrl', isChecked: 'isChecked',
     *  query: null, selected: 'selected', tableName: null, tooltip: 'tooltip', navigateUrl: 'navigateUrl'}
     */
    fields?: FieldsSettingsModel;

    /**
     * Enables or disables the full node selection of TreeView. If the `fullRowSelect` property is enabled,
     * the entire node will be selected by clicking its text.
     * @default true
     */
    fullRowSelect?: boolean;

    /**
     * Specifies a template to render customized content for all nodes of a TreeView. If the `nodeTemplate` property is set,
     * the template content overrides the displayed node text. The property can accept both
     * [template string](http://ej2.syncfusion.com/documentation/base/template-engine.html) or HTML element ID that holding the content.
     * For more information on template concept, refer [Template](http://ej2.syncfusion.com/documentation/treeview/template.html).
     * @default null
     */
    nodeTemplate?: string;

    /**
     * Represent the selected nodes in the TreeView component. The node can be select by clicking on the text in the node. The
     * `selectedNodes` property used to determine which nodes to be selected or which nodes are selected already in the TreeView component.
     * The `selectedNodes` property is depending on the value of `allowMultiSelection` property.
     * @default []
     */
    selectedNodes?: string[];

    /**
     * Specifies a value that indicates whether the nodes in the TreeView component are sorted in ascending or descending order,
     * or are not sorted. The available types of sort order are,
     * * `None` - The nodes are not sorted.
     * * `Ascending` - The nodes are sorted in ascending order.
     * * `Descending` - The nodes are sorted in descending order.
     * @default 'None'
     */
    sortOrder?: SortOrder;

    /**
     * Indicates the nodes will be display the CheckBoxes in the TreeView component. The CheckBox display next to
     * the expand/collapse icon for a node.
     * For more information on CheckBoxes concept, refer [CheckBox](http://ej2.syncfusion.com/documentation/treeview/checkbox.html).
     * @default false
     */
    showCheckBox?: boolean;

    /**
     * Triggers when the TreeView control is created successfully.
     * @event
     */
    created?: EmitType<Object>;

    /**
     * Triggers when the data source is populated in TreeView.
     * @event 
     */
    dataBound?: EmitType<DataBoundEventArgs>;

    /**
     * Triggers before the TreeView node is appended to TreeView element. It helps to customize the specific nodes.
     * @event
     */
    drawNode?: EmitType<DrawNodeEventArgs>;

    /**
     * Triggers when the TreeView control is destroyed successfully.
     * @event
     */
    destroyed?: EmitType<Object>;

    /**
     * Triggers when key press successfully. It helps to customize the operations at key press.
     * @event
     */
    keyPress?: EmitType<NodeKeyPressEventArgs>;

    /**
     * Triggers when TreeView node is checked/unchecked successfully.
     * @event 
     */
    nodeChecked?: EmitType<NodeCheckEventArgs>;

    /**
     * Triggers before TreeView node is going to be checked/unchecked.
     * @event 
     */
    nodeChecking?: EmitType<NodeCheckEventArgs>;

    /**
     * Triggers when the TreeView node is clicked successfully.
     * @event
     */
    nodeClicked?: EmitType<NodeClickEventArgs>;

    /**
     * Triggers when the TreeView node is collapsed successfully.
     * @event 
     */
    nodeCollapsed?: EmitType<NodeExpandEventArgs>;

    /**
     * Triggers before TreeView node is going to be collapsed.
     * @event 
     */
    nodeCollapsing?: EmitType<NodeExpandEventArgs>;

    /**
     * Triggers when a TreeView node is dragged (moved) continuously.
     * @event 
     */
    nodeDragging?: EmitType<DragAndDropEventArgs>;

    /**
     * Triggers when a TreeView node is drag(move) started. 
     * @event 
     */
    nodeDragStart?: EmitType<DragAndDropEventArgs>;

    /**
     * Triggers when a TreeView node is dragging(move) stopped.
     * @event 
     */
    nodeDragStop?: EmitType<DragAndDropEventArgs>;

    /**
     * Triggers when a TreeView node is dropped on target element successfully.
     * @event 
     */
    nodeDropped?: EmitType<DragAndDropEventArgs>;

    /**
     * Triggers when TreeView node is renamed successfully.
     * @event 
     */
    nodeEdited?: EmitType<NodeEditEventArgs>;

    /**
     * Triggers before TreeView node is going to be renamed.
     * @event 
     */
    nodeEditing?: EmitType<NodeEditEventArgs>;

    /**
     * Triggers when TreeView node is expanded successfully.
     * @event 
     */
    nodeExpanded?: EmitType<NodeExpandEventArgs>;

    /**
     * Triggers before TreeView node is going to be expanded.
     * @event 
     */
    nodeExpanding?: EmitType<NodeExpandEventArgs>;

    /**
     * Triggers when TreeView node is selected/unselected successfully.
     * @event 
     */
    nodeSelected?: EmitType<NodeSelectEventArgs>;

    /**
     * Triggers before TreeView node is going to be selected/unselected.
     * @event 
     */
    nodeSelecting?: EmitType<NodeSelectEventArgs>;

}