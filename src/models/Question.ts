import { User } from "./User";

export interface Like {
  id?: string;
  authorId: string;
}
export interface Question {
  id?: string;
  content: string;
  author: User;
  isHighlighted?: boolean;
  isAnswered?: boolean;
  likeCount?: number;
  likeId?: string;
}
