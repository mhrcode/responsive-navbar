const containerLineList = document.querySelector(".container-line-list");
containerLineList.addEventListener("click", () => {
    const lineListFirst = document.querySelector(".line-list-first");
    const lineListSecond = document.querySelector(".line-list-second");
    const lineListTh = document.querySelector(".line-list-th");
    const nav = document.querySelector("nav");

    lineListFirst.classList.toggle("line-list-first-rotage");
    lineListSecond.classList.toggle("line-list-second-translate");
    lineListTh.classList.toggle("line-list-th-rotage");
    nav.classList.toggle("nav-show");
})