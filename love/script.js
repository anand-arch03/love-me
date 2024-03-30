const Yes = document.getElementById('Yes');
const msg = document.getElementById('msg');

const No = document.getElementById('No');

Yes.addEventListener('click',()=>{
msg.innerText = "❤ I love you too Meri Jaan ❤😘";

});



No.addEventListener('mouseenter',()=>{
    No.style.position = "absolute";
    No.style.top = Math.floor(Math.random()*200) + "px";
    No.style.right = Math.floor(Math.random()*200) + "px";

});

