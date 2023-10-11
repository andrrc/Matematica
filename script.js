document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggle = document.querySelector(".dropdown-toggle");
    var dropdownContent = document.querySelector(".dropdown-content");
  
    dropdownToggle.addEventListener("mouseover", function() {
      dropdownContent.style.display = "block";
    });
  
    dropdownToggle.addEventListener("click", function(event) {
      event.stopPropagation();
      dropdownContent.style.display = "block";
    });
  
    document.addEventListener("mouseover", function(event) {
      if (!dropdownToggle.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = "none";
      }
    });
  });
  