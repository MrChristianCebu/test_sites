var myImage = document.querySelector('img');


myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/3.jpeg') {
      myImage.setAttribute ('src','images/1.jpeg');
    } else {
      myImage.setAttribute ('src','images/3.jpeg');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + '\'s Tropical Beach';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + '\'s Tropical Beach';
}

myButton.onclick = function() {
  setUserName();
}
