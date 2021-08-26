import React, { Component } from 'react';
import Card from '../../components/cards/card'
import './index.css';

export default class CardSlider extends Component {
    render() {
        var w = window.innerWidth;
        return (
            <div
                id="carouselExampleIndicators"
                class="carousel slide shadowAdd"
                data-ride="carousel"
                style={{
                    marginTop: w > 415 ? null : 10,
                    height: w > 415 ? null : 350,
                    width: w > 415 ? null : "85%",
                    borderRadius: 15,
                    padding: 15,
                    // background: "green",
                }}
            >
                <ol class="carousel-indicators" >
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                {/* slide */}
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <Card />
                    </div>
                    <div class="carousel-item">
                        <Card />
                    </div>
                    <div class="carousel-item">
                        <Card />
                    </div>
                </div>

                {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a> */}

            </div>




        )
    }
}
