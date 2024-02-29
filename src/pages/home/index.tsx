import { Header } from "../../components/Header.tsx";
import { ListSearch } from "../../components/ListSeach/index.tsx";
import { Navbar } from "../../components/Navbar";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ListSearch />
    </>
  );
};
