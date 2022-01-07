$(document).ready(function () {
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
        let c = document.querySelector("#colors")
        $(this).css("background-color",c.value)
    })
})