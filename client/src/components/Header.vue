<template>
  <div id="Nav__bar">
    <ul>
      <li>
        <router-link to="/" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/login" exact>Login</router-link>
      </li>
      <li>
        <router-link to="/register" exact>Signup</router-link>
      </li>
      <li>
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
      isLogin: false
    };
  },
  methods: {
    display() {
      console.log("hello");
      this.isLogin = true;
    }
  }
};
</script>

<style lang="scss" scope>
#Nav__bar {
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  background: #444;
  padding: 5px;
  z-index: 9999;
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
