

function pageWidth(){
    var ww = document.body.scrollWidth;
    if(ww>580)
    {
        var bgs = document.getElementById("bgs");
        bgs.style.width = "480px";
        bgs.style.marginLeft = "auto";
        bgs.style.marginRight = "auto";
        
    }
}
window.onload = pageWidth;



