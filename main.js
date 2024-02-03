/* javascript */

var startButton = document.getElementById('start');
			// var stopButton = document.getElementById('stop');
			var resultElement = document.getElementById('result');
      const fullTranscript = [""];
      var transcript = document.getElementById('Transcript');

			var recognition = new webkitSpeechRecognition();

			// recognition.continous = true;
			recognition.lang = window.navigator.language;
			recognition.interimResults = true;

			startButton.addEventListener('click', () => { recognition.start(); });
			// stopButton.addEventListener('click', () => { recognition.stop(); });

      recognition.addEventListener('result', (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                const result = event.results[i][0].transcript;
                fullTranscript.push(result);
                resultElement.textContent = result;
                transcript.textContent = fullTranscript.join(' '); // Update transcript with full content
                startButton.style.background='#ff3526';

            } else {
                interimTranscript += event.results[i][0].transcript;
                startButton.style.background='#ffffff';
            }
        }
        if (interimTranscript.trim() !== '') {
            resultElement.textContent = interimTranscript;
        }
    });

    







