import React from 'react';
import { Link } from 'react-router-dom';

const ItemShow = ({ item }) => {
    const { _id, name, recipe, image, price } = item;
    return (
        <div className='flex gap-3'>
            <img className='w-28 rounded-e-full rounded-bl-full' src={image} alt="" />
            <div className='flex w-full gap-4 justify-between space-y-2'>
                <div>
                    <Link to=""><h2 className='font-semibold'>{name}</h2></Link>
                    <p className='text-sm'>{recipe}</p>
                </div>
                <h5 className='text-warning font-semibold'>₹{price}</h5>
            </div>
        </div>
    );
};

export default ItemShow;