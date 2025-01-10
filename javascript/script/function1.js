//======================= 함수스코프 지역변수와 전역변수
//함수 외부(전역스코프 위치)
let a;
let b = 20;
let c = 30;
//함수 내부(지역스코프 위치)
//function 함수명(매개변수){반복 알고리즘;}
function test(){
    //함수 내부
    a = 10;
    console.log(a);
    console.log(a+b);
}
//선언한 함수를 사용하고 싶다면 함수 외부에서 함수를 호출해야한다!
//호출방법 : 함수명();
//console.log(a+b); //에러, let a는 함수내부에서만 사용 가능하기 때문
console.log(a+b); //a를 함수 외부에서 만들고 값은 내부에서 줬을 때는 결과값이 나옴
test(); //전역스코프에서 함수 결과를 보여주기 위한 함수 호출
//======================= 함수스코프 연습2
let x;
let y;
//호출 순서를 위쪽에서 해도 결과값은 변동X
func1();
func2();
function func1(){
    x=1;
    y=5;
    console.log(x+y);
}
function func2(){
    //func1(); //함수2 안에 함수1 호출식이 존재한다면 함수2 호출할 때 함수1이 함께 출력됨
    let z = 10;
    console.log(x+y+z);
}
//1-1.변수 생성
const btn1 = document.getElementById('btn1');
//1-2.변수 생성 확인
console.log(btn1);
//2.변수 이벤트 생성 : 이벤트대상.addEventListener('이벤트종류', 이벤트 만족 시 실행함수);
//이벤트대상? 이벤트종류를 적용하고 싶은 대상
//이벤트종류? 태그의 인라인script로 적용 시 on을 붙이고, script에서 바로 적용 시 on없이 이벤트만 작성
btn1.addEventListener('click', function(){
    alert('안녕하세요!');
});
const btn2 = document.querySelector('#btn2');
console.log(btn2);
btn2.addEventListener('click', function(){
    //1+1 답을 입력받을 수 있는 질문창 제공 및 답변 받기
    let answer = prompt('1+1은?');
    //위에서 받은 값을 팝업창으로 다시 띄우기
    alert(answer);
})
//========================= 수량 증감버튼만들기
//1. 제어 노드 변수 생성하기
const num = document.querySelector('#num');
const numPlus = document.querySelector('#numPlus');
const numMinus = document.querySelector('#numMinus');
console.log(num, numPlus, numMinus);
//2. 위 1에서 생성한 변수 중 이벤트대상에 해당되는 것 작성하기
numPlus.addEventListener('click', function(){
    //3. 변경대상의 객체, 속성을 잘 구분하여 문법에 맞게 작성할 것!
    //기존 수량의 값에 1을 더해서 수량 칸에 대입하기
    num.value = Number(num.value)+1;
})
numMinus.addEventListener('click', function(){
    num.value = num.value-1;
    //왜 -1은 Number(num.value)로 안 쓸까? +를 제외한 연산자들은 모두 앞에 문자를 숫자로 인식하기 때문
})
console.log(typeof(num.value)); //데이터타입 확인하기

//목표1. input 2개 무시하고 prompt이용 월급, 보너스를 입력하게 하고 총 수입 계산기 버튼을 클릭하면 prompt에 입력한 월급+보너스 결과 출력하기
//let price1 = prompt('월급을 입력하세요.');
//let price2 = prompt('보너스를 입력하세요.');
//목표2. 입력창에 월급, 보너스 입력하고 버튼 클릭했을 때 결과 출력하기
let price1 = document.querySelector('#price1');
let price2 = document.querySelector('#price2');
let total = document.querySelector('#total');
console.log(price1, price2, total);
total.addEventListener('click', function(){
    //let total_price = Number(price1)+Number(price2); //목표1 결과값 얻기
    let total_price = Number(price1.value)+Number(price2.value);
    console.log(total_price);
    //console.log(price.value);
    //console.log(typeof(price1));
    //console.log(typeof(price1.value));
})