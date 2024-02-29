import { createContext, useContext, useState, FC, ReactNode } from "react";
import { toast } from "react-toastify";
import { Episode } from "../interfaces/interface";

// Definindo o tipo para o contexto
interface StateContextType {
  favorites: Episode[];
  active: boolean;
  addFavorites: (episode: Episode) => void;
  checkActive: (episode: Episode) => void;
}

// Criando o contexto
const Context = createContext<StateContextType>({
  favorites: [],
  active: false,
  addFavorites: () => {},
  checkActive: () => {},
});

// Componente de contexto
export const StateContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Episode[]>([]);
  const [active, setActive] = useState<boolean>(false);

  const checkActive = (episode: Episode) => {
    const check = favorites.find((item) => item.id === episode.id);
    if (check) {
      setActive(true);
    } else {
      setActive(false);
    }
  };



  const addFavorites = (episode: Episode) => {
    const checkFavorites = favorites.find((item) => item.id === episode.id);

    if (checkFavorites) {
      favorites.forEach((item) => {
        if (item.id === episode.id) {
          const index = favorites.indexOf(item);
          const newFavorites = [...favorites];
          newFavorites.splice(index, 1);
          setFavorites(newFavorites);
          setActive(false);
          toast.success("Episódio Removido com sucesso!");
        }
      });
    } else {
      setFavorites([...favorites, { ...episode }]);
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

// Hook personalizado para acessar o contexto
export const useStateContext = () => useContext(Context);
