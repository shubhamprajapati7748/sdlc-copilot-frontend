export interface ProjectRequirements {
  title: string;
  description: string;
  objectives: string[];
}

export type SDLCPhase = 'requirements' | 'user-stories' | 'functional-design' | 'technical-design' | 'code-development' | 'security' | 'testing' | 'deployment' | 'maintenance';

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}