module.exports = class WrongRequestParamsException extends Error {
    constructor(msg = 'Wrong request params') {
        super(msg);
    }
}