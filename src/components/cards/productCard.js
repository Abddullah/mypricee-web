
import React, { useState } from 'react';
import "antd/dist/antd.css";
import './index.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const ProductCard = ({ products1, feature, deal }) => {
    console.log(products1, "Product_cards",)
    return (
        <div style={{ display: "flex", width: "100%", flexDirection: "row", }}>
            {
                (products1 && products1 != undefined && products1.length != 0) ? (
                    <>
                        {
                            products1.map((key, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="shadowAdd1"
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            margin: "1%",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 15,
                                            height: 450,
                                            width: 250,
                                            overflow: "hidden",
                                            backgroundColor: 'white',
                                        }}>

                                        <div
                                            style={{
                                                display: "flex",
                                                // flex: 2,
                                                height: 40,
                                                width: '90%',
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                // backgroundColor: 'green',
                                            }}>

                                            {/* <div
                                    style={{
                                        border: '2px solid #888888',
                                        borderRadius: 15,
                                        padding: 5,
                                        color: "#888888",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: 8,
                                        fontWeight: "bold",
                                        // width: 150,
                                    }}>
                                    {key.categoryName}
                                </div> */}

                                            {
                                                deal ?
                                                    <div
                                                        style={{
                                                            borderRadius: 15,
                                                            padding: 5,
                                                            color: "white",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            fontSize: 8,
                                                            fontWeight: "bold",
                                                            background: "#EE3A88"
                                                            // width: 150,
                                                        }}>
                                                        50% OFF
                                        </div>
                                                    : null
                                            }

                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                height: 150,
                                                width: '90%',
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // backgroundColor: 'blue',
                                            }}>
                                            <img style={{ width: 120, height: 120 }} src={key.productImages[0]} />
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                height: 100,
                                                width: '100%',
                                                marginTop: 5,
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // backgroundColor: 'orange',
                                            }}>
                                            <div style={{
                                                display: "flex",
                                                width: "90%",
                                                // justifyContent: "center",
                                                alignItems: "center",
                                                // background: "grey"
                                            }}>
                                                {
                                                    feature ?
                                                        <>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flex: 0.25,
                                                                    justifyContent: "center",
                                                                    alignItems: "center",
                                                                    borderRadius: 15,
                                                                    border: '1px solid #521C87',
                                                                    fontSize: 12,
                                                                    fontWeight: "bold",
                                                                    color: "#888888",
                                                                    // background: "green"
                                                                }}>
                                                                Ad
                                                    </div>
                                                            {/* <div
                                                    style={{
                                                        display: "flex",
                                                        flex: 6,
                                                        marginLeft: 5,
                                                        fontSize: 12,
                                                        fontWeight: "bold",
                                                        textAlign:"left"
                                                        // background: "yellow"
                                                    }}>
                                                    {key.productTitle}
                                                </div> */}
                                                        </>
                                                        : null
                                                }
                                            </div>

                                            <div style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                flex: 3,
                                                width: "90%",
                                                marginTop: 5,
                                                fontSize: 12,
                                                fontWeight: "bold",
                                                color: "#888888",
                                                textAlign: "left"
                                                // background: "blue"
                                            }}>
                                                {key.productTitle}
                                            </div>


                                            {
                                                key.comparativeProducts.length > 1 ?
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flex: 1,
                                                            width: "90%",
                                                            fontSize: 17,
                                                            fontWeight: "bold",
                                                            color: "#521C87",
                                                            // background: "grey"
                                                        }}>
                                                        {key.productCurrentPrice}
                                                    </div> : null
                                            }

                                        </div>

                                        {
                                            key.comparativeProducts.length > 1 ?
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        width: "90%",
                                                        fontSize: 11,
                                                        fontWeight: "bold",
                                                        color: "#888888",
                                                        // background: "green"
                                                    }}>
                                                    Compare {key.comparativeProducts.length} Online Shops
                                                </div> : null
                                        }

                                        {
                                            key.comparativeProducts.length > 1 && key.comparativeProducts.map((key, index) => {
                                                return (
                                                    <div key={index}
                                                        style={{
                                                            display: "flex",
                                                            flex: 1,
                                                            width: '100%',
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                        }}>
                                                        <div style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                            <img style={{ width: 80, }} src={require('../../assets/Mask Group 2.png')} />
                                                        </div>

                                                        {/* 
                                                            <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                                                            <span style={{ fontWeight: "bold", color: "#888888", fontSize: 10 }}>
                                                             {key.shopName}
                                                            </span>
                                                            <span style={{ fontWeight: "bold", fontSize: 10 }}>
                                                            {key.stockPosition}
                                                            </span>
                                                            </div>
                                                        */}

                                                        <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                            <span style={{ fontWeight: "bold", color: "#521C87", fontSize: 10 }}>
                                                                {key.productCurrentPrice}
                                                            </span>
                                                            <div className="button" style={{ fontWeight: "bold", fontSize: 8, padding: 5, borderRadius: 15, color: "white", cursor: "pointer" }}>
                                                                Go To Shop
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                        {
                                            key.comparativeProducts.length == 1 ?
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        flex: 1,
                                                        width: '100%',
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        // backgroundColor: 'grey',
                                                    }}>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flex: 1,
                                                            width: '100%',
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            // backgroundColor: 'grey',
                                                        }}>
                                                        <div style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                                            <img style={{ width: 80, }} src={require('../../assets/Mask Group 2.png')} />
                                                        </div>

                                                        {/* <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                                                            <span style={{ fontWeight: "bold", color: "#888888", fontSize: 10 }}>
                                                             {key.compareShops[0].shopName}
                                                            </span>
                                                            <span style={{ fontWeight: "bold", fontSize: 10 }}>
                                                            {key.compareShops[0].stockPosition}
                                                            </span>
                                                            </div> 
                                                            */}
                                                    </div>

                                                    <div style={{ display: "flex", flex: 1, marginTop: "-25%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                        <span style={{ fontWeight: "bold", color: "#521C87", fontSize: 20 }}>
                                                            {key.productCurrentPrice}
                                                        </span>
                                                        <div className="button" style={{ height: 20, width: 100, fontWeight: "bold", fontSize: 12, borderRadius: 15, color: "white", cursor: "pointer" }}>
                                                            Go To Shop
                                                        </div>
                                                    </div>
                                                </div>
                                                : null
                                        }

                                    </div>
                                )
                            })

                        }
                    </>
                ) :
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <Loader
                            type="Oval"
                            color="#521C87"
                            height={80}
                            width={80}
                        />
                        <div style={{ marginTop: 20, color: "#521C87" }}>
                            Loading...
                        </div>
                    </div>
            }
        </div>
    );
};

export default ProductCard;


 // <div
                        //     key={index}
                        //     className="shadowAdd1"
                        //     style={{
                        //         display: "flex",
                        //         flexDirection: "column",
                        //         margin: "1%",
                        //         justifyContent: "center",
                        //         alignItems: "center",
                        //         borderRadius: 15,
                        //         height: 450,
                        //         width: 250,
                        //         overflow: "hidden",
                        //         backgroundColor: 'white',
                        //         // backgroundColor: 'red',

                        //     }}>
                        //     <div
                        //         style={{
                        //             display: "flex",
                        //             // flex: 2,
                        //             height: 40,
                        //             width: '90%',
                        //             alignItems: "center",
                        //             justifyContent: "space-between",
                        //             // backgroundColor: 'green',
                        //         }}
                        //     >
                        //         <div
                        //             style={{
                        //                 border: '2px solid #888888',
                        //                 borderRadius: 15,
                        //                 padding: 5,
                        //                 color: "#888888",
                        //                 justifyContent: "center",
                        //                 alignItems: "center",
                        //                 fontSize: 8,
                        //                 fontWeight: "bold",
                        //                 // width: 150,
                        //             }}>
                        //             {/* {key.categoryName} */}
                        //         </div>

                        //         {
                        //             deal ?
                        //                 <div
                        //                     style={{
                        //                         borderRadius: 15,
                        //                         padding: 5,
                        //                         color: "white",
                        //                         justifyContent: "center",
                        //                         alignItems: "center",
                        //                         fontSize: 8,
                        //                         fontWeight: "bold",
                        //                         background: "#EE3A88"
                        //                         // width: 150,
                        //                     }}
                        //                 >
                        //                     50% OFF
                        //                 </div>
                        //                 : null
                        //         }

                        //     </div>

                        //     <div
                        //         style={{
                        //             display: "flex",
                        //             height: 150,
                        //             width: '90%',
                        //             justifyContent: "center",
                        //             alignItems: "center",
                        //             // backgroundColor: 'blue',
                        //         }}
                        //     >
                        //         {/* <img style={{ width: 120, height: 120 }} src={key.imgPath} /> */}
                        //     </div>

                        //     <div
                        //         style={{
                        //             display: "flex",
                        //             flexDirection: "column",
                        //             height: 100,
                        //             width: '100%',
                        //             marginTop: 5,
                        //             justifyContent: "center",
                        //             alignItems: "center",
                        //             // backgroundColor: 'orange',
                        //         }}
                        //     >
                        //         <div style={{
                        //             display: "flex",
                        //             width: "90%",
                        //             justifyContent: "center",
                        //             alignItems: "center",
                        //             // background: "grey"
                        //         }}>
                        //             {
                        //                 feature ?
                        //                     <>
                        //                         <div
                        //                             style={{
                        //                                 display: "flex", flex: 1.5,
                        //                                 justifyContent: "center",
                        //                                 alignItems: "center",
                        //                                 borderRadius: 15,
                        //                                 border: '1px solid #521C87',
                        //                                 fontSize: 12,
                        //                                 fontWeight: "bold",
                        //                                 color: "#888888"
                        //                                 // background: "green"
                        //                             }}>
                        //                             Ad
                        //                             </div>
                        //                         <div
                        //                             style={{
                        //                                 display: "flex",
                        //                                 flex: 6,
                        //                                 marginLeft: 5,
                        //                                 fontSize: 12,
                        //                                 fontWeight: "bold",
                        //                                 // background: "yellow"
                        //                             }}>
                        //                             {/* {key.title} */}
                        //                         </div>
                        //                     </>
                        //                     : null
                        //             }
                        //         </div>

                        //         <div style={{
                        //             display: "flex",
                        //             flexDirection: "column",
                        //             flex: 3,
                        //             width: "90%",
                        //             marginTop: 5,
                        //             fontSize: 12,
                        //             fontWeight: "bold",
                        //             color: "#888888",
                        //             textAlign: "left"
                        //             // background: "blue"
                        //         }}>
                        //             {/* {key.description} */}
                        //         </div>

                        //         <div
                        //             style={{
                        //                 display: "flex",
                        //                 flex: 1,
                        //                 width: "90%",
                        //                 fontSize: 17,
                        //                 fontWeight: "bold",
                        //                 color: "#521C87",
                        //                 // background: "grey"
                        //             }}
                        //         >
                        //             {/* AED {key.price} */}
                        //         </div>

                        //     </div>

                        //     {/* {
                        //         key.compareShops.length > 1 ?
                        //             <div
                        //                 style={{
                        //                     display: "flex",
                        //                     width: "90%",
                        //                     fontSize: 11,
                        //                     fontWeight: "bold",
                        //                     color: "#888888",
                        //                     // background: "green"
                        //                 }}
                        //             >
                        //                 Compare 2 Online Shops
                        //             </div> : null
                        //     } */}


                        //     {
                        //         key.compareShops.length > 1 && key.compareShops.map((key, index) => {
                        //             // console.log(key, "nestedMap")
                        //             return (
                        //                 <div key={index}
                        //                     style={{
                        //                         display: "flex",
                        //                         flex: 1,
                        //                         width: '100%',
                        //                         justifyContent: "center",
                        //                         alignItems: "center",
                        //                         // backgroundColor: 'grey',
                        //                     }}
                        //                 >
                        //                     <div style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        //                         {/* <img style={{ width: 80, }} src={key.logo} /> */}
                        //                     </div>
                        //                     <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        //                         <span style={{ fontWeight: "bold", color: "#888888", fontSize: 10 }}>
                        //                             {/* {key.shopName} */}
                        //                         </span>
                        //                         <span style={{ fontWeight: "bold", fontSize: 10 }}>
                        //                             {/* {key.stockPosition} */}
                        //                         </span>
                        //                     </div>
                        //                     <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        //                         <span style={{ fontWeight: "bold", color: "#521C87", fontSize: 10 }}>
                        //                             {/* AED  {key.shopPrice} */}
                        //                         </span>
                        //                         <div className="button" style={{ fontWeight: "bold", fontSize: 8, padding: 5, borderRadius: 15, color: "white", cursor: "pointer" }}>
                        //                             Go To Shop
                        //                         </div>
                        //                     </div>
                        //                 </div>
                        //             )
                        //         })
                        //     }

                        //     {
                        //         key.compareShops.length == 1 ?
                        //             <div
                        //                 style={{
                        //                     display: "flex",
                        //                     flexDirection: "column",
                        //                     flex: 1,
                        //                     width: '100%',
                        //                     justifyContent: "center",
                        //                     alignItems: "center",
                        //                     // backgroundColor: 'grey',
                        //                 }}
                        //             >
                        //                 <div
                        //                     style={{
                        //                         display: "flex",
                        //                         flex: 1,
                        //                         width: '100%',
                        //                         justifyContent: "center",
                        //                         alignItems: "center",
                        //                         // backgroundColor: 'grey',
                        //                     }}
                        //                 >
                        //                     <div style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        //                         {/* <img style={{ width: 80, }} src={key.compareShops[0].logo} /> */}
                        //                     </div>

                        //                     <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        //                         <span style={{ fontWeight: "bold", color: "#888888", fontSize: 10 }}>
                        //                             {/* {key.compareShops[0].shopName} */}
                        //                         </span>
                        //                         <span style={{ fontWeight: "bold", fontSize: 10 }}>
                        //                             {/* {key.compareShops[0].stockPosition} */}
                        //                         </span>
                        //                     </div>
                        //                 </div>

                        //                 <div style={{ display: "flex", flex: 1, marginTop: "-25%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        //                     <span style={{ fontWeight: "bold", color: "#521C87", fontSize: 20 }}>
                        //                         {/* AED  {key.compareShops[0].shopPrice} */}
                        //                     </span>
                        //                     <div className="button" style={{ height: 20, width: 100, fontWeight: "bold", fontSize: 12, borderRadius: 15, color: "white", cursor: "pointer" }}>
                        //                         Go To Shop
                        //                     </div>
                        //                 </div>
                        //             </div>
                        //             : null
                        //     }

                        // </div>
