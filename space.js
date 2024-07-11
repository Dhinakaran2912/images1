const imageSources = ['img1.jpg','img2.webp','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.webp','img9.jpg','img10.webp'];
function changeBackgroundImage() {
const randomIndex = Math.floor(Math.random() * imageSources.length);
document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
// Change the background image every 1 seconds (1000 milliseconds)
setInterval(changeBackgroundImage, 1000);