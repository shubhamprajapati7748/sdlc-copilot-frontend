import React from "react";
import { useNavigate } from "react-router-dom";
import RequirementsForm from "../components/RequirementsForm";
import type { ProjectRequirements } from "../types";

export default function Home() {
  const navigate = useNavigate();

  const handleSubmit = (requirements: ProjectRequirements) => {
    // In a real app, you'd save this to state management or backend
    navigate("/sdlc", { state: { requirements } });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to SDLC Copilot</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your AI-powered companion for streamlining the Software Development
            Life Cycle.
            <p> Start by entering your project requirements below.</p>
          </p>
        </div>

        <div className="flex justify-center">
          <RequirementsForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
