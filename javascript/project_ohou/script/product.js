//상품 썸네일 JS
//1.작은 썸네일 이미지에 마우스를 올린다
//2.위 1번 대상에만 테두리가 적용된다 + 다른 모든 요소에 테두리는 제거된다
//3.위 1번 대상이 우측 큰 이미지에 나타난다
//DOM Node : 작은 썸네일 이미지, 우측 큰 이미지 총 2개
//속성, 메소드 : 테두리가 적용된다 / 테두리는 제거된다
//이벤트 : 마우스를 올린다
const thumnail = document.querySelectorAll ('.thumnail a img');
const bigImage = document.querySelector ('.big img');
console.log(thumnail[0].src, bigImage.src);
console.log(thumnail[0].parentElement);

//썸네일에 마우스 올렸을 때 큰 이미지 경로 변경하기
//반복되는 명령어 함수 생성하여 그룹 작성
function thum_remove(){
    thumnail[0].parentElement.classList.remove('active');
    thumnail[1].parentElement.classList.remove('active');
    thumnail[2].parentElement.classList.remove('active');
    thumnail[3].parentElement.classList.remove('active');
    thumnail[4].parentElement.classList.remove('active');
}
function bigSrc(num){
    return bigImage.src = `./images/big${num}.jpg`;
}
thumnail[0].addEventListener('mouseover',()=>{
    bigSrc(1);
    thum_remove();
    thumnail[0].parentElement.classList = 'active';

})
thumnail[1].addEventListener('mouseover',()=>{
    bigSrc(2);
    thum_remove();
    thumnail[1].parentElement.classList = 'active';
})
thumnail[2].addEventListener('mouseover',()=>{
    bigImage.src = './images/big3.jpg';
    thum_remove();
    thumnail[2].parentElement.classList = 'active';
})
thumnail[3].addEventListener('mouseover',()=>{
    bigImage.src = './images/big4.jpg';
    thum_remove();
    thumnail[3].parentElement.classList = 'active';
})
thumnail[4].addEventListener('mouseover',()=>{
    bigImage.src = './images/big5.jpg';
    thum_remove();
    thumnail[4].parentElement.classList = 'active';
})