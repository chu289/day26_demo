<template>
  <div class="sale">
    <SaleContent />

  </div>
</template>

<script>
import SaleContent from '@/components/SaleContent/index.vue'


export default {
  name: 'Sale',
  components:{
    SaleContent
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