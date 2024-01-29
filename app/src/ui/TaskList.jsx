import React, { useState } from 'react';
import Task from './Task.jsx'

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

function TaskList({ pending, setPending, completed, setCompleted, isImportant, isMyDay }) {

    const [expanded, setExpanded] = useState(true);

    const pendingTaskList = pending.map((task) =>
        <li
            key={task.id}
            className='flex p-3 my-1 rounded-md bg-orange-100 text-wrap break-words'
            important={task.important.toString()}
            myday={task.myDay.toString()}
        >
            <Task
                task={task}
                pending={pending}
                setPending={setPending}
                completed={completed}
                setCompleted={setCompleted}
            />
        </li>
    );
                
    const pendingTaskListImportant = pendingTaskList.filter(task => task.props.important === 'true');
    const pendingTaskListMyDay = pendingTaskList.filter(task => task.props.myday === 'true');
    
    const completedTaskList = completed.map((task) =>
        <li
            key={task.id}
            className='flex p-3 my-1 rounded-md bg-orange-100 saturate-50 text-wrap break-words'
            important={task.important.toString()}
            myday={task.myDay.toString()}
        >
            <button
                className='text-zinc-500 mr-2 cursor-pointer material-symbols-outlined'
                onClick={() => {
                    setCompleted(completed.filter(a => a.id !== task.id));
                    setPending(
                        [
                            task,
                            ...pending
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

    const completedTaskListImportant = completedTaskList.filter(task => task.props.important === 'true');
    const completedTaskListMyDay = completedTaskList.filter(task => task.props.myday === 'true');

    let returnPending = pendingTaskList;
    let returnCompleted = completedTaskList;

    if (isImportant) {
        returnPending = pendingTaskListImportant;
        returnCompleted = completedTaskListImportant;
    } else if (isMyDay) {
        returnPending = pendingTaskListMyDay;
        returnCompleted = completedTaskListMyDay;
    }
    
    return (
        <ul className='m-10'>
            {returnPending}
            {returnCompleted.length > 0 ? (
                <div>
                    <button
                        className='flex px-3 my-2 rounded-md bg-orange-100'
                        onClick={() => {expanded === true ? setExpanded(false) : setExpanded(true)}}
                    >
                        <span className='m-auto material-symbols-outlined'>
                            {expanded === true ? ("expand_more") : ("navigate_next")}
                        </span>
                        <span className='m-auto p-1'>Tasks Completed: {returnCompleted.length}</span>
                    </button>
                    <div>
                        {expanded === true && returnCompleted}
                    </div>
                </div>
            ) : (
                null
            )}
        </ul>
    );
}

export default TaskList;