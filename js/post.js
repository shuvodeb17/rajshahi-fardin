// navbar start here
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
// navbar end here



// post start here
var userMainPost1 = document.querySelector('.user-post-main-class1');
var userMainPost2 = document.querySelector('.user-post-main-class2');
var normalPostInput = document.getElementById('normal-post-input');
var post = document.getElementById('post');
var mainPostSec = document.getElementById('main-post-sec');
var navbarSec = document.querySelector('.navbar');
mainPostSec.style.display = 'none';


normalPostInput.addEventListener('click', function () {
  mainPostSec.style.display = 'block';
  normalPostInput.style.display = 'none';
  post.style.background = 'black';
  navbarSec.style.display = 'none';
  userMainPost1.style.display = 'none';
  userMainPost2.style.display = 'none';

});


var closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', function () {
  mainPostSec.style.display = 'none';
  normalPostInput.style.display = 'block';
  normalPostInput.style.margin = '2% auto';
  post.style.background = '#0080FF';
  navbarSec.style.display = 'block'
  userMainPost1.style.display = 'block';
  userMainPost2.style.display = 'block';

});

// user post start here
// user post end here
// post end here