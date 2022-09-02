import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./style.module.css";

interface CreateNewTask{
  taskTitle: string,
  setTaskTitle: (title: string) => void,
  handleCreateNewTask: () => void,
}

export function CreateNewTask({taskTitle, setTaskTitle, handleCreateNewTask}: CreateNewTask){
  return(
      <div className={styles.newTaskContainer}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
        />
        <button 
          type="button"
          onClick={() => handleCreateNewTask()}
        >
          Criar
          <AiOutlinePlusCircle size="20px"/>
        </button>
      </div>
  )
}