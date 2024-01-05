window.addEventListener("load", set_video);

function set_video() {
  let video = document.querySelector(".radar-detail-preview video");
  video.controls = true;

  let video_container = document.querySelector(".cc-video-player");
  video_container.addEventListener(
    "mousemove",
    (e) => {
      e.stopImmediatePropagation();
    },
    true
  );
}
