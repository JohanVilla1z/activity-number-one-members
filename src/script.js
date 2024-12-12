const buttonSocial = document.getElementById("social-button");
const closeButton = document.getElementById("close");

buttonSocial.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    dialog.classList.add("active");
});

closeButton.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.close();
    dialog.classList.remove("active");
});
