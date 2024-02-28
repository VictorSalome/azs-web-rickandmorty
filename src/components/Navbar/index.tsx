import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-center relative">
      <div className="relative ">
        <ul className="links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/favorites">Favoritos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
