import React, { useState } from "react";

import { ProfileSection } from "./Components/ProfileSection";
import { LinkSection } from "./Components/LinkSection";
import { BackgroundEffects } from "./Components/BackgroundEffects";

function App() {
  

  return (
    <div className="min-h-screen split-bg-gradient text-white overflow-hidden">
      <BackgroundEffects />

      <div className="relative min-h-screen flex flex-col lg:flex-row">
        <div className="lg:w-5/12 relative z-10 p-8 lg:p-12 flex items-center">
          <ProfileSection />
        </div>

        <div className="lg:w-7/12 relative z-10 p-8 lg:p-12 flex items-center">
          <LinkSection />
        </div>
      </div>
    </div>
  );
}

export default App;
