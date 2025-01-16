/* QR코드 메시지팝업 X 닫기 기능 */
//1. "messageX" X 클릭했을 때
//2. "messagePopup" QR코드 메시지팝업 숨기기
const messageX = document.querySelector('.title .message .close');
const messagePopup = document.querySelector('.title .message');
console.log(messageX, messagePopup);
messageX.addEventListener('click',()=>{
    //messagePopup.style.display = 'none';
    messageX.parentElement.style.display = 'none';
})

//로그인 탭&내용 JS
//0. 초기세팅 : ID로그인 탭 활성화 디자인, 일회용로그인&QR코드 탭 내용 숨기기, ID로그인 탭 내용만 보이기
const loginTitle = document.querySelectorAll('.title h2');
const loginContent = document.querySelectorAll('.login_box');
console.log(loginTitle, loginContent)
//0-1. 제목 활성화(ID 로그인)/비활성화(일회용,QR) == active 클래스 활성 기준
loginTitle[0].classList.add('active');
loginTitle[1].classList.remove('active');
loginTitle[2].classList.remove('active');
//0-2. 내용(ID)보이기/내용(일회용,QR)숨기기
loginContent[0].style.display = 'block';
loginContent[1].style.display = 'none';
loginContent[2].style.display = 'none';
//1. 일회용로그인 제목 탭 클릭했을 때
//2. 모든 내용이 숨겨지고
//3. 일회용 로그인 탭 내용만 보이기
loginTitle[1].addEventListener('click', ()=>{
    loginTitle[0].classList.remove('active');
    loginTitle[1].classList.remove('active');
    loginTitle[2].classList.remove('active');
    loginTitle[1].classList.add('active');
    loginContent[0].style.display = 'none';
    loginContent[1].style.display = 'none';
    loginContent[2].style.display = 'none';
    loginContent[1].style.display = 'block';
})

//1. QR코드 제목 탭 클릭했을 때
//2. 모든 내용이 숨겨지고
//3. QR코드 탭 내용만 보이기
loginTitle[2].addEventListener('click', ()=>{
    loginTitle[0].classList.remove('active');
    loginTitle[1].classList.remove('active');
    loginTitle[2].classList.remove('active');
    loginTitle[2].classList.add('active');
    loginContent[0].style.display = 'none';
    loginContent[1].style.display = 'none';
    loginContent[2].style.display = 'none';
    loginContent[2].style.display = 'block';
})

//1. ID 로그인 제목 탭 클릭했을 때
//2. 모든 내용이 숨겨지고
//3. ID 로그인인 탭 내용만 보이기
loginTitle[0].addEventListener('click', ()=>{
    // 모두 숨긴 후, 활성화
    loginTitle[0].classList.remove('active');
    loginTitle[1].classList.remove('active');
    loginTitle[2].classList.remove('active');
    loginTitle[0].classList.add('active');
    loginContent[0].style.display = 'none';
    loginContent[1].style.display = 'none';
    loginContent[2].style.display = 'none';
    loginContent[0].style.display = 'block';
})