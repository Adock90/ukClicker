window.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === "visible")
        document.title = "ElectionMap";
    else if(document.visibilityState === "hidden")
        document.title = ">:(";
        window.alert("Where you go");
})


window.addEventListener('beforeunload', function (e){
    e.preventDefault();
    e.returnValue = '';
})
