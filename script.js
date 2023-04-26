const calc = document.getElementById('calculate');
const topBar = document.getElementById('topBar');
let resultBar = document.getElementById('resultBar');
let canClear = false;
let sign;
let letter1;
let letter2;



const inverse = document.getElementById('inverse');
const ce = document.getElementById("ce");
const percent = document.getElementById('percent');
const root = document.getElementById('sqrt');

let defaultSqValue;
let defaultValue = '';
let percentVal;
let number;
let oper = "";
let num;
let res;
let valueTwo
root.addEventListener('click', squareRoot);   
ce.addEventListener("click", clearEntry);   
inverse.addEventListener('click', inverseValue);
// resultBar.value = 0;3

function updateNum(message){
    if (canClear) {
        canClear=false
        resultBar.value=''
    }

    // if(canClear){
    //     canClear = false;
    //     resultBar.value = ''
    // }
    // resultBar.value = ''

   
    resultBar.value += message;
    letter2  = resultBar.value

    // res = number;

    // num = number;
}
function operator(message){
    // if(oper){
    //     calculate();
    // }
    
    // topBar.value += resultBar + operator ;*
    topBar.value += resultBar.value + message
    if (sign) {
        calculate()

        
    }
    sign = message
    canClear=true
    
    letter1 = resultBar.value
}



function inverseValue(){
    let anwser = 1 / topBar.value;
    resultBar.value = anwser;

    // defaultValue = `1 ÷ ${topBar.value} =`
    // topBar.value = defaultValue;
}

function backSpace(){
    let text=  resultBar.value;
    resultBar.value = text.slice(0, -1)
}

percent.addEventListener("click", percentage)

function percentage(){
    num = resultBar.value / 100;
    resultBar.value = num;

    if(resultBar){}
}
function pow(){
    
    defaultSq = topBar.value;
    square = Math.pow(topBar.value, 2);

    topBar.value = `sqr(${defaultSq})`
    resultBar.value = square;
}

function squareRoot(){
    defaultSqValue = topBar.value;
    // topBar.value = `√(${defaultSqValue})`
    let sqroot = Math.sqrt(defaultSqValue)
    if(topBar.value){
        topBar.value = '√' + '(' + defaultSqr + ')';
    }

    resultBar.value = sqroot;
}





calc.addEventListener('click', calculate)
    // document.getElementById('calculate')
    
    // result = topBar.value

function calculate(){
        
if(sign == '+'){
    resultBar.value = Number(letter1) + Number(resultBar.value)
}
else if(sign == '-'){
    resultBar.value = Number(letter1) - Number(resultBar.value)
}
else if(sign == '/'){
    resultBar.value = Number(letter1) / Number(resultBar.value)
}
else if(sign == '*'){
    resultBar.value = Number(letter1) * Number(resultBar.value)
}
resultBar.value = resultBar.value
sign =''
    console.log(resultBar.value)
    // let ans = topBar.value;

    // resultBar.value  = ans;

}


function clearEntry(){
    resultBar.value = '';
}

function clearAll(){
    clearEntry();
    topBar.value = '';
}
