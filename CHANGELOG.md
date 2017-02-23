# 1.0.0 (2017-02-23)

This release is a special one since it sets up in the path of a better development environment. Although it's far from
perfect, it's a solid beginning. 

All the code has been migrated from **jQuery** with ES5 to **vanilla JavaScript with ES2015 (or ES6) and is fully modular**. 
This means that WebSlides is a (base module)[src/js/modules/webslides.js] with a solid API (few public methods) and 
it's extended by (plugins)[src/js/plugins]. This leads to more granularity and less code to dive through while fixing a
bug. 

**The benefit from this approach is that now it's really easy to extend WebSlides** to achieve what you need. You can also
overwrite current plugins. Say you don't like the current navigation with arrows and want to create a menu instead, you
can just write that for yourself with your custom needs and register it as `nav` and it will overwrite our nav with
your code.

We hope this leads to a better environment in which WebSlides can grow better. 

All the technical specs live now in [this document](docs/technical.md).

## Bugfixes

- Fixed a bug with back/next buttons on the browser which lead the nav bar to not work.

## New Features

- Linking to slides without window open.
- Added custom events to listen for. `ws:init` whenever webslides is ready and `ws:slide-change` whenever a slide changes.
- Added play/stop methods.

## Breaking Changes

- This "stable" release drops the jQuery requirement and leans on ES2015 for the architecture. Hence, it's no longer possible
to use the library as before.

# 0.2.0 (2017-02-22)

## New Features

- Adding autoslide option.

# 0.1.1 (2017-02-11)

- Transform the library into an object.
- `.tabs` removed.
- `webslides-lite.js` removed.

# 0.1.0 (2017-01-08)

- Initial release.
