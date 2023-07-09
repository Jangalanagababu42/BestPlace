import { Route, Routes } from "react-router";
import "./App.css";
import Homepage from "./pages/Homepage";
import CountryPage from "./pages/CountryPage";
import DestinationPage from "./pages/DestinationPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country/:countryId" element={<CountryPage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
