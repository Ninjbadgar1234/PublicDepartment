// mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});



// modal Sign Up
const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

signupButton.addEventListener('click', () => {
  modal.classList.add('is-active');
});

modalBg.addEventListener('click',()=>{
  modal.classList.remove('is-active');
})
// modal Login
const loginButton = document.querySelector('#login');
const modalBgd = document.querySelector('.back2');
const modal2 = document.querySelector('.modal2');

loginButton.addEventListener('click', () => {
  modal2.classList.add('is-active');
});

modalBgd.addEventListener('click',()=>{
  modal2.classList.remove('is-active');
})
// Look NUmber Modal
const lookButton = document.querySelector('#lookNumber');
const modalBgr = document.querySelector('.back1');
const modal1 = document.querySelector('.modal1');
lookButton.addEventListener('click', () => {
  modal1.classList.add('is-active');
});
modalBgr.addEventListener('click',()=>{
  modal1.classList.remove('is-active');
})

// Map
function initMap(){
  const loc = { lat: 47.918869, lng: 106.927529 };

  const map = new google.maps.Map(document.querySelector('.map'),{
    zoom: 17,
    center: loc
  });
  const marker = new google.maps.Marker({position: loc , map:map})
}

// 47.918869,106.927529
