
import React, { useEffect } from 'react';
// import './index.css';
import "antd/dist/antd.css";
import ProductsSlider from '../../components/productsSlider/index'
import ProductCardMobileView from '../../components/cards/productCardMobileView'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopularProducts } from '../../Store/action/product';

const GreatDeal = () => {
    // const dispatch = useDispatch();
    const popProduct = useSelector(({ product }) => product.popProducts);
    // useEffect(() => {
    //     fetchPopProduct(0);
    // }, [])
    // const fetchPopProduct = (productLength) => {
    //     dispatch(fetchPopularProducts(productLength));
    // }

    let products = [
        {
            categoryName: "#1 in Smart Phones",
            imgPath: require("../../assets/Great Deals Found By My Pricee/1.png"),
            title: "iPhone X",
            description: "Apple iPhone 11 Smartphone LTE with FaceTime, 128 GB, Green",
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
            categoryName: "DVD Game",
            imgPath: require("../../assets/Great Deals Found By My Pricee/asset-1.png"),
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
            categoryName: "#1 Brand in Android",
            imgPath: require("../../assets/Great Deals Found By My Pricee/Levi-s-Men-s-T-shirt-2020-Male-S-Fashion-T-Shirts-Men-S-Short-Sleeve.jpg_q50.png"),
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
            categoryName: "#1 Brand in Android",
            imgPath: require("../../assets/Great Deals Found By My Pricee/asset-2.png"),
            title: "Samsung Note 10",
            description: "Samsung Galaxy S10+ 1 TB/12GB Gradient Blue and Purple.",
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
        {
            categoryName: "#2 Brand in Computer",
            imgPath: require("../../assets/Great Deals Found By My Pricee/asset-3.png"),
            title: "Microsoft Headphones",
            description: "Microsoft JUG-00001 LifeChat LX-3000 Headset",
            price: "115.50",
            compare: "Compare 3 Online Shops",
            compareShops: [
                {
                    logo: require('../../assets/Mask Group 2.png'),
                    shopName: "Amazon AE",
                    stockPosition: "Available",
                    shopPrice: "115.50"
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
                    height: w > 415 ? 570 : 450,
                    alignItems: "center",
                    // backgroundColor: '#F5EBFF',
                    backgroundColor: 'white',
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
                                        width: "23%",
                                        alignItems: "center",
                                        // backgroundColor: 'grey',
                                    }}
                                >
                                    <img style={{ width: 20, }} src={require('../../../src/assets/Great Deals Found By My Pricee/005-price-tag.png')} />
                                    <div style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold", color: "#521C87" }}>
                                        Great Deals Found By My Pricee
                                </div>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        width: "62%",
                                        height: 1,
                                        backgroundColor: '#DEDEDE',
                                    }}
                                >
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        width: "12%",
                                        // backgroundColor: 'blue',
                                    }}
                                >
                                    <div style={{ fontSize: 15, marginLeft: 10, fontWeight: "bold", color: "#521C87" }}>
                                        View More
                                    </div>
                                    <img style={{ width: 25, marginLeft: 10, }} src={require('../../../src/assets/Group 369.png')} />
                                </div>
                            </> : <div style={{ marginRight: "25%", marginTop: 10, fontSize: 15, fontWeight: "bold", color: "#521C87", }}>
                                Great Deals Found By My Pricee
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
                            <ProductsSlider products1={popProduct} id={"greatDeal"} deal={true} />
                        </div> : <div class="scrolling-wrapper2">
                            <ProductCardMobileView products={[products[0]]} deal={true} />
                            <ProductCardMobileView products={[products[1]]} deal={true} />
                            <ProductCardMobileView products={[products[2]]} deal={true} />
                            <ProductCardMobileView products={[products[3]]} deal={true} />
                            <ProductCardMobileView products={[products[4]]} deal={true} />
                        </div>
                }

            </div>
        </div>
    );
};

export default GreatDeal;
