import { useLocation, useNavigate } from "react-router-dom";
import { ProjectRequirements } from "../types";

export default function RequirementsPhase() {
    const location = useLocation();
    const requirements = location.state?.requirements as ProjectRequirements;

    return (
        <div className="flex-1 p-6 overflow-y-auto bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
                    <div className="border-b border-gray-700 pb-6 mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Project Requirements
                        </h3>
                        <p className="text-gray-400">Detailed overview of project specifications and objectives</p>
                    </div>

                    <div className="space-y-8">
                        {/* Project Title Section */}
                        <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/50">
                            <h4 className="text-lg font-semibold text-blue-300 mb-2">Project Title</h4>
                            <p className="text-blue-100 text-lg">{requirements.title}</p>
                        </div>

                        {/* Project Description Section */}
                        <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-800/50">
                            <h4 className="text-lg font-semibold text-yellow-300 mb-2">Project Description</h4>
                            <p className="text-yellow-100 leading-relaxed">{requirements.description}</p>
                        </div>

                        {/* Key Objectives Section */}
                        <div className="bg-green-900/30 p-6 rounded-lg border border-green-800/50">
                            <h4 className="text-lg font-semibold text-green-300 mb-4">Key requirements</h4>
                            <ul className="space-y-3">
                                {requirements.objectives.map((objective, index) => (
                                    <li key={objective} className="flex items-start">
                                        <span className="flex-shrink-0 w-6 h-6 bg-green-900/50 rounded-full flex items-center justify-center text-green-300 font-semibold mr-3 border border-green-800/50">
                                            {index + 1}
                                        </span>
                                        <span className="text-green-100">{objective}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

