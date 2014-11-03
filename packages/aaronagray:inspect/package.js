Package.describe({
  summary: "Inspect the data context within your templates.",
  version: "1.0.1",
  git: "later"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('aaronagray:inspect.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('aaronagray:inspect');
  api.addFiles('aaronagray:inspect-tests.js');
});
