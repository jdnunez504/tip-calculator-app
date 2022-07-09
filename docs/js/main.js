//let buttons = document.querySelectorAll('button percentage');
let billInput = document.querySelector('#bill');
let customInput = document.querySelector('#custom');
let peopleInput = document.querySelector('#people');
let tipAmt = document.querySelector('.result-tip');
let total = document.querySelector('.result-total');

let tipButtonsParent = document.querySelector('.tips-select');

let selectedBtn;

let tipPercent = 0;
tipButtonsParent.addEventListener('click', function(e) {
    let target = e.target;
    if(target.tagName != 'BUTTON') return;
    select(target);
})

function select(btn) {
    if (selectedBtn) {
        selectedBtn.classList.remove('selected');
    }
    selectedBtn = btn;
    btn.classList.add('selected');
    tipPercent = btn.dataset.value;
    calculate();
    console.log(tipPercent);
}

let bill = 0;
billInput.addEventListener('input', function() {
    bill = billInput.value;
    calculate();
    //console.log(bill);
})

peopleInput.addEventListener('input', function() {
    numPeople = peopleInput.value;
    calculate();
})
function calculate() {
    tipResult = bill * tipPercent / numPeople;
    tipAmt.innerText = `$${tipResult}`;
    total.innerText = `$${tipResult + bill / numPeople}`;
}