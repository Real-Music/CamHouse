<template>
  <div id="Nav__bar">
    <div class="logo" @click="homePage">
      <img alt="CamHouse logo" src="../assets/logo.png" width="40">
      <span>CamHouse</span>
    </div>
    <ul>
      <li v-if="this.$store.state.showHome">
        <router-link to="/" exact>Home</router-link>
      </li>
      <li v-if="this.$store.state.showDashboard">
        <router-link :to="slug" exact>Dashboard</router-link>
      </li>
      <li v-if="this.$store.state.showLogin">
        <router-link to="/login" exact>Login</router-link>
      </li>
      <li v-if="this.$store.state.showSignUp">
        <router-link to="/register" exact>Signup</router-link>
      </li>
      <li v-if="this.$store.state.showHome">
        <router-link to="/about" exact>About</router-link>
      </li>
      <li>
        <router-link to="/help" exact>Help</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug:
        "/home/" +
        (this.$cookies.get("user") ? this.$cookies.get("user").slug : "")
      // showSignUP: true
    };
  },
  methods: {
    dashboard() {
      this.$router.push({
        name: "dashboard",
        params: { userId: this.$cookies.get("user").slug }
      });
    },
    homePage() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="scss" scope>
#Nav__bar {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  background: #444;
  padding: 5px;
  z-index: 9999;
  div {
    display: flex;
    place-items: center;
    cursor: pointer;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    li {
      margin: 0 10px;
      a {
        display: block;
        color: white;
        text-decoration: none;
        padding: 8px 15px;
      }
      .router-link-active {
        background: #eee;
        color: #444;
        border-radius: 4px;
      }
    }
  }
}
</style>
