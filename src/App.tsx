import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css'

function App() {
  return (
    <div>
      <Header />

      <form className={styles.form}>
        <input type="text" placeholder="Adicione uma nova tarefa" />

        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </div>
  )
}

export default App
