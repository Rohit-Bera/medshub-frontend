import { React, useState } from "react";
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
import Navbar from "../components/Navbar";

//requirements
import { Link } from "react-router-dom";
import Modal from "react-modal/lib/components/Modal";

//for slider
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Feedback from "./Feedback";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid black",
      backgroundColor: "rgb(56, 182, 255)",
    },
  };

  return (
    <>
      <Navbar />
      <button className="nurse" onClick={() => setModalIsOpen(true)}>
        <i class="fas fa-user-nurse"></i>
      </button>
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
              <Link to="/productCategories/Brandproducts/dabur">
                <div className="brand">
                  <img src={dabur} alt="Dabur_img" />
                  <p>Dabur</p>
                </div>
              </Link>
              <Link to="/productCategories/Brandproducts/dettol">
                <div className="brand">
                  <img src={dettol} alt="Dettol_img" />
                  <p>Dettol</p>
                </div>
              </Link>
              <Link to="/productCategories/Brandproducts/garnier">
                <div className="brand">
                  <img src={garnier} alt="Garnier_img" />
                  <p>Garnier</p>
                </div>
              </Link>
              <Link to="/productCategories/Brandproducts/himalya">
                <div className="brand">
                  <img src={himalya} alt="Himalya_img" />
                  <p>Himalya</p>
                </div>
              </Link>
              <Link to="/productCategories/Brandproducts/mamaearth">
                <div className="brand">
                  <img src={mamaearth} alt="Mamaearth_img" />
                  <p>Mamaearth</p>
                </div>
              </Link>
              <Link to="/productCategories/Brandproducts/muscleblaze">
                <div className="brand">
                  <img src={muscleblaze} alt="Muscleblaze_img" />
                  <p>Muscleblaze</p>
                </div>
              </Link>
              <Link to="/productCategories/Brandproducts/zandu">
                <div className="brand">
                  <img src={zandu} alt="Zandu_img" />
                  <p>Zandu</p>
                </div>
              </Link>
            </Carousel>
          </div>

          <div className="home-categories">
            <div className="categories1">
              <div className="category big-img">
                <img src={sanitizer} alt="precautions-from-covid" />
                <Link to="/productCategories/covid-essentials">
                  <p>Safety from Covid</p>
                </Link>
              </div>
            </div>
            <div className="categories2">
              <label>
                <span className="font1">Shop By</span>
                <span className="font2">Category</span>
              </label>
              <div className="categories">
                <Link to="/productCategories/momandbabies">
                  <div className="category">
                    <img src={babies} alt="mom-and-babies" />
                    <p>Mom and Babies</p>
                  </div>
                </Link>

                <Link to="/productCategories/Brandproducts/fitness">
                  <div className="category">
                    <img src={fitness} alt="fitness" />
                    <p>Fitness</p>
                  </div>
                </Link>
                <Link to="/productCategories/devices">
                  <div className="category">
                    <img src={devices} alt="health-devices" />
                    <p>Devices</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="home-beauty">
            <Link to="/productCategories/Beautyproducts">
              <label>
                <p className="font1">Beauty</p>
                <p className="font2">Products</p>
              </label>
            </Link>
            <div className="beauty-products">
              <Link to="/productCategories/Beautyproducts/lipcare">
                <div className="beauty">
                  <img src={lipcare} alt="lipcare" />
                  <p>Lip Care</p>
                </div>
              </Link>
              <Link to="/productCategories/Beautyproducts/haircare">
                <div className="beauty">
                  <img src={haircare} alt="haircare" />
                  <p>Hair Care</p>
                </div>
              </Link>
              <Link to="/productCategories/Beautyproducts/bodycare">
                <div className="beauty">
                  <img src={bodycare} alt="bodycare" />
                  <p>body Care</p>
                </div>
              </Link>
              <Link to="/productCategories/Beautyproducts/facialkit">
                <div className="beauty">
                  <img src={facialkit} alt="lipcare" />
                  <p>facial Care</p>
                </div>
              </Link>
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
              <Link to="/productCategories/Men'sgrooming/beardoil">
                <div className="men-card">
                  <img src={beardoil} alt="beard_img" />
                  <p>Beard Oil</p>
                </div>
              </Link>
              <Link to="/productCategories/Men'sgrooming/beardwash">
                <div className="men-card">
                  <img src={beardwash} alt="beardwash_img" />
                  <p>Beard Wash</p>
                </div>
              </Link>
              <Link to="/productCategories/Men'sgrooming/hairgel">
                <div className="men-card">
                  <img src={hairgel} alt="hairgel_img" />
                  <p>Hair Gel</p>
                </div>
              </Link>
              <Link to="/productCategories/Men'sgrooming/mendeo">
                <div className="men-card">
                  <img src={mendeo} alt="mendeo_img" />
                  <p>Men Deodrant</p>
                </div>
              </Link>
            </Carousel>

            <label>
              <Link to="/productCategories/Men'sgrooming">
                <span className="font1">Men's </span>
                <span className="font2">Grooming</span>
              </Link>
            </label>
          </div>
        </div>
      </div>
      <Feedback />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
      >
        <div className="bot-body">
          <div className="bot-container">
            <div className="bot-close">
              <button className="cancel" onClick={() => setModalIsOpen(false)}>
                x
              </button>
            </div>
            <div className="bot-body">
              {/* <div className="chat">
                <div className="sender">
                  <p>Hello , Im sage Bot</p>
                </div>
                <div className="receiver">
                  <p>hey im , rohit</p>
                </div>
              </div> */}
            </div>
            <div className="bot-button">
              <form>
                <input type="text" className="textbox" />
                <button className="send">
                  <i class="far fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Home;
