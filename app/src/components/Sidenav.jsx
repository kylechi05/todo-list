import React, { useState } from 'react';

const lists = [
    {listName: 'My Day', icon: 'wb_sunny', hover: 'hover:bg-indigo-200', deletable: false},
    {listName: 'Important', icon: 'star', hover: 'hover:bg-amber-200', deletable: false},
    {listName: 'Tasks', icon: 'home', hover: 'hover:bg-lime-200', deletable: false}
];

/* create a NewList Function for adding new Lists */

function Sidenav() {
    const listList = lists.map(list =>
        <li key={list.listName} className={`flex my-2 h-10 rounded-md ${list.hover} cursor-pointer bg-orange-100`}>
            <span className='m-auto text-center material-symbols-outlined basis-16'>{list.icon}</span>
            <span className='m-auto grow'>{list.listName}</span>
        </li>
    );

    return (
        <div className=' w-1/5 bg-orange-50'>
            <h1 className='flex text-xl h-24 m-3 rounded-lg bg-orange-200'>
                <span className='m-auto text-center material-symbols-outlined basis-16'>menu</span>
                <span className='m-auto grow'>Menu</span>
            </h1>
            <ul className='mx-3'>{listList}</ul>
        </div>
    );
}

export default Sidenav;