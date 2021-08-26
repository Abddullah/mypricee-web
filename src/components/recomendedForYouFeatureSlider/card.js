
import React, { useState } from 'react';
import "antd/dist/antd.css";
import './index.css';

const RecomendedCard = ({ products }) => {
    console.log(products, "Product_cards")
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                // background: "green"
            }}
        >
            {
                products && products.length != 0 && products.map((key, index) => {
                    return (
                        <div
                            key={index}
                            // className="shadowAdd1"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                margin: "1%",
                                justifyContent: "center",
                                alignItems: "center",
                                // borderRadius: 15,
                                border: '2px solid #EE3A88',
                                height: 680,
                                width: "95%",
                                overflow: "hidden",
                                // backgroundColor: 'white',
                                backgroundColor: '#F6EDFF',

                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    // flex: 2,
                                    height: 40,
                                    width: '90%',
                                    alignItems: "center",
                                    // backgroundColor: 'green',
                                }}
                            >
                                <div
                                    style={{
                                        border: '2px solid #888888',
                                        borderRadius: 15,
                                        padding: 5,
                                        color: "#888888",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: 10,
                                        fontWeight: "bold",
                                        // width: 150,
                                    }}
                                >
                                    {key.categoryName}
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    height: 200,
                                    width: '90%',
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // backgroundColor: 'blue',
                                }}
                            >
                                <img style={{ width: 180, height: 180 }} src={key.imgPath} />
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: 100,
                                    width: '100%',
                                    marginTop: 5,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // backgroundColor: 'orange',
                                }}
                            >
                                <div style={{
                                    display: "flex",
                                    width: "90%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // background: "grey"
                                }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            // flex: 6,
                                            marginLeft: 5,
                                            fontSize: 12,
                                            fontWeight: "bold",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            // background: "yellow"
                                        }}
                                    >{key.title}</div>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        // flex: 3,
                                        width: "90%",
                                        marginTop: 5,
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        color: "#888888",
                                        // textAlign: "left"
                                        // background: "blue"
                                    }}
                                >
                                    {key.description}
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        // flex: 1,
                                        width: "90%",
                                        fontSize: 17,
                                        fontWeight: "bold",
                                        color: "#521C87",
                                        justifyContent: "center",
                                        alignItems: "center",
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
                                            justifyContent: "center",
                                            alignItems: "center",
                                            // background: "green"
                                        }}
                                    >
                                        Compare 2 Online Shops
                                    </div> : null
                            }


                            {
                                key.compareShops.length > 1 && key.compareShops.map((key, index) => {
                                    // console.log(key, "nestedMap")
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
                                                <img style={{ width: 100 }} src={key.logo} />
                                            </div>

                                            <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                                                <span style={{ fontWeight: "bold", color: "#888888", fontSize: 14 }}>
                                                    {key.shopName}
                                                </span>
                                                <span style={{ fontWeight: "bold", fontSize: 14 }}>
                                                    {key.stockPosition}
                                                </span>
                                            </div>

                                            <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                <span style={{ fontWeight: "bold", color: "#521C87", fontSize: 14 }}>
                                                    AED  {key.shopPrice}
                                                </span>

                                                <div style={{ width: 80, }}>
                                                    <div className="button" style={{ fontWeight: "bold", fontSize: 10, padding: 10, borderRadius: 25, color: "white", cursor: "pointer" }}>
                                                        Go To Shop
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                            <div style={{ width: 130, marginBottom: 20 }}>
                                <div className="button" style={{ fontWeight: "bold", fontSize: 10, padding: 10, borderRadius: 25, color: "white", cursor: "pointer" }}>
                                    Go To Shop
                                </div>
                            </div>

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
                                                <img style={{ width: 120, }} src={key.compareShops[0].logo} />
                                            </div>

                                            <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                                                <span style={{ fontWeight: "bold", color: "#888888", fontSize: 14 }}>
                                                    {key.compareShops[0].shopName}
                                                </span>
                                                <span style={{ fontWeight: "bold", fontSize: 14 }}>
                                                    {key.compareShops[0].stockPosition}
                                                </span>
                                            </div>
                                        </div>

                                        {/* <div style={{ display: "flex", flex: 1, marginTop: "-25%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                            <span style={{ fontWeight: "bold", color: "#521C87", fontSize: 20 }}>
                                                AED  {key.compareShops[0].shopPrice}
                                            </span>
                                            <div className="button" style={{ height: 20, width: 100, fontWeight: "bold", fontSize: 12, borderRadius: 15, color: "white", cursor: "pointer" }}>
                                                Go To Shop
                                            </div>
                                        </div> */}

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

export default RecomendedCard;
