import React, {useState} from 'react';
import AddTask from '../ui/AddTask.jsx';
import TaskList from '../ui/TaskList.jsx';

/*
filer the listDisplay based on sideNav button, pass tab as a prop
function ListDisplay({ tab }){};
*/

function ListDisplay({ pending, setPending, completed, setCompleted }) {

    return (
        <div className='h-screen'>
            <div
                className='h-screen max-h-screen overflow-y-auto overflow-x-hidden'
                style={{scrollbarGutter: "stable"}}
            >
                <TaskList pending={pending} setPending={setPending} completed={completed} setCompleted={setCompleted} flags={null} />
            </div>
            <div className='absolute w-4/5 bottom-0 right-0 pb-3 backdrop-blur-sm'>
                <AddTask pending={pending} setPending={setPending} isImportant={false} isMyDay={false} />
            </div>
        </div>
    );
}

export default ListDisplay;