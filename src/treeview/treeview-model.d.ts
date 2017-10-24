import { Component, EmitType, isUndefined, CreateBuilder, Browser, compile } from '@syncfusion/ej2-base';import { Property, INotifyPropertyChanged, NotifyPropertyChanges, ChildProperty, Complex } from '@syncfusion/ej2-base';import { Event, EventHandler, KeyboardEvents, KeyboardEventArgs } from '@syncfusion/ej2-base';import { rippleEffect, Effect, Animation, AnimationOptions, RippleOptions } from '@syncfusion/ej2-base';import { Draggable, DragEventArgs, Droppable, DropEventArgs } from '@syncfusion/ej2-base';import { addClass, removeClass, closest, matches, detach, select, selectAll, isVisible, createElement, append } from '@syncfusion/ej2-base';import { DataManager, Query } from '@syncfusion/ej2-data';import { isNullOrUndefined as isNOU, Touch, TapEventArgs } from '@syncfusion/ej2-base';import { ListBase, ListBaseOptions, AriaAttributesMapping, FieldsMapping } from '@syncfusion/ej2-lists';import { createCheckBox } from '@syncfusion/ej2-buttons';import { TreeViewHelper } from './treeview-builder';
import {ExpandOnSettings,SortOrder,DataBoundEventArgs,DrawNodeEventArgs,NodeKeyPressEventArgs,NodeCheckEventArgs,NodeClickEventArgs,NodeExpandEventArgs,DragAndDropEventArgs,NodeEditEventArgs,NodeSelectEventArgs} from "./treeview";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class FieldsSettings
 */
export interface FieldsSettingsModel {

    /**
     * Specifies child data source fields or child mapping fields of child nodes.
     */
    child?: string | FieldsSettingsModel;

    /**
     * Specifies the array of JSON objects or data manager to generate TreeView nodes.
     * @default []
     */
    dataSource?: { [key: string]: Object }[] | DataManager;

    /**
     * Specifies mapping field for expand state of TreeView node.
     */
    expanded?: string;

    /**
     * Specifies mapping hasChildren field whether a node has child nodes or not.
     */
    hasChildren?: string;

    /**
     * Specifies mapping field for htmlAttributes, which are need to be added in TreeView node.
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
     * Specifies when need to fetch specific table from remote data.
     */
    tableName?: string;

    /**
     * Specifies TreeView node display text field.
     */
    text?: string;

    /**
     * Specifies TreeView node hovering text field.
     */
    tooltip?: string;

    /**
     * Specifies TreeView node hyper-link field.
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
     * Specifies the animation settings for collapsing node.
     * @default { effect: 'SlideDown', duration: 400, easing: 'linear' }
     */
    collapse?: ActionSettingsModel;

    /**
     * Specifies the animation settings for expanding node.
     * @default { effect: 'SlideDown', duration: 400, easing: 'linear' }
     */
    expand?: ActionSettingsModel;

}

/**
 * Interface for a class TreeView
 */
export interface TreeViewModel extends ComponentModel{

    /**
     * Enable or disable node drag and drop option in TreeView.
     * @default false
     */
    allowDragAndDrop?: boolean;

    /**
     * Enable or disable editing option in TreeView.
     * @default false
     */
    allowEditing?: boolean;

    /**
     * Enable or disable multi selection option in TreeView.
     * @default false
     */
    allowMultiSelection?: boolean;

    /**
     * Specifies the animation configuration settings for expanding and collapsing node.
     * @default {expand: { effect: 'SlideDown', duration: 400, easing: 'linear' },
     * collapse: { effect: 'SlideUp', duration: 400, easing: 'linear' }}
     */
    animation?: NodeAnimationSettingsModel;

    /**
     * Specifies the nodes id's which are need to be checked at initial rendering.
     * @default []
     */
    checkedNodes?: string[];

    /**
     * Specifies the CSS classes to root element of the TreeView component which helps to customize the complete UI styles.
     * @default ''
     */
    cssClass?: string;

    /**
     * Enable or disable the RTL mode on the component which displays the content in the direction from right to left.
     * @default false
     */
    enableRtl?: boolean;

    /**
     * Specifies the action to expand or collapse the TreeView node.
     * @default 'auto'
     */
    expandOn?: ExpandOnSettings;

    /**
     * The fields property maps the columns of the data table and binds the data to the component.
     * @default {id: 'id', text: 'text', dataSource: [], child: 'child', parentID: 'parentID', hasChildren: 'hasChildren',
     *  expanded: 'expanded', htmlAttributes: 'htmlAttributes', iconCss: 'iconCss', imageUrl: 'imageUrl', isChecked: 'isChecked',
     *  query: null, selected: 'selected', tableName: null, tooltip: 'tooltip', navigateUrl: 'navigateUrl'}
     */
    fields?: FieldsSettingsModel;

    /**
     * Enable or disable full row selection option in TreeView.
     * @default true
     */
    fullRowSelect?: boolean;

    /**
     * The node template which renders customized nodes from given template.
     * @default null
     */
    nodeTemplate?: string;

    /**
     * Specifies the nodes id's which are need to be selected at initial rendering.
     * @default []
     */
    selectedNodes?: string[];

    /**
     * Specifies the sort order to sort the data source.
     * @default 'None'
     */
    sortOrder?: SortOrder;

    /**
     * Gets or sets a value that indicates whether to display or hide CheckBox for all TreeView nodes
     * @default false
     */
    showCheckBox?: boolean;

    /**
     * Triggers when the TreeView control created successfully.
     * @event
     */
    created?: EmitType<Object>;

    /**
     * Triggers when data source is populated in the TreeView.
     * @event 
     */
    dataBound?: EmitType<DataBoundEventArgs>;

    /**
     * Triggers before the TreeView node is appended to TreeView element. You can customize the specific node in this event.
     * @event
     */
    drawNode?: EmitType<DrawNodeEventArgs>;

    /**
     * Triggers when the TreeView control destroyed successfully.
     * @event
     */
    destroyed?: EmitType<Object>;

    /**
     * Triggers when key press successfully. It helps to customize the operations at key press.
     * @event
     */
    keyPress?: EmitType<NodeKeyPressEventArgs>;

    /**
     * Triggers when TreeView node was checked/unchecked.
     * @event 
     */
    nodeChecked?: EmitType<NodeCheckEventArgs>;

    /**
     * Triggers before TreeView node is going to be checked/unchecked.
     * @event 
     */
    nodeChecking?: EmitType<NodeCheckEventArgs>;

    /**
     * Triggers when the TreeView node was clicked.
     * @event
     */
    nodeClicked?: EmitType<NodeClickEventArgs>;

    /**
     * Triggers when a TreeView was collapsed.
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
     * Triggers when a TreeView node is dropped on target element. 
     * @event 
     */
    nodeDropped?: EmitType<DragAndDropEventArgs>;

    /**
     * Triggers when TreeView node was renamed successfully.
     * @event 
     */
    nodeEdited?: EmitType<NodeEditEventArgs>;

    /**
     * Triggers before TreeView node is going to be renamed.
     * @event 
     */
    nodeEditing?: EmitType<NodeEditEventArgs>;

    /**
     * Triggers when TreeView node was expanded.
     * @event 
     */
    nodeExpanded?: EmitType<NodeExpandEventArgs>;

    /**
     * Triggers before TreeView node is going to be expanded.
     * @event 
     */
    nodeExpanding?: EmitType<NodeExpandEventArgs>;

    /**
     * Triggers when TreeView node was selected/unselected.
     * @event 
     */
    nodeSelected?: EmitType<NodeSelectEventArgs>;

    /**
     * Triggers before TreeView node is going to be selected/unselected.
     * @event 
     */
    nodeSelecting?: EmitType<NodeSelectEventArgs>;

}