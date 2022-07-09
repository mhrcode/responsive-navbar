const burgerBtn = document.querySelector(".burger-btn");
burgerBtn.addEventListener("click", () => {
    const burgerLineFirst = document.querySelector(".burger-line-first");
    const burgerLineSecond = document.querySelector(".burger-line-second");
    const burgerLineTh = document.querySelector(".burger-line-th");
    const navResponsive = document.querySelector(".nav-responsive");

    burgerLineFirst.classList.toggle("burger-line-first-rotage");
    burgerLineSecond.classList.toggle("burger-line-second-translate");
    burgerLineTh.classList.toggle("burger-line-th-rotage");
    navResponsive.classList.toggle("nav-responsive-show");
});