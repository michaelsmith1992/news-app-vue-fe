<template>
  <div class="login">
    <div class="form-group">
      <label for="username">Username:</label>
      <input class="form-control" type="text" name="username" v-model="user" />
      <label for="password">Password:</label>
      <input class="form-control" type="password" name="password" v-model="pass" />
      <input v-on:click="login" class="btn btn-primary" type="submit" value="Submit" />
    </div>
    <div v-bind:class="[error ? errorClass : hideClass]">Username or Password is incorrect</div>
  </div>
</template>

<script>
import { loginReq } from "../../helpers/requests.js";

export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      user: null,
      pass: null,
      error: false,
      hideClass: "hide",
      errorClass: "alert alert-danger"
    };
  },
  methods: {
    login: async function() {
      const res = await loginReq(this);
      if (!res) return this.$router.push("/users/");
      this.error = res;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login {
  width: 50%;
  margin-left: 25%;
}
label {
  margin-top: 10px;
  margin-bottom: 10px;
}

.btn {
  margin-top: 10px;
  margin-bottom: 10px;
}

.hide {
  display: none;
}
</style>
