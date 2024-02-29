import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ApolloProvider } from "@apollo/client";
import client from "./service";
import { ToastContainer } from "react-toastify";
import { StateContext } from "./context/context";

function App() {
  return (
    <StateContext>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ToastContainer />
          <AppRoutes />
        </ApolloProvider>
      </BrowserRouter>
    </StateContext>
  );
}

export default App;
