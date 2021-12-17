const globals = require('./globals.js');

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');

  // 假设我们处于 `window` 上下文
  this.alert('Hmmm, this probably isn\'t a great idea...')

  console.log(globals);

  return element;
}
console.log('经过 imports-loader 处理后的 this', this);

document.body.appendChild(component());
