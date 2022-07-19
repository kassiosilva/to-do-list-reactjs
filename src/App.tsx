import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css'
import { MyTasksList } from './components/MyTasksList';

function App() {
  return (
    <>
      <Header />

      <form className={styles.form}>
        <input type="text" placeholder="Adicione uma nova tarefa" />

        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <MyTasksList />
    </>
  )
}

export default App
