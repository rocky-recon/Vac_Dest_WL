// Listen to the form being submitted
document.querySelector("#myForm").addEventListener("submit", handleFormSubmit);

// Function needs to handle myForm being submitted
function handleFormSubmit(event) {
  // Stops the form from refreshing the page
  event.preventDefault();
  const form = event.target;

  // Grab the values from form_container and storing them in wish_container
  const destinationName = form.destination.value;
  const destinationLocation = form.location.value;
  let destinationPhoto = form.photo.value === "";
  //   Need to have a default photo if user fails to provide one
  // Get the picture from Unsplash API
  // my code goes here

  if (destinationPhoto === "") {
    photo =
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
  }
  const destinationDescription = form.description.value;

  //resets form to allow new entry
  resetFormValues();

  //  By creating a new p tag for destination* and adding it to div#list will allow you to make it look approachable

  // const dest_container = document.getElementById("list");

  const card = document.createElement("div");
  card.setAttribute("class", "dest_ard");
  card.setAttribute("style", "width: 18rem");

  //   Nelly, if you are reading this, I was only able to work on this document this morning. I will continue to refine this webpage over the weekend.

  //
  card.innerHTML = `<img src=${photo} class="card-img-top" alt=${destinationName}|${destinationLocation}>
    <div class="card-body">
      <h5 class="card-title">${destinationName}</h5>
      <h6>${destinationLocation}</h6>
      <p class="card-text">${destinationDescription}</p>
      <a href="#" btn_type="edit_btn" class="btn btn-warning">Edit</a>
      <a href="#" btn_type="delete_btn" class="btn btn-danger">Delete</a>
    </div>
  `;

  document.getElementById("card_Container").appendChild(card);

  card.addEventListener("click", handleClick);

  document.getElementById("title").innnterText = "Wishlist";
  resetFormValues(event);
}

function resetFormValues() {
  document.getElementById("destination").value = "";
  document.getElementById("location").value = "";
  document.getElementById("photo").value = "";
  document.getElementById("description").value = "";
}

function handleClick(hCEvent) {
  const event = hCEvent.target;

  if (event.getAttribute("btn_type") === "delete_btn") {
    deleteCard(hCEvent);
  } else if (event.getAttribute("btn_type") === "edit_btn") {
    handleEdit(hCEvent);
  }
}

function deleteCard(dCEvent) {
  const event = dCEvent.target;
  event.parentElement.parentElement.remove();
}

function handleEdit(hEdit) {
  const event = hEdit.target;
  const cardBody = event.parentElement.children;

  const oldDest = cardBody[0];
  const oldLoc = cardBody[1];
  const oldDesc = cardBody[2];
  const oldPhoto = event.parentElement.parentElement.children[0];

  const newDest = prompt("New Destination", oldDest.innerText);
  const newLoc = prompt("New Location", oldLoc.innerText);
  const newPhoto = prompt("New Photo", oldPhoto.getAttribute("src"));
  const newDesc = prompt("New Description", oldDesc.innerText);

  if (newDest !== "") {
    oldDest.innerText = newDest;
  }

  if (newLoc !== "") {
    oldLoc.innerText = newLoc;
  }

  if (newPhoto !== "" && newPhoto !== null) {
    oldPhoto.setAttribute("src", newPhoto);
  }

  if (newDesc !== "") {
    oldDesc.innerText = newDesc;
  }
}
