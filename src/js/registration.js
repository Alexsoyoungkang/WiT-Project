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

// Registration form for Fosters/Adopters

document
  .getElementById("registration-form-adopters")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const streetAddress = document.getElementById("street-address").value;
    const city = document.getElementById("city").value;
    const stateProvince = document.getElementById("state-province").value;
    const zipCode = document.getElementById("zip-code").value;
    const email = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    let interest = document.querySelector('input[name="interests"]:checked');

    interest = interest ? interest.value : null;
    let contactMethod = document.querySelector('input[name="contact"]:checked');

    contactMethod = contactMethod ? contactMethod.value : null;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userAdoptersData = {
      firstName,
      lastName,
      phoneNumber,
      streetAddress,
      city,
      stateProvince,
      zipCode,
      email,
      password,
      interest,
      contactMethod,
    };

    localStorage.setItem("userAdoptersData", JSON.stringify(userAdoptersData));

    alert("Account created successfully!");
    document.getElementById("registration-form-adopters").reset();
  });

// Registration form for Organizations/Vets

document
  .getElementById("register-form-organizations")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const organizationName = document.getElementById("organization-name").value;

    const address = document.getElementById("address").value;
    const organizationCity = document.getElementById("organization-city").value;
    const stateProvince = document.getElementById("province").value;
    const postalCode = document.getElementById("postal-code").value;
    const contactPerson = document.getElementById("contact-person");
    const organizationPhoneNumber = document.getElementById(
      "organization-number"
    ).value;
    const website = document.getElementById("website");
    const mission = document.getElementById("mission");

    const organizationEmail =
      document.getElementById("organization-email").value;

    const organizationPassword = document.getElementById(
      "organization-password"
    ).value;

    const organizationPasswordConfirm = document.getElementById(
      "organization-password-confirm"
    ).value;

    if (organizationPassword !== organizationPasswordConfirm) {
      alert("Passwords do not match!");
      return;
    }

    const userOrganizationData = {
      organizationName,
      address,
      organizationCity,
      stateProvince,
      postalCode,
      contactPerson,
      organizationPhoneNumber,
      website,
      mission,
      organizationEmail,
      organizationPassword,
      organizationPasswordConfirm,
    };

    localStorage.setItem(
      "userOrganizationData",
      JSON.stringify(userOrganizationData)
    );

    alert("Account created successfully!");
    document.getElementById("register-form-organizations").reset();
  });

// Log in

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    const storedAdoptersData = JSON.parse(
      localStorage.getItem("userAdoptersData")
    );

    const storedOrganizationData = JSON.parse(
      localStorage.getItem("userOrganizationData")
    );

    const message = document.getElementById("login-message");

    if (
      storedAdoptersData &&
      storedAdoptersData.email === loginEmail &&
      storedAdoptersData.password === loginPassword
    ) {
      message.textContent =
        "Login successful! Welcome, " + storedAdoptersData.firstName;
      message.style.color = "green";
    } else if (
      storedOrganizationData &&
      storedOrganizationData.organizationEmail === loginEmail &&
      storedOrganizationData.organizationPassword === loginPassword
    ) {
      message.textContent =
        "Login successful! Welcome, " + storedOrganizationData.organizationName;
      message.style.color = "green";
    } else {
      message.textContent = "Login failed. Invalid email or password.";
      message.style.color = "red";
    }

    loginForm.reset();
  });
});
