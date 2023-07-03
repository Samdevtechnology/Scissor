const links = document.querySelectorAll("nav a");
const sideBar = document.getElementById("side-bar");
const closeSidebarBtn = document.querySelector("#side-bar button");
const menuBar = document.querySelector("#header .menu");
const toggleList = document.querySelectorAll("#faqs ul li");

const removeActiveClass = (hash) => {
  for (const link of links) {
    link.classList.remove("active");
    if (link.hash === hash) {
      link.classList.add("active");
    }
  }
};

const toggleOpenClass = (activelist) => {
  for (const list of toggleList) {
    if (list !== activelist) {
      list.classList.remove("open");
    }
    const img = list.querySelector("img");
    img.src = img.src.replace("minus", "plus");
    img.alt = "open icon";
  }
  if (activelist.classList.value !== "open") {
    const img = activelist.querySelector("img");
    img.src = img.src.replace("plus", "minus");
    img.alt = "close icon";
  }
  activelist.classList.toggle("open");
};

const scrollToSection = (hash) => {
  const section = document.querySelector(hash.toLowerCase());
  if (section) {
    sideBar.classList.remove("active");
    removeActiveClass(hash);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

addEventListener("hashchange", (e) => {
  scrollToSection(e.target.location.hash);
});

// Run on load

window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (hash) {
    scrollToSection(hash);
  }
});

menuBar.addEventListener("click", () => {
  sideBar.classList.add("active");
});

closeSidebarBtn.addEventListener("click", () => {
  sideBar.classList.remove("active");
});

for (const list of toggleList) {
  list.addEventListener("click", () => {
    toggleOpenClass(list);
  });
}
