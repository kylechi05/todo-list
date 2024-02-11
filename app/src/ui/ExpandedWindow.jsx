import React, { useState } from 'react';

function ExpandedWindow({ expand, setExpand, pending, setPending }) {
    
    const [changeValue, setChangeValue] = useState(expand.task.content);

    const handleChange = (input) => {
        setChangeValue(input);
    }
    
    return (
        <div className='w-1/4 h-screen bg-orange-50'>
            <div className='flex p-2'>
                <span 
                    className='hover:bg-orange-100 rounded-md m-auto material-symbols-outlined'
                    onClick={() => {setExpand(false)}}
                >
                        close
                </span>
            </div>
            <div className='m-3 p-3 rounded-lg text-wrap break-words bg-orange-200'>
                <input
                    id='changeTask'
                    name='changeTask'
                    type='text'
                    value={changeValue}
                    onChange={(e) => handleChange(e.target.value)}
                >
                </input>
            </div>
            <div>
                {expand.task.content}
            </div>
        </div>
        
    );
}

export default ExpandedWindow;