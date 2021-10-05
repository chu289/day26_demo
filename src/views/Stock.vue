<template>
  <div class="stock">
    <StockContent />

  </div>
</template>

<script>
import StockContent from '@/components/StockContent/index.vue'


export default {
  name: 'Stock',
  components:{
    StockContent
  }

}
</script>

<style>
  html,body{
    height: 100%;
    widows: 100%;
    overflow: hidden;
  }
</style>