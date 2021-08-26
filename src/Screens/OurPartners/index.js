
import React from 'react';
// import './index.css';
import "antd/dist/antd.css";
import OurPartnerLogo from '../../components/ourPartnerLogo/index'

const OurPartners = () => {
    var w = window.innerWidth;
    return (
        <div
            style={{
                display: "flex",
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
                    minWidth: w > 415 ? 1200 : "100%",
                    height: w > 415 ? 350 : 700,
                    alignItems: "center",
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
                                        width: "16%",
                                        alignItems: "center",
                                        // backgroundColor: 'grey',
                                    }}>
                                    <img style={{ width: 20, }} src={require('../../../src/assets/our partners/009-handshake.png')} />
                                    <div style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold", color: "#521C87" }}>
                                        Our Partners
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
                            </> :
                            <div style={{ marginRight: "55%", marginTop: 10, fontSize: 15, fontWeight: "bold", color: "#521C87" }}>
                                 Our Partners
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
                        // flexWrap: "wrap",
                        // background: "yellow"
                    }}>
                    <OurPartnerLogo />
                </div>
            </div>
        </div>
    );
};

export default OurPartners;
