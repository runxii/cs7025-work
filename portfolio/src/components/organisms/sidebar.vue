<template>
  <div class="sidebar">
    <ul>
      <li v-for="item in items" :key="item.id" @click="scrollTo(item.id)">{{ item.title }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [], // Ensure an empty array as default
    },
  },
  methods: {
    scrollTo(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 20%;
}

.sidebar ul {
  width: 100%;
  margin-top: 10em;
  padding: 1em;
  list-style: none;
}

.sidebar li {
  cursor: pointer;
  margin: 1em 0;
  //font-weight: bold;
}

.sidebar li:hover {
  transition-delay: 100ms;
  transition-timing-function: ease-in-out;
  color: #93bb34;
}
</style>
