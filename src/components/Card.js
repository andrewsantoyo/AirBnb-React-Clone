import React from "react";
import star from "../images/star.png"

export default function Card(props) {
    return ( 
        <div className="card">
            <img src={props.img} alt="activity" class="card--image"/>
            <div class="card--stats">
                <img src={star} alt="star" class="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}