// Add click event listeners to each project image
const projectImages = document.querySelectorAll(".projects img");
projectImages.forEach(function (image, index) {
  image.addEventListener("click", function (event) {
    // Prevent the default anchor behavior
    event.preventDefault();
    // Get title and description based on the clicked image index
    const title = image.parentElement.previousElementSibling.textContent;
    const description = getDescriptionByIndex(index);

    // Show the popup
    showPopup(title, description);
  });
});

const getDescriptionByIndex = (index) => {
  // This function should return the description based on the image index
  // You can customize this function based on your needs
  const descriptions = [
    "Description for Mixed Messages.",
    "Description for Plumeria Lab Services.",
    "Description for Kalihi Boogie Board Club.",
    // Add more descriptions as needed
  ];

  return descriptions[index] || "No description available.";
};

const showPopup = (title, description) => {
  // Create a popup with title, description, and a close button
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `
            <h4>${title}</h4>
            <p>${description}</p>
            <button onclick="closePopup()">Close</button>
        `;

  // Append the popup to the body
  document.body.appendChild(popup);
};

const closePopup = () => {
  // Remove the popup from the body
  const popup = document.querySelector(".popup");
  if (popup) {
    document.body.removeChild(popup);
  }
};
