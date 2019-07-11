<template>
  <div id="Apartment__Preview">
    <dashboard title="Apartment">
      <div v-if="isEmpty">
        <h1 style="margin-bottom: 20px; color:#888888;">You haven't created any Apartment yet...!</h1>
        <router-link to @click.native="routing('/new_house')">Create New Apartment</router-link>
      </div>
      <div v-else>
        <div class="black__box" v-show="blackBox">
          <div class="content">
            <div class="tabcontent">
              <form @submit.prevent class="updateApartment">
                <div class="form__wrapper">
                  <div class="apartment__wrapper">
                    <div class="apartment__des">
                      <div class="title">
                        <p>Apartment Description</p>
                      </div>
                      <div class="input__form">
                        <div class="first_row">
                          <div class="form__container">
                            <label for="palors_no">Palors</label>
                            <input
                              type="text"
                              :value="apartments[active].palors_no"
                              name="palors_no"
                              id="palors_no"
                            >
                          </div>
                          <div class="form__container">
                            <label for="kitchen_no">Kitchens</label>
                            <input
                              type="text"
                              :value="apartments[active].kitchen_no"
                              name="kitchen_no"
                              id="kitchen_no"
                            >
                          </div>
                        </div>
                        <div class="second_row">
                          <div class="form__container">
                            <label for="rooms_no">Rooms</label>
                            <input
                              type="text"
                              :value="apartments[active].rooms_no"
                              name="rooms_no"
                              id="rooms_no"
                            >
                          </div>
                          <div class="form__container">
                            <label for="bathroom_no">Bathrooms</label>
                            <input
                              type="text"
                              :value="apartments[active].bathroom_no"
                              name="bathroom_no"
                              id="bathroom_no"
                            >
                          </div>
                          <div class="form__container">
                            <label for="dimension">Dimension</label>
                            <div>
                              <input
                                type="text"
                                :value="apartments[active].dimension"
                                name="dimension"
                                id="dimension"
                              >
                              <span>Sft</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="price">
                      <div class="title">
                        <p>Price & Location</p>
                      </div>
                      <div class="input__form">
                        <div class="first_row">
                          <div class="form__container">
                            <label for="price">Price</label>
                            <div>
                              <input
                                type="text"
                                :value="apartments[active].price"
                                name="price"
                                id="price"
                              >
                              <span>CFA</span>
                            </div>
                          </div>
                          <div class="form__container">
                            <label for="duration">Duration</label>
                            <select name="duration" id="duration">
                              <option
                                :value="apartments[active].duration"
                              >{{apartments[active].duration}}</option>
                              <option value="Per Day">per day</option>
                              <option value="Per Night">per night</option>
                              <option value="Per Week">per week</option>
                              <option value="Per Month">per month</option>
                              <option value="Per Year">per year</option>
                            </select>
                          </div>
                          <div class="form__container">
                            <label for="location">Location</label>
                            <select name="location" id="location">
                              <option
                                :value="apartments[active].location"
                              >{{apartments[active].location}}</option>
                              <option value="Bokwoango">Bokwoango</option>
                              <option value="Molyko">Molyko</option>
                              <option value="Milingo">Milingo</option>
                              <option value="Mayor's Street">Mayor's Street</option>
                              <option value="Chief Street">Chief Street</option>
                              <option value="UB South">UB South</option>
                              <option value="UB Junction">UB Junction</option>
                              <option value="Mile 17">Mile 17</option>
                            </select>
                          </div>
                        </div>
                        <div class="second_row">
                          <div class="form__container">
                            <label for="description">Description</label>
                            <textarea
                              name="description"
                              id="description"
                              cols="10"
                              rows="5"
                              :value="apartments[active].description"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="help__text">
                      <h1>Here, You can Edit / Delete Apartment</h1>
                      <br>
                      <br>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt autem error
                        <br>
                        <br>quos perferendis distinctio ullam rerum, beatae, minima sunt voluptatem rem quia, assumenda natus amet explicabo. Saepe iusto velit laboriosam.
                      </p>
                    </div>
                  </div>

                  <div class="images__upload">
                    <div class="image">
                      <div class="title">
                        <p>Image Upload</p>
                      </div>
                      <div class="input__form">
                        <div class="first_row">
                          <div class="form__container">
                            <div class="preview">
                              <img :src="previewUrl" v-if="previewUrl">
                              <img
                                :src="'http://localhost:8000'+apartments[active].imageUrl1"
                                v-else
                              >
                            </div>
                            <label for="description">Upload</label>
                            <input
                              type="file"
                              name="imageUrl"
                              @change="onFileChange"
                              accept="image/*"
                              id="imageUrl"
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="image">
                      <div class="title">
                        <p>Image Upload</p>
                      </div>
                      <div class="input__form">
                        <div class="first_row">
                          <div class="form__container">
                            <div class="preview">
                              <img :src="previewUrl1" v-if="previewUrl1">
                              <img
                                :src="'http://localhost:8000'+apartments[active].imageUrl2"
                                v-else
                              >
                            </div>
                            <label for="description">Upload</label>
                            <input
                              type="file"
                              name="imageUrl"
                              @change="onFileChange1"
                              accept="image/*"
                              id="imageUrl"
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="image">
                      <div class="title">
                        <p>Image Upload</p>
                      </div>
                      <div class="input__form">
                        <div class="first_row">
                          <div class="form__container">
                            <div class="preview">
                              <img :src="previewUrl2" v-if="previewUrl2">
                              <img
                                :src="'http://localhost:8000'+apartments[active].imageUrl3"
                                v-else
                              >
                            </div>
                            <label for="description">Upload</label>
                            <input
                              type="file"
                              name="imageUrl"
                              @change="onFileChange2"
                              accept="image/*"
                              id="imageUrl"
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input type="submit" @click="update" value="Update">
                <input type="submit" @click="deleteApartment" value="Delete">
                <input type="submit" @click="cancel" value="Cancel">
              </form>
            </div>
          </div>
        </div>
        <div class="apartments__container">
          <div class="single__preview">
            <div class="bottom">
              <div class="wrapper">
                <div class="slider-container">
                  <ul class="slider" :style="styleObject">
                    <li class="green slide">
                      <img :src="'http://localhost:8000'+apartments[active].imageUrl1">
                    </li>
                    <li class="blue slide">
                      <img :src="'http://localhost:8000'+apartments[active].imageUrl2">
                    </li>
                    <li class="grey slide">
                      <img :src="'http://localhost:8000'+apartments[active].imageUrl3">
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
                <div class="apartment_title">
                  <h1>Preview</h1>
                </div>
                <div class="content">
                  <div class="input__form">
                    <div class="first_row">
                      <div class="form__container">
                        <label for="rooms_no">Rooms</label>
                        <input
                          type="text"
                          name="rooms_no"
                          :value="apartments[active].rooms_no"
                          id="rooms_no"
                          readonly
                        >
                      </div>
                      <div class="form__container">
                        <label for="palors_no">Palors</label>
                        <input
                          type="text"
                          name="palors_no"
                          :value="apartments[active].palors_no"
                          id="palors_no"
                          readonly
                        >
                      </div>
                      <div class="form__container">
                        <label for="kitchen_no">Kitchens</label>
                        <input
                          type="text"
                          name="kitchen_no"
                          :value="apartments[active].kitchen_no"
                          id="kitchen_no"
                          readonly
                        >
                      </div>
                    </div>
                    <div class="second_row">
                      <div class="form__container">
                        <label for="bathroom_no">Bathrooms</label>
                        <input
                          type="text"
                          name="bathroom_no"
                          :value="apartments[active].bathroom_no"
                          id="bathroom_no"
                          readonly
                        >
                      </div>
                      <div class="form__container">
                        <label for="rooms_no">Location</label>
                        <input
                          type="text"
                          name="location"
                          :value="apartments[active].location"
                          id="rooms_no"
                          readonly
                        >
                      </div>
                      <div class="form__container">
                        <label for="dimension">Dimension</label>
                        <div>
                          <input
                            type="text"
                            name="dimension"
                            :value="apartments[active].dimension"
                            id="dimension"
                            readonly
                          >
                          <span>Sft</span>
                        </div>
                      </div>
                    </div>
                    <div class="second_row">
                      <div class="form__container">
                        <label for="bathroom_no">Duration</label>
                        <input
                          type="text"
                          name="duration"
                          :value="apartments[active].duration"
                          id="bathroom_no"
                          readonly
                        >
                      </div>
                      <div class="form__container">
                        <label for="dimension">Price</label>
                        <div>
                          <input
                            type="text"
                            name="dimension"
                            id="dimension"
                            v-bind:value="apartments[active].price"
                            readonly
                          >
                          <span>FCFA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footer">
                  <div class="intro">Description</div>
                  <!-- <textarea
                    name="description"
                    id="description"
                    v-model="apartments[active].description"
                    cols="30"
                    rows="10"
                  ></textarea>-->
                  <p>{{apartments[active].description}}</p>
                </div>
              </div>
            </div>
            <div class="owner">
              <label>Owner: {{user.userName}}</label>
              <label>Email: {{user.email}}</label>
              <label>Tell: {{ user.tel}}</label>
            </div>
            <div class="previous" @click="active <= 0 ? active = 0: active-=1">
              <p><<</p>
            </div>
            <div
              class="next"
              @click="active >= (apartments.length-1) ? active = (apartments.length-1)  : active += 1"
            >
              <p>>></p>
            </div>
          </div>
          <div class="all__apartments">
            <div class="showCase" title="Click to Edit">
              <div
                class="single__apartment"
                @click="editApartment(apartment,index)"
                v-for="(apartment, index) in apartments"
                :key="index"
              >
                <div class="image__wrapper">
                  <div class="image-child">
                    <img :src="'http://localhost:8000'+ apartment.imageUrl1">
                    <div class="infor">
                      <!-- <p>Click To Edit</p> -->
                      <p>{{apartment.description}}</p>
                    </div>
                  </div>
                  <div class="image__wrapper__title">
                    <div class="image_price">
                      <h1>Apartment</h1>
                    </div>
                    <div class="btn">
                      <div>
                        <p>Price: {{ apartment.price }} FCFA {{ apartment.duration }}</p>
                        <p>Palors: {{apartment.palors_no}}</p>
                      </div>
                      <div>
                        <p>Location: {{apartment.location}}</p>
                        <p>Dimension: {{apartment.dimension}} Sft</p>
                      </div>
                      <div>
                        <p>Rooms: {{apartment.rooms_no}}</p>
                        <p>Kitchen: {{apartment.kitchen_no}}</p>
                        <p>Bathrooms: {{apartment.bathroom_no}}</p>
                      </div>
                    </div>
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
import ApartmentApi from "@/services/ApartmentApi";

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
      previewUrl: "",
      previewUrl1: "",
      previewUrl2: "",
      active: 0,
      apartments: [],
      activeSlide: 1,
      blackBox: false,
      isEmpty: true
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
    async update() {
      try {
        const form = document.querySelector(".updateApartment");
        const formData = new FormData(form);
        const slug = this.apartments[this.active].slug;
        let response = await ApartmentApi.updateApartment(slug, formData);
        this.$router.go();
      } catch (error) {}
      console.log(error.response);
    },
    async deleteApartment() {
      try {
        const slug = this.apartments[this.active].slug;
        const response = await ApartmentApi.deleteApartment(slug);
        this.$router.go();
      } catch (error) {
        console.log(error.response);
      }
    },
    cancel() {
      this.blackBox = false;
    },
    editApartment(apartment, index) {
      this.active = index;
      this.blackBox = true;
      console.log(apartment, index);
    },
    changeSlide: function(num) {
      this.activeSlide = num;
    },
    routing(path) {
      this.$router.push({
        path: "/home/" + this.$cookies.get("user").slug + path
      });
    },
    nextSlide: function() {
      if (this.activeSlide < 3) this.activeSlide++;
    },
    prevSlide: function() {
      if (this.activeSlide > 1) this.activeSlide--;
    },
    onFileChange: function(event) {
      const file = event.target.files[0];
      if (!file) {
        return false;
      }
      if (!file.type.match("image.*")) {
        return false;
      }
      const reader = new FileReader();
      const that = this;
      reader.onload = function(e) {
        that.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChange1: function(event) {
      const file = event.target.files[0];
      if (!file) {
        return false;
      }
      if (!file.type.match("image.*")) {
        return false;
      }
      const reader = new FileReader();
      const that = this;
      reader.onload = function(e) {
        that.previewUrl1 = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChange2: function(event) {
      const file = event.target.files[0];
      if (!file) {
        return false;
      }
      if (!file.type.match("image.*")) {
        return false;
      }
      const reader = new FileReader();
      const that = this;
      reader.onload = function(e) {
        that.previewUrl2 = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  },
  async beforeMount() {
    const response = await ApartmentApi.getAllApartment(
      this.$cookies.get("user").slug
    );
    console.log(response);
    if (response.data.apartments.length < 0) {
      this.isEmpty = true;
    } else {
      {
        this.isEmpty = false;
        this.apartments = response.data.apartments;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#Apartment__Preview {
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
    background: white;
    // padding-top: 30px;
    padding-right: 40px;
    width: 95%;
    margin: 0 auto;
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
            object-fit: cover;
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
          // border: none;
          box-shadow: 1px 1px 1px rgba(153, 153, 153, 0.3);
          // pointer-events: none;
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
    .apartment_title {
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
#Apartment__Preview .black__box {
  height: 100vh;
  /* width: 100%; */
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  margin-left: 220px;
  margin-top: 50px;
  z-index: 10;
  padding: 50px;
  input[type="submit"] {
    padding: 6px 15px;
    outline: none;
    cursor: pointer;
    margin-right: 30px;
    margin-top: 20px;
  }
  .form__wrapper {
    display: grid;
    grid-template-rows: 1fr auto;
    row-gap: 20px;
    .apartment__wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 0.5fr;
      column-gap: 50px;
      .help__text {
        p {
          text-align: justify;
          line-height: 1.4;
        }
      }
    }
    .images__upload {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 50px;
    }
    .apartment__des,
    .price,
    .image {
      display: grid;
      grid-template-rows: auto 1fr;
      row-gap: 15px;
      height: 100%;
      width: 100%;
      .title {
        margin-bottom: unset;
        p {
          background-color: #444;
          width: fit-content;
          padding: 5px 10px;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          border-top-left-radius: 10px;
          font-size: 14px;
          color: white;
        }
      }
      .input__form {
        display: unset;
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
              box-shadow: 1px 1px 1px rgba(153, 153, 153, 0.3);
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
    }
  }
}
.single__preview {
  position: relative;
  .previous,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-150%);
    background: rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 50px;
    font-size: 1.5em;
    color: white;
    display: grid;
    place-content: center;
    border-radius: 50%;
    cursor: pointer;
  }

  .previous {
    left: 0;
  }
  .next {
    right: 0;
  }
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
  grid-template-columns: repeat(2, 1fr);
  row-gap: 100px;
  column-gap: 30px;
  padding: 30px 0;
  justify-content: space-evenly;
  .single__apartment {
    display: flex;
    flex-direction: column;
    .image__wrapper {
      .image-child {
        position: relative;
        &:hover > .infor {
          height: 35%;
        }
        img {
          height: 300px;
        }
      }
      .infor {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 0;
        overflow: hidden;
        // height: 35%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
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
</style>
