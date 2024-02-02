// worker.js
onmessage = function (e) {
  // Handle data received from the main thread
  const result = processData(e.data);
  // Send the result back to the main thread
  postMessage(result);
};
function processData(data) {
  // Perform my heavy computations or data processing here

  // RIPPLES
  $(document).ready(function () {
    try {
      $('.herosection').ripples({
        resolution: 256,
        dropRadius: 128,
        perturbance: .005,
      });

    }
    catch (e) {
      $('.error').show().text(e);
    }

    $(document).ready(function () {
      $(".js-ripples-play").hide();
      $(".js-ripples-refresh").hide();
      $(".output-sys-disabled").hide();
      $(".output-sys-destroyed").hide();
    });

    $('.js-ripples-disable').on('click', function () {
      $('.herosection').ripples('destroy');
      $('.js-ripples-disable').hide();
      $('.js-ripples-refresh').show();
      $(".output-sys-destroyed").show();
      $('.inputs-destroyed').hide();

      $(".output-sys").hide();
      $(".output-sys-disabled").hide();
    });

    $('.js-ripples-play').on('click', function () {
      $('.herosection').ripples('play');
      $('.js-ripples-play').hide();
      $('.js-ripples-pause').show();
      $(".output-sys").show();
      $(".output-sys-disabled").hide();
    });

    $('.js-ripples-pause').on('click', function () {
      $('.herosection').ripples('pause');
      $('.js-ripples-pause').hide();
      $('.js-ripples-play').show();
      $(".output-sys-disabled").show();
      $(".output-sys").hide();
    });
  });
  // RIPPLES END



  // PARALLAX
  const parallax = document.getElementById("parallax");
  window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
  });
  // PARALLAX END



  return processedData;
}