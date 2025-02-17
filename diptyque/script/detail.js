// 썸네일 클릭 작은 썸네일-큰 썸네일 호환
document.addEventListener('DOMContentLoaded', function () {
    const thumbnailLinks = document.querySelectorAll('.select_thumnail a');
    const heroImage = document.querySelector('.hero_thumnail img');
    console.log(thumbnailLinks, heroImage);
    thumbnailLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // 선택된 썸네일의 a태그에 'active'클래스를 추가하고 나머지는 제거
            thumbnailLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            // 클릭한 썸네일의 이미지 경로를 'hero_thumnail'에 적용
            const newImageSrc = this.querySelector('img').src;
            heroImage.src = newImageSrc;
            console.log(newImageSrc);
        });
    });
});

// 카트담기 버튼 클릭 토스트창
function addToCart() {
    let toast = document.querySelector('.cart_toast'); //

    if (toast) {
        toast.classList.add('show'); // show 클래스 추가
        console.log(toast);

        // 3초 후 안내 메시지 사라짐
        setTimeout(() => {
            toast.classList.remove('show'); // show 클래스 제거
        }, 3000);
    }
}