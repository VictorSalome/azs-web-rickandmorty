import DemoCarousel from "../Carrousel";

export const Header = () => {
  return (
    <div className="header text-white flex justify-center relative">
      <div className="headerContainer relative max-w-1500 w-full rounded-lg">
        <div className="bannerContainer">
          <DemoCarousel />
        </div>
        <div className="descContainer absolute bottom-5 left-5 flex flex-col gap-5">
          <h1 className="font-bold text-2xl md:text-4xl">
            Acompanhe as aventuras de Rick e Morty
          </h1>
          <p className="font-light text-lg">Todos os episódios disponíveis!</p>
        </div>
      </div>
    </div>
  );
};
