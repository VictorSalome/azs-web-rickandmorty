// localStorageUtils.ts

import { Episode } from "../interfaces/interface";

// Função para adicionar um episódio aos favoritos
export const addFavorite = (episode: Episode): void => {
  // Recupera os episódios favoritos do localStorage
  const favoritesJSON: string | null = localStorage.getItem("favorites");
  const favorites: Episode[] = favoritesJSON ? JSON.parse(favoritesJSON) : [];

  // Verifica se o episódio já está na lista de favoritos
  const existingIndex: number = favorites.findIndex(
    (fav) => fav.id === episode.id
  );

  if (existingIndex === -1) {
    // Adiciona o episódio à lista de favoritos se ele ainda não estiver lá
    favorites.push(episode);
  }

  // Atualiza os favoritos no localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

// Função para remover um episódio dos favoritos
export const removeFavorite = (episodeId: string): void => {
  // Recupera os episódios favoritos do localStorage
  const favoritesJSON: string | null = localStorage.getItem("favorites");
  let favorites: Episode[] = favoritesJSON ? JSON.parse(favoritesJSON) : [];

  // Filtra os episódios favoritos, removendo o episódio com o ID correspondente
  favorites = favorites.filter((fav) => fav.id !== episodeId);

  // Atualiza os favoritos no localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

// Função para recuperar todos os episódios favoritos
export const getFavorites = (): Episode[] => {
  // Recupera os episódios favoritos do localStorage
  const favoritesJSON: string | null = localStorage.getItem("favorites");
  return favoritesJSON ? JSON.parse(favoritesJSON) : [];
};
