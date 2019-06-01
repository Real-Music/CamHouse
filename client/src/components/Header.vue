<template>
  <div id="Nav__bar">
    <ul>
      <li>
        <router-link to="/" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/about" exact>About</router-link>
      </li>
      <li>
        <router-link to="/login" exact>Login</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scope>
#Nav__bar {
  position: sticky;
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
        padding: 10px 15px;
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
