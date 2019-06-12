/* eslint-disable */
<template>
  <div id="login">
    <div class="login_container">
      <section class="login">
        <div class="layer">
          <div class="intro">
            <h2>Login to CamHome</h2>
          </div>
        </div>
        <div>
          <span class="null" v-bind:class="{ error: error}">{{error}}</span>
        </div>
        <form v-on:submit.prevent="login">
          <input
            type="text"
            name="email"
            v-model="email"
            id="email"
            placeholder="Email or Phone Number"
          >
          <input
            type="password"
            name="password"
            v-model="password"
            id="password"
            placeholder="Password"
            required
          >
          <input type="submit" value="Login">
        </form>
        <!-- <p></p> -->
        <div class="option">
          <p>
            don't yet have an account? goTo
            <router-link to="/register">Sign up</router-link>
          </p>
        </div>
      </section>
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
        const phone = /^[0-9]{9,9}$/;
        let response;
        if (phone.test(this.email)) {
          response = await UserApi.login({
            phone: this.email,
            password: this.password
          });
          // console.log(response);
          const user = {
            slug: response.data.user.slug,
            token: response.data.token
          };
          console.log(user);

          let key = ["id", "password", "token", "slug"];
          delete response.data.user[key[0]];
          delete response.data.user[key[1]];
          delete response.data[key[2]];
          delete response.data.user[key[3]];

          console.log(response);
          console.log(response.data.user.Houses);

          await this.$cookies.set("user", user);
          await this.$store.dispatch("isUserLogIn", true);
          await this.$store.dispatch("setUser", response.data.user);
          //  console.log(this.$cookies.get("user").token);
          this.$router.push({
            name: "dashboard",
            params: { userId: this.$cookies.get("user").slug }
          });
        } else {
          response = await UserApi.login({
            email: this.email,
            password: this.password
          });

          let user = {
            slug: response.data.user.slug,
            token: response.data.token
          };

          this.$cookies.set("user", user);

          // filtering Response
          let key = ["id", "password", "token", "slug"];
          delete response.data.user[key[0]];
          delete response.data.user[key[1]];
          delete response.data[key[2]];
          delete response.data.user[key[3]];

          this.$store.dispatch("isUserLogIn", true);
          this.$store.dispatch("setUser", response.data.user);

          // console.log(this.$cookies.get("user"));
          this.$router.push({
            name: "dashboard",
            params: { userId: this.$cookies.get("user").slug }
          });
        }
      } catch (error) {
        console.log(error.response.data.message);
        this.error = error.response.data.message;
      }
    },
    setError() {
      this.error = null;
    }
  },
  watch: {
    error: {
      handler: function(val, oldVal) {
        setTimeout(() => {
          this.setError();
        }, 3000);
      },
      deep: true
    }
  },
  beforeCreate() {
    this.$store.dispatch("showSignUp", false);
  }
};
</script>

<style lang="scss" scope>
.null {
  display: none;
}
.null.error {
  color: white;
  text-align: center;
  display: block;
  padding: 10px;
  background: red;
}

:root {
  --text: #fff;
  --border: rgba(218, 165, 32, 0.445);
  --hover: rgba(30, 28, 49, 0.9);
}

#login {
  height: 100vh;
  background: url("../assets/indexpageimg/img1.jpg") center center no-repeat
    fixed;
  background-size: cover;
  background-color: #1e1c31;
}
input::placeholder {
  color: white;
}
section.login {
  border: 1px solid rgba(0, 0, 0, 0.041);
  width: 80%;
  border-radius: 4px;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 1px 2px 1px 2px rgba(0, 0, 0, 0.041);
}

section.login div.intro {
  margin: auto;
  text-align: center;

  font-family: sans-serif;
  border-bottom: 1px solid #5f452a;
}

section.login div.intro h2 {
  padding: 10px 5px;
  color: white;
  font-size: 18px;
}

section.login form {
  margin: 40px auto 40px auto;
}

section.login form input {
  display: block;
  margin: 10px 5px;
  padding: 10px;
}

section.login form input[type="password"],
section.login form input[type="text"] {
  border: 1px solid rgba(0, 0, 0, 0.01);
  width: 85%;
  border: 1px solid rgb(151, 150, 150);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  margin: 0px auto 40px auto;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.055);
  border-radius: 4px;
  transition: border 0.7s ease-in-out;
  color: white;
}

section.login form input[type="submit"] {
  cursor: pointer;
  margin: 40px auto;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: rgb(0, 0, 0);
  font-size: 15px;
  font-weight: bolder;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 150ms ease-in-out;
}

section.login form input[type="submit"]:hover {
  background: #444;
  color: white;
}

div.option p {
  text-align: center;
  margin: 10px auto;
  color: rgba(255, 255, 255, 0.8);
  a {
    color: cornflowerblue;
  }
}

div.option p a:hover {
  color: white;
}

@media screen and (min-width: 700px) {
  section.login {
    width: 500px;
  }

  section.login div.intro h2 {
    padding: 20px 5px;
    color: white;
    font-size: 28px;
    font-weight: lighter;
  }

  section.login form input[type="submit"] {
    font-size: 14px;
    font-weight: 300;
  }
}
</style>
