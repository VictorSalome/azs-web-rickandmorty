import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ApolloProvider } from "@apollo/client";
import client from "./service";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { StateContextProvider } from "./context/context";

function App() {
  return (
    <StateContextProvider>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ToastContainer />
          <AppRoutes />
        </ApolloProvider>
      </BrowserRouter>
    </StateContextProvider>
  );
}

export default App;
