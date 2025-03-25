import { useLocation } from "react-router-dom";
import { ProjectRequirements, UserStories } from "../types";
import { useState } from "react";

export default function UserStoriesPhase() {
  const location = useLocation();
  //   const requirements = location.state?.requirements as UserStories;

  const [userStories, setUserStories] = useState<UserStories>({
    messages: [],
    user_stories: [
      {
        id: "US-101",
        title: "User Login",
        description: "As a user, I want to log in using email and password.",
        acceptance_criteria: [
          "User can input email and password",
          "System validates credentials",
          "User is redirected after login",
        ],
      },
      {
        id: "US-102",
        title: "Start a New Game",
        description:
          "As a player, I want to start a new game of Snake and Ladder, so that I can begin playing immediately.",
        acceptance_criteria: [
          "The game initializes with an empty board.",
          "All players start at the first square.",
          "The game is set to the first player's turn.",
        ],
      },
      {
        id: "US-103",
        title: "Play the Game",
        description: "As a player, I want to play the game, so that I can win.",
        acceptance_criteria: [
          "The game allows players to move their tokens based on the roll of a die.",
          "The game checks for ladders and snakes on the player's token.",
          "The game ends when a player reaches the last square.",
        ],
      },
      {
        id: "US-104",
        title: "End the Game",
        description:
          "As a player, I want to end the game, so that I can see the results.",
        acceptance_criteria: [
          "The game displays the final positions of all players.",
          "The game displays the winner.",
        ],
      },
    ],
  });
  const badgeColors = [
    "bg-blue-900/50 text-blue-300",
    "bg-green-900/50 text-green-300",
    "bg-purple-900/50 text-purple-300",
    "bg-amber-900/50 text-amber-300",
    "bg-pink-900/50 text-pink-300",
    "bg-teal-900/50 text-teal-300",
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <div className="border-b border-gray-700 pb-6 mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              User Story Phase
            </h3>
            <p className="text-gray-400">
              These user stories define the functionality of your application
              from the perspective of the user.
            </p>
          </div>

          <div className="space-y-6">
            {userStories.user_stories.map((userStory, index) => {
              const colorClass = badgeColors[index % badgeColors.length];
              return (
                <div
                  key={userStory.id}
                  className={`bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-xl border border-gray-600 hover:scale-[1.01] transition-transform duration-300 ease-in-out`}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left side - User Story Details */}
                    <div className="p-6 border-b md:border-b-0 md:border-r border-gray-600 space-y-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold uppercase tracking-wide  px-3 py-1 rounded-full  ${colorClass}`}
                        >
                          {userStory.id}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold text-white">
                        {userStory.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {userStory.description}
                      </p>
                    </div>

                    {/* Right side - Acceptance Criteria */}
                    <div className="p-6 bg-gray-800/50 space-y-4">
                      <h4 className="text-lg font-semibold text-white">
                        Acceptance Criteria
                      </h4>
                      <ul className="space-y-2">
                        {userStory.acceptance_criteria.map(
                          (criteria, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-gray-300 text-sm"
                            >
                              <span className="text-blue-400">•</span>
                              <span>{criteria}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
