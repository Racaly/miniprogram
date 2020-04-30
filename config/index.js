var config = {}
try {
    config = require('./config');
}catch(error){
    console.error(new Error("not found config.js ，配置文件不存在，请使用config.yml.js生成配置文件（config.js）"))
}
module.exports = {
    ...config
}