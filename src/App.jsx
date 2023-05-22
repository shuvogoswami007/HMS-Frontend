import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing-Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
