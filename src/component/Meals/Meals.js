import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('./utilytis/fackData.JSON')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])



    return (
        <div>
            <div className="grid-style">

                {
                    meals.map(meal => <Meal meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;