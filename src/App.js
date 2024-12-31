import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/LoginPage/LoginPage';
import { HomePage } from './components/Home/HomePage';
function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
              <Route exact path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
