import User from "./User.ts";

interface Message {
  id: number;
  timePosted: string;
  body: string;
  author: number | User;
}

export default Message;