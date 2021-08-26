import React from "react";
import './index.css';
import 'antd/dist/antd.css';

const DropdownHeader = ({ catMenu }) => {
    console.log('cat menu', catMenu)
    return (
        <div
            style={{
                display: 'flex',
                minWidth: "100%",
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                // background: "yellow"
            }}
        >
            {
                (catMenu && catMenu.length && catMenu.length > 0) ? (
                    catMenu.map((category, index) => {
                        return (
                            <div style={{ flex: 1, color: '#fff', fontSize: 11, fontWeight: "bold", cursor: 'pointer', marginLeft: 10 }}>
                                {category.categoryName}
                            </div>
                        )
                    })
                ) : null
            }

            {/* <div style={{ flex: 1, color: '#fff', fontSize: 11, fontWeight: "bold", cursor: 'pointer', marginLeft: 10 }}>
                ELECTRONICS
            </div>
            <div style={{ flex: 1, color: '#fff', fontSize: 11, fontWeight: "bold", cursor: 'pointer', marginLeft: 10 }}>
                FASHION
            </div>
            <div style={{ flex: 1, color: '#fff', fontSize: 11, fontWeight: "bold", cursor: 'pointer', marginLeft: 0 }}>
                HOME
            </div>
            <div style={{ flex: 1.5, color: '#fff', fontSize: 11, fontWeight: "bold", cursor: 'pointer', marginLeft: 10 }}>
                BEAUTY & FRAGRANCE
            </div>
            <div style={{ flex: 1.5, color: '#fff', fontSize: 11, fontWeight: "bold", cursor: 'pointer', marginLeft: 10 }}>
                BABY & TOYS
            </div>
            <div style={{ flex: 1, color: '#fff', fontSize: 11, fontWeight: "bold", cursor: 'pointer', marginLeft: 10 }}>
                GROCERY
            </div>
            <div style={{ flex: 1, color: '#fff', fontSize: 11, fontWeight: "bold", cursor: 'pointer', marginLeft: 10 }}>
                SPORTS
            </div> */}

            {/* <ul style={{ color: '#fff', fontSize: 12, fontWeight: "bold", cursor: 'pointer' }}>ELECTRONICS</ul>
            <ul style={{ color: '#fff', fontSize: 12, fontWeight: "bold", cursor: 'pointer' }}>FASHION</ul>
            <ul style={{ color: '#fff', fontSize: 12, fontWeight: "bold", cursor: 'pointer' }}>HOME </ul>
            <ul style={{ color: '#fff', fontSize: 12, fontWeight: "bold", cursor: 'pointer' }}>BEAUTY & FRAGRANCE</ul>
            <ul style={{ color: '#fff', fontSize: 12, fontWeight: "bold", cursor: 'pointer' }}>BABY & YOYS</ul>
            <ul style={{ color: '#fff', fontSize: 12, fontWeight: "bold", cursor: 'pointer' }}>GROCERY</ul>
            <ul style={{ color: '#fff', fontSize: 12, fontWeight: "bold", cursor: 'pointer' }}>SPORTS</ul> */}
        </div>
    );
};

export default DropdownHeader;
