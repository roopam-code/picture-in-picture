const videoElement=document.getElementById('video');
const button=document.getElementById('button');
//prompt to select video stream,pass to video element,then play
async function selectMediaStream(){
    try{
        const mediaStream=await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch (error){
        //catch error here
        console.log('error here',error);

    }
}
button.addEventListener('click',async () => {
    // disable button
    button.disabled=true;
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled=false;

});
// on load
selectMediaStream();