const form = document.getElementById("registerForm");

const modal = document.getElementById("modal");
const backdrop = document.getElementById("backdrop");
const modalUsername = document.getElementById("modalUsername");
const closeBtn = document.getElementById("closeBtn");
const nameInput = document.getElementById("name");
const onModal = form.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  backdrop.style.display = "block";
  modalUsername.innerHTML = nameInput.value;
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  backdrop.style.display = "none";
});
