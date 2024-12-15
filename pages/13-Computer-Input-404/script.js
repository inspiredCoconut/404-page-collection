document.addEventListener("DOMContentLoaded", () => {
  let copyContainer = $(".copy-container"),
    replayIcon = $("#cb-replay");
  //let handle = $("#handle");
  const HANDLE = document.createElement("span");
  HANDLE.id = "handle";
  HANDLE.className = "handle";

  let chars = copyContainer
    .text()
    .split("")
    .map(function (char) {
      return $("<span>").text(char).css("opacity", 0);
    });
  copyContainer.html(chars);
  copyContainer.append(HANDLE);

  function animateCopy() {
    animateHandle();
    chars.forEach(function (char, index) {
      char.delay(index * 50).animate({ opacity: 1 }, 100);
    });
  }

  function blinkHandle() {
    function blink() {
      $("#handle").fadeTo(400, 1).fadeTo(400, 0, blinkHandle);
    }
    blink();
  }

  function animateHandle() {
    let copyWidth = $(".copy-container").width();
    $("#handle").animate({ left: copyWidth }, 1750);
  }

  replayIcon.on("click", function () {
    chars.forEach(function (char) {
      char.stop(true, true).css("opacity", 0);
    });
    $("#handle").stop(true, true).css("left", 0);
    animateCopy();
    blinkHandle();
  });

  $(document).ready(function () {
    animateCopy();
    blinkHandle();
  });
});
