let isMenuOverLayVisible = false;
const menuButton = document.querySelector(".js_menu_button");
const overlayNavigation = document.querySelector(".overlay_navigation");

document.querySelector(".js_menu_button").addEventListener("click", () => {
  if (isMenuOverLayVisible === false) {
    menuButton.classList.add("on");
    overlayNavigation.classList.add("on");
    isMenuOverLayVisible = true;
    return;
  }

  menuButton.classList.remove("on");
  overlayNavigation.classList.remove("on");
  overlayNavigation.classList.add("off");
  isMenuOverLayVisible = false;
});
