'use server'
import { z } from "zod";
import {
  NewQuestSchema
} from "@/schemas";
import { getUser } from './auth.action'
import { Quest } from '@/lib/models/quest.model'

export const createQuest = async (quest: z.infer<typeof NewQuestSchema>) => {

  const validateData = NewQuestSchema.safeParse(quest);
  if (!validateData.success) {
    return { error: "Invalid data" };
  }

  const { name, description, reward, type } = validateData.data;

  const d = typeof reward === 'number'
  if (!d) {
    return { error: 'The reward needs to be a valid number' }; 
  }

  const user = await getUser();
  if (!user || user?.role !== 'admin') {
    return { error: 'You are not logged in as an admin!'}
  }

  await Quest.create({
    name,
    description,
    reward: reward-0,
    type
  })

  return { success: 'Quest created successfully' }

}