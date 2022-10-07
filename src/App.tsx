// import logo from './logo.svg';
// import './App.css';
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
