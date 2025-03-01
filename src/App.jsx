import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/home/Home";


function AppContent() {

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
