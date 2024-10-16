const projects = document.querySelector(".projects").children

for (let proj of projects) {
    proj.children[0].addEventListener("click", () => {
        if (proj.children[1].style.maxHeight != "100%") {
            proj.children[1].style.maxHeight = "100%"
            proj.children[0].children[0].children[0].style.rotate = "135deg"

        }
        else {
            proj.children[1].style.maxHeight = "0px"
            proj.children[0].children[0].children[0].style.rotate = "0deg"
        }
    })
}

function copytext() {
        navigator.clipboard.writeText("social.reproduce078@slmails.com");
        alert("Copied the text: " + "social.reproduce078@slmails.com");
}