import styles from "./style.module.css";

interface TaskCounter{
  label: string,
  counter: string,
}

export function TaskCounter({label, counter}: TaskCounter){
  return (
    <p className={styles.counter}>
      {label}
      <span>{counter}</span>
    </p>
  )
}