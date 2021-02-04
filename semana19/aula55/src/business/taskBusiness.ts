import { insertTask, selectTaskById } from "../data/taskDatabase"
import { generateId } from "./services/idGenerator"

export const businessCreateTask = async (
   title: string,
   description: string,
   deadline: string,
   authorId: string
) => {

   if (
      !title ||
      !description ||
      !deadline ||
      !authorId
   ) {
      throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
   }

   const id: string = generateId()

   await insertTask({
      id,
      title,
      description,
      deadline,
      authorId,
   })
}

export const businessGetTaskById = async(
   id:string
)=>{

   const result = await selectTaskById(id)

   if (!result) {
      throw new Error("Tarefa não encontrada")
   }

   const taskWithUserInfo = {
      id: result.id,
      title: result.title,
      description: result.description,
      deadline: result.deadline,
      status: result.status,
      authorId: result.author_id,
      authorNickname: result.nickname
   }

   return taskWithUserInfo
}