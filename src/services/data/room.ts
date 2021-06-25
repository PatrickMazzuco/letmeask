import { Room } from "../../models/Room";
import { Question } from "../../models/Question";
import { User } from "../../models/User";
import { database } from "../firebase";

type FirebaseLikes = Record<
  string,
  {
    id: string;
    authorId: string;
  }
>;

type FirebaseQuestions = Record<
  string,
  {
    id: string;
    content: string;
    author: User;
    isHighlighted: boolean;
    isAnswered: boolean;
    likes: FirebaseLikes;
  }
>;

type FirebaseRoom = {
  title: string;
  authorId: string;
  questions: FirebaseQuestions;
};

const RoomService = {
  create: async (
    roomName: string,
    authorId: string
  ): Promise<string | null> => {
    const roomRef = database().ref("rooms");

    const newRoom: Room = {
      title: roomName,
      authorId,
    };
    const firebaseRoom = await roomRef.push(newRoom);

    return firebaseRoom.key;
  },

  getById: async (roomId: string, userId?: string): Promise<Room | null> => {
    const roomRef = database().ref(`rooms/${roomId}`);

    const room = await roomRef.get();

    if (!room.exists()) return null;

    const roomData = room.val();
    const parsedRoom = parseRoom(roomData, userId);

    return parsedRoom;
  },

  onRoomChange: (
    roomId: string,
    userId: string | undefined,
    callback: (room: Room | null) => void
  ) => {
    const roomRef = database().ref(`rooms/${roomId}`);

    roomRef.on("value", (room) => {
      if (!room.exists()) callback(null);

      const roomData = room.val();
      const parsedRoom = parseRoom(roomData, userId);

      callback(parsedRoom);
    });

    const unsubscribe = () => {
      roomRef.off("value");
    };

    return unsubscribe;
  },
};

const parseRoom = (room: FirebaseRoom, userId?: string) => {
  const firebaseQuestions: FirebaseQuestions = room.questions;

  const parsedQuestions: Question[] = firebaseQuestions
    ? Object.entries(firebaseQuestions).map(([questionId, question]) => {
        const likeCount = Object.values(question.likes ?? {}).length;
        const likeId = Object.entries(question.likes ?? {}).find(
          ([likeId, like]) => like.authorId === userId
        )?.[0];

        return {
          ...question,
          id: questionId,
          likeCount,
          likeId,
        };
      })
    : [];

  return {
    title: room.title,
    authorId: room.authorId,
    questions: parsedQuestions,
  } as Room;
};

export default RoomService;
