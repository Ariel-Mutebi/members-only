import User from "./User.ts";

interface Message {
  id: number;
  timePosted: string;
  title: string;
  body: string;
  author: number | User;
}

export default Message;