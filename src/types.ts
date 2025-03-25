export interface ProjectRequirements {
  title: string;
  description: string;
  objectives: string[];
}

export interface UserStories {
  messages: string[];
  user_stories: UserStory[];
}

export interface UserStory {
  id: string;
  title: string;
  description: string;
  acceptance_criteria: string[];
}
export type SDLCPhase =
  | "requirements"
  | "user-stories"
  | "functional-design"
  | "technical-design"
  | "code-development"
  | "security"
  | "testing"
  | "deployment"
  | "maintenance";

export interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}
