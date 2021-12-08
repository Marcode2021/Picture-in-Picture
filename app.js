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

btn.addEventListener("click", async function () {
  //Disabled button
  btn.disabled = true;
  //Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //Reset button
  btn.disabled = false;
});

// On load
selectMediaStream();
