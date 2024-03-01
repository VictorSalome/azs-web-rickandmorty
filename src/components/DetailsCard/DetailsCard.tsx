import React, { useEffect } from "react";
import RickeMorty from "../../assets/rickFavorite.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FaHeart } from "react-icons/fa";
import { format } from "date-fns";

import { Character, DetailsBoxProps } from "../../interfaces/interface";
import { useStateContext } from "../../contextUtils/contextUtils";

export const DetailsCard: React.FC<DetailsBoxProps> = ({ details }) => {
  const { addFavorites, active, checkActive, favorites } = useStateContext(); // Adicione 'favorites' aqui
  const { air_date, episode, name, characters } = details.episode;

  useEffect(() => {
    checkActive(details.episode);
  }, [checkActive, details.episode]);

  // Função para adicionar/remover o episódio dos favoritos e armazenar no localStorage
  const handleFavorites = () => {
    addFavorites(details.episode); // Adiciona ou remove o episódio dos favoritos no contexto
    const updatedFavorites = favorites.includes(details.episode)
      ? favorites.filter((fav) => fav !== details.episode)
      : [...favorites, details.episode];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Armazena os favoritos no localStorage
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center transition duration-500 mt-20">
      <div className="w-full max-w-screen-90 mx-auto mb-10 shadow-xl bg-gray-900 rounded-3xl xl:w-4/5">
        <div className="relative flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
            <Card className="w-full max-w-md relative">
              <CardMedia
                component="img"
                height="140"
                image={RickeMorty}
                alt="detail"
              />
              <span
                onClick={handleFavorites}
                className={`absolute bottom-0 right-0 text-2xl m-4 cursor-pointer ${
                  active ? "text-red-500" : "text-white"
                }`}
              >
                <FaHeart />
              </span>
            </Card>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-between m-5 text-white">
                <h3 className="text-lg font-bold" key="episode">
                  Episódio: {episode}
                </h3>
                <h3 className="text-lg" key="air_date">
                  Disponível: {format(new Date(air_date), "dd/MM/yyyy")}
                </h3>
              </div>
              <div className="text-center text-white gap-" key="name">
                <h1 className="text-4xl font-bold text-center text-blue-600">
                  {name}
                </h1>
                <h3 className="text-lg">Sinopse</h3>
                <p className="text-base max-w-md mx-auto mb-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  dolor quod, soluta nulla corrupti dicta illum ad rem
                  necessitatibus maiores. Iure rem voluptates reiciendis
                  facilis! Veniam at veritatis repellat et.Dolor sit amet
                  consectetur adipisicing elit. Quam dolor quod, soluta nulla
                  corrupti dicta illum ad rem necessitatibus maiores. Iure rem
                  voluptates reiciendis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-90 mx-auto mb-10 shadow-xl bg-gray-900 rounded-3xl xl:w-4/5">
        <div className="flex flex-col items-center py-10">
          <h3 className="text-xl font-bold text-white md:text-2xl lg:text-3xl mb-5">
            Personagens deste episódio
          </h3>
          <div className="w-full flex flex-wrap justify-center">
            {characters?.map((person: Character, index: number) => (
              <div className="flex flex-col items-center m-2" key={index}>
                <Card className="max-w-xs bg-gray-800">
                  <CardMedia
                    component="img"
                    height="140"
                    image={person.image}
                    alt={person.name}
                    title={person.name}
                  />
                  <CardContent key={`${person.id}-content`}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        color: "#00b5cc",
                        textShadow: "#b2df28 2px 2px",
                      }}
                    >
                      {person.name.length > 15
                        ? `${person.name.substring(0, 15)}...`
                        : person.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        color: "#00b5cc",
                        textShadow: "#b2df28 2px 2px",
                      }}
                    >
                      Espécie: {person.species}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        color: "#00b5cc",
                        textShadow: "#b2df28 2px 2px",
                      }}
                    >
                      Estado: {person.status}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
