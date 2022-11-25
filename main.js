const form = document.querySelector('.form')
const Email = document.querySelector('#Email')
const Username = document.querySelector('#Username')
const Password = document.querySelector('#Password')
const Password2 = document.querySelector('#Password-2')
const Submit = document.querySelector('.submitBtn')
const small = document.querySelector('small')
const small2 = document.querySelector('.small-2')
const small3 = document.querySelector('.small-3')
const small4 = document.querySelector('.small-4')


form.addEventListener('submit',(e) => {
    e.preventDefault()

    formVerification()
})



function formVerification() {
    const emailvalue = Email.value.trim()
    const username = Username.value.trim()
    const password = Password.value.trim()
    const password2 = Password2.value.trim()


   if (emailvalue === ''){
    Email.style.border = "1px solid red"
    small.innerHTML = "<h3 class = 'message'><i class= 'fa-solid fa-circle-exclamation'></i>Email cannot be blank</h3>"
   } else {
    Email.style.border = "1px solid green"
    small.innerHTML = " "
   }

   if (username == ''){
    Username.style.border = "1px solid red"
    small2.innerHTML = "<h3 class = 'message'><i class= 'fa-solid fa-circle-exclamation'></i>Username cannot be blank</h3>"
    }else{
        Username.style.border = "1px solid green"
        small.innerHTML = " "
    }


    if(password === ''){
        Password.style.border = "1px solid red"
        small3.innerHTML = "<h3 class = 'message'><i class= 'fa-solid fa-circle-exclamation'></i>Password cannot be blank</h3>"
    }else{
        Password.style.border = "1px solid green"
        small3.innerHTML = " "
    }
   

    if(password2 !== password){
        Password2.style.border = "1px solid red"
        small4.innerHTML = "<h3 class = 'message'><i class= 'fa-solid fa-circle-exclamation'></i>Password is incorrect</h3>"
    } else if(password2 === ''){
        Password2.style.border = "1px solid red"
        small4.innerHTML = "<h3 class = 'message'><i class= 'fa-solid fa-circle-exclamation'></i>Put your password to confirm</h3>"
    }else{
    Password2.style.border = "1px solid red"
    small4.innerHTML = "<h3 class = 'message'><i class= 'fa-solid fa-circle-exclamation'></i>Password is incorrect</h3>"
    }
}
