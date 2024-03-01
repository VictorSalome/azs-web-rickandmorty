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
import { toast } from "react-toastify";

export const Favorite = () => {
  const [favorites, setFavorites] = useState<Episode[]>([]);

  useEffect(() => {
    const storedFavorites = getFavorites() as Episode[];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (episode: Episode) => {
    const isFavorite = favorites.some((fav) => fav.id === episode.id);
    if (isFavorite) {
      removeFavorite(episode.id);
      const updatedFavorites = favorites.filter((fav) => fav.id !== episode.id);
      setFavorites(updatedFavorites);
    } else {
      addFavorite(episode);
      setFavorites([...favorites, episode]);
    }
  };

  return (
    <div className=" text-white flex flex-col justify-center relative mt-20 py-10   ">
      <h1 className="text-white w-full text-2xl md:text-3xl lg:text-4xl font-bold mb-10 ml-1">
        Episódios favoritos
      </h1>
      <div className=" max-w-screen-lg w-full rounded-lg flex justify-center ml-9 md:ml-2 ">
        {favorites.length === 0 ? (
          <div className=" flex items-center justify-center w-full h-1/2 text-white md:text-2xl lg:text-3xl">
            <h2>Nenhum episódio favoritado!</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {favorites.map((episode) => (
              <div key={episode.id} className="flex md:mb-60">
                <Link
                  to={`/episode/${episode.id}`}
                  className="text-white no-underline"
                >
                  <CardEpisodi episodes={episode} />
                </Link>
                <span
                  onClick={() => {
                    toggleFavorite(episode);

                    toast.success(
                      `${
                        favorites.some((fav) => fav.id === episode.id)
                          ? "Episódio removido dos favoritos"
                          : "Episódio adicionado aos favoritos"
                      } `
                    );
                  }}
                  className={`ml-4 text-2xl cursor-pointer ${
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
