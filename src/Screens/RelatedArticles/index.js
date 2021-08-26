
import React from 'react';
import './index.css';
import "antd/dist/antd.css";
import RelatedArticlesCard from '../../components/relatedCard/index'

const RelatedArticals = () => {

    let relatedArticles = [
        {
            imgPath: require("../../assets/relatedArticles/wrist-watch-2.png"),
            date: "May 7, 2020",
            title: "Rolex launches new Watch",
            discription: "Company we save historic price information for all products sold online in UAE. This way, you can tell whether the sales or deals advertised by online shops are real or not. You can browse our price drops section to see all products with..",
        },
        {
            imgPath: require("../../assets/relatedArticles/wrist-watch-1.png"),
            date: "June 21, 2020",
            title: "New Makeup Kit",
            discription: "Company we save historic price information for all products sold online in UAE. This way, you can tell whether the sales or deals advertised by online shops are real or not. You can browse our price drops section to see all products with..",
        },
        {
            imgPath: require("../../assets/relatedArticles/wrist-watch-2159351_1920.png"),
            date: "July 3, 2020",
            title: "House Decoration",
            discription: "Company we save historic price information for all products sold online in UAE. This way, you can tell whether the sales or deals advertised by online shops are real or not. You can browse our price drops section to see all products with..",
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
                    // height: 570,
                    height: w > 415 ? 570 : 530,
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
                    }}>
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
                                    <img style={{ width: 20, }} src={require('../../../src/assets/relatedArticles/008-newspaper.png')} />
                                    <div style={{ marginLeft: 5, fontSize: 15, fontWeight: "bold", color: "#521C87" }}>
                                        Related Articles
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
                            <div style={{ marginRight: "55%", marginTop: 10, fontSize: 15, fontWeight: "bold", color: "#521C87", }}>
                                Related Articles
                            </div>
                    }
                </div>

                <div
                    class={w > 415 ? null : "scrolling-wrapper3"}
                    style={{
                        display: "flex",
                        width: '95%',
                        flex: 6,
                        justifyContent: "center",
                        alignItems: "center",
                        // background: "yellow"
                    }}>
                    <RelatedArticlesCard article={relatedArticles} />
                </div>
            </div>
        </div>
    );
};

export default RelatedArticals;
