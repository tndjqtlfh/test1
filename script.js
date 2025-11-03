// 페이지 스크롤 시 네비게이션 그림자 효과
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 30) {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
  } else {
    nav.style.boxShadow = "none";
  }
});
