import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider({images}) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {
          images.map((image, key) =>{
              return(
                <div className="slider-wrapper" key={key}>
                  <img key={key} src={image.image} alt="" />
                </div>
              )
          })
      }
    </Slider>
  );
}
