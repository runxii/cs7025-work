<template>
  <div class="intro">
    <div class="greetings">
      <h1><span>_</span>Hi, I'm Yang.</h1>
    </div>
    <TextParagraph id="self-intro" :content="selfIntroText" />
  </div>
</template>

<script>
import TextParagraph from "@/atoms/text.vue";

export default {
  name: "IntroSection",
  components: {
    TextParagraph,
  },
  data() {
    return {
      selfIntroText: "Enthusiastic about creative coding, utilising technology for the humane use.",
    };
  },
};
</script>
