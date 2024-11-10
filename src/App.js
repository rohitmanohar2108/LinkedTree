import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { ProfileSection } from "./Components/ProfileSection";
import { LinkSection } from "./Components/LinkSection";
import { BackgroundEffects } from "./Components/BackgroundEffects";
import { Footer } from "./Components/Footer";
import WebDevelopment from "./Components/WebDevelopment";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen split-bg-gradient text-white overflow-hidden">
      <BackgroundEffects />

      <Routes>
        {/* Define the route for the Web Development page */}
        <Route path="/web-development" element={<WebDevelopment />} />
        
        {/* Default route displaying the main profile and link sections */}
        <Route
          path="/"
          element={
            <div className="relative min-h-screen flex flex-col lg:flex-row">
              <div className="lg:w-5/12 relative z-10 p-8 lg:p-12 flex items-center">
                <ProfileSection />
              </div>

              <div className="lg:w-7/12 relative z-10 p-8 lg:p-12 flex items-center">
                <LinkSection />
              </div>
            </div>
          }
        />
      </Routes>

      {/* Conditionally render Footer */}
      {location.pathname !== "/web-development" && <Footer />}
    </div>
  );
}

export default App;
