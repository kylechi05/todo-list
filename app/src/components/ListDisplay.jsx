import React, {useState} from 'react';

function AddTask({ tasks, setTasks }){
    const [addButton, setAddButton] = useState('add');
    const [inputValue, setInputValue] = useState('');
    const [taskCount, setTaskCount] = useState(0);

    const checkEnter = (event) => {
        if (event.key === "Enter") {
            handleSubmit()
        }   
    };

    function handleChange(input) {
        input ? setAddButton('add_circle') : setAddButton('add');
        setInputValue(input);
    }

    function handleSubmit() {
        if (inputValue != '') {
            setTasks(
                [
                    ...tasks,
                    {
                        id: taskCount,
                        content: inputValue,
                        checked: false,
                    }
                ]
            );
            setTaskCount(taskCount + 0.01);
            setInputValue('');
        }
    }

    return (
        <div className='flex p-3 m-5 rounded-md bg-slate-100'>
            <button
                className='text-zinc-500 mr-2 cursor-pointer material-symbols-outlined'
                onClick={handleSubmit}
            >
                {addButton}
            </button>
            <input
                id='addTask'
                name='addTask'
                type='text'
                className='w-full bg-slate-100 focus:outline-none'
                placeholder='Add a task'
                value={inputValue}
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={checkEnter}
            />
        </div>
    );
}

function ListDisplay() {
    const [tasks, setTasks] = useState([]);
    const taskList = tasks.map(task =>
        <li key={task.id} className='flex p-3 my-1 rounded-md bg-slate-100'>
            <button className='text-zinc-500 mr-2 cursor-pointer material-symbols-outlined'>
                circle
            </button>
            {task.content}
        </li>
    );
    return (
        <>
            <div className='flex grow max-h-screen overflow-auto'>
                <ul className='w-full m-10'>
                    {taskList}
                </ul>
            </div>
            <div className='absolute w-4/5 bottom-0 right-0 backdrop-blur-sm'>
                <AddTask tasks={tasks} setTasks={setTasks} />
            </div>
        </>
    );
}

export default ListDisplay;