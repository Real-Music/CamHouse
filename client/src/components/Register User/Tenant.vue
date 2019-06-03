<template>
  <div id="tenant">
    <div class="signup">
      <section id="userInfo">
        <div class="intro">
          <h2>Sign Up on CamHome</h2>
        </div>
        <span class="null" v-bind:class="{ error: error}">{{error}}</span>
        <div class="form">
          <div class="grid_query">
            <div class="names">
              <div class="grid_style">
                <div>
                  <label for="fname">
                    <i class="fas fa-user"></i>First Name
                  </label>
                </div>
                <div>
                  <input
                    v-model="firstname"
                    @change="checkName"
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="first Name"
                    required
                  >
                  <!-- <span class="error">{{firstnameError}}</span> -->
                </div>
              </div>
              <div class="grid_style">
                <div>
                  <label for="lname">
                    <i class="fas fa-user"></i>Last Name
                  </label>
                </div>
                <div>
                  <input
                    v-model="lastname"
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="last Name"
                    required
                  >
                  <!-- <span class="error">{{lastnameError}}</span> -->
                </div>
              </div>
            </div>

            <div class="contacts">
              <div class="grid_style">
                <div>
                  <label for="telephone">
                    <i class="fas fa-mobile-alt"></i>Tel
                  </label>
                </div>
                <div>
                  <input
                    v-model="phone"
                    type="tel"
                    name="pNum"
                    id="telephone"
                    placeholder="phone number"
                    required
                  >
                  <!-- <span class="error">{{phoneError}}</span> -->
                </div>
              </div>
              <div class="grid_style">
                <div>
                  <label for="email">
                    <i class="fas fa-envelope"></i>Email
                  </label>
                </div>
                <div>
                  <input
                    v-model="email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    required
                  >
                  <!-- <span class="error">{{emailError}}</span> -->
                </div>
              </div>
            </div>

            <div class="password">
              <div class="grid_style">
                <div>
                  <label for="pword">
                    <i class="fas fa-lock"></i>Password
                  </label>
                </div>
                <div>
                  <input
                    v-model="password"
                    type="password"
                    name="password"
                    id="pword"
                    placeholder="password"
                    required
                  >
                  <!-- <span class>{{passwordError}}</span> -->
                </div>
              </div>
            </div>
          </div>
          <input @click="createTenant" type="submit" value="Sign Up">
        </div>
      </section>

      <div class="option">
        <p>
          Have an account already?
          <a href="/login">login</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import UserApi from "@/services/UserApi";

export default {
  data() {
    return {
      firstname: "",
      firstnameError: null,
      lastname: "",
      lastnameError: null,
      phone: "",
      phoneError: null,
      email: "",
      emailError: null,
      password: "",
      passwordError: null,
      confirmPassword: "",
      isHouseProvider: false,
      error: null
    };
  },
  methods: {
    async createTenant() {
      try {
        let response = await UserApi.register({
          firstname: this.firstname,
          lastname: this.lastname,
          phone: this.phone,
          email: this.email,
          password: this.password,
          isHouseProvider: this.$store.state.isHouseProvider
        });

        console.log(response.data);
        await this.$store.dispatch("setToken", response.data.token);
        await this.$store.dispatch("setUser", response.data.user);
        this.$router.push({ name: "index" });
      } catch (error) {
        console.log(error.response.data.message);
        this.error = error.response.data.message;
      }
    },
    checkName() {
      const firstname = /^[a-zA-Z]{3,15}$/;
      if (!firstname.test(this.firstname)) {
        this.firstnameError = "Only Text are allow";
      }
    },
    setError() {
      console.log("error");
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
  }
};
</script>

<style lang="scss" scoped>
* {
  transition: all 0.7s ease;
}
label * {
  margin-right: 15px;
}
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
#tenant {
  background: url("../../assets/indexpageimg/img1.jpg") center center no-repeat
    fixed;
  height: 100vh;
  background-size: cover;
}

:root {
  --bg: #1e1c31;
  --hColor: rgba(255, 255, 255, 0.904);
  --text: #917957;
}

div.signup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(0, 0, 0, 0.041);
  width: 530px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 1px 2px 1px 2px rgba(0, 0, 0, 0.041);
}

#userInfo div.intro {
  text-align: center;
  border-bottom: 3px solid #5f452a;
  background-color: var(--bg);
}

.form {
  width: 80%;
  margin: 20px auto;
}

.form div.grid_query {
  display: grid;
}

.form div.grid_style {
  display: grid;
  grid-template-rows: auto 1fr;
}

.form label {
  margin-bottom: 10px;
  display: inline-block;
  text-align: left;
  font-size: 20px;
}

.form input:required {
  padding: 8px;
  width: 100%;
  margin-bottom: 15px;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.055);
  border-radius: 4px;
  border: 1px solid #979696;
  color: white;
}

.form input[type="submit"] {
  cursor: pointer;
  display: block;
  padding: 10px 15px;
  margin: 10px auto;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.form input[type="submit"]:hover {
  background-color: #444;
  color: #fff;
}

div.option {
  text-align: center;
}

div.option p {
  width: 90%;
  margin: 40px auto;
  color: rgba(255, 255, 255, 0.8);
}

div.option p a {
  color: cornflowerblue;
}

div.option p a:hover {
  color: rgb(207, 110, 110);
  text-decoration: none;
}

@media screen and (min-width: 900px) {
  div.signup {
    width: 650px;
  }

  #userInfo div.intro h2 {
    padding: 30px 0px;
    font-size: 28px;
    font-weight: lighter;
  }

  div.option {
    border: none;
    text-align: center;
  }

  div.option p {
    width: 50%;
    margin: 40px auto;
    color: rgba(255, 255, 255, 0.8);
  }
}

@media screen and (max-width: 600px) {
  nav.main_navigation ul a {
    padding: 12px 10px;
    font-weight: 400;
    letter-spacing: 0.1em;
  }

  div.signup {
    width: 90%;
  }

  .form {
    margin: 20px auto;
  }

  .form label {
    display: none;
  }

  .form input:required {
    width: 80%;
    display: block;
  }

  .form div.grid_query {
    display: block;
  }

  .form div.grid_style {
    display: block;
  }

  .form input:required::placeholder {
    font-size: 17px;
  }

  div.option p a {
    color: rgb(196, 140, 140);
    text-transform: capitalize;
  }
}
</style>

