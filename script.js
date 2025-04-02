document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("editableName");
    const footerName = document.getElementById("footerName");

    // Save name to local storage
    nameElement.addEventListener("input", function() {
        localStorage.setItem("portfolioName", nameElement.innerText);
    });

    // Load saved name
    const savedName = localStorage.getItem("portfolioName");
    if (savedName) {
        nameElement.innerText = savedName;
        footerName.innerText = savedName;
    }
});
