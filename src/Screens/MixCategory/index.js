
import React from 'react';
import "antd/dist/antd.css";
import MixCatCard from '../../components/mixCatCard/index'

const MixCat = () => {
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
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: '80%',
                    // minWidth: 1200,
                    minWidth: w > 415 ? 1200 : "100%",
                    // height: 570,
                    height: w > 415 ? 570 : 800,
                    alignItems: "center",
                    // backgroundColor: '#F5EBFF',
                    backgroundColor: 'white',
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
                                        width: "14%",
                                        alignItems: "center",
                                        // backgroundColor: 'grey',
                                    }}>
                                    <img style={{ width: 20, }} src={require('../../../src/assets/Price Drops/line-chart.png')} />
                                    <div style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold", color: "#521C87" }}>
                                        Mix Category
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        width: "83%",
                                        height: 1,
                                        backgroundColor: '#DEDEDE',
                                    }}>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        width: "12%",
                                        // backgroundColor: 'blue',
                                    }}>
                                    <div style={{ fontSize: 15, marginLeft: 10, fontWeight: "bold", color: "#521C87" }}>
                                        View More
                                    </div>
                                    <img style={{ width: 25, marginLeft: 10, }} src={require('../../../src/assets/Group 369.png')} />
                                </div>
                            </> : <div style={{ marginRight: "55%", marginTop: 10, fontSize: 15, fontWeight: "bold", color: "#521C87" }}>
                                Mix Category
                                </div>
                    }
                </div>

                <div
                    style={{
                        display: "flex",
                        width: '95%',
                        flexWrap: "wrap",
                        flex: 6,
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        // background: "yellow"
                    }}
                >
                    <MixCatCard imgPath={require('../../assets/mixCatogeries/asset-9.png')} title={"Mobile Phones"} />
                    <MixCatCard imgPath={require('../../assets/mixCatogeries/asset-8.png')} title={"Sports"} />
                    <MixCatCard imgPath={require('../../assets/mixCatogeries/asset-7.png')} title={"Women's Fashion"} />
                    <MixCatCard imgPath={require('../../assets/mixCatogeries/asset-6.png')} title={"Home Appliances"} />
                    <MixCatCard imgPath={require('../../assets/mixCatogeries/asset-5.png')} title={"Video Games"} />
                    <MixCatCard imgPath={require('../../assets/mixCatogeries/asset-4.png')} title={"Computer"} />
                    <MixCatCard imgPath={require('../../assets/mixCatogeries/asset-3.png')} title={"Indoor & Outdoor Decoration"} />
                    <MixCatCard imgPath={require('../../assets/mixCatogeries/asset-2.png')} title={"Man's Fashion"} />
                    <MixCatCard imgPath={require('../../assets/mixCatogeries/asset-1.png')} title={"Automobile Parts"} />
                    <MixCatCard imgPath={require('../../assets/mixCatogeries/341429-PA987E-458.png')} title={"Books"} />
                </div>
            </div>
        </div>
    );
};

export default MixCat;
