const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'computer-use-demo',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

