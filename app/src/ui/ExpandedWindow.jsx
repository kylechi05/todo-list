import React, { useEffect, useRef } from 'react';
import { HoverCheck, Star, Routine, Delete } from './Modifiers';

const useTextAreaAutoHeight = (ref) => {
    useEffect(() => {
        const listener = () => {
            ref.current.style.height = ref.current.scrollHeight + "px";
        };
        ref.current.addEventListener("input", listener);
    }, [ref]);
};

function ExpandedWindow({ expandedWindow, setExpandedWindow, pending, setPending, completed, setCompleted }) {

    const ref = useRef();
    useTextAreaAutoHeight(ref);

    const handleChange = (input) => {
        setExpandedWindow(
            {
                ...expandedWindow,
                task:
                    {
                        ...expandedWindow.task,
                        content: input,
                    },
            }
        );
        const changePending = pending.map(task => {
            if (task.id != expandedWindow.task.id) {
                return task
            } else {
                return {
                    ...task,
                    content: input
                }
            }
        });
        setPending(changePending);
    }

    return (
        <div className='w-1/3 h-screen bg-orange-50'>
            <div className='flex p-2'>
                <span 
                    className='hover:bg-orange-100 rounded-md m-auto material-symbols-outlined'
                    onClick={() => {setExpandedWindow({show: false, task: null})}}
                >
                        close
                </span>
            </div>
            <div className='m-3 p-3 relative rounded-lg text-wrap break-words bg-orange-200'>
                <textarea
                    ref={ref}
                    className='focus:outline-none resize-none w-full bg-orange-200'
                    id='changeTask'
                    name='changeTask'
                    type='text'
                    value={expandedWindow.task.content}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
            {/*
            <HoverCheck
                task={expandedWindow.task}
                pending={pending}
                setPending={setPending}
                completed={completed}
                setCompleted={setCompleted}
            />
            <Star
                starred={expandedWindow.task.important} 
                task={expandedWindow.task}
                pending={pending}
                setPending={setPending}
            />
            <Routine
                routined={expandedWindow.task.myDay}
                task={expandedWindow.task}
                pending={pending}
                setPending={setPending}
            />
            <Delete
                task={expandedWindow.task}
                pending={pending}
                setPending={setPending}
            />
            */}
            
        </div>
    );
}

export default ExpandedWindow;