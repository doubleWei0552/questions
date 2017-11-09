// db.js
// 连接数据库的模块

const mongo = require('mongoose');

mongo.connect('mongodb://localhost/zy-questions');
const conn = mongo.connection;

conn.on('error', (err) => {
    console.log('数据库连接失败', err);
});
conn.on('open', () => {
    console.log('数据库打开成功');
});

// 用模块导出功能导出数据模型
// 在别的模块里可以用数据模型来创建实例
exports.User = mongo.model('users', {
    petname: String,
    password: String,
    isMale: Boolean,
    email: String,
    course: String,
    ip: String,
    time: Date
});

exports.Question = mongo.model('questions', {
    content: String,
    petname: String,
    ip: String,
    time: Date,
    answers: [{
        question: String,
        content: String,
        petname: String,
        ip: String,
        time: Date
    }]
});