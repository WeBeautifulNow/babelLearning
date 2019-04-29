const babel = require('babel-core');//babel核心解析库
const t = require('babel-types');//babel类型转化库

let code = 'a + b + c';
let ChaJian1 = {
    //访问者模式
    visitor: {
        Identifier(path) {
                console.log("Visiting: " + path.node.name);
        }
    } 
}
let d = babel.transform(code, {
    plugins: [
        ChaJian1
    ]
})
console.log(d.code);