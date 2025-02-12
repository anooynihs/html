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
const collection = new Swiper('.collection .card_wrap',{
    slidesPerView:3.7,
    spaceBetween:40,
    slidesPerGroup:1,
})