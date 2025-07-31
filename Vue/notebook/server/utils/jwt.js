const jwt = require('jsonwebtoken')

function sign(option){
    return jwt.sign(option, 'slh', {
        expiresIn: 86400//时效性
    }) //加盐 混入到用户信息里一起加密
}

function verify() {
    return async (ctx, next) => {
        const jwtToken = ctx.req.headers.authorization //前端是大写 后端用小写
        // console.log(jwtToken);
        if(jwtToken){
            try {
                const decoded = jwt.verify(jwtToken, 'slh')
                // console.log(decoded);
                if(decoded.id){ //合法
                    ctx.userId = decoded.id
                    ctx.nickname = decoded.nickname
                    await next()
                }
            } catch (error) {
                // ctx.status = 416
                ctx.body = {
                    code: '809',
                    data: error, 
                    msg: 'token失效了'
                }
            }
        }else{
            ctx.body = {
                code:'808',
                msg:'请提供Token'
            }

        }
    }
}//闭包

module.exports = {
    sign,
    verify
}