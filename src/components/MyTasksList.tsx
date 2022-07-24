import ClipbordImg from '../assets/clipboard.svg';

import styles from './MyTasksList.module.css';

export function MyTasksList() {
  return (
    <section className={styles.myTasksList}>
      <header>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span className={styles.counter}>0</span>
        </div>

        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span className={styles.counter}>0</span>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.emptyList}>
          <img src={ClipbordImg} alt="Lista vazia" />

          <div className={styles.emptyListInfo}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </div>
    </section>
  )
}