
import React, { useState } from 'react';
import "antd/dist/antd.css";
import './index.css';

const ProductCardMobileView = ({ products, feature, deal, pinkBackgroud }) => {
    // console.log(products, "Product_cards")
    return (
        <div style={{ display: "flex", width: "100%", margin: 10, flexDirection: "row", }}>
            {
                products && products.length != 0 && products.map((key, index) => {
                    return (
                        <div
                            key={index}
                            className="shadowAdd1"
                            style={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                margin: "1%",
                                // justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 15,
                                height: 380,
                                width: 180,
                                overflow: "hidden",
                                backgroundColor: pinkBackgroud ? "#F5EBFF" : "white",
                            }}>

                            <div
                                style={{
                                    display: "flex",
                                    height: 35,
                                    width: '90%',
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    // backgroundColor: 'green',
                                }}>
                                <div
                                    style={{
                                        border: '2px solid #888888',
                                        borderRadius: 15,
                                        padding: 5,
                                        color: "#888888",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: 8,
                                        fontWeight: "bold",
                                        // width: 150,
                                    }}>
                                    {key.categoryName.substring(0, 35)}
                                </div>
                                {
                                    deal ?
                                        <div
                                            style={{
                                                borderRadius: 15,
                                                padding: 5,
                                                color: "white",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                fontSize: 8,
                                                fontWeight: "bold",
                                                background: "#EE3A88"
                                                // width: 150,
                                            }}>
                                            50% OFF
                                        </div>
                                        : null
                                }
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    height: 100,
                                    width: '90%',
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // backgroundColor: 'blue',
                                }}
                            >
                                <img style={{ width: 80, height: 80 }} src={key.imgPath} />
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: 70,
                                    width: '100%',
                                    marginTop: 5,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // backgroundColor: 'orange',
                                }}>

                                <div
                                    style={{
                                        display: "flex",
                                        width: "90%",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        // background: "grey"
                                    }}>
                                    {
                                        feature ?
                                            <>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flex: 1.5,
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        borderRadius: 15,
                                                        border: '1px solid #521C87',
                                                        fontSize: 12,
                                                        fontWeight: "bold",
                                                        color: "#888888"
                                                        // background: "green"
                                                    }}>
                                                    Ad
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flex: 6,
                                                        marginLeft: 5,
                                                        fontSize: 12,
                                                        fontWeight: "bold",
                                                        // background: "yellow"
                                                    }}>
                                                    {key.title.substring(0, 15)}
                                                </div>
                                            </>
                                            : <div
                                                style={{
                                                    display: "flex",
                                                    flex: 6,
                                                    // marginLeft: 5,
                                                    fontSize: 12,
                                                    fontWeight: "bold",
                                                    // background: "yellow"
                                                }}>
                                                {key.title.substring(0, 15)}
                                            </div>
                                    }
                                </div>

                                <div
                                    className="block-with-text"
                                    style={{
                                        fontSize: 10,
                                        fontWeight: "bold",
                                        textAlign: "left",
                                        // background: "yellow"
                                    }}>
                                    {key.description}
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        flex: 1,
                                        width: "90%",
                                        fontSize: 17,
                                        fontWeight: "bold",
                                        color: "#521C87",
                                        // background: "grey"
                                    }}
                                >
                                    AED {key.price}
                                </div>

                            </div>

                            {
                                key.compareShops.length > 1 ?
                                    <div
                                        style={{
                                            display: "flex",
                                            width: "90%",
                                            fontSize: 11,
                                            fontWeight: "bold",
                                            color: "#888888",
                                            // background: "green"
                                        }}
                                    >
                                        Compare 2 Online Shops
                                    </div> : null
                            }


                            {
                                key.compareShops.length > 1 && key.compareShops.map((key, index) => {
                                    console.log(key, "nestedMap")
                                    return (
                                        <div key={index}
                                            style={{
                                                display: "flex",
                                                flex: 1,
                                                width: '100%',
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // backgroundColor: 'grey',
                                            }}
                                        >
                                            <div style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                <img style={{ width: 60, }} src={key.logo} />
                                            </div>
                                            {/* <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                                                <span style={{ fontWeight: "bold", color: "#888888", fontSize: 10 }}>
                                                    {key.shopName}
                                                </span>
                                                <span style={{ fontWeight: "bold", fontSize: 10 }}>
                                                    {key.stockPosition}
                                                </span>
                                            </div> */}
                                            <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                <span style={{ fontWeight: "bold", color: "#521C87", fontSize: 10 }}>
                                                    AED  {key.shopPrice}
                                                </span>
                                                <div className="button" style={{ fontWeight: "bold", fontSize: 8, padding: 5, borderRadius: 15, color: "white", cursor: "pointer" }}>
                                                    Go To Shop
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            {
                                key.compareShops.length == 1 ?
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            flex: 1,
                                            width: '100%',
                                            justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: 'grey',
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flex: 1,
                                                width: '100%',
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // backgroundColor: 'grey',
                                            }}
                                        >


                                            <div style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                <img style={{ width: 80, }} src={key.compareShops[0].logo} />
                                            </div>

                                            <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                                                <span style={{ fontWeight: "bold", color: "#888888", fontSize: 10 }}>
                                                    {key.compareShops[0].shopName}
                                                </span>
                                                <span style={{ fontWeight: "bold", fontSize: 10 }}>
                                                    {key.compareShops[0].stockPosition}
                                                </span>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", flex: 1, marginTop: "-25%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                            <span style={{ fontWeight: "bold", color: "#521C87", fontSize: 20 }}>
                                                AED  {key.compareShops[0].shopPrice}
                                            </span>
                                            <div className="button" style={{ height: 20, width: 100, fontWeight: "bold", fontSize: 12, borderRadius: 15, color: "white", cursor: "pointer" }}>
                                                Go To Shop
                                            </div>
                                        </div>
                                    </div>
                                    : null
                            }

                        </div>
                    )
                })
            }
        </div >
    );
};

export default ProductCardMobileView;
