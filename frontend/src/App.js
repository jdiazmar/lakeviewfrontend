// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import NotesPage from "./pages/NotesPage/NotesPage";
import LeadersPage from "./pages/LeadersPage/LeadersPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import RosterPage from "./pages/RosterPage/RosterPage";

function App() {
  return (
    <div className='body' >
      <Navbar />
      <Routes>
        <Route
          path="/roster"
          element={
            <PrivateRoute>
              <RosterPage />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<CalendarPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/leaders" element={<LeadersPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
