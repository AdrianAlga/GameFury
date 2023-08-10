import "../assets/css/card.css";

export default function Card1(props) {
  return (
    <>
      <div className="card card1">
        <img src={props.images} className="card-img h-100" alt="img" />
        <div className="card-img-overlay p-0">
          <div className="container-fluid h-100">
            <div className="row h-100 align-items-end ">
              <div className="col-12">
                <p className="card-title m-0 text-white">{props.diamonds} Diamonds</p>
                <div><span className="badge text-bg-info px-2">{props.price}</span></div>
                <p className="m-0 pb-1"><del>{props.discounts}</del></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
