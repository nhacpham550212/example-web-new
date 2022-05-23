
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];
var reTest = document.getElementById("reTest");
var autoSkipCbx = document.getElementById("autoSkipCbx")
// When the user clicks the button, open the modal
if (localStorage.length == 0) {
    localStorage.setItem("autoSkipCbx", "notCheckedever")
}
var checkSkip = localStorage.getItem("autoSkipCbx")
if (checkSkip == "notCheckedever") { modal.style.display = "block"; }
// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
    if (autoSkipCbx.checked) {
        console.log("checked!")
        localStorage.setItem("autoSkipCbx", "checked")
    }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
reTest.onclick = function () {
    localStorage.removeItem("autoSkipCbx")
}
