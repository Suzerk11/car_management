const express = require('express');
const users=require('../controller/users.js')
// const session = require('express-session')
const bodyparser = require('body-parser')
var router = express.Router();

router.use(bodyparser.urlencoded({ extended: true }))
/**
 * session
 *  secret：  一个 String 类型的字符串，作为服务器端生成 session 的签名
 *  name:    保存在本地cookie的一个名字 默认connect.sid  可以不设置
 *  resave:  强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false。
 *  rolling: 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）
 *  saveUninitialized: 强制将未初始化的 session 存储。默认值是true,建议设置成true
 *
 * cookie
 *  属性默认值: { path: '/', httpOnly: true, secure: false, maxAge: null }
 *  httpOnly： 属性禁止客户端JavaScript的访问，禁止后不能使用document.cookie
 *  secure:    https这样的情况才可以访问cookie
 *  maxAge：   单位毫秒，从设置cookie开始多少毫秒失效(如果maxAge和expires都设置了，最后设置的属性生效.)
 *  path：     路径，默认值为域名的根路径
 *  sameSite:  SameSite-cookies是一种机制，用于定义cookie如何跨域发送。
 */


// router.use(session({
//   secret: 'secret', 
//   saveUninitialized: false, 
//   cookie: {
//       maxAge: 1000 * 60 * 60, 
//   }
// }))

// 验证登入
router.post('/login', users.login)

router.get('/employee',users.employee)
router.get('/getemployee',users.getemploy)
module.exports = router;
