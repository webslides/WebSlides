# 1.3.0 (2017-04-20)

## Misc

- 4 new demos: Longforms, Interviews, Netflix Culture, and Media (YouTube API, videos, images, maps...)
- Deps updated.
- Now using [eslint](http://eslint.org/) to enforce code style.
- Adding a new badge so the release number is quickly seen.
- [[#51](https://github.com/webslides/webslides/issues/51)] Autoslide is now a plugin.
- Docs moved to [Wiki](https://github.com/webslides/WebSlides/wiki)!
- Moved to org!
- Demos: GitHub links updated.

## New features

- Videos
  - [[#72](https://github.com/webslides/webslides/issues/72)] Integration with YouTube's API.
  - [[#54](https://github.com/webslides/webslides/issues/54)] Added video and youtube plugins to allow autoplaying videos (and pausing) entering and leaving the slide.
  - [[#68](https://github.com/webslides/webslides/issues/68)] Responsive background videos (`<video>`).
- [[#46](https://github.com/webslides/webslides/issues/46)] Added slide animation for mobile devices. `.slideInLeft` and `.slideInRight`.
- Added longform elements.
- Naming conventions: 
  - Introducing `.text-emoji`.
  - Introducing `.text-quote`.
  - Introducing `.text-interview` = `dl.text-interview`, dt (name), dd (question/answer).
  - `.card` is now a `card: width: 100%`.
- [[#51](https://github.com/webslides/webslides/issues/51)] Autoslide now pauses if a focusable element gains focus.
- [[#56](https://github.com/webslides/webslides/issues/56)] Added option to disable looping.
- [[#74](https://github.com/webslides/webslides/issues/74)] Added `ws-ready` to actually lock the scroll.
- Fluid `.wrap` (`width: 90%`).
- `.gallery li:nth-child(n+4)`: `auto-fill` removed. Now: equal width (useful for gallery layouts).
- Added padding to `form[class*="bg-"]`.
- A better CSS print: A4 landscape.

## Bugfixes

- Fixed issues with the grid.
- [[#33](https://github.com/webslides/webslides/issues/33)] Fixed video issue.
- [[#61](https://github.com/webslides/webslides/issues/61)] Fixed print issue which prevented to export the slides to PDF in an easy way.


# 1.2.1 (2017-03-02)

## Bugfixes

- Scrollbar showing in Firefox

# 1.2.0 (2017-03-02)

## New Features

- [[#48](https://github.com/webslides/webslides/issues/48)] Allows to navigate with AvPag & RePag to allow presentation devices to work.
- [[#49](https://github.com/webslides/webslides/issues/49)] Allowing to go to first and last slides by using home and end keys respectively.
- [[#50](https://github.com/webslides/webslides/issues/50)] Using the keyboard on inputs and editable content won't trigger any events that might cause navigation.
- [[#47](https://github.com/webslides/webslides/issues/47)] Allowing options to be configured. [Read More](/docs/technical.md#options).

# 1.1.0 (2017-02-28)

## Bugfixes

- Fixed a bug which caused Chrome on OSX to stutter a lot on vertical transitioning due to elastic scroll bounce.
- [[#28](https://github.com/webslides/webslides/issues/28)] Fixed scroll on Firefox.
- [[#38](https://github.com/webslides/webslides/issues/38)] Fixed a bug in Safari which lead to unexpected behaviour using any form of movements.
- [[#10](https://github.com/webslides/webslides/issues/10)] Fixed animation flash on Safari.

## New Features

- [[#1](https://github.com/webslides/webslides/issues/1)] Adding option to click to go to the next slide. Read more [here](https://github.com/webslides/webslides/blob/master/docs/click-to-nav.md).
- [[#1](https://github.com/webslides/webslides/issues/1)] Improved sliding with mouse scroll and touchpad. It's now possible to use scroll to move an horizontal presentation.
It's also possible to scroll horizontally on horizontal presentations to move forward/backwards the presentation.

## Regression

- Introduced a minor bug on iOS Safari which leads to the bottom part of the page not being visible on the first scroll. This is likely a browser bug but it has been unearthed in this version due to a much needed improvement on scrolling behaviour bugs. We're trying to investigate a bit more and will provide a fix ASAP.

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
