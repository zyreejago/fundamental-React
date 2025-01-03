import { GlobalContext } from "./context";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const user = {
    nama: "Rezzy",
  };
  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
