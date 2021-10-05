<script>
import BarChart from '@/components/BarChart/index.vue'

export default {
    components:{
        BarChart
    },
    data() {
        return{
            results: [
                {name: 'Gingerbread House', trends:[80, 55, 75, 80, 90, 60, 75, 90, 60, 78, 90, 85]},                
                {name: 'Pepperidge Farm Milano', trends:[70, 62, 35, 2, 90, 60, 10, 90, 70, 80, 20, 4]},
                {name: 'Serena Egg Roll', trends:[69, 92, 62, 80, 90, 60, 10, 90, 36, 80, 90, 10]},
                {name: 'Kenji Saltine Cracker', trends:[33, 65, 40, 80, 85, 60, 10, 90, 57, 80, 90, 75]},
                {name: 'Kenji Cheese Crackers', trends:[39, 62, 40, 12, 25, 60, 10, 90, 70, 80, 90, 38]},
                {name: 'Mariani Raisins', trends:[95, 50, 24, 17, 90, 45, 10, 90, 70, 93, 90, 10]},
                {name: 'Oreo Sandwich Cookies', trends:[40, 30, 40, 25, 36, 60, 78, 90, 70, 80, 90, 95]},
                {name: 'Nissin Butter Crackers', trends:[75, 82, 40, 80, 78, 60, 10, 24, 70, 80, 90, 15]},
                {name: 'Dried Guava', trends:[96, 62, 40, 80, 90, 98, 85, 90, 70, 78, 86, 10]},
                {name: 'La Mere Poulard Cookie Assortment', trends:[19, 50, 40, 80, 90, 60, 10, 90, 70, 76, 45, 10]},
            ],
            options:[
                {label: 'Gingerbread House', value:0},                
                {label: 'Pepperidge Farm Milano', value:1},
                {label: 'Serena Egg Roll', value:2},
                {label: 'Kenji Saltine Cracker', value:3},
                {label: 'Kenji Cheese Crackers', value:4},
                {label: 'Mariani Raisins', value:5},
                {label: 'Oreo Sandwich Cookies', value:6},
                {label: 'Nissin Butter Crackers', value:7},
                {label: 'Dried Guava', value:8},
                {label: 'La Mere Poulard Cookie Assortment', value:9},
            ],
            name: '',
            trends: [],
        }
    },
    computed: {
        
    },
    mounted(){
        this.name = this.results[0].name
        this.trends = this.results[0].trends
    },
    methods: {
        select(e){
            this.name= this.results[e.target.value].name
            this.trends = this.results[e.target.value].trends
        }
    }
}
</script>
<template src="./template.html"></template>
<style src="./style.css"></style>