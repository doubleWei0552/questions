const exp = require('express'),
    fs = require('fs'),
    util = require('../../utilities'),
    db = require('../../db');

const router = exp.Router()

/*--------------------登录--------------------*/

router.get('/user/signin', (req, res) => {
    res.render('user/signin', {
        title: '登录',
        rightNav: 'register'
    });
});

router.get('/user/signout', (req, res) => {
    res.clearCookie('petname');
    res.redirect('/');
    // 在服务端控制浏览器页面跳转
    // 重定向
});

// 处理用户登录
router.post('/api/user/signin', (req, res) => {
    db.User
        .find({ petname: req.body.petname })
        .select('petname password')
        .exec((err, data) => {
            if (err) {
                // 错误
            } else {
                if (data.length == 0) {
                    util.send(res, 'register error', '该用户未注册');
                } else {
                    if (data[0].toObject().password === req.body.password) {
                        res.cookie('petname', req.body.petname);
                        util.send(res, 'success', '登录成功...');
                    } else util.send(res, 'signin error', '密码错误,请重新输入');
                }
            }
        });
});

// router.post('/api/user/signin', (req, res) => {
//     var fileName = `users/${req.body.petname}.txt`

//     fs.exists(fileName, exists => {
//         if(exists){
//             fs.readFile(fileName, (err, data) => {
//                 if(err){
//                     util.send(res, 'file error', '抱歉，系统错误...')
//                 }
//                 else{
//                     var user = JSON.parse(data)
//                     if(user.password == req.body.password){

//                         res.cookie('petname', req.body.petname)
//                         // 此处需要加密

//                         util.send(res, 'success', '登录成功...')
//                     }
//                     else{
//                         util.send(res, 'signin error', '用户名或密码错误！')
//                     }
//                 }
//             })
//         }
//         else{
//             util.send(res, 'register error', '用户名未注册！')
//         }
//     })
// })

module.exports = router