window.addEventListener("load", check_ad);

// window.addEventListener("scroll", check_ad);

setInterval(check_ad, 100);

function check_ad() {
  document.querySelectorAll(".floor-single-card").forEach((item) => {
    item.classList.add("is_ad");
  });
  let card_items_top = document.querySelectorAll(".feed-card");
  let card_items_bottom = document.querySelectorAll(".bili-video-card");
  let temp_list = [...card_items_top, ...card_items_bottom];
  temp_list.forEach((item) => {
    if(item.querySelector(".bili-video-card__skeleton").className.includes("hide")) {
      if (
        item.querySelector(".bili-video-card__info--ad") ||
        item.querySelector(".bili-video-card__info--creative-ad")
      ) {
        item.remove()
      }
    }
  });
}

function throttle(fn, time) {
  let timer;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, time);
    }
  };
}
