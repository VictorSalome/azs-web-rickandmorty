export interface Episode {
  image: string | undefined;
  characters: [];
  id: string;
  name: string;
  episode: string;
  air_date: string;
}

export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
}

export interface DetailsBoxProps {
  details: {
    episode: Episode;
  };
}

export interface StateContextType {
  favorites: Episode[];
  active: boolean;
  addFavorites: (episode: Episode) => void;
  checkActive: (episode: Episode) => void;
}
