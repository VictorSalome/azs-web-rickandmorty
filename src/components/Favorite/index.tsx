import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import { CardEpisodi } from "../CardEpisodi";
import { useStateContext } from "../../context/context";

export const Favorite = () => {
  const { favorites } = useStateContext();

  return (
    <div className="fav text-white flex justify-center relative m-10">
      <div className="favContainer max-w-screen-lg w-full rounded-lg flex justify-start">
        <h1>
          Episódios favoritos{" "}
          <span className="text-red-500">
            <FaHeart />
          </span>
        </h1>
        {favorites.length === 0 ? (
          <div className="favMessage flex items-center justify-center w-full h-1/2">
            <h2>Nenhum episódio favoritado!</h2>
          </div>
        ) : (
          <div className="favEpisodes">
            <div className="cardContainer flex flex-wrap justify-start m-10">
              {favorites.map((episode) => (
                <Link
                  to={`/episode/${episode.id}`}
                  key={episode.id}
                  className="text-white no-underline"
                >
                  <CardEpisodi episodes={episode} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
