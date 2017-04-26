let phantom = require("phantom");
import test from 'ava';

let ph_, page_, status_;

/**
 * Functions
 */
const load = async () => {
  const log = console.log;
  const nolog = function() {};
  await phantom.create([], { logger: { warn: log, debug: nolog, error: log } }
  ).then(async ph => {
    ph_ = ph;
    return await ph_.createPage();
  }).then(page => {
    page_ = page;
    return page_.open('file:///'+__dirname.replace(/\\/g, '/')+'/../../index.html');
  }).then(async status => {
    const content = await page_.property('content');
    status_ = status;
    return true;
  }).catch(e => console.log(e));
}

const timeout = async ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const onlyOneVisible = async t => {
  await page_
    .evaluate( () => window.ws.slides.filter(
        slide => slide.el.style.display != 'none'
      ).length == 1 )
    .then( ok => { t.true(ok); } );
}

/**
 * Tests
 */
test.serial("Page loaded", async t => {
  await load();
  t.is(status_, 'success');
});

test.serial('#webslides exits', async t => {
  await page_
    .evaluate( () => document.querySelector('#webslides') != null )
    .then( ok => { t.true(ok); } );
});

test.serial('WebSlides object exits', async t => {
  await page_
    .evaluate( () => window.ws != null )
    .then( ok => { t.true(ok); } );
});

test.serial('Has slides', async t => {
  await page_
    .evaluate( () => window.ws.slides.length > 0 )
    .then( ok => { t.true(ok); } );
});

test.serial('First slide visible', async t => {
  await page_
    .evaluate( () => window.ws.slides[0].el.style.display != 'none' )
    .then( ok => { t.true(ok); } );
});

test.serial('Has only one slide visible', onlyOneVisible);

test.serial('goNext', async t => {
  // First needs to execute the function
  page_
    .evaluate( () => {
      window.ws.goNext();
      return true;
    });
  // Then wait
  await timeout(600);
  // Finally test
  await page_
    .evaluate( () => window.ws.slides[1].el.style.display != 'none' )
    .then( ok => { t.true(ok); } );
});

test.serial('Has only one slide visible', onlyOneVisible);


test.serial('goPrev', async t => {
  // First needs to execute the function
  page_
    .evaluate( () => {
      window.ws.goPrev();
      return true;
    });
  // Then wait
  await timeout(600);
  // Finally test
  await page_
    .evaluate( () => window.ws.slides[0].el.style.display != 'none' )
    .then( ok => { t.true(ok); } );
});

test.serial('Has only one slide visible', onlyOneVisible);


/**
 * Last test
 */
test.serial('Closing', async t => {
  await page_.close();
  ph_.exit();
  t.true(true);
});
