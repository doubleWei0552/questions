const   exp = require('express'),
        fs = require('fs'),
        uploads = require('../../multer'),
        util = require('../../utilities')
        
const router = exp.Router()

router.get('/user/photo', util.sign, (req, res) => {
    res.render('user/photo', {
        title: '修改头像'
    })
})

router.post('/api/user/photo', util.sign, uploads.single('photo'), (req, res) => {
    util.send(res, 'success', '上传成功')
})

module.exports = router