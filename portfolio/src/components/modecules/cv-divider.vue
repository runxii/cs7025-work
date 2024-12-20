<template>
  <div class="divider-line">
    <h4><span>{{ title }}</span></h4>
  </div>
</template>

<script>
export default {
  name: "CvDivider",
  props: {
    title:{
      type: String,
      required: true,
    }
  }
}
</script>