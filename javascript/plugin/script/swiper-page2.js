const eventTotal = document.querySelector('.total');
const eventCurrent = document.querySelector('.current');
const eventSlide = document.querySelectorAll('.swiper-slide');
console.log(eventTotal, eventSlide, eventCurrent);

eventTotal.textContent = eventSlide.length;

const eventSwiper = new Swiper('.event-swiper',{
    autoplay:{delay:2500,},
    loop:true,
    on:{
        slideChange:function(){
            eventCurrent.textContent = this.realIndex+1;
        }
    },
});