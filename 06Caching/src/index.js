import _ from 'lodash';
import Print from './print';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';

  btn.onclick = Print.bind(null, 'Hello webpack!');
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
