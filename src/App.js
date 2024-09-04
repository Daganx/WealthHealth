import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index/Index";
import EmployeeList from "./pages/employeeList/EmployeeList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/employee" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}

export default App;
