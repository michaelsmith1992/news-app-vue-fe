<template>
  <button v-on:click="logout" class="btn btn-danger">Logout</button>
</template>

<script>
import { logoutReq } from "../../helpers/requests.js";

export default {
  name: "Logout",
  methods: {
    logout: async function() {
      await logoutReq(this);
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>