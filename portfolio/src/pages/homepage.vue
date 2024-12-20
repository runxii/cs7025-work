<template>
  <IntroSection />
  <DotsDivider />
</template>

<script>
import DotsDivider from "@/components/modecules/dotsdivider.vue";
import IntroSection from "@/components/organisms/introsection.vue";
export default {
  name: 'HomePage',
  components: {IntroSection, DotsDivider}
}
</script>