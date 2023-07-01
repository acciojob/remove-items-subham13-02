//your JS code here. If required.
// script.js

window.onload = function() {
  var colorSelect = document.getElementById("colorSelect");
  var removeButton = document.getElementById("removeButton");

  removeButton.addEventListener("click", function() {
    var selectedIndex = colorSelect.selectedIndex;
    if (selectedIndex !== -1) {
      colorSelect.remove(selectedIndex);
    }
  });
};
