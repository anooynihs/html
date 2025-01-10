//================= DOM(Document Object Model) 변수대입 복습
//변수가 변하지 않는, 고정 데이터라면? const 변수명 = 반복되는대입값; (DOM)
//변수가 변할 수 있는, 수동 데이터라면? let 변수명 = 반복되는대입값; 또는 var 변수명 = 반복되는대입값;
//================= 변수대입 DOM요소가 태그노드라면? -> 선언 후 배열형태 확인, 사용
//const 변수명 = document.getElementsByTagName('태그');
//================= 변수대입 DOM요소가 클래스노드라면? -> 선언 후 배열형태 확인, 사용
//const 변수명 = document.getElementsByClassName('클래스명');
//================= 배열형태 노드라면 직접 사용 시 인덱스[0] 이용
//================= 변수대입 DOM요소가 태그노드라면?
//const 변수명 = document.getElementById('아이디명');

const headerTag = document.getElementsByTagName('header');
console.log(headerTag); //단순 텍스트 확인 시 배열 전체 확인 가능
//애니메이션 및 동적, 디자인 기능 등은 직접 적용 시 배열 직접 접근해야함 (인덱스 활용)
headerTag[0].style = 'background-color:beige';
console.log(typeof headerTag); //object

const logo = document.getElementsByTagName('h1')[0];
logo.style = 'color:red';
console.log(logo);
//선언 시 바로 인덱스를 붙여주면 style 작성 시 인덱스를 쓰지 않도 되는 편리함이 있다

const searchDiv = document.getElementsByClassName('search');
searchDiv.style = 'border:2px solid #000';
console.log(searchDiv);

const searchInput = document.getElementById('txt');
searchInput.style = 'background-color:lime';
console.log(searchInput);

const searchBtn = document.getElementById('btn');
searchBtn.style = 'border:2px solid red';
console.log(searchBtn);

//================= querySelector
//================= querySelector 메소드는 body태그에 작성한 태그 순서상 먼저 시작한 대상을 인식한다. header 태그가 2개라면 먼저 선언된 header태그만 인식해서 변수에 대입한다.
const hea = document.querySelector('header');
console.log(hea);
hea.style = 'background-image:url(https://i.pinimg.com/736x/b2/59/36/b259362172e0a6650f83f59b5122d9e3.jpg)';
//querySelector는 getElement명령어처럼 class,id,tag 선언이 함께 하지 않기 때문에 querySelector의 메소드괄호 안에서 class,id,tag를 구분할 수 있는 표시를 함께 한다. tag는 tag이름만, class는 .class명, id는 #id명으로 작성해서 구분한다.
const search = document.querySelector('.search');
search.style = 'opacity:0.7';
console.log(search);

const searchTxt = document.querySelector('#txt');
searchTxt.style = 'color:red';
console.log(searchTxt);

const gnb = document.querySelector('.gnb');
gnb.querySelector('a').style = 'font-size:1.25rem';
console.log(gnb);
//const gnbLi = document.querySelector('.gnb li'); //첫 번째 li만 잡음
const gnbLi = document.querySelectorAll('.gnb li'); //생성된 노드목록을 모두(여러 개) 잡음
//style 적용 시 인덱스를 붙여서 쓴다
gnbLi[0].style = 'background:lime';
gnbLi[1].style = 'background:coral';
gnbLi[2].style = 'background:green';
gnbLi[3].style = 'background:pink';
console.log(gnbLi);
//const gnbA = document.querySelectorAll('.gnb a');
const gnbA = gnb.querySelectorAll('a'); // = document.querySelector('.gnb').querySelectorAll('a')
//gnbA[0].style = 'color:blue';
gnbA[1].style = 'color:#fff';
gnbA[2].style = 'color:yellow';
gnbA[3].style = 'color:red';
console.log(gnbA);