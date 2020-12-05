const base = require('./base')
console.log('miniprogram-element =======================')
console.log('hello')
Component({
    behaviors: [base],
    options: {
        addGlobalClass: true, // 开启全局样式
    },
})
