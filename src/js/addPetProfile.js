// Add pet profile

const addPetForm = document.getElementById("add-pet-form");

addPetForm.addEventListener("submit", addPetProfile);
function addPetProfile(event) {
  event.preventDefault();

  window.location.href = "../partials/OrganizationsVetsDashboard.html";

  const addPetForm = document.getElementById("add-pet-form");
  addPetForm.reset();
}
