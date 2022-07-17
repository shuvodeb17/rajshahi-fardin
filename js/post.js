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

// Post start here
var post = document.getElementById('post');
var userPostMainOne = document.getElementById('user-post-main-one');
var userPostMainTwo = document.getElementById('user-post-main-two');
var topNavbar = document.getElementById('navbar');
var normalPost = document.getElementById('normal-post-input');
var MainPostPage = document.getElementById('main-post-sec');
MainPostPage.style.display = 'none';
normalPost.addEventListener('click', function () {
  post.classList.add('post-add');
  MainPostPage.style.display = 'block';
  post.style.background = 'black';
  normalPost.style.display = 'none';
  topNavbar.style.display = 'none';
  userPostMainOne.style.display = 'none';
  userPostMainTwo.style.display = 'none';

})

// Close Button
var postMainPage = document.getElementById('post');
var closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', function () {
  normalPost.style.display = 'block';
  MainPostPage.style.display = 'none';
  normalPost.classList.add('normal-input-auto');
  userPostMainOne.style.display = 'block';
  userPostMainTwo.style.display = 'block';
  post.style.background = '#0080FF';
  post.classList.add('post-main-page')
  topNavbar.style.display = 'block';
});
// post end here