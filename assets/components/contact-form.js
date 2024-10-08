async function loadContacts(userId) {
  let data = { userID: userId };
  const json = JSON.stringify(data);
  console.log("data is ", data);
  const res = await fetch(url + "/ListContacts" + ext, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: json,
  });

  if (res.status != 200) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const resData = await res.json();
  console.log("data is ", resData);
  return resData.results;
}

document.addEventListener("DOMContentLoaded", async () => {
  console.log("user id is ", userId); 
  const form = document.getElementById("contactForm");
  const contactName = document.getElementById("inputName");
  const email = document.getElementById("inputEmail");
  const phonenum = document.getElementById("inputPhoneNumber");
  const organization = document.getElementById("inputOrganization");
  const selectAll = document.getElementById("checkAll");
  const selectStatus = document.getElementsByClassName("checkbox");
  const country = document.querySelector("countries-list select");
  const tableBody = document.querySelector("#contacts-table tbody");
  const deleteBtn = document.getElementById("deleteSelected");
  const toastLiveExample = document.getElementById("liveToast");
  const toastBody = document.querySelector("#liveToast .toast-body");

  // Global variables for pagination
  let itemsPerPage = 5; // Number of items per page
  let currentPage = 1; // Current page number
  let selectedContacts = new Set(); // Set to store selected contacts


  displayContacts(await loadContacts(userId));
  // Function to filter the contacts table based on search input
  
  async function searchContacts(searchTerm){
    let data = { userID: userId, search: searchTerm };
    const json = JSON.stringify(data);
    console.log("data is ", data);
    const res = await fetch(url + "/SearchContacts" + ext, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: json,
    });
    const resData = await res.json();
    console.log("data is ", resData);
    return resData.results;
  }
  
  
  
  
    document.getElementById("searchInput").addEventListener("keyup", async function () {
    const searchTerm = this.value.toLowerCase(); // Get the search input value and convert it to lowercase
    let foundMatch = false; // Track if a match was found

    const filteredContacts = await searchContacts(searchTerm);

    if (filteredContacts != undefined && filteredContacts.length > 0) {
      foundMatch = true;
      displayContacts(filteredContacts);
    } else {
      displayContacts(); // Clear the table if no matches found
    }

    // If no match was found, show the toast message
    if (!foundMatch && searchTerm !== "") {
      toastBody.textContent = "No contacts found!";
      const toastBootstrap =
        bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastBootstrap.show();
    }

    // If the search bar is cleared, reset the table
    if (searchTerm === "") {
      displayContacts(await loadContacts(userId)); // Reset to paginated display
    }
  });

  // Function to display filtered contacts
  function displayFilteredContacts(filteredContacts) {
    tableBody.innerHTML = ""; // Clear existing rows

    filteredContacts.forEach((contact) => {
      const isChecked = selectedContacts.has(contact.id); // Check if the contact is selected
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <th scope="row" id="contactRow">
          <input type="checkbox" class="checkbox" data-id="${contact.ID}" ${
        isChecked ? "checked" : ""
      } />
        </th>
        <td>${contact.Name}</td>
        <td>${contact.Organization}</td>
        <td>${contact.country}</td>
        <td>${contact.Email}</td>
        <td>${contact.Phone}</td>
        <td>
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a href="javascript:void(0);" class="px-2 text-primary editcontact" data-editing="false">
                <i class="bx bx-pencil font-size-18"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="javascript:void(0);" class="px-2 text-danger deleteRowBtn">
                <i class="bx bx-trash-alt font-size-18"></i>
              </a>
            </li>
          </ul>
        </td>
      `;
      tableBody.appendChild(newRow);
    });

    handleCheckboxSelection(); // Handle checkbox selection
  }

  // Event listener for form save changes button
  form.addEventListener("submit", (e) => {
    //Prevent submission if inputs are invalid(default)
    e.preventDefault();

    //If inputs of the contact fields are valid
    if (checkInputs()) {
      //Add a contact row with the corresponding data, see function below
      addContactRow();
      //Once row is added, reset the add contact form to default
      form.reset();
      //Close form(modal)
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
      );
      modal.hide();
      toastBody.textContent = "Contact has been added!";
      const toastBootstrap =
        bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastBootstrap.show();
    }
  });

  //Adds a new row of contact data to the table and stores it in the array
  async function addContactRow() {
    const contact = {
      contactName: contactName.value.trim(),
      organization: organization.value.trim() || "N/A",
      email: email.value.trim(),
      phonenum: phonenum.value.trim(),
      userID: userId,
      country: document.getElementById("inputCountry").value || "N/A",
    };

    
    console.log("contact is ", contact);

    const res = await fetch(url + "/AddContacts" + ext, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
  });
    
   
  displayContacts(await loadContacts(userId));
}

  // Display contacts on the current page
  function displayContacts(contactsArray) {
    // Clear existing rows
    tableBody.innerHTML = "";

    // Calculate start and end indexes


    // Get contacts for the current page
    //const contactsToShow = contactsArray.slice(start, end);

    console.log("contacts", contactsArray);
    // Iterate over the contacts for the current page and render them
    if (contactsArray === undefined || contactsArray.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center">No contacts found</td>
        </tr>
      `;
    } else {
      contactsArray.forEach((contact) => {
        const isChecked = selectedContacts.has(contact.ID); // Check if the contact is selected
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
          <th scope="row" id="contactRow">
            <input type="checkbox" class="checkbox" data-id="${contact.ID}" ${
          isChecked ? "checked" : ""
        } />
          </th>
          <td>${contact.Name}</td>
          <td>${contact.Organization}</td>
          <td>${contact.Country}</td>
          <td>${contact.Email}</td>
          <td>${contact.Phone}</td>
          <td>
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <a href="javascript:void(0);" class="px-2 text-primary editcontact" data-editing="false">
                  <i class="bx bx-pencil font-size-18"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0);" class="px-2 text-danger deleteRowBtn">
                  <i class="bx bx-trash-alt font-size-18"></i>
                </a>
              </li>
            </ul>
          </td>
        `;
        tableBody.appendChild(newRow);
      });
    }


  }

  // Update pagination buttons
  /*function updatePagination() {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = `
      <li class="page-item">
        <a href="#" class="page-link" id="prev"><i class="mdi mdi-chevron-left"></i></a>
      </li>
    `;

    const totalPages = Math.ceil(contactsArray.length / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
      const activeClass = i === currentPage ? "active" : "";
      pagination.innerHTML += `
        <li class="page-item ${activeClass}">
          <a href="#" class="page-link" data-page="${i}">${i}</a>
        </li>
      `;
    }

    pagination.innerHTML += `
      <li class="page-item">
        <a href="#" class="page-link" id="next"><i class="mdi mdi-chevron-right"></i></a>
      </li>
    `;

    addPaginationListeners(); // Add event listeners to the pagination buttons
  }*/

  // Add event listeners to pagination buttons
  function addPaginationListeners() {
    document.querySelectorAll(".page-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = e.target.getAttribute("data-page");

        if (page) {
          currentPage = parseInt(page);
        } else if (e.target.closest("#prev") && currentPage > 1) {
          currentPage--;
        } else if (
          e.target.closest("#next") &&
          currentPage < Math.ceil(contactsArray.length / itemsPerPage)
        ) {
          currentPage++;
        }

        displayContacts(currentPage); // Display contacts after changing page
      });
    });
  }

  // Handle select all checkboxes
  selectAll.addEventListener("change", (e) => {
    document.querySelectorAll(".checkbox").forEach((checkbox) => {
      checkbox.checked = e.target.checked;
      const contactId = parseInt(checkbox.getAttribute("data-id"));
      if(e.target.checked){
        console.log("contactId is ", contactId);
        selectedContacts.add(contactId);
        console.log("selected contacts", selectedContacts);
      }
      else{
        selectedContacts.delete(contactId);
        console.log("selected contacts", selectedContacts);
      }
    });
  });

  
  document.getElementById("contacts-table").addEventListener("change", (e) => {
    if (e.target.classList.contains("checkbox")) {
      const checkbox = e.target;
      const contactId = parseInt(checkbox.getAttribute("data-id"));
      if (checkbox.checked) {
        selectedContacts.add(contactId);
      } else {
        selectedContacts.delete(contactId);
      }
      console.log("selected contacts", selectedContacts);
    }
  });
  
  async function deleteSelectedContacts() {
    let data = { ID: Array.from(selectedContacts) };
    const json = JSON.stringify(data);
    console.log("selected data is ", json);
    const res = await fetch(url + "/DeleteContacts" + ext, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: json,
    });
    displayContacts(await loadContacts(userId));
  }

  async function deleteRow(ID) {
    let data = { ID: ID };
    const json = JSON.stringify(data);
    console.log("data from delete btn ", json);
    const res = await fetch(url + "/DeleteContacts" + ext, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: json,
    });
    displayContacts(await loadContacts(userId));
  }

  deleteBtn.addEventListener("click", (e) => {
    deleteSelectedContacts();
    selectedContacts.clear();
    toastBody.textContent = "Selected contacts deleted successfully!";
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
  });

  async function updateRow(data) {
    const json = JSON.stringify(data);
    console.log("data is ", json);
    const res = await fetch(url + "/UpdatesContacts" + ext, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: json,
    });
    displayContacts(await loadContacts(userId));
  }
 

  // Handle individual checkbox selection
  function handleCheckboxSelection() {
    Array.from(selectStatus).forEach((checkbox) => {
      console.log("Checkbox Element:", checkbox);
      checkbox.addEventListener("change", (e) => {
        const contactId = parseInt(checkbox.getAttribute("data-id"));
        console.log("contactId is", contactId);
        if (checkbox.checked) {
          selectedContacts.add(contactId); // Add contact ID to selected set
        } else {
          selectedContacts.delete(contactId); // Remove contact ID from selected set
        }

      });
    });
  }

 

  // Event listener for individual contact delete
  document.addEventListener("click", (e) => {
    // Target individual row delete button using class "deleteRowBtn" shown in addContactRow function
    if (e.target.closest(".deleteRowBtn")) {
      const row = e.target.closest("tr");
      const th = row.querySelector("th");
      let id = th.querySelector("input").getAttribute("data-id");
      let data = Array.isArray(id) ? id : [id];
      console.log("data from delete btn ", data);
      deleteRow(data);

      displayContacts(currentPage); // Update display
      // Show the toast message after deleting an individual row
      toastBody.textContent = `A contact was deleted successfully!`;
      const toastBootstrap =
        bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastBootstrap.show();
    }
  });

  // Event listener for bulk delete button
  deleteBtn.addEventListener("click", (e) => {
    toastBody.textContent = `Selected contacts deleted successfully!`;
    const toastBootstrap =
      bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
  });

  // Event listener for edit current contact row button
  document.addEventListener("click", (e) => {
    const editButton = e.target.closest(".editcontact");
    if (editButton) {
      const row = editButton.closest("tr");
      const cells = row.querySelectorAll("td");
      const th = row.querySelector("th");
      const ContactID = th.querySelector("input").getAttribute("data-id");

      // Check if the row is in edit mode
      const isEditing = editButton.getAttribute("data-editing") === "true";

      // Toggle between editing and saving the row
      cells.forEach((cell, index) => {
        if (index < cells.length - 1) {
          // Ignore the last cell (buttons)
          if (isEditing) {
            // Save the edited content and disable editing
            cell.contentEditable = false;
          } else {
            // Make the cell editable by adding a contenteditable attribute
            cell.contentEditable = true;
          }
        }
      });

      // Toggle button icon and state
      if (isEditing) {
        editButton.innerHTML = '<i class="bx bx-pencil font-size-18"></i>';
        editButton.setAttribute("data-editing", "false");
        console.log("row is ", row);
        console.log("data-id is ", ContactID);
        let data = {
          ContactID: ContactID,
          Name: cells[0].textContent,
          country: cells[2].textContent,
          Email: cells[3].textContent,
          Phone: cells[4].textContent,
          org: cells[1].textContent,
        };
        console.log("data is ", data);  
        updateRow(data);
      } else {
        editButton.innerHTML = '<i class="bx bx-save font-size-18"></i>';
        editButton.setAttribute("data-editing", "true");
      }
    }
  });

  //Checks 'Add New' contacts form's required inputs validity
  function checkInputs() {
    let isValid = true;
    //In case the inputs before were not valid and now they are.
    //Reset the border color
    contactName.style.border = "";
    email.style.border = "";
    phonenum.style.border = "";

    //If required fields are empty, change border color to red and mark invalid
    if (contactName.value.trim() === "") {
      contactName.style.border = "1px solid red";
      isValid = false;
    }
    //calls validateEmail function to check
    if (!validateEmail(email.value)) {
      email.style.border = "1px solid red";
      isValid = false;
    }
    //calls validatePhoneNumber function to check
    if (!validatePhoneNumber(phonenum.value)) {
      phonenum.style.border = "1px solid red";
      isValid = false;
    }
    //Return input status to event listener
    return isValid;
  }

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  function validatePhoneNumber(phonenum) {
    const phoneRegex = /^[0-9]{10,}$/;
    return phoneRegex.test(phonenum.trim());
  }
});
