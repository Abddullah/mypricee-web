import React, { Component } from 'react';
// import './index.css';
import RecomendedCard from '../../components/recomendedForYouFeatureSlider/card'

export default class RecomendedForYouSlider extends Component {
    render() {
        return (
            <div id={this.props.id} class="carousel slide" data-interval="false" style={{ width: "100%", height: "100%",  }}>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <RecomendedCard products={this.props.products} />
                    </div>
                    <div class="carousel-item">
                        <RecomendedCard products={this.props.products} />
                    </div>
                    <div class="carousel-item">
                        <RecomendedCard products={this.props.products} />
                    </div>
                </div>

                <a class="carousel-control-prev" href={"#" + this.props.id} data-slide="prev" style={{}}>
                    <div data-slide="prev" style={{ display: "flex", background: "#E5E5E5", borderRadius: 0, height: 30, width: 30, justifyContent: "center", alignItems: "center" }}>
                        <div style={{ color: "white", fontSize: 30, display: "flex", marginBottom: 5 }}>
                            &lsaquo;
                        </div>
                    </div>
                </a>

                <a class="carousel-control-next" href={"#" + this.props.id} data-slide="next" style={{}}>
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