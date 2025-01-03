import { GlobalContext } from "./context";
import HomePage from "./pages/index";
import "./App.css";

function App() {
  const user = {
    nama: "Rezzy",
  };
  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <HomePage />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
