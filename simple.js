const babel = require('babel-core');//babel核心解析库
const t = require('babel-types');//babel类型转化库

let code = 'chenhui === cute';
let ChaJian2 = {
    //访问者模式
    visitor: {
        BinaryExpression(path) {
                if (path.node.operator !== "===") {
                        return;
                }
                
                path.node.right = t.identifier("wft, Obviously handsome ");
        }
    } 
}
let d = babel.transform(code, {
    plugins: [
        ChaJian2
    ]
})
console.log(d.code);