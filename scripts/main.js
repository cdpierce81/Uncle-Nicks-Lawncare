let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/aerate.jpg') {
      myImage.setAttribute('src','image/aerate_grass.jpg');
    } else {
      myImage.setAttribute('src','image/aerate.jpg');
    }
}

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

/*function setUserName() {
	let myName=prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent='Mozilla is cool, ' + myName;
}*/

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Uncle ${myName}'s Lawn Care Service`;
  }
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName=localStorage.getItem('name');
	myHeading.textContent="Uncle " + storedName + "'s Lawn Care Service";
}

myButton.onclick=function() {
	setUserName();
}