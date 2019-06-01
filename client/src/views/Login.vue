/* eslint-disable */
<template>
  <div id="login">
    <div>
      <label for="email">Email or Phone</label>
      <input type="text" v-model="email" name="email" id="email">
      <label for="password">Password</label>
      <input type="password" v-model="password" name="password" id="password">
      <span>{{ error }}</span>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import UserApi from "@/services/UserApi";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await UserApi.login({
          email: this.email,
          password: this.password
        });
        console.log(response);
      } catch (error) {
        console.log(error.response.data.message);
        this.error = error.response.data.message;
      }
    }
  }
};
</script>

<style lang="scss" scope>
#login {
  margin-top: 50px;
  div {
    margin: 0 auto;
    width: 40%;
    label {
      display: block;
    }
    input {
      display: block;
      padding: 5px;
    }
    span {
      display: block;
      text-align: left;
      color: red;
    }
    button {
      cursor: pointer;
      margin-top: 20px;
      padding: 8px 17px;
    }
  }
}
</style>
