import React, { useEffect } from "react";
import PortalRick from "../../assets/RickMortyPortal.jpg";
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
    <section>
      <div className="container">
        <div className="detailsContainer">
          <span
            onClick={() => addFavorites(details.episode)}
            className={active ? "active" : ""}
          >
            <FaHeart />
          </span>
          <div className="imgBox">
            <img src={PortalRick} alt="detail" />
          </div>
          <div className="details">
            <div className="topDetails">
              <h3>Episódio: {episode}</h3>
              <h3>Disponivel: {format(new Date(air_date), "dd/MM/yyyy")}</h3>
            </div>
            <div className="title">
              <h1>{name}</h1>
              <h3>Sinopse</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                corrupti sit laudantium, pariatur itaque magnam eos quam,
                dolorem qui aperiam eligendi reiciendis minima deserunt
                voluptatum? Fugit voluptas hic dolorum labore. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Deserunt aspernatur vitae
                distinctio sit exercitationem doloribus, sunt ex ab molestiae
                omnis repudiandae numquam sequi illum eveniet dolore possimus
                placeat quasi libero!
              </p>
            </div>
          </div>
        </div>
        <div className="charactersContainer">
          <h3>Personagens que participaram deste episódio</h3>
          <div className="charactersCards">
            {characters?.map((person: Character, index: number) => (
              <div className="character" key={index}>
                <img src={person.image} alt="person" />
                <p>
                  Nome:<span>{person.name}</span>
                </p>
                <p>
                  Espécie:<span>{person.species}</span>
                </p>
                <p>
                  Estado:<span>{person.status}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsBox;
