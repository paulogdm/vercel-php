/*
$(document).ready(function () {
  $(".menu.uppercase [href]").each(function () {
    if (this.href == window.location.href.split("#")[0]) {
      $(this).addClass("active");
    } else {
    }
  });
});
*/

// window.scrollTo(0, 1);

/*
$(window).on("slideChange", function (event, number, element) {
  if (number !== 1) {
    video = $(element).find("video");
    playbackrate = 1 + number * 0.2;
    console.log(playbackrate);
    // video.get(0).pause();
    //video.get(0).playbackRate = playbackrate;
  }
});
*/

/*
function swtichPage(navigation, speed) {
  console.log(
    "up : " + window.allowSwipeUp + " down : " + window.allowSwipeDown
  );
  console.log("bottomPanel : " + window.bottomPanel);
  if (navigation == "left") {
    //next
    page = $("#nextLink").attr("href");
    alert(navigation + " : " + speed);
    // window.location.href = page;
  }
  if (navigation == "right") {
    //prev
    page = $("#prevLink").attr("href");
    alert(navigation + " : " + speed);
    // window.location.href = page;
  }
}

function swtichSlide(navigation, speed) {
  console.log(
    "up : " + window.allowSwipeUp + " down : " + window.allowSwipeDown
  );
  if (navigation == "up") {
    console.log(navigation + " : " + speed);
    window.changeSlide("increase");
  }
  if (navigation == "down") {
    console.log(navigation + " : " + speed);
    window.changeSlide("decrease");
  }
}
*/

function swtichPage(navigation, speed) {
  if (navigation == "left") {
    page = $("#nextLink").attr("href");
  }
  if (navigation == "right") {
    page = $("#prevLink").attr("href");
  }
  window.location.href = page;
}

function swtichSlide(navigation, speed) {
  if (navigation == "up") {
    window.changeSlide("increase");
  }
  if (navigation == "down") {
    window.changeSlide("decrease");
  }
}
