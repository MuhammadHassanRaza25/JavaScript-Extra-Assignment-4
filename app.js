// JavaScript Extra Assignment 4 //

var now = new Date()
var months = ['1','2','3','4','5','6','7','8','9','10','11','12']

document.write(`<h1>${now.getDate()+'-'+months[now.getMonth()]+'-'+now.getFullYear()}</h1>`)
document.write(`<h1>${now.getDate()+'/'+months[now.getMonth()]+'/'+now.getFullYear()}</h1>`)

document.write(`<h1>${months[now.getMonth()]+'-'+now.getDate()+'-'+now.getFullYear()}</h1>`)
document.write(`<h1>${months[now.getMonth()]+'/'+now.getDate()+'/'+now.getFullYear()}</h1>`)







