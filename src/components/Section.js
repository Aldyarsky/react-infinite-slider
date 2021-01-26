import { React, Component } from "react";
import data from "../data.json";
import Carousel from "./Carousel";

import './Section.css';


function Section(props) {
    return (
        <div className="section">
            <h1>{props.title}</h1>
            <Carousel restaurants={props.restaurants} current={props.current}></Carousel>
            {/* <span className="carousel-left"></span>
                <span className="carousel-right" onClick={this.nextSlide}></span> */}
        </div>
    );
}

export default Section;