const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("addbtn");
const resultEle = document.getElementById("result1");
const subButton = document.getElementById("subbtn");
const mulButton = document.getElementById("mulbtn");
const divButton = document.getElementById("divbtn");
const modButton = document.getElementById("modbtn");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const powResult = document.getElementById("result2");
const powButton = document.getElementById("powbtn");
const radius = document.getElementById("radi");
const resultAre = document.getElementById("result3");
const areaButton = document.getElementById("arebtn");


addButton.onclick = function(){
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if(!isNaN(num1) && !isNaN(num2)){
        const sum = num1 + num2;
        resultEle.innerHTML = `Result: ${sum}`;
    }
    else{
        resultEle.innerHTML = "Please Enter valid number";
    }
}

subButton.onclick = function(){
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if(!isNaN(num1) && !isNaN(num2)){
        const sum = num1 - num2;
        resultEle.innerHTML = `Result: ${sum}`;
    }
    else{
        resultEle.innerHTML = "Please Enter valid number";
    }
}

mulButton.onclick = function(){
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if(!isNaN(num1) && !isNaN(num2)){
        const sum = num1 * num2;
        resultEle.innerHTML = `Result: ${sum}`;
    }
    else{
        resultEle.innerHTML = "Please Enter valid number";
    }
}
divButton.onclick = function(){
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if(!isNaN(num1) && !isNaN(num2)){
        const sum = num1 / num2;
        resultEle.innerHTML = `Result: ${sum}`;
    }
    else{
        resultEle.innerHTML = "Please Enter valid number";
    }
}
modButton.onclick = function(){
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if(!isNaN(num1) && !isNaN(num2)){
        const sum = num1 % num2;
        resultEle.innerHTML = `Result: ${sum}`;
    }
    else{
        resultEle.innerHTML = "Please Enter valid number";
    }
}
powButton.onclick = function(){
    const numb1 = parseFloat(number1.value);
    const numb2 = parseFloat(number2.value);

    if(!isNaN(numb1) && !isNaN(numb2)){
        const sum = Math.pow(numb1, numb2);
        powResult.innerHTML = `Result: ${sum}`;
    }
    else{
        powResult.innerHTML = "Please Enter valid number";
    }
}
areaButton.onclick = function(){
    const rad = parseFloat(radius.value);

    if(!isNaN(rad)){
        const sum = Math.PI * (rad * rad)
        const num = sum.toFixed(2);
        resultAre.innerHTML = `Result: ${num}`;
    }
    else{
        resultAre.innerHTML = "Please Enter valid number";
    }
}