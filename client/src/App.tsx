
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NeonAuthUIProvider } from '@neondatabase/neon-js/auth/react';
import { authClient } from "./lib/auth";
import Home from "./pages/Home"
import Onboarding from "./pages/Onboarding";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Navbar from "./components/layout/Navbar";
import Auth from "./pages/Auth";

function App() {
  return (
    <NeonAuthUIProvider authClient={authClient}>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex justify-center content-center mt-20">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/auth/:pathname" element={<Auth />} />
              <Route path="/account/:pathame" element={<Account />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </NeonAuthUIProvider>
  )
}

export default App
