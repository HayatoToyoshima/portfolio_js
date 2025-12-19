const type = document.getElementById('type');
const jobField = document.getElementById('jobField');
const message = document.getElementById('message');
const count = document.getElementById('count');
const form = document.getElementById('contactForm');
const modal = document.getElementById('modal');
const header = document.getElementById('accordionHeader');
const content = document.getElementById('accordionContent');
const typeValue = document.getElementById("type").value;
const jobFieldValue = document.getElementById("jobField").value;
const messageValue = document.getElementById("message").value.trim();
let hasError = false;

if (type) {
  type.addEventListener('change', () => {
    jobField.classList.toggle('hidden', type.value !== 'job');
  });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (message) {
      message.addEventListener('input', () => {
        count.textContent = `${message.value.length} / 100`;
      });
    }

    if (!typeValue) {
      document.getElementById("typeError").textContent = "お問い合わせ種別を選択してください。";
      hasError = true;
    }

    if (!jobFieldValue) {
      document.getElementById("jobFieldError").textContent = "希望職種を選択してください。";
      hasError = true;
    }

    if (!messageValue) {
      document.getElementById("messageError").textContent = "メッセージを入力してください。";
      hasError = true;
    }
    
    if (!hasError) {
      document.getElementById("contactForm").reset();
      message.value.length = 0;
      alert("送信完了");
    }
});

header.addEventListener('click', () => {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
});
