// script.js

window.onload = function() {
  var removeButton = document.getElementById("removeButton");

  removeButton.addEventListener("click", function() {
    var colorSelect = document.getElementById("colorSelect");
    var selectedIndex = colorSelect.selectedIndex;
    if (selectedIndex !== -1) {
      colorSelect.options[selectedIndex].remove();
    }
  });
};
