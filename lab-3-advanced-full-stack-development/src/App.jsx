import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReserveTable from "./Components/ReserveTable";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/reserve-table" element={<ReserveTable />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
