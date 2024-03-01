import CarouselHeader from "../Carouseltop";

export const Header = () => {
  return (
    <div className="text-white relative p-3 mt-20">
      {/* Estilo para dispositivos móveis */}
      <div className="block md:hidden relative max-w-screen-lg mx-auto rounded-lg overflow-hidden">
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

      {/* Estilo para web */}
      <div className="hidden md:block relative w-4/5 mx-auto bg-cover bg-center rounded-lg overflow-hidden">
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
