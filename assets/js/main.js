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


//CREDITS

	var body = document.body,
		overlay = document.querySelector('.overlay'),
		overlayBtts = document.querySelectorAll('a[class$="overlay"]'),
		openingBtt;

	[].forEach.call(overlayBtts, function (btt) {

		btt.addEventListener('click', function () {

			/* Detect the button class name */
			var overlayOpen = this.className === 'open-overlay';

			/* storing a reference to the opening button */
			if (overlayOpen) {
				openingBtt = this;
			}

			/* Toggle the aria-hidden state on the overlay and the 
			   no-scroll class on the body */
			overlay.setAttribute('aria-hidden', !overlayOpen);
			body.classList.toggle('noscroll', overlayOpen);

			/* On some mobile browser when the overlay was previously
			   opened and scrolled, if you open it again it doesn't 
			   reset its scrollTop property */
			overlay.scrollTop = 0;

			/* forcing focus for Assistive technologies but note:
		  - if your modal has just a phrase and a button move the
			focus on the button
		  - if your modal has a long text inside (e.g. a privacy
			statement) move the focus on the first heading inside 
			the modal
		  - otherwise just focus the modal.
  
		  When you close the overlay restore the focus on the 
		  button that opened the modal.
		*/
			if (overlayOpen) {
				overlay.focus();
			}
			else {
				openingBtt.focus();
				openingBtt = null;
			}

		}, false);

	});


	document.body.addEventListener('keyup', (ev) => {
		if (ev.key === "Escape" &&
			overlay.getAttribute('aria-hidden') === 'false') {
			overlay.setAttribute('aria-hidden', 'true');
			body.classList.toggle('noscroll', false);
			openingBtt.focus();
			openingBtt = null;
		}
	})

//CREDITS END

;
myWorker.postMessage(dataToProcess);