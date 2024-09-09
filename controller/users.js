const db=require('./db.js')

exports.login=(req,res)=>{
    const sql='select Userid, UserPass from User_info where Userid = ? and UserPass = ?'
    const info=req.body
    const data =[info.username,info.password]
    db.base(sql,data,(result)=>{
        if (result.length){
            return res.json({
                status:200,
                msg:"登录成功"
            })
        }
        res.json(result[0])
    })
}

exports.employee=(req,res)=>{
    res.render('employee')    
}

exports.getemploy=(req,res)=>{
    const sql="select * from User_info"
    db.base(
        sql,null,(result)=>{       
            res.json(result)
        }
    )
}