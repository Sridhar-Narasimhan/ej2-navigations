import { Touch, ScrollEventArgs, TouchEventArgs, Component, EventHandler } from '@syncfusion/ej2-base';import { NotifyPropertyChanges, INotifyPropertyChanged, Property, Browser } from '@syncfusion/ej2-base';import { createElement as buildTag, detach, classList } from '@syncfusion/ej2-base/dom';import { getUniqueID } from '@syncfusion/ej2-base/util';
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class HScroll
 */
export interface HScrollModel extends ComponentModel{

    /**
     * Specifies the left or right scrolling distance of the horizontal scrollbar moving.     * @default '40'     */    scrollStep?: number;

}