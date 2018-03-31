# mozDraggables
A tiny drag and drop vanilla JS library based on Mozilla's <a href="https://developer.mozilla.org/en-US/docs/Web/Events/drop">MDN example</a> at a size of <strong>2.8kb (js)</strong> and <strong>461 bytes (css)</strong>, compared to <a href="https://jqueryui.com/download/">JQuery-UI's minified stable v1.12.1</a> at <strong>37.1kb (js)</strong> and  <strong>15.1kb (css)</strong>.


### Features of mozDraggables over MDN's original source:
**mozDraggables** is packaged, tested and restructured for the following easy(ier) to use features:
* flag for copy/move elements. Defaults to `"copy"`. Range `["copy","move"]`. (See: `var copy_or_move_flag`).
* flag for can drag again behaviour. Defaults to `"false"`. Range `["true","false"]`. (See: `var dropped_draggable_state`).
* style-dependent on CSS classes.
* tested for dynamically and statically loaded drop and drag elements.

### Demos:
Here's the demo below or feel free to **clone the repo** and browse to the [demo.html](https://github.com/pmdscully/mozDraggables/blob/master/demo.html) page.

<img src="https://github.com/pmdscully/mozDraggables/blob/master/gif/demo_static_dynamic.gif" width="700" height="700" />


### Added details:
* The listener events for dragging and dropping are bound to the document, so make sure that doesn't conflict with other bound drag and drop events. See the original MDN source for details.
* Use display:inline; (or class .inline) on draggable elements such that their text/content is visible throughout the drag events.

### Issues:
Feel free to fork and make pull requests for fixes and add bugs in the issue tracker.

### Licensing:
For the changes made from the original source, it's MIT license. Commercial and non-commercial use is fine without attribution. 
