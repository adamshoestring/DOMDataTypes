let user = prompt('Whats your Name?');

console.log('Welcome ' + user);

let messageH1 = document.getElementById('message');
messageH1.innerHTML = 'Hello my name is ' + user;

let userColor = prompt('Whats your favorite color?');
messageH1.style.color = userColor; 

document.body.bgColor = 'lightblue';