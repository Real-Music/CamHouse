<template>
  <div id="register">
    <main>
      <div class="Style_container">
        <div class="tenant">
          <h2>Be A Tenant</h2>
          <article class="user_content">
            <p>
              As a tenant you get the visual of all houses available on rent. And
              to get the contact of the provider, show interest on the house by
              clicking the heart shape available on the house image.
            </p>
            <!-- <a @click="tenant" title="Sign up as tenant"> -->
            <router-link @click.native="tenant" to="/register/tenant">
              SignUp
              <i class="fa fa-arrow-circle-right"></i>
            </router-link>

            <!-- </a> -->
          </article>
        </div>
        <div class="provider">
          <h2>Be A House Provider</h2>
          <article class="user_content">
            <p>
              As a house provider, upload Images and description of your house
              and recieve notifications on your mail or browser concerning
              interest shown on your house and facilitate rentals
            </p>
            <router-link @click.native="provider" to="/register/provider">
              SignUp
              <i class="fa fa-arrow-circle-right"></i>
            </router-link>
          </article>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    tenant() {
      this.$store.dispatch("setHouseProvider", false);
    },
    provider() {
      this.$store.dispatch("setHouseProvider", true);
    }
  }
};
</script>

<style lang="scss" scoped>
:root {
  --h2: #d19a4e;
  --text: #917957;
  --bg: #1e1c31;
  --shead: 32px;
  --hColor: rgba(255, 255, 255, 0.904);
}

* {
  color: white;
}

main {
  background-color: rgb(231, 231, 231);
  position: relative;
  height: 100vh;
}

p {
  color: black;
}

.Style_container {
  /* background: #000; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.tenant,
.provider {
  width: 350px;
  border: 1px solid rgba(51, 51, 51, 0.082);
  box-shadow: 10px 15px 1px rgba(177, 177, 177, 0.103);
  margin-right: 30px;
  background-color: rgb(255, 255, 255);
  box-sizing: content-box;
}

.Style_container h2 {
  padding: 20px 10px 0px 10px;
  text-align: center;
  color: #444;
}

article.user_content {
  padding: 10px;
  text-align: center;
}

article.user_content p {
  line-height: 1.5;
  font-size: 14px;
}

article.user_content a {
  cursor: pointer;
  display: block;
  background-color: #1e1c31;
  color: var(--h2);
  text-decoration: none;
  letter-spacing: 0.1em;
  font-weight: 700;
  width: 100px;
  margin: 12px auto;
  padding: 10px 0px;
  border-radius: 5px;
  text-transform: capitalize;
  transition: all 0.7s ease;
}

article.user_content a i.fa {
  display: none;
  transition: all 0.7s ease;
}

article.user_content a:hover {
  background-color: rgb(22, 18, 58);
  color: rgba(211, 189, 160, 0.836);
}

article.content a:focus {
  background-color: rgb(22, 18, 58);
  color: rgba(211, 189, 160, 0.836);
}
</style>
