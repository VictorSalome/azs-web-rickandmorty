import { CharacterCarousel } from "../../components/Character/index.tsx";
import { Header } from "../../components/Header.tsx";
import { ListSearch } from "../../components/ListSeach/index.tsx";

export const HomePage = () => {
  return (
    <>
      <Header />
      <ListSearch />
      <CharacterCarousel />
    </>
  );
};
