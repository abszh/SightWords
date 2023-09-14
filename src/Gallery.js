import Item from './Item';
import { useState } from 'react';

export default function Gallery({ words, color }) {
    const [index, setIndex] = useState(0);

    function setNewIndex(newIndex) {
        newIndex = newIndex % words.length;
        if (newIndex < 0) {
            newIndex += words.length;
        }

        setIndex(newIndex);
    }

    return (
        <>
            <button className="btn btn-primary m-1" onClick={() => setNewIndex(index - 1)}>Previous</button>
            <button className="btn btn-primary m-1" onClick={() => setNewIndex(index + 1)}>Next</button>
            <Item text={words[index]} color={color} onClick={() => setNewIndex(index + 1)} />
            <div>{index + 1}</div>
        </>
    )
}
