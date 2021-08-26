import React, { Component } from 'react';
import { BiFontSize } from 'react-icons/bi';
import './index.css';

export default class Categories extends Component {

    render() {
        var w = window.innerWidth;
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: w > 415 ? 100 : null,
                    cursor: "pointer",
                    margin: w > 415 ? null : 10,
                }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 40,
                            width: w > 415 ? 80 : 40,
                            height: w > 415 ? 80 : 40,
                            border: '2px solid #521C87',
                            background: "white",
                        }}
                    >
                        <img
                            style={{
                                width: w > 415 ? 76 : 60,
                                height: w > 415 ? 76 : 60,
                            }}
                            src={this.props.path} />
                    </div>

                    <div
                        style={{
                            color: "#521C87",
                            fontWeight: "bold",
                            marginTop: 10,
                            fontSize: w > 415 ? null : 12,
                        }}>
                        {this.props.catName}
                    </div>
                </div>


            </div >
        )
    }
}
