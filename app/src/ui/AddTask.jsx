import React, {useState} from 'react';
import StarTask from './StarTask.jsx';
import MyDayTask from './MyDayTask.jsx'

function AddTask({ pending, setPending, isImportant, isMyDay }){
    const [addButton, setAddButton] = useState('add');

    const [starHover, setStarHover] = useState('text-zinc-700');
    const [starred, setStarred] = useState(isImportant
        ? [true, {fontVariationSettings: "'FILL' 1"}]
        : [false, {fontVariationSettings: "'FILL' 0"}]);

    const [myDayHover, setMyDayHover] = useState('text-zinc-700');
    const [myDay, setMyDay] = useState(isMyDay
        ? [true, {fontVariationSettings: "'FILL' 1"}]
        : [false, {fontVariationSettings: "'FILL' 0"}]);

    const [inputValue, setInputValue] = useState('');

    const checkEnter = (event) => {
        if (event.key === "Enter") {
            handleSubmit()
        }   
    };

    function handleChange(input) {
        input ? setAddButton('add_circle') : setAddButton('add');
        setInputValue(input);
    }

    function getDate() {
        const now = new Date();
        const milliseconds = now.getMilliseconds();
        return now.toString() + " " + milliseconds;
    }

    function handleSubmit() {
        if (inputValue != '') {
            setPending(
                [
                    {
                        id: getDate(),
                        content: inputValue,
                        important: starred[0],
                        myDay: myDay[0],
                    },
                    ...pending
                ]
            );
            setInputValue('');
            setAddButton('add');
            if (!isImportant) setStarred([false, {fontVariationSettings: "'FILL' 0"}]);
            if (!isMyDay) setMyDay([false, {fontVariationSettings: "'FILL' 0"}]);
            setStarHover('text-zinc-700');
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
            <button className='mx-2 material-symbols-outlined'>
                <StarTask
                    starred={starred}
                    setStarred={setStarred}
                    hover={starHover}
                    setHover={setStarHover}
                    isImportant={isImportant}
                />
            </button>
            <button className='material-symbols-outlined'>
                <MyDayTask
                    myDay={myDay}
                    setMyDay={setMyDay}
                    hover={myDayHover}
                    setHover={setMyDayHover}
                    isMyDay={isMyDay}
                />
            </button>
        </div>
    );
}

export default AddTask;