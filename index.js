const LIMIT = 10000;
const CURRENCY = "руб.";
const STATUS_IN_LIMIT = "всё хорошо";
const STATUS_OUT_OF_LIMIT = "всё плохо";
const STATUS_OUT_OF_LIMIT_CLASSNAME = "status_red";

const inputNode = document.querySelector(".js-exspense-input");
const buttonNode = document.querySelector(".js-button");
const historyNode = document.querySelector(".js-history");
const sumNode = document.querySelector(".js-sum-exspenses");
const limitNode = document.querySelector(".js-limit");
const statusNode = document.querySelector(".js-status");
const resetButtonNode = document.querySelector('.js-reset-button');

const expenses = [];

init(expenses);

buttonNode.addEventListener("click", function () {
  // добавляем трату в массив
  getExpanseFromUser();
  //список трат и считаем сумму
  renderHistory(expenses);
  renderSum(expenses);
  // работа со статусом
  renderStatus(expenses);
});

resetButtonNode.addEventListener('click',function(){
    expenses.
    init(expenses);
});

function init(expenses) {
  limitNode.innerText = LIMIT;
  statusNode.innerText = STATUS_IN_LIMIT;
  sumNode.innerText = calculateExpanses(expenses);
}

function trackExpanse(exspense) {
  expenses.push(exspense);
}

function getExpanseFromUser() {
  if (inputNode.value != "") {
    trackExpanse(parseInt(inputNode.value));
    clearInput();
  }
}

function clearInput() {
  inputNode.value = "";
}

function calculateExpanses(expenses) {
  let sum = 0;
  expenses.forEach((element) => {
    sum += element;
  });
  return sum;
}

function renderHistory(expenses) {
  let html = ``;
  expenses.forEach((element) => {
    html += `<li>${element} ${CURRENCY}</li>`;
  });
  historyNode.innerHTML = html;
}

function renderSum(expenses) {
  sumNode.innerText = calculateExpanses(expenses);
}

function renderStatus(expenses) {
  const sum = calculateExpanses(expenses);
  if (sum <= LIMIT) { // в лимите 
    statusNode.innerText = STATUS_IN_LIMIT;
    statusNode.classList.remove(STATUS_OUT_OF_LIMIT_CLASSNAME)
  } else { // больше лимита
    statusNode.innerText = STATUS_OUT_OF_LIMIT + " (" + (LIMIT - sum)+")";
    statusNode.classList.add(STATUS_OUT_OF_LIMIT_CLASSNAME)
  }
}
