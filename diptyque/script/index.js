//body,bath candles, home add 버튼 팝업창
const labels = document.querySelectorAll('.click_popup .info_label');
const addBtns = document.querySelectorAll('.click_popup .add_btn');

console.log(labels, addBtns);

// 모든 버튼에 클릭 이벤트 추가
addBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (labels[index]) { // 해당 인덱스의 label이 존재하는지 확인
            labels[index].style.display = 'block';
        }
    });
});


//newsletter 슬라이드
const letter = new Swiper('.newsletter .card_wrap',{
    slidesPerView:4,
    spaceBetween:32,
    navigation:{
        nextEl:'.newsletter .slide_btn .next',
        prevEl:'.newsletter .slide_btn .prev',
    },
    scrollbar: {
        el: '.newsletter .swiper-scrollbar',
        dragSize:200,
      },
})

//collection 슬라이드
const collection = new Swiper('.collection .card_wrap',{
    slidesPerView:3.7,
    spaceBetween:40,
    slidesPerGroup:1,
    loop:true,
    navigation:{
        nextEl:'.collection .slide_btn .next',
        prevEl:'.collection .slide_btn .prev',
    },
})