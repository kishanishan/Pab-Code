



barItem.onclick = function () {
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
markItem.onclick = function () {
    document.getElementById("listItem").style.display = "none";
    document.getElementById("barItem").style.display = "block";
    document.getElementById("markItem").style.display = "none";



}
function resumeBtn() {
    document.getElementById("resumeItem").style.display = "block";
    document.getElementById("containerItem").style.display = "none";
    document.getElementById("appliedItem").style.display = "none";
    document.getElementById("alertItem").style.display = "none";
    document.getElementById("savedItem").style.display = "none";

}
function backBtn() {
    document.getElementById("containerItem").style.display = "block";
    document.getElementById("resumeItem").style.display = "none";
    document.getElementById("appliedItem").style.display = "none";


}
function userBtn() {
    document.getElementById("containerItem").style.display = "block";
    document.getElementById("resumeItem").style.display = "none";

}
function broseBtn() {
    window.location.href = "http://127.0.0.1:5500/browse.html";

}
function proBtn() {
    document.getElementById("containerItem").style.display = "block";
    document.getElementById("resumeItem").style.display = "none";
    document.getElementById("appliedItem").style.display = "none";
    document.getElementById("alertItem").style.display = "none";
    document.getElementById("savedItem").style.display = "none";



}
function profileBtn() {
    document.getElementById("containerItem").style.display = "block";

}
function appBtn() {
    document.getElementById("appliedItem").style.display = "block";
    document.getElementById("containerItem").style.display = "none";
    document.getElementById("resumeItem").style.display = "none";
    document.getElementById("alertItem").style.display = "none";
    document.getElementById("savedItem").style.display = "none";



}
function backforwardBtn() {
    document.getElementById("containerItem").style.display = "none";
    document.getElementById("resumeItem").style.display = "block";
    document.getElementById("appliedItem").style.display = "none";


}
function alertBtn() {
    document.getElementById("alertItem").style.display = "block";
    document.getElementById("appliedItem").style.display = "none";
    document.getElementById("containerItem").style.display = "none";
    document.getElementById("resumeItem").style.display = "none";
    document.getElementById("savedItem").style.display = "none";

}
function backforwardToBtn() {
    document.getElementById("appliedItem").style.display = "block";
    document.getElementById("resumeItem").style.display = "none";
    document.getElementById("alertItem").style.display = "none";

}
function saveBtn() {
    document.getElementById("savedItem").style.display = "block";
    document.getElementById("alertItem").style.display = "none";
    document.getElementById("appliedItem").style.display = "none";
    document.getElementById("containerItem").style.display = "none";
    document.getElementById("resumeItem").style.display = "none";
}
function backforwardToItemBtn() {
    document.getElementById("alertItem").style.display = "block";
    document.getElementById("savedItem").style.display = "none";
    document.getElementById("appliedItem").style.display = "none";
}
function changeBtn() {
    document.getElementById("changeItem").style.display = "block";
    document.getElementById("savedItem").style.display = "none";
    document.getElementById("alertItem").style.display = "none";
    document.getElementById("appliedItem").style.display = "none";
    document.getElementById("containerItem").style.display = "none";
    document.getElementById("resumeItem").style.display = "none";
}
function backforwardToTheItemBtn() {
    document.getElementById("savedItem").style.display = "block";
    document.getElementById("alertItem").style.display = "none";
    document.getElementById("changeItem").style.display = "none";



}