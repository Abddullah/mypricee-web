
import React, { useState } from 'react';
import "antd/dist/antd.css";
import { BiFontSize } from 'react-icons/bi';

const Card = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                // flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
                // height: 33,
                overflow: "hidden",
            }}
        >

            <div
                style={{
                    display: "flex",
                    flex: 2,
                    width: '90%',
                    // borderRadius: 15,
                    // justifyContent: "center",
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
                        fontSize: 12,
                        fontWeight: "bold",
                        width: 150,
                    }}
                >
                    #1 in Smart Phones
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flex: 4,
                    width: '90%',
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: 'blue',
                }}
            >

                <div style={{
                    display: "flex",
                    flex: 3,
                    // background: "red"
                }}>
                    <img style={{ width: 80, height: 120 }} src={require('../../../src/assets/samsungmobile.png')} />
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 6,
                    marginLeft: "3%",
                    // background: "green"
                }}>
                    <div style={{ fontWeight: "bold", textAlign: "left" }}>
                        Samsung Ultra 20
                    </div>
                    <div style={{ color: "grey", textAlign: "left" }}>
                        Apple iPhone 11 Smartphone <br />
                        LTE with FaceTime,<br />
                        128 GB, Green<br />
                    </div>
                    <div style={{ color: "#521C87", fontWeight: "bold", textAlign: "left" }}>
                        AED 3000
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flex: 2,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: 'green',
                }}
            >
                <div style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <img style={{ width: 80, }} src={require('../../../src/assets/Mask Group 2.png')} />
                </div>
                <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ fontWeight: "bold", color: "#888888", fontSize: 10 }}>
                        Amazon AE
                    </span>
                    <span style={{ fontWeight: "bold", fontSize: 10 }}>
                        Available
                    </span>
                </div>
                <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ fontWeight: "bold", color: "#521C87", fontSize: 10 }}>
                        AED 3000
                    </span>
                    <div style={{ fontWeight: "bold", fontSize: 9, padding: 5, borderRadius: 7, background: "#521C87", color: "white" }}>
                        Go To Shop
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flex: 2,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: 'green',
                }}
            >
                <div style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <img style={{ width: 80, }} src={require('../../../src/assets/Mask Group 2.png')} />
                </div>
                <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ fontWeight: "bold", color: "#888888", fontSize: 10 }}>
                        Amazon AE
                    </span>
                    <span style={{ fontWeight: "bold", fontSize: 10 }}>
                        Available
                    </span>
                </div>
                <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ fontWeight: "bold", color: "#521C87", fontSize: 10 }}>
                        AED 3000
                    </span>
                    <div style={{ fontWeight: "bold", fontSize: 9, padding: 5, borderRadius: 7, background: "#521C87", color: "white" }}>
                        Go To Shop
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flex: 2,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: 'green',
                }}
            >
                <div style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <img style={{ width: 80, }} src={require('../../../src/assets/Mask Group 2.png')} />
                </div>
                <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ fontWeight: "bold", color: "#888888", fontSize: 10 }}>
                        Amazon AE
                    </span>
                    <span style={{ fontWeight: "bold", fontSize: 10 }}>
                        Available
                    </span>
                </div>
                <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ fontWeight: "bold", color: "#521C87", fontSize: 10 }}>
                        AED 3000
                    </span>
                    <div style={{ fontWeight: "bold", fontSize: 9, padding: 5, borderRadius: 7, background: "#521C87", color: "white" }}>
                        Go To Shop
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
