import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MortyAndRick1 from "../../assets/rickMortyPortal.jpg";
import MortyAndRick2 from "../../assets/rickAndmortyCar.png";
import MortyAndRick3 from "../../assets/rickandMortyAll.jpg";
import MortyAndRick4 from "../../assets/rickFavorite.jpeg";
import MortyAndRick5 from "../../assets/mortyAlone.jpeg";

class CarouselHeader extends Component {
  render() {
    return (
      <Carousel
        className="max-w-8xl mx-auto"
        autoPlay
        showStatus={false}
        showThumbs={false}
        interval={2000}
        infiniteLoop={true}
      >
        <div>
          <img
            src={MortyAndRick1}
            className="w-full h-96 object-cover rounded-lg"
            alt="RickMorty1"
          />
        </div>
        <div>
          <img
            src={MortyAndRick2}
            className="w-full h-96 object-cover rounded-lg"
            alt="RickMorty 2"
          />
        </div>
        <div>
          <img
            src={MortyAndRick3}
            className="w-full h-96 object-cover rounded-lg"
            alt="RickMorty 3"
          />
        </div>
        <div>
          <img
            src={MortyAndRick4}
            className="w-full h-96 object-cover rounded-lg"
            alt="RickMorty 3"
          />
        </div>
        <div>
          <img
            src={MortyAndRick5}
            className="w-full h-96 object-cover rounded-lg"
            alt="RickMorty 3"
          />
        </div>
      </Carousel>
    );
  }
}

export default CarouselHeader;
