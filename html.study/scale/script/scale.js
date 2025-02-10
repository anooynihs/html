let height = document.querySelector('#user_height');
let weight = document.querySelector('#user_weight');
const btn = document.querySelector('.btn');
let normal = document.querySelector('.normal_weight');
let weightStatus = document.querySelector('.weight_result');
console.log(height, weight, normal, weightStatus, btn);

btn.addEventListener('click', resultFunc);

function resultFunc(){
    let normalResult = (Number(height.value) - 100) * 0.9;
    normal.innerHTML = normalResult;
    let statusResult = Number(weight.value) - Number(normal.value);
    weightStatus.innerHTML = statusResult;
    console.log(normalResult);
};