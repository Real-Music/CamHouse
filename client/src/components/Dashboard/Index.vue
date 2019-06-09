<template>
  <div id="base_dashbord">
    <main>
      <aside>
        <nav class="menu">
          <input type="search" name id="menuSearch" placeholder="search menu">
          <ul>
            <li>
              <router-link to @click.native="routing('')">Dashboard</router-link>
            </li>

            <li class="dropdown">
              <router-link to @click.native="routing('/new_house')">New House</router-link>
            </li>

            <li class="dropdown">
              <router-link to @click.native="routing('/house')">View Assets</router-link>
            </li>

            <li class="dropdown">
              <router-link to @click.native="logout">Logout</router-link>
            </li>
          </ul>
        </nav>
      </aside>

      <div class="body">
        <div class="body__wrapper">
          <div class="title">
            <h1 v-if="title">{{title}}</h1>
            <h1 v-else>Dashboard</h1>
          </div>
          <div>
            <slot></slot>
          </div>
          <!-- <app-house activetab="1"></app-house> -->
          <!-- <house-preview></house-preview> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import House from "./House";
import HousePreview from "./House__Preview";

export default {
  name: "dashboard",
  components: {
    "app-house": House,
    "house-preview": HousePreview
  },
  props: {
    msg: String,
    title: String
  },
  data() {
    return {
      showHouse: false
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("isUserLogIn", false);
      await this.$cookies.remove("user");
      this.$router.push({ name: "home" });
    },
    routing(path) {
      this.$router.push({
        path: "/home/" + this.$cookies.get("user").slug + path
      });
    },
    createHouse() {
      this.showHouse = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: block;
  margin-bottom: 20px;
  h1 {
    color: #888;
    border-bottom: 1px solid #888;
  }
}

.body__wrapper {
  padding: 20px;
}

.logo {
  background-color: purple;
  padding: 10px;
}

.logo h2 {
  color: #fff;
  font-size: 15px;
}

main {
  position: relative;
  width: 100%;
}

aside {
  background-color: #444;
  width: 220px;
  height: 100%;
  top: 50px;
  position: fixed;
  left: 0;
}

#menuSearch {
  margin: 5px 10px;
  padding: 5px 2px;
}

.menu {
  padding-top: 10px;
  width: 200px;
  position: fixed;
  height: 100%;
  left: 0px;
  right: 200px;
  background-color: #444;
}

.menu ul {
  list-style: none;
  text-align: left;
}

.menu li:nth-child(1) {
  border-top: 1px solid rgba(0, 0, 0, 0.199);
}

.menu li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.199);
}

.menu ul li a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px 10px;
  font-size: 15px;
}

.menu ul li.dropdown a.dd_link::after {
  content: "\f106";
  font-family: "Font Awesome 5 Pro";
  position: absolute;
  /* top: 5px; */
  float: right;
  right: 0px;
}

.menu ul li:nth-child(1) a.dropdown::after {
  content: "";
}

div.body {
  margin-left: 220px;
  position: relative;
}

.st_container {
  width: 80%;
  margin: auto;
  padding-top: 20px;
}

.st_container div.categories {
  padding-top: 10px;
  text-align: center;
}

.btn {
  display: flex;
}

.st_container div.categories button.Hcategory {
  width: 300px;
  padding: 10px 15px;
  cursor: pointer;
}

.active {
  background-color: blue;
  border: none;
}

.border {
  border: 1px solid rgba(0, 0, 0, 0.164);
  box-shadow: 2px 3px 1px rgba(0, 0, 0, 0.1);
}

label {
  font-size: 14px;
  padding: 10px;
}

input[type="number"],
select {
  border: 1px solid rgba(0, 0, 0, 0.295);
  padding: 5px;
}

div.wrapper {
  margin-top: 10px;
}

div.img {
  margin-top: 10px;
}

div.describ_content,
div.locate_content {
  width: 300px;
}
</style>
