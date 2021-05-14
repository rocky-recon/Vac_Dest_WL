// Listen to the form being submitted
document.querySelector("myForm").addEventListener("submit", handleFormSubmit);

// Function needs to handle myForm being submitted
function handleFormSubmit(event) {
  // Stops the form from refreshing the page
  event.preventDefault();

  // Grab the values from form_container and storing them in wish_container
  const destinationName = event.target.elements["destination"].value;
  const destinationLocation = event.target.elements["location"].value;
  let destinationPhoto = event.target.elements["photo"].value;
  //   Need to have a default photo if user fails to provide one
  if (destinationPhoto === "") {
    photo =
      "https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80";
  }
  const destinationDescription = event.target.elements["desc"].value;

  //resets form to allow new entry
  resetFormValues();

  //   By creating a new p tag for destination* and adding it to div#list will allow you to make it look approachable
  const dest_container = document.getElementById("list");
  const dest_card = document.createElement("div");
  dest_card.classList.add("dest_card", "yourCard");
  dest_card.style.width = "18rem";

  //  Grabs form_container values and creates the card
  let destinationCard = createDestinationCard(
    destinationName,
    destinationLocation,
    destinationPhoto,
    destinationDescription
  );

  let wish_container = document.querySelector("wish_container");

  //Change list title if list is empty
  if (wish_container.children.length === 0) {
    document.querySelector("#title").innerHTML = "Wish List";
  }

  //   overwrite my form with  destinationCard
  document.querySelector("wish_container").appendChild(destinationCard);
}

function resetFormValues(form) {
  for (let i = 0; i < form.length; i++) {
    form.elements[i].value = "";
  }
}
