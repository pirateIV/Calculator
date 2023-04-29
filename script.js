const calc = document.getElementById('calculate');
const topBar = document.getElementById('topBar');
let resultBar = document.getElementById('resultBar');
let canClear = false;
let sign;
let firstNum;
let secondNum;



const inverse = document.getElementById('inverse');
const ce = document.getElementById("ce");
const percent = document.getElementById('percent');
const root = document.getElementById('sqrt');

let defaultSqValue;
let defaultSq;  
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

    resultBar.value += message;
    // secondNum  = resultBar.value

    // res = number;

    // num = number;
}
function operator(oper){
    // if(oper){
    //     calculate();
    // }
    
    // topBar.value += resultBar + operator ;
    topBar.value += resultBar.value + oper;
    if (sign) {
        calculate()
    }
    sign = oper;
    canClear=true
    
    firstNum = resultBar.value
}



function inverseValue(){
    let anwser = 1 / topBar.value;
    resultBar.value = anwser;

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


function squareRoot(){
    defaultSqValue = topBar.value;
    // topBar.value = `√(${defaultSqValue})`
    let sqroot = Math.sqrt(topBar.value)
    if(topBar.value){
        topBar.value = '√' + '(' + defaultSqValue + ')';
    }

    resultBar.value = sqroot;
}





calc.addEventListener('click', calculate)
    // document.getElementById('calculate')
    
    // result = topBar.value

function calculate(){
        
if(sign == '+'){
    resultBar.value = Number(firstNum) + Number(resultBar.value)
}
else if(sign == '-'){
    resultBar.value = Number(firstNum) - Number(resultBar.value)
}
else if(sign == '/'){
    resultBar.value = Number(firstNum) / Number(resultBar.value)
}
else if(sign == '*'){
    resultBar.value = Number(firstNum) * Number(resultBar.value)
}
// resultBar.value = resultBar.value
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


function pow(){

    defaultSq = topBar.value;

    let square = Math.pow(defaultSq, 2);
    resultBar.value = square;

}