import { Schema, models, model } from "mongoose";
import { IQuest } from './quest.model'

export interface IUser extends Document {
  email: string;
  password?: string;
  name: string;
  emailVerified: boolean;
  trophies: number;
  coins: number;
  role: "user" | "admin";
  quests: {
    quest: IQuest;
    completed: boolean;
    expirationDate: Date
  }[]
}
const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    emailVerified: {
      type: Boolean,
      default: false,
      required: true,
    },
    trophies: {
      type: Number,
      default: 0,
    }, 
    coins: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    quests: [
      {
        quest: { type: Schema.Types.ObjectId, ref: 'Quest' },
        completed: { type: Boolean, default: false },
        expirationDate: { type: Date, required: true }
      }
    ]
  },
  { timestamps: true }
);
export const User = models.User || model("User", userSchema);
