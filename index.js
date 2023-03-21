const checkbox = document.getElementById("cb-menu")
const menu = document.getElementById("menu")
const divCbMenu = document.getElementById("div-menu-exit")
// const nav = document.getElementsByClassName("menu")

checkbox.addEventListener("change", function () {
    if (this.checked) {
        menu.classList.add("show");
    }
    else {
        menu.classList.remove("show");
    }
})