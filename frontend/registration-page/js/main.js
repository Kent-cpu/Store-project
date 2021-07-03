const authorization_button = document.querySelector(".authorization-button");
const registration_button = document.querySelector(".registration");
const close_modale = document.querySelector(".modal-close");

authorization_button.addEventListener( "click", () =>{
    let str_login = document.querySelector(".login").value.toString();
    let str_password = document.querySelector(".password").value.toString();
    let character_check_login = str_login.match(/^[A-Za-z0-9]+$/);
    let character_check_password = str_password.match(/^[A-Za-z0-9]+$/);
    if (character_check_login == null && character_check_password == null ){
        console.log("Вводите только латинские буквы и не используйте пробел");
    }
});


registration_button.addEventListener("click", ()=>{ //при клике появляется модальное окно регистрации 
    const modal = document.querySelector(".vmodal");
    modal.classList.add("open");
})

close_modale.addEventListener("click", ()=>{ // при клике закрывается модальное окно
    const modal = document.querySelector(".vmodal");
    modal.classList.remove("open");
})