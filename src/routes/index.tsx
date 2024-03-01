import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home";
import { Details } from "../pages/details";
import { Favorites } from "../pages/favorite";
import { ScrollToTop } from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const AppRouter: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<ScrollToTop />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/episode/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
