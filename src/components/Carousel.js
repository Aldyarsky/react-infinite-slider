import { React, useState, Component, createRef } from 'react';
import CarouselItem from "./CarouselItem";
import Slider from 'infinite-react-carousel';

import './Carousel.css';


class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { restaurants: props.restaurants }
    }
    render() {
        const settings = {
            slidesToShow: 3,
            dots: true,
            wheel: true,
            className: ""
        };
        return (
            <div className="carousel-container">
                <Slider {...settings}>
                    {
                        this.state.restaurants.map((restaurant, index) => {
                            if (index === this.state.current) {
                                return <CarouselItem
                                    name={restaurant.name}
                                    online={restaurant.online}
                                    blurhash={restaurant.blurhash}
                                />
                            } else {
                                return <CarouselItem
                                    name={restaurant.name}
                                    online={restaurant.online}
                                    blurhash={restaurant.blurhash}
                                />
                            }
                        })
                    }
                </Slider>
            </div>
        )
    }
}
export default Carousel;