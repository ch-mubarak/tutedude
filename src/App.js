import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import FriendsReferred from "./pages/FriendsReferred/FriendsReferred";
import ReferAndEarn from "./pages/ReferAndEarn/ReferAndEarn";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ReferAndEarn />
      {/* <FriendsReferred /> */}
    </div>
  );
}

export default App;
