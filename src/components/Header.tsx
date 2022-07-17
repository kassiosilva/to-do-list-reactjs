import styles from './Header.module.css';

import ToDoLogo from '../assets/todo-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ToDoLogo} alt="Logotipo do todo" />
    </header>
  )
}