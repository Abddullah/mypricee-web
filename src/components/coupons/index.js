import React, { Component } from 'react';

export default class Coupons extends Component {
    render() {
        var w = window.innerWidth;
        return (
            <div style={{ display: "flex", flexDirection: "row" }} >
                {
                    this.props.coupon.map((key, index) => {
                        return (
                            <div key={index} style={{ display: "flex", cursor: "pointer", flexDirection: "column", width: 150, height: 150, margin: 10, borderRadius: 25, justifyContent: "center", alignItems: "center", background: index % 2 == 0 ? "#EE3A88" : "#521C87" }}>

                                <div style={{ display: "flex", borderRadius: 40, width: 70, height: 70, justifyContent: "center", alignItems: "center", background: "white" }}>
                                    <img style={{ width: 50, }} src={key.imgPath} />
                                </div>
                                <div style={{ color: "white", fontSize: 10, fontWeight: "bold", marginTop: 5 }}>
                                    {key.shopName}
                                </div>

                                <div style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", width: "60%", fontSize: w > 415 ? 10 : 8, fontWeight: "bold", }}>
                                    {key.description}
                                </div>

                                <div style={{ color: "white", width: "60%", fontSize: 8, marginTop: 0 }}>
                                    View Products
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}