import { Route, Routes } from "react-router-dom";
import InputFields from "../components/InputFields";
import Alltasks from "../components/AllTasks";

function RoutesPages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<InputFields />} />
        <Route path="/all-tasks" element={<Alltasks />} />
      </Routes>
    </>
  );
}

export default RoutesPages;
