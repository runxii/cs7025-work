<template>
  <div class="intro">
    <div id="greetings">
      <h1><span>_</span>Hi, I'm Yang.</h1>
<!--      <TextParagraph id="email" :content="contactInfo" />-->
    </div>
    <TextParagraph id="self-intro" :content="selfIntroText" />
  </div>
</template>

<script>
import TextParagraph from "@/components/atoms/text.vue";

export default {
  name: "IntroSection",
  components: {
    TextParagraph,
  },
  data() {
    return {
      contactInfo: 'liuy42@tcd.ie',
      selfIntroText: "Enthusiastic about creative coding, utilising technology for the humane use.",
    };
  },
};
</script>
