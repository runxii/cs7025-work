<template>
  <div class="pg-w-sidebar">
    <SideBar
        :items="[
        { id: 'coding', title: 'Coding' },
        { id: 'visual', title: 'Visual' }
      ]"
    />
    <div class="content">

    </div>
  </div>
</template>

<script>
import SideBar from "@/components/organisms/sidebar.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projects",
  components: {
    SideBar
  }
};
</script>
