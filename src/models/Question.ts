import { User } from "./User";

export interface Question {
  id?: string;
  content: string;
  author: User;
  isHighlighted?: boolean;
  isAnswered?: boolean;
}
