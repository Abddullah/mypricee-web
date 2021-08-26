import React, { useState } from 'react';
// import './index.css';
import SmallCard from '../../components/recomendedForYouFeatureSlider/smallCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFeatureProducts, fetchPopularProducts } from '../../Store/action/product';

const SmallSlider = (props) => {

    // const dispatch = useDispatch();
    // const [counter, setCounter] = useState({ [props.id]: [1, 1] })

    // const fetchMoreProduct = () => {
    //     // console.log('inside_feture_product', props.id, counter[props.id])
    //     let counterClone = counter
    //     counterClone[props.id].push(1)
    //     setCounter(counterClone)

    //     if (props.id === "featureProducts") {
    //         dispatch(fetchFeatureProducts(props.products.length));
    //     }
    //     if (props.id === "mostPopular") {
    //         dispatch(fetchPopularProducts(props.products.length));
    //     }
    // }

    return (
        <div id={props.id} class="carousel slide" data-interval="false" style={{ width: "100%", }}>

            <div class="carousel-inner">
                {/* {
                    counter[props.id].map((key, index) => {
                        let prod = props.products
                        let Fiveprod = prod && prod.slice(index * 4, ((index + 1) * 4))
                        // console.log(prod,"FiveprodFiveprodFiveprod",Fiveprod)
                        return (
                            <div class={index === 0 ? "carousel-item active" : "carousel-item"}>
                                <SmallCard products={Fiveprod} />
                            </div>
                        )
                    })
                } */}

                <div class="carousel-item active">
                    <SmallCard products={props.products} />
                </div>
                <div class="carousel-item">
                    <SmallCard products={props.products} />
                </div>
                <div class="carousel-item">
                    <SmallCard products={props.products} />
                </div>
            </div>

            <a class="carousel-control-prev" href={"#" + props.id} data-slide="prev" style={{ marginLeft: -40 }}>
                <div data-slide="prev" style={{ display: "flex", background: "#E5E5E5", borderRadius: 0, height: 30, width: 30, justifyContent: "center", alignItems: "center" }}>
                    <div style={{ color: "white", fontSize: 30, display: "flex", marginBottom: 5 }}>
                        &lsaquo;
                        </div>
                </div>
            </a>

            <a class="carousel-control-next" href={"#" + props.id} data-slide="next" style={{ marginRight: -40 }}
            // onClick={fetchMoreProduct}
            >
                <div data-slide="next" style={{ display: "flex", background: "#E5E5E5", borderRadius: 0, height: 30, width: 30, justifyContent: "center", alignItems: "center" }}>
                    <div style={{ color: "white", fontSize: 30, display: "flex", marginBottom: 5 }}>
                        &rsaquo;
                        </div>
                </div>
            </a>

        </div>
    )

}

export default SmallSlider;
