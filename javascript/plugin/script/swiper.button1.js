const eventSwiper = new Swiper('.event-swiper',{
    autoplay:{delay:2500,},
    loop:true,
    /* (기본) 페이지번호 */
    pagination:{
        el:'.event-swiper + .swiper-pagination',
        type:'bullets',
        clickable:true,
        dynamicBullets:true, //활성화 슬라이드 선택점 크기 달라짐
    },
    navigation:{
        nextEl:'.event-swiper+.btn .next',
        prevEl:'.event-swiper+.btn .prev',
    },
});