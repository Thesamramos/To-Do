import styles from './Task.module.css';
import checkFalse from '../assets/Layer 1.svg';
import trash from '../assets/Layer 2.svg';

interface Task {
    content: string
}

export function Task({ content }:Task){
    return(
        <div className={styles.task}>
            <button className={styles.check}>
                <img src={checkFalse} alt="" />
            </button>
            <p>{content}</p>
            <button className={styles.trash}>
                <img src={trash} alt="" />
            </button>
        </div>
    )
}