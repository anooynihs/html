const letter = new Swiper('.card_wrap',{
    slidesPerView:4,
    spaceBetween:73,
    slidesPerGroup:1,
    autoplay:{delay:2000},
    loop:true,
    navigation:{
        nextEl:'.slide_btn .next',
        prevEl:'.slide_btn .prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
        dragSize:200,
      },
})