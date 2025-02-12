//new item 슬라이드
const newItem = new Swiper('.new_item',{
    slidesPerView:5,
    spaceBetween:25,
    navigation:{
        nextEl:'.new_item .slide_btn .next',
        prevEl:'.new_item .slide_btn .prev',
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