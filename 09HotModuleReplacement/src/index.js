import _ from 'lodash';
import printMe from './print.js'
import './style.css'

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = '点我输出内容';

  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}
