import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';


const lists = [
    {href: '/myday', listName: 'My Day', icon: 'routine', bg: 'bg-lavender-pastel', hover: 'hover:bg-lavender-pastel', deletable: false},
    {href: '/important', listName: 'Important', icon: 'star', bg: 'bg-salmon-pastel' ,hover: 'hover:bg-salmon-pastel', deletable: false},
    {href: '/tasks', listName: 'Tasks', icon: 'home', bg: 'bg-green-pastel', hover: 'hover:bg-green-pastel', deletable: false}
];

function Sidenav({ setPending }) {

    let location = useLocation();

    function resetStorage() {
        localStorage.clear();
        setPending([]);
    }

    const listList = lists.map(list =>
        <li key={list.listName} >
            <Link
                to={list.href}
                className={`flex my-2 h-10 rounded-md cursor-pointer ${list.hover} 
                            ${location.pathname === list.href ? list.bg : 'bg-orange-100'}`}
            >
                <span className='m-auto text-center material-symbols-outlined basis-16'>{list.icon}</span>
                <span className='m-auto grow'>{list.listName}</span>
            </Link>
        </li>
    );

    return (
        <div className='h-screen w-screen flex flex-row'>
            <div className='relative basis-1/5 bg-orange-50 '>
                <h1 className='flex text-xl h-24 m-3 rounded-lg bg-orange-200'>
                    <span className='m-auto text-center material-symbols-outlined basis-16'>menu</span>
                    <span className='m-auto grow'>Menu</span>
                </h1>
                <ul className='mx-3'>{listList}</ul>
                <div
                    className='absolute bottom-5 right-1/4 w-1/2 p-1 text-center rounded-md cursor-pointer bg-red-pastel'
                    onClick={resetStorage}
                >
                    Reset Tasks
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Sidenav;