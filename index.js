
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sebastian Kreissl
*/
"use strict";

var deployer = require('nexus-deployer');

function NexusDeployer( config ) {
    this._config = config;
}

NexusDeployer.prototype.apply = function( compiler ) {
    compiler.plugin('done', this.deploy.bind(this));
};

NexusDeployer.prototype.deploy = function() {
    deployer.deploy(this._config, function(){});
};

module.exports = NexusDeployer;
