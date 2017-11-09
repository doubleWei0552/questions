const template = require('art-template')

// 上线时去掉这行代码
template.config('cache', false)

template.helper('ms', function(t){
    t = new Date(t)
    return t.getTime()
})

template.helper('formatTime', function(t){
    t = new Date(t)
    
    var M = t.getMonth() + 1,
        d = t.getDate(),
        h = t.getHours(),
        m = t.getMinutes()

    M = M < 10 ? '0' + M : M
    d = d < 10 ? '0' + d : d
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    
    return t.getFullYear() + '-' + M + '-' + d + ' ' + h + ':' + m
})

module.exports = template