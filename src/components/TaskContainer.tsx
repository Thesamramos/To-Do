import styles from './TaskContainer.module.css';

export function TaskContainer() {
    return(

        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.created}>
                    <p>Tarefas criadas</p>
                </div>

                <div className={styles.done}>
                    <p>Concluídas</p>
                </div>
                
            </div>
            <div className={styles.taskContainer}></div>
        </div>
    )
}