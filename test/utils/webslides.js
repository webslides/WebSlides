let phantom = require("phantom");
import test from 'ava';

let ph_, page_, status_;

const load = async () => {
  await phantom.create().then(async ph => {
    ph_ = ph;
    return await ph_.createPage();
  }).then(page => {
    page_ = page;
    return page_.open('http://webslides.tv/');
  }).then(status => {
    status_ = status;
    return true;
  }).catch(e => console.log(e));
}

const timeout = async ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test.serial("Page loaded", async t => {
  await load();
  t.is(status_, 'success');
});

test.serial('#webslides exits', async t => {
  await page_
    .evaluate( () => document.querySelector('#webslides') != null )
    .then( ok => { t.truthy(ok); } );
});

test.serial('WebSlides object exits', async t => {
  await page_
    .evaluate( () => window.ws != null )
    .then( ok => { t.truthy(ok); } );
});

test.serial('Has slides', async t => {
  await page_
    .evaluate( () => window.ws.slides.length > 0 )
    .then( ok => { t.truthy(ok); } );
});

test.serial('First slide visible', async t => {
  await page_
    .evaluate( () => window.ws.slides[0].el.style.display != 'none' )
    .then( ok => { t.truthy(ok); } );
});

const onlyOneVisible = async t => {
  await page_
    .evaluate( () => window.ws.slides.filter(
        slide => slide.el.style.display != 'none'
      ).length == 1 )
    .then( ok => { t.truthy(ok); } );
}
test.serial('Has only one slide visible', onlyOneVisible);
/*
test.serial('goNext', async t => {
  await page_
    .evaluate( () => {
      //console.log(window.ws.goNext);
      const ant = window.ws.slides[1].el.style.display+'...';
      window.ws.goNext();
      //await timeout(1000);
console.log(68, window.ws.slides[1].el.style.display);
return ant;
      return window.ws.slides[1].el.style.display;
    }).then( ok => { t.truthy(ok); } );
});
*/
test.serial('Has only one slide visible', onlyOneVisible);


/**
 * Last test
 */
test.serial('Closing', async t => {
  await page_.close();
  ph_.exit();
  t.true(true);
});
