//타이머함수
//일정시간마다 반복 실행하는 setInterval
//const 타이머변수 = setInterval(실행함수, 실행시간)
/*let num = 5;
const timerDiv = document.querySelector ('.timer');
const timer1 = setInterval(function(){
    //console.log('timer'+num);
    timerDiv.textContent = num;
    num--;
    location.href = './index.html';
    if(num === 0) location.href = './index.html';
}, 1000)*/
console.log('====================================');
//애니메이션 진행시간에 맞춰 1초씩 증가하는 타이머
let count = 0;
const boxAni = document.querySelector('.box');
const boxTimer = document.querySelector('.box_timer');
let timer2 = setInterval(timerFunc, 1000)
function timerFunc (){
    count++;
    boxTimer.textContent = `진행시간 : ${count}초`;
}

//play 버튼 클릭 시 진행시간, 애니메이션 다시 재생(running)
const playBtn = document.querySelector('#play');
//stop 버튼 클릭 시 진행시간, 애니메이션 모두 정지(paused)
const stopBtn = document.querySelector('#stop');
stopBtn.addEventListener('click',()=>{
    clearInterval(timer2)
    boxAni.style.animationPlayState = 'paused';
})
playBtn.addEventListener('click',()=>{
    boxAni.style.animationPlayState = 'running';
    timer2 = setInterval(timerFunc, 1000)
})
//한 글자씩 작성하는 자바스크립트
const txt = 'Portfolio 2025';
let i = 0; //글자 인덱스 인식 변수
const txtSpan = document.querySelector('.container .txt');
let timer3 = setInterval(write, 200);
function write(){
    if(i <= txt.length){
        txtSpan.innerHTML += txt.charAt(i);
        i++;
        console.log(i, txt.charAt(i));
    }
}
write() //함수호출

//한 글자씩 작성하는 자바스크립트 연습
const txt2 = 'Portfolio 2025';
let j = 0;
const txtSpan2 = document.querySelector('.container2 .txt');
let timer4 = setInterval(write2, 200);
function write2(){
    if(j <= txt2.length){
        if(j==9) txtSpan2.innerHTML += '<br>';
        txtSpan2.innerHTML += txt2.charAt(j);
        j++;
    }
}
write2()
console.log(txt2, j, txtSpan2, timer4);