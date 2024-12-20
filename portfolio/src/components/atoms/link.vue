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
    // isInternal(){
    //   // Decide whether it's an internal vue link or not
    //   // Do not include https://
    //   return !/^https?:\/\//.test(this.to);
    // },
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