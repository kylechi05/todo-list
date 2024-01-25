import React, {useState} from 'react';
import StarTask from './StarTask.jsx';
import MyDayTask from './MyDayTask.jsx'

function AddTask({ tasks, setTasks }){
    const [addButton, setAddButton] = useState('add');

    const [starred, setStarred] = useState([false, {fontVariationSettings: "'FILL' 0"}]);
    const [starHover, setStarHover] = useState('text-zinc-700');

    const [myDay, setMyDay] = useState([false, {fontVariationSettings: "'FILL' 0"}]);
    const [myDayHover, setMyDayHover] = useState('text-zinc-700');

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
                        important: starred[0],
                        myDay: myDay[0],
                    }
                ]
            );
            setTaskCount(taskCount + 0.01);
            setInputValue('');
            setAddButton('add');
            setStarred([false, {fontVariationSettings: "'FILL' 0"}])
            setStarHover('text-zinc-700');
            setMyDay([false, {fontVariationSettings: "'FILL' 0"}])
            setMyDayHover('text-zinc-700');
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
            <button
                className='mx-2 material-symbols-outlined'
            >
                <StarTask starred={starred} setStarred={setStarred} hover={starHover} setHover={setStarHover} />
            </button>
            <button
                className='material-symbols-outlined'
            >
                <MyDayTask myDay={myDay} setMyDay={setMyDay} hover={myDayHover} setHover={setMyDayHover} />
            </button>
        </div>
    );
}

export default AddTask;