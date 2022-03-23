
let myImage = document.querySelector('img');
myImage.onclick = function() 
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/letter.jpeg') 
    {
      myImage.setAttribute('src','images/paint.jpeg');
    } 
    else 
    {
      myImage.setAttribute('src','images/letter.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() 
{
    let myName = prompt('Please enter your name.');
    if(!myName) 
    {
        setUserName();
    } 
    else 
    {
        localStorage.setItem('name', myName);
        myHeading.textContent = '我和' + myName + '时光';
    }
    
}
//function to ask for fulfilling the information

if(!localStorage.getItem('name')) 
{
    setUserName();
} 
else 
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '我和' + storedName + '时光';
}
//first loading


myButton.onclick = function() 
{
    setUserName();
}
//click to run the function






/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


document.querySelector('html').addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
  });

*/
