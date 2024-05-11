import Image from "next/image";
import Sidebar from "./Components/Sidebar"
import AddTask from "./Components/AddTask"
import TaskItem from "./Components/TaskItem"
import { getTasks } from "../../api";



export default async function Home() {

  // const tasks = await getTasks(); //user id deni hai 
  return (
    <main className="flex flex-row ">

      <Sidebar/>
      <AddTask/>
      <TaskItem/>

     
      
    </main>
  );
}
