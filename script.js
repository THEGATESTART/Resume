// Alternate Fuction
const navPort = document.querySelector(".navPortfolio");
const navPorts = Array.from(navPort.children);
const myPort = document.querySelector(".containerPort");
const myPorts = Array.from(myPort.children);

const updateNav = (currentPort, targetNav) => {
    currentPort.classList.remove('active');
    targetNav.classList.add('active');
}

function changePage () {
    for(let i = 0; i < myPorts.length; i++) {
        myPorts[i].classList.remove('active');
    }
    myPorts[index].classList.add('active');
    
}

const nextPage = (currentPort, targetPort) => {
    currentPort.classList.remove('active');
    targetPort.classList.add('active');
    console.log("asdffasdg")
}

// const previousPage = (currentPort, targetPort) => {
//     currentPort.classList.remove('active');
//     targetPort.classList.add('active');
//     console.log("asdf")
// }

// Click the nav move to next portfolio
navPort.addEventListener('click', e => {
    const targetNav = e.target.closest(".folio");
    index = 0;

    if (!targetNav) return;

    const currentNav = navPort.querySelector(".active");
    const currentPort = myPort.querySelector(".active");
    const nextPort = currentPort.nextElementSibling;
    // const previousPort = currentPort.previousElementSibling;

    console.log(navPorts);

    updateNav(currentNav, targetNav);
    nextPage(currentPort, nextPort);
    // previousPage(currentPort, previousPort);
});
