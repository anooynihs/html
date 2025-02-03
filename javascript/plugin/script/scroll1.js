/* 스크롤을 감지하는 이벤트 scroll, wheel(마우스 휠 동작) */
/* 스크롤 이벤트 적용 객체는 가능한 window 사용한다! */
const topDiv = document.querySelector('.top')
window.addEventListener('scroll', function(){
    console.log(box[2].offsetTop)
    console.log(box[2].getBoundingClientRect().y)
    //console.log('scroll')
    if(window.scrollY > box[1].offsetTop-500) topDiv.style.right = '50px'
    else topDiv.style.right = '-70px'
})

const circle = document.querySelector('.circle')
window.addEventListener('mousemove', function(e){
    //console.log('e')
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})

//위로 클릭 시 스크롤 이동시키기
const box = document.querySelectorAll('.box')
topDiv.addEventListener('click',()=>{
    window.scrollTo({left:0, top:box[1].offsetTop})
    //window.scrollTo(0, 0) //CSS에 scroll-behavior:smooth 작성
    //window.scrollTo({left:0, top:0, behavior:'smooth'})
})