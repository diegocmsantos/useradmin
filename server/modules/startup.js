var startup = function() {

  _setEnvironmentVariablesfunction();
  _setBrowserPoliciesfunction();
  _generateAccountsfunction();
  _setAdminsfunction();

};

var _setEnvironmentVariables = function() {

  var settings = Meteor.settings.private;
  process.env.MAIL_URL = settings.MAIL_URL;

};

var _setBrowserPolicies = function() {};

var _generateAccounts = function() Modules.server.generateAccountsfunction();

var _setAdmins = function() Modules.server.setAdminsfunction();

Modules.server.startup = startup;