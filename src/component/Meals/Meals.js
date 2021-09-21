import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])

    return (
        <div>
            <h2>Meal DB</h2>
            <div>
                {
                    meals.map(meal => <Meal meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;