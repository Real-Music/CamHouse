<template>
  <div id="house">
    <div id="tabs" class="container">
      <div class="tabs">
        <a v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]">New House</a>
        <a
          v-on:click="activetab='2'"
          v-bind:class="[ activetab === '2' ? 'active' : '' ]"
        >New Apartment</a>
        <a
          v-on:click="activetab='3'"
          v-bind:class="[ activetab === '3' ? 'active' : '' ]"
        >New Studio</a>
        <a v-on:click="activetab='4'" v-bind:class="[ activetab === '4' ? 'active' : '' ]">New Room</a>
      </div>

      <div class="content">
        <div v-if="activetab ==='1'" class="tabcontent">
          <form @submit.prevent="createHouse" class="createHouse">
            <div class="form__wrapper">
              <div class="house__des">
                <div class="title">
                  <p>House Description</p>
                </div>
                <div class="input__form">
                  <div class="first_row">
                    <div class="form__container">
                      <label for="floor_no">Number of floors</label>
                      <input type="text" required name="floor_no" id="floor_no">
                    </div>
                    <div class="form__container">
                      <label for="palors_no">Palors</label>
                      <input type="text" required name="palors_no" id="palors_no">
                    </div>
                    <div class="form__container">
                      <label for="kitchen_no">Kitchens</label>
                      <input type="text" required name="kitchen_no" id="kitchen_no">
                    </div>
                  </div>
                  <div class="second_row">
                    <div class="form__container">
                      <label for="rooms_no">Rooms</label>
                      <input type="text" required name="rooms_no" id="rooms_no">
                    </div>
                    <div class="form__container">
                      <label for="bathroom_no">Bathrooms</label>
                      <input type="text" required name="bathroom_no" id="bathroom_no">
                    </div>
                    <div class="form__container">
                      <label for="dimension">Dimension</label>
                      <div>
                        <input type="text" required name="dimension" id="dimension">
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
                        <input type="text" required name="price" id="price">
                        <span>CFA</span>
                      </div>
                    </div>
                    <div class="form__container">
                      <label for="duration">Duration</label>
                      <select name="duration" id="duration">
                        <option value="day">per day</option>
                        <option value="day">per night</option>
                        <option value="day">per week</option>
                        <option value="day">per month</option>
                        <option value="day">per year</option>
                      </select>
                    </div>
                    <div class="form__container">
                      <label for="location">Location</label>
                      <select name="location" id="location">
                        <option value>Location</option>
                        <option value="b">Bokwoango</option>
                        <option value>Molyko</option>
                        <option value>Milingo</option>
                        <option value>Mayor's Street</option>
                        <option value>Chief Street</option>
                        <option value>UB South</option>
                        <option value>UB Junction</option>
                        <option value>Mile 17</option>
                      </select>
                    </div>
                  </div>
                  <div class="second_row">
                    <div class="form__container">
                      <label for="description">Description</label>
                      <textarea name="description" id="description" cols="10" required rows="8"></textarea>
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
                        <img src alt="Images">
                      </div>
                      <label for="description">Upload</label>
                      <input type="file" required name="imageUrl" id="imageUrl" multiple>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="submit" value="Create">
          </form>
        </div>
      </div>
    </div>
    <div v-if="activetab ==='2'" class="tabcontent">
      <h1>Two</h1>
    </div>
    <div v-if="activetab ==='3'" class="tabcontent">
      <h1>Three</h1>
    </div>
    <div v-if="activetab ==='4'" class="tabcontent">
      <h1>four</h1>
    </div>
  </div>
</template>

<script>
import HouseApi from "@/services/HouseApi";

export default {
  props: {
    activetab: String
  },
  data() {
    return {
      floor_no: "",
      rooms_no: "",
      bathroom_no: "",
      palors_no: "",
      kitchen_no: "",
      dimension: "",
      location: "",
      imageUrl: "",
      description: "",
      price: "",
      duration: ""
    };
  },
  methods: {
    async createHouse() {
      try {
        const form = document.querySelector(".createHouse");
        const formData = new FormData(form);
        const slug = this.$store.state.user.slug;
        let response = await HouseApi.createHouse(slug, formData);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  font-size: 0.9em;
  color: #888;
}

/* Style the tabs */
.tabs {
  overflow: hidden;
  margin-bottom: -2px; /* hide bottom border */
  margin-left: 24px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f1f1f1;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #fff;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}

/* Style the tab content */
.tabcontent {
  padding: 30px 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 4px 4px 8px #e1e1e1;
}

.tabcontent td {
  padding: 0.3em 0.4em;
  color: #484848;
}
.tabcontent td.legend {
  color: #888;
  font-weight: bold;
  text-align: right;
}
.tabcontent .map {
  height: 173px;
  width: 220px;
  background: #d3eafb;
  margin-left: 60px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.data {
  width: 120px;
}

form {
  input[type="submit"] {
    padding: 7px 20px;
    cursor: pointer;
  }
}

.form__wrapper {
  display: grid;
  grid-template-columns: auto auto 1fr;
  column-gap: 50px;
  .house__des,
  .price,
  .image {
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: 15px;
    height: 100%;
    width: fit-content;
    .title {
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
            height: 200px;
            width: 100%;
            background: #444;
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
</style>

