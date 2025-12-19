const type = document.getElementById('type');
const jobField = document.getElementById('jobField');
const message = document.getElementById('message');
const count = document.getElementById('count');
const form = document.getElementById('contactForm');
const modal = document.getElementById('modal');

if (type) {
  type.addEventListener('change', () => {
    jobField.classList.toggle('hidden', type.value !== 'job');
  });
}

if (message) {
  message.addEventListener('input', () => {
    count.textContent = `${message.value.length} / 100`;
  });
}

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 3000);
  });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("contactForm").reset();
    alert("送信完了");
});