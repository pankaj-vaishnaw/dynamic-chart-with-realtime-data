const ctx = document.getElementById('realTimeChart').getContext('2d');
let chart;
let dataStreamInterval;

// Initial data
const initialData = {
    labels: [],
    datasets: [{
        label: 'Value',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
    }],
};

// Chart configuration
const chartConfig = {
    type: 'line',
    data: initialData,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value',
                },
            },
        },
        animation: false,
    },
};

// Initialize the chart
chart = new Chart(ctx, chartConfig);


function addData() {
    const newData = Math.random() * 100; // Generate random data
    chart.data.labels.push(chart.data.labels.length);
    chart.data.datasets[0].data.push(newData);
    chart.update(); // Update the chart
}


dataStreamInterval = setInterval(addData, 1000);


document.getElementById('startButton').addEventListener('click', () => {
    dataStreamInterval = setInterval(addData, 1000);
});

document.getElementById('stopButton').addEventListener('click', () => {
    clearInterval(dataStreamInterval);
});

document.getElementById('resetButton').addEventListener('click', () => {
    chart.data.labels = [];
    chart.data.datasets[0].data = [];
    chart.update();
});
