import React from "react";


function Services() {
  return (
    <div style={{ backgroundColor: "#f9f9f907" }}>
      <div className="ServiceButton">
        <span className="buttonText">Services</span>
      </div>

      <div class="services-section">
        <h1 class="services-title">
          How <span class="italic">we</span> help{" "}
          <span class="italic">you?</span>
        </h1>
        <p class="services-description">
          We guide your health and wellness journey by providing personalized
          solutions to address your unique health concerns and preferences.
        </p>
        <div class="services-cards">
          <div class="cards">
            <h2>Our Aim</h2>
            <p>
              Our mission is to revolutionize nutrition and wellness, empowering
              individuals to lead healthier, happier lives through personalized
              solutions.
            </p>
          </div>
          <div class="cards">
            <h2>Tailored Wellness</h2>
            <p>
              Committed to providing everyone access to tailored health
              solutions that address their individual health concerns and
              preferences.
            </p>
          </div>

          {/* <div class="cards">
            <h2>Well-being</h2>
            <p>
              - Managing a health condition - Achieving specific fitness goals -
              Maintaining overall well-being. We're here to provide the support
              and guidance you need.
            </p>
          </div> */}
        </div>

        <div
          className="cards"
          style={{
            margin: "10px",
            textAlign: "center",
            width: "61.5%",
            marginLeft: "260px",
            minHeight: "200px",
          }}
        >
          <h2>Well-being</h2>
          <p>
            Managing a health condition Achieving specific fitness goals
            Maintaining overall well-being. We're here to provide the support
            and guidance you need.
          </p>
        </div>
      </div>
      <div style={{backgroundColor:"cem"}}>
        <div className="ServiceButton">
          <span className="buttonText">Comparison</span>
        </div>

        <div class="services-section">
          <h1 class="services-title">
            But ,Why be{" "}
            <span className="instrument-serif-regular-italic">our</span> <br />
            <span className="instrument-serif-regular-italic">Customer?</span>
          </h1>
          <div>
            <span
              style={{ color: "black" }}
              className="he1"
            >
              Others
            </span>{" "}
            <h1
              style={{ color: "red", font: "bold"}}
              className="he2"
            >
              What The Food
            </h1>
          </div>

          <div class="services-cards">
            <div class="cards1 ">
              
              <p>X Nutritional Tracking</p>
              <p>X Tiffin Services</p>
              <p>X Personalized menu & meals</p>
              <p> X Diet plan</p>
              <p> X Health Expert</p>
            </div>
            <div class="cards2">
              
              <p> ✓ Smart Nutrition Tracking</p>
              <p> ✓  Tiffin and Food Delivery</p>
              <p>  ✓ Custom menu, meals and time flexibility</p>
              <p>  ✓  Ai Customied Diet plans</p>
              <p>  ✓  24/7 Ai Health Expert</p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Services;
