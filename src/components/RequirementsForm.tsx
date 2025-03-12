import React, { useState } from "react";
import { Send } from "lucide-react";
import type { ProjectRequirements } from "../types";

interface Props {
  onSubmit: (requirements: ProjectRequirements) => void;
}

export default function RequirementsForm({ onSubmit }: Props) {
  const [requirements, setRequirements] = useState<ProjectRequirements>({
    title: "",
    description: "",
    objectives: [""],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(requirements);
  };

  const addObjective = () => {
    setRequirements((prev) => ({
      ...prev,
      objectives: [...prev.objectives, ""],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-300"
        >
          Project Title
        </label>
        <input
          type="text"
          id="title"
          value={requirements.title}
          onChange={(e) =>
            setRequirements((prev) => ({ ...prev, title: e.target.value }))
          }
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
          required
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-300"
        >
          Project Description
        </label>
        <textarea
          id="description"
          value={requirements.description}
          onChange={(e) =>
            setRequirements((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          rows={4}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
          required
        />
      </div>

      {/* <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Project Objectives
        </label>
        {requirements.objectives.map((objective, index) => (
          <input
            key={index}
            type="text"
            value={objective}
            onChange={(e) => {
              const newObjectives = [...requirements.objectives];
              newObjectives[index] = e.target.value;
              setRequirements(prev => ({ ...prev, objectives: newObjectives }));
            }}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-2 py-3 px-4"
            placeholder={`Objective ${index + 1}`}
            required
          />
        ))}
       <button
          type="button"
          onClick={addObjective}
          className="text-sm text-blue-500 hover:text-blue-400 py-2"
        >
          + Add another objective
        </button> 
      </div> */}

      <button
        type="submit"
        className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Send className="w-4 h-4 mr-2" />
        Submit Requirements
      </button>
    </form>
  );
}
