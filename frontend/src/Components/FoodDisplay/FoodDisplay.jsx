import React, {useContext} from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import Fooditem from "../FoodItem/Fooditem";

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);
  return (
  <div className="food-display" id="food-display">
    <h2>Top dishes near you</h2>
    <div className="food-display-list">
        {food_list.map((item,index)=>{
            return <Fooditem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={category}  />
        })}
    </div>
  </div>
  );
};

export default FoodDisplay;
