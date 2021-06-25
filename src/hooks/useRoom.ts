import { useEffect, useState } from "react";
import { Question } from "../models/Question";
import RoomService from "../services/data/room";
import { useAuth } from "./useAuth";

export const useRoom = (roomId: string) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const unsubscribe = RoomService.onRoomChange(roomId, user?.id, (room) => {
      if (room && room.questions) {
        setTitle(room.title);
        setQuestions(room.questions);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [roomId, user?.id]);

  return {
    title,
    questions,
  };
};
