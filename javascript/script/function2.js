//250110 구구단 함수 복습
//1. "danInput" input요소에 사용자가 원하는 구구단 입력 후
//2. "danBtn" button요소 클릭 시
//3. "dan99" 2번 조건 달성 시 호출할 수 있는 구구단 함수 생성
//3-1. (함수 안) 함수 실행 시마다 위 1번의 입력값을 받기 위해 '매개변수' 생성 // 'dan'(let dan = 이랑 똑같음)
//3-2. (함수 안) 매개변수를 이용하여 구구단 식 제작
//3-3. (함수 안) 출력하기 위한 "danResult" 변수 생성
//3-4. (함수 안) 위 변수에 대입 후 완성
const danInput = document.querySelector('#dan');
const danBtn = document.querySelector('#danBtn');
const danResult = document.querySelector('.danResult');
console.log(danInput, danBtn, danResult); //error, undefined, null 모두 확인

//dan99 괄호 안에 쓰는 값은 매개변수 dan의 값 (let dan = 7이라면 '7'이 들어가는 것!)
danBtn.addEventListener('click', function(){ dan99(Number(danInput.value)); }) 
function dan99(dan){
    let total = '';
    total = `${dan}x1=${dan*1}<br>`
    total += `${dan}x2=${dan*2}<br>`
    total += `${dan}x3=${dan*3}<br>`
    total += `${dan}x4=${dan*4}<br>`
    total += `${dan}x5=${dan*5}<br>`
    total += `${dan}x6=${dan*6}<br>`
    total += `${dan}x7=${dan*7}<br>`
    total += `${dan}x8=${dan*8}<br>`
    total += `${dan}x9=${dan*9}`
    return danResult.innerHTML = total;
    //첫 번째 값에는 복합대입 쓰지 않는 이유? 이전 데이터를 지우고 새로 실행되게 하기 위해
    /* danResult.innerHTML = `${dan}x1=${dan*1}<br>`
    danResult.innerHTML += `${dan}x2=${dan*2}<br>`
    danResult.innerHTML += `${dan}x3=${dan*3}<br>`
    danResult.innerHTML += `${dan}x4=${dan*4}<br>`
    danResult.innerHTML += `${dan}x5=${dan*5}<br>`
    danResult.innerHTML += `${dan}x6=${dan*6}<br>`
    danResult.innerHTML += `${dan}x7=${dan*7}<br>`
    danResult.innerHTML += `${dan}x8=${dan*8}<br>`
    return danResult.innerHTML += `${dan}x9=${dan*9}` */
}