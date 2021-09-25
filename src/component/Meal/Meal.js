import React from 'react';
import './Meal.css';

const Meal = (props) => {
    //console.log(props.meal);
    const { strMeal, strCategory, price, strMealThumb, strInstructions } = props.meal

    return (
        <div className="meal-box-style">
            <div>
                <img className="meal-Picture-style" src={strMealThumb} alt="" sizes="" srcset="" />
            </div>
            <div className="meal-detals">
                <h3> Name : {strMeal}</h3>
                <h5>Category : {strCategory}</h5>
                <p>{strInstructions.slice(0, 100)}</p>
                <h5>Price : {price}</h5>
                <button>Add To Card</button>
                <button>Detals</button>
            </div>
            {/* <div className="btn-section">
                <button>Add To Card</button>
                <button>Detals</button>
            </div> */}
        </div>
    );
};

export default Meal;