const tabLinks = document.querySelectorAll(".tabs__item");
const tabContent = document.querySelectorAll(".content__item");

tabLinks.forEach((el, index) => {
  el.addEventListener("click", function openTabs() {
    console.log(index);

    tabContent.forEach(function (content) {
      content.classList.remove("active");
    });

    tabLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    el.classList.add("active");
    tabContent[index].classList.add("active");
  });
});
