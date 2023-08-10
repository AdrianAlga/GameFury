import "../assets/css/card.css"

export default function Card2(props) {
  return (
    <div className="card card2">
      <img src={props.images} className="card-img h-100" alt="img" />
      <div className="card-img-overlay">
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-end">
            <div className="col-12">
              <h4 className="card-title text-white">{props.name} </h4>
              <p className="card-text ">{props.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
