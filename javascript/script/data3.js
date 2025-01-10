//객체공부
//변수생성키워드 변수명 = {속성:값, 속성:값, 속성:값 …};
//변수명은 객체명으로도 부를 수 있다.
//값이 문자인 경우 따옴표('')로 묶고, 숫자 또는 다른 데이터타입의 경우 따옴표를 작성하지 않는다.
//객체값(속성:값에서 값)을 호출할 때는 변수명.속성; 으로 작성한다.
//객체 선언 시 속성명은 대입하는 값과 동일한 뜻을 가지는 속성으로 의미있게 지정한다.
let cat1 = {
    age:1,
    name:'나비',
    color:'검정',
    character:'착하고 애교가 많음',
};
console.log(cat1);
console.log(cat1.age);
console.log(cat1.name);
console.log(cat1.color);
console.log(cat1.character);
//나비는 검정고양이고 1살이에요.
console.log(`${cat1.name}는 ${cat1.color}고양이고 ${cat1.age}살이에요.`);
let cat2 = {
    color:['검정색','흰색','노랑색'], //2개 이상 값 설정 시 배열 활용
    age:2,
    name:'삼색이'
};
console.log(cat2);
console.log(cat2.color[0], cat2.color[1], cat2.color[2]);
console.log(cat2.color.length); //배열 개수 세는 법 (객체.속성.속성;)
//속성이나 메소드 선언 시 반드시 앞에선 객체를 먼저 선언한다.
//속성이 '배열'인 경우에는 배열의 속성(length)를 연결해서 작성할 수 있다.
//맨 앞에 객체가 선언됐다면, 필요의 경우 속성.속성.속성을 속성끼리 연결할 수 있다.
console.log('=====================================');
//객체 선언
//고양이 종은 코리안숏헤어, 털은 흰색과 검은색, 나이는 1살, 성별은 암컷, 입양 전, 중성화 전, 건강상태 양호에 대한 정보로 객체 생성하기
let cat3 = {
    type:'코리안숏헤어',
    color:['흰색','검은색'],
    age:1,
    gender:'암컷',
    adoptionStatus:'전',
    neuterStatus:'전',
    healthStatus:'양호'
};
console.log(cat3);
console.log(cat3.type);
console.log(cat3.color[0], cat3.color[1]);
console.log(cat3.color.length); //색상 개수
console.log(cat3.age);
console.log(cat3.gender);
console.log(cat3.adoptionStatus);
console.log(cat3.neuterStatus);
console.log(cat3.healthStatus);
console.log(`고양이 종은 ${cat3.type}, 털은 ${cat3.color[0]},${cat3.color[1]}, 나이는 ${cat3.age}살, 성별은 ${cat3.gender}, 입양 ${cat3.adoptionStatus}, 중성화 ${cat3.neuterStatus}, 건강상태 ${cat3.healthStatus}`);
console.log('=====================================');
//CGV 영화 페이지 조사 기준 '하얼빈' 반복되는 데이터 조사 후 객체 생성하기
//const movie = [{객체}, {객체}, {객체}];
const movie = [{ //영화 하얼빈
    titleKor:'하얼빈', //html 작성할 때 <h1>{movie.titleKor}</h1>
    titleEng:'HARBIN',
    director:'우민호',
    actors:['현빈', '박정민', '조우진', '전여빈', '박훈', '유재명', '릴리 프랭키', '이동욱'],
    genre:'미입력',
    basicInfo:['15세 이상 관람가', '114분', '한국'],
    releaseInfo:'2024.12.24',
    rate:'21.5%', //예매율
    eggScore:'89%', //에그지수
    // poster:'./images.harbin_poster.jpg', //실제 포스터 저장경로 작성
    story:'1908년 함경북도 신아산에서 안중근이 이끄는 독립군들은 일본군과의 전투에서 큰 승리를 거둔다.',
    // stillcut:['./images.still1.jpg', './images.still2.jpg'] //여러 이미지 삽입 시에도 배열 작성
}, { //영화 페라리
    titleKor:'페라리',
    titleEng:'FERRARI',
    director:'마이클 만',
    actors: ['아담 드라이버', '페넬로페 크루즈', '쉐일린 우들리'],
    genre:['드라마','액션'],
    basicInfo:['15세 이상 관람가', '131분', '미국, 영국, 이탈리아'],
    releaseInfo:'2025.01.08',
    rate:'12.6%',
    eggScore:'99%',
    // poster:'./images.ferrari_poster.jpg',
    story:'1957년, 전세계를 뒤흔든 페라리의 충격 실화가 드러난다!',
    // stillcut:['./images.still_ferrari1.jpg', './images.still_ferrari2.jpg']
}];
console.log(movie);
console.log('=====================================');
//배열과 객체 함께 사용하기
//고양이 보호소 정보
//봄이, 코숏, 1살, 남, 갈색, 흰색, 검은색, 중성화 O
//여름이, 코숏, 2살, 여, 검은색, 흰색, 중성화 X
//가을이, 러시안블루, 1살, 남, 회색, 중성화 O
//겨울이, 페르시안, 2살, 남, 흰색, 노랑, 중성화 X
const catsINfo = [
    { //봄이
        name:'봄이', //이름
        type:'코숏', //품종
        age:1, //나이
        gender:'남', //성별
        color:['갈색', '흰색', '검은색'], //색깔
        neuterStatus:'YES' //중성화 유무
    },
    { //여름이
        name:'여름이', //이름
        type:'코숏', //품종
        age:2, //나이
        gender:'여', //성별
        color:['검은색', '흰색'], //색깔
        neuterStatus:'NO' //중성화 유무
    },
    { //가을이
        name:'가을이', //이름
        type:'러시안블루', //품종
        age:1, //나이
        gender:'남', //성별
        color:['회색'], //색깔
        neuterStatus:'YES' //중성화 유무
    },
    { //겨울이
        name:'겨울이', //이름
        type:'페르시안', //품종
        age:2, //나이
        gender:'남', //성별
        color:['흰색', '노랑'], //색깔
        neuterStatus:'NO' //중성화 유무
    }
];
console.log(catsINfo);
console.log(catsINfo[2].name); //가을이 이름 출력
console.log(catsINfo[3].color[0], catsINfo[3].color[1]); //겨울이 색깔 출력
console.log(catsINfo[0].type); //봄이의 품종 출력
console.log(catsINfo[1].color.length); //여름의 털색 개수
//window 객체 활용한 메서드 종류
// let msg = window.alert('제작 중입니다.')
// let msg2 = window.prompt('언제 완성되나요?')
// let msg3 = window.confirm('확인되었습니다.')
// console.log(msg);
// console.log(msg2);
// console.log(msg3);
//let msg_print = window.print();
//confirm >> print 순서로 confirm메서드의 '확인'클릭 시 print가 실행되게 만드는 순서로 인쇄기능 제작
//사용자 동작 = event (위에서는 '확인' 클릭 시가 event)
function gg(){
    console.log('test');
    window.location.href('https://google.com');
};
window.document.write('test'); //순수 문자 자체 => 결과 : test
window.document.body.style = 'background-color:yellow;'
//html의 body, 자바스크립트에서 css속성 쓰고 싶을 때 사용 body 뒤에 꼭 style 작성
//자바스크립트에서 적용하는 style은 인라인스타일이기 때문에 우선순위가 가장 높은 디자인으로 적용된다.
//window는 최상위 개념 (생략)
//prompt('질문'); //window객체명이 기본값이라 생략한 상태(기본 내장으로 메서드 혼자만 있는 상태가 동작된다라고 공부해선 안 된다.)
//document.body.style
//document == 웹브라우저 화면
//body == 웹브라우저 화면 내에서 제어하고 싶은 객체대상(속성)
//style == body에 적용하고 싶은 추가 속성, 속성 뒤에는 대입연산자(=)로 값 대입