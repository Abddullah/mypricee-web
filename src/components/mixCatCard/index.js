import React, { Component } from 'react';

export default class MixCatCard extends Component {
    render() {
        var w = window.innerWidth;
        return (
            <div style={{ width: w > 415 ? 200 : 120, height: w > 415 ? 200 : 120, margin: 10, borderRadius: 25, position: "relative", }}>
                <img style={{ width: "100%", height: "100%" }} src={this.props.imgPath} />

                <div style={{
                    display: "flex",
                    position: "absolute",
                    bottom: 0,
                    height: w > 415 ? 60 : 35,
                    width: "100%",
                    borderBottomRightRadius: w > 415 ? 20 : 15,
                    borderBottomLeftRadius: w > 415 ? 20 : 15,
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontWeight: "bold",
                    background: "#521C87",
                    fontSize: w > 415 ? null : 10,
                }}>
                    {this.props.title}
                </div>
            </div>
        )
    }
}