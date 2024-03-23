import React, { useState } from 'react';
import '../App.css';

const FoodBox = (props) => {
    const { EachBox = {} } = props;
    const { name, cal, img } = EachBox;

    let [count, setCount] = useState('');
    let [quantity, setQuantity] = useState(0);

    function updateCalories() {
        setQuantity(Number(count));
    }

    function resetIt() {
        setCount('');
        setQuantity(0);
    }

    return (
        <div className='food-box'>
            <div className='food-details'>
                <div className='image-container'>
                    <img className='image' src={img} alt={name} />
                </div>
                <div>
                    <p className='food-name'>{name}</p>
                    <p className='food-cal'>{cal} cal</p>
                </div>
                <div className='inp'>
                    <input 
                        type='number' 
                        placeholder='Enter quantity' 
                        value={count} 
                        onChange={(e) => setCount(e.target.value)} 
                    />
                    <button onClick={updateCalories}>+</button>
                </div>
            </div>
            
            <div className='result-container'>
                <span>{quantity} {name} <span className='equal-to'>=</span> </span> 
                <span>{quantity > 0 ? quantity * cal + ' calories' : '0 calories'}</span>
                <button onClick={resetIt}>Reset</button>
            </div>
        </div>
    );
}

export default FoodBox;
