import logo from "./logo.svg";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "./component/HomeScreen";
import Details from "./component/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
