const wrapper =  document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginBtn = document.querySelector('.login-btn');
const closeLogin = document.querySelector('.close-icon');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
    document.querySelector('title').textContent = "Register"
})

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
    document.querySelector('title').textContent = "Login"
})

loginBtn.addEventListener('click' , ()=> {
    wrapper.classList.add('show')
    document.querySelector('title').textContent = "Login"
})

closeLogin.addEventListener('click', () => {
    wrapper.classList.remove('show')
    document.querySelector('title').textContent = "Home"
})