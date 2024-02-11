import React from 'react';
import ListDisplay from '../ui/ListDisplay';

function Tasks({ pending, setPending, completed, setCompleted }) {

    return (
        <ListDisplay
            pending={pending}
            setPending={setPending}
            completed={completed}
            setCompleted={setCompleted}
            flags={null}
        />
    );
}

export default Tasks;