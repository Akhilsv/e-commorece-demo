const button = document.querySelector('.leftimg1');
const side_bar = document.querySelector('.side-bar');
const close1 = document.querySelector('.close')


button.addEventListener('click',()=>{
    side_bar.classList.add("fadeIn");
});

close1.addEventListener('click',()=>{
    side_bar.classList.remove("fadeIn")
});
