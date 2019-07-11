<template>
  <div id="landing__page">
    <div class="content">
      <p>Filter and search for house:</p>
      <form @submit.prevent="search" id="filter">
        <section class="style">
          <label for="categories">Select Category:</label>
          <select name="filter" v-model="title" id="categories">
            <option disabled value>Please select one</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Studio</option>
            <option>Single Room</option>
          </select>
        </section>
        <section class="style">
          <label for="location">Location:</label>
          <select name="Location" v-model="location" id="location">
            <option disabled value>Please select one</option>
            <option>Bokwoango</option>
            <option>Molyko</option>
            <option>Milingo</option>
            <option>Mayor's Street</option>
            <option>Chief Street</option>
            <option>UB South</option>
            <option>UB Junction</option>
            <option>Mile 17</option>
          </select>
        </section>
        <section class="style">
          <label for="price">Max Price:</label>
          <input type="number" v-model="price" name="price" id="price">
        </section>
        <section class="style">
          <label for="submit">Ready?</label>
          <input type="submit" value="Search">
        </section>
      </form>
    </div>
    <div v-if="show" class="full__pre">
      <div class="interest">
        <div id="slider">
          <transition-group tag="div" :name="transitionName" class="slides-group">
            <div v-if="show" :key="current" class="slide" :class="slides[current].className">
              <!-- <p>I'm {{slides[current].className}}!</p> -->
              <img
                :src="'http://localhost:8000'+ all[eyeOn].imageUrl1"
                v-if="slides[current].className == '1' "
              >
              <img
                :src="'http://localhost:8000'+ all[eyeOn].imageUrl2"
                v-else-if="slides[current].className == '2'"
              >
              <img :src="'http://localhost:8000'+ all[eyeOn].imageUrl3" v-else>
            </div>
          </transition-group>
          <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">&#10094;</div>
          <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">&#10095</div>
        </div>
      </div>
      <div class="information">
        <div class="image_price">
          <h1>{{ all[eyeOn].title }}</h1>
        </div>
        <div class="btn">
          <div id="interest">
            <button :id="all[eyeOn].id" :title="all[eyeOn].title" @click="interested">Show Interest</button>
            <h3>
              <i :class="{ red: getHouse }" class="fas fa-heart"></i>
            </h3>
          </div>
          <div>
            <p v-if="all[eyeOn].rooms_no">Rooms: {{all[eyeOn].rooms_no}}</p>
            <p>Kitchen: {{all[eyeOn].kitchen_no}}</p>
          </div>
          <div>
            <p>Parlor: {{all[eyeOn].palors_no}}</p>
            <p>Floors: {{all[eyeOn].floor_no}}</p>
            <p>Bathrooms: {{all[eyeOn].bathroom_no}}</p>
          </div>
          <div>
            <p>Dimension: {{all[eyeOn].dimension}} Sft</p>
            <p>Price: {{all[eyeOn].price}} FCFA {{all[eyeOn].duration}}</p>
            <p>Location: {{all[eyeOn].location}}</p>
          </div>
        </div>
      </div>
      <div class="visitors" v-if="!userLogin">
        <!-- <div class="container mt-3 mt-sm-5"> -->
        <!-- <div class="row justify-content-center"> -->
        <!-- <div class="col-md-6"> -->
        <form id="form" method="post" v-on:submit="validateForm">
          <div class="help__text">
            <h1></h1>
          </div>
          <div class="form-group" v-bind:class="{ 'has-warning': attemptSubmit && missingName }">
            <label class="form-control-label" for="name">Names</label>
            <input
              id="name"
              name="name"
              class="form-control form-control-warning"
              type="text"
              v-model="name"
              placeholder="Full Name"
            >
            <div
              class="form-control-feedback"
              v-if="attemptSubmit && missingName"
            >This field is required.</div>
          </div>
          <!-- /form-group -->

          <div class="form-group" v-bind:class="{ 'has-warning': attemptSubmit && wrongNumber }">
            <label class="form-control-label" for="number">Phone</label>
            <input
              id="number"
              name="number"
              class="form-control form-control-warning"
              type="text"
              v-model="number"
              placeholder="Phone"
            >
            <div
              class="form-control-feedback"
              v-if="attemptSubmit && wrongNumber"
            >Make sure this is a number between 1 and 10.</div>
          </div>
          <!-- /form-group -->

          <button class="btn btn-primary">Submit</button>
        </form>
        <div id="hello">
          <h3>{{all[eyeOn].title}} Description</h3>
          <p>{{all[eyeOn].description}}</p>
        </div>
        <!-- </div> -->
        <!-- /col -->
      </div>
      <div v-else>
        <div class="owner__wrapper">
          <h1 style="color: #dddddd">Show Interest to View Provider Details</h1>
          <div class="group">
            <label for="owner">Names:</label>
            <h3 v-if="providerData">{{providerData.firstname}} {{providerData.lastname}}</h3>
            <h3 v-else style="color: #dddddd">Show Interest to view Owner Names</h3>
          </div>
          <div class="group">
            <label for="email">Email:</label>
            <h3 v-if="providerData">{{providerData.email}}</h3>
            <h3 v-else style="color: #dddddd">Show Interest to view Owner Email</h3>
          </div>
          <div class="group">
            <label for="owner">Phone:</label>
            <h3 v-if="providerData">{{providerData.phone}}</h3>
            <h3 v-else style="color: #dddddd">Show Interest to view Owner Phone</h3>
          </div>
        </div>
      </div>
    </div>
    <main v-else>
      <!--container -->
      <div style="display: grid; padding-top: 20px;" v-if="all.length == 0">
        <i style="text-align: center; color:#00bfff; font-size: 4em;" class="fas fa-home"></i>
        <h1
          style="text-align: center; color:#00bfff; margin-top: 2px;"
        >No Result Found! Try Searching Again</h1>
      </div>
      <div v-else class="showCase">
        <div
          class="single__view"
          @click="interest(house,index)"
          v-for="(house, index) in filterHouse2"
          :key="index"
        >
          <div class="image__wrapper">
            <div class="image-child">
              <img :src="'http://localhost:8000'+ house.imageUrl1">
              <div class="infor">
                <!-- <p>Description</p> -->
                <div>
                  <h3>{{ house.title }}</h3>
                  <p>Price: {{ house.price }} FCFA {{ house.duration }}</p>
                </div>
                <div class="love">
                  <span>
                    <i class="fas fa-heart"></i>
                  </span>
                </div>
                <!-- <p>{{house.description}}</p> -->
              </div>
            </div>
            <div class="image__wrapper__title">
              <div class="image_price">
                <h1>{{ house.title }}</h1>
              </div>
              <div class="btn">
                <div>
                  <p v-if="house.rooms_no">Rooms: {{house.rooms_no}}</p>
                  <p>Bathrooms: {{house.bathroom_no}}</p>
                </div>
                <div>
                  <p>Dimension: {{house.dimension}} Sft</p>
                </div>
                <div>
                  <p>Location: {{house.location}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HouseApi from "@/services/HouseApi";
import ApartmentApi from "@/services/ApartmentApi";
import StudioApi from "@/services/StudioApi";
import singleRoomApi from "@/services/singleRoomApi";
import SearchApi from "@/services/SearchApi";

export default {
  data() {
    return {
      location: "",
      title: "",
      price: "",
      all: [],
      eyeOn: 0,
      show: false,
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      slides: [{ className: "1" }, { className: "2" }, { className: "3" }],
      name: "",
      number: "",
      attemptSubmit: false,
      total: [],
      getHouse: false,
      userLogin: this.$store.state.isUserLogIn,
      providerData: null
    };
  },
  computed: {
    missingName: function() {
      return this.name === "";
    },
    wrongNumber: function() {
      return (
        this.isNumeric(this.number) === false ||
        this.number < 1 ||
        this.number > 10
      );
    },
    filterHouse: function() {
      return this.total.filter(house => {
        return house.title.match(this.title);
      });
    },
    filterHouse2: function() {
      return this.total.filter(house => {
        return house.location.match(this.location);
      });
    },
    filterHouse2: function() {
      return this.total.filter(house => {
        return house.price.match(this.price);
      });
    }
  },
  methods: {
    async interested() {
      try {
        if (this.userLogin) {
          this.getHouse = true;
          const data = {
            id: event.currentTarget.id,
            title: event.currentTarget.title
          };
          alert("Do You Want to Proceed?");
          const response = await SearchApi.getHouseProvider(data);
          this.providerData = response.data;
          console.log(this.providerData);
        } else {
          alert("Fill the Form to Show Interest or Create an Account");
        }
      } catch (error) {
        console.log(error.response);
      }
    },
    isNumeric: function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },

    validateForm: function(event) {
      this.attemptSubmit = true;
      if (this.missingName || this.wrongNumber) event.preventDefault();
    },
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + (dir % len) + len) % len;
    },
    async interest(house, index) {
      if (this.$store.state.isUserLogIn) {
        this.eyeOn = index;
        this.show = true;
      } else {
        this.eyeOn = index;
        this.show = true;
      }
    },
    async search() {
      try {
        const response = await SearchApi.query({
          title: this.title,
          location: this.location,
          price: this.price
        });
        this.show = false;
        this.providerData = null;
        this.getHouse = false;
        this.all = response.data;
        // this.$router.go();
      } catch (error) {}
    },
    fillterss() {
      console.log("hey");
      function multiFilter(array, filters) {
        const filterKeys = Object.keys(filters);
        // filters all elements passing the criteria
        return array.filter(item => {
          // dynamically validate all filter criteria
          return filterKeys.every(key => {
            // ignores an empty filter
            if (!filters[key].length) return true;
            return filters[key].includes(item[key]);
          });
        });
      }
      var filters = {
        title: this.title,
        price: this.price,
        location: this.location
      };
      this.all = multiFilter(this.total, filters);
    }
  },
  // mounted() {
  //   this.show = true;
  // },
  async beforeMount() {
    const houses = await HouseApi.getHouses();
    const apartments = await ApartmentApi.getApartments();
    const studios = await StudioApi.getStudios();
    const rooms = await singleRoomApi.getRooms();

    // this.houses = houses.data.houses;
    // this.apartments = apartments.data.apartments;
    // this.studios = studios.data.studio;
    // this.rooms = rooms.data.rooms;

    let total = [];
    async function pushInArray(objs) {
      await Array.from(objs).forEach(obj => {
        total.push(obj);
      });
    }

    pushInArray(houses.data.houses);
    pushInArray(apartments.data.apartments);
    pushInArray(studios.data.studio);
    pushInArray(rooms.data.rooms);
    // console.log(total);
    let all = [];
    for (let i = 0; i <= 2; i++) {
      let index = Math.floor(
        Math.random() * houses.data.houses.length ||
          apartments.data.apartments.length ||
          studios.data.studio.length ||
          rooms.data.rooms.length
      );
      all.push(houses.data.houses[index]);
      all.push(apartments.data.apartments[index]);
      all.push(studios.data.studio[index]);
      all.push(rooms.data.rooms[index]);
    }

    this.all = all;
    this.total = total;
    // console.log(all);
  }
};
</script>
<style lang="scss" scoped>
body {
  position: relative;
  background: #b4b1b105;
}
.owner__wrapper {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  .group {
    margin: 10px 0;
  }
  label {
    padding: 10px 0;
    font-size: 1.2em;
    margin: 10px 0;
    color: #00bfff;
  }

  h3 {
    margin: 10px 0;
    border: 1px solid #888;
    padding: 10px;
    border-radius: 4px;
    font-weight: lighter;
  }
}
.full__pre {
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.6fr;
  width: 95%;
  margin: 0 auto;
  margin-top: 50px;
  .visitors {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    #hello {
      padding: 20px 0;
      text-align: justify;
      h3 {
        margin-bottom: 10px;
      }
    }
    .form-control-feedback {
      color: red;
    }
    .btn {
      display: inline-block;
      font-weight: 400;
      line-height: 1.25;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border-radius: 0.25rem;
      -webkit-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }
    .form-group {
      margin: 20px 0;
    }
    .form-control {
      display: block;
      width: 100%;
      padding: 0.5rem 0.75rem;
      font-size: 1rem;
      line-height: 1.25;
      color: #464a4c;
      background-color: #fff;
      background-image: none;
      -webkit-background-clip: padding-box;
      background-clip: padding-box;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 0.25rem;
      -webkit-transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
      transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
      -o-transition: border-color ease-in-out 0.15s,
        box-shadow ease-in-out 0.15s;
      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
    }
    label {
      display: inline-block;
      margin-bottom: 0.5rem;
    }
    input {
      padding-right: 2.25rem;
      background-repeat: no-repeat;
      background-position: center right 0.5625rem;
      -webkit-background-size: 1.125rem 1.125rem;
      background-size: 1.125rem 1.125rem;
    }
    button {
      color: #fff;
      background-color: #025aa5;
      background-image: none;
      border-color: #01549b;
    }
  }
  .information {
    display: grid;
    grid-template-rows: 1fr auto;
    .image_price {
      padding: 0 1rem 0.5rem 1rem;
    }
    .btn {
      display: flex;
      flex-direction: column;
      color: black;
      text-align: left;
      padding-left: 20px;
      #interest {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: unset;
        border-bottom: none;
        margin-bottom: 10px;
        align-items: center;
        button {
          padding: 10px 10px;
          cursor: pointer;
        }
        i {
          font-size: 1.8em;
        }
        i.red {
          color: red;
        }
      }
      div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        border-bottom: 0.5px solid #828181;
        padding: 2px;
        background-color: beige;
        flex: 1 1 0;
        margin-top: 10px;
        p {
          flex-grow: 1;
          margin: 2px 0;
        }
      }
    }
  }
}
.interest {
  /* FADE IN */
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-enter {
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* GO TO NEXT SLIDE */
  .slide-next-enter-active,
  .slide-next-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-next-enter {
    transform: translate(100%);
  }
  .slide-next-leave-to {
    transform: translate(-100%);
  }

  /* GO TO PREVIOUS SLIDE */
  .slide-prev-enter-active,
  .slide-prev-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-prev-enter {
    transform: translate(-100%);
  }
  .slide-prev-leave-to {
    transform: translate(100%);
  }

  /* SLIDES CLASSES */

  .blue {
    background: #4a69bd;
  }

  .red {
    background: #e55039;
  }

  .yellow {
    background: #f6b93b;
  }

  /* SLIDER STYLES */
  body {
    overflow: hidden;
    margin: 0;
    font-size: 50px;
    font-family: "Crimson Text", sans-serif;
    color: #fff;
  }
  #slider {
    width: 100%;
    height: 450px;
    position: relative;
    overflow: hidden;
  }

  .slide {
    width: 100%;
    height: 450px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn {
    z-index: 10;
    cursor: pointer;
    border: 3px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    position: absolute;
    top: calc(50% - 35px);
    left: 1%;
    transition: transform 0.3s ease-in-out;
    user-select: none;
  }

  .btn-next {
    left: auto;
    right: 1%;
  }

  .btn:hover {
    transform: scale(1.1);
  }
}

header ul.nav li a {
  color: rgb(0, 0, 0);
  text-transform: capitalize;
  border-radius: 0;
}

header ul.nav li a i {
  position: relative;
  top: 2px;
}

header ul.nav li.dropdown {
  position: relative;
}

header ul.nav li.dropdown ul {
  list-style: none;
  position: absolute;
  background-color: rgb(48, 46, 46);
  left: 20px;
  top: 30px;
  visibility: hidden;
}

header ul.nav li.dropdown a:hover ~ ul.Myaccount {
  visibility: visible;
}

header ul.nav li.dropdown ul.Myaccount a {
  display: block;
}

header ul.nav li:nth-child(1) a {
  padding: 13px 0px;
}

header ul.nav li:nth-child(1) a:hover {
  background-color: transparent;
  color: #111;
  text-decoration: underline;
}

input[type="submit"],
a {
  transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
}

div.content {
  background-color: #444;
  padding: 20px 0px;
  display: flex;
  position: sticky;
  top: 50px;
  z-index: 100;
}

div.content p {
  margin: 0 auto;
  width: 25%;
  padding: 20px 0px 5px 10px;
  color: #fff;
  flex-grow: 1;
  font-size: 22px;
  font-weight: 500;
}

#filter {
  width: 85%;
  display: flex;
  color: #fff;
  flex-grow: 2;
}

#filter section.style {
  display: grid;
  margin: 0px 20px 10px 0px;
}

#filter label {
  padding: 10px 0px 5px 0;
}

#filter input,
#filter select {
  cursor: pointer;
  width: 200px;
  margin: 5px 0px;
  padding: 7px 5px;
  border: none;
}

option {
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
}
#filter input[type="submit"] {
  cursor: pointer;
  width: 100px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  // background-color: #048be6;
  padding: 8px;
}

div.showCase {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 95%;
  margin: 0 auto;
  row-gap: 100px;
  column-gap: 20px;
  padding: 30px 0;
  justify-content: space-evenly;
  .single__view {
    display: flex;
    // flex-direction: column;
    .image__wrapper {
      .image-child {
        position: relative;
        width: 400px;
        // &:hover > .infor {
        //   height: 35%;
        // }
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .infor {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 25%;
        font-size: 1.2em;
        display: flex;
        flex-direction: row;
        place-items: center;
        justify-content: space-between;
        span {
          height: 50px;
          width: 50px;
          // background: royalblue;
          display: grid;
          place-content: center;
          font-size: 36px;
          display: block;
        }
        // align-content: center;
        // font-weight: bold;
        letter-spacing: 1px;
        padding: 10px;
        // height: 0;
        overflow: hidden;
        // height: 35%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        transition: all 250ms ease-in-out;
      }
      display: grid;
      grid-template-columns: 1fr auto;
      position: relative;
      height: 300px;
      cursor: pointer;
      .image__wrapper__title {
        width: 100%;
        background-color: white;
        color: black;
        padding: 0 6px;
        bottom: 0;
        display: grid;
        grid-template-rows: 1fr auto;

        .btn {
          display: flex;
          flex-direction: column;
          color: black;
          padding: unset;
          div {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            border-bottom: 0.5px solid #828181;
            padding: 2px;
            background-color: beige;
            flex: 1 1 0;
            margin-top: 10px;
            p {
              flex-grow: 1;
              margin: 2px 0;
              margin-right: 10px;
              text-align: left;
            }
          }
          h1 {
            font-size: 22px;
          }
        }
      }
    }
  }
}

/* footer style */
footer {
  background-color: var(--bg);
  border: 1px solid var(--bg);
  padding-top: 40px;
}

footer section.fcontent {
  width: 90%;
  margin: 20px auto;
}

footer section.fcontent:nth-child(1) {
  padding: 20px 5px 20px 5px;
}

footer section.fcontent:nth-child(1) ul {
  list-style: none;
}

footer h2 {
  color: #917957;
}

footer a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.685);
  font-family: sans-serif;
  letter-spacing: 0.1em;
  font-size: var(--tsize);
  /* display: block; */
  padding: 10px;
}

footer div.intro {
  color: #917957;
  text-align: center;
}

footer div.intro ul li a {
  display: inline-block;
  text-decoration: underline rgba(255, 255, 255, 0.685);
  padding: 10px 0px;
}

footer div.intro ul li a:hover {
  text-decoration: none;
}

footer div.newsletter {
  text-align: center;
}

footer div.newsletter div.follow {
  margin-top: 10px;
  text-align: center;
}

footer div.newsletter div.follow h2 {
  display: inline;
}

footer div.newsletter div.follow a {
  display: inline-block;
  padding: 5px 10px;
}

footer div.newsletter div.follow a:hover {
  text-decoration: underline;
  color: var(--text);
}

footer div.newsletter div.follow a:hover > .fa-twitter {
  color: var(--text);
}

/* .fa-twitter {
    color: #fff;
} */

/* section.fcontent:nth-child(2) {} */

section.fcontent:nth-child(2) p {
  text-align: center;
  padding-left: 50px;
  color: rgba(255, 255, 255, 0.61);
}
</style>
