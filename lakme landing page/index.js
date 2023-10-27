// JavaScript code to toggle hover effect
const imgContainer = document.querySelector('.home__img-container');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');

setInterval(() => {
  imgContainer.classList.toggle('hovered');
}, 4000); // Adjust the delay (in milliseconds) as needed

//lightbox
// Get the necessary elements
const viewButtons = document.querySelectorAll('.view-button');
const modalContainer = document.querySelector('.modal-container');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close-button');
const overlay = document.querySelector('.overlay');

// Add click event listener to each "View" button
viewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productContainer = button.closest('.Product__content');
    const productImg = productContainer.querySelector('.Product__img');
    const productName = productContainer.querySelector('.Product__name').textContent;
    const productDetail = productContainer.querySelector('.Product__detail').textContent;
    const productPrice = productContainer.querySelector('.Product__preci').textContent;

    // Update modal content
    modalContent.querySelector('.modal-img').src = productImg.src;
    modalContent.querySelector('.modal-name').textContent = productName;
    modalContent.querySelector('.modal-detail').textContent = productDetail;
    modalContent.querySelector('.modal-price').textContent = productPrice;

    // Show modal and overlay
    modalContainer.style.display = 'block';
    overlay.style.display = 'block';
  });
});

// Add click event listener to close button
closeBtn.addEventListener('click', () => {
  // Hide modal and overlay
  modalContainer.style.display = 'none';
  overlay.style.display = 'none';
});

// Add click event listener to overlay
overlay.addEventListener('click', () => {
  // Hide modal and overlay
  modalContainer.style.display = 'none';
  overlay.style.display = 'none';
});

//video controle
const video = document.querySelector('.banner__video-container video');

video.addEventListener('mouseover', playVideo);
// video.addEventListener('mouseout', pauseVideo);

function playVideo() {
  video.play();
}

// function pauseVideo() {
//   video.pause();
// }
