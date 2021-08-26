import React, { Component } from 'react';
import './index.css';

export default class RelatedArticlesCard extends Component {
    render() {
        var w = window.innerWidth;
        return (
            <div style={{
                display: "flex",
                // width: "100%",
                // justifyContent: "center",
                // alignItems: "center"
            }}>
                {
                    this.props.article.map((key, index) => {
                        // console.log(key, "inside_map_releated")
                        return (
                            < div key={index}
                                className="shadowAdd1"
                                style={{
                                    display: "flex",
                                    flex: 1,
                                    cursor: "pointer",
                                    flexDirection: "column",
                                    width: 320, height: 450,
                                    margin: w > 415 ? 30 : 10,
                                    borderRadius: 25,
                                    overflow: "hidden",
                                    // background: "white"
                                    // background: "orange"
                                }}>

                                <div style={{ display: "flex", flex: 1.5, justifyContent: "center", alignItems: "center", }}>
                                    <img style={{ width: 320, height: 200 }} src={key.imgPath} />
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", flex: 2, padding: 20, }}>

                                    <div style={{ color: "#ABABAB", textAlign: "left" }}>
                                        {key.date}
                                    </div>

                                    <div style={{ color: "#521C87", textAlign: "left", fontWeight: "bold", fontSize: 16 }}>
                                        {key.title}
                                    </div>

                                    <div style={{ color: "#000000", textAlign: "left" }}>
                                        {key.discription}
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div >
        )
    }
}