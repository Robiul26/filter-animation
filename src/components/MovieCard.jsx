import { motion } from 'framer-motion';
import React from 'react';

const MovieCard = ({ movie, index }) => {
    return (
        <motion.div layout key={index} className=' w-52'>
            <h2 className=' font-medium py-2 text-xs'>{movie.title}</h2>
            <img className='w-full h-52 border rounded-md object-cover' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        </motion.div>
    );
};

export default MovieCard;