<template>
  <div class="profile">
    <h1>Profile</h1>
    <h3>User Name:{{user.username}}</h3>
    <h3>Name:{{user.username}}</h3>
    <img v-bind:src="user.avatar_url" />
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      user: null
    };
  },
  created() {
    this.user = this.$store.getters.user;
  }
};
</script>
