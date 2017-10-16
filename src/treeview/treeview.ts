import { Component, EmitType, isUndefined, CreateBuilder, Browser, compile } from '@syncfusion/ej2-base';
import { Property, INotifyPropertyChanged, NotifyPropertyChanges, ChildProperty, Complex } from '@syncfusion/ej2-base';
import { Event, EventHandler, KeyboardEvents, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { rippleEffect, Effect, Animation, AnimationOptions, RippleOptions } from '@syncfusion/ej2-base';
import { Draggable, DragEventArgs, Droppable, DropEventArgs } from '@syncfusion/ej2-base';
import { addClass, removeClass, closest, matches, detach, select, selectAll, isVisible, createElement, append } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { isNullOrUndefined as isNOU, Touch, TapEventArgs } from '@syncfusion/ej2-base';
import { ListBase, ListBaseOptions, SortOrder, AriaAttributesMapping, FieldsMapping } from '@syncfusion/ej2-lists';
import { createCheckBox } from '@syncfusion/ej2-buttons';
import { TreeViewModel, FieldsSettingsModel, NodeAnimationSettingsModel, ActionSettingsModel } from './treeview-model';
import { TreeViewHelper } from './treeview-builder';

const ROOT: string = 'e-treeview';
const COLLAPSIBLE: string = 'e-icon-collapsible';
const EXPANDABLE: string = 'e-icon-expandable';
const LISTITEM: string = 'e-list-item';
const LISTTEXT: string = 'e-list-text';
const PARENTITEM: string = 'e-list-parent';
const HOVER: string = 'e-hover';
const ACTIVE: string = 'e-active';
const LOAD: string = 'e-load';
const PROCESS: string = 'e-process';
const ICON: string = 'e-icons';
const TEXTWRAP: string = 'e-text-content';
const INPUT: string = 'e-tree-input';
const EDITING: string = 'e-editing';
const RTL: string = 'e-rtl';
const DRAGITEM: string = 'e-drag-item';
const DROPPABLE: string = 'e-droppable';
const DRAGGING: string = 'e-dragging';
const SIBLING: string = 'e-sibling';
const DROPIN: string = 'e-drop-in';
const DROPNEXT: string = 'e-drop-next';
const DROPOUT: string = 'e-drop-out';
const NODROP: string = 'e-no-drop';
const FULLROWWRAP: string = 'e-fullrow-wrap';
const FULLROW: string = 'e-fullrow';
const POPUP: string = 'e-popup';
const SELECTED: string = 'e-selected';
const EXPANDED: string = 'e-expanded';
const NODECOLLAPSED: string = 'e-node-collapsed';
const DISABLE: string = 'e-disable';
const POPUPSELECT: string = 'e-select';
const CONTENT: string = 'e-content';
const DOWNTAIL: string = 'e-downtail';
const DROPCOUNT: string = 'e-drop-count';
const CHECK: string = 'e-check';
const INDETERMINATE: string = 'e-stop';
const CHECKBOXWRAP: string = 'e-checkbox-wrapper';
const CHECKBOXFRAME: string = 'e-frame';
const FOCUS: string = 'e-node-focus';

const treeAriaAttr: TreeAriaAttr = {
    treeRole: 'tree',
    itemRole: 'treeitem',
    listRole: 'group',
    itemText: '',
};

interface TreeAriaAttr extends AriaAttributesMapping {
    treeRole: string;
}

interface ResultData {
    result: { [key: string]: Object }[];
}

export interface EJ2Instance extends HTMLElement {
    ej2_instances: Object[];
}

export interface NodeExpandEventArgs {
    /**
     * If you want to cancel this event then, set cancel as true. Otherwise, false.
     */
    cancel: boolean;
    /**
     * If the event is triggered by interaction, it returns true. Otherwise, it returns false.
     */
    isInteracted: boolean;
    /**
     * Return the expanded/collapsed TreeView node.
     */
    node: HTMLLIElement;
    /**
     * Return the expanded/collapsed node as JSON object from data source.
     */
    nodeData: { [key: string]: Object };
}

export interface NodeSelectEventArgs {
    /**
     * Return the name of action like select or un-select.
     */
    action: string;
    /**
     * If you want to cancel this event then, set cancel as true. Otherwise, false.
     */
    cancel: boolean;
    /**
     * If the event is triggered by interaction, it returns true. Otherwise, it returns false.
     */
    isInteracted: boolean;
    /**
     * Return the currently selected TreeView node.
     */
    node: HTMLLIElement;
    /**
     * Return the currently selected node as JSON object from data source.
     */
    nodeData: { [key: string]: Object };
}

export interface NodeCheckEventArgs {
    /**
     * Return the name of action like check or un-check.
     */
    action: string;
    /**
     * If you want to cancel this event then, set cancel as true. Otherwise, false.
     */
    cancel: boolean;
    /**
     * If the event is triggered by interaction, it returns true. Otherwise, it returns false.
     */
    isInteracted: boolean;
    /**
     * Return the currently checked TreeView node.
     */
    node: HTMLLIElement;
    /**
     * Return the currently checked node as JSON object from data source.
     */
    data: { [key: string]: Object }[];
}

export interface NodeEditEventArgs {
    /**
     * If you want to cancel this event then, set cancel as true. Otherwise, false.
     */
    cancel: boolean;
    /**
     * Return the current TreeView node new text.
     */
    newText: string;
    /**
     * Return the current TreeView node.
     */
    node: HTMLLIElement;
    /**
     * Return the current node as JSON object from data source.
     */
    nodeData: { [key: string]: Object };
    /**
     * Return the current TreeView node old text.
     */
    oldText: string;
}

export interface DragAndDropEventArgs {
    /**
     * If you want to cancel this event then, set cancel as true. Otherwise, false.
     */
    cancel: boolean;
    /**
     * Return the actual event.
     */
    event: MouseEvent & TouchEvent;
    /**
     * Return the currently dragged TreeView node.
     */
    draggedNode: HTMLLIElement;
    /**
     * Return the currently dragged node as array of JSON object from data source.
     */
    draggedNodeData: { [key: string]: Object };
    /**
     * Return the dropped TreeView node.
     */
    droppedNode: HTMLLIElement;
    /**
     * Return the dropped node as array of JSON object from data source.
     */
    droppedNodeData: { [key: string]: Object };
    /**
     * Return the target element from which drag starts/end.
     */
    target: HTMLElement;
}

export interface DrawNodeEventArgs {
    /**
     * Return the current rendering node.
     */
    node: HTMLLIElement;
    /**
     * Return the current rendering node as JSON object.
     */
    nodeData: { [key: string]: Object };
    /**
     * Return the current rendering node text.
     */
    text: string;
}

export interface NodeClickEventArgs {
    /**
     * Return the actual event.
     */
    event: MouseEvent;
    /**
     * Return the current clicked TreeView node.
     */
    node: HTMLLIElement;
}

export interface NodeKeyPressEventArgs {
    /**
     * If you want to cancel this event then, set cancel as true. Otherwise, false.
     */
    cancel: boolean;
    /**
     * Return the actual event.
     */
    event: KeyboardEventArgs;
    /**
     * Return the current active TreeView node.
     */
    node: HTMLLIElement;
}

export interface DataBoundEventArgs {
    /**
     * Return the TreeView data.
     */
    data: { [key: string]: Object }[];
}

export interface ItemCreatedArgs {
    curData: { [key: string]: Object };
    item: HTMLElement;
    options: ListBaseOptions;
    text: string;
    fields: FieldsMapping;
}

export class FieldsSettings extends ChildProperty<FieldsSettings> {

    /**
     * Specifies child data source fields or child mapping fields of child nodes.
     */
    @Property('child')
    public child: string | FieldsSettingsModel;

    /**
     * Specifies the array of JSON objects or data manager to generate TreeView nodes.
     * @default []
     */
    @Property([])
    public dataSource: { [key: string]: Object }[] | DataManager;

    /**
     * Specifies mapping field for expand state of TreeView node.
     */
    @Property('expanded')
    public expanded: string;

    /**
     * Specifies mapping hasChildren field whether a node has child nodes or not.
     */
    @Property('hasChildren')
    public hasChildren: string;

    /**
     * Specifies mapping field for htmlAttributes, which are need to be added in TreeView node.
     */
    @Property('htmlAttributes')
    public htmlAttributes: string;

    /**
     * Specifies mapping field for the icon class of each TreeView node which will be added before to inner text.
     */
    @Property('iconCss')
    public iconCss: string;

    /**
     * Specifies ID field that mapped in dataSource.
     */
    @Property('id')
    public id: string;

    /**
     * Specifies mapping field for the image url of each TreeView node and image will be added before to inner text.
     */
    @Property('imageUrl')
    public imageUrl: string;

    /**
     * Specifies mapping field for checked state of TreeView node.
     */
    @Property('isChecked')
    public isChecked: string;

    /**
     * Specifies parent ID field that mapped in dataSource.
     */
    @Property('parentID')
    public parentID: string;

    /**    
     * Defines the external [`Query`](http://ej2.syncfusion.com/documentation/data/api-query.html) 
     * which will execute along with data processing.    
     * @default null    
     */
    @Property(null)
    public query: Query;

    /**
     * Specifies mapping field for selected state of TreeView node.
     */
    @Property('selected')
    public selected: string;

    /**
     * Specifies when need to fetch specific table from remote data.
     */
    @Property(null)
    public tableName: string;

    /**
     * Specifies TreeView node display text field.
     */
    @Property('text')
    public text: string;

    /**
     * Specifies TreeView node hovering text field.
     */
    @Property('tooltip')
    public tooltip: string;

    /**
     * Specifies TreeView node hyper-link field.
     */
    @Property('navigateUrl')
    public navigateUrl: string;

}

export type ExpandOnSettings = 'auto' | 'click' | 'dblclick';

export class ActionSettings extends ChildProperty<ActionSettings> {
    /**
     * Specify the type of animation.
     * @default : 'SlideDown';
     */
    @Property('SlideDown')
    public effect: Effect;
    /**
     * Specify the duration to animate.
     * @default : 400;
     */
    @Property(400)
    public duration: number;
    /**
     * Specify the animation timing function.
     * @default : 'linear';
     */
    @Property('linear')
    public easing: string;
}

export class NodeAnimationSettings extends ChildProperty<NodeAnimationSettings> {
    /**
     * Specifies child dataSource field that mapped in dataSource
     * @default { effect: 'SlideDown', duration: 400, easing: 'linear' }
     */
    @Complex<ActionSettingsModel>({ effect: 'SlideUp', duration: 400, easing: 'linear' }, ActionSettings)
    public collapse: ActionSettingsModel;
    /**
     * Specifies child dataSource field that mapped in dataSource
     * @default { effect: 'SlideDown', duration: 400, easing: 'linear' }
     */
    @Complex<ActionSettingsModel>({ effect: 'SlideDown', duration: 400, easing: 'linear' }, ActionSettings)
    public expand: ActionSettingsModel;
}

/**
 * TreeView component is used to represent the hierarchical data in tree like structure with advanced
 * functions to perform edit, drag and drop, selection with check-box and more.
 * ```html
 *  <div id="tree"></div>
 * ```
 * ```typescript
 *  let treeObj: TreeView = new TreeView();
 *  treeObj.appendTo('#tree');
 * ```
 */

@NotifyPropertyChanges
export class TreeView extends Component<HTMLElement> implements INotifyPropertyChanged {

    /* Internal variables */
    private cloneElement: HTMLElement;
    private treeData: { [key: string]: Object }[];
    private rootData: { [key: string]: Object }[];
    private groupedData: { [key: string]: Object }[][];
    private ulElement: HTMLElement;
    private listBaseOption: ListBaseOptions;
    private dataType: number;
    private rippleFn: Function;
    private rippleIconFn: Function;
    private isNumberTypeId: boolean;
    private expandOnType: string;
    private keyboardModule: KeyboardEvents;
    private liList: HTMLElement[];
    private aniObj: Animation;
    private treeList: string[];
    private isLoaded: boolean;
    private expandArgs: NodeExpandEventArgs;
    private oldText: string;
    private dragObj: Draggable;
    private dropObj: Droppable;
    private dragTarget: Element;
    private dragLi: Element;
    private dragData: { [key: string]: Object };
    private startNode: Element;
    private nodeTemplateFn: Function;
    private currentLoadData: { [key: string]: Object }[];
    private checkActionNodes: { [key: string]: Object }[] = [];
    private touchEditObj: Touch;
    private touchClickObj: Touch;
    private dragStartAction: boolean = false;
    private touchExpandObj: Touch;
    private keyConfigs: { [key: string]: string } = {
        escape: 'escape',
        end: 'end',
        enter: 'enter',
        f2: 'f2',
        home: 'home',
        moveDown: 'downarrow',
        moveLeft: 'leftarrow',
        moveRight: 'rightarrow',
        moveUp: 'uparrow',
        ctrlDown: 'ctrl+downarrow',
        ctrlUp: 'ctrl+uparrow',
        ctrlEnter: 'ctrl+enter',
        ctrlHome: 'ctrl+home',
        ctrlEnd: 'ctrl+end',
        ctrlA: 'ctrl+A',
        shiftDown: 'shift+downarrow',
        shiftUp: 'shift+uparrow',
        shiftEnter: 'shift+enter',
        shiftHome: 'shift+home',
        shiftEnd: 'shift+end',
        csDown: 'ctrl+shift+downarrow',
        csUp: 'ctrl+shift+uparrow',
        csEnter: 'ctrl+shift+enter',
        csHome: 'ctrl+shift+home',
        csEnd: 'ctrl+shift+end',
        space: 'space',
    };

    /**
     * Enable or disable node drag and drop option in TreeView.
     * @default false
     */
    @Property(false)
    public allowDragAndDrop: boolean;

    /**
     * Enable or disable editing option in TreeView.
     * @default false
     */
    @Property(false)
    public allowEditing: boolean;

    /**
     * Enable or disable multi selection option in TreeView.
     * @default false
     */
    @Property(false)
    public allowMultiSelection: boolean;

    /**
     * Specifies the animation configuration settings for expanding and collapsing node.
     * @default {expand: { effect: 'SlideDown', duration: 400, easing: 'linear' },
     * collapse: { effect: 'SlideUp', duration: 400, easing: 'linear' }}
     */
    @Complex<NodeAnimationSettingsModel>({}, NodeAnimationSettings)
    public animation: NodeAnimationSettingsModel;

    /**
     * Specifies the nodes id's which are need to be checked at initial rendering.
     * @default []
     */
    @Property()
    public checkedNodes: string[];

    /**
     * Specifies the CSS classes to root element of the TreeView component which helps to customize the complete UI styles.
     * @default ''
     */
    @Property('')
    public cssClass: string;

    /**
     * Enable or disable the RTL mode on the component which displays the content in the direction from right to left.
     * @default false
     */
    @Property(false)
    public enableRtl: boolean;

    /**
     * Specifies the action to expand or collapse the TreeView node.
     * @default 'auto'
     */
    @Property('auto')
    public expandOn: ExpandOnSettings;

    /**
     * The fields property maps the columns of the data table and binds the data to the component.
     * @default {id: 'id', text: 'text', dataSource: [], child: 'child', parentID: 'parentID', hasChildren: 'hasChildren',
     *  expanded: 'expanded', htmlAttributes: 'htmlAttributes', iconCss: 'iconCss', imageUrl: 'imageUrl', isChecked: 'isChecked',
     *  query: null, selected: 'selected', tableName: null, tooltip: 'tooltip', navigateUrl: 'navigateUrl'}
     */
    @Complex<FieldsSettingsModel>({}, FieldsSettings)
    public fields: FieldsSettingsModel;

    /**
     * Enable or disable full row selection option in TreeView.
     * @default true
     */
    @Property(true)
    public fullRowSelect: boolean;

    /**
     * The node template which renders customized nodes from given template.
     * @default null
     */
    @Property()
    public nodeTemplate: string;

    /**
     * Specifies the nodes id's which are need to be selected at initial rendering.
     * @default []
     */
    @Property()
    public selectedNodes: string[];

    /**
     * Specifies the sort order to sort the data source.
     * @default 'None'
     */
    @Property('None')
    public sortOrder: SortOrder;

    /**
     * Gets or sets a value that indicates whether to display or hide CheckBox for all TreeView nodes
     * @default false
     */
    @Property(false)
    public showCheckBox: boolean;

    /**
     * Triggers when the TreeView control created successfully.
     * @event
     */
    @Event()
    public created: EmitType<Object>;

    /** 
     * Triggers when data source is populated in the TreeView.
     * @event 
     */
    @Event()
    public dataBound: EmitType<DataBoundEventArgs>;

    /**
     * Triggers before the TreeView node is appended to TreeView element. You can customize the specific node in this event.
     * @event
     */
    @Event()
    public drawNode: EmitType<DrawNodeEventArgs>;

    /**
     * Triggers when the TreeView control destroyed successfully.
     * @event
     */
    @Event()
    public destroyed: EmitType<Object>;

    /**
     * Triggers when key press successfully. It helps to customize the operations at key press.
     * @event
     */
    @Event()
    public keyPress: EmitType<NodeKeyPressEventArgs>;

    /** 
     * Triggers when TreeView node was checked/unchecked.
     * @event 
     */
    @Event()
    public nodeChecked: EmitType<NodeCheckEventArgs>;

    /** 
     * Triggers before TreeView node is going to be checked/unchecked.
     * @event 
     */
    @Event()
    public nodeChecking: EmitType<NodeCheckEventArgs>;

    /**
     * Triggers when the TreeView node was clicked.
     * @event
     */
    @Event()
    public nodeClicked: EmitType<NodeClickEventArgs>;

    /** 
     * Triggers when a TreeView was collapsed.
     * @event 
     */
    @Event()
    public nodeCollapsed: EmitType<NodeExpandEventArgs>;

    /** 
     * Triggers before TreeView node is going to be collapsed.
     * @event 
     */
    @Event()
    public nodeCollapsing: EmitType<NodeExpandEventArgs>;

    /** 
     * Triggers when a TreeView node is dragged (moved) continuously.
     * @event 
     */
    @Event()
    public nodeDragging: EmitType<DragAndDropEventArgs>;
    /** 
     * Triggers when a TreeView node is drag(move) started. 
     * @event 
     */
    @Event()
    public nodeDragStart: EmitType<DragAndDropEventArgs>;
    /** 
     * Triggers when a TreeView node is dragging(move) stopped.
     * @event 
     */
    @Event()
    public nodeDragStop: EmitType<DragAndDropEventArgs>;
    /** 
     * Triggers when a TreeView node is dropped on target element. 
     * @event 
     */
    @Event()
    public nodeDropped: EmitType<DragAndDropEventArgs>;

    /** 
     * Triggers when TreeView node was renamed successfully.
     * @event 
     */
    @Event()
    public nodeEdited: EmitType<NodeEditEventArgs>;

    /** 
     * Triggers before TreeView node is going to be renamed.
     * @event 
     */
    @Event()
    public nodeEditing: EmitType<NodeEditEventArgs>;

    /** 
     * Triggers when TreeView node was expanded.
     * @event 
     */
    @Event()
    public nodeExpanded: EmitType<NodeExpandEventArgs>;

    /** 
     * Triggers before TreeView node is going to be expanded.
     * @event 
     */
    @Event()
    public nodeExpanding: EmitType<NodeExpandEventArgs>;

    /** 
     * Triggers when TreeView node was selected/unselected.
     * @event 
     */
    @Event()
    public nodeSelected: EmitType<NodeSelectEventArgs>;

    /** 
     * Triggers before TreeView node is going to be selected/unselected.
     * @event 
     */
    @Event()
    public nodeSelecting: EmitType<NodeSelectEventArgs>;

    constructor(options?: TreeViewModel, element?: string | HTMLElement) {
        super(options, <HTMLElement | string>element);
    }

    /**
     * Get component name.
     * @returns string
     * @private
     */
    public getModuleName(): string {
        return 'treeview';
    }

    /**
     * Initialize the event handler
     */
    protected preRender(): void {
        this.listBaseOption = {
            expandCollapse: true,
            fields: (this.fields as TreeViewModel & { properties: Object }).properties,
            showIcon: true,
            expandIconClass: EXPANDABLE,
            ariaAttributes: treeAriaAttr,
            expandIconPosition: 'left',
            itemCreated: (e: ItemCreatedArgs) => {
                this.beforeNodeCreate(e);
            },
        };
        this.listBaseOption.fields.url = this.fields.navigateUrl;
        this.aniObj = new Animation({});
        this.treeList = [];
        this.isLoaded = false;
        if (isNOU(this.selectedNodes)) {
            this.setProperties({ selectedNodes: [] }, true);
        }
        if (isNOU(this.checkedNodes)) {
            this.setProperties({ checkedNodes: [] }, true);
        }
    }

    /**
     * Get the properties to be maintained in the persisted state.
     * @returns string
     */
    public getPersistData(): string {
        let keyEntity: string[] = ['selectedNodes', 'checkedNodes'];
        return this.addOnPersist(keyEntity);
    }

    /**
     * To Initialize the control rendering
     */
    public render(): void {
        this.initialize();
        this.setDataBinding();
        this.setExpandOnType();
        this.setRipple();
        this.wireEditingEvents(this.allowEditing);
        this.setDragAndDrop(this.allowDragAndDrop);
        this.wireEvents();
    }

    private initialize(): void {
        this.element.setAttribute('tabindex', '0');
        this.element.setAttribute('role', treeAriaAttr.treeRole);
        this.setCssClass(null, this.cssClass);
        this.setEnableRtl();
        this.setFullRow(this.fullRowSelect);
        this.setTouchPopup(this.allowMultiSelection);
        this.setMultiSelect(this.allowMultiSelection);
        this.nodeTemplateFn = this.templateComplier(this.nodeTemplate);
    }

    private setEnableRtl(): void {
        this.enableRtl ? addClass([this.element], RTL) : removeClass([this.element], RTL);
    }

    private setRipple(): void {
        let tempStr: string = '.' + FULLROW + ',.' + TEXTWRAP;
        let rippleModel: RippleOptions = {
            selector: tempStr,
            ignore: '.' + TEXTWRAP + ' > .' + ICON + ',.' + INPUT + ', .' + CHECKBOXWRAP
        };
        this.rippleFn = rippleEffect(this.element, rippleModel);
        let iconModel: RippleOptions = {
            selector:  '.' + TEXTWRAP + ' > .' + ICON,
            isCenterRipple: true,
        };
        this.rippleIconFn = rippleEffect(this.element, iconModel);
    }

    private setFullRow(isEnabled: boolean): void {
        isEnabled ? addClass([this.element], FULLROWWRAP) : removeClass([this.element], FULLROWWRAP);
    }

    private setTouchPopup(isEnabled: boolean): void {
        if (isEnabled) {
            let popup: Element = createElement('div', { className: POPUP, styles: 'display:none;' });
            let content: Element = createElement('div', { className: CONTENT, attrs: { tabIndex: '-1' } });
            let icon: Element = createElement('span', { className: ICON });
            content.appendChild(icon);
            append([content, createElement('div', { className: DOWNTAIL })], popup);
            this.element.appendChild(popup);
            EventHandler.add(content, 'click', this.popupClick, this);
        } else {
            let popup: Element = select('.' + POPUP, this.element);
            if (popup) {
                detach(popup);
            }
        }
    }

    private setMultiSelect(isEnabled: boolean): void {
        if (isEnabled) {
            this.element.setAttribute('aria-multiselectable', 'true');
        } else {
            this.element.removeAttribute('aria-multiselectable');
        }
    }

    private popupClick(e: MouseEvent): void {
        e.stopImmediatePropagation();
        let target: Element = <Element>e.currentTarget;
        target = closest(target, '.' + POPUP);
        if (target.classList.contains(POPUPSELECT)) {
            removeClass([target], POPUPSELECT);
            (select('.' + POPUP, this.element) as HTMLElement).style.display = 'none';
        } else {
            addClass([target], POPUPSELECT);
        }
    }

    private templateComplier(template: string): Function {
        if (template) {
            let e: Object;
            try {
                if (document.querySelectorAll(template).length) {
                    return compile(document.querySelector(template).innerHTML.trim());
                }
            } catch (e) {
                return compile(template);
            }
        }
        return undefined;
    }

    private setDataBinding(): void {
        this.treeList.push('false');
        if (this.fields.dataSource instanceof DataManager) {
            (this.fields.dataSource as DataManager).executeQuery(this.getQuery(this.fields)).then((e: Object) => {
                this.treeList.pop();
                this.treeData = (e as ResultData).result;
                this.isNumberTypeId = this.treeData[0] ? ((typeof this.treeData[0][this.fields.id] === 'number') ? true : false) : false;
                this.setRootData();
                this.renderItems(true);
                if (this.treeList.length === 0 && !this.isLoaded) {
                    this.finalize();
                }
            });
        } else {
            this.treeList.pop();
            if (isNOU(this.fields.dataSource)) {
                this.rootData = this.treeData = [];
            } else {
                this.treeData = <{ [key: string]: Object }[]>this.fields.dataSource;
                this.setRootData();
            }
            this.renderItems(false);
        }
        if (this.treeList.length === 0 && !this.isLoaded) {
            this.finalize();
        }
    }

     private getQuery(mapper: FieldsSettingsModel, value: string = null): Query {
        let columns: string[] = [];
        let query: Query;
        if (!mapper.query) {
            query = new Query();
            let prop: FieldsSettingsModel = this.getActualProperties(mapper);
            for (let col of Object.keys(prop)) {
                if (col !== 'dataSource' && col !== 'tableName' && col !== 'child' && !!(mapper as { [key: string]: Object })[col]
                    && columns.indexOf((mapper as { [key: string]: string })[col]) === -1) {
                    columns.push((mapper as { [key: string]: string })[col]);
                }
            }
            query.select(columns);
            if (prop.hasOwnProperty('tableName')) {
                query.from(mapper.tableName);
            }
        } else {
            query = mapper.query.clone();
        }
        ListBase.addSorting(this.sortOrder, mapper.text, query);
        if (!isNOU(value) && !isNOU(mapper.parentID)) {
            query.where(mapper.parentID, 'equal', (this.isNumberTypeId ? parseFloat(value) : value));
        }
        return query;
    }

    private setRootData(): void {
        this.dataType = this.getDataType(this.treeData, this.fields);
        if (this.dataType === 1) {
            this.groupedData = this.getGroupedData(this.treeData, this.fields.parentID);
            let rootItems: { [key: string]: Object }[] = this.getChildNodes(this.treeData, undefined, true);
            if (isNOU(rootItems)) {
                this.rootData = [];
            } else {
                this.rootData = rootItems;
            }
        } else {
            this.rootData = this.treeData;
        }
    }

    private renderItems(isSorted: boolean): void {
        this.listBaseOption.ariaAttributes.level = 1;
        this.ulElement = ListBase.createList(isSorted ? this.rootData : this.getSortedData(this.rootData), this.listBaseOption);
        this.element.appendChild(this.ulElement);
        this.finalizeNode(this.element);
    }

    private beforeNodeCreate(e: ItemCreatedArgs): void {
        if (this.showCheckBox) {
            let checkboxEle: Element = createCheckBox();
            let icon: Element = select('div.' + ICON, e.item);
            let id: string = e.item.getAttribute('data-uid');
            e.item.childNodes[0].insertBefore(checkboxEle, e.item.childNodes[0].childNodes[isNOU(icon) ? 0 : 1]);
            if (this.checkedNodes.indexOf(id) > -1) {
                select('.' + CHECKBOXFRAME, checkboxEle).classList.add(CHECK);
                checkboxEle.setAttribute('aria-checked', 'true');
                this.addCheck(e.item);
            } else if (!isNOU(e.curData[e.fields.isChecked]) && e.curData[e.fields.isChecked].toString() === 'true') {
                select('.' + CHECKBOXFRAME, checkboxEle).classList.add(CHECK);
                checkboxEle.setAttribute('aria-checked', 'true');
                this.addCheck(e.item);
            } else {
                checkboxEle.setAttribute('aria-checked', 'false');
            }
        }
        if (this.fullRowSelect) {
            this.createFullRow(e.item);
        }
        if (this.allowMultiSelection && !e.item.classList.contains(SELECTED)) {
            e.item.setAttribute('aria-selected', 'false');
        }
        let fields: FieldsMapping = e.fields;
        this.addActionClass(e, fields.selected, SELECTED);
        this.addActionClass(e, fields.expanded, EXPANDED);
        if (!isNOU(this.nodeTemplateFn)) {
            let textEle: Element = e.item.querySelector('.' + LISTTEXT);
            textEle.innerHTML = '';
            append(this.nodeTemplateFn(e.curData), textEle);
        }
        let eventArgs: DrawNodeEventArgs = {
            node: e.item as HTMLLIElement,
            nodeData: e.curData,
            text: e.text,
        };
        this.trigger('drawNode', eventArgs);
    }

    private addActionClass(e: ItemCreatedArgs, action: string, cssClass: string): void {
        let data: { [key: string]: Object } = e.curData;
        if (data.hasOwnProperty(action) && !isNOU(data[action]) && data[action].toString() !== 'false') {
            e.item.classList.add(cssClass);
        }
    }

    private getDataType(ds: { [key: string]: Object }[], mapper: FieldsSettingsModel): number {
        for (let i: number = 0, len: number = ds.length; i < len; i++) {
            if ((typeof mapper.child === 'string') && ds[i].hasOwnProperty(mapper.child)) {
                return 2;
            }
            if (ds[i].hasOwnProperty(mapper.parentID) || ds[i].hasOwnProperty(mapper.hasChildren)) {
                return 1;
            }
        }
        return 1;
    }

    private getGroupedData(dataSource: { [key: string]: Object }[], groupBy: string): { [key: string]: Object }[][] {
        let cusQuery: Query = new Query().group(groupBy);
        let ds: { [key: string]: Object }[] = ListBase.getDataSource(dataSource, cusQuery);
        let grpItem: { [key: string]: Object }[][] = [];
        for (let j: number = 0; j < ds.length; j++) {
            let itemObj: { [key: string]: Object }[] = (ds[j] as { items: { [key: string]: Object }[] } & { [key: string]: Object }).items;
            grpItem.push(itemObj);
        }
        return grpItem;
    }

    private getSortedData(list: { [key: string]: Object }[]): { [key: string]: Object }[] {
        if (list && this.sortOrder !== 'None') {
            list = ListBase.getDataSource(list, ListBase.addSorting(this.sortOrder, this.fields.text));
        }
        return list;
    }

    private finalizeNode(element: Element | Document): void {
        if (this.isLoaded) {
            let sNodes: HTMLElement[] = selectAll('.' + SELECTED, element);
            for (let i: number = 0; i < sNodes.length; i++) {
                this.selectNode(sNodes[i], null);
                break;
            }
            removeClass(sNodes, SELECTED);
        }
        let cNodes: HTMLElement[] = selectAll('.' + LISTITEM + ':not(.' + EXPANDED + ')', element);
        for (let j: number = 0; j < cNodes.length; j++) {
            let icon: Element = select('div.' + ICON, cNodes[j]);
            if (icon && icon.classList.contains(EXPANDABLE)) {
                cNodes[j].setAttribute('aria-expanded', 'false');
                addClass([cNodes[j]], NODECOLLAPSED);
            }
        }
        let eNodes: HTMLElement[] = selectAll('.' + EXPANDED, element);
        for (let i: number = 0; i < eNodes.length; i++) {
            this.renderChildNodes(eNodes[i]);
        }
        removeClass(eNodes, EXPANDED);
        this.updateList();
        if (this.showCheckBox) {
            let nodes: string[] = [].concat([], this.checkedNodes);
            this.checkedNodes.forEach((value: string, index: number) => {
                let checkBox: Element = this.element.querySelector('[data-uid="' + value + '"]');
                if (isNOU(checkBox)) {
                    nodes = nodes.filter((e: string) => { return e !== value; });
                }
            });
            this.setProperties({ checkedNodes: nodes }, true);
        }
    }

    private ensureParentCheckState(element: Element): void {
        if (!isNOU(element)) {
            if (element.classList.contains(ROOT)) {
                return;
            }
            let ulElement: Element = element;
            if (element.classList.contains(LISTITEM)) {
                ulElement = select('.' + PARENTITEM, element);
            }
            let checkedNodes: HTMLElement[] = selectAll('.' + CHECK, ulElement);
            let nodes: HTMLElement[] = selectAll('.' + LISTITEM, ulElement);
            let checkBoxEle: Element = element.getElementsByClassName(CHECKBOXWRAP)[0];
            if (nodes.length === checkedNodes.length) {
                this.changeState(checkBoxEle, 'check', null, true, true);
            } else if (checkedNodes.length > 0) {
                this.changeState(checkBoxEle, 'indeterminate', null, true, true);
            } else if (checkedNodes.length === 0) {
                this.changeState(checkBoxEle, 'uncheck', null, true, true);
            }
            let parentUL: Element = closest(element, '.' + PARENTITEM);
            if (!isNOU(parentUL)) {
                let currentParent: Element = closest(parentUL, '.' + LISTITEM);
                this.ensureParentCheckState(currentParent);
            }
        }
    }
    private ensureChildCheckState(element: Element | Document, e?: MouseEvent | KeyboardEventArgs): void {
        if (!isNOU(element)) {
            let childElement: Element = select('.' + PARENTITEM, element);
            let checkBoxes: HTMLElement[];
            if (!isNOU(childElement)) {
                checkBoxes = selectAll('.' + CHECKBOXWRAP, childElement);
                let isChecked: boolean = element.getElementsByClassName(CHECKBOXFRAME)[0].classList.contains(CHECK);
                let checkedState: string;
                for (let index: number = 0; index < checkBoxes.length; index++) {
                    if (!isNOU(this.currentLoadData) && !isNOU(this.currentLoadData[index][this.fields.isChecked])) {
                        checkedState = this.currentLoadData[index][this.fields.isChecked] ? 'check' : 'uncheck';
                    } else {
                        checkedState = isChecked ? 'check' : 'uncheck';
                    }
                    this.changeState(checkBoxes[index], checkedState, e, true, true);
                }
            }
        }
    }

    private doCheckBoxAction(nodes: string[] | Element[], doCheck: boolean): void {
        if (! isNOU(nodes) ) {
            for (let i: number = 0, len: number = nodes.length; i < len; i++) {
                let liEle: Element = this.getElement(nodes[i]);
                if (isNOU(liEle)) {
                    continue;
                }
                let checkBox : Element = select('.' + PARENTITEM + ' .' + CHECKBOXWRAP, liEle);
                this.validateCheckNode(checkBox, !doCheck, liEle, null);
            }
        } else {
            let checkBoxes : HTMLElement[] = selectAll('.' + CHECKBOXWRAP, this.element);
            for (let index : number = 0; index < checkBoxes.length; index++) {
                this.changeState(checkBoxes[index], doCheck ? 'check' : 'uncheck');
            }
        }
    }

    private changeState(
        wrapper: HTMLElement | Element, state: string, e?: MouseEvent | KeyboardEventArgs, isPrevent?: boolean, isAdd?: boolean): void {
        let ariaState: string;
        let eventArgs: NodeCheckEventArgs;
        let currLi : Element = closest(wrapper, '.' + LISTITEM);
        if (!isPrevent) {
            this.checkActionNodes = [];
            eventArgs = this.getCheckEvent(currLi, state, e);
            this.trigger('nodeChecking', eventArgs);
            if (eventArgs.cancel) {
                return;
            }
        }
        let frameSpan: Element = wrapper.getElementsByClassName(CHECKBOXFRAME)[0];
        if (state === 'check' && !frameSpan.classList.contains(CHECK)) {
            frameSpan.classList.remove(INDETERMINATE);
            frameSpan.classList.add(CHECK);
            this.addCheck(currLi);
            ariaState = 'true';
        } else if (state === 'uncheck' && (frameSpan.classList.contains(CHECK) || frameSpan.classList.contains(INDETERMINATE))) {
            removeClass([frameSpan], [CHECK, INDETERMINATE]);
            this.removeCheck(currLi);
            ariaState = 'false';
        } else if (state === 'indeterminate' && !frameSpan.classList.contains(INDETERMINATE)) {
            frameSpan.classList.remove(CHECK);
            frameSpan.classList.add(INDETERMINATE);
            this.removeCheck(currLi);
            ariaState = 'mixed';
        }
        ariaState = state === 'check' ? 'true' : state === 'uncheck' ? 'false' : ariaState;
        if (!isNOU(ariaState)) {
            wrapper.setAttribute('aria-checked', ariaState);
        }
        if (isAdd) {
            let data: { [key: string]: Object }[] = [].concat([], this.checkActionNodes);
            eventArgs = this.getCheckEvent(currLi, state, e);
            if (isUndefined(isPrevent)) {
                eventArgs.data = data;
            }
        }
        if (!isPrevent) {
            if (!isNOU(ariaState)) {
                wrapper.setAttribute('aria-checked', ariaState);
                eventArgs.data[0].checked = ariaState;
                this.trigger('nodeChecked', eventArgs);
                this.checkActionNodes = [];
            }
        }
    }

    private addCheck(liEle: Element): void {
        let id: string = liEle.getAttribute('data-uid');
        if (!isNOU(id) && this.checkedNodes.indexOf(id) === -1) {
            this.checkedNodes.push(id);
        }
    }

    private removeCheck(liEle: Element): void {
        let index: number = this.checkedNodes.indexOf(liEle.getAttribute('data-uid'));
        if (index > -1) {
            this.checkedNodes.splice(index, 1);
        }
    }

    private getCheckEvent(currLi: Element, action: string, e: MouseEvent | KeyboardEventArgs): NodeCheckEventArgs {
        this.checkActionNodes.push(this.getNodeData(currLi));
        let nodeData: { [key: string]: Object }[] = this.checkActionNodes;
        return { action: action, cancel: false, isInteracted: isNOU(e) ? false : true, node: currLi as HTMLLIElement, data: nodeData };
    }

    private finalize(): void {
        let firstNode: Element = select('.' + LISTITEM, this.element);
        if (firstNode) {
            addClass([firstNode], FOCUS);
        }
        this.doSelectionAction();
        this.isLoaded = true;
        let eventArgs: DataBoundEventArgs = { data: this.treeData };
        this.trigger('dataBound', eventArgs);
    }

    private doSelectionAction(): void {
        let sNodes: HTMLElement[] = selectAll('.' + SELECTED, this.element);
        let sUids: string[] = this.selectedNodes;
        if (sUids.length > 0) {
            this.setProperties({ selectedNodes: [] }, true);
            for (let i: number = 0; i < sUids.length; i++) {
                let sNode: Element = select('[data-uid="' + sUids[i] + '"]', this.element);
                this.selectNode(sNode, null, true);
                if (!this.allowMultiSelection) {
                    break;
                }
            }
        } else {
            this.selectGivenNodes(sNodes);
        }
        removeClass(sNodes, SELECTED);
    }

    private selectGivenNodes(sNodes: HTMLElement[]): void {
        for (let i: number = 0; i < sNodes.length; i++) {
            this.selectNode(sNodes[i], null, true);
            if (!this.allowMultiSelection) {
                break;
            }
        }
    }

    private clickHandler(e: MouseEvent): void {
        let target: Element = <Element>e.target;
        EventHandler.remove(this.element, 'contextmenu ', this.preventContextMenu);
        if (!target || this.dragStartAction) {
            return;
        } else {
            let classList: DOMTokenList = target.classList;
            let li: Element = closest(target, '.' + LISTITEM);
            if (!li) {
                return;
            } else {
                this.removeHover();
                this.setFocusElement(li);
                if (this.showCheckBox) {
                    let checkWrapper: HTMLElement = closest(target, '.' + CHECKBOXWRAP) as HTMLElement;
                    if (!isNOU(checkWrapper)) {
                        let checkElement: Element = select('.' + CHECKBOXFRAME, checkWrapper);
                        this.validateCheckNode(checkWrapper, checkElement.classList.contains(CHECK), li, e);
                        this.triggerClickEvent(e, li);
                        return;
                    }
                }
                if (classList.contains(EXPANDABLE)) {
                    this.expandAction(li, target, e);
                } else if (classList.contains(COLLAPSIBLE)) {
                    this.collapseNode(li, target, e);
                } else {
                    if (!classList.contains(PARENTITEM) && !classList.contains(LISTITEM)) {
                        let multiSelect: boolean = false;
                        if (Browser.isDevice && this.allowMultiSelection) {
                            let popup: HTMLElement = (select('.' + POPUP, this.element) as HTMLElement);
                            if (!isVisible(popup)) {
                                popup.style.display = '';
                            }
                            let txtWrap: HTMLElement = <HTMLElement>closest(target, '.' + TEXTWRAP);
                            txtWrap = !txtWrap ? <HTMLElement>e.target : txtWrap;
                            let pos: ClientRect = txtWrap.getBoundingClientRect();
                            let posLeft: number = (e.clientX - pos.left) + txtWrap.offsetLeft - (popup.offsetWidth / 2);
                            let posTop: number = txtWrap.offsetTop - popup.offsetHeight - 10;
                            popup.style.left = (posLeft < 0 ? 0 : posLeft) + 'px';
                            popup.style.top = (posTop < 0 ? 0 : posTop) + 'px';
                            if (popup.classList.contains(POPUPSELECT)) {
                                multiSelect = true;
                            }
                        }
                        this.toggleSelect(li, e, multiSelect);
                    }
                }
                this.triggerClickEvent(e, li);
            }
        }
    }

    private nodeCheckingEvent(wrapper: HTMLElement | Element, isCheck: boolean, e: MouseEvent | KeyboardEventArgs): NodeCheckEventArgs {
        let currLi: Element = closest(wrapper, '.' + LISTITEM);
        this.checkActionNodes = [];
        let ariaState: string = !isCheck ? 'true' : 'false';
        if (!isNOU(ariaState)) {
            wrapper.setAttribute('aria-checked', ariaState);
        }
        let eventArgs: NodeCheckEventArgs = this.getCheckEvent(currLi, !isCheck ? 'uncheck' : 'check', e);
        this.trigger('nodeChecking', eventArgs);
        return eventArgs;
    }

    private nodeCheckedEvent(wrapper: HTMLElement | Element, isCheck: boolean, e: MouseEvent | KeyboardEventArgs): void {
        let currLi: Element = closest(wrapper, '.' + LISTITEM);
        let eventArgs: NodeCheckEventArgs = this.getCheckEvent(wrapper, isCheck ? 'uncheck' : 'check', e);
        eventArgs.data = eventArgs.data.splice(0, eventArgs.data.length - 1);
        this.trigger('nodeChecked', eventArgs);
    }

    private triggerClickEvent(e: MouseEvent, li: Element): void {
        let eventArgs: NodeClickEventArgs = {
            event: e,
            node: li as HTMLLIElement,
        };
        this.trigger('nodeClicked', eventArgs);
    }

    private expandNode(currLi: Element, icon: Element): void {
        removeClass([icon], LOAD);
        removeClass([icon], EXPANDABLE);
        addClass([icon], COLLAPSIBLE);
        let start: number = 0;
        let end: number = 0;
        let proxy: TreeView = this;
        let ul: HTMLElement = <HTMLElement>select('.' + PARENTITEM, currLi);
        let liEle: HTMLElement = <HTMLElement>currLi;
        this.setHeight(liEle, ul);
        this.aniObj.animate(ul, {
            name: this.animation.expand.effect,
            duration: this.animation.expand.duration,
            timingFunction: this.animation.expand.easing,
            begin: (args: AnimationOptions): void => {
                liEle.style.overflow = 'hidden';
                start = liEle.offsetHeight;
                end = (<HTMLElement>select('.' + TEXTWRAP, currLi)).offsetHeight;
            },
            progress: (args: AnimationOptions): void => {
                args.element.style.display = 'block';
                proxy.animateHeight(args, start, end);
            },
            end: (args: AnimationOptions): void => {
                args.element.style.display = 'block';
                liEle.style.overflow = '';
                liEle.style.height = '';
                removeClass([icon], PROCESS);
                currLi.setAttribute('aria-expanded', 'true');
                removeClass([currLi], NODECOLLAPSED);
                if (this.isLoaded && this.expandArgs) {
                    this.trigger('nodeExpanded', this.expandArgs);
                }
            }
        });
    }

    private collapseNode(currLi: Element, icon: Element, e: MouseEvent | KeyboardEventArgs): void {
        if (icon.classList.contains(PROCESS)) {
            return;
        } else {
            addClass([icon], PROCESS);
        }
        let colArgs: NodeExpandEventArgs;
        if (this.isLoaded) {
            colArgs = this.getExpandEvent(currLi, e);
            this.trigger('nodeCollapsing', colArgs);
            if (colArgs.cancel) {
                return;
            }
        }
        removeClass([icon], COLLAPSIBLE);
        addClass([icon], EXPANDABLE);
        let start: number = 0;
        let end: number = 0;
        let proxy: TreeView = this;
        let ul: HTMLElement = <HTMLElement>select('.' + PARENTITEM, currLi);
        let liEle: HTMLElement = <HTMLElement>currLi;
        addClass([currLi], NODECOLLAPSED);
        this.aniObj.animate(ul, {
            name: this.animation.collapse.effect,
            duration: this.animation.collapse.duration,
            timingFunction: this.animation.collapse.easing,
            begin: (args: AnimationOptions): void => {
                liEle.style.overflow = 'hidden';
                start = (<HTMLElement>select('.' + TEXTWRAP, currLi)).offsetHeight;
                end = liEle.offsetHeight;
            },
            progress: (args: AnimationOptions): void => {
                proxy.animateHeight(args, start, end);
            },
            end: (args: AnimationOptions): void => {
                liEle.style.overflow = '';
                args.element.style.display = 'none';
                liEle.style.height = '';
                removeClass([icon], PROCESS);
                currLi.setAttribute('aria-expanded', 'false');
                if (this.isLoaded) {
                    this.trigger('nodeCollapsed', colArgs);
                }
            }
        });
    }

    private setHeight(currLi: HTMLElement, ul: HTMLElement): void {
        ul.style.display = 'block';
        ul.style.visibility = 'hidden';
        currLi.style.height = currLi.offsetHeight + 'px';
        ul.style.display = 'none';
        ul.style.visibility = '';
    }

    private animateHeight(args: AnimationOptions, start: number, end: number): void {
        let remaining: number = (args.duration - args.timeStamp) / args.duration;
        let currentHeight: number = ( end - start ) * remaining + start;
        args.element.parentElement.style.height = currentHeight + 'px';
    }

    private renderChildNodes(parentLi: Element, expandChild?: boolean): void {
        let eicon: Element = select('div.' + ICON, parentLi);
        if (isNOU(eicon)) {
            return;
        }
        addClass([eicon], LOAD);
        let childItems: { [key: string]: Object }[];
        if (this.fields.dataSource instanceof DataManager) {
            let level: number = this.parents(parentLi, '.' + PARENTITEM).length;
            let mapper: FieldsSettingsModel = this.getChildFields(this.fields, level, 1);
            if (isNOU(mapper) || isNOU(mapper.dataSource)) {
                detach(eicon);
                parentLi.removeAttribute('aria-expanded');
                return;
            }
            this.treeList.push('false');
            (mapper.dataSource as DataManager).executeQuery(this.getQuery(mapper, parentLi.getAttribute('data-uid'))).then((e: Object) => {
                this.treeList.pop();
                childItems = (e as ResultData).result;
                this.currentLoadData = childItems;
                if (isNOU(childItems) || childItems.length === 0) {
                    detach(eicon);
                    parentLi.removeAttribute('aria-expanded');
                } else {
                    let prop: FieldsSettingsModel = this.getActualProperties(mapper);
                    this.listBaseOption.fields = prop as FieldsMapping;
                    this.listBaseOption.fields.url = prop.navigateUrl;
                    this.listBaseOption.ariaAttributes.level = parseFloat(parentLi.getAttribute('aria-level')) + 1;
                    parentLi.appendChild(ListBase.createList(childItems, this.listBaseOption));
                    this.expandNode(parentLi, eicon);
                    this.ensureCheckNode(parentLi);
                    this.finalizeNode(parentLi);
                    this.renderSubChild(parentLi, expandChild);
                }
                if (this.treeList.length === 0 && !this.isLoaded) {
                    this.finalize();
                }
            });
        } else {
            childItems = this.getChildNodes(this.treeData, parentLi.getAttribute('data-uid'));
            this.currentLoadData = childItems;
            if (isNOU(childItems) || childItems.length === 0) {
                detach(eicon);
                parentLi.removeAttribute('aria-expanded');
                return;
            } else {
                this.listBaseOption.ariaAttributes.level = parseFloat(parentLi.getAttribute('aria-level')) + 1;
                parentLi.appendChild(ListBase.createList(this.getSortedData(childItems), this.listBaseOption));
                this.expandNode(parentLi, eicon);
                this.ensureCheckNode(parentLi);
                this.finalizeNode(parentLi);
                this.renderSubChild(parentLi, expandChild);
            }
        }
    }

    private ensureCheckNode(element: Element): void {
        if (this.showCheckBox) {
            this.ensureChildCheckState(element);
            this.ensureParentCheckState(element);
        }
        this.currentLoadData = null;
    }

    private getChildFields(mapper: FieldsSettingsModel, nodeLevel: number, dataLevel: number): FieldsSettingsModel {
        let childData: FieldsSettingsModel;
        if (nodeLevel === dataLevel) {
            return this.getChildMapper(mapper);
        } else {
            return this.getChildFields(this.getChildMapper(mapper), nodeLevel, dataLevel + 1);
        }
    }

    private getChildMapper(mapper: FieldsSettingsModel): FieldsSettingsModel {
        return (typeof mapper.child === 'string' || isNOU(mapper.child)) ? mapper : mapper.child;
    }

    private getChildNodes(obj: { [key: string]: Object }[], parentId: string, isRoot: boolean = false): { [key: string]: Object }[] {
        let childNodes: { [key: string]: Object }[];
        if (isNOU(obj)) {
            return childNodes;
        } else if (this.dataType === 1) {
            return this.getChildGroup(this.groupedData, parentId, isRoot);
        } else {
            if (typeof this.fields.child === 'string') {
                for (let i: number = 0, objlen: number = obj.length; i < objlen; i++) {
                    if (obj[i][this.fields.id] && obj[i][this.fields.id].toString() === parentId) {
                        return <{ [key: string]: Object }[]>obj[i][this.fields.child];
                    } else if (obj[i].hasOwnProperty(this.fields.child)) {
                        childNodes = this.getChildNodes(<{ [key: string]: Object }[]>obj[i][this.fields.child], parentId);
                        if (childNodes !== undefined) {
                            break;
                        }
                    }
                }
            }
        }
        return childNodes;
    }

    private getChildGroup(data: { [key: string]: Object }[][], parentId: string, isRoot: boolean): { [key: string]: Object }[] {
        let childNodes: { [key: string]: Object }[];
        if (isNOU(data)) {
            return childNodes;
        }
        for (let i: number = 0, objlen: number = data.length; i < objlen; i++) {
            if (!isNOU(data[i][0]) && !isNOU(data[i][0][this.fields.parentID])) {
                if (data[i][0][this.fields.parentID].toString() === parentId ) {
                    return data[i];
                }
            } else if (isRoot) {
                return data[i];
            } else {
                return [];
            }
        }
        return childNodes;
    }

    private renderSubChild(element: Element, expandChild?: boolean): void {
        if (expandChild) {
            let cIcons: HTMLElement[] = selectAll('.' + EXPANDABLE, element);
            for (let i: number = 0, len: number = cIcons.length; i < len; i++) {
                let icon: Element = cIcons[i];
                let curLi: Element = closest(icon, '.' + LISTITEM);
                this.renderChildNodes(curLi, expandChild);
            }
        }
    }

    private toggleSelect(li: Element, e: MouseEvent | KeyboardEventArgs, multiSelect?: boolean): void {
        if (this.allowMultiSelection && ((e && e.ctrlKey) || multiSelect) && this.isActive(li)) {
            this.unselectNode(li, e);
        } else {
            this.selectNode(li, e, multiSelect);
        }
    }

    private isActive(li: Element): boolean {
        return li.classList.contains(ACTIVE) ? true : false;
    }

    private selectNode(li: Element, e: MouseEvent | KeyboardEventArgs, multiSelect?: boolean): void {
        if (isNOU(li) || (!this.allowMultiSelection && this.isActive(li) && !isNOU(e))) {
            this.setFocusElement(li);
            return;
        }
        let eventArgs: NodeSelectEventArgs;
        if (this.isLoaded) {
            eventArgs = this.getSelectEvent(li, 'select', e);
            this.trigger('nodeSelecting', eventArgs);
            if (eventArgs.cancel) {
                return;
            }
        }
        if (!this.allowMultiSelection || (!multiSelect && (!e || (e && !e.ctrlKey)))) {
            this.removeSelectAll();
        }
        if (this.allowMultiSelection && e && e.shiftKey) {
            if (!this.startNode) {
                this.startNode = li;
            }
            let startIndex: number = this.liList.indexOf(<HTMLElement>this.startNode);
            let endIndex: number = this.liList.indexOf(<HTMLElement>li);
            if (startIndex > endIndex) {
                let temp: number = startIndex;
                startIndex = endIndex;
                endIndex = temp;
            }
            for (let i: number = startIndex; i <= endIndex; i++) {
                let currNode: Element = this.liList[i];
                if (isVisible(currNode)) {
                    this.addSelect(currNode);
                }
            }
        } else {
            this.startNode = li;
            this.addSelect(li);
        }
        this.setFocusElement(li);
        if (this.isLoaded) {
            this.trigger('nodeSelected', eventArgs);
        }
    }

    private unselectNode(li: Element, e: MouseEvent | KeyboardEventArgs): void {
        let eventArgs: NodeSelectEventArgs;
        if (this.isLoaded) {
            eventArgs = this.getSelectEvent(li, 'un-select', e);
            this.trigger('nodeSelecting', eventArgs);
            if (eventArgs.cancel) {
                return;
            }
        }
        this.removeSelect(li);
        this.setFocusElement(li);
        if (this.isLoaded) {
            this.trigger('nodeSelected', eventArgs);
        }
    }

    private setFocusElement(li: Element): void {
        if (!isNOU(li)) {
            let focusedNode: Element = this.getFocusedNode();
            if (focusedNode) {
                removeClass([focusedNode], FOCUS);
            }
            addClass([li], FOCUS);
        }
    }

    private addSelect(liEle: Element): void {
        liEle.setAttribute('aria-selected', 'true');
        addClass([liEle], ACTIVE);
        let id: string = liEle.getAttribute('data-uid');
        if (!isNOU(id) && this.selectedNodes.indexOf(id) === -1) {
            this.selectedNodes.push(id);
        }
    }

    private removeSelect(liEle: Element): void {
        if (this.allowMultiSelection) {
            liEle.setAttribute('aria-selected', 'false');
        } else {
            liEle.removeAttribute('aria-selected');
        }
        removeClass([liEle], ACTIVE);
        let index: number = this.selectedNodes.indexOf(liEle.getAttribute('data-uid'));
        if (index > -1) {
            this.selectedNodes.splice(index, 1);
        }
    }

    private removeSelectAll(): void {
        let selectedLI: Element[] = <NodeListOf<Element> & Element[]>this.element.querySelectorAll('.' + ACTIVE);
        for (let ele of selectedLI) {
            if (this.allowMultiSelection) {
                ele.setAttribute('aria-selected', 'false');
            } else {
                ele.removeAttribute('aria-selected');
            }
        }
        removeClass(selectedLI, ACTIVE);
        this.setProperties({ selectedNodes: [] }, true);
    }

    private getSelectEvent(currLi: Element, action: string, e: MouseEvent | KeyboardEventArgs): NodeSelectEventArgs {
        let nodeData: { [key: string]: Object } = this.getNodeData(currLi);
        return { action: action, cancel: false, isInteracted: isNOU(e) ? false : true, node: currLi as HTMLLIElement, nodeData: nodeData };
    }

    private setExpandOnType(): void {
        this.expandOnType = (this.expandOn === 'auto') ? (Browser.isDevice ? 'click' : 'dblclick') : this.expandOn;
    }

    private expandHandler(e: MouseEvent): void {
        let target: Element = <Element>e.target;
        if (!target || (this.allowEditing && e.type === 'dblclick') || target.classList.contains(ROOT) ||
            target.classList.contains(PARENTITEM) || target.classList.contains(LISTITEM) ||
            target.classList.contains(ICON) || this.showCheckBox && closest(target, '.' + CHECKBOXWRAP)) {
            return;
        } else {
            this.expandCollapseAction(closest(target, '.' + LISTITEM), e);
        }
    }

    private expandCollapseAction(currLi: Element, e: MouseEvent): void {
        let icon: Element = select('div.' + ICON, currLi);
        if (!icon || icon.classList.contains(PROCESS)) {
            return;
        } else {
            let classList: DOMTokenList = icon.classList;
            if (classList.contains(EXPANDABLE)) {
                this.expandAction(currLi, icon, e);
            } else {
                this.collapseNode(currLi, icon, e);
            }
        }
    }

    private expandAction(currLi: Element, icon: Element, e: MouseEvent | KeyboardEventArgs, expandChild?: boolean): void {
        if (icon.classList.contains(PROCESS)) {
            return;
        } else {
            addClass([icon], PROCESS);
        }
        if (this.isLoaded) {
            this.expandArgs = this.getExpandEvent(currLi, e);
            this.trigger('nodeExpanding', this.expandArgs);
            if (this.expandArgs.cancel) {
                return;
            }
        }
        let ul: Element = select('.' + PARENTITEM, currLi);
        if (ul && ul.nodeName === 'UL') {
            this.expandNode(currLi, icon);
        } else {
            this.renderChildNodes(currLi, expandChild);
        }
    }

    private keyActionHandler(e: KeyboardEventArgs): void {
        let target: Element = <Element>e.target;
        let focusedNode: Element = this.getFocusedNode();
        if (target && target.classList.contains(INPUT)) {
            let inpEle: HTMLInputElement = <HTMLInputElement>target;
            if (e.action === 'enter') {
                inpEle.blur();
                this.element.focus();
                addClass([focusedNode], HOVER);
            } else if (e.action === 'escape') {
                inpEle.value = this.oldText;
                inpEle.blur();
                this.element.focus();
                addClass([focusedNode], HOVER);
            }
            return;
        }
        e.preventDefault();
        let eventArgs: NodeKeyPressEventArgs = {
            cancel: false,
            event: e,
            node: focusedNode as HTMLLIElement,
        };
        this.trigger('keyPress', eventArgs);
        if (eventArgs.cancel) {
            return;
        }
        switch (e.action) {
            case 'space':
            if (this.showCheckBox) {
                this.checkNode(e);
            }
            break;
            case 'moveRight':
                this.openNode(this.enableRtl ? false : true, e);
                break;
            case 'moveLeft':
                this.openNode(this.enableRtl ? true : false, e);
                break;
            case 'moveDown':
            case 'ctrlDown':
            case 'shiftDown':
            case 'csDown':
                this.navigateNode(true);
                break;
            case 'moveUp':
            case 'ctrlUp':
            case 'shiftUp':
            case 'csUp':
                this.navigateNode(false);
                break;
            case 'home':
            case 'shiftHome':
            case 'ctrlHome':
            case 'csHome':
                this.navigateRootNode(true);
                break;
            case 'end':
            case 'shiftEnd':
            case 'ctrlEnd':
            case 'csEnd':
                this.navigateRootNode(false);
                break;
            case 'enter':
            case 'ctrlEnter':
            case 'shiftEnter':
            case 'csEnter':
                this.toggleSelect(focusedNode, e);
                break;
            case 'f2':
                if (this.allowEditing) {
                    this.createTextbox(focusedNode, e);
                }
                break;
            case 'ctrlA':
                if (this.allowMultiSelection) {
                    let sNodes: HTMLElement[] = selectAll('.' + LISTITEM + ':not(.' + ACTIVE + ')', this.element);
                    this.selectGivenNodes(sNodes);
                }
                break;
        }
    }

    private checkNode(e: KeyboardEventArgs): void {
        let focusedNode: Element = this.getFocusedNode();
        let checkWrap: Element = select('.' + CHECKBOXWRAP, focusedNode);
        let isChecked: boolean = select(' .' + CHECKBOXFRAME, checkWrap).classList.contains(CHECK);
        this.validateCheckNode(checkWrap, isChecked, focusedNode, e);
    }

    private validateCheckNode(
        checkWrap: HTMLElement | Element, isCheck: boolean, li: HTMLElement | Element, e: KeyboardEventArgs | MouseEvent): void {
        let eventArgs : NodeCheckEventArgs = this.nodeCheckingEvent(checkWrap, isCheck, e);
        if (eventArgs.cancel) {
            return;
        }
        this.changeState(checkWrap, isCheck ? 'uncheck' : 'check', e, true);
        this.ensureChildCheckState(li);
        this.ensureParentCheckState(closest(closest(li, '.' + PARENTITEM), '.' + LISTITEM));
        this.nodeCheckedEvent(checkWrap, isCheck, e);
    }

    private openNode(toBeOpened: boolean, e: KeyboardEventArgs): void {
        let focusedNode: Element = this.getFocusedNode();
        let icon: Element = select('div.' + ICON, focusedNode);
        if (toBeOpened) {
            if (!icon) {
                return;
            } else if (icon.classList.contains(EXPANDABLE)) {
                this.expandAction(focusedNode, icon, e);
            } else {
                this.focusNextNode(focusedNode, true);
            }
        } else {
            if (icon && icon.classList.contains(COLLAPSIBLE)) {
                this.collapseNode(focusedNode, icon, e);
            } else {
                let parentLi: Element = closest(closest(focusedNode, '.' + PARENTITEM), '.' + LISTITEM);
                if (!parentLi) {
                    return;
                } else {
                    this.setFocus(focusedNode, parentLi);
                }
            }
        }
    }

    private navigateNode(isTowards: boolean): void {
        let focusedNode: Element = this.getFocusedNode();
        this.focusNextNode(focusedNode, isTowards);
    }

    private navigateRootNode(isBackwards: boolean): void {
        let focusedNode: Element = this.getFocusedNode();
        let rootNode: Element = isBackwards ? this.getRootNode() : this.getEndNode();
        this.setFocus(focusedNode, rootNode);
    }

    private getFocusedNode(): Element {
        let fNode: Element = select('.' + LISTITEM + '.' + FOCUS, this.element);
        return isNOU(fNode) ? select('.' + LISTITEM, this.element) : fNode;
    }

    private focusNextNode(li: Element, isTowards: boolean): void {
        let nextNode: Element = isTowards ? this.getNextNode(li) : this.getPrevNode(li);
        this.setFocus(li, nextNode);
    }

    private getNextNode(li: Element): Element {
        let index: number = this.liList.indexOf(<HTMLElement>li);
        let nextNode: Element;
        do {
            index++;
            nextNode = this.liList[index];
            if (isNOU(nextNode)) {
                return li;
            }
        }
        while (!isVisible(nextNode));
        return nextNode;
    }

    private getPrevNode(li: Element): Element {
        let index: number = this.liList.indexOf(<HTMLElement>li);
        let prevNode: Element;
        do {
            index--;
            prevNode = this.liList[index];
            if (isNOU(prevNode)) {
                return li;
            }
        }
        while (!isVisible(prevNode));
        return prevNode;
    }

    private getRootNode(): Element {
        let index: number = 0;
        let rootNode: Element;
        do {
            rootNode = this.liList[index];
            index++;
        }
        while (!isVisible(rootNode));
        return rootNode;
    }

    private getEndNode(): Element {
        let index: number = this.liList.length - 1;
        let endNode: Element;
        do {
            endNode = this.liList[index];
            index--;
        }
        while (!isVisible(endNode));
        return endNode;
    }

    private setFocus(preNode: Element, nextNode: Element): void {
        removeClass([preNode], [HOVER, FOCUS]);
        addClass([nextNode], [HOVER, FOCUS]);
    }

    private focusIn(): void {
        if (!this.mouseDownStatus) {
            addClass([this.getFocusedNode()], HOVER);
        }
        this.mouseDownStatus = false;
    }

    private focusOut(): void {
        removeClass([this.getFocusedNode()], HOVER);
    }

    private onMouseOver(e: MouseEvent): void {
        let target: Element = <Element>e.target;
        let classList: DOMTokenList = target.classList;
        let currentLi: Element = closest(target, '.' + LISTITEM);
        if (!currentLi || classList.contains(PARENTITEM) || classList.contains(LISTITEM)) {
            this.removeHover();
            return;
        } else {
            this.setHover(currentLi);
        }
    }

    private setHover(li: Element): void {
        if (!li.classList.contains(HOVER)) {
            this.removeHover();
            addClass([li], HOVER);
        }
    };

    private onMouseLeave(e: MouseEvent): void {
        this.removeHover();
    }

    private removeHover(): void {
        let hoveredNode: Element[] = selectAll('.' + HOVER, this.element);
        if (hoveredNode && hoveredNode.length) {
            removeClass(hoveredNode, HOVER);
        }
    };

    private getNodeData(currLi: Element): { [key: string]: Object } {
        if (!isNOU(currLi) && currLi.classList.contains(LISTITEM)) {
            let id: string = currLi.getAttribute('data-uid');
            let text: string = select('.' + LISTTEXT, currLi).textContent;
            let pNode: Element = closest(currLi.parentNode, '.' + LISTITEM);
            let pid: string = pNode ? pNode.getAttribute('data-uid') : null;
            let selected: boolean = currLi.classList.contains(ACTIVE);
            let expanded: boolean = (currLi.getAttribute('aria-expanded') === 'true') ? true : false;
            let checked: string = null;
            if (this.showCheckBox) {
                checked = select('.' + CHECKBOXWRAP, currLi).getAttribute('aria-checked');
            }
            return { id: id, text: text, parentID: pid, selected: selected, expanded: expanded, checked: checked };
        }
        return { id: '', text: '', parentID: '', selected: '', expanded: '', checked: '' };
    }

    private getExpandEvent(currLi: Element, e: MouseEvent | KeyboardEventArgs): NodeExpandEventArgs {
        let nodeData: { [key: string]: Object } = this.getNodeData(currLi);
        return { cancel: false, isInteracted: isNOU(e) ? false : true, node: currLi as HTMLLIElement, nodeData: nodeData };
    }

    private reRenderNodes(): void {
        this.element.innerHTML = '';
        this.setProperties({ selectedNodes: [] }, true);
        this.isLoaded = false;
        this.setDataBinding();
    }

    private setCssClass(oldClass: string, newClass: string): void {
        if (!isNOU(oldClass) && oldClass !== '') {
            removeClass([this.element], oldClass.split(' '));
        }
        if (!isNOU(newClass) && newClass !== '') {
            addClass([this.element], newClass.split(' '));
        }
    }

    private editingHandler(e: MouseEvent): void {
        let target: Element = <Element>e.target;
        if (!target || target.classList.contains(ROOT) || target.classList.contains(PARENTITEM) ||
            target.classList.contains(LISTITEM) || target.classList.contains(ICON) ||
            target.classList.contains(INPUT)) {
            return;
        } else {
            e.stopImmediatePropagation();
            let liEle: Element = closest(target, '.' + LISTITEM);
            this.createTextbox(liEle, e);
        }
    }

    private createTextbox(liEle: Element, e: MouseEvent | KeyboardEventArgs): void {
        let textEle: Element = select('.' + LISTTEXT, liEle);
        this.oldText = textEle.textContent;
        let eventArgs: NodeEditEventArgs = this.getEditEvent(liEle, null);
        this.trigger('nodeEditing', eventArgs);
        if (eventArgs.cancel) {
            return;
        }
        let style: string = 'width:' + (<HTMLElement>textEle).offsetWidth + 'px';
        let inpEle: HTMLElement = createElement('input', { className: INPUT, styles: style, attrs: { value: this.oldText } });
        addClass([liEle], EDITING);
        textEle.childNodes[0].nodeValue = '';
        textEle.appendChild(inpEle);
        inpEle.focus();
        let inputEle: HTMLInputElement = <HTMLInputElement>inpEle;
        inputEle.setSelectionRange(0, inputEle.value.length);
        this.wireInputEvents(inpEle);
    }

    private inputFocusOut(e: MouseEvent): void {
        let target: Element = <Element>e.target;
        let newText: string = (<HTMLInputElement>target).value;
        let txtEle: Element = closest(target, '.' + LISTTEXT);
        let liEle: Element = closest(target, '.' + LISTITEM);
        txtEle.childNodes[0].nodeValue = newText;
        detach(target);
        removeClass([liEle], EDITING);
        (<HTMLElement>txtEle).focus();
        this.trigger('nodeEdited', this.getEditEvent(liEle, newText));
    }

    private getElement(ele: string | Element): Element {
        if (isNOU(ele)) {
            return null;
        } else if (typeof ele === 'string') {
            return this.element.querySelector('[data-uid="' + ele + '"]');
        } else if (typeof ele === 'object') {
            return ele;
        } else {
            return null;
        }
    }

    private getEditEvent(liEle: Element, newText: string): NodeEditEventArgs {
        let data: { [key: string]: Object } = this.getNodeData(liEle);
        return { cancel: false, newText: newText, node: liEle as HTMLLIElement, nodeData: data, oldText: this.oldText };
    }

    private setDragAndDrop(toBind: boolean): void {
        if (toBind) {
            this.initializeDrag();
        } else {
            this.destroyDrag();
        }
    }

    private initializeDrag(): void {
        let virtualEle: HTMLElement;
        this.dragObj = new Draggable(this.element, {
            enableTailMode: true,
            preventDefault: Browser.isIos ? true : false,
            cursorAt: { top: -20 },
            dragTarget: '.' + TEXTWRAP,
            helper: (e: { sender: MouseEvent & TouchEvent, element: HTMLElement }) => {
                this.dragTarget = <Element>e.sender.target;
                let dragRoot: Element = closest(this.dragTarget, '.' + ROOT);
                let dragWrap: Element = closest(this.dragTarget, '.' + TEXTWRAP);
                this.dragLi = closest(this.dragTarget, '.' + LISTITEM);
                if (this.fullRowSelect && !dragWrap && this.dragTarget.classList.contains(FULLROW)) {
                    dragWrap = this.dragTarget.nextElementSibling;
                }
                if (!this.dragTarget || !e.element.isSameNode(dragRoot) || !dragWrap ||
                    this.dragTarget.classList.contains(ROOT) || this.dragTarget.classList.contains(PARENTITEM) ||
                    this.dragTarget.classList.contains(LISTITEM)) {
                    return false;
                }
                let cloneEle: Element = <Element>(dragWrap.cloneNode(true));
                if (isNOU(select('div.' + ICON, cloneEle))) {
                    let icon: HTMLElement = createElement('div', { className: ICON + ' ' + EXPANDABLE });
                    cloneEle.insertBefore(icon, cloneEle.children[0]);
                }
                let cssClass: string =  DRAGITEM + ' ' + ROOT + ' ' + (this.enableRtl ? RTL : '');
                virtualEle = createElement('div', { className: cssClass });
                virtualEle.appendChild(cloneEle);
                let nLen: number = this.selectedNodes.length;
                if (nLen > 1 && this.allowMultiSelection && this.dragLi.classList.contains(ACTIVE)) {
                    let cNode: HTMLElement = createElement('span', { className: DROPCOUNT, innerHTML: '' + nLen });
                    virtualEle.appendChild(cNode);
                }
                document.body.appendChild(virtualEle);
                document.body.style.cursor = '';
                this.dragData = this.getNodeData(this.dragLi);
                return virtualEle;
            },
            dragStart: (e: DragEventArgs) => {
                addClass([this.element], DRAGGING);
                let eventArgs: DragAndDropEventArgs = this.getDragEvent(e.event, this, null, e.target);
                this.trigger('nodeDragStart', eventArgs);
                if (eventArgs.cancel) {
                    detach(virtualEle);
                    removeClass([this.element], DRAGGING);
                }
                this.dragStartAction = true;
            },
            drag: (e: DragEventArgs) => {
                this.dragAction(e, virtualEle);
            },
            dragStop: (e: { event: MouseEvent & TouchEvent, element: HTMLElement, target: Element, helper: HTMLElement }) => {
                removeClass([this.element], DRAGGING);
                this.removeVirtualEle();
                let dropTarget: Element = e.target;
                let dropRoot: Element = (closest(dropTarget, '.' + DROPPABLE));
                if (!dropTarget || !dropRoot || dropTarget.classList.contains(ROOT)) {
                    detach(e.helper);
                    document.body.style.cursor = '';
                }
                let eventArgs: DragAndDropEventArgs = this.getDragEvent(e.event, this, dropTarget, <HTMLElement>dropTarget);
                this.trigger('nodeDragStop', eventArgs);
                if (eventArgs.cancel) {
                    detach(e.helper);
                    document.body.style.cursor = '';
                }
                this.dragStartAction = false;
            }
        });
        this.dropObj = new Droppable(this.element, {
            out: (e: { evt: MouseEvent & TouchEvent, target: Element }) => {
             if (!isNOU(e) && !e.target.classList.contains(SIBLING)) {
              document.body.style.cursor = 'not-allowed';
            }
            },
            over: (e: { evt: MouseEvent & TouchEvent, target: Element }) => {
                document.body.style.cursor = '';
            },
            drop: (e: DropEventArgs) => {
                this.dropAction(e);
            }
        });
    }

    private dragAction(e: DropEventArgs, virtualEle: HTMLElement): void {
        let dropRoot: Element = closest(e.target, '.' + DROPPABLE);
        let dropWrap: Element = closest(e.target, '.' + TEXTWRAP);
        let icon: Element = select('div.' + ICON, virtualEle);
        removeClass([icon], [DROPIN, DROPNEXT, DROPOUT, NODROP]);
        this.removeVirtualEle();
        document.body.style.cursor = '';
        let classList: DOMTokenList = e.target.classList;
        if (this.fullRowSelect && !dropWrap && !isNOU(classList) && classList.contains(FULLROW)) {
            dropWrap = e.target.nextElementSibling;
        }
        if (dropRoot) {
            let dropLi: Element = closest(e.target, '.' + LISTITEM);
            if (!dropRoot.classList.contains(ROOT) || (dropWrap &&
                (!dropLi.isSameNode(this.dragLi) && !this.isDescendant(this.dragLi, dropLi)))) {
                    if (e && (e.event.offsetY < 7)) {
                        addClass([icon], DROPNEXT);
                        let virEle: Element = createElement('div', { className: SIBLING });
                        let index: number = this.fullRowSelect ? (1) : (0);
                        dropLi.insertBefore(virEle, dropLi.children[index]);
                    } else if (e && (e.target.offsetHeight > 0 && e.event.offsetY > (e.target.offsetHeight - 10))) {
                        addClass([icon], DROPNEXT);
                        let virEle: Element = createElement('div', { className: SIBLING });
                        let index: number = this.fullRowSelect ? (2) : (1);
                        dropLi.insertBefore(virEle, dropLi.children[index]);
                    } else {
                        addClass([icon], DROPIN);
                    }
            } else if (e.target.nodeName === 'LI' && (!dropLi.isSameNode(this.dragLi) && !this.isDescendant(this.dragLi, dropLi))) {
                addClass([icon], DROPNEXT);
                this.renderVirtualEle(e);
            } else if (e.target.classList.contains(SIBLING)) {
                addClass([icon], DROPNEXT);
            } else {
               addClass([icon], DROPOUT);
            }
        } else {
            addClass([icon], NODROP);
            document.body.style.cursor = 'not-allowed';
        }
        this.trigger('nodeDragging', this.getDragEvent(e.event, this, e.target, e.target));
    }

    private dropAction(e: DropEventArgs): void {
        let dropTarget: Element = <Element>e.target;
        let dragObj: TreeView = ((e.dragData.draggable as EJ2Instance).ej2_instances[0] as TreeView);
        let dragTarget: Element = dragObj.dragTarget;
        let dragLi: Element = (closest(dragTarget, '.' + LISTITEM));
        let dropLi: Element = (closest(dropTarget, '.' + LISTITEM));
        detach(e.droppedElement);
        document.body.style.cursor = '';
        if (!dropLi || dropLi.isSameNode(dragLi) || this.isDescendant(dragLi, dropLi)) {
            return;
        }
        if (dragObj.allowMultiSelection && (dragLi.classList.contains(ACTIVE) || (e.event.offsetY < 7 ||
            (e.target.offsetHeight > 0 && e.event.offsetY > (e.target.offsetHeight - 10))))) {
            let sNodes: HTMLElement[] = selectAll('.' + ACTIVE, dragObj.element);
            for (let i: number = 0; i < sNodes.length; i++) {
                if (dropLi.isSameNode(sNodes[i]) || this.isDescendant(sNodes[i], dropLi)) {
                    continue;
                }
                this.appendNode(dropTarget, sNodes[i], dropLi, e, dragObj);
            }
        } else {
            this.appendNode(dropTarget, dragLi, dropLi, e, dragObj);
        }
        this.trigger('nodeDropped', this.getDragEvent(e.event, dragObj, dropTarget, e.target));
    }

    private appendNode(dropTarget: Element, dragLi: Element, dropLi: Element, e: DropEventArgs, dragObj: TreeView): void {
        if (dropTarget.nodeName === 'LI') {
            this.dropAsSiblingNode(dragLi, dropLi, e, dragObj);
        } else {
            this.dropAsChildNode(dragLi, dropLi, dragObj, null, e);
        }
    }

    private dropAsSiblingNode(dragLi: Element, dropLi: Element, e: DropEventArgs, dragObj: TreeView): void {
        let dropUl: Element = closest(dropLi, '.' + PARENTITEM);
        let dragParentUl: Element = closest(dragLi, '.' + PARENTITEM);
        let dragParentLi: Element = closest(dragParentUl, '.' + LISTITEM);
        let pre: boolean;
        if (e.target.offsetHeight > 0 && e.event.offsetY > e.target.offsetHeight - 2) {
            pre = false;
        } else if (e.event.offsetY < 2) {
            pre = true;
        }
        dropUl.insertBefore(dragLi, pre ? e.target : e.target.nextElementSibling);
        this.updateElement(dragParentUl, dragParentLi);
        if (dragObj.element.id === this.element.id) {
            this.updateList();
        } else {
            dragObj.updateInstance();
            this.updateInstance();
        }
    }

    private dropAsChildNode(dragLi: Element, dropLi: Element, dragObj: TreeView, index?: number, e?: DropEventArgs): void {
        let dragParentUl: Element = closest(dragLi, '.' + PARENTITEM);
        let dragParentLi: Element = closest(dragParentUl, '.' + LISTITEM);
        let dropParentUl: Element  = closest(dropLi, '.' + PARENTITEM);
        if (e && (e.event.offsetY < 7)) {
            dropParentUl.insertBefore(dragLi, dropLi);
        } else if (e && (e.target.offsetHeight > 0 && e.event.offsetY > (e.target.offsetHeight - 10))) {
            dropParentUl.insertBefore(dragLi, dropLi.nextElementSibling);
        } else {
            let dropUl: Element = this.expandParent(dropLi);
            dropUl.insertBefore(dragLi, dropUl.childNodes[index]);
        }
        this.updateElement(dragParentUl, dragParentLi);
        if (dragObj.element.id === this.element.id) {
            this.updateList();
        } else {
            dragObj.updateInstance();
            this.updateInstance();
        }
    }

    private expandParent(dropLi: Element): Element {
        let dropIcon: Element = select('div.' + ICON, dropLi);
        if (dropIcon && dropIcon.classList.contains(EXPANDABLE)) {
            this.expandAction(dropLi, dropIcon, null);
        }
        let dropUl: Element = select('.' + PARENTITEM, dropLi);
        if (isNOU(dropUl)) {
            ListBase.generateIcon(dropLi as HTMLElement, COLLAPSIBLE, this.listBaseOption);
            let icon: Element = select('div.' + ICON, dropLi);
            removeClass([icon], EXPANDABLE);
            dropUl = ListBase.generateUL([], null, this.listBaseOption);
            dropLi.appendChild(dropUl);
            dropLi.setAttribute('aria-expanded', 'true');
            removeClass([dropLi], NODECOLLAPSED);
        }
        return dropUl;
    }

    private updateElement(dragParentUl: Element, dragParentLi: Element): void {
        if (dragParentLi && dragParentUl.childElementCount === 0) {
            let dragIcon: Element = select('div.' + ICON, dragParentLi);
            detach(dragParentUl);
            detach(dragIcon);
            dragParentLi.removeAttribute('aria-expanded');
        }
    }

    private renderVirtualEle(e: DragEventArgs): void {
        let pre: boolean;
        if (e.event.offsetY > e.target.offsetHeight - 2) {
            pre = false;
        } else if (e.event.offsetY < 2) {
            pre = true;
        }
        let virEle: Element = createElement('div', { className: SIBLING });
        let index: number = this.fullRowSelect ? (pre ? 1 : 2) : (pre ? 0 : 1);
        e.target.insertBefore(virEle, e.target.children[index]);
    }

    private removeVirtualEle(): void {
        let sibEle: Element = select('.' + SIBLING);
        if (sibEle) {
            detach(sibEle);
        }
    }

    private destroyDrag(): void {
        if (this.dragObj && this.dropObj) {
            this.dragObj.destroy();
            this.dropObj.destroy();
        }
    }

    private getDragEvent(event: MouseEvent & TouchEvent, obj: TreeView, dropTarget: Element, target: HTMLElement): DragAndDropEventArgs {
        let dropLi: Element = dropTarget ? closest(dropTarget, '.' + LISTITEM) : null;
        let dropData: { [key: string]: Object } = dropLi ? this.getNodeData(dropLi) : null;
        return {
            cancel: false,
            event: event,
            draggedNode: obj.dragLi as HTMLLIElement,
            draggedNodeData: obj.dragData,
            droppedNode: dropLi as HTMLLIElement,
            droppedNodeData: dropData,
            target: target
        };
    }

    private addFullRow(toAdd: boolean): void {
        let len: number = this.liList.length;
        if (toAdd) {
            for (let i: number = 0; i < len; i++) {
                this.createFullRow(this.liList[i]);
            }
        } else {
            for (let i: number = 0; i < len; i++) {
                let rowDiv: Element = select('.' + FULLROW, this.liList[i]);
                detach(rowDiv);
            }
        }
    }

    private createFullRow(item: HTMLElement): void {
        let rowDiv: Element = createElement('div', { className: FULLROW });
        item.insertBefore(rowDiv, item.childNodes[0]);
    }

    private addMultiSelect(toAdd: boolean): void {
        if (toAdd) {
            let liEles: Element[] = selectAll('.' + LISTITEM + ':not([aria-selected="true"])', this.element);
            for (let ele of liEles) {
                ele.setAttribute('aria-selected', 'false');
            }
        } else {
            let liEles: Element[] = selectAll('.' + LISTITEM + '[aria-selected="false"]', this.element);
            for (let ele of liEles) {
                ele.removeAttribute('aria-selected');
            }
        }
    }

    private collapseByLevel(element: Element, level: number, excludeHiddenNodes: boolean): void {
        if (level > 0 && !isNOU(element)) {
            let cNodes: Element[] = this.getVisibleNodes(excludeHiddenNodes, <NodeListOf<Element> & Element[]>element.childNodes);
            for (let i: number = 0, len: number = cNodes.length; i < len; i++) {
                let liEle: Element = cNodes[i];
                let icon: Element = select('.' + COLLAPSIBLE, select('.' + TEXTWRAP, liEle));
                if (!isNOU(icon)) {
                    this.collapseNode(liEle, icon, null);
                }
                this.collapseByLevel(select('.' + PARENTITEM, liEle), level - 1, excludeHiddenNodes);
            }
        }
    }

    private collapseAllNodes(excludeHiddenNodes: boolean): void {
        let cIcons: Element[] = this.getVisibleNodes(excludeHiddenNodes, selectAll('.' + COLLAPSIBLE, this.element));
        for (let i: number = 0, len: number = cIcons.length; i < len; i++) {
            let icon: Element = cIcons[i];
            let liEle: Element = closest(icon, '.' + LISTITEM);
            this.collapseNode(liEle, icon, null);
        }
    }

    private expandByLevel(element: Element, level: number, excludeHiddenNodes: boolean): void {
        if (level > 0 && !isNOU(element)) {
            let eNodes: Element[] = this.getVisibleNodes(excludeHiddenNodes, <NodeListOf<Element> & Element[]>element.childNodes);
            for (let i: number = 0, len: number = eNodes.length; i < len; i++) {
                let liEle: Element = eNodes[i];
                let icon: Element = select('.' + EXPANDABLE, select('.' + TEXTWRAP, liEle));
                if (!isNOU(icon)) {
                    this.expandAction(liEle, icon, null);
                }
                this.expandByLevel(select('.' + PARENTITEM, liEle), level - 1, excludeHiddenNodes);
            }
        }
    }

    private expandAllNodes(excludeHiddenNodes: boolean): void {
        let eIcons: Element[] = this.getVisibleNodes(excludeHiddenNodes, selectAll('.' + EXPANDABLE, this.element));
        for (let i: number = 0, len: number = eIcons.length; i < len; i++) {
            let icon: Element = eIcons[i];
            let liEle: Element = closest(icon, '.' + LISTITEM);
            this.expandAction(liEle, icon, null, true);
        }
    }

    private getVisibleNodes(excludeHiddenNodes: boolean, nodes: Element[]): Element[] {
        let vNodes: Element[] = Array.prototype.slice.call(nodes);
        if (excludeHiddenNodes) {
            for (let i: number = 0; i < vNodes.length; i++) {
                if (!isVisible(vNodes[i])) {
                    vNodes.splice(i, 1);
                    i--;
                }
            }
        }
        return vNodes;
    }

    private removeNode(node: Element): void {
        let dragParentUl: Element = closest(node, '.' + PARENTITEM);
        let dragParentLi: Element = closest(dragParentUl, '.' + LISTITEM);
        detach(node);
        this.updateElement(dragParentUl, dragParentLi);
        this.updateInstance();
    }

    private updateInstance(): void {
        this.updateList();
        this.updateSelectedNodes();
    }

    private updateList(): void {
        this.liList = Array.prototype.slice.call(selectAll('.' + LISTITEM, this.element));
    }

    private updateSelectedNodes(): void {
        this.setProperties({ selectedNodes: [] }, true);
        let sNodes: HTMLElement[] = selectAll('.' + ACTIVE, this.element);
        this.selectGivenNodes(sNodes);
    }

    private doGivenAction(nodes: string[] | Element[], selector: string, toExpand: boolean): void {
        for (let i: number = 0, len: number = nodes.length; i < len; i++) {
            let liEle: Element = this.getElement(nodes[i]);
            if (isNOU(liEle)) {
                continue;
            }
            let icon: Element = select('.' + selector, select('.' + TEXTWRAP, liEle));
            if (!isNOU(icon)) {
                toExpand ? this.expandAction(liEle, icon, null) : this.collapseNode(liEle, icon, null);
            }
        }
    }

    private addGivenNodes(nodes: { [key: string]: Object }[], dropLi: Element, index: number, isRemote?: boolean): void {
        let level: number = dropLi ? parseFloat(dropLi.getAttribute('aria-level')) + 1 : 1;
        if (isRemote) {
            this.updateMapper(level);
        }
        let li: HTMLElement[] = ListBase.createListItemFromJson(nodes, this.listBaseOption, level);
        let dropUl: Element = dropLi ? this.expandParent(dropLi) : select('.' + PARENTITEM, this.element);
        let refNode: Node = dropUl.childNodes[index];
        for (let i: number = 0; i < li.length; i++) {
            dropUl.insertBefore(li[i], refNode);
        }
        this.finalizeNode(dropUl);
    }

    private updateMapper(level: number): void {
        let mapper: FieldsSettingsModel = (level === 1) ? this.fields : this.getChildFields(this.fields, level - 1, 1);
        let prop: FieldsSettingsModel = this.getActualProperties(mapper);
        this.listBaseOption.fields = prop as FieldsMapping;
        this.listBaseOption.fields.url = prop.navigateUrl;
    }

    private doDisableAction(nodes: string[] | Element[]): void {
        for (let i: number = 0, len: number = nodes.length; i < len; i++) {
            let liEle: Element = this.getElement(nodes[i]);
            if (isNOU(liEle)) {
                continue;
            }
            liEle.setAttribute('aria-disabled', 'true');
            addClass([liEle], DISABLE);
        }
    }

    private doEnableAction(nodes: string[] | Element[]): void {
        for (let i: number = 0, len: number = nodes.length; i < len; i++) {
            let liEle: Element = this.getElement(nodes[i]);
            if (isNOU(liEle)) {
                continue;
            }
            liEle.removeAttribute('aria-disabled');
            removeClass([liEle], DISABLE);
        }
    }

    private wireInputEvents(inpEle: Element): void {
        EventHandler.add(inpEle, 'blur', this.inputFocusOut, this);
    }

    private wireEditingEvents(toBind: boolean): void {
        if (toBind) {
            let proxy: TreeView = this;
            if (Browser.isIos) {
                this.touchEditObj = new Touch(this.element, {
                    doubleTap: (e: TapEventArgs) => {
                        e.originalEvent.preventDefault();
                        proxy.editingHandler(e.originalEvent);
                    }
                });
            } else {
                EventHandler.add(this.element, 'dblclick', this.editingHandler, this);
            }
        } else {
            if (Browser.isIos && this.touchEditObj) {
                this.touchEditObj.destroy();
            } else {
                EventHandler.remove(this.element, 'dblclick', this.editingHandler);
            }
        }
    }

    private wireClickEvent(toBind: boolean): void {
        if (toBind) {
            let proxy: TreeView = this;
            if (Browser.isIos) {
                this.touchClickObj = new Touch(this.element, {
                    tap: (e: TapEventArgs) => {
                        proxy.clickHandler(e.originalEvent);
                    }
                });
            } else {
                EventHandler.add(this.element, 'click', this.clickHandler, this);
            }
        } else {
            if (Browser.isIos && this.touchClickObj) {
                this.touchClickObj.destroy();
            } else {
                EventHandler.remove(this.element, 'click', this.clickHandler);
            }
        }
    }

    private wireExpandOnEvent(toBind: boolean): void {
        if (toBind) {
            let proxy: TreeView = this;
            if (Browser.isIos) {
                if (this.expandOnType === 'click') {
                    this.touchExpandObj = new Touch(this.element, {
                        tap: (e: TapEventArgs) => {
                            proxy.expandHandler(e.originalEvent);
                        }
                    });
                } else {
                    this.touchExpandObj = new Touch(this.element, {
                        doubleTap: (e: TapEventArgs) => {
                            proxy.expandHandler(e.originalEvent);
                        }
                    });
                }
            } else {
                EventHandler.add(this.element, this.expandOnType, this.expandHandler, this);
            }
        } else {
            if (Browser.isIos && this.touchExpandObj) {
                this.touchExpandObj.destroy();
            } else {
                EventHandler.remove(this.element, this.expandOnType, this.expandHandler);
            }
        }
    }
    private mouseDownStatus: boolean = false;

    private mouseDownHandler(e: MouseEvent): void {
        this.mouseDownStatus = true;
        if (e.ctrlKey && this.allowMultiSelection) {
            EventHandler.add(this.element, 'contextmenu ', this.preventContextMenu, this);
        }
    };

    private preventContextMenu(e: MouseEvent): void {
        e.preventDefault();
    }

    private wireEvents(): void {
        EventHandler.add(this.element, 'mousedown', this.mouseDownHandler, this);
        this.wireClickEvent(true);
        this.wireExpandOnEvent(true);
        EventHandler.add(this.element, 'focus', this.focusIn, this);
        EventHandler.add(this.element, 'blur', this.focusOut, this);
        EventHandler.add(this.element, 'mouseover', this.onMouseOver, this);
        EventHandler.add(this.element, 'mouseout', this.onMouseLeave, this);
        this.keyboardModule = new KeyboardEvents(
            this.element,
            {
                keyAction: this.keyActionHandler.bind(this),
                keyConfigs: this.keyConfigs,
                eventName: 'keydown',
            }
        );
    }

    private unWireEvents(): void {
        EventHandler.remove(this.element, 'mousedown', this.mouseDownHandler);
        this.wireClickEvent(false);
        this.wireExpandOnEvent(false);
        EventHandler.remove(this.element, 'focus', this.focusIn);
        EventHandler.remove(this.element, 'blur', this.focusOut);
        EventHandler.remove(this.element, 'mouseover', this.onMouseOver);
        EventHandler.remove(this.element, 'mouseout', this.onMouseLeave);
        this.keyboardModule.destroy();
    }

    private parents(element: Element | Node, selector: string): Element[] {
        let matched: Element[] = [];
        let el: Element = <Element>element.parentNode;
        while (!isNOU(el)) {
            if (matches(el, selector)) {
                matched.push(el);
            }
            el = <Element>el.parentNode;
        }
        return matched;
    }

    private isDescendant(parent: Element, child: Element): boolean {
        let node: Element = <Element>child.parentNode;
        while (!isNOU(node)) {
            if (node === parent) {
                return true;
            }
            node = <Element>node.parentNode;
        }
        return false;
    }

    private setCheckedNodes(nodes: string[]): void {
        nodes = JSON.parse(JSON.stringify(nodes));
        this.uncheckAll();
        if (nodes.length > 0) {
            this.checkAll(nodes);
        }
    }

    /**
     * Called internally if any of the property value changed.
     * @param  {TreeView} newProp
     * @param  {TreeView} oldProp
     * @returns void
     * @private
     */
    public onPropertyChanged(newProp: TreeViewModel, oldProp: TreeViewModel): void {
        for (let prop of Object.keys(newProp)) {
            switch (prop) {
                case 'allowDragAndDrop':
                    this.setDragAndDrop(this.allowDragAndDrop);
                    break;
                case 'allowEditing':
                    this.wireEditingEvents(this.allowEditing);
                    break;
                case 'allowMultiSelection':
                    if (this.selectedNodes.length > 1) {
                        let sNode: Element =  this.getElement(this.selectedNodes[0]);
                        this.isLoaded = false;
                        this.removeSelectAll();
                        this.selectNode(sNode, null);
                        this.isLoaded = true;
                    }
                    this.setTouchPopup(this.allowMultiSelection);
                    this.setMultiSelect(this.allowMultiSelection);
                    this.addMultiSelect(this.allowMultiSelection);
                    break;
                case 'checkedNodes':
                    if (this.showCheckBox) {
                        this.checkedNodes = oldProp.checkedNodes;
                        this.setCheckedNodes(newProp.checkedNodes);
                    }
                    break;
                case 'cssClass':
                    this.setCssClass(oldProp.cssClass, newProp.cssClass);
                    break;
                case 'enableRtl':
                    this.setEnableRtl();
                    break;
                case 'expandOn':
                    this.wireExpandOnEvent(false);
                    this.setExpandOnType();
                    this.wireExpandOnEvent(true);
                    break;
                case 'fields':
                    this.listBaseOption.fields = (this.fields as TreeViewModel & { properties: Object }).properties;
                    this.listBaseOption.fields.url = this.fields.navigateUrl;
                    this.reRenderNodes();
                    break;
                case 'fullRowSelect':
                    this.setFullRow(this.fullRowSelect);
                    this.addFullRow(this.fullRowSelect);
                    break;
                case 'nodeTemplate':
                    this.nodeTemplateFn = this.templateComplier(this.nodeTemplate);
                    this.reRenderNodes();
                    break;
                case 'selectedNodes':
                    this.removeSelectAll();
                    this.setProperties({ selectedNodes: newProp.selectedNodes }, true);
                    this.doSelectionAction();
                    break;
                case 'showCheckBox':
                    this.reRenderNodes();
                    break;
                case 'sortOrder':
                    this.reRenderNodes();
                    break;
            }
        }
    }

    /**
     * Removes the component from the DOM and detaches all its related event handlers. Also, it removes the attributes and classes.
     */
    public destroy(): void {
        this.element.removeAttribute('role');
        this.unWireEvents();
        this.wireEditingEvents(false);
        this.rippleFn();
        this.rippleIconFn();
        this.setCssClass(this.cssClass, null);
        this.setDragAndDrop(false);
        this.setFullRow(false);
        this.setTouchPopup(false);
        this.setMultiSelect(false);
        this.element.innerHTML = '';
        super.destroy();
    }

    /**
     * To add collection of nodes in TreeView based on target and index position.
     * If target tree node is specified then, the given nodes are added as child of target tree node,
     * otherwise nodes are added as child of parentID tree node or else added in TreeView.
     * @param  { Object[] } nodes - Specifies the array of JSON data that need to add.
     * @param  { string | Element } target - Specifies ID of TreeView node/TreeView node as target element.
     * @param  { number } index - Specifies the index to place the newly added nodes in the target element.
     */
    public addNodes(nodes: { [key: string]: Object }[], target: string | Element, index: number): void {
        if (isNOU(nodes)) {
            return;
        }
        let dropLi: Element = this.getElement(target);
        nodes = this.getSortedData(nodes);
        if (this.fields.dataSource instanceof DataManager) {
            this.addGivenNodes(nodes, dropLi, index, true);
        } else if (this.dataType === 2) {
            this.addGivenNodes(nodes, dropLi, index);
        } else {
            if (dropLi) {
                this.addGivenNodes(nodes, dropLi, index);
            } else {
                for (let i: number = 0; i < nodes.length; i++) {
                    let pid: Object = nodes[i][this.fields.parentID];
                    dropLi = pid ? this.getElement(pid.toString()) : <Element>pid;
                    this.addGivenNodes([nodes[i]], dropLi, index);
                }
            }
        }
    }

    /**
     * To check all the nodes in TreeView, just pass empty parameter. Or you can check specific nodes
     *  by passing the node details in the array.
     * @param  {string[] | Element[]} nodes - Specify the array of TreeView nodes ID/ array of TreeView node.
     */
    public checkAll(nodes ? : string[] | Element[]): void {
        if (this.showCheckBox) {
            this.doCheckBoxAction(nodes, true);
        }
    }

    /**
     * To collapse all the nodes in TreeView, just pass empty parameter. Or you can collapse specific nodes
     *  by passing the node details in the array.
     * If you want to collapse all nodes up to the specific level in TreeView control, then
     *  You need to pass level as argument to this method.
     * If you want to collapse all nodes except the hidden nodes, then you need to pass excludeHiddenNodes as true to this method.
     * If you want to collapse all nodes up to the specific level except the hidden nodes, then
     *  you need to pass level and excludeHiddenNodes as arguments to this method.
     * @param  {string[] | Element[]} nodes - Specify the array of TreeView nodes ID/ array of TreeView node.
     * @param  {number} level - TreeView nodes will collapse until the given level.
     * @param  {boolean} excludeHiddenNodes - Weather exclude the hidden nodes of TreeView while collapse all nodes .
     */
    public collapseAll(nodes?: string[] | Element[], level?: number, excludeHiddenNodes?: boolean): void {
        if (!isNOU(nodes)) {
            this.doGivenAction(nodes, COLLAPSIBLE, false);
        } else {
            if ( level > 0) {
                this.collapseByLevel(select('.' + PARENTITEM, this.element), level, excludeHiddenNodes);
            } else {
                this.collapseAllNodes(excludeHiddenNodes);
            }
        }
    }

    /**
     * To disable collection of nodes in TreeView.
     * @param  {string[] | Element[]} nodes - Specify the array of TreeView nodes ID/ array of TreeView node.
     */
    public disableNodes(nodes?: string[] | Element[]): void {
        if (isNOU(nodes)) {
            this.doDisableAction(this.selectedNodes);
        } else {
            this.doDisableAction(nodes);
        }
    }

    /**
     * To enable all the nodes in TreeView, just pass empty parameter. Or you can enable specific nodes
     *  by passing the node details in the array.
     * @param  {string[] | Element[]} nodes - Specify the array of TreeView nodes ID/ array of TreeView node.
     */
    public enableAll(nodes?: string[] | Element[]): void {
        if (isNOU(nodes)) {
            let liEle: Element[] = selectAll('.' + DISABLE, this.element);
            for (let ele of liEle) {
                ele.removeAttribute('aria-disabled');
            }
            removeClass(liEle, DISABLE);
        } else {
            this.doEnableAction(nodes);
        }
    }

    /**
     * This method is used to visible node from invisible state in TreeView.
     * @param  {string | Element} node - Specify ID of TreeView node/TreeView node.
     */
    public ensureVisible(node: string | Element): void {
        let liEle: Element = this.getElement(node);
        if (isNOU(liEle)) {
            return;
        }
        let parents: Element[] = this.parents(liEle, '.' + LISTITEM);
        this.expandAll(parents);
        setTimeout(() => { liEle.scrollIntoView(true); }, 450);
    }

    /**
     * To expand all the nodes in TreeView, just pass empty parameter. Or you can expand specific nodes
     *  by passing the node details in the array.
     * If you want to expand all nodes up to the specific level in TreeView control,
     *  then you need to pass level as argument to this method.
     * If you want to expand all nodes except the hidden nodes, then you need to pass excludeHiddenNodes as true to this method.
     * If you want to expand all nodes up to the specific level except the hidden nodes, then you need to pass level and
     *  excludeHiddenNodes as arguments to this method.
     * @param  {string[] | Element[]} nodes - Specify the array of TreeView nodes ID/ array of TreeView node.
     * @param  {number} level - TreeView nodes will expand until the given level.
     * @param  {boolean} excludeHiddenNodes - Weather exclude the hidden nodes of TreeView while expand all nodes .
     */
    public expandAll(nodes?: string[] | Element[], level?: number, excludeHiddenNodes?: boolean): void {
        if (!isNOU(nodes)) {
            this.doGivenAction(nodes, EXPANDABLE, true);
        } else {
            if ( level > 0) {
                this.expandByLevel(select('.' + PARENTITEM, this.element), level, excludeHiddenNodes);
            } else {
                this.expandAllNodes(excludeHiddenNodes);
            }
        }
    }

    /**
     * This method is used to get the TreeView node from the given node ID.
     * @param  {string} node - Specify ID of TreeView node.
     */
    public getNode(node: string): HTMLElement {
        return <HTMLElement>this.getElement(node);
    }

    /**
     * To get TreeView node data such as id, text, parentID, selected, isChecked and expanded
     * @param  {string | Element} node - Specify ID of TreeView node/TreeView node.
     */
    public getNodeDetails(node: string | Element): { [key: string]: Object } {
        let ele: Element = this.getElement(node);
        return this.getNodeData(ele);
    }

    /**
     * To move the TreeView node with in same TreeView.
     * The new position of given TreeView node will be based on destination node and index position.
     * @param  {string[] | Element[]} sourceNodes - Specify the array of TreeView nodes ID/ array of TreeView node.
     * @param  {string | Element} target - Specify ID of TreeView node/TreeView node as target element.
     * @param  {number} index - Specifies the index to place the moved nodes in the target element.
     */
    public moveNodes(sourceNodes: string[] | Element[], target: string | Element, index: number): void {
        let dropLi: Element = this.getElement(target);
        if (isNOU(dropLi)) {
            return;
        }
        for (let i: number = 0; i < sourceNodes.length; i++) {
            let dragLi: Element = this.getElement(sourceNodes[i]);
            if (isNOU(dragLi) || dropLi.isSameNode(dragLi) || this.isDescendant(dragLi, dropLi)) {
                continue;
            }
            this.dropAsChildNode(dragLi, dropLi, this, index);
        }
    }

    /**
     * To remove a Node or collection of nodes in TreeView.
     * @param  {string[] | Element[]} nodes - Specify the array of TreeView nodes ID/ array of TreeView node.
     */
    public removeNodes(nodes?: string[] | Element[]): void {
        for (let i: number = 0, len: number = nodes.length; i < len; i++) {
            let liEle: Element = this.getElement(nodes[i]);
            if (isNOU(liEle)) {
                continue;
            }
            this.removeNode(liEle);
        }
    }

    /**
     * To replace the text of the TreeView node by given text.
     * @param  {string | Element} target - Specify ID of TreeView node/TreeView node as target element.
     * @param  {string} newText - Specifies the new text of TreeView node.
     */
    public replaceText(target: string | Element, newText: string): void {
        if (isNOU(target) || isNOU(newText) || !this.allowEditing) {
            return;
        }
        let liEle: Element = this.getElement(target);
        if (isNOU(liEle)) {
            return;
        }
        let txtEle: Element = select('.' + LISTTEXT, liEle);
        txtEle.childNodes[0].nodeValue = newText;
    }

    /**
     * To un-check all the nodes in TreeView, just pass empty parameter. Or you can un-check specific nodes
     *  by passing the node details in the array. 
     * @param  {string[] | Element[]} nodes - Specify the array of TreeView nodes ID/ array of TreeView node.
     */
    public uncheckAll(nodes?: string[] | Element[]): void {
        if (this.showCheckBox) {
            this.doCheckBoxAction(nodes, false);
        }
    }

}

/**
 * builder for TreeView
 */
export let treeViewHelper: TreeViewHelper = <TreeViewHelper>CreateBuilder(TreeView);