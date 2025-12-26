new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
        labels: ['20代', '30代',　'40代以降'],
        datasets: [{
        data: [55.0, 35.0, 10.0],
        backgroundColor: ['red', 'blue', 'green']
        }]
    },
    plugins: [ChartDataLabels], 
    options: {
        plugins: {
            datalabels: {
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 14
                },
                formatter: (value) => {
                    return value + '%';
                },
            }
        }
    }
});

new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
    labels:  ['4年前', '3年前', '2年前', '1年前', '今年'],
    datasets: [{
        label: '売上（単位:百万円）',
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
