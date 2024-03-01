import { Episode } from "../interfaces/interface";

export const addFavorite = (episode: Episode): void => {
  const favoritesJSON: string | null = localStorage.getItem("favorites");
  const favorites: Episode[] = favoritesJSON ? JSON.parse(favoritesJSON) : [];

  const existingIndex: number = favorites.findIndex(
    (fav) => fav.id === episode.id
  );

  if (existingIndex === -1) {
    favorites.push(episode);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const removeFavorite = (episodeId: string): void => {
  const favoritesJSON: string | null = localStorage.getItem("favorites");
  let favorites: Episode[] = favoritesJSON ? JSON.parse(favoritesJSON) : [];

  favorites = favorites.filter((fav) => fav.id !== episodeId);

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const getFavorites = (): Episode[] => {
  const favoritesJSON: string | null = localStorage.getItem("favorites");
  return favoritesJSON ? JSON.parse(favoritesJSON) : [];
};
