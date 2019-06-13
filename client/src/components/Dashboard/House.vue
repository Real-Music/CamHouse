<template>
  <div id="house">
    <dashboard title="New House">
      <div>
        <div id="tabs" class="container">
          <div class="tabs">
            <a
              v-on:click="activetab='1'"
              v-bind:class="[ activetab === '1' ? 'active' : '' ]"
            >New House</a>
            <a
              v-on:click="activetab='2'"
              v-bind:class="[ activetab === '2' ? 'active' : '' ]"
            >New Apartment</a>
            <a
              v-on:click="activetab='3'"
              v-bind:class="[ activetab === '3' ? 'active' : '' ]"
            >New Studio</a>
            <a
              v-on:click="activetab='4'"
              v-bind:class="[ activetab === '4' ? 'active' : '' ]"
            >New Room</a>
          </div>
        </div>
        <div class="content">
          <div v-if="activetab ==='1'" class="tabcontent">
            <form @submit.prevent="createHouse" class="createHouse">
              <div class="form__wrapper">
                <div class="house__wrapper">
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
                          <textarea name="description" id="description" cols="10" required rows="5"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="help__text">
                    <h1>Help Text For House</h1>
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
                              src="https://media.istockphoto.com/photos/render-sketch-of-modern-cozy-house-in-chalet-style-picture-id858388106?k=6&m=858388106&s=612x612&w=0&h=w3o9PaWvA7v2-OTidMfa34QsRq3mfLGvqYRSs3dzdls="
                              v-else
                            >
                            <!-- <p >No image...</p> -->
                          </div>
                          <label for="description">Upload</label>
                          <input
                            type="file"
                            required
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
                              src="https://media.istockphoto.com/photos/render-sketch-of-modern-cozy-house-in-chalet-style-picture-id858388106?k=6&m=858388106&s=612x612&w=0&h=w3o9PaWvA7v2-OTidMfa34QsRq3mfLGvqYRSs3dzdls="
                              v-else
                            >
                          </div>
                          <label for="description">Upload</label>
                          <input
                            type="file"
                            required
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
                              src="https://media.istockphoto.com/photos/render-sketch-of-modern-cozy-house-in-chalet-style-picture-id858388106?k=6&m=858388106&s=612x612&w=0&h=w3o9PaWvA7v2-OTidMfa34QsRq3mfLGvqYRSs3dzdls="
                              v-else
                            >
                          </div>
                          <label for="description">Upload</label>
                          <input
                            type="file"
                            required
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
              <input type="submit" value="Create House">
            </form>
          </div>
        </div>

        <div v-if="activetab === '2'" class="tabcontent">
          <form @submit.prevent="createApartment" class="createApartment">
            <div class="form__wrapper">
              <div class="house__wrapper">
                <div class="house__des">
                  <div class="title">
                    <p>Apartment Description</p>
                  </div>
                  <div class="input__form">
                    <div class="first_row">
                      <!-- <div class="form__container">
                        <label for="floor_no">Number of floors</label>
                        <input type="text" required name="floor_no" id="floor_no">
                      </div>-->
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
                        <textarea name="description" id="description" cols="10" required rows="5"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="help__text">
                  <h1>Apartment Help Text</h1>
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
                            src="https://media.istockphoto.com/photos/render-sketch-of-modern-cozy-house-in-chalet-style-picture-id858388106?k=6&m=858388106&s=612x612&w=0&h=w3o9PaWvA7v2-OTidMfa34QsRq3mfLGvqYRSs3dzdls="
                            v-else
                          >
                          <!-- <p >No image...</p> -->
                        </div>
                        <label for="description">Upload</label>
                        <input
                          type="file"
                          required
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
                            src="https://media.istockphoto.com/photos/render-sketch-of-modern-cozy-house-in-chalet-style-picture-id858388106?k=6&m=858388106&s=612x612&w=0&h=w3o9PaWvA7v2-OTidMfa34QsRq3mfLGvqYRSs3dzdls="
                            v-else
                          >
                        </div>
                        <label for="description">Upload</label>
                        <input
                          type="file"
                          required
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
                            src="https://media.istockphoto.com/photos/render-sketch-of-modern-cozy-house-in-chalet-style-picture-id858388106?k=6&m=858388106&s=612x612&w=0&h=w3o9PaWvA7v2-OTidMfa34QsRq3mfLGvqYRSs3dzdls="
                            v-else
                          >
                        </div>
                        <label for="description">Upload</label>
                        <input
                          type="file"
                          required
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
            <input type="submit" value="Create Apartment">
          </form>
        </div>

        <div v-if="activetab === '3'" class="tabcontent">
          <form @submit.prevent="createStudio" class="createStudio">
            <div class="form__wrapper">
              <div class="house__wrapper">
                <div class="house__des">
                  <div class="title">
                    <p>Studio Description</p>
                  </div>
                  <div class="input__form">
                    <div class="first_row">
                      <div class="form__container">
                        <label for="kitchen_no">Kitchens</label>
                        <input type="text" required name="kitchen_no" id="kitchen_no">
                      </div>
                      <div class="form__container">
                        <label for="bathroom_no">Bathrooms</label>
                        <input type="text" required name="bathroom_no" id="bathroom_no">
                      </div>
                    </div>
                    <div class="second_row">
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
                        <textarea name="description" id="description" cols="10" required rows="5"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="help__text">
                  <h1>Studio Help Text</h1>
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
                            src="https://media.istockphoto.com/photos/render-sketch-of-modern-cozy-house-in-chalet-style-picture-id858388106?k=6&m=858388106&s=612x612&w=0&h=w3o9PaWvA7v2-OTidMfa34QsRq3mfLGvqYRSs3dzdls="
                            v-else
                          >
                          <!-- <p >No image...</p> -->
                        </div>
                        <label for="description">Upload</label>
                        <input
                          type="file"
                          required
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
                            src="https://media.istockphoto.com/photos/render-sketch-of-modern-cozy-house-in-chalet-style-picture-id858388106?k=6&m=858388106&s=612x612&w=0&h=w3o9PaWvA7v2-OTidMfa34QsRq3mfLGvqYRSs3dzdls="
                            v-else
                          >
                        </div>
                        <label for="description">Upload</label>
                        <input
                          type="file"
                          required
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
                            src="https://media.istockphoto.com/photos/render-sketch-of-modern-cozy-house-in-chalet-style-picture-id858388106?k=6&m=858388106&s=612x612&w=0&h=w3o9PaWvA7v2-OTidMfa34QsRq3mfLGvqYRSs3dzdls="
                            v-else
                          >
                        </div>
                        <label for="description">Upload</label>
                        <input
                          type="file"
                          required
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
            <input type="submit" value="Create Studio">
          </form>
        </div>
        <div v-if="activetab === '4'" class="tabcontent">
          <form @submit.prevent="createSingleRoom" class="createSingleRoom">
            <div class="form__wrapper">
              <div class="house__wrapper">
                <div class="house__des">
                  <div class="title">
                    <p>Single Room Description</p>
                  </div>
                  <div class="input__form">
                    <div class="first_row">
                      <div class="form__container">
                        <label for="kitchen_no">Kitchens</label>
                        <input type="text" required name="kitchen_no" id="kitchen_no">
                      </div>
                      <div class="form__container">
                        <label for="bathroom_no">Bathrooms</label>
                        <input type="text" required name="bathroom_no" id="bathroom_no">
                      </div>
                    </div>
                    <div class="second_row">
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
                        <textarea name="description" id="description" cols="10" required rows="5"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="help__text">
                  <h1>Studio Help Text</h1>
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
                            src="https://media.istockphoto.com/photos/render-sketch-of-modern-cozy-house-in-chalet-style-picture-id858388106?k=6&m=858388106&s=612x612&w=0&h=w3o9PaWvA7v2-OTidMfa34QsRq3mfLGvqYRSs3dzdls="
                            v-else
                          >
                          <!-- <p >No image...</p> -->
                        </div>
                        <label for="description">Upload</label>
                        <input
                          type="file"
                          required
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
                            src="https://media.istockphoto.com/photos/render-sketch-of-modern-cozy-house-in-chalet-style-picture-id858388106?k=6&m=858388106&s=612x612&w=0&h=w3o9PaWvA7v2-OTidMfa34QsRq3mfLGvqYRSs3dzdls="
                            v-else
                          >
                        </div>
                        <label for="description">Upload</label>
                        <input
                          type="file"
                          required
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
                            src="https://media.istockphoto.com/photos/render-sketch-of-modern-cozy-house-in-chalet-style-picture-id858388106?k=6&m=858388106&s=612x612&w=0&h=w3o9PaWvA7v2-OTidMfa34QsRq3mfLGvqYRSs3dzdls="
                            v-else
                          >
                        </div>
                        <label for="description">Upload</label>
                        <input
                          type="file"
                          required
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
            <input type="submit" value="Create Room">
          </form>
        </div>
      </div>
    </dashboard>
  </div>
</template>

<script>
import HouseApi from "@/services/HouseApi";
import ApartmentApi from "@/services/ApartmentApi";
import StudioApi from "@/services/StudioApi";
import SingleRoom from "@/services/singleRoomApi";

export default {
  name: "createHouse",
  // props: {
  //   activetab: String
  // },
  data() {
    return {
      activetab: "1",
      previewUrl: "",
      previewUrl1: "",
      previewUrl2: "",
      currentRoute: window.location.pathname
    };
  },
  methods: {
    async createHouse() {
      try {
        const form = document.querySelector(".createHouse");
        const formData = new FormData(form);
        const slug = this.$cookies.get("user").slug;

        const response = await HouseApi.createHouse(slug, formData);
        this.$store.dispatch("setHouse", response.data.house);

        this.$router.push({
          name: "house",
          params: { userId: this.$cookies.get("user").slug }
        });

        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async createApartment() {
      try {
        const form = document.querySelector(".createApartment");
        const formData = new FormData(form);
        const slug = this.$cookies.get("user").slug;

        const response = await ApartmentApi.create(slug, formData);
        this.$store.dispatch("setApartment", response.data.apartment);

        this.$router.push({
          name: "apartment",
          params: { userId: this.$cookies.get("user").slug }
        });
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async createStudio() {
      try {
        alert("You are about to Create a New Studio?");
        const form = document.querySelector(".createStudio");
        const formData = new FormData(form);
        const slug = this.$cookies.get("user").slug;

        const response = await StudioApi.create(slug, formData);
        // this.$store.dispatch("setApartment", response.data.apartment);

        this.$router.push({
          name: "studio",
          params: { userId: this.$cookies.get("user").slug }
        });
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async createSingleRoom() {
      try {
        const form = document.querySelector(".createSingleRoom");
        const formData = new FormData(form);
        const slug = this.$cookies.get("user").slug;

        const response = await SingleRoom.create(slug, formData);
        // this.$store.dispatch("setApartment", response.data.apartment);

        this.$router.push({
          name: "room",
          params: { userId: this.$cookies.get("user").slug }
        });
      } catch (error) {
        console.log(error.response.data);
      }
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
  grid-template-rows: 1fr auto;
  row-gap: 50px;
  .house__wrapper {
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
  .house__des,
  .price,
  .image {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100%;
    width: 100%;
    .title {
      margin-bottom: unset;
      p {
        background-color: #444;
        width: fit-content;
        padding: 5px 10px;
        border-top-right-radius: 10px;
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
</style>
