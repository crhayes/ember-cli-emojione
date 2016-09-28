/*jshint node:true*/
module.exports = {
  description: '',

  normalizeEntityName: function() {
    // allows to run ember g ember-cli-emojione and not blow up
    // because ember cli normally expects the format
    // ember generate <entityName> <blueprint>
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('emojione');
  }
};
