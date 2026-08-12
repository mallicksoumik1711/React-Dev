import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RoutesPages from "./RoutesPages";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <Navbar />
        <RoutesPages />
        <Footer />
      </div>
    </>
  );
}

export default App;
