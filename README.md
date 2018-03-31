# mozDraggables
A tiny drag and drop vanilla JS library based on Mozilla's <a href="https://developer.mozilla.org/en-US/docs/Web/Events/drop">MDN example</a> at a size of <strong>2.8kb (js)</strong> and <strong>461 bytes (css)</strong>. Alternatives are <a href="https://jqueryui.com/download/">JQuery-UI's minified stable v1.12.1</a> at <strong>37.1kb (js)</strong> and  <strong>15.1kb (css)</strong>, or [Shopify's UX-enhanced Droppable example](https://shopify.github.io/draggable/examples/unique-dropzone.html) at <strong>414.7kb (concatenated-js)</strong>.


### Features of mozDraggables over MDN's original source:
**mozDraggables** is packaged, tested and restructured for the following easy(ier) to use features:
* flag for copy/move elements. Defaults to `"copy"`. Range `["copy","move"]`. (See: `var copy_or_move_flag`).
* flag for can drag again behaviour. Defaults to `"false"`. Range `["true","false"]`. (See: `var dropped_draggable_state`).
* style-dependent on CSS classes.
* tested for dynamically and statically loaded drop and drag elements.

### Demos:
Here's the demo below or feel free to **clone the repo** and browse to the [demo.html](https://github.com/pmdscully/mozDraggables/blob/master/demo.html) page.

<img src="https://github.com/pmdscully/mozDraggables/blob/master/gif/demo_static_dynamic.gif" width="85%" height="85%" />


### Important details:
* The listener events for dragging and dropping are bound to the document, so make sure that doesn't conflict with other bound drag and drop events. See the original MDN source for details.
* Use display:inline; (or class .inline) on draggable elements such that their text/content is visible throughout the drag events.
