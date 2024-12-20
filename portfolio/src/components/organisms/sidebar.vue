<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <button class="toggle-btn" @click="toggleSidebar">
      <FontAwesomeIcon :icon="isCollapsed ? 'angle-right' : 'angle-left'" />
    </button>
    <ul>
      <li v-for="item in items" :key="item.id" @click="scrollToSection(item.id)">
        <FontAwesomeIcon :icon="item.icon" class="sidebar-icon" />
        <span v-if="!isCollapsed">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
library.add(faAngleRight, faAngleLeft);

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  components: {
    FontAwesomeIcon,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 180px;
  position: fixed; /* Fix the sidebar on the screen */
  top: 100px; /* Ensure the sidebar starts below the navigation bar */
  left: 0;
  overflow-y: auto; /* Allow scrolling if the content exceeds the sidebar height */
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 80px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin-top: 80px;
}

.sidebar li {
  display: flex;
  align-items: center;
  padding: 10px;
}

.sidebar-icon {
  margin-right: 10px;
}

.sidebar.collapsed .sidebar-icon {
  margin-right: 0;
}

.sidebar.collapsed span {
  display: none;
}

.toggle-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  margin: 10px;
  transition: transform 0.3s ease;
}

.toggle-btn:hover {
  transform: scale(1.1);
}

.sidebar ul li:hover {
  color: #93bb34;
  transition: 100ms ease;
}
</style>
