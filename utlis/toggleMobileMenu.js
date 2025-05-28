export const toggleMobileMenu = () => {
  document
    .getElementsByClassName("navbar-toggler")[0]
    ?.classList.toggle("open");
};
