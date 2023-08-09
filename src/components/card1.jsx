import "../assets/css/card.css";

export default function Card1(props) {
  return (
    <>
      <div className="card card1 text-white">
        <img src={props.images} className="card-img h-100" alt="img" />
        <div className="card-img-overlay">
          <div className="container-fluid h-100">
            <div className="row h-100 align-items-end">
              <div className="col-12">
                <h4 className="card-title">{props.diamonds} Diamonds</h4>
                <div><span className="badge text-bg-info fs-5 px-2">{props.price}</span></div>
                <del>{props.discounts}</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
