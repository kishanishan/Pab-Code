barItem.onclick = function(){
    document.getElementById("listItem").style.display = "block";
    document.getElementById("listItem").style.backgroundColor = "black";
    document.getElementById("listItem").style.color = "white";
    document.getElementById("listItem").style.width = "100%";
    document.getElementById("listItem").style.height = "auto";
    document.getElementById("listItem").style.zIndex = "1";
    document.getElementById("listItem").style.fontSize = "12px";
    document.getElementById("browseItem").style.fontSize = "12px";
    document.getElementById("userId").style.fontSize = "12px";
    document.getElementById("markItem").style.display = "block";
    document.getElementById("barItem").style.display = "none";



}
markItem.onclick = function(){
    document.getElementById("listItem").style.display = "none";
    document.getElementById("barItem").style.display = "block";
    document.getElementById("markItem").style.display = "none";



}
