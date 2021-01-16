import {status} from './status'

export type Task = {
    taskId: number,
    title: string,
    description: string,
    limitDate: string,
    status: status,
    userId: number,
    userNickname: string
}