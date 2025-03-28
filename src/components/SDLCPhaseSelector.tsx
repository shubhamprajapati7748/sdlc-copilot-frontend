import React from "react";
import {
  ChevronLeft,
  FileText,
  Palette,
  Code,
  TestTube,
  Upload,
  Settings,
  Shield,
  Book,
  Layers,
  CheckCircle,
} from "lucide-react";
import type { SDLCPhase } from "../types";

interface Props {
  selectedPhase: SDLCPhase;
  onPhaseSelect: (phase: SDLCPhase) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  completedPhases: string[];
}

const phases: { id: SDLCPhase; icon: React.ElementType; label: string }[] = [
  { id: "requirements", icon: FileText, label: "Requirements" },
  { id: "user-stories", icon: Book, label: "User Stories" },
  { id: "functional-design", icon: Palette, label: "Functional Design" },
  { id: "technical-design", icon: Layers, label: "Technical Design" },
  { id: "code-development", icon: Code, label: "Code Development" },
  { id: "security", icon: Shield, label: "Security" },
  { id: "testing", icon: TestTube, label: "Testing" },
  { id: "deployment", icon: Upload, label: "Deployment" },
  { id: "maintenance", icon: Settings, label: "Maintenance" },
];

export default function SDLCPhaseSelector({
  selectedPhase,
  onPhaseSelect,
  isCollapsed,
  onToggleCollapse,
  completedPhases,
}: Props) {
  return (
    <div
      className={`h-full bg-gray-900 border-r border-gray-800 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <button
        onClick={onToggleCollapse}
        className="h-20 w-full p-4 flex items-center justify-between hover:bg-gray-800"
      >
        <span
          className={`text-gray-400 transition-opacity duration-300 text-2xl font-bold`}
        >
          {isCollapsed ? "" : "SDLC Phases"}
        </span>
        <ChevronLeft
          className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
            isCollapsed ? "rotate-180" : ""
          }`}
        />
      </button>

      <nav className="">
        {phases.map(({ id, icon: Icon, label }) => {
          const isCompleted = completedPhases.includes(id);
          return (
            <button
              key={id}
              onClick={() => onPhaseSelect(id)}
              className={`w-full p-4 flex items-center justify-between ${
                selectedPhase === id
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center">
                <Icon className="w-6 h-6" />
                {!isCollapsed && <span className="ml-3">{label}</span>}
              </div>
              {isCompleted && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
