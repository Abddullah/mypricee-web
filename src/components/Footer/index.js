import React from 'react';
// import ReactDOM from 'react-dom';
// import SearchBar from './SearchBar/index'
// import HeaderDropdown from './HeaderDropdown/index'
// import 'antd/dist/antd.css';
import { AppleFilled, TwitterOutlined, GoogleOutlined } from '@ant-design/icons';
import { FaGooglePlay, FaFacebookF } from 'react-icons/fa';
import './index.css';
import { PageHeader, List, Typography, Divider, Tag, Button, Statistic, Descriptions, Row } from 'antd';

const Footer = () => {
    var w = window.innerWidth;
    return (
        <div style={{ width: '100%', }}>
            <div
                className="backgroudImg"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: w > 415 ? 370 : 700,
                    minWidth: w > 415 ? 1200 : "100%",
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#521C87'
                    // backgroundColor: 'red'
                }}>

                {
                    w > 415 ?
                        <>
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '65%', marginTop: "3%" }}>
                                <div style={{ flexBasis: '14%' }}>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 10, fontWeight: 500 }}> ELECTRONICS </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}>Mobile Phones</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}> Tablets </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}> Smart Watches </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}> TVs </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}>Computers</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}>Cameras</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}>Gaming Consoles</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}>Home Appliances</ul>

                                </div>
                                <div style={{ flexBasis: '14%' }}>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 10, fontWeight: 500 }}> FASHION </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}>Women's Fashion</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}>Men's Fashion</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}>Girl's Fashion</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}>Boy's Fashion</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}>Watches</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}>Jewellery</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}>Women's Handbags</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, }}>Men's Eyewear</ul>

                                </div>
                                <div style={{ flexBasis: '14%' }}>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 10, fontWeight: 500 }}> HOME </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Bath </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Home Decor </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Kitchen & Dining </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Tools & Home Improvement </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Audio & Video</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Furniture</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Patio, Lawn & Garden</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Pet Supplies</ul>

                                </div>
                                <div style={{ flexBasis: '14%' }}>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 10, fontWeight: 500 }}> BEAUTY & FRAGRANCE </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Fragrance </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Make-Up </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Haircare </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Skincare </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Personal Care</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Tools & Accessories</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Men's Grooming</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Vitamins</ul>

                                </div>
                                <div style={{ flexBasis: '14%' }}>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 10, fontWeight: 500 }}> BABY & YOYS </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Baby Food </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Toys </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Baby Garments </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Diapers </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Baby Shoes</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Bibs</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Baby Strollers</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Baby Walkers</ul>

                                </div>
                                <div style={{ flexBasis: '14%' }}>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 10, fontWeight: 500 }}> GROCERY </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Pulses </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Rice </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Wheat </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}> Grains </ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Cooking Oil</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Beverages</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Dairy Products</ul>
                                    <ul style={{ color: '#fff', textAlign: 'left', fontSize: 9, fontWeight: 400 }}>Bakery and Sweets</ul>
                                </div>
                            </div>

                            <div style={{ height: '35%', display: 'flex', width: '80%', }}>

                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '33.3%', height: "100%", }} >
                                    <div style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>Mobile Apps</div>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #fff', height: 35, width: 125, borderRadius: 10, margin: 8, cursor: 'pointer' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 35 }}>
                                                <FaGooglePlay style={{ color: '#fff', fontSize: 17 }} />
                                            </div>
                                            <div style={{ display: 'flex', height: 28, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', }}>
                                                <div style={{ fontSize: 6, color: '#fff', marginBottom: -5 }}>Download on</div>
                                                <div style={{ fontSize: 14, fontWeight: 500, color: '#fff', }}>Google Play</div>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #fff', height: 35, width: 130, borderRadius: 10, margin: 8, cursor: 'pointer' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 35 }}>
                                                <AppleFilled style={{ color: '#fff', fontSize: 17 }} />
                                            </div>
                                            <div style={{ display: 'flex', height: 28, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', }}>
                                                <div style={{ fontSize: 6, color: '#fff', marginBottom: -5 }}>Download on</div>
                                                <div style={{ fontSize: 14, fontWeight: 500, color: '#fff', }}>App Store</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: "33.3%", height: "100%", }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1.5px solid #fff', height: 35, width: 180, borderRadius: 10, marginTop: "5%", cursor: 'pointer' }}>
                                        <div style={{ display: 'flex', height: 28, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', }}>
                                            <div style={{ fontSize: 14, fontWeight: 500, color: '#fff', }}>Terms And Conditions</div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', width: "33.3%", height: "100%", }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', width: 200, marginRight: "5%", }} >
                                        <div style={{ fontSize: 11, color: '#fff', fontWeight: 500 }}>
                                            Follow Us
                                        </div>
                                        <div>
                                            <TwitterOutlined style={{ color: '#fff', fontSize: 17, margin: 7, cursor: 'pointer' }} />
                                            <FaFacebookF style={{ color: '#fff', fontSize: 17, margin: 7, cursor: 'pointer', }} />
                                            <GoogleOutlined style={{ color: '#fff', fontSize: 17, margin: 7, cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div style={{
                                display: 'flex',
                                width: '90%',
                                height: 250,
                                justifyContent: "center",
                                // alignItems: "center",
                                // background: "yellow"
                            }}>
                                <div style={{ width: 150, }}>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 10, fontWeight: 500, margin: 10 }}> ELECTRONICS </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Mobile Phones</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Tablets </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Smart Watches </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> TVs </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Computers</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Cameras</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Gaming Consoles</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Home Appliances</div>
                                </div>

                                <div style={{ width: 150, }}>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 10, fontWeight: 500, margin: 10 }}> FASHION </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Women's Fashion</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Men's Fashion</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Girl's Fashion</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Boy's Fashion</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Watches</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Jewellery</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Women's Handbags</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Men's Eyewear</div>
                                </div>

                                <div style={{ width: 150, }}>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 10, fontWeight: 500, margin: 10 }}> HOME </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Bath </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Home Decor </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Kitchen & Dining </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Tools & Home Improvement </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Audio & Video</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Furniture</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Patio, Lawn & Garden</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Pet Supplies</div>
                                </div>

                            </div>

                            <div style={{
                                display: 'flex',
                                width: '90%',
                                height: 250,
                                justifyContent: "center",
                                // alignItems: "center",
                            }}>

                                <div style={{ width: 150, }}>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 10, fontWeight: 500, margin: 10 }}> BEAUTY & FRAGRANCE </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Fragrance </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Make-Up </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Haircare </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Skincare </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Personal Care</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Tools & Accessories</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Men's Grooming</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Vitamins</div>
                                </div>

                                <div style={{ width: 150, }}>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 10, fontWeight: 500, margin: 10 }}> BABY & YOYS </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Baby Food </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Toys </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Baby Garments </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Diapers </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Baby Shoes</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Bibs</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Baby Strollers</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Baby Walkers</div>
                                </div>

                                <div style={{ width: 150, }}>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 10, fontWeight: 500, margin: 10 }}> GROCERY </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Pdivses </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Rice </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Wheat </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}> Grains </div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Cooking Oil</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Beverages</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Dairy Products</div>
                                    <div style={{ color: '#fff', textAlign: 'left', fontSize: 9, margin: 10 }}>Bakery and Sweets</div>
                                </div>
                            </div>

                            <div
                                style={{
                                    height: 100,
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "90%",
                                    justifyContent: "center",
                                }}>

                                <div style={{ fontSize: 18, fontWeight: "bold", textAlign: "left", color: "white" }}>Mobile Apps</div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #fff', height: 35, width: 125, borderRadius: 10, margin: 8, cursor: 'pointer' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 35 }}>
                                            <FaGooglePlay style={{ color: '#fff', fontSize: 17 }} />
                                        </div>
                                        <div style={{ display: 'flex', height: 28, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', }}>
                                            <div style={{ fontSize: 6, color: '#fff', marginBottom: -5 }}>Download on</div>
                                            <div style={{ fontSize: 14, fontWeight: 500, color: '#fff', }}>Google Play</div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #fff', height: 35, width: 130, borderRadius: 10, margin: 8, cursor: 'pointer' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 35 }}>
                                            <AppleFilled style={{ color: '#fff', fontSize: 17 }} />
                                        </div>
                                        <div style={{ display: 'flex', height: 28, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', }}>
                                            <div style={{ fontSize: 6, color: '#fff', marginBottom: -5 }}>Download on</div>
                                            <div style={{ fontSize: 14, fontWeight: 500, color: '#fff', }}>App Store</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: "33.3%", height: "100%", }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1.5px solid #fff', height: 35, width: 180, borderRadius: 10, cursor: 'pointer' }}>
                                    <div style={{ display: 'flex', height: 28, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', }}>
                                        <div style={{ fontSize: 14, fontWeight: 500, color: '#fff', }}>Terms And Conditions</div>
                                    </div>
                                </div>
                            </div>

                            <div
                                style={{
                                    height: 50,
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "90%",
                                    justifyContent: "center",
                                    marginBottom: 20
                                    // background: "red"
                                }}>
                                <div style={{ fontSize: 18, fontWeight: "bold", textAlign: "left", color: "white" }}>Follow Us</div>
                                <div>
                                    <TwitterOutlined style={{ color: '#fff', textAlign: "left", fontSize: 17, margin: 7, cursor: 'pointer' }} />
                                    <FaFacebookF style={{ color: '#fff', textAlign: "left", fontSize: 17, margin: 7, cursor: 'pointer', }} />
                                    <GoogleOutlined style={{ color: '#fff', textAlign: "left", fontSize: 17, margin: 7, cursor: 'pointer' }} />
                                </div>
                            </div>

                        </>
                }



            </div>

            <div style={{ height: 70, backgroundColor: '#EB3A88', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                2020 mypricee. All Rights Reserved
            </div>

        </div>

    );
};


export default Footer;
