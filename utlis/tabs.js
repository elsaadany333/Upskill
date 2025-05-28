export var tabs = function () {
  document.querySelectorAll(".widget-tabs")?.forEach(function (tab) {
    const contentTab = tab.querySelector(".widget-content-tab");
    const children = Array.from(contentTab.children);

    // Initially hide all children except the one with "active" class
    children.forEach((child) => (child.style.display = "none"));
    contentTab.querySelector(".active").style.display = "block";

    tab
      .querySelectorAll(".widget-menu-tab .item-title")
      .forEach(function (item, index) {
        item.addEventListener("click", function () {
          // Remove "active" class from all siblings in the menu
          item.parentElement
            .querySelectorAll(".item-title")
            .forEach((sibling) => sibling.classList.remove("active"));

          // Add "active" class to clicked item
          item.classList.add("active");

          // Show the corresponding content and hide others
          children.forEach((child, childIndex) => {
            child.style.display = childIndex === index ? "block" : "none";
            if (childIndex === index) {
              child.classList.add("active");
            } else {
              child.classList.remove("active");
            }
          });
        });
      });
  });
};
