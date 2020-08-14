const LoginButton = document.querySelector("#login")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

LoginButton.addEventListener("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})

