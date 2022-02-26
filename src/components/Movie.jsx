import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Filter from './Filter';

const Movie = () => {
    const [popular, setPopular] = useState([]);
    const [filtered, setfiltered] = useState([]);
    const [activeGenre, setactiveGenre] = useState(0);
    useEffect(() => {
        fetchPopular();
    }, []);
    const fetchPopular = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=2872977bcafb084e9473dde0dbfedd42&language=en-US&page=1');
        const movies = await data.json();
        setPopular(movies.results);
        setfiltered(movies.results);
    }
    return (
        <>
            <div className='sm:container mx-auto my-5 sm:mt-10'>
                <h2 className=' text-2xl sm:text-4xl font-bold text-red-700 text-center mb-5 uppercase tracking-widest'>Popular Movies</h2>
                <Filter popular={popular} setfiltered={setfiltered} activeGenre={activeGenre} setactiveGenre={setactiveGenre} />
                <motion.div layout className='flex items-center justify-start flex-wrap gap-4 mt-4'>
                    {
                        filtered.map((movie, index) => (
                            <motion.div layout key={index} className='w-full sm:w-52 px-2'>
                                <img className='w-full h-52 border rounded-md object-cover' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                                <h2 className=' font-medium py-2 text-lg text-red-700 sm:text-xs'>{movie.title}</h2>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </>
    );
};

export default Movie;