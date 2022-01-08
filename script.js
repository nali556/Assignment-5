$(document).ready(function () {
    let c = document.querySelector("#colors")
    /*addRows user story
    $(".add-rows").click(function (){
        let select = document.querySelector(".grid-container")
        let rowElement = document.createElement("div")
        rowElement.classList.add("row")
        console.log(rowElement)
        let box = document.getElementById("row-one")
        console.log(box)
        
        rowElement.appendChild(box)
        rowElement.appendChild(box)
        rowElement.appendChild(box)
        console.log(rowElement)

    })*/
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
    })

    $('.box').hover(function () {
        if (isDown) {
            let currentSize = $('.box').css('font-size');
            currentSize = 50;
            $(this).css('font-size', currentSize)
            $(this).css("background-color", c.value)
        } else {
            let currentSize = $('.box').css('font-size');
            currentSize = 16;
            $(this).css('font-size', currentSize)
        }
    })
})