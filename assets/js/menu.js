export function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

export function hideMenu() {
  const menu = document.getElementById("menu");
  menu.classList.remove("active");
}
