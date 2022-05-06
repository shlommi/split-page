const leftScreen = document.querySelector(".left");
const rightfScreen = document.querySelector(".right");
const container = document.querySelector(".container");

leftScreen.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
leftScreen.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

rightfScreen.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
rightfScreen.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
