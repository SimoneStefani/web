<template>
  <div id="app" :class="$route.name">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

//Author: Marcel Eschmann

export default {
  name: 'app'
}
</script>

<style lang="scss" type="text/scss">
  #app {
    display: flex;
  }
</style>
