
import React from 'react';
import './index.css';
import "antd/dist/antd.css";
import CardSlider from '../../components/CardSlider/index'
import MainSlider from '../../components/MainSlider/index'
import Categories from '../../components/Categories/index'

const Home = () => {
    var w = window.innerWidth;
    return (
        <div
            style={{
                display: "flex",
                minWidth: w > 415 ? 1200 : "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#F7F7FA',
            }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: '80%',
                    minWidth: w > 415 ? 1200 : "100%",
                    height: w > 415 ? 570 : 650,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'white',
                }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: w > 415 ? "row" : "column",
                        height: w > 415 ? 330 : null,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <div style={{
                        display: "flex",
                        width: w > 415 ? "75%" : "100%",
                        justifyContent: "center", alignItems: "center",
                    }}>
                        <MainSlider />
                    </div>

                    {
                        w > 415 ?
                            <div style={{ display: "flex", minWidth: 270, width: '20%', marginRight: "2%", justifyContent: "center", alignItems: "center", }}>
                                <CardSlider />
                            </div> : <CardSlider />
                    }

                </div>

                <div
                    className={w > 415 ? null : "scrolling-wrapper1"}
                    style={{
                        display: "flex",
                        width: '95%',
                        marginTop: "4%",
                        justifyContent: "space-around",
                        alignItems: "flex-start",
                        // background: "yellow"
                    }}>

                    <Categories catName={"BEAUTY"} path={require('../../../src/assets/categories/852.png')} />
                    <Categories catName={"SPORTS & OUTDOORS"} path={require('../../../src/assets/categories/430730-PE668T-576.png')} />
                    <Categories catName={"FRAGRANCES"} path={require('../../../src/assets/categories/4165734.png')} />
                    <Categories catName={"BEAUTY BOUTIQUE"} path={require('../../../src/assets/categories/17785467.png')} />
                    <Categories catName={"FASHION"} path={require('../../../src/assets/categories/2010.png')} />
                    <Categories catName={"APPLIANCES"} path={require('../../../src/assets/categories/433003-PE8CL5-239.png')} />
                    <Categories catName={"HOME & KITCHEN"} path={require('../../../src/assets/categories/1424.png')} />
                    <Categories catName={"TOYS & GAMES"} path={require('../../../src/assets/categories/OP41H10.png')} />
                    <Categories catName={"BABY ESSENTIALS"} path={require('../../../src/assets/categories/417807-PD8LY9-209.png')} />
                    <Categories catName={"ELECTRONICS"} path={require('../../../src/assets/categories/Ace_Plus_Blender_182_Tif_1024x1024.png')} />
                    <Categories catName={"MOBILES"} path={require('../../../src/assets/categories/341429-PA987E-458.png')} />
                    <Categories catName={"GROCERIES"} path={require('../../../src/assets/categories/2772857.png')} />

                </div>

            </div>
        </div>
    );
};

export default Home;
