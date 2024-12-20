<template>
  <div class="dots">
    <DotItem v-for="(dot, index) in dots" :key="index" :isActive="dot.isActive" />
  </div>
</template>

<script>
import DotItem from "@/components/atoms/dot.vue";

export default {
  name: "DotsDivider",
  components: {
    DotItem,
  },
  props: {
    dots: {
      type: Array,
      required: true,
      // Default data on dots
      default: () => [
        {isActive: false},
        {isActive: false},
        {isActive: true},
        {isActive: false},
        {isActive: false},
      ],
    },
  },
};
</script>

<style>
/* Pagination dots */
.dots {
  text-align: center;
  margin: 30px 0;
}
</style>