const tabLinks = document.querySelectorAll(".tabs__item");
const tabContent = document.querySelectorAll(".content__item");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  const btnTarget = el.currentTarget;
  const company = btnTarget.dataset.company;

  tabContent.forEach(function (el) {
    el.classList.remove("active");
  });

  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  });

  btnTarget.classList.add("active");

  document.getElementById(company).classList.add("active");
}
