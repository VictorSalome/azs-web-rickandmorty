export interface Episode {
  image: string | undefined;
  characters: any;
  id: string;
  name: string;
  episode: string;
  air_date: string;
}

export interface Character {
  name: string;
  image: string;
  species: string;
  status: string;
}
