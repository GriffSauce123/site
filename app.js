const projects = document.querySelector(".main").children

for (let proj of projects) {
    proj.children[1].addEventListener("click", () => {
        if (proj.children[3].style.display != "block") {
            proj.children[1].style.rotate = "45deg"
            proj.children[3].style.display = "block"
            proj.children[2].style.display = "none"


        }
        else {
            proj.children[1].style.rotate = "0deg"
            proj.children[2].style.display = "block"
            proj.children[3].style.display = "none"
        }
    })
}

function copytext() {
        navigator.clipboard.writeText("social.reproduce078@slmails.com");
        alert("Copied the text: " + "social.reproduce078@slmails.com");
}