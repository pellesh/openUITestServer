import _devConfig from './_devConfig.js'
import _prodConfig from './_prodConfig.js'

switch (process.env.NODE_ENV) {
    case 'production':
        module.exports = _prodConfig;
        break;
    case 'development':
        module.exports = _devConfig;
        break;
    default:
        module.exports = _devConfig;
        break;

}



