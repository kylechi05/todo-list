import React, { useState } from 'react';
import StarTask from './StarTask.jsx';
import MyDayTask from './MyDayTask.jsx';

const HoverCheck = () => {
    const [hover, setHover] = useState('circle');

    const handleMouseEnter = () => {
        setHover('check_circle');
    };

    const handleMouseLeave = () => {
        setHover('circle');
    };

    return (
        <span
            className='material-symbols-outlined'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {hover}
        </span>
    );
}

function TaskList({ tasks, setTasks }) {

    const [completedTasks, setCompletedTasks] = useState([]);
    const [expanded, setExpanded] = useState(true);

    const pendingTaskList = tasks.map((task) =>
        <li key={task.id} className='flex p-3 my-1 rounded-md bg-orange-100 text-wrap break-words'>
            <button
                className='text-zinc-600 mr-2 cursor-pointer material-symbols-outlined'
                onClick={() => {
                    setTasks(tasks.filter(a => a.id !== task.id));
                    setCompletedTasks(
                        [
                            task,
                            ...completedTasks
                        ]
                    );
                }}
            >
                <HoverCheck />
            </button>
            <span className='w-full'>
                {task.content}
            </span>
            <button className='mx-1 material-symbols-outlined'>
                star
            </button>
            <button className='material-symbols-outlined'>
                routine
            </button>
        </li>
    );
    
    const finishedTaskList = completedTasks.map((task) =>
        <li key={task.id} className='flex p-3 my-1 rounded-md bg-orange-100 saturate-50 text-wrap break-words'>
            <button
                className='text-zinc-500 mr-2 cursor-pointer material-symbols-outlined'
                onClick={() => {
                    setCompletedTasks(completedTasks.filter(a => a.id !== task.id));
                    setTasks(
                        [
                            ...tasks,
                            task
                        ]
                    );
                }}
            >
                check
            </button>
            <span className='max-w-full line-through'>
                {task.content}
            </span>
        </li>
    );

    return (
        <ul className='m-10'>
            {pendingTaskList}
            {finishedTaskList.length > 0 ? (
                <div>
                    <button
                        className='flex px-3 my-2 rounded-md bg-orange-100'
                        onClick={() => {expanded === true ? setExpanded(false) : setExpanded(true)}}
                    >
                        <span className='m-auto material-symbols-outlined'>
                            {expanded === true ? ("expand_more") : ("navigate_next")}
                        </span>
                        <span className='m-auto p-1'>Tasks Completed: {finishedTaskList.length}</span>
                    </button>
                    <div>
                        {expanded === true && finishedTaskList}
                    </div>
                </div>
            ) : (
                null
            )}
        </ul>
    );
}

export default TaskList;