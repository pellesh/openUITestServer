import fs from 'fs';
import config from '../config/config.js'
import path from 'path';
import util from 'util';
import os from 'os';
import WrongRequestParamsException from '../Exceptions/WrongRequestParamsException'


class TranslateService {
    appDir = path.dirname(require.main.filename);
    readFile = util.promisify(fs.readFile);
    appendFile = util.promisify(fs.appendFile);


    constructor() {
    }

    async getTranslate(word) {
        let result = await this.readFile(path.join(this.appDir, '/../', config.fileTranslate), 'utf8').catch(err => {
            throw err;
        });
        if (result.length) {
            let line = result.split(os.EOL).filter(i => i.split('=')[0].trim() === word.trim());
            if(!line.length){
                line = result.split(os.EOL).filter(i => i.split('=')[1].trim() === word.trim());
                return line.length ? line[0].split('=')[0] : "";
            }else{
                return line.length ? line[0].split('=')[1] : "";
            }
        } else {
            return "";
        }

    }

    async addTranslate(word, translate) {
        if (typeof word === 'string' && typeof translate === 'string') {
            let fileContent = await this.readFile(path.join(this.appDir, '/../', config.fileTranslate), 'utf8').catch(err => {
                throw err;
            });
            let str_to_add = word.trim(0) + '=' + translate.trim();
            str_to_add = 0 !== fileContent.length ? os.EOL + str_to_add : str_to_add;
            await this.appendFile(path.join(this.appDir, '/../', config.fileTranslate), str_to_add).catch(err => {
                throw err;
            });
            return true;
        } else {
            throw new WrongRequestParamsException();
        }

    }
}

module.exports = TranslateService;