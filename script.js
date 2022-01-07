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
        if($(".box").css("background-color") === "none"){
            $(".box").css("background-color", c.value)
        }
    })

    //Fill all cells
    $(".fill-all").click(function () {
        $(".box").css("background-color", c.value)
    })
})