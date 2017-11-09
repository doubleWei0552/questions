const exp = require('express'),
    fs = require('fs'),
    util = require('../utilities'),
    db = require('../db');

const router = exp.Router()

router.get('/', (req, res) => {
    db.Question
    .find()
    .exec((err, data) => {
        if(err){
            // 
        }else{
            console.log(data);
            var questions = [];
            res.render('index', {
                user: req.cookies.petname,
                questions: data.map(m => {
                    m = m.toObject();
                    m.id = m._id.toString();
                    delete m._id;
                    return m;
                })
            });
        }
    });
});

// router.get('/', (req, res) => {

//     function readFiles(i, files, questions, complete){
//         if(i < files.length){
//             fs.readFile(`questions/${files[i]}`, (err, data) => {
//                 if(!err){
//                     questions.push(JSON.parse(data))
//                 }
//                 // 递归调用(自身调用自身)
//                 readFiles(++i, files, questions, complete)
//             })
//         }
//         else{
//             complete()
//         }
//     }

//     fs.readdir('questions', (err, files) => {
//         if(err){
//             res.render('error')
//         }
//         else{
//             files = files.reverse()
//             var questions = []

//             readFiles(0, files, questions, () => {
//                 res.render('index', {
//                     user: req.cookies.petname,
//                     questions
//                 })
//             })
//         }
//     })
// })

module.exports = router