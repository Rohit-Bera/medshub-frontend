import React from "react";
import "../style/home.css";
import dabur from "../images/dabur.jpg";
import dettol from "../images/dettol.jpg";
import garnier from "../images/garnier.jpg";
import himalya from "../images/himalya.jpg";
import mamaearth from "../images/mamaearth.jpg";
import muscleblaze from "../images/muscleblaze.jpg";
import zandu from "../images/zandu.jpg";
import sanitizer from "../images/sanitizer.png";
import babies from "../images/babies.png";
import fitness from "../images/fitness.jpg";
import devices from "../images/devies.jpg";
import facialkit from "../images/facial-kit.png";
import haircare from "../images/haircare.jfif";
import lipcare from "../images/lipcare.jpg";
import bodycare from "../images/bodycare.jpg";
import beardoil from "../images/beardoil.jpg";
import beardwash from "../images/beardwash.jfif";
import hairgel from "../images/hairgel.jpg";
import mendeo from "../images/mendeodrant.jfif";
import Navbar from "../components/Navbar"

//requirements
import { Link } from "react-router-dom";

//for slider
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Home = () => {
  return (
    <>
     <Navbar />

      <div className="home-parent">
        <div className="home">
          <div className="home-top-brands">
            <label>
              <Link to="/productCategories/ourBrands">
                <span className="font1">Top</span>{" "}
                <span className="font2">Brands</span>
              </Link>
            </label>

            <Carousel
              className="slider"
              plugins={[
                "centered",
                "infinite",
                "arrows",
                {
                  resolve: slidesToShowPlugin,
                  autoplayPlugin,
                  options: {
                    numberOfSlides: 3,
                    interval: 4000,
                  },
                },
              ]}
              animationSpeed={1000}
            >
              <Link to="/productCategories/Dabur">
                <div className="brand">
                  <img src={dabur} alt="Dabur_img" />
                  <p>Dabur</p>
                </div>
              </Link>
              <div className="brand">
                <img src={dettol} alt="Dettol_img" />
                <p>Dettol</p>
              </div>
              <div className="brand">
                <img src={garnier} alt="Garnier_img" />
                <p>Garnier</p>
              </div>
              <div className="brand">
                <img src={himalya} alt="Himalya_img" />
                <p>Himalya</p>
              </div>
              <div className="brand">
                <img src={mamaearth} alt="Mamaearth_img" />
                <p>Mamaearth</p>
              </div>
              <div className="brand">
                <img src={muscleblaze} alt="Muscleblaze_img" />
                <p>Muscleblaze</p>
              </div>
              <div className="brand">
                <img src={zandu} alt="Zandu_img" />
                <p>Zandu</p>
              </div>
            </Carousel>
          </div>

          <div className="home-categories">
            <div className="categories1">
              <div className="category big-img">
                <img src={sanitizer} alt="precautions-from-covid" />
                <p>Safety from Covid</p>
              </div>
            </div>
            <div className="categories2">
              <label>
                <span className="font1">Shop By</span>
                <span className="font2">Category</span>
              </label>
              <div className="categories">
                <div className="category">
                  <img src={babies} alt="mom-and-babies" />
                  <p>Mom and Babies</p>
                </div>
                <div className="category">
                  <img src={fitness} alt="fitness" />
                  <p>Fitness</p>
                </div>
                <div className="category">
                  <img src={devices} alt="health-devices" />
                  <p>Devices</p>
                </div>
              </div>
            </div>
          </div>

          <div className="home-beauty">
            <label>
              <span className="font1">Beauty</span>
              <span className="font2">Products</span>
            </label>
            <div className="beauty-products">
              <div className="beauty">
                <img src={lipcare} alt="lipcare" />
                <p>Lip Care</p>
              </div>
              <div className="beauty">
                <img src={haircare} alt="haircare" />
                <p>Hair Care</p>
              </div>
              <div className="beauty">
                <img src={bodycare} alt="bodycare" />
                <p>body Care</p>
              </div>
              <div className="beauty">
                <img src={facialkit} alt="lipcare" />
                <p>facial Care</p>
              </div>
            </div>
          </div>

          <div className="home-men">
            <Carousel
              className="slider"
              plugins={[
                "centered",
                "infinite",
                "arrows",
                {
                  resolve: slidesToShowPlugin,
                  autoplayPlugin,
                  options: {
                    numberOfSlides: 3,
                    interval: 4000,
                  },
                },
              ]}
              animationSpeed={1000}
            >
              <div className="men-card">
                <img src={beardoil} alt="beard_img" />
                <p>Beard Oil</p>
              </div>
              <div className="men-card">
                <img src={beardwash} alt="beardwash_img" />
                <p>Beard Wash</p>
              </div>
              <div className="men-card">
                <img src={hairgel} alt="hairgel_img" />
                <p>Hair Gel</p>
              </div>
              <div className="men-card">
                <img src={mendeo} alt="mendeo_img" />
                <p>Men Deodrant</p>
              </div>
            </Carousel>

            <label>
              <span className="font1">Men's </span>
              <span className="font2">Grooming</span>
            </label>
          </div>
        </div>
      </div>
      <div className="footer">footer</div>
    </>
  );
};

export default Home;
