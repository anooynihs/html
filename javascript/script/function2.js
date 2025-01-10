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
//danBtn.addEventListener('click', function(){ dan99(Number(danInput.value)); }) 
danBtn.addEventListener('click', ()=>dan99(Number(danInput.value))) 
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
//================================== 화살표 함수
//매개변수 없는 화살표 함수
const greet = () => console.log('hello');
const greet2 = () => {
    let a = 10;
    return console.log(a+10);
}

greet();
greet2();

//매개변수 있는 화살표 함수
//일반함수인 경우
function func1(a){
    return a+100;
}
console.log(func1(10));
//화살표함수인 경우
const func2 = (a) => a+100;
console.log(func2(10));
// =============================
// DOM, Node 관계 속성 공부
const nav_a1 = document.querySelector('nav a');
const nav_a2 = document.querySelectorAll('nav a');
const header = document.querySelector('header');
console.log(nav_a1, nav_a2);
console.log(nav_a1.parentElement); //DOM 요소 nav
console.log(nav_a2[0].parentElement);
console.log(nav_a2[1].parentElement); //요소 노드 nav(공백, 텍스트 포함 검사)
console.log(header);
/*nav_a1.parentElement.style = 'background:yellow';
nav_a2[2].parentNode.style = 'padding:20px';*/
//style을 같은 DOM요소에 2개 이상 적용하고 싶은 경우 CSS속성명을 자바스크립트 키워드 방식으로 Camle표기법 작성
nav_a1.parentElement.style.backgroundColor = 'aqua';
nav_a1.parentElement.style.padding = '20px';
nav_a1.addEventListener('mouseover',()=>nav_a1.parentElement.style.borderBottom = '2px solid #000');
nav_a2[3].addEventListener('mouseover', ()=>nav_a2[3].parentNode.style.backgroundColor='tomato');
nav_a2[3].addEventListener('mouseout',()=>nav_a2[3].parentNode.style.background='none');

//자식노드 childNodes, children
console.log(nav_a1.childNodes);
console.log(nav_a1.children);
console.log(header.childNodes);
console.log(header.children); //h1, nav
console.log(header.children[0]); //h1
console.log(header.children[0].innerHTML); //<a href="#">logo</a>
console.log(header.children[0].innerText); //logo
console.log(header.children[1]); //nav
console.log(header.children[1].innerHTML);
console.log(header.children[1].innerText);
//header에 마우스 올렸을 때 자식h1의 "logo" -> "로고" 글자로 변경하기
header.addEventListener('mouseover', ()=>{
    //header.children[0].children[0].innerText ='로고'
    header.children[0].children[0].innerHTML ='<em>로고</em>'
});
console.log('=========== childElementCount 자식노드개수')
console.log(header.childElementCount); //2

console.log(header.firstChild); //text=공백
console.log(header.firstElementChild); //h1
console.log(header.lastChild); //text=공백
console.log(header.lastElementChild); //nav

console.log('========================= next, previous 관계속성 공부')
nav_a2[1];
console.log(nav_a2[1].nextElementSibling);
console.log(nav_a2[1].previousElementSibling);

console.log('=============== childElementCount 연습 (쇼핑몰 장바구니 개수)')
//1. "cart_num" 장바구니 초기값 0
//2. "cart_item" 사용자가 장바구니에 물건 2개를 담았다.
//3. "cart_num_all" 2번의 물건 개수에 따라 장바구니 페이지 '전체 상품 개수' 출력
let cart_num = 0;
const cart_item = document.querySelector('.cart_contents');
const cart_num_all = document.querySelector('.all_item_num');
cart_num_all.innerText = cart_num; //초기값 0
//사용자가 물건 2개를 담았다 (상황 2)
cart_num = cart_item.childElementCount;
cart_num_all.innerText = cart_item.childElementCount;
console.log(cart_num);
console.log(cart_item);
console.log(cart_num_all);
console.log(cart_item.childElementCount);