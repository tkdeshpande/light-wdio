const yaml = require('js-yaml');
const fs   = require('fs');

function scaleTest(capabilities, config, dockerComposeFilePath) {
    
    let capabilities1;
    try {
        doc = yaml.safeLoad(fs.readFileSync(dockerComposeFilePath, 'utf8'));
        capabilities1 = Object.keys(doc.services).filter(cap => cap !== 'selenium-hub').map(cap => cap);
    }
    catch (e) {
        console.log(e);
    }
    let scale = capabilities.map(cap => {
        if (!capabilities1.includes(cap.browserName)) {
            return;
        }
        return `${cap.browserName}=${cap.maxInstances || config.maxInstances}`;
    });
    return scale.join(' ');
};

module.exports = {
    scaleTest,
}