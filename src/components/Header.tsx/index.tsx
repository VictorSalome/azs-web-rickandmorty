import CarouselHeader from "../Carousel";

export const Header = () => {
  return (
    <div className=" text-white relative p-3">
      <div className=" relative max-w-screen-lg mx-auto rounded-lg overflow-hidden ">
        <div>
          <CarouselHeader />
        </div>
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="font-bold text-3xl md:text-5xl">
            Acompanhe as aventuras de Rick e Morty
          </h1>
          <p className="font-light text-lg">Todos os episódios disponíveis!</p>
        </div>
      </div>
    </div>
  );
};
