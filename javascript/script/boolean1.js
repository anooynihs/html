//1. 일치(동등)연산자 : 좌우 값이 같은가? 같으면 참, 다르면 거짓
console.log('4' == 4); //true
console.log('4' === 4); //flase //데이터타입까지 확인해 주는 엄격비교연산자(===)를 많이 사용한다.
console.log('4' === '4'); //true 데이터타입까지 같아야 참!
//2. 부등(불일치)연산자 : 좌우 값이 다른가? 다르면 참, 같으면 거짓
console.log(10 != '10'); //false
console.log(10 !== '10'); //true
console.log(10 !== 10) //false
//3. 대소 비교 연산자 : 작다, 크다, 크거나 같다, 작거나 같다
let x = 5;
let y = 7;
console.log(x < y); //true x가 y보다 작은가
console.log(x > y); //false x가 y보다 큰가
console.log(x <= y); //true x가 y보다 작거나 같은가
console.log(x >= y); //false x가 y보다 크거나 같은가
console.log(x === y); //false 데이터타입은 같지만 값이 다름
console.log(5 === 5); //true 데이터타입과 값이 같음
console.log('====================================================')
/* 논리연산자 AND(&&) OR(||) NOT(!) */
function print(value){
    const message = value || 'web';
    return console.log(message);
}
//(value)는 매개변수, 매개변수가 있다는 것은 함수를 호출하겠다는 뜻?
print(1);
print(0);
print([]);

function bool(value){
    const untitle = !'value';
    return console.log(untitle);
}
bool(1); //참->거짓
bool(''); //거짓->참
console.log('========================================')
let a = 5;
let b = a+10;
let total = a > b ? 'a는 b보다 크다(참)' : 'a는 b보다 작다(거짓)';
console.log(total);

//나이에 따라 성인/미성년자를 구분하는 JS
//let age = prompt('몇살인가요?');
//사용자가 대답한 값에 따라 '성인', '미성년자' console 출력, 18세 이상 기준
//let result = age >= 18 ? '성인' : '미성년자';
//console.log(result);
console.log('========================================')
//1. "textarea"사용자 리뷰 작성
//2. "reviewBtn" 리뷰 등록하기 버튼 클릭
//3. "result" (리뷰 100자 이상인 경우) '등록되었습니다.' 메시지 팝업출력
//4. (리뷰 100자 미만인 경우) '100자 이상 작성 후 등록해 주세요.' 메시지 팝업출력
const textarea = document.querySelector('#review');
const reviewBtn = document.querySelector('#reviewBtn');
let result = '';
console.log(textarea, reviewBtn);
reviewBtn.addEventListener('click', ()=>{
    //textarea 글자 수 인식 콘솔로그
    console.log(textarea.value.length);
    result = textarea.value.length >= 100 ? '등록되었습니다.':'100자 이상 작성 후 등록해 주세요.';
    alert(result);
})
console.log('========================================')
//1. 초기값 : 개당 12500원, 재고 10개 제한
let price = 12500; //개당 가격
let stock = 10; //재고수량
let number = 1; //구매수량
let resultNum; //삼항조건식 결과 담는 변수
const inputNum = document.querySelector('#num');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
let priceNode = document.querySelector('.price span');

inputNum.value = number;
priceNode.innerText = price;
/* innerText, textContent(속도 더 빠름) */ 

plusBtn.addEventListener('click',()=>{
    //조건 결과를 담는 변수 = 조건식 ? 조건 참 결과 : 조건 거짓 결과;
    //2. 사용자가 +버튼 클릭 시 구매수량이 1씩 증가한다
    //3. 증가수량에 따라 가격이 증가된다
    //4. 구입수량이 10개 이상이면 +버튼 클릭 시 '최대구매수량입니다' 출력
    inputNum.value = number;
    resultNum = number >= 10 ? alert('최대구매수량입니다.') : number++;
    priceNode.innerText = (price*number).toLocaleString('ko-kr');
})
minusBtn.addEventListener('click',()=>{
    //5. 구입수량이 1개 미만이면 -버튼 클릭 시 '최소구매수량입니다' 출력
    resultNum = number <= 1 ? alert('최대구매수량입니다.') : number--;
    priceNode.innerText = (price*number).toLocaleString('ko-kr');
})

console.log('========================================')
// 조건 if문 연습
let box1 = 30;
let box2 = 20;
//if(조건식){조건식 결과가 참일 때 실행결과}else{조건식 결과가 거짓일 때 실행}
if(box1 < box2){console.log('참');}else{console.log('거짓')};
if(box1 === box2){console.log('참');}else{console.log('거짓')};

//상황1. 관리자만 접속 가능한 페이지
//관리자 ID : admin
//1."userId" 관리자 아이디를 입력한다.
//2."loginBtn" 버튼을 누른다.
//3. 아이디가 맞을 경우 '관리자님 어서오세요.' 안내창이 뜬다.
const user_id = document.querySelector('#user_id');
const loginBtn = document.querySelector('#loginBtn');
loginBtn.addEventListener('click',()=>{
    console.log(user_id.value === 'admin')
    if(user_id.value === 'admin'){
        alert('관리자님 어서오세요');
    }
})
console.log('========================================')
//나머지 연산자 %
console.log(2%4);
console.log(4%2);
//자바스크립트 나머지 연산자 0 또는 1 홀수 짝수 구분 목적
//true+5=6 //true는 숫자데이터와 붙으면 '1'로 계산된다
//false+5=5 //false는 숫자데이터와 붙으면 '0'으로 계산된다
//falsy 거짓으로 인식하는 숫자값 0
//truthy 참으로 인식하는 숫자값은 0이 아닌 모든 값 (대표 1)
console.log('========================================')
//심리테스트 결과 함수
let test_num = document.querySelector('#test_num');
const testBtn = document.querySelector('#testBtn');
const testResult = document.querySelector('.testResult');
console.log(test_num, testBtn, testResult);

testBtn.addEventListener('click', ()=>{
    //홀수
    if(test_num.value%2 == 1){testResult.innerHTML = testFunc(test_num.value, '홀');}
    //짝수
    if(test_num.value%2 == 0){testResult.innerHTML = testFunc(test_num.value, '짝');}
    //두 가지 조건밖에 없기 때문에 else 사용 가능
    //if(test_num.value%2 == 1){testResult.innerHTML = testFunc(test_num.value, '홀');}else{testResult.innerHTML = testFunc(test_num.value, '짝');}
})

function testFunc(data1, data2){
    let txt = `당신이 선택한 숫자 ${data1}(은)는 ${data2}수입니다!`;
    txt += `${data2}수를 좋아하는 사람은 다정하고 따뜻한 성격이 특징입니다.`
    return txt;
}