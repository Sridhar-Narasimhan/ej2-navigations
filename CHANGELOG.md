# Changelog

## [Unreleased]

## 16.1.38 (2018-05-02)

### TreeView

#### bug Fixes

- TreeView is not rendering properly when you return entire data (including child nodes) on initial request issue is fixed.

### Tab

#### Bug Fixes

- Issue with loading dynamic content using template ID is fixed.

## 16.1.37 (2018-04-24)

### ContextMenu

#### Bug Fixes

- Items undefined issue fixed in select event.

### TreeView

#### bug Fixes

- Issue in triggering `nodeExpanded` event while expanding all the nodes is fixed.

## 16.1.35 (2018-04-17)

### ContextMenu

#### Bug Fixes

- Context menu positioning after page scroll issue fixed.

### TreeView

#### Bug Fixes

- Provided option to prevent expand/collapse node while double clicking the tree node.

## 16.1.34 (2018-04-10)

### TreeView

#### bug Fixes

- Issue in TreeView while ‘cancel' the ‘nodeDragDrop’ event is fixed.

- Issue in TreeView drag and drop function, while adding ‘e-droppable’ class in the target element is fixed.

## 16.1.32 (2018-03-29)

### TreeView

#### Bug Fixes

- Prevented the checkbox interactions while the corresponding node was in disabled state.

## 16.1.28-preview (2018-03-09)

### Toolbar

#### Bug fix

- Toolbar border hidden issue with grid in IE11 browser is fixed.

## 16.1.24 (2018-02-22)

### Common

#### Breaking Changes

- Changed the Angular component selector, component name prefix with `ejs` e.g: `ejs-tab`.

#### New Features

- High contrast theme support.

### Sidebar

The Sidebar is an expandable and collapsible component that typically acts as a side container to place primary or secondary content alongside the main content.

- **Target** - The Sidebar can be initialized in any HTML element other than the body element.

- **Types** – Supports Push, Over, Slide and Auto to expand or collapse the Sidebar.

- **Position** – Allows to position the Sidebar in Left or Right direction.

- **Auto close** - Allows to set the sidebar in an expanded or collapsed state only in certain resolutions.

- **Dock** - By default, supports display of short notifications about the content on docked mode.

- **Backdrop** – Specifies the whether to apply overlay options to main content when the Sidebar is in open state.

### Tab

#### Breaking changes

- Locale key changed from close to `closeButtonTitle`.

### Toolbar

#### Breaking changes

- Pascal casing change to `align` property values (`Left`, `Center`, `Right`).

## 15.4.30-preview (2018-02-14)

### TreeView

#### New Features

- Added “getNode” method in TreeView to get the node's data based on given node element or it's ID.

- Added “beginEdit” method in TreeView, to initiate the editing mode of the TreeView node through code.

#### Breaking Changes

- In TreeView, “replaceText” method name has been modified as “updateNode”.

## 15.4.27-preview (2018-01-30)

### Tab

#### Bug Fixes

- Separate item change for active content issue with Tab fixed.

## 15.4.26-preview (2018-01-23)

### ContextMenu

#### Bug Fixes

- Lengthy text and caret icon wraps next line issue fixed.

### Accordion

#### Bug Fixes

- Accordion content class styles overriding with the other component issue fixed.

### Tab

#### Bug Fixes

- Issue with changing separate items property has been fixed.

### Toolbar

#### New Features

- Provided support to display Toolbar items in popup always.

## 15.4.25-preview (2018-01-09)

## 15.4.23-preview (2017-12-27)

### Common

#### New Features

- Added typing file for ES5 global scripts (dist/global/index.d.ts)

#### Breaking Changes

- Modified the module bundle file name for ES6 bundling

### Toolbar

#### Bug Fixes

- Issue with changing separate items property has been fixed.

- The Toolbar Popup and scrollable creation issue in non visible element is fixed.

- Dynamic Items updating with toolbar alignment is fixed.

- Removed unwanted space available in the Toolbar Popup mode initial time.

## 15.4.22-preview (2017-12-14)

### ContextMenu

#### Bug Fixes

- Destroy method issue in angular is fixed.

## 15.4.21-preview (2017-12-08)

### Tab

#### Bug Fixes

- Tab header overlapping issue with grid is fixed.

## 15.4.20-preview (2017-12-01)

### Common

#### New Features

- Upgraded TypeScript version to 2.6.2

## 15.4.17-preview (2017-11-13)

### Accordion

Accordion is a vertically collapsible content panel which is displaying panels, one or multiple at a time within the available space.

- **Rendering** - Supports to render based on the items collection and HTML elements.

- **Expand Mode** - Supports to define single or multiple expand mode for Accordion panels.

- **Animation** - Supports animation effects for expanding/collapsing the panels.

- **Accessibility** - Provided with built-in accessibility support which helps to access all the Accordion component features through the keyboard, screen readers, or other assistive technology devices.

### ContextMenu

ContextMenu is a graphical user interface that appears on the user right click/touch hold action.

- **Separator** - Supports menu items grouping by using the Separator.

- **Icons and Navigations** - Supports items to have Icons and Navigation URL's.

- **Template and Multilevel Nesting** - Supports template and multilevel nesting in ContextMenu.

- **Accessibility** - Provided with built-in accessibility support that helps to access all the ContextMenu component features through the keyboard, screen readers, or other assistive technology devices.

### Tab

Tab is a content panel to show multiple contents in specific space one at a time.

- **Rendering** - Supports to render based on the items collection and HTML elements.

- **Adaptive** - Supports responsive rendering with scrollable Tabs and popup menu.

- **Animation** - Supports animation effects for moving previous/next contents of the Tab.

- **Customization** - Provides customization support for header with icons and orientation.

- **Accessibility** - Provided with built-in accessibility support which helps to access all the Tab component features through the keyboard, screen readers, or other assistive technology devices.

### Toolbar

Displays a group of command buttons arranged horizontally.

- **Rendering** - Supports to render based on the items collection and HTML elements.

- **Customization** - Supports to add buttons , separator & input components.

- **Adaptive** - Supports responsive rendering with scrollable Toolbar and popup menu.

- **Accessibility**- Provided with built-in accessibility support which helps to access all the Toolbar component features through the keyboard, screen readers, or other assistive technology devices.

### TreeView

TreeView component is used to represent hierarchical data in a tree like structure with advanced functions to edit, drag and drop, select with CheckBox and more. TreeView can be populated from a data source such as an array of JavaScript objects or from DataManager. The following key features are available in TreeView component.

- **Data Binding** - Binds the TreeView component with an array of JavaScript objects or DataManager.

- **CheckBox** - Allows you to select more than one node in TreeView without affecting the UI appearance.

- **Drag and Drop** - Allows you to drag and drop any node in TreeView.

- **Multi Selection** - Allows you to select more than one node in TreeView.

- **Node Editing** - Allows you to change the text of a node in TreeView.

- **Sorting** - Allows display of the TreeView nodes in an ascending or a descending order.

- **Template** - Allows you to customize the nodes in TreeView.

- **Accessibility** - Provides built-in accessibility support that helps to access all the TreeView component features through the keyboard, on-screen readers, or other assistive technology devices.
