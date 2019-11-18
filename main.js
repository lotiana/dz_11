// при клике на красную  линию увеличивается плавно сама линия





let card__lines = document.querySelectorAll('.card__line');
let ck_warning = document.querySelector('.ck_warning');
let cross = document.querySelectorAll('.ck_warning__cross');
let promo_form = document.querySelector('.form_wrapper');
let action__btn = document.querySelector('.action__btn');
let def_animation = 'fadeOutUp';


/*
часть посвященная работе с faq панелями
*/
let faq_quest = document.querySelectorAll(".faq__panel__quest");
let faq_answer = document.querySelectorAll(".faq__panel__answer");


var flags = []; 
//у нас массив, в котором есть значения true

for (let i = 0; i < faq_quest.length; i++) {
    flags.push(true);
    console.log(flags);
    faq_quest[i].onclick = function(){

        faq_answer[i].classList.add("animated");
        if(flags[i]){
            faq_answer[i].classList.remove("zoomOut");
            faq_answer[i].classList.add("zoomIn");
            faq_answer[i].classList.add("faq_helper");
            flags[i] = false; 
            console.log(flags[i]);
        } 
        else {
            faq_answer[i].classList.remove("zoomIn");
            faq_answer[i].classList.add("zoomOut");
            flags[i] = true;
            setTimeout(() => {
                faq_answer[i].classList.remove("faq_helper");
            }, 400);
            console.log(flags[i]);
        }

    }
}

/*
часть посвященная карточкам
*/ 

for (let i = 0; i < card__lines.length; i++) {
    card__lines[i].onclick = function(){
        this.classList.toggle('card__line__helper');
    }
}

/*
работа с крестиком формы и кнопками
*/
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


//итак, при входе пользователя окно спрашивает,
// в какую страну он хочет отправиться
// в зависимости от ответа меняет background promo
//страница должна полностью загрузиться
//данные должны приводится к нижнему регистру для универсальности

setTimeout(() => {
    let answer = prompt("введите страну, в которую хотите отправиться");
    let answer2 = prompt("введите еще страну");
    let promo  = document.querySelector(".promo");
    let footer = document.querySelector("footer");
    let arr_country = ["финляндия", "эстония", "норвегия", "швеция", "дания", "болгария"];
    GetInfo(answer, arr_country, promo);
    GetInfo(answer2, arr_country, footer);
}, 600);

function GetInfo(info, arr, el) {
    info = info.toLowerCase();
    for (let i = 0; i < arr.length; i++) {
        if (info == arr[i]) {
            el.style.backgroundImage = `url(img/${arr[i]}.jpeg)`;
        }
    }
}






