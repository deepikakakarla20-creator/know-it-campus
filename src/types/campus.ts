export interface CampusInfo {
  id: string;
  category: 'schedules' | 'facilities' | 'dining' | 'library' | 'administrative';
  question: string;
  answer: string;
  tags: string[];
}

export interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  category?: string;
}

export const campusCategories = [
  { id: 'schedules', name: 'Class Schedules', icon: '📅' },
  { id: 'facilities', name: 'Facilities', icon: '🏢' },
  { id: 'dining', name: 'Dining', icon: '🍽️' },
  { id: 'library', name: 'Library Services', icon: '📚' },
  { id: 'administrative', name: 'Administrative', icon: '📋' }
] as const;