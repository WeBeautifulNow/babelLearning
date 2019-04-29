/*
素质高的人特意注明了出处

原作者：Zenquan
链接：https://juejin.im/post/5b56e5636fb9a04fd26098bd
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

const babel = require('babel-core');//babel核心解析库
const t = require('babel-types');//babel类型转化库

let code = `let sum = (a, b)=>{return a+b}`;
let ArrowPlugins = {
    //访问者模式
    visitor: {//从众多节点类型中选择开发者所需要的节点
        //捕获匹配的API
        ArrowFunctionExpression(path){//对节点之间的关系的访问。
            let {node} = path;
            let body = node.body;
            let params = node.params;
            let r = t.functionExpression(null, params, body, false, false);
            path.replaceWith(r);
        }
    }
}
let d = babel.transform(code, {
    plugins: [
        ArrowPlugins
    ]
})
console.log(d.code);