const merge = require('deepmerge')
const {config} = require('./wdio.conf');

const port = 32780;
const image = 'selenium/standalone-chrome-debug';
// have main config file as default but overwrite environment specific information
exports.config = merge(config, {
    port,
    dockerOptions: {
        image: 'selenium/standalone-chrome-debug',
        healthCheck: {
            url: `http://localhost:${port}`,
        },
        options: {
            d: true,
            P: true,
            v: [`/dev/shm:/dev/shm ${image}`],
        }
    }
})
