//인스타그램 아이콘 클릭 시 활성화 이미지로 변경하기
//off -> on
//like 이미지 클릭 시 off -> on 변경 결과
const like = document.querySelector('.like img');
console.log(typeof like);
console.log(like.src); //이미지 경로 속성 src 확인 (객체.속성)
like.src = '';
//insta.css 위치에서 like_on.png 상대경로연결
//../images/like_on.png
//insta.js 위치에서 like_on.png 프로젝트 최상위 폴더 기준(html) 연결
