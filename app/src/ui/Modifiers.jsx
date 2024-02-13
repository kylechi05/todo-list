import React, { useState } from 'react';

export function HoverCheck({ task, pending, setPending, completed, setCompleted}) {
    const [hover, setHover] = useState('circle');
    
    const handleMouseEnter = () => {
        setHover('check_circle');
    }
    const handleMouseLeave = () => {
        setHover('circle');
    }
    const handleClick = () => {
        setPending(pending.filter(obj => obj.id !== task.id));
        setCompleted([
            task,
            ...completed
        ])
    }

    return (
        <span
            className='text-zinc-600 mr-2 cursor-pointer material-symbols-outlined'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {hover}
        </span>
    )
}

export function Star({ starred, task, pending, setPending }) {
    const [hover, setHover] = useState('text-zinc-700');

    const handleMouseEnter = () => {
        setHover('text-salmon-pastel');
    }
    const handleMouseLeave = () => {
        setHover('text-zinc-700');
    }
    const handleClick = () => {
        const nextPending = pending.map(obj => {
            if (obj.id === task.id) {
                return {
                    ...obj,
                    important: !obj.important
                };
            } else {
                return obj;
            }
        })
        setPending(nextPending);
    }

    return (
        <span
            className={`${starred ? 'text-salmon-pastel' : hover} material-symbols-outlined`}
            style={starred ? {fontVariationSettings: "'FILL' 1"} : {fontVariationSettings: "'FILL' 0"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            star
        </span>
    );
}

export function Routine({ routined, task, pending, setPending }) {
    const [hover, setHover] = useState('text-zinc-700');

    const handleMouseEnter = () => {
        setHover('text-lavender-pastel');
    }
    const handleMouseLeave = () => {
        setHover('text-zinc-700');
    }
    const handleClick = () => {
        const nextPending = pending.map(obj => {
            if (obj.id === task.id) {
                return {
                    ...obj,
                    myDay: !obj.myDay
                };
            } else {
                return obj;
            }
        })
        setPending(nextPending);
    }

    return (
        <span
            className={`${routined ? 'text-lavender-pastel' : hover} mx-1 material-symbols-outlined`}
            style={routined ? {fontVariationSettings: "'FILL' 1"} : {fontVariationSettings: "'FILL' 0"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            routine
        </span>
    );
}

export function Delete({ task, pending, setPending }) {
    const [hover, setHover] = useState('text-zinc-700');

    const handleMouseEnter = () => {
        setHover('text-red-pastel');
    }
    const handleMouseLeave = () => {
        setHover('text-zinc-700')
    }
    const handleClick = () => {
        setPending((pending).filter(obj => obj.id !== task.id))
    }

    return (
        <span
            className={`${hover} material-symbols-outlined`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            delete
        </span>
    )
}