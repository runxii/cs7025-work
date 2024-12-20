<template>
  <!-- External link -->
  <a v-if="isExternal" :href="to" class="app-link" :class="customClass" target="_blank">
    <slot/>
  </a>
  <!-- Internal link -->
  <router-link v-else :to="to" class="app-link" :class="customClass">
    <slot/>
  </router-link>
</template>

<script>
export default{
  name: 'AppLink',
  props:{
    to:{
      type: String,
      required: true,
      default: '#',
    },
    customClass: {
      type: String,
      default: "/notfound",
    },
  },
  computed:{
    isExternal(){
      return typeof this.to === 'string' && this.to.startsWith('http')
    }
  }
}
</script>

<style scoped>
.app-link {
  text-decoration: none;
  cursor: pointer;
}
</style>