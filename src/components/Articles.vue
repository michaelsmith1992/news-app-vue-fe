<template>
  <table class="articles-table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Topics</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(article,i) in articles" :key="i">
        <td>{{ article.title }}</td>
        <td>{{ article.topic }}</td>
      </tr>
    </tbody>
    <div class="page_links">
      <ul>
        <li v-for="index in pages" :key="index">
          <a
            v-on:click="changePage(index)"
            v-bind:class="[index === cur_page ? selected : '', notSelected]"
          >{{index}}</a>
        </li>
      </ul>
    </div>
    <p>Total: {{total_count}}</p>
  </table>
</template>

<script>
import { getArticles } from "../../helpers/requests";

export default {
  name: "ArticlesTable",
  data() {
    return {
      articles: null,
      total_count: null,
      pages: null,
      cur_page: 1,
      selected: "selected",
      notSelected: "not-selected",
      init_length: null
    };
  },
  methods: {
    changePage: async function(number) {
      const { articles, total_count } = await getArticles(number, this);
      this.articles = articles;
      this.total_count = total_count;
      this.pages = Math.ceil(total_count / this.init_length);
      this.cur_page = number;
    }
  },
  async mounted() {
    const { articles, total_count } = await getArticles(undefined, this);
    this.articles = articles;
    this.total_count = total_count;
    this.init_length = articles.length;
    this.pages = Math.ceil(total_count / articles.length);
  }
};
</script>

<style scoped>
.selected {
  font-weight: bolder;
  color: blue;
}
.not-selected {
  cursor: pointer;
}

table.articles-table {
  width: 50%;
  margin-left: 25%;
}

.page_links ul {
  list-style-type: none;
}

ul li {
  display: inline;
  padding: 15px;
}
</style>