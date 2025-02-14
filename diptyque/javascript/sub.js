//new item 슬라이드
const newItem = new Swiper('.new .new_item',{
    slidesPerView:4,
    spaceBetween:72,
    loop:true,
    navigation:{
        nextEl:'.slide_btn .next',
        prevEl:'.slide_btn .prev',
    },
})