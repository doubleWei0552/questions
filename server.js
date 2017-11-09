const   exp = require('express'),
        bodyParser = require('body-parser'),
        cookieParser = require('cookie-parser'),
        template = require('./template'),
        app = exp()
     
// 通过module.exports导出功能及
// 通过require()方法加载模块功能（导入）
// 这种引入其它js文件的方法叫做JS模块化

app.use(exp.static('www'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.engine('html', template.__express)
app.set('view engine', 'html')


// 使用router
app.use(require('./routes/user/register'))
app.use(require('./routes/user/signin'))
app.use(require('./routes/user/photo'))

app.use(require('./routes/index'))
app.use(require('./routes/ask'))
app.use(require('./routes/answer'))


app.listen(3000, () => console.log('正在运行...'))