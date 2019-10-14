module.exports = class Response {

    constructor(data = null, status = true, message = '', err_code = null){
        this.data = data;
        this.status = status;
        this.message = message;
        this.err_code = err_code;
    }
};