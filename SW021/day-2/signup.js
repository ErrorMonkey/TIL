const inputId = document.querySelector(".userId");
const idSuccessMessage = document.querySelector(".id.success-message");
const idFailureMessage = document.querySelector(".id.failure-message");

const inputPw = document.querySelector(".userPw1");
const inputPw2 = document.querySelector(".userPw2");
const pwSuccessMessage = document.querySelector(".pw.success-message");
const pwFailureMessage = document.querySelector(".pw.failure-message");
const pwFailureMessage2 = document.querySelector(".pw.failure-message2");

inputId.addEventListener("keyup", () => {
  if (isValidId(inputId.value)) {
    idSuccessMessage.classList.add("hide");
    idFailureMessage.classList.remove("hide");
  } else {
    idSuccessMessage.classList.remove("hide");
    idFailureMessage.classList.add("hide");
  }
});

inputPw.addEventListener("keyup", () => {
  if (isValidPw(inputPw.value)) {
    pwSuccessMessage.classList.add("hide");
    pwFailureMessage.classList.remove("hide");
  } else {
    pwSuccessMessage.classList.remove("hide");
    pwFailureMessage.classList.add("hide");
  }
});

inputPw2.addEventListener("keyup", () => {
  if (isValidPw2(inputPw2.value)) {
    pwFailureMessage2.classList.remove("hide");
  } else {
    pwFailureMessage2.classList.add("hide");
  }
});

function isValidId(Id) {
  // 아이디에서 모든 공백을 제거합니다.
  const idWithoutSpaces = Id.replace(/\s+/g, "");

  // 문자열 길이가 8 이상 12 미만인지 확인합니다.
  if (idWithoutSpaces.length < 8 || idWithoutSpaces.length > 12) {
    return true;
  }

  // 문자열이 영문으로 시작하는지 확인합니다.
  if (!/[a-zA-Z]/.test(idWithoutSpaces[0])) {
    return true;
  }

  // 문자열에 영문과 숫자만 포함되는지 확인합니다.
  if (!/[a-zA-Z0-9]/.test(idWithoutSpaces)) {
    return true;
  }

  // 모든 조건을 만족하면 true를 반환합니다.
  return false;
}

function isValidPw(pw) {
  // 아이디에서 모든 공백을 제거합니다.
  const pwWithoutSpaces = pw.replace(/\s+/g, "");

  // 문자열 길이가 8 이상 12 미만인지 확인합니다.
  if (pwWithoutSpaces.length < 8 || pwWithoutSpaces.length > 12) {
    return true;
  }

  // 문자열이 영문으로 시작하는지 확인합니다.
  if (!/[a-zA-Z]/.test(pwWithoutSpaces[0])) {
    return true;
  }

  // 문자열에 영문과 숫자만 포함되는지 확인합니다.
  if (!/[a-zA-Z0-9]/.test(pwWithoutSpaces)) {
    return true;
  }

  // 모든 조건을 만족하면 true를 반환합니다.
  return false;
}

function isValidPw2(pw) {
  // 아이디에서 모든 공백을 제거합니다.
  const pwWithoutSpaces = pw.replace(/\s+/g, "");

  if (inputPw.value === inputPw2.value) {
    return false;
  }

  // 모든 조건을 만족하면 true를 반환합니다.
  return true;
}
