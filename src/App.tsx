import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/navbar/Navbar";
import ResearchScreen from "./screens/ResearchScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={""}>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/about" element={<AboutScreen />}/>
            <Route path="/research" element={<ResearchScreen />}/>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
