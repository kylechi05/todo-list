import React, { useState } from 'react';

function TaskList({ tasks, setTasks }) {

    const [completedTasks, setCompletedTasks] = useState([]);
    const [expanded, setExpanded] = useState(true);

    const HoverIcon = () => {
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
                <HoverIcon />
            </button>
            <span>
                {task.content}
            </span>
        </li>
    );
    
    const finishedTaskList = completedTasks.map((task) =>
        <li key={task.id} className='flex p-3 my-1 rounded-md bg-orange-100 saturate-50 text-wrap'>
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
            <span className='line-through'>
                {task.content}
            </span>
        </li>
    );

    return (
        <ul className='m-10'>
            {pendingTaskList}
            {finishedTaskList.length > 0 ? (
                <>
                    <button
                        className='flex px-3 py-2 rounded-md bg-orange-100'
                        onClick={() => {expanded === true ? setExpanded(false) : setExpanded(true)}}
                    >
                        <span className='m-auto material-symbols-outlined'>
                            {expanded === true ? ("expand_more") : ("navigate_next")}
                        </span>
                        <span className='m-auto px-1'>Tasks Completed: {finishedTaskList.length}</span>
                    </button>
                    <div>
                        {expanded === true && finishedTaskList}
                    </div>
                </>
            ) : (
                null
            )}
        </ul>
    );
}

export default TaskList;