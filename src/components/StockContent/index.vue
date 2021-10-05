<script>
  import DoughnutChart from "@/components/DoughnutChart/index.vue";

  export default {
    components: {
      DoughnutChart,
    },
    data() {
      return {
        results:[
          {name: 'Butter', trends: [80, 20], backgroundColor : ["rgba(168, 230, 207, .8)", "rgba(54, 162, 235, 0.2)"]},
          {name: 'White sugar', trends: [60, 40], backgroundColor : ["rgba(220, 237, 193, .8)", "rgba(54, 162, 235, 0.2)"]},
          {name: 'Eggs', trends: [90, 10], backgroundColor : ["rgba(255, 211, 182, .8)", "rgba(54, 162, 235, 0.2)"]},
          {name: 'Baking powder', trends: [70, 30], backgroundColor : ["rgba(255, 255, 255, .8)", "rgba(54, 162, 235, 0.2)"]},
          {name: 'Vanilla extract', trends: [50, 50], backgroundColor : ["rgba(203, 240, 120, .8)", "rgba(54, 162, 235, 0.2)"]},
          {name: 'All-purpose flour', trends: [20, 80], backgroundColor : ["rgba(248, 243, 152, .8)", "rgba(54, 162, 235, 0.2)"]},
          {name: 'Colored sugar', trends: [90, 10], backgroundColor : ["rgba(241, 185, 99, .8)", "rgba(54, 162, 235, 0.2)"]},
          {name: 'Whipping cream', trends: [60, 40], backgroundColor : ["rgba(228, 97, 97, .8)", "rgba(54, 162, 235, 0.2)"]}
        ]
      };
    },
  };
</script>
<template src="./template.html"></template>
<style src="./style.css"></style>
