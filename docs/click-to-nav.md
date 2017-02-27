## Click To Nav plugin

This plugin is included by default but disabled. In order to enable it, the option `changeOnClick` must be passed as
`true`.

```javascript
const ws = new WebSlides({ changeOnClick: true });
```

This will make every click to navigate to the next slide except for clicks that happens on the following elements:

* `input`.
* `select` or `option`.
* `button`.
* `a`.
* Any element with the attribute `data-prevent-nav`.
