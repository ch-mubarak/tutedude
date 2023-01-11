import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import FriendsReferred from "./pages/FriendsReferred/FriendsReferred";
import ReferAndEarn from "./pages/ReferAndEarn/ReferAndEarn";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/refer" element={<ReferAndEarn />} />
        <Route path="/refer/refer-friends" element={<FriendsReferred />} />
        <Route path="*" element={<Navigate to="/refer" />} />
      </Routes>
    </div>
  );
}

export default App;
