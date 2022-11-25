//packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./Components/Header.js";
import Sidebar from "./Components/Sidebar.js";
import EmailList from "./Components/EmailList";
import Mail from "./Components/Mail";

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
            <Route path="/" element={<EmailList />} />
            <Route path="/mail" element={<Mail />}></Route>
            <Route path="*" element={<p>Sorry! Page not found!</p>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
