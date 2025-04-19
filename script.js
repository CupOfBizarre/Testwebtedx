/* ========================================
   Slider Data (unchanged)
======================================== */
var slideData = {
  "1": { "caption": "About us",       "description": "1Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea", "image": "1.jpg" },
  "2": { "caption": "Something",      "description": "2Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea", "image": "2.jpg" },
  "3": { "caption": "Nothing",        "description": "3Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea", "image": "3.jpg" },
  "4": { "caption": "What do we do",  "description": "4Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea", "image": "4.jpg" },
  "5": { "caption": "Media",          "description": "5Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea", "image": "5.jpg" },
  "6": { "caption": "35mm",           "description": "6Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea", "image": "6.jpg" },
  "7": { "caption": "Hello",          "description": "7Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea", "image": "7.jpg" },
  "8": { "caption": "Bye",            "description": "8Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea", "image": "8.jpg" }
};

var modalContainer = document.getElementById("modal-container");

/* ========================================
   Modal dismiss (desktop)
======================================== */
window.onclick = function (event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = "none";
    document.body.style.overflow = "auto"; // re-enable scrolling
  }
};

/* ========================================
   Desktop: open centred modal
======================================== */
function openModal(imgId) {
  // Hide desktop slider caption
  document.getElementById("caption").style.display = "none";

  // Scroll to top & lock body scroll
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";

  /* --- key change: use flex to keep modal centred --- */
  modalContainer.style.display = "flex";

  // Populate image & text
  var imageModal = document.getElementById("imgid");
  imageModal.src = "pokemon/" + slideData[String(imgId)].image;

  var descriptionModal = document.getElementById("modal-description");
  descriptionModal.innerText = slideData[String(imgId)].description;
}

/* Desktop: hover caption */
function hoverImage(imgId) {
  var caption = document.getElementById("caption");
  caption.innerText = slideData[String(imgId)].caption;
  caption.style.animation = "none";
  caption.style.display = "block";
  setTimeout(() => (caption.style.animation = "fadein 0.5s"), 100);
}
function hideCaption() {
  document.getElementById("caption").style.display = "none";
}

/* ========================================
   Mobile Slider expand / zoom
======================================== */
function openMobileModal(imgId) {
  const mobileImg = document.querySelector(`.mobile-img[data-id="${imgId}"]`);
  if (!mobileImg) return;

  const isZoomed = mobileImg.classList.contains("zoom");
  const isExpanded = mobileImg.classList.contains("expand");

  // Reset others
  document.querySelectorAll(".mobile-img").forEach((img) => {
    img.classList.remove("zoom", "expand");
    const cap = img.querySelector(".mobile-caption");
    if (cap) cap.innerText = slideData[img.getAttribute("data-id")].caption;
  });

  if (!isZoomed && !isExpanded) {
    mobileImg.classList.add("zoom");
    mobileImg.querySelector(".mobile-caption").innerText =
      slideData[String(imgId)].caption;
  } else if (isZoomed && !isExpanded) {
    mobileImg.classList.remove("zoom");
    mobileImg.classList.add("expand");
    mobileImg.querySelector(".mobile-caption").innerText =
      slideData[String(imgId)].description;
  }
}

/* ========================================
   Dummy data loaders
======================================== */
const speakers = [
  { name: "John Doe", topic: "Innovation",          image: "speaker1.jpg" },
  { name: "Jane Smith", topic: "Sustainability",    image: "speaker2.jpg" },
  { name: "Alan Walker", topic: "Artificial Intelligence", image: "speaker3.jpg" }
];
const sponsors = [
  { image: "sponsor1.png" },
  { image: "sponsor2.png" },
  { image: "sponsor3.png" }
];

function loadSpeakers() {
  const container = document.getElementById("speaker-list");
  const coming = document.createElement("div");
  coming.className = "speaker";
  coming.innerHTML = "<h3>Coming Soon</h3>";
  container.appendChild(coming);
}
function loadSponsors() {
  const container = document.getElementById("sponsor-list");
  const coming = document.createElement("div");
  coming.className = "sponsor";
  coming.innerHTML = "<h3>Coming Soon</h3>";
  container.appendChild(coming);
}

window.onload = function () {
  loadSpeakers();
  loadSponsors();
};
