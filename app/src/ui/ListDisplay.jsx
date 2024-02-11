import React, { useState } from 'react';
import TaskList from '../ui/TaskList.jsx';
import AddTask from '../ui/AddTask.jsx';
import ExpandedWindow from './ExpandedWindow.jsx';

function ListDisplay({ pending, setPending, completed, setCompleted, flags }) {

    const [expandedWindow, setExpandedWindow] = useState(
        {
            show: false,
            task: {
                id: null,
                content: null,
                important: null,
                myDay: null,
            },
        }
    );
    const isImportant = (flags === 'important') ? true : false;
    const isMyDay = (flags === 'myday') ? true : false;

    return (
        <div className='flex flex-row basis-4/5'>
            <div className='grow relative'>
                <div
                    className='h-screen overflow-y-auto'
                    style={{scrollbarGutter: "stable"}}
                >
                    <TaskList
                        pending={pending} 
                        setPending={setPending}
                        completed={completed}
                        setCompleted={setCompleted}
                        isImportant={isImportant}
                        isMyDay={isMyDay}
                        setExpandedWindow={setExpandedWindow}
                    />
                </div>
                <div className='absolute w-full bottom-0 pb-3 backdrop-blur-sm'>
                    <AddTask
                        pending={pending}
                        setPending={setPending}
                        isImportant={isImportant}
                        isMyDay={isMyDay}
                    />
                </div>
            </div>            
            {expandedWindow.show &&
                <ExpandedWindow
                    expandedWindow={expandedWindow}
                    setExpandedWindow={setExpandedWindow}
                    pending={pending}
                    setPending={setPending}
                />
            }
        </div>
    );
}

export default ListDisplay;