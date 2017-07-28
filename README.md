[![NPM](https://nodei.co/npm/nexus-deployer-webpack-plugin.png)](https://npmjs.org/package/nexus-deployer-webpack-plugin)

[![npm version](https://badge.fury.io/js/nexus-deployer-webpack-plugin.svg)](https://badge.fury.io/js/nexus-deployer-webpack-plugin)

[![Dependency Status](https://david-dm.org/circy/nexus-deployer-webpack-plugin.png)](https://david-dm.org/circy/nexus-deployer-webpack-plugin)


# nexus-deployer-webpack-plugin
nexus deployer as a webpack plugin based on [nexus-deployer](https://github.com/cthorne66/nexus-deployer) from [cthorne66](https://github.com/cthorne66) 

## Using 

To install:
`npm install nexus-deployer-webpack-plugin --save-dev`

Use in the webpack config:
```javascript
var NexusDeployer = require('nexus-deployer-webpack-plugin');

var webpackConfig = {
  // ... other config settings here ...
  plugins: [
    new NexusDeployer({
        groupId: 'nexus-deployer-webpack-plugin',
        artifactId: 'nexus-deployer-webpack-plugin',
        version: '0.1',
        packaging: 'exe',
        auth: {
            username:'root',
            password:'toor'
        },
        pomDir: 'build/pom',
        url: 'http://localhost:8081/nexus/content/repositories/releases',
        artifact: 'nexus-deployer-webpack-plugin.exe'
    })
  ]
};
```
[For further information on the configuration of the upload please look here, he has described it very well.](https://github.com/cthorne66/nexus-deployer/blob/master/README.md)


2017 (c) Sebastian Kreissl

