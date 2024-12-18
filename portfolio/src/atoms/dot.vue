<template>
  <span :class="['dot', { active: isActive }]"></span>
</template>

<script>
export default {
  name: "DotItem",
  props: {
    isActive: {
      type: Boolean,
      default: false, // 是否激活状态
    },
  },
};
</script>
