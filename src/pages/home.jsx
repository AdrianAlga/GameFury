import Navbar from "../components/navbar";
import "../assets/css/home.css";
import carousel1 from "../assets/images/carousel1.png";
import carousel2 from "../assets/images/carousel2.png";
import carousel3 from "../assets/images/carousel3.png";
import FlashSale from "../components/flashSale";
import Card1 from "../components/card1";
import Mlbb1 from "../assets/images/mlbb.png";
import Countdown from "../components/time";
import Card2 from "../components/card2";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <div className="container-fluid">
          <div className="row py-5 mb-1"></div>
          <div className="row">
            <div className="col-12">
              <div id="carouselExampleAutoplaying" className="carousel carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="5000">
                    <img src={carousel1} className="d-block w-100 rounded-3" alt="img" />
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <img src={carousel2} className="d-block w-100 rounded-3" alt="img" />
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <img src={carousel3} className="d-block w-100 rounded-3" alt="img" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-12">
              <FlashSale />
            </div>
            <div className="col-12">
              <div className="border background1 border-2 p-3 rounded-4">
                <h3 className="py-3 d-flex">
                  Berakhir Dalam : <Countdown targetDate="2023-08-11 12:10:00" />{" "}
                </h3>
                <div className="comtainer">
                  <div className="row">
                    <div className="col-md-2 col-6 mb-4">
                      <RouterLink to={"/games"}>
                        <Card1 images={Mlbb1} diamonds="86" price="50.000" discounts="60.000" />
                      </RouterLink>
                    </div>

                    <div className="col-md-2 col-6 mb-4">
                      <RouterLink to={"/games"}>
                        <Card1 images={Mlbb1} diamonds="100" price="100.000" discounts="200.000" />
                      </RouterLink>
                    </div>
                    <div className="col-md-2 col-6 mb-4">
                      <RouterLink to={"/games"}>
                        <Card1 images={Mlbb1} diamonds="150" price="200.000" discounts="300.000" />
                      </RouterLink>
                    </div>
                    <div className="col-md-2 col-6 mb-4">
                      <RouterLink to={"/games"}>
                        <Card1 images={Mlbb1} diamonds="200" price="300.000" discounts="400.000" />
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-3">
          <div className="row">
            <h3>Mobile Games</h3>
            <div className="col-md-2 col-6">
              <RouterLink to={"/games"}>
                <Card2 images={Mlbb1} name="Mobile Legends" title="Moonton" />
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
