<template>
  <table>
    <thead>
      <tr>
        <th>Topic</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(topic,i) in topics" :key="i">
        <td>{{ topic.slug }}</td>
        <td>{{ topic.description }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { getTopics } from "../../helpers/requests";

export default {
  name: "TopicsTable",
  data() {
    return {
      topics: null
    };
  },
  async mounted() {
    this.topics = await getTopics(this);
  }
};
</script>

<style>
</style>