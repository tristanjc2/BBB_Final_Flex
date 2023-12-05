const ctx = document.getElementById("myChart");
Chart.defaults.font.size = 20;
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["1990", "2000", "2010", "2020"],
    datasets: [
      {
        label: "Domestic violence statistics in percentages %",
        data: [74, 42.5, 45, 70, 100],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 15,
          },
        },
      },
    },
  },
});
