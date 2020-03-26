<template>
  <div class="about">
    <h1>Articles</h1>
    <getArticles />
  </div>
</template>

<script>
import getArticles from "@/components/Articles.vue";

export default {
  name: "Articles",
  components: {
    getArticles
  }
};
</script>
