import styles from './style.module.css';
import logo from '../../assets/logo.svg';

export function Header(){
  return(
    <header className={styles.header}>
      <img src={logo} alt="to-do" />
    </header>
  )
}