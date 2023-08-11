import "../assets/css/card.css";

export default function Card3(props) {
  return (
    <>
      <div className="position-relative">
        <input className="form-check-input d-none position-absolute" type="radio" name="flexRadioDefault" id="diammonds1" />
        <label className="form-check-label" htmlFor="diammonds1">
          <div className={`btn card3 border ${props.bgGame}`} onClick={props.click}>
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-9 text-start">
                  <div className="conatiner h-100">
                    <div className="row h-100 align-items-center">
                      <div className="col-12 ">{props.children}</div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="container h-100 p-0">
                    <div className="row align-items-center h-100">
                      <div className="col-12 text-center p-0">
                        <img src={props.icon1} alt="img" height={30} />
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
