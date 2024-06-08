const listImages = document.querySelector(".list-images");
const imgs = document.querySelectorAll(".imgSlide");
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
let current = 0;
const lengthImage = imgs.length;

const handdleChangeSlide = () => {
  if (current == lengthImage - 1) {
    current = 0;
    listImages.style.transform = "translateX(0px)";
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  } else {
  }
  current++;
  let width = imgs[0] ? imgs[0].offsetWidth : "0px";
  listImages
    ? (listImages.style.transform = `translateX(${width * -1 * current}px)`)
    : null;
  document.querySelector(".active")
    ? document.querySelector(".active").classList.remove("active")
    : null;
  document.querySelector(".index-item-")
    ? document.querySelector(".index-item-" + current).classList.add("active")
    : null;
};

let handdleEventChangeSlide = setInterval(handdleChangeSlide, 4000);

btnLeft
  ? btnLeft.addEventListener("click", () => {
      clearInterval(handdleEventChangeSlide);
      if (current == 0) {
        current = lengthImage - 1;
        let width = imgs[0].offsetWidth;
        listImages.style.transform = `translateX(${width * -1 * current}px)`;
        document.querySelector(".active").classList.remove("active");
        document
          .querySelector(".index-item-" + current)
          .classList.add("active");
      } else {
      }
      current--;
      let width = imgs[0].offsetWidth;
      listImages.style.transform = `translateX(${width * -1 * current}px)`;
      handdleEventChangeSlide = setInterval(handdleChangeSlide, 4000);
      document.querySelector(".active").classList.remove("active");
      document.querySelector(".index-item-" + current).classList.add("active");
    })
  : null;

btnRight
  ? btnRight.addEventListener("click", () => {
      clearInterval(handdleEventChangeSlide);
      handdleChangeSlide();
      handdleEventChangeSlide = setInterval(handdleChangeSlide, 4000);
    })
  : null;
