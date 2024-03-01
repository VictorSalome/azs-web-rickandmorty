import React, { useEffect } from "react";
import RickeMorty from "../../assets/rickFavorit.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FaHeart } from "react-icons/fa";
import { format } from "date-fns";
import { useStateContext } from "../../context/context";

interface Character {
  name: string;
  image: string;
  species: string;
  status: string;
}

interface Episode {
  id: string;
  air_date: string;
  episode: string;
  name: string;
  characters: Character[];
}

interface DetailsBoxProps {
  details: {
    episode: Episode;
    
  };
}

export const DetailsCard: React.FC<DetailsBoxProps> = ({ details }) => {
  const { addFavorites, active, checkActive } = useStateContext();
  const { air_date, episode, name, characters } = details?.episode || {};

  useEffect(() => {
    return checkActive(details.episode);
  }, [checkActive, details?.episode]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 transition duration-500">
      <div className="w-full max-w-screen-90 mx-auto mb-10 shadow-xl bg-gray-900 rounded-3xl xl:w-4/5">
        <div className="relative flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-5 flex justify-center items-center">
            <span
              onClick={() => addFavorites(details.episode)}
              className={`relative text-white text-2xl m-4 cursor-pointer ${
                active ? "text-red-500" : ""
              }`}
            >
              <FaHeart />
            </span>
            <Card className="w-full max-w-md ">
              <CardMedia
                component="img"
                height="140"
                image={RickeMorty}
                alt="detail"
              />
            </Card>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-between m-5 text-white">
                <h3 className="text-lg font-bold">Episódio: {episode}</h3>
                <h3 className="text-lg">
                  Disponível: {format(new Date(air_date), "dd/MM/yyyy")}
                </h3>
              </div>
              <div className="text-center text-white gap-">
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
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        color: "#00b5cc",
                        textShadow: "#b2df28 2px 2px",
                      }}
                    >
                      {person.name}
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
