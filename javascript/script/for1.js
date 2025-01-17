//반복문 for
//for(초기값; 조건식; 증감식) {조건이 참일 때 실행문}
//반복문 없이 '자바스크립트' 3번 반복
/* console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트'); */
// 0부터 시작하는 이유는 배열, DOM 인덱스 때문
/*for(let i=0; i<3; i++){
    console.log('자바스크립트');
}*/
for(let i=2; i>=0; i--){
    console.log('자바스크립트'+i);
}

const subject = ['html', 'css', 'photoshop', 'illustrator', 'javascript'];
/*console.log(subject[0]);
console.log(subject[1]);
console.log(subject[2]);
console.log(subject[3]);
console.log(subject[4]);*/
for(let i=0; i<5; i++){
    console.log(subject[i]);
}

const kiosk = ['아메리카노', '카페라떼', '카푸치노', '돌체라떼', '에스프레소', '우유', '녹차라떼', '소이라떼', '밀크티'];
//출력 예) 주문하신 000 나왔습니다.
console.log(kiosk);
/*for(let i=0; i<=kiosk.length-1; i++) {
    console.log(`주문하신 ${kiosk[i]} 나왔습니다.`)
}*/
//length속성없이 숫자값과 for문으로 역순으로 메뉴 출력하기
/*for(let i=8; i>=0; i--) {
    console.log(`주문하신 ${kiosk[i]} 나왔습니다.`);
}}*/
//length속성 사용해서 숫자값과 for문으로 역순으로 메뉴 출력하기
for(let i=kiosk.length-1; i>=0; i--) {
    console.log(`주문하신 ${kiosk[i]} 나왔습니다.`);
}