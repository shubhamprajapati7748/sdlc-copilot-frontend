import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SDLCPhaseSelector from "../components/SDLCPhaseSelector";
import ChatInterface from "../components/ChatInterface";
import type { SDLCPhase, ProjectRequirements } from "../types";

export default function SDLC() {
  const location = useLocation();
  const requirements = location.state?.requirements as ProjectRequirements;
  const [selectedPhase, setSelectedPhase] = useState<SDLCPhase>("requirements");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="h-screen flex">
        <SDLCPhaseSelector
          selectedPhase={selectedPhase}
          onPhaseSelect={setSelectedPhase}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        <div className="flex-1 flex flex-col">
          <div className="h-20 px-5 bg-gray-900 border-b border-gray-800 flex flex-col justify-center">
            <h2 className="text-xl">{requirements?.title}</h2>
            {/* <p className="text-gray-400">{requirements?.description}</p> */}
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            {/* Phase content would be dynamically loaded here */}
            <h3 className="text-xl font-semibold mb-4 capitalize">
              {selectedPhase} Phase
            </h3>
            <p className="text-gray-400">
              This section will display detailed information about the{" "}
              {selectedPhase} phase.
            </p>
          </div>

          <ChatInterface />
        </div>
      </div>
    </div>
  );
}
