import React, { useState } from 'react';

function HoverCheck({ clicked }){
    const [hover, setHover] = useState('circle');
    const handleMouseEnter = () => {
        setHover('check_circle');
    }
    const handleMouseLeave = () => {
        setHover('circle');
    }        

    return (
        <span
            className='text-zinc-600 mr-2 cursor-pointer material-symbols-outlined'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={clicked}
        >
            {hover}
        </span>
    );
}

function Star({ starred, clicked }) {
    const [hover, setHover] = useState('text-zinc-700');
    const handleMouseEnter = () => {
        setHover('text-salmon-pastel');
    }
    const handleMouseLeave = () => {
        setHover('text-zinc-700');
    }

    return (
        <span
            className={`${starred ? 'text-salmon-pastel' : hover} material-symbols-outlined`}
            style={starred ? {fontVariationSettings: "'FILL' 1"} : {fontVariationSettings: "'FILL' 0"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={clicked}
        >
            star
        </span>
    );
}

function Routine({ routined, clicked }) {
    const [hover, setHover] = useState('text-zinc-700');
    const handleMouseEnter = () => {
        setHover('text-lavender-pastel');
    }
    const handleMouseLeave = () => {
        setHover('text-zinc-700');
    }

    return (
        <span
            className={`${routined ? 'text-lavender-pastel' : hover} mx-1 material-symbols-outlined`}
            style={routined ? {fontVariationSettings: "'FILL' 1"} : {fontVariationSettings: "'FILL' 0"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={clicked}
        >
            routine
        </span>
    );
}

function Delete({ clicked }) {
    const [hover, setHover] = useState('text-zinc-700');
    const handleMouseEnter = () => {
        setHover('text-red-pastel');
    }
    const handleMouseLeave = () => {
        setHover('text-zinc-700')
    }
    
    return (
        <span
            className={`${hover} material-symbols-outlined`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={clicked}
        >
            delete
        </span>
    )
}

function Task({ task, pending, setPending, completed, setCompleted, expand, setExpand }) {

    const handleCheckClick = () => {
        setPending(pending.filter(obj => obj.id !== task.id));
        setCompleted([
            task,
            ...completed
        ])
    }
    
    const handleStarClick = () => {
        const nextPending = pending.map(obj => {
            if (obj.id === task.id) {
                return {
                    ...obj,
                    important: !obj.important
                }
            } else {
                return obj;
            }
        })
        setPending(nextPending);
    }

    const handleRoutineClick = () => {
        const nextPending = pending.map(obj => {
            if (obj.id === task.id) {
                return {
                    ...obj,
                    myDay: !obj.myDay
                }
            } else {
                return obj;
            }
        })
        setPending(nextPending);
    }

    const handleDeleteClick = () => {
        setPending(pending.filter(obj => obj.id !== task.id))
    }

    const handleTaskClick = () => {
        setExpand(
            {
                show: true,
                task: task,
            }
        );
        console.log(task.content)
    }

    return (
        <div
            className='w-full flex'
            onClick={handleTaskClick}
        >
            <HoverCheck clicked={handleCheckClick} />
            <span className='w-full text-wrap break-words'>
                {task.content}
            </span>
            <Star starred={task.important} clicked={handleStarClick} />
            <Routine routined={task.myDay} clicked={handleRoutineClick} />
            <Delete clicked={handleDeleteClick} />
        </div>
    );
}

export default Task;