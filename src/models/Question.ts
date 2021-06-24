import { User } from "./User";

export interface Question {
  content: string;
  author: User;
  isHighlighted?: boolean;
  isAnswered?: boolean;
}
