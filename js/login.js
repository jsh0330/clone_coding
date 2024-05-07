const email = document.getElementById("email");
const password = document.getElementById("password");
const error_message = document.getElementsByClassName("error_message");

email.addEventListener('blur', function(){
  if (!checkEmail(email.value)) {
    email.style.borderColor = 'red';
    email.style.outline = 'none';
    error_message[0].innerText = "이메일 주소를 입력해주세요.";
  } else{
    email.style.borderColor = 'blue';
    email.style.outline = 'none';
    error_message[0].innerText = "";
  }
});

function checkEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

password.addEventListener('blur', function(){
  if (!checkPassword(password.value)) {
    password.style.borderColor = 'red';
    password.style.outline = 'none';
    error_message[1].innerText = "비밀번호를 입력해주세요.";
  } else{
    password.style.borderColor = 'blue';
    password.style.outline = 'none';
    error_message[1].innerText = "";
  }
});

function checkPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}



