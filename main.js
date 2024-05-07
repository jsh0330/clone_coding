let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let section3SlideBox = document.querySelector(".section3_ul");
let section3SlideImg = document.querySelectorAll(".section3_slide_img");

let section3SlideWidth = 1100;
let section3CurrentIdx = 0;
let section3SlideCnt = section3SlideImg.length;

checkEnd();

//다음 버튼 클릭시 발생하는 이벤트
nextBtn.addEventListener("click", function () {
  section3CurrentIdx++;
  section3SlideBox.style.left = -(section3CurrentIdx * section3SlideWidth) + 'px';
  section3SlideBox.style.transition = '0.5s ease';
  checkEnd();

  
});

//이전버튼을 클릭할 때 발생하는 이벤트
prevBtn.addEventListener("click", function () {
  section3CurrentIdx--;
  section3SlideBox.style.left = -(section3CurrentIdx * section3SlideWidth) + 'px';
  section3SlideBox.style.transition = '0.5s ease';
  checkEnd();
});

//슬라이드가 처음이나 마지막에 도달했는지 확인하고 이전/다음 버튼을 표시/숨김처리
function checkEnd(){
  if(section3CurrentIdx <= 0){
    prevBtn.style.display = 'none';
  }else{
    prevBtn.style.display = 'block';
  }

  if(section3CurrentIdx >= section3SlideCnt - 1){
    nextBtn.style.display = 'none';
  }else{
    nextBtn.style.display = 'block';
  }
}

// section4
let btnLeft = document.querySelector(".button_left");
let btnRight = document.querySelector(".button_right");
let section4SlideBox = document.querySelector(".section4_ul");
let section4SlideImg = document.querySelectorAll(".section4_img");

let section4SlideWidth = 1110;
let section4CurrentIdx = 0;
let section4SlideCnt = section4SlideImg.length;

checkEnd1();

//다음 버튼 클릭시 발생하는 이벤트
btnRight.addEventListener("click", function () {
  section4CurrentIdx++;
  section4SlideBox.style.left = -(section4CurrentIdx * section4SlideWidth) + 'px';
  section4SlideBox.style.transition = '0.5s ease';
  checkEnd1();

  console.log(2222222);
});

//이전버튼을 클릭할 때 발생하는 이벤트
btnLeft.addEventListener("click", function () {
  section4CurrentIdx--;
  section4SlideBox.style.left = -(section4CurrentIdx * section4SlideWidth) + 'px';
  section4SlideBox.style.transition = '0.5s ease';
  checkEnd1();
});

//슬라이드가 처음이나 마지막에 도달했는지 확인하고 이전/다음 버튼을 표시/숨김처리
function checkEnd1(){
  if(section4CurrentIdx <= 0){
    btnLeft.disabled = true; 
  }else{
    btnLeft.disabled = false;
  }

  if(section4CurrentIdx >= (section4SlideCnt / 3) - 1){
    btnRight.disabled = true;
  }else{
    btnRight.disabled = false;
  }
}

// section5
let btnLeft1 = document.querySelector(".button_left1");
let btnRight1 = document.querySelector(".button_right1");
let section5SlideBox = document.querySelector(".section5_ul");
let section5SlideImg = document.querySelectorAll(".section5_img");

let section5SlideWidth = 1110;
let section5CurrentIdx = 0;
let section5SlideCnt = section5SlideImg.length;

checkEnd2();

//다음 버튼 클릭시 발생하는 이벤트
btnRight1.addEventListener("click", function () {
  section5CurrentIdx++;
  section5SlideBox.style.left = -(section5CurrentIdx * section5SlideWidth) + 'px';
  section5SlideBox.style.transition = '0.5s ease';
  checkEnd2();

  console.log(2222222);
});

//이전버튼을 클릭할 때 발생하는 이벤트
btnLeft1.addEventListener("click", function () {
  section5CurrentIdx--;
  section5SlideBox.style.left = -(section5CurrentIdx * section5SlideWidth) + 'px';
  section5SlideBox.style.transition = '0.5s ease';
  checkEnd2();
});

//슬라이드가 처음이나 마지막에 도달했는지 확인하고 이전/다음 버튼을 표시/숨김처리
function checkEnd2(){
  if(section5CurrentIdx <= 0){
    btnLeft1.disabled = true; 
  }else{
    btnLeft1.disabled = false;
  }

  if(section5CurrentIdx >= (section5SlideCnt / 3) - 1){
    btnRight1.disabled = true;
  }else{
    btnRight1.disabled = false;
  }
}