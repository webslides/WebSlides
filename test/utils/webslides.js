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

test.serial("Page loaded", async t => {
  await load();
  t.is(status_, 'success');
});

test.serial('#webslides exits', async t => {
  await page_
    .evaluate( () => document.querySelector('#webslides') != null )
    .then( ws => { t.truthy(ws); } );
});

test.serial('WebSlides object exits', async t => {
  await page_
    .evaluate( () => window.ws != null )
    .then( ws => { t.truthy(ws); } );
});

test.serial('First slide visible', async t => {
  await page_
      .evaluate( () => window.ws.slides[0].el.style.display != 'none' )
    .then( ws => { t.truthy(ws); } );
});

/**
 * Last test
 */
test.serial('Closing', async t => {
  await page_.close();
  ph_.exit();
  t.true(true);
});
