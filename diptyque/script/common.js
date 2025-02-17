// 검색 팝업창
const searchBtn = document.querySelector('.search');
const searchPopup = document.querySelector('.search_popup');
searchBtn.addEventListener('click',()=>{
    searchPopup.style.display = searchPopup.style.display === 'block' ? 'none' : 'block';
})

// 내비 depth2 창
const navItems = document.querySelectorAll('.primary');

navItems.forEach(nav => {
    const secondNav = nav.querySelector('.second_nav');
    let hideTimeout; // 숨기는 타이머 변수

    nav.addEventListener('mouseover', () => {
        if (secondNav) {
            clearTimeout(hideTimeout); // 기존 숨김 타이머 제거
            secondNav.style.display = 'block';
        }
    });

    nav.addEventListener('mouseleave', () => {
        if (secondNav) {
            hideTimeout = setTimeout(() => {
                secondNav.style.display = 'none'; // 지연 후 숨기기
            }, 100);
        }
    });

    secondNav.addEventListener('mouseover', () => {
        clearTimeout(hideTimeout); // second_nav로 이동하면 숨김 취소
    });

    secondNav.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(() => {
            secondNav.style.display = 'none'; // second_nav에서 벗어나면 숨김
        }, 300);
    });
});