<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["backgroundColor", "name", "data"],

  mounted() {
    this.renderChart(
      {
        labels: ["Remaining", "Used"],
        datasets: [
          {
            borderWidth: 0,
            label: this.name,
            backgroundColor: this.backgroundColor,
            data: this.data,
          },
        ],
      },
      {
        legend: {
          display: true,
          labels: {
            fontColor: "#F1F6F9",
            fontSize: 14,
          },
        },
        cutoutPercentage: 80,
        responsive: true,
        maintainAspectRatio: false,
      }
    );
  },
};
</script>
