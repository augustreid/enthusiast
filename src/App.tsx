import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import HobbyNav from "./Components/HobbyNav";
import AddHobby from "./Components/AddHobby";

function App() {
  return (
    <main>
      <Header/>
      <HobbyNav/>
      <AddHobby/>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
