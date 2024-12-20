<template>
  <div :class="['card', backgroundClass, sizeClass]">
    <a v-if="link" :href="link" target="_blank">
      <slot />
    </a>
    <slot v-else />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  props: {
    backgroundClass: {
      type: String,
      default: "",
    },
    sizeClass: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
.card {
  width: auto;
  height: 12em;
  background-color: #93bb34;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  /* Set a mild shadow for cards */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* When hovered, card turns into semitransparent*/
.card:hover {
  opacity: 0.7;
  transition-delay: 200ms;
  transition-timing-function: ease-in-out;
}

/* Cards with different background colors */
.card.gray {
  background-color: #d1cec9;
}

.card.transparent {
  background-color: transparent;
}

.card p {
  margin-top: 10px;
  color: #333;
}

.card h3{
  margin-top: 0;
}

.card a{
  text-decoration: none;
  color: #333;
}
/* Cards with different lengths */
.card.long {
  width: 75%;
}

.card.short {
  width: 25%;
}
.card img {
  width: 100%; /* Make the image fill the width of the card */
  height: 100%; /* Make the image fill the height of the card */
  object-fit: cover; /* Crop the image to maintain aspect ratio */
  border-radius: 5px; /* Optional: Add rounded corners */
}
</style>