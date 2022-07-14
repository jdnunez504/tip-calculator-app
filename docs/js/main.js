// INPUT FIELDS
let billInput = document.getElementById('bill');
let customInput = document.getElementById('custom');
let peopleInput = document.getElementById('people');

// TIP SELECT BUTTONS
let tipButtonsGrp = document.querySelector('.tips-select');

// RESET BUTTON
let resetButton = document.getElementById('reset');


// RESULTS
let tipIndvAmt = document.getElementById('tip');
let billIndvTotal = document.getElementById('total');

// FIELD INPUT VALUES
let billVal = 0;
let tipPrcVal = 0;
let peopleVal = 1;

// PARENT DELEGATION ELEMENT
let selectedBtn;

// INPUT EVENTS ['input', 'focusout']
billInput.addEventListener('input', function() {
    if (checkNumber(billInput)) {
        billVal = parseInt(getInputVal(billInput));
        calculate(billVal, tipPrcVal, peopleVal);
    }
});
billInput.addEventListener('focusout', function() {
    if (checkNumber(billInput)) {
        billVal = parseInt(getInputVal(billInput));
        calculate(billVal, tipPrcVal, peopleVal);
    }
});

customInput.addEventListener('input', function() {
    if (checkNumber(customInput)) {
        tipPrcVal = parseInt(getInputVal(customInput));
        calculate(billVal, tipPrcVal, peopleVal);
    }
});
customInput.addEventListener('focusout', function() {
    if (checkNumber(customInput)) {
        tipPrcVal = parseInt(getInputVal(customInput)) * 0.01;
        calculate(billVal, tipPrcVal, peopleVal);
    }
});

peopleInput.addEventListener('input', function() {
    if (checkNumber(peopleInput)) {
        peopleVal = parseInt(getInputVal(peopleInput));
        calculate(billVal, tipPrcVal, peopleVal);
    }
});
peopleInput.addEventListener('focusout', function() {
    if (checkNumber(peopleInput)) {
        peopleVal = parseInt(getInputVal(peopleInput));
        calculate(billVal, tipPrcVal, peopleVal);
    }

});


// SELECT BUTTON EVENTS
tipButtonsGrp.addEventListener('click', function(evnt) {
    let target = evnt.target;
    if (target.tagName != 'BUTTON') {return} 
    select(target);
    tipPrcVal = parseInt(getPrc(target)) * 0.01;
    calculate(billVal, tipPrcVal, peopleVal);
})


function select(btn) {
    if (selectedBtn) {
        selectedBtn.classList.remove('selected');
    }
    selectedBtn = btn;
    selectedBtn.classList.add('selected');
}

function getPrc(btn) {
    if (!btn.classList.contains('selected')) {return}
    return btn.dataset.value;
}

function getInputVal(el) {
    return el.value;
}

// Validate and add error msg
function checkNumber(el) {
    let n = el.value;
    console.log(n);
    if(isNaN(n)) {
        if(el.nextElementSibling.tagName != 'SPAN') {
            let error = `<span style="position: absolute; color: red; top: 0px; right: 0px;">Please enter a number.</span>`;
            el.insertAdjacentHTML('afterend', error);
        }
        return false;
    } else {
        if(el.nextElementSibling.tagName == 'SPAN') {
            let element = el.nextElementSibling;
            element.remove();
        }
        return true;
    }
}


// CALCULATE TIP AND TOTAL
function calculate(bill, tipPrc, people) {
    tipIndvAmt.innerText = `${bill * tipPrc / people}`;
    billIndvTotal.innerText = `${bill * tipPrc / people + bill / people}`;
}


















































// //let buttons = document.querySelectorAll('button percentage');
// let billInput = document.getElementById('bill');
// let customInput = document.querySelector('#custom');
// let peopleInput = document.querySelector('#people');
// let tipAmt = document.querySelector('.result-tip');
// let total = document.querySelector('.result-total');
// let resetBtn = document.querySelector('.reset');

// let tipButtonsParent = document.querySelector('.tips-select');

// let selectedBtn;

// let tipPercent = 0;




// tipButtonsParent.addEventListener('click', function(e) {
//     let target = e.target;
//     if(target.tagName != 'BUTTON') return;
//     select(target);
// })

// resetBtn.addEventListener('click', function() {
//     reset();
// })

// function select(btn) {
//     if (selectedBtn) {
//         selectedBtn.classList.remove('selected');
//     }
//     selectedBtn = btn;
//     btn.classList.add('selected');
//     tipPercent = btn.dataset.value;
//     calculate();
//     console.log(tipPercent);
// }

// let bill = 0;

// billInput.addEventListener('input', function() {
//     bill = billInput.value;
//     if (isNaN(parseInt(bill))) {
//         alert('Only numbers allowed');
//     } else {
//         calculate();
//     }
// })

// billInput.addEventListener('focus', function(e) {
//     //e.preventDefault();
//     this.value = 0;
//     billInput.placeholder = '';
// })

// let numPeople = peopleInput.value;
// peopleInput.addEventListener('input', function() {
//     numPeople = peopleInput.value;
//     calculate();
// })

// function calculate() {
//     tipResult = bill * tipPercent / numPeople;
//     tipAmt.innerText = `$${tipResult}`;
//     total.innerText = `$${tipResult + bill / numPeople}`;
// }

// function reset() {
//     billInput.value = 0;
//     bill = 0;
//     tipPercent = 0;
//     if (selectedBtn) {
//         selectedBtn.classList.remove('selected');
//     }
//     numPeople = 1;
//     peopleInput.value = 0;
//     tipAmt.innerText = "$0.00";
//     total.innerText = "$0.00";
// }

// function clear() {
//     this.value = '';
//     console.log(this);
// }