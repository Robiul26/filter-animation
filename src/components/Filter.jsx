import React, { useEffect, useState } from 'react';

const Filter = ({ popular, setfiltered, activeGenre, setactiveGenre }) => {
    useEffect(() => {
        if (activeGenre === 0) {
            setfiltered(popular);
            return;
        }
        const filtered = popular.filter(movie => movie.genre_ids.includes(activeGenre));
        setfiltered(filtered);
    }, [activeGenre]);
    return (
        <>
            <div className=' flex items-start gap-2 flex-wrap px-2'>
                <button onClick={() => setactiveGenre(0)} className={`${activeGenre === 0 ? 'btn-active' : 'btn'}`}>All</button>
                <button onClick={() => setactiveGenre(28)} className={`${activeGenre === 28 ? 'btn-active' : 'btn'}`}>Action</button>
                <button onClick={() => setactiveGenre(12)} className={`${activeGenre === 12 ? 'btn-active' : 'btn'}`}>Adventure</button>
                <button onClick={() => setactiveGenre(35)} className={`${activeGenre === 35 ? 'btn-active' : 'btn'}`}>Comedy</button>
            </div>
        </>
    );
};

export default Filter;