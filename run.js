const transform = require('@babel/core').transform

const transpile = src => {
  return transform(src, {
    plugins: ['@babel/plugin-transform-arrow-functions']
  }).code.trim()
}

const example = `
let sum = (a, b)=>{return a+b}
`

console.log(transpile(example))