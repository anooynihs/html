//반복문 forEach와 for..of
const list1Li = document.querySelectorAll('.list1 li');
const contentsP = document.querySelectorAll('.contents p');
console.log(list1Li, contentsP);
//1. for..of 객체 요소 접근
for(let i of list1Li){
    // list1Li를 i에 넣어 개별접근하겠다
    console.log(i)
    i.style.backgroundColor = 'yellow';
    i.addEventListener('mouseover', ()=>i.style.backgroundColor = 'aqua')
    /* for..of를 이용한 DOM요소 접근 방법은 실제 요소 개수 상관없이 for의 변수를 이용하여 이벤트 및 속성, 메서드 등을 한번에 해결 가능하다. (for문 안에서 작성) */
}
console.log('====================================');
//2. forEach 객체 요소, 인덱스, 배열 접근 반복문
//list1Li.forEach(function(){})
list1Li.forEach((target, index, array)=>{
    console.log(target, index, array);
    /* 요소 종류가 2개 이상 + 인덱스 개수가 일치할 때 */
    target.addEventListener('mouseover', ()=>{
        target.style.borderTop = '2px dashed red';
        console.log(contentsP, index);
        contentsP[index].style.backgroundColor = 'lime';
    })
})
console.log('====================================');
/* 탭 제목과 내용 자바스크립트 알고리즘 정리 */
//1. 초기세팅
const tabT = document.querySelectorAll('.tab_title a');
const tabC = document.querySelectorAll('.tab_contents > div');
console.log(tabT, tabC);
//1-1. "tabC" 탭 내용 모두 숨기기 + 숨기기용 함수생성 "tabChide"
function tabChide(){
    for(let i of tabC) i.style.display = 'none';
}
tabChide(); //모두 숨기기 함수 호출
//1-2. 탭 내용 1번만 보이기
tabC[0].style.display = 'block';
//1-3. 탭 제목 클래스 초기화 + 함수생성 "tabTClsReset"
function tabTClsReset(){
    for(let i of tabT) i.classList.remove('active')
    }
tabTClsReset(); // 탭 제목 클래스 초기화 함수 호출
//1-4. 탭 제목 1번만 클래스 적용
tabT[0].classList.add('active');
tabT.forEach((target, index)=>{
    console.log(target, index);
    //2. "tabT' 탭 제목을 클릭했을 때 (1,2,3,4 모두 가능하게)
    target.addEventListener('click',()=>{
        //console.log(target);
        //2-1. 탭 제목 클래스 초기화
        tabTClsReset();
        //2-2. 탭 제목 클래스 적용(현재 이벤트 대상)
        target.classList.add('active');
        //2-3. 탭 내용 모두 숨기기
        tabChide();
        //2-4. 탭 내용 보이기(현재 이벤트 대상과 같은 인덱스 탭 내용)
        tabC[index].style.display = 'block';
    })
})
console.log('====================================');
console.log('========================== 중첩반복문');
//for(초기값; 조건식; 증감식) {for(초기값; 조건식; 증감식){}} 바깥쪽은 1단, 안쪽은 2단으로 부른다
//1단 for문이 한번 실행될 때 2단 for는 거짓이 될 때까지 모두 반복한다.
for(let i=1; i<3; i++) { /* 1, 2 출력되는 1단 반복문 */
    for(let j=7; j>10; j++) { /* 7, 8, 9 출력되는 2단 반복문 */
        console.log(`1단: ${i}, 2단: ${j}`);
    }
}

//구구단식
let danResult = '';
const dan99 = document.querySelector('.dan99');
console.log(dan99);
for(let i=2; i<=9; i++){/* 2~9단 for */
    for(let j=1; j<=9; j++) {
        danResult += `${i}x${j}=${i*j}<br>`
        //console.log(danResult);
    }
    danResult += '<hr>'
}
// for문의 모든 단이 끝난 마지막 위치에 결과값 작성!
dan99.innerHTML = danResult;

console.log('========================== 다중반복문 이용 태그 생성하기');
// ul>li*4 구조 생성
const testDiv = document.querySelector('.test');
const ul = document.createElement('ul');
console.log(testDiv, ul);

for(let i=0; i<4; i++){
    ul.innerHTML += `<li>list${i+1}</li>`;
}
testDiv.appendChild(ul);

console.log('========================== while() 반복문');
//주방장 입장
//주문이 완료될 때까지 '주문요청' 무한반복
/*
let orderFood = prompt('주문요청');
while(orderFood != 'y'){
    orderFood = prompt('주문요청');
}
*/
/*
let quiz1 = prompt('a는 인라인이다. 정답을 ox 중 하나로 입력하세요.');
while(quiz1 != 'x'){
    quiz1 = prompt('a는 인라인이다. 정답을 ox 중 하나로 입력하세요.');
}
alert('정답입니다!'); //while 종료 시 인식 위치
*/
//CSS 무한문제풀기
/*let quiz2 = prompt('CSS에서 header의 자식, 자손은 부모의 높이값을 인식하지 못하며 오로지 자신의 내용 기준으로만 인식한다.');
while(quiz2 != 'o'){
    quiz2 = prompt('CSS에서 header의 자식, 자손은 부모의 높이값을 인식하지 못하며 오로지 자신의 내용 기준으로만 인식한다.');
}
alert('정답입니다!')*/

console.log('========================== 반복문 흐름 제어 break, continue');
for (let i=1; i<=10; i++) {
    //if (i == 7) break;
    if (i == 7) continue;
    console.log(i);
}