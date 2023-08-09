import Navbar from "../components/navbar";
import "../assets/css/home.css";
import carousel1 from "../assets/images/carousel1.png";
import carousel2 from "../assets/images/carousel2.png";
import carousel3 from "../assets/images/carousel3.png";
import FlashSale from "../components/flashSale";
import Card1 from "../components/card1";
import Mlbb1 from "../assets/images/mlbb.png";

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
                  <div className="carousel-item active" data-bs-interval="6000">
                    <img src={carousel1} className="d-block w-100 rounded-3" alt="img" />
                  </div>
                  <div className="carousel-item" data-bs-interval="6000">
                    <img src={carousel2} className="d-block w-100 rounded-3" alt="img" />
                  </div>
                  <div className="carousel-item" data-bs-interval="6000">
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
                <h3 className="text-white py-3">Berakhir Dalam : 20:20:20</h3>
                <div className="comtainer">
                  <div className="row">
                    <div className="col-md-3 col-6 mb-4">
                      <Card1 images={Mlbb1} diamonds="86" price="50.000" discounts="60.000" />
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                      <Card1 images={Mlbb1} diamonds="100" price="100.000" discounts="200.000" />
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                      <Card1 images={Mlbb1} diamonds="150" price="200.000" discounts="300.000" />
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                      <Card1 images={Mlbb1} diamonds="200" price="300.000" discounts="400.000" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
