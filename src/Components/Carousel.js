import React from 'react'
import Tech1 from '../images/tech1.jpg';
import Tech2 from '../images/tech2.jpg';
import Tech3 from '../images/tech3.jpg';

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide mb-5 mt-3 ms-3 me-3" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Tech1} className="d-block w-100" alt="..." style={{height:'80vh'}}/>
    </div>
    <div className="carousel-item">
      <img src={Tech2} className="d-block w-100" alt="..." style={{height:'80vh'}} />
    </div>
    <div className="carousel-item">
      <img src={Tech3} className="d-block w-100" alt="..." style={{height:'80vh'}} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel