<template>
  <div>
    <NaviBar/>
  </div>
  <router-view />
</template>

<script>
import NaviBar from "@/components/organisms/navibar.vue";
export default {
  name: 'App',
  components: {NaviBar}
};
</script>