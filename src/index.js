import "./reset.css";
import "./style.css";
import Car1 from "./car1.jpg";
import Car2 from "./car2.jpg";
import Car3 from "./car3.jpg";
import Car4 from "./car4.jpg";
import Car5 from "./car5.jpg";

function transitionAfterPageLoad() {
  document.body.classList.remove("no-transition");
}

(function () {
  transitionAfterPageLoad();
})();

const menuOneBtn = document.querySelector(".drop-down-button");
const menuOne = document.querySelector(".menu-one");
menuOneBtn.addEventListener("click", () => {
  console.log("test");
  menuOne.classList.toggle("menu-one--hidden");
});

const smallerOptions = document.querySelectorAll(".smaller-button");
const smallerLabels = document.querySelectorAll(".smaller-label");
const mobilePlusButton = document.querySelector(".create-button");
mobilePlusButton.addEventListener("click", () => {
  mobilePlusButton.classList.toggle("create-button--clicked");
  // mobilePlusButton.classList.toggle("hidden");
  smallerOptions.forEach((option, i) => {
    option.classList.toggle("smaller-button--show");
    // option.classList.toggle("hidden");
  });
  smallerLabels.forEach((option, i) => {
    option.classList.toggle("smaller-label--show");
  });

  document.querySelector(".overlay").classList.toggle("overlay--show");
  document.querySelector(".page").classList.toggle("blur");
});

const picIntervalTime = 5000;
let picInterval = setInterval(nextImageOnTimeOut, picIntervalTime);
const imgArr = [Car1, Car2, Car3, Car4, Car5];
let currentImgIndex = 0;
const imgNavBtns = document.querySelectorAll(".slider-nav-circle");
const imgContainer = document.querySelector(".displayed-image>img");
const imgBtns = document.querySelectorAll(".back-btn, .forward-btn");
imgBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (i === 0) {
      currentImgIndex -= 1;
      currentImgIndex = currentImgIndex < 0 ? 4 : currentImgIndex;
    } else {
      incrementIndex();
    }
    imgContainer.src = imgArr[currentImgIndex];
    selectImgNav(currentImgIndex);

    clearInterval(picInterval);
    picInterval = setInterval(nextImageOnTimeOut, picIntervalTime);
  });
});

imgNavBtns.forEach((nav, i) => {
  nav.addEventListener("click", () => {
    currentImgIndex = i;
    imgContainer.src = imgArr[currentImgIndex];
    selectImgNav(currentImgIndex);
    clearInterval(picInterval);
    picInterval = setInterval(nextImageOnTimeOut, picIntervalTime);
  });
});
function selectImgNav(index) {
  document
    .querySelector(".slider-nav-circle--selected")
    .classList.remove("slider-nav-circle--selected");
  imgNavBtns[index].classList.add("slider-nav-circle--selected");
}

function incrementIndex() {
  currentImgIndex += 1;
  currentImgIndex = currentImgIndex % imgArr.length;
}
imgContainer.src = imgArr[currentImgIndex];

function nextImageOnTimeOut() {
  incrementIndex();
  selectImgNav(currentImgIndex);
  imgContainer.src = imgArr[currentImgIndex];
}
