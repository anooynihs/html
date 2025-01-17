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

//========================================== 아이디&비밀번호 유효성 검사
//1. 아이디 입력 오류 
//1-1. "userId"사용자가 아이디를 입력하지 않고 -> 빈문자열""
//1-2. "loginBtn" 로그인 버튼 클릭 시
//1-3. "errorMsg" 오류 메세지 출력 "아이디를 입력해 주세요"
//2. 비밀번호 입력 오류 
//2-1. (선행조건) 아이디 입력 기준, 비밀번호만 입력하지 않은 경우
//2-2. "userPw" 사용자가 아이디만 입력한 상태, 비밀번호는 미입력
//2-3. "loginBtn" 로그인 버튼 클릭 시
//2-4. "errorMsg" 오류 메세지 출력 "비밀번호를 입력해 주세요"
//3. 로그인 오류 
//3-1. (선행조건) 아이디와 비밀번호를 모두 입력했을 때 기준
//3-2. "userId, userPw"사용자가 아이디와 비밀번호를 모두 입력 후
//3-3. "loginBtn" 로그인 버튼 클릭 시
//3-4. "errorMsg" 오류 메세지 출력 "아이디와 비밀번호가 잘못되었습니다. 다시 확인해 주세요."
const userId = document.querySelector('#user_id');
const userPw = document.querySelector('#user_pw');
const loginBtn = document.querySelectorAll('#login');
const errorMsg = document.querySelectorAll('.error_message');
console.log(userId, userPw, loginBtn, errorMsg);

errorMsg[0].style.color = '#F00';
errorMsg[0].style.fontSize = '0.88rem';
errorMsg[0].style.margin = '15px 0';

loginBtn[0].addEventListener('click',()=>{
    if(userId.value === '') errorMsg[0].textContent = '아이디를 입력해 주세요.';
    //userId값이 빈문자열인가(거짓)일 때 인식하는 두번째 조건식(아래)
    else if(userPw.value === '') errorMsg[0].textContent = '비밀번호를 입력해 주세요.';
    //userId, userPw가 모두 빈문자열인가(거짓)일 때 인식되어야 하는 조건식
    else errorMsg[0].textContent = '아이디와 비밀번호가 잘못되었습니다. 다시 확인해 주세요.';
})

//일회용 번호 로그인 탭 입력 오류 메세지 출력 "일회용 번호를 입력해 주세요."
const disapNum = document.querySelector('#disap_num'); //번호 입력창
console.log(disapNum);

errorMsg[1].style.color = '#F00';
errorMsg[1].style.fontSize = '0.88rem';
errorMsg[1].style.margin = '15px 0';

loginBtn[1].addEventListener('click', ()=>{
    if(disapNum.value === '') errorMsg[1].textContent = '일회용 번호를 입력해 주세요.';
})

//============== IP보안 ON/OFF 글자 변경 JS
//0. check#op_on 체크되어있는 경우 ON / 체크해제 OFF
//1. ON 기본 활성화 (html, css에 준비)
//2. "ipCheckbox" 체크박스의 상태를 변경했을 때
//3. "switchState" 체크 되어있으면 switch_state 글자 ON -> OFF
//4. 체크 해제하면 switch_state 글자 OFF -> ON
const ipCheckbox = document.querySelector('input#ip_on');
const switchState = document.querySelector('.switch_state');
console.log(ipCheckbox, switchState);

ipCheckbox.addEventListener('change', ()=>{
    //console.log('상태변경');
    switchState.textContent = ipCheckbox.checked ? 'ON' : 'OFF';
})