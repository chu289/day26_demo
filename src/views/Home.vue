<template>
  <div class="home">
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


export default {
  name: 'Home',
  components: {
    MainHeader,
    MainMenu,
  }
}
</script>

<style>

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
