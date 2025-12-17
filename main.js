    const pages = {
      strawberry: "#ff4d4d",
      blueberry: "#4d79ff",
      lemon: "#ffd84d",
      watermelon: "#5fbf7a",
      grape: "#9b5de5"
    };

    function createCalendar(themeColor) {
      document.documentElement.style.setProperty("--theme-color", themeColor);

      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();

      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();

      const days = ["日", "月", "火", "水", "木", "金", "土"];

      let html = "<table><tr>";
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

    document.querySelectorAll("header button").forEach(btn => {
      btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-4px) scale(1.05)";
        btn.style.boxShadow = "0 10px 20px rgba(0,0,0,0.25)";
      });

      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0) scale(1)";
        btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
      });

      btn.addEventListener("click", () => navigate(btn.dataset.page));
    });

    navigate("strawberry");