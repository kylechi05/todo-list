import React from 'react';
import TaskList from '../ui/TaskList.jsx';
import AddTask from '../ui/AddTask.jsx';

function MyDay({ pending, setPending, completed, setCompleted }) {

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
                    flags={'myday'}
                />
            </div>
            <div className='absolute w-4/5 bottom-0 right-0 pb-3 backdrop-blur-sm'>
                <AddTask
                    pending={pending}
                    setPending={setPending}
                    isImportant={false} 
                    isMyDay={true}
                />
            </div>
        </div>
    );
};

export default MyDay;