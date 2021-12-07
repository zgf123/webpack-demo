import _ from 'lodash';
import './style.css'
import Pic from './pic.jpg'
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  console.log(Pic);

  // 将图像添加到我们现有的 div。
  var myPic = new Image();
  myPic.src = Pic;

  element.appendChild(myPic);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
