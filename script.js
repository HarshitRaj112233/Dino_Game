var character = document.getElementById("character")
var block = document.getElementById("block")
var score = document.getElementById("score")
var highscore = document.getElementById("highscore")
var game = document.getElementById("game")
let score_number = 0
let hiscore_num
document.addEventListener("keydown", event => {
    if (event.key == "ArrowUp") {
        character.classList.add("animate")
    }
})
document.addEventListener("keyup", event => {

    character.classList.remove("animate")

})

var checkdead = setInterval(() => {
    var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    // var blocktop = parseInt(window.getComputedStyle(block).getPropertyValue("top"))
    // var characterleft = parseInt(window.getComputedStyle(character).getPropertyValue("left"))
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    score.innerHTML = "Score:" + score_number
    hiscore_num = localStorage.getItem("hiscore")
    highscore.innerHTML = "High Score:" + hiscore_num

    // console.log(charactertop, blocktop)
    if (blockleft < 20 && blockleft > 0 && charactertop > 130) {
        // alert("Game over")
        // block.style.animate = "none"
        block.style.display = "none"
        block.style.left = 580 + "px"
        score.innerHTML = "Score  0"
        hiscore_num = localStorage.getItem("hiscore")
        highscore.innerHTML = "High Score:" + hiscore_num

        game.style.background = "none"


    }
    if ((blockleft < 20 && blockleft > 0 && charactertop <= 130)) {


        score_number += 1
        score.innerHTML = "Score:" + score_number
        hiscore_num = localStorage.getItem("hiscore")
        if (hiscore_num === null) {
            localStorage.setItem("hiscore", score_number)
        }
        highscore.innerHTML = "High Score:" + hiscore_num


        console.log(score_number)

        if (hiscore_num < score_number) {
            localStorage.setItem("hiscore", score_number)
            highscore.innerHTML = "High Score:" + score_number
        }
    }
}, 10);