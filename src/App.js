//packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./Components/Header.js";
import Sidebar from "./Components/Sidebar.js";

//styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/" element={<p>Hello I am the email list!</p>} />
            <Route path="/mail" element={<p>Mail</p>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
