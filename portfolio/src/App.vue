<template>
  <div>
    <NaviBar
      :items="navItems"
    />
  </div>
  <router-view />
</template>

<script>
import NaviBar from "@/components/organisms/navibar.vue";
export default {
  name: 'App',
  components: {NaviBar},
  data() {
    return {
      navItems: [
        { id: "homepage", name: "Homepage", address: "/homepage" },
        { id: "resume", name: "Resume", address: "/resume" },
        { id: "projects", name: "Projects", address: "/projects" },
        { id: "notes", name: "Notes", address: "/notfound" },
        { id: "blog", name: "Blog", address: "https://emptdrawr.github.io/" },
      ]
    }
  }
};
</script>