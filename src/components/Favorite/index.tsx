import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { CardEpisodi } from "../CardEpisodi";
import {
  getFavorites,
  removeFavorite,
  addFavorite,
} from "../../localStorarageUtils/LocalStorageUtils";
import { Episode } from "../../interfaces/interface";

export const Favorite = () => {
  const [favorites, setFavorites] = useState<Episode[]>([]);

  useEffect(() => {
    const storedFavorites = getFavorites() as Episode[];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (episode: Episode) => {
    const isFavorite = favorites.some((fav) => fav.id === episode.id);
    if (isFavorite) {
      removeFavorite(episode.id); // Remove do local storage
      const updatedFavorites = favorites.filter((fav) => fav.id !== episode.id);
      setFavorites(updatedFavorites);
    } else {
      addFavorite(episode); // Adiciona ao local storage
      setFavorites([...favorites, episode]);
    }
  };

  return (
    <div className="fav text-white flex justify-center relative m-10">
      <div className="favContainer max-w-screen-lg w-full rounded-lg flex justify-start">
        <h1 className="text-white md:text-2xl lg:text-3xl">
          Episódios favoritos{" "}
          <span className="text-red-500">
            <FaHeart />
          </span>
        </h1>
        {favorites.length === 0 ? (
          <div className="favMessage flex items-center justify-center w-full h-1/2 text-white md:text-2xl lg:text-3xl">
            <h2>Nenhum episódio favoritado!</h2>
          </div>
        ) : (
          <div className="favEpisodes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {favorites.map((episode) => (
              <div key={episode.id}>
                <Link
                  to={`/episode/${episode.id}`}
                  className="text-white no-underline"
                >
                  <CardEpisodi episodes={episode} />
                </Link>
                <span
                  onClick={() => toggleFavorite(episode)}
                  className={`absolute bottom-0 right-0 text-2xl m-4 cursor-pointer ${
                    favorites.some((fav) => fav.id === episode.id)
                      ? "text-red-500"
                      : "text-white"
                  }`}
                >
                  <FaHeart />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
