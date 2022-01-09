$(document).ready(function () {
    let c = document.querySelector("#colors")
    let counter = 9
    //addRows user story
    $(".add-rows").click(function (){
        let divRow = document.createElement("div")
        divRow.classList.add("row")
        let divBox1 = document.createElement("div")
        divBox1.classList.add("col", "box", "border", "border-dark", "d-flex", "justify-content-center", "align-items-center")
        divBox1.innerHTML = "Column"
        let divBox2 = document.createElement("div")
        divBox2.classList.add("col", "box", "border", "border-dark", "d-flex", "justify-content-center", "align-items-center")
        divBox2.innerHTML = "Column"
        let divBox3 = document.createElement("div")
        divBox3.innerHTML = "Column"
        divBox3.classList.add("col", "box", "border", "border-dark", "d-flex", "justify-content-center", "align-items-center")
        divRow.appendChild(divBox1)
        divRow.appendChild(divBox2)
        divRow.appendChild(divBox3)
        console.log(divRow)
        //Select the container 
        container = document.querySelector(".grid-container")
        container.appendChild(divRow)
        console.log(container)
    })
    //Dropdown made, function for clicking on a box to change color user story
     $('.col').click(function () {
        $(this).css("background-color",c.value)
    })

    //Fill all uncolored cells
    $(".fill-uncolored").click(function () {
        if($(".box").css("background-color") === "rgba(0, 0, 0, 0)"){
            $(".box").css("background-color", c.value)
        }
    })

    //Fill all cells
    $(".fill-all").click(function () {
        $(".box").css("background-color", c.value)
    })

    //Clear all cells
    $(".clear-all").click(function () {
        $(".box").css("background-color", "transparent")
    })

    //Mouseover
    let isDown = false
    $(document).mousedown(function () {
        isDown = true
    }).mouseup(function () {
        isDown = false
        let currentSize = 16
        $(".box").css('font-size', currentSize)
    })

    $('.box').hover(function () {
        if (isDown) {
            let currentSize = $('.box').css('font-size');
            currentSize = 50;
            $(this).css('font-size', currentSize)
            $(this).css("background-color", c.value)
        } /*else {
            let currentSize = $('.box').css('font-size');
            currentSize = 16;
            $(this).css('font-size', currentSize)
        }*/
    })
})