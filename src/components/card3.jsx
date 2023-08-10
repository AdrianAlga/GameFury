import Icon1 from "../assets/images/diamondsMl.png";
import "../assets/css/card.css";

export default function Card3(props) {
  return (
    <>
      <div className="position-relative">
        <input className="form-check-input position-absolute" type="radio" name="flexRadioDefault" id="diammonds1" />
        <label className="form-check-label" htmlFor="diammonds1">
          <div className="btn border card3">
            <div className="container">
              <div className="row">
                <div className="col-9 text-start">
                  <h5>5 Diamonds (5 + 0 Bonus)</h5>
                  <p>Rp 1.500,-</p>
                </div>
                <div className="col-3">
                  <div className="container h-100 p-0">
                    <div className="row align-items-center h-100">
                      <div className="col-12 text-center p-0">
                        <img src={Icon1} alt="img" height={30} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    </>
  );
}
