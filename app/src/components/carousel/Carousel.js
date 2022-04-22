function Carousel() {
    return (
    <div className="card m-3" style={{width: "18rem", height: "20rem"}}>
        <div className="card-header bg-transparent">
        <h5 className="card-title">Plano Beta</h5>
        </div>
        <div className="card-body">
        <div className="d-flex justify-content-center">
           <div>
           <span className="fs-5">R$</span>
            <span className="fs-1 fw-light">40,00</span>
           </div>
        </div>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div className="card-footer bg-transparent">
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    );
  }
  
  export default Carousel;
  