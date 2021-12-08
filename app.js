const videoElement = document.querySelector("#video");
const btn = document.querySelector("#button");

// Prompt to select media stream, pass to video element, then play
const selectMediaStream = async function () {
  try {
    // Screen capture API
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.log(`Whoops, error here: ${err}`);
  }
};

// On load
selectMediaStream();
