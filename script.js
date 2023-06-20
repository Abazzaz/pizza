const input = document.querySelector(".theme-input input");

input.addEventListener("change", (event) => {
  const isChecked = event.target.checked;
  if (isChecked) {
    document.querySelector("html").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");

    // moon.src = "./img/icons/theme_light_dark_icon_137104 copy.svg";
  } else {
    document.querySelector("html").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    // moon.src = "./img/icons/theme_light_dark_icon_137104.svg";
  }
});

window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    input.checked = true;
    document.querySelector("html").setAttribute("data-theme", "dark");
  }
});
const dot = document.querySelectorAll(".dot");
const bordLine = document.querySelectorAll(".bord-line");
const knopkaleft = document.querySelector(".slaider-left-knopka");
console.log(knopkaleft);
const knopkaright = document.querySelector(".slaider-right-knopka");
console.log(knopkaright);
const slide = document.querySelectorAll(".slide");
console.log(slide);
const moon = document.getElementById("moon_src");
console.log(moon);
const d0 = document.getElementById("d0");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");

/*moon.onmouseover = function (event) {
  document.querySelector("html").setAttribute("data-theme", "dark");

  moon.src = "./img/icons/theme_light_dark_icon_137104 copy.svg";
};

moon.onmouseout = function (event) {
  document.querySelector("html").setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "light");

  moon.src = "./img/icons/theme_light_dark_icon_137104.svg";
};*/

moon.addEventListener("click", function () {
  if (localStorage.getItem("theme") == "light") {
    this.style.transform = "scale(1)";
    moon.src = "./img/icons/theme_light_dark_icon_137104 copy.svg";
  } else {
    this.style.transform = "scale(-1)";
    moon.src = "./img/icons/theme_light_dark_icon_137104.svg";
  }
  //  moon.onclick = null;
});

// moon.addEventListener("click", function() {
// console.log("Щёлк!");
// moon.src = "./img/icons/theme_light_dark_icon_137104 copy.svg";
// this.style.transform = "scale(1)";
// });

let currentslide = 0;
let slaidercount = slide.length;

// dot_active.forEach((dot_active) => {
//   dot_active.style.backgroundColor = "black";
// });
function style_dot(nDot) {
  switch (nDot) {
    case 0:
      bordLine.forEach((bordLine) => {
        bordLine.style.backgroundColor = "red";
        bordLine.style.width = "16.6%";
      });
      d0.style.backgroundColor = "red";
      d0.style.width = "10px";
      d0.style.height = "10px";
      d0.style.border = "2px  solid white";
      d1.style.backgroundColor = "grey";
      d1.style.border = "0px  solid white";
      d1.style.width = "12px";
      d1.style.height = "12px";
      d2.style.backgroundColor = "grey";
      d2.style.border = "0px  solid white";
      d2.style.width = "12px";
      d2.style.height = "12px";
      break;
    case 1:
      bordLine.forEach((bordLine) => {
        bordLine.style.backgroundColor = "red";
        bordLine.style.width = "33.3%";
      });
      d0.style.backgroundColor = "grey";
      d0.style.border = "0px  solid white";
      d0.style.width = "12px";
      d0.style.height = "12px";
      d1.style.width = "10px";
      d1.style.height = "10px";
      d1.style.backgroundColor = "red";
      d1.style.border = "2px  solid white";
      d2.style.backgroundColor = "grey";
      d2.style.border = "0px  solid white";
      d2.style.width = "12px";
      d2.style.height = "12px";

      break;
    case 2:
      bordLine.forEach((bordLine) => {
        bordLine.style.backgroundColor = "red";
        bordLine.style.width = "50%";
      });
      d0.style.backgroundColor = "grey";
      d0.style.width = "12px";
      d0.style.height = "12px";

      d1.style.backgroundColor = "grey";
      d1.style.border = "0px  solid white";
      d1.style.width = "12px";
      d1.style.height = "12px";
      d2.style.backgroundColor = "red";
      d2.style.border = "2px  solid white";
      d2.style.width = "10px";
      d2.style.height = "10px";
      break;
    default:
      d0.style.backgroundColor = "red";

      // d0.style.width = "18px"
      // d0.style.height = "18px"
      d1.style.backgroundColor = "grey";
      // d1.style.width = "12px"
      // d1.style.height = "12px"
      d2.style.backgroundColor = "grey";
    // d2.style.width = "12px"
    // d2.style.height = "12px"
  }
}

knopkaright.addEventListener("click", () => {
  if (currentslide < slaidercount) {
    currentslide++;
    if (currentslide === slaidercount) currentslide = 0;
    style_dot(currentslide);
    slide.forEach((slide) => {
      slide.style.transform = `translateX(-${100 * currentslide}%)`;
    });
  }
});

// let timerId = setInterval(() => alert('tick'), 2000);

knopkaleft.addEventListener("click", () => {
  if (currentslide <= slaidercount) {
    currentslide--;
    if (currentslide < 0) currentslide = 0;
    style_dot(currentslide);
    slide.forEach((slide) => {
      slide.style.transform = `translateX(-${100 * currentslide}%)`;
    });
  }
});
let timerId = setTimeout(function tick() {
  if (currentslide < slaidercount) {
    currentslide++;

    if (currentslide === slaidercount) currentslide = 0;
    style_dot(currentslide);
    slide.forEach((slide) => {
      slide.style.transform = `translateX(-${100 * currentslide}%)`;
    });
  }
  timerId = setTimeout(tick, 3000);
}, 3000);


document.addEventListener("mouseup", () => console.log("mouseup"));
document.addEventListener("click", () => console.log("click"));
document.addEventListener("mousedown", () => console.log("mousedown"));

