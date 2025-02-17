document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".icon .search"); // 검색 아이콘
    const searchPopup = document.querySelector(".search_popup");

    searchIcon.addEventListener("click", function (event) {
        event.preventDefault(); // 기본 이벤트 방지
        searchPopup.classList.toggle("active"); // active 클래스 추가/제거
    });

    // 바깥 클릭 시 닫기 (팝업 외부 클릭 감지)
    document.addEventListener("click", function (event) {
        if (!searchPopup.contains(event.target) && !searchIcon.contains(event.target)) {
            searchPopup.classList.remove("active");
        }
    });

    // 검색 팝업 내부 클릭 시 닫히지 않도록 처리
    searchPopup.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});