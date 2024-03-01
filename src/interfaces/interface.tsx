export interface Episode {
  image: string | undefined;
  characters: string;
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
