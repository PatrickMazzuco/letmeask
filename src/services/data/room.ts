import { Room } from "../../models/Room";
import { Question } from "../../models/Question";
import { database } from "../firebase";

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

  getById: async (roomId: string): Promise<Room | null> => {
    const roomRef = database().ref(`rooms/${roomId}`);

    const room = await roomRef.get();

    if (!room.exists()) return null;

    const roomData = room.val();

    const parsedQuestions: Question[] = roomData.questions
      ? Object.values(roomData.questions)
      : [];

    return {
      title: roomData.title,
      authorId: roomData.authorId,
      questions: parsedQuestions,
    } as Room;
  },
};

export default RoomService;
