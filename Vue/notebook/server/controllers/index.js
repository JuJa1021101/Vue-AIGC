//可以连接数据库的方法

const mysql = require('mysql2/promise')
const { database } = require('../config/index.js')

//创建连接池
const pool = mysql.createPool(database)

//连接数据库的方法

const allService = {
    async query(sql){
       try{
         //通过连接池来创建连接
         const conn =await pool.getConnection()
         //对连接执行某些操作
         const [rows,err] =await conn.query(sql)
         pool.releaseConnection(conn)
         return Promise.resolve(rows)
       }catch(error){
        return Promise.reject(error)
       }
    }
}

//登录
const userLogin = (username,password) =>{
    const _sql =`select * from users where username="${username}" and password="${password}"`
    return allService.query(_sql)
}

//查找账号
const userFind = (username) =>{
    const _sql = `select * from users where username="${username}"`
    return allService.query(_sql)
}
//注册
const userRegister = (values) =>{
    const _sql = `insert into users (username,password,nickname) values ("${values.username}","${values.password}","${values.nickname}")`
    return allService.query(_sql)
}
//根据分类查找数据
const findNoteListByType = (note_type,id) =>{
    const _sql = `select * from note where note_type="${note_type}" and userId ="${id}"`
    return allService.query(_sql)
}
//查询日记详情
const findNoteDetailByType = (id) =>{
    const _sql = `select * from note where id ="${id}"`
    return allService.query(_sql)
}
//写入日记
const notePublish = (values) =>{
    const _sql = `insert into note 
    (title,note_content,head_img,note_type,userId,nickname,c_time,m_time) 
    values ("${values.title}","${values.note_content}","${values.head_img}","${values.note_type}","${values.userId}","${values.nickname}","${values.c_time}","${values.m_time}")`
    return allService.query(_sql)
}
module.exports = {
    userLogin,
    userFind,
    userRegister,
    findNoteListByType,
    findNoteDetailByType,
    notePublish
    
}