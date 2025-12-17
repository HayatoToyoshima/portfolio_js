    const pages = {
      strawberry: "#ff4d4d",
      blueberry: "#4d79ff",
      lemon: "#ffe066",
      watermelon: "#66cc66",
      grape: "#9966cc"
    };

    function createCalendar() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();

      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();

      let html = "<table><tr>";
      const days = ["日", "月", "火", "水", "木", "金", "土"];
      days.forEach(d => html += `<th>${d}</th>`);
      html += "</tr><tr>";

      for (let i = 0; i < firstDay; i++) {
        html += "<td></td>";
      }

      for (let date = 1; date <= lastDate; date++) {
        const day = new Date(year, month, date).getDay();
        let className = "";
        if (day === 0) className = "sunday";
        if (day === 6) className = "saturday";

        html += `<td class="${className}">${date}</td>`;

        if (day === 6 && date !== lastDate) {
          html += "</tr><tr>";
        }
      }

      html += "</tr></table>";
      document.getElementById("calendar").innerHTML = html;
    }

    function navigate(page) {
      document.body.style.backgroundColor = pages[page];
      createCalendar();
    }

    document.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => navigate(btn.dataset.page));
    });

    navigate("strawberry");