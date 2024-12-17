import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Leaderboard from "./pages/Leaderboard";
import Challenges from "./pages/Challenges";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import ChatBot from "./pages/ChatBot";
import Dashboard from "./pages/Dashboard/Dashboard";
// import { MantineProvider } from "@mantine/core";

function App() {
  return (
    // <MantineProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Main />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Route>
      </Routes>
    </Router>
    // </MantineProvider>
  );
}

export default App;
