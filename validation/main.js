  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    let hasError = false;

    const name = document.getElementById("name").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const prefecture = document.getElementById("prefecture").value;
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value;

    const katakanaRegex = /^[\u30A0-\u30FF\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      document.getElementById("nameError").textContent = "氏名を入力してください。";
      hasError = true;
    } else if (!katakanaRegex.test(name)) {
      document.getElementById("nameError").textContent = "氏名はカタカナで入力してください。";
      hasError = true;
    }

    if (!gender) {
      document.getElementById("genderError").textContent = "性別を選択してください。";
      hasError = true;
    }

    if (!prefecture) {
      document.getElementById("prefectureError").textContent = "都道府県を選択してください。";
      hasError = true;
    }

    if (!email) {
      document.getElementById("emailError").textContent = "メールアドレスを入力してください。";
      hasError = true;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "正しいメールアドレス形式で入力してください。";
      hasError = true;
    }

    if (!message) {
      document.getElementById("messageError").textContent = "問い合わせ内容を入力してください。";
      hasError = true;
    } else if (message.length > 500) {
      document.getElementById("messageError").textContent = "問い合わせ内容は500文字以内で入力してください。";
      hasError = true;
    }

    document.getElementById("contactForm").reset();

    if (!hasError) {
      alert("送信完了");
    }
  });
