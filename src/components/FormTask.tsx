import styles from './Task.module.css';

import plus from '../assets/plus.svg';

export function FormTask() {
    return (
        <form className={styles.form}>
            <input 
                className={styles.inputTask} 
                placeholder='Adicione uma nova tarefa'
                type="text"
            />
            <button type="submit">Criar <img src={plus} alt="Plus" /></button>
        </form>
    )
}