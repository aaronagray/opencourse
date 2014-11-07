Package.describe({
  summary: "HTML5 Shim via CDN",
  version: "1.0.0"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('meta:html5shim.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meta:html5shim.js');
});
