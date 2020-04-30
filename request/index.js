const api = require('./api');
const { HOST } = require('../config/index');

module.exports = function (api_name, params,noauth) {
    // noauth表示此接口是否需要登录
    if(!noauth){
        let token = wx.getStorageSync('token');
        if(token){
            return Promise.reject({
                msg:'未登录'
            })
        }
        params.token = token
    }
    
    return new Promise(function (reslove, reject, method) {
        wx.request({
            url: `${HOST}/${api[api_name]}`,
            method: method || 'POST',
            data: params||{},
            header: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            success (res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    if (res.data.code == 10000) {
                        reslove(res.data);
                    } else {
                        reject(res.data);
                    }
                } else {
                    let msg = '';
                    try {
                        msg = res.data.msg;
                    } catch (error) {
                        msg = JSON.stringify(res.data);
                    }

                    reject({
                        msg
                    });
                }
            },
            fail (error) {
                reject({
                    msg: error.errMsg
                });
            },
        });
    });
};
