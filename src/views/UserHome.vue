<template>
  <div class="about">
    <h1>Welcome {{user.name}} to the Northcoders News Application!</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "UserHome",
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
