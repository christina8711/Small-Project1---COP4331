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

  //Event listener for delete current button (for individual row delete)
  document.addEventListener("click", (e) => {
    // Target individual row delete button using class "deleteRowBtn" shown in addContactRow function
    if (e.target.closest(".deleteRowBtn")) {
      const row = e.target.closest("tr");
      //Remove that current table row
      row.remove();
      // Show the toast message after deleting an individual row
      toastBody.textContent = `A contact was deleted successfully!`;
      const toastBootstrap =
        bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastBootstrap.show();
    }
  });

  //Event listener for bulk delete button
  deleteBtn.addEventListener("click", (e) => {
    //Create a counter variable
    let rowsDeleted = 0;

    // Loop through all checkboxes and remove selected rows
    Array.from(selectStatus).forEach((checkbox) => {
      //If selected
      if (checkbox.checked) {
        //Create a variable to hold the current table row
        const row = checkbox.closest("tr");
        //Remove that current table row
        row.remove();
        //Once deleted, count it
        rowsDeleted++; 
      }
    });
    //If at least one row was deleted
    if (rowsDeleted > 0) {
      // Update the toast message with the number of contacts deleted
      toastBody.textContent = `${rowsDeleted} contact${
        rowsDeleted > 1 ? "s" : ""
      } deleted successfully!`;

      // Show the toast
      const toastBootstrap =
        bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastBootstrap.show();
    }
  });

  // Event listener for select all checkboxes
  selectAll.addEventListener("change", (e) => {
    //Create a variable holding the selectAll checked status(boolean)
    const isChecked = selectAll.checked;
    //All the other checkboxes will match the state (checked or unchecked) of the select all checkbox
    Array.from(selectStatus).forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  });

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

  function addContactRow() {
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
      <th scope="row" id="contactRow">
        <input type="checkbox" class="checkbox" />
      </th>
      <td>${fullName.value.trim()}</td>
      <td>${org.value.trim() || "N/A"}</td>
      <td>${countrySelect ? countrySelect.value : "N/A"}</td>
      <td>${email.value.trim()}</td>
      <td>${number.value.trim()}</td>
      <td>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">
            <a
              href="javascript:void(0);"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Edit"
              class="px-2 text-primary editcontact"
              data-editing="false"
              ><i class="bx bx-pencil font-size-18"></i></a>
          </li>
          <li class="list-inline-item">
            <a
              href="javascript:void(0);"
              class="px-2 text-danger deleteRowBtn"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Delete"
              ><i class="bx bx-trash-alt font-size-18"></i></a>
          </li>
        </ul>
      </td>
    `;

    tableBody.appendChild(newRow);
  }
});
