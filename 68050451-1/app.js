// Select all small images in the gallery
const smallImg = document.querySelectorAll(".gallery img");
// Select the full-size image element inside the modal
const fullImg = document.querySelector(".full-image");
// Select the modal container
const modal = document.querySelector(".modal");

// Loop through each small image to add a click event
smallImg.forEach((img) => {
    img.addEventListener("click", () => {
        // Get the file number from the alt attribute (e.g., "1")
        const fullsize = img.getAttribute("alt");
        
        // Construct the path to the full-size image
        const path = `foods-images/full/${fullsize}.jpg`;
        
        // Update the source of the modal image
        fullImg.src = path;
        
        // Add the 'open' class to make the modal visible
        modal.classList.add("open");
    });
});

// Event listener to close the modal
modal.addEventListener("click", (e) => {
    // Check if the user clicked on the modal background (overlay), not the image
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
    }
});