const type = document.getElementById('type');
const jobField = document.getElementById('jobField');
const message = document.getElementById('message');
const count = document.getElementById('count');
const form = document.getElementById('contactForm');
const modal = document.getElementById('modal');
const header = document.getElementById('accordionHeader');
const content = document.getElementById('accordionContent');

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
    count.textContent = `0 / 100`;
    alert("送信完了");
});

header.addEventListener('click', () => {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
});
