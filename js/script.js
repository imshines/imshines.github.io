const btn = document.querySelector('.changeBg');

function colorChange(){
    document.body.style.backgroundColor = "rgb(58, 58, 58)" ;
    const head = document.querySelector('h1');
    head.style.backgroundColor = "black";
    document.querySelector('button').style.backgroundColor = "black";
    document.querySelector('label').style.color = "white";
    document.querySelector('.nav-wrapper').style.backgroundColor = "black";
}

btn.addEventListener('click',colorChange);

