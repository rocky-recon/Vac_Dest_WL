// Listen to the form being submitted
document.querySelector("#myForm").addEventListener("submit", handleFormSubmit);

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
  const destinationDescription = event.target.elements["description"].value;

  //resets form to allow new entry
  resetFormValues();

  //  By creating a new p tag for destination* and adding it to div#list will allow you to make it look approachable
  const dest_container = document.getElementById("list");
  const dest_card = document.createElement("div");
  dest_card.classList.add("dest_card", "yourCard");
  dest_card.style.width = "18rem";

  //   Nelly, if you are reading this, I was only able to work on this document this morning. I will continue to refine this webpage over the weekend.

  dest_card.innerHTML = `<img src=${photo} class="card-img-top" alt=${destination}|${location}>
    <div class="dest_card-body">
      <h5 class="dest_card-title">${destination}</h5>
      <h6>${location}</h6>
      <p class="dest_card-text">${description}</p>
      <a href="#" btn_type="edit_btn" class="btn btn-warning">Edit</a>
      <a href="#" btn_type="delete_btn" class="btn btn-danger">Delete</a>
    </div>
  `;

  dest_container.appendChild(dest_card);

  dest_card.addEventListener("click", handleClick);
}

function resetFormValues() {
  document.getElementById("destination").value = "";
  document.getElementById("location").value = "";
  document.getElementById("photo").value = "";
  document.getElementById("description").value = "";
}

function handleClick(e) {
  const elt = e.target;

  if (elt.getAttribute("btn_type") === "delete_btn") {
    deleteCard(elt);
  } else if (elt.getAttribute("btn_type") === "edit_btn") {
    handleEdit(elt);
  }
}

function deleteCard(btn) {
  btn.parentElement.parentElement.remove();
}

function handleEdit(elt) {
  const cardBody = elt.parentElement;

  const oldDest = cardBody.children[0];
  const oldLoc = cardBody.children[1];
  const oldDesc = cardBody.children[2];

  const card = cardBody.parentElement;
  const oldPhoto = card.children[0];

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

  if (newPhoto !== "") {
    oldPhoto.setAttribute("src", newPhoto);
  }

  if (newDesc !== "") {
    oldDesc.innerText = newDesc;
  }
}
