<template>
  <div :id="id">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "TextParagraph",
  props: {
    id: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
