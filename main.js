// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Function to toggle between empty and full hearts
function toggleHeart(heart) {
  if (heart.textContent === EMPTY_HEART) {
    mimicServerCall()
      .then(() => {
        heart.textContent = FULL_HEART;
        heart.classList.add('activated-heart');
      })
      .catch(error => {
        const modalMessage = document.getElementById('modal-message');
        modalMessage.textContent = error;
        modalMessage.parentElement.classList.remove('hidden');
        setTimeout(() => {
          modalMessage.parentElement.classList.add('hidden');
        }, 3000); 
      });
  } else {
    heart.textContent = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
}

// Function to handle like button click
function likeButtonClick(event) {
  const heart = event.target;
  toggleHeart(heart);
}

// Add event listener to all like buttons
const likeButtons = document.querySelectorAll('.like');
likeButtons.forEach(button => {
  button.addEventListener('click', likeButtonClick);
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
