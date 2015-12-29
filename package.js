Package.describe({
  name: 'brianscroggins24:meteor-velocity-react-test',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: "Fabric's Velocity React for Meteor projects",
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  //api.use('ecmascript');
  api.use('underscore@1.0.4');
  api.use('jquery', 'client');
  api.use('react@0.1.13');
  api.use('poetic:meteor-velocityjs');
  api.addFiles(['velocity-transition-group.js', 'velocity-component.js']);

  api.export('VelocityTransitionGroup');
  api.export('VelocityComponent');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('brianscroggins24:meteor-velocity-react-test');
  api.addFiles('meteor-velocity-react-test-tests.js');
});
