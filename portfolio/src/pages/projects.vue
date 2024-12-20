<template>
  <div class="pg-w-sidebar">
    <SideBar
        :items=projectSidebar
    />
    <div class="content">
      <!-- Coding Section -->
      <CardSection
          id="coding"
          title="CODING"
          :rows="projectsData.codingRows"
      />
      <div class="divider-line"></div>
      <!-- Visual Section -->
      <CardSection
          id="visual"
          title="VISUAL"
          :rows="projectsData.visualRows"
      />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/organisms/sidebar.vue";
import CardSection from "@/components/modecules/card-section.vue";
import projectsData from "@/data/projects.json"

import { library } from '@fortawesome/fontawesome-svg-core'; // Core library
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons'; // Icons for Coding and Visual

// Add the icons to the library
library.add(faCode, faEye);

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projects",
  components: {
    SideBar, CardSection
  },
  data(){
    return{
      projectSidebar:[
        { id: 'coding', title: 'Coding', icon: 'code' },
        { id: 'visual', title: 'Visual', icon: 'eye' },
      ],
      projectsData
    }
  }
};
</script>

