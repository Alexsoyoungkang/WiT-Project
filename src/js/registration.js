function openForm(formType) {
  // Hide both forms initially
  document.getElementById("forsters-adopters-form").style.display = "none";
  document.getElementById("organizations-vets-form").style.display = "none";

  // Show the selected form based on button clicked
  if (formType === "forsters-adopters") {
    document.getElementById("forsters-adopters-form").style.display = "flex";
  } else if (formType === "organizations-vets") {
    document.getElementById("organizations-vets-form").style.display = "flex";
  }
}

function signIn() {
  // Redirect or show the sign-in form
  alert("Redirect to sign-in page or show sign-in form.");
}
