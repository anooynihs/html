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