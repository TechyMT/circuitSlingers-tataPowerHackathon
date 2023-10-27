import React from "react";
import Card from "./Card";

const FourCards = (props) => {
    return (
    <div className="px-20 pt-10 pb-10 w-full grid grid-cols-2 gap-6">
            <Card width={ props.w } />
        <Card width={ props.w }/>
        <Card width={ props.w }/>
        <Card width={ props.w }/>
     </div> 
    )
}

export default FourCards;