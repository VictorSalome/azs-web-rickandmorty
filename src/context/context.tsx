// context.tsx

import { createContext, useState, FC, ReactNode } from "react";
import { Episode } from "../interfaces/interface";
import { toast } from "react-toastify";

interface StateContextType {
  favorites: Episode[];
  active: boolean;
  addFavorites: (episode: Episode) => void;
  checkActive: (episode: Episode) => void;
}

export const Context = createContext<StateContextType>({
  favorites: [],
  active: false,
  addFavorites: () => {},
  checkActive: () => {},
});

export const StateContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Episode[]>([]);
  const [active, setActive] = useState<boolean>(true);

  const checkActive = (episode: Episode) => {
    setActive(favorites.some((item) => item.id === episode.id));
  };

  const addFavorites = (episode: Episode) => {
    const alreadyFavorited = favorites.some((item) => item.id === episode.id);

    if (alreadyFavorited) {
      const newFavorites = favorites.filter((item) => item.id !== episode.id);
      setFavorites(newFavorites);
      setActive(false);
      toast.success("Episódio Removido com sucesso!");
    } else {
      setFavorites([...favorites, episode]);
      setActive(true);
      toast.success("Episódio favoritado com sucesso!");
    }
  };

  return (
    <Context.Provider
      value={{
        favorites,
        active,
        addFavorites,
        checkActive,
      }}
    >
      {children}
    </Context.Provider>
  );
};


