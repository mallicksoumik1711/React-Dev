import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
    <h1 className="text-4xl font-bold mb-5">All Users</h1>
      <div className="flex flex-wrap gap-5">
        <Card />
      </div>
    </>
  );
}

export default App;
