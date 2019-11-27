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
    faq_quest[i].onclick = function () {

        faq_answer[i].classList.add("animated");
        if (flags[i]) {
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
    card__lines[i].onclick = function () {
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
    if (promo_form.classList.contains(def_animation)) {
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
    let promo = document.querySelector(".promo");
    let footer = document.querySelector("footer");
    let arr_country = ["финляндия", "эстония", "норвегия", "швеция", "дания", "болгария"];
    let arr_hello = ["Хей фин", "Хей эст", "Хей норв", "Хей швед", "Хей дания", "Хей болг"];
    GetInfo(answer, arr_country, arr_hello, promo);
    GetInfo(answer2, arr_country, arr_hello, footer);
}, 600);




function GetInfo(info, arr_c, arr_v, el) {
    info = info.toLowerCase();
    for (let i = 0; i < arr_c.length; i++) {
        if (info == arr_c[i]) {
            el.style.backgroundImage = `url(img/${arr_c[i]}.jpeg)`;
            alert(arr_v[i]);
        }
    }
}

function drawError(text, el) {
    el.innerHTML = text;
}
let form = document.querySelector("form");


//валидизация формы
// с расчетом только 1 форма на данной странице
form = document.querySelector('form');
document.addEventListener("keypress", (e) => {
    if (e.key == "Enter" && promo_form.style.display === 'flex') {
        validate(e); //
    }
})
form.addEventListener("submit", validate);
    console.warn(this);
    function validate(e) { // e = events
    e.preventDefault(); // останавливает отправку формы
    let nameVal = form.querySelector("[name = 'name']").value;
    let fioVal = form.querySelector("[name = 'surname']").value;
    let telVal = form.querySelector("[name = 'telephone']").value;
    let textVal = form.querySelector("[name = 'message']").value; 
    let elem_form = [nameVal, fioVal, telVal, textVal]; //массив инпутов
    let arr_labels = ['name', 'surname', 'telephone', 'message']; // массив for лейблов
    if (nameVal == '' || fioVal == '' || telVal == '' || textVal == '') { 
        let err = document.querySelector(".error_message"); 
        let error_message = "какое-то из полей пустует!";
        drawError(error_message, err);
        for (let i = 0; i < elem_form.length; i++) {
            CheckEmpty(elem_form[i], arr_labels[i]);
        }
    } else {
        for (let i = 0; i < elem_form.length; i++) {
            CheckEmpty(elem_form[i], arr_labels[i]);
        }
        let err = document.querySelector(".error_message");
        err.remove();
        setTimeout(() => {
            e.stopPropagation(); // отмена всплывающего события
        }, 300);
    }
}


function draw() {
    console.log(this);
    this.style.color = "blue";
    this.innerHTML = "*****";

}
let header = document.querySelector("header");
let a_arr = header.querySelectorAll("a");

//к сожалению, map не сработает, потому что элементы являются коллекцией,
// а не полноценным массивом
a_arr.forEach(el => {
    el.addEventListener("mouseover", draw, true);
});


// alert(promo_form.classList.contains(def_animation));





function CheckEmpty(el, label_name) {
    if (el == '') {
        $('form').find(`[for = '${label_name}']`).css('color', 'red');
    } else {
        $('form').find(`[for = '${label_name}']`).css('color', 'lightblue');
    }
}


let nav = document.querySelector(".header");
//  function navblue() {
// console.log(this);
// nav.style.backgroundColor = "red";
    

//  }

document.addEventListener("keydown", (e) => {
    if (event.code == "Digit1") {
        nav.style.backgroundColor = "blue";
        //navblue(); 
    }
    if (event.code == "Digit2") {
        //nav.style.background = "red";
        nav.style.backgroundColor = "rgb(3, 114, 112)";

    }
})


// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//       alert('Отменить!')
//     }
//   });



