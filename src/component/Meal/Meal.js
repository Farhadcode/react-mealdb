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
                <h2>{strMeal}</h2>
                <p>Category : {strCategory}</p>
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