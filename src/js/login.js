// Log in

const login = document.getElementById("login-form");

login.addEventListener("submit", userLogin);
function userLogin(event) {
  event.preventDefault();

  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  const storedAdoptersData = JSON.parse(
    localStorage.getItem("userAdoptersData")
  );

  const storedOrganizationData = JSON.parse(
    localStorage.getItem("userOrganizationData")
  );

  if (
    storedAdoptersData &&
    storedAdoptersData.email === loginEmail &&
    storedAdoptersData.password === loginPassword
  ) {
    localStorage.setItem("loggedInUser", storedAdoptersData.firstName);
    window.location.href = "../partials/RescuesAdoptersDashboard.html";
  } else if (
    storedOrganizationData &&
    storedOrganizationData.organizationEmail === loginEmail &&
    storedOrganizationData.organizationPassword === loginPassword
  ) {
    localStorage.setItem(
      "loggedInUser",
      storedOrganizationData.organizationName
    );
    window.location.href = "../partials/OrganizationsVetsDashboard.html";
  } else {
    console.error();
  }
  const loginForm = document.getElementById("login-form");
  loginForm.reset();
}
console.log(userLogin);
