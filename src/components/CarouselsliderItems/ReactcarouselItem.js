import React from "react";


const ReactcarItem = ({imageItems}) => {
    const {img} = imageItems;
    return (
        <div className="item">
           <div className="shadoweff"></div>
           <p>Pick Your Dish</p>
            <img src={img} alt="" srcet="" className="img-circle" />
        </div>
    )
}


export default ReactcarItem;