import { useState } from 'react';
import FoodData from '../../../resources/FoodData';
import FoodBox from './FoodBox';
import '../App.css'

function Search() {
    const [search, setSearch] = useState('');

    function update(e) {
        setSearch(e.target.value);
    }

    const filteredFood = FoodData.filter((food) => {
        return food.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <>
            <div>
                <h1>Nutrition App</h1>
                <input type='text' placeholder='Enter here...' value={search} onChange={update} />
                <h3>{search}</h3>
            </div>
            {
                filteredFood.map((food) => (
                    <FoodBox key={food.name} EachBox={food} search={search} />
                ))
            }        
        </>
    );
}

export default Search;
