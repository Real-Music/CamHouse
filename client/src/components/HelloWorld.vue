<template>
  <div class="hello">
    <nav class="main_navigation">
      <div class="background">
        <div class="content">
          <p>Search for house:</p>
          <form action="#">
            <select name="Location" id="location">
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

            <select name="Price" id="price">
              <option value>price</option>
              <option value>20,000CFA</option>
              <option value>50,000CFA</option>
              <option value>100,000CFA</option>
              <option value>250,000CFA</option>
              <option value>1,000,000 CFA</option>
            </select>
            <input type="submit" value="Search">
          </form>
        </div>
      </div>
    </nav>

    <main class="body">
      <section class="container">
        <article>
          <h2 class="sec_head">Need to find Rental? We got you</h2>
          <p>
            <b>CamHome</b> the solution giver; It covers the stress of looking for house in your new area. CamHome is
            making sure you find a
            <b>
              <i>Roof</i>
            </b>(a perfect space) before you move.
            Search through this website and we assure you that you will find
            <strong>a House, an Apartment, a Studio</strong>or
            <strong>
              a
              Room
            </strong> that
            suit your taste. Show an interest on a house and get connected with the provider.
            <br>
            <i>
              'As a Landlord, CamHome advertises your house like no other. Use CamHome get more tenants than you
              imagine'
            </i>
          </p>
        </article>
      </section>
      <section class="container">
        <article class="availableDept">
          <h2>Available For You</h2>

          <div class="Av_img">
            <div class="img">
              <a href="#">
                <img src="../assets/indexpageimg/img4.jpg" alt>
              </a>
              <a href="#">
                <p>Houses</p>
              </a>
            </div>
            <div class="img">
              <a href="#">
                <img src="../assets/indexpageimg/img2.jpg" alt>
              </a>
              <a href="#">
                <p>Apartments</p>
              </a>
            </div>
            <div class="img">
              <a href="#">
                <img src="../assets/indexpageimg/img3.jpg" alt>
              </a>
              <a href="#">
                <p>Studios</p>
              </a>
            </div>
            <div class="img">
              <a href="#">
                <img src="../assets/indexpageimg/room2.jpg" alt>
              </a>
              <a href="#">
                <p>Single Rooms</p>
              </a>
            </div>
          </div>
        </article>
      </section>
      <section class="container">
        <div class="trend_content">
          <h2>Trending</h2>
          <!-- image and description container -->
          <div class="showCase">
            <div class="imgcontainer">
              <div class="trending">
                <div class="image">
                  <a href>
                    <img src="../assets/indexpageimg/img3.jpg" alt>
                  </a>
                  <div class="Hlocation banner">
                    <div class="center">
                      <!-- <span class="house_type">House</span>  -->
                      <p>
                        <span class="house_type">Appartment</span>

                        <span class="price">
                          100,000
                          <span class="currency">CFA</span>
                          <span class="price_duration"></span>
                          per month
                        </span>
                      </p>
                    </div>
                    <div class="show_interest">
                      <span id="show_interest" class="fa fa-heart" title="Show interest on House"></span>
                    </div>
                  </div>
                </div>

                <!-- room description -->
                <article class="features">
                  <div class="Attrib">
                    <span class="description rooms" title="Number of rooms">
                      <span class="numOfrooms">2</span>
                      <i class="fa fa-bed" title="Number of rooms"></i>
                    </span>
                    <span class="description bathroom" title="Number of bathrooms">
                      <span class="bedroomNum">2</span>
                      <i class="fa fa-bath" title="Number of bathrooms"></i>
                    </span>
                    <span title="Dimension in Square footage">
                      <span id="dimensions">3000</span>
                      Sft
                    </span>
                  </div>
                  <p>
                    @
                    <span class="location">UB Junction</span>, Buea
                  </p>
                </article>
              </div>
              <div class="more">
                <a href="#" class="btn">
                  More
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <div class="imgcontainer">
              <div class="trending">
                <div class="image">
                  <a href>
                    <img src="../assets/indexpageimg/img3.jpg" alt>
                  </a>
                  <div class="Hlocation banner">
                    <div class="center">
                      <!-- <span class="house_type">House</span>  -->
                      <p>
                        <span class="house_type">Appartment</span>

                        <span class="price">
                          100,000
                          <span class="currency">CFA</span>
                          <span class="price_duration"></span>
                          per month
                        </span>
                      </p>
                    </div>
                    <div class="show_interest">
                      <span id="show_interest" class="fa fa-heart" title="Show interest on House"></span>
                    </div>
                  </div>
                </div>

                <!-- room description -->
                <article class="features">
                  <div class="Attrib">
                    <span class="description rooms" title="Number of rooms">
                      <span class="numOfrooms">2</span>
                      <i class="fa fa-bed" title="Number of rooms"></i>
                    </span>
                    <span class="description bathroom" title="Number of bathrooms">
                      <span class="bedroomNum">2</span>
                      <i class="fa fa-bath" title="Number of bathrooms"></i>
                    </span>
                    <span title="Dimension in Square footage">
                      <span id="dimensions">3000</span>
                      Sft
                    </span>
                  </div>
                  <p>
                    @
                    <span class="location">UB Junction</span>, Buea
                  </p>
                </article>
              </div>
              <div class="more">
                <a href="#" class="btn">
                  More
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <div class="imgcontainer">
              <div class="trending">
                <div class="image">
                  <a href>
                    <img src="../assets/indexpageimg/img3.jpg" alt>
                  </a>
                  <div class="Hlocation banner">
                    <div class="center">
                      <!-- <span class="house_type">House</span>  -->
                      <p>
                        <span class="house_type">Appartment</span>

                        <span class="price">
                          100,000
                          <span class="currency">CFA</span>
                          <span class="price_duration"></span>
                          per month
                        </span>
                      </p>
                    </div>
                    <div class="show_interest">
                      <span id="show_interest" class="fa fa-heart" title="Show interest on House"></span>
                    </div>
                  </div>
                </div>

                <!-- room description -->
                <article class="features">
                  <div class="Attrib">
                    <span class="description rooms" title="Number of rooms">
                      <span class="numOfrooms">2</span>
                      <i class="fa fa-bed" title="Number of rooms"></i>
                    </span>
                    <span class="description bathroom" title="Number of bathrooms">
                      <span class="bedroomNum">2</span>
                      <i class="fa fa-bath" title="Number of bathrooms"></i>
                    </span>
                    <span title="Dimension in Square footage">
                      <span id="dimensions">3000</span>
                      Sft
                    </span>
                  </div>
                  <p>
                    @
                    <span class="location">UB Junction</span>, Buea
                  </p>
                </article>
              </div>
              <div class="more">
                <a href="#" class="btn">
                  More
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <div class="imgcontainer">
              <div class="trending">
                <div class="image">
                  <a href>
                    <img src="../assets/indexpageimg/img3.jpg" alt>
                  </a>
                  <div class="Hlocation banner">
                    <div class="center">
                      <!-- <span class="house_type">House</span>  -->
                      <p>
                        <span class="house_type">Appartment</span>

                        <span class="price">
                          100,000
                          <span class="currency">CFA</span>
                          <span class="price_duration"></span>
                          per month
                        </span>
                      </p>
                    </div>
                    <div class="show_interest">
                      <span id="show_interest" class="fa fa-heart" title="Show interest on House"></span>
                    </div>
                  </div>
                </div>

                <!-- room description -->
                <article class="features">
                  <div class="Attrib">
                    <span class="description rooms" title="Number of rooms">
                      <span class="numOfrooms">2</span>
                      <i class="fa fa-bed" title="Number of rooms"></i>
                    </span>
                    <span class="description bathroom" title="Number of bathrooms">
                      <span class="bedroomNum">2</span>
                      <i class="fa fa-bath" title="Number of bathrooms"></i>
                    </span>
                    <span title="Dimension in Square footage">
                      <span id="dimensions">3000</span>
                      Sft
                    </span>
                  </div>
                  <p>
                    @
                    <span class="location">UB Junction</span>, Buea
                  </p>
                </article>
              </div>
              <div class="more">
                <a href="#" class="btn">
                  More
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <div class="imgcontainer">
              <div class="trending">
                <div class="image">
                  <a href>
                    <img src="../assets/indexpageimg/img3.jpg" alt>
                  </a>
                  <div class="Hlocation banner">
                    <div class="center">
                      <!-- <span class="house_type">House</span>  -->
                      <p>
                        <span class="house_type">Appartment</span>

                        <span class="price">
                          100,000
                          <span class="currency">CFA</span>
                          <span class="price_duration"></span>
                          per month
                        </span>
                      </p>
                    </div>
                    <div class="show_interest">
                      <span id="show_interest" class="fa fa-heart" title="Show interest on House"></span>
                    </div>
                  </div>
                </div>

                <!-- room description -->
                <article class="features">
                  <div class="Attrib">
                    <span class="description rooms" title="Number of rooms">
                      <span class="numOfrooms">2</span>
                      <i class="fa fa-bed" title="Number of rooms"></i>
                    </span>
                    <span class="description bathroom" title="Number of bathrooms">
                      <span class="bedroomNum">2</span>
                      <i class="fa fa-bath" title="Number of bathrooms"></i>
                    </span>
                    <span title="Dimension in Square footage">
                      <span id="dimensions">3000</span>
                      Sft
                    </span>
                  </div>
                  <p>
                    @
                    <span class="location">UB Junction</span>, Buea
                  </p>
                </article>
              </div>
              <div class="more">
                <a href="#" class="btn">
                  More
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <div class="imgcontainer">
              <div class="trending">
                <div class="image">
                  <a href>
                    <img src="../assets/indexpageimg/img3.jpg" alt>
                  </a>
                  <div class="Hlocation banner">
                    <div class="center">
                      <!-- <span class="house_type">House</span>  -->
                      <p>
                        <span class="house_type">Appartment</span>

                        <span class="price">
                          100,000
                          <span class="currency">CFA</span>
                          <span class="price_duration"></span>
                          per month
                        </span>
                      </p>
                    </div>
                    <div class="show_interest">
                      <span id="show_interest" class="fa fa-heart" title="Show interest on House"></span>
                    </div>
                  </div>
                </div>

                <!-- room description -->
                <article class="features">
                  <div class="Attrib">
                    <span class="description rooms" title="Number of rooms">
                      <span class="numOfrooms">2</span>
                      <i class="fa fa-bed" title="Number of rooms"></i>
                    </span>
                    <span class="description bathroom" title="Number of bathrooms">
                      <span class="bedroomNum">2</span>
                      <i class="fa fa-bath" title="Number of bathrooms"></i>
                    </span>
                    <span title="Dimension in Square footage">
                      <span id="dimensions">3000</span>
                      Sft
                    </span>
                  </div>
                  <p>
                    @
                    <span class="location">UB Junction</span>, Buea
                  </p>
                </article>
              </div>
              <div class="more">
                <a href="#" class="btn">
                  More
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container">
        <div class="getletter">
          <h2>Subscribe To Get News Letter</h2>
          <form action="#" class="getNotified">
            <input type="email" name="email" id="email" placeholder="Email">
            <input type="submit" value="Subscribe">
          </form>
        </div>
      </section>
    </main>

    <footer>
      <section class="fcontent">
        <div class="intro">
          <h2>Discover CamHome</h2>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href>Contact</a>
            </li>
            <li>
              <a href>Blog</a>
            </li>
            <li>
              <a href></a>
            </li>
          </ul>
        </div>
        <div class="newsletter">
          <div class="follow">
            <h2>Follow Us On:</h2>

            <a href="#">
              <i class="fab fa-twitter">Twitter</i>
            </a>
            <a href="#">
              <i class="fab fa-facebook-f">Facebook</i>
            </a>
            <a href="#">
              <i class="fab fa-instagram">Instagram</i>
            </a>
            <a href="#">
              <i class="fab fa-pinterest-p">Pinterest</i>
            </a>
          </div>
        </div>
      </section>
      <section class="fcontent">
        <p>&copy;-Present CamHome, All rights Reserved 2019</p>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
:root {
  --text: #917957;
  --tsize: 15px;
  --bg: #1e1c31;
  --bhover: rgb(11, 7, 48);
  --shead: 32px;
  --border: rgba(218, 165, 32, 0.445);
  --hover: rgba(30, 28, 49, 0.9);
  --hColor: red;
}

article p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
}

input[type="submit"],
a {
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -moz-transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

nav.main_navigation p.logo {
  flex-grow: 1;
  padding-left: 10px;
  color: var(--text);
  display: grid;
  align-items: center;
}

nav.main_navigation ul.nav {
  list-style-type: none;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  position: relative;
}

nav.main_navigation ul a {
  text-decoration: none;
  color: var(--hColor);
  font-size: var(--tsize);
  display: block;
  padding: 15px 30px;
  text-align: center;
  text-transform: capitalize;
  font-weight: 700;
  letter-spacing: 0.1em;
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -moz-transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

nav.main_navigation ul a:hover {
  color: var(--hColor);
  background-color: rgba(0, 0, 0, 0.4);
}

div.background {
  height: 95vh;
  background: rgba(0, 0, 0, 0.9) url("../assets/indexpageimg/room2.jpg")
    no-repeat center left fixed;
  background-size: cover;
  display: grid;
}

div.background .content {
  text-align: center;
  align-self: center;
  justify-self: center;
  background-color: rgba(0, 0, 0, 0.337);
}

div.background .content p {
  color: #fff;
  font-size: 40px;
  text-align: left;
  font-weight: bolder;
  border-radius: 5px;
  padding: 5px 10px;
}

div.background .content form {
  text-align: left;
  margin: 0px 8px;
}

div.background .content form input {
  border: 1px solid rgba(0, 0, 0, 0.164);
  padding: 15px 5px;
  border-radius: 5px;
}

div.background .content form input[type="text"],
.content form select {
  width: 350px;
  background-color: rgba(255, 255, 223);
  font-size: 16px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
}

div.background .content form input[type="submit"] {
  display: inline-block;
  margin: 10px 0px;
  width: 100px;
  text-transform: uppercase;
  font-weight: bolder;
  color: var(--text);
  background-color: var(--bg);
  cursor: pointer;
  border-radius: 10px;
}

div.background .content form input[type="submit"]:hover {
  color: var(--hColor);
  background-color: var(--bhover);
}

section.container:nth-child(1) {
  padding: 10px;
}

section.container:nth-child(1) article {
  text-align: center;
  width: 85%;
  margin: 100px auto;
  padding: 20px 0px;
}

section.container:nth-child(1) article h2 {
  font-size: 35px;
  color: rgba(9, 2, 36, 0.885);
  padding: 30px 10px 10px 10px;
}

section.container:nth-child(1) article p {
  font-size: 20px;
  padding-bottom: 50px;
}

section.container:nth-child(1) article p i {
  font-size: 14px;
}

section.container:nth-child(2) {
  border-top: 1px solid rgba(30, 28, 49, 0.2);
  border-bottom: 1px solid rgba(30, 28, 49, 0.2);
}

section.container:nth-child(2) article.availableDept {
  width: 85%;
  margin: 50px auto 70px auto;
  text-align: center;
}

section.container:nth-child(2) article.availableDept h2 {
  padding: 20px 10px 20px 10px;
  font-size: 35px;
  color: var(--bg);
}

article.availableDept div.Av_img {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
}

article.availableDept div.Av_img div.img {
  text-align: center;
}

article.availableDept div.Av_img div.img p {
  margin: 10px 0px;
  font-weight: 500;
}

article.availableDept div.Av_img div.img a p {
  color: var(--bg);
  text-decoration: underline #1e1c31;
}

section.container:nth-child(2) article.availableDept img {
  width: 250px;
  height: 240px;
  border-radius: 5px;
  box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.137);

  transition: all 3s ease-in;
}

section.container:nth-child(3) {
  color: var(--bg);
  padding: 20px 0px;
}

section.container:nth-child(3) div.showCase {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

section.container:nth-child(3) div.imgcontainer {
  width: 361px;
  position: relative;
  margin: 30px 0px;
}

section.container:nth-child(3) div.trend_content {
  width: 85%;
  margin: 0 auto 70px auto;
}

section.container:nth-child(3) div.trend_content h2 {
  text-align: center;
  padding: 20px 10px;
  font-size: 35px;
}

section.container:nth-child(3) div.trending {
  width: 350px;
  position: relative;
}

section.container:nth-child(3) div.trending div.image {
  position: relative;
}

section.container:nth-child(3) div.trending div.image a {
  display: block;
}

section.container:nth-child(3) div.trending div.image img {
  width: 350px;
  height: 250px;
  border-radius: 5px;
}

.Hlocation {
  position: absolute;
  top: 180px;
  left: 0;
  right: 0;
  bottom: 5px;
  display: flex;
}

.Hlocation span.price,
span.house_type {
  display: block;
  padding: 4px 3px;
}

.Hlocation div.center {
  display: flex;
  align-items: center;
}

.Hlocation p {
  color: rgba(255, 255, 255, 0.781);
  padding-left: 20px;
}

.banner {
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid transparent;
}

.fa-heart {
  font-size: 30px;
  cursor: pointer;
  color: rgba(255, 255, 255);

  transition: all 0.7s ease-in;
}

.fa-heart:hover {
  color: red;
  /* background-color: red; */
}

section.container:nth-child(3) div.trending article.features {
  display: flex;
  padding: 5px 10px;
}

section.container:nth-child(3) div.trending article.features div.Attrib {
  flex-grow: 1;
}

section.container:nth-child(3) div.trending article.features .description {
  display: inline-block;
  padding: 10px 5px 10px 5px;
}

div.trending article.features p {
  display: flex;
  align-items: center;
}

.dimension {
  display: inline-block;
  padding: 10px 5px 10px 5px;
}

.show_interest {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
}

section.container:nth-child(3) div.more {
  width: 350px;
}

.btn {
  width: 150px;
  text-decoration: none;
  text-align: center;
  display: block;
  padding: 10px;
  background-color: #fff;
  text-transform: uppercase;
  font-weight: bolder;
  color: var(--text);
  background-color: var(--bg);
  cursor: pointer;
  border-radius: 5px;
  margin: 0px auto;
  justify-self: flex-end;
}

.btn:hover {
  color: #f7a224d7;
  background-color: var(--bhover);
}

/* third section 'newsletter' */

section.container:nth-child(4) {
  /* border: 1px solid gold; */
  background: url("../assets/indexpageimg/img2.jpg") center center no-repeat;
  background-size: cover;
  height: 60vh;
  /* margin-bottom: 50px; */
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-items: center;
}

section.container:nth-child(4) div.getletter {
  /* border: 1px solid gold; */
  width: 60%;
  background-color: rgba(0, 0, 0, 0.192);
  /* margin: 10px auto 60px auto; */
  text-align: left;
}

div.getletter h2 {
  font-size: 25px;
  font-weight: bolder;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  text-align: left;
  padding-left: 5px;
}

div.getletter form {
  padding: 5px;
  color: rgb(255, 255, 255, 0.7);
  margin: 10px 0px;
}

div.getletter form input[type="email"] {
  display: inline-block;
  padding: 10px 15px;
  width: 60%;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.281);
  border-radius: 5px;
}

div.getletter form input[type="email"]:focus {
  background-color: #fff;
}

div.getletter form input[type="submit"] {
  padding: 16px;
  text-transform: uppercase;
  font-weight: bolder;
  border: 1px solid var(--bg);
  color: var(--text);
  background-color: var(--bg);
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
}

div.getletter form input[type="submit"]:hover {
  color: var(--hColor);
  background-color: var(--bhover);
}

/* end section */

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

section.fcontent:nth-child(2) p {
  text-align: center;
  padding-left: 50px;
  color: rgba(255, 255, 255, 0.61);
}
</style>
