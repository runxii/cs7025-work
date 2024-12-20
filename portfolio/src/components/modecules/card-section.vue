<template>
  <div class="project-sec" :id="id">
    <!-- Section Title -->
    <div class="cards">
      <Card backgroundClass="title">{{ title }}</Card>
    </div>
    <!-- Section Content -->
    <div v-for="row in rows" :key="row.key" class="cards">
      <Card
          v-for="card in row.cards"
          :key="card.title"
          :backgroundClass="card.backgroundClass"
          :sizeClass="card.sizeClass"
          :link="card.link"
      >
        <template v-if="card.image">
          <img style="width:100%;height: 100%;" :src="card.image" :alt="card.alt" />
        </template>
        <template v-else>
          <p>{{ card.title }}</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/atoms/card.vue";

export default {
  name: "CardSection",
  components: { Card },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
};
</script>