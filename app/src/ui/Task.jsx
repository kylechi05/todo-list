import React, { useState } from 'react';
import { HoverCheck, Star, Routine, Delete } from './Modifiers';


function Task({ task, pending, setPending, completed, setCompleted, setExpandedWindow }) {

    const handleTaskClick = () => {
        setExpandedWindow(
            {
                show: true,
                task: task,
            }
        );
    }

    return (
        <div
            className='w-full flex'
            onClick={handleTaskClick}
        >
            <HoverCheck
                task={task}
                pending={pending}
                setPending={setPending}
                completed={completed}
                setCompleted={setCompleted}
            />
            <span className='w-full text-wrap break-words'>
                {task.content}
            </span>
            <Star
                starred={task.important}
                task={task}
                pending={pending}
                setPending={setPending}
            />
            <Routine
                routined={task.myDay}
                task={task}
                pending={pending}
                setPending={setPending}
            />
            <Delete
                task={task}
                pending={pending}
                setPending={setPending}
            />
        </div>
    );
}

export default Task;