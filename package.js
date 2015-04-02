Package.describe({
  name: 'olragon:uri-js',
  summary: "URI.js repackaged for Meteor",
  version: '1.13.1',
  git: 'https://github.com/olragon/meteor-uri-js.git',
  documentation: 'README.md',
});

Package.on_use(function (api, where) {
  if (api.versionsFrom) {
    api.versionsFrom('0.9.0');
  }
  
  where = where || ['client', 'server'];

  api.add_files('lib/uri.js/src/URI.js', 'server');
  api.add_files('lib/uri.js/src/URI.js', 'client');
});
