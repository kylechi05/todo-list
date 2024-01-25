import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';


const lists = [
    {link: '/myday', listName: 'My Day', icon: 'routine', bg: 'bg-lavender-pastel', hover: 'hover:bg-lavender-pastel', deletable: false},
    {link: '/important', listName: 'Important', icon: 'star', bg: 'bg-salmon-pastel' ,hover: 'hover:bg-salmon-pastel', deletable: false},
    {link: '/tasklist', listName: 'Tasks', icon: 'home', bg: 'bg-green-pastel', hover: 'hover:bg-green-pastel', deletable: false}
];

/* create a NewList Function for adding new Lists */

function Sidenav() {

    let location = useLocation();

    const listList = lists.map(list =>
        <li key={list.listName} >
            <Link
                to={list.link}
                className={location === list.link ? list.bg : '' + list.hover +
                    ` flex my-2 h-10 rounded-md cursor-pointer bg-orange-100`
                }
            >
                <span className='m-auto text-center material-symbols-outlined basis-16'>{list.icon}</span>
                <span className='m-auto grow'>{list.listName}</span>
            </Link>
        </li>
    );

    return (
        <div className='h-screen w-screen flex'>
            <div className='w-1/5 min-w-64 bg-orange-50'>
                <h1 className='flex text-xl h-24 m-3 rounded-lg bg-orange-200'>
                    <span className='m-auto text-center material-symbols-outlined basis-16'>menu</span>
                    <span className='m-auto grow'>Menu</span>
                </h1>
                <ul className='mx-3'>{listList}</ul>
            </div>
            <div className='grow'>
                <Outlet />
            </div>
        </div>
    );
}

export default Sidenav;