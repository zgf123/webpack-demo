import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  const cache = {};
  const r = require.context('./components/', true, /\.js$/)
  r.keys().forEach((key) => {
    cache[key] = r(key)
  });
  console.log(cache);

  return element;
}

document.body.appendChild(component());
