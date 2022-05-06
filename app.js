// Get the modal
let modal = document.getElementById("modal");
// Get the modal content
let modalContent = document.getElementById("modal-content");
// Get the button that opens the modal
let btn = document.getElementsByClassName("myBtn");

let content = document.getElementsByClassName("flip-card-back");
let modalimg = document.getElementById("modal-img");
let img = document.getElementsByClassName("imgprojet");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close");

console.log(img);

// When the user clicks the button, open the modal

for (let i = 0; i < btn.length; i++) {
    let thisBtn = btn[i];
    let thisContent = content[i];
    let thisImg = img[i];
    console.log(thisImg);
    console.log(thisContent);
    thisBtn.addEventListener(
        "click",
        function () {
        modalContent.innerHTML = thisContent.innerHTML;
        modal.style.display = "block";
        modalimg.innerHTML = "<img src='" + thisImg.src + "'/>";
        console.log(thisImg);
        modalimg.style.display = "block";
        },
        false
    );
    span[0].onclick = function () {
        modal.style.display = "none";
    };
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};




// Slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// Validation du formulaire
function validate() {
    let firstName = document.getElementById("name").value;
    let lastName = document.getElementById("lastname").value;
    let msgContent = document.getElementById("msg").value;
    let firstNameRGEX = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,100}$/u;
    let lastNameRGEX = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,100}$/u;
    let msgContentRGEX = /^[A-Za-z]{1,500}$/;
    let firstNameResult = firstNameRGEX.test(firstName);
    let lastNameResult = lastNameRGEX.test(lastName);
    let msgContentResult = msgContentRGEX.test(msgContent);
    alert(
        "Prénom : " +
        firstNameResult +
        " | Nom : " +
        lastNameResult +
        " | Message : " +
        msgContentResult
    );
    if (firstNameResult == false) {
        alert("Prénom invalide");
        return false;
    }
    if (lastNameResult == false) {
        alert("Nom invalide");
        return false;
    }
    if (msgContentResult == false) {
        alert("Message invalide");
        return false;
    }
    return true;
}
