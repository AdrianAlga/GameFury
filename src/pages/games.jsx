import Navbar from "../components/navbar";
import { Link as RouterLink } from "react-router-dom";
import "../assets/css/games.css";
import Mlbb from "../assets/images/mlbb.png";
import { useState } from "react";
import iconMl1 from "../assets/images/iconMl1.png";
import iconMl2 from "../assets/images/iconMl2.png";
import iconMl3 from "../assets/images/iconMl3.png";
import Icon1 from "../assets/images/diamondsMl.png";
import Card3 from "../components/card3";

export default function Games() {
  const [diamond, setDiamond] = useState(1);
  const [game, setGame] = useState();

  return (
    <>
      <Navbar />
      <section id="games">
        <div className="container py-5"></div>
        <div className="container-fluid position-relative">
          <div className="row border1 border rounded-2 border-2 ">
            <div className="col-2">
              <RouterLink to={"../"}>
                <h2>
                  <i className="bi bi-arrow-left"></i>
                </h2>
              </RouterLink>
            </div>
            <div className="col-8">
              <div className="container h-100">
                <div className="row h-100  align-items-center">
                  <div className="col-12 text-center">
                    <h1>GAMING</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 mb-4">
              <div className="container border  border-2 rounded-2">
                <div className="row border2">
                  <div className="col-5">
                    <img src={Mlbb} alt="img" height={140} className="rounded-4 position-absolute image1" />
                  </div>
                  <div className="col-7 pt-2 ">
                    <h5 className="m-0">Mobile Legends : Bang Bang</h5>
                    <p className="m-0">Moonton</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="font1 ">Cara Top Up Diamond Mobile Legends paling murah:</p>
                    <ol>
                      <li>Masukkan ID & Server</li>
                      <li>Pilih Item</li>
                      <li>Pilih Pembayaran</li>
                      <li>Masukkan No WhatsApp</li>
                      <li>Klik Konfirmasi Top Up & lakukan Pembayaran</li>
                      <li>Diamonds otomatis masuk ke akun game</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="container mb-3 border border-2 rounded-2">
                <div className="row px-2 pt-2">
                  <div className="col-12 border-bottom">
                    <h4>1.Masukkan User ID</h4>
                  </div>
                  <div className="col-12">
                    <p>Simpan ID dengan fitur Save ID</p>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="TypeInput" className="form-label">
                        Masukkan User ID
                      </label>
                      <input type="text" className="form-control " id="TypeInput" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="TypeInput2" className="form-label">
                        Masukkan Server
                      </label>
                      <input type="text" className="form-control " id="TypeInput2" />
                    </div>
                  </div>
                  <div className="col-12">
                    <p>Untuk menemukan ID Pengguna Anda, klik avatar Anda di pojok kiri atas layar dan buka tab Info Umum. Contoh: 12345678 (1234)</p>
                  </div>
                </div>
              </div>
              <div className="container mb-3 border border-2 rounded-2">
                <div className="row px-2 pt-2">
                  <div className="col-12 border-bottom">
                    <h4>2.Pilih Nominal Top Up</h4>
                  </div>
                  <div className="col-12">
                    <button
                      className={`btn btn-secondary diamonds m-2 ${diamond === 1 && "bg-button"}`}
                      onClick={() => {
                        setDiamond(1);
                      }}
                    >
                      <img src={iconMl1} alt="icon" height={40} />
                      <div className="fs-txt">Diamonds</div>
                    </button>
                    <button
                      className={`btn btn-secondary diamonds m-2 ${diamond === 2 && "bg-button"}`}
                      onClick={() => {
                        setDiamond(2);
                      }}
                    >
                      <img src={iconMl2} alt="icon" height={40} />
                      <div className="fs-txt">Twilight Pass</div>
                    </button>
                    <button
                      className={`btn btn-secondary diamonds m-2 ${diamond === 3 && "bg-button"}`}
                      onClick={() => {
                        setDiamond(3);
                      }}
                    >
                      <img src={iconMl3} alt="icon" height={40} />
                      <div className="fs-txt">Weekly Diamond Pass</div>
                    </button>
                  </div>

                  <div className="col-12 my-3">
                    {diamond === 1 && (
                      <div className="container">
                        <div className="row">
                          <div className="col-4 px-1 mb-2">
                            <Card3
                              icon1={Icon1}
                              click={() => {
                                setGame(1);
                              }}
                              bgGame={`${game === 1 && "bg-game border border-2"}`}
                            >
                              <h5>Weekly Diamond Pass</h5>
                              <p>10.000</p>
                            </Card3>
                          </div>
                        </div>
                      </div>
                    )}
                    {diamond === 2 && (
                      <div className="container">
                        <div className="row">
                          <div className="col-4 px-1 mb-2">
                            <Card3
                              icon1={iconMl2}
                              click={() => {
                                setGame(1);
                              }}
                              bgGame={`${game === 1 && "bg-game border border-2"}`}
                            >
                              <h5>Twilight Pass</h5>
                              <p>10.000</p>
                              <del>15.000</del>
                            </Card3>
                          </div>
                        </div>
                      </div>
                    )}
                    {diamond === 3 && (
                      <div className="container">
                        <div className="row">
                          <div className="col-4 px-1 mb-2">
                            <Card3
                              icon1={iconMl3}
                              click={() => {
                                setGame(1);
                              }}
                              bgGame={`${game === 1 && "bg-game border border-2"}`}
                            >
                              <h5>Weekly Diamond Pass</h5>
                              <p>10.000</p>
                              <del>15.000</del>
                            </Card3>
                          </div>
                        </div>
                      </div>
                    )}
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
