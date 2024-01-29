import React from 'react';
import ListDisplay from '../ui/ListDisplay.jsx';


function Important({ pending, setPending, completed, setCompleted }) {

    return (
        <ListDisplay
            pending={pending}
            setPending={setPending}
            completed={completed}
            setCompleted={setCompleted}
            flags={'important'}
        />
    );
}

export default Important;