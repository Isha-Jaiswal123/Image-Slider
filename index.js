let crousalimg = document.querySelectorAll(".crousalimg");

let len = 0;
let slidelen = crousalimg.length;
function crousalslider(len) {
  crousalimg.forEach((slider, index) => {
    if (index === len) {
      slider.style.display = "block";
    } else {
      slider.style.display = "none";
    }
  });
}

function next() {
  len = len < slidelen - 1 ? len + 1 : 0;
  crousalslider(len);
}
function previous() {
  len = len > 0 ? len - 1 : slidelen - 1;
  crousalslider(len);
}
crousalslider(len);
