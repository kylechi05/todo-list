import React, { useState } from 'react';
import TaskList from '../ui/TaskList.jsx';
import AddTask from '../ui/AddTask.jsx';

function ListDisplay({ pending, setPending, completed, setCompleted, flags, isImportant, isMyDay }) {

    
    return (
        <div className='h-screen'>
            <div
                className='h-screen max-h-screen overflow-y-auto overflow-x-hidden'
                style={{scrollbarGutter: "stable"}}
            >
                <TaskList
                    pending={pending} 
                    setPending={setPending}
                    completed={completed}
                    setCompleted={setCompleted}
                    flags={flags}
                />
            </div>
            <div className='absolute w-4/5 bottom-0 right-0 pb-3 backdrop-blur-sm'>
                <AddTask
                    pending={pending}
                    setPending={setPending}
                    isImportant={isImportant} 
                    isMyDay={isMyDay}
                />
            </div>
        </div>
    );
}

export default ListDisplay;