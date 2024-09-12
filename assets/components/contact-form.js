document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const fullName = document.getElementById("inputName");
  const email = document.getElementById("inputEmail");
  const number = document.getElementById("inputPhoneNumber");
  const org = document.getElementById("inputOrganization");
  const selectAll = document.getElementById("checkAll");
  const selectStatus = document.getElementsByClassName("checkbox");
  const countrySelect = document.querySelector("countries-list select");
  const tableBody = document.querySelector("#contacts-table tbody");
  const deleteBtn = document.getElementById("deleteSelected");
  const toastLiveExample = document.getElementById("liveToast");
  const toastBody = document.querySelector("#liveToast .toast-body");

  // Function to filter the contacts table based on search input
document.getElementById("searchInput").addEventListener("keyup", function () {
  const searchTerm = this.value.toLowerCase(); // Get the search input value and convert it to lowercase
  const rows = document.querySelectorAll("#contacts-table tbody tr");
  let foundMatch = false; // Track if a match was found

  rows.forEach((row) => {
    // Get the text content of each row and check if it contains the search term
    const name = row.cells[1].textContent.toLowerCase();
    const organization = row.cells[2].textContent.toLowerCase();
    const country = row.cells[3].textContent.toLowerCase();
    const email = row.cells[4].textContent.toLowerCase();
    const phoneNumber = row.cells[5].textContent.toLowerCase();

    // If any of the cell content matches the search term, show the row, otherwise hide it
    if (
      name.includes(searchTerm) ||
      organization.includes(searchTerm) ||
      country.includes(searchTerm) ||
      email.includes(searchTerm) ||
      phoneNumber.includes(searchTerm)
    ) {
      row.style.display = "";
      foundMatch = true; // A match was found
    } else {
      row.style.display = "none";
    }
  });

  // If no match was found, show the toast message
  if (!foundMatch && searchTerm !== "") {
    toastBody.textContent = "No contacts found!";
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
  }

  // If the search bar is cleared, reset the table
  if (searchTerm === "") {
    rows.forEach((row) => {
      row.style.display = ""; // Show all rows
    });

    // Optionally, show a toast message that the search has been reset
    toastBody.textContent = "Search reset!";
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
  }
});

  // Global variables for pagination
  let contactsArray = []; // Array to hold all contact objects
  let itemsPerPage = 5; // Number of items per page
  let currentPage = 1; // Current page number
  let selectedContacts = new Set(); // Set to store selected contacts

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
    }
  });

  //Adds a new row of contact data to the table and stores it in the array
  function addContactRow() {
    const contact = {
      id: Date.now(), // Generate unique ID for each contact
      fullName: fullName.value.trim(),
      org: org.value.trim() || "N/A",
      country: countrySelect ? countrySelect.value : "N/A",
      email: email.value.trim(),
      number: number.value.trim(),
    };

    contactsArray.push(contact); // Add contact to array

    displayContacts(currentPage); // Display contacts based on the current page
  }

  // Display contacts on the current page
  function displayContacts(page) {
    // Clear existing rows
    tableBody.innerHTML = "";

    // Calculate start and end indexes
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Get contacts for the current page
    const contactsToShow = contactsArray.slice(start, end);

    // Iterate over the contacts for the current page and render them
    contactsToShow.forEach((contact) => {
      const isChecked = selectedContacts.has(contact.id); // Check if the contact is selected
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <th scope="row" id="contactRow">
          <input type="checkbox" class="checkbox" data-id="${contact.id}" ${
        isChecked ? "checked" : ""
      } />
        </th>
        <td>${contact.fullName}</td>
        <td>${contact.org}</td>
        <td>${contact.country}</td>
        <td>${contact.email}</td>
        <td>${contact.number}</td>
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

    updatePagination(); // Update pagination buttons
    handleCheckboxSelection(); // Handle checkbox selection
    updateSelectAllCheckbox(); // Update "Select All" checkbox based on current selection
  }

  // Update pagination buttons
  function updatePagination() {
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
  }

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
    const isChecked = selectAll.checked;

    // Select or deselect all contacts in the array
    contactsArray.forEach((contact) => {
      if (isChecked) {
        selectedContacts.add(contact.id); // Add contact ID to selected set
      } else {
        selectedContacts.delete(contact.id); // Remove contact ID from selected set
      }
    });

    // Re-render the current page to reflect the selection change
    displayContacts(currentPage);
  });

  // Handle individual checkbox selection
  function handleCheckboxSelection() {
    Array.from(selectStatus).forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => {
        const contactId = parseInt(checkbox.getAttribute("data-id"));

        if (checkbox.checked) {
          selectedContacts.add(contactId); // Add contact ID to selected set
        } else {
          selectedContacts.delete(contactId); // Remove contact ID from selected set
        }

        updateSelectAllCheckbox(); // Update "Select All" checkbox state
      });
    });
  }

  // Update "Select All" checkbox state based on selected contacts
  function updateSelectAllCheckbox() {
    const allSelected = contactsArray.every((contact) =>
      selectedContacts.has(contact.id)
    );

    selectAll.checked = allSelected; // Set "Select All" checkbox to checked if all contacts are selected
  }

  // Event listener for individual contact delete
  document.addEventListener("click", (e) => {
    // Target individual row delete button using class "deleteRowBtn" shown in addContactRow function
    if (e.target.closest(".deleteRowBtn")) {
      const row = e.target.closest("tr");
      const index = Array.from(tableBody.children).indexOf(row);
      const actualIndex = (currentPage - 1) * itemsPerPage + index;
      const contactId = contactsArray[actualIndex].id;

      contactsArray.splice(actualIndex, 1); // Remove from array
      selectedContacts.delete(contactId); // Remove from selected contacts set

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
    // Filter out the selected contacts from the array
    contactsArray = contactsArray.filter(
      (contact) => !selectedContacts.has(contact.id)
    );

    // Clear the selected contacts set
    selectedContacts.clear();

    // Update the display after deletion
    displayContacts(currentPage);
    // Show the toast message after bulk deletion
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
    fullName.style.border = "";
    email.style.border = "";
    number.style.border = "";

    //If required fields are empty, change border color to red and mark invalid
    if (fullName.value.trim() === "") {
      fullName.style.border = "1px solid red";
      isValid = false;
    }
    //calls validateEmail function to check
    if (!validateEmail(email.value)) {
      email.style.border = "1px solid red";
      isValid = false;
    }
    //calls validatePhoneNumber function to check
    if (!validatePhoneNumber(number.value)) {
      number.style.border = "1px solid red";
      isValid = false;
    }
    //Return input status to event listener
    return isValid;
  }

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  function validatePhoneNumber(number) {
    const phoneRegex = /^[0-9]{10,}$/;
    return phoneRegex.test(number.trim());
  }
});
