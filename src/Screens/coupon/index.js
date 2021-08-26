
import React from 'react';
// import './index.css';
import "antd/dist/antd.css";
import CouponSlider from '../../components/coupon/index'
import CouponsForMobileView from '../../components/coupons/index'

const Coupons = () => {

    let coupon = [
        {
            imgPath: require("../../assets/coupons/carrefour.png"),
            shopName: "Carrefour",
            description: "20% Off coupon from Carrefour",
        },
        {
            imgPath: require("../../assets/coupons/amazon.png"),
            shopName: "Amazon",
            description: "20% Off coupon from Amazon",
        },
        {
            imgPath: require("../../assets/coupons/Logo-Samsung.png"),
            shopName: "Samsung",
            description: "20% Off coupon from Samsung",
        },
        {
            imgPath: require("../../assets/coupons/carrefour.png"),
            shopName: "Carrefour",
            description: "20% Off coupon from Carrefour",
        },
        {
            imgPath: require("../../assets/coupons/Samaa3a-logo.png"),
            shopName: "Samaa3a",
            description: "20% Off coupon from Samaa3a",
        },
        {
            imgPath: require("../../assets/coupons/maxresdefault.png"),
            shopName: "Baby Store",
            description: "20% Off coupon from Baby Store",
        },
        {
            imgPath: require("../../assets/coupons/carrefour.png"),
            shopName: "Carrefour",
            description: "20% Off coupon from Carrefour",
        },
    ]
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
                    height: w > 415 ? 300 : 200,
                    alignItems: "center",
                    backgroundColor: 'white',
                    // backgroundColor: 'red',

                }}
            >
                <div
                    style={{
                        display: "flex",
                        flex: 1,
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
                                    <img style={{ width: 20, }} src={require('../../../src/assets/coupons/coupon.png')} />
                                    <div style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold", color: "#521C87" }}>
                                        Coupons
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
                            <div style={{ marginRight: "70%", marginTop: 10, fontSize: 15, fontWeight: "bold", color: "#521C87", }}>
                                Coupons
                            </div>
                    }
                </div>

                {
                    w > 415 ?
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
                            <CouponSlider coupon={coupon} id={"coupons"} />
                        </div> :
                        <div class="scrolling-wrapper2">
                            <CouponsForMobileView coupon={[coupon[0]]} />
                            <CouponsForMobileView coupon={[coupon[1]]} />
                            <CouponsForMobileView coupon={[coupon[2]]} />
                            <CouponsForMobileView coupon={[coupon[3]]} />
                            <CouponsForMobileView coupon={[coupon[4]]} />
                        </div>
                }

            </div>
        </div >
    );
};

export default Coupons;
