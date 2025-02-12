//body,bath add 버튼 팝업창
//candles, homefragrances add 버튼 팝업창
const label = document.querySelector('.body_bath .candles_homefragrances .info_label');
const addBtn = document.querySelector('.body_bath .candles_homefragrances .add_btn');
addBtn.addEventListener('click',()=>{
    label.style.display = 'block';
})


//newsletter 슬라이드
const letter = new Swiper('.newsletter .card_wrap',{
    slidesPerView:4,
    spaceBetween:73,
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
})