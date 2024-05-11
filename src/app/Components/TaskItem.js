"use client"

import React, {useContext} from "react";
import taskContext from "../Context/Tasks/taskContext";

function TaskItem(props) {
  const context = useContext(taskContext);
  // const {deleteTask}=context;
  const { task, updateTask } = props;
  return (
    

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

        </h5>
    
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Completed
    </div>
</div>

  );
}

export default TaskItem;
