var slideData = {
    "1": {
        "caption": "About us",
        "description": "1Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "1.jpg"
    },
    "2": {
        "caption": "Something",
        "description": "2Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "2.jpg"
    },
    "3": {
        "caption": "Nothing",
        "description": "3Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "3.jpg"
    },
    "4": {
        "caption": "What do we do",
        "description": "4Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "4.jpg"
    },
    "5": {
        "caption": "Media",
        "description": "5Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "5.jpg"
    },
    "6": {
        "caption": "35mm",
        "description": "6Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "6.jpg"
    },
    "7": {
        "caption": "Hello",
        "description": "7Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "7.jpg"
    },
    "8": {
        "caption": "Bye",
        "description": "8Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "8.jpg"
    }

};
var modalContainer = document.getElementById("modal-container"); 
window.onclick= function(event) {
    if (event.target== modalContainer) {
        modalContainer.style.display = "none";
    }
}
function openModal(imgId) {
    modalContainer.style.display = "block";
    var imageModal = document.getElementById("imgid");
    imageModal.src= "pokemon/"+slideData[imgId.toString()]["image"];
    var descriptionModal = document.getElementById("modal-description");
    descriptionModal.innerText= slideData[imgId.toString()]["description"];
}
function hoverImage(imgId) {
    var caption = document.getElementById("caption");
    caption.innerText= slideData[imgId.toString()]["caption"];
    caption.style.animation = "none";
    caption.style.display = "none";
    setTimeout(function(){
        caption.style.display = "block";
        caption.style.animation = "fadein 0.5s";
    }, 100);
}

const speakers = [
    { name: "John Doe", topic: "Innovation", image: "speaker1.jpg" },
    { name: "Jane Smith", topic: "Sustainability", image: "speaker2.jpg" },
    { name: "Alan Walker", topic: "Artificial Intelligence", image: "speaker3.jpg" }
  ];

  // Sponsors data
  const sponsors = [
    { image: "sponsor1.png" },
    { image: "sponsor2.png" },
    { image: "sponsor3.png" }
  ];

  // Function to load speakers dynamically
  function loadSpeakers() {
    const speakerContainer = document.getElementById("speaker-list");
    speakers.forEach(speaker => {
      const speakerDiv = document.createElement("div");
      speakerDiv.classList.add("speaker");
      speakerDiv.innerHTML = `
        <img src="${speaker.image}" alt="${speaker.name}">
        <h3>${speaker.name}</h3>
        <p>Topic: ${speaker.topic}</p>
      `;
      speakerContainer.appendChild(speakerDiv);
    });
  }

  // Function to load sponsors dynamically
  function loadSponsors() {
    const sponsorContainer = document.getElementById("sponsor-list");
    sponsors.forEach(sponsor => {
      const sponsorDiv = document.createElement("div");
      sponsorDiv.classList.add("sponsor");
      sponsorDiv.innerHTML = `<img src="${sponsor.image}" alt="Sponsor">`;
      sponsorContainer.appendChild(sponsorDiv);
    });
  }

  // Load data on page load
  window.onload = function() {
    loadSpeakers();
    loadSponsors();
  };

