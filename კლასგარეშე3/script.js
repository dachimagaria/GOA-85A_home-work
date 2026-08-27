const modal = document.getElementById("heroModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const heroInfo = {
  "Peter Parker":
    "Peter Parker is the classic Spider-Man: a brilliant young hero balancing everyday life with the responsibility of protecting New York.",

  "Miles Morales":
    "Miles Morales brings his own style to the Spider-Man legacy, combining classic spider abilities with unique powers.",

  "Spider-Gwen":
    "Spider-Gwen is a Spider-hero from another universe who became one of the most recognizable members of the Spider-Verse."
};


function selectHero(name) {
  modalTitle.textContent = name.toUpperCase();

  modalText.textContent =
    heroInfo[name] || "Spider-Verse profile unavailable.";

  modal.classList.add("active");
}


function closeModal() {
  modal.classList.remove("active");
}


modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});


document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});


function toggleMenu() {
  const nav = document.querySelector("nav");

  if (nav.style.display === "flex") {
    nav.style.display = "";
  } else {
    nav.style.display = "flex";
    nav.style.position = "absolute";
    nav.style.top = "78px";
    nav.style.left = "0";
    nav.style.width = "100%";
    nav.style.padding = "25px";
    nav.style.background = "#080808";
    nav.style.flexDirection = "column";
  }
}


/* Navbar effect */

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 80) {
    navbar.style.background = "rgba(3,3,3,.95)";
  } else {
    navbar.style.background = "rgba(5,5,5,.72)";
  }

});