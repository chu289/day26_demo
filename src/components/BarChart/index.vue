<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["name", "data"],
  data() {
    return {
      chartData: {
        labels: [
          "2021-01",
          "2021-02",
          "2021-03",
          "2021-04",
          "2021-05",
          "2021-06",
          "2021-07",
          "2021-08",
          "2021-09",
          "2021-10",
          "2021-11",
          "2021-12",
        ],
        datasets: [
          {
            borderWidth: 0,
            label: this.name,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            data: this.data,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: "#F1F6F9",
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: "#F1F6F9",
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
          labels: {
            fontColor: "#F1F6F9",
            fontSize: 35,
          },
        },
        // cutoutPercentage: 80,
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  watch: {
    name: function() {
      this.renderChart(
        {
          labels: [
            "2021-01",
            "2021-02",
            "2021-03",
            "2021-04",
            "2021-05",
            "2021-06",
            "2021-07",
            "2021-08",
            "2021-09",
            "2021-10",
            "2021-11",
            "2021-12",
          ],
          datasets: [
            {
              borderWidth: 0,
              label: this.name,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              data: this.data,
            },
          ],
        },
        {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "#F1F6F9",
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "#F1F6F9",
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
          legend: {
            display: true,
            labels: {
              fontColor: "#F1F6F9",
              fontSize: 35,
            },
          },
          // cutoutPercentage: 80,
          responsive: true,
          maintainAspectRatio: false,
        }
      );
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
