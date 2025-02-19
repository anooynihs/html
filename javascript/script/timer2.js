//일정시간 후 한번 실행하고 끝나는 setTimeout 함수
//const 변수명 = setTimeout(실행함수, 시간)
//setTimeout(실행함수, 시간)
//setTimeout 내 함수를 별도로 생성하고 타이머 안에서 호출식으로도 많이 이용
const timer1 = setTimeout(function(){
    console.log('한번 실행하는 문구');
}, 2000)
const timer2 = setTimeout(test, 1000)
function test(){
    //return alert('한번 실행하는 경고창')
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', ()=>{
    clearTimeout(timer2)
    console.log('timer2 정지')
    clearTimeout(timer1)
    console.log('timer1 정지')
})
console.log('====================================')
//무한으로 올라가는 공지사항
//최종목표 : 공지1->2->3->4->공지1->2->3->4->무한반복

//목표1. 공지1->2->3->4
//1. 어느 방향으로 이동하는지, 그 방향에 따른 가로-세로 크기는 무엇인지?
//아래->위 이동 == top or translateY, 크기 == 세로크기 
//좌->우 이동 == left or translateX, 크기 == 가로크기 
//2. 가로or세로 크기 결정됐다면 => 이동하는 이동요소 개수가 몇 개인지? 인덱스 확인!
//세로 이동? 세로크기*인덱스 계산
//3.변수 준비
//"newsList" 공지1,2,3,4를 모두 가지고 움직이는 대상 ul
//"newsItems" 개별요소 파악을 위한 li
//"itemsHeight" 개별요소 크기
//"currentIndex" 인덱스
const newsList = document.querySelector('.list');
const newsItems = document.querySelectorAll('.list li');
const itemsHeight = newsItems[0].offsetHeight; //40;
let currentIndex = 0;
console.log(newsList, newsItems, itemsHeight, currentIndex);

const newsTimer = setInterval(()=>{
    currentIndex++;
    newsList.style.transform = `translateY(-${itemsHeight*currentIndex}px)`;
    newsList.style.transition = 'transform 0.5s ease';
    //모든 list가 이동했을 때 초기화하는 조건문if과 setTimeout
    if(currentIndex == newsItems.length){
        //console.log('초기화 조건문 실행');
        setTimeout(()=>{
            currentIndex = 0;
            newsList.style.transform = `translateY(0)`;
            newsList.style.transition = 'none';
        }, 500) //transition 진행시간과 동일하게 작성
    }
}, 1000)
/* 무한스크롤 동작을 위한 원본 공지사항 복제 후 리스트 끝에 추가하기 */
for(let i of newsItems){
    const clone = i.cloneNode(true); //괄호 안에 true => 자식, 자손까지 복제해서 i에 넣음
    newsList.appendChild(clone);
}

//우->좌 이동하기
const notiC = document.querySelector('.notice');
const notiL = document.querySelectorAll('.notice li');
const liWidth = notiL[0].offsetWidth;
let index = 0;
console.log(notiC, notiL, liWidth, index);
//일정시간 간격으로 반복 진행하기
const notiTimer = setInterval(()=>{
    index++;
    notiC.style.transform = `translateX(-${liWidth*index}px)`;
    notiC.style.transition = 'transform 0.5s ease';
    //모든 list 이동 후 초기화
    if(index == notiL.length){
        setTimeout(()=>{
            index = 0;
            notiC.style.transform = 'translateX(0)';
            notiC.style.transition = 'none';
        }, 500)
    }
}, 1000)
//무한스크롤 동작 위한 복제 반복문
for(let i of notiL){
    const clone = i.cloneNode(true);
    notiC.appendChild(clone);
}