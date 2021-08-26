import React, { Component } from 'react';
// import Card from '../../components/cards/card'
import './index.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaGoogle, } from 'react-icons/fa';

export default class MainSlider extends Component {

    render() {
        var w = window.innerWidth;
        return (
            <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
                style={{
                    borderRadius: 15,
                    padding: w > 415 ? 15 : 5,
                    // width: "100%",
                    // background: "orange",
                }}
            >
                {
                    w > 415 ?
                        <ol class="carousel-indicators">
                            <li style={{ marginBottom: 30 }} data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li style={{ marginBottom: 30 }} data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li style={{ marginBottom: 30 }} data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        : null
                }


                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{ width: "100%", height: w > 415 ? 340 : 150, }} src={require('../../../src/assets/mainSlider.png')} />
                    </div>
                    <div class="carousel-item">
                        <img style={{ width: "100%", height: w > 415 ? 340 : 150, }} src={require('../../../src/assets/mainSlider.png')} />
                    </div>
                    <div class="carousel-item">
                        <img style={{ width: "100%", height: w > 415 ? 340 : 150, }} src={require('../../../src/assets/mainSlider.png')} />
                    </div>
                </div>

                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <div style={{ display: "flex", background: "#E5E5E5", borderRadius: 25, height: 30, width: 30, justifyContent: "center", alignItems: "center" }}>
                        <div style={{ color: "white", fontSize: 30, display: "flex", marginBottom: 5 }}>
                            &lsaquo;
                        </div>
                    </div>
                    {/* <IoIosArrowBack style={{ color: "yellow", justifyContent: "center", alignItems: "center", marginLeft: 30, cursor: 'pointer' }} /> */}
                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span> */}
                </a>

                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <div style={{ display: "flex", background: "#E5E5E5", borderRadius: 25, height: 30, width: 30, justifyContent: "center", alignItems: "center" }}>
                        <div style={{ color: "white", fontSize: 30, display: "flex", marginBottom: 5 }}>
                            &rsaquo;
                        </div>
                    </div>
                    {/* <IoIosArrowForward style={{ color: "yellow", justifyContent: "center", alignItems: "center", marginLeft: 30, cursor: 'pointer' }} /> */}
                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span> */}
                </a>
            </div>
        )
    }
}