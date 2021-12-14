import { cube } from './math.js';

function component() {
  const element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!', 'aaa '
  ].join('\n\n');

  const b = cube(9)
  console.log(b);
  return element;
}

document.body.appendChild(component());
