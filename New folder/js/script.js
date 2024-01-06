// toggle class active
const navbarnavigasi = document.querySelector(".navbar-navigasi");
// ketika ham menu di klik
document.querySelector("#ham-menu").onclick = () => {
  navbarnavigasi.classList.toggle("active");
};

//  klik diluar sidebar menghilagkan nav
const ham = document.querySelector ('#ham-menu');

document.addEventListener('click', function (e){
  if (!ham.contains(e.target) && !navbarnavigasi.contains(e.target)) {
    navbarnavigasi.classList.remove('active');

  }
});
