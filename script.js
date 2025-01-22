const stylingButtons = document.querySelectorAll(".styling-buttons button");
const filterableCards = document.querySelectorAll(".cards .image");
const filterCards = e => {
document.querySelector(".active").classList.remove("active");
e.target.classList.add("active");
filterableCards.forEach(image => {
image.classList.add("hide");
if (image.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
image.classList.remove("hide");
}
});
};
stylingButtons.forEach(button => button.addEventListener("click", filterCards));
