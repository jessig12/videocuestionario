const video = document.getElementById('video');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const question = document.getElementById('question');
const questionText = document.getElementById('question-text');
const timer = document.getElementById('timer');
const downloadLink = document.getElementById('downloadLink');
let recorder, stream, time, timerInterval, startTime;

// Activar la cámara y mostrar el video
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(function (cameraStream) {
    stream = cameraStream;
    video.srcObject = stream;
  })
  .catch(function (err) {
    console.log("Ocurrió un error al obtener la cámara: " + err);
  });

// Comenzar la grabación
startButton.addEventListener
