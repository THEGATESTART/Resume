//Scroll Fuction
const imageRound = document.querySelector('.imageRouded');
const profilename = document.querySelector('.profileName');
const navbar = document.querySelector('.navBar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 550) {
        imageRound.classList.add("hide");
        profilename.classList.add("show");
        navbar.style.position = "sticky";
    } else {
        imageRound.classList.remove("hide");
        profilename.classList.remove("show");
    }
  console.log(window.scrollY); 
});

// Alternate Fuction
const navPort = document.querySelector(".navPortfolio");
const myPort = document.querySelectorAll(".gallery");

window.onload = () => {
    navPort.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("folio")) {
            navPort.querySelector(".active").classList.remove('active');
            selectedItem.target.classList.add('active');

            let navName = selectedItem.target.getAttribute("data-name");

            myPort.forEach((pages) => {
                let imagePage = pages.getAttribute("data-name");

                if (imagePage == navName) {
                    pages.classList.add("active");
                } else {
                    pages.classList.add("hide");
                    pages.classList.remove("active");
                }
            })
        } 
    }
}

