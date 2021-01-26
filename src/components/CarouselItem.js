import React from 'react';
import { Blurhash } from "react-blurhash";

import "./CarouselItem.css";


function CarouselItem(props) {
    return (
        <div className={" carouselItem"} >
            <div className="title">
                <h2>{props.name}</h2>
                <span className={props.online ? "online" : "offline"}>{props.online ? "online" : "offline"}</span>
            </div>
            <Blurhash
                className="image"
                hash={props.blurhash}
                width={400}
                height={250}
                resolutionX={32}
                resolutionY={32}
                punch={1}
            />
        </div>
    )
}

export default CarouselItem;