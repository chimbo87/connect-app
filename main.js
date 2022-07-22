var howItWorks = document.querySelector('.how-it-works');
var drop_down = document.querySelector('.drop-down');

howItWorks.addEventListener('mouseover',()=>{
    drop_down.style.display='block';
})
howItWorks.addEventListener('click',()=>{
    drop_down.style.display='none';
})


var login_in = document.querySelector('.login_in');
var login_form_container = document.querySelector('.login-form-container');

login_in.addEventListener('click',()=>{
    login_form_container.style.display='block';
})