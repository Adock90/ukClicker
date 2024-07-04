/* this JavaScript file will get a users location and display it 
The site will gather this data just for user purposes and nothing else 
the user will give permission 
this is for educational purposes only and it is not sent to a server */

const x = document.getElementById("loc");


function Getloc() {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else{
        x.innerHTML = "Geolocation Error"; 
    }
}

function showPosition(position){
    window.open("https://www.google.com/maps/?q="+position.coords.latitude+" "+position.coords.longitude);
      
}