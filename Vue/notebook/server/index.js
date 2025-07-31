const Koa = require('koa')
const cors = require('@koa/cors')
const app = new Koa()
const { bodyParser } = require('@koa/bodyparser')//让koa可以解析post传递的参数
const useRouter = require('./routes/index.js')


app.use(cors())//允许跨域
app.use(bodyParser())
useRouter(app)

app.listen(3000,()=>{
    console.log('项目已启动')
})