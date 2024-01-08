const fs = require('fs');
const yaml = require('js-yaml');

// Load configuration from YAML file
const configData = yaml.load(fs.readFileSync('app/config.yaml', 'utf8'));

// Display information from the configuration file
console.log('Application Name:', configData.app_name);
console.log('Version:', configData.version);
console.log('Backend Language:', configData.backend_language);
console.log('Frontend Language:', configData.frontend_language);
console.log('Database Settings:', configData.database);