/* javascript */

var startButton = document.getElementById('start');
			var stopButton = document.getElementById('stop');
			var resultElement = document.getElementById('result');
      const fullTranscript = [""];
      var transcript = document.getElementById('Transcript');

			var recognition = new webkitSpeechRecognition();

			// recognition.continous = true;
			recognition.lang = window.navigator.language;
			recognition.interimResults = true;

			startButton.addEventListener('click', () => { recognition.start(); });
			stopButton.addEventListener('click', () => { recognition.stop(); });

			recognition.addEventListener('result', (event) => {
				const result = event.results[event.results.length - 1][0].transcript;
				resultElement.textContent = result;
        transcript.textContent = result;
			});



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      $("#arrow").removeClass("fa-angle-up");
      $("#arrow").addClass("fa-angle-down");
    } else {
      content.style.display = "block";
      $("#arrow").removeClass("fa-angle-down");
      $("#arrow").addClass("fa-angle-up");
    }

  });

}



