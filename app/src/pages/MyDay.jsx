import React from 'react';
import ListDisplay from '../ui/ListDisplay.jsx';

function MyDay({ pending, setPending, completed, setCompleted }) {

    return (
        <ListDisplay
            pending={pending}
            setPending={setPending}
            completed={completed}
            setCompleted={setCompleted}
            flags={'myday'}
            isImportant={false}
            isMyDay={true}
        />
    );
}

export default MyDay;