

// main.js
// Create a new Web Worker from the worker.js file
const myWorker = new Worker('worker.js');
// Handle messages received from the Web Worker
myWorker.onmessage = function (e) {
  console.log('Received result from Web Worker:', e.data);
};
// Send data to the Web Worker for processing
const dataToProcess =

myWorker.postMessage(dataToProcess);