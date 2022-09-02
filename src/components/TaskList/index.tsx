import { useState } from "react";
import clipboardImg from "../../assets/clipboard.svg";

import { v4 as uuid4 } from "uuid";


import { CreateNewTask } from "../CreateNewTask";
import { TaskCounter } from "../TaskCounter";
import { Task } from "../Task";

import styles from "./style.module.css";

interface Task {
  title: string;
  isComplete: boolean;
  id: string;
}

export function TaskList(){
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  function handleCreateNewTask(){
    if (!taskTitle) return;
    const newTask = {
      id: uuid4(),
      title: taskTitle,
      isComplete: false,
    }

    setTaskList([...taskList, newTask]);
    setTaskTitle("");
  }

  return(
    <main className={styles.container}>
      <CreateNewTask
        handleCreateNewTask={handleCreateNewTask} 
        setTaskTitle={setTaskTitle} 
        taskTitle={taskTitle}
      />
      <section>
        <div className={styles.counters}>
          <TaskCounter label="Tarefas criadas" counter={`${taskList.length}`}/>
          <TaskCounter 
            label="Concluídas"
            counter={`${taskList.filter(task => task.isComplete).length} de ${taskList.length}`}
          />
        </div>
        <div>
          {
            taskList.length > 0 ? (
              <ul className={styles.taskList}>
                {taskList.map(task => (
                  <Task setTaskList={setTaskList} task={task} taskList={taskList} key={task.id}/>
                ))}
              </ul>
            )
            : (
              <section className={styles.emptyList}>
                <img src={clipboardImg} alt="clipboard" />
                <p>
                  <strong>
                    Você ainda não tem tarefas cadastradas
                  </strong>
                  <br/>
                  Crie tarefas ou organize seus itens a fazer
                </p>
              </section>
            )
          }
        </div>
      </section>
    </main>
  )
}