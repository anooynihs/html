// new item 슬라이드
const newItem = new Swiper('.new .new_item',{
    slidesPerView:4,
    spaceBetween:72,
    loop:true,
    navigation:{
        nextEl:'.slide_btn .next',
        prevEl:'.slide_btn .prev',
    },
})

// all item more, less 버튼
document.getElementById('load_more').addEventListener('click', function() {
    const hiddenItems = document.querySelector('.hidden-item');
    
    if (hiddenItems.style.display === 'none' || hiddenItems.style.display === '') {
        hiddenItems.style.display = 'block'; // 보이게 설정
        this.textContent = 'NO MORE'; // 버튼 텍스트 변경
    }
});