Package.describe({
  name: 'yasaricli:freeport',
  version: '0.0.1',
  summary: 'Find a free port for meteor.',
  git: 'https://github.com/yasaricli/meteor-freeport.git',
  documentation: 'README.md'
});

Npm.depends({
  "freeport": "1.0.5"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  // add file and export.
  api.addFiles('freeport.js', 'server');
  api.export('freeport');
});
