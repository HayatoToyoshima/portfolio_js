const button = document.getElementById("button");
const form = document.getElementById("contactForm");

button?.addEventListener("click", () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = (document.getElementById("name")).value;
  const email = (document.getElementById("email")).value;
  const message = (document.getElementById("message")).value;

  if (name && email && message) {
    alert("送信完了");
    form.reset();
  }
});
