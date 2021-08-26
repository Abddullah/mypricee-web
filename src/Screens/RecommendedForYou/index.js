
import React, { useEffect } from 'react';
// import './index.css';
import "antd/dist/antd.css";
// import ProductCard from '../../components/cards/productCard'
import RecomendedForYouSlider from '../../components/recomendedForYouFeatureSlider/index'
import SmallSlider from '../../components/recomendedForYouFeatureSlider/smallSlider'
import ProductCardMobileView from '../../components/cards/productCardMobileView'
import { useSelector } from 'react-redux'

const RecomenderForYou = () => {
    const popProduct = useSelector(({ product }) => product.popProducts);
    console.log(popProduct, "RecomendedForYou")

    let products = [
        {
            categoryName: "Similar to Apple iWatch 40mm Space Grey",
            imgPath: require('../../assets/productImg/asset-1.png'),
            title: "Smart Watch",
            description: "Huawei Watch GT active 40 MM Size",
            price: "3000",
            compare: "Compare 1 Online Shops",
            compareShops: [
                {
                    logo: require('../../assets/Mask Group 2.png'),
                    shopName: "Amazon AE",
                    stockPosition: "Available",
                    shopPrice: "3000"
                },
                {
                    logo: require('../../assets/Mask Group 3.png'),
                    shopName: "Samsung Store",
                    stockPosition: "Out Of Stock",
                    shopPrice: "2900"
                },
                {
                    logo: require('../../assets/Mask Group 4.png'),
                    shopName: "Huawei",
                    stockPosition: "Available",
                    shopPrice: "3050"
                }
            ]
        },
    ]

    let recomendedProductS1 = [
        {
            categoryName: "#1 in Smart Phones",
            imgPath: require("../../assets/recomendedforyou/1.png"),
            title: "iPhone X",
            description: "Apple iPhone 11 Smartphone LTE  ",
            price: "3000",
            compare: "Compare 3 Online Shops",
            compareShops: [
                {
                    logo: require('../../assets/Mask Group 2.png'),
                    shopName: "Amazon AE",
                    stockPosition: "Available",
                    shopPrice: "3000"
                },
                {
                    logo: require('../../assets/Mask Group 3.png'),
                    shopName: "Samsung Store",
                    stockPosition: "Out Of Stock",
                    shopPrice: "2900"
                },
                {
                    logo: require('../../assets/Mask Group 4.png'),
                    shopName: "Huawei",
                    stockPosition: "Available",
                    shopPrice: "3050"
                }
            ]
        },
        {
            categoryName: "Similar to Apple iWatch 40mm",
            imgPath: require("../../assets/recomendedforyou/2.png"),
            title: "Smart Watch",
            description: "Huawei Watch GT active 40 MM Size",
            price: "3000",
            compare: "Compare 1 Online Shops",
            compareShops: [
                {
                    logo: require('../../assets/Mask Group 4.png'),
                    shopName: "Huawei",
                    stockPosition: "Available",
                    shopPrice: "3000"
                }
            ]
        },
        {
            categoryName: "#1 Brand in Android Phones",
            imgPath: require("../../assets/recomendedforyou/3.png"),
            title: "Men's Perfume",
            description: "Versace Dreamer Perfume for Man.",
            price: "2200",
            compare: "Compare 2 Online Shops",
            compareShops: [
                {
                    logo: require('../../assets/Mask Group 2.png'),
                    shopName: "Amazon AE",
                    stockPosition: "Available",
                    shopPrice: "3000"
                },
                {
                    logo: require('../../assets/dubizzle.png'),
                    shopName: "Dubizzle Store",
                    stockPosition: "Out Of Stock",
                    shopPrice: "2900"
                },
            ]
        },
        {
            categoryName: "#1 Brand in Android Phones",
            imgPath: require("../../assets/recomendedforyou/4.png"),
            title: "Samsung Note 10",
            description: "Samsung Galaxy S10+ 1 TB/12GB ",
            price: "2200",
            compare: "Compare 3 Online Shops",
            compareShops: [
                {
                    logo: require('../../assets/Mask Group 2.png'),
                    shopName: "Amazon AE",
                    stockPosition: "Available",
                    shopPrice: "2200"
                },
                {
                    logo: require('../../assets/Mask Group 3.png'),
                    shopName: "Samsung Store",
                    stockPosition: "Out Of Stock",
                    shopPrice: "2900"
                },
                {
                    logo: require('../../assets/Mask Group 4.png'),
                    shopName: "Huawei",
                    stockPosition: "Available",
                    shopPrice: "3050"
                }
            ]
        },
    ]

    let recomendedProductS2 = [
        {
            categoryName: "#1 in Smart Phones",
            imgPath: require("../../assets/recomendedforyou/5.png"),
            title: "iPhone X",
            description: "Apple iPhone 11 Smartphone LTE  ",
            price: "3000",
            compare: "Compare 3 Online Shops",
            compareShops: [
                {
                    logo: require('../../assets/Mask Group 2.png'),
                    shopName: "Amazon AE",
                    stockPosition: "Available",
                    shopPrice: "3000"
                },
                {
                    logo: require('../../assets/Mask Group 3.png'),
                    shopName: "Samsung Store",
                    stockPosition: "Out Of Stock",
                    shopPrice: "2900"
                },
                {
                    logo: require('../../assets/Mask Group 4.png'),
                    shopName: "Huawei",
                    stockPosition: "Available",
                    shopPrice: "3050"
                }
            ]
        },
        {
            categoryName: "Similar to Apple iWatch 40mm",
            imgPath: require("../../assets/recomendedforyou/6.png"),
            title: "Smart Watch",
            description: "Huawei Watch GT active 40 MM Size",
            price: "3000",
            compare: "Compare 1 Online Shops",
            compareShops: [
                {
                    logo: require('../../assets/Mask Group 4.png'),
                    shopName: "Huawei",
                    stockPosition: "Available",
                    shopPrice: "3000"
                }
            ]
        },
        {
            categoryName: "#1 Brand in Android Phones",
            imgPath: require("../../assets/recomendedforyou/7.png"),
            title: "Men's Perfume",
            description: "Versace Dreamer Perfume for Man.",
            price: "2200",
            compare: "Compare 2 Online Shops",
            compareShops: [
                {
                    logo: require('../../assets/Mask Group 2.png'),
                    shopName: "Amazon AE",
                    stockPosition: "Available",
                    shopPrice: "3000"
                },
                {
                    logo: require('../../assets/dubizzle.png'),
                    shopName: "Dubizzle Store",
                    stockPosition: "Out Of Stock",
                    shopPrice: "2900"
                },
            ]
        },
        {
            categoryName: "#1 Brand in Android Phones",
            imgPath: require("../../assets/recomendedforyou/8.png"),
            title: "Samsung Note 10",
            description: "Samsung Galaxy S10+ 1 TB/12GB ",
            price: "2200",
            compare: "Compare 3 Online Shops",
            compareShops: [
                {
                    logo: require('../../assets/Mask Group 2.png'),
                    shopName: "Amazon AE",
                    stockPosition: "Available",
                    shopPrice: "2200"
                },
                {
                    logo: require('../../assets/Mask Group 3.png'),
                    shopName: "Samsung Store",
                    stockPosition: "Out Of Stock",
                    shopPrice: "2900"
                },
                {
                    logo: require('../../assets/Mask Group 4.png'),
                    shopName: "Huawei",
                    stockPosition: "Available",
                    shopPrice: "3050"
                }
            ]
        },
    ]

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
                // backgroundColor: 'white',
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: '80%',
                    // minWidth: 1200,
                    minWidth: w > 415 ? 1200 : "100%",
                    // height: 820,
                    height: w > 415 ? 820 : 1250,
                    alignItems: "center",
                    // backgroundColor: '#F5EBFF',
                    backgroundColor: 'white',

                }}>
                <div
                    style={{
                        display: "flex",
                        // flex: 1,
                        flex: w > 415 ? 1 : null,
                        width: '95%',
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: 'red',
                    }}>

                    {
                        w > 415 ?
                            <>
                                <div
                                    style={{
                                        display: "flex",
                                        width: "17%",
                                        alignItems: "center",
                                        // backgroundColor: 'grey',
                                    }}>
                                    <img style={{ width: 22, marginBottom: 5 }} src={require('../../../src/assets/thumb.png')} />
                                    <div style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold", color: "#521C87" }}>
                                        Recommended For You
                                </div>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        width: "73%",
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
                            <div style={{ marginRight: "40%", marginTop: 10, fontSize: 15, fontWeight: "bold", color: "#521C87", }}>
                                Recommended For You
                           </div>

                    }

                </div>
                {
                    w > 415 ?
                        <>
                            <div
                                style={{
                                    display: "flex",
                                    width: '95%',
                                    flex: 6,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // background: "yellow"
                                }}>

                                <div style={{ display: "flex", flex: 3, height: "100%", }}>
                                    <RecomendedForYouSlider products={products} id={"recomendForyou"} />
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", flex: 6, height: "100%", }}>
                                    <div style={{ display: "flex", flex: 1, marginLeft: 20 }}>
                                        <SmallSlider products={recomendedProductS1} id={"smallSlider1"} />
                                    </div>

                                    <div style={{ display: "flex", flex: 1, marginLeft: 20 }}>
                                        <SmallSlider products={recomendedProductS2} id={"smallSlider2"} />
                                    </div>
                                </div>
                            </div>
                        </> :
                        <>
                            <div class="scrolling-wrapper2">
                                <ProductCardMobileView products={[products[0]]} pinkBackgroud={true} />
                            </div>
                            <div style={{ marginTop: 0 }} class="scrolling-wrapper2">
                                <ProductCardMobileView products={[recomendedProductS1[0]]} />
                                <ProductCardMobileView products={[recomendedProductS1[1]]} />
                                <ProductCardMobileView products={[recomendedProductS1[2]]} />
                                <ProductCardMobileView products={[recomendedProductS1[3]]} />
                            </div>
                            <div style={{ marginTop: 0 }} class="scrolling-wrapper2">
                                <ProductCardMobileView products={[recomendedProductS2[0]]} />
                                <ProductCardMobileView products={[recomendedProductS2[1]]} />
                                <ProductCardMobileView products={[recomendedProductS2[2]]} />
                                <ProductCardMobileView products={[recomendedProductS2[3]]} />
                            </div>
                        </>

                }



            </div>
        </div >
    );
};

export default RecomenderForYou;
