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
    "The Pau Hana Diner Dashboard page is a KPI dashboard that I developed for a fictional restaruant.  It shows the user sales and revenue generated, listing out transactions, and how much traffic they have recieved.  It also has a functional sidebar.",
    "The Book Buddy page is a web page that is developed using React and MUI for a fictional library for web based reservation and checkout of books.",
    "The Book It travel app is developed to use the amadeus api for travels to create personalized travel packages to their destination of choice.",
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
