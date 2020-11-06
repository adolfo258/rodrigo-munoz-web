const form = document.getElementById("form");
const popupBtn = document.getElementById("popupBtn");
const popupContainer = document.getElementById("popupContainer");

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const cel = e.target.cel.value;
  const message = e.target.message.value;
  const marca = e.target.marca.value;

  firebase
    .database()
    .ref("rodrigo-munoz")
    .push({ name, email, cel, marca, message })
    .then(() => {
      form.reset();
      popupContainer.classList.add("active");
    });
});

popupBtn.addEventListener("click", () => {
  popupContainer.classList.remove("active");
});
