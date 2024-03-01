import { useContext } from "react";
import { Context } from "../context/context";

export const useStateContext = () => useContext(Context);
