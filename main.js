// let age = prompt("введите ваш возраст: ");

// if(age>= 18){
//     alert("проходите");
// } else{
//     alert("возвращайтесь с родителями");
// }

// пользователь щелкает по крестику нашей панели,
// потом панель пропадает
let ck_warning = document.querySelector('.ck_warning');
let cross = document.querySelectorAll('.ck_warning__cross');
let promo_form = document.querySelector('.form_wrapper');
let action__btn = document.querySelector('.action__btn');
let def_animation = 'fadeOutUp';


cross[1].onclick = () => {
    ck_warning.style.display = "none";
    // ck_warning.remove();
}

action__btn.onclick = () => {
    if(promo_form.classList.contains(def_animation)){
        promo_form.classList.remove(def_animation);
    }
    promo_form.style.display = "flex"; 
    // alert("по мне кликнили");
}

cross[0].onclick = () => {
    promo_form.classList.add(def_animation);
    setTimeout(() => {
        promo_form.style.display = "none";
    }, 400);
    
    // ck_warning.remove();
}
// у нас есть форма, которая изначально не видна
//при клике на кнопку присоединится она появится, при нажатии на крестик пропадет
//через 5 секунд на сайте она автоматически появляется
