/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-emojione',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/emojione/assets/css/emojione.css');
    app.import(app.bowerDirectory + '/emojione/lib/js/emojione.js');
    app.import('vendor/emojione.js', {
      exports: {
        emojione: ['default']
      }
    });
  }
};
