// Function to add a CSS class to an element
function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += " " + className;
  }
}

// Function to remove a CSS class from an element
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(
      new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
      " "
    );
  }
}

// Example usage
const nav = document.querySelector("nav");
const vCards = document.querySelectorAll(".v-card");

// Add a CSS class to the navigation
addClass(nav, "sticky");

// Add a CSS class to each v-card and remove it after a delay
vCards.forEach((card) => {
  addClass(card, "hover-effect");
  setTimeout(() => {
    removeClass(card, "hover-effect");
  }, 2000);
});
