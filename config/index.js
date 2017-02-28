module.exports = {
    devTest: { //部署到测试服务器上
        remotePath: '/home/', //部署到服务器的路径
        host: '111.111.111.111', //ip地址
        user: 'root', //帐号
        pass: 'root', //密码
        port: 22 //端口
    },
    publicPath: '/app/', //程序在网站根路径地址
    target: 'http://111.111.111.111/' //连接的服务器地址
};
