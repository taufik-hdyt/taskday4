let hamburgerIsOpen = false;

const hamburgerNav = () => {
  let hamburgerNavBtn = document.getElementById("open-hamburger-menu");
  if (!hamburgerIsOpen) {
    hamburgerNavBtn.style.display = "block";
    hamburgerIsOpen = true;
  } else {
    hamburgerNavBtn.style.display = "none";
    hamburgerIsOpen = false;
  }
};
