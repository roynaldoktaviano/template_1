AOS.init();

let btn = document.querySelector('#btn-opn')
let cover = document.querySelector('#open')

btn.addEventListener('click', ()=> {
    cover.style.height = '0px'
    cover.style.opacity = '0'
    document.body.classList.remove('overflow-hidden');
}) 

let close = document.querySelector('#close')
let open = document.querySelector('#over')
let hadiah = document.querySelector('#hadiah')

open.addEventListener('click', ()=> {
    hadiah.classList.toggle('hidden');
    hadiah.classList.toggle('flex');
}) 

close.addEventListener('click', ()=> {
    hadiah.classList.toggle('hidden');
    hadiah.classList.toggle('flex');
}) 

