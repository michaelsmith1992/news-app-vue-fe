<template>
  <div class="topics">
    <h1>Topics</h1>
    <TopicsTable />
  </div>
</template>

<script>
// @ is an alias to /src
import TopicsTable from "@/components/Topics.vue";

export default {
  name: "Topics",
  components: {
    TopicsTable
  }
};
</script>
