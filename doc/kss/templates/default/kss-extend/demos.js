
module.exports = function (Handlebars) {
  'use strict';

  Handlebars.registerHelper('Demos', function (doc, block) {
    var accum = '';
    var regex = /^\[([^\]]+)\]\(([^\)]+)\)$/gm;
    var test;

    while ((test = regex.exec(doc)) !== null) {
      this.demo = {};
      this.demo.title = test[1];
      this.demo.href = test[2];

      accum += block.fn(this);
    }

    return accum;
  });
};
