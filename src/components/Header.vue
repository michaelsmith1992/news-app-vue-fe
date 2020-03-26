<template>
  <div id="nav">
    <router-link to="/users">Home</router-link>|
    <router-link to="/users/about">About</router-link>|
    <router-link to="/users/topics">Topics</router-link>|
    <router-link to="/users/articles">Articles</router-link>|
    <router-link to="/users/profile">Profile</router-link>

    <Logout />
  </div>
</template>

<script>
import Logout from "@/components/Logout.vue";

export default {
  name: "Header",
  components: {
    Logout
  }
};
</script>