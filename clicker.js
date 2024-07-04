let Elements = $('#path');
let ComputedColour = Elements.css("fill");

let Clicked = false; //hasn't clicked yet
let ClickCancel = false;

$(document).ready(function(){
    $("path").on("mouseover", function(){
        if (!Clicked && ComputedColour !== "darkred") {
            $(this).css("fill", "red");
        }
    });

    $("path").on("mouseout", function(){
        if (!Clicked && ComputedColour !== "darkred") {
            $(this).css("fill", ""); // Reverts to the default fill color
        } else if (Clicked && ComputedColour === "darkred") {
            $(this).css("fill","darkred");
        }
    });
    $("path").on("click", function (){
        if (!Clicked && !ClickCancel) {
            Clicked = true; // has been clicked
            $(this).css("fill", "darkred");
            ComputedColour = "darkred";
        } else if (Clicked && ComputedColour === "darkred") {
            Clicked = true;
            $(this).css("fill", "orange");
            ComputedColour = "orange";
        }  else if (Clicked && ComputedColour === "orange") {
            Clicked = true;
            $(this).css("fill", "darkblue");
            ComputedColour = "darkblue";
        } else if (Clicked && ComputedColour === "darkblue") {
            Clicked = true;
            $(this).css("fill", "lightblue");
            ComputedColour = "lightblue";
        } else if (Clicked && ComputedColour === "lightblue") {
            Clicked = true;
            $(this).css("fill", "yellow");
            ComputedColour = "yellow";
        } else if (Clicked && ComputedColour === "yellow") {
            Clicked = true;
            $(this).css("fill", "lightgreen");
            ComputedColour = "lightgreen";
        } else if (Clicked && ComputedColour === "lightgreen") {
            Clicked = true;
            $(this).css("fill", "blue");
            ComputedColour = "blue";       
        } else if (Clicked && ComputedColour === "blue") {
            Clicked = true;
            $(this).css("fill", "darkgreen");
            ComputedColour = "darkgreen";
        } else {
            Clicked = false;
            $(this).css("fill", "");
        }
    });
    
});
