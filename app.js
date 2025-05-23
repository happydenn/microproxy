const httpProxy = require('http-proxy');
const { readEnv } = require('read-env');

const { port, ...config } = readEnv('PROXY');
const listenPort = port || parseInt(process.env.PORT || '8080');

console.log(`Loaded config: ${JSON.stringify(config, null, 2)}`);
console.log(`Starting proxy server on port ${listenPort}.`);

httpProxy
  .createProxyServer(config)
  .listen(listenPort);
