<template>
  <div id="landing__page">
    <main>
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

      <!--container -->
      <div class="showCase">
        <div
          class="single__view"
          @click="editHouse(house,index)"
          v-for="(house, index) in all"
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
      <!-- newletter section -->
      <section class="container nletter">
        <div class="getletter">
          <h2>Subscribe To Get News Letter</h2>
          <form action="#" class="getNotified">
            <input type="email" name="email" id="email" placeholder="Email">
            <input type="submit" value="Subscribe">
          </form>
        </div>
      </section>
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
      price: null,
      all: [],
      houses: null,
      apartments: null,
      studios: null,
      rooms: null
    };
  },
  methods: {
    async search() {
      try {
        const response = SearchApi.query({
          title: this.title,
          location: this.location,
          price: this.price
        });
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  async beforeMount() {
    const houses = await HouseApi.getHouses();
    const apartments = await ApartmentApi.getApartments();
    const studios = await StudioApi.getStudios();
    const rooms = await singleRoomApi.getRooms();

    this.houses = houses.data.houses;
    this.apartments = apartments.data.apartments;
    this.studios = studios.data.studio;
    this.rooms = rooms.data.rooms;

    // console.log(index);
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
    console.log(all);
  }
};
</script>
<style lang="scss" scoped>
body {
  position: relative;
  background: #b4b1b105;
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
    flex-direction: column;
    .image__wrapper {
      .image-child {
        position: relative;
        // &:hover > .infor {
        //   height: 35%;
        // }
        img {
          height: 300px;
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
          // align-items: center;
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
