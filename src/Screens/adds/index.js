
import React from 'react';
import "antd/dist/antd.css";
import AddsSlider from '../../components/addsSlider/index'

const Adds = () => {
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
                    height: w > 415 ? 600 : 550,
                    alignItems: "center",
                    // backgroundColor: '#F5EBFF',
                    backgroundColor: 'white',
                    // backgroundColor: 'red',
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: '95%',
                        flex: 6,
                        justifyContent: "center",
                        alignItems: "center",
                        // background: "yellow"
                    }}>
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            // flex: w > 415 ? 1 : null,
                            marginTop: 20,
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            // background: "red"
                        }}>
                        <AddsSlider id={"adds"} />
                    </div>

                    <div style={{ display: "flex", flex: 1.5, flexDirection: w > 415 ? null : "column", marginTop: 10, width: "100%", }}>

                        <div style={{ display: "flex", flex: 1, width: "100%", padding: 10, }}>
                            <img style={{ width: "100%", height: "90%" }} src={require('../../../src/assets/adds/3800970.png')} />
                        </div>

                        <div style={{ display: "flex", flex: 1, width: "100%", padding: 10, marginTop: w > 415 ? null : -20, }}>
                            <img style={{ width: "100%", height: "90%" }} src={require('../../../src/assets/adds/ad-2.png')} />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Adds;
