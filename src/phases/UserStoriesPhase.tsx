import { useLocation } from "react-router-dom";
import { ProjectRequirements } from "../types";

export default function UserStoriesPhase() {
    const location = useLocation();
    const requirements = location.state?.requirements as ProjectRequirements;

    return (
        <div className="flex-1 p-6 overflow-y-auto bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
                    <div className="border-b border-gray-700 pb-6 mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            User Story Phrase
                        </h3>
                        <p className="text-gray-400">Detailed overview of project specifications and objectives</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

