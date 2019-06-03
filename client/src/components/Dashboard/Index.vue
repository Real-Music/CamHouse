<template>
  <div id="base_dashbord">
    <main>
      <aside>
        <nav class="menu">
          <input type="search" name id="menuSearch" placeholder="search menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li class="dropdown">
              <a href="#" class="dd_link">dropdown 1</a>
              <!-- 
                        <ul class="dropdown_content">
                            <li>
                                <a href="#">dropdown 1 </a>
                            </li>
                            <li>
                                <a href="#">dropdown 2</a>
                            </li>
              </ul>-->
            </li>

            <li class="dropdown">
              <a href="#" class="dd_link">dropdown 2</a>
            </li>
          </ul>
        </nav>
      </aside>

      <div class="body">{{msg}}</div>
    </main>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  props: {
    msg: String
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  transition: 0.7s;
}

body {
  position: relative;
}

#Nav__bar {
  position: sticky;
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
  background-color: rgba(0, 0, 0, 0.2);
  width: 200px;
  height: 100%;

  position: relative;
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
  background-color: rgba(0, 0, 0, 0.2);
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
  text-decoration: none;
  display: block;
  padding: 5px 10px;
  font-size: 15px;
  position: relative;
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
  margin-left: 200px;
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
  font-family: sans-serif;
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
