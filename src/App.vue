<template>
  <div id="app">
    <MainHeader />
    <MainMenu />
    <transition name="slide" apper>
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
import MainHeader from '@/components/MainHeader/index.vue'
import MainMenu from '@/components/MainMenu/index.vue'

// import MainContent from '@/components/MainContent/index.vue'

export default {
  name: 'Home',
  components: {
    MainHeader,
    MainMenu,
    // MainContent
  }
}
</script>

<style>
@import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    height: 100%;
    width: 100%;
    background-color: #14274E;
  }


  html,body{
    height: 100%;
    widows: 100%;
    overflow: hidden;
  }
  .home .slide-enter-active,
  .home .slide-leave-active {
    transition: transform .5s;
  }
  .home .slide-enter{
    transform: translateY(0vh) translateX(-100%);
  }
  .home .slide-leave-to {
    transform: translateY(0vh) translateX(100%);
  }

</style>


