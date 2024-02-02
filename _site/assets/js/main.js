// main.js
// Create a new Web Worker from the worker.js file
const myWorker = new Worker('worker.js');
// Handle messages received from the Web Worker
myWorker.onmessage = function (e) {
  console.log('Received result from Web Worker:', e.data);
};
// Send data to the Web Worker for processing
const dataToProcess =

  // RIPPPLES
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




;
myWorker.postMessage(dataToProcess);