import WebSlides from './modules/webslides';
import Scroll from './plugins/scroll';
import Touch from './plugins/touch';
import Grid from './plugins/grid';

WebSlides.registerPlugin('Scroll', Scroll);
WebSlides.registerPlugin('Touch', Touch);
WebSlides.registerPlugin('Grid', Grid);

window.WebSlides = WebSlides;
