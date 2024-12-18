<template>
  <NaviBar />
  <IntroSection />
  <DotsDivider />
</template>

<script>
import "../style.css"
import NaviBar from "@/organisms/navibar.vue";
import DotsDivider from "@/modecules/dotsdivider.vue";
import IntroSection from "@/organisms/introsection.vue";
export default {
  name: 'HomePage',
  components: {IntroSection, DotsDivider, NaviBar}
}
</script>