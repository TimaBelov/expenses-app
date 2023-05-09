const popupOpenBtn = document.querySelector('.js-popup-open');
const popupCloseBtn = document.querySelector('.js-popup-close');
const popup = document.querySelector('.js-popup');
const popupInput = document.querySelector('.js-popup-input');
const popupChangeLimitBtn = document.querySelector('.js-popup-change-limit');

const POPUP_VISIBLE_CLASS = 'popup__open';

popupOpenBtn.addEventListener('click',function(){
    popup.classList.add(POPUP_VISIBLE_CLASS);
})

popupCloseBtn.addEventListener('click',function(){
    popup.classList.remove(POPUP_VISIBLE_CLASS);
})

popupChangeLimitBtn.addEventListener('click',function(){
    if (popupInput.value != ""){
        LIMIT = parseInt(popupInput.value);
        renderLimit();
        renderStatus(expenses);
        popupInput.value = "";
        popup.classList.remove(POPUP_VISIBLE_CLASS);
    }
})