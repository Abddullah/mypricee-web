import React, { Component } from 'react';
// import './index.css';
// import ProductCard from '../../components/cards/productCard'

export default class AddsSlider extends Component {
    render() {
        var w = window.innerWidth;
        return (
            <div id={this.props.id} class="carousel slide" data-interval="false" style={{ width: "99%", }}>

                <div class="carousel-inner" >
                    <div class="carousel-item active">
                        <img style={{ width: "100%", height: w > 415 ? null : 150, }} src={require('../../../src/assets/adds/Group 369.png')} />
                    </div>
                    <div class="carousel-item">
                        <img style={{ width: "100%", height: w > 415 ? null : 150, }} src={require('../../../src/assets/adds/Group 369.png')} />
                    </div>
                    <div class="carousel-item">
                        <img style={{ width: "100%", height: w > 415 ? null : 150, }} src={require('../../../src/assets/adds/Group 369.png')} />
                    </div>
                </div>

                <a class="carousel-control-prev" href={"#" + this.props.id} data-slide="prev" style={{ marginLeft: w > 415 ? -60 : null, }}>
                    <div data-slide="prev" style={{ display: "flex", background: "#E5E5E5", borderRadius: 0, height: 30, width: 30, justifyContent: "center", alignItems: "center" }}>
                        <div style={{ color: "white", fontSize: 30, display: "flex", marginBottom: 5 }}>
                            &lsaquo;
                        </div>
                    </div>
                </a>

                <a class="carousel-control-next" href={"#" + this.props.id} data-slide="next" style={{ marginRight: w > 415 ? -60 : null, }}>
                    <div data-slide="next" style={{ display: "flex", background: "#E5E5E5", borderRadius: 0, height: 30, width: 30, justifyContent: "center", alignItems: "center" }}>
                        <div style={{ color: "white", fontSize: 30, display: "flex", marginBottom: 5 }}>
                            &rsaquo;
                        </div>
                    </div>
                </a>

            </div>
        )
    }
}