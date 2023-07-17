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
dataItem . onclick = function(){
    document.getElementById("dataItem").style.fontWeight = "600";
    document.getElementById("dataItem").style.backgroundColor = "#2c0264";
    document.getElementById("dataItem").style.color = "#fff";
    document.getElementById("jobItem").style.backgroundColor ="#fff";
    document.getElementById("jobItem").style.color ="black";
    document.getElementById("comboItem").style.backgroundColor ="#fff";
    document.getElementById("comboItem").style.color ="black";
    
}
jobItem .onclick = function(){
    document.getElementById("jobItem").style.fontWeight = "600";
    document.getElementById("jobItem").style.backgroundColor ="#2c0264";
    document.getElementById("jobItem").style.color ="#fff";
    document.getElementById("dataItem").style.backgroundColor = "#fff";
    document.getElementById("dataItem").style.color = "black";
    document.getElementById("comboItem").style.backgroundColor ="#fff";
    document.getElementById("comboItem").style.color ="black";



}
comboItem.onclick = function(){
    document.getElementById("comboItem").style.fontWeight = "600";
    document.getElementById("comboItem").style.backgroundColor ="#2c0264";
    document.getElementById("comboItem").style.color ="#fff";
    document.getElementById("dataItem").style.backgroundColor = "#fff";
    document.getElementById("dataItem").style.color = "black";
    document.getElementById("jobItem").style.backgroundColor ="#fff";
    document.getElementById("jobItem").style.color ="black";
}