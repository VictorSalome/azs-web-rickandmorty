import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home";
import { Details } from "../pages/details";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/episode/:id" element={<Details />} />
    </Routes>
  );
};

export default AppRouter;
