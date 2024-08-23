import { Schema, models, model } from "mongoose";

export interface IQuest extends Document {
  name: string;
  description: string;
  type: 'daily' | 'weekly' | 'monthly';
  reward: number;
}
const questSchema = new Schema<IQuest>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, enum: ['daily', 'weekly', 'monthly'], required: true, default: 'daily' },
    reward: { type: Number, required: true, default: 100 }
  },
  { timestamps: true }
);
export const Quest = models.Quest || model("Quest", questSchema);
