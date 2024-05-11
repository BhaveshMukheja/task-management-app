import {ITask} from "./types/task"

const host = 'http://localhost:5555';

export const getTasks = async(id: any):Promise<ITask[]> => {
const res = await fetch(`${host}/api/tasks/${id}`);
const todos = await res.json();
return todos;

}

