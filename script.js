$(document).ready(function () {
    let c = document.querySelector("#colors")
    //addRows user story
   
    $(".add-rows").click(function (){
        /*Steps:
        1. Create row div.
        2. Add boxes according to how many columns exist
        3. Add to grid container div
        */
        let rowElement = document.createElement("div")
        rowElement.className = "row"
       
        $( "#row-one" ).each( function(){
            console.log( "number of children for " + $( this ).index() + "th parent div is " + $( this ).children( ".col" ).length )
            for(let i=0; i < $( this ).children( ".col" ).length; i++){
                let box = document.createElement("div")
                box.className = "col box border border-dark d-flex justify-content-center align-items-center"
                box.innerHTML = "Column"
                $(rowElement).append(box)
            }
            console.log(rowElement)
            $(".grid-container").append(rowElement)
          })

        
    })
    //Adding Columns
    $(".add-columns").click(function () {
        /*Steps:
        1. Create the box
        2. For all rows that exist, append another box to the ones that exist.
        */
        let divCol1 = document.createElement("div")
        divCol1.classList = "col box border border-dark d-flex justify-content-center align-items-center"
        divCol1.innerHTML = "Column"
        
        $(".row").append(divCol1)

    })
    //Removing Rows
    $(".remove-rows").click(function () {
        let grid = document.getElementById("grid")
        grid.removeChild(grid.lastElementChild)
    })

    //Removing Columns
    $(".remove-columns").click(function () {
        $( ".row" ).each( function(){
            $(this).children().last().remove()
        })
       
    })

    //Dropdown made, function for clicking on a box to change color user story
     $(document).on("click", ".box", function () {
        $(this).css("background-color",c.value)
    })

    //Fill all uncolored cells
    $(".fill-uncolored").click(function () {
        $( ".box" ).each( function(){
            if($(this).css("background-color") === "rgba(0, 0, 0, 0)"){
                $(this).css("background-color", c.value)
            }
        })
        
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

    $(document).on("mouseenter mouseleave", ".box", function () {
        if (isDown) {
            let currentSize = $('.box').css('font-size');
            currentSize = 50;
            $(this).css('font-size', currentSize)
            $(this).css("background-color", c.value)
        } 
    })
})