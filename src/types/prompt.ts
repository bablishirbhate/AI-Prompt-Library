export interface Prompt {
  id: string;
  title: string;
  prompt: string;
  description: string;
  category: string;
  tags: string[];
  favorite: boolean;
  pinned: boolean;
  createdAt: string;
  updatedAt: string;
  order: number;
}