
function send(res, code, message, data){
    res.status(200).json({code, message, data})
}

function sign(req, res, next){
    if(req.cookies.petname){
        next()
    }
    else{
        if(req.xhr){
            // req.xhr通过请求头中的X-Requested-With判断是
            // 否是Ajax请求，Ajax请求默认都带有这个请求头
            send(res, 'signin error', '请重新登录...')
        }
        else{
            res.redirect('/user/signin')
        }
    }
}

// module.exports = {name: 'ZhangSan', age: 3}

// 导出多个函数：

// module.exports = {send: send, sign: sign}

module.exports = {send, sign}

// exports.send = send
// exports.sign = sign