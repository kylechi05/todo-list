import React, {useState} from 'react';
import AddTask from '../ui/AddTask.jsx';
import TaskList from '../ui/TaskList.jsx';

/*
filer the listDisplay based on sideNav button, pass tab as a prop
function ListDisplay({ tab }){};
*/

function ListDisplay() {
    const [tasks, setTasks] = useState([]);
    const [completed, setCompleted] = useState([]);

    return (
        <>
            <div className='w-4/5 max-h-screen overflow-y-auto overflow-x-hidden'>
                <TaskList tasks={tasks} setTasks={setTasks} />
            </div>
            <div className='absolute w-4/5 bottom-0 right-0 pb-3 backdrop-blur-sm'>
                <AddTask tasks={tasks} setTasks={setTasks} />
            </div>
        </>
    );
}

export default ListDisplay;