<template>
  <div id="House__Preview">
    <dashboard title="House">
      <div class="houses__container">
        <div class="single__preview">
          <div class="bottom">
            <div class="wrapper">
              <div class="slider-container">
                <ul class="slider" :style="styleObject">
                  <li class="green slide">
                    <img :src="'http://localhost:8000'+houses[0].imageUrl1">
                  </li>
                  <li class="blue slide">
                    <img :src="'http://localhost:8000'+houses[0].imageUrl2">
                  </li>
                  <li class="grey slide">
                    <img :src="'http://localhost:8000'+houses[0].imageUrl3">
                  </li>
                  <!-- <li class="red slide">Slide 4</li> -->
                </ul>
              </div>
              <ul class="navigator">
                <li @click="prevSlide" class="lightgrey">&laquo;</li>
                <li @click="changeSlide(1)" class="green">1</li>
                <li @click="changeSlide(2)" class="blue">2</li>
                <li @click="changeSlide(3)" class="grey">3</li>
                <!-- <li @click="changeSlide(4)" class="red">4</li> -->
                <li @click="nextSlide" class="lightgrey">&raquo;</li>
              </ul>
            </div>
            <div class="description">
              <div class="house_title">
                <!-- <h1>Giant Classic Building, fenced with 24 hours security</h1> -->
              </div>
              <div class="content">
                <div class="input__form">
                  <div class="first_row">
                    <div class="form__container">
                      <label for="floor_no">Floors</label>
                      <input
                        type="text"
                        readonly
                        name="floor_no"
                        :value="houses[0].floor_no"
                        id="floor_no"
                      >
                    </div>
                    <div class="form__container">
                      <label for="palors_no">Palors</label>
                      <input
                        type="text"
                        readonly
                        name="palors_no"
                        :value="houses[0].palors_no"
                        id="palors_no"
                      >
                    </div>
                    <div class="form__container">
                      <label for="kitchen_no">Kitchens</label>
                      <input
                        type="text"
                        readonly
                        name="kitchen_no"
                        :value="houses[0].kitchen_no"
                        id="kitchen_no"
                      >
                    </div>
                  </div>
                  <div class="second_row">
                    <div class="form__container">
                      <label for="rooms_no">Rooms</label>
                      <input
                        type="text"
                        readonly
                        name="rooms_no"
                        :value="houses[0].rooms_no"
                        id="rooms_no"
                      >
                    </div>
                    <div class="form__container">
                      <label for="bathroom_no">Bathrooms</label>
                      <input
                        type="text"
                        readonly
                        name="bathroom_no"
                        :value="houses[0].bathroom_no"
                        id="bathroom_no"
                      >
                    </div>
                    <div class="form__container">
                      <label for="dimension">Dimension</label>
                      <div>
                        <input
                          type="text"
                          readonly
                          name="dimension"
                          :value="houses[0].dimension"
                          id="dimension"
                        >
                        <span>Sft</span>
                      </div>
                    </div>
                  </div>
                  <div class="second_row">
                    <div class="form__container">
                      <label for="rooms_no">Location</label>
                      <input
                        type="text"
                        readonly
                        name="location"
                        :value="houses[0].location"
                        id="rooms_no"
                      >
                    </div>
                    <div class="form__container">
                      <label for="bathroom_no">Duration</label>
                      <input
                        type="text"
                        readonly
                        name="duration"
                        :value="houses[0].duration"
                        id="bathroom_no"
                      >
                    </div>
                    <div class="form__container">
                      <label for="dimension">Price</label>
                      <div>
                        <input
                          type="text"
                          readonly
                          name="dimension"
                          id="dimension"
                          v-bind:value="houses[0].price"
                        >
                        <span>FCFA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer">
                <div class="intro">Description</div>
                <p>{{ houses[0].description}}</p>
              </div>
            </div>
          </div>
          <div class="owner">
            <label>Owner: {{user.userName}}</label>
            <label>Email: {{user.email}}</label>
            <label>Tell: {{ user.tel}}</label>
          </div>
        </div>
        <div class="all__houses">
          <div class="showCase">
            <div class="single__house" v-for="(house, index) in houses" :key="index">
              <div class="image__wrapper">
                <img :src="'http://localhost:8000'+ house.imageUrl1">
                <div class="image__wrapper__title">
                  <div class="image_price">
                    <h1>House</h1>
                    <p>{{ house.price }} FCFA {{ house.duration }}</p>
                  </div>
                  <div class="btn">
                    <button class="edit">Edit</button>
                    <button class="view">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dashboard>
  </div>
</template>        

<script>
import HouseApi from "@/services/HouseApi";

export default {
  data() {
    return {
      user: {
        userName:
          this.$store.state.user.firstname +
          " " +
          this.$store.state.user.lastname,
        email: this.$store.state.user.email,
        tel: this.$store.state.user.phone
      },
      houses: [],
      activeSlide: 1
    };
  },
  computed: {
    styleObject: function() {
      const width = 0 - (this.activeSlide - 1) * 700;
      return {
        transform: "translateX(" + width + "px)"
      };
    }
  },
  methods: {
    getfirstHouse(house) {
      setTimeout(function() {
        console.log(houses);
        return houses;
      }, 1000);
    },
    changeSlide: function(num) {
      console.log(this.house);
      this.activeSlide = num;
    },
    nextSlide: function() {
      if (this.activeSlide < 3) this.activeSlide++;
    },
    prevSlide: function() {
      if (this.activeSlide > 1) this.activeSlide--;
    }
  },
  async beforeMount() {
    const response = await HouseApi.getAllHouse(this.$cookies.get("user").slug);
    this.houses = response.data.user.Houses;
    console.log(this.houses);
  }
};
</script>

<style lang="scss" scoped>
#House__Preview {
  // position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  // row-gap: 20px;
  .owner {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    background: #444;
    color: white;
    font-size: 1.3em;
    label {
      flex: 1 1 0;
    }
  }
  .bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: aliceblue;
    padding-top: 30px;
    padding-right: 40px;
  }
  .input__form {
    display: grid;
    grid-template-rows: repeat(2, auto);
    row-gap: 20px;
    .first_row,
    .second_row {
      display: flex;
      flex-wrap: wrap;
      .form__container {
        flex: 1 1 0;
        &:nth-child(2) {
          margin: 0 20px;
        }
        label {
          display: block;
          margin-bottom: 3px;
        }
        .preview {
          // height: 200px;
          width: 100%;
          border: 1px solid;
          img {
            height: 200px;
            width: 100%;
            object-fit: contain;
          }
        }
        textarea {
          width: 100%;
          resize: none;
          padding: 10px;
          // height: 100px;
        }
        input {
          width: 100%;
          padding: 5px 10px;
          border: 1px solid rgba(8, 8, 8, 0.171);
          outline: none;
          border: none;
          box-shadow: 1px 1px 1px rgba(153, 153, 153, 0.3);
          pointer-events: none;
          background: unset;
        }
        select {
          width: 100%;
          text-transform: capitalize;
          padding: 5px 10px;
        }
        div {
          display: flex;
          flex-wrap: nowrap;
          span {
            padding: 3px 10px;
            border: 3px solid rgba(8, 8, 8, 0.171);
            background-color: #444;
            display: inline-block;
            color: #fff;
            margin-left: 1px;
          }
        }
      }
    }
  }

  .wrapper {
    position: relative;
    text-align: center;
  }

  .description {
    display: grid;
    grid-template-rows: auto auto 1fr;
    row-gap: 20px;
    .intro {
      background: #444;
      width: fit-content;
      color: white;
      margin-bottom: 5px;
      padding: 2px 40px 2px 10px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top-left-radius: 10px;
    }
    .house_title {
      border-bottom: 1px solid #888;
      width: 80%;
      padding-bottom: 10px;
      margin: 0 auto;
      h1 {
        font-size: 25px;
        text-align: center;
      }
    }
    .footer p {
      text-align: justify;
      line-height: 1.5;
    }
    .content {
      .item {
        p,
        h4 {
          display: inline-block;
        }
        h4 {
          margin-left: 10px;
        }
      }
    }
  }
}
.single__preview {
  h1 {
    color: #888;
  }
}
.slider-container {
  overflow: hidden;
  width: 700px;
  height: 400px;
  margin: 0 auto;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.slider {
  width: 2800px;
  height: 400px;
  overflow: hidden;
  transition: all 0.32s ease;
}
.slide {
  float: left;
  width: 700px;
  height: 400px;
  font-size: 40px;
  color: #eee;
}
.green {
  background: #1abc9c;
}
.blue {
  background: #3498db;
}
.grey {
  background: #34495e;
}
// .red {
//   background: #e74c3c;
// }
.lightgrey {
  background: #95a5a6;
}

.navigator {
  text-align: center;
  display: inline-block;
  margin: 15px auto;
  padding-bottom: 10px;
}
.navigator li {
  float: left;
  color: #ecf0f1;
  border-radius: 50%;
  padding: 7px 11px;
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0 3px 17px rgba(0, 0, 0, 0.3);
  transition: all 0.32s ease;
  position: relative;
  &:hover {
    transform: translateY(-2px);
  }
}
div.showCase {
  display: grid;
  grid-template-columns: repeat(4, auto);
  row-gap: 100px;
  column-gap: 20px;
  padding: 30px 0;
  justify-content: space-evenly;
  border: 1px solid black;
  .single__house {
    display: flex;
    flex-direction: column;
    .image__wrapper {
      position: relative;
      width: 350px;
      height: 250px;
      cursor: pointer;
      &:hover .image__wrapper__title {
        height: 35%;
        padding: 10px;
      }
      .image__wrapper__title {
        // height: 35%;
        height: 0px;
        transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
        overflow: hidden;
        width: 100%;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 6px;
        position: absolute;
        bottom: 0;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        div {
          display: grid;
          grid-template-columns: auto auto;
          align-items: center;
          column-gap: 10px;
          button {
            padding: 5px 10px;
            font-size: 17px;
            cursor: pointer;
            outline: none;
            border: none;
            color: white;
            background-color: #444;
            &:hover {
              background-color: rgba(68, 68, 68, 0.295);
              color: #444;
            }
          }
        }
        h1 {
          font-size: 22px;
        }
      }
      img {
        border-radius: 5px;
        // border: 1px solid black;
      }
    }
  }
}
</style>
