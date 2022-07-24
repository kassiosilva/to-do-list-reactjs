import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { MyTasksList } from './components/MyTasksList';

import styles from './App.module.css';
import './global.css'

function App() {
  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <form className={styles.form}>
          <input type="text" placeholder="Adicione uma nova tarefa" />

          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>

        <MyTasksList />
      </main>
    </>
  )
}

export default App
