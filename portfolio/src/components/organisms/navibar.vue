<template>
    <nav id="navi-bar">
      <ul>
        <li v-for="item in items" :key="item.id" class="navi-link">
          <AppLink :to="item.address">{{ item.name }}</AppLink>
        </li>
      </ul>
    </nav>
</template>

<script>
import AppLink from "@/components/atoms/link.vue"
export default {
  name: 'NaviBar',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [], // Ensure an empty array as default
    },
  },
  components: {
    AppLink
  }
};
</script>

<style>

/* Header with shadow, the line of shadow also serves as the divider between the navigation bar and the main content area. */
nav {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100vw;
  padding: 20px 0;
  background-color: #f3f1ea;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Navigation bar, set colors*/
nav ul {
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2em;
}

nav ul li,
.navi-link a {
  display: flex;
  flex-flow: row wrap;
  text-decoration: none;
  color: #333;
  padding: 8px 15px;
  border-radius: 5px;
}

/* Set active navigation item's color */
.navi-link a:hover,
.router-link-exact-active {
  background-color: #d1cec9;
  color: #000;
  box-shadow: 0 0 5px 10px #d1cec9;
  /* Make the transition between active and inactive modes more smoothly */
  transition: 0.2s;
  transition-timing-function: ease-in-out;
}

.navi-link a:visited {
  color: #333;
}

</style>