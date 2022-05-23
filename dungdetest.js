var popup = document.getElementById("popup");
// Get the button that opens the modal
var dontshowAgain = document.getElementById("show-again");
// Get the <span> element that closes the modal
var skip = document.getElementById("skip");
localStorage.setItem("1","2")
// When the user clicks the button, open the modal
if (localStorage.getItem("not-show") == null) {
    localStorage.setItem("not-show", "notShow")
}
var popup2 = localStorage.getItem("not-show")
if (popup2 == "notShow") { popup.style.display =  "block"; }
// When the user clicks on <span> (x), close the modal
skip.onclick = function () {
  popup.style.display = "none";
    // if (autoSkipCbx.checked) {
    //     console.log("checked!")
    //     localStorage.setItem("autoSkipCbx", "checked")
    // }
}
// don't show again
dontshowAgain.onclick = function () {
  popup.style.display = "none";
  localStorage.setItem("not-show", "Show")
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}