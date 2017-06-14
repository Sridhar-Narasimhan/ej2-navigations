import { Component } from '@syncfusion/ej2-base/component';import { Touch, ScrollEventArgs, TouchEventArgs } from '@syncfusion/ej2-base/touch';import { EventHandler } from '@syncfusion/ej2-base/event-handler';import { NotifyPropertyChanges, INotifyPropertyChanged, Property } from '@syncfusion/ej2-base/notify-property-change';import { createElement, detach, classList } from '@syncfusion/ej2-base/dom';import { getUniqueID } from '@syncfusion/ej2-base/util';import { Browser } from '@syncfusion/ej2-base/browser';
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class HScroll
 */
export interface HScrollModel extends ComponentModel{

    /**
     * Specifies the left or right scrolling distance of the horizontal scrollbar moving.     * @default '40'     */    scrollStep?: number;

}