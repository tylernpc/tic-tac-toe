import { useState } from 'react';

function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('x');
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >{value}
        </button>
    )
}

export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
}