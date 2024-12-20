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

<style>

.dot {
  display: inline-block;
  vertical-align: middle;
  width: 10px;
  height: 10px;
  margin: 10px;
  background-color: #d1cec9;
  border-radius: 50%;
}

.dot.active {
  background-color: #93bb34;
}

.dot.smaller {
  scale:70%;
  margin-right:0.4em;
  margin-left:0;
  margin-top:0;
  margin-bottom:0;
}
</style>