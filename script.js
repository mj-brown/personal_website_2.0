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
    "The Mixed Messages page is a random fortune teller.  The user follows the prompt and then clicks the 'Fates' button.  Once the button is clicked the message generator will provide a random message.",
    "The Plumeria Lab Services page is a web page for a mobile phlebotomy company.  It lists out the services and what a potential patient must do to be able to get the highest quality service available..",
    "The Kalihi Boogie Board Club page is a landing site for a fiction club. It lists out when and where the club meets up and what their interests are.",
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
