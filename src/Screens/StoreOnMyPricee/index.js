
import React from 'react';
import './index.css';
import "antd/dist/antd.css";
import StoreOnMyPriceSlider from '../../components/StoreOnMyPricessSlider/index'
import { Gradient } from 'react-gradient';
const gradients = [
    ['#993492', '#E83988'],
];

const StoreOnMyPricee = () => {
    var w = window.innerWidth;
    return (
        <div
            style={{
                display: "flex",
                // minWidth: 1200,
                minWidth: w > 415 ? 1200 : "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#F7F7FA',
                // backgroundColor: 'red',
            }}
        >
            <Gradient
                gradients={gradients}
                property="background"
                duration={4000}
                angle="45deg"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: '80%',
                    // minWidth: 1200,
                    minWidth: w > 415 ? 1200 : "100%",
                    // height: 570,
                    height: w > 415 ? 570 : 330,
                    alignItems: "center",
                    // backgroundColor: '#F5EBFF',
                    // backgroundColor: 'red',

                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: '80%',
                        // minWidth: 1200,
                        minWidth: w > 415 ? 1200 : "100%",
                        // height: 570,
                        height: w > 415 ? 570 : 330,
                        alignItems: "center",
                        // backgroundColor: '#F5EBFF',
                        // backgroundColor: 'red',
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            // flex: 1,
                            flex: w > 415 ? 1 : null,
                            width: '95%',
                            justifyContent: "center",
                            alignItems: "center",
                            // backgroundColor: 'red',
                        }}
                    >
                        {
                            w > 415 ?
                                <>
                                    <div
                                        style={{
                                            display: "flex",
                                            width: "18%",
                                            alignItems: "center",
                                            // backgroundColor: 'grey',
                                        }}
                                    >
                                        <img style={{ width: 22, }} src={require('../../../src/assets/001-shop.png')} />
                                        <div style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold", color: "white" }}>
                                            Stores on My Pricee
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            width: "75%",
                                            height: 1,
                                            backgroundColor: '#FFFFFF',
                                            // backgroundColor: 'red',
                                        }}>
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            width: "12%",
                                            // backgroundColor: 'blue',
                                        }}>
                                        <div style={{ fontSize: 15, marginLeft: 10, fontWeight: "bold", color: "white" }}>
                                            View More
                                        </div>
                                        <img style={{ width: 25, marginLeft: 10, }} src={require('../../../src/assets/myprice_white_icon.png')} />
                                    </div>
                                </> :
                                <div style={{ marginRight: "55%", marginTop: 10, fontSize: 15, fontWeight: "bold", color: "#521C87" }}>
                                    Stores on My Pricee
                                </div>
                        }

                    </div>

                    <div
                        style={{
                            display: "flex",
                            width: '95%',
                            flex: 6,
                            justifyContent: "center",
                            alignItems: "center",
                            // background: "yellow"
                        }}
                    >
                        <StoreOnMyPriceSlider />
                    </div>

                </div>
            </Gradient>
        </div>
    );
};

export default StoreOnMyPricee;
