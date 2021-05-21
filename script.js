// this calls a function
usa();

// Listen to the form being submitted
document
  .getElementById("myBtn")
  .addEventListener("click", handleUnsplashButton);

// Function needs to handle myForm being submitted
// function handleFormSubmit(event)
function handleUnsplashButton(event) {
  // Stops the form from refreshing the page
  event.preventDefault();
  // let queryParameter = element.parentElement.search.value;

  // Grab the values from form_container and storing them in wish_container
  const destinationName = document.getElementById("destination").value;
  const destinationLocation = document.getElementById("location").value;
  const destinationDescription = document.getElementById("description").value;

  console.log(destinationName, destinationLocation, destinationDescription);
  //resets form to allow new entry
  // resetFormValues();
  handleSubmit();
}

//  function
function usa() {
  let url = `https://unsplashdemo90.herokuapp.com/destinations`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((destDataBase) => {
      console.log(destDataBase);
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("style", "width: 18rem");
      card.innerHTML = `<div class="card-body">
  <img class="card-img-top" src=${destDataBase[0].photo}}>
      <h5 class="card-title">${destDataBase[0].name}</h5>
      <h6>${destDataBase[0].location}</h6>
      <p class="card-text">${destDataBase[0].description}</p>
      <a href="#" btn_type="edit_btn" class="btn btn-warning">Edit</a>
      <a href="#" btn_type="delete_btn" class="btn btn-danger">Delete</a>
    </div>
  `;

      document.getElementById("card_Container").appendChild(card);

      resetFormValues();
    });
}

function handleSubmit(event) {
  // event.preventDefault();
  // const userInputDestination = document.getElementById("destination").value;
  // const userInputLocation = document.getElementById("location").value;
  // const userInputDescription = document.getElementById("description").value;
  // let url = `https://api.unsplash.com/search/photos?client_id=pIUUYn0Gfen6hujUezLUCh-ttRVUN1OYVOJ-iuw8wDw&query= ${userInputDestination}&& ${userInputLocation}&& ${userInputDescription}
  //  `;
}
// function addUnsplashphotos(pictures) {
//   const random = Math.floor(Math.random() * pictures.length);

//   const photoURL = pictures[random].urls.thumb;

//   const userInputDestination = document.getElementById("destination").value;
//   const userInputLocation = document.getElementById("location").value;
//   const userInputDescription = document.getElementById("description").value;

//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.setAttribute("style", "width: 18rem");

//   Nelly, if you are reading this, I was only able to work on this document this morning. I will continue to refine this webpage over the weekend.

//
//   card.innerHTML = `<div class="card-body">
//   <img class="card-img-top" src=${photoURL}>
//       <h5 class="card-title">${userInputDestination}</h5>
//       <h6>${userInputLocation}</h6>
//       <p class="card-text">${userInputDescription}</p>
//       <a href="#" btn_type="edit_btn" class="btn btn-warning">Edit</a>
//       <a href="#" btn_type="delete_btn" class="btn btn-danger">Delete</a>
//     </div>
//   `;

//   document.getElementById("card_Container").appendChild(card);

//   resetFormValues();
// }

function resetFormValues() {
  document.getElementById("destination").value = "";
  document.getElementById("location").value = "";
  // document.getElementById("photo").value = "";
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

  // function createURL(queryParameter) {
  //   let finalQueryParameter = "";
  //   if (finalQueryParameter.length === queryParameter.length) {
  //     resetSearchInputPlaceholderforEmptyString();
  //     return;
  //   }

  //   for (let index of queryParameter) {
  //     if (index === " ") {
  //       index = "-";
  //       finalQueryParameter += index;
  //     } else {
  //       finalQueryParameter += index;
  //     }
  //   }
  //   const URL = `https://api.unsplash.com/search/photos?query=${finalQueryParameter}&id_client=iLxWwy7a-A_s0refRv7yMaLVrR38MXGU5Nbnzbbxhx8`;
  // }
}
// let destinationPhoto = form.photo.value === "";
//   Need to have a default photo if user fails to provide one
// Get the picture from Unsplash API
// my code goes here

// if (destinationPhoto === "") {
//   photo =
//     "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
// }
