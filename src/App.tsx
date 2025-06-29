import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { AllNotes } from "./pages/AllNotes";
import { Trash } from "./pages/Trash";
import { Setting } from "./pages/Settings";
import { Shared } from "./pages/Shared";
import { Auth } from "./pages/Auth";
import { Logout } from "./pages/Logout";
import MainLayout from "./layouts/MainLayout";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="landing" element={<LandingPage />} />
            <Route path="allnotes" element={<AllNotes />} />
            <Route path="allnotes/:noteId" element={<AllNotes />} />
            <Route path="trash" element={<Trash />} />
            <Route path="settings" element={<Setting />} />
            <Route path="shared/:noteId" element={<Shared />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="/auth/login" element={<Auth />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
