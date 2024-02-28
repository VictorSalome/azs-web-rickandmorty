import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HeaderRickMorty from "../../assets/RickMortyPortal.jpg";
import MortyAndRick from "../../assets/rickandmortyCar.png";
import PortalImage from "../../assets/RickAndMorty.png";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        className="max-w-4xl mx-auto"
        autoPlay
        showStatus={false}
        showThumbs={false}
        interval={4000}
      >
        <div>
          <img
            src={HeaderRickMorty}
            className="w-full h-80 object-cover rounded-lg"
            alt="RickMorty1"
          />
        </div>
        <div>
          <img
            src={MortyAndRick}
            className="w-full h-80 object-cover rounded-lg"
            alt="RickMorty 2"
          />
        </div>
        <div>
          <img
            src={PortalImage}
            className="w-full h-80 object-cover rounded-lg"
            alt="RickMorty 3"
          />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
