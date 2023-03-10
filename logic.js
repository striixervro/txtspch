
const textToTranslateInput = document.getElementById('text-to-translate');
const speakButton = document.getElementById('speak-button');

speakButton.addEventListener('click', () => {
  const textToTranslate = textToTranslateInput.value;
  const speechSynthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(textToTranslate);
  speechSynthesis.speak(utterance);
});