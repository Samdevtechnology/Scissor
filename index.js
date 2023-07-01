const links = document.querySelectorAll("#header nav a");

const scrollToSection = (hash) => {
  const section = document.querySelector(hash.toLowerCase());
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

const removeActiveClass = () => {
  for (const link of links) {
    link.classList.remove("active");
  }
};

for (const link of links) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const hash = e.target.hash;
    if (!hash) return;
    removeActiveClass();
    window.location.hash = hash;
    scrollToSection(hash);
    link.classList.add("active");
  });
}

// Run on load

window.addEventListener("load", () => {
  const hash = window.location.hash;
  for (const link of links) {
    if (hash === link.hash) link.classList.add("active");
  }
  if (hash) {
    scrollToSection(hash);
  }
});
