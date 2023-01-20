const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/chuck palahniuk.jpg') {
    myImage.setAttribute('src','images/chuc.jpg');
  } else {
    myImage.setAttribute('src','images/chuck palahniuk.jpg');
  }
}
