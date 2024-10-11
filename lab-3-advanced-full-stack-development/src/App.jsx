import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateReservation from "./Components/CreateReservation";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/reserve-table" element={<CreateReservation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
