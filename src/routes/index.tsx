import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home";
import { Details } from "../pages/details";
import { Favorites } from "../pages/favorite";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/episode/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default AppRouter;
