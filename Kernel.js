const fs = require('fs');

class Kernel {
    constructor(config = './config.json', args = process.argv) {
        this.args = args;
        this.config = config;
    }

    getConfig() {
        return fs.readFileSync(this.config, 'UTF-8');
    }

    setConfig(path) {
        this.config = path;
        return this.getConfig();
    }

    getArgs() {
        return this.args;
    }

    getConfigPath() {
        return this.config;
    }
}

module.exports = Kernel;