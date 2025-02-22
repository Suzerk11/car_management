/*
    封装操作数据库的通用api
*/
const mysql = require('mysql'); //引入mysql模块

exports.base = (sql, data, callback) => {
    // 创建数据库连接
    const connection = mysql.createConnection({
        host: 'localhost', // 数据库所在的服务器的域名或者IP地址
        user: 'root', // 登录数据库的账号
        password: '123456', // 登录数据库的密码
        database: 'vehicle_rental_management_system', // 数据库名称
        dateStrings : true, //解决时间格式
        multipleStatements:true //可一次性执行多条语句
    });
    // 执行连接操作
    connection.connect();
    
    // console.log('正在尝试连接');

    // 操作数据库
    connection.query(sql, data, function (error, results, fields) {
        try {
            if (error) throw error;
        } catch (err) {
           results = {affecterRows:-1,error:err}
        }
        callback(results);
    });
    // 关闭数据库
    connection.end();
}