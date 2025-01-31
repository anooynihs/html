const activeScrollbar = document.querySelector('.active-scrollbar');
console.log(activeScrollbar);

const eventSwiper = new Swiper('.event-swiper',{
    autoplay:{delay:2500,},
    loop:true,
    on:{
        autoplayTimeLeft(type, time, progress){
            // console.log(type, time, progress)
            if(progress === 1){
                activeScrollbar.style.width = '0%'
                activeScrollbar.style.transition = 'none'
            }
            else {
                activeScrollbar.style.width = '100%'
                activeScrollbar.style.transition = 'width 2.5s linear'
            }
        }
    },
});