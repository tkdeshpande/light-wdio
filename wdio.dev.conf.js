const merge = require('deepmerge')
const {config} = require('./wdio.conf');
const { exec } = require('child_process');

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
    },
    onPrepare: function (config, capabilities) {
        try {
        exec('npm run start-hub-dev', (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    } catch (error) {
            console.log(error);
    }
    },
})
