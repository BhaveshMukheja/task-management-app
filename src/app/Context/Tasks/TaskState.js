import React from 'react'
import taskContext from './taskContext'
import {useState} from 'react'

const TaskState = (props)=>{
  const host = "http://localhost:5555"
const tasksIntitial=[]

const [tasks, setTasks] = useState(tasksIntitial)


// API Call
const getTasks = async (id)=>{
  const response = await fetch(`${host}/api/tasks/${id}`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit,
  
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    //   'auth-token': localStorage.getItem('token')
    },
  });
  const json = await response.json()
  console.log(json)
//   const x = localStorage.getItem('token')
//   console.log(x)
  setTasks(json)
}


// Add a note
const createTask = async (title, descrip, status, deadline, createdAt, priority, authorId)=>{

  const response = await fetch(`${host}/api/tasks/create`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit,
  
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    //   'auth-token': localStorage.getItem('token')
    },
    body: JSON.stringify({title, descrip, status, deadline, createdAt, priority, authorId}) // body data type must match "Content-Type" header
  });
  const task = await response.json(); // parses JSON response into native JavaScript objects
  setTasks(tasks.concat(task))


// const note =  {
//   "_id": "63a5eec2fb5bdedc8ba95e1e",
//   "user": "63a5e6e2ecb2c4ae5f853489",
//   "title": title,
//   "description": description,
//   "tag": tag,
//   "date": "2022-12-23T18:09:06.243Z",
//   "__v": 0
// };
setTasks(task.concat(tasks))
}

// Delete a Note
const deleteTask = async (id)=>{

  //API Call
  const response = await fetch(`${host}/api/tasks/delete/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit,
  
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    //   'auth-token': localStorage.getItem('token')
    },
  });
  const newTasks = tasks.filter((task)=>{return task._id!==id})
  setTasks(newTasks )
}




// Edit a Note
const editTask = async (id, title, descrip, status, deadline, createdAt, priority)=>{
// API call

const response = await fetch(`${host}/api/tasks/update/${id}`, {
  method: 'PUT', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit,

  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    // 'auth-token': localStorage.getItem('token')
  },
  body: JSON.stringify({id, title, descrip, status, deadline, createdAt, priority}) // body data type must match "Content-Type" header
});
// const json = response.json(); // parses JSON response into native JavaScript objects


let newTasks = JSON.parse(JSON.stringify(tasks))

  // Logic to edit in client
for(let index =0; index<newTasks.length; index++){
  const element = newTasks[index];
  if(element._id === id){
    newTasks[index].title = title;
    newTasks[index].descrip = descrip;
    newTasks[index].status = status;
    newTasks[index].priority = priority;
    newTasks[index].deadline = deadline;
    newTasks[index].createdAt = createdAt;
    break;
  }

}
setTasks(newTasks);
}

    return (
        <taskContext.Provider value={{tasks, createTask, deleteTask, editTask, getTasks}}>

            {props.children}
        </taskContext.Provider>
    )
}

export default NoteState