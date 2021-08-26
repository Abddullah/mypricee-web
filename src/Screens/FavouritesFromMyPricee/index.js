
import React, { useEffect } from 'react';
// import './index.css';
import "antd/dist/antd.css";
import ProductsSlider from '../../components/productsSlider/index'
import ProductCardMobileView from '../../components/cards/productCardMobileView'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopularProducts } from '../../Store/action/product';

const FavouritesFromMyPricee = () => {
    // const dispatch = useDispatch();
    const popProduct = useSelector(({ product }) => product.popProducts);
    // console.log(popProduct, "popProduct")
    // useEffect(() => {
    //     fetchPopProduct(0);
    // }, [])
    // const fetchPopProduct = (productLength) => {
    //     dispatch(fetchPopularProducts(productLength));
    // }

    let products = [
        {
            categoryName: "#1 in Smart Phones",
            imgPath: require("../../assets/FavouritesFromMyPricee/1.png"),
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
            categoryName: "Similar to Apple iWatch 40mm Space Grey",
            imgPath: require("../../assets/FavouritesFromMyPricee/asset-1.png"),
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
            imgPath: require("../../assets/FavouritesFromMyPricee/imageService.png"),
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
            imgPath: require("../../assets/FavouritesFromMyPricee/asset-2.png"),
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
            categoryName: "#2 Brand in Computer Technology",
            imgPath: require("../../assets/FavouritesFromMyPricee/asset-3.png"),
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
                    height: w > 415 ? 570 : 450,
                    alignItems: "center",
                    // backgroundColor: '#F5EBFF',
                    backgroundColor: 'white',
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
                                        width: "22%",
                                        alignItems: "center",
                                        // backgroundColor: 'grey',
                                    }}
                                >
                                    <img style={{ width: 20, }} src={require('../../../src/assets/FavouritesFromMyPricee/Path 45.png')} />
                                    <div style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold", color: "#521C87" }}>
                                        Favourites From My Pricee
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        width: "73%",
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
                            </> :
                            <div style={{ marginRight: "40%", marginTop: 10, fontSize: 15, fontWeight: "bold", color: "#521C87", }}>
                                Favourites From My Pricee
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
                            }}>
                            <ProductsSlider products1={popProduct} id={"favourite"} />
                        </div>
                        : <div class="scrolling-wrapper2">
                            <ProductCardMobileView products={[products[0]]} />
                            <ProductCardMobileView products={[products[1]]} />
                            <ProductCardMobileView products={[products[2]]} />
                            <ProductCardMobileView products={[products[3]]} />
                            <ProductCardMobileView products={[products[4]]} />
                        </div>
                }




            </div>
        </div>
    );
};

export default FavouritesFromMyPricee;
