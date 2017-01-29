import WebSlides from './modules/webslides';
import Scroll from './plugins/scroll';
import Touch from './plugins/touch';

WebSlides.registerPlugin('Scroll', Scroll);
WebSlides.registerPlugin('Touch', Touch);

window.WebSlides = WebSlides;
