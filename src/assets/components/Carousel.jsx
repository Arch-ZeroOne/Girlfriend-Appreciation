import React from "react";
import yan1 from "../../assets/images/yanny-1.jpg";
import yan2 from "../../assets/images/yanny-2.jpg";
import yan3 from "../../assets/images/yanny-3.jpg";
import yan4 from "../../assets/images/yanny-4.jpg";
import yan5 from "../../assets/images/yanny-5.jpg";
import yan6 from "../../assets/images/yanny-6.jpg";
import yan7 from "../../assets/images/yanny-7.jpg";
import yan8 from "../../assets/images/yanny-8.jpg";
function Carousel() {
  return (
    <div className="flex justify-center items-center mr-auto ml-auto">
      <div className="carousel rounded-box flex gap-5 items-center mt-10">
        <div className="carousel-item">
          <img src={yan1} alt="Burger" className="h-100" />
        </div>
        <div className="carousel-item">
          <img src={yan2} alt="Burger" className="h-100" />
        </div>
        <div className="carousel-item">
          <img src={yan3} alt="Burger" className="h-100" />
        </div>
        <div className="carousel-item">
          <img src={yan4} alt="Burger" className="h-100" />
        </div>
        <div className="carousel-item">
          <img src={yan5} alt="Burger" className="h-100" />
        </div>
        <div className="carousel-item">
          <img src={yan6} alt="Burger" className="h-100" />
        </div>
        <div className="carousel-item">
          <img src={yan7} alt="Burger" className="h-100" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
