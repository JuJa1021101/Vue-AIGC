const router = require('@koa/router')(); //提供的是一个函数，需要调用完才能拿到一个实例对象
const jwt = require('../utils/jwt.js')
const { findNoteListByType,findNoteDetailByType,notePublish } = require('../controllers/index.js')
const { formateTime } = require('../utils/formateTime.js')

router.get('/findNoteListByType',jwt.verify(),async (ctx)=>{
    //检验token合理再去数据库中查找数据返回给前端
    const { note_type } = ctx.request.query
    const res = await findNoteListByType(note_type,ctx.userId)
    // console.log(res);
    try{
        if(res.length){//拿到了数据
            ctx.body = {
                code:'800',
                data:res,
                msg:'查询成功'
            }
        }else{
            ctx.body = {
                code:'800',
                data:res,
                msg:'当前分类下没有数据'
            }
        }
    }catch(error){
        ctx.body = {
            code:'805',
            data:error,
            msg:'服务器异常'
        }
    }

})

router.get('/findNoteDetailByType',jwt.verify(),async (ctx)=>{
    //检验token合理再去数据库中查找数据返回给前端
    const { note_detail } = ctx.request.query
    const res = await findNoteDetailByType(note_detail)
    // console.log(res);
    try{
        if(res.length){//拿到了数据
            ctx.body = {
                code:'800',
                data:res,
                msg:'查询成功'
            }
        }else{
            ctx.body = {
                code:'800',
                data:res,
                msg:'当前分类下没有数据'
            }
        }
    }catch(error){
        ctx.body = {
            code:'805',
            data:error,
            msg:'服务器异常'
        }
    }

})

router.post('/note-publish',jwt.verify(),async(ctx) =>{
    const { title,note_content,head_img,note_type} = ctx.request.body
    const c_time = formateTime(new Date())
    const m_time = formateTime(new Date())
    try {
        const res = await notePublish({title,note_content,head_img,note_type,userId:ctx.userId,nickname:ctx.nickname,c_time,m_time})
        // console.log(res.affectedRows);
        if(res.affectedRows){
            ctx.body = {
                code:'800',
                data:res,
                msg:'发布成功'
            }
        }else{
            ctx.body = {
                code:'805',
                data:error,
                msg:'发布失败'
            }
        }
    } catch (error) {
        console.log(error);
    }

})

module.exports = router