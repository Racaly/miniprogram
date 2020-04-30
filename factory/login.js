const request = require('../request/index');
// 在很多页面需要频繁调用此接口以校验登录状态
module.exports = new Promise(function (reslove, reject) {
    wx.login({
        success: (res) => {
            request('LOGIN', {
                wx_code: res.code,
            },true).then(
                (res) => {
                    // 存储token
                    wx.setStorageSync('token', res.data.token);
                    reslove(res);
                },
                (error) => {
                    reject(error);
                }
            );
        },
    });
});
