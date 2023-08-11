import React from "react";
import star from "../images/star.png"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return ( 
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} alt="activity" class="card--image"/>
            <div class="card--stats">
                <img src={star} alt="star" class="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}