import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import '../scss/Slider.scss';

const  Slider = (props) => {

    const [state, setState] = useState({activeIndex: 0, items: Array(props.data.length).fill(null).map(e => { return { className: ''} })});

    const carouselItem = function (slide, index) {
        return (
            <Carousel.Item key={index.toString()} className={state.items[index].className}>
                <img
                    className="d-block w-100"
                    src={slide.src}
                    alt="First slide"
                />
                <Carousel.Caption>
                    {("title" in slide && slide.title !== "") ? <h1>{slide.title}</h1> : ""}
                    {("description" in slide && slide.description !== "") ? <p>{slide.description}</p> : ""}
                </Carousel.Caption>
            </Carousel.Item>
        );
    }

    const onSlide = (eventKey, direction) => {
        const { items, activeIndex } = state;
        items[activeIndex].className = [(activeIndex > eventKey ? 'carousel-item-right' : 'carousel-item-left') ].join(' ');
        items[eventKey].className = ['carousel-item-next',(activeIndex > eventKey ? 'carousel-item-left' : 'carousel-item-right') ].join(' ');
        setState({ activeIndex, items });
    }

    const onSlid = (eventKey, direction) => {
        const { items, activeIndex } = state;
        items[eventKey].className = '';
        items[activeIndex].className = '';
        setState({activeIndex: eventKey, items });
        // const timer = setTimeout(() => {
        //     clearTimeout(timer);
        // }, 250);
    }

    return (
        <Carousel controls={false} slide={true} className="mh-100" onSlide={onSlide} onSlid={onSlid} >
            { props.data.map(carouselItem) }
        </Carousel>
    )
}

export default Slider;