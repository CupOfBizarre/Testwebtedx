var slideData = {
    "1": {
        "caption": "About us",
        "description": "8Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "1.jpg"
    },
    "2": {
        "caption": "Something",
        "description": "7Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "2.jpg"
    },
    "3": {
        "caption": "Nothing",
        "description": "6Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "3.jpg"
    },
    "4": {
        "caption": "What do we do",
        "description": "5Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "4.jpg"
    },
    "5": {
        "caption": "Media",
        "description": "4Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "5.jpg"
    },
    "6": {
        "caption": "35mm",
        "description": "3Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "6.jpg"
    },
    "7": {
        "caption": "Hello",
        "description": "2Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
        "image": "7.jpg"
    },
    "8": {
        "caption": "Bye",
        "description": "1Lorem ipsum Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus suspendisse vestibulum luctus; eros himenaeos litora mollis taciti. Commodo ante maximus morbi faucibus ultrices neque eros tempor. Habitant molestie etiam tristique elit curae platea",
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

