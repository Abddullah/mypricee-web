
import React from 'react';
import "antd/dist/antd.css";

const StoreOnMyPriceeList = () => {
    var w = window.innerWidth;
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: w > 415 ? 380 : 280,
            }}
        >
            {/* <div>
                <img style={{ width: "14%", height: 110, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo1.png')} />
                <img style={{ width: "14%", height: 110, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo2.png')} />
                <img style={{ width: "14%", height: 110, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo3.png')} />
                <img style={{ width: "14%", height: 110, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo4.png')} />
                <img style={{ width: "14%", height: 110, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo5.png')} />
                <img style={{ width: "14%", height: 110, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo6.png')} />
            </div>
            <div >
                <img style={{ width: "14%", height: 110, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo7.png')} />
                <img style={{ width: "14%", height: 110, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo8.png')} />
                <img style={{ width: "14%", height: 110, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo9.png')} />
                <img style={{ width: "14%", height: 110, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo10.png')} />
                <img style={{ width: "14%", height: 110, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo11.png')} />
                <img style={{ width: "14%", height: 110, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo12.png')} />
            </div> */}


            <div>
                <img style={{ width: w > 415 ? "14%" : "25%", height: w > 415 ? 110 : 55, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo1.png')} />
                <img style={{ width: w > 415 ? "14%" : "25%", height: w > 415 ? 110 : 55, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo2.png')} />
                <img style={{ width: w > 415 ? "14%" : "25%", height: w > 415 ? 110 : 55, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo3.png')} />
                <img style={{ width: w > 415 ? "14%" : "25%", height: w > 415 ? 110 : 55, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo4.png')} />
                <img style={{ width: w > 415 ? "14%" : "25%", height: w > 415 ? 110 : 55, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo5.png')} />
                <img style={{ width: w > 415 ? "14%" : "25%", height: w > 415 ? 110 : 55, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo6.png')} />

                <img style={{ width: w > 415 ? "14%" : "25%", height: w > 415 ? 110 : 55, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo7.png')} />
                <img style={{ width: w > 415 ? "14%" : "25%", height: w > 415 ? 110 : 55, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo8.png')} />
                <img style={{ width: w > 415 ? "14%" : "25%", height: w > 415 ? 110 : 55, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo9.png')} />
                <img style={{ width: w > 415 ? "14%" : "25%", height: w > 415 ? 110 : 55, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo10.png')} />
                <img style={{ width: w > 415 ? "14%" : "25%", height: w > 415 ? 110 : 55, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo11.png')} />
                <img style={{ width: w > 415 ? "14%" : "25%", height: w > 415 ? 110 : 55, margin: "1%", cursor: "pointer" }} src={require('../../../src/assets/storeonmypricee/logo12.png')} />
            </div>

        </div>
    );
};

export default StoreOnMyPriceeList;
