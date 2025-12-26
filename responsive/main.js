/* =========================
   円グラフ（Chart.js）
========================= */
new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: {
    labels: ['非常に満足', '満足',　'不満'],
    datasets: [{
      data: [70, 25, 5],
      backgroundColor: ['red', 'blue', 'green']
    }]
  }
});

/* =========================
   棒グラフ（Chart.js）
========================= */
new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels:  ['4年前', '3年前', '2年前', '1年前', '今年'],
    datasets: [{
      label: '数値',
      data:[5, 12, 28, 43, 77],
      backgroundColor: '#59a14f'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
