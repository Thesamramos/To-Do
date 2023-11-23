import { Header } from './components/Header';
import { FormTask } from './components/FormTask';
import { TaskContainer } from './components/TaskContainer';

import './global.css';


export function App() {
  return(
    <>
      <Header />
      <main>
        <FormTask />
        <TaskContainer />
      </main>
    
    </>
    
  )
}
