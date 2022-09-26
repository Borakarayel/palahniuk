let answer = prompt("Speak Friend and Enter", '');
if (answer === 'Mellon' || answer ==='mellon')
{alert (" Welcome, Friend!!!" );}
else if ( answer ==='Friend' || answer ==='friend' )
{alert ( "Eerrr anyway, welcome..." );}
else if (answer === '' || answer === null) {alert('Next time try to type something ;(')}
else if
(answer !== 'Mellon' || answer !=='Friend' || answer !=='mellon' || answer !=='friend' )
{alert ( "Welcome Stranger!!!" );}


 
const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/chuck palahniuk.jpg') {
    myImage.setAttribute('src','images/chuc.jpg');
  } else {
    myImage.setAttribute('src','images/chuck palahniuk.jpg');
  }
}