import { toggleMenu, hideMenu } from "./menu";
import AOS from "aos";
import "aos/dist/aos.css";

document.getElementById("menuToggle").addEventListener("click", toggleMenu);
const menuElementArray = [...document.querySelectorAll(".hideMenuElement")];
menuElementArray.forEach((element) => {
  element.addEventListener("click", hideMenu);
});
AOS.init();
