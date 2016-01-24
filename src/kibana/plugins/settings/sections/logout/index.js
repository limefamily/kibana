define(function (require) {
  var _ = require('lodash');

  require('routes')
  .when('/settings/logout', {
    template: require('text!plugins/settings/sections/logout/index.html')
  });

  require('modules').get('apps/settings')
  .controller('settingsLogout', function ($scope, kbnVersion, buildNum, commitSha) {
    $scope.kbnVersion = kbnVersion;
    $scope.buildNum = buildNum;
    $scope.commitSha = commitSha;
  });

  return {
    order: Infinity,
    name: 'logout',
    display: '注销',
    url: '#/settings/logout'
  };
});