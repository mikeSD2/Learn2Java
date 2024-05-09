//reveal on move
const fadeElements = document.querySelectorAll(".blue-arrow");
scrollAnim = () => {
    let windowHt = window.innerHeight;
    fadeElements.forEach((element) => {
        let elementPos = element.getBoundingClientRect().top;
        if (elementPos <= windowHt / 1.1) {
            element.classList.add("faded-in");
        }
    });
};
document.addEventListener("DOMContentLoaded", scrollAnim);
window.addEventListener("scroll", scrollAnim);
//dialog. close on animationend
const loginModal = document.querySelector("#LoginModal");
const signUpModal = document.querySelector("#SignUpModal");
const openModal = document.getElementsByClassName("open-button");

function showModal(modalToShow, openbutton) {
    openbutton.addEventListener("click", () => {
        modalToShow.showModal();
    });
    modalToShow.addEventListener("click", (e) => {
        if (e.target.nodeName === "DIALOG") {
            modalToShow.setAttribute("closing", "");
            modalToShow.addEventListener(
                "animationend",
                () => {
                    modalToShow.removeAttribute("closing");
                    modalToShow.close();
                },
                { once: true }
            );
        }
    });
}
showModal(loginModal, openModal[0]);
showModal(signUpModal, openModal[1]);
//onload
const mantyping = document.querySelector("#mantyping");
window.onload = function () {
    mantyping.style.animation = "videoReveal 1s ease-out forwards";
};
