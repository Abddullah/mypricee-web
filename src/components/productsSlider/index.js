import React, { useState } from 'react';
import './index.css';
import ProductCard from '../../components/cards/productCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFeatureProducts, fetchPopularProducts } from '../../Store/action/product';


const FeatureProducts = (props) => {

    const dispatch = useDispatch();
    const [counter, setCounter] = useState({ [props.id]: [1, 1] })

    const fetchMoreProduct = () => {
        // console.log('inside_feture_product', props.id, counter[props.id])
        let counterClone = counter
        counterClone[props.id].push(1)
        setCounter(counterClone)

        if (props.id === "featureProducts") {
            dispatch(fetchFeatureProducts(props.products1.length));
        }
        if (props.id === "mostPopular") {
            dispatch(fetchPopularProducts(props.products1.length));
        }


    }

    console.log('inside_feture_product', props.id, counter[props.id])
    return (
        <div
            id={props.id}
            class="carousel slide"
            data-interval="false"
            style={{
                width: "100%",
                // background: "orange"
            }}>

            <div class="carousel-inner" >

                {
                    counter[props.id].map((key, index) => {
                        let prod = props.products1
                        let Fiveprod = prod && prod.slice(index * 5, ((index + 1) * 5))
                        // console.log(prod,"FiveprodFiveprodFiveprod",Fiveprod)
                        return (
                            <div class={index === 0 ? "carousel-item active" : "carousel-item"}>
                                <ProductCard products1={Fiveprod} feature={props.feature} deal={props.deal} />
                            </div>
                        )
                    })
                }


                {/* <div class="carousel-item active">
                    <ProductCard products1={props.products1} feature={props.feature} deal={props.deal} counter={1} />
                </div>
                <div class="carousel-item">
                    <ProductCard products1={props.products1} feature={props.feature} deal={props.deal} />
                </div>
                <div class="carousel-item">
                    <ProductCard products1={props.products1} feature={props.feature} deal={props.deal} />
                </div> */}
            </div>

            <a class="carousel-control-prev" href={"#" + props.id} data-slide="prev"
                style={{ marginLeft: -60 }}>
                <div data-slide="prev" style={{ display: "flex", background: "#E5E5E5", borderRadius: 0, height: 30, width: 30, justifyContent: "center", alignItems: "center" }}>
                    <div style={{ color: "white", fontSize: 30, display: "flex", marginBottom: 5 }}>
                        &lsaquo;
                        </div>
                </div>
            </a>

            <a class="carousel-control-next" href={"#" + props.id} data-slide="next"
                style={{ marginRight: -60 }}
                onClick={fetchMoreProduct}
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

export default FeatureProducts;
