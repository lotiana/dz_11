// при клике на красную  линию увеличивается плавно сама линия




let ck; //undefined
let card__lines = document.querySelectorAll('.card__line');
let ck_warning = document.querySelector('.ck_warning');
let cross = document.querySelectorAll('.ck_warning__cross');
let promo_form = document.querySelector('.form_wrapper');
let action__btn = document.querySelector('.action__btn');
let def_animation = 'fadeOutUp';
let faq_quest = document.querySelectorAll(".faq__panel__quest");
let faq_answer = document.querySelectorAll(".faq__panel__answer");


var flag = true;

for (let i = 0; i < faq_quest.length; i++) {
    faq_quest[i].onclick = function(){
        faq_answer[i].classList.add("animated");
        if(flag){
            faq_answer[i].classList.remove("zoomOut");
            faq_answer[i].classList.add("zoomIn");
            faq_answer[i].classList.add("faq_helper");
            flag = false;
        } 
        else {
            faq_answer[i].classList.remove("zoomIn");
            faq_answer[i].classList.add("zoomOut");
            flag = true;
            setTimeout(() => {
                faq_answer[i].classList.remove("faq_helper");
            }, 400);
        }

    }
}


for (let i = 0; i < card__lines.length; i++) {
    card__lines[i].onclick = function(){
        this.classList.toggle('card__line__helper');
    }
}


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
