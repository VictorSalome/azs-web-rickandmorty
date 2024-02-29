import React, { useEffect } from "react";
import PortalRick from "../../assets/RickMortyPortal.jpg";
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

const DetailsBox: React.FC<DetailsBoxProps> = ({ details }) => {
  const { addFavorites, active, checkActive } = useStateContext();
  const { air_date, episode, name, characters } = details?.episode || {};

  useEffect(() => {
    checkActive(details?.episode);
  }, [checkActive, details?.episode]);

  return (
    <section className="relative min-h-screen flex justify-center py-20 transition duration-500">
      <div className="relative w-full max-w-screen-lg h-96 shadow-xl bg-gray-900 rounded-3xl">
        <div className="absolute top-0 left-0 w-full h-full flex bg-blue-700 rounded-xl">
          <span
            onClick={() => addFavorites(details.episode)}
            className={`relative text-white text-2xl m-4 cursor-pointer ${
              active ? "text-red-500" : ""
            }`}
          >
            <FaHeart />
          </span>
          <div className="w-1/2 h-full relative">
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="140"
                image={PortalRick}
                alt="detail"
              />
            </Card>
          </div>
          <div className="w-1/2 h-full relative">
            <div className="flex flex-col justify-center h-full">
              <div className="flex justify-between m-5 text-white">
                <h3>Episódio: {episode}</h3>
                <h3>Disponível: {format(new Date(air_date), "dd/MM/yyyy")}</h3>
              </div>
              <div className="text-center text-white mt-5">
                <h1>{name}</h1>
                <h3>Sinopse</h3>
                <p className="max-w-md mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  corrupti sit laudantium, pariatur itaque magnam eos quam,
                  dolorem qui aperiam eligendi reiciendis minima deserunt
                  voluptatum? Fugit voluptas hic dolorum labore. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Deserunt
                  aspernatur vitae distinctio sit exercitationem doloribus, sunt
                  ex ab molestiae omnis repudiandae numquam sequi illum eveniet
                  dolore possimus placeat quasi libero!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-96">
          <h3 className="text-white mb-5">
            Personagens que participaram deste episódio
          </h3>
          <div className="w-full flex flex-wrap justify-center">
            {characters?.map((person: Character, index: number) => (
              <div className="flex flex-col items-center m-2" key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={person.image}
                    alt={person.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {person.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Espécie: {person.species}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
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

export default DetailsBox;
