﻿import { Component, EmitType, isUndefined, CreateBuilder, Browser, compile } from '@syncfusion/ej2-base';import { Property, INotifyPropertyChanged, NotifyPropertyChanges, ChildProperty, Complex } from '@syncfusion/ej2-base';import { Event, EventHandler, KeyboardEvents, KeyboardEventArgs } from '@syncfusion/ej2-base';import { rippleEffect, Effect, Animation, AnimationOptions, RippleOptions } from '@syncfusion/ej2-base';import { Draggable, DragEventArgs, Droppable, DropEventArgs } from '@syncfusion/ej2-base';import { addClass, removeClass, closest, matches, detach, select, selectAll, isVisible, createElement, append } from '@syncfusion/ej2-base';import { DataManager, Query } from '@syncfusion/ej2-data';import { isNullOrUndefined as isNOU, Touch, TapEventArgs } from '@syncfusion/ej2-base';import { ListBase, ListBaseOptions, AriaAttributesMapping, FieldsMapping } from '@syncfusion/ej2-lists';import { createCheckBox } from '@syncfusion/ej2-buttons';import { Input, InputObject } from '@syncfusion/ej2-inputs';import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';import { TreeViewHelper } from './treeview-builder';
import {ExpandOnSettings,SortOrder,DataBoundEventArgs,DrawNodeEventArgs,NodeKeyPressEventArgs,NodeCheckEventArgs,NodeClickEventArgs,NodeExpandEventArgs,DragAndDropEventArgs,NodeEditEventArgs,NodeSelectEventArgs} from "./treeview";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class FieldsSettings
 */
export interface FieldsSettingsModel {

    /**
     * Binds the field settings for child nodes or mapping field for nested nodes objects that contain array of JSON objects.
     */
    child?: string | FieldsSettingsModel;

    /**
     * Specifies the array of JavaScript objects or instance of DataManager to populate the nodes.
     * @default []
     */
    dataSource?: { [key: string]: Object }[] | DataManager;

    /**
     * Specifies the mapping field for expand state of the TreeView node.
     */
    expanded?: string;

    /**
     * Specifies the mapping field for hasChildren to check whether a node has child nodes or not.
     */
    hasChildren?: string;

    /**
     * Specifies the mapping field for htmlAttributes to be added to the TreeView node.
     */
    htmlAttributes?: string;

    /**
     * Specifies the mapping field for icon class of each TreeView node that will be added before the text.
     */
    iconCss?: string;

    /**
     * Specifies the ID field mapped in dataSource.
     */
    id?: string;

    /**
     * Specifies the mapping field for image URL of each TreeView node where image will be added before the text.
     */
    imageUrl?: string;

    /**
     * Specifies the field for checked state of the TreeView node.
     */
    isChecked?: string;

    /**
     * Specifies the parent ID field mapped in dataSource.
     */
    parentID?: string;

    /**
     * Defines the external [`Query`](http://ej2.syncfusion.com/documentation/data/api-query.html) 
     * that will execute along with data processing.    
     * @default null    
     */
    query?: Query;

    /**
     * Specifies the mapping field for selected state of the TreeView node.
     */
    selected?: string;

    /**
     * Specifies the table name used to fetch data from a specific table in the server.
     */
    tableName?: string;

    /**
     * Specifies the mapping field for text displayed as TreeView node's display text.
     */
    text?: string;

    /**
     * Specifies the mapping field for tooltip that will be displayed as hovering text of the TreeView node.
     */
    tooltip?: string;

    /**
     * Specifies the mapping field for navigateUrl to be added as hyper-link of the TreeView node.
     */
    navigateUrl?: string;

}

/**
 * Interface for a class ActionSettings
 */
export interface ActionSettingsModel {

    /**
     * Specifies the type of animation.
     * @default : 'SlideDown';
     */
    effect?: Effect;

    /**
     * Specifies the duration to animate.
     * @default : 400;
     */
    duration?: number;

    /**
     * Specifies the animation timing function.
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
     * Indicates whether the TreeView allows drag and drop of nodes. To drag and drop a node in
     * desktop, hold the mouse on the node, drag it to the target node and drop the node by releasing
     * the mouse. For touch devices, drag and drop operation is performed by touch, touch move
     * and touch end. For more information on drag and drop nodes concept, refer to 
     * [Drag and Drop](http://ej2.syncfusion.com/documentation/treeview/drag-and-drop.html).
     * @default false
     */
    allowDragAndDrop?: boolean;

    /**
     * Enables or disables editing of the text in the TreeView node. When `allowEditing` property is set 
     * to true, the TreeView allows you to edit the node by double clicking the node or by navigating to
     * the node and pressing **F2** key. For more information on node editing, refer
     * to [Node Editing](http://ej2.syncfusion.com/documentation/treeview/node-editing.html).
     * @default false
     */
    allowEditing?: boolean;

    /**
     * Enables or disables multi-selection of nodes. To select multiple nodes:
     * * Select the nodes by holding down the CTRL key while clicking on the nodes.
     * * Select consecutive nodes by clicking the first node to select and hold down the **SHIFT** key
     * and click the last node to select.
     * 
     * For more information on multi-selection, refer to 
     * [Multi-Selection](http://ej2.syncfusion.com/documentation/treeview/multi-selection.html).
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
     * The `checkedNodes` property is used to determine the nodes to be checked or the nodes already checked in the TreeView component.
     * The `checkedNodes` property depends upon the value of `showCheckBox` property.
     * @default []
     */
    checkedNodes?: string[];

    /**
     * Specifies the CSS classes to be added with root element of the TreeView to help customize the appearance of the component.
     * @default ''
     */
    cssClass?: string;

    /**
     * Enables or disables persisting TreeView state between page reloads. If enabled, following states will persist.
     * 1. Selected Nodes
     * 2. Checked Nodes
     * @default false
     */
    enablePersistence?: boolean;

    /**
     * Enables or disables RTL mode on the component that displays the content in the right to left direction.
     * @default false
     */
    enableRtl?: boolean;

    /**
     * Specifies an action that determines whether the node can expand or collapse. The available actions are,
     * * `auto` - The expand/collapse operation happens when you double-click the node in desktop, and when you single-click
     * the node in mobile devices.
     * * `click` - The expand/collapse operation happens when you single-click the node in both desktop and mobile devices.
     * * `dblclick` - The expand/collapse operation happens when you double-click the node in both desktop and mobile devices.
     * @default 'auto'
     */
    expandOn?: ExpandOnSettings;

    /**
     * Specifies the data source and mapping fields to render TreeView nodes.
     * @default {id: 'id', text: 'text', dataSource: [], child: 'child', parentID: 'parentID', hasChildren: 'hasChildren',
     *  expanded: 'expanded', htmlAttributes: 'htmlAttributes', iconCss: 'iconCss', imageUrl: 'imageUrl', isChecked: 'isChecked',
     *  query: null, selected: 'selected', tableName: null, tooltip: 'tooltip', navigateUrl: 'navigateUrl'}
     */
    fields?: FieldsSettingsModel;

    /**
     * Enables or disables the full node selection. If the `fullRowSelect` property is enabled, all the 
     * nodes will be selected by clicking its text.
     * @default true
     */
    fullRowSelect?: boolean;

    /**
     * Specifies a template to render customized content for all the nodes. If the `nodeTemplate` property 
     * is set, the template content overrides the displayed node text. The property accepts template string
     * [template string](http://ej2.syncfusion.com/documentation/base/template-engine.html) 
     * or HTML element ID holding the content. For more information on template concept, refer to
     * [Template](http://ej2.syncfusion.com/documentation/treeview/template.html).
     * @default null
     */
    nodeTemplate?: string;

    /**
     * Represents the selected nodes in the TreeView component. Nodes can be selected by clicking 
     * the text in the node. The `selectedNodes` property is used to determine the nodes to be selected or 
     * nodes already selected. The `selectedNodes` property depends upon the value of the 
     * `allowMultiSelection` property.
     * @default []
     */
    selectedNodes?: string[];

    /**
     * Specifies a value that indicates whether the nodes are sorted in the ascending or descending order,
     * or are not sorted at all. The available types of sort order are,
     * * `None` - The nodes are not sorted.
     * * `Ascending` - The nodes are sorted in the ascending order.
     * * `Descending` - The nodes are sorted in the ascending order.
     * @default 'None'
     */
    sortOrder?: SortOrder;

    /**
     * Indicates that the nodes will display CheckBoxes in the TreeView.
     * The CheckBox will be displayed next to the expand/collapse icon of the node. For more information on CheckBoxes, refer to
     * CheckBox](http://ej2.syncfusion.com/documentation/treeview/checkbox.html).
     * @default false
     */
    showCheckBox?: boolean;

    /**
     * Triggers when the TreeView control is created successfully.
     * @event
     */
    created?: EmitType<Object>;

    /**
     * Triggers when data source is populated in the TreeView.
     * @event 
     */
    dataBound?: EmitType<DataBoundEventArgs>;

    /**
     * Triggers before the TreeView node is appended to the TreeView element. It helps to customize specific nodes.
     * @event
     */
    drawNode?: EmitType<DrawNodeEventArgs>;

    /**
     * Triggers when the TreeView control is destroyed successfully.
     * @event
     */
    destroyed?: EmitType<Object>;

    /**
     * Triggers when key press is successful. It helps to customize the operations at key press.
     * @event
     */
    keyPress?: EmitType<NodeKeyPressEventArgs>;

    /**
     * Triggers when the TreeView node is checked/unchecked successfully.
     * @event 
     */
    nodeChecked?: EmitType<NodeCheckEventArgs>;

    /**
     * Triggers before the TreeView node is to be checked/unchecked.
     * @event 
     */
    nodeChecking?: EmitType<NodeCheckEventArgs>;

    /**
     * Triggers when the TreeView node is clicked successfully.
     * @event
     */
    nodeClicked?: EmitType<NodeClickEventArgs>;

    /**
     * Triggers when the TreeView node collapses successfully.
     * @event 
     */
    nodeCollapsed?: EmitType<NodeExpandEventArgs>;

    /**
     * Triggers before the TreeView node collapses.
     * @event 
     */
    nodeCollapsing?: EmitType<NodeExpandEventArgs>;

    /**
     * Triggers when the TreeView node is dragged (moved) continuously.
     * @event 
     */
    nodeDragging?: EmitType<DragAndDropEventArgs>;

    /**
     * Triggers when the TreeView node drag (move) starts.
     * @event 
     */
    nodeDragStart?: EmitType<DragAndDropEventArgs>;

    /**
     * Triggers when the TreeView node drag (move) is stopped.
     * @event 
     */
    nodeDragStop?: EmitType<DragAndDropEventArgs>;

    /**
     * Triggers when the TreeView node is dropped on target element successfully.
     * @event 
     */
    nodeDropped?: EmitType<DragAndDropEventArgs>;

    /**
     * Triggers when the TreeView node is renamed successfully.
     * @event 
     */
    nodeEdited?: EmitType<NodeEditEventArgs>;

    /**
     * Triggers before the TreeView node is renamed.
     * @event 
     */
    nodeEditing?: EmitType<NodeEditEventArgs>;

    /**
     * Triggers when the TreeView node expands successfully.
     * @event 
     */
    nodeExpanded?: EmitType<NodeExpandEventArgs>;

    /**
     * Triggers before the TreeView node is to be expanded.
     * @event 
     */
    nodeExpanding?: EmitType<NodeExpandEventArgs>;

    /**
     * Triggers when the TreeView node is selected/unselected successfully.
     * @event 
     */
    nodeSelected?: EmitType<NodeSelectEventArgs>;

    /**
     * Triggers before the TreeView node is selected/unselected.
     * @event 
     */
    nodeSelecting?: EmitType<NodeSelectEventArgs>;

}