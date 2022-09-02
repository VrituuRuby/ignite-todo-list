import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import {v4 as uuid4} from "uuid";
import styles from "./style.module.css"

interface Task {
    id: string,
    title: string,
    isComplete: boolean,
}

interface TaskProps{
  task: Task,
  setTaskList: (taskList: Task[])=> void,
  taskList: Task[];
}

export function Task({task, setTaskList, taskList}: TaskProps){

  

  function handleRemoveTask(id: string){
    const newTaskList = taskList.filter(task => task.id !== id);
    setTaskList(newTaskList);
  }

  function handleToggleTaskCompletion(id: string){
    const newTaskList = taskList.map(task => task.id === id ? {...task, isComplete: !task.isComplete} : task);
    setTaskList(newTaskList);
  }

  return( 
    <li key={task.id} className={task.isComplete ? styles.completed : ""}>
    <label className={styles.checkboxContainer}>
      <input 
        type="checkbox"
        readOnly 
        checked={task.isComplete}
        onClick={() => handleToggleTaskCompletion(task.id)}
      />
      <span className={styles.checkmark}></span>
      <p>{task.title}</p>
    </label>
    <button 
      onClick={() => handleRemoveTask(task.id)}
    >
      <HiOutlineTrash size={20}/>
    </button>
  </li>)
}