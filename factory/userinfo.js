const login = require('./login');
const request = require('../request/index');
/**
 * 这里返回一个函数，而不是Promise对象，因为如果接口一旦调用失败，用户需要再次调用此接口
 */
module.exports = function () {
    return new Promise(function (reslove, reject) {
        login.then((res) => {
            request('USERINFO', {}).then(reslove, reject);
        }, reject);
    });
};
