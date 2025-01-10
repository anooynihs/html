// 연결연산자와 더하기 연산자
let data1 = 'hello'+'js'; //문자+문자 (연결연산자)
let data2 = '1'+2; //문자+숫자 (연결연산자)
let data3 = (1+1)+'number'; //(숫자+숫자)+문자 더하기연산자, 연결연산자
let data4 = 'num'+(2-2)+'ber';//문자+(숫자-숫자)+문자 
let data5 = 4;//재료 변수
let data6 = 2;//재료 변수
let result = data5+data6;//재료 이용 결과 담는 변수
//나누기와 나머지 연산자
let data7 = 10;
let data8 = 3;
let result2 = data7 / data8;
let data9 = 5;
let data10 = data9 + 10;
let result3 = data10;

console.log(result3);
console.log(result2); //3.33333
result2 = data7 % data8;
console.log(result2); //1

console.log(result);//더하기 결과 출력
result = data5 - data6;
console.log(result);//2
result = data5 * data6;
console.log(result);//8
result = data5 / data6;
console.log(result);//2
result = data5 % data6;
console.log(result);//0

console.log(data1, typeof data1);//변수값확인, 변수데이터종류확인
console.log(data2, typeof data2);//12 string
console.log(data3, typeof data3);//2number string
console.log(data4, typeof data4);//num0ber string

//=================이항 연산자 활용 더하기만 되는 계산기 만들기
//1. "firstInput" 첫 번째 값을 담는 input / 값 인식속성 value
//2. "secondInput" 두 번째 값을 담는 input / 값 인식속성 value
//3. "btn" 위 1, 2번을 인식하는 결정 버튼 / addEventListener - click
//4. "total" 3번의 버튼 조건 달성 시 1, 2번 값을 담는 결과 변수 / 더하기(+)
//*조건 달성 시 = function 안에 작성
//5. "totalP" 4번의 결과변수를 p에 출력 명령 / innerHTML 속성
const firstInput = document.querySelector('#val1');
const secondInput = document.querySelector('#val2');
const btn = document.querySelector('#btn');
const totalP = document.querySelector('#result');
//console.log(firstInput, secondInput, btn, totalP);
//console.log(total);

btn.addEventListener('click', inputFunc);

function inputFunc(){
    let total = Number(firstInput.value) + Number(secondInput.value);
    console.log(typeof(firstInput.value));
    totalP.innerHTML = total;
};

//========================== 증감연산자 공부
let x = 5;
//let y = x++; //x++ 증가연산자(1씩 증가), 후위연산자
let y = ++x; //++x 전위연산자
console.log(x, y); //6, 6
y = x++;
console.log(x, y); //7, 6
x = ++y;
console.log(x, y); //7, 7
x++;
console.log(x); //8
//========================== 증감연산자 문제
let a = 10;
let b = 20;
let c = 30;
let d = 40;
console.log(a, b, c, d);
// a, b, c, d의 값은? 정답 : 10, 20, 30, 40

a++; //11
b--; //19
c++; //31
d--; //39
console.log(a, b, c, d);
// a, b, c, d의 값은? 정답 : 11, 19, 31, 39

a = ++b; // 1+b(19)=20 -> a=20, b=20
b = a++; // a(20)+1=21 -> a=21, b=20
console.log(a, b, c, d);
// a, b, c, d의 값은? 정답 : 21, 20, 31, 39

c = a+b; // c = a(21)+b(20) = 41
d = ++c; // d = 1+c(40) -> c=42, d=42
console.log(a, b, c, d);
// a, b, c, d의 값은? 정답 : 21, 20, 42, 42

a = ++c+10;
b = --d+1;
console.log(a, b, c, d);
// a, b, c, d의 값은? 정답 : 53, 42, 43, 41

//========================== 복합대입 연산자
let number = 10;
//number = number + 5;
number += 5;
console.log(number); //15
//number = number - 5;
number -= 5;
console.log(number); //10
//number = number * 5;
number *= 5;
console.log(number); //50
//number = number / 5;
number /= 5;
console.log(number); //10
//number = number % 5;
number %= 5;
console.log(number); // 0

//1. 교통비 "transfer" / 값 속성인식 value 필요
//2. 식비 "food" / 값 속성인식 value 필요
//3. 커피 "coffee" / 값 속성인식 value 필요
//4. "totalBtn" 1, 2, 3번 총 지출비 확인 버튼 / addEventListener - click 필요
//5. "totalPrice" 1, 2, 3번 더하기
//6. "todayResult" 4번 버튼 눌렀을 때 나오는 결과값 span 출력 명령 / innerHTML 속성 필요
let transfer = document.querySelector('#money1');
let food = document.querySelector('#money2');
let coffee = document.querySelector('#money3');
let totalBtn = document.querySelector('#totalBtn');
let todayResult = document.querySelector('.todayResult span');
totalBtn.addEventListener('click', todayFunc);

function todayFunc(){
    let totalprice = Number(transfer.value) + Number(food.value) + Number(coffee.value);
    todayResult.innerHTML = totalprice.toLocaleString('ko-kr');
}

// ================= 복합대입 연산자 연습 (은행 입금하기, 총 잔액표시)
//입금액 bankInput : 입금액 입력 시 해당 값 인식 value
//총 잔액표시 bankTotal : total 잔액변수 출력
//입금버튼 depositBtn : 이벤트
//총액 데이터 total : 초기값 0
//입금액 이자 1000원 deposit 
//1. 총 잔액 표시 total
//2. 입금액 입력 bankInput
//3. 입금하기 버튼 클릭 depositBtn
//4. 입금액 인식하게 이자가 더해짐 deposit 
//5. 총 잔액에 포함됨 total
//6. 총 잔액에 표시됨 bankTotal
let total = 0;
const bankInput = document.querySelector('#bank_input');
const bankTotal = document.querySelector('#bank_total');
const depositBtn = document.querySelector('#deposit_btn');
depositBtn.addEventListener('click', function(){
    bankFunc(Number(bankInput.value) * 0.1); //이자는 입금액의 10%
})

// function bankFunc(){
//     let deposit = Number(bankInput.value) + 1000;
//     total += deposit;
//     //총 잔액 표시된 후 입금액 작성란 초기화
//     bankInput.value = ''; //또는 0;
//     bankTotal.value = total.toLocaleString('ko-kr');
// };
//이자 금액이 달라지는 경우
function bankFunc(bankDeposit){
    let deposit = Number(bankInput.value) + bankDeposit;
    total += deposit;
    //총 잔액 표시된 후 입금액 작성란 초기화
    bankInput.value = ''; //또는 0;
    bankTotal.value = total.toLocaleString('ko-kr');
};

//==================================== 함수의 변경되는 데이터 매개변수 공부
//function 함수명(매개변수){함수실행값} //함수선언식(선언만으로 결과는 출력되지 않음)
//함수명(매개변수); //함수호출식(선언 후 호출은 위, 아래 어디든 작성가능)

//키오스크는 아메리카노만 주문 가능, 수량도 무조건 1잔만 주문 가능
//출력문구예시) 아메리카노 1잔 나왔습니다.
//매개변수가 없는 함수 (=고정되어있다)
//function kiosk(){func_result.innerHTML = '아메리카노 1잔 나왔습니다.';} //
//매개변수가 있는 함수(수량만 변경 가능)
/* function kiosk(num){
     func_result.innerHTML = `아메리카노 ${num}잔 나왔습니다.`;
}*/
//매개변수가 2개 있는  함수(메뉴, 수량 변경 가능)
function kiosk(menu, num){
    func_result.innerHTML = `${menu} ${num}잔 나왔습니다.` 
}
const func_btn = document.querySelector('#func_btn');
const func_result = document.querySelector('.func_result');
let user_menu = '카페라떼';
let user_num = 5;
//func_btn.addEventListener('click', kiosk)
func_btn.addEventListener('click', function(){kiosk(user_menu, user_num);});

//============================== 함수의 return(외부반환값) 공부
//function 함수명(매개변수){함수실행값} //함수선언식(선언만으로 결과는 출력되지 않음)
//함수명(매개변수); //함수호출식(선언 후 호출은 위, 아래 어디든 작성가능)
function func1(x, y){
    //console.log(x + y);
    console.log('test');
    return x+y; //실행 메소드를 포함하지 않고 외부에서 필요한 결과값만 반환한다.
    //return은 맨 마지막에 써야 console.log가 먹힌다.
}
//func1(1, 2);
console.log(func1(1, 2)); //실행식을 함수호출값을 가진 채로 작성한다.
//alert(func1(2, 3));

let num1 = 10;
let num2 = 20;
function func2(x, y){
    num1 += num2;
    num2 = x+y;
    num1 += num2;
    return console.log(num1); //return을 어떤 목적으로 쓸거냐에 따라 호출 위치가 달라질 수 있다.
}
//console.log(func2(2, 4)); //36
func2(2, 4); //return에 호출했을 경우, 바깥에는 호출식만 넣어주면 된다.

//============================== 구구단만들기
//사용자가 2를 입력하면 2x1 ~ 2x9까지 구구단 결과가 p태그에 출력되는 결과
//사용자가 2를 입력하면 5x1 ~ 5x9까지 구구단 결과가 p태그에 출력되는 결과
const danInput = document.querySelector('#dan');
const danBtn = document.querySelector('#danBtn');
const danResult = document.querySelector('.dan99result');
function dan99(dan){
    danResult.innerHTML = `${dan}*1=${dan*1}<br>`;
    danResult.innerHTML += `${dan}*2=${dan*2}<br>`;
    danResult.innerHTML += `${dan}*3=${dan*3}<br>`;
}
danBtn.addEventListener('click', function(){dan99(Number(danInput.value));})