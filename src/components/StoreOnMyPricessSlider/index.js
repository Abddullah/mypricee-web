import React, { Component } from 'react';
import './index.css';
import StoreOnMyPriceeList from '../../components/StoresOnMyStoreList/index'

export default class StoreOnMyPriceSlider extends Component {
    render() {
        var w = window.innerWidth;

        return (
            <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
                style={{ width: "100%", }}
            >
                <ol class="carousel-indicators carousel-indicators1">
                    <li style={{ marginBottom: w > 415 ? 30 : -30, }} data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li style={{ marginBottom: w > 415 ? 30 : -30, }} data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li style={{ marginBottom: w > 415 ? 30 : -30, }} data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <StoreOnMyPriceeList />
                    </div>

                    <div class="carousel-item">
                        <StoreOnMyPriceeList />
                    </div>

                    <div class="carousel-item">
                        <StoreOnMyPriceeList />
                    </div>
                </div>
            </div>
        )
    }
}