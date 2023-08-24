const inputId = document.querySelector('.username');

const idSuccessMessage = document.querySelector('.success-message');
const idFailureMessage = document.querySelector('.failure-message');

inputId.addEventListener('keyup', () => {
  if (inputId.value.length < 8) {
    // 글자 수가 8글자 보다 작으면 
    idSuccessMessage.classList.add("hide");
    idFailureMessage.classList.remove("hide");
  } else {
    idSuccessMessage.classList.remove("hide");
    idFailureMessage.classList.add("hide");
  }
})