Package.describe({
  summary: "URI.js"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];

  api.add_files('lib/uri.js/src/URI.js', 'server');
  api.add_files('lib/uri.js/src/URI.js', 'client');
});
