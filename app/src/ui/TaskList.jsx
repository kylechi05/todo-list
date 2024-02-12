import React, { useState, useEffect } from 'react';
import Task from './Task.jsx'

function TaskList({ pending, setPending, completed, setCompleted, isImportant, isMyDay, setExpandedWindow }) {

    useEffect(() => {
        localStorage.setItem('PendingTaskList', JSON.stringify(pending));
    }, [pending])

    useEffect(() => {
        localStorage.setItem('CompletedTaskList', JSON.stringify(completed))
    }, [completed])

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
                setExpandedWindow={setExpandedWindow}
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
    let header = {
        message: 'Tasks',
        background: 'bg-green-pastel/50',
        icon: 'home'
    }

    if (isImportant) {
        returnPending = pendingTaskListImportant;
        returnCompleted = completedTaskListImportant;
        header.message = 'Important';
        header.background = 'bg-salmon-pastel/50';
        header.icon = 'star';
    } else if (isMyDay) {
        returnPending = pendingTaskListMyDay;
        returnCompleted = completedTaskListMyDay;
        header.message = 'My Day';
        header.background = 'bg-lavender-pastel/50';
        header.icon = 'routine';
    }

    return (
        <div className='relative'>
            <div className='w-full absolute'>
                <div className={`text-xl flex m-auto p-5 backdrop-blur-md ${header.background}`}>
                    <span className='pr-5 material-symbols-outlined'>{header.icon}</span>
                    {header.message}
                </div>
                {returnPending.length == 0 && returnCompleted.length == 0
                    ? <p className='p-5'>"You have no tasks here, add them below!"</p>
                    : null
                }
            </div>
            <div
                className='h-screen overflow-y-auto'
                style={{
                    scrollbarGutter: "stable",
                    scrollbarWidth: 'thin',
                }}
            >
                <ul className='py-20 px-8'>
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
            </div>
        </div>
    );
}

export default TaskList;