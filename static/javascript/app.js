window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0)
    if (window.scrollY > 0) {
      nav.style.backgroundColor = "white";
      nav.style.height = "4rem";
      logo.src = "static/images/logo_black.png";
  } else {
      nav.style.backgroundColor = "rgba(0,0,0,0)";
      nav.style.height = "6rem";
      logo.src = "static/images/logo_white.png";
  }
})

// window.addEventListener("scroll", function () {
//   const nav = document.querySelector("nav");
//   const navItems = document.querySelector("#navItems > li > a");
//   // const search = document.querySelector("i");
//   const logo = document.querySelector("#logo");
//   // const navCol = document.querySelector("#navbarSupportedContent");

//   if (window.scrollY > 0) {
//       nav.style.backgroundColor = "white";
//       nav.style.height = "4rem";
//       // dropMenu.style.backgroundColor = "white";
//       // navCol.style.backgroundColor = "white";
//       logo.src = "static/images/logo_black.png";
//       navItems.style.color = "black";
//   } else {
//       nav.style.backgroundColor = "rgba(0,0,0,0)";
//       nav.style.height = "6rem";
//       // dropMenu.style.backgroundColor = "#f08724";
//       // navCol.style.backgroundColor = "#f08724";
//       logo.src = "static/images/logo_white.png";
//       navItems.style.color = "white";
//   }
// })