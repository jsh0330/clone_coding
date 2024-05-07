
NodeList.prototype.map = Array.prototype.map;

const all = document.querySelector("input.all");
const terms = document.querySelectorAll("input.term");
const smsCheck = document.getElementsByClassName("sms_check");

all.addEventListener("click", () => {
  terms.forEach((term) => {
    term.checked = all.checked;
  });
  if (all.checked) {
    for (let i = 0; i < smsCheck.length; i++) {
      smsCheck[i].style.color = 'blue';
    }
  } else {
    for (let i = 0; i < smsCheck.length; i++) {
      smsCheck[i].style.color = '';
    }
  }
});

terms.forEach((term) => {
  term.addEventListener("click", (e) => {
    all.checked = terms.map((term) => term.checked).filter((checked) => checked).length === 5;
  });
});

for (let i = 0; i < smsCheck.length; i++) {
  smsCheck[i].addEventListener('click', function() {
    if(this.style.color === 'blue'){
      this.style.color = '';
    } else {
      this.style.color = 'blue';
    }
    let allChecked = true;
    for (let j = 0; j < smsCheck.length; j++) {
      if (smsCheck[j].style.color !== 'blue') {
        allChecked = false;
        break;
      }
    }
    all.checked = allChecked;
  });
}

const email = document.getElementById('email');
const check_button = document.getElementById('check_button');

// 이메일 입력 시 이벤트 리스너 추가
email.addEventListener('input', function() {
  // 입력된 값이 이메일 형식인지 확인
  if (checkEmail(email.value)) {
    // 이메일 형식이 올바르면 중복 확인 버튼 활성화
    check_button.disabled = false;
    check_button.style.color = "blue";
    check_button.style.cursor = "pointer"

  } else {
    // 이메일 형식이 올바르지 않으면 중복 확인 버튼 비활성화
    check_button.disabled = true;
    check_button.setAttribute("style", "color:lightgrey");
  }
});

// 이메일 형식이 올바른지 확인하는 함수
function checkEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const phonenumber = document.getElementById('phonenumber');
const check_phonenumber = document.getElementById('check_phonenumber');
const certification = document.getElementById('certification');

function checkPhonenumber(phone){
  if(phone.length === 11){
    return true;
  }else{
    return false;
  }
}

phonenumber.addEventListener('input', function() {
  if(checkPhonenumber(phonenumber.value)){
    check_phonenumber.disabled = false;
    check_phonenumber.style.color = "blue";
    check_phonenumber.style.backgroundColor = "white";
    check_phonenumber.style.cursor = "pointer"
    check_phonenumber.style.border = "1px solid lightgrey"
  } else{
    check_phonenumber.disabled = true;
    check_phonenumber.style.backgroundColor = "lightgrey";
    check_phonenumber.style.color = "grey";
  }
});

check_phonenumber.addEventListener('click', function(){
  check_phonenumber.disabled = true;
  certification.style.backgroundColor = 'white';
  check_phonenumber.textContent = "인증번호 재전송";
  certification.style.fontSize = "10px"
  check_phonenumber.style.backgroundColor = "lightgrey";
  check_phonenumber.style.color = "grey";
  check_phonenumber.style.cursor = "arrow"
  check_phonenumber.style.border = "1px solid lightgrey"
});


const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const passwordError = document.getElementsByClassName("password_error");

password1.addEventListener('input', function () {
  if(!checkPassword(password1.value)){
    password1.style.borderColor='red';
    password1.style.outline='none';
    passwordError[0].innerText = '올바르지 않은 비밀번호입니다';
  }else{
    password1.style.borderColor='blue';
    password1.style.outline='none';
    passwordError[0].innerText = ''
  }
});

password2.addEventListener('input', function () {
  if(checkPassword(password2.value) && (password1.value === password2.value)){
    
    password2.style.borderColor='blue';
    password2.style.outline='none';
    passwordError[1].innerText = ''
  }else{
    password2.style.borderColor='red';
    password2.style.outline='none';
    passwordError[1].innerText = '비밀번호가 서로 일치하지 않습니다.';
  }
});

function checkPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

