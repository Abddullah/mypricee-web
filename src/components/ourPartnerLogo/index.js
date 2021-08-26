import React, { Component } from 'react';
// import './index.css';

export default class OurPartnerLogo extends Component {
    render() {
        var w = window.innerWidth;
        return (
            <div>
                <div style={{ display: "flex", flexDirection: w > 415 ? null : "column", }}>
                    <img style={{ width: 220, margin: 10, cursor: "pointer" }} src={require('../../../src/assets/our partners/logo_40.png')} />
                    <img style={{ width: 220, margin: 10, cursor: "pointer" }} src={require('../../../src/assets/our partners/maxresdefault (1).png')} />
                    <img style={{ width: 220, margin: 10, cursor: "pointer" }} src={require('../../../src/assets/our partners/GULF-NEWS.png')} />
                    <img style={{ width: 220, margin: 10, cursor: "pointer" }} src={require('../../../src/assets/our partners/aa8a6df2ab7189d3b32839ea9e46a824-seo-image.png')} />
                    <img style={{ width: 220, margin: 10, cursor: "pointer" }} src={require('../../../src/assets/our partners/The-National-UAE.png')} />
                </div>

                {/* <div style={{ display: "flex", width: "100%", height: 40, justifyContent: "center", alignItems: "center", marginTop: 30, background: "#EB3A88", }}>
                    <div style={{ display: "flex", width: "95%", height: 40, justifyContent: "space-between", alignItems: "center", color: "white", fontWeight: "bold", background: "#EB3A88", }}>
                        <div>
                            Terms And Conditions
                        </div>
                        <div>
                            <img style={{ width: 25, cursor: "pointer" }} src={require('../../../src/assets/our partners/Group 370.png')} />
                        </div>
                    </div>
                </div> */}

            </div>
        )
    }
}