import React, { Component } from 'react';
import './index.css';
import Coupons from '../../components/coupons/index'

export default class Coupon extends Component {
    render() {
        return (
            <div id={this.props.id} class="carousel slide" data-interval="false" style={{ width: "100%", }}>

                <div class="carousel-inner" >
                    <div class="carousel-item active">
                        <Coupons coupon={this.props.coupon} />
                    </div>
                    <div class="carousel-item">
                        <Coupons coupon={this.props.coupon} />
                    </div>
                    <div class="carousel-item">
                        <Coupons coupon={this.props.coupon} />
                    </div>
                </div>

                <a class="carousel-control-prev" href={"#" + this.props.id} data-slide="prev" style={{ marginLeft: -60 }}>
                    <div data-slide="prev" style={{ display: "flex", background: "#E5E5E5", borderRadius: 0, height: 30, width: 30, justifyContent: "center", alignItems: "center" }}>
                        <div style={{ color: "white", fontSize: 30, display: "flex", marginBottom: 5 }}>
                            &lsaquo;
                        </div>
                    </div>
                </a>

                <a class="carousel-control-next" href={"#" + this.props.id} data-slide="next" style={{ marginRight: -48 }}>
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