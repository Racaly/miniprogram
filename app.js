const login = require('./factory/login');
const userInfoFunc = require('./factory/userinfo');
App({
    login,
    userInfo:userInfoFunc()
})