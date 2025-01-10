// --------------------------------- 변수 복습
var a = 2025; //숫자데이터
var b = "자바스크립트"; //문자데이터
var c; //undefined = 값이 정의되지 않음(대입된 값이 존재하지 않음)
console.log(a, b, c);
console.log(a+1); //결과=2026 >> 숫자변수+숫자데이터
console.log(b+' 공부'); //문자변수+문자데이터 = 문자데이터
console.log(a+c); //숫자변수+정의되지 않은 변수 = NaN(Not a Number)
console.log(a+b); //숫자변수+문자변수 = 문자데이터 (문자변수와 연결하면 숫자변수도 문자가 됨)
c = 1; //자바스크립트는 절차순서를 기준으로 하기 때문에 위에 값에는 적용되지 않음, 아래에 작성되는 것부터 적용됨
console.log(a+c); //숫자변수+숫자변수 = 숫자데이터
console.log(a-c); //숫자변수-숫자변수 = 숫자데이터
console.log('------------------');
//함수 생성 문법 : function 함수명(){실행식;}
function abcPlus(){
    console.log(a+b+c);
}
//method() 공부
/* var d = window.prompt('1+1은?'); //window=객체, prompt()=method
console.log(d); */ //여러 줄 한번에 주석걸기 : alt shift a
//prompt와 function 함수 활용
//1. 변수 생성 age
//2. 함수 생성 ageFunc
//3. 버튼 클릭 시 함수를 호출 onclick="ageFunc()"
var age; //undefined 나이를 정의하지 않은 상태 시작
function ageFunc(){
    age = window.prompt('올해 몇살이세요?');
    console.log(age+'살');
    console.log(typeof age); //prompt는 무조건 문자데이터(string)로 인식
}
//<button type="button" onclick="typeFunc()">MBTI랑 혈액형이 뭐예요?</button>
/* var type;
function typeFunc(){
    type = window.prompt('MBTI가 뭐예요?');
    console.log(type);
    type = window.prompt('혈액형이 뭐예요?');
    console.log(type+'형');
} */
var mbti;
var bloodtype;
function mbtibloodType(){
    mbti = window.prompt("MBTI가 뭐예요?");
    bloodtype = window.prompt('혈액형이 뭐예요?');
    console.log('MBTI는', mbti, '혈액형은', bloodtype, '형 입니다.')
    console.log('mbti의 데이터타입은', typeof mbti);
    console.log(typeof bloodtype);
}
//변수 선언 var, let, const
var a; //상단에 a가 존재하는 상태로 중복 a를 만듦
console.log(a); //중복 문제를 발견하지 못하고 출력됨
/* let b; */
console.log(b);
//상수는 선언과 동시에 변하지 않는 값을 바로 대입해야 한다.
const e = 2024;
console.log(e);
console.log('----------------------------------------');
console.log(typeof a); //a 변수의 데이터타입 확인 >> number(숫자)
console.log(typeof b); //b 변수의 데이터타입 확인 >> string(문자)
console.log(typeof(c)); //c 데이터타입 확인
console.log(typeof(a+b)); //a와 b변수를 더한 결과 데이터타입은? >> string
console.log(typeof(a+c)); //a와 c변수를 더한 결과 데이터타입은? >> number
console.log('--------------------특수 데이터 연습--------------------');
let f;
let g;
console.log(typeof(f, g)); //undefined
f = '';
console.log(typeof f); //string
f = '아이디를 입력하세요';
console.log(typeof f); //string
f = null; //f변수의 값을 제거
//문자데이터를 초기화하는 경우는 null보다는 빈문자데이터('')를 더 많이 사용한다.
console.log(typeof f); //object 객체
g = 100;
console.log (typeof g); //number
g = null; //숫자데이터 특징이 사라지고 object만 남음
console.log(typeof g); //object
g= 0; //숫자데이터는 유지한 상태로 0으로 초기화 된다.
console.log(typeof g); //number
console.log('--------------------템플릿문자열 연습--------------------');
let coffee = 1500;
let lunch = 6000;
let total = coffee+lunch;
//오늘 총 지출액은 ?원 입니다.
console.log(`오늘 총 지출액은 ${total}원 입니다.`)
//2단 구구단 출력하기 ex) 2x1=2
/* let dan = 2;
console.log(`2x1=2`);
console.log(`2x2=4`);
console.log(`${dan}x1=${dan*1}`);
console.log(`${dan}x2=${dan*2}`);
console.log(`${dan}x3=${dan*3}`);
console.log(`${dan}x4=${dan*4}`);
console.log(`${dan}x5=${dan*5}`); */
//dan99
let dan = 0;
function dan99(){
    dan = window.prompt('구구단 몇 단이 궁금해요?')
    console.log(`${dan}x1=${dan*1}`)
    console.log(`${dan}x2=${dan*2}`)
    console.log(`${dan}x3=${dan*3}`)
    console.log(`${dan}x4=${dan*4}`)
    console.log(`${dan}x5=${dan*5}`)
    console.log(`${dan}x6=${dan*6}`)
    console.log(`${dan}x7=${dan*7}`)
    console.log(`${dan}x8=${dan*8}`)
    console.log(`${dan}x9=${dan*9}`)
}